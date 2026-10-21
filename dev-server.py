#!/usr/bin/env python3
"""Local dev server that mirrors how vercel.json routes this site.

    uv run --no-project dev-server.py          # http://localhost:8000
    uv run --no-project dev-server.py 3000     # custom port

The Vercel project root is the repository root, so both web/ (pages, css, js)
and content/ (images, framer modules) are served from there. Rewrites and
redirects from vercel.json are applied in order, exactly as on Vercel.
Stdlib only, no dependencies.
"""

import json
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlsplit

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

import re


def compile_source(src):
    """Compile a Vercel source pattern into a regex (one (.*) group supported)."""
    if "(.*)" in src:
        head, tail = src.split("(.*)", 1)
        return re.compile("^" + re.escape(head) + "(.*)" + re.escape(tail) + "$")
    return re.compile("^" + re.escape(src) + "$")


def load_config():
    path = os.path.join(ROOT, "vercel.json")
    try:
        with open(path, encoding="utf-8") as fh:
            config = json.load(fh)
    except FileNotFoundError:
        print("vercel.json not found - serving plain files")
        return [], []
    rewrites = [
        (compile_source(r["source"]), r["destination"])
        for r in config.get("rewrites", [])
    ]
    redirects = [
        (compile_source(r["source"]), r["destination"], bool(r.get("permanent")))
        for r in config.get("redirects", [])
    ]
    print(f"loaded {len(rewrites)} rewrites, {len(redirects)} redirects from vercel.json")
    return rewrites, redirects


REWRITES, REDIRECTS = load_config()


def to_disk_path(url_path):
    """Map a URL path onto the repo root, like Vercel's static file serving."""
    rel = unquote(url_path).lstrip("/")
    target = os.path.normpath(os.path.join(ROOT, rel))
    if not target.startswith(ROOT):  # path traversal guard
        return os.path.join(ROOT, "__forbidden__")
    if os.path.isfile(target):
        return target
    if os.path.isfile(target + ".html"):
        return target + ".html"
    # The footer script emits bare filenames (projects.html) on localhost,
    # assuming web/ is the document root. Fall back to it.
    in_web = os.path.join(ROOT, "web", rel)
    if os.path.isfile(in_web):
        return in_web
    if os.path.isfile(in_web + ".html"):
        return in_web + ".html"
    return target


def apply_rewrites(url_path):
    for pattern, destination in REWRITES:
        match = pattern.match(url_path)
        if not match:
            continue
        target = destination
        if match.groups():
            target = target.replace("$1", match.group(1))
        return to_disk_path(target)
    return to_disk_path(url_path)


def find_redirect(url_path):
    for pattern, destination, permanent in REDIRECTS:
        match = pattern.match(url_path)
        if match:
            target = destination
            if match.groups():
                target = target.replace("$1", match.group(1))
            return target, (308 if permanent else 307)
    return None


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        url_path = unquote(urlsplit(self.path).path)
        redirect = find_redirect(url_path)
        if redirect:
            location, status = redirect
            self.send_response(status)
            self.send_header("Location", location)
            self.send_header("Content-Length", "0")
            self.end_headers()
            self.log_message("redirect %s -> %s", status, location)
            return
        super().do_GET()

    def translate_path(self, path):
        return apply_rewrites(unquote(urlsplit(path).path))

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        # Called with varying arg counts (requests and errors).
        try:
            detail = fmt % args
        except TypeError:
            detail = fmt
        sys.stderr.write(f"  {self.command} {self.path} :: {detail}\n")


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"serving {ROOT}")
    print(f"  http://localhost:{PORT}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")

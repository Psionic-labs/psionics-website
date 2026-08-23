import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  l as s,
  o as c,
  w as l,
  y as u,
} from "./react-runtime.mjs";
import { S as d, a as f, r as p, t as m } from "./motion-runtime.mjs";
import {
  A as h,
  D as g,
  Dt as _,
  Et as v,
  H as y,
  I as b,
  P as x,
  S,
  St as C,
  U as w,
  X as T,
  _t as ee,
  a as E,
  d as D,
  ft as te,
  ht as ne,
  j as O,
  lt as k,
  o as A,
  pt as j,
  s as M,
  vt as re,
  wt as ie,
} from "./framer-runtime.mjs";
import { c as N, l as P, s as ae, u as F } from "./shared-library.mjs";
import { i as I, n as L, r as R, t as z } from "./text-style-heading.mjs";
import { n as B, t as V } from "./video-component.mjs";
import {
  a as H,
  c as oe,
  i as se,
  n as ce,
  o as le,
  r as U,
  s as W,
  t as G,
} from "./ui-component-library.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./text-style-secondary.mjs";
import { i as me, n as he, r as ge, t as _e } from "./heading-style-preset.mjs";
import { n as ve, t as ye } from "./react-component-variant-d.mjs";
import be, {
  t as xe,
} from "./route-metadata-about.mjs";
var K,
  q,
  J,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Y,
  Oe = e(() => {
    (c(),
      T(),
      m(),
      l(),
      I(),
      F(),
      (K = `framer-hguIJ`),
      (q = { GK_G6Vs_5: `framer-v-z3im2w` }),
      (J = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Se = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Ce = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e + t
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (we = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Te = d.create(r)),
      (Ee = ({ height: e, id: t, tagline: n, title: r, width: i, ...a }) => ({
        ...a,
        fY0znXa8I: n ?? a.fY0znXa8I ?? `Operational Capital Saved for Clients`,
        jqXUg3wiy: r ?? a.jqXUg3wiy ?? `$140M+`,
      })),
      (De = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = _(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = ee();
          k();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              jqXUg3wiy: b,
              fY0znXa8I: S,
              ...C
            } = Ee(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: O,
              setVariant: A,
              variants: j,
            } = v({
              defaultVariant: `GK_G6Vs_5`,
              ref: o,
              variant: y,
              variantClassNames: q,
            }),
            M = De(e, j),
            re = x(K, ae, z),
            ie = Ce(Se(b, `[ `), ` ]`);
          return a(p, {
            id: _ ?? c,
            children: a(Te, {
              animate: j,
              initial: !1,
              children: a(we, {
                value: J,
                children: s(d.div, {
                  ...C,
                  ...D,
                  className: x(re, `framer-z3im2w`, h, T),
                  "data-border": !0,
                  "data-framer-name": `Base`,
                  layoutDependency: M,
                  layoutId: `GK_G6Vs_5`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    ...m,
                  },
                  children: [
                    a(g, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.p, {
                          className: `framer-styles-preset-1i4fe7d`,
                          "data-styles-preset": `NbDFs5rgP`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                          },
                          children: `Operational Capital Saved for Clients`,
                        }),
                      }),
                      className: `framer-17naw6x`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `aaZ6G_hL1`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: S,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    a(g, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.h5, {
                          className: `framer-styles-preset-1217b5x`,
                          "data-styles-preset": `LBghXxOCz`,
                          dir: `auto`,
                          children: `[ $140M+ ]`,
                        }),
                      }),
                      className: `framer-1oiv6tz`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `EzTZIAVRT`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: ie,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hguIJ.framer-1c4bfs1, .framer-hguIJ .framer-1c4bfs1 { display: block; }`,
          `.framer-hguIJ.framer-z3im2w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: 160px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 274px; }`,
          `.framer-hguIJ .framer-17naw6x, .framer-hguIJ .framer-1oiv6tz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...N,
          ...L,
          `.framer-hguIJ[data-border="true"]::after, .framer-hguIJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-hguIJ`,
      )),
      (Y.displayName = `Company Statistics Card`),
      (Y.defaultProps = { height: 160, width: 273.5 }),
      O(Y, {
        jqXUg3wiy: {
          defaultValue: `$140M+`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        onjqXUg3wiyChange: { changes: `jqXUg3wiy`, type: M.ChangeHandler },
        fY0znXa8I: {
          defaultValue: `Operational Capital Saved for Clients`,
          displayTextArea: !0,
          title: `Tagline`,
          type: M.String,
        },
        onfY0znXa8IChange: { changes: `fY0znXa8I`, type: M.ChangeHandler },
      }),
      h(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/inter-400-cyrillic-ext.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/inter-400-cyrillic.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/inter-400-greek-ext.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/inter-400-greek.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/inter-400-latin-ext.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/inter-400-latin.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/inter-400-vietnamese.woff2`,
                weight: `400`,
              },
            ],
          },
          ...w(P),
          ...w(R),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  ke,
  Ae,
  je,
  Me,
  Ne,
  X,
  Pe,
  Fe,
  Ie,
  Z,
  Q,
  Le,
  Re,
  $,
  ze;
e(() => {
  (c(),
    T(),
    m(),
    l(),
    B(),
    oe(),
    Oe(),
    le(),
    ue(),
    F(),
    me(),
    se(),
    ve(),
    ce(),
    xe(),
    (ke = y(V)),
    (Ae = y(W)),
    (je = y(Y)),
    (Me = y(H)),
    (Ne = {
      AlI4mqGsD: `(min-width: 810px) and (max-width: 1199.98px)`,
      CaIsJf7VM: `(max-width: 809.98px)`,
      jW62C3M8S: `(min-width: 1200px)`,
    }),
    (X = []),
    (Pe = `framer-a5u2z`),
    (Fe = {
      AlI4mqGsD: `framer-v-14j2ou3`,
      CaIsJf7VM: `framer-v-33rzvb`,
      jW62C3M8S: `framer-v-1o75qfl`,
    }),
    (Ie = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `jW62C3M8S`, Phone: `CaIsJf7VM`, Tablet: `AlI4mqGsD` }),
    (Le = ({ value: e }) =>
      ne()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Re = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `jW62C3M8S`,
    })),
    ($ = _(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          m = u(),
          { activeLocale: h, setLocale: _ } = ee(),
          v = k(),
          { style: y, className: b, layoutId: w, variant: T, ...ne } = Re(e);
        re(o(() => be({}, h), [h]));
        let [O, M] = j(T, Ne, !1),
          N = x(Pe, pe, ae, _e),
          P = t(D)?.isLayoutTemplate,
          F = !!t(f)?.transition?.layout,
          I = Ie(P, F),
          L = C(`fjLeeXjVd`),
          R = n(null),
          z = C(`SxR0CVCd9`),
          B = ie();
        return (
          te({}),
          a(D.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `jW62C3M8S`,
              variantClassNames: Fe,
            },
            children: s(p, {
              id: w ?? m,
              children: [
                a(Le, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(d.div, {
                  ...ne,
                  className: x(N, `framer-1o75qfl`, b),
                  "data-selection": !0,
                  ref: l,
                  style: { ...y },
                  children: s(d.main, {
                    className: `framer-1sysic6`,
                    "data-framer-name": `Main`,
                    layout: I,
                    children: [
                      a(`div`, {
                        className: `framer-1lur5jr`,
                        children: s(`section`, {
                          className: `framer-icvn7m`,
                          "data-border": !0,
                          "data-framer-name": `Hero`,
                          children: [
                            s(`div`, {
                              className: `framer-bviqs`,
                              "data-framer-name": `Header`,
                              children: [
                                s(`div`, {
                                  className: `framer-1h4cvke`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    a(S, {
                                      breakpoint: O,
                                      overrides: {
                                        CaIsJf7VM: {
                                          children: a(r, {
                                            children: a(`h1`, {
                                              className: `framer-styles-preset-1xgagrl`,
                                              "data-styles-preset": `gfNbT0EVI`,
                                              dir: `auto`,
                                              children: `We build agents that show their work.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: a(g, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: s(`h1`, {
                                            className: `framer-styles-preset-1xgagrl`,
                                            "data-styles-preset": `gfNbT0EVI`,
                                            dir: `auto`,
                                            children: [
                                              `We build agents that `,
                                              a(`br`, {}),
                                              `show their work.`,
                                            ],
                                          }),
                                        }),
                                        className: `framer-1p4uso5`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    a(g, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-1i4fe7d`,
                                          "data-styles-preset": `NbDFs5rgP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                          },
                                          children: `Psionics was built on one premise: autonomous systems should be answerable to the people who rely on them. We don't ship agents you have to trust blindly, we ship agents you can actually check.`,
                                        }),
                                      }),
                                      className: `framer-vez7gl`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-1irm0ro`,
                                  "data-framer-name": `Actions`,
                                }),
                              ],
                            }),
                            a(E, {
                              children: a(A, {
                                className: `framer-1m68bjy-container`,
                                "data-framer-name": `About Hero Video`,
                                isModuleExternal: !0,
                                name: `About Hero Video`,
                                nodeId: `OsWSlx0So`,
                                scopeId: `TG4v3XDvb`,
                                children: a(V, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `OsWSlx0So`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `OsWSlx0So`,
                                  loop: !0,
                                  muted: !0,
                                  name: `About Hero Video`,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !1,
                                  srcFile: `/content/assets/about-page-video.mp4`,
                                  srcType: `Upload`,
                                  srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                  startTime: 0,
                                  style: { height: `100%`, width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            a(`div`, {
                              className: `framer-yck10c`,
                              "data-framer-name": `Scroll Trigger`,
                              id: L,
                              ref: R,
                            }),
                          ],
                        }),
                      }),
                      s(`section`, {
                        className: `framer-14z4pcr`,
                        "data-border": !0,
                        "data-framer-name": `Process`,
                        children: [
                          s(`div`, {
                            className: `framer-tr1k9l`,
                            "data-framer-name": `Text`,
                            children: [
                              a(g, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                    },
                                    children: `The process`,
                                  }),
                                }),
                                className: `framer-yti6is`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(g, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `How we take a manual, fragile workflow to a vertical agent you can actually explain to your team, your auditors, or your customers.`,
                                  }),
                                }),
                                className: `framer-1eoqerh`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-e9u6z3`,
                            "data-framer-name": `Micro Trust Elements`,
                            children: [
                              a(S, {
                                breakpoint: O,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y:
                                      (v?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1057.8 +
                                      50 +
                                      199.8 +
                                      0 +
                                      0,
                                  },
                                },
                                children: a(E, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y:
                                    (v?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    1117.8 +
                                    50 +
                                    0 +
                                    0,
                                  children: a(A, {
                                    className: `framer-lrx723-container`,
                                    nodeId: `jL1zCr5nq`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(W, {
                                      height: `100%`,
                                      id: `jL1zCr5nq`,
                                      layoutId: `jL1zCr5nq`,
                                      mQrslU2vj: `Agent Audit`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: U,
                                      VJBFLDEGc: `We map your current workflows and figure out where a vertical agent would genuinely help, and just as importantly, where automation would be the wrong call.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              a(S, {
                                breakpoint: O,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y:
                                      (v?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1057.8 +
                                      50 +
                                      199.8 +
                                      0 +
                                      65,
                                  },
                                },
                                children: a(E, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y:
                                    (v?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    1117.8 +
                                    50 +
                                    0 +
                                    65,
                                  children: a(A, {
                                    className: `framer-kth3u1-container`,
                                    nodeId: `NkTscGJKd`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(W, {
                                      height: `100%`,
                                      id: `NkTscGJKd`,
                                      layoutId: `NkTscGJKd`,
                                      mQrslU2vj: `Traceable Build`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: ye,
                                      VJBFLDEGc: `We build the agent with Agent Causality wired in from day one. Every decision it makes gets recorded and explainable before it ever touches production, not bolted on after something breaks.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              a(S, {
                                breakpoint: O,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y:
                                      (v?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1057.8 +
                                      50 +
                                      199.8 +
                                      0 +
                                      130,
                                  },
                                },
                                children: a(E, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y:
                                    (v?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    1117.8 +
                                    50 +
                                    0 +
                                    130,
                                  children: a(A, {
                                    className: `framer-15xfzba-container`,
                                    nodeId: `yjBRxWO_B`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(W, {
                                      height: `100%`,
                                      id: `yjBRxWO_B`,
                                      layoutId: `yjBRxWO_B`,
                                      mQrslU2vj: `Deploy & Handoff`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: G,
                                      VJBFLDEGc: `Live deployment into your infrastructure, with full documentation and training so your team understands how the agent actually thinks, not just what it outputs.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-dvl0qz`,
                        "data-border": !0,
                        "data-framer-name": `Statistics`,
                        children: [
                          a(`div`, {
                            className: `framer-ehbwy`,
                            "data-framer-name": `Text`,
                            children: a(g, {
                              __fromCanvasComponent: !0,
                              children: a(r, {
                                children: a(`h3`, {
                                  className: `framer-styles-preset-or66bk`,
                                  "data-styles-preset": `xv81tUXg1`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `The Company in Numbers`,
                                }),
                              }),
                              className: `framer-d2wym`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-se333h`,
                            children: [
                              a(`div`, {
                                className: `framer-94zhed`,
                                "data-framer-name": `Sider`,
                                children: a(`div`, {
                                  className: `framer-8rpfn0`,
                                  "data-border": !0,
                                  "data-framer-name": `Handle`,
                                }),
                              }),
                              s(`div`, {
                                className: `framer-7oksu3`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(S, {
                                    breakpoint: O,
                                    overrides: {
                                      AlI4mqGsD: { height: 160 },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1542.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(E, {
                                      height: 190,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1402.8 +
                                        50 +
                                        82.8 +
                                        0 +
                                        0 +
                                        0,
                                      children: a(A, {
                                        className: `framer-ze85oe-container`,
                                        nodeId: `M3LP3YXH2`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(S, {
                                          breakpoint: O,
                                          overrides: {
                                            AlI4mqGsD: {
                                              style: { width: `100%` },
                                            },
                                            CaIsJf7VM: {
                                              style: { width: `100%` },
                                            },
                                          },
                                          children: a(Y, {
                                            fY0znXa8I: `Vertical agents shipped`,
                                            height: `100%`,
                                            id: `M3LP3YXH2`,
                                            jqXUg3wiy: `2`,
                                            layoutId: `M3LP3YXH2`,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(S, {
                                    breakpoint: O,
                                    overrides: {
                                      AlI4mqGsD: { height: 160 },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1542.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          170,
                                      },
                                    },
                                    children: a(E, {
                                      height: 190,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1402.8 +
                                        50 +
                                        82.8 +
                                        0 +
                                        0 +
                                        0,
                                      children: a(A, {
                                        className: `framer-la0gv7-container`,
                                        nodeId: `Jt2jDzdjE`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(S, {
                                          breakpoint: O,
                                          overrides: {
                                            AlI4mqGsD: {
                                              style: { width: `100%` },
                                            },
                                            CaIsJf7VM: {
                                              style: { width: `100%` },
                                            },
                                          },
                                          children: a(Y, {
                                            fY0znXa8I: `Engineers on Team`,
                                            height: `100%`,
                                            id: `Jt2jDzdjE`,
                                            jqXUg3wiy: `3`,
                                            layoutId: `Jt2jDzdjE`,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-nz1giq`,
                                "data-framer-name": `Sider`,
                                children: a(`div`, {
                                  className: `framer-1579siv`,
                                  "data-border": !0,
                                  "data-framer-name": `Handle`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-72lipz`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: z,
                        ref: B(z),
                        children: [
                          s(`div`, {
                            className: `framer-187x5mb`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-y3ip40`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(g, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `Scale Your Infrastructure.`,
                                      }),
                                    }),
                                    className: `framer-1o0ppv4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(g, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Book a 30-minute call. We'll look at your current workflows and tell you exactly where a vertical agent, backed by causal tracing, would actually help.`,
                                      }),
                                    }),
                                    className: `framer-165pwso`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1gi2ife`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(S, {
                                    breakpoint: O,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1915.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2115.4 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1975.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        0,
                                      children: a(A, {
                                        className: `framer-ndhfyu-container`,
                                        nodeId: `oYZGpqA4v`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(W, {
                                          height: `100%`,
                                          id: `oYZGpqA4v`,
                                          layoutId: `oYZGpqA4v`,
                                          mQrslU2vj: `No aggressive sales pitches.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: U,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(S, {
                                    breakpoint: O,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1915.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2115.4 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1975.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        65,
                                      children: a(A, {
                                        className: `framer-1uvgcay-container`,
                                        nodeId: `zU4BIqhoe`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(W, {
                                          height: `100%`,
                                          id: `zU4BIqhoe`,
                                          layoutId: `zU4BIqhoe`,
                                          mQrslU2vj: `Speak directly with a lead engineer.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: ye,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(S, {
                                    breakpoint: O,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1915.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2115.4 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1975.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        130,
                                      children: a(A, {
                                        className: `framer-sja5ed-container`,
                                        nodeId: `WPhB8C6I7`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(W, {
                                          height: `100%`,
                                          id: `WPhB8C6I7`,
                                          layoutId: `WPhB8C6I7`,
                                          mQrslU2vj: `Receive a clear deployment roadmap.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: G,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a(S, {
                            breakpoint: O,
                            overrides: {
                              AlI4mqGsD: {
                                width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                y: (v?.y || 0) + 0 + 0 + 0 + 1915.6 + 50,
                              },
                              CaIsJf7VM: {
                                width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                y:
                                  (v?.y || 0) + 0 + 0 + 0 + 2115.4 + 50 + 413.8,
                              },
                            },
                            children: a(E, {
                              height: 575,
                              width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              y: (v?.y || 0) + 0 + 0 + 0 + 1975.6 + 50,
                              children: a(A, {
                                className: `framer-1i25rwa-container`,
                                nodeId: `lMc6A3rlS`,
                                scopeId: `TG4v3XDvb`,
                                children: a(H, {
                                  height: `100%`,
                                  id: `lMc6A3rlS`,
                                  layoutId: `lMc6A3rlS`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-a5u2z.framer-59bg8z, .framer-a5u2z .framer-59bg8z { display: block; }`,
        `.framer-a5u2z.framer-1o75qfl { --selection-background-color: rgba(0, 153, 255, 0.15); --selection-color: #0099FF; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-a5u2z .framer-1sysic6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1lur5jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-icvn7m { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 28px 110px 28px; position: relative; width: 1px; }`,
        `.framer-a5u2z .framer-bviqs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1h4cvke { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1p4uso5, .framer-a5u2z .framer-yti6is, .framer-a5u2z .framer-d2wym, .framer-a5u2z .framer-1o0ppv4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-a5u2z .framer-vez7gl, .framer-a5u2z .framer-165pwso { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-a5u2z .framer-1irm0ro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 31px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1m68bjy-container { flex: none; height: 666px; position: relative; width: 605px; }`,
        `.framer-a5u2z .framer-yck10c { flex: none; height: 600px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: calc(118.59063514140011% - 600px / 2); z-index: 1; }`,
        `.framer-a5u2z .framer-14z4pcr { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-tr1k9l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: sticky; top: 100px; width: 1px; z-index: 1; }`,
        `.framer-a5u2z .framer-1eoqerh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-a5u2z .framer-e9u6z3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-a5u2z .framer-lrx723-container, .framer-a5u2z .framer-kth3u1-container, .framer-a5u2z .framer-15xfzba-container, .framer-a5u2z .framer-ndhfyu-container, .framer-a5u2z .framer-1uvgcay-container, .framer-a5u2z .framer-sja5ed-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-dvl0qz { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-ehbwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-a5u2z .framer-se333h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-94zhed, .framer-a5u2z .framer-nz1giq { -webkit-user-select: none; align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; pointer-events: none; position: relative; user-select: none; width: min-content; }`,
        `.framer-a5u2z .framer-8rpfn0 { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
        `.framer-a5u2z .framer-7oksu3 { display: grid; flex: 1 0 0px; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 700px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-a5u2z .framer-ze85oe-container, .framer-a5u2z .framer-la0gv7-container { align-self: start; flex: none; height: 190px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1579siv { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 0px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
        `.framer-a5u2z .framer-72lipz { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-a5u2z .framer-187x5mb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-a5u2z .framer-y3ip40, .framer-a5u2z .framer-1gi2ife { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-a5u2z .framer-1i25rwa-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...de,
        ...N,
        ...he,
        `.framer-a5u2z[data-selection="true"] * ::selection, .framer-a5u2z [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-a5u2z[data-border="true"]::after, .framer-a5u2z [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-a5u2z.framer-1o75qfl { width: 810px; } .framer-a5u2z .framer-icvn7m, .framer-a5u2z .framer-14z4pcr, .framer-a5u2z .framer-dvl0qz, .framer-a5u2z .framer-72lipz { max-width: 780px; } .framer-a5u2z .framer-ze85oe-container, .framer-a5u2z .framer-la0gv7-container { height: auto; }}`,
        `@media (max-width: 809.98px) { .framer-a5u2z.framer-1o75qfl { width: 390px; } .framer-a5u2z .framer-1sysic6 { padding: 0px 12px 0px 12px; } .framer-a5u2z .framer-icvn7m { max-width: 600px; padding: 140px 28px 50px 28px; } .framer-a5u2z .framer-1irm0ro { min-height: 32px; } .framer-a5u2z .framer-yck10c { height: 350px; top: calc(107.31382978723407% - 350px / 2); } .framer-a5u2z .framer-14z4pcr, .framer-a5u2z .framer-72lipz { flex-direction: column; max-width: 600px; } .framer-a5u2z .framer-tr1k9l { flex: none; padding: 0px; position: relative; top: unset; width: 100%; } .framer-a5u2z .framer-e9u6z3, .framer-a5u2z .framer-187x5mb, .framer-a5u2z .framer-1i25rwa-container { flex: none; width: 100%; } .framer-a5u2z .framer-dvl0qz { max-width: 600px; } .framer-a5u2z .framer-ehbwy { padding: 0px; } .framer-a5u2z .framer-se333h { flex-direction: column; } .framer-a5u2z .framer-94zhed, .framer-a5u2z .framer-nz1giq { align-self: unset; height: 20px; padding: 0px 50px 0px 50px; width: 100%; } .framer-a5u2z .framer-8rpfn0 { --border-bottom-width: 0px; --border-right-width: 1px; flex: 1 0 0px; height: 20px; width: 1px; } .framer-a5u2z .framer-7oksu3 { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; } .framer-a5u2z .framer-ze85oe-container, .framer-a5u2z .framer-la0gv7-container { height: auto; } .framer-a5u2z .framer-1579siv { --border-left-width: 1px; --border-top-width: 0px; flex: 1 0 0px; width: 1px; }}`,
      ],
      `framer-a5u2z`,
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 3671, width: 1200 }),
    h(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/inter-400-cyrillic-ext.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/inter-400-cyrillic.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/inter-400-greek-ext.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/inter-400-greek.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/inter-400-latin-ext.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/inter-400-latin.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/inter-400-vietnamese.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ke,
        ...Ae,
        ...je,
        ...Me,
        ...w(fe),
        ...w(P),
        ...w(ge),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([b(W, {}, t), b(Y, {}, t), b(H, {}, t)])
      ),
    }),
    (ze = {
      exports: {
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `SiteTG4v3XDvb`,
          slots: [],
          annotations: {
            siteColorSyntax: `true`,
            siteAcceptsLayoutTemplate: `true`,
            siteIntrinsicHeight: `3671`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"AlI4mqGsD":{"layout":["fixed","auto"]},"CaIsJf7VM":{"layout":["fixed","auto"]}}}`,
            siteImmutableVariables: `true`,
            siteContractVersion: `1`,
            siteAutoSizeImages: `true`,
            siteComponentViewportWidth: `true`,
            siteScrollSections: `{"fjLeeXjVd":{"pattern":":fjLeeXjVd","name":"hero-scroll-trigger"},"SxR0CVCd9":{"pattern":":SxR0CVCd9","name":"Book A Call"}}`,
            siteIntrinsicWidth: `1200`,
            siteLayoutTemplateFlowEffect: `true`,
            siteDisplayContentsDiv: `false`,
            siteResponsiveScreen: `true`,
          },
        },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { ze as __SiteMetadata__, $ as default, X as queryParamNames };
//# sourceMappingURL=about-page.mjs.map

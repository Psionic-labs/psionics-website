import { t as e } from "./rolldown-runtime.mjs";
import { C as t, K as n, X as r } from "./framer-runtime.mjs";
import { n as i, t as a } from "./shared-library.mjs";
import { a as o, t as s } from "./rich-text-component.mjs";
function c(e, t) {
  let n = e?.m8uStjAdn;
  return {
    breakpoints: [
      { hash: `vg4bvm`, mediaQuery: `(min-width: 1200px)` },
      {
        hash: `1s38c6g`,
        mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
      },
      { hash: `1h4go20`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { oFYw5Ybkh: `metrics`, T5kladmpb: `Book A Call` },
    robots: `max-image-preview:large`,
    serializationId: `framer-w3A5e`,
    title: `${n === void 0 ? `{{m8uStjAdn}}` : d(n)} - Psionics`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `sXNmQkfHo`, data: s, type: `Collection` },
      select: [
        { collection: `sXNmQkfHo`, name: `m8uStjAdn`, type: `Identifier` },
      ],
      where: n(e, `sXNmQkfHo`),
    },
    o = await i.query(a, r);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `sXNmQkfHo`, data: s, type: `Collection` },
      select: [
        { collection: `sXNmQkfHo`, name: `m8uStjAdn`, type: `Identifier` },
      ],
    };
  for (let t of e)
    i.select.push({ collection: `sXNmQkfHo`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: c(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (r(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          default: {
            type: `function`,
            annotations: { siteContractVersion: `1` },
          },
          fetchAllMetadata: {
            type: `function`,
            annotations: { siteContractVersion: `1` },
          },
          fetchMetadata: {
            type: `function`,
            annotations: { siteContractVersion: `1` },
          },
          metadataVersion: {
            type: `variable`,
            annotations: { siteContractVersion: `1` },
          },
          __SiteMetadata__: { type: `variable` },
        },
      }));
  });
m();
export {
  p as __SiteMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  f as metadataVersion,
  m as t,
};
//# sourceMappingURL=case-study-data-component.mjs.map

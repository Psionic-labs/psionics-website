import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  F as n,
  O as r,
  P as i,
  _ as a,
  c as o,
  j as s,
  l as c,
  o as l,
  s as ee,
  w as u,
  y as te,
} from "./react-runtime.mjs";
import { S as d, a as f, r as p, t as m } from "./motion-runtime.mjs";
import {
  A as h,
  Ct as ne,
  D as g,
  Dt as _,
  E as v,
  Et as re,
  H as y,
  I as b,
  P as x,
  S,
  St as C,
  U as w,
  X as T,
  _t as ie,
  a as E,
  d as D,
  ft as O,
  h as k,
  ht as A,
  j,
  k as M,
  kt as ae,
  l as oe,
  lt as se,
  n as ce,
  o as N,
  pt as le,
  rt as P,
  s as F,
  tt as ue,
  u as de,
  vt as fe,
  x as I,
  xt as pe,
} from "./framer-runtime.mjs";
import { c as L, l as R, s as z, u as B } from "./shared-library.mjs";
import { n as V, t as H } from "./framer-data-utils.mjs";
import { n as U, t as W } from "./interactive-ascii-component.mjs";
import { n as me, t as G } from "./shared-query-utils.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./heading-style-preset.mjs";
import { n as ye, t as be } from "./card-component.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./text-style-body.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./react-component-variant-c.mjs";
import { r as ke, t as Ae } from "./react-component-variant-a.mjs";
import { i as je, n as Me, o as Ne } from "./collection-component.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./react-component-variant-b.mjs";
import Re, {
  t as ze,
} from "./route-metadata-career.mjs";
var Be,
  Ve,
  He,
  K,
  Ue = e(() => {
    (l(),
      T(),
      u(),
      (Be = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 41.667 0 C 64.683 0 83.333 9.325 83.333 20.833 C 83.333 32.342 64.683 41.667 41.667 41.667 C 18.658 41.667 0 32.342 0 20.833 C 0 9.325 18.658 0 41.667 0 Z M 83.333 50 C 83.333 61.508 64.683 70.833 41.667 70.833 C 18.658 70.833 0 61.508 0 50 L 0 33.333 C 0 44.842 18.658 54.167 41.667 54.167 C 64.683 54.167 83.333 44.842 83.333 33.333 Z M 83.333 79.167 C 83.333 90.675 64.683 100 41.667 100 C 18.658 100 0 90.675 0 79.167 L 0 62.5 C 0 74.008 18.658 83.333 41.667 83.333 C 64.683 83.333 83.333 74.008 83.333 62.5 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="dXvSg7_w3" transform="translate(8 0)" width="83.33333333333348px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ve = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(d.div, { ...a, layoutId: r, ref: t })
          : o(`div`, { ...a, ref: t });
      })),
      (He = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (K = _(
        a(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            kfNzCWrbt: s,
            ...c
          } = He(e);
          return o(Ve, {
            ...c,
            className: x(`framer-fWHnq`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-fWHnq { -webkit-mask: ${Be}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${Be}; width: 100px; }`,
        ],
        `framer-fWHnq`,
      )),
      (K.displayName = `Database`),
      j(K, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: F.Color,
        },
      }));
  });
function We(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  q,
  et = e(() => {
    (l(),
      T(),
      m(),
      u(),
      B(),
      Ue(),
      (Ge = [`lszJaNoMB`, `ngC3SVCD8`]),
      (Ke = `framer-5aj1V`),
      (qe = { lszJaNoMB: `framer-v-12zsmqy`, ngC3SVCD8: `framer-v-1weuanc` }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ye = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: n });
      }),
      (Xe = { Primary: `lszJaNoMB`, Secondary: `ngC3SVCD8` }),
      (Ze = d.create(i)),
      (Qe = ({ height: e, icon: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        DyAlA6USX: r ?? a.DyAlA6USX ?? `Engineering`,
        Gngi2Dq8t: t ?? a.Gngi2Dq8t ?? K,
        variant: Xe[a.variant] ?? a.variant ?? `lszJaNoMB`,
      })),
      ($e = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = _(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = te(),
            { activeLocale: l, setLocale: ee } = ie();
          se();
          let {
              style: u,
              className: f,
              layoutId: m,
              variant: h,
              DyAlA6USX: ne,
              Gngi2Dq8t: _,
              ...v
            } = Qe(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = re({
              cycleOrder: Ge,
              defaultVariant: `lszJaNoMB`,
              ref: a,
              variant: h,
              variantClassNames: qe,
            }),
            A = $e(e, O),
            j = x(Ke, z);
          return o(p, {
            id: m ?? s,
            children: o(Ze, {
              animate: O,
              initial: !1,
              children: o(Ye, {
                value: Je,
                children: c(d.div, {
                  ...v,
                  ...C,
                  className: x(j, `framer-12zsmqy`, f, b),
                  "data-framer-name": `Primary`,
                  layoutDependency: A,
                  layoutId: `lszJaNoMB`,
                  ref: a,
                  style: { ...u },
                  ...We(
                    { ngC3SVCD8: { "data-framer-name": `Secondary` } },
                    y,
                    w,
                  ),
                  children: [
                    o(d.div, {
                      className: `framer-snj524`,
                      "data-framer-name": `Icon`,
                      layoutDependency: A,
                      layoutId: `dWk2Bf5HP`,
                      children: o(k, {
                        animated: !0,
                        className: `framer-1f4m5nh`,
                        Component: _,
                        layoutDependency: A,
                        layoutId: `vFJUWKbkH`,
                        style: {
                          "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                        },
                      }),
                    }),
                    o(g, {
                      __fromCanvasComponent: !0,
                      children: o(i, {
                        children: o(d.p, {
                          className: `framer-styles-preset-1i4fe7d`,
                          "data-styles-preset": `NbDFs5rgP`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                          },
                          children: `Architect and deploy high-throughput, multi-agent pipelines and fault-tolerant middleware for enterprise clients. Replace legacy operational friction with production-grade code.`,
                        }),
                      }),
                      className: `framer-1j7otbn`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `rrdKtKUTn`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                      },
                      text: ne,
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
          `.framer-5aj1V.framer-s1ta2g, .framer-5aj1V .framer-s1ta2g { display: block; }`,
          `.framer-5aj1V.framer-12zsmqy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5aj1V .framer-snj524 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5aj1V .framer-1f4m5nh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-5aj1V .framer-1j7otbn { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-5aj1V.framer-v-1weuanc.framer-12zsmqy { align-content: flex-start; align-items: flex-start; width: 110px; }`,
          `.framer-5aj1V.framer-v-1weuanc .framer-snj524 { padding: 3px 0px 0px 0px; }`,
          `.framer-5aj1V.framer-v-1weuanc .framer-1j7otbn { flex: 1 0 0px; overflow: var(--overflow-clip-fallback, clip); white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...L,
        ],
        `framer-5aj1V`,
      )),
      (q.displayName = `Job Listing Card Tags`),
      (q.defaultProps = { height: 22.5, width: 103.5 }),
      j(q, {
        variant: {
          options: [`lszJaNoMB`, `ngC3SVCD8`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: F.Enum,
        },
        DyAlA6USX: {
          defaultValue: `Engineering`,
          title: `Title`,
          type: F.String,
        },
        onDyAlA6USXChange: { changes: `DyAlA6USX`, type: F.ChangeHandler },
        Gngi2Dq8t: {
          defaultValue: {
            identifier: `local-module:vector/lOiPM8Z7w:default`,
            moduleId: `glQvocFGkeiOgHdJpLoM`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: F.VectorSetItem,
        },
      }),
      h(
        q,
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
          ...w(R),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  Y,
  lt,
  ut,
  dt,
  ft,
  X,
  pt,
  mt,
  Z,
  ht = e(() => {
    (l(),
      T(),
      m(),
      u(),
      xe(),
      B(),
      Te(),
      ke(),
      Ee(),
      et(),
      me(),
      ye(),
      (tt = y(q)),
      (nt = y(G)),
      (rt = y(be)),
      (it = { sHCxRAiQg: { hover: !0 } }),
      (at = [`sHCxRAiQg`, `phdqszNJa`, `zFz1SRx1x`]),
      (ot = `framer-1mjyr`),
      (st = {
        phdqszNJa: `framer-v-s76pc2`,
        sHCxRAiQg: `framer-v-v1so6k`,
        zFz1SRx1x: `framer-v-cz96aa`,
      }),
      (ct = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ue(),
      (lt = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (ut = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: n });
      }),
      (dt = {
        "Empty State": `zFz1SRx1x`,
        Primary: `sHCxRAiQg`,
        Secondary: `phdqszNJa`,
      }),
      (ft = d.create(i)),
      (X = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (pt = ({
        compensation: e,
        department: t,
        height: n,
        id: r,
        jobTitle: i,
        link: a,
        location: o,
        overview: s,
        width: c,
        ...l
      }) => ({
        ...l,
        AMxs19Hom: e ?? l.AMxs19Hom ?? `$150,000 – $195,000 USD`,
        g6pdfI5rW: t ?? l.g6pdfI5rW ?? `Engineering`,
        hZbBKfkb3: a ?? l.hZbBKfkb3,
        iY4p8tHK_: i ?? l.iY4p8tHK_ ?? `Lead AI Automation Engineer`,
        LjmwbLMWp:
          s ??
          l.LjmwbLMWp ??
          `Architect and deploy high-throughput, multi-agent pipelines and fault-tolerant middleware for enterprise clients. Replace legacy operational friction with production-grade code.`,
        variant: dt[l.variant] ?? l.variant ?? `sHCxRAiQg`,
        XFCQlx9Sp: o ?? l.XFCQlx9Sp ?? `Remote`,
      })),
      (mt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Z = _(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = te(),
            { activeLocale: l, setLocale: u } = ie(),
            f = se(),
            {
              style: m,
              className: h,
              layoutId: ne,
              variant: _,
              iY4p8tHK_: v,
              LjmwbLMWp: y,
              g6pdfI5rW: b,
              ong6pdfI5rWChange: S,
              XFCQlx9Sp: C,
              onXFCQlx9SpChange: w,
              AMxs19Hom: T,
              onAMxs19HomChange: D,
              hZbBKfkb3: O,
              ...k
            } = pt(e),
            [A, j] = X(b, S),
            [ae, ce] = X(C, w),
            [N, le] = X(T, D),
            {
              baseVariant: P,
              classNames: F,
              clearLoadingGesture: ue,
              gestureHandlers: fe,
              gestureVariant: I,
              isLoading: pe,
              setGestureState: L,
              setVariant: R,
              variants: B,
            } = re({
              cycleOrder: at,
              defaultVariant: `sHCxRAiQg`,
              enabledGestures: it,
              ref: a,
              variant: _,
              variantClassNames: st,
            }),
            V = mt(e, B),
            H = x(ot, we, z),
            U = () => P !== `zFz1SRx1x`,
            W = () => P === `zFz1SRx1x`;
          return o(p, {
            id: ne ?? s,
            children: o(ft, {
              animate: B,
              initial: !1,
              children: o(ut, {
                value: ct,
                children: c(d.div, {
                  ...k,
                  ...fe,
                  className: x(H, `framer-v1so6k`, h, F),
                  "data-framer-name": `Primary`,
                  layoutDependency: V,
                  layoutId: `sHCxRAiQg`,
                  ref: a,
                  style: { backgroundColor: `rgba(247, 247, 247, 0)`, ...m },
                  variants: {
                    "sHCxRAiQg-hover": {
                      backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                    },
                  },
                  ...J(
                    {
                      "sHCxRAiQg-hover": { "data-framer-name": void 0 },
                      phdqszNJa: { "data-framer-name": `Secondary` },
                      zFz1SRx1x: { "data-framer-name": `Empty State` },
                    },
                    P,
                    I,
                  ),
                  children: [
                    c(d.div, {
                      className: `framer-ccr899`,
                      "data-framer-name": `Title & Overview`,
                      layoutDependency: V,
                      layoutId: `QFOakHVen`,
                      children: [
                        o(g, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(d.h6, {
                              className: `framer-styles-preset-c7r8r4`,
                              "data-styles-preset": `JDyypIjWz`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Lead AI Automation Engineer`,
                            }),
                          }),
                          className: `framer-1ey8o`,
                          fonts: [`Inter`],
                          layoutDependency: V,
                          layoutId: `Mmu0aEGpZ`,
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...J(
                            {
                              zFz1SRx1x: {
                                children: o(i, {
                                  children: o(d.h6, {
                                    className: `framer-styles-preset-c7r8r4`,
                                    "data-styles-preset": `JDyypIjWz`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `No jobs available.`,
                                  }),
                                }),
                                text: void 0,
                              },
                            },
                            P,
                            I,
                          ),
                        }),
                        o(g, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(d.p, {
                              className: `framer-styles-preset-1i4fe7d`,
                              "data-styles-preset": `NbDFs5rgP`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                              },
                              children: `Architect and deploy high-throughput, multi-agent pipelines and fault-tolerant middleware for enterprise clients. Replace legacy operational friction with production-grade code.`,
                            }),
                          }),
                          className: `framer-z9yai8`,
                          fonts: [`Inter`],
                          layoutDependency: V,
                          layoutId: `D4mqdGWvo`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...J(
                            {
                              zFz1SRx1x: {
                                children: o(i, {
                                  children: o(d.p, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                                    },
                                    children: `There are currently no jobs available. Subscribe here and we'll send you and future job postings`,
                                  }),
                                }),
                                text: void 0,
                              },
                            },
                            P,
                            I,
                          ),
                        }),
                      ],
                    }),
                    U() &&
                      c(d.div, {
                        className: `framer-a95bul`,
                        "data-framer-name": `Tags`,
                        layoutDependency: V,
                        layoutId: `vED7k5T8q`,
                        children: [
                          o(E, {
                            height: 22,
                            ...J(
                              {
                                phdqszNJa: {
                                  width: `calc(${f?.width || `100vw`} - 64px)`,
                                  y:
                                    (f?.y || 0) +
                                    32 +
                                    (((f?.height || 321.5) - 64 - 323) / 2 +
                                      154 +
                                      24) +
                                    0 +
                                    0,
                                },
                              },
                              P,
                              I,
                            ),
                            children: o(M, {
                              className: `framer-1fpq0a8-container`,
                              layoutDependency: V,
                              layoutId: `pJIXiXrwC-container`,
                              nodeId: `pJIXiXrwC`,
                              rendersWithMotion: !0,
                              scopeId: `w7UIx6vfW`,
                              children: o(q, {
                                DyAlA6USX: A,
                                Gngi2Dq8t: Oe,
                                height: `100%`,
                                id: `pJIXiXrwC`,
                                layoutId: `pJIXiXrwC`,
                                onDyAlA6USXChange: j,
                                variant: Y(`lszJaNoMB`),
                                width: `100%`,
                                ...J(
                                  {
                                    phdqszNJa: {
                                      style: { width: `100%` },
                                      variant: Y(`ngC3SVCD8`),
                                    },
                                  },
                                  P,
                                  I,
                                ),
                              }),
                            }),
                          }),
                          o(E, {
                            height: 22,
                            ...J(
                              {
                                phdqszNJa: {
                                  width: `calc(${f?.width || `100vw`} - 64px)`,
                                  y:
                                    (f?.y || 0) +
                                    32 +
                                    (((f?.height || 321.5) - 64 - 323) / 2 +
                                      154 +
                                      24) +
                                    0 +
                                    34,
                                },
                              },
                              P,
                              I,
                            ),
                            children: o(M, {
                              className: `framer-1650w7d-container`,
                              layoutDependency: V,
                              layoutId: `Sq_WSdT88-container`,
                              nodeId: `Sq_WSdT88`,
                              rendersWithMotion: !0,
                              scopeId: `w7UIx6vfW`,
                              children: o(q, {
                                DyAlA6USX: ae,
                                Gngi2Dq8t: De,
                                height: `100%`,
                                id: `Sq_WSdT88`,
                                layoutId: `Sq_WSdT88`,
                                onDyAlA6USXChange: ce,
                                variant: Y(`lszJaNoMB`),
                                width: `100%`,
                                ...J(
                                  {
                                    phdqszNJa: {
                                      style: { width: `100%` },
                                      variant: Y(`ngC3SVCD8`),
                                    },
                                  },
                                  P,
                                  I,
                                ),
                              }),
                            }),
                          }),
                          o(E, {
                            height: 22,
                            ...J(
                              {
                                phdqszNJa: {
                                  width: `calc(${f?.width || `100vw`} - 64px)`,
                                  y:
                                    (f?.y || 0) +
                                    32 +
                                    (((f?.height || 321.5) - 64 - 323) / 2 +
                                      154 +
                                      24) +
                                    0 +
                                    68,
                                },
                              },
                              P,
                              I,
                            ),
                            children: o(M, {
                              className: `framer-164gy4u-container`,
                              layoutDependency: V,
                              layoutId: `hsDF4Zc7Y-container`,
                              nodeId: `hsDF4Zc7Y`,
                              rendersWithMotion: !0,
                              scopeId: `w7UIx6vfW`,
                              children: o(q, {
                                DyAlA6USX: N,
                                Gngi2Dq8t: Ae,
                                height: `100%`,
                                id: `hsDF4Zc7Y`,
                                layoutId: `hsDF4Zc7Y`,
                                onDyAlA6USXChange: le,
                                variant: Y(`lszJaNoMB`),
                                width: `100%`,
                                ...J(
                                  {
                                    phdqszNJa: {
                                      style: { width: `100%` },
                                      variant: Y(`ngC3SVCD8`),
                                    },
                                  },
                                  P,
                                  I,
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    U() &&
                      o(E, {
                        height: 31,
                        ...J(
                          {
                            phdqszNJa: {
                              y:
                                (f?.y || 0) +
                                32 +
                                (((f?.height || 321.5) - 64 - 323) / 2 +
                                  244 +
                                  48),
                            },
                          },
                          P,
                          I,
                        ),
                        children: o(M, {
                          className: `framer-17897rq-container`,
                          layoutDependency: V,
                          layoutId: `NCqcDpCMe-container`,
                          nodeId: `NCqcDpCMe`,
                          rendersWithMotion: !0,
                          scopeId: `w7UIx6vfW`,
                          children: o(G, {
                            height: `100%`,
                            id: `NCqcDpCMe`,
                            JvqpmmvGw: O,
                            layoutId: `NCqcDpCMe`,
                            vA9NXfDIM: `View job`,
                            variant: Y(`kWnN_xkUt`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    W() &&
                      o(oe, {
                        action: `https://api.framer.com/forms/v1/forms/b424e8a5-9f2c-450b-b7bf-da14edcda2b9/submit`,
                        className: `framer-xdzqbq`,
                        layoutDependency: V,
                        layoutId: `sk107LoIK`,
                        nodeId: `sk107LoIK`,
                        children: (e) =>
                          c(ee, {
                            children: [
                              o(d.label, {
                                className: `framer-r3tjpg`,
                                layoutDependency: V,
                                layoutId: `QmNFZypHu`,
                                children: o(de, {
                                  className: `framer-z538t`,
                                  inputName: `Email`,
                                  layoutDependency: V,
                                  layoutId: `lBsqICdu2`,
                                  placeholder: `krutik@framer.com`,
                                  required: !0,
                                  style: {
                                    "--corner-shape-fallback": 0.796,
                                    "--framer-input-background": `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                                    "--framer-input-border-bottom-width": `1px`,
                                    "--framer-input-border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                    "--framer-input-border-left-width": `1px`,
                                    "--framer-input-border-radius-bottom-left": `calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                                    "--framer-input-border-radius-bottom-right": `calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                                    "--framer-input-border-radius-top-left": `calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                                    "--framer-input-border-radius-top-right": `calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                                    "--framer-input-border-right-width": `1px`,
                                    "--framer-input-border-style": `solid`,
                                    "--framer-input-border-top-width": `1px`,
                                    "--framer-input-corner-shape": `superellipse(1.4)`,
                                    "--framer-input-font-color": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                                    "--framer-input-icon-mask-image": `none`,
                                    "--framer-input-placeholder-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                  },
                                  type: `email`,
                                }),
                              }),
                              o(E, {
                                height: 40,
                                ...J(
                                  {
                                    zFz1SRx1x: {
                                      width: `max((min(${f?.width || `100vw`} - 88px, 350px) - 10px) / 3, 1px)`,
                                      y:
                                        (f?.y || 0) +
                                        44 +
                                        (((f?.height || 211.5) - 88 - 213) / 2 +
                                          149 +
                                          24) +
                                        0 +
                                        0,
                                    },
                                  },
                                  P,
                                  I,
                                ),
                                children: o(M, {
                                  className: `framer-1maxbdd-container`,
                                  layoutDependency: V,
                                  layoutId: `aJD8J8aWC-container`,
                                  nodeId: `aJD8J8aWC`,
                                  rendersWithMotion: !0,
                                  scopeId: `w7UIx6vfW`,
                                  children: o(be, {
                                    arpT9QFmV: `Thank you`,
                                    height: `100%`,
                                    id: `aJD8J8aWC`,
                                    layoutId: `aJD8J8aWC`,
                                    style: { height: `100%`, width: `100%` },
                                    type: `submit`,
                                    variant: lt(
                                      e,
                                      {
                                        error: `PPljyH5_r`,
                                        incomplete: `WRb6p8jNW`,
                                        pending: `UPQmYyUya`,
                                        success: `jG0My5y6_`,
                                      },
                                      Y(`rIkqgLzeQ`),
                                    ),
                                    w5DnkIBNM: `Subscribe`,
                                    width: `100%`,
                                    Z86Zq0Wki: `Something went wrong`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1mjyr.framer-123wedh, .framer-1mjyr .framer-123wedh { display: block; }`,
          `.framer-1mjyr.framer-v1so6k { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 44px; position: relative; width: 1124px; }`,
          `.framer-1mjyr .framer-ccr899 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1mjyr .framer-1ey8o, .framer-1mjyr .framer-z9yai8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1mjyr .framer-a95bul { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1mjyr .framer-1fpq0a8-container, .framer-1mjyr .framer-1650w7d-container, .framer-1mjyr .framer-164gy4u-container, .framer-1mjyr .framer-17897rq-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-1mjyr .framer-xdzqbq { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 350px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1mjyr .framer-r3tjpg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-1mjyr .framer-z538t { --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }`,
          `.framer-1mjyr .framer-1maxbdd-container { flex: 0.5 0 0px; height: 40px; position: relative; width: 1px; }`,
          `.framer-1mjyr.framer-v-s76pc2.framer-v1so6k { padding: 32px; }`,
          `.framer-1mjyr.framer-v-s76pc2 .framer-a95bul { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: nowrap; gap: 12px; }`,
          `.framer-1mjyr.framer-v-s76pc2 .framer-1fpq0a8-container, .framer-1mjyr.framer-v-s76pc2 .framer-1650w7d-container, .framer-1mjyr.framer-v-s76pc2 .framer-164gy4u-container { width: 100%; }`,
          `.framer-1mjyr.framer-v-cz96aa.framer-v1so6k { align-content: center; align-items: center; }`,
          `.framer-1mjyr.framer-v-cz96aa .framer-ccr899 { gap: 5px; }`,
          ...Se,
          ...L,
        ],
        `framer-1mjyr`,
      )),
      (Z.displayName = `Job Listing Card`),
      (Z.defaultProps = { height: 277, width: 1124 }),
      j(Z, {
        variant: {
          options: [`sHCxRAiQg`, `phdqszNJa`, `zFz1SRx1x`],
          optionTitles: [`Primary`, `Secondary`, `Empty State`],
          title: `Variant`,
          type: F.Enum,
        },
        iY4p8tHK_: {
          defaultValue: `Lead AI Automation Engineer`,
          title: `Job Title`,
          type: F.String,
        },
        oniY4p8tHK_Change: { changes: `iY4p8tHK_`, type: F.ChangeHandler },
        LjmwbLMWp: {
          defaultValue: `Architect and deploy high-throughput, multi-agent pipelines and fault-tolerant middleware for enterprise clients. Replace legacy operational friction with production-grade code.`,
          displayTextArea: !0,
          title: `Overview`,
          type: F.String,
        },
        onLjmwbLMWpChange: { changes: `LjmwbLMWp`, type: F.ChangeHandler },
        g6pdfI5rW: {
          defaultValue: `Engineering`,
          title: `Department`,
          type: F.String,
        },
        ong6pdfI5rWChange: { changes: `g6pdfI5rW`, type: F.ChangeHandler },
        XFCQlx9Sp: {
          defaultValue: `Remote`,
          title: `Location`,
          type: F.String,
        },
        onXFCQlx9SpChange: { changes: `XFCQlx9Sp`, type: F.ChangeHandler },
        AMxs19Hom: {
          defaultValue: `$150,000 – $195,000 USD`,
          title: `Compensation`,
          type: F.String,
        },
        onAMxs19HomChange: { changes: `AMxs19Hom`, type: F.ChangeHandler },
        hZbBKfkb3: { title: `Link`, type: F.Link },
      }),
      h(
        Z,
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
          ...tt,
          ...nt,
          ...rt,
          ...w(Ce),
          ...w(R),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Z.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([b(q, {}, t), b(G, {}, t), b(be, {}, t)])
        ),
      }));
  }),
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Q,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  $,
  Mt;
e(() => {
  (l(),
    T(),
    m(),
    u(),
    U(),
    me(),
    V(),
    ht(),
    Ne(),
    B(),
    Pe(),
    he(),
    ze(),
    (gt = y(G)),
    (_t = y(W)),
    (vt = ae(N)),
    (yt = y(Z)),
    (bt = y(H)),
    (xt = {
      a7_EIi6Nk: `(min-width: 1200px)`,
      Hw882AYaY: `(max-width: 809.98px)`,
      zvOsSAUDc: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (St = []),
    (Ct = `framer-wV2xq`),
    (wt = {
      a7_EIi6Nk: `framer-v-19kcmfp`,
      Hw882AYaY: `framer-v-4hjnjp`,
      zvOsSAUDc: `framer-v-awgh9q`,
    }),
    (Tt = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Et = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Dt = () => ({
      from: { alias: `uuecEcN2D`, data: Me, type: `Collection` },
      select: [
        { collection: `uuecEcN2D`, name: `pOVpIXKAs`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `JdvV5b351`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `iXCuLNPva`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `QcYzZ0Djr`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `guYfOdOQq`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `PLBkt8VbJ`, type: `Identifier` },
        { collection: `uuecEcN2D`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ot = ({ query: e, pageSize: t, children: n }) => n(pe(e))),
    (kt = { Desktop: `a7_EIi6Nk`, Phone: `Hw882AYaY`, Tablet: `zvOsSAUDc` }),
    (At = ({ value: e }) =>
      A()
        ? null
        : o(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (jt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: kt[r.variant] ?? r.variant ?? `a7_EIi6Nk`,
    })),
    ($ = _(
      a(function (e, n) {
        let a = r(null),
          l = n ?? a,
          u = te(),
          { activeLocale: m, setLocale: h } = ie(),
          _ = se(),
          { style: re, className: y, layoutId: b, variant: w, ...T } = jt(e);
        fe(s(() => Re({}, m), [m]));
        let [k, A] = le(w, xt, !1),
          j = x(Ct, Le, z, ve),
          M = t(D)?.isLayoutTemplate,
          ae = !!t(f)?.transition?.layout,
          oe = Tt(M, ae);
        ne();
        let P = C(`EK08Qvqdt`),
          F = r(null);
        return (
          O({}),
          o(D.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: kt,
              primaryVariantId: `a7_EIi6Nk`,
              variantClassNames: wt,
            },
            children: c(p, {
              id: b ?? u,
              children: [
                o(At, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                o(d.div, {
                  ...T,
                  className: x(j, `framer-19kcmfp`, y),
                  ref: l,
                  style: { ...re },
                  children: c(d.main, {
                    className: `framer-43t45j`,
                    "data-framer-name": `Main`,
                    layout: oe,
                    children: [
                      c(`section`, {
                        className: `framer-efacee`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        children: [
                          c(`div`, {
                            className: `framer-at2qnz`,
                            "data-framer-name": `Header`,
                            children: [
                              c(`div`, {
                                className: `framer-djohjo`,
                                "data-framer-name": `Text`,
                                children: [
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(`h1`, {
                                        className: `framer-styles-preset-1r2j15k`,
                                        "data-styles-preset": `RHKJWGVab`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `Join the team`,
                                      }),
                                    }),
                                    className: `framer-10v959v`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(g, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `We don't do corporate bureaucracy or open-ended meetings. We are a dense, hyper-focused engineering cell looking for elite architects`,
                                      }),
                                    }),
                                    className: `framer-feyjzu`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-7iuny6`,
                                "data-framer-name": `Actions`,
                                children: o(v, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:EK08Qvqdt`,
                                        webPageId: `JFNr7AzSy`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:EK08Qvqdt`,
                                        webPageId: `JFNr7AzSy`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:EK08Qvqdt`,
                                        webPageId: `JFNr7AzSy`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(S, {
                                      breakpoint: k,
                                      overrides: {
                                        Hw882AYaY: {
                                          y:
                                            (_?.y || 0) +
                                            160 +
                                            0 +
                                            0 +
                                            0 +
                                            140 +
                                            39.6 +
                                            0 +
                                            189.8 +
                                            0,
                                        },
                                        zvOsSAUDc: {
                                          y:
                                            (_?.y || 0) +
                                            160 +
                                            0 +
                                            0 +
                                            0 +
                                            140 +
                                            15.8723 +
                                            0 +
                                            189.8 +
                                            0,
                                        },
                                      },
                                      children: o(E, {
                                        height: 31,
                                        y:
                                          (_?.y || 0) +
                                          160 +
                                          0 +
                                          0 +
                                          0 +
                                          140 +
                                          13.6092 +
                                          0 +
                                          189.8 +
                                          0,
                                        children: o(N, {
                                          className: `framer-17j19po-container`,
                                          nodeId: `oU2xQ6oHq`,
                                          scopeId: `JFNr7AzSy`,
                                          children: o(S, {
                                            breakpoint: k,
                                            overrides: {
                                              Hw882AYaY: { JvqpmmvGw: e[2] },
                                              zvOsSAUDc: { JvqpmmvGw: e[1] },
                                            },
                                            children: o(G, {
                                              height: `100%`,
                                              id: `oU2xQ6oHq`,
                                              JvqpmmvGw: e[0],
                                              layoutId: `oU2xQ6oHq`,
                                              vA9NXfDIM: `Open Roles`,
                                              variant: Q(`kWnN_xkUt`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                          o(E, {
                            children: o(vt, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stagger: 0,
                                stiffness: 500,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 100,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-p6kot3-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `x6ubXKfAy`,
                              rendersWithMotion: !0,
                              scopeId: `JFNr7AzSy`,
                              children: o(S, {
                                breakpoint: k,
                                overrides: { Hw882AYaY: { sizing: `fill` } },
                                children: o(W, {
                                  blur: 0,
                                  brightness: 52,
                                  characterSet: `blocks`,
                                  color: {
                                    color: `var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, rgb(91, 156, 252))`,
                                    color1: `rgb(255, 255, 255)`,
                                    color1Point: 0,
                                    color2: `rgba(107, 107, 107, 0)`,
                                    color2Point: 100,
                                    mode: `color`,
                                    threshold: 50,
                                  },
                                  contrast: 0,
                                  customCharacterSet: `dgvsdgsd`,
                                  ditheringMode: `none`,
                                  font: {
                                    fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                    fontSize: `10px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  glow: { blur: 11, opacity: 1 },
                                  height: `100%`,
                                  id: `x6ubXKfAy`,
                                  image: Et(
                                    {
                                      pixelHeight: 214,
                                      pixelWidth: 287,
                                      src: `https://framerusercontent.com/images/D4bSxutpMK2tdTGLdcaWR6Kh0k.png?width=287&height=214`,
                                    },
                                    `Hand Holding Psionics Logo`,
                                  ),
                                  invertColors: !0,
                                  layoutId: `x6ubXKfAy`,
                                  outputWidth: 178,
                                  radius: `0px`,
                                  sizing: `fit`,
                                  staticEffect: { interval: 0.1, preview: !0 },
                                  style: { height: `100%`, width: `100%` },
                                  whiteMode: `ignore`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      c(`section`, {
                        className: `framer-6r1v41`,
                        "data-border": !0,
                        "data-framer-name": `Job Postings`,
                        id: P,
                        ref: F,
                        children: [
                          c(`div`, {
                            className: `framer-ouw102`,
                            "data-framer-name": `Text`,
                            children: [
                              o(g, {
                                __fromCanvasComponent: !0,
                                children: o(i, {
                                  children: o(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `Open roles`,
                                  }),
                                }),
                                className: `framer-iqs6yw`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(g, {
                                __fromCanvasComponent: !0,
                                children: o(i, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `Explore our active technical openings for engineers and developers ready to ship premium, production-grade automation infrastructure.`,
                                  }),
                                }),
                                className: `framer-10bdpzh`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-195ln2x`,
                            "data-border": !0,
                            children: o(ce, {
                              children: o(Ot, {
                                query: Dt(),
                                children: (e, t, n) =>
                                  o(ee, {
                                    children: e?.map(
                                      (
                                        {
                                          guYfOdOQq: e,
                                          id: t,
                                          iXCuLNPva: n,
                                          JdvV5b351: r,
                                          PLBkt8VbJ: i,
                                          pOVpIXKAs: a,
                                          QcYzZ0Djr: s,
                                        },
                                        l,
                                      ) => (
                                        (a ??= ``),
                                        (r ??= ``),
                                        (e ??= ``),
                                        (i ??= ``),
                                        o(
                                          p,
                                          {
                                            id: `uuecEcN2D-${t}`,
                                            children: o(I.Provider, {
                                              value: { PLBkt8VbJ: i },
                                              children: c(`div`, {
                                                className: `framer-1imtytg`,
                                                children: [
                                                  o(v, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: {
                                                            PLBkt8VbJ: i,
                                                          },
                                                          webPageId: `wUl6IQ99K`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: {
                                                            PLBkt8VbJ: i,
                                                          },
                                                          webPageId: `wUl6IQ99K`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: {
                                                            PLBkt8VbJ: i,
                                                          },
                                                          webPageId: `wUl6IQ99K`,
                                                        },
                                                        implicitPathVariables:
                                                          void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      o(S, {
                                                        breakpoint: k,
                                                        overrides: {
                                                          Hw882AYaY: {
                                                            width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              718 +
                                                              16 +
                                                              199.8 +
                                                              0 +
                                                              556 +
                                                              0 +
                                                              0,
                                                          },
                                                          zvOsSAUDc: {
                                                            width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px), 780px) - 56px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              853 +
                                                              16 +
                                                              199.8 +
                                                              0 +
                                                              556 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: o(E, {
                                                          height: 277,
                                                          width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px), 1180px) - 56px)`,
                                                          y:
                                                            (_?.y || 0) +
                                                            160 +
                                                            0 +
                                                            0 +
                                                            1176 +
                                                            16 +
                                                            199.8 +
                                                            0 +
                                                            556 +
                                                            0 +
                                                            0,
                                                          children: o(N, {
                                                            className: `framer-1lc7fts-container`,
                                                            nodeId: `BgpH9jaxL`,
                                                            scopeId: `JFNr7AzSy`,
                                                            children: o(S, {
                                                              breakpoint: k,
                                                              overrides: {
                                                                Hw882AYaY: {
                                                                  hZbBKfkb3:
                                                                    t[2],
                                                                  variant:
                                                                    Q(
                                                                      `phdqszNJa`,
                                                                    ),
                                                                },
                                                                zvOsSAUDc: {
                                                                  hZbBKfkb3:
                                                                    t[1],
                                                                },
                                                              },
                                                              children: o(Z, {
                                                                AMxs19Hom: e,
                                                                g6pdfI5rW:
                                                                  je.iXCuLNPva?.(
                                                                    n,
                                                                    m,
                                                                  ),
                                                                height: `100%`,
                                                                hZbBKfkb3: t[0],
                                                                id: `BgpH9jaxL`,
                                                                iY4p8tHK_: a,
                                                                layoutId: `BgpH9jaxL`,
                                                                LjmwbLMWp: r,
                                                                style: {
                                                                  width: `100%`,
                                                                },
                                                                variant:
                                                                  Q(
                                                                    `sHCxRAiQg`,
                                                                  ),
                                                                width: `100%`,
                                                                XFCQlx9Sp:
                                                                  je.QcYzZ0Djr?.(
                                                                    s,
                                                                    m,
                                                                  ),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                  o(S, {
                                                    breakpoint: k,
                                                    overrides: {
                                                      Hw882AYaY: {
                                                        width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                                        y:
                                                          (_?.y || 0) +
                                                          160 +
                                                          0 +
                                                          0 +
                                                          718 +
                                                          16 +
                                                          199.8 +
                                                          0 +
                                                          556 +
                                                          0 +
                                                          277,
                                                      },
                                                      zvOsSAUDc: {
                                                        width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px), 780px) - 56px)`,
                                                        y:
                                                          (_?.y || 0) +
                                                          160 +
                                                          0 +
                                                          0 +
                                                          853 +
                                                          16 +
                                                          199.8 +
                                                          0 +
                                                          556 +
                                                          0 +
                                                          277,
                                                      },
                                                    },
                                                    children: o(E, {
                                                      height: 1,
                                                      width: `calc(min(min(${_?.width || `100vw`} - 40px, 1300px), 1180px) - 56px)`,
                                                      y:
                                                        (_?.y || 0) +
                                                        160 +
                                                        0 +
                                                        0 +
                                                        1176 +
                                                        16 +
                                                        199.8 +
                                                        0 +
                                                        556 +
                                                        0 +
                                                        277,
                                                      children: o(N, {
                                                        className: `framer-tn0et9-container`,
                                                        nodeId: `BL_VNuP8Q`,
                                                        scopeId: `JFNr7AzSy`,
                                                        children: o(H, {
                                                          height: `100%`,
                                                          id: `BL_VNuP8Q`,
                                                          layoutId: `BL_VNuP8Q`,
                                                          style: {
                                                            height: `100%`,
                                                            width: `100%`,
                                                          },
                                                          variant:
                                                            Q(`uu1kgFfPS`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          t,
                                        )
                                      ),
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-wV2xq.framer-1kkgkoq, .framer-wV2xq .framer-1kkgkoq { display: block; }`,
        `.framer-wV2xq.framer-19kcmfp { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-wV2xq .framer-43t45j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-efacee { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1176px; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-at2qnz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-djohjo, .framer-wV2xq .framer-ouw102 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-10v959v, .framer-wV2xq .framer-iqs6yw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wV2xq .framer-feyjzu, .framer-wV2xq .framer-10bdpzh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wV2xq .framer-7iuny6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-17j19po-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-wV2xq .framer-p6kot3-container { flex: none; height: 76%; position: relative; width: 96%; }`,
        `.framer-wV2xq .framer-6r1v41 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 16px 28px 16px 28px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-wV2xq .framer-195ln2x { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-1imtytg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-1lc7fts-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-wV2xq .framer-tn0et9-container { flex: none; height: 1px; position: relative; width: 100%; }`,
        ...Fe,
        ...L,
        ...ge,
        `.framer-wV2xq[data-border="true"]::after, .framer-wV2xq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-wV2xq.framer-19kcmfp { width: 810px; } .framer-wV2xq .framer-efacee { height: 853px; max-width: 780px; } .framer-wV2xq .framer-p6kot3-container { height: 65%; width: 97%; } .framer-wV2xq .framer-6r1v41 { max-width: 780px; }}`,
        `@media (max-width: 809.98px) { .framer-wV2xq.framer-19kcmfp { width: 390px; } .framer-wV2xq .framer-43t45j { padding: 0px 12px 0px 12px; } .framer-wV2xq .framer-efacee { height: 718px; max-width: 600px; } .framer-wV2xq .framer-p6kot3-container { height: 278px; width: 93%; } .framer-wV2xq .framer-6r1v41 { max-width: 600px; }}`,
      ],
      `framer-wV2xq`,
    )),
    ($.displayName = `Careers`),
    ($.defaultProps = { height: 2916, width: 1200 }),
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
            {
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
        ...gt,
        ..._t,
        ...yt,
        ...bt,
        ...w(Ie),
        ...w(R),
        ...w(_e),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = P.get(Dt(), n);
        return Promise.allSettled([
          r.preload(),
          b(G, {}, t),
          b(Z, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(
              e.flatMap((e) => [b(Z, {}, t), b(H, {}, t)]),
            );
          })(),
        ]);
      },
    }),
    (Mt = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `SiteJFNr7AzSy`,
          slots: [],
          annotations: {
            siteLayoutTemplateFlowEffect: `true`,
            siteScrollSections: `{"EK08Qvqdt":{"pattern":":EK08Qvqdt","name":"jobs"}}`,
            siteResponsiveScreen: `true`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"zvOsSAUDc":{"layout":["fixed","auto"]},"Hw882AYaY":{"layout":["fixed","auto"]}}}`,
            siteColorSyntax: `true`,
            siteAutoSizeImages: `true`,
            siteComponentViewportWidth: `true`,
            siteImmutableVariables: `true`,
            siteAcceptsLayoutTemplate: `true`,
            siteContractVersion: `1`,
            siteDisplayContentsDiv: `false`,
            siteIntrinsicHeight: `2916`,
            siteIntrinsicWidth: `1200`,
          },
        },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { Mt as __SiteMetadata__, $ as default, St as queryParamNames };
//# sourceMappingURL=careers-page.mjs.map

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
  At as g,
  Ct as _,
  D as v,
  Dt as y,
  E as b,
  Et as x,
  H as S,
  I as C,
  O as w,
  P as T,
  S as E,
  St as D,
  U as O,
  W as k,
  X as A,
  _t as j,
  a as M,
  ct as ee,
  d as N,
  ft as te,
  ht as P,
  j as F,
  jt as ne,
  k as I,
  kt as L,
  lt as R,
  o as z,
  p as B,
  pt as re,
  s as V,
  vt as ie,
  wt as ae,
} from "./framer-runtime.mjs";
import { c as H, l as oe, s as se, u as ce } from "./shared-library.mjs";
import { a as le, c as ue, o as de, s as fe } from "./framer-style-utils.mjs";
import { n as pe, t as me } from "./interactive-ascii-component.mjs";
import { n as he, t as ge } from "./video-component.mjs";
import { i as _e, n as ve, r as ye, t as U } from "./framer-visual-components.mjs";
import {
  a as be,
  c as xe,
  i as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
} from "./ui-component-library.mjs";
import { n as Oe, t as ke } from "./shared-query-utils.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./text-style-secondary.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./heading-style-preset.mjs";
import { n as Re, t as ze } from "./react-component-variant-d.mjs";
import Be, {
  t as Ve,
} from "./route-metadata-home.mjs";
function He(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  W,
  $e = e(() => {
    (c(),
      A(),
      m(),
      l(),
      ce(),
      (Ue = [`c1zN2Q_tk`, `U667MgtoG`]),
      (We = `framer-5YpTP`),
      (Ge = { c1zN2Q_tk: `framer-v-1ixu5zt`, U667MgtoG: `framer-v-1pc7j1c` }),
      (Ke = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qe = (e, t) => `translateX(-50%) ${t}`),
      (Je = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Ye = { Blur: `c1zN2Q_tk`, Visible: `U667MgtoG` }),
      (Xe = d.create(r)),
      (Ze = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        tmWVwMCTj: n ?? i.tmWVwMCTj ?? `The AI`,
        variant: Ye[i.variant] ?? i.variant ?? `c1zN2Q_tk`,
      })),
      (Qe = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (W = y(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = j();
          R();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              tmWVwMCTj: y,
              ...b
            } = Ze(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: M,
              variants: ee,
            } = x({
              cycleOrder: Ue,
              defaultVariant: `c1zN2Q_tk`,
              ref: o,
              variant: _,
              variantClassNames: Ge,
            }),
            N = Qe(e, ee),
            te = T(We, se);
          return a(p, {
            id: g ?? c,
            children: a(Xe, {
              animate: ee,
              initial: !1,
              children: a(Je, {
                value: Ke,
                children: s(d.div, {
                  ...b,
                  ...D,
                  className: T(te, `framer-1ixu5zt`, h, C),
                  "data-framer-name": `Blur`,
                  layoutDependency: N,
                  layoutId: `c1zN2Q_tk`,
                  ref: o,
                  style: {
                    filter: `blur(5px)`,
                    WebkitFilter: `blur(5px)`,
                    ...m,
                  },
                  variants: {
                    U667MgtoG: {
                      filter: `blur(0px)`,
                      WebkitFilter: `blur(0px)`,
                    },
                  },
                  ...He({ U667MgtoG: { "data-framer-name": `Visible` } }, S, O),
                  children: [
                    a(d.div, {
                      className: `framer-a1wpds`,
                      layoutDependency: N,
                      layoutId: `FgrOgfo9z`,
                      style: {
                        backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                      },
                      transformTemplate: qe,
                    }),
                    a(w, {
                      className: `framer-9ro4jv`,
                      layoutDependency: N,
                      layoutId: `ag8KYWboZ`,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 49.5" overflow="visible"><path d="M 0 0 L 0 49.5" fill="transparent" stroke="rgb(0, 0, 0)"></path></svg>`,
                      withExternalLayout: !0,
                    }),
                    a(v, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.p, {
                          className: `framer-styles-preset-1i4fe7d`,
                          "data-styles-preset": `NbDFs5rgP`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                          },
                          children: `The AI`,
                        }),
                      }),
                      className: `framer-icnkjo`,
                      fonts: [`Inter`],
                      layoutDependency: N,
                      layoutId: `bzqkX7Zbl`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: y,
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
          `.framer-5YpTP.framer-1owq0i9, .framer-5YpTP .framer-1owq0i9 { display: block; }`,
          `.framer-5YpTP.framer-1ixu5zt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5YpTP .framer-a1wpds { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -6px; width: 12px; z-index: 1; }`,
          `.framer-5YpTP .framer-9ro4jv { height: 50px; position: relative; width: 1px; }`,
          `.framer-5YpTP .framer-icnkjo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...H,
        ],
        `framer-5YpTP`,
      )),
      (W.displayName = `Tag Tooltip`),
      (W.defaultProps = { height: 72, width: 40.5 }),
      F(W, {
        variant: {
          options: [`c1zN2Q_tk`, `U667MgtoG`],
          optionTitles: [`Blur`, `Visible`],
          title: `Variant`,
          type: V.Enum,
        },
        tmWVwMCTj: {
          defaultValue: `The AI`,
          displayTextArea: !1,
          title: `Title`,
          type: V.String,
        },
        ontmWVwMCTjChange: { changes: `tmWVwMCTj`, type: V.ChangeHandler },
      }),
      h(
        W,
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
          ...O(oe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  et,
  tt,
  nt,
  rt,
  it = e(() => {
    (c(),
      A(),
      l(),
      (et = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="NbCppSMkD" transform="translate(0 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="KNGYTKvj9" transform="translate(53 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="ibyOuE7RU" transform="translate(53 53)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="lgucX5Cuu" transform="translate(0 53)" width="47px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (tt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(d.div, { ...o, layoutId: r, ref: t })
          : a(`div`, { ...o, ref: t });
      })),
      (nt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (rt = y(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, ...s } = nt(e);
          return a(tt, {
            ...s,
            className: T(`framer-Wrudj`, r),
            layoutId: i,
            ref: t,
            style: { ...n },
          });
        }),
        [
          `.framer-Wrudj { -webkit-mask: ${et}; aspect-ratio: 1; background-color: var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, #ffffff); mask: ${et}; width: 100px; }`,
        ],
        `framer-Wrudj`,
      )),
      (rt.displayName = `Logo White`));
  });
function at(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  G,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  K,
  yt = e(() => {
    (c(),
      A(),
      m(),
      l(),
      ue(),
      it(),
      ve(),
      (ot = S(U)),
      (st = S(rt)),
      (ct = [`Rz3JuSc6N`, `yKTU0IAET`, `YQHffT1iJ`]),
      (lt = `framer-TLtoC`),
      (ut = {
        Rz3JuSc6N: `framer-v-1wqdaha`,
        yKTU0IAET: `framer-v-4ukvs`,
        YQHffT1iJ: `framer-v-oxg8u`,
      }),
      (dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = (e, t) => `translate(-50%, -50%) ${t}`),
      (ft = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pt = (e, t) => `translateY(-50%) ${t}`),
      (mt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (ht = {
        "Bottom Small": `YQHffT1iJ`,
        "Small Top": `yKTU0IAET`,
        Large: `Rz3JuSc6N`,
      }),
      (gt = d.create(r)),
      (_t = ({
        financialRiskSystems: e,
        financialRiskSystems2: t,
        height: n,
        id: r,
        title3: i,
        title4: a,
        width: o,
        ...s
      }) => ({
        ...s,
        knFpBuDfo: t ?? s.knFpBuDfo ?? `Customer Support Agents`,
        ky6f7sFMK: a ?? s.ky6f7sFMK ?? `Strategic AI Infra Audits`,
        toKKbHeGB: e ?? s.toKKbHeGB ?? `Automated Data Pipelines`,
        variant: ht[s.variant] ?? s.variant ?? `Rz3JuSc6N`,
        WwMLgqbB0: i ?? s.WwMLgqbB0 ?? `Secure Enterprise Data`,
      })),
      (vt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = y(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = j(),
            m = R(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: y,
              knFpBuDfo: b,
              toKKbHeGB: S,
              WwMLgqbB0: C,
              ky6f7sFMK: w,
              ...E
            } = _t(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: N,
              isLoading: te,
              setGestureState: P,
              setVariant: F,
              variants: ne,
            } = x({
              cycleOrder: ct,
              defaultVariant: `Rz3JuSc6N`,
              ref: o,
              variant: y,
              variantClassNames: ut,
            }),
            L = vt(e, ne),
            { activeVariantCallback: z, delay: B } = ee(D),
            re = z(async (...e) => {
              F(`Rz3JuSc6N`);
            }),
            V = T(lt, le),
            ie = () => ![`yKTU0IAET`, `YQHffT1iJ`].includes(D),
            ae = () => D !== `yKTU0IAET`,
            H = () => D !== `YQHffT1iJ`;
          return a(p, {
            id: _ ?? c,
            children: a(gt, {
              animate: ne,
              initial: !1,
              children: a(mt, {
                value: dt,
                children: s(d.div, {
                  ...E,
                  ...A,
                  className: T(V, `framer-1wqdaha`, g, O),
                  "data-framer-name": `Large`,
                  layoutDependency: L,
                  layoutId: `Rz3JuSc6N`,
                  ref: o,
                  style: { ...h },
                  ...at(
                    {
                      yKTU0IAET: { "data-framer-name": `Small Top` },
                      YQHffT1iJ: { "data-framer-name": `Bottom Small` },
                    },
                    D,
                    N,
                  ),
                  children: [
                    a(d.div, {
                      className: `framer-1m24cko`,
                      "data-framer-name": `Main Line`,
                      layoutDependency: L,
                      layoutId: `e8unk_R7j`,
                      style: {
                        backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                      },
                      children:
                        ie() &&
                        a(M, {
                          height: 25,
                          y:
                            (m?.y || 0) +
                            (0 + ((m?.height || 350) - 0 - 3) / 2) +
                            -11.5,
                          children: a(I, {
                            className: `framer-d1bxhl-container`,
                            layoutDependency: L,
                            layoutId: `O4zYtiF3h-container`,
                            nodeId: `O4zYtiF3h`,
                            rendersWithMotion: !0,
                            scopeId: `iCGEjOfWg`,
                            transformTemplate: G,
                            children: a(U, {
                              height: `100%`,
                              id: `O4zYtiF3h`,
                              KPDdVnbJ9: `Agent Casuality`,
                              layoutId: `O4zYtiF3h`,
                              nHzYRdzoI: !0,
                              variant: ft(`wjdnMwXds`),
                              width: `100%`,
                            }),
                          }),
                        }),
                    }),
                    s(d.div, {
                      className: `framer-1ych1ut`,
                      "data-framer-name": `Main Node`,
                      layoutDependency: L,
                      layoutId: `tF4_6Vcs2`,
                      style: {
                        backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                      },
                      children: [
                        ae() &&
                          a(d.div, {
                            className: `framer-juils0`,
                            "data-framer-name": `Solution 4`,
                            layoutDependency: L,
                            layoutId: `c6MQKJqGX`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: 28,
                            },
                            variants: { YQHffT1iJ: { rotate: -100 } },
                            children: a(d.div, {
                              className: `framer-4c4946`,
                              "data-framer-name": `Node`,
                              layoutDependency: L,
                              layoutId: `YFbBZoLW3`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: -28,
                              },
                              transformTemplate: G,
                              variants: { YQHffT1iJ: { rotate: 100 } },
                              children: a(d.div, {
                                className: `framer-1ofpln5`,
                                "data-framer-name": `Title`,
                                layoutDependency: L,
                                layoutId: `wPGe1KnBk`,
                                transformTemplate: pt,
                                children: a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Strategic AI Infra Audits`,
                                    }),
                                  }),
                                  className: `framer-nx0ndo`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `VmtSGAjYG`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: w,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        ae() &&
                          a(d.div, {
                            className: `framer-oj3cfr`,
                            "data-framer-name": `Solution 3`,
                            layoutDependency: L,
                            layoutId: `fJnHDUGqG`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: 8,
                            },
                            variants: { YQHffT1iJ: { rotate: -66 } },
                            children: a(d.div, {
                              className: `framer-111datn`,
                              "data-framer-name": `Node`,
                              layoutDependency: L,
                              layoutId: `YXjd3DOo4`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: -8,
                              },
                              transformTemplate: G,
                              variants: { YQHffT1iJ: { rotate: 66 } },
                              children: a(d.div, {
                                className: `framer-1tui858`,
                                "data-framer-name": `Title`,
                                layoutDependency: L,
                                layoutId: `BAHEpN6fB`,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                transformTemplate: pt,
                                variants: {
                                  YQHffT1iJ: {
                                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                                  },
                                },
                                children: a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Secure Enterprise Data`,
                                    }),
                                  }),
                                  className: `framer-1h4lt2b`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `LuWG07vdZ`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: C,
                                  variants: {
                                    YQHffT1iJ: {
                                      "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...at(
                                    {
                                      YQHffT1iJ: {
                                        children: a(r, {
                                          children: a(d.p, {
                                            className: `framer-styles-preset-79bu04`,
                                            "data-styles-preset": `GMp6ZDbq7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                                            },
                                            children: `Secure Enterprise Data`,
                                          }),
                                        }),
                                      },
                                    },
                                    D,
                                    N,
                                  ),
                                }),
                              }),
                            }),
                          }),
                        H() &&
                          a(d.div, {
                            className: `framer-dvw2m9`,
                            "data-framer-name": `Solution 2`,
                            layoutDependency: L,
                            layoutId: `ucD7MzuEt`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: -15,
                            },
                            variants: { yKTU0IAET: { rotate: 78 } },
                            children: a(d.div, {
                              className: `framer-1h8j49`,
                              "data-framer-name": `Node`,
                              layoutDependency: L,
                              layoutId: `C56zXNsZY`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: 15,
                              },
                              transformTemplate: G,
                              variants: { yKTU0IAET: { rotate: -78 } },
                              children: a(d.div, {
                                className: `framer-1iy06gi`,
                                "data-framer-name": `Title`,
                                layoutDependency: L,
                                layoutId: `Vyvyx7G1h`,
                                transformTemplate: pt,
                                children: a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Automated Data Pipelines`,
                                    }),
                                  }),
                                  className: `framer-guvgo5`,
                                  "data-highlight": !0,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `MBq117OwJ`,
                                  onTap: re,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        H() &&
                          a(d.div, {
                            className: `framer-1xc4610`,
                            "data-framer-name": `Solution 1`,
                            layoutDependency: L,
                            layoutId: `BYq8IjiAh`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: -47,
                            },
                            variants: { yKTU0IAET: { rotate: 103 } },
                            children: a(d.div, {
                              className: `framer-y3rua8`,
                              "data-framer-name": `Node`,
                              layoutDependency: L,
                              layoutId: `E9SwHdmNh`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: 47,
                              },
                              transformTemplate: G,
                              variants: { yKTU0IAET: { rotate: -103 } },
                              children: a(d.div, {
                                className: `framer-q0ys8`,
                                "data-framer-name": `Title`,
                                layoutDependency: L,
                                layoutId: `B__MKx_aA`,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                transformTemplate: pt,
                                variants: {
                                  yKTU0IAET: {
                                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                                  },
                                },
                                children: a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Customer Support Agents`,
                                    }),
                                  }),
                                  className: `framer-ukvj3u`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `iib1kgyLt`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: b,
                                  variants: {
                                    yKTU0IAET: {
                                      "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...at(
                                    {
                                      yKTU0IAET: {
                                        children: a(r, {
                                          children: a(d.p, {
                                            className: `framer-styles-preset-79bu04`,
                                            "data-styles-preset": `GMp6ZDbq7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                                            },
                                            children: `Customer Support Agents`,
                                          }),
                                        }),
                                      },
                                    },
                                    D,
                                    N,
                                  ),
                                }),
                              }),
                            }),
                          }),
                        a(rt, {
                          animated: !0,
                          className: `framer-15s0dkn`,
                          layoutDependency: L,
                          layoutId: `GXNsWYI0N`,
                          transformTemplate: G,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-TLtoC.framer-173vdt, .framer-TLtoC .framer-173vdt { display: block; }`,
          `.framer-TLtoC.framer-1wqdaha { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 350px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1180px; }`,
          `.framer-TLtoC .framer-1m24cko { flex: none; height: 3px; overflow: visible; position: relative; width: 40%; }`,
          `.framer-TLtoC .framer-d1bxhl-container { flex: none; height: auto; left: 50%; position: absolute; top: 33%; width: auto; }`,
          `.framer-TLtoC .framer-1ych1ut { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 32px; }`,
          `.framer-TLtoC .framer-juils0 { flex: none; height: 2px; left: 14px; overflow: visible; position: absolute; top: 64px; width: 150px; z-index: 1; }`,
          `.framer-TLtoC .framer-4c4946, .framer-TLtoC .framer-111datn, .framer-TLtoC .framer-1h8j49, .framer-TLtoC .framer-y3rua8 { aspect-ratio: 1 / 1; flex: none; height: auto; left: 97%; overflow: visible; position: absolute; top: 50%; width: 12px; }`,
          `.framer-TLtoC .framer-1ofpln5, .framer-TLtoC .framer-1tui858, .framer-TLtoC .framer-1iy06gi, .framer-TLtoC .framer-q0ys8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 24px; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-TLtoC .framer-nx0ndo, .framer-TLtoC .framer-1h4lt2b, .framer-TLtoC .framer-ukvj3u { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-TLtoC .framer-oj3cfr { flex: none; height: 2px; left: 23px; overflow: visible; position: absolute; top: 31px; width: 150px; z-index: 1; }`,
          `.framer-TLtoC .framer-dvw2m9 { flex: none; height: 2px; left: 18px; overflow: visible; position: absolute; top: -3px; width: 150px; z-index: 1; }`,
          `.framer-TLtoC .framer-guvgo5 { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-TLtoC .framer-1xc4610 { flex: none; height: 2px; left: -7px; overflow: visible; position: absolute; right: -111px; top: -42px; z-index: 1; }`,
          `.framer-TLtoC .framer-15s0dkn { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 12px; z-index: 2; }`,
          `.framer-TLtoC.framer-v-4ukvs.framer-1wqdaha { flex-direction: column; width: 390px; }`,
          `.framer-TLtoC.framer-v-4ukvs .framer-1m24cko { height: 20px; width: 3px; }`,
          `.framer-TLtoC.framer-v-4ukvs .framer-dvw2m9 { left: -44px; top: 102px; width: 160px; }`,
          `.framer-TLtoC.framer-v-4ukvs .framer-1iy06gi { left: -92px; top: 242%; }`,
          `.framer-TLtoC.framer-v-4ukvs .framer-1xc4610 { left: -21px; right: -7px; top: 47px; }`,
          `.framer-TLtoC.framer-v-4ukvs .framer-q0ys8 { left: -101px; padding: 2px 8px 2px 8px; top: 300%; }`,
          `.framer-TLtoC.framer-v-oxg8u.framer-1wqdaha { flex-direction: column; justify-content: flex-end; width: 390px; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-1m24cko { height: 20px; order: 1; width: 3px; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-1ych1ut { order: 0; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-juils0 { bottom: 116px; left: -115px; top: unset; width: 220px; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-4c4946 { left: 98%; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-1ofpln5 { left: -85px; top: -150%; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-oj3cfr { left: 3px; top: -19px; width: 60px; }`,
          `.framer-TLtoC.framer-v-oxg8u .framer-1tui858 { left: -81px; padding: 2px 8px 2px 8px; top: -200%; }`,
          ...de,
        ],
        `framer-TLtoC`,
      )),
      (K.displayName = `Integration Branches`),
      (K.defaultProps = { height: 350, width: 1180 }),
      F(K, {
        variant: {
          options: [`Rz3JuSc6N`, `yKTU0IAET`, `YQHffT1iJ`],
          optionTitles: [`Large`, `Small Top`, `Bottom Small`],
          title: `Variant`,
          type: V.Enum,
        },
        knFpBuDfo: {
          defaultValue: `Customer Support Agents`,
          displayTextArea: !0,
          title: `Financial risk systems 2`,
          type: V.String,
        },
        onknFpBuDfoChange: { changes: `knFpBuDfo`, type: V.ChangeHandler },
        toKKbHeGB: {
          defaultValue: `Automated Data Pipelines`,
          displayTextArea: !0,
          title: `Financial risk systems`,
          type: V.String,
        },
        ontoKKbHeGBChange: { changes: `toKKbHeGB`, type: V.ChangeHandler },
        WwMLgqbB0: {
          defaultValue: `Secure Enterprise Data`,
          displayTextArea: !0,
          title: `Title 3`,
          type: V.String,
        },
        onWwMLgqbB0Change: { changes: `WwMLgqbB0`, type: V.ChangeHandler },
        ky6f7sFMK: {
          defaultValue: `Strategic AI Infra Audits`,
          displayTextArea: !0,
          title: `Title 4`,
          type: V.String,
        },
        onky6f7sFMKChange: { changes: `ky6f7sFMK`, type: V.ChangeHandler },
      }),
      h(
        K,
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
          ...ot,
          ...st,
          ...O(fe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (K.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([C(U, {}, t)])),
      }));
  });
function bt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  q,
  jt = e(() => {
    (c(),
      A(),
      m(),
      l(),
      pe(),
      (xt = S(me)),
      (St = { NGxbIt3vG: { hover: !0 } }),
      (Ct = `framer-SZC31`),
      (wt = { NGxbIt3vG: `framer-v-1rkidtn` }),
      (Tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Et = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Dt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Ot = d.create(r)),
      (kt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (At = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = y(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = u(),
            { activeLocale: s, setLocale: c } = j();
          R();
          let { style: l, className: f, layoutId: m, variant: h, ...g } = kt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = x({
              defaultVariant: `NGxbIt3vG`,
              enabledGestures: St,
              ref: i,
              variant: h,
              variantClassNames: wt,
            }),
            O = At(e, D),
            k = T(Ct);
          return a(p, {
            id: m ?? o,
            children: a(Ot, {
              animate: D,
              initial: !1,
              children: a(Dt, {
                value: Tt,
                children: a(d.div, {
                  ...g,
                  ...b,
                  className: T(k, `framer-1rkidtn`, f, v),
                  "data-framer-name": `Base`,
                  layoutDependency: O,
                  layoutId: `NGxbIt3vG`,
                  ref: i,
                  style: { ...l },
                  ...bt(
                    { "NGxbIt3vG-hover": { "data-framer-name": void 0 } },
                    _,
                    S,
                  ),
                  children: a(M, {
                    children: a(I, {
                      className: `framer-1v3fods-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: O,
                      layoutId: `SMPiqpPhd-container`,
                      nodeId: `SMPiqpPhd`,
                      rendersWithMotion: !0,
                      scopeId: `ofqUjs6C7`,
                      children: a(me, {
                        blur: 0,
                        brightness: 52,
                        characterSet: `blocks`,
                        color: {
                          color: `rgb(176, 176, 176)`,
                          color1: `rgb(255, 255, 255)`,
                          color1Point: 0,
                          color2: `rgba(107, 107, 107, 0)`,
                          color2Point: 100,
                          mode: `color`,
                          threshold: 50,
                        },
                        contrast: 0,
                        customCharacterSet: `@%#*+=-:.`,
                        ditheringMode: `none`,
                        font: {
                          fontFamily: `"Fragment Mono", monospace`,
                          fontSize: `10px`,
                          fontStyle: `normal`,
                          fontWeight: 400,
                          letterSpacing: `0em`,
                          lineHeight: `1em`,
                        },
                        glow: { blur: 11, opacity: 1 },
                        height: `100%`,
                        id: `SMPiqpPhd`,
                        image: Et(
                          {
                            pixelHeight: 457,
                            pixelWidth: 1007,
                            src: `https://framerusercontent.com/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png?width=1007&height=457`,
                            srcSet: `https://framerusercontent.com/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png?scale-down-to=512&width=1007&height=457 512w,https://framerusercontent.com/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png?width=1007&height=457 1007w`,
                          },
                          `Star Icon Hovering Over Palm`,
                        ),
                        invertColors: !1,
                        layoutId: `SMPiqpPhd`,
                        outputWidth: 170,
                        radius: `0px`,
                        sizing: `fit`,
                        staticEffect: { interval: 0.1, preview: !1 },
                        style: { width: `100%` },
                        whiteMode: `ignore`,
                        width: `100%`,
                        ...bt(
                          {
                            "NGxbIt3vG-hover": {
                              color: {
                                color: `rgb(91, 156, 252)`,
                                color1: `rgb(255, 255, 255)`,
                                color1Point: 0,
                                color2: `rgba(107, 107, 107, 0)`,
                                color2Point: 100,
                                mode: `color`,
                                threshold: 50,
                              },
                            },
                          },
                          _,
                          S,
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SZC31.framer-1fsabfd, .framer-SZC31 .framer-1fsabfd { display: block; }`,
          `.framer-SZC31.framer-1rkidtn { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 530px; }`,
          `.framer-SZC31 .framer-1v3fods-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-SZC31.framer-v-1rkidtn.hover.framer-1rkidtn { width: 530px; }`,
        ],
        `framer-SZC31`,
      )),
      (q.displayName = `Left Hand`),
      (q.defaultProps = { height: 232.5, width: 529.5 }),
      h(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
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
          ...xt,
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Mt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  J,
  qt = e(() => {
    (c(),
      A(),
      m(),
      l(),
      ue(),
      ce(),
      _e(),
      (Nt = S(ye)),
      (Pt = ne(L(d.div))),
      (Ft = [`iPbUXRQy9`, `NeriRO7TR`]),
      (It = `framer-0vtgp`),
      (Lt = { iPbUXRQy9: `framer-v-6z454f`, NeriRO7TR: `framer-v-d9vq70` }),
      (Rt = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (zt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.2, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Bt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Vt = (e, t) => `translateY(-50%) ${t}`),
      (Ht = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Ut = { Closed: `NeriRO7TR`, Open: `iPbUXRQy9` }),
      (Wt = d.create(r)),
      (Gt = ({
        answer: e,
        click: t,
        height: n,
        id: r,
        question: i,
        width: a,
        ...o
      }) => ({
        ...o,
        qY77pdGfk: t ?? o.qY77pdGfk,
        variant: Ut[o.variant] ?? o.variant ?? `iPbUXRQy9`,
        wkkhRw0xc:
          e ??
          o.wkkhRw0xc ??
          `This is an answer to the question above and an answer of one, two or three line suits well here.`,
        wTHxi2jJc: i ?? o.wTHxi2jJc ?? `This is a question`,
      })),
      (Kt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = y(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = j();
          R();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              wTHxi2jJc: y,
              wkkhRw0xc: b,
              qY77pdGfk: S,
              ...C
            } = Gt(e),
            {
              baseVariant: w,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: te,
            } = x({
              cycleOrder: Ft,
              defaultVariant: `iPbUXRQy9`,
              ref: o,
              variant: _,
              variantClassNames: Lt,
            }),
            P = Kt(e, te),
            { activeVariantCallback: F, delay: ne } = ee(w),
            I = F(async (...e) => {
              if ((M({ isPressed: !1 }), S && (await S(...e)) === !1))
                return !1;
            }),
            L = F(async (...e) => {
              N(`NeriRO7TR`);
            }),
            z = F(async (...e) => {
              N(`iPbUXRQy9`);
            }),
            B = T(It, le, se);
          return a(p, {
            id: g ?? c,
            children: a(Wt, {
              animate: te,
              initial: !1,
              children: a(Ht, {
                value: Rt,
                children: s(d.div, {
                  ...C,
                  ...O,
                  className: T(B, `framer-6z454f`, h, E),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `iPbUXRQy9`,
                  onTap: I,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                    ...m,
                  },
                  variants: { NeriRO7TR: { "--border-style": `dashed` } },
                  ...Mt({ NeriRO7TR: { "data-framer-name": `Closed` } }, w, k),
                  children: [
                    s(d.div, {
                      className: `framer-1xexyg5`,
                      "data-framer-name": `Header`,
                      "data-highlight": !0,
                      layoutDependency: P,
                      layoutId: `MWejSXDoT`,
                      onTap: L,
                      ...Mt({ NeriRO7TR: { onTap: z } }, w, k),
                      children: [
                        a(v, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: a(d.p, {
                              className: `framer-styles-preset-79bu04`,
                              "data-styles-preset": `GMp6ZDbq7`,
                              dir: `auto`,
                              children: `This is a question`,
                            }),
                          }),
                          className: `framer-7n705`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `t5f2eli8a`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        a(d.div, {
                          className: `framer-1ojsr0z`,
                          "data-framer-name": `Icon`,
                          layoutDependency: P,
                          layoutId: `wKOFaLKKZ`,
                          style: { rotate: 45 },
                          variants: { NeriRO7TR: { rotate: 0 } },
                          children: a(ye, {
                            animated: !0,
                            className: `framer-vpd70k`,
                            layoutDependency: P,
                            layoutId: `rLdnJnyAl`,
                            style: {
                              "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                            },
                          }),
                        }),
                      ],
                    }),
                    a(Pt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: zt,
                      className: `framer-eq0syk`,
                      "data-framer-appear-id": `eq0syk`,
                      "data-framer-name": `Answer`,
                      initial: Bt,
                      layoutDependency: P,
                      layoutId: `qG7NyGYYZ`,
                      optimized: !0,
                      style: { filter: `blur(0px)`, WebkitFilter: `blur(0px)` },
                      variants: {
                        NeriRO7TR: {
                          filter: `blur(5px)`,
                          WebkitFilter: `blur(5px)`,
                        },
                      },
                      ...Mt({ NeriRO7TR: { transformTemplate: Vt } }, w, k),
                      children: a(v, {
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
                            children: `This is an answer to the question above and an answer of one, two or three line suits well here.`,
                          }),
                        }),
                        className: `framer-6k9l00`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `hj56Qtyda`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-0vtgp.framer-xuk4m9, .framer-0vtgp .framer-xuk4m9 { display: block; }`,
          `.framer-0vtgp.framer-6z454f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 507px; }`,
          `.framer-0vtgp .framer-1xexyg5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px 28px 12px 28px; position: relative; width: 100%; }`,
          `.framer-0vtgp .framer-7n705 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0vtgp .framer-1ojsr0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-0vtgp .framer-vpd70k { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
          `.framer-0vtgp .framer-eq0syk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 28px 28px 28px; position: relative; width: 100%; }`,
          `.framer-0vtgp .framer-6k9l00 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0vtgp.framer-v-d9vq70 .framer-1xexyg5 { padding: 28px; }`,
          `.framer-0vtgp.framer-v-d9vq70 .framer-eq0syk { left: 0px; position: absolute; top: 264%; z-index: 1; }`,
          ...de,
          ...H,
          `.framer-0vtgp[data-border="true"]::after, .framer-0vtgp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-0vtgp`,
      )),
      (J.displayName = `FAQ Item`),
      (J.defaultProps = { height: 138.5, width: 507 }),
      F(J, {
        variant: {
          options: [`iPbUXRQy9`, `NeriRO7TR`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: V.Enum,
        },
        wTHxi2jJc: {
          defaultValue: `This is a question`,
          displayTextArea: !1,
          title: `Question`,
          type: V.String,
        },
        onwTHxi2jJcChange: { changes: `wTHxi2jJc`, type: V.ChangeHandler },
        wkkhRw0xc: {
          defaultValue: `This is an answer to the question above and an answer of one, two or three line suits well here.`,
          displayTextArea: !0,
          title: `Answer`,
          type: V.String,
        },
        onwkkhRw0xcChange: { changes: `wkkhRw0xc`, type: V.ChangeHandler },
        qY77pdGfk: { title: `Click`, type: V.EventHandler },
      }),
      h(
        J,
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
          ...Nt,
          ...O(fe),
          ...O(oe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  X,
  $t,
  en,
  tn,
  nn,
  rn,
  Z,
  an = e(() => {
    (c(),
      A(),
      m(),
      l(),
      qt(),
      (Jt = S(J)),
      (Yt = [
        `tjfnlNbXA`,
        `gJk4qp16H`,
        `e70WavgUL`,
        `EPvobuJ8n`,
        `vSt6hyHI3`,
        `rahhKwoeh`,
      ]),
      (Xt = `framer-CB8ql`),
      (Zt = {
        e70WavgUL: `framer-v-1dx3n3x`,
        EPvobuJ8n: `framer-v-17zao5h`,
        gJk4qp16H: `framer-v-1polsad`,
        rahhKwoeh: `framer-v-1sb6ha6`,
        tjfnlNbXA: `framer-v-1yfy0nw`,
        vSt6hyHI3: `framer-v-1jkr5ex`,
      }),
      (Qt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($t = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (en = {
        "1 Open": `gJk4qp16H`,
        "2 Open": `e70WavgUL`,
        "3 Open": `EPvobuJ8n`,
        "4 Open": `vSt6hyHI3`,
        "5 Open": `rahhKwoeh`,
        "All Closed": `tjfnlNbXA`,
      }),
      (tn = d.create(r)),
      (nn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: en[r.variant] ?? r.variant ?? `tjfnlNbXA`,
      })),
      (rn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Z = y(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = u(),
            { activeLocale: c, setLocale: l } = j(),
            f = R(),
            { style: m, className: h, layoutId: g, variant: _, ...v } = nn(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = x({
              cycleOrder: Yt,
              defaultVariant: `tjfnlNbXA`,
              ref: i,
              variant: _,
              variantClassNames: Zt,
            }),
            A = rn(e, k),
            { activeVariantCallback: N, delay: te } = ee(y),
            P = N(async (...e) => {
              O(`gJk4qp16H`);
            }),
            F = N(async (...e) => {
              O(`e70WavgUL`);
            }),
            ne = N(async (...e) => {
              O(`EPvobuJ8n`);
            }),
            L = N(async (...e) => {
              O(`vSt6hyHI3`);
            }),
            z = N(async (...e) => {
              O(`rahhKwoeh`);
            }),
            B = T(Xt);
          return a(p, {
            id: g ?? o,
            children: a(tn, {
              animate: k,
              initial: !1,
              children: a($t, {
                value: Qt,
                children: s(d.div, {
                  ...v,
                  ...C,
                  className: T(B, `framer-1yfy0nw`, h, b),
                  "data-framer-name": `All Closed`,
                  layoutDependency: A,
                  layoutId: `tjfnlNbXA`,
                  ref: i,
                  style: { ...m },
                  ...Y(
                    {
                      e70WavgUL: { "data-framer-name": `2 Open` },
                      EPvobuJ8n: { "data-framer-name": `3 Open` },
                      gJk4qp16H: { "data-framer-name": `1 Open` },
                      rahhKwoeh: { "data-framer-name": `5 Open` },
                      vSt6hyHI3: { "data-framer-name": `4 Open` },
                    },
                    y,
                    w,
                  ),
                  children: [
                    a(M, {
                      height: 138,
                      width: f?.width || `100vw`,
                      y:
                        (f?.y || 0) +
                        0 +
                        (((f?.height || 448) - 0 - 730) / 2 + 0 + 0),
                      ...Y(
                        {
                          e70WavgUL: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 0 + 0),
                          },
                          EPvobuJ8n: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 0 + 0),
                          },
                          gJk4qp16H: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 527) - 0 - 730) / 2 + 0 + 0),
                          },
                          rahhKwoeh: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 482) - 0 - 730) / 2 + 0 + 0),
                          },
                          vSt6hyHI3: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 0 + 0),
                          },
                        },
                        y,
                        w,
                      ),
                      children: a(I, {
                        className: `framer-vcven-container`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `bin0ScNEN-container`,
                        nodeId: `bin0ScNEN`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: a(J, {
                          height: `100%`,
                          id: `bin0ScNEN`,
                          layoutId: `bin0ScNEN`,
                          qY77pdGfk: P,
                          style: { width: `100%` },
                          variant: X(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Yes. We use zero-retention APIs and deploy entirely within your private cloud. Your data is ring-fenced and never trains public models.`,
                          wTHxi2jJc: `Is our company data safe from public AI models?`,
                          ...Y(
                            {
                              gJk4qp16H: {
                                variant: X(`iPbUXRQy9`),
                                wkkhRw0xc: `Yes. Your data never trains a public model. Agent Causality runs against your own infrastructure, and every pipeline we build keeps your data inside your environment.`,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    a(M, {
                      height: 138,
                      width: f?.width || `100vw`,
                      y:
                        (f?.y || 0) +
                        0 +
                        (((f?.height || 448) - 0 - 730) / 2 + 138 + 10),
                      ...Y(
                        {
                          e70WavgUL: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 138 + 10),
                          },
                          EPvobuJ8n: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 138 + 10),
                          },
                          gJk4qp16H: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 527) - 0 - 730) / 2 + 138 + 10),
                          },
                          rahhKwoeh: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 482) - 0 - 730) / 2 + 138 + 10),
                          },
                          vSt6hyHI3: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 138 + 10),
                          },
                        },
                        y,
                        w,
                      ),
                      children: a(I, {
                        className: `framer-lz8553-container`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `aRBvlVYBU-container`,
                        nodeId: `aRBvlVYBU`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: a(J, {
                          height: `100%`,
                          id: `aRBvlVYBU`,
                          layoutId: `aRBvlVYBU`,
                          qY77pdGfk: F,
                          style: { width: `100%` },
                          variant: X(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Yes. We build custom middleware for any system with an API. For closed legacy software, we deploy secure RPA to bridge the gap.`,
                          wTHxi2jJc: `Does this integrate with our legacy software?`,
                          ...Y(
                            {
                              e70WavgUL: {
                                variant: X(`iPbUXRQy9`),
                                wkkhRw0xc: `In most cases, yes. We connect to your existing tools and orchestration layer rather than asking you to rip anything out.`,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    a(M, {
                      height: 138,
                      width: f?.width || `100vw`,
                      y:
                        (f?.y || 0) +
                        0 +
                        (((f?.height || 448) - 0 - 730) / 2 + 276 + 20),
                      ...Y(
                        {
                          e70WavgUL: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 276 + 20),
                          },
                          EPvobuJ8n: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 276 + 20),
                          },
                          gJk4qp16H: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 527) - 0 - 730) / 2 + 276 + 20),
                          },
                          rahhKwoeh: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 482) - 0 - 730) / 2 + 276 + 20),
                          },
                          vSt6hyHI3: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 276 + 20),
                          },
                        },
                        y,
                        w,
                      ),
                      children: a(I, {
                        className: `framer-auzme-container`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `lSkxkP7cw-container`,
                        nodeId: `lSkxkP7cw`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: a(J, {
                          height: `100%`,
                          id: `lSkxkP7cw`,
                          layoutId: `lSkxkP7cw`,
                          qY77pdGfk: ne,
                          style: { width: `100%` },
                          variant: X(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Audits take 7 days. Internal workflow automations deploy in 3 to 4 weeks. Customer-facing agents launch in 6 to 8 weeks after rigorous hallucination testing.`,
                          wTHxi2jJc: `How fast is the deployment timeline?`,
                          ...Y(
                            {
                              EPvobuJ8n: {
                                variant: X(`iPbUXRQy9`),
                                wkkhRw0xc: `It depends on the agent, but most vertical deployments go from audit to a live agent in weeks, not quarters.`,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    a(M, {
                      height: 138,
                      width: f?.width || `100vw`,
                      y:
                        (f?.y || 0) +
                        0 +
                        (((f?.height || 448) - 0 - 730) / 2 + 414 + 30),
                      ...Y(
                        {
                          e70WavgUL: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 414 + 30),
                          },
                          EPvobuJ8n: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 414 + 30),
                          },
                          gJk4qp16H: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 527) - 0 - 730) / 2 + 414 + 30),
                          },
                          rahhKwoeh: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 482) - 0 - 730) / 2 + 414 + 30),
                          },
                          vSt6hyHI3: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 414 + 30),
                          },
                        },
                        y,
                        w,
                      ),
                      children: a(I, {
                        className: `framer-gt4h4x-container`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `XG89Nc6KO-container`,
                        nodeId: `XG89Nc6KO`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: a(J, {
                          height: `100%`,
                          id: `XG89Nc6KO`,
                          layoutId: `XG89Nc6KO`,
                          qY77pdGfk: L,
                          style: { width: `100%` },
                          variant: X(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `No. Our systems resolve 80% of repetitive Tier-1 tasks automatically. High-stakes edge cases are instantly routed to your human staff with full context.`,
                          wTHxi2jJc: `Will this replace our human workforce?`,
                          ...Y(
                            {
                              vSt6hyHI3: {
                                variant: X(`iPbUXRQy9`),
                                wkkhRw0xc: `No. Our agents take on the manual, repetitive work so your people can focus on the judgment calls a machine shouldn't be making alone.`,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                    a(M, {
                      height: 138,
                      width: f?.width || `100vw`,
                      y:
                        (f?.y || 0) +
                        0 +
                        (((f?.height || 448) - 0 - 730) / 2 + 552 + 40),
                      ...Y(
                        {
                          e70WavgUL: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 552 + 40),
                          },
                          EPvobuJ8n: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 552 + 40),
                          },
                          gJk4qp16H: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 527) - 0 - 730) / 2 + 552 + 40),
                          },
                          rahhKwoeh: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 482) - 0 - 730) / 2 + 552 + 40),
                          },
                          vSt6hyHI3: {
                            y:
                              (f?.y || 0) +
                              0 +
                              (((f?.height || 505) - 0 - 730) / 2 + 552 + 40),
                          },
                        },
                        y,
                        w,
                      ),
                      children: a(I, {
                        className: `framer-hhiqgy-container`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `x3ykx7bAp-container`,
                        nodeId: `x3ykx7bAp`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: a(J, {
                          height: `100%`,
                          id: `x3ykx7bAp`,
                          layoutId: `x3ykx7bAp`,
                          qY77pdGfk: z,
                          style: { width: `100%` },
                          variant: X(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `You own 100% of the IP upon completion. We offer ongoing SLAs to monitor API stability and update the underlying language models.`,
                          wTHxi2jJc: `Who owns the code and intellectual property?`,
                          ...Y(
                            {
                              rahhKwoeh: {
                                variant: X(`iPbUXRQy9`),
                                wkkhRw0xc: `You do. Everything we build for you belongs to you, full stop.`,
                              },
                            },
                            y,
                            w,
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-CB8ql.framer-1g4ld3f, .framer-CB8ql .framer-1g4ld3f { display: block; }`,
          `.framer-CB8ql.framer-1yfy0nw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 507px; }`,
          `.framer-CB8ql .framer-vcven-container, .framer-CB8ql .framer-lz8553-container, .framer-CB8ql .framer-auzme-container, .framer-CB8ql .framer-gt4h4x-container, .framer-CB8ql .framer-hhiqgy-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-CB8ql`,
      )),
      (Z.displayName = `Home FAQ`),
      (Z.defaultProps = { height: 448, width: 507 }),
      F(Z, {
        variant: {
          options: [
            `tjfnlNbXA`,
            `gJk4qp16H`,
            `e70WavgUL`,
            `EPvobuJ8n`,
            `vSt6hyHI3`,
            `rahhKwoeh`,
          ],
          optionTitles: [
            `All Closed`,
            `1 Open`,
            `2 Open`,
            `3 Open`,
            `4 Open`,
            `5 Open`,
          ],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      h(Z, [{ explicitInter: !0, fonts: [] }, ...Jt], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([C(J, {}, t)])),
      }));
  }),
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Q,
  Dn,
  On,
  kn,
  An,
  $,
  jn;
e(() => {
  (c(),
    A(),
    m(),
    l(),
    he(),
    pe(),
    $e(),
    ve(),
    xe(),
    yt(),
    Oe(),
    jt(),
    we(),
    an(),
    Ae(),
    ue(),
    ce(),
    Pe(),
    Se(),
    Re(),
    Ce(),
    Ve(),
    (on = S(ke)),
    (sn = S(ge)),
    (cn = S(q)),
    (ln = L(z)),
    (un = L(B)),
    (dn = S(U)),
    (fn = S(me)),
    (pn = S(K)),
    (mn = g(d.div)),
    (hn = S(Z)),
    (gn = g(d.section)),
    (_n = S(Ee)),
    (vn = S(be)),
    (yn = g(d.main)),
    (bn = {
      acm0y4Ysf: `(min-width: 810px) and (max-width: 1199.98px)`,
      cx0ZXnHvi: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (xn = () => typeof document < `u`),
    (Sn = []),
    (Cn = `framer-n7pvQ`),
    (wn = {
      acm0y4Ysf: `framer-v-c8sga5`,
      cx0ZXnHvi: `framer-v-etszke`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Tn = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
    (En = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Dn = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (On = { Desktop: `WQLkyLRf1`, Phone: `cx0ZXnHvi`, Tablet: `acm0y4Ysf` }),
    (kn = ({ value: e }) =>
      P()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (An = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: On[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = y(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          m = u(),
          { activeLocale: h, setLocale: g } = j(),
          y = R(),
          { style: x, className: S, layoutId: C, variant: w, ...O } = An(e);
        ie(o(() => Be({}, h), [h]));
        let [A, ee] = re(w, bn, !1),
          P = T(Cn, Ne, se, Le, le),
          F = t(N)?.isLayoutTemplate,
          ne = !!t(f)?.transition?.layout,
          I = En(F, ne);
        _();
        let L = D(`dMa3I_0FQ`),
          B = n(null),
          V = () => !xn() || A === `cx0ZXnHvi`,
          H = D(`LC8uHYUKO`),
          oe = ae();
        return (
          te({}),
          a(N.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: On,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: wn,
            },
            children: s(p, {
              id: C ?? m,
              children: [
                a(kn, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(d.div, {
                  ...O,
                  className: T(P, `framer-72rtr7`, S),
                  ref: l,
                  style: { ...x },
                  children: s(yn, {
                    className: `framer-41erml`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: Tn,
                    isNestedFlowEffect: !1,
                    layout: I,
                    children: [
                      s(d.section, {
                        className: `framer-1prmqhr`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        layout: `position`,
                        children: [
                          s(`div`, {
                            className: `framer-1m0mf1k`,
                            "data-framer-name": `Header`,
                            children: [
                              s(`div`, {
                                className: `framer-13vovq9`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: s(`h1`, {
                                        className: `framer-styles-preset-1xgagrl`,
                                        "data-styles-preset": `gfNbT0EVI`,
                                        dir: `auto`,
                                        children: [
                                          `Every agent decision has a reason. `,
                                          a(`br`, {}),
                                          `Now you can see it.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-1ec2sr0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Psionics builds vertical AI agents for real industries, backed by Agent Causality, our engine for tracing exactly how and why a multi-agent system reached its outcome.`,
                                      }),
                                    }),
                                    className: `framer-f2ebt0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1uwjo92`,
                                "data-framer-name": `Actions`,
                                children: [
                                  a(b, {
                                    links: [
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      a(M, {
                                        height: 31,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          140 +
                                          0 +
                                          0 +
                                          201.8 +
                                          0,
                                        children: a(z, {
                                          className: `framer-139243h-container`,
                                          nodeId: `meL_Ox6GN`,
                                          scopeId: `augiA20Il`,
                                          children: a(E, {
                                            breakpoint: A,
                                            overrides: {
                                              acm0y4Ysf: { JvqpmmvGw: e[1] },
                                              cx0ZXnHvi: { JvqpmmvGw: e[2] },
                                            },
                                            children: a(ke, {
                                              height: `100%`,
                                              id: `meL_Ox6GN`,
                                              JvqpmmvGw: e[0],
                                              layoutId: `meL_Ox6GN`,
                                              vA9NXfDIM: `Why us?`,
                                              variant: Q(`FoS6XZPxY`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  a(b, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:LC8uHYUKO`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:LC8uHYUKO`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:LC8uHYUKO`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      a(M, {
                                        height: 31,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          140 +
                                          0 +
                                          0 +
                                          201.8 +
                                          0,
                                        children: a(z, {
                                          className: `framer-1qcx8hd-container`,
                                          nodeId: `fTmFludJG`,
                                          scopeId: `augiA20Il`,
                                          children: a(E, {
                                            breakpoint: A,
                                            overrides: {
                                              acm0y4Ysf: { JvqpmmvGw: e[1] },
                                              cx0ZXnHvi: { JvqpmmvGw: e[2] },
                                            },
                                            children: a(ke, {
                                              height: `100%`,
                                              id: `fTmFludJG`,
                                              JvqpmmvGw: e[0],
                                              layoutId: `fTmFludJG`,
                                              vA9NXfDIM: `Start now`,
                                              variant: Q(`kWnN_xkUt`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a(`div`, {
                            className: `framer-s7f9jy`,
                            "data-framer-name": `ASCII`,
                            children: a(M, {
                              children: a(z, {
                                className: `framer-1yot3a4-container`,
                                isModuleExternal: !0,
                                nodeId: `ypauKtbgu`,
                                scopeId: `augiA20Il`,
                                children: a(ge, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `ypauKtbgu`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `ypauKtbgu`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !1,
                                  srcFile: `/content/assets/homepage-hero-video.mp4`,
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
                          }),
                        ],
                      }),
                      s(d.section, {
                        className: `framer-1pyv8p4`,
                        "data-border": !0,
                        "data-framer-name": `The Solution`,
                        id: L,
                        layout: `position`,
                        ref: B,
                        children: [
                          s(`div`, {
                            className: `framer-1obe6kf`,
                            "data-framer-name": `Text`,
                            children: [
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    children: `AI that explains itself.`,
                                  }),
                                }),
                                className: `framer-1jyy2b7`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `We think autonomous systems should be understandable by the people who depend on them, not just the engineers who built them. That's the idea behind everything we ship, from the agents themselves to the tools that watch them work.`,
                                  }),
                                }),
                                className: `framer-ncrx5h`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-p2sija`,
                            "data-framer-name": `Illustration`,
                            children: [
                              a(`div`, {
                                className: `framer-1ubv7j2`,
                                "data-framer-name": `Left Hand`,
                                children: a(E, {
                                  breakpoint: A,
                                  overrides: {
                                    acm0y4Ysf: {
                                      width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 10px) * 0.5349, 1px)`,
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        1043.8 +
                                        100 +
                                        169.8 +
                                        19.5 +
                                        0 +
                                        0,
                                    },
                                    cx0ZXnHvi: {
                                      width: `max((min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 10px) * 0.5349, 1px)`,
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        847.8 +
                                        100 +
                                        169.8 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: a(M, {
                                    height: 232,
                                    width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 10px) * 0.5349, 1px)`,
                                    y:
                                      (y?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1043.8 +
                                      100 +
                                      169.8 +
                                      72 +
                                      0 +
                                      0,
                                    children: a(ln, {
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
                                            x: -50,
                                            y: 0,
                                          },
                                        },
                                        {
                                          ref: B,
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
                                      __framer__transformTrigger: `onScrollTarget`,
                                      __framer__transformViewportThreshold: 1,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-6cvxb7-container`,
                                      nodeId: `E6reqONmK`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: a(q, {
                                        height: `100%`,
                                        id: `E6reqONmK`,
                                        layoutId: `E6reqONmK`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              a(`div`, {
                                className: `framer-njc2en`,
                                "data-framer-name": `Right Hand`,
                                children: a(E, {
                                  breakpoint: A,
                                  overrides: {
                                    acm0y4Ysf: {
                                      background: {
                                        alt: `Human Hand Reaching For Right Side`,
                                        fit: `fill`,
                                        intrinsicHeight: 470.5,
                                        intrinsicWidth: 836,
                                        loading: k(
                                          (y?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1043.8 +
                                            100 +
                                            169.8 +
                                            0 +
                                            170,
                                        ),
                                        pixelHeight: 941,
                                        pixelWidth: 1672,
                                        sizes: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 10px) / 2.15, 1px)`,
                                        src: `/content/images/hand-visual-1672w.png`,
                                        srcSet: `/content/images/hand-visual-512w.png 512w,/content/images/hand-visual-1024w.png 1024w,/content/images/hand-visual-1672w.png 1672w`,
                                      },
                                    },
                                    cx0ZXnHvi: {
                                      background: {
                                        alt: `Human Hand Reaching For Right Side`,
                                        fit: `fill`,
                                        intrinsicHeight: 470.5,
                                        intrinsicWidth: 836,
                                        loading: k(
                                          (y?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            847.8 +
                                            100 +
                                            169.8 +
                                            44.5 +
                                            100,
                                        ),
                                        pixelHeight: 941,
                                        pixelWidth: 1672,
                                        sizes: `max((min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 10px) / 2.15, 1px)`,
                                        src: `/content/images/hand-visual-1672w.png`,
                                        srcSet: `/content/images/hand-visual-512w.png 512w,/content/images/hand-visual-1024w.png 1024w,/content/images/hand-visual-1672w.png 1672w`,
                                      },
                                    },
                                  },
                                  children: a(un, {
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
                                          x: 50,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: B,
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
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    as: `figure`,
                                    background: {
                                      alt: `Human Hand Reaching For Right Side`,
                                      fit: `fill`,
                                      intrinsicHeight: 470.5,
                                      intrinsicWidth: 836,
                                      loading: k(
                                        (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1043.8 +
                                          100 +
                                          169.8 +
                                          0 +
                                          170,
                                      ),
                                      pixelHeight: 941,
                                      pixelWidth: 1672,
                                      sizes: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 10px) / 2.15, 1px)`,
                                      src: `/content/images/hand-visual-1672w.png`,
                                      srcSet: `/content/images/hand-visual-512w.png 512w,/content/images/hand-visual-1024w.png 1024w,/content/images/hand-visual-1672w.png 1672w`,
                                    },
                                    className: `framer-1a98h8r`,
                                    "data-framer-name": `Right Hand`,
                                    draggable: `false`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(d.section, {
                        className: `framer-c3bwax`,
                        "data-border": !0,
                        "data-framer-name": `Features`,
                        layout: `position`,
                        children: [
                          a(M, {
                            children: a(z, {
                              className: `framer-10orwwc-container`,
                              "data-framer-name": `Features Background Video`,
                              isModuleExternal: !0,
                              name: `Features Background Video`,
                              nodeId: `ISwVzskr7`,
                              scopeId: `augiA20Il`,
                              children: a(ge, {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: `100%`,
                                id: `ISwVzskr7`,
                                isMixedBorderRadius: !1,
                                layoutId: `ISwVzskr7`,
                                loop: !0,
                                muted: !0,
                                name: `Features Background Video`,
                                objectFit: `cover`,
                                playing: !0,
                                posterEnabled: !1,
                                srcFile: `/content/assets/homepage-feature-video.mp4`,
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
                          s(`div`, {
                            className: `framer-12aryng`,
                            "data-framer-name": `Header`,
                            children: [
                              a(E, {
                                breakpoint: A,
                                overrides: {
                                  acm0y4Ysf: {
                                    y:
                                      (y?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1784.6 +
                                      50 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  cx0ZXnHvi: {
                                    y:
                                      (y?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      1499.6 +
                                      50 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                children: a(M, {
                                  height: 25,
                                  y:
                                    (y?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    1889.6 +
                                    50 +
                                    0 +
                                    0 +
                                    0,
                                  children: a(z, {
                                    className: `framer-6in2xr-container`,
                                    nodeId: `wSA0hnkSG`,
                                    scopeId: `augiA20Il`,
                                    children: a(U, {
                                      height: `100%`,
                                      id: `wSA0hnkSG`,
                                      KPDdVnbJ9: `Features`,
                                      layoutId: `wSA0hnkSG`,
                                      nHzYRdzoI: !0,
                                      variant: Q(`wjdnMwXds`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              s(`div`, {
                                className: `framer-tys3m3`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `Engineered Core Capabilities.`,
                                      }),
                                    }),
                                    className: `framer-9a44s3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `From causal tracing to industry specific agents, this is the structural foundation of how we build.`,
                                      }),
                                    }),
                                    className: `framer-w806ry`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1oz1yg5`,
                            "data-framer-name": `Feature Grid`,
                            children: [
                              s(`div`, {
                                className: `framer-a4l40c`,
                                "data-framer-name": `Features`,
                                children: [
                                  s(`div`, {
                                    className: `framer-fsqpi9`,
                                    "data-border": !0,
                                    "data-framer-name": `Customer Support Agents`,
                                    children: [
                                      a(M, {
                                        children: a(z, {
                                          className: `framer-1ixohzr-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `aSc269yGO`,
                                          scopeId: `augiA20Il`,
                                          children: a(me, {
                                            blur: 0,
                                            brightness: 52,
                                            characterSet: `blocks`,
                                            color: {
                                              color: `rgb(0, 162, 255)`,
                                              color1: `rgb(255, 255, 255)`,
                                              color1Point: 0,
                                              color2: `rgba(107, 107, 107, 0)`,
                                              color2Point: 100,
                                              mode: `color`,
                                              threshold: 50,
                                            },
                                            contrast: 0,
                                            customCharacterSet: `@%#*+=-:.`,
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
                                            id: `aSc269yGO`,
                                            image: Dn(
                                              {
                                                pixelHeight: 1254,
                                                pixelWidth: 1254,
                                                src: `https://framerusercontent.com/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?width=1254&height=1254`,
                                                srcSet: `https://framerusercontent.com/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?scale-down-to=512&width=1254&height=1254 512w,https://framerusercontent.com/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?scale-down-to=1024&width=1254&height=1254 1024w,https://framerusercontent.com/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?width=1254&height=1254 1254w`,
                                              },
                                              `Customer Support Agents Icon`,
                                            ),
                                            invertColors: !0,
                                            layoutId: `aSc269yGO`,
                                            outputWidth: 64,
                                            radius: `0px`,
                                            sizing: `fit`,
                                            staticEffect: {
                                              interval: 0.1,
                                              preview: !1,
                                            },
                                            style: { width: `100%` },
                                            whiteMode: `ignore`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      s(`div`, {
                                        className: `framer-pjzi70`,
                                        "data-framer-name": `Heading & Description`,
                                        children: [
                                          a(v, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-79bu04`,
                                                "data-styles-preset": `GMp6ZDbq7`,
                                                dir: `auto`,
                                                children: `Vertical AI Agents`,
                                              }),
                                            }),
                                            className: `framer-nxr3nh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(v, {
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
                                                children: `We build agents for a specific job in a specific industry, trained on how that work actually gets done. Not a general assistant wearing a costume.`,
                                              }),
                                            }),
                                            className: `framer-lve91t`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-1t8olbu`,
                                    "data-border": !0,
                                    "data-framer-name": `Automated Data Pipelines`,
                                    children: s(`div`, {
                                      className: `framer-r84i3e`,
                                      "data-framer-name": `Heading & Description`,
                                      children: [
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-79bu04`,
                                              "data-styles-preset": `GMp6ZDbq7`,
                                              dir: `auto`,
                                              children: `Agent Causality`,
                                            }),
                                          }),
                                          className: `framer-pctxpr`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(v, {
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
                                              children: `Every multi-agent run gets recorded as an event graph. When something breaks, you know exactly which agent, which branch, and which decision caused it, instead of guessing from a log file.`,
                                            }),
                                          }),
                                          className: `framer-p19syk`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-d3fn2q`,
                                "data-framer-name": `Features`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1ikekdd`,
                                    "data-border": !0,
                                    "data-framer-name": `Secure Enterprise Data`,
                                    children: s(`div`, {
                                      className: `framer-o8sg5c`,
                                      "data-framer-name": `Heading & Description`,
                                      children: [
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-79bu04`,
                                              "data-styles-preset": `GMp6ZDbq7`,
                                              dir: `auto`,
                                              children: `Transparent by Default`,
                                            }),
                                          }),
                                          className: `framer-1kqeal8`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(v, {
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
                                              children: `Every agent ships with a visible decision trail. No black box, no hand waving when someone asks why the system did what it did.`,
                                            }),
                                          }),
                                          className: `framer-1x1j9fg`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-108spou`,
                                    "data-border": !0,
                                    "data-framer-name": `Strategic AI Infra Audits`,
                                    children: s(`div`, {
                                      className: `framer-iuyg6u`,
                                      "data-framer-name": `Heading & Description`,
                                      children: [
                                        a(v, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-79bu04`,
                                              "data-styles-preset": `GMp6ZDbq7`,
                                              dir: `auto`,
                                              children: `Agent Infrastructure Audits`,
                                            }),
                                          }),
                                          className: `framer-1k9pkps`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(v, {
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
                                              children: `Already running agents in production? We evaluate your current setup for reliability and safety, and flag where failures are most likely to hide.`,
                                            }),
                                          }),
                                          className: `framer-1bg2shk`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(d.section, {
                        className: `framer-j9v9k1`,
                        "data-border": !0,
                        "data-framer-name": `The Integration Ecosystem`,
                        layout: `position`,
                        children: [
                          a(E, {
                            breakpoint: A,
                            overrides: {
                              acm0y4Ysf: {
                                width: `min(min(${y?.width || `100vw`}, 1300px), 780px)`,
                                y:
                                  (y?.y || 0) + 0 + 0 + 0 + 2931.4 + 50 + 213.7,
                              },
                              cx0ZXnHvi: {
                                height: 270,
                                width: `min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px)`,
                                y: (y?.y || 0) + 0 + 0 + 0 + 3466.4 + 0 + 0,
                              },
                            },
                            children: a(M, {
                              height: 350,
                              width: `min(min(${y?.width || `100vw`}, 1300px), 1180px)`,
                              y: (y?.y || 0) + 0 + 0 + 0 + 3036.4 + 50 + 213.7,
                              children: a(E, {
                                breakpoint: A,
                                overrides: {
                                  cx0ZXnHvi: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -40,
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
                                  },
                                },
                                children: a(ln, {
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
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -100,
                                        y: 0,
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
                                  className: `framer-1llhsr9-container`,
                                  nodeId: `gcV6kbrQr`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: a(E, {
                                    breakpoint: A,
                                    overrides: {
                                      cx0ZXnHvi: { variant: Q(`yKTU0IAET`) },
                                    },
                                    children: a(K, {
                                      height: `100%`,
                                      id: `gcV6kbrQr`,
                                      knFpBuDfo: `Financial risk systems`,
                                      ky6f7sFMK: `Content moderation pipelines`,
                                      layoutId: `gcV6kbrQr`,
                                      style: { height: `100%`, width: `100%` },
                                      toKKbHeGB: `Incident response systems`,
                                      variant: Q(`Rz3JuSc6N`),
                                      width: `100%`,
                                      WwMLgqbB0: `Fraud and underwriting`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          V() &&
                            a(E, {
                              breakpoint: A,
                              overrides: {
                                cx0ZXnHvi: {
                                  height: 292,
                                  width: `min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px)`,
                                  y:
                                    (y?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    3466.4 +
                                    0 +
                                    432.6,
                                },
                              },
                              children: a(M, {
                                children: a(ln, {
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
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 40,
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
                                  className: `framer-1d8gtvm-container hidden-72rtr7 hidden-c8sga5`,
                                  nodeId: `g23LyA_7g`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: a(K, {
                                    height: `100%`,
                                    id: `g23LyA_7g`,
                                    knFpBuDfo: `Customer Support Agents`,
                                    ky6f7sFMK: `Content moderation pipelines`,
                                    layoutId: `g23LyA_7g`,
                                    style: { height: `100%`, width: `100%` },
                                    toKKbHeGB: `Automated Data Pipelines`,
                                    variant: Q(`YQHffT1iJ`),
                                    width: `100%`,
                                    WwMLgqbB0: `Fraud and underwriting.`,
                                  }),
                                }),
                              }),
                            }),
                          s(`div`, {
                            className: `framer-42i74x`,
                            "data-framer-name": `Text`,
                            children: [
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `Built to fit into what you already run`,
                                  }),
                                }),
                                className: `framer-1vcxbe9`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(v, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: [
                                    a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `Agent Causality plugs into your existing agent frameworks and orchestration layer, so you get visibility without a rebuild.`,
                                    }),
                                    a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: a(`br`, {
                                        className: `trailing-break`,
                                      }),
                                    }),
                                  ],
                                }),
                                className: `framer-1toc2sc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(gn, {
                        className: `framer-1nf5w1g`,
                        "data-border": !0,
                        "data-framer-name": `Frequently Asked Questions`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: Tn,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          a(mn, {
                            className: `framer-1vg89ub`,
                            "data-framer-name": `Text & Email`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: Tn,
                            isNestedFlowEffect: !0,
                            layout: `position`,
                            children: s(d.div, {
                              className: `framer-vb0t50`,
                              "data-framer-name": `Text`,
                              layout: `position`,
                              children: [
                                a(v, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-or66bk`,
                                      "data-styles-preset": `xv81tUXg1`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Frequently Asked Questions`,
                                    }),
                                  }),
                                  className: `framer-1qd9cfl`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(v, {
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
                                      children: `Clear, no fluff answers about how we build, deploy, and secure your agents.`,
                                    }),
                                  }),
                                  className: `framer-1b6ksw0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          a(E, {
                            breakpoint: A,
                            overrides: {
                              acm0y4Ysf: {
                                width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                y: (y?.y || 0) + 0 + 0 + 0 + 3931.4 + 50,
                              },
                              cx0ZXnHvi: {
                                width: `calc(min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                y: (y?.y || 0) + 0 + 0 + 0 + 4191 + 50 + 206.8,
                              },
                            },
                            children: a(M, {
                              height: 448,
                              width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              y: (y?.y || 0) + 0 + 0 + 0 + 4036.4 + 50,
                              children: a(z, {
                                className: `framer-vxv5en-container`,
                                layout: `position`,
                                nodeId: `DpGvX6bB2`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: a(Z, {
                                  height: `100%`,
                                  id: `DpGvX6bB2`,
                                  layoutId: `DpGvX6bB2`,
                                  style: { width: `100%` },
                                  variant: Q(`tjfnlNbXA`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          V() &&
                            a(d.div, {
                              className: `framer-1n9inkx hidden-72rtr7 hidden-c8sga5`,
                              "data-framer-name": `Support Email`,
                              layout: `position`,
                            }),
                        ],
                      }),
                      s(d.section, {
                        className: `framer-1t95ab7`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: H,
                        layout: `position`,
                        ref: oe(H),
                        children: [
                          s(`div`, {
                            className: `framer-owgqqa`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-8dgwa8`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(v, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `See what your agents are actually doing.`,
                                      }),
                                    }),
                                    className: `framer-qnul74`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(v, {
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
                                        children: `Book a short call. We'll walk through your current setup and show you where Agent Causality would catch what you're currently missing.`,
                                      }),
                                    }),
                                    className: `framer-1co84jf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1ncmn0x`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(E, {
                                    breakpoint: A,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          4479.4 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5005.8 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(M, {
                                      height: 55,
                                      width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        4584.4 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        0,
                                      children: a(z, {
                                        className: `framer-1j70mko-container`,
                                        nodeId: `VT_GLRVyL`,
                                        scopeId: `augiA20Il`,
                                        children: a(Ee, {
                                          height: `100%`,
                                          id: `VT_GLRVyL`,
                                          layoutId: `VT_GLRVyL`,
                                          mQrslU2vj: `No sales pitch`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Te,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(E, {
                                    breakpoint: A,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          4479.4 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5005.8 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                    },
                                    children: a(M, {
                                      height: 55,
                                      width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        4584.4 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        65,
                                      children: a(z, {
                                        className: `framer-jq1j17-container`,
                                        nodeId: `wxSMDdoZe`,
                                        scopeId: `augiA20Il`,
                                        children: a(Ee, {
                                          height: `100%`,
                                          id: `wxSMDdoZe`,
                                          layoutId: `wxSMDdoZe`,
                                          mQrslU2vj: `Talk directly with the engineer building it`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: ze,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(E, {
                                    breakpoint: A,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          4479.4 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          5005.8 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                    },
                                    children: a(M, {
                                      height: 55,
                                      width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        4584.4 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        130,
                                      children: a(z, {
                                        className: `framer-1cq3mll-container`,
                                        nodeId: `k1Iv1Yu7D`,
                                        scopeId: `augiA20Il`,
                                        children: a(Ee, {
                                          height: `100%`,
                                          id: `k1Iv1Yu7D`,
                                          layoutId: `k1Iv1Yu7D`,
                                          mQrslU2vj: `Walk away with a clear picture of what's happening inside your agents`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: De,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a(E, {
                            breakpoint: A,
                            overrides: {
                              acm0y4Ysf: {
                                width: `max((min(min(${y?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                y: (y?.y || 0) + 0 + 0 + 0 + 4479.4 + 50,
                              },
                              cx0ZXnHvi: {
                                width: `calc(min(min(${y?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                y:
                                  (y?.y || 0) + 0 + 0 + 0 + 5005.8 + 50 + 413.8,
                              },
                            },
                            children: a(M, {
                              height: 575,
                              width: `max((min(min(${y?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              y: (y?.y || 0) + 0 + 0 + 0 + 4584.4 + 50,
                              children: a(z, {
                                className: `framer-mbnqyp-container`,
                                nodeId: `jhWktQbv9`,
                                scopeId: `augiA20Il`,
                                children: a(be, {
                                  height: `100%`,
                                  id: `jhWktQbv9`,
                                  layoutId: `jhWktQbv9`,
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
        `.framer-n7pvQ.framer-lux5qc, .framer-n7pvQ .framer-lux5qc { display: block; }`,
        `.framer-n7pvQ.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-n7pvQ .framer-41erml { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1prmqhr { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 38px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: visible; padding: 140px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1m0mf1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-13vovq9, .framer-n7pvQ .framer-tys3m3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1ec2sr0, .framer-n7pvQ .framer-1jyy2b7, .framer-n7pvQ .framer-9a44s3, .framer-n7pvQ .framer-nxr3nh, .framer-n7pvQ .framer-pctxpr, .framer-n7pvQ .framer-1kqeal8, .framer-n7pvQ .framer-1k9pkps, .framer-n7pvQ .framer-1vcxbe9, .framer-n7pvQ .framer-1qd9cfl, .framer-n7pvQ .framer-1b6ksw0, .framer-n7pvQ .framer-qnul74 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n7pvQ .framer-f2ebt0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 320px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n7pvQ .framer-1uwjo92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-139243h-container, .framer-n7pvQ .framer-1qcx8hd-container, .framer-n7pvQ .framer-6in2xr-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-n7pvQ .framer-s7f9jy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-n7pvQ .framer-1yot3a4-container { -webkit-filter: blur(1px); -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,1) 100%) add; filter: blur(1px); flex: none; height: 633px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,1) 100%) add; opacity: 0.38; position: relative; width: 551px; }`,
        `.framer-n7pvQ .framer-1pyv8p4 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1obe6kf, .framer-n7pvQ .framer-42i74x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-ncrx5h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 400px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-p2sija { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1ubv7j2 { align-content: center; align-items: center; display: flex; flex: 1.15 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 100px 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-n7pvQ .framer-6cvxb7-container, .framer-n7pvQ .framer-1j70mko-container, .framer-n7pvQ .framer-jq1j17-container, .framer-n7pvQ .framer-1cq3mll-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-njc2en { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 170px 0px 0px 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-n7pvQ .framer-1a98h8r { -webkit-filter: grayscale(1); -webkit-user-select: none; filter: grayscale(1); flex: 1 0 0px; height: auto; overflow: visible; position: relative; user-select: none; width: 1px; }`,
        `.framer-n7pvQ .framer-c3bwax { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-10orwwc-container { flex: none; height: 100%; left: 0px; opacity: 0.22; pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-n7pvQ .framer-12aryng { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-n7pvQ .framer-w806ry { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n7pvQ .framer-1oz1yg5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-n7pvQ .framer-a4l40c, .framer-n7pvQ .framer-d3fn2q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-fsqpi9 { --border-bottom-width: 1px; --border-color: var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-n7pvQ .framer-1ixohzr-container { flex: none; height: auto; left: -269%; position: absolute; top: 181%; transform: translate(-50%, -50%); width: 343px; z-index: 1; }`,
        `.framer-n7pvQ .framer-pjzi70, .framer-n7pvQ .framer-o8sg5c, .framer-n7pvQ .framer-iuyg6u { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.19) 11%, rgba(254, 254, 254, 0.38) 23%, rgba(254, 254, 254, 0.45) 28.999999999999996%, rgba(254, 254, 254, 0.62) 45%, rgba(254, 254, 254, 0.72) 57.99999999999999%, rgba(253, 253, 253, 0.89) 78%, var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(253, 253, 253)) 100%); bottom: 1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 154px; justify-content: center; left: 1px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: absolute; right: 1px; z-index: 2; }`,
        `.framer-n7pvQ .framer-lve91t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: 68%; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1t8olbu, .framer-n7pvQ .framer-1ikekdd, .framer-n7pvQ .framer-108spou { --border-bottom-width: 1px; --border-color: var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-n7pvQ .framer-r84i3e { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.19) 11%, rgba(254, 254, 254, 0.38) 23%, rgba(254, 254, 254, 0.45) 28.999999999999996%, rgba(254, 254, 254, 0.62) 45%, rgba(254, 254, 254, 0.72) 57.99999999999999%, rgba(253, 253, 253, 0.89) 78%, var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(253, 253, 253)) 100%); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 176px; justify-content: center; left: 1px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: absolute; right: 1px; z-index: 2; }`,
        `.framer-n7pvQ .framer-p19syk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: 32%; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1x1j9fg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: 50%; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1bg2shk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: 49%; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-j9v9k1 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1llhsr9-container { flex: none; height: 350px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1d8gtvm-container { flex: none; height: 292px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1toc2sc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n7pvQ .framer-1nf5w1g { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1vg89ub { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-n7pvQ .framer-vb0t50 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-vxv5en-container, .framer-n7pvQ .framer-mbnqyp-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-n7pvQ .framer-1n9inkx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 55px; min-width: 244px; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-n7pvQ .framer-1t95ab7 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-owgqqa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-n7pvQ .framer-8dgwa8, .framer-n7pvQ .framer-1ncmn0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n7pvQ .framer-1co84jf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...je,
        ...H,
        ...Fe,
        ...de,
        `.framer-n7pvQ[data-border="true"]::after, .framer-n7pvQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-n7pvQ.framer-72rtr7 { width: 810px; } .framer-n7pvQ .framer-1prmqhr, .framer-n7pvQ .framer-1pyv8p4, .framer-n7pvQ .framer-c3bwax, .framer-n7pvQ .framer-j9v9k1, .framer-n7pvQ .framer-1nf5w1g, .framer-n7pvQ .framer-1t95ab7 { max-width: 780px; }}`,
        `@media (max-width: 809.98px) { .framer-n7pvQ.framer-72rtr7 { width: 390px; } .framer-n7pvQ .framer-41erml { padding: 0px 12px 0px 12px; } .framer-n7pvQ .framer-1prmqhr { max-width: 600px; padding: 140px 28px 100px 28px; } .framer-n7pvQ .framer-1yot3a4-container { height: 337px; width: 364px; } .framer-n7pvQ .framer-1pyv8p4, .framer-n7pvQ .framer-c3bwax { max-width: 600px; } .framer-n7pvQ .framer-1ubv7j2 { overflow: visible; padding: 0px 0px 50px 0px; } .framer-n7pvQ .framer-njc2en { padding: 100px 0px 0px 0px; } .framer-n7pvQ .framer-a4l40c, .framer-n7pvQ .framer-d3fn2q { flex-direction: column; height: min-content; } .framer-n7pvQ .framer-fsqpi9, .framer-n7pvQ .framer-1t8olbu, .framer-n7pvQ .framer-1ikekdd, .framer-n7pvQ .framer-108spou { flex: none; height: 400px; width: 100%; } .framer-n7pvQ .framer-lve91t { height: 97%; } .framer-n7pvQ .framer-p19syk { height: 116%; } .framer-n7pvQ .framer-1bg2shk { height: 90%; } .framer-n7pvQ .framer-j9v9k1 { gap: 20px; height: min-content; max-width: 600px; padding: 0px; } .framer-n7pvQ .framer-1llhsr9-container { height: 270px; order: 0; } .framer-n7pvQ .framer-1d8gtvm-container { order: 2; } .framer-n7pvQ .framer-42i74x { order: 1; } .framer-n7pvQ .framer-1nf5w1g, .framer-n7pvQ .framer-1t95ab7 { flex-direction: column; max-width: 600px; } .framer-n7pvQ .framer-1vg89ub { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; } .framer-n7pvQ .framer-vxv5en-container, .framer-n7pvQ .framer-owgqqa, .framer-n7pvQ .framer-mbnqyp-container { flex: none; width: 100%; }}`,
      ],
      `framer-n7pvQ`,
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 5777, width: 1200 }),
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
        ...on,
        ...sn,
        ...cn,
        ...dn,
        ...fn,
        ...pn,
        ...hn,
        ..._n,
        ...vn,
        ...O(Me),
        ...O(oe),
        ...O(Ie),
        ...O(fe),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          C(ke, {}, t),
          C(q, {}, t),
          C(W, {}, t),
          C(U, {}, t),
          C(K, {}, t),
          C(Z, {}, t),
          C(Ee, {}, t),
          C(be, {}, t),
        ])
      ),
    }),
    (jn = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `SiteaugiA20Il`,
          slots: [],
          annotations: {
            siteIntrinsicWidth: `1200`,
            siteAutoSizeImages: `true`,
            siteContractVersion: `1`,
            siteLayoutTemplateFlowEffect: `true`,
            siteResponsiveScreen: `true`,
            siteImmutableVariables: `true`,
            siteDisplayContentsDiv: `false`,
            siteScrollSections: `{"dMa3I_0FQ":{"pattern":":dMa3I_0FQ","name":"the-solution"},"LC8uHYUKO":{"pattern":":LC8uHYUKO","name":"Book A Call"}}`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"acm0y4Ysf":{"layout":["fixed","auto"]},"cx0ZXnHvi":{"layout":["fixed","auto"]}}}`,
            siteAcceptsLayoutTemplate: `true`,
            siteColorSyntax: `true`,
            siteComponentViewportWidth: `true`,
            siteIntrinsicHeight: `5777`,
          },
        },
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { jn as __SiteMetadata__, $ as default, Sn as queryParamNames };
//# sourceMappingURL=home-page.mjs.map

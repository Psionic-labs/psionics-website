import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  L as n,
  O as r,
  P as i,
  _ as a,
  c as o,
  f as s,
  j as c,
  l,
  o as u,
  s as d,
  u as f,
  w as p,
  y as ee,
  z as m,
} from "./react-runtime.mjs";
import { S as h, a as g, r as te, t as _ } from "./motion-runtime.mjs";
import {
  A as v,
  At as y,
  C as ne,
  D as b,
  Dt as x,
  Et as re,
  F as ie,
  G as ae,
  H as S,
  I as C,
  K as oe,
  P as w,
  S as T,
  St as E,
  U as D,
  W as O,
  X as k,
  _ as se,
  _t as ce,
  a as A,
  d as le,
  ft as ue,
  h as de,
  ht as fe,
  i as pe,
  j,
  k as me,
  kt as he,
  lt as ge,
  n as _e,
  o as M,
  p as ve,
  pt as ye,
  rt as be,
  s as N,
  t as xe,
  ut as Se,
  v as Ce,
  vt as we,
  wt as Te,
  x as Ee,
  xt as De,
} from "./framer-runtime.mjs";
import { n as Oe, t as ke } from "./layout-primitives.mjs";
import {
  a as Ae,
  c as je,
  i as P,
  l as Me,
  o as Ne,
  r as Pe,
  s as Fe,
  u as Ie,
} from "./shared-library.mjs";
import { a as Le, c as Re, o as ze, s as Be } from "./framer-style-utils.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./text-style-heading.mjs";
import { n as Ge, t as Ke } from "./interactive-ascii-component.mjs";
import { n as qe, t as Je } from "./framer-visual-components.mjs";
import {
  a as Ye,
  c as Xe,
  i as Ze,
  n as Qe,
  o as $e,
  r as et,
  s as tt,
  t as nt,
} from "./ui-component-library.mjs";
import { i as rt, n as it, r as at, t as ot } from "./heading-style-preset.mjs";
import { n as st, t as ct } from "./react-component-variant-d.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./text-style-body.mjs";
import { a as pt, i as mt, t as ht } from "./rich-text-component.mjs";
import { i as gt, n as _t, r as vt, t as yt } from "./font-style-config.mjs";
import { i as bt, n as xt, r as St, t as Ct } from "./react-component-variant-b.mjs";
import { i as wt, n as Tt, r as Et, t as Dt } from "./route-metadata-career-alt.mjs";
import Ot, {
  t as kt,
} from "./case-study-data-component.mjs";
function At(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  F,
  Bt = e(() => {
    (u(),
      k(),
      _(),
      p(),
      Ve(),
      Ie(),
      Oe(),
      (jt = [`dagONyUiP`, `FmAVDY4oj`]),
      (Mt = `framer-tPgft`),
      (Nt = { dagONyUiP: `framer-v-1ajkjcy`, FmAVDY4oj: `framer-v-1gmaiai` }),
      (Pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ft = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (It = { Primary: `dagONyUiP`, Secondary: `FmAVDY4oj` }),
      (Lt = h.create(i)),
      (Rt = ({
        height: e,
        icon: t,
        id: n,
        tagline: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        lX0ex1u3t: t ?? o.lX0ex1u3t ?? ke,
        LxfIyHtzE: i ?? o.LxfIyHtzE ?? `0%`,
        PzX00TrG5: r ?? o.PzX00TrG5 ?? `Manual Human Intervention Rate`,
        variant: It[o.variant] ?? o.variant ?? `dagONyUiP`,
      })),
      (zt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (F = x(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce();
          ge();
          let {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              lX0ex1u3t: g,
              LxfIyHtzE: _,
              PzX00TrG5: v,
              ...y
            } = Rt(e),
            {
              baseVariant: ne,
              classNames: x,
              clearLoadingGesture: ie,
              gestureHandlers: ae,
              gestureVariant: S,
              isLoading: C,
              setGestureState: oe,
              setVariant: T,
              variants: E,
            } = re({
              cycleOrder: jt,
              defaultVariant: `dagONyUiP`,
              ref: a,
              variant: m,
              variantClassNames: Nt,
            }),
            D = zt(e, E),
            O = w(Mt, We, Fe);
          return o(te, {
            id: p ?? s,
            children: o(Lt, {
              animate: E,
              initial: !1,
              children: o(Ft, {
                value: Pt,
                children: l(h.div, {
                  ...y,
                  ...ae,
                  className: w(O, `framer-1ajkjcy`, f, x),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: D,
                  layoutId: `dagONyUiP`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    ...d,
                  },
                  ...At(
                    { FmAVDY4oj: { "data-framer-name": `Secondary` } },
                    ne,
                    S,
                  ),
                  children: [
                    o(h.div, {
                      className: `framer-k50zti`,
                      "data-border": !0,
                      "data-framer-name": `Icon`,
                      layoutDependency: D,
                      layoutId: `Z9ciOzqwE`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                      },
                      children: o(de, {
                        animated: !0,
                        className: `framer-1xv39cd`,
                        Component: g,
                        layoutDependency: D,
                        layoutId: `S37DDCcKv`,
                        style: {
                          "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                        },
                      }),
                    }),
                    l(h.div, {
                      className: `framer-icz2eg`,
                      "data-framer-name": `Text`,
                      layoutDependency: D,
                      layoutId: `A5uxQaraU`,
                      children: [
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(h.h5, {
                              className: `framer-styles-preset-1217b5x`,
                              "data-styles-preset": `LBghXxOCz`,
                              dir: `auto`,
                              children: `0%`,
                            }),
                          }),
                          className: `framer-1afrj2a`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `W78mHSvUB`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(h.p, {
                              className: `framer-styles-preset-1i4fe7d`,
                              "data-styles-preset": `NbDFs5rgP`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                              },
                              children: `Manual Human Intervention Rate`,
                            }),
                          }),
                          className: `framer-1myn07w`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `Pr6FL1K0I`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-tPgft.framer-1b4i25i, .framer-tPgft .framer-1b4i25i { display: block; }`,
          `.framer-tPgft.framer-1ajkjcy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 220px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 300px; }`,
          `.framer-tPgft .framer-k50zti { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; }`,
          `.framer-tPgft .framer-1xv39cd { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-tPgft .framer-icz2eg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-tPgft .framer-1afrj2a, .framer-tPgft .framer-1myn07w { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-tPgft.framer-v-1gmaiai.framer-1ajkjcy { padding: 18px; }`,
          ...He,
          ...je,
          `.framer-tPgft[data-border="true"]::after, .framer-tPgft [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-tPgft`,
      )),
      (F.displayName = `Metric Card`),
      (F.defaultProps = { height: 220, width: 300 }),
      j(F, {
        variant: {
          options: [`dagONyUiP`, `FmAVDY4oj`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: N.Enum,
        },
        lX0ex1u3t: {
          defaultValue: {
            identifier: `local-module:vector/MVGBYZO38:default`,
            moduleId: `RX2izvb4d7iG54PUwzit`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: N.VectorSetItem,
        },
        LxfIyHtzE: {
          defaultValue: `0%`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onLxfIyHtzEChange: { changes: `LxfIyHtzE`, type: N.ChangeHandler },
        PzX00TrG5: {
          defaultValue: `Manual Human Intervention Rate`,
          displayTextArea: !0,
          title: `Tagline`,
          type: N.String,
        },
        onPzX00TrG5Change: { changes: `PzX00TrG5`, type: N.ChangeHandler },
      }),
      v(
        F,
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
          ...D(Ue),
          ...D(Me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Vt,
  Ht,
  Ut,
  Wt,
  Gt = e(() => {
    (k(),
      ie.loadFonts([
        `GF;Google Sans Flex-variable-regular`,
        `GF;Google Sans Flex-variable-regularVF=Im9wc3oiIDE4LCAid2R0aCIgMTAwLCAid2dodCIgNDc1LCAiR1JBRCIgMCwgIlJPTkQiIDAsICJzbG50IiAw`,
        `GF;Google Sans Flex-variable-regularVF=Im9wc3oiIDE4LCAid2R0aCIgMTAwLCAid2dodCIgNDc1LCAiR1JBRCIgMCwgIlJPTkQiIDAsICJzbG50IiAw`,
        `GF;Google Sans Flex-variable-regularVF=Im9wc3oiIDE4LCAid2R0aCIgMTAwLCAid2dodCIgNDc1LCAiR1JBRCIgMCwgIlJPTkQiIDAsICJzbG50IiAw`,
      ]),
      (Vt = [
        {
          defaultValue: 18,
          maxValue: 144,
          minValue: 6,
          name: `Optical Size`,
          tag: `opsz`,
        },
        {
          defaultValue: 100,
          maxValue: 151,
          minValue: 25,
          name: `Width`,
          tag: `wdth`,
        },
        {
          defaultValue: 400,
          maxValue: 1e3,
          minValue: 1,
          name: `Weight`,
          tag: `wght`,
        },
        {
          defaultValue: 0,
          maxValue: 100,
          minValue: 0,
          name: `Grade`,
          tag: `GRAD`,
        },
        {
          defaultValue: 0,
          maxValue: 100,
          minValue: 0,
          name: `Roundness`,
          tag: `ROND`,
        },
        {
          defaultValue: 0,
          maxValue: 0,
          minValue: -10,
          name: `Slant`,
          tag: `slnt`,
        },
      ]),
      (Ht = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Google Sans Flex Variable`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Google Sans Flex`,
              url: `https://fonts.gstatic.com/s/googlesansflex/v21/t5t7IQcYNIWbFgDgAAzZ34auoVyXip6sfhcat2c.woff2`,
              variationAxes: Vt,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ut = [
        `.framer-IqqBl .framer-styles-preset-11ql9k5:not(.rich-text-wrapper), .framer-IqqBl .framer-styles-preset-11ql9k5.rich-text-wrapper p { --framer-font-family: "Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif; --framer-font-family-bold: "Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif; --framer-font-family-italic: "Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 18, "wdth" 100, "wght" 475, "GRAD" 0, "ROND" 0, "slnt" 0; --framer-font-variation-axes-bold: "opsz" 18, "wdth" 100, "wght" 475, "GRAD" 0, "ROND" 0, "slnt" 0; --framer-font-variation-axes-bold-italic: "opsz" 18, "wdth" 100, "wght" 475, "GRAD" 0, "ROND" 0, "slnt" 0; --framer-font-variation-axes-italic: "opsz" 18, "wdth" 100, "wght" 475, "GRAD" 0, "ROND" 0, "slnt" 0; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Wt = `framer-IqqBl`));
  });
function Kt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  I,
  an = e(() => {
    (u(),
      k(),
      _(),
      p(),
      Ge(),
      (qt = S(Ke)),
      (Jt = [`mheU49Ktl`, `TAn6oxf0b`]),
      (Yt = `framer-TFTrA`),
      (Xt = { mheU49Ktl: `framer-v-1960qzr`, TAn6oxf0b: `framer-v-cu3w43` }),
      (Zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($t = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (en = { ASCII: `mheU49Ktl`, Image: `TAn6oxf0b` }),
      (tn = h.create(i)),
      (nn = ({ height: e, id: t, image: n, width: r, ...i }) => ({
        ...i,
        LZn_E6rZp: n ??
          i.LZn_E6rZp ?? {
            pixelHeight: 424,
            pixelWidth: 424,
            src: `https://framerusercontent.com/images/2Q3WWGjKGkDquxOIYWYYT2Rbs.jpeg?width=424&height=424`,
          },
        variant: en[i.variant] ?? i.variant ?? `mheU49Ktl`,
      })),
      (rn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (I = x(
        a(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: s, setLocale: c } = ce(),
            u = ge(),
            {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              LZn_E6rZp: g,
              ..._
            } = nn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ne,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ie,
              setGestureState: ae,
              setVariant: S,
              variants: C,
            } = re({
              cycleOrder: Jt,
              defaultVariant: `mheU49Ktl`,
              ref: i,
              variant: m,
              variantClassNames: Xt,
            }),
            oe = rn(e, C),
            T = w(Yt);
          return o(te, {
            id: p ?? a,
            children: o(tn, {
              animate: C,
              initial: !1,
              children: o($t, {
                value: Zt,
                children: l(h.div, {
                  ..._,
                  ...b,
                  className: w(T, `framer-1960qzr`, f, y),
                  "data-framer-name": `ASCII`,
                  layoutDependency: oe,
                  layoutId: `mheU49Ktl`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: `100%`,
                    borderBottomRightRadius: `100%`,
                    borderTopLeftRadius: `100%`,
                    borderTopRightRadius: `100%`,
                    ...d,
                  },
                  ...Kt({ TAn6oxf0b: { "data-framer-name": `Image` } }, v, x),
                  children: [
                    o(A, {
                      children: o(me, {
                        className: `framer-1xn1a1h-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: oe,
                        layoutId: `NfXpzEY9A-container`,
                        nodeId: `NfXpzEY9A`,
                        rendersWithMotion: !0,
                        scopeId: `LkEx95d7t`,
                        children: o(Ke, {
                          blur: 0,
                          brightness: 52,
                          characterSet: `detailed`,
                          color: {
                            color: `rgb(51, 51, 51)`,
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
                          id: `NfXpzEY9A`,
                          image: Qt(g),
                          invertColors: !1,
                          layoutId: `NfXpzEY9A`,
                          outputWidth: 205,
                          radius: `100%`,
                          sizing: `fill`,
                          staticEffect: { interval: 0.1, preview: !1 },
                          style: { height: `100%`, width: `100%` },
                          whiteMode: `ignore`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    o(ve, {
                      as: `figure`,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((u?.y || 0) + (u?.height || 44) - 44),
                        pixelHeight: 424,
                        pixelWidth: 424,
                        sizes: u?.width || `100vw`,
                        ...Qt(g),
                      },
                      className: `framer-18qn4iu`,
                      draggable: `false`,
                      layoutDependency: oe,
                      layoutId: `FMnKYsbT_`,
                      style: { opacity: 0 },
                      variants: { TAn6oxf0b: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-TFTrA.framer-ymxpci, .framer-TFTrA .framer-ymxpci { display: block; }`,
          `.framer-TFTrA.framer-1960qzr { height: 44px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TFTrA .framer-1xn1a1h-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-TFTrA .framer-18qn4iu { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 44px); left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-TFTrA`,
      )),
      (I.displayName = `Avatar`),
      (I.defaultProps = { height: 44, width: 44 }),
      j(I, {
        variant: {
          options: [`mheU49Ktl`, `TAn6oxf0b`],
          optionTitles: [`ASCII`, `Image`],
          title: `Variant`,
          type: N.Enum,
        },
        LZn_E6rZp: {
          __defaultAssetReference: `data:site/asset-reference,2Q3WWGjKGkDquxOIYWYYT2Rbs.jpeg?originalFilename=1686763233280.jpeg&width=424&height=424`,
          title: `Image`,
          type: N.ResponsiveImage,
        },
      }),
      v(
        I,
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
          ...qt,
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function on(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var sn,
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
  L,
  xn = e(() => {
    (u(),
      k(),
      _(),
      p(),
      Re(),
      Gt(),
      an(),
      (sn = S(I)),
      (cn = ae(I)),
      (ln = [`Jd7mgRdXj`, `dVddZNlaa`]),
      (un = `framer-iClTA`),
      (dn = { dVddZNlaa: `framer-v-1hyr3bq`, Jd7mgRdXj: `framer-v-as1pr3` }),
      (fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (pn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (mn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (hn = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (gn = { Primary: `Jd7mgRdXj`, Secondary: `dVddZNlaa` }),
      (_n = h.create(i)),
      (vn = { ASCII: `mheU49Ktl`, Image: `TAn6oxf0b` }),
      (yn = ({
        avatarType: e,
        designation: t,
        height: n,
        id: r,
        image: i,
        name1: a,
        width: o,
        ...s
      }) => ({
        ...s,
        aO3yCJ3XH: i ??
          s.aO3yCJ3XH ?? {
            pixelHeight: 424,
            pixelWidth: 424,
            src: `https://framerusercontent.com/images/2Q3WWGjKGkDquxOIYWYYT2Rbs.jpeg?width=424&height=424`,
          },
        QFyf9SHzj: vn[e] ?? e ?? s.QFyf9SHzj ?? `mheU49Ktl`,
        Uu1XFyAkB: t ?? s.Uu1XFyAkB ?? `VP of Engineering`,
        variant: gn[s.variant] ?? s.variant ?? `Jd7mgRdXj`,
        vmZNaaJGK: a ?? s.vmZNaaJGK ?? `Cata Giraldo`,
      })),
      (bn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (L = x(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce(),
            d = ge(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              vmZNaaJGK: _,
              Uu1XFyAkB: v,
              aO3yCJ3XH: y,
              QFyf9SHzj: ne,
              ...x
            } = yn(e),
            {
              baseVariant: ie,
              classNames: ae,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: oe,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = re({
              cycleOrder: ln,
              defaultVariant: `Jd7mgRdXj`,
              ref: a,
              variant: g,
              variantClassNames: dn,
            }),
            k = bn(e, O),
            se = w(un, Le, Wt);
          return o(te, {
            id: m ?? s,
            children: o(_n, {
              animate: O,
              initial: !1,
              children: o(hn, {
                value: fn,
                children: l(h.div, {
                  ...x,
                  ...C,
                  className: w(se, `framer-as1pr3`, p, ae),
                  "data-framer-name": `Primary`,
                  layoutDependency: k,
                  layoutId: `Jd7mgRdXj`,
                  ref: a,
                  style: { ...f },
                  ...on(
                    { dVddZNlaa: { "data-framer-name": `Secondary` } },
                    ie,
                    oe,
                  ),
                  children: [
                    l(h.div, {
                      className: `framer-1oboy3f`,
                      "data-framer-name": `Name & Designation`,
                      layoutDependency: k,
                      layoutId: `RLrfpayOr`,
                      children: [
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(h.p, {
                              className: `framer-styles-preset-79bu04`,
                              "data-styles-preset": `GMp6ZDbq7`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                              },
                              children: `Cata Giraldo`,
                            }),
                          }),
                          className: `framer-gh0ix4`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `D0jXyXsVy`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(h.p, {
                              className: `framer-styles-preset-11ql9k5`,
                              "data-styles-preset": `Ln16zqbJH`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                              },
                              children: `VP of Engineering`,
                            }),
                          }),
                          className: `framer-wuyfeo`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `laWbrlQHp`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    o(A, {
                      height: 44,
                      width: `44px`,
                      y: (d?.y || 0) + (0 + ((d?.height || 52) - 0 - 44) / 2),
                      children: o(me, {
                        className: `framer-16bp0by-container`,
                        layoutDependency: k,
                        layoutId: `AWJ72MKvu-container`,
                        nodeId: `AWJ72MKvu`,
                        rendersWithMotion: !0,
                        scopeId: `UmhBmOC5O`,
                        children: o(I, {
                          height: `100%`,
                          id: `AWJ72MKvu`,
                          layoutId: `AWJ72MKvu`,
                          LZn_E6rZp: pn(y),
                          style: { height: `100%`, width: `100%` },
                          variant: mn(ne),
                          width: `100%`,
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iClTA.framer-4r9cmx, .framer-iClTA .framer-4r9cmx { display: block; }`,
          `.framer-iClTA.framer-as1pr3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 557px; }`,
          `.framer-iClTA .framer-1oboy3f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-iClTA .framer-gh0ix4, .framer-iClTA .framer-wuyfeo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-iClTA .framer-16bp0by-container { flex: none; height: 44px; position: relative; width: 44px; }`,
          `.framer-iClTA.framer-v-1hyr3bq.framer-as1pr3 { gap: 20px; }`,
          `.framer-iClTA.framer-v-1hyr3bq .framer-1oboy3f { order: 1; }`,
          `.framer-iClTA.framer-v-1hyr3bq .framer-16bp0by-container { order: 0; }`,
          ...ze,
          ...Ut,
        ],
        `framer-iClTA`,
      )),
      (L.displayName = `Company Representative`),
      (L.defaultProps = { height: 52, width: 557 }),
      j(L, {
        variant: {
          options: [`Jd7mgRdXj`, `dVddZNlaa`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: N.Enum,
        },
        vmZNaaJGK: {
          defaultValue: `Cata Giraldo`,
          displayTextArea: !1,
          title: `Name`,
          type: N.String,
        },
        onvmZNaaJGKChange: { changes: `vmZNaaJGK`, type: N.ChangeHandler },
        Uu1XFyAkB: {
          defaultValue: `VP of Engineering`,
          displayTextArea: !1,
          title: `Designation`,
          type: N.String,
        },
        onUu1XFyAkBChange: { changes: `Uu1XFyAkB`, type: N.ChangeHandler },
        aO3yCJ3XH: {
          __defaultAssetReference: `data:site/asset-reference,2Q3WWGjKGkDquxOIYWYYT2Rbs.jpeg?originalFilename=1686763233280.jpeg&width=424&height=424`,
          title: `Image`,
          type: N.ResponsiveImage,
        },
        QFyf9SHzj: cn?.variant && {
          ...cn.variant,
          defaultValue: `mheU49Ktl`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Avatar Type`,
        },
        onQFyf9SHzjChange: { changes: `QFyf9SHzj`, type: N.ChangeHandler },
      }),
      v(
        L,
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
          ...sn,
          ...D(Be),
          ...D(Ht),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (L.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([C(I, {}, t)])),
      }));
  }),
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn = e(() => {
    (u(),
      k(),
      p(),
      (Sn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 6.478 40.92 C 4.218 34.109 5.001 26.654 8.628 20.461 C 14.083 10.966 25.047 6.082 35.754 8.378 C 41.786 1.667 50.939 -1.318 59.767 0.546 C 68.596 2.409 75.761 8.839 78.567 17.415 C 85.6 18.857 91.671 23.261 95.225 29.499 C 100.74 38.979 99.488 50.938 92.129 59.07 C 94.401 65.879 93.627 73.336 90.004 79.533 C 84.542 89.031 73.571 93.915 62.858 91.616 C 58.094 96.984 51.248 100.039 44.07 100 C 33.096 100.01 23.373 92.925 20.02 82.474 C 12.989 81.029 6.921 76.626 3.366 70.391 C -2.082 60.928 -0.826 49.035 6.478 40.92 Z M 44.07 93.458 C 48.45 93.465 52.692 91.931 56.054 89.124 L 55.466 88.787 L 35.554 77.295 C 34.547 76.703 33.927 75.625 33.92 74.458 L 33.92 46.386 L 25.504 51.253 C 25.419 51.296 25.36 51.376 25.345 51.47 L 25.345 74.733 C 25.368 85.065 33.738 93.435 44.07 93.458 Z M 84.321 76.266 C 86.519 72.473 87.308 68.026 86.55 63.708 L 85.958 64.062 L 66.029 75.558 C 65.026 76.146 63.782 76.146 62.779 75.558 L 38.433 61.52 L 38.433 71.237 C 38.436 71.339 38.487 71.435 38.57 71.495 L 58.737 83.124 C 67.698 88.283 79.142 85.215 84.321 76.266 Z M 89.571 32.899 C 87.359 29.08 83.866 26.168 79.713 24.678 L 79.713 48.332 C 79.727 49.496 79.108 50.575 78.096 51.149 L 53.866 65.128 L 62.283 69.995 C 62.376 70.044 62.486 70.044 62.579 69.995 L 82.704 58.387 C 91.651 53.205 94.721 41.763 89.571 32.799 Z M 20.416 48.961 L 44.72 34.849 L 36.304 29.999 C 36.212 29.951 36.103 29.951 36.012 29.999 L 15.883 41.632 C 9.6 45.256 5.975 52.182 6.578 59.409 C 7.181 66.637 11.903 72.867 18.699 75.399 L 18.699 51.745 C 18.735 50.584 19.379 49.528 20.395 48.966 Z M 12.041 36.365 L 12.628 36.011 L 32.52 24.42 C 33.53 23.827 34.781 23.827 35.791 24.42 L 60.116 38.457 L 60.116 28.736 C 60.127 28.637 60.082 28.539 60 28.482 L 39.875 16.869 C 33.577 13.245 25.753 13.585 19.794 17.742 C 13.835 21.899 10.814 29.125 12.041 36.286 Z M 64.708 53.595 L 73.125 48.745 C 73.211 48.693 73.269 48.606 73.283 48.507 L 73.283 25.311 C 73.269 18.048 69.062 11.447 62.484 8.367 C 55.906 5.287 48.141 6.283 42.554 10.924 L 43.145 11.257 L 63.054 22.749 C 64.062 23.339 64.684 24.418 64.692 25.586 Z M 60.137 43.741 L 49.296 37.491 L 38.433 43.741 L 38.433 56.237 L 49.254 62.487 L 60.116 56.237 Z" fill="var(--plmvgy, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="Z0WTkXAXG" transform="translate(1 0) rotate(-269 49.321 50)" width="98.64237781933947px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Cn = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(h.div, { ...a, layoutId: r, ref: t })
          : o(`div`, { ...a, ref: t });
      })),
      (wn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        IAxc5_JqM:
          e ??
          i.IAxc5_JqM ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Tn = x(
        a(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            IAxc5_JqM: s,
            ...c
          } = wn(e);
          return o(Cn, {
            ...c,
            className: w(`framer-lvoyf`, r),
            layoutId: i,
            ref: t,
            style: { "--plmvgy": s, ...n },
          });
        }),
        [
          `.framer-lvoyf { -webkit-mask: ${Sn}; aspect-ratio: 1; background-color: var(--plmvgy); mask: ${Sn}; width: 100px; }`,
        ],
        `framer-lvoyf`,
      )),
      (Tn.displayName = `Openly AI`),
      j(Tn, {
        IAxc5_JqM: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: N.Color,
        },
      }),
      (En = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Icon`,
            slots: [],
            annotations: {
              siteSupportedLayoutHeight: `any-prefer-fixed`,
              siteVariables: `{"IAxc5_JqM":"color"}`,
              siteIntrinsicWidth: `100`,
              siteIntrinsicHeight: `100`,
              siteVector: `{"name":"Openly AI","color":{"type":"variable","value":"plmvgy"},"set":{"localId":"vectorSet/vRgSEsJ2A","id":"vRgSEsJ2A","moduleId":"jZMfhGvjZ8OWjOHEtIG9"}}`,
              siteSupportedLayoutWidth: `any-prefer-fixed`,
              siteContractVersion: `1`,
              siteImmutableVariables: `true`,
            },
          },
          __SiteMetadata__: { type: `variable` },
        },
      }));
  }),
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  R,
  Fn = e(() => {
    (u(),
      k(),
      _(),
      p(),
      Ne(),
      Dn(),
      (On = `framer-iEGgp`),
      (kn = { ouCAJRiqE: `framer-v-10iruvd` }),
      (An = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jn = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(g.Provider, { value: a, children: n });
      }),
      (Mn = h.create(i)),
      (Nn = ({ height: e, icon: t, id: n, name1: r, width: i, ...a }) => ({
        ...a,
        en9XZSCTB: t ?? a.en9XZSCTB ?? Tn,
        UxmUq_827: r ?? a.UxmUq_827 ?? `Openly AI`,
      })),
      (Pn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (R = x(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce();
          ge();
          let {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              en9XZSCTB: g,
              UxmUq_827: _,
              ...v
            } = Nn(e),
            {
              baseVariant: y,
              classNames: ne,
              clearLoadingGesture: x,
              gestureHandlers: ie,
              gestureVariant: ae,
              isLoading: S,
              setGestureState: C,
              setVariant: oe,
              variants: T,
            } = re({
              defaultVariant: `ouCAJRiqE`,
              ref: a,
              variant: m,
              variantClassNames: kn,
            }),
            E = Pn(e, T),
            D = w(On, Pe);
          return o(te, {
            id: p ?? s,
            children: o(Mn, {
              animate: T,
              initial: !1,
              children: o(jn, {
                value: An,
                children: l(h.div, {
                  ...v,
                  ...ie,
                  className: w(D, `framer-10iruvd`, f, ne),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: E,
                  layoutId: `ouCAJRiqE`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                    ...d,
                  },
                  children: [
                    o(de, {
                      animated: !0,
                      className: `framer-l46vk`,
                      Component: g,
                      layoutDependency: E,
                      layoutId: `cfOnicSoF`,
                      style: {
                        "--plmvgy": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                      },
                    }),
                    o(b, {
                      __fromCanvasComponent: !0,
                      children: o(i, {
                        children: o(h.p, {
                          className: `framer-styles-preset-ccv9s9`,
                          "data-styles-preset": `Bo2HZoBjr`,
                          dir: `auto`,
                          style: { "--framer-text-alignment": `left` },
                          children: `Openly AI`,
                        }),
                      }),
                      className: `framer-vyk6p1`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `d3O5xYjSK`,
                      text: _,
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
          `.framer-iEGgp.framer-g0n6ve, .framer-iEGgp .framer-g0n6ve { display: block; }`,
          `.framer-iEGgp.framer-10iruvd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 15px 0px 15px; position: relative; width: min-content; }`,
          `.framer-iEGgp .framer-l46vk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-iEGgp .framer-vyk6p1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...P,
          `.framer-iEGgp[data-border="true"]::after, .framer-iEGgp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iEGgp`,
      )),
      (R.displayName = `Tech Stack Tag`),
      (R.defaultProps = { height: 40, width: 121 }),
      j(R, {
        en9XZSCTB: {
          defaultValue: {
            identifier: `local-module:vector/LjiGtH0hw:default`,
            moduleId: `NZzJHsbqZ3WCbCej5tem`,
          },
          setModuleId: `jZMfhGvjZ8OWjOHEtIG9`,
          title: `Icon`,
          type: N.VectorSetItem,
        },
        UxmUq_827: {
          defaultValue: `Openly AI`,
          displayTextArea: !1,
          title: `Name`,
          type: N.String,
        },
        onUxmUq_827Change: { changes: `UxmUq_827`, type: N.ChangeHandler },
      }),
      v(
        R,
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
          ...D(Ae),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function In(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function z(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ln(e) {
  throw Error(`Unexpected value: ${e}`);
}
function B(e, t, n, r) {
  (z(e >= t, e, `outside lower bound for`, r),
    z(e <= n, e, `outside upper bound for`, r));
}
function Rn(e) {
  return typeof e == `string`;
}
function zn(e) {
  return Number.isFinite(e);
}
function Bn(e) {
  return e === null;
}
function Vn(e) {
  if (Bn(e)) return 0;
  switch (e.type) {
    case N.Array:
      return 1;
    case N.Boolean:
      return 2;
    case N.Color:
      return 3;
    case N.Date:
      return 4;
    case N.Enum:
      return 5;
    case N.File:
      return 6;
    case N.ResponsiveImage:
      return 10;
    case N.Link:
      return 7;
    case N.Number:
      return 8;
    case N.Object:
      return 9;
    case N.RichText:
      return 11;
    case N.String:
      return 12;
    case N.VectorSetItem:
      return 13;
    default:
      Ln(e);
  }
}
function Hn(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = V.read(e);
    n.push(t);
  }
  return { type: N.Array, value: n };
}
function Un(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) V.write(e, n);
}
function Wn(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = V.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Gn(e) {
  return { type: N.Boolean, value: e.readUint8() !== 0 };
}
function Kn(e, t) {
  e.writeUint8(+!!t.value);
}
function qn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Jn(e) {
  return { type: N.Color, value: e.readString() };
}
function Yn(e, t) {
  e.writeString(t.value);
}
function Xn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Zn(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: N.Date, value: n.toISOString() };
}
function Qn(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function $n(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function er(e) {
  return { type: N.Enum, value: e.readString() };
}
function tr(e, t) {
  e.writeString(t.value);
}
function nr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function rr(e) {
  return { type: N.File, value: e.readString() };
}
function ir(e, t) {
  e.writeString(t.value);
}
function ar(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function or(e) {
  return { type: N.Link, value: e.readJson() };
}
function sr(e, t) {
  e.writeJson(t.value);
}
function cr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function lr(e) {
  return { type: N.Number, value: e.readFloat64() };
}
function ur(e, t) {
  e.writeFloat64(t.value);
}
function dr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fr(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = V.read(e);
  }
  return { type: N.Object, value: n };
}
function pr(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), V.write(e, r));
}
function mr(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = V.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function hr(e) {
  return { type: N.ResponsiveImage, value: e.readJson() };
}
function gr(e, t) {
  e.writeJson(t.value);
}
function _r(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function vr(e) {
  let t = e.readInt8();
  if (t === 0) return { type: N.RichText, value: e.readUint32() };
  if (t === 1) return { type: N.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function yr(e, t) {
  if (zn(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Rn(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function br(e, t) {
  let n = e.value,
    r = t.value;
  if ((zn(n) && zn(r)) || (Rn(n) && Rn(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function xr(e) {
  return { type: N.String, value: e.readString() };
}
function Sr(e, t) {
  e.writeString(t.value);
}
function Cr(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function wr(e) {
  return { type: N.VectorSetItem, value: e.readUint32() };
}
function Tr(e, t) {
  e.writeUint32(t.value);
}
function Er(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Dr(e) {
  let t = Math.floor(Zr * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Or(e, t) {
  let n = Ar(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await $r(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new ei(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function kr(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ar(e) {
  z(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var V,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  H,
  Vr,
  U,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  W,
  G,
  Jr,
  K,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  q,
  ti,
  ni,
  ri,
  ii = e(() => {
    (n(),
      k(),
      (jr = Object.create),
      (Mr = Object.defineProperty),
      (Nr = Object.getOwnPropertyDescriptor),
      (Pr = Object.getOwnPropertyNames),
      (Fr = Object.getPrototypeOf),
      (Ir = Object.prototype.hasOwnProperty),
      (Lr = (e, t, n) =>
        t in e
          ? Mr(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (Rr = (e, t) =>
        function () {
          return (
            t || (0, e[Pr(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (zr = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Pr(t))
            Ir.call(e, i) ||
              i === n ||
              Mr(e, i, {
                get: () => t[i],
                enumerable: !(r = Nr(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Br = (e, t, n) => (
        (n = e == null ? {} : jr(Fr(e))),
        zr(
          !t && e && e.__esModule
            ? n
            : Mr(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (H = (e, t, n) => Lr(e, typeof t == `symbol` ? t : t + ``, n)),
      (Vr = Br(
        Rr({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (U = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Hr = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = U.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = U.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = U.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = U.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = U.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = U.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = U.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = U.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = U.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = U.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            H(this, `offset`, 0),
            H(this, `view`),
            H(this, `decoder`, new TextDecoder()),
            (this.view = In(this.bytes)));
        }
      }),
      m !== void 0 && m.requestIdleCallback,
      (Ur = 1024),
      (Wr = 1.5),
      (Gr = (e) => 2 ** e - 1),
      (Kr = (e) => -(2 ** (e - 1))),
      (qr = (e) => 2 ** (e - 1) - 1),
      (W = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: Kr(8),
        Int16: Kr(16),
        Int32: Kr(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (G = {
        Uint8: Gr(8),
        Uint16: Gr(16),
        Uint32: Gr(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: qr(8),
        Int16: qr(16),
        Int32: qr(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (Jr = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Wr) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = In(n)));
        }
        writeUint8(e) {
          B(e, W.Uint8, G.Uint8, `Uint8`);
          let t = U.Uint8;
          (this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t));
        }
        writeUint16(e) {
          B(e, W.Uint16, G.Uint16, `Uint16`);
          let t = U.Uint16;
          (this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t));
        }
        writeUint32(e) {
          B(e, W.Uint32, G.Uint32, `Uint32`);
          let t = U.Uint32;
          (this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t));
        }
        writeUint64(e) {
          B(e, W.Uint64, G.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          B(e, W.BigUint64, G.BigUint64, `BigUint64`);
          let t = U.BigUint64;
          (this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t));
        }
        writeInt8(e) {
          B(e, W.Int8, G.Int8, `Int8`);
          let t = U.Int8;
          (this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t));
        }
        writeInt16(e) {
          B(e, W.Int16, G.Int16, `Int16`);
          let t = U.Int16;
          (this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t));
        }
        writeInt32(e) {
          B(e, W.Int32, G.Int32, `Int32`);
          let t = U.Int32;
          (this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t));
        }
        writeInt64(e) {
          B(e, W.Int64, G.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          B(e, W.BigInt64, G.BigInt64, `BigInt64`);
          let t = U.BigInt64;
          (this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t));
        }
        writeFloat32(e) {
          let t = U.Float32;
          (this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t));
        }
        writeFloat64(e) {
          let t = U.Float64;
          (this.ensureLength(t),
            this.view.setFloat64(this.offset, e),
            (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t),
            this.bytes.set(e, this.offset),
            (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (H(this, `offset`, 0),
            H(this, `bytes`, new Uint8Array(Ur)),
            H(this, `view`, In(this.bytes)),
            H(this, `encoder`, new TextEncoder()),
            H(this, `encodedStrings`, new Map()));
        }
      }),
      (K = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            z(zn(n), `Invalid chunkId`),
            z(zn(r), `Invalid offset`),
            z(zn(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (z(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Hn(e);
            case 2:
              return Gn(e);
            case 3:
              return Jn(e);
            case 4:
              return Zn(e);
            case 5:
              return er(e);
            case 6:
              return rr(e);
            case 7:
              return or(e);
            case 8:
              return lr(e);
            case 9:
              return fr(e);
            case 10:
              return hr(e);
            case 11:
              return vr(e);
            case 12:
              return xr(e);
            case 13:
              return wr(e);
            default:
              Ln(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Vn(t);
            if ((e.writeUint8(n), !Bn(t)))
              switch (t.type) {
                case N.Array:
                  return Un(e, t);
                case N.Boolean:
                  return Kn(e, t);
                case N.Color:
                  return Yn(e, t);
                case N.Date:
                  return Qn(e, t);
                case N.Enum:
                  return tr(e, t);
                case N.File:
                  return ir(e, t);
                case N.Link:
                  return sr(e, t);
                case N.Number:
                  return ur(e, t);
                case N.Object:
                  return pr(e, t);
                case N.ResponsiveImage:
                  return gr(e, t);
                case N.RichText:
                  return yr(e, t);
                case N.VectorSetItem:
                  return Tr(e, t);
                case N.String:
                  return Sr(e, t);
                default:
                  Ln(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Vn(e),
              i = Vn(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (Bn(e) || Bn(t)) return 0;
            switch (e.type) {
              case N.Array:
                return (z(t.type === N.Array), Wn(e, t, n));
              case N.Boolean:
                return (z(t.type === N.Boolean), qn(e, t));
              case N.Color:
                return (z(t.type === N.Color), Xn(e, t));
              case N.Date:
                return (z(t.type === N.Date), $n(e, t));
              case N.Enum:
                return (z(t.type === N.Enum), nr(e, t));
              case N.File:
                return (z(t.type === N.File), ar(e, t));
              case N.Link:
                return (z(t.type === N.Link), cr(e, t));
              case N.Number:
                return (z(t.type === N.Number), dr(e, t));
              case N.Object:
                return (z(t.type === N.Object), mr(e, t, n));
              case N.ResponsiveImage:
                return (z(t.type === N.ResponsiveImage), _r(e, t));
              case N.RichText:
                return (z(t.type === N.RichText), br(e, t));
              case N.VectorSetItem:
                return (z(t.type === N.VectorSetItem), Er(e, t));
              case N.String:
                return (z(t.type === N.String), Cr(e, t, n));
              default:
                Ln(e);
            }
          }));
      })((V ||= {})),
      (Yr = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = V.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new Hr(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = V.read(n);
              e.push(t);
            }
            let t = K.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Jr();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) V.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), H(this, `entries`, []));
        }
      }),
      (Xr = 3),
      (Zr = 250),
      (Qr = [408, 429, 500, 502, 503, 504]),
      ($r = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Qr.includes(r.status) || ++n > Xr) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Xr) throw e;
          }
          await Dr(n);
        }
      }),
      (ei = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((z(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = kr(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((z(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = kr(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          H(this, `chunks`, []);
        }
      }),
      (q = class {
        async loadModel() {
          let [e] = await Or(this.options.url, [this.options.range]);
          return (z(e, `Failed to load model`), Yr.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          z(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      Ln(t);
                  }
                }),
              [t.entries],
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > V.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            V.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            H(this, `schema`),
            H(this, `fields`),
            H(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            H(this, `modelPromise`),
            H(this, `model`),
            H(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (z(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation));
        }
      }),
      (ti = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = V.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), V.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          H(this, `fields`, new Map());
        }
      }),
      (ni = class {
        scanItems() {
          return (
            (this.itemsPromise ??= $r(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Hr(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = ti.read(n),
                  i = n.getOffset() - e,
                  a = new K(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            H(this, `itemsPromise`),
            H(
              this,
              `itemLoader`,
              new Vr.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = K.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await Or(this.url, t)).map((t, n) => {
                    let r = new Hr(t),
                      i = ti.read(r),
                      a = e[n];
                    return (
                      z(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (ri = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = K.fromString(e),
                n = this.chunks[t.chunkId];
              return (z(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = K.fromString(e.pointer),
            r = K.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return V.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            H(this, `id`),
            H(this, `schema`),
            H(this, `indexes`),
            H(this, `resolveRichText`),
            H(this, `resolveVectorSetItem`),
            H(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new ni(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function ai(e) {
  return typeof e == `object` && !!e && !s(e) && ci in e;
}
function oi(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function si(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(se, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, s] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of s) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (ai(r) && r.preload(), (i[t] = r));
          }
          let c = e[r];
          return (
            oi(c, `Module not found`),
            ai(c) && c.preload(),
            o(pe, {
              componentIdentifier: r,
              children: (e) => o(xe, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? h.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var J,
  ci,
  li,
  ui = e(() => {
    (n(),
      u(),
      k(),
      p(),
      m !== void 0 && m.requestIdleCallback,
      (ci = `preload`),
      (li =
        (((J = li || {})[(J.Fragment = 1)] = `Fragment`),
        (J[(J.Link = 2)] = `Link`),
        (J[(J.Module = 3)] = `Module`),
        (J[(J.Tag = 4)] = `Tag`),
        (J[(J.Text = 5)] = `Text`),
        J)));
  }),
  Y,
  di,
  X,
  fi,
  pi,
  mi,
  hi,
  gi,
  Z,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai = e(() => {
    (k(),
      ii(),
      ui(),
      (Y = {
        avLoSQWmZ: { isNullable: !0, type: N.VectorSetItem },
        cMczQxaQ4: { isNullable: !0, type: N.String },
        createdAt: { isNullable: !0, type: N.Date },
        id: { isNullable: !1, type: N.String },
        IETHT9Kxs: { isNullable: !0, type: N.String },
        jCNPCnFGn: { isNullable: !0, type: N.VectorSetItem },
        MLGlZxUXc: { isNullable: !0, type: N.ResponsiveImage },
        nextItemId: { isNullable: !0, type: N.String },
        previousItemId: { isNullable: !0, type: N.String },
        RwJlQHEQv: { isNullable: !0, type: N.Enum },
        udxAHKeXh: { isNullable: !0, type: N.String },
        UjJ23Xd0W: { isNullable: !0, type: N.String },
        updatedAt: { isNullable: !0, type: N.Date },
        VFA6Z44ff: { isNullable: !0, type: N.String },
        yorrlI1zj: { isNullable: !0, type: N.String },
      }),
      (di = [`id`]),
      (X = { type: 1 }),
      (fi = [`previousItemId`]),
      (pi = [`nextItemId`]),
      (mi = [`id`, `udxAHKeXh`]),
      (hi = [`udxAHKeXh`, `id`]),
      (gi = [`VFA6Z44ff`]),
      (Z = { type: 0 }),
      (_i = [`udxAHKeXh`]),
      (vi = [`RwJlQHEQv`]),
      (yi = [`UjJ23Xd0W`]),
      (bi = [`avLoSQWmZ`]),
      (xi = [`IETHT9Kxs`]),
      (Si = [`jCNPCnFGn`]),
      (Ci = [`cMczQxaQ4`]),
      (wi = [`yorrlI1zj`]),
      (Ti = [`MLGlZxUXc`]),
      (Ei = [
        () => import(`./v79oW9tCj.Nd0bZNcl.mjs`),
        () => import(`./UC_3lPR4W.CGGExVoU.mjs`),
        () => import(`./IAXp9yZCD.D6wzW4n9.mjs`),
        () => import(`./lT0tryGEJ.BO-8bZWP.mjs`),
        () => import(`./zMhB0SVdB.Kjs38jjQ.mjs`),
        () => import(`./YKF6mWjgE.EnFXKdp7.mjs`),
        () => import(`./SX9epGoni.-Zgb38g9.mjs`),
        () => import(`./k141foQ93.BMK-HTte.mjs`),
        () => import(`./GX6nldptA.B6bA4bgr.mjs`),
        () => import(`./q9HERXODY.DasDqvUK.mjs`),
        () => import(`./AM36MWycB.OF9XT3GX.mjs`),
        () => import(`./yEfaKgpMU.D6szg3Ps.mjs`),
        () => import(`./bXEJcycZT.B4udFUQW.mjs`),
        () => import(`./LjiGtH0hw.DmamNgVF.mjs`),
        () => import(`./Utc4BfpF5.CbRUnjeU.mjs`),
        () => import(`./ehpMZyBXy.C8961u2c.mjs`),
        () => import(`./xRNLEcRI9.DOurqT5A.mjs`),
        () => import(`./j91HJoPGL.BwLg2aeo.mjs`),
      ]),
      (Di = (e) => {
        let t = Ei[e];
        if (t) return t().then((e) => e.default);
      }),
      (Oi = si({})),
      new ne(),
      (ki = {
        collectionByLocaleId: {
          default: new ri({
            chunks: [
              new URL(
                `./wxhejvlYk-chunk-default-0.sitecms`,
                `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `eab5ac97-b4a9-416a-a95b-0018b355a046default`,
            indexes: [
              new q({
                collation: X,
                collectionSchema: Y,
                fieldNames: di,
                range: { from: 0, to: 457 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: X,
                collectionSchema: Y,
                fieldNames: fi,
                range: { from: 457, to: 913 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: X,
                collectionSchema: Y,
                fieldNames: pi,
                range: { from: 913, to: 1365 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: X,
                collectionSchema: Y,
                fieldNames: mi,
                range: { from: 1365, to: 2285 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: X,
                collectionSchema: Y,
                fieldNames: hi,
                range: { from: 2285, to: 3205 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: gi,
                range: { from: 3205, to: 3903 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: _i,
                range: { from: 3903, to: 4565 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: vi,
                range: { from: 4565, to: 5029 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: yi,
                range: { from: 5029, to: 5429 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: bi,
                range: { from: 5429, to: 5731 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: xi,
                range: { from: 5731, to: 6117 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Si,
                range: { from: 6117, to: 6419 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Ci,
                range: { from: 6419, to: 6788 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: wi,
                range: { from: 6788, to: 7210 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new q({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Ti,
                range: { from: 7210, to: 8905 },
                url: new URL(
                  `./wxhejvlYk-indexes-default-0.sitecms`,
                  `https://framerusercontent.com/modules/heXePzE9BCJdFSceOusE/lPZVXbms1FPB3iZZgwkk/wxhejvlYk.js`,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Oi,
            resolveVectorSetItem: Di,
            schema: Y,
          }),
        },
        displayName: `Metadata`,
        id: `eab5ac97-b4a9-416a-a95b-0018b355a046`,
      }),
      j(ki, {
        VFA6Z44ff: { defaultValue: ``, title: `Key`, type: N.String },
        udxAHKeXh: { preventLocalization: !1, title: `Slug`, type: N.String },
        RwJlQHEQv: {
          defaultValue: `Z16I_5i35`,
          options: [`Z16I_5i35`, `lveWbnwDf`],
          optionTitles: [`Tech Stack`, `Client`],
          title: `Meta Type`,
          type: N.Enum,
        },
        UjJ23Xd0W: {
          defaultValue: ``,
          title: `Tech Stack Name`,
          type: N.String,
        },
        avLoSQWmZ: {
          defaultValue: {
            identifier: `local-module:vector/LjiGtH0hw:default`,
            moduleId: `NZzJHsbqZ3WCbCej5tem`,
          },
          setModuleId: `jZMfhGvjZ8OWjOHEtIG9`,
          title: `Tech Stack Icon`,
          type: N.VectorSetItem,
        },
        IETHT9Kxs: { defaultValue: ``, title: `Client Name`, type: N.String },
        jCNPCnFGn: {
          defaultValue: {
            identifier: `local-module:vector/UC_3lPR4W:default`,
            moduleId: `2L9UAnCTviswCtv8zLBw`,
          },
          setModuleId: `EKvExSWD32Sx4zmr0U8Z`,
          title: `Client Logo`,
          type: N.VectorSetItem,
        },
        cMczQxaQ4: { defaultValue: ``, title: `Client Author`, type: N.String },
        yorrlI1zj: {
          defaultValue: ``,
          title: `Client Author Designation`,
          type: N.String,
        },
        MLGlZxUXc: { title: `Client Author Avatar`, type: N.ResponsiveImage },
        createdAt: { title: `Created`, type: N.Date },
        updatedAt: { title: `Updated`, type: N.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/wxhejvlYk:default`,
          title: `Previous`,
          type: N.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/wxhejvlYk:default`,
          title: `Next`,
          type: N.CollectionReference,
        },
      }));
  }),
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Q,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  $,
  ea;
e(() => {
  (u(),
    k(),
    _(),
    p(),
    qe(),
    Xe(),
    $e(),
    Bt(),
    xn(),
    Fn(),
    pt(),
    Ai(),
    gt(),
    wt(),
    lt(),
    Ve(),
    Ie(),
    bt(),
    rt(),
    Ze(),
    st(),
    Qe(),
    kt(),
    (ji = S(Je)),
    (Mi = he(ve)),
    (Ni = S(F)),
    (Pi = S(R)),
    (Fi = S(L)),
    (Ii = S(tt)),
    (Li = S(Ye)),
    (Ri = y(h.div)),
    (zi = {
      Djw_Xykm5: `(min-width: 1200px)`,
      kIkXPZNTA: `(min-width: 810px) and (max-width: 1199.98px)`,
      w9Boc3lmD: `(max-width: 809.98px)`,
    }),
    (Bi = []),
    (Vi = `framer-w3A5e`),
    (Hi = {
      Djw_Xykm5: `framer-v-vg4bvm`,
      kIkXPZNTA: `framer-v-1s38c6g`,
      w9Boc3lmD: `framer-v-1h4go20`,
    }),
    (Ui = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
    (Wi = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Gi = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ki = (e) => ({
      from: { alias: `eYEq1d7NM`, data: ki, type: `Collection` },
      orderBy: [
        {
          arguments: [
            { type: `LiteralValue`, value: e },
            { collection: `eYEq1d7NM`, name: `id`, type: `Identifier` },
          ],
          direction: `asc`,
          functionName: `INDEX_OF`,
          type: `FunctionCall`,
        },
      ],
      select: [
        { collection: `eYEq1d7NM`, name: `avLoSQWmZ`, type: `Identifier` },
        { collection: `eYEq1d7NM`, name: `UjJ23Xd0W`, type: `Identifier` },
        { collection: `eYEq1d7NM`, name: `udxAHKeXh`, type: `Identifier` },
        { collection: `eYEq1d7NM`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `eYEq1d7NM`, name: `id`, type: `Identifier` },
        operator: `in`,
        right: { type: `LiteralValue`, value: e },
        type: `BinaryOperation`,
      },
    })),
    (qi = ({ query: e, pageSize: t, children: n }) => n(De(e))),
    (Ji = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? t + e
        : typeof e == `string`
          ? e
          : typeof t == `string`
            ? t
            : ``),
    (Yi = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e + t
        : typeof e == `string`
          ? e
          : typeof t == `string`
            ? t
            : ``),
    (Xi = { Desktop: `Djw_Xykm5`, Phone: `w9Boc3lmD`, Tablet: `kIkXPZNTA` }),
    (Zi = ({ value: e }) =>
      fe()
        ? null
        : o(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Qi = (e) => ({
      from: {
        constraint: {
          left: {
            collection: `sXNmQkfHo`,
            name: `wKHorg_DW`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { collection: `wKHorg_DW`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `sXNmQkfHo`, data: ht, type: `Collection` },
        right: { alias: `wKHorg_DW`, data: ki, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `sXNmQkfHo`, name: `m8uStjAdn`, type: `Identifier` },
        {
          alias: `wKHorg_DW.cMczQxaQ4`,
          collection: `wKHorg_DW`,
          name: `cMczQxaQ4`,
          type: `Identifier`,
        },
        {
          alias: `wKHorg_DW.yorrlI1zj`,
          collection: `wKHorg_DW`,
          name: `yorrlI1zj`,
          type: `Identifier`,
        },
        {
          alias: `wKHorg_DW.MLGlZxUXc`,
          collection: `wKHorg_DW`,
          name: `MLGlZxUXc`,
          type: `Identifier`,
        },
        { collection: `sXNmQkfHo`, name: `g9kE3q2_2`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `VNdPTJ1mw`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `IqPLs_RYT`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `orAEBIKwx`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `OLWq7yo1J`, type: `Identifier` },
        {
          alias: `lNNn_EvHN`,
          arguments: [
            {
              from: { alias: `lNNn_EvHN`, data: ki, type: `Collection` },
              orderBy: [
                {
                  arguments: [
                    {
                      collection: `sXNmQkfHo`,
                      name: `lNNn_EvHN`,
                      type: `Identifier`,
                    },
                    { collection: `lNNn_EvHN`, name: `id`, type: `Identifier` },
                  ],
                  functionName: `INDEX_OF`,
                  type: `FunctionCall`,
                },
              ],
              select: [
                { collection: `lNNn_EvHN`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
              where: {
                left: {
                  collection: `lNNn_EvHN`,
                  name: `id`,
                  type: `Identifier`,
                },
                operator: `in`,
                right: {
                  collection: `sXNmQkfHo`,
                  name: `lNNn_EvHN`,
                  type: `Identifier`,
                },
                type: `BinaryOperation`,
              },
            },
          ],
          functionName: `FLAT_ARRAY`,
          type: `FunctionCall`,
        },
        { collection: `sXNmQkfHo`, name: `O_7BF1LXh`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `nTGt_JRqg`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `j1M4bUoVF`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `cI1vuPIzs`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `Yy2HLMNJr`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `DrYfTxF7n`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `Gc3rlM5ye`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `qslGWkXvo`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `tJaeAOeuE`, type: `Identifier` },
        { collection: `sXNmQkfHo`, name: `tw4idYTZb`, type: `Identifier` },
      ],
      where: e,
    })),
    ($i = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Xi[r.variant] ?? r.variant ?? `Djw_Xykm5`,
    })),
    ($ = x(
      a(function (e, n) {
        let a = r(null),
          s = n ?? a,
          u = ee(),
          { activeLocale: f, setLocale: p } = ce(),
          m = ge(),
          _ = Se(),
          [v] = De(Qi(oe(_, `sXNmQkfHo`))),
          y = (e) => {
            if (!v)
              throw new Ce(
                `No data matches path variables: ${JSON.stringify(_)}`,
              );
            return v[e];
          },
          {
            style: ne,
            className: x,
            layoutId: re,
            variant: ie,
            m8uStjAdn: ae = y(`m8uStjAdn`) ?? ``,
            wKHorg_DW_cMczQxaQ4: S = y(`wKHorg_DW.cMczQxaQ4`) ?? ``,
            wKHorg_DW_yorrlI1zj: C = y(`wKHorg_DW.yorrlI1zj`) ?? ``,
            wKHorg_DW_MLGlZxUXc: D = y(`wKHorg_DW.MLGlZxUXc`),
            g9kE3q2_2: O = y(`g9kE3q2_2`),
            VNdPTJ1mw: k = y(`VNdPTJ1mw`),
            IqPLs_RYT: se = y(`IqPLs_RYT`) ?? ``,
            orAEBIKwx: de = y(`orAEBIKwx`) ?? ``,
            OLWq7yo1J: fe = y(`OLWq7yo1J`) ?? ``,
            lNNn_EvHN: pe = y(`lNNn_EvHN`),
            O_7BF1LXh: j = y(`O_7BF1LXh`) ?? ``,
            nTGt_JRqg: me = y(`nTGt_JRqg`) ?? ``,
            j1M4bUoVF: he = y(`j1M4bUoVF`),
            cI1vuPIzs: ve = y(`cI1vuPIzs`) ?? ``,
            Yy2HLMNJr: be = y(`Yy2HLMNJr`) ?? ``,
            DrYfTxF7n: N = y(`DrYfTxF7n`),
            Gc3rlM5ye: xe = y(`Gc3rlM5ye`) ?? ``,
            qslGWkXvo: Oe = y(`qslGWkXvo`) ?? ``,
            tJaeAOeuE: ke = y(`tJaeAOeuE`),
            tw4idYTZb: Ae = y(`tw4idYTZb`) ?? ``,
            ...je
          } = $i(e);
        we(c(() => Ot({ m8uStjAdn: ae }, f), [ae, f]));
        let [P, Me] = ye(ie, zi, !1),
          Ne = w(Vi, Ct, ft, Fe, ot, We, yt, Dt),
          Pe = t(le)?.isLayoutTemplate,
          Ie = !!t(g)?.transition?.layout,
          Le = Wi(Pe, Ie),
          Re = r(null),
          ze = E(`oFYw5Ybkh`),
          Be = Yi(Ji(Ae, `"`), `"`),
          Ve = E(`T5kladmpb`),
          He = Te();
        return (
          ue({}),
          o(le.Provider, {
            value: {
              activeVariantId: P,
              humanReadableVariantMap: Xi,
              primaryVariantId: `Djw_Xykm5`,
              variantClassNames: Hi,
            },
            children: l(te, {
              id: re ?? u,
              children: [
                o(Zi, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                o(h.div, {
                  ...je,
                  className: w(Ne, `framer-vg4bvm`, x),
                  ref: s,
                  style: { ...ne },
                  children: l(Ri, {
                    className: `framer-9nxg0d`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: Ui,
                    isNestedFlowEffect: !1,
                    layout: Le,
                    children: [
                      l(h.section, {
                        className: `framer-147a1a9`,
                        "data-border": !0,
                        "data-framer-name": `Header`,
                        layout: `position`,
                        children: [
                          l(`div`, {
                            className: `framer-ylfcxa`,
                            "data-framer-name": `Text & Tag`,
                            children: [
                              o(A, {
                                height: 25,
                                children: o(M, {
                                  className: `framer-1jkk21e-container`,
                                  nodeId: `fsQjcnepS`,
                                  scopeId: `sXNmQkfHo`,
                                  children: o(Je, {
                                    height: `100%`,
                                    id: `fsQjcnepS`,
                                    KPDdVnbJ9: mt.VNdPTJ1mw?.(k, f),
                                    layoutId: `fsQjcnepS`,
                                    nHzYRdzoI: !0,
                                    variant: Q(`LBX2RY6YR`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              l(`div`, {
                                className: `framer-19n7oxf`,
                                "data-framer-name": `Text`,
                                children: [
                                  o(T, {
                                    breakpoint: P,
                                    overrides: {
                                      w9Boc3lmD: {
                                        children: o(i, {
                                          children: o(`h6`, {
                                            className: `framer-styles-preset-c7r8r4`,
                                            "data-styles-preset": `JDyypIjWz`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                            },
                                            children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(b, {
                                      __fromCanvasComponent: !0,
                                      children: o(i, {
                                        children: o(`h1`, {
                                          className: `framer-styles-preset-1r2j15k`,
                                          "data-styles-preset": `RHKJWGVab`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                        }),
                                      }),
                                      className: `framer-l4suse`,
                                      fonts: [`Inter`],
                                      text: ae,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                      }),
                                    }),
                                    className: `framer-stmo29`,
                                    fonts: [`Inter`],
                                    text: se,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o(`div`, {
                            className: `framer-43ho5c`,
                            "data-framer-name": `Thumbnail`,
                            children: o(T, {
                              breakpoint: P,
                              overrides: {
                                kIkXPZNTA: {
                                  background: {
                                    alt: `Velosite Thumbnail`,
                                    fit: `fill`,
                                    pixelHeight: 1200,
                                    pixelWidth: 2e3,
                                    sizes: `max(min(min(${m?.width || `100vw`} - 40px, 1300px), 780px), 1px)`,
                                    ...Gi(O),
                                  },
                                },
                                w9Boc3lmD: {
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1.2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: Re,
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
                                  background: {
                                    alt: `Velosite Thumbnail`,
                                    fit: `fill`,
                                    pixelHeight: 1200,
                                    pixelWidth: 2e3,
                                    sizes: `max(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 790px), 1px)`,
                                    ...Gi(O),
                                  },
                                },
                              },
                              children: o(Mi, {
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
                                      scale: 1.2,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 50,
                                    },
                                  },
                                  {
                                    ref: Re,
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
                                  alt: `Velosite Thumbnail`,
                                  fit: `fill`,
                                  pixelHeight: 1200,
                                  pixelWidth: 2e3,
                                  sizes: `max(min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px), 1px)`,
                                  ...Gi(O),
                                },
                                className: `framer-18l8lgj`,
                                draggable: `false`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-19b30al`,
                        "data-border": !0,
                        "data-framer-name": `Metrics`,
                        id: ze,
                        layout: `position`,
                        ref: Re,
                        children: [
                          o(T, {
                            breakpoint: P,
                            overrides: {
                              kIkXPZNTA: {
                                width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 76px) / 3, 1px), 300px)`,
                              },
                              w9Boc3lmD: {
                                width: `min(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px, 300px)`,
                              },
                            },
                            children: o(A, {
                              height: 220,
                              width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 76px) / 3, 1px), 300px)`,
                              children: o(M, {
                                className: `framer-6wr2gg-container`,
                                nodeId: `ESdCs9Rwh`,
                                scopeId: `sXNmQkfHo`,
                                children: o(T, {
                                  breakpoint: P,
                                  overrides: {
                                    kIkXPZNTA: { variant: Q(`FmAVDY4oj`) },
                                  },
                                  children: o(F, {
                                    height: `100%`,
                                    id: `ESdCs9Rwh`,
                                    layoutId: `ESdCs9Rwh`,
                                    lX0ex1u3t: he,
                                    LxfIyHtzE: me,
                                    PzX00TrG5: j,
                                    style: {
                                      height: `100%`,
                                      maxWidth: `100%`,
                                      width: `100%`,
                                    },
                                    variant: Q(`dagONyUiP`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          o(T, {
                            breakpoint: P,
                            overrides: {
                              kIkXPZNTA: {
                                width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 76px) / 3, 1px), 300px)`,
                              },
                              w9Boc3lmD: {
                                width: `min(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px, 300px)`,
                              },
                            },
                            children: o(A, {
                              height: 220,
                              width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 76px) / 3, 1px), 300px)`,
                              children: o(M, {
                                className: `framer-14b29ud-container`,
                                nodeId: `au0NZhGnh`,
                                scopeId: `sXNmQkfHo`,
                                children: o(T, {
                                  breakpoint: P,
                                  overrides: {
                                    kIkXPZNTA: { variant: Q(`FmAVDY4oj`) },
                                  },
                                  children: o(F, {
                                    height: `100%`,
                                    id: `au0NZhGnh`,
                                    layoutId: `au0NZhGnh`,
                                    lX0ex1u3t: N,
                                    LxfIyHtzE: be,
                                    PzX00TrG5: ve,
                                    style: {
                                      height: `100%`,
                                      maxWidth: `100%`,
                                      width: `100%`,
                                    },
                                    variant: Q(`dagONyUiP`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          o(T, {
                            breakpoint: P,
                            overrides: {
                              kIkXPZNTA: {
                                width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 76px) / 3, 1px), 300px)`,
                              },
                              w9Boc3lmD: {
                                width: `min(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px, 300px)`,
                              },
                            },
                            children: o(A, {
                              height: 220,
                              width: `min(max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 76px) / 3, 1px), 300px)`,
                              children: o(M, {
                                className: `framer-sv93ts-container`,
                                nodeId: `cQcPgOyb8`,
                                scopeId: `sXNmQkfHo`,
                                children: o(T, {
                                  breakpoint: P,
                                  overrides: {
                                    kIkXPZNTA: { variant: Q(`FmAVDY4oj`) },
                                  },
                                  children: o(F, {
                                    height: `100%`,
                                    id: `cQcPgOyb8`,
                                    layoutId: `cQcPgOyb8`,
                                    lX0ex1u3t: ke,
                                    LxfIyHtzE: Oe,
                                    PzX00TrG5: xe,
                                    style: {
                                      height: `100%`,
                                      maxWidth: `100%`,
                                      width: `100%`,
                                    },
                                    variant: Q(`dagONyUiP`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-htrv59`,
                        "data-border": !0,
                        "data-framer-name": `The Operational Friction`,
                        layout: `position`,
                        children: [
                          o(`div`, {
                            className: `framer-1cuesqy`,
                            "data-framer-name": `Title`,
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(i, {
                                children: o(`h6`, {
                                  className: `framer-styles-preset-c7r8r4`,
                                  "data-styles-preset": `JDyypIjWz`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `The Operational Friction`,
                                }),
                              }),
                              className: `framer-1xfiblx`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(b, {
                            __fromCanvasComponent: !0,
                            children: de,
                            className: `framer-vqsppe`,
                            fonts: [`Inter`],
                            stylesPresetsClassNames: {
                              a: `framer-styles-preset-1ovk18f`,
                              h1: `framer-styles-preset-1r2j15k`,
                              h3: `framer-styles-preset-or66bk`,
                              h5: `framer-styles-preset-1217b5x`,
                              h6: `framer-styles-preset-c7r8r4`,
                              p: `framer-styles-preset-l66ocq`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-gfa76x`,
                        "data-border": !0,
                        "data-framer-name": `The Architecture Blueprint`,
                        layout: `position`,
                        children: [
                          o(`div`, {
                            className: `framer-a0evrh`,
                            "data-framer-name": `Title`,
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(i, {
                                children: o(`h6`, {
                                  className: `framer-styles-preset-c7r8r4`,
                                  "data-styles-preset": `JDyypIjWz`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `The Architecture Blueprint`,
                                }),
                              }),
                              className: `framer-svl71f`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(`div`, {
                            className: `framer-1v46uep`,
                            "data-framer-name": `Content`,
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: fe,
                              className: `framer-1fck4bm`,
                              fonts: [`Inter`],
                              stylesPresetsClassNames: {
                                a: `framer-styles-preset-1ovk18f`,
                                h1: `framer-styles-preset-1r2j15k`,
                                h3: `framer-styles-preset-or66bk`,
                                h5: `framer-styles-preset-1217b5x`,
                                h6: `framer-styles-preset-c7r8r4`,
                                p: `framer-styles-preset-l66ocq`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-1fw4e9r`,
                        "data-border": !0,
                        "data-framer-name": `The Architecture Blueprint`,
                        layout: `position`,
                        children: [
                          o(`div`, {
                            className: `framer-1glr1n4`,
                            "data-framer-name": `Title`,
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(i, {
                                children: o(`h6`, {
                                  className: `framer-styles-preset-c7r8r4`,
                                  "data-styles-preset": `JDyypIjWz`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `The Tech Stack`,
                                }),
                              }),
                              className: `framer-1bnur2e`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(`div`, {
                            className: `framer-1xn5jke`,
                            "data-framer-name": `Content`,
                            children: o(`div`, {
                              className: `framer-1axylv1`,
                              children: o(_e, {
                                children: o(qi, {
                                  query: Ki(pe),
                                  children: (e, t, n) =>
                                    o(d, {
                                      children: e?.map(
                                        (
                                          {
                                            avLoSQWmZ: e,
                                            id: t,
                                            udxAHKeXh: n,
                                            UjJ23Xd0W: r,
                                          },
                                          i,
                                        ) => (
                                          (r ??= ``),
                                          (n ??= ``),
                                          o(
                                            te,
                                            {
                                              id: `eYEq1d7NM-${t}`,
                                              children: o(Ee.Provider, {
                                                value: { udxAHKeXh: n },
                                                children: o(`div`, {
                                                  className: `framer-14q2ywc`,
                                                  children: o(A, {
                                                    height: 40,
                                                    children: o(M, {
                                                      className: `framer-1ffoezz-container`,
                                                      nodeId: `yighrfBgo`,
                                                      scopeId: `sXNmQkfHo`,
                                                      children: o(R, {
                                                        en9XZSCTB: e,
                                                        height: `100%`,
                                                        id: `yighrfBgo`,
                                                        layoutId: `yighrfBgo`,
                                                        style: {
                                                          height: `100%`,
                                                        },
                                                        UxmUq_827: r,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
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
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-119oru4`,
                        "data-border": !0,
                        "data-framer-name": `Testimonial`,
                        layout: `position`,
                        children: [
                          o(`div`, {
                            className: `framer-t5xg92`,
                            "data-framer-name": `Title`,
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(i, {
                                children: o(`h6`, {
                                  className: `framer-styles-preset-c7r8r4`,
                                  "data-styles-preset": `JDyypIjWz`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Client Testimonial`,
                                }),
                              }),
                              className: `framer-1hhqpb3`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          l(`div`, {
                            className: `framer-1rlxpn7`,
                            "data-framer-name": `Content`,
                            children: [
                              o(b, {
                                __fromCanvasComponent: !0,
                                children: o(i, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-l66ocq`,
                                    "data-styles-preset": `cz5F3xMDV`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                    },
                                    children: `Our manual data entry pipelines were completely strangling our margins and causing massive shipping delays at international customs checkpoints. Psionics bypassed the standard AI market fluff and engineered a robust, infrastructure-level solution. The autonomous pipeline completely transformed our unit economics, slashed our processing timelines from days to minutes, and allowed our business to scale throughput without forcing us to scale our human operational headcount.`,
                                  }),
                                }),
                                className: `framer-17y3nlr`,
                                fonts: [`Inter`],
                                text: Be,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(T, {
                                breakpoint: P,
                                overrides: {
                                  kIkXPZNTA: {
                                    width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 66px) / 2, 1px)`,
                                  },
                                  w9Boc3lmD: {
                                    width: `calc(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                  },
                                },
                                children: o(A, {
                                  height: 52,
                                  width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 66px) / 2, 1px)`,
                                  children: o(M, {
                                    className: `framer-tbw97j-container`,
                                    nodeId: `UiB0xOeIN`,
                                    scopeId: `sXNmQkfHo`,
                                    children: o(L, {
                                      aO3yCJ3XH: Gi(D),
                                      height: `100%`,
                                      id: `UiB0xOeIN`,
                                      layoutId: `UiB0xOeIN`,
                                      QFyf9SHzj: `TAn6oxf0b`,
                                      style: { width: `100%` },
                                      Uu1XFyAkB: C,
                                      variant: Q(`dVddZNlaa`),
                                      vmZNaaJGK: S,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l(h.section, {
                        className: `framer-b19baw`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: Ve,
                        layout: `position`,
                        ref: He(Ve),
                        children: [
                          l(`div`, {
                            className: `framer-123lloo`,
                            "data-framer-name": `Content`,
                            children: [
                              l(`div`, {
                                className: `framer-7xa1di`,
                                "data-framer-name": `Text`,
                                children: [
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `Scale Your Infrastructure.`,
                                      }),
                                    }),
                                    className: `framer-rvn9tw`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(i, {
                                      children: o(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Book a 30-minute technical assessment. We will audit your current manual workflows and tell you exactly which processes can be automated using AI.`,
                                      }),
                                    }),
                                    className: `framer-111f6z2`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-wbhu0y`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  o(T, {
                                    breakpoint: P,
                                    overrides: {
                                      kIkXPZNTA: {
                                        width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      w9Boc3lmD: {
                                        width: `calc(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: o(A, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: o(M, {
                                        className: `framer-1m9df3u-container`,
                                        nodeId: `xnQ2D4EaL`,
                                        scopeId: `sXNmQkfHo`,
                                        children: o(tt, {
                                          height: `100%`,
                                          id: `xnQ2D4EaL`,
                                          layoutId: `xnQ2D4EaL`,
                                          mQrslU2vj: `No aggressive sales pitches.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: et,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  o(T, {
                                    breakpoint: P,
                                    overrides: {
                                      kIkXPZNTA: {
                                        width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      w9Boc3lmD: {
                                        width: `calc(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: o(A, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: o(M, {
                                        className: `framer-5m849k-container`,
                                        nodeId: `YcTnbOCRf`,
                                        scopeId: `sXNmQkfHo`,
                                        children: o(tt, {
                                          height: `100%`,
                                          id: `YcTnbOCRf`,
                                          layoutId: `YcTnbOCRf`,
                                          mQrslU2vj: `Speak directly with a lead engineer.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: ct,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  o(T, {
                                    breakpoint: P,
                                    overrides: {
                                      kIkXPZNTA: {
                                        width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      w9Boc3lmD: {
                                        width: `calc(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: o(A, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: o(M, {
                                        className: `framer-782zta-container`,
                                        nodeId: `RWKNW0lrP`,
                                        scopeId: `sXNmQkfHo`,
                                        children: o(tt, {
                                          height: `100%`,
                                          id: `RWKNW0lrP`,
                                          layoutId: `RWKNW0lrP`,
                                          mQrslU2vj: `Receive a clear deployment roadmap.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: nt,
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
                          o(T, {
                            breakpoint: P,
                            overrides: {
                              kIkXPZNTA: {
                                width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 780px) - 86px) / 2, 1px)`,
                              },
                              w9Boc3lmD: {
                                width: `calc(min(min(${m?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                              },
                            },
                            children: o(A, {
                              height: 575,
                              width: `max((min(min(${m?.width || `100vw`} - 40px, 1300px), 1180px) - 86px) / 2, 1px)`,
                              children: o(M, {
                                className: `framer-5r6t32-container`,
                                nodeId: `EP8qOEPk5`,
                                scopeId: `sXNmQkfHo`,
                                children: o(Ye, {
                                  height: `100%`,
                                  id: `EP8qOEPk5`,
                                  layoutId: `EP8qOEPk5`,
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-w3A5e.framer-1fogxqg, .framer-w3A5e .framer-1fogxqg { display: block; }`,
        `.framer-w3A5e.framer-vg4bvm { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-w3A5e .framer-9nxg0d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-147a1a9 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: visible; padding: 140px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-ylfcxa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-1jkk21e-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-w3A5e .framer-19n7oxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-l4suse, .framer-w3A5e .framer-stmo29, .framer-w3A5e .framer-rvn9tw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w3A5e .framer-43ho5c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 600px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-18l8lgj { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-w3A5e .framer-19b30al { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-6wr2gg-container, .framer-w3A5e .framer-14b29ud-container, .framer-w3A5e .framer-sv93ts-container { flex: 1 0 0px; height: 220px; max-width: 300px; position: relative; width: 1px; }`,
        `.framer-w3A5e .framer-htrv59, .framer-w3A5e .framer-gfa76x, .framer-w3A5e .framer-1fw4e9r, .framer-w3A5e .framer-119oru4 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 28px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-1cuesqy, .framer-w3A5e .framer-a0evrh, .framer-w3A5e .framer-1glr1n4, .framer-w3A5e .framer-t5xg92 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-w3A5e .framer-1xfiblx, .framer-w3A5e .framer-vqsppe, .framer-w3A5e .framer-svl71f, .framer-w3A5e .framer-1bnur2e, .framer-w3A5e .framer-1hhqpb3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w3A5e .framer-1v46uep, .framer-w3A5e .framer-1rlxpn7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-w3A5e .framer-1fck4bm, .framer-w3A5e .framer-17y3nlr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w3A5e .framer-1xn5jke { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-w3A5e .framer-1axylv1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-14q2ywc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-w3A5e .framer-1ffoezz-container { flex: none; height: 40px; position: relative; width: auto; }`,
        `.framer-w3A5e .framer-tbw97j-container, .framer-w3A5e .framer-1m9df3u-container, .framer-w3A5e .framer-5m849k-container, .framer-w3A5e .framer-782zta-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-b19baw { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-123lloo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-w3A5e .framer-7xa1di, .framer-w3A5e .framer-wbhu0y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w3A5e .framer-111f6z2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w3A5e .framer-5r6t32-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...xt,
        ...ut,
        ...je,
        ...it,
        ...He,
        ..._t,
        ...Tt,
        `.framer-w3A5e[data-border="true"]::after, .framer-w3A5e [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-w3A5e.framer-vg4bvm { width: 810px; } .framer-w3A5e .framer-147a1a9, .framer-w3A5e .framer-19b30al, .framer-w3A5e .framer-htrv59, .framer-w3A5e .framer-gfa76x, .framer-w3A5e .framer-1fw4e9r, .framer-w3A5e .framer-119oru4, .framer-w3A5e .framer-b19baw { max-width: 780px; } .framer-w3A5e .framer-ylfcxa { max-width: 620px; }}`,
        `@media (max-width: 809.98px) { .framer-w3A5e.framer-vg4bvm { width: 390px; } .framer-w3A5e .framer-9nxg0d { padding: 0px 12px 0px 12px; } .framer-w3A5e .framer-147a1a9 { gap: 20px; max-width: 790px; padding: 100px 0px 0px 0px; } .framer-w3A5e .framer-43ho5c { height: 400px; } .framer-w3A5e .framer-19b30al, .framer-w3A5e .framer-htrv59, .framer-w3A5e .framer-gfa76x, .framer-w3A5e .framer-1fw4e9r, .framer-w3A5e .framer-119oru4, .framer-w3A5e .framer-b19baw { flex-direction: column; max-width: 600px; } .framer-w3A5e .framer-6wr2gg-container, .framer-w3A5e .framer-14b29ud-container, .framer-w3A5e .framer-sv93ts-container, .framer-w3A5e .framer-1cuesqy, .framer-w3A5e .framer-vqsppe, .framer-w3A5e .framer-a0evrh, .framer-w3A5e .framer-1v46uep, .framer-w3A5e .framer-1glr1n4, .framer-w3A5e .framer-1xn5jke, .framer-w3A5e .framer-t5xg92, .framer-w3A5e .framer-1rlxpn7, .framer-w3A5e .framer-123lloo, .framer-w3A5e .framer-5r6t32-container { flex: none; width: 100%; }}`,
      ],
      `framer-w3A5e`,
    )),
    ($.displayName = `Case Studies`),
    ($.defaultProps = { height: 3771, width: 1200 }),
    v(
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
        ...ji,
        ...Ni,
        ...Pi,
        ...Fi,
        ...Ii,
        ...Li,
        ...D(St),
        ...D(dt),
        ...D(Me),
        ...D(at),
        ...D(Ue),
        ...D(vt),
        ...D(Et),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = be.get(Qi(oe(t.pathVariables, `sXNmQkfHo`)), n).readMaybeAsync();
        return Promise.allSettled([
          C(Je, {}, t),
          C(F, {}, t),
          C(L, {}, t),
          C(tt, {}, t),
          C(Ye, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return be.get(Ki(e?.lNNn_EvHN), n).preload();
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await be.get(Ki(e?.lNNn_EvHN), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => C(R, {}, t)));
          })(),
        ]);
      },
    }),
    (ea = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `SitesXNmQkfHo`,
          slots: [],
          annotations: {
            siteAcceptsLayoutTemplate: `true`,
            siteColorSyntax: `true`,
            siteVectorSets: `["bFCrGSomAwxwjp4GIoDy","jZMfhGvjZ8OWjOHEtIG9"]`,
            siteIntrinsicWidth: `1200`,
            siteLayoutTemplateFlowEffect: `true`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"kIkXPZNTA":{"layout":["fixed","auto"]},"w9Boc3lmD":{"layout":["fixed","auto"]}}}`,
            siteComponentViewportWidth: `true`,
            siteDisplayContentsDiv: `false`,
            siteImmutableVariables: `true`,
            siteAutoSizeImages: `true`,
            siteResponsiveScreen: `true`,
            siteScrollSections: `{"oFYw5Ybkh":{"pattern":":oFYw5Ybkh","name":"metrics"},"T5kladmpb":{"pattern":":T5kladmpb","name":"Book A Call"}}`,
            siteIntrinsicHeight: `3771`,
            siteContractVersion: `1`,
          },
        },
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export {
  ea as __SiteMetadata__,
  $ as default,
  En as n,
  Bi as queryParamNames,
  Dn as r,
  Tn as t,
};
//# sourceMappingURL=case-study-detail-page.mjs.map

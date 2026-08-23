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
  s as l,
  w as u,
  y as d,
} from "./react-runtime.mjs";
import { S as f, a as p, r as m, t as h } from "./motion-runtime.mjs";
import {
  A as g,
  Ct as ee,
  D as _,
  Dt as v,
  E as y,
  Et as b,
  H as x,
  I as S,
  P as C,
  S as w,
  St as te,
  Tt as ne,
  U as T,
  W as E,
  X as D,
  _ as re,
  _t as ie,
  a as O,
  ct as ae,
  d as oe,
  ft as se,
  gt as ce,
  h as le,
  ht as k,
  j as A,
  k as j,
  lt as ue,
  n as M,
  o as N,
  p as P,
  pt as de,
  rt as F,
  s as I,
  tt as fe,
  u as pe,
  vt as me,
  wt as he,
  x as ge,
  xt as _e,
} from "./framer-runtime.mjs";
import { c as L, l as R, s as ve, u as z } from "./shared-library.mjs";
import { n as ye, t as B } from "./framer-data-utils.mjs";
import { n as V, t as H } from "./shared-query-utils.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./heading-style-preset.mjs";
import { i as U, n as we, r as Te, t as Ee } from "./text-style-body.mjs";
import { a as De, t as Oe } from "./rich-text-component.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./font-style-config.mjs";
import Ne, {
  t as Pe,
} from "./route-metadata-case-studies.mjs";
var W,
  Fe,
  Ie,
  G,
  Le = e(() => {
    (c(),
      D(),
      u(),
      (W = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 20.833 C 0 9.327 9.327 0 20.833 0 L 33.333 0 C 37.936 0 41.667 3.731 41.667 8.333 L 41.667 25 C 41.667 34.205 49.129 41.667 58.333 41.667 L 75 41.667 C 79.602 41.667 83.333 45.398 83.333 50 L 83.333 79.167 C 83.333 90.673 74.006 100 62.5 100 L 20.833 100 C 9.327 100 0 90.673 0 79.167 Z M 28.5 63.499 L 19.83 54.829 C 18.725 53.724 16.934 53.724 15.829 54.829 C 14.724 55.934 14.724 57.725 15.829 58.83 L 24.499 67.5 L 15.829 76.17 C 14.724 77.275 14.724 79.066 15.829 80.171 C 16.934 81.276 18.725 81.276 19.83 80.171 L 28.5 71.501 L 37.17 80.171 C 38.275 81.276 40.066 81.276 41.171 80.171 C 42.276 79.066 42.276 77.275 41.171 76.17 L 32.501 67.5 L 41.171 58.83 C 42.276 57.725 42.276 55.934 41.171 54.829 C 40.066 53.724 38.275 53.724 37.17 54.829 Z M 53.558 3.558 C 52.962 2.961 52.065 2.782 51.286 3.105 C 50.506 3.428 49.998 4.19 50 5.033 L 50 25 C 50 29.602 53.731 33.333 58.333 33.333 L 78.3 33.333 C 79.144 33.335 79.905 32.827 80.228 32.048 C 80.551 31.268 80.372 30.371 79.775 29.775 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="RH5XxEhmm" transform="translate(8 0)" width="83.33333333333343px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Fe = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(f.div, { ...o, layoutId: r, ref: t })
          : a(`div`, { ...o, ref: t });
      })),
      (Ie = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (G = v(
        i(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: o,
            kfNzCWrbt: s,
            ...c
          } = Ie(e);
          return a(Fe, {
            ...c,
            className: C(`framer-prTZc`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-prTZc { -webkit-mask: ${W}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${W}; width: 100px; }`,
        ],
        `framer-prTZc`,
      )),
      (G.displayName = `Page X`),
      A(G, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  K,
  qe = e(() => {
    (c(),
      D(),
      h(),
      u(),
      U(),
      z(),
      Le(),
      V(),
      (Re = x(H)),
      (ze = `framer-DTHrd`),
      (Be = { u7U_vyCk5: `framer-v-1wdks7a` }),
      (Ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (He = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ue = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(p.Provider, { value: s, children: n });
      }),
      (We = f.create(r)),
      (Ge = ({
        description: e,
        height: t,
        icon: n,
        id: r,
        resetVariables: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        A9Nq6U8RJ: n ?? s.A9Nq6U8RJ ?? G,
        DqsX7g4hh: a ?? s.DqsX7g4hh ?? `No Case Studies Found`,
        lfcsrwsIF: i ?? s.lfcsrwsIF,
        uBRD8hDDx:
          e ??
          s.uBRD8hDDx ??
          `We could not find a case study like this, please try something else.`,
      })),
      (Ke = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = v(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = d(),
            { activeLocale: l, setLocale: u } = ie(),
            p = ue(),
            {
              style: h,
              className: g,
              layoutId: ee,
              variant: v,
              DqsX7g4hh: y,
              uBRD8hDDx: x,
              A9Nq6U8RJ: S,
              lfcsrwsIF: w,
              ...te
            } = Ge(e),
            {
              baseVariant: ne,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: re,
              isLoading: oe,
              setGestureState: se,
              setVariant: ce,
              variants: k,
            } = b({
              defaultVariant: `u7U_vyCk5`,
              ref: o,
              variant: v,
              variantClassNames: Be,
            }),
            A = Ke(e, k),
            { activeVariantCallback: M, delay: N } = ae(ne),
            P = M(async (...e) => {
              if (w && (await w(...e)) === !1) return !1;
            }),
            de = C(ze, Ee, ve);
          return a(m, {
            id: ee ?? c,
            children: a(We, {
              animate: k,
              initial: !1,
              children: a(Ue, {
                value: Ve,
                children: s(f.div, {
                  ...te,
                  ...D,
                  className: C(de, `framer-1wdks7a`, g, T),
                  "data-framer-name": `Primary`,
                  layoutDependency: A,
                  layoutId: `u7U_vyCk5`,
                  ref: o,
                  style: { ...h },
                  children: [
                    a(f.div, {
                      className: `framer-2w0df2`,
                      "data-border": !0,
                      "data-framer-name": `Icon`,
                      layoutDependency: A,
                      layoutId: `PurSyTNMq`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                      },
                      children: a(le, {
                        animated: !0,
                        className: `framer-5rguao`,
                        Component: S,
                        layoutDependency: A,
                        layoutId: `SJJbo44de`,
                        style: {
                          "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                        },
                      }),
                    }),
                    s(f.div, {
                      className: `framer-yq0g8w`,
                      "data-framer-name": `Title & Description`,
                      layoutDependency: A,
                      layoutId: `CmWAbK1zS`,
                      children: [
                        a(_, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: a(f.h6, {
                              className: `framer-styles-preset-c7r8r4`,
                              "data-styles-preset": `JDyypIjWz`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `center` },
                              children: `No Case Studies Found`,
                            }),
                          }),
                          className: `framer-bdywrr`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `DjRQ2r20v`,
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        a(_, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: a(f.p, {
                              className: `framer-styles-preset-1i4fe7d`,
                              "data-styles-preset": `NbDFs5rgP`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                              },
                              children: `We could not find a case study like this, please try something else.`,
                            }),
                          }),
                          className: `framer-1olpouf`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `nvsCVd9T5`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    a(O, {
                      height: 31,
                      y:
                        (p?.y || 0) +
                        28 +
                        (((p?.height || 300) - 56 - 244) / 2 + 189 + 24),
                      children: a(j, {
                        className: `framer-1g7dpvf-container`,
                        layoutDependency: A,
                        layoutId: `efC5u6NTB-container`,
                        nodeId: `efC5u6NTB`,
                        rendersWithMotion: !0,
                        scopeId: `vZYj3lgW_`,
                        children: a(H, {
                          height: `100%`,
                          id: `efC5u6NTB`,
                          layoutId: `efC5u6NTB`,
                          S6PqTgm2A: P,
                          vA9NXfDIM: `Clear filters`,
                          variant: He(`FoS6XZPxY`),
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
          `.framer-DTHrd.framer-w25fpc, .framer-DTHrd .framer-w25fpc { display: block; }`,
          `.framer-DTHrd.framer-1wdks7a { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 300px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 1124px; }`,
          `.framer-DTHrd .framer-2w0df2 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; }`,
          `.framer-DTHrd .framer-5rguao { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-DTHrd .framer-yq0g8w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-DTHrd .framer-bdywrr, .framer-DTHrd .framer-1olpouf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DTHrd .framer-1g7dpvf-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...we,
          ...L,
          `.framer-DTHrd[data-border="true"]::after, .framer-DTHrd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-DTHrd`,
      )),
      (K.displayName = `CMS Empty State`),
      (K.defaultProps = { height: 300, width: 1124 }),
      A(K, {
        DqsX7g4hh: {
          defaultValue: `No Case Studies Found`,
          displayTextArea: !1,
          title: `Title`,
          type: I.String,
        },
        onDqsX7g4hhChange: { changes: `DqsX7g4hh`, type: I.ChangeHandler },
        uBRD8hDDx: {
          defaultValue: `We could not find a case study like this, please try something else.`,
          displayTextArea: !0,
          title: `Description`,
          type: I.String,
        },
        onuBRD8hDDxChange: { changes: `uBRD8hDDx`, type: I.ChangeHandler },
        A9Nq6U8RJ: {
          defaultValue: {
            identifier: `local-module:vector/DJfZPIT07:default`,
            moduleId: `cHfNv7VEiW6jQ4PkBYMh`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: I.VectorSetItem,
        },
        lfcsrwsIF: { title: `Reset Variables`, type: I.EventHandler },
      }),
      g(
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
          ...Re,
          ...T(Te),
          ...T(R),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (K.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([S(H, {}, t)])),
      }));
  }),
  Je,
  Ye,
  Xe,
  Ze,
  q,
  Qe,
  $e,
  et,
  tt,
  J,
  Y,
  X,
  Z,
  nt,
  rt,
  it,
  at,
  ot,
  Q,
  st,
  ct,
  lt,
  $,
  ut;
e(() => {
  (c(),
    D(),
    h(),
    u(),
    V(),
    ye(),
    qe(),
    De(),
    ke(),
    U(),
    z(),
    be(),
    Le(),
    Pe(),
    (Je = x(H)),
    (Ye = x(B)),
    (Xe = x(K)),
    (Ze = {
      D8b6xKUrj: `(max-width: 809.98px)`,
      JiTEjuLIb: `(min-width: 1200px)`,
      kUhjtzXDP: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (q = () => typeof document < `u`),
    (Qe = [`title`]),
    ($e = `framer-OkTzq`),
    (et = {
      D8b6xKUrj: `framer-v-mk2wu9`,
      JiTEjuLIb: `framer-v-hp57vz`,
      kUhjtzXDP: `framer-v-emqh7v`,
    }),
    (tt = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = () => ({
      from: { alias: `e0huc609y`, data: Oe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `e0huc609y`, name: `m8uStjAdn`, type: `Identifier` },
        { collection: `e0huc609y`, name: `IqPLs_RYT`, type: `Identifier` },
        { collection: `e0huc609y`, name: `yKuZxAi18`, type: `Identifier` },
        { collection: `e0huc609y`, name: `g9kE3q2_2`, type: `Identifier` },
        { collection: `e0huc609y`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          collection: `e0huc609y`,
          name: `U0FLwL6Lu`,
          type: `Identifier`,
        },
        operator: `==`,
        right: { type: `LiteralValue`, value: !0 },
        type: `BinaryOperation`,
      },
    })),
    (Z = ({ query: e, pageSize: t, children: n }) => n(_e(e))),
    fe(),
    (nt = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (rt = { dateStyle: `long`, timeZone: `UTC` }),
    (it = (e, t) => nt(e, rt, t)),
    (at = (e, t) => typeof e == `number` && typeof t == `number` && e < t),
    (ot = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase() === t.toLowerCase()
        : e === t),
    (Q = (e) => ({
      from: { alias: `la_UHwoX6`, data: Oe, type: `Collection` },
      select: [
        { collection: `la_UHwoX6`, name: `g9kE3q2_2`, type: `Identifier` },
        { collection: `la_UHwoX6`, name: `yKuZxAi18`, type: `Identifier` },
        { collection: `la_UHwoX6`, name: `m8uStjAdn`, type: `Identifier` },
        { collection: `la_UHwoX6`, name: `fFs6jUAsL`, type: `Identifier` },
        { collection: `la_UHwoX6`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          arguments: [
            { collection: `la_UHwoX6`, name: `m8uStjAdn`, type: `Identifier` },
            { type: `LiteralValue`, value: e },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
        type: `BinaryOperation`,
      },
    })),
    (st = { Desktop: `JiTEjuLIb`, Phone: `D8b6xKUrj`, Tablet: `kUhjtzXDP` }),
    (ct = ({ value: e }) =>
      k()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (lt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: st[r.variant] ?? r.variant ?? `JiTEjuLIb`,
    })),
    ($ = v(
      i(function (e, i) {
        let c = n(null),
          u = i ?? c,
          h = d(),
          { activeLocale: g, setLocale: v } = ie(),
          b = ue(),
          [x, S] = ne({ optional: !0, parameterName: `title` }),
          { style: T, className: D, layoutId: le, variant: k, ...A } = lt(e);
        me(o(() => Ne({}, g), [g]));
        let [j, F] = de(k, Ze, !1),
          { activeVariantCallback: I, delay: fe } = ae(void 0),
          _e = I(async (...e) => {
            S?.(void 0);
          }),
          L = C($e, Ce, ve, Ee, Me),
          R = t(oe)?.isLayoutTemplate,
          z = !!t(p)?.transition?.layout,
          ye = tt(R, z);
        ee();
        let V = te(`NiOM68_OU`),
          be = he(),
          xe = ce(),
          Se = (e) => !q() || (j === `D8b6xKUrj` && e),
          U = (e) => !q() || (j !== `kUhjtzXDP` && e);
        return (
          se({}),
          a(oe.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: st,
              primaryVariantId: `JiTEjuLIb`,
              variantClassNames: et,
            },
            children: s(m, {
              id: le ?? h,
              children: [
                a(ct, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(f.div, {
                  ...A,
                  className: C(L, `framer-hp57vz`, D),
                  ref: u,
                  style: { ...T },
                  children: s(f.main, {
                    className: `framer-19oekbu`,
                    "data-framer-name": `Main`,
                    layout: ye,
                    children: [
                      a(`section`, {
                        className: `framer-29jwcz`,
                        "data-border": !0,
                        "data-framer-name": `Header`,
                        children: s(`div`, {
                          className: `framer-8yj7mn`,
                          "data-framer-name": `Text`,
                          children: [
                            a(_, {
                              __fromCanvasComponent: !0,
                              children: a(r, {
                                children: a(`h3`, {
                                  className: `framer-styles-preset-or66bk`,
                                  "data-styles-preset": `xv81tUXg1`,
                                  dir: `auto`,
                                  children: `Case studies`,
                                }),
                              }),
                              className: `framer-s1l1ju`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(_, {
                              __fromCanvasComponent: !0,
                              children: a(r, {
                                children: a(`p`, {
                                  className: `framer-styles-preset-1i4fe7d`,
                                  "data-styles-preset": `NbDFs5rgP`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                  },
                                  children: `Explore the specific architecture blueprints, data metrics, and works we done.`,
                                }),
                              }),
                              className: `framer-km85d7`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                      a(`section`, {
                        className: `framer-1v18c7p`,
                        "data-border": !0,
                        "data-framer-name": `Featured`,
                        children: a(`div`, {
                          className: `framer-vmuhe6`,
                          children: a(M, {
                            children: a(Z, {
                              query: X(),
                              children: (e, t, n) =>
                                a(l, {
                                  children: e?.map(
                                    (
                                      {
                                        g9kE3q2_2: e,
                                        id: t,
                                        IqPLs_RYT: n,
                                        m8uStjAdn: i,
                                        yKuZxAi18: o,
                                      },
                                      c,
                                    ) => (
                                      (i ??= ``),
                                      (n ??= ``),
                                      (o ??= ``),
                                      a(
                                        m,
                                        {
                                          id: `e0huc609y-${t}`,
                                          children: a(ge.Provider, {
                                            value: { yKuZxAi18: o },
                                            children: s(`div`, {
                                              className: `framer-1krh49e`,
                                              children: [
                                                s(`div`, {
                                                  className: `framer-mso7yg`,
                                                  "data-framer-name": `Content`,
                                                  children: [
                                                    s(`div`, {
                                                      className: `framer-1d4nusn`,
                                                      "data-framer-name": `Text`,
                                                      children: [
                                                        a(_, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: a(r, {
                                                            children: a(`h6`, {
                                                              className: `framer-styles-preset-c7r8r4`,
                                                              "data-styles-preset": `JDyypIjWz`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `left`,
                                                              },
                                                              children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                                            }),
                                                          }),
                                                          className: `framer-17wwetc`,
                                                          "data-framer-name": `Title`,
                                                          fonts: [`Inter`],
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(_, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: a(r, {
                                                            children: a(`p`, {
                                                              className: `framer-styles-preset-l66ocq`,
                                                              "data-styles-preset": `cz5F3xMDV`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `left`,
                                                              },
                                                              children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                                            }),
                                                          }),
                                                          className: `framer-darsg6`,
                                                          "data-framer-name": `Title`,
                                                          fonts: [`Inter`],
                                                          text: n,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                    a(y, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: {
                                                              yKuZxAi18: o,
                                                            },
                                                            webPageId: `sXNmQkfHo`,
                                                          },
                                                          implicitPathVariables:
                                                            void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: {
                                                              yKuZxAi18: o,
                                                            },
                                                            webPageId: `sXNmQkfHo`,
                                                          },
                                                          implicitPathVariables:
                                                            void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: {
                                                              yKuZxAi18: o,
                                                            },
                                                            webPageId: `sXNmQkfHo`,
                                                          },
                                                          implicitPathVariables:
                                                            void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        a(w, {
                                                          breakpoint: j,
                                                          overrides: {
                                                            D8b6xKUrj: {
                                                              y:
                                                                (b?.y || 0) +
                                                                160 +
                                                                0 +
                                                                0 +
                                                                339.8 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                441 +
                                                                0 +
                                                                174,
                                                            },
                                                          },
                                                          children: a(O, {
                                                            height: 31,
                                                            y:
                                                              (b?.y || 0) +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              379.8 +
                                                              50 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              330,
                                                            children: a(N, {
                                                              className: `framer-i49pe2-container`,
                                                              nodeId: `pEN6n3fpF`,
                                                              scopeId: `IcLi543Pr`,
                                                              children: a(w, {
                                                                breakpoint: j,
                                                                overrides: {
                                                                  D8b6xKUrj: {
                                                                    JvqpmmvGw:
                                                                      e[2],
                                                                  },
                                                                  kUhjtzXDP: {
                                                                    JvqpmmvGw:
                                                                      e[1],
                                                                  },
                                                                },
                                                                children: a(H, {
                                                                  height: `100%`,
                                                                  id: `pEN6n3fpF`,
                                                                  JvqpmmvGw:
                                                                    e[0],
                                                                  layoutId: `pEN6n3fpF`,
                                                                  vA9NXfDIM: `Read Case Study`,
                                                                  variant:
                                                                    J(
                                                                      `kWnN_xkUt`,
                                                                    ),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  ],
                                                }),
                                                a(re, {
                                                  href: {
                                                    pathVariables: {
                                                      yKuZxAi18: o,
                                                    },
                                                    webPageId: `sXNmQkfHo`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `RSYwpqMzC`,
                                                  openInNewTab: !1,
                                                  scopeId: `IcLi543Pr`,
                                                  children: a(w, {
                                                    breakpoint: j,
                                                    overrides: {
                                                      D8b6xKUrj: {
                                                        background: {
                                                          alt: `Simplify Digital Co Thumbnail`,
                                                          fit: `fill`,
                                                          loading: E(
                                                            (b?.y || 0) +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              339.8 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          ),
                                                          pixelHeight: 1200,
                                                          pixelWidth: 2e3,
                                                          sizes: `min(min(${b?.width || `100vw`} - 40px, 1300px) - 24px, 600px)`,
                                                          ...Y(e),
                                                        },
                                                      },
                                                      kUhjtzXDP: {
                                                        background: {
                                                          alt: `Simplify Digital Co Thumbnail`,
                                                          fit: `fill`,
                                                          loading: E(
                                                            (b?.y || 0) +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              379.8 +
                                                              50 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          ),
                                                          pixelHeight: 1200,
                                                          pixelWidth: 2e3,
                                                          sizes: `max((max(min(min(${b?.width || `100vw`} - 40px, 1300px), 780px) - 56px, 1px) - 50px) * 0.6, 1px)`,
                                                          ...Y(e),
                                                        },
                                                      },
                                                    },
                                                    children: a(P, {
                                                      as: `a`,
                                                      background: {
                                                        alt: `Simplify Digital Co Thumbnail`,
                                                        fit: `fill`,
                                                        loading: E(
                                                          (b?.y || 0) +
                                                            160 +
                                                            0 +
                                                            0 +
                                                            379.8 +
                                                            50 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        ),
                                                        pixelHeight: 1200,
                                                        pixelWidth: 2e3,
                                                        sizes: `max((max(min(min(${b?.width || `100vw`} - 40px, 1300px), 1180px) - 56px, 1px) - 50px) / 2, 1px)`,
                                                        ...Y(e),
                                                      },
                                                      className: `framer-1h1ag17 framer-1mqulf3`,
                                                      draggable: `false`,
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
                      }),
                      s(`section`, {
                        className: `framer-2lctfb`,
                        "data-border": !0,
                        "data-framer-name": `All Case Studies`,
                        id: V,
                        ref: be(V),
                        children: [
                          s(`div`, {
                            className: `framer-861xgq`,
                            "data-framer-name": `Header`,
                            children: [
                              s(`div`, {
                                className: `framer-rkpeq2`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(_, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `All case studies`,
                                      }),
                                    }),
                                    className: `framer-1g08ta1`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(_, {
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
                                        children: `Explore all of our case studies`,
                                      }),
                                    }),
                                    className: `framer-1x3mr5q`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`label`, {
                                className: `framer-1vuf2ox`,
                                children: a(w, {
                                  breakpoint: j,
                                  overrides: {
                                    D8b6xKUrj: {
                                      inputName: `D8b6xKUrjbTQQ2eLGZ`,
                                    },
                                    kUhjtzXDP: {
                                      inputName: `kUhjtzXDPbTQQ2eLGZ`,
                                    },
                                  },
                                  children: a(pe, {
                                    className: `framer-1xivvpp`,
                                    inputName: `bTQQ2eLGZ`,
                                    onChange: (e) =>
                                      S(e.target.value || void 0),
                                    onClear: () => S(void 0),
                                    placeholder: `Search…`,
                                    type: `text`,
                                    value: x ?? ``,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          a(`div`, {
                            className: `framer-1m9jc4a`,
                            children: a(M, {
                              children: a(Z, {
                                query: Q(x),
                                children: (e, t, n) => {
                                  let i = e?.length ?? 0,
                                    o = ot(i, 0);
                                  return s(l, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            fFs6jUAsL: e,
                                            g9kE3q2_2: t,
                                            id: n,
                                            m8uStjAdn: o,
                                            yKuZxAi18: c,
                                          },
                                          l,
                                        ) => {
                                          ((c ??= ``), (o ??= ``));
                                          let u = l + 1,
                                            d = it(e, xe),
                                            f = at(u, i);
                                          return a(
                                            m,
                                            {
                                              id: `la_UHwoX6-${n}`,
                                              children: a(ge.Provider, {
                                                value: { yKuZxAi18: c },
                                                children: s(`div`, {
                                                  className: `framer-g4j3je`,
                                                  children: [
                                                    a(`div`, {
                                                      className: `framer-2qf1ge`,
                                                      "data-framer-name": `Thumbnail`,
                                                      children: a(re, {
                                                        href: {
                                                          pathVariables: {
                                                            yKuZxAi18: c,
                                                          },
                                                          webPageId: `sXNmQkfHo`,
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `mKNm6AQcf`,
                                                        openInNewTab: !1,
                                                        scopeId: `IcLi543Pr`,
                                                        children: a(w, {
                                                          breakpoint: j,
                                                          overrides: {
                                                            D8b6xKUrj: {
                                                              background: {
                                                                alt: `Velosite Thumbnail`,
                                                                fit: `fill`,
                                                                loading: E(
                                                                  (b?.y || 0) +
                                                                    160 +
                                                                    0 +
                                                                    0 +
                                                                    1013.8 +
                                                                    50 +
                                                                    251.8 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 1200,
                                                                pixelWidth: 2e3,
                                                                sizes: `max(min(min(${b?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px, 1px)`,
                                                                ...Y(t),
                                                              },
                                                            },
                                                            kUhjtzXDP: {
                                                              background: {
                                                                alt: `Velosite Thumbnail`,
                                                                fit: `fill`,
                                                                loading: E(
                                                                  (b?.y || 0) +
                                                                    160 +
                                                                    0 +
                                                                    0 +
                                                                    900.8 +
                                                                    50 +
                                                                    199.8 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 1200,
                                                                pixelWidth: 2e3,
                                                                sizes: `max(max((min(min(${b?.width || `100vw`} - 40px, 1300px), 780px) - 76px) / 2, 50px), 1px)`,
                                                                ...Y(t),
                                                              },
                                                            },
                                                          },
                                                          children: a(P, {
                                                            as: `a`,
                                                            background: {
                                                              alt: `Velosite Thumbnail`,
                                                              fit: `fill`,
                                                              loading: E(
                                                                (b?.y || 0) +
                                                                  160 +
                                                                  0 +
                                                                  0 +
                                                                  900.8 +
                                                                  50 +
                                                                  199.8 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 1200,
                                                              pixelWidth: 2e3,
                                                              sizes: `max(max((min(min(${b?.width || `100vw`} - 40px, 1300px), 1180px) - 76px) / 2, 50px), 1px)`,
                                                              ...Y(t),
                                                            },
                                                            className: `framer-11zvili framer-1mqulf3`,
                                                            draggable: `false`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-xu9jfn`,
                                                      "data-framer-name": `Content`,
                                                      children: [
                                                        s(`div`, {
                                                          className: `framer-ezr64`,
                                                          "data-framer-name": `Text`,
                                                          children: [
                                                            a(_, {
                                                              __fromCanvasComponent:
                                                                !0,
                                                              children: a(r, {
                                                                children: a(
                                                                  `h6`,
                                                                  {
                                                                    className: `framer-styles-preset-c7r8r4`,
                                                                    "data-styles-preset": `JDyypIjWz`,
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-text-alignment": `left`,
                                                                    },
                                                                    children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                                                  },
                                                                ),
                                                              }),
                                                              className: `framer-1hm98o7`,
                                                              "data-framer-name": `Title`,
                                                              fonts: [`Inter`],
                                                              text: o,
                                                              verticalAlignment: `top`,
                                                              withExternalLayout:
                                                                !0,
                                                            }),
                                                            a(_, {
                                                              __fromCanvasComponent:
                                                                !0,
                                                              children: a(r, {
                                                                children: a(
                                                                  `p`,
                                                                  {
                                                                    className: `framer-styles-preset-l66ocq`,
                                                                    "data-styles-preset": `cz5F3xMDV`,
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-text-alignment": `left`,
                                                                    },
                                                                    children: `Replacing Legacy ERP Invoicing Bottlenecks with an Autonomous Middleware Pipeline`,
                                                                  },
                                                                ),
                                                              }),
                                                              className: `framer-ni6wu4`,
                                                              "data-framer-name": `Title`,
                                                              fonts: [`Inter`],
                                                              text: a(`time`, {
                                                                dateTime: e,
                                                                children: d,
                                                              }),
                                                              verticalAlignment: `top`,
                                                              withExternalLayout:
                                                                !0,
                                                            }),
                                                          ],
                                                        }),
                                                        a(y, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  yKuZxAi18: c,
                                                                },
                                                                webPageId: `sXNmQkfHo`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  yKuZxAi18: c,
                                                                },
                                                                webPageId: `sXNmQkfHo`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: {
                                                                  yKuZxAi18: c,
                                                                },
                                                                webPageId: `sXNmQkfHo`,
                                                              },
                                                              implicitPathVariables:
                                                                void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            a(w, {
                                                              breakpoint: j,
                                                              overrides: {
                                                                D8b6xKUrj: {
                                                                  y:
                                                                    (b?.y ||
                                                                      0) +
                                                                    160 +
                                                                    0 +
                                                                    0 +
                                                                    1013.8 +
                                                                    50 +
                                                                    251.8 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    360 +
                                                                    0 +
                                                                    174,
                                                                },
                                                              },
                                                              children: a(O, {
                                                                height: 31,
                                                                y:
                                                                  (b?.y || 0) +
                                                                  160 +
                                                                  0 +
                                                                  0 +
                                                                  900.8 +
                                                                  50 +
                                                                  199.8 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  360 +
                                                                  0 +
                                                                  174,
                                                                children: a(N, {
                                                                  className: `framer-1tw3l83-container`,
                                                                  nodeId: `wuvtGcbB5`,
                                                                  scopeId: `IcLi543Pr`,
                                                                  children: a(
                                                                    w,
                                                                    {
                                                                      breakpoint:
                                                                        j,
                                                                      overrides:
                                                                        {
                                                                          D8b6xKUrj:
                                                                            {
                                                                              JvqpmmvGw:
                                                                                e[2],
                                                                            },
                                                                          kUhjtzXDP:
                                                                            {
                                                                              JvqpmmvGw:
                                                                                e[1],
                                                                            },
                                                                        },
                                                                      children:
                                                                        a(H, {
                                                                          height: `100%`,
                                                                          id: `wuvtGcbB5`,
                                                                          JvqpmmvGw:
                                                                            e[0],
                                                                          layoutId: `wuvtGcbB5`,
                                                                          vA9NXfDIM: `Read Case Study`,
                                                                          variant:
                                                                            J(
                                                                              `kWnN_xkUt`,
                                                                            ),
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      ],
                                                    }),
                                                    Se(f !== !1) &&
                                                      a(`div`, {
                                                        className: C(
                                                          `framer-w1pnlx`,
                                                          `hidden-hp57vz`,
                                                          `hidden-emqh7v`,
                                                          f === !1 &&
                                                            `hidden-mk2wu9`,
                                                        ),
                                                        "data-framer-name": `Divider`,
                                                        children: a(w, {
                                                          breakpoint: j,
                                                          overrides: {
                                                            D8b6xKUrj: {
                                                              width: `310px`,
                                                              y:
                                                                (b?.y || 0) +
                                                                160 +
                                                                0 +
                                                                0 +
                                                                1013.8 +
                                                                50 +
                                                                251.8 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                585 +
                                                                20,
                                                            },
                                                          },
                                                          children: a(O, {
                                                            height: 1,
                                                            children: a(N, {
                                                              className: `framer-ebj8wz-container`,
                                                              nodeId: `gOhvrsuh5`,
                                                              scopeId: `IcLi543Pr`,
                                                              children: a(B, {
                                                                height: `100%`,
                                                                id: `gOhvrsuh5`,
                                                                layoutId: `gOhvrsuh5`,
                                                                style: {
                                                                  height: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                variant:
                                                                  J(
                                                                    `m7utNsbHi`,
                                                                  ),
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            n,
                                          );
                                        },
                                      ),
                                      U(o !== !1) &&
                                        a(w, {
                                          breakpoint: j,
                                          overrides: {
                                            D8b6xKUrj: {
                                              width: `calc(min(min(${b?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 56px)`,
                                              y:
                                                (b?.y || 0) +
                                                160 +
                                                0 +
                                                0 +
                                                1013.8 +
                                                50 +
                                                251.8 +
                                                0 +
                                                646,
                                            },
                                          },
                                          children: a(O, {
                                            height: 300,
                                            width: `calc(max((min(min(${b?.width || `100vw`} - 40px, 1300px), 1180px) - 76px) / 2, 50px) * 2 + 20px)`,
                                            children: a(N, {
                                              className: C(
                                                `framer-141kb4b-container`,
                                                `hidden-emqh7v`,
                                                o === !1 && `hidden-hp57vz`,
                                                o === !1 && `hidden-mk2wu9`,
                                              ),
                                              nodeId: `zJQaXrHea`,
                                              scopeId: `IcLi543Pr`,
                                              children: a(K, {
                                                A9Nq6U8RJ: G,
                                                DqsX7g4hh: `No Case Studies Found`,
                                                height: `100%`,
                                                id: `zJQaXrHea`,
                                                layoutId: `zJQaXrHea`,
                                                lfcsrwsIF: _e,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                uBRD8hDDx: `We could not find a case study like this, please try something else.`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    ],
                                  });
                                },
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
        `.framer-OkTzq.framer-1mqulf3, .framer-OkTzq .framer-1mqulf3 { display: block; }`,
        `.framer-OkTzq.framer-hp57vz { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-OkTzq .framer-19oekbu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-29jwcz { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 0px 70px 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-8yj7mn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-s1l1ju, .framer-OkTzq .framer-1g08ta1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OkTzq .framer-km85d7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OkTzq .framer-1v18c7p { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-vmuhe6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-OkTzq .framer-1krh49e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-mso7yg { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 60px 0px; position: relative; width: 1px; }`,
        `.framer-OkTzq .framer-1d4nusn, .framer-OkTzq .framer-ezr64 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-17wwetc, .framer-OkTzq .framer-darsg6, .framer-OkTzq .framer-1hm98o7, .framer-OkTzq .framer-ni6wu4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OkTzq .framer-i49pe2-container, .framer-OkTzq .framer-1tw3l83-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-OkTzq .framer-1h1ag17 { -webkit-user-select: none; flex: 1 0 0px; height: 421px; position: relative; text-decoration: none; user-select: none; width: 1px; }`,
        `.framer-OkTzq .framer-2lctfb { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-861xgq, .framer-OkTzq .framer-2qf1ge { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-rkpeq2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-OkTzq .framer-1x3mr5q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OkTzq .framer-1vuf2ox { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 180px; }`,
        `.framer-OkTzq .framer-1xivvpp { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Google Sans Flex"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-icon-content: ""; --framer-input-icon-mask-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>'); --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-1m9jc4a { display: grid; flex: none; gap: 50px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-g4j3je { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-11zvili { -webkit-user-select: none; aspect-ratio: 1.6235294117647059 / 1; flex: 1 0 0px; height: auto; position: relative; text-decoration: none; user-select: none; width: 1px; }`,
        `.framer-OkTzq .framer-xu9jfn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OkTzq .framer-w1pnlx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 0px 0px; position: relative; width: 310px; }`,
        `.framer-OkTzq .framer-ebj8wz-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
        `.framer-OkTzq .framer-141kb4b-container { align-self: start; flex: none; grid-column: 1 / -1; height: 300px; justify-self: start; position: relative; width: 100%; }`,
        ...xe,
        ...L,
        ...we,
        ...Ae,
        `.framer-OkTzq[data-border="true"]::after, .framer-OkTzq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-OkTzq.framer-hp57vz { width: 810px; } .framer-OkTzq .framer-29jwcz, .framer-OkTzq .framer-1v18c7p, .framer-OkTzq .framer-2lctfb { max-width: 780px; } .framer-OkTzq .framer-1h1ag17 { flex: 1.5 0 0px; }}`,
        `@media (max-width: 809.98px) { .framer-OkTzq.framer-hp57vz { width: 390px; } .framer-OkTzq .framer-19oekbu { padding: 0px 12px 0px 12px; } .framer-OkTzq .framer-29jwcz { max-width: 600px; padding: 120px 0px 50px 0px; } .framer-OkTzq .framer-1v18c7p { flex-direction: column; max-width: 600px; padding: 0px 0px 28px 0px; } .framer-OkTzq .framer-vmuhe6, .framer-OkTzq .framer-rkpeq2 { flex: none; width: 100%; } .framer-OkTzq .framer-1krh49e { flex-direction: column; gap: 20px; } .framer-OkTzq .framer-mso7yg { align-self: unset; flex: none; gap: 20px; height: min-content; justify-content: center; order: 1; padding: 0px 28px 0px 28px; width: 100%; } .framer-OkTzq .framer-1h1ag17 { flex: none; order: 0; width: 100%; } .framer-OkTzq .framer-2lctfb { max-width: 600px; } .framer-OkTzq .framer-861xgq { flex-direction: column; gap: 12px; } .framer-OkTzq .framer-1vuf2ox { width: 100%; } .framer-OkTzq .framer-1m9jc4a { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; } .framer-OkTzq .framer-g4j3je, .framer-OkTzq .framer-141kb4b-container { align-self: unset; }}`,
      ],
      `framer-OkTzq`,
    )),
    ($.displayName = `Case Studies`),
    ($.defaultProps = { height: 2874, width: 1200 }),
    g(
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
              cssFamilyName: `Google Sans Flex`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Google Sans Flex`,
              url: `https://fonts.gstatic.com/s/googlesansflex/v22/t5sJIQcYNIWbFgDgAAzZ34auoVyXkJCOvp3SFWJbN5hF8Ju1x6sKCyp0l9sI40swNJwInycYAJzz0m7kJ4qFQOJBOjLvDSndo0SKMpKSTzwliVdHAy4bxTDHg_ugnAakp_mbyc5qU4LBMUM.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Je,
        ...Ye,
        ...Xe,
        ...T(Se),
        ...T(R),
        ...T(Te),
        ...T(je),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({
            AD1RtwL0f1: t.pathVariables?.title ?? void 0,
          }))(),
          i = F.get(X(), n);
        return Promise.allSettled([
          i.preload(),
          r.then(({ AD1RtwL0f1: e }) => F.get(Q(e), n).preload()),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => S(H, {}, t)));
          })(),
          (async () => {
            let { AD1RtwL0f1: e } = await r,
              i = (await F.get(Q(e), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(
              i.flatMap((e) => [S(H, {}, t), S(B, {}, t), S(K, {}, t)]),
            );
          })(),
        ]);
      },
    }),
    (ut = {
      exports: {
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `SiteIcLi543Pr`,
          slots: [],
          annotations: {
            siteDisplayContentsDiv: `false`,
            siteLayoutTemplateFlowEffect: `true`,
            siteColorSyntax: `true`,
            siteImmutableVariables: `true`,
            siteComponentViewportWidth: `true`,
            siteIntrinsicWidth: `1200`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"kUhjtzXDP":{"layout":["fixed","auto"]},"D8b6xKUrj":{"layout":["fixed","auto"]}}}`,
            siteContractVersion: `1`,
            siteScrollSections: `{"NiOM68_OU":{"pattern":":NiOM68_OU","name":"case-studies"}}`,
            siteAcceptsLayoutTemplate: `true`,
            siteIntrinsicHeight: `2874`,
            siteResponsiveScreen: `true`,
            siteAutoSizeImages: `true`,
          },
        },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { ut as __SiteMetadata__, $ as default, Qe as queryParamNames };
//# sourceMappingURL=case-studies-page.mjs.map

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
  s as ee,
  w as l,
  y as te,
} from "./react-runtime.mjs";
import { S as u, a as d, r as f, t as p } from "./motion-runtime.mjs";
import {
  A as m,
  At as ne,
  D as h,
  Dt as g,
  Et as re,
  H as _,
  I as v,
  P as y,
  S as b,
  St as x,
  U as S,
  X as C,
  _ as w,
  _t as T,
  a as E,
  d as D,
  ft as O,
  h as ie,
  ht as k,
  j as A,
  l as ae,
  lt as oe,
  o as j,
  pt as M,
  s as N,
  tt as se,
  u as P,
  vt as ce,
  wt as le,
} from "./framer-runtime.mjs";
import {
  a as F,
  c as I,
  i as ue,
  l as L,
  o as de,
  r as fe,
  s as R,
  u as z,
} from "./shared-library.mjs";
import { i as pe, n as me, r as he, t as ge } from "./text-style-features.mjs";
import {
  a as B,
  c as _e,
  i as ve,
  n as ye,
  o as be,
  r as xe,
  s as V,
  t as Se,
} from "./ui-component-library.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./text-style-secondary.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./heading-style-preset.mjs";
import { n as je, t as Me } from "./react-component-variant-d.mjs";
import { n as Ne, t as H } from "./card-component.mjs";
import Pe, {
  t as Fe,
} from "./route-metadata-contact.mjs";
var U,
  W,
  G,
  K,
  q = e(() => {
    (c(),
      C(),
      l(),
      (U = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 57.819 46.042 C 53.213 49.599 46.787 49.599 42.181 46.042 L 16.377 26.102 C 14.852 24.923 14.572 22.732 15.751 21.207 C 16.93 19.682 19.122 19.402 20.647 20.581 L 46.447 40.521 C 48.54 42.137 51.46 42.137 53.553 40.521 L 79.353 20.581 C 80.878 19.402 83.07 19.682 84.249 21.207 C 85.428 22.732 85.148 24.923 83.623 26.102 Z M 97.895 54.825 C 98.144 45.994 97.932 37.164 97.458 28.334 C 97.109 24.626 97.109 20.747 95.449 17.23 C 92.356 8.644 82.787 2.407 72.521 1.079 C 63.963 -0.738 55.093 0.367 46.41 0.037 C 28.821 0.696 11.181 -1.472 3.821 15.594 C -1.568 30.013 0.203 45.686 0.577 60.616 C 1.575 71.571 8.112 80.582 21.236 83.164 C 36.281 86.012 52.261 84.747 67.493 84.556 C 90.609 84.195 96.722 72.644 97.895 54.825 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="85px" id="w69M1g_mo" transform="translate(0 8)" width="98px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (W = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(u.div, { ...o, layoutId: r, ref: t })
          : a(`div`, { ...o, ref: t });
      })),
      (G = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (K = g(
        i(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: o,
            kfNzCWrbt: s,
            ...c
          } = G(e);
          return a(W, {
            ...c,
            className: y(`framer-x3cxn`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-x3cxn { -webkit-mask: ${U}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${U}; width: 100px; }`,
        ],
        `framer-x3cxn`,
      )),
      (K.displayName = `Mail`),
      A(K, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: N.Color,
        },
      }));
  });
function Ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var J,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  We = e(() => {
    (c(),
      C(),
      p(),
      l(),
      de(),
      z(),
      q(),
      (J = { AexFo3p1G: { hover: !0 } }),
      (Le = `framer-semHW`),
      (Re = { AexFo3p1G: `framer-v-eikyl6` }),
      (ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Be = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (Ve = u.create(r)),
      (He = ({
        height: e,
        icon: t,
        id: n,
        link: r,
        title: i,
        value: a,
        width: o,
        ...s
      }) => ({
        ...s,
        EW5SdV5XM: r ?? s.EW5SdV5XM,
        GS4n_oaZ6: i ?? s.GS4n_oaZ6 ?? `Email`,
        prLvWmivG: a ?? s.prLvWmivG ?? `hello@psioniclabs.tech`,
        XyooiHWrm: t ?? s.XyooiHWrm ?? K,
      })),
      (Ue = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = g(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = te(),
            { activeLocale: ee, setLocale: l } = T();
          oe();
          let {
              style: d,
              className: p,
              layoutId: m,
              variant: ne,
              XyooiHWrm: g,
              GS4n_oaZ6: _,
              prLvWmivG: v,
              EW5SdV5XM: b,
              ...x
            } = He(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: ae,
              variants: j,
            } = re({
              defaultVariant: `AexFo3p1G`,
              enabledGestures: J,
              ref: o,
              variant: ne,
              variantClassNames: Re,
            }),
            M = Ue(e, j),
            N = y(Le, fe, R);
          return a(f, {
            id: m ?? c,
            children: a(Ve, {
              animate: j,
              initial: !1,
              children: a(Be, {
                value: ze,
                children: a(w, {
                  href: b,
                  motionChild: !0,
                  nodeId: `AexFo3p1G`,
                  openInNewTab: !1,
                  scopeId: `qdrtkRfll`,
                  children: s(u.a, {
                    ...x,
                    ...D,
                    className: `${y(N, `framer-eikyl6`, p, C)} framer-kox2rs`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: M,
                    layoutId: `AexFo3p1G`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `dashed`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(247, 247, 247, 0)`,
                      ...d,
                    },
                    variants: {
                      "AexFo3p1G-hover": {
                        backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                      },
                    },
                    ...Ie(
                      { "AexFo3p1G-hover": { "data-framer-name": void 0 } },
                      S,
                      O,
                    ),
                    children: [
                      s(u.div, {
                        className: `framer-1gecn19`,
                        "data-framer-name": `Header`,
                        layoutDependency: M,
                        layoutId: `AnO9fhIAp`,
                        children: [
                          a(ie, {
                            animated: !0,
                            className: `framer-e7hi3z`,
                            Component: g,
                            layoutDependency: M,
                            layoutId: `Dt87lNON6`,
                            style: {
                              "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                            },
                          }),
                          a(h, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-ccv9s9`,
                                "data-styles-preset": `Bo2HZoBjr`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `left` },
                                children: `Email`,
                              }),
                            }),
                            className: `framer-1c78twn`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `gBdzuXs8R`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      a(h, {
                        __fromCanvasComponent: !0,
                        children: a(r, {
                          children: a(u.p, {
                            className: `framer-styles-preset-1i4fe7d`,
                            "data-styles-preset": `NbDFs5rgP`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                            },
                            children: `hello@psioniclabs.tech`,
                          }),
                        }),
                        className: `framer-fz8aqd`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `joCl72Z7C`,
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
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-semHW.framer-kox2rs, .framer-semHW .framer-kox2rs { display: block; }`,
          `.framer-semHW.framer-eikyl6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; height: 180px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; text-decoration: none; width: 368px; }`,
          `.framer-semHW .framer-1gecn19 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-semHW .framer-e7hi3z { flex: none; height: var(--framer-aspect-ratio-supported, 34px); position: relative; width: 34px; }`,
          `.framer-semHW .framer-1c78twn, .framer-semHW .framer-fz8aqd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...ue,
          ...I,
          `.framer-semHW[data-border="true"]::after, .framer-semHW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-semHW`,
      )),
      (Y.displayName = `Contact Card`),
      (Y.defaultProps = { height: 180, width: 368 }),
      A(Y, {
        XyooiHWrm: {
          defaultValue: {
            identifier: `local-module:vector/zuDi13M7T:default`,
            moduleId: `AwkV9kWdR9KCLS0mXzyP`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: N.VectorSetItem,
        },
        GS4n_oaZ6: {
          defaultValue: `Email`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onGS4n_oaZ6Change: { changes: `GS4n_oaZ6`, type: N.ChangeHandler },
        prLvWmivG: {
          defaultValue: `hello@psioniclabs.tech`,
          displayTextArea: !1,
          title: `Value`,
          type: N.String,
        },
        onprLvWmivGChange: { changes: `prLvWmivG`, type: N.ChangeHandler },
        EW5SdV5XM: { title: `Link`, type: N.Link },
      }),
      m(
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
          ...S(F),
          ...S(L),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  X,
  Qe,
  $e,
  et,
  tt,
  Z,
  nt,
  Q,
  rt,
  it,
  $,
  at;
e(() => {
  (c(),
    C(),
    p(),
    l(),
    _e(),
    Ne(),
    We(),
    be(),
    pe(),
    Ce(),
    z(),
    De(),
    ve(),
    je(),
    ye(),
    q(),
    Fe(),
    (Ge = _(H)),
    (Ke = _(Y)),
    (qe = _(V)),
    (Je = _(B)),
    (Ye = ne(u.div)),
    (Xe = {
      jdh3eR9ws: `(min-width: 810px) and (max-width: 1199.98px)`,
      nvBf40gBC: `(max-width: 809.98px)`,
      qjJN_kPWN: `(min-width: 1200px)`,
    }),
    (Ze = []),
    (X = `framer-V5Qi2`),
    (Qe = {
      jdh3eR9ws: `framer-v-1ykrwx5`,
      nvBf40gBC: `framer-v-incvt1`,
      qjJN_kPWN: `framer-v-1chx7yg`,
    }),
    ($e = void 0),
    (et = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
    (tt = (e, t, n) => (e && t ? `position` : n)),
    se(),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (nt = (e, t, n) => {
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
    (Q = { Desktop: `qjJN_kPWN`, Phone: `nvBf40gBC`, Tablet: `jdh3eR9ws` }),
    (rt = ({ value: e }) =>
      k()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (it = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `qjJN_kPWN`,
    })),
    ($ = g(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          p = te(),
          { activeLocale: m, setLocale: ne } = T(),
          g = oe(),
          { style: re, className: _, layoutId: v, variant: S, ...C } = it(e);
        ce(o(() => Pe({}, m), [m]));
        let [w, ie] = M(S, Xe, !1),
          k = y(X, Ee, R, ge, Ae),
          A = t(D)?.isLayoutTemplate,
          N = !!t(d)?.transition?.layout,
          se = tt(A, N),
          F = x(`tZXUF60fM`),
          I = le();
        return (
          O({}),
          a(D.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `qjJN_kPWN`,
              variantClassNames: Qe,
            },
            children: s(f, {
              id: v ?? p,
              children: [
                a(rt, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(u.div, {
                  ...C,
                  className: y(k, `framer-1chx7yg`, _),
                  "data-selection": !0,
                  ref: l,
                  style: { ...re },
                  children: s(Ye, {
                    className: `framer-omowpm`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: et,
                    isNestedFlowEffect: !1,
                    layout: se,
                    children: [
                      a(u.section, {
                        className: `framer-3xxcgd`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        layout: `position`,
                        children: s(`div`, {
                          className: `framer-q4tkj2`,
                          "data-framer-name": `Header`,
                          children: [
                            s(`div`, {
                              className: `framer-12b5z73`,
                              "data-framer-name": `Text`,
                              children: [
                                a(h, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h1`, {
                                      className: `framer-styles-preset-1xgagrl`,
                                      "data-styles-preset": `gfNbT0EVI`,
                                      dir: `auto`,
                                      children: `Contact us`,
                                    }),
                                  }),
                                  className: `framer-ms6st6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(h, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `Drop your technical parameters below, and an engineering lead will review your architecture layout within 24 hours.`,
                                    }),
                                  }),
                                  className: `framer-1di93xn`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-klbdz8`,
                              "data-framer-name": `Form`,
                              children: a(ae, {
                                action: `https://api.framer.com/forms/v1/forms/d8c9939a-e05d-4799-a521-4a7cab62f45a/submit`,
                                className: `framer-1k6vaia`,
                                "data-border": !0,
                                nodeId: `DZkKgU_Oi`,
                                children: (e) =>
                                  s(ee, {
                                    children: [
                                      s(`div`, {
                                        className: `framer-u7vkrz`,
                                        "data-framer-name": `Name`,
                                        children: [
                                          s(`label`, {
                                            className: `framer-kiop3f`,
                                            children: [
                                              a(h, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: a(`p`, {
                                                    className: `framer-styles-preset-kmsqt2`,
                                                    "data-styles-preset": `dXsx8iVCg`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                    },
                                                    children: `First Name`,
                                                  }),
                                                }),
                                                className: `framer-xu3tqp`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(P, {
                                                className: `framer-tebyuj`,
                                                inputName: `First Name`,
                                                placeholder: `Hello`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                          s(`label`, {
                                            className: `framer-2h2y75`,
                                            children: [
                                              a(h, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: a(`p`, {
                                                    className: `framer-styles-preset-kmsqt2`,
                                                    "data-styles-preset": `dXsx8iVCg`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                    },
                                                    children: `Last Name`,
                                                  }),
                                                }),
                                                className: `framer-1h1u4q9`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(P, {
                                                className: `framer-1rwr5yw`,
                                                inputName: `Last Name`,
                                                placeholder: `World`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-9poh5`,
                                        children: [
                                          a(h, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Email`,
                                              }),
                                            }),
                                            className: `framer-octj00`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(P, {
                                            className: `framer-xc38zy`,
                                            inputName: `Email`,
                                            placeholder: `name@psionics`,
                                            required: !0,
                                            style: { "--7r78yx": $e },
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-miuvzg`,
                                        children: [
                                          a(h, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Phone`,
                                              }),
                                            }),
                                            className: `framer-1q1f7ss`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(P, {
                                            className: `framer-of3wmh`,
                                            inputName: `Phone`,
                                            placeholder: `+1 123-456-789`,
                                            required: !0,
                                            type: `tel`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-1vce17j`,
                                        children: [
                                          a(h, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Message`,
                                              }),
                                            }),
                                            className: `framer-hhgtp`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(P, {
                                            className: `framer-v0o5fv`,
                                            inputName: `Message`,
                                            placeholder: `Type your message here...`,
                                            required: !1,
                                            type: `textarea`,
                                          }),
                                        ],
                                      }),
                                      a(b, {
                                        breakpoint: w,
                                        overrides: {
                                          jdh3eR9ws: {
                                            width: `calc(min(max(min(min(${g?.width || `100vw`}, 1300px), 780px) - 56px, 1px), 500px) - 80px)`,
                                          },
                                          nvBf40gBC: {
                                            width: `calc(min(max(min(min(${g?.width || `100vw`}, 1300px) - 24px, 790px) - 56px, 1px), 500px) - 40px)`,
                                          },
                                        },
                                        children: a(E, {
                                          height: 40,
                                          width: `calc(min(max(min(min(${g?.width || `100vw`}, 1300px), 1180px) - 56px, 1px), 500px) - 80px)`,
                                          children: a(j, {
                                            className: `framer-1b5dcw-container`,
                                            nodeId: `gEExCQK5I`,
                                            scopeId: `jL2GUUASB`,
                                            children: a(H, {
                                              arpT9QFmV: `Thank you`,
                                              height: `100%`,
                                              id: `gEExCQK5I`,
                                              layoutId: `gEExCQK5I`,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              type: `submit`,
                                              variant: nt(
                                                e,
                                                {
                                                  error: `PPljyH5_r`,
                                                  incomplete: `WRb6p8jNW`,
                                                  pending: `UPQmYyUya`,
                                                  success: `jG0My5y6_`,
                                                },
                                                Z(`rIkqgLzeQ`),
                                              ),
                                              w5DnkIBNM: `Submit`,
                                              width: `100%`,
                                              Z86Zq0Wki: `Something went wrong`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      s(u.section, {
                        className: `framer-14iogy1`,
                        "data-border": !0,
                        "data-framer-name": `Contact Options`,
                        layout: `position`,
                        children: [
                          s(`div`, {
                            className: `framer-qp03h0`,
                            "data-framer-name": `Text`,
                            children: [
                              a(h, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                    },
                                    children: `Reach out to us`,
                                  }),
                                }),
                                className: `framer-176ktxt`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(h, {
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
                                    children: `You can reach out to us via our support email `,
                                  }),
                                }),
                                className: `framer-16ur2ke`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a(`div`, {
                            className: `framer-qhhjv5`,
                            "data-framer-name": `Contact Cards`,
                            children: a(b, {
                              breakpoint: w,
                              overrides: {
                                jdh3eR9ws: {
                                  width: `min(min(min(${g?.width || `100vw`}, 1300px), 780px) - 56px, 400px)`,
                                },
                                nvBf40gBC: {
                                  width: `min(min(min(${g?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 890px)`,
                                },
                              },
                              children: a(E, {
                                height: 140,
                                width: `max(min(min(min(${g?.width || `100vw`}, 1300px), 1180px) - 56px, 890px), 1px)`,
                                children: a(j, {
                                  className: `framer-d1rrrp-container`,
                                  nodeId: `m3EINO3Nu`,
                                  scopeId: `jL2GUUASB`,
                                  children: a(Y, {
                                    EW5SdV5XM: `mailto:hello@psioniclabs.tech`,
                                    GS4n_oaZ6: `Email`,
                                    height: `100%`,
                                    id: `m3EINO3Nu`,
                                    layoutId: `m3EINO3Nu`,
                                    prLvWmivG: `hello@psioniclabs.tech`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    XyooiHWrm: K,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s(u.section, {
                        className: `framer-1qrf7ms`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: F,
                        layout: `position`,
                        ref: I(F),
                        children: [
                          s(`div`, {
                            className: `framer-u3bbhb`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-1aezro6`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(h, {
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
                                    className: `framer-1fe38qt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(h, {
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
                                    className: `framer-o317q8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1lkz1ck`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(b, {
                                    breakpoint: w,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${g?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${g?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${g?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-1osajdi-container`,
                                        nodeId: `M8sGF2Wg0`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `M8sGF2Wg0`,
                                          layoutId: `M8sGF2Wg0`,
                                          mQrslU2vj: `No aggressive sales pitches.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: xe,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(b, {
                                    breakpoint: w,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${g?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${g?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${g?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-138b97l-container`,
                                        nodeId: `l4ekgCUTR`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `l4ekgCUTR`,
                                          layoutId: `l4ekgCUTR`,
                                          mQrslU2vj: `Speak directly with a lead engineer.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Me,
                                          VJBFLDEGc: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(b, {
                                    breakpoint: w,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${g?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${g?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(E, {
                                      height: 55,
                                      width: `max((min(min(${g?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-1n1drvf-container`,
                                        nodeId: `gPaks_jf0`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `gPaks_jf0`,
                                          layoutId: `gPaks_jf0`,
                                          mQrslU2vj: `Receive a clear deployment roadmap.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Se,
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
                          a(b, {
                            breakpoint: w,
                            overrides: {
                              jdh3eR9ws: {
                                width: `max((min(min(${g?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                              },
                              nvBf40gBC: {
                                width: `calc(min(min(${g?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                              },
                            },
                            children: a(E, {
                              height: 575,
                              width: `max((min(min(${g?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              children: a(j, {
                                className: `framer-6q20w4-container`,
                                nodeId: `Iow0MtRYx`,
                                scopeId: `jL2GUUASB`,
                                children: a(B, {
                                  height: `100%`,
                                  id: `Iow0MtRYx`,
                                  layoutId: `Iow0MtRYx`,
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
        `.framer-V5Qi2.framer-11wszz4, .framer-V5Qi2 .framer-11wszz4 { display: block; }`,
        `.framer-V5Qi2.framer-1chx7yg { --selection-background-color: rgba(0, 153, 255, 0.15); --selection-color: #0099FF; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-V5Qi2 .framer-omowpm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-3xxcgd { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: visible; padding: 140px 28px 110px 28px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-q4tkj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-12b5z73 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-ms6st6, .framer-V5Qi2 .framer-176ktxt, .framer-V5Qi2 .framer-1fe38qt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-V5Qi2 .framer-1di93xn, .framer-V5Qi2 .framer-16ur2ke { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-V5Qi2 .framer-klbdz8, .framer-V5Qi2 .framer-u7vkrz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-1k6vaia { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 40px; position: relative; width: 1px; }`,
        `.framer-V5Qi2 .framer-kiop3f, .framer-V5Qi2 .framer-2h2y75 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-V5Qi2 .framer-xu3tqp, .framer-V5Qi2 .framer-1h1u4q9, .framer-V5Qi2 .framer-octj00, .framer-V5Qi2 .framer-1q1f7ss, .framer-V5Qi2 .framer-hhgtp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-V5Qi2 .framer-tebyuj, .framer-V5Qi2 .framer-1rwr5yw, .framer-V5Qi2 .framer-of3wmh { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-9poh5, .framer-V5Qi2 .framer-miuvzg, .framer-V5Qi2 .framer-1vce17j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-xc38zy { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); flex: none; height: 40px; opacity: var(--7r78yx); position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-v0o5fv { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-1b5dcw-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-14iogy1 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-qp03h0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-V5Qi2 .framer-qhhjv5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 890px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-d1rrrp-container { flex: 1 0 0px; height: 140px; position: relative; width: 1px; }`,
        `.framer-V5Qi2 .framer-1qrf7ms { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-u3bbhb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-V5Qi2 .framer-1aezro6, .framer-V5Qi2 .framer-1lkz1ck { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-o317q8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-V5Qi2 .framer-1osajdi-container, .framer-V5Qi2 .framer-138b97l-container, .framer-V5Qi2 .framer-1n1drvf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-V5Qi2 .framer-6q20w4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...we,
        ...I,
        ...me,
        ...Oe,
        `.framer-V5Qi2[data-selection="true"] * ::selection, .framer-V5Qi2 [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-V5Qi2[data-border="true"]::after, .framer-V5Qi2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-V5Qi2.framer-1chx7yg { width: 810px; } .framer-V5Qi2 .framer-3xxcgd, .framer-V5Qi2 .framer-14iogy1, .framer-V5Qi2 .framer-1qrf7ms { max-width: 780px; } .framer-V5Qi2 .framer-qhhjv5 { flex-direction: column; max-width: 400px; } .framer-V5Qi2 .framer-d1rrrp-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-V5Qi2.framer-1chx7yg { width: 390px; } .framer-V5Qi2 .framer-omowpm { padding: 0px 12px 0px 12px; } .framer-V5Qi2 .framer-3xxcgd { max-width: 790px; padding: 140px 28px 100px 28px; } .framer-V5Qi2 .framer-1k6vaia { padding: 20px; } .framer-V5Qi2 .framer-u7vkrz { flex-direction: column; gap: 20px; } .framer-V5Qi2 .framer-kiop3f, .framer-V5Qi2 .framer-2h2y75, .framer-V5Qi2 .framer-d1rrrp-container, .framer-V5Qi2 .framer-u3bbhb, .framer-V5Qi2 .framer-6q20w4-container { flex: none; width: 100%; } .framer-V5Qi2 .framer-14iogy1 { max-width: 600px; } .framer-V5Qi2 .framer-qp03h0 { padding: 0px; } .framer-V5Qi2 .framer-qhhjv5 { flex-direction: column; } .framer-V5Qi2 .framer-1qrf7ms { flex-direction: column; max-width: 600px; }}`,
      ],
      `framer-V5Qi2`,
    )),
    ($.displayName = `About`),
    ($.defaultProps = { height: 2762, width: 1200 }),
    m(
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
        ...Ge,
        ...Ke,
        ...qe,
        ...Je,
        ...S(Te),
        ...S(L),
        ...S(he),
        ...S(ke),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([v(H, {}, t), v(Y, {}, t), v(V, {}, t), v(B, {}, t)])
      ),
    }),
    (at = {
      exports: {
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `SitejL2GUUASB`,
          slots: [],
          annotations: {
            siteImmutableVariables: `true`,
            siteResponsiveScreen: `true`,
            siteContractVersion: `1`,
            siteComponentViewportWidth: `true`,
            siteIntrinsicWidth: `1200`,
            siteLayoutTemplateFlowEffect: `true`,
            siteIntrinsicHeight: `2762`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jdh3eR9ws":{"layout":["fixed","auto"]},"nvBf40gBC":{"layout":["fixed","auto"]}}}`,
            siteScrollSections: `{"tZXUF60fM":{"pattern":":tZXUF60fM","name":"Book A Call"}}`,
            siteColorSyntax: `true`,
            siteAcceptsLayoutTemplate: `true`,
            siteDisplayContentsDiv: `false`,
            siteAutoSizeImages: `true`,
          },
        },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { at as __SiteMetadata__, $ as default, Ze as queryParamNames };
//# sourceMappingURL=contact-page.mjs.map

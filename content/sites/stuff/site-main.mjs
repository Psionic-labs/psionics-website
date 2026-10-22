import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  i as m,
  j as h,
  l as g,
  m as _,
  n as v,
  o as y,
  p as ee,
  r as b,
  s as x,
  t as te,
  u as S,
  v as C,
  w,
  y as T,
  z as E,
} from "./react-runtime.mjs";
import { S as D, a as O, n as ne, r as k, t as A } from "./motion-runtime.mjs";
import {
  $ as re,
  A as j,
  At as ie,
  Ct as ae,
  D as M,
  Dt as N,
  E as P,
  Et as F,
  G as oe,
  H as I,
  I as L,
  J as se,
  Mt as ce,
  Nt as le,
  P as R,
  S as ue,
  T as de,
  U as fe,
  X as z,
  Y as pe,
  Z as B,
  _ as me,
  _t as V,
  a as H,
  at as he,
  b as ge,
  bt as _e,
  c as ve,
  ct as ye,
  d as be,
  dt as xe,
  f as Se,
  ft as Ce,
  g as we,
  h as Te,
  ht as Ee,
  it as De,
  j as U,
  jt as Oe,
  k as W,
  kt as ke,
  lt as G,
  m as Ae,
  nt as je,
  o as Me,
  pt as Ne,
  s as K,
  st as Pe,
  tt as Fe,
  w as Ie,
  wt as Le,
  y as Re,
  yt as ze,
} from "./framer-runtime.mjs";
import { n as Be, t as Ve } from "./layout-primitives.mjs";
import {
  a as He,
  c as Ue,
  i as We,
  l as Ge,
  o as Ke,
  r as qe,
  s as Je,
  u as Ye,
} from "./shared-library.mjs";
import {
  a as Xe,
  c as Ze,
  i as Qe,
  n as $e,
  o as et,
  r as tt,
  s as nt,
  t as rt,
} from "./framer-style-utils.mjs";
import { i as it, n as at, r as ot, t as st } from "./text-style-heading.mjs";
import { n as ct, t as lt } from "./framer-data-utils.mjs";
import { n as ut, t as dt } from "./interactive-ascii-component.mjs";
import { i as ft, n as pt, r as mt, t as ht } from "./text-style-features.mjs";
function gt({ blur: e, borderRadius: t, direction: n, transition: r }) {
  return f(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: h(
      () => [
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
        },
        {
          blur: `${e / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
        },
        {
          blur: `${e / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
        },
        {
          blur: `${e / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
        {
          blur: `${e}px`,
          gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
      ],
      [e],
    ).map((e, i) =>
      f(
        D.div,
        {
          transition: r,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        i,
      ),
    ),
  });
}
var _t = e(() => {
    (y(),
      w(),
      A(),
      z(),
      (gt.defaultProps = {
        blur: 10,
        borderRadius: `0px`,
        direction: `toBottom`,
        transition: { duration: 0.3 },
      }),
      U(gt, {
        blur: {
          title: `Blur`,
          type: K.Number,
          defaultValue: 10,
          min: 0,
          max: 100,
          step: 1,
          description: `Large blur values (10<) can impact performance.`,
        },
        borderRadius: {
          title: `Radius`,
          type: K.BorderRadius,
          defaultValue: `0px`,
          description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
        },
        direction: {
          title: `Direction`,
          type: K.SegmentedEnum,
          options: [`to bottom`, `to top`, `to left`, `to right`],
          optionTitles: [`↓`, `↑`, `←`, `→`],
          defaultValue: `to bottom`,
        },
        transition: {
          type: K.Transition,
          defaultValue: { duration: 0.3 },
          title: `Transition`,
          description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Site University](https://siteuni.link/cc).`,
        },
      }),
      (gt.displayName = `Blur Gradient`));
  }),
  vt,
  yt,
  bt,
  xt,
  St = e(() => {
    (y(),
      z(),
      w(),
      (vt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 82.11 3.069 C 86.203 -1.023 92.838 -1.023 96.931 3.069 C 101.023 7.162 101.023 13.797 96.931 17.89 L 17.89 96.931 C 13.797 101.023 7.162 101.023 3.069 96.931 C -1.023 92.838 -1.023 86.203 3.069 82.11 Z M 3.069 3.069 C 7.162 -1.023 13.797 -1.023 17.89 3.069 L 96.931 82.11 C 101.023 86.203 101.023 92.838 96.931 96.931 C 92.838 101.023 86.203 101.023 82.11 96.931 L 3.069 17.89 C -1.023 13.797 -1.023 7.162 3.069 3.069 Z" fill="transparent" height="100.00000071340011px" id="MTwjZpzhV" transform="translate(0 0)" width="99.99999843289923px"><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 C 16.267 0 20.959 4.692 20.959 10.479 L 20.959 122.26 C 20.959 128.048 16.267 132.74 10.479 132.74 C 4.692 132.74 0 128.048 0 122.26 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="132.73988081941218px" id="QcTqe9I3M" transform="translate(39.521 -16.37) rotate(45 10.479 66.37)" width="20.958928550433313px"/><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 L 122.26 0 C 128.048 0 132.74 4.692 132.74 10.479 C 132.74 16.267 128.048 20.959 122.26 20.959 L 10.479 20.959 C 4.692 20.959 0 16.267 0 10.479 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="20.958928550433455px" id="H0aXdZDtK" transform="translate(-16.37 39.521) rotate(45 66.37 10.479)" width="132.73988081941212px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (yt = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(D.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (bt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (xt = N(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            kfNzCWrbt: o,
            ...s
          } = bt(e);
          return f(yt, {
            ...s,
            className: R(`framer-7f90O`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-7f90O { -webkit-mask: ${vt}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${vt}; width: 100px; }`,
        ],
        `framer-7f90O`,
      )),
      (xt.displayName = `Close X`),
      U(xt, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: K.Color,
        },
      }));
  });
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt = e(() => {
    (y(),
      z(),
      A(),
      w(),
      St(),
      Be(),
      (wt = [`ytn0II0h0`, `f8rfqW1w2`]),
      (Tt = `framer-e8X8k`),
      (Et = { f8rfqW1w2: `framer-v-z56xen`, ytn0II0h0: `framer-v-1iwgchh` }),
      Fe(),
      (Dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ot = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (kt = { Close: `f8rfqW1w2`, Open: `ytn0II0h0` }),
      (At = D.create(s)),
      (jt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        god0NnfkT: e ?? i.god0NnfkT,
        variant: kt[i.variant] ?? i.variant ?? `ytn0II0h0`,
      })),
      (Mt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Nt = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: s } = V();
          G();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              god0NnfkT: p,
              ...m
            } = jt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: ee,
              setGestureState: b,
              setVariant: x,
              variants: te,
            } = F({
              cycleOrder: wt,
              defaultVariant: `ytn0II0h0`,
              ref: r,
              variant: d,
              variantClassNames: Et,
            }),
            S = Mt(e, te),
            { activeVariantCallback: C, delay: w } = ye(h),
            E = C(async (...e) => {
              if ((b({ isPressed: !1 }), p && (await p(...e)) === !1))
                return !1;
            }),
            O = R(Tt);
          return f(k, {
            id: u ?? i,
            children: f(At, {
              animate: te,
              initial: !1,
              children: f(Ot, {
                value: Dt,
                children: f(D.button, {
                  ...m,
                  ...v,
                  className: R(O, `framer-1iwgchh`, l, g),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: S,
                  layoutId: `ytn0II0h0`,
                  onTap: E,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-c501e0d1-c10e-4ef2-baa7-db83ded46808, rgba(0, 0, 0, 0.1))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-fe732e94-f30f-4945-91af-015cdcf1f937, rgba(0, 0, 0, 0.05))`,
                    borderBottomLeftRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...c,
                  },
                  ...Ct({ f8rfqW1w2: { "data-framer-name": `Close` } }, h, y),
                  children: f(Te, {
                    animated: !0,
                    className: `framer-ywx3q2`,
                    Component: Ve,
                    layoutDependency: S,
                    layoutId: `v1WmvHuD8`,
                    style: {
                      "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                    },
                    ...Ct({ f8rfqW1w2: { Component: xt } }, h, y),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-e8X8k.framer-8b7wrl, .framer-e8X8k .framer-8b7wrl { display: block; }`,
          `.framer-e8X8k.framer-1iwgchh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-e8X8k .framer-ywx3q2 { flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }`,
          `.framer-e8X8k[data-border="true"]::after, .framer-e8X8k [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-e8X8k`,
      )),
      (Nt.displayName = `Phone Menu Button`),
      (Nt.defaultProps = { height: 28, width: 28 }),
      U(Nt, {
        variant: {
          options: [`ytn0II0h0`, `f8rfqW1w2`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: K.Enum,
        },
        god0NnfkT: { title: `Click`, type: K.EventHandler },
      }),
      j(Nt, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt = e(() => {
    (y(),
      z(),
      A(),
      w(),
      (It = [
        `ix_AVL_oE`,
        `sdSbN56j2`,
        `cxzVsnrBx`,
        `h7AoQLCAb`,
        `Va0w4c8kk`,
        `wty_1cI1m`,
        `Y2u3isiEr`,
        `G5M2NL8CV`,
        `KjiLKY9bF`,
      ]),
      (Lt = `framer-jro2V`),
      (Rt = {
        cxzVsnrBx: `framer-v-hr8j5d`,
        G5M2NL8CV: `framer-v-15cblfr`,
        h7AoQLCAb: `framer-v-i2vseb`,
        ix_AVL_oE: `framer-v-bobhha`,
        KjiLKY9bF: `framer-v-rpu57b`,
        sdSbN56j2: `framer-v-1mdzciq`,
        Va0w4c8kk: `framer-v-1dzrlx0`,
        wty_1cI1m: `framer-v-4rzmmc`,
        Y2u3isiEr: `framer-v-ms3ilh`,
      }),
      (zt = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      Fe(),
      (Bt = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Vt = {
        "Grid Transition 1": `cxzVsnrBx`,
        "Grid Transition 2": `Va0w4c8kk`,
        "Grid Transition 3": `Y2u3isiEr`,
        "Grid Transition 4": `KjiLKY9bF`,
        "Horizontal Stack Bottom Top": `h7AoQLCAb`,
        "Horizontal Stack Top Bottom": `G5M2NL8CV`,
        "Vertical Stack Left Right": `sdSbN56j2`,
        "Vertical Stack Right Left": `wty_1cI1m`,
        Base: `ix_AVL_oE`,
      }),
      (Ht = D.create(s)),
      (Ut = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Vt[r.variant] ?? r.variant ?? `ix_AVL_oE`,
      })),
      (Wt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Gt = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: s } = V();
          G();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Ut(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: ee,
              setGestureState: b,
              setVariant: x,
              variants: te,
            } = F({
              cycleOrder: It,
              defaultVariant: `ix_AVL_oE`,
              ref: r,
              variant: d,
              variantClassNames: Rt,
            }),
            S = Wt(e, te),
            { activeVariantCallback: C, delay: w } = ye(m),
            E = C(async (...e) => {
              await w(() => x(`sdSbN56j2`, !0), 750);
            }),
            O = C(async (...e) => {
              await w(() => x(`cxzVsnrBx`, !0), 750);
            }),
            ne = C(async (...e) => {
              await w(() => x(`h7AoQLCAb`, !0), 750);
            }),
            A = C(async (...e) => {
              await w(() => x(`Va0w4c8kk`, !0), 750);
            }),
            re = C(async (...e) => {
              await w(() => x(`wty_1cI1m`, !0), 750);
            }),
            j = C(async (...e) => {
              await w(() => x(`Y2u3isiEr`, !0), 750);
            }),
            ie = C(async (...e) => {
              await w(() => x(`G5M2NL8CV`, !0), 750);
            });
          ze(m, {
            cxzVsnrBx: ne,
            default: E,
            G5M2NL8CV: C(async (...e) => {
              await w(() => x(`KjiLKY9bF`, !0), 750);
            }),
            h7AoQLCAb: A,
            sdSbN56j2: O,
            Va0w4c8kk: re,
            wty_1cI1m: j,
            Y2u3isiEr: ie,
          });
          let ae = R(Lt);
          return f(k, {
            id: u ?? i,
            children: f(Ht, {
              animate: te,
              initial: !1,
              children: f(Bt, {
                value: zt,
                children: g(D.div, {
                  ...p,
                  ...v,
                  className: R(ae, `framer-bobhha`, l, h),
                  "data-framer-name": `Base`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `ix_AVL_oE`,
                  ref: r,
                  style: { ...c },
                  ...Ft(
                    {
                      cxzVsnrBx: { "data-framer-name": `Grid Transition 1` },
                      G5M2NL8CV: {
                        "data-framer-name": `Horizontal Stack Top Bottom`,
                      },
                      h7AoQLCAb: {
                        "data-framer-name": `Horizontal Stack Bottom Top`,
                      },
                      KjiLKY9bF: { "data-framer-name": `Grid Transition 4` },
                      sdSbN56j2: {
                        "data-framer-name": `Vertical Stack Left Right`,
                      },
                      Va0w4c8kk: { "data-framer-name": `Grid Transition 2` },
                      wty_1cI1m: {
                        "data-framer-name": `Vertical Stack Right Left`,
                      },
                      Y2u3isiEr: { "data-framer-name": `Grid Transition 3` },
                    },
                    m,
                    y,
                  ),
                  children: [
                    f(D.div, {
                      className: `framer-145lr1b`,
                      "data-framer-name": `TL`,
                      layoutDependency: S,
                      layoutId: `e1WbN7hEv`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        G5M2NL8CV: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        h7AoQLCAb: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(D.div, {
                      className: `framer-mz0smt`,
                      "data-framer-name": `TR`,
                      layoutDependency: S,
                      layoutId: `oLLdgtMs6`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        cxzVsnrBx: { opacity: 1 },
                        G5M2NL8CV: {
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        h7AoQLCAb: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(D.div, {
                      className: `framer-k59rfm`,
                      "data-framer-name": `BL`,
                      layoutDependency: S,
                      layoutId: `TBMYyBpKY`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        G5M2NL8CV: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        h7AoQLCAb: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        wty_1cI1m: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(D.div, {
                      className: `framer-ctkz1u`,
                      "data-framer-name": `BR`,
                      layoutDependency: S,
                      layoutId: `FsDUjDx8G`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        cxzVsnrBx: { opacity: 1 },
                        G5M2NL8CV: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        h7AoQLCAb: {
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jro2V.framer-vf0jp3, .framer-jro2V .framer-vf0jp3 { display: block; }`,
          `.framer-jro2V.framer-bobhha { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; gap: 2px 2px; height: 22px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 22px; }`,
          `.framer-jro2V .framer-145lr1b { flex: none; height: 10px; left: calc(22.727272727272748% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(22.727272727272748% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-mz0smt { flex: none; height: 10px; left: calc(77.2727272727273% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(22.727272727272748% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-k59rfm { flex: none; height: 10px; left: calc(22.727272727272748% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(77.2727272727273% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-ctkz1u { flex: none; height: 10px; left: calc(77.2727272727273% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(77.2727272727273% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-145lr1b, .framer-jro2V.framer-v-1mdzciq .framer-k59rfm, .framer-jro2V.framer-v-4rzmmc .framer-mz0smt, .framer-jro2V.framer-v-4rzmmc .framer-ctkz1u { left: calc(50.00000000000002% - 22px / 2); width: 22px; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-mz0smt { height: 6px; left: calc(100.00000000000003% - 1px / 2); top: calc(22.727272727272748% - 6px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-ctkz1u { height: 6px; left: calc(100.00000000000003% - 1px / 2); top: calc(77.2727272727273% - 6px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-145lr1b { height: 1px; left: calc(22.727272727272748% - 5px / 2); top: calc(2.220446049250313e-14% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-mz0smt { height: 1px; left: calc(77.2727272727273% - 5px / 2); top: calc(2.220446049250313e-14% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-k59rfm, .framer-jro2V.framer-v-i2vseb .framer-ctkz1u, .framer-jro2V.framer-v-15cblfr .framer-145lr1b, .framer-jro2V.framer-v-15cblfr .framer-mz0smt { height: 22px; top: calc(50.00000000000002% - 22px / 2); }`,
          `.framer-jro2V.framer-v-4rzmmc .framer-145lr1b { height: 5px; left: calc(2.220446049250313e-14% - 1px / 2); top: calc(22.727272727272748% - 5px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-4rzmmc .framer-k59rfm { height: 5px; left: calc(2.220446049250313e-14% - 1px / 2); top: calc(77.2727272727273% - 5px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-15cblfr .framer-k59rfm { height: 1px; left: calc(22.727272727272748% - 5px / 2); top: calc(95.45454545454548% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-15cblfr .framer-ctkz1u { height: 1px; left: calc(77.2727272727273% - 5px / 2); top: calc(95.45454545454548% - 1px / 2); width: 5px; }`,
        ],
        `framer-jro2V`,
      )),
      (Gt.displayName = `Logo Animation`),
      (Gt.defaultProps = { height: 22, width: 22 }),
      U(Gt, {
        variant: {
          options: [
            `ix_AVL_oE`,
            `sdSbN56j2`,
            `cxzVsnrBx`,
            `h7AoQLCAb`,
            `Va0w4c8kk`,
            `wty_1cI1m`,
            `Y2u3isiEr`,
            `G5M2NL8CV`,
            `KjiLKY9bF`,
          ],
          optionTitles: [
            `Base`,
            `Vertical Stack Left Right`,
            `Grid Transition 1`,
            `Horizontal Stack Bottom Top`,
            `Grid Transition 2`,
            `Vertical Stack Right Left`,
            `Grid Transition 3`,
            `Horizontal Stack Top Bottom`,
            `Grid Transition 4`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      j(Gt, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function qt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  q,
  ln = e(() => {
    (y(),
      z(),
      A(),
      w(),
      Ye(),
      (Jt = ke(M)),
      (Yt = { qB5pg8Ij8: { hover: !0 } }),
      (Xt = [`qB5pg8Ij8`, `CUYG_Qlu5`]),
      (Zt = `framer-lcQ9o`),
      (Qt = { CUYG_Qlu5: `framer-v-vzrzat`, qB5pg8Ij8: `framer-v-jxkc1m` }),
      Fe(),
      ($t = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (en = { delay: 0, duration: 4, ease: [0, 0, 1, 1], type: `tween` }),
      (tn = {
        opacity: 0.7,
        rotate: 0,
        rotateX: 360,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (nn = (e, t) => `translateY(-50%) ${t}`),
      (rn = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (an = { Active: `CUYG_Qlu5`, Base: `qB5pg8Ij8` }),
      (on = D.create(s)),
      (sn = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        J6WxF2MzP: n ?? a.J6WxF2MzP,
        KBMqEnldG: r ?? a.KBMqEnldG ?? `About`,
        variant: an[a.variant] ?? a.variant ?? `qB5pg8Ij8`,
      })),
      (cn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V();
          G();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              KBMqEnldG: m,
              J6WxF2MzP: h,
              ..._
            } = sn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = F({
              cycleOrder: Xt,
              defaultVariant: `qB5pg8Ij8`,
              enabledGestures: Yt,
              ref: r,
              variant: p,
              variantClassNames: Qt,
            }),
            E = cn(e, w),
            O = R(Zt, Je),
            ne = () => v !== `CUYG_Qlu5`;
          return f(k, {
            id: d ?? i,
            children: f(on, {
              animate: w,
              initial: !1,
              children: f(rn, {
                value: $t,
                children: f(me, {
                  href: h,
                  motionChild: !0,
                  nodeId: `qB5pg8Ij8`,
                  openInNewTab: !1,
                  scopeId: `xFNeFwpmq`,
                  smoothScroll: !0,
                  children: g(D.a, {
                    ..._,
                    ...b,
                    className: `${R(O, `framer-jxkc1m`, u, y)} framer-h5u78t`,
                    "data-framer-name": `Base`,
                    draggable: `false`,
                    layoutDependency: E,
                    layoutId: `qB5pg8Ij8`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      "--corner-shape-fallback": 0.796,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      cornerShape: `superellipse(1.4)`,
                      ...l,
                    },
                    variants: {
                      "qB5pg8Ij8-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      CUYG_Qlu5: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, rgb(189, 189, 189))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-fe732e94-f30f-4945-91af-015cdcf1f937, rgba(0, 0, 0, 0.05))`,
                      },
                    },
                    ...qt(
                      {
                        "qB5pg8Ij8-hover": { "data-framer-name": void 0 },
                        CUYG_Qlu5: {
                          "data-border": !0,
                          "data-framer-name": `Active`,
                        },
                      },
                      v,
                      x,
                    ),
                    children: [
                      f(Jt, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-1i4fe7d`,
                            "data-styles-preset": `NbDFs5rgP`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                            },
                            children: `About`,
                          }),
                        }),
                        className: `framer-1hiziu2`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `PsaRafRTO`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "qB5pg8Ij8-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                          CUYG_Qlu5: {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...qt(
                          {
                            "qB5pg8Ij8-hover": {
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-1i4fe7d`,
                                  "data-styles-preset": `NbDFs5rgP`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `About`,
                                }),
                              }),
                            },
                            CUYG_Qlu5: {
                              __framer__loop: tn,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !0,
                              __framer__loopRepeatDelay: 0,
                              __framer__loopRepeatType: `mirror`,
                              __framer__loopTransition: en,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-1i4fe7d`,
                                  "data-styles-preset": `NbDFs5rgP`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `About`,
                                }),
                              }),
                            },
                          },
                          v,
                          x,
                        ),
                      }),
                      ne() &&
                        f(M, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(D.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                "--framer-letter-spacing": `0.01em`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                              },
                              children: `[`,
                            }),
                          }),
                          className: `framer-1gf40pe`,
                          fonts: [`GF;Google Sans Flex-variable-regular`],
                          layoutDependency: E,
                          layoutId: `YHNUNAhfh`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                            "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          transformTemplate: nn,
                          variants: {
                            "qB5pg8Ij8-hover": {
                              "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...qt(
                            {
                              "qB5pg8Ij8-hover": {
                                children: f(s, {
                                  children: f(D.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                      "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                      "--framer-letter-spacing": `0.01em`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                    },
                                    children: `[`,
                                  }),
                                }),
                              },
                            },
                            v,
                            x,
                          ),
                        }),
                      ne() &&
                        f(M, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(D.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                "--framer-letter-spacing": `0.01em`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                              },
                              children: `]`,
                            }),
                          }),
                          className: `framer-1acvs8d`,
                          fonts: [`GF;Google Sans Flex-variable-regular`],
                          layoutDependency: E,
                          layoutId: `PvsiyTInn`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                            "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          transformTemplate: nn,
                          variants: {
                            "qB5pg8Ij8-hover": {
                              "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...qt(
                            {
                              "qB5pg8Ij8-hover": {
                                children: f(s, {
                                  children: f(D.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                      "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                      "--framer-letter-spacing": `0.01em`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                    },
                                    children: `]`,
                                  }),
                                }),
                              },
                            },
                            v,
                            x,
                          ),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-lcQ9o.framer-h5u78t, .framer-lcQ9o .framer-h5u78t { display: block; }`,
          `.framer-lcQ9o.framer-jxkc1m { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 10px 4px 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-lcQ9o .framer-1hiziu2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-lcQ9o .framer-1gf40pe { -webkit-user-select: none; flex: none; height: auto; left: 4px; pointer-events: none; position: absolute; top: 49%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-lcQ9o .framer-1acvs8d { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: absolute; right: 4px; top: 49%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-lcQ9o.framer-v-vzrzat.framer-jxkc1m { cursor: default; }`,
          `.framer-lcQ9o.framer-v-jxkc1m.hover .framer-1gf40pe { left: 0px; }`,
          `.framer-lcQ9o.framer-v-jxkc1m.hover .framer-1acvs8d { right: 0px; }`,
          ...Ue,
          `.framer-lcQ9o[data-border="true"]::after, .framer-lcQ9o [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-lcQ9o`,
      )),
      (q.displayName = `Navigation Link`),
      (q.defaultProps = { height: 30.5, width: 60 }),
      U(q, {
        variant: {
          options: [`qB5pg8Ij8`, `CUYG_Qlu5`],
          optionTitles: [`Base`, `Active`],
          title: `Variant`,
          type: K.Enum,
        },
        KBMqEnldG: {
          defaultValue: `About`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onKBMqEnldGChange: { changes: `KBMqEnldG`, type: K.ChangeHandler },
        J6WxF2MzP: { title: `Link`, type: K.Link },
      }),
      j(
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
              {
                cssFamilyName: `Google Sans Flex Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Google Sans Flex`,
                url: `https://fonts.gstatic.com/s/googlesansflex/v22/t5t7IQcYNIWbFgDgAAzZ34auoVyXip6sfhcat2c.woff2`,
                variationAxes: [
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
                ],
                weight: `400`,
              },
            ],
          },
          ...fe(Ge),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function un(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dn,
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
  Dn,
  On,
  J,
  kn = e(() => {
    (y(),
      z(),
      A(),
      w(),
      Pt(),
      Kt(),
      ln(),
      (dn = I(q)),
      (fn = I(Gt)),
      (pn = I(Nt)),
      (mn = [`OECEM5TdI`, `HApJ7U0UN`, `ZjcOy4Cib`, `bc2YXHwMc`]),
      (hn = `framer-OzwMP`),
      (gn = {
        bc2YXHwMc: `framer-v-ks8b7i`,
        HApJ7U0UN: `framer-v-mm42p5`,
        OECEM5TdI: `framer-v-wl7jcf`,
        ZjcOy4Cib: `framer-v-19k9xp4`,
      }),
      (_n = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (vn = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (yn = (e, t) => (e ? `CUYG_Qlu5` : `qB5pg8Ij8`)),
      (bn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.4, type: `spring` },
      }),
      (Sn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.75,
        skewX: 0,
        skewY: 0,
        transition: _n,
      }),
      (Cn = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (wn = {
        "Small Menu Closed": `ZjcOy4Cib`,
        "Small Menu Open": `bc2YXHwMc`,
        Large: `OECEM5TdI`,
        Medium: `HApJ7U0UN`,
      }),
      (Tn = D.create(s)),
      (En = {
        "Case Studies": `tvf2Rcv44`,
        About: `t1T96jyoV`,
        Contact: `SxGmqKUGH`,
        Others: `RXhpLCgbr`,
        Pricing: `glgEnQfoK`,
      }),
      (Dn = ({
        currentPage: e,
        height: t,
        id: n,
        togglePhoneMenu: r,
        width: i,
        ...a
      }) => ({
        ...a,
        GTsNoximw: r ?? a.GTsNoximw,
        mX633isTE: En[e] ?? e ?? a.mX633isTE ?? `RXhpLCgbr`,
        variant: wn[a.variant] ?? a.variant ?? `OECEM5TdI`,
      })),
      (On = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: s } = V(),
            c = G(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              mX633isTE: m,
              GTsNoximw: h,
              ..._
            } = Dn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = F({
              cycleOrder: mn,
              defaultVariant: `OECEM5TdI`,
              ref: r,
              variant: p,
              variantClassNames: gn,
            }),
            E = On(e, w),
            { activeVariantCallback: O, delay: ne } = ye(v),
            A = O(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            re = R(hn),
            j = () => ![`ZjcOy4Cib`, `bc2YXHwMc`].includes(v);
          ae();
          let ie = () => !![`ZjcOy4Cib`, `bc2YXHwMc`].includes(v);
          return f(k, {
            id: d ?? i,
            children: f(Tn, {
              animate: w,
              initial: !1,
              children: f(Cn, {
                value: _n,
                children: f(D.nav, {
                  ..._,
                  ...b,
                  className: R(re, `framer-wl7jcf`, u, y),
                  "data-framer-name": `Large`,
                  layoutDependency: E,
                  layoutId: `OECEM5TdI`,
                  ref: r,
                  style: { ...l },
                  ...un(
                    {
                      bc2YXHwMc: { "data-framer-name": `Small Menu Open` },
                      HApJ7U0UN: { "data-framer-name": `Medium` },
                      ZjcOy4Cib: { "data-framer-name": `Small Menu Closed` },
                    },
                    v,
                    x,
                  ),
                  children: g(D.div, {
                    className: `framer-1uuh4hs`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    layoutDependency: E,
                    layoutId: `l1yYakfxe`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245))`,
                    },
                    children: [
                      j() &&
                        g(D.div, {
                          className: `framer-1nb70iu`,
                          "data-framer-name": `Links`,
                          layoutDependency: E,
                          layoutId: `pN_Rt8IdY`,
                          children: [
                            f(P, {
                              links: [
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
                                f(H, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 30) /
                                        2) +
                                    0,
                                  children: f(W, {
                                    className: `framer-q19tcp-container`,
                                    layoutDependency: E,
                                    layoutId: `T8vSDGAsP-container`,
                                    nodeId: `T8vSDGAsP`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(q, {
                                      height: `100%`,
                                      id: `T8vSDGAsP`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `About`,
                                      layoutId: `T8vSDGAsP`,
                                      variant: bn(yn(vn(m, `t1T96jyoV`), a)),
                                      width: `100%`,
                                      ...un(
                                        { HApJ7U0UN: { J6WxF2MzP: e[1] } },
                                        v,
                                        x,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(P, {
                              links: [
                                {
                                  href: {
                                    hash: `:IEzvAGyIY`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:IEzvAGyIY`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 30) /
                                        2) +
                                    0,
                                  children: f(W, {
                                    className: `framer-btbdi1-container`,
                                    layoutDependency: E,
                                    layoutId: `vLzsDBvFc-container`,
                                    nodeId: `vLzsDBvFc`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(q, {
                                      height: `100%`,
                                      id: `vLzsDBvFc`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `Pricing`,
                                      layoutId: `vLzsDBvFc`,
                                      variant: bn(yn(vn(m, `glgEnQfoK`), a)),
                                      width: `100%`,
                                      ...un(
                                        { HApJ7U0UN: { J6WxF2MzP: e[1] } },
                                        v,
                                        x,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      f(me, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `WSAouRBgI`,
                        openInNewTab: !1,
                        scopeId: `fb0_pR65E`,
                        children: f(D.a, {
                          "aria-label": `Home Page Logo Link`,
                          className: `framer-g3w6q6 framer-xkaqe6`,
                          "data-framer-name": `Logo`,
                          draggable: `false`,
                          layoutDependency: E,
                          layoutId: `WSAouRBgI`,
                          children: f(H, {
                            height: 22,
                            width: `22px`,
                            y:
                              (c?.y || 0) +
                              (0 +
                                ((c?.height || 70) -
                                  0 -
                                  ((c?.height || 70) - 0) * 1) /
                                  2) +
                              (((c?.height || 70) - 0) *
                                1 *
                                0.5000000000000002 -
                                11) +
                              0,
                            ...un(
                              {
                                bc2YXHwMc: {
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 22) /
                                        2) +
                                    0,
                                },
                                ZjcOy4Cib: {
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 22) /
                                        2) +
                                    0,
                                },
                              },
                              v,
                              x,
                            ),
                            children: f(W, {
                              className: `framer-11azskw-container`,
                              layoutDependency: E,
                              layoutId: `qqfiyq9h1-container`,
                              nodeId: `qqfiyq9h1`,
                              rendersWithMotion: !0,
                              scopeId: `fb0_pR65E`,
                              whileHover: xn,
                              whileTap: Sn,
                              children: f(Gt, {
                                height: `100%`,
                                id: `qqfiyq9h1`,
                                layoutId: `qqfiyq9h1`,
                                style: { width: `100%` },
                                variant: bn(`ix_AVL_oE`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      j() &&
                        f(D.div, {
                          className: `framer-1ck6rat`,
                          "data-framer-name": `Spacer`,
                          layoutDependency: E,
                          layoutId: `eS_pn97hr`,
                        }),
                      j() &&
                        g(D.div, {
                          className: `framer-9z2jr8`,
                          "data-framer-name": `Links`,
                          layoutDependency: E,
                          layoutId: `VsnQQgHQJ`,
                          children: [
                            f(P, {
                              links: [
                                {
                                  href: { webPageId: `IcLi543Pr` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `IcLi543Pr` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 30) /
                                        2) +
                                    0,
                                  children: f(W, {
                                    className: `framer-1p6qu0m-container`,
                                    layoutDependency: E,
                                    layoutId: `Hz5DM7jnt-container`,
                                    nodeId: `Hz5DM7jnt`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(q, {
                                      height: `100%`,
                                      id: `Hz5DM7jnt`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `Case Studies`,
                                      layoutId: `Hz5DM7jnt`,
                                      variant: bn(yn(vn(m, `tvf2Rcv44`), a)),
                                      width: `100%`,
                                      ...un(
                                        { HApJ7U0UN: { J6WxF2MzP: e[1] } },
                                        v,
                                        x,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(P, {
                              links: [
                                {
                                  href: { webPageId: `jL2GUUASB` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `jL2GUUASB` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(H, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) -
                                        0 -
                                        ((c?.height || 70) - 0) * 1) /
                                        2) +
                                    (0 +
                                      (((c?.height || 70) - 0) * 1 - 0 - 30) /
                                        2) +
                                    0,
                                  children: f(W, {
                                    className: `framer-mqlrmf-container`,
                                    layoutDependency: E,
                                    layoutId: `kGm7K3WZ7-container`,
                                    nodeId: `kGm7K3WZ7`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(q, {
                                      height: `100%`,
                                      id: `kGm7K3WZ7`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `Contact`,
                                      layoutId: `kGm7K3WZ7`,
                                      variant: bn(yn(vn(m, `SxGmqKUGH`), a)),
                                      width: `100%`,
                                      ...un(
                                        { HApJ7U0UN: { J6WxF2MzP: e[1] } },
                                        v,
                                        x,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      ie() &&
                        f(H, {
                          ...un(
                            {
                              bc2YXHwMc: {
                                height: 28,
                                y:
                                  (c?.y || 0) +
                                  (0 +
                                    ((c?.height || 70) -
                                      0 -
                                      ((c?.height || 70) - 0) * 1) /
                                      2) +
                                  (0 +
                                    (((c?.height || 70) - 0) * 1 - 0 - 28) / 2),
                              },
                              ZjcOy4Cib: {
                                height: 28,
                                y:
                                  (c?.y || 0) +
                                  (0 +
                                    ((c?.height || 70) -
                                      0 -
                                      ((c?.height || 70) - 0) * 1) /
                                      2) +
                                  (0 +
                                    (((c?.height || 70) - 0) * 1 - 0 - 28) / 2),
                              },
                            },
                            v,
                            x,
                          ),
                          children: f(W, {
                            className: `framer-pu3uca-container`,
                            layoutDependency: E,
                            layoutId: `bIYoxwuxF-container`,
                            nodeId: `bIYoxwuxF`,
                            rendersWithMotion: !0,
                            scopeId: `fb0_pR65E`,
                            children: f(Nt, {
                              height: `100%`,
                              id: `bIYoxwuxF`,
                              layoutId: `bIYoxwuxF`,
                              variant: bn(`ytn0II0h0`),
                              width: `100%`,
                              ...un(
                                {
                                  bc2YXHwMc: {
                                    god0NnfkT: A,
                                    variant: bn(`f8rfqW1w2`),
                                  },
                                  ZjcOy4Cib: { god0NnfkT: A },
                                },
                                v,
                                x,
                              ),
                            }),
                          }),
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
          `.framer-OzwMP.framer-xkaqe6, .framer-OzwMP .framer-xkaqe6 { display: block; }`,
          `.framer-OzwMP.framer-wl7jcf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 70px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1000px; }`,
          `.framer-OzwMP .framer-1uuh4hs { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 1px; }`,
          `.framer-OzwMP .framer-1nb70iu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-OzwMP .framer-q19tcp-container, .framer-OzwMP .framer-btbdi1-container, .framer-OzwMP .framer-1p6qu0m-container, .framer-OzwMP .framer-mqlrmf-container, .framer-OzwMP .framer-pu3uca-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-OzwMP .framer-g3w6q6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; left: calc(50.00000000000002% - 22px / 2); overflow: visible; padding: 0px; position: absolute; text-decoration: none; top: calc(50.00000000000002% - 22px / 2); width: 22px; }`,
          `.framer-OzwMP .framer-11azskw-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
          `.framer-OzwMP .framer-1ck6rat { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100px; }`,
          `.framer-OzwMP .framer-9z2jr8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-OzwMP.framer-v-mm42p5 .framer-1uuh4hs { max-width: 780px; }`,
          `.framer-OzwMP.framer-v-19k9xp4.framer-wl7jcf, .framer-OzwMP.framer-v-ks8b7i.framer-wl7jcf { width: 366px; }`,
          `.framer-OzwMP.framer-v-19k9xp4 .framer-1uuh4hs, .framer-OzwMP.framer-v-ks8b7i .framer-1uuh4hs { gap: unset; justify-content: space-between; max-width: 600px; }`,
          `.framer-OzwMP.framer-v-19k9xp4 .framer-g3w6q6, .framer-OzwMP.framer-v-ks8b7i .framer-g3w6q6 { left: unset; position: relative; top: unset; z-index: 1; }`,
          `.framer-OzwMP[data-border="true"]::after, .framer-OzwMP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-OzwMP`,
      )),
      (J.displayName = `Navigation`),
      (J.defaultProps = { height: 70, width: 1e3 }),
      U(J, {
        variant: {
          options: [`OECEM5TdI`, `HApJ7U0UN`, `ZjcOy4Cib`, `bc2YXHwMc`],
          optionTitles: [
            `Large`,
            `Medium`,
            `Small Menu Closed`,
            `Small Menu Open`,
          ],
          title: `Variant`,
          type: K.Enum,
        },
        mX633isTE: {
          defaultValue: `RXhpLCgbr`,
          options: [
            `t1T96jyoV`,
            `glgEnQfoK`,
            `tvf2Rcv44`,
            `SxGmqKUGH`,
            `RXhpLCgbr`,
          ],
          optionTitles: [
            `About`,
            `Pricing`,
            `Case Studies`,
            `Contact`,
            `Others`,
          ],
          title: `Current Page`,
          type: K.Enum,
        },
        onmX633isTEChange: { changes: `mX633isTE`, type: K.ChangeHandler },
        GTsNoximw: { title: `Toggle Phone Menu`, type: K.EventHandler },
      }),
      j(J, [{ explicitInter: !0, fonts: [] }, ...dn, ...fn, ...pn], {
        supportsExplicitInterCodegen: !0,
      }),
      (J.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([L(q, {}, t), L(Gt, {}, t), L(Nt, {}, t)])
        ),
      }));
  }),
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Y,
  Ln = e(() => {
    (y(),
      z(),
      A(),
      w(),
      it(),
      (An = `framer-W2P6K`),
      (jn = { VDn9J1DDX: `framer-v-q6ml10` }),
      (Mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nn = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Pn = D.create(s)),
      (Fn = ({
        click: e,
        height: t,
        id: n,
        link: r,
        title: i,
        width: a,
        ...o
      }) => ({
        ...o,
        LAQQ0HHHX: e ?? o.LAQQ0HHHX,
        T4TN0TPWG: r ?? o.T4TN0TPWG,
        WbspzAGED: i ?? o.WbspzAGED ?? `Home`,
      })),
      (In = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V();
          G();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              WbspzAGED: m,
              T4TN0TPWG: h,
              LAQQ0HHHX: g,
              ..._
            } = Fn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = F({
              defaultVariant: `VDn9J1DDX`,
              ref: r,
              variant: p,
              variantClassNames: jn,
            }),
            E = In(e, w),
            { activeVariantCallback: O, delay: ne } = ye(v),
            A = O(async (...e) => {
              if ((S({ isPressed: !1 }), g && (await g(...e)) === !1))
                return !1;
            }),
            re = R(An, st);
          return f(k, {
            id: d ?? i,
            children: f(Pn, {
              animate: w,
              initial: !1,
              children: f(Nn, {
                value: Mn,
                children: f(me, {
                  href: h,
                  motionChild: !0,
                  nodeId: `VDn9J1DDX`,
                  openInNewTab: !1,
                  scopeId: `qBv3f0KBz`,
                  children: f(D.a, {
                    ..._,
                    ...b,
                    className: `${R(re, `framer-q6ml10`, u, y)} framer-1fm2n88`,
                    "data-framer-name": `Primary`,
                    "data-highlight": !0,
                    layoutDependency: E,
                    layoutId: `VDn9J1DDX`,
                    onTap: A,
                    ref: r,
                    style: { ...l },
                    children: f(M, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(D.p, {
                          className: `framer-styles-preset-1217b5x`,
                          "data-styles-preset": `LBghXxOCz`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                          },
                          children: `Home`,
                        }),
                      }),
                      className: `framer-7uzgw9`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `lGaLCcXhY`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-W2P6K.framer-1fm2n88, .framer-W2P6K .framer-1fm2n88 { display: block; }`,
          `.framer-W2P6K.framer-q6ml10 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 334px; }`,
          `.framer-W2P6K .framer-7uzgw9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...at,
        ],
        `framer-W2P6K`,
      )),
      (Y.displayName = `Phone Menu Link`),
      (Y.defaultProps = { height: 51, width: 334 }),
      U(Y, {
        WbspzAGED: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onWbspzAGEDChange: { changes: `WbspzAGED`, type: K.ChangeHandler },
        T4TN0TPWG: { title: `Link`, type: K.Link },
        LAQQ0HHHX: { title: `Click`, type: K.EventHandler },
      }),
      j(
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
          ...fe(ot),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (y(),
      z(),
      A(),
      w(),
      Ze(),
      Ln(),
      ct(),
      (Rn = I(Y)),
      (zn = I(lt)),
      (Bn = Oe(ke(D.div))),
      (Vn = `framer-AE9Uu`),
      (Hn = { eCVKP5cLb: `framer-v-1wnscys` }),
      (Un = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.6, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Gn = {
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
      (Kn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (qn = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Jn = D.create(s)),
      (Yn = ({ closeOverlay: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        Ny8O4YToJ: e ?? i.Ny8O4YToJ,
      })),
      (Xn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Zn = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V(),
            l = G(),
            {
              style: u,
              className: d,
              layoutId: p,
              variant: m,
              Ny8O4YToJ: h,
              ..._
            } = Yn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = F({
              defaultVariant: `eCVKP5cLb`,
              ref: r,
              variant: m,
              variantClassNames: Hn,
            }),
            E = Xn(e, w),
            { activeVariantCallback: O, delay: ne } = ye(v),
            A = O(async (...e) => {
              if (h && (await ne(() => {}, 100), (await h(...e)) === !1))
                return !1;
            }),
            re = R(Vn, Xe);
          return (
            ae(),
            f(k, {
              id: p ?? i,
              children: f(Jn, {
                animate: w,
                initial: !1,
                children: f(qn, {
                  value: Un,
                  children: f(D.div, {
                    ..._,
                    ...b,
                    className: R(re, `framer-1wnscys`, d, y),
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    "data-hide-scrollbars": !0,
                    layoutDependency: E,
                    layoutId: `eCVKP5cLb`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(250, 250, 250))`,
                      ...u,
                    },
                    children: g(Bn, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Wn,
                      className: `framer-g4xq83`,
                      "data-framer-appear-id": `g4xq83`,
                      "data-framer-name": `Content`,
                      initial: Gn,
                      layoutDependency: E,
                      layoutId: `DpVnI92Q2`,
                      optimized: !0,
                      children: [
                        g(D.div, {
                          className: `framer-x7fx7v`,
                          "data-framer-name": `Pages`,
                          layoutDependency: E,
                          layoutId: `tuWu7bnmt`,
                          children: [
                            f(M, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-79bu04`,
                                  "data-styles-preset": `GMp6ZDbq7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120)))`,
                                  },
                                  children: `Pages`,
                                }),
                              }),
                              className: `framer-1223hxr`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `Ojx9Bgwm2`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(D.div, {
                              className: `framer-yijvx0`,
                              "data-framer-name": `Links`,
                              layoutDependency: E,
                              layoutId: `X4y72Jpap`,
                              children: [
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        138 +
                                        0 +
                                        0,
                                      children: f(W, {
                                        className: `framer-1wb3b87-container`,
                                        layoutDependency: E,
                                        layoutId: `PH1btO39o-container`,
                                        nodeId: `PH1btO39o`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `PH1btO39o`,
                                          LAQQ0HHHX: A,
                                          layoutId: `PH1btO39o`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Home`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `TG4v3XDvb` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        138 +
                                        0 +
                                        51,
                                      children: f(W, {
                                        className: `framer-gd2kun-container`,
                                        layoutDependency: E,
                                        layoutId: `eXlbZLDaL-container`,
                                        nodeId: `eXlbZLDaL`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `eXlbZLDaL`,
                                          LAQQ0HHHX: A,
                                          layoutId: `eXlbZLDaL`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `About`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:IEzvAGyIY`,
                                        webPageId: `augiA20Il`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        138 +
                                        0 +
                                        102,
                                      children: f(W, {
                                        className: `framer-fczvd6-container`,
                                        layoutDependency: E,
                                        layoutId: `uzTKa2OId-container`,
                                        nodeId: `uzTKa2OId`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `uzTKa2OId`,
                                          LAQQ0HHHX: A,
                                          layoutId: `uzTKa2OId`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Pricing`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `IcLi543Pr` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        138 +
                                        0 +
                                        153,
                                      children: f(W, {
                                        className: `framer-26km4a-container`,
                                        layoutDependency: E,
                                        layoutId: `CtmIXSZYH-container`,
                                        nodeId: `CtmIXSZYH`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `CtmIXSZYH`,
                                          LAQQ0HHHX: A,
                                          layoutId: `CtmIXSZYH`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Case Studies`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `JFNr7AzSy` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        138 +
                                        0 +
                                        204,
                                      children: f(W, {
                                        className: `framer-gux1iz-container`,
                                        layoutDependency: E,
                                        layoutId: `sczzhF95t-container`,
                                        nodeId: `sczzhF95t`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `sczzhF95t`,
                                          LAQQ0HHHX: A,
                                          layoutId: `sczzhF95t`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Careers`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(H, {
                          height: 1,
                          width: `calc(${l?.width || `100vw`} - 56px)`,
                          y: (l?.y || 0) + 100 + 0 + 0 + 413,
                          children: f(W, {
                            className: `framer-db4lbn-container`,
                            layoutDependency: E,
                            layoutId: `wOok2NVW8-container`,
                            nodeId: `wOok2NVW8`,
                            rendersWithMotion: !0,
                            scopeId: `KB3ubcGXn`,
                            children: f(lt, {
                              height: `100%`,
                              id: `wOok2NVW8`,
                              layoutId: `wOok2NVW8`,
                              style: { height: `100%`, width: `100%` },
                              variant: Kn(`uu1kgFfPS`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        g(D.div, {
                          className: `framer-1wxv36z`,
                          "data-framer-name": `Support`,
                          layoutDependency: E,
                          layoutId: `URBD0bAol`,
                          children: [
                            f(M, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-79bu04`,
                                  "data-styles-preset": `GMp6ZDbq7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120)))`,
                                  },
                                  children: `Support`,
                                }),
                              }),
                              className: `framer-ss3miy`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `Ik2YXPWEe`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(D.div, {
                              className: `framer-1him64n`,
                              "data-framer-name": `Links`,
                              layoutDependency: E,
                              layoutId: `r9WDGEdWQ`,
                              children: [
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `jL2GUUASB` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        434 +
                                        0 +
                                        138 +
                                        0 +
                                        0,
                                      children: f(W, {
                                        className: `framer-1ciigpa-container`,
                                        layoutDependency: E,
                                        layoutId: `bbvleeCdL-container`,
                                        nodeId: `bbvleeCdL`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `bbvleeCdL`,
                                          LAQQ0HHHX: A,
                                          layoutId: `bbvleeCdL`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Contact`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `ssA6QOcex` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        434 +
                                        0 +
                                        138 +
                                        0 +
                                        51,
                                      children: f(W, {
                                        className: `framer-2uc7fc-container`,
                                        layoutDependency: E,
                                        layoutId: `QniXHc4k0-container`,
                                        nodeId: `QniXHc4k0`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `QniXHc4k0`,
                                          LAQQ0HHHX: A,
                                          layoutId: `QniXHc4k0`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Privacy`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `P_hYK51BA` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        434 +
                                        0 +
                                        138 +
                                        0 +
                                        102,
                                      children: f(W, {
                                        className: `framer-1izjcra-container`,
                                        layoutDependency: E,
                                        layoutId: `PX3j2pDdh-container`,
                                        nodeId: `PX3j2pDdh`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `PX3j2pDdh`,
                                          LAQQ0HHHX: A,
                                          layoutId: `PX3j2pDdh`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Terms`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(P, {
                                  links: [
                                    {
                                      href: { webPageId: `fnocoQUFP` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(H, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y:
                                        (l?.y || 0) +
                                        100 +
                                        0 +
                                        0 +
                                        434 +
                                        0 +
                                        138 +
                                        0 +
                                        153,
                                      children: f(W, {
                                        className: `framer-kuflit-container`,
                                        layoutDependency: E,
                                        layoutId: `hFsmlKqZ6-container`,
                                        nodeId: `hFsmlKqZ6`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(Y, {
                                          height: `100%`,
                                          id: `hFsmlKqZ6`,
                                          LAQQ0HHHX: A,
                                          layoutId: `hFsmlKqZ6`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Acceptable Use`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-AE9Uu.framer-1foqyv2, .framer-AE9Uu .framer-1foqyv2 { display: block; }`,
          `.framer-AE9Uu.framer-1wnscys { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 844px; justify-content: flex-start; overflow: auto; padding: 100px 28px 0px 28px; position: relative; width: 390px; }`,
          `.framer-AE9Uu .framer-g4xq83 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AE9Uu .framer-x7fx7v, .framer-AE9Uu .framer-1wxv36z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AE9Uu .framer-1223hxr, .framer-AE9Uu .framer-ss3miy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-AE9Uu .framer-yijvx0, .framer-AE9Uu .framer-1him64n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AE9Uu .framer-1wb3b87-container, .framer-AE9Uu .framer-gd2kun-container, .framer-AE9Uu .framer-fczvd6-container, .framer-AE9Uu .framer-26km4a-container, .framer-AE9Uu .framer-gux1iz-container, .framer-AE9Uu .framer-1ciigpa-container, .framer-AE9Uu .framer-2uc7fc-container, .framer-AE9Uu .framer-1izjcra-container, .framer-AE9Uu .framer-kuflit-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-AE9Uu .framer-db4lbn-container { flex: none; height: 1px; position: relative; width: 100%; }`,
          ...et,
          `.framer-AE9Uu[data-border="true"]::after, .framer-AE9Uu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `.framer-AE9Uu[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-AE9Uu [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-AE9Uu[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-AE9Uu [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-AE9Uu[data-hide-scrollbars="true"], .framer-AE9Uu [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-AE9Uu`,
      )),
      (Zn.displayName = `Phone Menu`),
      (Zn.defaultProps = { height: 844, width: 390 }),
      U(Zn, { Ny8O4YToJ: { title: `Close Overlay`, type: K.EventHandler } }),
      j(
        Zn,
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
          ...Rn,
          ...zn,
          ...fe(nt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Zn.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([L(Y, {}, t), L(lt, {}, t)])
        ),
      }));
  }),
  $n,
  er,
  tr,
  nr,
  rr = e(() => {
    (y(),
      z(),
      w(),
      ($n = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 54.333 45.715 L 75.184 22 L 69 22 L 51 41.5 L 37.677 22 L 21 22 L 42 52 L 20 78 L 25.939 78 L 45.054 56.255 L 60.323 78 L 77 78 M 29.5 26.5 L 34.5 26.5 L 69 73.5 L 63.5 73.5 Z" fill="transparent" height="100px" id="q87c1RKKh" width="98.20513082046168px"><path d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 54.333 45.715 L 75.184 22 L 69 22 L 51 41.5 L 37.677 22 L 21 22 L 42 52 L 20 78 L 25.939 78 L 45.054 56.255 L 60.323 78 L 77 78 M 29.5 26.5 L 34.5 26.5 L 69 73.5 L 63.5 73.5 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="uqARW67qu" transform="translate(0 0)" width="98.20513082046202px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (er = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(D.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (tr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (nr = N(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            kfNzCWrbt: o,
            ...s
          } = tr(e);
          return f(er, {
            ...s,
            className: R(`framer-OJFXs`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-OJFXs { -webkit-mask: ${$n}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${$n}; width: 100px; }`,
        ],
        `framer-OJFXs`,
      )),
      (nr.displayName = `X Twitter`),
      U(nr, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: K.Color,
        },
      }));
  }),
  ir,
  ar,
  or,
  sr,
  cr = e(() => {
    (y(),
      z(),
      w(),
      (ir = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 80 54.674 C 80 43.958 73.736 38.78 65.249 38.78 C 56.765 38.78 53 45.386 53 45.386 L 53 41 L 41 41 L 41 80 L 53 80 L 53 59.003 C 53 53.378 55.943 50.03 60.902 50.03 C 65.459 50.03 68 53.243 68 59.003 L 68 80 L 80 80 Z M 32.518 32.589 C 33.891 31.204 34.658 29.33 34.649 27.38 C 34.664 23.32 31.386 20.017 27.326 20 C 25.376 20.007 23.508 20.789 22.135 22.173 C 20.761 23.557 19.993 25.43 20 27.38 C 19.992 29.331 20.76 31.205 22.134 32.589 C 23.508 33.974 25.375 34.756 27.326 34.763 C 29.276 34.756 31.144 33.974 32.518 32.589 Z M 20 80 L 35 80 L 35 41 L 20 41 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="fl1FtVk5S" width="98.20513082046156px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ar = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(D.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (or = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (sr = N(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            kfNzCWrbt: o,
            ...s
          } = or(e);
          return f(ar, {
            ...s,
            className: R(`framer-67dhO`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-67dhO { -webkit-mask: ${ir}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${ir}; width: 100px; }`,
        ],
        `framer-67dhO`,
      )),
      (sr.displayName = `LinkedIn`),
      U(sr, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: K.Color,
        },
      }));
  }),
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    (y(),
      z(),
      w(),
      (lr = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 100 35.002 C 100 35.002 100 51.276 97.909 59.072 C 96.749 63.385 93.381 66.753 89.068 67.913 C 81.273 70.003 50 70.003 50 70.003 C 50 70.003 18.727 70.003 10.932 67.913 C 6.619 66.753 3.251 63.384 2.091 59.072 C 0 51.276 0 35.001 0 35.001 C 0 35.001 0 18.727 2.091 10.932 C 3.251 6.62 6.619 3.251 10.932 2.091 C 18.727 0 50 0 50 0 C 50 0 81.273 0 89.068 2.091 C 93.381 3.251 96.749 6.619 97.909 10.932 C 99.991 18.727 100 35.002 100 35.002 Z M 39.99 50.002 L 65.971 35.003 L 39.99 20.005 Z" fill="transparent" height="70.00349095719594px" id="AhzSdgBzx" transform="translate(0 15)" width="100px"><path d="M 100 35.002 C 100 35.002 100 51.276 97.909 59.072 C 96.749 63.385 93.381 66.753 89.068 67.913 C 81.273 70.003 50 70.003 50 70.003 C 50 70.003 18.727 70.003 10.932 67.913 C 6.619 66.753 3.251 63.384 2.091 59.072 C 0 51.276 0 35.001 0 35.001 C 0 35.001 0 18.727 2.091 10.932 C 3.251 6.62 6.619 3.251 10.932 2.091 C 18.727 0 50 0 50 0 C 50 0 81.273 0 89.068 2.091 C 93.381 3.251 96.749 6.619 97.909 10.932 C 99.991 18.727 100 35.002 100 35.002 Z M 39.99 50.002 L 65.971 35.003 L 39.99 20.005 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="70.00349095719594px" id="NNThSmLpj" width="100px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ur = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(D.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (dr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (fr = N(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            kfNzCWrbt: o,
            ...s
          } = dr(e);
          return f(ur, {
            ...s,
            className: R(`framer-bHJSy`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-bHJSy { -webkit-mask: ${lr}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${lr}; width: 100px; }`,
        ],
        `framer-bHJSy`,
      )),
      (fr.displayName = `YouTube`),
      U(fr, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: K.Color,
        },
      }));
  }),
  mr,
  hr,
  gr,
  _r,
  vr = e(() => {
    (y(),
      z(),
      w(),
      (mr = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="YdD1EudGL" transform="translate(0 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="bcfWC3Ofj" transform="translate(53 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="gpyitmvM_" transform="translate(53 53)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="T5FJudsVg" transform="translate(0 53)" width="47px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (hr = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(D.div, { ...a, layoutId: r, ref: t })
          : f(`div`, { ...a, ref: t });
      })),
      (gr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (_r = N(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = gr(e);
          return f(hr, {
            ...o,
            className: R(`framer-DPOTx`, r),
            layoutId: i,
            ref: t,
            style: { ...n },
          });
        }),
        [
          `.framer-DPOTx { -webkit-mask: ${mr}; aspect-ratio: 1; background-color: var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, #000000); mask: ${mr}; width: 100px; }`,
        ],
        `framer-DPOTx`,
      )),
      (_r.displayName = `Logo Black`));
  }),
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or = e(() => {
    (y(),
      z(),
      A(),
      w(),
      Ke(),
      vr(),
      (yr = I(_r)),
      (br = `framer-OfVLa`),
      (xr = { XlFAtjHr2: `framer-v-j4pb56` }),
      (Sr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Cr = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (wr = D.create(s)),
      (Tr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Er = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Dr = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V();
          G();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = Tr(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: ee,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: S,
            } = F({
              defaultVariant: `XlFAtjHr2`,
              ref: r,
              variant: p,
              variantClassNames: xr,
            }),
            C = Er(e, S),
            w = R(br, qe);
          return f(k, {
            id: d ?? i,
            children: f(wr, {
              animate: S,
              initial: !1,
              children: f(Cr, {
                value: Sr,
                children: g(D.div, {
                  ...m,
                  ...y,
                  className: R(w, `framer-j4pb56`, u, _),
                  "data-framer-name": `Primary`,
                  layoutDependency: C,
                  layoutId: `XlFAtjHr2`,
                  ref: r,
                  style: { ...l },
                  children: [
                    f(_r, {
                      animated: !0,
                      className: `framer-fg5ueq`,
                      layoutDependency: C,
                      layoutId: `qr5Fa6JuE`,
                    }),
                    f(M, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(D.p, {
                          className: `framer-styles-preset-ccv9s9`,
                          "data-styles-preset": `Bo2HZoBjr`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                          },
                          children: `Psionics`,
                        }),
                      }),
                      className: `framer-1sanuqc`,
                      fonts: [`Inter`],
                      layoutDependency: C,
                      layoutId: `BJtfPpsBt`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
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
          `.framer-OfVLa.framer-1q9a6i9, .framer-OfVLa .framer-1q9a6i9 { display: block; }`,
          `.framer-OfVLa.framer-j4pb56 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfVLa .framer-fg5ueq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-OfVLa .framer-1sanuqc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...We,
        ],
        `framer-OfVLa`,
      )),
      (Dr.displayName = `Footer Company Logo`),
      (Dr.defaultProps = { height: 19.5, width: 86 }),
      j(
        Dr,
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
          ...yr,
          ...fe(He),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function kr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  X,
  Rr = e(() => {
    (y(),
      z(),
      A(),
      w(),
      cr(),
      (Ar = { oxG3Lky9A: { hover: !0 } }),
      (jr = `framer-9Ce6R`),
      (Mr = { oxG3Lky9A: `framer-v-1mvbbus` }),
      (Nr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pr = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Fr = D.create(s)),
      (Ir = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        A0zSsv2ON: t ?? a.A0zSsv2ON ?? sr,
        YgfVXmht2: r ?? a.YgfVXmht2,
      })),
      (Lr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (X = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: s } = V();
          G();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              A0zSsv2ON: p,
              YgfVXmht2: m,
              ...h
            } = Ir(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: ee,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: S,
            } = F({
              defaultVariant: `oxG3Lky9A`,
              enabledGestures: Ar,
              ref: r,
              variant: d,
              variantClassNames: Mr,
            }),
            C = Lr(e, S),
            w = R(jr);
          return f(k, {
            id: u ?? i,
            children: f(Fr, {
              animate: S,
              initial: !1,
              children: f(Pr, {
                value: Nr,
                children: f(me, {
                  href: m,
                  motionChild: !0,
                  nodeId: `oxG3Lky9A`,
                  openInNewTab: !1,
                  scopeId: `r8upVcmwX`,
                  children: f(D.a, {
                    ...h,
                    ...y,
                    className: `${R(w, `framer-1mvbbus`, l, _)} framer-1msz24n`,
                    "data-framer-name": `Primary`,
                    draggable: `false`,
                    layoutDependency: C,
                    layoutId: `oxG3Lky9A`,
                    ref: r,
                    style: { ...c },
                    ...kr(
                      { "oxG3Lky9A-hover": { "data-framer-name": void 0 } },
                      g,
                      ee,
                    ),
                    children: f(Te, {
                      animated: !0,
                      className: `framer-r3f4g5`,
                      Component: p,
                      layoutDependency: C,
                      layoutId: `NV1epNJ_U`,
                      style: {
                        "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                      },
                      variants: {
                        "oxG3Lky9A-hover": {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        },
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-9Ce6R.framer-1msz24n, .framer-9Ce6R .framer-1msz24n { display: block; }`,
          `.framer-9Ce6R.framer-1mvbbus { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-9Ce6R .framer-r3f4g5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        ],
        `framer-9Ce6R`,
      )),
      (X.displayName = `Social Link`),
      (X.defaultProps = { height: 24, width: 24 }),
      U(X, {
        A0zSsv2ON: {
          defaultValue: {
            identifier: `local-module:vector/Smk75QUid:default`,
            moduleId: `xqI51xsNzVWjiP0ZOQ6A`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: K.VectorSetItem,
        },
        YgfVXmht2: { title: `Link`, type: K.Link },
      }),
      j(X, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function zr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Z,
  Zr = e(() => {
    (y(),
      z(),
      A(),
      w(),
      ft(),
      (Br = { V0BQS2WGL: { hover: !0 } }),
      (Vr = [`V0BQS2WGL`, `B3jq_oq0c`]),
      (Hr = `framer-8wlZ9`),
      (Ur = { B3jq_oq0c: `framer-v-ia48f0`, V0BQS2WGL: `framer-v-7n30o9` }),
      (Wr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gr = (e, t) => `translateY(-50%) ${t}`),
      (Kr = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (qr = { Primary: `V0BQS2WGL`, Secondary: `B3jq_oq0c` }),
      (Jr = D.create(s)),
      (Yr = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        RoGNZ4BdA: r ?? a.RoGNZ4BdA ?? `Home`,
        variant: qr[a.variant] ?? a.variant ?? `V0BQS2WGL`,
        YzPGzetae: n ?? a.YzPGzetae,
      })),
      (Xr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Z = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V();
          G();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              RoGNZ4BdA: m,
              YzPGzetae: h,
              ..._
            } = Yr(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = F({
              cycleOrder: Vr,
              defaultVariant: `V0BQS2WGL`,
              enabledGestures: Br,
              ref: r,
              variant: p,
              variantClassNames: Ur,
            }),
            E = Xr(e, w),
            O = R(Hr, ht);
          return f(k, {
            id: d ?? i,
            children: f(Jr, {
              animate: w,
              initial: !1,
              children: f(Kr, {
                value: Wr,
                children: f(me, {
                  href: h,
                  motionChild: !0,
                  nodeId: `V0BQS2WGL`,
                  openInNewTab: !1,
                  scopeId: `ZZ2BeHrPX`,
                  children: g(D.a, {
                    ..._,
                    ...b,
                    className: `${R(O, `framer-7n30o9`, u, y)} framer-sn78q0`,
                    "data-framer-name": `Primary`,
                    layoutDependency: E,
                    layoutId: `V0BQS2WGL`,
                    ref: r,
                    style: { ...l },
                    ...zr(
                      {
                        "V0BQS2WGL-hover": { "data-framer-name": void 0 },
                        B3jq_oq0c: { "data-framer-name": `Secondary` },
                      },
                      v,
                      x,
                    ),
                    children: [
                      f(M, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `[`,
                          }),
                        }),
                        className: `framer-1s5qv8x`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `p4YpdmDDk`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Gr,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...zr(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `[`,
                                }),
                              }),
                            },
                          },
                          v,
                          x,
                        ),
                      }),
                      f(M, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `Home`,
                          }),
                        }),
                        className: `framer-u1o1ko`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `lV5JaC1LY`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...zr(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                          },
                          v,
                          x,
                        ),
                      }),
                      f(M, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `]`,
                          }),
                        }),
                        className: `framer-1uzyz0m`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `YmvVBJe6p`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Gr,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...zr(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `]`,
                                }),
                              }),
                            },
                          },
                          v,
                          x,
                        ),
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
          `.framer-8wlZ9.framer-sn78q0, .framer-8wlZ9 .framer-sn78q0 { display: block; }`,
          `.framer-8wlZ9.framer-7n30o9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 5px 0px 5px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-8wlZ9 .framer-1s5qv8x { -webkit-user-select: none; flex: none; height: auto; left: 0px; pointer-events: none; position: absolute; top: 52%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-8wlZ9 .framer-u1o1ko { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8wlZ9 .framer-1uzyz0m { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: absolute; right: 0px; top: 52%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-8wlZ9.framer-v-ia48f0.framer-7n30o9 { cursor: unset; }`,
          `.framer-8wlZ9.framer-v-7n30o9.hover .framer-1s5qv8x { left: -4px; }`,
          `.framer-8wlZ9.framer-v-7n30o9.hover .framer-1uzyz0m { right: -4px; }`,
          ...pt,
        ],
        `framer-8wlZ9`,
      )),
      (Z.displayName = `Footer Link`),
      (Z.defaultProps = { height: 21, width: 46 }),
      U(Z, {
        variant: {
          options: [`V0BQS2WGL`, `B3jq_oq0c`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: K.Enum,
        },
        RoGNZ4BdA: {
          defaultValue: `Home`,
          displayTextArea: !1,
          title: `Title`,
          type: K.String,
        },
        onRoGNZ4BdAChange: { changes: `RoGNZ4BdA`, type: K.ChangeHandler },
        YzPGzetae: { title: `Link`, type: K.Link },
      }),
      j(
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
          ...fe(mt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  $,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi = e(() => {
    (y(),
      z(),
      A(),
      w(),
      ut(),
      ft(),
      Qe(),
      rr(),
      cr(),
      pr(),
      Or(),
      Rr(),
      Zr(),
      (Qr = I(Dr)),
      ($r = I(X)),
      (ei = I(Z)),
      (ti = I(dt)),
      (ni = ke(W)),
      (ri = [`gahOmwpYJ`, `wkMH7mmBD`, `HrO0jOo0f`]),
      (ii = `framer-69FHJ`),
      (ai = {
        gahOmwpYJ: `framer-v-q8p10r`,
        HrO0jOo0f: `framer-v-thsjqa`,
        wkMH7mmBD: `framer-v-1sa6s2u`,
      }),
      (oi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (si = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (ci = ({ value: e, children: n }) => {
        let r = t(O),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (li = { Desktop: `gahOmwpYJ`, Phone: `HrO0jOo0f`, Tablet: `wkMH7mmBD` }),
      (ui = D.create(s)),
      (di = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: li[r.variant] ?? r.variant ?? `gahOmwpYJ`,
      })),
      (fi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (pi = N(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = T(),
            { activeLocale: a, setLocale: c } = V(),
            l = G(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = di(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: S,
              variants: C,
            } = F({
              cycleOrder: ri,
              defaultVariant: `gahOmwpYJ`,
              ref: r,
              variant: m,
              variantClassNames: ai,
            }),
            w = fi(e, C),
            E = R(ii, ht, rt),
            O = () => _ !== `HrO0jOo0f`;
          ae();
          let ne = () => _ === `HrO0jOo0f`;
          return f(k, {
            id: p ?? i,
            children: f(ui, {
              animate: C,
              initial: !1,
              children: f(ci, {
                value: oi,
                children: f(D.footer, {
                  ...h,
                  ...ee,
                  className: R(E, `framer-q8p10r`, d, v),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `gahOmwpYJ`,
                  ref: r,
                  style: { ...u },
                  ...Q(
                    {
                      HrO0jOo0f: { "data-framer-name": `Phone` },
                      wkMH7mmBD: { "data-framer-name": `Tablet` },
                    },
                    _,
                    b,
                  ),
                  children: g(D.div, {
                    className: `framer-1jojyrz`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    layoutDependency: w,
                    layoutId: `nbENvzEdD`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(209, 209, 209))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                    },
                    children: [
                      g(D.div, {
                        className: `framer-1xnb8da`,
                        "data-framer-name": `Content`,
                        layoutDependency: w,
                        layoutId: `em_rCFlSq`,
                        children: [
                          g(D.div, {
                            className: `framer-154igax`,
                            "data-framer-name": `Company & Socials`,
                            layoutDependency: w,
                            layoutId: `P2mE_M8W5`,
                            children: [
                              g(D.div, {
                                className: `framer-dnjvib`,
                                "data-framer-name": `Company`,
                                layoutDependency: w,
                                layoutId: `uMGLa8GeP`,
                                children: [
                                  f(H, {
                                    height: 19,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      (((l?.height || 712.5) - 0 - 400) / 2 +
                                        0 +
                                        0) +
                                      -0.1404 +
                                      0 +
                                      100 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    ...Q(
                                      {
                                        HrO0jOo0f: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            ((Math.max(
                                              0,
                                              ((l?.height || 1280) - 0 - 0) / 1,
                                            ) *
                                              1 -
                                              0 -
                                              (Math.max(
                                                0,
                                                (Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  0) /
                                                  1,
                                              ) *
                                                1 +
                                                0)) /
                                              2 +
                                              0 +
                                              0) +
                                            0 +
                                            0 +
                                            50 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        wkMH7mmBD: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 505.5) - 0 - 400) /
                                              2 +
                                              0 +
                                              0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      _,
                                      b,
                                    ),
                                    children: f(W, {
                                      className: `framer-pocbs9-container`,
                                      layoutDependency: w,
                                      layoutId: `S9V_NWPNo-container`,
                                      nodeId: `S9V_NWPNo`,
                                      rendersWithMotion: !0,
                                      scopeId: `WRdmfpjW1`,
                                      children: f(Dr, {
                                        height: `100%`,
                                        id: `S9V_NWPNo`,
                                        layoutId: `S9V_NWPNo`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(D.p, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                        },
                                        children: `Vertical AI agents that explain their own decisions. No black boxes.`,
                                      }),
                                    }),
                                    className: `framer-l0ze4l`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `khLcAj7pj`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              O() &&
                                g(D.div, {
                                  className: `framer-17s13au`,
                                  "data-framer-name": `Legal & Socials`,
                                  layoutDependency: w,
                                  layoutId: `ewTsflQhr`,
                                  children: [
                                    g(D.div, {
                                      className: `framer-s94fdt`,
                                      "data-framer-name": `Social Links`,
                                      layoutDependency: w,
                                      layoutId: `BsJlWrRt2`,
                                      children: [
                                        f(H, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 712.5) - 0 - 400) /
                                              2 +
                                              0 +
                                              0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505.5) -
                                                    0 -
                                                    400) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-b5u8nw-container`,
                                            layoutDependency: w,
                                            layoutId: `q7FPSU50d-container`,
                                            nodeId: `q7FPSU50d`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: sr,
                                              height: `100%`,
                                              id: `q7FPSU50d`,
                                              layoutId: `q7FPSU50d`,
                                              width: `100%`,
                                              YgfVXmht2: `https://www.linkedin.com/company/psionics/`,
                                            }),
                                          }),
                                        }),
                                        f(H, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 712.5) - 0 - 400) /
                                              2 +
                                              0 +
                                              0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505.5) -
                                                    0 -
                                                    400) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-1yjntau-container`,
                                            layoutDependency: w,
                                            layoutId: `yqVrjMPJt-container`,
                                            nodeId: `yqVrjMPJt`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: nr,
                                              height: `100%`,
                                              id: `yqVrjMPJt`,
                                              layoutId: `yqVrjMPJt`,
                                              width: `100%`,
                                              YgfVXmht2: ``,
                                            }),
                                          }),
                                        }),
                                        g(D.div, {
                                          className: `psionics-github-container`,
                                          children: f(`a`, {
                                            "aria-label": `GitHub`,
                                            className: `psionics-github-link`,
                                            draggable: `false`,
                                            href: `https://github.com/Psionic-labs`,
                                            rel: `noopener noreferrer`,
                                            target: `_blank`,
                                            children: f(`span`, {
                                              className: `psionics-github-icon`,
                                            }),
                                          }),
                                        }),
                                        f(H, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 712.5) - 0 - 400) /
                                              2 +
                                              0 +
                                              0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505.5) -
                                                    0 -
                                                    400) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-1y40718-container`,
                                            layoutDependency: w,
                                            layoutId: `mUjUgv69c-container`,
                                            nodeId: `mUjUgv69c`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: fr,
                                              height: `100%`,
                                              id: `mUjUgv69c`,
                                              layoutId: `mUjUgv69c`,
                                              width: `100%`,
                                              YgfVXmht2: `https://youtube.com/`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    f(M, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(D.p, {
                                          className: `framer-styles-preset-kmsqt2`,
                                          "data-styles-preset": `dXsx8iVCg`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                          },
                                          children: `©️ Psionics. All Rights Reserved.`,
                                        }),
                                      }),
                                      className: `framer-9ecnlo`,
                                      fonts: [`Inter`],
                                      layoutDependency: w,
                                      layoutId: `Q56GaTIUA`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          O() &&
                            f(D.div, {
                              className: `framer-1u0qu6u`,
                              "data-framer-name": `Spacer`,
                              layoutDependency: w,
                              layoutId: `LEqNKqvTB`,
                            }),
                          g(D.div, {
                            className: `framer-qhdvoe`,
                            "data-framer-name": `Links`,
                            layoutDependency: w,
                            layoutId: `KmkN4noum`,
                            children: [
                              g(D.div, {
                                className: `framer-xjp70x`,
                                "data-framer-name": `Pages`,
                                layoutDependency: w,
                                layoutId: `VfSI_gnQV`,
                                children: [
                                  f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(D.p, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        children: `Pages`,
                                      }),
                                    }),
                                    className: `framer-16bm8pr`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `GSwwx8PtJ`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          30.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                0 +
                                                0 +
                                                114,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                30.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-brj0yw-container`,
                                          layoutDependency: w,
                                          layoutId: `fnCnT76Zo-container`,
                                          nodeId: `fnCnT76Zo`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `fnCnT76Zo`,
                                            layoutId: `fnCnT76Zo`,
                                            RoGNZ4BdA: `Home`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
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
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          61.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                0 +
                                                0 +
                                                145,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                61.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-1ejobl0-container`,
                                          layoutDependency: w,
                                          layoutId: `CuI2Qki6P-container`,
                                          nodeId: `CuI2Qki6P`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `CuI2Qki6P`,
                                            layoutId: `CuI2Qki6P`,
                                            RoGNZ4BdA: `About`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:IEzvAGyIY`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:IEzvAGyIY`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:IEzvAGyIY`,
                                          webPageId: `augiA20Il`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          92.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                0 +
                                                0 +
                                                176,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                92.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-qa8vob-container`,
                                          layoutDependency: w,
                                          layoutId: `IDHhpMXaW-container`,
                                          nodeId: `IDHhpMXaW`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `IDHhpMXaW`,
                                            layoutId: `IDHhpMXaW`,
                                            RoGNZ4BdA: `Pricing`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          123.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                0 +
                                                0 +
                                                207,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                123.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-129ypya-container`,
                                          layoutDependency: w,
                                          layoutId: `hq2cjuiBG-container`,
                                          nodeId: `hq2cjuiBG`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `hq2cjuiBG`,
                                            layoutId: `hq2cjuiBG`,
                                            RoGNZ4BdA: `Case Studies`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          154.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                0 +
                                                0 +
                                                238,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                154.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-1ur52f1-container`,
                                          layoutDependency: w,
                                          layoutId: `VPU1yeQ4g-container`,
                                          nodeId: `VPU1yeQ4g`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `VPU1yeQ4g`,
                                            layoutId: `VPU1yeQ4g`,
                                            RoGNZ4BdA: `Careers`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              g(D.div, {
                                className: `framer-1bag3d8`,
                                "data-framer-name": `Support`,
                                layoutDependency: w,
                                layoutId: `tDgljo6jm`,
                                children: [
                                  f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(D.p, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        children: `Support`,
                                      }),
                                    }),
                                    className: `framer-a651m7`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `p1YrbwQwG`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          30.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                309 +
                                                0 +
                                                114,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                30.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-7uka7z-container`,
                                          layoutDependency: w,
                                          layoutId: `KAd6A6eJi-container`,
                                          nodeId: `KAd6A6eJi`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `KAd6A6eJi`,
                                            layoutId: `KAd6A6eJi`,
                                            RoGNZ4BdA: `Contact`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          61.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                309 +
                                                0 +
                                                145,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                61.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-13z0b1a-container`,
                                          layoutDependency: w,
                                          layoutId: `jU7r9ADHM-container`,
                                          nodeId: `jU7r9ADHM`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `jU7r9ADHM`,
                                            layoutId: `jU7r9ADHM`,
                                            RoGNZ4BdA: `Privacy Policy`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          92.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                309 +
                                                0 +
                                                176,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                92.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-ypv2ma-container`,
                                          layoutDependency: w,
                                          layoutId: `rQQQjArbD-container`,
                                          nodeId: `rQQQjArbD`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `rQQQjArbD`,
                                            layoutId: `rQQQjArbD`,
                                            RoGNZ4BdA: `Terms & Conditions`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(P, {
                                    links: [
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(H, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 712.5) - 0 - 400) /
                                            2 +
                                            0 +
                                            0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          123.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(
                                                  0,
                                                  ((l?.height || 1280) -
                                                    0 -
                                                    0) /
                                                    1,
                                                ) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                213 +
                                                0 +
                                                309 +
                                                0 +
                                                207,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505.5) -
                                                  0 -
                                                  400) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                123.8,
                                            },
                                          },
                                          _,
                                          b,
                                        ),
                                        children: f(W, {
                                          className: `framer-w6ebry-container`,
                                          layoutDependency: w,
                                          layoutId: `JAIh0Naa6-container`,
                                          nodeId: `JAIh0Naa6`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `JAIh0Naa6`,
                                            layoutId: `JAIh0Naa6`,
                                            RoGNZ4BdA: `Acceptable Use`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              b,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              ne() &&
                                g(D.div, {
                                  className: `framer-1i8pz36`,
                                  "data-framer-name": `Legal & Socials`,
                                  layoutDependency: w,
                                  layoutId: `sXYx0m5s3`,
                                  children: [
                                    g(D.div, {
                                      className: `framer-g982c9`,
                                      "data-framer-name": `Social Links`,
                                      layoutDependency: w,
                                      layoutId: `SPanhQFqJ`,
                                      children: [
                                        f(H, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((l?.height || 1280) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  213 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-1ijuon1-container`,
                                            layoutDependency: w,
                                            layoutId: `p8B1ZGvkw-container`,
                                            nodeId: `p8B1ZGvkw`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: sr,
                                              height: `100%`,
                                              id: `p8B1ZGvkw`,
                                              layoutId: `p8B1ZGvkw`,
                                              width: `100%`,
                                               YgfVXmht2: `https://www.linkedin.com/company/psionics/`,
                                            }),
                                          }),
                                        }),
                                        f(H, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((l?.height || 1280) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  213 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-xq6bac-container`,
                                            layoutDependency: w,
                                            layoutId: `UFYgsov05-container`,
                                            nodeId: `UFYgsov05`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: nr,
                                              height: `100%`,
                                              id: `UFYgsov05`,
                                              layoutId: `UFYgsov05`,
                                              width: `100%`,
                                              YgfVXmht2: `javascript:void(0)`,
                                            }),
                                          }),
                                        }),
                                        g(D.div, {
                                          className: `psionics-github-container`,
                                          children: f(`a`, {
                                            "aria-label": `GitHub`,
                                            className: `psionics-github-link`,
                                            draggable: `false`,
                                            href: `https://github.com/Psionic-labs`,
                                            rel: `noopener noreferrer`,
                                            target: `_blank`,
                                            children: f(`span`, {
                                              className: `psionics-github-icon`,
                                            }),
                                          }),
                                        }),
                                        f(H, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((l?.height || 1280) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  213 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            b,
                                          ),
                                          children: f(W, {
                                            className: `framer-ydqktq-container`,
                                            layoutDependency: w,
                                            layoutId: `gfXqfiA6d-container`,
                                            nodeId: `gfXqfiA6d`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(X, {
                                              A0zSsv2ON: fr,
                                              height: `100%`,
                                              id: `gfXqfiA6d`,
                                              layoutId: `gfXqfiA6d`,
                                              width: `100%`,
                                              YgfVXmht2: `https://youtube.com/`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    f(M, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(D.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                            "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                            "--framer-letter-spacing": `0.01em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                          },
                                          children: `©️ Psionics. All Rights Reserved.`,
                                        }),
                                      }),
                                      className: `framer-yfd8re`,
                                      fonts: [
                                        `GF;Google Sans Flex-variable-regular`,
                                      ],
                                      layoutDependency: w,
                                      layoutId: `L419d21fC`,
                                      style: {
                                        "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                                        "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      f(H, {
                        children: f(ni, {
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
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-7r7yj2-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `xfhwXWFBs-container`,
                          nodeId: `xfhwXWFBs`,
                          rendersWithMotion: !0,
                          scopeId: `WRdmfpjW1`,
                          children: f(dt, {
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
                              fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                              fontSize: `10px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            glow: { blur: 11, opacity: 1 },
                            height: `100%`,
                            id: `xfhwXWFBs`,
                            image: si(
                              {
                                pixelHeight: 1024,
                                pixelWidth: 1536,
                                src: `https://framerusercontent.com/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?width=1536&height=1024`,
                                srcSet: `https://framerusercontent.com/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?width=1536&height=1024 1536w`,
                              },
                              `Hand Holding Star Icon`,
                            ),
                            invertColors: !1,
                            layoutId: `xfhwXWFBs`,
                            outputWidth: 170,
                            radius: `0px`,
                            sizing: `fit`,
                            staticEffect: { interval: 0.1, preview: !1 },
                            style: { width: `100%` },
                            whiteMode: `ignore`,
                            width: `100%`,
                            ...Q(
                              {
                                HrO0jOo0f: {
                                  sizing: `fill`,
                                  style: { height: `100%`, width: `100%` },
                                },
                              },
                              _,
                              b,
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-69FHJ.framer-jlkv7n, .framer-69FHJ .framer-jlkv7n { display: block; }`,
          `.framer-69FHJ.framer-q8p10r { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1100px; }`,
          `.framer-69FHJ .framer-1jojyrz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-69FHJ .framer-1xnb8da { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: calc(49.96491228070178% - 100% / 2); width: 100%; z-index: 1; }`,
          `.framer-69FHJ .framer-154igax { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 75%; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 44px 28px; position: relative; width: 1px; }`,
          `.framer-69FHJ .framer-dnjvib { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-69FHJ .framer-pocbs9-container, .framer-69FHJ .framer-b5u8nw-container, .framer-69FHJ .framer-1yjntau-container, .framer-69FHJ .framer-1y40718-container, .framer-69FHJ .framer-brj0yw-container, .framer-69FHJ .framer-1ejobl0-container, .framer-69FHJ .framer-qa8vob-container, .framer-69FHJ .framer-129ypya-container, .framer-69FHJ .framer-1ur52f1-container, .framer-69FHJ .framer-7uka7z-container, .framer-69FHJ .framer-13z0b1a-container, .framer-69FHJ .framer-ypv2ma-container, .framer-69FHJ .framer-w6ebry-container, .framer-69FHJ .framer-1ijuon1-container, .framer-69FHJ .framer-xq6bac-container, .framer-69FHJ .framer-ydqktq-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-69FHJ .framer-l0ze4l, .framer-69FHJ .framer-yfd8re { flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-69FHJ .framer-17s13au, .framer-69FHJ .framer-1i8pz36 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-69FHJ .framer-s94fdt, .framer-69FHJ .framer-g982c9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-69FHJ .framer-9ecnlo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-69FHJ .framer-1u0qu6u { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 25%; }`,
          `.framer-69FHJ .framer-qhdvoe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: 75%; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-69FHJ .framer-xjp70x, .framer-69FHJ .framer-1bag3d8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-width: 150px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-69FHJ .framer-16bm8pr, .framer-69FHJ .framer-a651m7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-69FHJ .framer-7r7yj2-container { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; width: 100%; }`,
          `.framer-69FHJ.framer-v-1sa6s2u.framer-q8p10r { width: 810px; }`,
          `.framer-69FHJ.framer-v-1sa6s2u .framer-1jojyrz { max-width: 780px; }`,
          `.framer-69FHJ.framer-v-1sa6s2u .framer-qhdvoe { height: min-content; padding: 0px 0px 44px 0px; }`,
          `.framer-69FHJ.framer-v-thsjqa.framer-q8p10r { height: 1280px; justify-content: flex-start; padding: 0px 12px 0px 12px; width: 390px; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-1jojyrz { flex: 1 0 0px; height: 1px; max-width: 600px; order: 0; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-1xnb8da { align-content: center; align-items: center; flex: 1 0 0px; flex-direction: column; gap: 30px; height: 1px; justify-content: flex-start; left: unset; position: relative; top: unset; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-154igax { flex: none; gap: 0px; height: min-content; justify-content: center; padding: 50px 28px 0px 28px; width: 100%; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-qhdvoe { flex: none; height: min-content; padding: 0px 28px 0px 28px; width: 100%; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-xjp70x, .framer-69FHJ.framer-v-thsjqa .framer-1bag3d8 { width: 100%; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-16bm8pr, .framer-69FHJ.framer-v-thsjqa .framer-a651m7 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-69FHJ.framer-v-thsjqa .framer-7r7yj2-container { bottom: 0px; height: 800px; left: 0px; position: absolute; right: 0px; width: unset; z-index: 1; }`,
          ...pt,
          ...$e,
          `.framer-69FHJ[data-border="true"]::after, .framer-69FHJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-69FHJ`,
      )),
      (pi.displayName = `Footer`),
      (pi.defaultProps = { height: 712.5, width: 1100 }),
      U(pi, {
        variant: {
          options: [`gahOmwpYJ`, `wkMH7mmBD`, `HrO0jOo0f`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: K.Enum,
        },
      }),
      j(
        pi,
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
                cssFamilyName: `Google Sans Flex Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Google Sans Flex`,
                url: `https://fonts.gstatic.com/s/googlesansflex/v22/t5t7IQcYNIWbFgDgAAzZ34auoVyXip6sfhcat2c.woff2`,
                variationAxes: [
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
                ],
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
          ...Qr,
          ...$r,
          ...ei,
          ...ti,
          ...fe(mt),
          ...fe(tt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (pi.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([L(Dr, {}, t), L(X, {}, t), L(Z, {}, t)])
        ),
      }));
  }),
  hi,
  gi,
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
  Ai,
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
  Gi = e(() => {
    (y(),
      z(),
      A(),
      w(),
      d(),
      _t(),
      kn(),
      Qn(),
      mi(),
      (hi = I(J)),
      (gi = I(Zn)),
      (_i = I(gt)),
      (vi = ke(Me)),
      (yi = I(pi)),
      (bi = ie(D.div)),
      (xi = oe(J)),
      (Si = {
        LnUkg64NQ: `(min-width: 1200px)`,
        OImjYT545: `(min-width: 810px) and (max-width: 1199.98px)`,
        zMpfjH6oL: `(max-width: 809.98px)`,
      }),
      (Ci = () => typeof document < `u`),
      (wi = `framer-LqpOF`),
      (Ti = {
        LnUkg64NQ: `framer-v-yqpees`,
        OImjYT545: `framer-v-1pxqvew`,
        zMpfjH6oL: `framer-v-1xn8rl8`,
      }),
      (Ei = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Di = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Oi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          delay: 0,
          duration: 0.2,
          ease: [0.12, 0.23, 0.5, 1],
          type: `tween`,
        },
        x: 0,
        y: 0,
      }),
      (ki = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ai = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -860,
      }),
      (ji = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Mi = ({
        children: e,
        blockDocumentScrolling: t,
        dismissWithEsc: n,
        enabled: r = !0,
      }) => {
        let [i, a] = _e({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({
          hide: () => a(!1),
          show: () => a(!0),
          toggle: () => a(!i),
          visible: r && i,
        });
      }),
      (Ni = {
        zMpfjH6oL: [
          `.framer-LqpOF .framer-sfzdwg-container { left: 12px; right: 12px; width: unset; }`,
        ],
      }),
      (Pi = Object.keys(Ni)),
      (Fi = { zMpfjH6oL: `.framer-1xn8rl8-override` }),
      (Ii = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LqpOF.framer-7fmlcf, .framer-LqpOF .framer-7fmlcf { display: block; }`,
        `.framer-LqpOF.framer-yqpees { --selection-background-color: var(--token-4a1e7493-0681-4389-9ee4-885b715421ed, rgba(91, 156, 252, 0.2)) /* {"name":"Blue Dimmed"} */; --selection-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc) /* {"name":"Blue"} */; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LqpOF .framer-sfzdwg-container { flex: none; height: 70px; left: calc(50.00000000000002% - 100% / 2); order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-LqpOF.framer-1w73dgk { inset: 0px; position: fixed; user-select: none; }`,
        `.framer-LqpOF.framer-13ncolp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: 0px; overflow: visible; padding: 0px 12px 0px 12px; position: fixed; top: 0px; width: 100%; z-index: 9; }`,
        `.framer-LqpOF .framer-130i9u6-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LqpOF .framer-tg3zgh { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-LqpOF .framer-12ffj3x-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 240px; left: 0px; order: 1002; pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); width: 100%; z-index: 10; }`,
        `.framer-LqpOF .framer-1pg213s-container { flex: none; height: auto; order: 1003; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-LqpOF[data-selection="true"] * ::selection, .framer-LqpOF [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (Li = {
        LnUkg64NQ: `(min-width: 1200px)`,
        OImjYT545: `(min-width: 810px) and (max-width: 1199.98px)`,
        zMpfjH6oL: `(max-width: 809.98px)`,
      }),
      (Ri = { Desktop: `LnUkg64NQ`, Phone: `zMpfjH6oL`, Tablet: `OImjYT545` }),
      (zi = ({ value: e }) =>
        Ee()
          ? null
          : f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Bi = {
        "Case Studies": `tvf2Rcv44`,
        About: `t1T96jyoV`,
        Contact: `SxGmqKUGH`,
        Others: `RXhpLCgbr`,
        Pricing: `glgEnQfoK`,
      }),
      (Vi = ({
        currentPage: e,
        height: t,
        id: n,
        removeBlurAfter: r,
        showBottomBlur: i,
        width: a,
        ...o
      }) => ({
        ...o,
        MxPmvoD87: r ?? o.MxPmvoD87,
        pYEeIV4Va: i ?? o.pYEeIV4Va ?? !0,
        QMLrZfOdm: Bi[e] ?? e ?? o.QMLrZfOdm ?? `RXhpLCgbr`,
        variant: Ri[o.variant] ?? o.variant ?? `LnUkg64NQ`,
      })),
      (Hi = u(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = T(),
          { activeLocale: a, setLocale: s } = V(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            QMLrZfOdm: p,
            pYEeIV4Va: h,
            MxPmvoD87: _,
            children: v,
            ...y
          } = Vi(e),
          [ee, b] = Ne(d, Si, !1),
          { activeVariantCallback: te, delay: S } = ye(void 0),
          C = ({ overlay: e }) =>
            te(async (...t) => {
              e.toggle();
            }),
          w = ({ overlay: e }) =>
            te(async (...t) => {
              e.hide();
            }),
          E = R(wi),
          O = () => !Ci() || ee === `zMpfjH6oL`;
        return (
          Ce({}),
          f(be.Provider, {
            value: {
              activeVariantId: ee,
              humanReadableVariantMap: Ri,
              isLayoutTemplate: !0,
              primaryVariantId: `LnUkg64NQ`,
              variantClassNames: Ti,
            },
            children: g(k, {
              id: u ?? i,
              children: [
                f(zi, {
                  value: `:root body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                g(bi, {
                  ...y,
                  className: R(E, `framer-yqpees`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  flowEffectEnabled: !0,
                  flowEffectTransition: Ei,
                  isNestedFlowEffect: !1,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(Mi, {
                      dismissWithEsc: !0,
                      enabled: O(),
                      children: (e) =>
                        f(x, {
                          children: f(ue, {
                            breakpoint: ee,
                            overrides: {
                              zMpfjH6oL: { width: `calc(100vw - 24px)` },
                            },
                            children: f(H, {
                              height: 70,
                              width: `100vw`,
                              y: 0,
                              children: g(Me, {
                                className: `framer-sfzdwg-container`,
                                layout: `position`,
                                layoutScroll: !0,
                                nodeId: `s2NE3irgq`,
                                rendersWithMotion: !0,
                                scopeId: `pKMITaPwi`,
                                children: [
                                  f(ue, {
                                    breakpoint: ee,
                                    overrides: {
                                      OImjYT545: { variant: Di(`HApJ7U0UN`) },
                                      zMpfjH6oL: {
                                        variant: Di(
                                          e.visible && `bc2YXHwMc`,
                                          e.visible ? `bc2YXHwMc` : `ZjcOy4Cib`,
                                        ),
                                      },
                                    },
                                    children: f(J, {
                                      GTsNoximw: C({ overlay: e }),
                                      height: `100%`,
                                      id: `s2NE3irgq`,
                                      layoutId: `s2NE3irgq`,
                                      mX633isTE: p,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Di(`OECEM5TdI`),
                                      width: `100%`,
                                    }),
                                  }),
                                  O() &&
                                    f(ne, {
                                      children:
                                        e.visible &&
                                        f(x, {
                                          children: m(
                                            f(Ae, {
                                              children: g(de, {
                                                children: [
                                                  f(
                                                    D.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0.2,
                                                          ease: [
                                                            0.5, 0, 0.88, 0.77,
                                                          ],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: `${R(E, `framer-1w73dgk`)} hidden-yqpees hidden-1pxqvew`,
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0.1,
                                                          ease: [
                                                            0.12, 0.23, 0.5, 1,
                                                          ],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => e.hide(),
                                                    },
                                                    `l624WcqFc`,
                                                  ),
                                                  f(D.div, {
                                                    className: R(
                                                      E,
                                                      `framer-13ncolp`,
                                                    ),
                                                    "data-framer-name": `Content`,
                                                    children: f(ue, {
                                                      breakpoint: ee,
                                                      overrides: {
                                                        zMpfjH6oL: {
                                                          width: `max(100vw - 24px, 1px)`,
                                                        },
                                                      },
                                                      children: f(H, {
                                                        children: f(Me, {
                                                          animate: ki,
                                                          className: `framer-130i9u6-container`,
                                                          exit: Oi,
                                                          inComponentSlot: !0,
                                                          initial: Ai,
                                                          nodeId: `LUh8paxV3`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `pKMITaPwi`,
                                                          children: f(Zn, {
                                                            height: `100%`,
                                                            id: `LUh8paxV3`,
                                                            layoutId: `LUh8paxV3`,
                                                            Ny8O4YToJ: w({
                                                              overlay: e,
                                                            }),
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
                                            }),
                                            ji(),
                                          ),
                                        }),
                                    }),
                                ],
                              }),
                            }),
                          }),
                        }),
                    }),
                    v,
                    f(`div`, { className: `framer-tg3zgh` }),
                    h !== !1 &&
                      f(H, {
                        children: f(vi, {
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
                                y: 0,
                              },
                            },
                            {
                              ref: _,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 250,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-12ffj3x-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: `position`,
                          layoutScroll: !0,
                          nodeId: `gG7UwOsGK`,
                          rendersWithMotion: !0,
                          scopeId: `pKMITaPwi`,
                          children: f(gt, {
                            blur: 10,
                            borderRadius: `0px`,
                            direction: `to bottom`,
                            height: `100%`,
                            id: `gG7UwOsGK`,
                            layoutId: `gG7UwOsGK`,
                            style: { height: `100%`, width: `100%` },
                            transition: {
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    f(H, {
                      height: 712,
                      width: `100vw`,
                      y: 1e3,
                      children: f(Me, {
                        className: `framer-1pg213s-container`,
                        layout: `position`,
                        nodeId: `b0Gwi8l7H`,
                        rendersWithMotion: !0,
                        scopeId: `pKMITaPwi`,
                        children: f(ue, {
                          breakpoint: ee,
                          overrides: {
                            OImjYT545: { variant: Di(`wkMH7mmBD`) },
                            zMpfjH6oL: { variant: Di(`HrO0jOo0f`) },
                          },
                          children: f(pi, {
                            height: `100%`,
                            id: `b0Gwi8l7H`,
                            layoutId: `b0Gwi8l7H`,
                            style: { width: `100%` },
                            variant: Di(`gahOmwpYJ`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Ui = (e) =>
        e === Ie.canvas || e === Ie.export
          ? [
              ...Ii,
              ...Pi.flatMap((e) => {
                let t = Fi[e];
                return Ni[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [
              ...Ii,
              ...Pi.map((e) => `@media ${Li[e]} { ${Ni[e].join(` `)} }`),
            ]),
      (Wi = N(Hi, Ui, `framer-LqpOF`)),
      (Wi.displayName = `Root`),
      (Wi.defaultProps = { height: 2e3, width: 1200 }),
      U(Wi, {
        QMLrZfOdm: xi?.mX633isTE && {
          ...xi.mX633isTE,
          defaultValue: `RXhpLCgbr`,
          description: void 0,
          hidden: void 0,
          title: `Current Page`,
        },
        pYEeIV4Va: {
          defaultValue: !0,
          title: `Show Bottom Blur`,
          type: K.Boolean,
        },
        MxPmvoD87: { title: `Remove Blur After`, type: K.ScrollSectionRef },
      }),
      j(Wi, [{ explicitInter: !0, fonts: [] }, ...hi, ...gi, ..._i, ...yi], {
        supportsExplicitInterCodegen: !0,
      }),
      (Wi.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([L(J, {}, t), L(Zn, {}, t), L(pi, {}, t)])
        ),
      }));
  });
function Ki({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      MxPmvoD87: {
        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
        refKey: !0,
      },
      pYEeIV4Va: !0,
      QMLrZfOdm: `RXhpLCgbr`,
    },
    a = {
      ...i,
      MxPmvoD87: {
        href: { hash: `:NOCX6Xdyw`, webPageId: `MCl1zxt1X` },
        refKey: !0,
      },
    },
    o = {
      ...i,
      MxPmvoD87: {
        href: { hash: `:SxR0CVCd9`, webPageId: `TG4v3XDvb` },
        refKey: !0,
      },
      QMLrZfOdm: `t1T96jyoV`,
    },
    s = {
      ...i,
      MxPmvoD87: {
        href: { hash: `:tZXUF60fM`, webPageId: `jL2GUUASB` },
        refKey: !0,
      },
      QMLrZfOdm: `SxGmqKUGH`,
    },
    c = {
      ...i,
      MxPmvoD87: {
        href: { hash: `:NiOM68_OU`, webPageId: `IcLi543Pr` },
        refKey: !0,
      },
      pYEeIV4Va: !1,
      QMLrZfOdm: `glgEnQfoK`,
    },
    l = { ...i, MxPmvoD87: void 0 },
    u = {
      ...i,
      MxPmvoD87: {
        href: { hash: `:T5kladmpb`, webPageId: `sXNmQkfHo` },
        refKey: !0,
      },
    },
    d = Le(),
    f =
      {
        augiA20Il: i,
        IcLi543Pr: c,
        JFNr7AzSy: l,
        jL2GUUASB: s,
        MCl1zxt1X: a,
        sXNmQkfHo: u,
        TG4v3XDvb: o,
        wUl6IQ99K: l,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `MCl1zxt1X`:
    case `TG4v3XDvb`:
    case `jL2GUUASB`:
    case `IcLi543Pr`:
    case `JFNr7AzSy`:
    case `sXNmQkfHo`:
    case `wUl6IQ99K`:
      return S(P, { links: [f.MxPmvoD87] }, (e) =>
        S(Wi, { ...f, key: `Root`, MxPmvoD87: d(e[0]), style: n }, t(!0)),
      );
    default:
      return t(!1);
  }
}
function qi(e) {
  switch (e) {
    case `augiA20Il`:
    case `MCl1zxt1X`:
    case `TG4v3XDvb`:
    case `jL2GUUASB`:
    case `IcLi543Pr`:
    case `JFNr7AzSy`:
    case `sXNmQkfHo`:
    case `wUl6IQ99K`:
      return [
        { hash: `1xn8rl8`, mediaQuery: `(max-width: 809.98px)` },
        {
          hash: `1pxqvew`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `yqpees`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function Ji({
  routeId: e,
  pathVariables: t,
  localeId: r,
  collectionItemId: c,
}) {
  let u = Zi[e].page.preload();
  he({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let d = S(Re, {
    children: S(Se, {
      children: S(ge, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: Zi,
        collectionUtils: $i,
        siteSiteId: ea,
        notFoundPage: B(
          () =>
            import(
              `./TJb56fbYI77eoraFznPh14G3ujWSsLbnTUI4UmY4D3M.D7Sh5rws.mjs`
            ),
        ),
        isReducedMotion: void 0,
        localeId: r,
        locales: Qi,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://blushing-tasks-140990.site.app`,
        EditorBar:
          E === void 0
            ? void 0
            : (() => {
                if (na) {
                  console.log(
                    `[Site On-Page Editing] Unavailable because navigator is bot`,
                  );
                  return;
                }
                return B(async () => {
                  E.__framer_editorBarDependencies = {
                    __version: 3,
                    site: {
                      useCurrentRoute: xe,
                      useLocaleInfo: V,
                      useRouter: ae,
                    },
                    react: {
                      createElement: S,
                      Fragment: s,
                      memo: p,
                      useCallback: i,
                      useEffect: a,
                      useRef: o,
                      useState: n,
                      useLayoutEffect: l,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `https://framer.com/edit/init.mjs`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Ki,
        loadSnippetsModule: new we(
          () =>
            import(
              `./site-snippets.mjs`
            ),
        ),
        initialCollectionItemId: c,
      }),
    }),
    value: { routes: {} },
  });
  return (await u, d);
}
function Yi() {
  ta && E.__framer_events.push(arguments);
}
async function Xi(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || E.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    Yi(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.siteHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = je(Zi, r)));
    else {
      je(Zi, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = se(Zi, decodeURIComponent(location.pathname), !0, Qi);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = Ji({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    E !== void 0 &&
      (async () => {
        let e = Zi[r],
          t = Qi.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && $i) {
          let r = await $i[e.collectionId]?.(),
            [i] = Object.values(a);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          E.__framer_events.push([
            `published_site_pageview`,
            {
              siteSiteId: ea,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              siteLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: E.location.href,
              hostname: E.location.hostname || null,
              pathname: E.location.pathname || null,
              hash: E.location.hash || null,
              search: E.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await le({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`site:pageview`, {
              detail: { siteLocale: t || null },
            }),
          ));
      })();
    let l = await c;
    e
      ? (ce(`framer-rewrite-breakpoints`, () => {
          (De(o), E.__framer_onRewriteBreakpoints?.(o));
        }),
        (na ? (e) => e() : C)(() => {
          (re(), Pe(), te(t, l, { onRecoverableError: n }));
        }))
      : b(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Zi, Qi, $i, ea, ta, na;
e(() => {
  if (
    (r(),
    z(),
    w(),
    d(),
    v(),
    Gi(),
    (Zi = {
      augiA20Il: {
        elements: {
          dMa3I_0FQ: `the-solution`,
          IEzvAGyIY: `pricing`,
          LC8uHYUKO: `Book A Call`,
        },
        page: B(
          () =>
            import(
              `./home-page.mjs`
            ),
        ),
        path: `/`,
      },
      MCl1zxt1X: {
        elements: { NOCX6Xdyw: `main-1` },
        page: B(
          () =>
            import(
              `./TJb56fbYI77eoraFznPh14G3ujWSsLbnTUI4UmY4D3M.D7Sh5rws.mjs`
            ),
        ),
        path: `/404`,
      },
      TG4v3XDvb: {
        elements: {
          fjLeeXjVd: `hero-scroll-trigger`,
          SxR0CVCd9: `Book A Call`,
        },
        page: B(
          () =>
            import(
              `./about-page.mjs`
            ),
        ),
        path: `/about`,
      },
      jL2GUUASB: {
        elements: { tZXUF60fM: `Book A Call` },
        page: B(
          () =>
            import(
              `./contact-page.mjs`
            ),
        ),
        path: `/contact`,
      },
      IcLi543Pr: {
        elements: { NiOM68_OU: `case-studies` },
        page: B(
          () =>
            import(
              `./case-studies-page.mjs`
            ),
        ),
        path: `/case-studies`,
      },
      JFNr7AzSy: {
        elements: { EK08Qvqdt: `jobs` },
        page: B(
          () =>
            import(
              `./careers-page.mjs`
            ),
        ),
        path: `/careers`,
      },
      sXNmQkfHo: {
        collectionId: `lLZsS_En3`,
        elements: { oFYw5Ybkh: `metrics`, T5kladmpb: `Book A Call` },
        page: B(
          () =>
            import(
              `./case-study-detail-page.mjs`
            ),
        ),
        path: `/case-studies/:yKuZxAi18`,
      },
      wUl6IQ99K: {
        collectionId: `vQ037hWUX`,
        elements: {},
        page: B(
          () =>
            import(
              `./career-detail-page.mjs`
            ),
        ),
        path: `/careers/:PLBkt8VbJ`,
      },
    }),
    (Qi = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    ($i = {
      lLZsS_En3: async () =>
        (
          await import(
            `./tvNQEMLjXGu9l1Po67FrzQtnecC_ta3p9Z3ALVuH0ZA.CHTbRVmq.mjs`
          )
        )?.utils,
      vQ037hWUX: async () =>
        (
          await import(
            `./C5MzPS55de_oWSihVUSs7_rlWTvg5Ceb-U_CwFf7vYM.CVE0ImIw.mjs`
          )
        )?.utils,
    }),
    (ea = `ae5b8863c1cb4d603a0f7f93317a507e63d72e56172b8ba9d25efd4eae7010ee`),
    (ta = typeof document < `u`),
    (na =
      ta &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        c.userAgent,
      )),
    ta)
  ) {
    ((E.__framer_importFromPackage = (e, t) => () =>
      S(ve, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (E.__framer_events = E.__framer_events || []),
      pe());
    let e = document.getElementById(`main`);
    `siteHydrateV2` in e.dataset ? Xi(!0, e) : Xi(!1, e);
  }
  (function () {
    ta &&
      C(() => {
        te(
          document.getElementById(`__framer-badge-container`),
          S(_, {}, S(ee(() => import(`./site-badge.mjs`)))),
        );
      });
  })();
})();
export { qi as getLayoutTemplateBreakpoints, Ji as getPageRoot };
//# sourceMappingURL=site-main.mjs.map

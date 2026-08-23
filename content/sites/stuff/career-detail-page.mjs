import { t as e } from "./rolldown-runtime.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as ee,
  l as o,
  o as te,
  w as ne,
  y as re,
} from "./react-runtime.mjs";
import { S as s, a as ie, r as ae, t as c } from "./motion-runtime.mjs";
import {
  A as l,
  Ct as oe,
  D as u,
  Dt as se,
  E as ce,
  H as d,
  I as f,
  K as le,
  P as ue,
  S as p,
  U as m,
  X as h,
  _t as de,
  a as g,
  d as _,
  ft as fe,
  ht as v,
  lt as pe,
  o as y,
  pt as me,
  rt as b,
  ut as he,
  v as ge,
  vt as _e,
  xt as ve,
} from "./framer-runtime.mjs";
import {
  a as x,
  c as S,
  i as C,
  l as w,
  o as T,
  r as ye,
  s as be,
  u as E,
} from "./shared-library.mjs";
import { i as D, n as O, r as k, t as xe } from "./text-style-heading.mjs";
import { n as A, t as j } from "./framer-data-utils.mjs";
import { n as M, t as N } from "./shared-query-utils.mjs";
import { i as P, n as F, r as Se, t as Ce } from "./text-style-secondary.mjs";
import { i as I, n as L, r as R, t as we } from "./heading-style-preset.mjs";
import { i as Te, n as z, r as B, t as Ee } from "./text-style-body.mjs";
import { i as V, n as De, r as Oe, t as ke } from "./font-style-config.mjs";
import { i as Ae, n as je, r as H, t as U } from "./react-component-variant-c.mjs";
import { r as Me, t as W } from "./react-component-variant-a.mjs";
import { i as G, n as Ne, o as Pe } from "./collection-component.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./react-component-variant-b.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./route-metadata-career-alt.mjs";
import Ue, {
  t as We,
} from "./route-metadata-career-detail.mjs";
var K, q, J, Ge, Y, Ke, qe, Je, Ye, Xe, Ze, X, Z, Qe, Q, $e, $, et;
e(() => {
  (te(),
    h(),
    c(),
    ne(),
    M(),
    A(),
    Pe(),
    T(),
    V(),
    P(),
    ze(),
    Te(),
    D(),
    E(),
    Fe(),
    I(),
    Ae(),
    Me(),
    je(),
    We(),
    (K = d(N)),
    (q = d(U)),
    (J = d(j)),
    (Ge = d(H)),
    (Y = d(W)),
    (Ke = {
      rpf_ss6ui: `(max-width: 809.98px)`,
      ZinDQfjPx: `(min-width: 1200px)`,
      zwNppMN5r: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (qe = () => typeof document < `u`),
    (Je = []),
    (Ye = `framer-MI80E`),
    (Xe = {
      rpf_ss6ui: `framer-v-113faxh`,
      ZinDQfjPx: `framer-v-5u9rzo`,
      zwNppMN5r: `framer-v-zgaamc`,
    }),
    (Ze = (e, t, n) => (e && t ? `position` : n)),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `ZinDQfjPx`, Phone: `rpf_ss6ui`, Tablet: `zwNppMN5r` }),
    (Qe = ({ value: e }) =>
      v()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Q = (e) => ({
      from: { alias: `wUl6IQ99K`, data: Ne, type: `Collection` },
      select: [
        { collection: `wUl6IQ99K`, name: `pOVpIXKAs`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `iXCuLNPva`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `QcYzZ0Djr`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `guYfOdOQq`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `JdvV5b351`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `olL7Dgy7x`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `tT1wKi2C7`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `SY7T7kRHC`, type: `Identifier` },
        { collection: `wUl6IQ99K`, name: `p56gKhXkF`, type: `Identifier` },
      ],
      where: e,
    })),
    ($e = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `ZinDQfjPx`,
    })),
    ($ = se(
      i(function (e, i) {
        let te = n(null),
          ne = i ?? te,
          c = re(),
          { activeLocale: l, setLocale: se } = de(),
          d = pe(),
          f = he(),
          [m] = ve(Q(le(f, `wUl6IQ99K`))),
          h = (e) => {
            if (!m)
              throw new ge(
                `No data matches path variables: ${JSON.stringify(f)}`,
              );
            return m[e];
          },
          {
            style: v,
            className: b,
            layoutId: x,
            variant: S,
            pOVpIXKAs: C = h(`pOVpIXKAs`) ?? ``,
            iXCuLNPva: w = h(`iXCuLNPva`),
            QcYzZ0Djr: T = h(`QcYzZ0Djr`),
            guYfOdOQq: E = h(`guYfOdOQq`) ?? ``,
            JdvV5b351: D = h(`JdvV5b351`) ?? ``,
            olL7Dgy7x: O = h(`olL7Dgy7x`) ?? ``,
            tT1wKi2C7: k = h(`tT1wKi2C7`) ?? ``,
            SY7T7kRHC: A = h(`SY7T7kRHC`) ?? ``,
            p56gKhXkF: M = h(`p56gKhXkF`) ?? ``,
            ...P
          } = $e(e);
        _e(ee(() => Ue({}, l), [l]));
        let [F, Se] = me(S, Ke, !1),
          I = ue(Ye, Re, be, Ee, ke, He, Ce, we, xe, ye),
          L = t(_)?.isLayoutTemplate,
          R = !!t(ie)?.transition?.layout,
          Te = Ze(L, R);
        oe();
        let z = G.iXCuLNPva?.(w, l),
          B = G.QcYzZ0Djr?.(T, l),
          V = () => !qe() || F === `rpf_ss6ui`;
        return (
          fe({}),
          a(_.Provider, {
            value: {
              activeVariantId: F,
              humanReadableVariantMap: Z,
              primaryVariantId: `ZinDQfjPx`,
              variantClassNames: Xe,
            },
            children: o(ae, {
              id: x ?? c,
              children: [
                a(Qe, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(s.div, {
                  ...P,
                  className: ue(I, `framer-5u9rzo`, b),
                  ref: ne,
                  style: { ...v },
                  children: o(s.main, {
                    className: `framer-rcegqn`,
                    "data-framer-name": `Main`,
                    layout: Te,
                    children: [
                      o(`section`, {
                        className: `framer-19c2qsu`,
                        "data-border": !0,
                        "data-framer-name": `Header`,
                        children: [
                          o(`div`, {
                            className: `framer-1wtorni`,
                            "data-framer-name": `Header`,
                            children: [
                              a(u, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-1r2j15k`,
                                    "data-styles-preset": `RHKJWGVab`,
                                    dir: `auto`,
                                    children: `Lead AI Automation Engineer`,
                                  }),
                                }),
                                className: `framer-nokp2u`,
                                fonts: [`Inter`],
                                text: C,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(u, {
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
                                    children: `tackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                  }),
                                }),
                                className: `framer-okmq2j`,
                                fonts: [`Inter`],
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a(ce, {
                            links: [
                              { href: M, implicitPathVariables: void 0 },
                              { href: M, implicitPathVariables: void 0 },
                              { href: M, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              a(p, {
                                breakpoint: F,
                                overrides: {
                                  rpf_ss6ui: {
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      0 +
                                      100 +
                                      200.8,
                                  },
                                  zwNppMN5r: {
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      0 +
                                      140 +
                                      200.8,
                                  },
                                },
                                children: a(g, {
                                  height: 31,
                                  y:
                                    (d?.y || 0) + 140 + 0 + 0 + 0 + 140 + 145.8,
                                  children: a(y, {
                                    className: `framer-gdp8jb-container`,
                                    nodeId: `qVReme7mx`,
                                    scopeId: `wUl6IQ99K`,
                                    children: a(p, {
                                      breakpoint: F,
                                      overrides: {
                                        rpf_ss6ui: { JvqpmmvGw: e[2] },
                                        zwNppMN5r: { JvqpmmvGw: e[1] },
                                      },
                                      children: a(N, {
                                        height: `100%`,
                                        id: `qVReme7mx`,
                                        JvqpmmvGw: e[0],
                                        layoutId: `qVReme7mx`,
                                        vA9NXfDIM: `Apply here`,
                                        variant: X(`kWnN_xkUt`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      o(`section`, {
                        className: `framer-1x6j6ak`,
                        "data-border": !0,
                        "data-framer-name": `Job Details`,
                        children: [
                          o(`div`, {
                            className: `framer-1819sr0`,
                            "data-framer-name": `Mission + Responsibilities + Requirements`,
                            children: [
                              o(`div`, {
                                className: `framer-r63x3g`,
                                "data-framer-name": `Mission`,
                                children: [
                                  a(u, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h6`, {
                                        className: `framer-styles-preset-c7r8r4`,
                                        "data-styles-preset": `JDyypIjWz`,
                                        dir: `auto`,
                                        children: `Mission`,
                                      }),
                                    }),
                                    className: `framer-114xx2o`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(u, {
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
                                        children: `tackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                      }),
                                    }),
                                    className: `framer-1gffgf7`,
                                    fonts: [`Inter`],
                                    text: O,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-td9k2l`,
                                "data-framer-name": `Responsibilities`,
                                children: [
                                  a(u, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h6`, {
                                        className: `framer-styles-preset-c7r8r4`,
                                        "data-styles-preset": `JDyypIjWz`,
                                        dir: `auto`,
                                        children: `Responsibilities`,
                                      }),
                                    }),
                                    className: `framer-nr2gic`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(u, {
                                    __fromCanvasComponent: !0,
                                    children: k,
                                    className: `framer-14fr4v5`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      a: `framer-styles-preset-1ovk18f`,
                                      p: `framer-styles-preset-l66ocq`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-zfcguj`,
                                "data-framer-name": `Requirements`,
                                children: [
                                  a(u, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h6`, {
                                        className: `framer-styles-preset-c7r8r4`,
                                        "data-styles-preset": `JDyypIjWz`,
                                        dir: `auto`,
                                        children: `Requirements`,
                                      }),
                                    }),
                                    className: `framer-1c81iwe`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(u, {
                                    __fromCanvasComponent: !0,
                                    children: A,
                                    className: `framer-14pmwef`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      a: `framer-styles-preset-1ovk18f`,
                                      h1: `framer-styles-preset-1xgagrl`,
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
                            ],
                          }),
                          o(`div`, {
                            className: `framer-1oks7n1`,
                            "data-border": !0,
                            "data-framer-name": `Job Details`,
                            children: [
                              o(`div`, {
                                className: `framer-s7qvll`,
                                "data-framer-name": `Department`,
                                children: [
                                  o(`div`, {
                                    className: `framer-15i051e`,
                                    "data-framer-name": `Title`,
                                    children: [
                                      a(U, {
                                        animated: !1,
                                        className: `framer-16xm266`,
                                        kfNzCWrbt: !0,
                                        layoutId: `wZ8CLuqpR`,
                                      }),
                                      a(u, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-ccv9s9`,
                                            "data-styles-preset": `Bo2HZoBjr`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                                            },
                                            children: `Department`,
                                          }),
                                        }),
                                        className: `framer-1aayxs6`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  a(u, {
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
                                        children: `tackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                      }),
                                    }),
                                    className: `framer-1imnerl`,
                                    fonts: [`Inter`],
                                    text: z,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(p, {
                                breakpoint: F,
                                overrides: {
                                  rpf_ss6ui: {
                                    width: `calc(min(min(${d?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 112px)`,
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      381.8 +
                                      28 +
                                      0 +
                                      28 +
                                      237,
                                  },
                                  zwNppMN5r: {
                                    width: `calc(min(max((min(min(${d?.width || `100vw`} - 40px, 1300px), 780px) - 106px) / 2, 1px), 300px) - 56px)`,
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      421.8 +
                                      50 +
                                      28 +
                                      237,
                                  },
                                },
                                children: a(g, {
                                  height: 1,
                                  width: `calc(min(max((min(min(${d?.width || `100vw`} - 40px, 1300px), 1180px) - 106px) / 2, 1px), 500px) - 56px)`,
                                  y:
                                    (d?.y || 0) +
                                    140 +
                                    0 +
                                    0 +
                                    366.8 +
                                    50 +
                                    28 +
                                    237,
                                  children: a(y, {
                                    className: `framer-i6foa6-container`,
                                    nodeId: `grJKzKJ_c`,
                                    scopeId: `wUl6IQ99K`,
                                    children: a(j, {
                                      height: `100%`,
                                      id: `grJKzKJ_c`,
                                      layoutId: `grJKzKJ_c`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: X(`uu1kgFfPS`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              o(`div`, {
                                className: `framer-d44wun`,
                                "data-framer-name": `Location`,
                                children: [
                                  o(`div`, {
                                    className: `framer-kdzbyy`,
                                    "data-framer-name": `Title`,
                                    children: [
                                      a(H, {
                                        animated: !1,
                                        className: `framer-1n65mvi`,
                                        kfNzCWrbt: !0,
                                        layoutId: `HeN1v08oA`,
                                      }),
                                      a(u, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-ccv9s9`,
                                            "data-styles-preset": `Bo2HZoBjr`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                                            },
                                            children: `Location`,
                                          }),
                                        }),
                                        className: `framer-ijfmq1`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  a(u, {
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
                                        children: `tackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                      }),
                                    }),
                                    className: `framer-15esi87`,
                                    fonts: [`Inter`],
                                    text: B,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(p, {
                                breakpoint: F,
                                overrides: {
                                  rpf_ss6ui: {
                                    width: `calc(min(min(${d?.width || `100vw`} - 40px, 1300px) - 24px, 600px) - 112px)`,
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      381.8 +
                                      28 +
                                      0 +
                                      28 +
                                      495,
                                  },
                                  zwNppMN5r: {
                                    width: `calc(min(max((min(min(${d?.width || `100vw`} - 40px, 1300px), 780px) - 106px) / 2, 1px), 300px) - 56px)`,
                                    y:
                                      (d?.y || 0) +
                                      140 +
                                      0 +
                                      0 +
                                      421.8 +
                                      50 +
                                      28 +
                                      495,
                                  },
                                },
                                children: a(g, {
                                  height: 1,
                                  width: `calc(min(max((min(min(${d?.width || `100vw`} - 40px, 1300px), 1180px) - 106px) / 2, 1px), 500px) - 56px)`,
                                  y:
                                    (d?.y || 0) +
                                    140 +
                                    0 +
                                    0 +
                                    366.8 +
                                    50 +
                                    28 +
                                    495,
                                  children: a(y, {
                                    className: `framer-o5z1xq-container`,
                                    nodeId: `ByEKEhTuA`,
                                    scopeId: `wUl6IQ99K`,
                                    children: a(j, {
                                      height: `100%`,
                                      id: `ByEKEhTuA`,
                                      layoutId: `ByEKEhTuA`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: X(`uu1kgFfPS`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              o(`div`, {
                                className: `framer-1771sg5`,
                                "data-framer-name": `Compensation`,
                                children: [
                                  o(`div`, {
                                    className: `framer-17fw220`,
                                    "data-framer-name": `Title`,
                                    children: [
                                      a(W, {
                                        animated: !1,
                                        className: `framer-11kbv7q`,
                                        kfNzCWrbt: !0,
                                        layoutId: `coOR80bYi`,
                                      }),
                                      a(u, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-ccv9s9`,
                                            "data-styles-preset": `Bo2HZoBjr`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                                            },
                                            children: `Compensation`,
                                          }),
                                        }),
                                        className: `framer-18c711b`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  a(u, {
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
                                        children: `tackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                      }),
                                    }),
                                    className: `framer-eaa5xr`,
                                    fonts: [`Inter`],
                                    text: E,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          V() &&
                            a(ce, {
                              links: [
                                { href: M, implicitPathVariables: void 0 },
                                { href: M, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                a(p, {
                                  breakpoint: F,
                                  overrides: {
                                    rpf_ss6ui: {
                                      height: 31,
                                      y:
                                        (d?.y || 0) +
                                        140 +
                                        0 +
                                        0 +
                                        381.8 +
                                        28 +
                                        1284,
                                    },
                                  },
                                  children: a(g, {
                                    children: a(y, {
                                      className: `framer-a7xmau-container hidden-5u9rzo hidden-zgaamc`,
                                      nodeId: `t5xxu1tx4`,
                                      scopeId: `wUl6IQ99K`,
                                      children: a(p, {
                                        breakpoint: F,
                                        overrides: {
                                          rpf_ss6ui: { JvqpmmvGw: e[1] },
                                        },
                                        children: a(N, {
                                          height: `100%`,
                                          id: `t5xxu1tx4`,
                                          JvqpmmvGw: e[0],
                                          layoutId: `t5xxu1tx4`,
                                          vA9NXfDIM: `Apply here`,
                                          variant: X(`kWnN_xkUt`),
                                          width: `100%`,
                                        }),
                                      }),
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
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-MI80E.framer-dr8fg2, .framer-MI80E .framer-dr8fg2 { display: block; }`,
        `.framer-MI80E.framer-5u9rzo { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-MI80E .framer-rcegqn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-19c2qsu { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-1wtorni { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-MI80E .framer-nokp2u, .framer-MI80E .framer-114xx2o, .framer-MI80E .framer-1gffgf7, .framer-MI80E .framer-nr2gic, .framer-MI80E .framer-14fr4v5, .framer-MI80E .framer-1c81iwe, .framer-MI80E .framer-14pmwef, .framer-MI80E .framer-1imnerl, .framer-MI80E .framer-15esi87, .framer-MI80E .framer-eaa5xr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MI80E .framer-okmq2j { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MI80E .framer-gdp8jb-container, .framer-MI80E .framer-a7xmau-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-MI80E .framer-1x6j6ak { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-1819sr0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-MI80E .framer-r63x3g, .framer-MI80E .framer-td9k2l, .framer-MI80E .framer-zfcguj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-1oks7n1 { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: sticky; top: 100px; width: 1px; z-index: 1; }`,
        `.framer-MI80E .framer-s7qvll, .framer-MI80E .framer-d44wun, .framer-MI80E .framer-1771sg5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-15i051e, .framer-MI80E .framer-kdzbyy, .framer-MI80E .framer-17fw220 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MI80E .framer-16xm266, .framer-MI80E .framer-1n65mvi, .framer-MI80E .framer-11kbv7q { --62mhw: var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, #787878); flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }`,
        `.framer-MI80E .framer-1aayxs6, .framer-MI80E .framer-ijfmq1, .framer-MI80E .framer-18c711b { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MI80E .framer-i6foa6-container, .framer-MI80E .framer-o5z1xq-container { flex: none; height: 1px; position: relative; width: 100%; }`,
        ...Ie,
        ...S,
        ...z,
        ...De,
        ...Be,
        ...F,
        ...L,
        ...O,
        ...C,
        `.framer-MI80E[data-border="true"]::after, .framer-MI80E [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-MI80E.framer-5u9rzo { width: 810px; } .framer-MI80E .framer-19c2qsu { align-content: flex-start; align-items: flex-start; flex-direction: column; max-width: 780px; } .framer-MI80E .framer-1wtorni { flex: none; width: 100%; } .framer-MI80E .framer-1x6j6ak { max-width: 780px; } .framer-MI80E .framer-1oks7n1 { max-width: 300px; }}`,
        `@media (max-width: 809.98px) { .framer-MI80E.framer-5u9rzo { width: 390px; } .framer-MI80E .framer-rcegqn { padding: 0px 12px 0px 12px; } .framer-MI80E .framer-19c2qsu { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; max-width: 600px; padding: 100px 28px 50px 28px; } .framer-MI80E .framer-1wtorni { flex: none; width: 100%; } .framer-MI80E .framer-1x6j6ak { flex-direction: column; gap: 20px; max-width: 600px; padding: 28px 28px 50px 28px; } .framer-MI80E .framer-1819sr0 { flex: none; gap: 20px; order: 1; width: 100%; } .framer-MI80E .framer-1oks7n1 { flex: none; max-width: unset; order: 0; position: relative; top: unset; width: 100%; } .framer-MI80E .framer-a7xmau-container { order: 2; }}`,
      ],
      `framer-MI80E`,
    )),
    ($.displayName = `Careers`),
    ($.defaultProps = { height: 1918.5, width: 1200 }),
    l(
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
        ...K,
        ...q,
        ...J,
        ...Ge,
        ...Y,
        ...m(Le),
        ...m(w),
        ...m(B),
        ...m(Oe),
        ...m(Ve),
        ...m(Se),
        ...m(R),
        ...m(k),
        ...m(x),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          b.get(Q(le(t.pathVariables, `wUl6IQ99K`)), n).preload(),
          f(N, {}, t),
          f(j, {}, t),
        ]);
      },
    }),
    (et = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { siteContractVersion: `1` },
        },
        Props: { type: `tsType`, annotations: { siteContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `SitewUl6IQ99K`,
          slots: [],
          annotations: {
            siteIntrinsicWidth: `1200`,
            siteLayoutTemplateFlowEffect: `true`,
            siteDisplayContentsDiv: `false`,
            siteIntrinsicHeight: `1918.5`,
            siteColorSyntax: `true`,
            siteComponentViewportWidth: `true`,
            siteCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"zwNppMN5r":{"layout":["fixed","auto"]},"rpf_ss6ui":{"layout":["fixed","auto"]}}}`,
            siteAcceptsLayoutTemplate: `true`,
            siteScrollSections: `false`,
            siteImmutableVariables: `true`,
            siteAutoSizeImages: `true`,
            siteContractVersion: `1`,
            siteResponsiveScreen: `true`,
          },
        },
        __SiteMetadata__: { type: `variable` },
      },
    }));
})();
export { et as __SiteMetadata__, $ as default, Je as queryParamNames };
//# sourceMappingURL=career-detail-page.mjs.map

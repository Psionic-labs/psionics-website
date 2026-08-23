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
  P as b,
  U as x,
  X as S,
  _t as C,
  j as w,
  lt as T,
  s as E,
} from "./framer-runtime.mjs";
import { i as D, n as O, r as k, t as A } from "./framer-style-utils.mjs";
import { i as j, n as M, r as N, t as P } from "./text-style-features.mjs";
var F,
  I,
  L,
  R,
  z = e(() => {
    (c(),
      S(),
      l(),
      (F = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 61.583 2.302 C 64.652 -0.767 69.629 -0.767 72.698 2.302 C 75.767 5.371 75.767 10.348 72.698 13.417 L 13.417 72.698 C 10.348 75.767 5.371 75.767 2.302 72.698 C -0.767 69.629 -0.767 64.652 2.302 61.583 Z M 2.302 2.302 C 5.371 -0.767 10.348 -0.767 13.417 2.302 L 72.698 61.583 C 75.767 64.652 75.767 69.629 72.698 72.698 C 69.629 75.767 64.652 75.767 61.583 72.698 L 2.302 13.417 C -0.767 10.348 -0.767 5.371 2.302 2.302 Z" fill="transparent" height="74.99999539877342px" id="lIUCBFjL7" transform="translate(12.793 12.5) rotate(-45 37.5 37.5)" width="75.0000005839309px"><path d="M 0 7.86 C 0 3.519 3.519 0 7.86 0 C 12.2 0 15.719 3.519 15.719 7.86 L 15.719 91.695 C 15.719 96.036 12.2 99.555 7.86 99.555 C 3.519 99.555 0 96.036 0 91.695 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="99.55490469140452px" id="ayIyxAX4H" transform="translate(29.64 -12.277) rotate(45 7.86 49.777)" width="15.71919547759012px"/><path d="M 0 7.86 C 0 3.519 3.519 0 7.86 0 L 91.695 0 C 96.036 0 99.555 3.519 99.555 7.86 C 99.555 12.2 96.036 15.719 91.695 15.719 L 7.86 15.719 C 3.519 15.719 0 12.2 0 7.86 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="15.719195477590233px" id="ouprxth6P" transform="translate(-12.277 29.64) rotate(45 49.777 7.86)" width="99.5549046914046px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (I = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(d.div, { ...o, layoutId: r, ref: t })
          : a(`div`, { ...o, ref: t });
      })),
      (L = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ??
          i.kfNzCWrbt ??
          `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (R = _(
        i(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: o,
            kfNzCWrbt: s,
            ...c
          } = L(e);
          return a(I, {
            ...c,
            className: b(`framer-qsptD`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-qsptD { -webkit-mask: ${F}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${F}; width: 100px; }`,
        ],
        `framer-qsptD`,
      )),
      (R.displayName = `Plus`),
      w(R, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: E.Color,
        },
      }));
  });
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (c(),
      S(),
      m(),
      l(),
      j(),
      D(),
      z(),
      (V = y(R)),
      (H = { LBX2RY6YR: { hover: !0 }, wjdnMwXds: { hover: !0 } }),
      (U = [`wjdnMwXds`, `LBX2RY6YR`]),
      (W = `framer-5J4sI`),
      (G = { LBX2RY6YR: `framer-v-1tzflot`, wjdnMwXds: `framer-v-1lec0pg` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (J = { Primary: `wjdnMwXds`, Secondary: `LBX2RY6YR` }),
      (Y = d.create(r)),
      (X = ({
        agentCasuality: e,
        height: t,
        id: n,
        showPlusIcons: r,
        width: i,
        ...a
      }) => ({
        ...a,
        KPDdVnbJ9: e ?? a.KPDdVnbJ9 ?? `Tag Title`,
        nHzYRdzoI: r ?? a.nHzYRdzoI ?? !0,
        variant: J[a.variant] ?? a.variant ?? `wjdnMwXds`,
      })),
      (Z = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Q = _(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = C();
          T();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              KPDdVnbJ9: x,
              nHzYRdzoI: S,
              ...w
            } = X(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: M,
              setGestureState: N,
              setVariant: F,
              variants: I,
            } = v({
              cycleOrder: U,
              defaultVariant: `wjdnMwXds`,
              enabledGestures: H,
              ref: o,
              variant: y,
              variantClassNames: G,
            }),
            L = Z(e, I),
            z = b(W, P, A);
          return a(p, {
            id: _ ?? c,
            children: a(Y, {
              animate: I,
              initial: !1,
              children: a(q, {
                value: K,
                children: s(d.div, {
                  ...w,
                  ...k,
                  className: b(z, `framer-1lec0pg`, h, D),
                  "data-framer-name": `Primary`,
                  layoutDependency: L,
                  layoutId: `wjdnMwXds`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                    ...m,
                  },
                  variants: {
                    LBX2RY6YR: {
                      backgroundColor: `var(--token-487debdd-9588-4cf5-b389-1f7017cbcedd, rgb(232, 232, 232))`,
                    },
                  },
                  ...B(
                    {
                      "LBX2RY6YR-hover": { "data-framer-name": void 0 },
                      "wjdnMwXds-hover": { "data-framer-name": void 0 },
                      LBX2RY6YR: { "data-framer-name": `Secondary` },
                    },
                    E,
                    j,
                  ),
                  children: [
                    a(g, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.p, {
                          className: `framer-styles-preset-kmsqt2`,
                          "data-styles-preset": `dXsx8iVCg`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                          },
                          children: `Tag Title`,
                        }),
                      }),
                      className: `framer-ur553k`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `PP4H4s0ja`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: x,
                      variants: {
                        LBX2RY6YR: {
                          "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...B(
                        {
                          LBX2RY6YR: {
                            children: a(r, {
                              children: a(d.p, {
                                className: `framer-styles-preset-13o8gvd`,
                                "data-styles-preset": `rhzuGFsMS`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                },
                                children: `Tag Title`,
                              }),
                            }),
                          },
                        },
                        E,
                        j,
                      ),
                    }),
                    S !== !1 &&
                      a(R, {
                        animated: !0,
                        className: `framer-awp7gh`,
                        layoutDependency: L,
                        layoutId: `Y0tfkYL5q`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: 90 },
                          "wjdnMwXds-hover": { rotate: 90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    S !== !1 &&
                      a(R, {
                        animated: !0,
                        className: `framer-13ogpqw`,
                        layoutDependency: L,
                        layoutId: `ujJpgUFiJ`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: -90 },
                          "wjdnMwXds-hover": { rotate: -90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    S !== !1 &&
                      a(R, {
                        animated: !0,
                        className: `framer-k3y952`,
                        layoutDependency: L,
                        layoutId: `OEmpUTcLC`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: -90 },
                          "wjdnMwXds-hover": { rotate: -90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    S !== !1 &&
                      a(R, {
                        animated: !0,
                        className: `framer-17oil3r`,
                        layoutDependency: L,
                        layoutId: `l14pFi5Cr`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: 90 },
                          "wjdnMwXds-hover": { rotate: 90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-5J4sI.framer-tr9v8i, .framer-5J4sI .framer-tr9v8i { display: block; }`,
          `.framer-5J4sI.framer-1lec0pg { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px 8px 2px 8px; position: relative; width: min-content; }`,
          `.framer-5J4sI .framer-ur553k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-5J4sI .framer-awp7gh { aspect-ratio: 1.0077519379844961 / 1; flex: none; height: auto; left: -8px; position: absolute; top: -8px; width: 8px; z-index: 1; }`,
          `.framer-5J4sI .framer-13ogpqw { aspect-ratio: 1 / 1; bottom: -8px; flex: none; height: auto; left: -8px; position: absolute; width: 8px; z-index: 1; }`,
          `.framer-5J4sI .framer-k3y952 { aspect-ratio: 1 / 1; flex: none; height: auto; position: absolute; right: -8px; top: -8px; width: 8px; z-index: 1; }`,
          `.framer-5J4sI .framer-17oil3r { aspect-ratio: 1 / 1; bottom: -8px; flex: none; height: auto; position: absolute; right: -8px; width: 8px; z-index: 1; }`,
          ...M,
          ...O,
        ],
        `framer-5J4sI`,
      )),
      (Q.displayName = `Tag`),
      (Q.defaultProps = { height: 25, width: 66 }),
      w(Q, {
        variant: {
          options: [`wjdnMwXds`, `LBX2RY6YR`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: E.Enum,
        },
        KPDdVnbJ9: {
          defaultValue: `Tag Title`,
          displayTextArea: !1,
          title: `Agent Casuality`,
          type: E.String,
        },
        onKPDdVnbJ9Change: { changes: `KPDdVnbJ9`, type: E.ChangeHandler },
        nHzYRdzoI: {
          defaultValue: !0,
          title: `Show Plus Icons`,
          type: E.Boolean,
        },
        onnHzYRdzoIChange: { changes: `nHzYRdzoI`, type: E.ChangeHandler },
      }),
      h(
        Q,
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
          ...V,
          ...x(N),
          ...x(k),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { z as i, $ as n, R as r, Q as t };
//# sourceMappingURL=framer-visual-components.mjs.map

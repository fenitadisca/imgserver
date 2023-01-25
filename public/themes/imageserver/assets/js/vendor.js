/*! For license information please see vendor.js.LICENSE.txt */
(self.webpackChunk_1011_1011_event = self.webpackChunk_1011_1011_event || []).push([
  [771],
  {
    750: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          afterMain: () => E,
          afterRead: () => b,
          afterWrite: () => _,
          applyStyles: () => P,
          arrow: () => Q,
          auto: () => o,
          basePlacements: () => l,
          beforeMain: () => w,
          beforeRead: () => v,
          beforeWrite: () => T,
          bottom: () => r,
          clippingParents: () => u,
          computeStyles: () => J,
          createPopper: () => Oe,
          createPopperBase: () => Me,
          createPopperLite: () => Le,
          detectOverflow: () => ge,
          end: () => d,
          eventListeners: () => te,
          flip: () => ve,
          hide: () => we,
          left: () => s,
          main: () => x,
          modifierPhases: () => A,
          offset: () => xe,
          placements: () => g,
          popper: () => f,
          popperGenerator: () => ke,
          popperOffsets: () => Ee,
          preventOverflow: () => Te,
          read: () => y,
          reference: () => h,
          right: () => a,
          start: () => c,
          top: () => i,
          variationPlacements: () => m,
          viewport: () => p,
          write: () => C,
        });
      var i = "top",
        r = "bottom",
        a = "right",
        s = "left",
        o = "auto",
        l = [i, r, a, s],
        c = "start",
        d = "end",
        u = "clippingParents",
        p = "viewport",
        f = "popper",
        h = "reference",
        m = l.reduce(function (e, t) {
          return e.concat([t + "-" + c, t + "-" + d]);
        }, []),
        g = [].concat(l, [o]).reduce(function (e, t) {
          return e.concat([t, t + "-" + c, t + "-" + d]);
        }, []),
        v = "beforeRead",
        y = "read",
        b = "afterRead",
        w = "beforeMain",
        x = "main",
        E = "afterMain",
        T = "beforeWrite",
        C = "write",
        _ = "afterWrite",
        A = [v, y, b, w, x, E, T, C, _];
      function S(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function k(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function M(e) {
        return e instanceof k(e).Element || e instanceof Element;
      }
      function O(e) {
        return e instanceof k(e).HTMLElement || e instanceof HTMLElement;
      }
      function L(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof k(e).ShadowRoot || e instanceof ShadowRoot);
      }
      const P = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              r = t.elements[e];
            O(r) &&
              S(r) &&
              (Object.assign(r.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  r = t.attributes[e] || {},
                  a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                O(i) &&
                  S(i) &&
                  (Object.assign(i.style, a),
                  Object.keys(r).forEach(function (e) {
                    i.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function D(e) {
        return e.split("-")[0];
      }
      function $(e) {
        var t = e.getBoundingClientRect();
        return { width: t.width, height: t.height, top: t.top, right: t.right, bottom: t.bottom, left: t.left, x: t.left, y: t.top };
      }
      function N(e) {
        var t = $(e),
          n = e.offsetWidth,
          i = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i };
      }
      function z(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && L(n)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function I(e) {
        return k(e).getComputedStyle(e);
      }
      function j(e) {
        return ["table", "td", "th"].indexOf(S(e)) >= 0;
      }
      function B(e) {
        return ((M(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function H(e) {
        return "html" === S(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || B(e);
      }
      function R(e) {
        return O(e) && "fixed" !== I(e).position ? e.offsetParent : null;
      }
      function q(e) {
        for (var t = k(e), n = R(e); n && j(n) && "static" === I(n).position; ) n = R(n);
        return n && ("html" === S(n) || ("body" === S(n) && "static" === I(n).position))
          ? t
          : n ||
              (function (e) {
                var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (-1 !== navigator.userAgent.indexOf("Trident") && O(e) && "fixed" === I(e).position) return null;
                for (var n = H(e); O(n) && ["html", "body"].indexOf(S(n)) < 0; ) {
                  var i = I(n);
                  if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || (t && "filter" === i.willChange) || (t && i.filter && "none" !== i.filter))
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function W(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      var G = Math.max,
        Y = Math.min,
        F = Math.round;
      function X(e, t, n) {
        return G(e, Y(t, n));
      }
      function V(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function U(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Q = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            o = e.name,
            c = e.options,
            d = n.elements.arrow,
            u = n.modifiersData.popperOffsets,
            p = D(n.placement),
            f = W(p),
            h = [s, a].indexOf(p) >= 0 ? "height" : "width";
          if (d && u) {
            var m = (function (e, t) {
                return V("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : U(e, l));
              })(c.padding, n),
              g = N(d),
              v = "y" === f ? i : s,
              y = "y" === f ? r : a,
              b = n.rects.reference[h] + n.rects.reference[f] - u[f] - n.rects.popper[h],
              w = u[f] - n.rects.reference[f],
              x = q(d),
              E = x ? ("y" === f ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
              T = b / 2 - w / 2,
              C = m[v],
              _ = E - g[h] - m[y],
              A = E / 2 - g[h] / 2 + T,
              S = X(C, A, _),
              k = f;
            n.modifiersData[o] = (((t = {})[k] = S), (t.centerOffset = S - A), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            i = void 0 === n ? "[data-popper-arrow]" : n;
          null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && z(t.elements.popper, i) && (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      var K = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Z(e) {
        var t,
          n = e.popper,
          o = e.popperRect,
          l = e.placement,
          c = e.offsets,
          d = e.position,
          u = e.gpuAcceleration,
          p = e.adaptive,
          f = e.roundOffsets,
          h =
            !0 === f
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    i = window.devicePixelRatio || 1;
                  return { x: F(F(t * i) / i) || 0, y: F(F(n * i) / i) || 0 };
                })(c)
              : "function" == typeof f
              ? f(c)
              : c,
          m = h.x,
          g = void 0 === m ? 0 : m,
          v = h.y,
          y = void 0 === v ? 0 : v,
          b = c.hasOwnProperty("x"),
          w = c.hasOwnProperty("y"),
          x = s,
          E = i,
          T = window;
        if (p) {
          var C = q(n),
            _ = "clientHeight",
            A = "clientWidth";
          C === k(n) && "static" !== I((C = B(n))).position && ((_ = "scrollHeight"), (A = "scrollWidth")),
            (C = C),
            l === i && ((E = r), (y -= C[_] - o.height), (y *= u ? 1 : -1)),
            l === s && ((x = a), (g -= C[A] - o.width), (g *= u ? 1 : -1));
        }
        var S,
          M = Object.assign({ position: d }, p && K);
        return u
          ? Object.assign({}, M, (((S = {})[E] = w ? "0" : ""), (S[x] = b ? "0" : ""), (S.transform = (T.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + y + "px)" : "translate3d(" + g + "px, " + y + "px, 0)"), S))
          : Object.assign({}, M, (((t = {})[E] = w ? y + "px" : ""), (t[x] = b ? g + "px" : ""), (t.transform = ""), t));
      }
      const J = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            a = n.adaptive,
            s = void 0 === a || a,
            o = n.roundOffsets,
            l = void 0 === o || o,
            c = { placement: D(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r };
          null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Z(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Z(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
        },
        data: {},
      };
      var ee = { passive: !0 };
      const te = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            i = e.options,
            r = i.scroll,
            a = void 0 === r || r,
            s = i.resize,
            o = void 0 === s || s,
            l = k(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, ee);
              }),
            o && l.addEventListener("resize", n.update, ee),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, ee);
                }),
                o && l.removeEventListener("resize", n.update, ee);
            }
          );
        },
        data: {},
      };
      var ne = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ie(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ne[e];
        });
      }
      var re = { start: "end", end: "start" };
      function ae(e) {
        return e.replace(/start|end/g, function (e) {
          return re[e];
        });
      }
      function se(e) {
        var t = k(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function oe(e) {
        return $(B(e)).left + se(e).scrollLeft;
      }
      function le(e) {
        var t = I(e),
          n = t.overflow,
          i = t.overflowX,
          r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i);
      }
      function ce(e) {
        return ["html", "body", "#document"].indexOf(S(e)) >= 0 ? e.ownerDocument.body : O(e) && le(e) ? e : ce(H(e));
      }
      function de(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = ce(e),
          r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = k(i),
          s = r ? [a].concat(a.visualViewport || [], le(i) ? i : []) : i,
          o = t.concat(s);
        return r ? o : o.concat(de(H(s)));
      }
      function ue(e) {
        return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
      }
      function pe(e, t) {
        return t === p
          ? ue(
              (function (e) {
                var t = k(e),
                  n = B(e),
                  i = t.visualViewport,
                  r = n.clientWidth,
                  a = n.clientHeight,
                  s = 0,
                  o = 0;
                return i && ((r = i.width), (a = i.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((s = i.offsetLeft), (o = i.offsetTop))), { width: r, height: a, x: s + oe(e), y: o };
              })(e)
            )
          : O(t)
          ? (function (e) {
              var t = $(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : ue(
              (function (e) {
                var t,
                  n = B(e),
                  i = se(e),
                  r = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = G(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                  s = G(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                  o = -i.scrollLeft + oe(e),
                  l = -i.scrollTop;
                return "rtl" === I(r || n).direction && (o += G(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: o, y: l };
              })(B(e))
            );
      }
      function fe(e, t, n) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = de(H(e)),
                    n = ["absolute", "fixed"].indexOf(I(e).position) >= 0 && O(e) ? q(e) : e;
                  return M(n)
                    ? t.filter(function (e) {
                        return M(e) && z(e, n) && "body" !== S(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          r = [].concat(i, [n]),
          a = r[0],
          s = r.reduce(function (t, n) {
            var i = pe(e, n);
            return (t.top = G(i.top, t.top)), (t.right = Y(i.right, t.right)), (t.bottom = Y(i.bottom, t.bottom)), (t.left = G(i.left, t.left)), t;
          }, pe(e, a));
        return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
      }
      function he(e) {
        return e.split("-")[1];
      }
      function me(e) {
        var t,
          n = e.reference,
          o = e.element,
          l = e.placement,
          u = l ? D(l) : null,
          p = l ? he(l) : null,
          f = n.x + n.width / 2 - o.width / 2,
          h = n.y + n.height / 2 - o.height / 2;
        switch (u) {
          case i:
            t = { x: f, y: n.y - o.height };
            break;
          case r:
            t = { x: f, y: n.y + n.height };
            break;
          case a:
            t = { x: n.x + n.width, y: h };
            break;
          case s:
            t = { x: n.x - o.width, y: h };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var m = u ? W(u) : null;
        if (null != m) {
          var g = "y" === m ? "height" : "width";
          switch (p) {
            case c:
              t[m] = t[m] - (n[g] / 2 - o[g] / 2);
              break;
            case d:
              t[m] = t[m] + (n[g] / 2 - o[g] / 2);
          }
        }
        return t;
      }
      function ge(e, t) {
        void 0 === t && (t = {});
        var n = t,
          s = n.placement,
          o = void 0 === s ? e.placement : s,
          c = n.boundary,
          d = void 0 === c ? u : c,
          m = n.rootBoundary,
          g = void 0 === m ? p : m,
          v = n.elementContext,
          y = void 0 === v ? f : v,
          b = n.altBoundary,
          w = void 0 !== b && b,
          x = n.padding,
          E = void 0 === x ? 0 : x,
          T = V("number" != typeof E ? E : U(E, l)),
          C = y === f ? h : f,
          _ = e.elements.reference,
          A = e.rects.popper,
          S = e.elements[w ? C : y],
          k = fe(M(S) ? S : S.contextElement || B(e.elements.popper), d, g),
          O = $(_),
          L = me({ reference: O, element: A, strategy: "absolute", placement: o }),
          P = ue(Object.assign({}, A, L)),
          D = y === f ? P : O,
          N = { top: k.top - D.top + T.top, bottom: D.bottom - k.bottom + T.bottom, left: k.left - D.left + T.left, right: D.right - k.right + T.right },
          z = e.modifiersData.offset;
        if (y === f && z) {
          var I = z[o];
          Object.keys(N).forEach(function (e) {
            var t = [a, r].indexOf(e) >= 0 ? 1 : -1,
              n = [i, r].indexOf(e) >= 0 ? "y" : "x";
            N[e] += I[n] * t;
          });
        }
        return N;
      }
      const ve = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            d = e.name;
          if (!t.modifiersData[d]._skip) {
            for (
              var u = n.mainAxis,
                p = void 0 === u || u,
                f = n.altAxis,
                h = void 0 === f || f,
                v = n.fallbackPlacements,
                y = n.padding,
                b = n.boundary,
                w = n.rootBoundary,
                x = n.altBoundary,
                E = n.flipVariations,
                T = void 0 === E || E,
                C = n.allowedAutoPlacements,
                _ = t.options.placement,
                A = D(_),
                S =
                  v ||
                  (A === _ || !T
                    ? [ie(_)]
                    : (function (e) {
                        if (D(e) === o) return [];
                        var t = ie(e);
                        return [ae(e), t, ae(t)];
                      })(_)),
                k = [_].concat(S).reduce(function (e, n) {
                  return e.concat(
                    D(n) === o
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            i = n.placement,
                            r = n.boundary,
                            a = n.rootBoundary,
                            s = n.padding,
                            o = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            d = void 0 === c ? g : c,
                            u = he(i),
                            p = u
                              ? o
                                ? m
                                : m.filter(function (e) {
                                    return he(e) === u;
                                  })
                              : l,
                            f = p.filter(function (e) {
                              return d.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = p);
                          var h = f.reduce(function (t, n) {
                            return (t[n] = ge(e, { placement: n, boundary: r, rootBoundary: a, padding: s })[D(n)]), t;
                          }, {});
                          return Object.keys(h).sort(function (e, t) {
                            return h[e] - h[t];
                          });
                        })(t, { placement: n, boundary: b, rootBoundary: w, padding: y, flipVariations: T, allowedAutoPlacements: C })
                      : n
                  );
                }, []),
                M = t.rects.reference,
                O = t.rects.popper,
                L = new Map(),
                P = !0,
                $ = k[0],
                N = 0;
              N < k.length;
              N++
            ) {
              var z = k[N],
                I = D(z),
                j = he(z) === c,
                B = [i, r].indexOf(I) >= 0,
                H = B ? "width" : "height",
                R = ge(t, { placement: z, boundary: b, rootBoundary: w, altBoundary: x, padding: y }),
                q = B ? (j ? a : s) : j ? r : i;
              M[H] > O[H] && (q = ie(q));
              var W = ie(q),
                G = [];
              if (
                (p && G.push(R[I] <= 0),
                h && G.push(R[q] <= 0, R[W] <= 0),
                G.every(function (e) {
                  return e;
                }))
              ) {
                ($ = z), (P = !1);
                break;
              }
              L.set(z, G);
            }
            if (P)
              for (
                var Y = function (e) {
                    var t = k.find(function (t) {
                      var n = L.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return ($ = t), "break";
                  },
                  F = T ? 3 : 1;
                F > 0;
                F--
              ) {
                if ("break" === Y(F)) break;
              }
            t.placement !== $ && ((t.modifiersData[d]._skip = !0), (t.placement = $), (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function ye(e, t, n) {
        return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
      }
      function be(e) {
        return [i, a, r, s].some(function (t) {
          return e[t] >= 0;
        });
      }
      const we = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            i = t.rects.reference,
            r = t.rects.popper,
            a = t.modifiersData.preventOverflow,
            s = ge(t, { elementContext: "reference" }),
            o = ge(t, { altBoundary: !0 }),
            l = ye(s, i),
            c = ye(o, r, a),
            d = be(l),
            u = be(c);
          (t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: u }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": u }));
        },
      };
      const xe = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            l = void 0 === o ? [0, 0] : o,
            c = g.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = D(e),
                    o = [s, i].indexOf(r) >= 0 ? -1 : 1,
                    l = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                    c = l[0],
                    d = l[1];
                  return (c = c || 0), (d = (d || 0) * o), [s, a].indexOf(r) >= 0 ? { x: d, y: c } : { x: c, y: d };
                })(n, t.rects, l)),
                e
              );
            }, {}),
            d = c[t.placement],
            u = d.x,
            p = d.y;
          null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += p)), (t.modifiersData[r] = c);
        },
      };
      const Ee = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = me({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
        },
        data: {},
      };
      const Te = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            o = e.name,
            l = n.mainAxis,
            d = void 0 === l || l,
            u = n.altAxis,
            p = void 0 !== u && u,
            f = n.boundary,
            h = n.rootBoundary,
            m = n.altBoundary,
            g = n.padding,
            v = n.tether,
            y = void 0 === v || v,
            b = n.tetherOffset,
            w = void 0 === b ? 0 : b,
            x = ge(t, { boundary: f, rootBoundary: h, padding: g, altBoundary: m }),
            E = D(t.placement),
            T = he(t.placement),
            C = !T,
            _ = W(E),
            A = "x" === _ ? "y" : "x",
            S = t.modifiersData.popperOffsets,
            k = t.rects.reference,
            M = t.rects.popper,
            O = "function" == typeof w ? w(Object.assign({}, t.rects, { placement: t.placement })) : w,
            L = { x: 0, y: 0 };
          if (S) {
            if (d || p) {
              var P = "y" === _ ? i : s,
                $ = "y" === _ ? r : a,
                z = "y" === _ ? "height" : "width",
                I = S[_],
                j = S[_] + x[P],
                B = S[_] - x[$],
                H = y ? -M[z] / 2 : 0,
                R = T === c ? k[z] : M[z],
                F = T === c ? -M[z] : -k[z],
                V = t.elements.arrow,
                U = y && V ? N(V) : { width: 0, height: 0 },
                Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                K = Q[P],
                Z = Q[$],
                J = X(0, k[z], U[z]),
                ee = C ? k[z] / 2 - H - J - K - O : R - J - K - O,
                te = C ? -k[z] / 2 + H + J + Z + O : F + J + Z + O,
                ne = t.elements.arrow && q(t.elements.arrow),
                ie = ne ? ("y" === _ ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
                re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
                ae = S[_] + ee - re - ie,
                se = S[_] + te - re;
              if (d) {
                var oe = X(y ? Y(j, ae) : j, I, y ? G(B, se) : B);
                (S[_] = oe), (L[_] = oe - I);
              }
              if (p) {
                var le = "x" === _ ? i : s,
                  ce = "x" === _ ? r : a,
                  de = S[A],
                  ue = de + x[le],
                  pe = de - x[ce],
                  fe = X(y ? Y(ue, ae) : ue, de, y ? G(pe, se) : pe);
                (S[A] = fe), (L[A] = fe - de);
              }
            }
            t.modifiersData[o] = L;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Ce(e, t, n) {
        void 0 === n && (n = !1);
        var i,
          r,
          a = B(t),
          s = $(e),
          o = O(t),
          l = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (o || (!o && !n)) &&
            (("body" !== S(t) || le(a)) && (l = (i = t) !== k(i) && O(i) ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop } : se(i)), O(t) ? (((c = $(t)).x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = oe(a))),
          { x: s.left + l.scrollLeft - c.x, y: s.top + l.scrollTop - c.y, width: s.width, height: s.height }
        );
      }
      function _e(e) {
        var t = new Map(),
          n = new Set(),
          i = [];
        function r(e) {
          n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
              if (!n.has(e)) {
                var i = t.get(e);
                i && r(i);
              }
            }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || r(e);
          }),
          i
        );
      }
      var Ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Se() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function ke(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          i = void 0 === n ? [] : n,
          r = t.defaultOptions,
          a = void 0 === r ? Ae : r;
        return function (e, t, n) {
          void 0 === n && (n = a);
          var r,
            s,
            o = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ae, a), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
            l = [],
            c = !1,
            d = {
              state: o,
              setOptions: function (n) {
                u(), (o.options = Object.assign({}, a, o.options, n)), (o.scrollParents = { reference: M(e) ? de(e) : e.contextElement ? de(e.contextElement) : [], popper: de(t) });
                var r = (function (e) {
                  var t = _e(e);
                  return A.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t), e;
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(i, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = r.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      i = void 0 === n ? {} : n,
                      r = e.effect;
                    if ("function" == typeof r) {
                      var a = r({ state: o, name: t, instance: d, options: i }),
                        s = function () {};
                      l.push(a || s);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Se(t, n)) {
                    (o.rects = { reference: Ce(t, q(n), "fixed" === o.options.strategy), popper: N(n) }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign({}, e.data));
                      });
                    for (var i = 0; i < o.orderedModifiers.length; i++)
                      if (!0 !== o.reset) {
                        var r = o.orderedModifiers[i],
                          a = r.fn,
                          s = r.options,
                          l = void 0 === s ? {} : s,
                          u = r.name;
                        "function" == typeof a && (o = a({ state: o, options: l, name: u, instance: d }) || o);
                      } else (o.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(o);
                  });
                }),
                function () {
                  return (
                    s ||
                      (s = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (s = void 0), e(r());
                        });
                      })),
                    s
                  );
                }),
              destroy: function () {
                u(), (c = !0);
              },
            };
          if (!Se(e, t)) return d;
          function u() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var Me = ke(),
        Oe = ke({ defaultModifiers: [te, Ee, J, P, xe, ve, Te, Q, we] }),
        Le = ke({ defaultModifiers: [te, Ee, J, P] });
    },
    734: function (e, t, n) {
      e.exports = (function (e) {
        "use strict";
        function t(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    i.get
                      ? i
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        }
                  );
                }
              }),
            (t.default = e),
            Object.freeze(t)
          );
        }
        var n = t(e);
        const i = 3,
          r = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
            parents(e, t) {
              const n = [];
              let r = e.parentNode;
              for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== i; ) r.matches(t) && n.push(r), (r = r.parentNode);
              return n;
            },
            prev(e, t) {
              let n = e.previousElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.previousElementSibling;
              }
              return [];
            },
            next(e, t) {
              let n = e.nextElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.nextElementSibling;
              }
              return [];
            },
          },
          a = 1e6,
          s = 1e3,
          o = "transitionend",
          l = (e) =>
            null == e
              ? `${e}`
              : {}.toString
                  .call(e)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase(),
          c = (e) => {
            do {
              e += Math.floor(Math.random() * a);
            } while (document.getElementById(e));
            return e;
          },
          d = (e) => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
              let n = e.getAttribute("href");
              if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
              n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), (t = n && "#" !== n ? n.trim() : null);
            }
            return t;
          },
          u = (e) => {
            const t = d(e);
            return t && document.querySelector(t) ? t : null;
          },
          p = (e) => {
            const t = d(e);
            return t ? document.querySelector(t) : null;
          },
          f = (e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
            const i = Number.parseFloat(t),
              r = Number.parseFloat(n);
            return i || r ? ((t = t.split(",")[0]), (n = n.split(",")[0]), (Number.parseFloat(t) + Number.parseFloat(n)) * s) : 0;
          },
          h = (e) => {
            e.dispatchEvent(new Event(o));
          },
          m = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
          g = (e) => (m(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? r.findOne(e) : null),
          v = (e, t, n) => {
            Object.keys(n).forEach((i) => {
              const r = n[i],
                a = t[i],
                s = a && m(a) ? "element" : l(a);
              if (!new RegExp(r).test(s)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`);
            });
          },
          y = (e) => !(!m(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
          b = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
          w = (e) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              const t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? w(e.parentNode) : null;
          },
          x = () => {},
          E = (e) => e.offsetHeight,
          T = () => {
            const { jQuery: e } = window;
            return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
          },
          C = [],
          _ = (e) => {
            "loading" === document.readyState
              ? (C.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    C.forEach((e) => e());
                  }),
                C.push(e))
              : e();
          },
          A = () => "rtl" === document.documentElement.dir,
          S = (e) => {
            _(() => {
              const t = T();
              if (t) {
                const n = e.NAME,
                  i = t.fn[n];
                (t.fn[n] = e.jQueryInterface), (t.fn[n].Constructor = e), (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
              }
            });
          },
          k = (e) => {
            "function" == typeof e && e();
          },
          M = (e, t, n = !0) => {
            if (!n) return void k(e);
            const i = 5,
              r = f(t) + i;
            let a = !1;
            const s = ({ target: n }) => {
              n === t && ((a = !0), t.removeEventListener(o, s), k(e));
            };
            t.addEventListener(o, s),
              setTimeout(() => {
                a || h(t);
              }, r);
          },
          O = (e, t, n, i) => {
            let r = e.indexOf(t);
            if (-1 === r) return e[!n && i ? e.length - 1 : 0];
            const a = e.length;
            return (r += n ? 1 : -1), i && (r = (r + a) % a), e[Math.max(0, Math.min(r, a - 1))];
          },
          L = /[^.]*(?=\..*)\.|.*/,
          P = /\..*/,
          D = /::\d+$/,
          $ = {};
        let N = 1;
        const z = { mouseenter: "mouseover", mouseleave: "mouseout" },
          I = /^(mouseenter|mouseleave)/i,
          j = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
          ]);
        function B(e, t) {
          return (t && `${t}::${N++}`) || e.uidEvent || N++;
        }
        function H(e) {
          const t = B(e);
          return (e.uidEvent = t), ($[t] = $[t] || {}), $[t];
        }
        function R(e, t) {
          return function n(i) {
            return (i.delegateTarget = e), n.oneOff && U.off(e, i.type, t), t.apply(e, [i]);
          };
        }
        function q(e, t, n) {
          return function i(r) {
            const a = e.querySelectorAll(t);
            for (let { target: s } = r; s && s !== this; s = s.parentNode) for (let o = a.length; o--; ) if (a[o] === s) return (r.delegateTarget = s), i.oneOff && U.off(e, r.type, t, n), n.apply(s, [r]);
            return null;
          };
        }
        function W(e, t, n = null) {
          const i = Object.keys(e);
          for (let r = 0, a = i.length; r < a; r++) {
            const a = e[i[r]];
            if (a.originalHandler === t && a.delegationSelector === n) return a;
          }
          return null;
        }
        function G(e, t, n) {
          const i = "string" == typeof t,
            r = i ? n : t;
          let a = V(e);
          return j.has(a) || (a = e), [i, r, a];
        }
        function Y(e, t, n, i, r) {
          if ("string" != typeof t || !e) return;
          if ((n || ((n = i), (i = null)), I.test(t))) {
            const e = (e) =>
              function (t) {
                if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
              };
            i ? (i = e(i)) : (n = e(n));
          }
          const [a, s, o] = G(t, n, i),
            l = H(e),
            c = l[o] || (l[o] = {}),
            d = W(c, s, a ? n : null);
          if (d) return void (d.oneOff = d.oneOff && r);
          const u = B(s, t.replace(L, "")),
            p = a ? q(e, n, i) : R(e, n);
          (p.delegationSelector = a ? n : null), (p.originalHandler = s), (p.oneOff = r), (p.uidEvent = u), (c[u] = p), e.addEventListener(o, p, a);
        }
        function F(e, t, n, i, r) {
          const a = W(t[n], i, r);
          a && (e.removeEventListener(n, a, Boolean(r)), delete t[n][a.uidEvent]);
        }
        function X(e, t, n, i) {
          const r = t[n] || {};
          Object.keys(r).forEach((a) => {
            if (a.includes(i)) {
              const i = r[a];
              F(e, t, n, i.originalHandler, i.delegationSelector);
            }
          });
        }
        function V(e) {
          return (e = e.replace(P, "")), z[e] || e;
        }
        const U = {
            on(e, t, n, i) {
              Y(e, t, n, i, !1);
            },
            one(e, t, n, i) {
              Y(e, t, n, i, !0);
            },
            off(e, t, n, i) {
              if ("string" != typeof t || !e) return;
              const [r, a, s] = G(t, n, i),
                o = s !== t,
                l = H(e),
                c = t.startsWith(".");
              if (void 0 !== a) {
                if (!l || !l[s]) return;
                return void F(e, l, s, a, r ? n : null);
              }
              c &&
                Object.keys(l).forEach((n) => {
                  X(e, l, n, t.slice(1));
                });
              const d = l[s] || {};
              Object.keys(d).forEach((n) => {
                const i = n.replace(D, "");
                if (!o || t.includes(i)) {
                  const t = d[n];
                  F(e, l, s, t.originalHandler, t.delegationSelector);
                }
              });
            },
            trigger(e, t, n) {
              if ("string" != typeof t || !e) return null;
              const i = T(),
                r = V(t),
                a = t !== r,
                s = j.has(r);
              let o,
                l = !0,
                c = !0,
                d = !1,
                u = null;
              return (
                a && i && ((o = i.Event(t, n)), i(e).trigger(o), (l = !o.isPropagationStopped()), (c = !o.isImmediatePropagationStopped()), (d = o.isDefaultPrevented())),
                s ? ((u = document.createEvent("HTMLEvents")), u.initEvent(r, l, !0)) : (u = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                void 0 !== n &&
                  Object.keys(n).forEach((e) => {
                    Object.defineProperty(u, e, { get: () => n[e] });
                  }),
                d && u.preventDefault(),
                c && e.dispatchEvent(u),
                u.defaultPrevented && void 0 !== o && o.preventDefault(),
                u
              );
            },
          },
          Q = new Map();
        var K = {
          set(e, t, n) {
            Q.has(e) || Q.set(e, new Map());
            const i = Q.get(e);
            i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
          },
          get: (e, t) => (Q.has(e) && Q.get(e).get(t)) || null,
          remove(e, t) {
            if (!Q.has(e)) return;
            const n = Q.get(e);
            n.delete(t), 0 === n.size && Q.delete(e);
          },
        };
        const Z = "5.0.2";
        class J {
          constructor(e) {
            (e = g(e)) && ((this._element = e), K.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            K.remove(this._element, this.constructor.DATA_KEY),
              U.off(this._element, this.constructor.EVENT_KEY),
              Object.getOwnPropertyNames(this).forEach((e) => {
                this[e] = null;
              });
          }
          _queueCallback(e, t, n = !0) {
            M(e, t, n);
          }
          static getInstance(e) {
            return K.get(e, this.DATA_KEY);
          }
          static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
          }
          static get VERSION() {
            return Z;
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
        }
        const ee = "alert",
          te = ".bs.alert",
          ne = '[data-bs-dismiss="alert"]',
          ie = `close${te}`,
          re = `closed${te}`,
          ae = `click${te}.data-api`,
          se = "alert",
          oe = "fade",
          le = "show";
        class ce extends J {
          static get NAME() {
            return ee;
          }
          close(e) {
            const t = e ? this._getRootElement(e) : this._element,
              n = this._triggerCloseEvent(t);
            null === n || n.defaultPrevented || this._removeElement(t);
          }
          _getRootElement(e) {
            return p(e) || e.closest(`.${se}`);
          }
          _triggerCloseEvent(e) {
            return U.trigger(e, ie);
          }
          _removeElement(e) {
            e.classList.remove(le);
            const t = e.classList.contains(oe);
            this._queueCallback(() => this._destroyElement(e), e, t);
          }
          _destroyElement(e) {
            e.remove(), U.trigger(e, re);
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = ce.getOrCreateInstance(this);
              "close" === e && t[e](this);
            });
          }
          static handleDismiss(e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }
        }
        U.on(document, ae, ne, ce.handleDismiss(new ce())), S(ce);
        const de = "button",
          ue = "active",
          pe = '[data-bs-toggle="button"]',
          fe = "click.bs.button.data-api";
        class he extends J {
          static get NAME() {
            return de;
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(ue));
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = he.getOrCreateInstance(this);
              "toggle" === e && t[e]();
            });
          }
        }
        function me(e) {
          return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
        }
        function ge(e) {
          return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        U.on(document, fe, pe, (e) => {
          e.preventDefault();
          const t = e.target.closest(pe);
          he.getOrCreateInstance(t).toggle();
        }),
          S(he);
        const ve = {
            setDataAttribute(e, t, n) {
              e.setAttribute(`data-bs-${ge(t)}`, n);
            },
            removeDataAttribute(e, t) {
              e.removeAttribute(`data-bs-${ge(t)}`);
            },
            getDataAttributes(e) {
              if (!e) return {};
              const t = {};
              return (
                Object.keys(e.dataset)
                  .filter((e) => e.startsWith("bs"))
                  .forEach((n) => {
                    let i = n.replace(/^bs/, "");
                    (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = me(e.dataset[n]));
                  }),
                t
              );
            },
            getDataAttribute: (e, t) => me(e.getAttribute(`data-bs-${ge(t)}`)),
            offset(e) {
              const t = e.getBoundingClientRect();
              return { top: t.top + document.body.scrollTop, left: t.left + document.body.scrollLeft };
            },
            position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
          },
          ye = "carousel",
          be = ".bs.carousel",
          we = ".data-api",
          xe = 500,
          Ee = 40,
          Te = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
          Ce = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
          _e = "next",
          Ae = "prev",
          Se = "left",
          ke = "right",
          Me = { ArrowLeft: ke, ArrowRight: Se },
          Oe = `slide${be}`,
          Le = `slid${be}`,
          Pe = `keydown${be}`,
          De = `mouseenter${be}`,
          $e = `mouseleave${be}`,
          Ne = `touchstart${be}`,
          ze = `touchmove${be}`,
          Ie = `touchend${be}`,
          je = `pointerdown${be}`,
          Be = `pointerup${be}`,
          He = `dragstart${be}`,
          Re = `load${be}${we}`,
          qe = `click${be}${we}`,
          We = "carousel",
          Ge = "active",
          Ye = "slide",
          Fe = "carousel-item-end",
          Xe = "carousel-item-start",
          Ve = "carousel-item-next",
          Ue = "carousel-item-prev",
          Qe = "pointer-event",
          Ke = ".active",
          Ze = ".active.carousel-item",
          Je = ".carousel-item",
          et = ".carousel-item img",
          tt = ".carousel-item-next, .carousel-item-prev",
          nt = ".carousel-indicators",
          it = "[data-bs-target]",
          rt = "[data-bs-slide], [data-bs-slide-to]",
          at = '[data-bs-ride="carousel"]',
          st = "touch",
          ot = "pen";
        class lt extends J {
          constructor(e, t) {
            super(e),
              (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(t)),
              (this._indicatorsElement = r.findOne(nt, this._element)),
              (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(window.PointerEvent)),
              this._addEventListeners();
          }
          static get Default() {
            return Te;
          }
          static get NAME() {
            return ye;
          }
          next() {
            this._slide(_e);
          }
          nextWhenVisible() {
            !document.hidden && y(this._element) && this.next();
          }
          prev() {
            this._slide(Ae);
          }
          pause(e) {
            e || (this._isPaused = !0), r.findOne(tt, this._element) && (h(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
          }
          cycle(e) {
            e || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
          }
          to(e) {
            this._activeElement = r.findOne(Ze, this._element);
            const t = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void U.one(this._element, Le, () => this.to(e));
            if (t === e) return this.pause(), void this.cycle();
            const n = e > t ? _e : Ae;
            this._slide(n, this._items[e]);
          }
          _getConfig(e) {
            return (e = { ...Te, ...ve.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), v(ye, e, Ce), e;
          }
          _handleSwipe() {
            const e = Math.abs(this.touchDeltaX);
            if (e <= Ee) return;
            const t = e / this.touchDeltaX;
            (this.touchDeltaX = 0), t && this._slide(t > 0 ? ke : Se);
          }
          _addEventListeners() {
            this._config.keyboard && U.on(this._element, Pe, (e) => this._keydown(e)),
              "hover" === this._config.pause && (U.on(this._element, De, (e) => this.pause(e)), U.on(this._element, $e, (e) => this.cycle(e))),
              this._config.touch && this._touchSupported && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            const e = (e) => {
                !this._pointerEvent || (e.pointerType !== ot && e.pointerType !== st) ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX) : (this.touchStartX = e.clientX);
              },
              t = (e) => {
                this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
              },
              n = (e) => {
                !this._pointerEvent || (e.pointerType !== ot && e.pointerType !== st) || (this.touchDeltaX = e.clientX - this.touchStartX),
                  this._handleSwipe(),
                  "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((e) => this.cycle(e), xe + this._config.interval)));
              };
            r.find(et, this._element).forEach((e) => {
              U.on(e, He, (e) => e.preventDefault());
            }),
              this._pointerEvent
                ? (U.on(this._element, je, (t) => e(t)), U.on(this._element, Be, (e) => n(e)), this._element.classList.add(Qe))
                : (U.on(this._element, Ne, (t) => e(t)), U.on(this._element, ze, (e) => t(e)), U.on(this._element, Ie, (e) => n(e)));
          }
          _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = Me[e.key];
            t && (e.preventDefault(), this._slide(t));
          }
          _getItemIndex(e) {
            return (this._items = e && e.parentNode ? r.find(Je, e.parentNode) : []), this._items.indexOf(e);
          }
          _getItemByOrder(e, t) {
            const n = e === _e;
            return O(this._items, t, n, this._config.wrap);
          }
          _triggerSlideEvent(e, t) {
            const n = this._getItemIndex(e),
              i = this._getItemIndex(r.findOne(Ze, this._element));
            return U.trigger(this._element, Oe, { relatedTarget: e, direction: t, from: i, to: n });
          }
          _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
              const t = r.findOne(Ke, this._indicatorsElement);
              t.classList.remove(Ge), t.removeAttribute("aria-current");
              const n = r.find(it, this._indicatorsElement);
              for (let t = 0; t < n.length; t++)
                if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                  n[t].classList.add(Ge), n[t].setAttribute("aria-current", "true");
                  break;
                }
            }
          }
          _updateInterval() {
            const e = this._activeElement || r.findOne(Ze, this._element);
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
          }
          _slide(e, t) {
            const n = this._directionToOrder(e),
              i = r.findOne(Ze, this._element),
              a = this._getItemIndex(i),
              s = t || this._getItemByOrder(n, i),
              o = this._getItemIndex(s),
              l = Boolean(this._interval),
              c = n === _e,
              d = c ? Xe : Fe,
              u = c ? Ve : Ue,
              p = this._orderToDirection(n);
            if (s && s.classList.contains(Ge)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(s, p).defaultPrevented) return;
            if (!i || !s) return;
            (this._isSliding = !0), l && this.pause(), this._setActiveIndicatorElement(s), (this._activeElement = s);
            const f = () => {
              U.trigger(this._element, Le, { relatedTarget: s, direction: p, from: a, to: o });
            };
            if (this._element.classList.contains(Ye)) {
              s.classList.add(u), E(s), i.classList.add(d), s.classList.add(d);
              const e = () => {
                s.classList.remove(d, u), s.classList.add(Ge), i.classList.remove(Ge, u, d), (this._isSliding = !1), setTimeout(f, 0);
              };
              this._queueCallback(e, i, !0);
            } else i.classList.remove(Ge), s.classList.add(Ge), (this._isSliding = !1), f();
            l && this.cycle();
          }
          _directionToOrder(e) {
            return [ke, Se].includes(e) ? (A() ? (e === Se ? Ae : _e) : e === Se ? _e : Ae) : e;
          }
          _orderToDirection(e) {
            return [_e, Ae].includes(e) ? (A() ? (e === Ae ? Se : ke) : e === Ae ? ke : Se) : e;
          }
          static carouselInterface(e, t) {
            const n = lt.getOrCreateInstance(e, t);
            let { _config: i } = n;
            "object" == typeof t && (i = { ...i, ...t });
            const r = "string" == typeof t ? t : i.slide;
            if ("number" == typeof t) n.to(t);
            else if ("string" == typeof r) {
              if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
              n[r]();
            } else i.interval && i.ride && (n.pause(), n.cycle());
          }
          static jQueryInterface(e) {
            return this.each(function () {
              lt.carouselInterface(this, e);
            });
          }
          static dataApiClickHandler(e) {
            const t = p(this);
            if (!t || !t.classList.contains(We)) return;
            const n = { ...ve.getDataAttributes(t), ...ve.getDataAttributes(this) },
              i = this.getAttribute("data-bs-slide-to");
            i && (n.interval = !1), lt.carouselInterface(t, n), i && lt.getInstance(t).to(i), e.preventDefault();
          }
        }
        U.on(document, qe, rt, lt.dataApiClickHandler),
          U.on(window, Re, () => {
            const e = r.find(at);
            for (let t = 0, n = e.length; t < n; t++) lt.carouselInterface(e[t], lt.getInstance(e[t]));
          }),
          S(lt);
        const ct = "collapse",
          dt = "bs.collapse",
          ut = `.${dt}`,
          pt = { toggle: !0, parent: "" },
          ft = { toggle: "boolean", parent: "(string|element)" },
          ht = `show${ut}`,
          mt = `shown${ut}`,
          gt = `hide${ut}`,
          vt = `hidden${ut}`,
          yt = `click${ut}.data-api`,
          bt = "show",
          wt = "collapse",
          xt = "collapsing",
          Et = "collapsed",
          Tt = "width",
          Ct = "height",
          _t = ".show, .collapsing",
          At = '[data-bs-toggle="collapse"]';
        class St extends J {
          constructor(e, t) {
            super(e), (this._isTransitioning = !1), (this._config = this._getConfig(t)), (this._triggerArray = r.find(`${At}[href="#${this._element.id}"],${At}[data-bs-target="#${this._element.id}"]`));
            const n = r.find(At);
            for (let e = 0, t = n.length; e < t; e++) {
              const t = n[e],
                i = u(t),
                a = r.find(i).filter((e) => e === this._element);
              null !== i && a.length && ((this._selector = i), this._triggerArray.push(t));
            }
            (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          static get Default() {
            return pt;
          }
          static get NAME() {
            return ct;
          }
          toggle() {
            this._element.classList.contains(bt) ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._element.classList.contains(bt)) return;
            let e, t;
            this._parent && ((e = r.find(_t, this._parent).filter((e) => ("string" == typeof this._config.parent ? e.getAttribute("data-bs-parent") === this._config.parent : e.classList.contains(wt)))), 0 === e.length && (e = null));
            const n = r.findOne(this._selector);
            if (e) {
              const i = e.find((e) => n !== e);
              if (((t = i ? St.getInstance(i) : null), t && t._isTransitioning)) return;
            }
            if (U.trigger(this._element, ht).defaultPrevented) return;
            e &&
              e.forEach((e) => {
                n !== e && St.collapseInterface(e, "hide"), t || K.set(e, dt, null);
              });
            const i = this._getDimension();
            this._element.classList.remove(wt),
              this._element.classList.add(xt),
              (this._element.style[i] = 0),
              this._triggerArray.length &&
                this._triggerArray.forEach((e) => {
                  e.classList.remove(Et), e.setAttribute("aria-expanded", !0);
                }),
              this.setTransitioning(!0);
            const a = () => {
                this._element.classList.remove(xt), this._element.classList.add(wt, bt), (this._element.style[i] = ""), this.setTransitioning(!1), U.trigger(this._element, mt);
              },
              s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
            this._queueCallback(a, this._element, !0), (this._element.style[i] = `${this._element[s]}px`);
          }
          hide() {
            if (this._isTransitioning || !this._element.classList.contains(bt)) return;
            if (U.trigger(this._element, gt).defaultPrevented) return;
            const e = this._getDimension();
            (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), E(this._element), this._element.classList.add(xt), this._element.classList.remove(wt, bt);
            const t = this._triggerArray.length;
            if (t > 0)
              for (let e = 0; e < t; e++) {
                const t = this._triggerArray[e],
                  n = p(t);
                n && !n.classList.contains(bt) && (t.classList.add(Et), t.setAttribute("aria-expanded", !1));
              }
            this.setTransitioning(!0);
            const n = () => {
              this.setTransitioning(!1), this._element.classList.remove(xt), this._element.classList.add(wt), U.trigger(this._element, vt);
            };
            (this._element.style[e] = ""), this._queueCallback(n, this._element, !0);
          }
          setTransitioning(e) {
            this._isTransitioning = e;
          }
          _getConfig(e) {
            return ((e = { ...pt, ...e }).toggle = Boolean(e.toggle)), v(ct, e, ft), e;
          }
          _getDimension() {
            return this._element.classList.contains(Tt) ? Tt : Ct;
          }
          _getParent() {
            let { parent: e } = this._config;
            e = g(e);
            const t = `${At}[data-bs-parent="${e}"]`;
            return (
              r.find(t, e).forEach((e) => {
                const t = p(e);
                this._addAriaAndCollapsedClass(t, [e]);
              }),
              e
            );
          }
          _addAriaAndCollapsedClass(e, t) {
            if (!e || !t.length) return;
            const n = e.classList.contains(bt);
            t.forEach((e) => {
              n ? e.classList.remove(Et) : e.classList.add(Et), e.setAttribute("aria-expanded", n);
            });
          }
          static collapseInterface(e, t) {
            let n = St.getInstance(e);
            const i = { ...pt, ...ve.getDataAttributes(e), ...("object" == typeof t && t ? t : {}) };
            if ((!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new St(e, i)), "string" == typeof t)) {
              if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
              n[t]();
            }
          }
          static jQueryInterface(e) {
            return this.each(function () {
              St.collapseInterface(this, e);
            });
          }
        }
        U.on(document, yt, At, function (e) {
          ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
          const t = ve.getDataAttributes(this),
            n = u(this);
          r.find(n).forEach((e) => {
            const n = St.getInstance(e);
            let i;
            n ? (null === n._parent && "string" == typeof t.parent && ((n._config.parent = t.parent), (n._parent = n._getParent())), (i = "toggle")) : (i = t), St.collapseInterface(e, i);
          });
        }),
          S(St);
        const kt = "dropdown",
          Mt = ".bs.dropdown",
          Ot = ".data-api",
          Lt = "Escape",
          Pt = "Space",
          Dt = "Tab",
          $t = "ArrowUp",
          Nt = "ArrowDown",
          zt = 2,
          It = new RegExp(`${$t}|${Nt}|${Lt}`),
          jt = `hide${Mt}`,
          Bt = `hidden${Mt}`,
          Ht = `show${Mt}`,
          Rt = `shown${Mt}`,
          qt = `click${Mt}`,
          Wt = `click${Mt}${Ot}`,
          Gt = `keydown${Mt}${Ot}`,
          Yt = `keyup${Mt}${Ot}`,
          Ft = "show",
          Xt = "dropup",
          Vt = "dropend",
          Ut = "dropstart",
          Qt = "navbar",
          Kt = '[data-bs-toggle="dropdown"]',
          Zt = ".dropdown-menu",
          Jt = ".navbar-nav",
          en = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          tn = A() ? "top-end" : "top-start",
          nn = A() ? "top-start" : "top-end",
          rn = A() ? "bottom-end" : "bottom-start",
          an = A() ? "bottom-start" : "bottom-end",
          sn = A() ? "left-start" : "right-start",
          on = A() ? "right-start" : "left-start",
          ln = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
          cn = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class dn extends J {
          constructor(e, t) {
            super(e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
          }
          static get Default() {
            return ln;
          }
          static get DefaultType() {
            return cn;
          }
          static get NAME() {
            return kt;
          }
          toggle() {
            b(this._element) || (this._element.classList.contains(Ft) ? this.hide() : this.show());
          }
          show() {
            if (b(this._element) || this._menu.classList.contains(Ft)) return;
            const e = dn.getParentFromElement(this._element),
              t = { relatedTarget: this._element };
            if (!U.trigger(this._element, Ht, t).defaultPrevented) {
              if (this._inNavbar) ve.setDataAttribute(this._menu, "popper", "none");
              else {
                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let t = this._element;
                "parent" === this._config.reference ? (t = e) : m(this._config.reference) ? (t = g(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
                const i = this._getPopperConfig(),
                  r = i.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
                (this._popper = n.createPopper(t, this._menu, i)), r && ve.setDataAttribute(this._menu, "popper", "static");
              }
              "ontouchstart" in document.documentElement && !e.closest(Jt) && [].concat(...document.body.children).forEach((e) => U.on(e, "mouseover", x)),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.toggle(Ft),
                this._element.classList.toggle(Ft),
                U.trigger(this._element, Rt, t);
            }
          }
          hide() {
            if (b(this._element) || !this._menu.classList.contains(Ft)) return;
            const e = { relatedTarget: this._element };
            this._completeHide(e);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
          }
          _addEventListeners() {
            U.on(this._element, qt, (e) => {
              e.preventDefault(), this.toggle();
            });
          }
          _completeHide(e) {
            U.trigger(this._element, jt, e).defaultPrevented ||
              ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => U.off(e, "mouseover", x)),
              this._popper && this._popper.destroy(),
              this._menu.classList.remove(Ft),
              this._element.classList.remove(Ft),
              this._element.setAttribute("aria-expanded", "false"),
              ve.removeDataAttribute(this._menu, "popper"),
              U.trigger(this._element, Bt, e));
          }
          _getConfig(e) {
            if (
              ((e = { ...this.constructor.Default, ...ve.getDataAttributes(this._element), ...e }),
              v(kt, e, this.constructor.DefaultType),
              "object" == typeof e.reference && !m(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
            )
              throw new TypeError(`${kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e;
          }
          _getMenuElement() {
            return r.next(this._element, Zt)[0];
          }
          _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains(Vt)) return sn;
            if (e.classList.contains(Ut)) return on;
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains(Xt) ? (t ? nn : tn) : t ? an : rn;
          }
          _detectNavbar() {
            return null !== this._element.closest(`.${Qt}`);
          }
          _getOffset() {
            const { offset: e } = this._config;
            return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
          }
          _getPopperConfig() {
            const e = {
              placement: this._getPlacement(),
              modifiers: [
                { name: "preventOverflow", options: { boundary: this._config.boundary } },
                { name: "offset", options: { offset: this._getOffset() } },
              ],
            };
            return "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) };
          }
          _selectMenuItem({ key: e, target: t }) {
            const n = r.find(en, this._menu).filter(y);
            n.length && O(n, t, e === Nt, !n.includes(t)).focus();
          }
          static dropdownInterface(e, t) {
            const n = dn.getOrCreateInstance(e, t);
            if ("string" == typeof t) {
              if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
              n[t]();
            }
          }
          static jQueryInterface(e) {
            return this.each(function () {
              dn.dropdownInterface(this, e);
            });
          }
          static clearMenus(e) {
            if (e && (e.button === zt || ("keyup" === e.type && e.key !== Dt))) return;
            const t = r.find(Kt);
            for (let n = 0, i = t.length; n < i; n++) {
              const i = dn.getInstance(t[n]);
              if (!i || !1 === i._config.autoClose) continue;
              if (!i._element.classList.contains(Ft)) continue;
              const r = { relatedTarget: i._element };
              if (e) {
                const t = e.composedPath(),
                  n = t.includes(i._menu);
                if (t.includes(i._element) || ("inside" === i._config.autoClose && !n) || ("outside" === i._config.autoClose && n)) continue;
                if (i._menu.contains(e.target) && (("keyup" === e.type && e.key === Dt) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                "click" === e.type && (r.clickEvent = e);
              }
              i._completeHide(r);
            }
          }
          static getParentFromElement(e) {
            return p(e) || e.parentNode;
          }
          static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? e.key === Pt || (e.key !== Lt && ((e.key !== Nt && e.key !== $t) || e.target.closest(Zt))) : !It.test(e.key)) return;
            const t = this.classList.contains(Ft);
            if (!t && e.key === Lt) return;
            if ((e.preventDefault(), e.stopPropagation(), b(this))) return;
            const n = () => (this.matches(Kt) ? this : r.prev(this, Kt)[0]);
            return e.key === Lt ? (n().focus(), void dn.clearMenus()) : e.key === $t || e.key === Nt ? (t || n().click(), void dn.getInstance(n())._selectMenuItem(e)) : void ((t && e.key !== Pt) || dn.clearMenus());
          }
        }
        U.on(document, Gt, Kt, dn.dataApiKeydownHandler),
          U.on(document, Gt, Zt, dn.dataApiKeydownHandler),
          U.on(document, Wt, dn.clearMenus),
          U.on(document, Yt, dn.clearMenus),
          U.on(document, Wt, Kt, function (e) {
            e.preventDefault(), dn.dropdownInterface(this);
          }),
          S(dn);
        const un = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          pn = ".sticky-top";
        class fn {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e);
          }
          hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t) => t + e), this._setElementAttributes(un, "paddingRight", (t) => t + e), this._setElementAttributes(pn, "marginRight", (t) => t - e);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
          }
          _setElementAttributes(e, t, n) {
            const i = this.getWidth(),
              r = (e) => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                const r = window.getComputedStyle(e)[t];
                e.style[t] = `${n(Number.parseFloat(r))}px`;
              };
            this._applyManipulationCallback(e, r);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(un, "paddingRight"), this._resetElementAttributes(pn, "marginRight");
          }
          _saveInitialAttribute(e, t) {
            const n = e.style[t];
            n && ve.setDataAttribute(e, t, n);
          }
          _resetElementAttributes(e, t) {
            const n = (e) => {
              const n = ve.getDataAttribute(e, t);
              void 0 === n ? e.style.removeProperty(t) : (ve.removeDataAttribute(e, t), (e.style[t] = n));
            };
            this._applyManipulationCallback(e, n);
          }
          _applyManipulationCallback(e, t) {
            m(e) ? t(e) : r.find(e, this._element).forEach(t);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const hn = { isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
          mn = { isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
          gn = "backdrop",
          vn = "modal-backdrop",
          yn = "fade",
          bn = "show",
          wn = `mousedown.bs.${gn}`;
        class xn {
          constructor(e) {
            (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
          }
          show(e) {
            this._config.isVisible
              ? (this._append(),
                this._config.isAnimated && E(this._getElement()),
                this._getElement().classList.add(bn),
                this._emulateAnimation(() => {
                  k(e);
                }))
              : k(e);
          }
          hide(e) {
            this._config.isVisible
              ? (this._getElement().classList.remove(bn),
                this._emulateAnimation(() => {
                  this.dispose(), k(e);
                }))
              : k(e);
          }
          _getElement() {
            if (!this._element) {
              const e = document.createElement("div");
              (e.className = vn), this._config.isAnimated && e.classList.add(yn), (this._element = e);
            }
            return this._element;
          }
          _getConfig(e) {
            return ((e = { ...hn, ...("object" == typeof e ? e : {}) }).rootElement = g(e.rootElement)), v(gn, e, mn), e;
          }
          _append() {
            this._isAppended ||
              (this._config.rootElement.appendChild(this._getElement()),
              U.on(this._getElement(), wn, () => {
                k(this._config.clickCallback);
              }),
              (this._isAppended = !0));
          }
          dispose() {
            this._isAppended && (U.off(this._element, wn), this._element.remove(), (this._isAppended = !1));
          }
          _emulateAnimation(e) {
            M(e, this._getElement(), this._config.isAnimated);
          }
        }
        const En = "modal",
          Tn = ".bs.modal",
          Cn = "Escape",
          _n = { backdrop: !0, keyboard: !0, focus: !0 },
          An = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
          Sn = `hide${Tn}`,
          kn = `hidePrevented${Tn}`,
          Mn = `hidden${Tn}`,
          On = `show${Tn}`,
          Ln = `shown${Tn}`,
          Pn = `focusin${Tn}`,
          Dn = `resize${Tn}`,
          $n = `click.dismiss${Tn}`,
          Nn = `keydown.dismiss${Tn}`,
          zn = `mouseup.dismiss${Tn}`,
          In = `mousedown.dismiss${Tn}`,
          jn = `click${Tn}.data-api`,
          Bn = "modal-open",
          Hn = "fade",
          Rn = "show",
          qn = "modal-static",
          Wn = ".modal-dialog",
          Gn = ".modal-body",
          Yn = '[data-bs-toggle="modal"]',
          Fn = '[data-bs-dismiss="modal"]';
        class Xn extends J {
          constructor(e, t) {
            super(e),
              (this._config = this._getConfig(t)),
              (this._dialog = r.findOne(Wn, this._element)),
              (this._backdrop = this._initializeBackDrop()),
              (this._isShown = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollBar = new fn());
          }
          static get Default() {
            return _n;
          }
          static get NAME() {
            return En;
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
            this._isShown ||
              this._isTransitioning ||
              U.trigger(this._element, On, { relatedTarget: e }).defaultPrevented ||
              ((this._isShown = !0),
              this._isAnimated() && (this._isTransitioning = !0),
              this._scrollBar.hide(),
              document.body.classList.add(Bn),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              U.on(this._element, $n, Fn, (e) => this.hide(e)),
              U.on(this._dialog, In, () => {
                U.one(this._element, zn, (e) => {
                  e.target === this._element && (this._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(() => this._showElement(e)));
          }
          hide(e) {
            if ((e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(), !this._isShown || this._isTransitioning)) return;
            if (U.trigger(this._element, Sn).defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              U.off(document, Pn),
              this._element.classList.remove(Rn),
              U.off(this._element, $n),
              U.off(this._dialog, In),
              this._queueCallback(() => this._hideModal(), this._element, t);
          }
          dispose() {
            [window, this._dialog].forEach((e) => U.off(e, Tn)), this._backdrop.dispose(), super.dispose(), U.off(document, Pn);
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new xn({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _getConfig(e) {
            return (e = { ..._n, ...ve.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), v(En, e, An), e;
          }
          _showElement(e) {
            const t = this._isAnimated(),
              n = r.findOne(Gn, this._dialog);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              n && (n.scrollTop = 0),
              t && E(this._element),
              this._element.classList.add(Rn),
              this._config.focus && this._enforceFocus();
            const i = () => {
              this._config.focus && this._element.focus(), (this._isTransitioning = !1), U.trigger(this._element, Ln, { relatedTarget: e });
            };
            this._queueCallback(i, this._dialog, t);
          }
          _enforceFocus() {
            U.off(document, Pn),
              U.on(document, Pn, (e) => {
                document === e.target || this._element === e.target || this._element.contains(e.target) || this._element.focus();
              });
          }
          _setEscapeEvent() {
            this._isShown
              ? U.on(this._element, Nn, (e) => {
                  this._config.keyboard && e.key === Cn ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== Cn || this._triggerBackdropTransition();
                })
              : U.off(this._element, Nn);
          }
          _setResizeEvent() {
            this._isShown ? U.on(window, Dn, () => this._adjustDialog()) : U.off(window, Dn);
          }
          _hideModal() {
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._backdrop.hide(() => {
                document.body.classList.remove(Bn), this._resetAdjustments(), this._scrollBar.reset(), U.trigger(this._element, Mn);
              });
          }
          _showBackdrop(e) {
            U.on(this._element, $n, (e) => {
              this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }),
              this._backdrop.show(e);
          }
          _isAnimated() {
            return this._element.classList.contains(Hn);
          }
          _triggerBackdropTransition() {
            if (U.trigger(this._element, kn).defaultPrevented) return;
            const { classList: e, scrollHeight: t, style: n } = this._element,
              i = t > document.documentElement.clientHeight;
            (!i && "hidden" === n.overflowY) ||
              e.contains(qn) ||
              (i || (n.overflowY = "hidden"),
              e.add(qn),
              this._queueCallback(() => {
                e.remove(qn),
                  i ||
                    this._queueCallback(() => {
                      n.overflowY = "";
                    }, this._dialog);
              }, this._dialog),
              this._element.focus());
          }
          _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
              t = this._scrollBar.getWidth(),
              n = t > 0;
            ((!n && e && !A()) || (n && !e && A())) && (this._element.style.paddingLeft = `${t}px`), ((n && !e && !A()) || (!n && e && A())) && (this._element.style.paddingRight = `${t}px`);
          }
          _resetAdjustments() {
            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
          }
          static jQueryInterface(e, t) {
            return this.each(function () {
              const n = Xn.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                n[e](t);
              }
            });
          }
        }
        U.on(document, jn, Yn, function (e) {
          const t = p(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            U.one(t, On, (e) => {
              e.defaultPrevented ||
                U.one(t, Mn, () => {
                  y(this) && this.focus();
                });
            }),
            Xn.getOrCreateInstance(t).toggle(this);
        }),
          S(Xn);
        const Vn = "offcanvas",
          Un = ".bs.offcanvas",
          Qn = ".data-api",
          Kn = `load${Un}${Qn}`,
          Zn = "Escape",
          Jn = { backdrop: !0, keyboard: !0, scroll: !1 },
          ei = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
          ti = "show",
          ni = ".offcanvas.show",
          ii = `show${Un}`,
          ri = `shown${Un}`,
          ai = `hide${Un}`,
          si = `hidden${Un}`,
          oi = `focusin${Un}`,
          li = `click${Un}${Qn}`,
          ci = `click.dismiss${Un}`,
          di = `keydown.dismiss${Un}`,
          ui = '[data-bs-dismiss="offcanvas"]',
          pi = '[data-bs-toggle="offcanvas"]';
        class fi extends J {
          constructor(e, t) {
            super(e), (this._config = this._getConfig(t)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), this._addEventListeners();
          }
          static get NAME() {
            return Vn;
          }
          static get Default() {
            return Jn;
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
            if (this._isShown) return;
            if (U.trigger(this._element, ii, { relatedTarget: e }).defaultPrevented) return;
            (this._isShown = !0),
              (this._element.style.visibility = "visible"),
              this._backdrop.show(),
              this._config.scroll || (new fn().hide(), this._enforceFocusOnElement(this._element)),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              this._element.classList.add(ti);
            const t = () => {
              U.trigger(this._element, ri, { relatedTarget: e });
            };
            this._queueCallback(t, this._element, !0);
          }
          hide() {
            if (!this._isShown) return;
            if (U.trigger(this._element, ai).defaultPrevented) return;
            U.off(document, oi), this._element.blur(), (this._isShown = !1), this._element.classList.remove(ti), this._backdrop.hide();
            const e = () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new fn().reset(),
                U.trigger(this._element, si);
            };
            this._queueCallback(e, this._element, !0);
          }
          dispose() {
            this._backdrop.dispose(), super.dispose(), U.off(document, oi);
          }
          _getConfig(e) {
            return (e = { ...Jn, ...ve.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), v(Vn, e, ei), e;
          }
          _initializeBackDrop() {
            return new xn({ isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
          }
          _enforceFocusOnElement(e) {
            U.off(document, oi),
              U.on(document, oi, (t) => {
                document === t.target || e === t.target || e.contains(t.target) || e.focus();
              }),
              e.focus();
          }
          _addEventListeners() {
            U.on(this._element, ci, ui, () => this.hide()),
              U.on(this._element, di, (e) => {
                this._config.keyboard && e.key === Zn && this.hide();
              });
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = fi.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                t[e](this);
              }
            });
          }
        }
        U.on(document, li, pi, function (e) {
          const t = p(this);
          if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), b(this))) return;
          U.one(t, si, () => {
            y(this) && this.focus();
          });
          const n = r.findOne(ni);
          n && n !== t && fi.getInstance(n).hide(), fi.getOrCreateInstance(t).toggle(this);
        }),
          U.on(window, Kn, () => r.find(ni).forEach((e) => fi.getOrCreateInstance(e).show())),
          S(fi);
        const hi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          mi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
          gi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          vi = (e, t) => {
            const n = e.nodeName.toLowerCase();
            if (t.includes(n)) return !hi.has(n) || Boolean(mi.test(e.nodeValue) || gi.test(e.nodeValue));
            const i = t.filter((e) => e instanceof RegExp);
            for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
            return !1;
          },
          yi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          };
        function bi(e, t, n) {
          if (!e.length) return e;
          if (n && "function" == typeof n) return n(e);
          const i = new window.DOMParser().parseFromString(e, "text/html"),
            r = Object.keys(t),
            a = [].concat(...i.body.querySelectorAll("*"));
          for (let e = 0, n = a.length; e < n; e++) {
            const n = a[e],
              i = n.nodeName.toLowerCase();
            if (!r.includes(i)) {
              n.remove();
              continue;
            }
            const s = [].concat(...n.attributes),
              o = [].concat(t["*"] || [], t[i] || []);
            s.forEach((e) => {
              vi(e, o) || n.removeAttribute(e.nodeName);
            });
          }
          return i.body.innerHTML;
        }
        const wi = "tooltip",
          xi = ".bs.tooltip",
          Ei = "bs-tooltip",
          Ti = new RegExp(`(^|\\s)${Ei}\\S+`, "g"),
          Ci = new Set(["sanitize", "allowList", "sanitizeFn"]),
          _i = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
          },
          Ai = { AUTO: "auto", TOP: "top", RIGHT: A() ? "left" : "right", BOTTOM: "bottom", LEFT: A() ? "right" : "left" },
          Si = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: yi,
            popperConfig: null,
          },
          ki = {
            HIDE: `hide${xi}`,
            HIDDEN: `hidden${xi}`,
            SHOW: `show${xi}`,
            SHOWN: `shown${xi}`,
            INSERTED: `inserted${xi}`,
            CLICK: `click${xi}`,
            FOCUSIN: `focusin${xi}`,
            FOCUSOUT: `focusout${xi}`,
            MOUSEENTER: `mouseenter${xi}`,
            MOUSELEAVE: `mouseleave${xi}`,
          },
          Mi = "fade",
          Oi = "modal",
          Li = "show",
          Pi = "show",
          Di = "out",
          $i = ".tooltip-inner",
          Ni = "hover",
          zi = "focus",
          Ii = "click",
          ji = "manual";
        class Bi extends J {
          constructor(e, t) {
            if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(t)), (this.tip = null), this._setListeners();
          }
          static get Default() {
            return Si;
          }
          static get NAME() {
            return wi;
          }
          static get Event() {
            return ki;
          }
          static get DefaultType() {
            return _i;
          }
          enable() {
            this._isEnabled = !0;
          }
          disable() {
            this._isEnabled = !1;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(e) {
            if (this._isEnabled)
              if (e) {
                const t = this._initializeOnDelegatedTarget(e);
                (t._activeTrigger.click = !t._activeTrigger.click), t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
              } else {
                if (this.getTipElement().classList.contains(Li)) return void this._leave(null, this);
                this._enter(null, this);
              }
          }
          dispose() {
            clearTimeout(this._timeout), U.off(this._element.closest(`.${Oi}`), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = U.trigger(this._element, this.constructor.Event.SHOW),
              t = w(this._element),
              i = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
            if (e.defaultPrevented || !i) return;
            const r = this.getTipElement(),
              a = c(this.constructor.NAME);
            r.setAttribute("id", a), this._element.setAttribute("aria-describedby", a), this.setContent(), this._config.animation && r.classList.add(Mi);
            const s = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement,
              o = this._getAttachment(s);
            this._addAttachmentClass(o);
            const { container: l } = this._config;
            K.set(r, this.constructor.DATA_KEY, this),
              this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(r), U.trigger(this._element, this.constructor.Event.INSERTED)),
              this._popper ? this._popper.update() : (this._popper = n.createPopper(this._element, r, this._getPopperConfig(o))),
              r.classList.add(Li);
            const d = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            d && r.classList.add(...d.split(" ")),
              "ontouchstart" in document.documentElement &&
                [].concat(...document.body.children).forEach((e) => {
                  U.on(e, "mouseover", x);
                });
            const u = () => {
                const e = this._hoverState;
                (this._hoverState = null), U.trigger(this._element, this.constructor.Event.SHOWN), e === Di && this._leave(null, this);
              },
              p = this.tip.classList.contains(Mi);
            this._queueCallback(u, this.tip, p);
          }
          hide() {
            if (!this._popper) return;
            const e = this.getTipElement(),
              t = () => {
                this._isWithActiveTrigger() ||
                  (this._hoverState !== Pi && e.remove(),
                  this._cleanTipClass(),
                  this._element.removeAttribute("aria-describedby"),
                  U.trigger(this._element, this.constructor.Event.HIDDEN),
                  this._popper && (this._popper.destroy(), (this._popper = null)));
              };
            if (U.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            e.classList.remove(Li),
              "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => U.off(e, "mouseover", x)),
              (this._activeTrigger[Ii] = !1),
              (this._activeTrigger[zi] = !1),
              (this._activeTrigger[Ni] = !1);
            const n = this.tip.classList.contains(Mi);
            this._queueCallback(t, this.tip, n), (this._hoverState = "");
          }
          update() {
            null !== this._popper && this._popper.update();
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div");
            return (e.innerHTML = this._config.template), (this.tip = e.children[0]), this.tip;
          }
          setContent() {
            const e = this.getTipElement();
            this.setElementContent(r.findOne($i, e), this.getTitle()), e.classList.remove(Mi, Li);
          }
          setElementContent(e, t) {
            if (null !== e)
              return m(t)
                ? ((t = g(t)), void (this._config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t)) : (e.textContent = t.textContent)))
                : void (this._config.html ? (this._config.sanitize && (t = bi(t, this._config.allowList, this._config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
          }
          getTitle() {
            let e = this._element.getAttribute("data-bs-original-title");
            return e || (e = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), e;
          }
          updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e;
          }
          _initializeOnDelegatedTarget(e, t) {
            const n = this.constructor.DATA_KEY;
            return (t = t || K.get(e.delegateTarget, n)) || ((t = new this.constructor(e.delegateTarget, this._getDelegateConfig())), K.set(e.delegateTarget, n, t)), t;
          }
          _getOffset() {
            const { offset: e } = this._config;
            return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
          }
          _getPopperConfig(e) {
            const t = {
              placement: e,
              modifiers: [
                { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                { name: "offset", options: { offset: this._getOffset() } },
                { name: "preventOverflow", options: { boundary: this._config.boundary } },
                { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                { name: "onChange", enabled: !0, phase: "afterWrite", fn: (e) => this._handlePopperPlacementChange(e) },
              ],
              onFirstUpdate: (e) => {
                e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
              },
            };
            return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
          }
          _addAttachmentClass(e) {
            this.getTipElement().classList.add(`${Ei}-${this.updateAttachment(e)}`);
          }
          _getAttachment(e) {
            return Ai[e.toUpperCase()];
          }
          _setListeners() {
            this._config.trigger.split(" ").forEach((e) => {
              if ("click" === e) U.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) => this.toggle(e));
              else if (e !== ji) {
                const t = e === Ni ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                  n = e === Ni ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                U.on(this._element, t, this._config.selector, (e) => this._enter(e)), U.on(this._element, n, this._config.selector, (e) => this._leave(e));
              }
            }),
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
              U.on(this._element.closest(`.${Oi}`), "hide.bs.modal", this._hideModalHandler),
              this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
          }
          _fixTitle() {
            const e = this._element.getAttribute("title"),
              t = typeof this._element.getAttribute("data-bs-original-title");
            (e || "string" !== t) &&
              (this._element.setAttribute("data-bs-original-title", e || ""),
              !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
              this._element.setAttribute("title", ""));
          }
          _enter(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
              e && (t._activeTrigger["focusin" === e.type ? zi : Ni] = !0),
              t.getTipElement().classList.contains(Li) || t._hoverState === Pi
                ? (t._hoverState = Pi)
                : (clearTimeout(t._timeout),
                  (t._hoverState = Pi),
                  t._config.delay && t._config.delay.show
                    ? (t._timeout = setTimeout(() => {
                        t._hoverState === Pi && t.show();
                      }, t._config.delay.show))
                    : t.show());
          }
          _leave(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
              e && (t._activeTrigger["focusout" === e.type ? zi : Ni] = t._element.contains(e.relatedTarget)),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = Di),
                t._config.delay && t._config.delay.hide
                  ? (t._timeout = setTimeout(() => {
                      t._hoverState === Di && t.hide();
                    }, t._config.delay.hide))
                  : t.hide());
          }
          _isWithActiveTrigger() {
            for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
            return !1;
          }
          _getConfig(e) {
            const t = ve.getDataAttributes(this._element);
            return (
              Object.keys(t).forEach((e) => {
                Ci.has(e) && delete t[e];
              }),
              ((e = { ...this.constructor.Default, ...t, ...("object" == typeof e && e ? e : {}) }).container = !1 === e.container ? document.body : g(e.container)),
              "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content && (e.content = e.content.toString()),
              v(wi, e, this.constructor.DefaultType),
              e.sanitize && (e.template = bi(e.template, e.allowList, e.sanitizeFn)),
              e
            );
          }
          _getDelegateConfig() {
            const e = {};
            if (this._config) for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e;
          }
          _cleanTipClass() {
            const e = this.getTipElement(),
              t = e.getAttribute("class").match(Ti);
            null !== t && t.length > 0 && t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
          }
          _handlePopperPlacementChange(e) {
            const { state: t } = e;
            t && ((this.tip = t.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = Bi.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        S(Bi);
        const Hi = "popover",
          Ri = ".bs.popover",
          qi = "bs-popover",
          Wi = new RegExp(`(^|\\s)${qi}\\S+`, "g"),
          Gi = {
            ...Bi.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          },
          Yi = { ...Bi.DefaultType, content: "(string|element|function)" },
          Fi = {
            HIDE: `hide${Ri}`,
            HIDDEN: `hidden${Ri}`,
            SHOW: `show${Ri}`,
            SHOWN: `shown${Ri}`,
            INSERTED: `inserted${Ri}`,
            CLICK: `click${Ri}`,
            FOCUSIN: `focusin${Ri}`,
            FOCUSOUT: `focusout${Ri}`,
            MOUSEENTER: `mouseenter${Ri}`,
            MOUSELEAVE: `mouseleave${Ri}`,
          },
          Xi = "fade",
          Vi = "show",
          Ui = ".popover-header",
          Qi = ".popover-body";
        class Ki extends Bi {
          static get Default() {
            return Gi;
          }
          static get NAME() {
            return Hi;
          }
          static get Event() {
            return Fi;
          }
          static get DefaultType() {
            return Yi;
          }
          isWithContent() {
            return this.getTitle() || this._getContent();
          }
          getTipElement() {
            return this.tip || ((this.tip = super.getTipElement()), this.getTitle() || r.findOne(Ui, this.tip).remove(), this._getContent() || r.findOne(Qi, this.tip).remove()), this.tip;
          }
          setContent() {
            const e = this.getTipElement();
            this.setElementContent(r.findOne(Ui, e), this.getTitle());
            let t = this._getContent();
            "function" == typeof t && (t = t.call(this._element)), this.setElementContent(r.findOne(Qi, e), t), e.classList.remove(Xi, Vi);
          }
          _addAttachmentClass(e) {
            this.getTipElement().classList.add(`${qi}-${this.updateAttachment(e)}`);
          }
          _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content;
          }
          _cleanTipClass() {
            const e = this.getTipElement(),
              t = e.getAttribute("class").match(Wi);
            null !== t && t.length > 0 && t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = Ki.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        S(Ki);
        const Zi = "scrollspy",
          Ji = ".bs.scrollspy",
          er = { offset: 10, method: "auto", target: "" },
          tr = { offset: "number", method: "string", target: "(string|element)" },
          nr = `activate${Ji}`,
          ir = `scroll${Ji}`,
          rr = `load${Ji}.data-api`,
          ar = "dropdown-item",
          sr = "active",
          or = '[data-bs-spy="scroll"]',
          lr = ".nav, .list-group",
          cr = ".nav-link",
          dr = ".nav-item",
          ur = ".list-group-item",
          pr = ".dropdown",
          fr = ".dropdown-toggle",
          hr = "offset",
          mr = "position";
        class gr extends J {
          constructor(e, t) {
            super(e),
              (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
              (this._config = this._getConfig(t)),
              (this._selector = `${this._config.target} ${cr}, ${this._config.target} ${ur}, ${this._config.target} .${ar}`),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              U.on(this._scrollElement, ir, () => this._process()),
              this.refresh(),
              this._process();
          }
          static get Default() {
            return er;
          }
          static get NAME() {
            return Zi;
          }
          refresh() {
            const e = this._scrollElement === this._scrollElement.window ? hr : mr,
              t = "auto" === this._config.method ? e : this._config.method,
              n = t === mr ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              r
                .find(this._selector)
                .map((e) => {
                  const i = u(e),
                    a = i ? r.findOne(i) : null;
                  if (a) {
                    const e = a.getBoundingClientRect();
                    if (e.width || e.height) return [ve[t](a).top + n, i];
                  }
                  return null;
                })
                .filter((e) => e)
                .sort((e, t) => e[0] - t[0])
                .forEach((e) => {
                  this._offsets.push(e[0]), this._targets.push(e[1]);
                });
          }
          dispose() {
            U.off(this._scrollElement, Ji), super.dispose();
          }
          _getConfig(e) {
            if ("string" != typeof (e = { ...er, ...ve.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }).target && m(e.target)) {
              let { id: t } = e.target;
              t || ((t = c(Zi)), (e.target.id = t)), (e.target = `#${t}`);
            }
            return v(Zi, e, tr), e;
          }
          _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }
          _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
            const e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
              const e = this._targets[this._targets.length - 1];
              this._activeTarget !== e && this._activate(e);
            } else {
              if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
              for (let t = this._offsets.length; t--; ) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]);
            }
          }
          _activate(e) {
            (this._activeTarget = e), this._clear();
            const t = this._selector.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
              n = r.findOne(t.join(","));
            n.classList.contains(ar)
              ? (r.findOne(fr, n.closest(pr)).classList.add(sr), n.classList.add(sr))
              : (n.classList.add(sr),
                r.parents(n, lr).forEach((e) => {
                  r.prev(e, `${cr}, ${ur}`).forEach((e) => e.classList.add(sr)),
                    r.prev(e, dr).forEach((e) => {
                      r.children(e, cr).forEach((e) => e.classList.add(sr));
                    });
                })),
              U.trigger(this._scrollElement, nr, { relatedTarget: e });
          }
          _clear() {
            r.find(this._selector)
              .filter((e) => e.classList.contains(sr))
              .forEach((e) => e.classList.remove(sr));
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = gr.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        U.on(window, rr, () => {
          r.find(or).forEach((e) => new gr(e));
        }),
          S(gr);
        const vr = "tab",
          yr = ".bs.tab",
          br = `hide${yr}`,
          wr = `hidden${yr}`,
          xr = `show${yr}`,
          Er = `shown${yr}`,
          Tr = `click${yr}.data-api`,
          Cr = "dropdown-menu",
          _r = "active",
          Ar = "fade",
          Sr = "show",
          kr = ".dropdown",
          Mr = ".nav, .list-group",
          Or = ".active",
          Lr = ":scope > li > .active",
          Pr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          Dr = ".dropdown-toggle",
          $r = ":scope > .dropdown-menu .active";
        class Nr extends J {
          static get NAME() {
            return vr;
          }
          show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(_r)) return;
            let e;
            const t = p(this._element),
              n = this._element.closest(Mr);
            if (n) {
              const t = "UL" === n.nodeName || "OL" === n.nodeName ? Lr : Or;
              (e = r.find(t, n)), (e = e[e.length - 1]);
            }
            const i = e ? U.trigger(e, br, { relatedTarget: this._element }) : null;
            if (U.trigger(this._element, xr, { relatedTarget: e }).defaultPrevented || (null !== i && i.defaultPrevented)) return;
            this._activate(this._element, n);
            const a = () => {
              U.trigger(e, wr, { relatedTarget: this._element }), U.trigger(this._element, Er, { relatedTarget: e });
            };
            t ? this._activate(t, t.parentNode, a) : a();
          }
          _activate(e, t, n) {
            const i = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? r.children(t, Or) : r.find(Lr, t))[0],
              a = n && i && i.classList.contains(Ar),
              s = () => this._transitionComplete(e, i, n);
            i && a ? (i.classList.remove(Sr), this._queueCallback(s, e, !0)) : s();
          }
          _transitionComplete(e, t, n) {
            if (t) {
              t.classList.remove(_r);
              const e = r.findOne($r, t.parentNode);
              e && e.classList.remove(_r), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
            }
            e.classList.add(_r), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), E(e), e.classList.contains(Ar) && e.classList.add(Sr);
            let i = e.parentNode;
            if ((i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains(Cr))) {
              const t = e.closest(kr);
              t && r.find(Dr, t).forEach((e) => e.classList.add(_r)), e.setAttribute("aria-expanded", !0);
            }
            n && n();
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = Nr.getOrCreateInstance(this);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        U.on(document, Tr, Pr, function (e) {
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(), b(this) || Nr.getOrCreateInstance(this).show();
        }),
          S(Nr);
        const zr = "toast",
          Ir = ".bs.toast",
          jr = `click.dismiss${Ir}`,
          Br = `mouseover${Ir}`,
          Hr = `mouseout${Ir}`,
          Rr = `focusin${Ir}`,
          qr = `focusout${Ir}`,
          Wr = `hide${Ir}`,
          Gr = `hidden${Ir}`,
          Yr = `show${Ir}`,
          Fr = `shown${Ir}`,
          Xr = "fade",
          Vr = "hide",
          Ur = "show",
          Qr = "showing",
          Kr = { animation: "boolean", autohide: "boolean", delay: "number" },
          Zr = { animation: !0, autohide: !0, delay: 5e3 },
          Jr = '[data-bs-dismiss="toast"]';
        class ea extends J {
          constructor(e, t) {
            super(e), (this._config = this._getConfig(t)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
          }
          static get DefaultType() {
            return Kr;
          }
          static get Default() {
            return Zr;
          }
          static get NAME() {
            return zr;
          }
          show() {
            if (U.trigger(this._element, Yr).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add(Xr);
            const e = () => {
              this._element.classList.remove(Qr), this._element.classList.add(Ur), U.trigger(this._element, Fr), this._maybeScheduleHide();
            };
            this._element.classList.remove(Vr), E(this._element), this._element.classList.add(Qr), this._queueCallback(e, this._element, this._config.animation);
          }
          hide() {
            if (!this._element.classList.contains(Ur)) return;
            if (U.trigger(this._element, Wr).defaultPrevented) return;
            const e = () => {
              this._element.classList.add(Vr), U.trigger(this._element, Gr);
            };
            this._element.classList.remove(Ur), this._queueCallback(e, this._element, this._config.animation);
          }
          dispose() {
            this._clearTimeout(), this._element.classList.contains(Ur) && this._element.classList.remove(Ur), super.dispose();
          }
          _getConfig(e) {
            return (e = { ...Zr, ...ve.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }), v(zr, e, this.constructor.DefaultType), e;
          }
          _maybeScheduleHide() {
            this._config.autohide &&
              (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                  this.hide();
                }, this._config.delay)));
          }
          _onInteraction(e, t) {
            switch (e.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = t;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = t;
            }
            if (t) return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide();
          }
          _setListeners() {
            U.on(this._element, jr, Jr, () => this.hide()),
              U.on(this._element, Br, (e) => this._onInteraction(e, !0)),
              U.on(this._element, Hr, (e) => this._onInteraction(e, !1)),
              U.on(this._element, Rr, (e) => this._onInteraction(e, !0)),
              U.on(this._element, qr, (e) => this._onInteraction(e, !1));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
          }
          static jQueryInterface(e) {
            return this.each(function () {
              const t = ea.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                t[e](this);
              }
            });
          }
        }
        return S(ea), { Alert: ce, Button: he, Carousel: lt, Collapse: St, Dropdown: dn, Modal: Xn, Offcanvas: fi, Popover: Ki, ScrollSpy: gr, Tab: Nr, Toast: ea, Tooltip: Bi };
      })(n(750));
    },
    206: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var i = n(645),
        r = n.n(i)()(function (e) {
          return e[1];
        });
      r.push([
        e.id,
        '@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(0px - var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:50%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{background:rgba(0,0,0,.1);border-radius:10px;position:relative;-ms-touch-action:none}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{bottom:0;height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{background:#000;bottom:0;content:"";filter:blur(50px);left:0;position:absolute;right:0;top:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}',
        "",
      ]);
      const a = r;
    },
    645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var r = {};
            if (i)
              for (var a = 0; a < this.length; a++) {
                var s = this[a][0];
                null != s && (r[s] = !0);
              }
            for (var o = 0; o < e.length; o++) {
              var l = [].concat(e[o]);
              (i && r[l[0]]) || (n && (l[2] ? (l[2] = "".concat(n, " and ").concat(l[2])) : (l[2] = n)), t.push(l));
            }
          }),
          t
        );
      };
    },
    755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document) throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (i, r) {
        "use strict";
        var a = [],
          s = Object.getPrototypeOf,
          o = a.slice,
          l = a.flat
            ? function (e) {
                return a.flat.call(e);
              }
            : function (e) {
                return a.concat.apply([], e);
              },
          c = a.push,
          d = a.indexOf,
          u = {},
          p = u.toString,
          f = u.hasOwnProperty,
          h = f.toString,
          m = h.call(Object),
          g = {},
          v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          b = i.document,
          w = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function x(e, t, n) {
          var i,
            r,
            a = (n = n || b).createElement("script");
          if (((a.text = e), t)) for (i in w) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && a.setAttribute(i, r);
          n.head.appendChild(a).parentNode.removeChild(a);
        }
        function E(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e;
        }
        var T = "3.6.0",
          C = function (e, t) {
            return new C.fn.init(e, t);
          };
        function _(e) {
          var t = !!e && "length" in e && e.length,
            n = E(e);
          return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
        }
        (C.fn = C.prototype =
          {
            jquery: T,
            constructor: C,
            length: 0,
            toArray: function () {
              return o.call(this);
            },
            get: function (e) {
              return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
              var t = C.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return C.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                C.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(o.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                C.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                C.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: a.sort,
            splice: a.splice,
          }),
          (C.extend = C.fn.extend =
            function () {
              var e,
                t,
                n,
                i,
                r,
                a,
                s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                c = !1;
              for ("boolean" == typeof s && ((c = s), (s = arguments[o] || {}), o++), "object" == typeof s || v(s) || (s = {}), o === l && ((s = this), o--); o < l; o++)
                if (null != (e = arguments[o]))
                  for (t in e)
                    (i = e[t]),
                      "__proto__" !== t &&
                        s !== i &&
                        (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? ((n = s[t]), (a = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}), (r = !1), (s[t] = C.extend(c, a, i))) : void 0 !== i && (s[t] = i));
              return s;
            }),
          C.extend({
            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === m));
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              x(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                i = 0;
              if (_(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
              else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (_(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : d.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
              return (e.length = r), e;
            },
            grep: function (e, t, n) {
              for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
              return i;
            },
            map: function (e, t, n) {
              var i,
                r,
                a = 0,
                s = [];
              if (_(e)) for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
              else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
              return l(s);
            },
            guid: 1,
            support: g,
          }),
          "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]),
          C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            u["[object " + t + "]"] = t.toLowerCase();
          });
        var A = (function (e) {
          var t,
            n,
            i,
            r,
            a,
            s,
            o,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            E = 0,
            T = 0,
            C = le(),
            _ = le(),
            A = le(),
            S = le(),
            k = function (e, t) {
              return e === t && (u = !0), 0;
            },
            M = {}.hasOwnProperty,
            O = [],
            L = O.pop,
            P = O.push,
            D = O.push,
            $ = O.slice,
            N = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
              return -1;
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[[\\x20\\t\\r\\n\\f]*(" + j + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + I + "*\\]",
            H = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            R = new RegExp(I + "+", "g"),
            q = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            G = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
            Y = new RegExp(I + "|>"),
            F = new RegExp(H),
            X = new RegExp("^" + j + "$"),
            V = {
              ID: new RegExp("^#(" + j + ")"),
              CLASS: new RegExp("^\\.(" + j + ")"),
              TAG: new RegExp("^(" + j + "|[*])"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + H),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
              bool: new RegExp("^(?:" + z + ")$", "i"),
              needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
            },
            U = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
              return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            ae = function () {
              p();
            },
            se = we(
              function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            D.apply((O = $.call(x.childNodes)), x.childNodes), O[x.childNodes.length].nodeType;
          } catch (e) {
            D = {
              apply: O.length
                ? function (e, t) {
                    P.apply(e, $.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function oe(e, t, i, r) {
            var a,
              o,
              c,
              d,
              u,
              h,
              v,
              y = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return i;
            if (!r && (p(t), (t = t || f), m)) {
              if (11 !== x && (u = J.exec(e)))
                if ((a = u[1])) {
                  if (9 === x) {
                    if (!(c = t.getElementById(a))) return i;
                    if (c.id === a) return i.push(c), i;
                  } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return i.push(c), i;
                } else {
                  if (u[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                  if ((a = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(a)), i;
                }
              if (n.qsa && !S[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                if (((v = e), (y = t), 1 === x && (Y.test(e) || G.test(e)))) {
                  for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((d = t.getAttribute("id")) ? (d = d.replace(ie, re)) : t.setAttribute("id", (d = w))), o = (h = s(e)).length; o--; )
                    h[o] = (d ? "#" + d : ":scope") + " " + be(h[o]);
                  v = h.join(",");
                }
                try {
                  return D.apply(i, y.querySelectorAll(v)), i;
                } catch (t) {
                  S(e, !0);
                } finally {
                  d === w && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(q, "$1"), t, i, r);
          }
          function le() {
            var e = [];
            return function t(n, r) {
              return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
            };
          }
          function ce(e) {
            return (e[w] = !0), e;
          }
          function de(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, i) {
                  for (var r, a = e([], n.length, t), s = a.length; s--; ) n[(r = a[s])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = oe.support = {}),
          (a = oe.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !U.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = oe.setDocument =
            function (e) {
              var t,
                r,
                s = e ? e.ownerDocument || e : x;
              return s != f && 9 === s.nodeType && s.documentElement
                ? ((h = (f = s).documentElement),
                  (m = !a(f)),
                  x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ae, !1) : r.attachEvent && r.attachEvent("onunload", ae)),
                  (n.scope = de(function (e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                  })),
                  (n.attributes = de(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = de(function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = Z.test(f.getElementsByClassName)),
                  (n.getById = de(function (e) {
                    return (h.appendChild(e).id = w), !f.getElementsByName || !f.getElementsByName(w).length;
                  })),
                  n.getById
                    ? ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            i,
                            r,
                            a = t.getElementById(e);
                          if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (r = t.getElementsByName(e), i = 0; (a = r[i++]); ) if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          r = 0,
                          a = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = a[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return a;
                      }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (g = []),
                  (n.qsa = Z.test(f.querySelectorAll)) &&
                    (de(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                        (t = f.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        g.push("[\\r\\n\\f]");
                    }),
                    de(function (e) {
                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (n.matchesSelector = Z.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                    de(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", H);
                    }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Z.test(h.compareDocumentPosition)),
                  (b =
                    t || Z.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                        }
                      : function (e, t) {
                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (k = t
                    ? function (e, t) {
                        if (e === t) return (u = !0), 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                          i ||
                          (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                            ? e == f || (e.ownerDocument == x && b(x, e))
                              ? -1
                              : t == f || (t.ownerDocument == x && b(x, t))
                              ? 1
                              : d
                              ? N(d, e) - N(d, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (u = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          a = t.parentNode,
                          s = [e],
                          o = [t];
                        if (!r || !a) return e == f ? -1 : t == f ? 1 : r ? -1 : a ? 1 : d ? N(d, e) - N(d, t) : 0;
                        if (r === a) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) o.unshift(n);
                        for (; s[i] === o[i]; ) i++;
                        return i ? pe(s[i], o[i]) : s[i] == x ? -1 : o[i] == x ? 1 : 0;
                      }),
                  f)
                : f;
            }),
          (oe.matches = function (e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function (e, t) {
            if ((p(e), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
              try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
              } catch (e) {
                S(t, !0);
              }
            return oe(t, f, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
            return (e.ownerDocument || e) != f && p(e), b(e, t);
          }),
          (oe.attr = function (e, t) {
            (e.ownerDocument || e) != f && p(e);
            var r = i.attrHandle[t.toLowerCase()],
              a = r && M.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
          }),
          (oe.escape = function (e) {
            return (e + "").replace(ie, re);
          }),
          (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function (e) {
            var t,
              i = [],
              r = 0,
              a = 0;
            if (((u = !n.detectDuplicates), (d = !n.sortStable && e.slice(0)), e.sort(k), u)) {
              for (; (t = e[a++]); ) t === e[a] && (r = i.push(a));
              for (; r--; ) e.splice(i[r], 1);
            }
            return (d = null), e;
          }),
          (r = oe.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                a = e.nodeType;
              if (a) {
                if (1 === a || 9 === a || 11 === a) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === a || 4 === a) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
            }),
          ((i = oe.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: V,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                ATTR: function (e) {
                  return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return V.CHILD.test(e[0])
                    ? null
                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && F.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = C[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + I + "|$)")) &&
                      C(e, function (e) {
                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (i) {
                    var r = oe.attr(i, e);
                    return null == r
                      ? "!=" === t
                      : !t ||
                          ((r += ""),
                          "=" === t
                            ? r === n
                            : "!=" === t
                            ? r !== n
                            : "^=" === t
                            ? n && 0 === r.indexOf(n)
                            : "*=" === t
                            ? n && r.indexOf(n) > -1
                            : "$=" === t
                            ? n && r.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
                            : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, r) {
                  var a = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    o = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          d,
                          u,
                          p,
                          f,
                          h,
                          m = a !== s ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          v = o && t.nodeName.toLowerCase(),
                          y = !l && !o,
                          b = !1;
                        if (g) {
                          if (a) {
                            for (; m; ) {
                              for (p = t; (p = p[m]); ) if (o ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                              h = m = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                            for (b = (f = (c = (d = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], p = f && g.childNodes[f]; (p = (++f && p && p[m]) || (b = f = 0) || h.pop()); )
                              if (1 === p.nodeType && ++b && p === t) {
                                d[e] = [E, f, b];
                                break;
                              }
                          } else if ((y && (b = f = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b))
                            for (
                              ;
                              (p = (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                              ((o ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [E, b]), p !== t));

                            );
                          return (b -= r) === i || (b % i == 0 && b / i >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                  return r[w]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var i, a = r(e, t), s = a.length; s--; ) e[(i = N(e, a[s]))] = !(n[i] = a[s]);
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    i = o(e.replace(q, "$1"));
                  return i[w]
                    ? ce(function (e, t, n, r) {
                        for (var a, s = i(e, null, r, []), o = e.length; o--; ) (a = s[o]) && (e[o] = !(t[o] = a));
                      })
                    : function (e, r, a) {
                        return (t[0] = e), i(t, null, a, n), (t[0] = null), !n.pop();
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return oe(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || r(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    X.test(e || "") || oe.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !i.pseudos.empty(e);
                },
                header: function (e) {
                  return K.test(e.nodeName);
                },
                input: function (e) {
                  return Q.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function we(e, t, n) {
            var i = t.dir,
              r = t.next,
              a = r || i,
              s = n && "parentNode" === a,
              o = T++;
            return t.first
              ? function (t, n, r) {
                  for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    d,
                    u,
                    p = [E, o];
                  if (l) {
                    for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s)
                        if (((d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                        else {
                          if ((c = d[a]) && c[0] === E && c[1] === o) return (p[2] = c[2]);
                          if (((d[a] = p), (p[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return e.length > 1
              ? function (t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ee(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++) (a = e[o]) && ((n && !n(a, i, r)) || (s.push(a), c && t.push(o)));
            return s;
          }
          function Te(e, t, n, i, r, a) {
            return (
              i && !i[w] && (i = Te(i)),
              r && !r[w] && (r = Te(r, a)),
              ce(function (a, s, o, l) {
                var c,
                  d,
                  u,
                  p = [],
                  f = [],
                  h = s.length,
                  m =
                    a ||
                    (function (e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                      return n;
                    })(t || "*", o.nodeType ? [o] : o, []),
                  g = !e || (!a && t) ? m : Ee(m, p, e, o, l),
                  v = n ? (r || (a ? e : h || i) ? [] : s) : g;
                if ((n && n(g, v, o, l), i)) for (c = Ee(v, f), i(c, [], o, l), d = c.length; d--; ) (u = c[d]) && (v[f[d]] = !(g[f[d]] = u));
                if (a) {
                  if (r || e) {
                    if (r) {
                      for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((g[d] = u));
                      r(null, (v = []), c, l);
                    }
                    for (d = v.length; d--; ) (u = v[d]) && (c = r ? N(a, u) : p[d]) > -1 && (a[c] = !(s[c] = u));
                  }
                } else (v = Ee(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : D.apply(s, v);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                r,
                a = e.length,
                s = i.relative[e[0].type],
                o = s || i.relative[" "],
                l = s ? 1 : 0,
                d = we(
                  function (e) {
                    return e === t;
                  },
                  o,
                  !0
                ),
                u = we(
                  function (e) {
                    return N(t, e) > -1;
                  },
                  o,
                  !0
                ),
                p = [
                  function (e, n, i) {
                    var r = (!s && (i || n !== c)) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                    return (t = null), r;
                  },
                ];
              l < a;
              l++
            )
              if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                  for (r = ++l; r < a && !i.relative[e[r].type]; r++);
                  return Te(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(q, "$1"), n, l < r && Ce(e.slice(l, r)), r < a && Ce((e = e.slice(r))), r < a && be(e));
                }
                p.push(n);
              }
            return xe(p);
          }
          return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (s = oe.tokenize =
              function (e, t) {
                var n,
                  r,
                  a,
                  s,
                  o,
                  l,
                  c,
                  d = _[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (o = e, l = [], c = i.preFilter; o; ) {
                  for (s in ((n && !(r = W.exec(o))) || (r && (o = o.slice(r[0].length) || o), l.push((a = []))),
                  (n = !1),
                  (r = G.exec(o)) && ((n = r.shift()), a.push({ value: n, type: r[0].replace(q, " ") }), (o = o.slice(n.length))),
                  i.filter))
                    !(r = V[s].exec(o)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), a.push({ value: n, type: s, matches: r }), (o = o.slice(n.length)));
                  if (!n) break;
                }
                return t ? o.length : o ? oe.error(e) : _(e, l).slice(0);
              }),
            (o = oe.compile =
              function (e, t) {
                var n,
                  r = [],
                  a = [],
                  o = A[e + " "];
                if (!o) {
                  for (t || (t = s(e)), n = t.length; n--; ) (o = Ce(t[n]))[w] ? r.push(o) : a.push(o);
                  (o = A(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        r = e.length > 0,
                        a = function (a, s, o, l, d) {
                          var u,
                            h,
                            g,
                            v = 0,
                            y = "0",
                            b = a && [],
                            w = [],
                            x = c,
                            T = a || (r && i.find.TAG("*", d)),
                            C = (E += null == x ? 1 : Math.random() || 0.1),
                            _ = T.length;
                          for (d && (c = s == f || s || d); y !== _ && null != (u = T[y]); y++) {
                            if (r && u) {
                              for (h = 0, s || u.ownerDocument == f || (p(u), (o = !m)); (g = e[h++]); )
                                if (g(u, s || f, o)) {
                                  l.push(u);
                                  break;
                                }
                              d && (E = C);
                            }
                            n && ((u = !g && u) && v--, a && b.push(u));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (g = t[h++]); ) g(b, w, s, o);
                            if (a) {
                              if (v > 0) for (; y--; ) b[y] || w[y] || (w[y] = L.call(l));
                              w = Ee(w);
                            }
                            D.apply(l, w), d && !a && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
                          }
                          return d && ((E = C), (c = x)), b;
                        };
                      return n ? ce(a) : a;
                    })(a, r)
                  )).selector = e;
                }
                return o;
              }),
            (l = oe.select =
              function (e, t, n, r) {
                var a,
                  l,
                  c,
                  d,
                  u,
                  p = "function" == typeof e && e,
                  f = !r && s((e = p.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                  }
                  for (a = V.needsContext.test(e) ? 0 : l.length; a-- && ((c = l[a]), !i.relative[(d = c.type)]); )
                    if ((u = i.find[d]) && (r = u(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                      if ((l.splice(a, 1), !(e = r.length && be(l)))) return D.apply(n, r), n;
                      break;
                    }
                }
                return (p || o(e, f))(r, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
              }),
            (n.sortStable = w.split("").sort(k).join("") === w),
            (n.detectDuplicates = !!u),
            p(),
            (n.sortDetached = de(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            de(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
              ue("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              de(function (e) {
                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
              ue("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            de(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ue(z, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
              }),
            oe
          );
        })(i);
        (C.find = A), (C.expr = A.selectors), (C.expr[":"] = C.expr.pseudos), (C.uniqueSort = C.unique = A.uniqueSort), (C.text = A.getText), (C.isXMLDoc = A.isXML), (C.contains = A.contains), (C.escapeSelector = A.escape);
        var S = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (r && C(e).is(n)) break;
                i.push(e);
              }
            return i;
          },
          k = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          M = C.expr.match.needsContext;
        function O(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function P(e, t, n) {
          return v(t)
            ? C.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? C.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? C.grep(e, function (e) {
                return d.call(t, e) > -1 !== n;
              })
            : C.filter(t, e, n);
        }
        (C.filter = function (e, t, n) {
          var i = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
              ? C.find.matchesSelector(i, e)
                ? [i]
                : []
              : C.find.matches(
                  e,
                  C.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          C.fn.extend({
            find: function (e) {
              var t,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof e)
                return this.pushStack(
                  C(e).filter(function () {
                    for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
              return i > 1 ? C.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(P(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(P(this, e || [], !0));
            },
            is: function (e) {
              return !!P(this, "string" == typeof e && M.test(e) ? C(e) : e || [], !1).length;
            },
          });
        var D,
          $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((C.fn.init = function (e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || D), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
              if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), L.test(i[1]) && C.isPlainObject(t))) for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
          }
          return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(C)) : C.makeArray(e, this);
        }).prototype = C.fn),
          (D = C(b));
        var N = /^(?:parents|prev(?:Until|All))/,
          z = { children: !0, contents: !0, next: !0, prev: !0 };
        function I(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        C.fn.extend({
          has: function (e) {
            var t = C(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              i = 0,
              r = this.length,
              a = [],
              s = "string" != typeof e && C(e);
            if (!M.test(e))
              for (; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                    a.push(n);
                    break;
                  }
            return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a);
          },
          index: function (e) {
            return e ? ("string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
        }),
          C.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return S(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return S(e, "parentNode", n);
              },
              next: function (e) {
                return I(e, "nextSibling");
              },
              prev: function (e) {
                return I(e, "previousSibling");
              },
              nextAll: function (e) {
                return S(e, "nextSibling");
              },
              prevAll: function (e) {
                return S(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return S(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return S(e, "previousSibling", n);
              },
              siblings: function (e) {
                return k((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return k(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
              },
            },
            function (e, t) {
              C.fn[e] = function (n, i) {
                var r = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = C.filter(i, r)), this.length > 1 && (z[e] || C.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r);
              };
            }
          );
        var j = /[^\x20\t\r\n\f]+/g;
        function B(e) {
          return e;
        }
        function H(e) {
          throw e;
        }
        function R(e, t, n, i) {
          var r;
          try {
            e && v((r = e.promise)) ? r.call(e).done(t).fail(n) : e && v((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (C.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    C.each(e.match(j) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : C.extend({}, e);
          var t,
            n,
            i,
            r,
            a = [],
            s = [],
            o = -1,
            l = function () {
              for (r = r || e.once, i = t = !0; s.length; o = -1) for (n = s.shift(); ++o < a.length; ) !1 === a[o].apply(n[0], n[1]) && e.stopOnFalse && ((o = a.length), (n = !1));
              e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
            },
            c = {
              add: function () {
                return (
                  a &&
                    (n && !t && ((o = a.length - 1), s.push(n)),
                    (function t(n) {
                      C.each(n, function (n, i) {
                        v(i) ? (e.unique && c.has(i)) || a.push(i) : i && i.length && "string" !== E(i) && t(i);
                      });
                    })(arguments),
                    n && !t && l()),
                  this
                );
              },
              remove: function () {
                return (
                  C.each(arguments, function (e, t) {
                    for (var n; (n = C.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= o && o--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? C.inArray(e, a) > -1 : a.length > 0;
              },
              empty: function () {
                return a && (a = []), this;
              },
              disable: function () {
                return (r = s = []), (a = n = ""), this;
              },
              disabled: function () {
                return !a;
              },
              lock: function () {
                return (r = s = []), n || t || (a = n = ""), this;
              },
              locked: function () {
                return !!r;
              },
              fireWith: function (e, n) {
                return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!i;
              },
            };
          return c;
        }),
          C.extend({
            Deferred: function (e) {
              var t = [
                  ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                  ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"],
                ],
                n = "pending",
                r = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return a.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return r.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return C.Deferred(function (n) {
                      C.each(t, function (t, i) {
                        var r = v(e[i[4]]) && e[i[4]];
                        a[i[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, r) {
                    var a = 0;
                    function s(e, t, n, r) {
                      return function () {
                        var o = this,
                          l = arguments,
                          c = function () {
                            var i, c;
                            if (!(e < a)) {
                              if ((i = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                              (c = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                v(c) ? (r ? c.call(i, s(a, t, B, r), s(a, t, H, r)) : (a++, c.call(i, s(a, t, B, r), s(a, t, H, r), s(a, t, B, t.notifyWith)))) : (n !== B && ((o = void 0), (l = [i])), (r || t.resolveWith)(o, l));
                            }
                          },
                          d = r
                            ? c
                            : function () {
                                try {
                                  c();
                                } catch (i) {
                                  C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, d.stackTrace), e + 1 >= a && (n !== H && ((o = void 0), (l = [i])), t.rejectWith(o, l));
                                }
                              };
                        e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()), i.setTimeout(d));
                      };
                    }
                    return C.Deferred(function (i) {
                      t[0][3].add(s(0, i, v(r) ? r : B, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : B)), t[2][3].add(s(0, i, v(n) ? n : H));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? C.extend(e, r) : r;
                  },
                },
                a = {};
              return (
                C.each(t, function (e, i) {
                  var s = i[2],
                    o = i[5];
                  (r[i[1]] = s.add),
                    o &&
                      s.add(
                        function () {
                          n = o;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(i[3].fire),
                    (a[i[0]] = function () {
                      return a[i[0] + "With"](this === a ? void 0 : this, arguments), this;
                    }),
                    (a[i[0] + "With"] = s.fireWith);
                }),
                r.promise(a),
                e && e.call(a, a),
                a
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = C.Deferred(),
                s = function (e) {
                  return function (n) {
                    (i[e] = this), (r[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(i, r);
                  };
                };
              if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || v(r[n] && r[n].then))) return a.then();
              for (; n--; ) R(r[n], s(n), a.reject);
              return a.promise();
            },
          });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (C.Deferred.exceptionHook = function (e, t) {
          i.console && i.console.warn && e && q.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }),
          (C.readyException = function (e) {
            i.setTimeout(function () {
              throw e;
            });
          });
        var W = C.Deferred();
        function G() {
          b.removeEventListener("DOMContentLoaded", G), i.removeEventListener("load", G), C.ready();
        }
        (C.fn.ready = function (e) {
          return (
            W.then(e).catch(function (e) {
              C.readyException(e);
            }),
            this
          );
        }),
          C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0), (!0 !== e && --C.readyWait > 0) || W.resolveWith(b, [C]));
            },
          }),
          (C.ready.then = W.then),
          "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? i.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", G), i.addEventListener("load", G));
        var Y = function (e, t, n, i, r, a, s) {
            var o = 0,
              l = e.length,
              c = null == n;
            if ("object" === E(n)) for (o in ((r = !0), n)) Y(e, t, o, n[o], !0, a, s);
            else if (
              void 0 !== i &&
              ((r = !0),
              v(i) || (s = !0),
              c &&
                (s
                  ? (t.call(e, i), (t = null))
                  : ((c = t),
                    (t = function (e, t, n) {
                      return c.call(C(e), n);
                    }))),
              t)
            )
              for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : a;
          },
          F = /^-ms-/,
          X = /-([a-z])/g;
        function V(e, t) {
          return t.toUpperCase();
        }
        function U(e) {
          return e.replace(F, "ms-").replace(X, V);
        }
        var Q = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function K() {
          this.expando = C.expando + K.uid++;
        }
        (K.uid = 1),
          (K.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
              var i,
                r = this.cache(e);
              if ("string" == typeof t) r[U(t)] = n;
              else for (i in t) r[U(i)] = t[i];
              return r;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                i = e[this.expando];
              if (void 0 !== i) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(j) || []).length;
                  for (; n--; ) delete i[t[n]];
                }
                (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !C.isEmptyObject(t);
            },
          });
        var Z = new K(),
          J = new K(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
              try {
                n = (function (e) {
                  return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                })(n);
              } catch (e) {}
              J.set(e, t, n);
            } else n = void 0;
          return n;
        }
        C.extend({
          hasData: function (e) {
            return J.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return J.access(e, t, n);
          },
          removeData: function (e, t) {
            J.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          C.fn.extend({
            data: function (e, t) {
              var n,
                i,
                r,
                a = this[0],
                s = a && a.attributes;
              if (void 0 === e) {
                if (this.length && ((r = J.get(a)), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
                  for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = U(i.slice(5))), ne(a, i, r[i]));
                  Z.set(a, "hasDataAttrs", !0);
                }
                return r;
              }
              return "object" == typeof e
                ? this.each(function () {
                    J.set(this, e);
                  })
                : Y(
                    this,
                    function (t) {
                      var n;
                      if (a && void 0 === t) return void 0 !== (n = J.get(a, e)) || void 0 !== (n = ne(a, e)) ? n : void 0;
                      this.each(function () {
                        J.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                J.remove(this, e);
              });
            },
          }),
          C.extend({
            queue: function (e, t, n) {
              var i;
              if (e) return (t = (t || "fx") + "queue"), (i = Z.get(e, t)), n && (!i || Array.isArray(n) ? (i = Z.access(e, t, C.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = C._queueHooks(e, t);
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete a.stop,
                  r.call(
                    e,
                    function () {
                      C.dequeue(e, t);
                    },
                    a
                  )),
                !i && a && a.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: C.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          C.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? C.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = C.queue(this, e, t);
                      C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                C.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                i = 1,
                r = C.Deferred(),
                a = this,
                s = this.length,
                o = function () {
                  --i || r.resolveWith(a, [a]);
                };
              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Z.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
              return o(), r.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          ae = ["Top", "Right", "Bottom", "Left"],
          se = b.documentElement,
          oe = function (e) {
            return C.contains(e.ownerDocument, e);
          },
          le = { composed: !0 };
        se.getRootNode &&
          (oe = function (e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
          });
        var ce = function (e, t) {
          return "none" === (e = t || e).style.display || ("" === e.style.display && oe(e) && "none" === C.css(e, "display"));
        };
        function de(e, t, n, i) {
          var r,
            a,
            s = 20,
            o = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return C.css(e, t, "");
                },
            l = o(),
            c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (C.cssNumber[t] || ("px" !== c && +l)) && re.exec(C.css(e, t));
          if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; s--; ) C.style(e, t, d + c), (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0), (d /= a);
            (d *= 2), C.style(e, t, d + c), (n = n || []);
          }
          return n && ((d = +d || +l || 0), (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = d), (i.end = r))), r;
        }
        var ue = {};
        function pe(e) {
          var t,
            n = e.ownerDocument,
            i = e.nodeName,
            r = ue[i];
          return r || ((t = n.body.appendChild(n.createElement(i))), (r = C.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (ue[i] = r), r);
        }
        function fe(e, t) {
          for (var n, i, r = [], a = 0, s = e.length; a < s; a++)
            (i = e[a]).style &&
              ((n = i.style.display),
              t ? ("none" === n && ((r[a] = Z.get(i, "display") || null), r[a] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[a] = pe(i))) : "none" !== n && ((r[a] = "none"), Z.set(i, "display", n)));
          for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
          return e;
        }
        C.fn.extend({
          show: function () {
            return fe(this, !0);
          },
          hide: function () {
            return fe(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ce(this) ? C(this).show() : C(this).hide();
                });
          },
        });
        var he,
          me,
          ge = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i;
        (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (me = b.createElement("input")).setAttribute("type", "radio"),
          me.setAttribute("checked", "checked"),
          me.setAttribute("name", "t"),
          he.appendChild(me),
          (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (he.innerHTML = "<textarea>x</textarea>"),
          (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
          (he.innerHTML = "<option></option>"),
          (g.option = !!he.lastChild);
        var be = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function we(e, t) {
          var n;
          return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && O(e, t)) ? C.merge([e], n) : n;
        }
        function xe(e, t) {
          for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead), (be.th = be.td), g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Ee = /<|&#?\w+;/;
        function Te(e, t, n, i, r) {
          for (var a, s, o, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((a = e[f]) || 0 === a)
              if ("object" === E(a)) C.merge(p, a.nodeType ? [a] : a);
              else if (Ee.test(a)) {
                for (s = s || u.appendChild(t.createElement("div")), o = (ve.exec(a) || ["", ""])[1].toLowerCase(), l = be[o] || be._default, s.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], d = l[0]; d--; ) s = s.lastChild;
                C.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
              } else p.push(t.createTextNode(a));
          for (u.textContent = "", f = 0; (a = p[f++]); )
            if (i && C.inArray(a, i) > -1) r && r.push(a);
            else if (((c = oe(a)), (s = we(u.appendChild(a), "script")), c && xe(s), n)) for (d = 0; (a = s[d++]); ) ye.test(a.type || "") && n.push(a);
          return u;
        }
        var Ce = /^([^.]*)(?:\.(.+)|)/;
        function _e() {
          return !0;
        }
        function Ae() {
          return !1;
        }
        function Se(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return b.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function ke(e, t, n, i, r, a) {
          var s, o;
          if ("object" == typeof t) {
            for (o in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) ke(e, o, n, i, t[o], a);
            return e;
          }
          if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Ae;
          else if (!r) return e;
          return (
            1 === a &&
              ((s = r),
              ((r = function (e) {
                return C().off(e), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = C.guid++))),
            e.each(function () {
              C.event.add(this, t, r, i, n);
            })
          );
        }
        function Me(e, t, n) {
          n
            ? (Z.set(e, t, !1),
              C.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var i,
                    r,
                    a = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (a.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (((a = o.call(arguments)), Z.set(this, t, a), (i = n(this, t)), this[t](), a !== (r = Z.get(this, t)) || i ? Z.set(this, t, !1) : (r = {}), a !== r))
                      return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                  } else a.length && (Z.set(this, t, { value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(e, t) && C.event.add(e, t, _e);
        }
        (C.event = {
          global: {},
          add: function (e, t, n, i, r) {
            var a,
              s,
              o,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              m,
              g = Z.get(e);
            if (Q(e))
              for (
                n.handler && ((n = (a = n).handler), (r = a.selector)),
                  r && C.find.matchesSelector(se, r),
                  n.guid || (n.guid = C.guid++),
                  (l = g.events) || (l = g.events = Object.create(null)),
                  (s = g.handle) ||
                    (s = g.handle =
                      function (t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
                      }),
                  c = (t = (t || "").match(j) || [""]).length;
                c--;

              )
                (f = m = (o = Ce.exec(t[c]) || [])[1]),
                  (h = (o[2] || "").split(".").sort()),
                  f &&
                    ((u = C.event.special[f] || {}),
                    (f = (r ? u.delegateType : u.bindType) || f),
                    (u = C.event.special[f] || {}),
                    (d = C.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && C.expr.match.needsContext.test(r), namespace: h.join(".") }, a)),
                    (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
                    u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    (C.event.global[f] = !0));
          },
          remove: function (e, t, n, i, r) {
            var a,
              s,
              o,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              m,
              g = Z.hasData(e) && Z.get(e);
            if (g && (l = g.events)) {
              for (c = (t = (t || "").match(j) || [""]).length; c--; )
                if (((f = m = (o = Ce.exec(t[c]) || [])[1]), (h = (o[2] || "").split(".").sort()), f)) {
                  for (u = C.event.special[f] || {}, p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--; )
                    (d = p[a]),
                      (!r && m !== d.origType) ||
                        (n && n.guid !== d.guid) ||
                        (o && !o.test(d.namespace)) ||
                        (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                        (p.splice(a, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                  s && !p.length && ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) || C.removeEvent(e, f, g.handle), delete l[f]);
                } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
              C.isEmptyObject(l) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              i,
              r,
              a,
              s,
              o = new Array(arguments.length),
              l = C.event.fix(e),
              c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
              d = C.event.special[l.type] || {};
            for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
            if (((l.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, l))) {
              for (s = C.event.handlers.call(this, l, c), t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                for (l.currentTarget = r.elem, n = 0; (a = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                  (l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace)) ||
                    ((l.handleObj = a), (l.data = a.data), void 0 !== (i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
              return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              i,
              r,
              a,
              s,
              o = [],
              l = t.delegateCount,
              c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                  for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? C(r, this).index(c) > -1 : C.find(r, this, null, [c]).length), s[r] && a.push(i);
                  a.length && o.push({ elem: c, handlers: a });
                }
            return (c = this), l < t.length && o.push({ elem: c, handlers: t.slice(l) }), o;
          },
          addProp: function (e, t) {
            Object.defineProperty(C.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
              },
            });
          },
          fix: function (e) {
            return e[C.expando] ? e : new C.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && O(t, "input") && Me(t, "click", _e), !1;
              },
              trigger: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && O(t, "input") && Me(t, "click"), !0;
              },
              _default: function (e) {
                var t = e.target;
                return (ge.test(t.type) && t.click && O(t, "input") && Z.get(t, "click")) || O(t, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? _e : Ae),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && C.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[C.expando] = !0);
          }),
          (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ae,
            isPropagationStopped: Ae,
            isImmediatePropagationStopped: Ae,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = _e), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = _e), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = _e), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
          }),
          C.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            C.event.addProp
          ),
          C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            C.event.special[e] = {
              setup: function () {
                return Me(this, e, Se), !1;
              },
              trigger: function () {
                return Me(this, e), !0;
              },
              _default: function () {
                return !0;
              },
              delegateType: t,
            };
          }),
          C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  r = e.relatedTarget,
                  a = e.handleObj;
                return (r && (r === i || C.contains(i, r))) || ((e.type = a.origType), (n = a.handler.apply(this, arguments)), (e.type = t)), n;
              },
            };
          }),
          C.fn.extend({
            on: function (e, t, n, i) {
              return ke(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
              return ke(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
              var i, r;
              if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
              if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ae),
                this.each(function () {
                  C.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Oe = /<script|<style|<link/i,
          Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function De(e, t) {
          return (O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0]) || e;
        }
        function $e(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Ne(e) {
          return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function ze(e, t) {
          var n, i, r, a, s, o;
          if (1 === t.nodeType) {
            if (Z.hasData(e) && (o = Z.get(e).events)) for (r in (Z.remove(t, "handle events"), o)) for (n = 0, i = o[r].length; n < i; n++) C.event.add(t, r, o[r][n]);
            J.hasData(e) && ((a = J.access(e)), (s = C.extend({}, a)), J.set(t, s));
          }
        }
        function Ie(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ge.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
        }
        function je(e, t, n, i) {
          t = l(t);
          var r,
            a,
            s,
            o,
            c,
            d,
            u = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            m = v(h);
          if (m || (p > 1 && "string" == typeof h && !g.checkClone && Le.test(h)))
            return e.each(function (r) {
              var a = e.eq(r);
              m && (t[0] = h.call(this, r, a.html())), je(a, t, n, i);
            });
          if (p && ((a = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = a), a || i)) {
            for (o = (s = C.map(we(r, "script"), $e)).length; u < p; u++) (c = r), u !== f && ((c = C.clone(c, !0, !0)), o && C.merge(s, we(c, "script"))), n.call(e[u], c, u);
            if (o)
              for (d = s[s.length - 1].ownerDocument, C.map(s, Ne), u = 0; u < o; u++)
                (c = s[u]),
                  ye.test(c.type || "") &&
                    !Z.access(c, "globalEval") &&
                    C.contains(d, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, d) : x(c.textContent.replace(Pe, ""), c, d));
          }
          return e;
        }
        function Be(e, t, n) {
          for (var i, r = t ? C.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || C.cleanData(we(i)), i.parentNode && (n && oe(i) && xe(we(i, "script")), i.parentNode.removeChild(i));
          return e;
        }
        C.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var i,
              r,
              a,
              s,
              o = e.cloneNode(!0),
              l = oe(e);
            if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e))) for (s = we(o), i = 0, r = (a = we(e)).length; i < r; i++) Ie(a[i], s[i]);
            if (t)
              if (n) for (a = a || we(e), s = s || we(o), i = 0, r = a.length; i < r; i++) ze(a[i], s[i]);
              else ze(e, o);
            return (s = we(o, "script")).length > 0 && xe(s, !l && we(e, "script")), o;
          },
          cleanData: function (e) {
            for (var t, n, i, r = C.event.special, a = 0; void 0 !== (n = e[a]); a++)
              if (Q(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events) for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                  n[Z.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
              }
          },
        }),
          C.fn.extend({
            detach: function (e) {
              return Be(this, e, !0);
            },
            remove: function (e) {
              return Be(this, e);
            },
            text: function (e) {
              return Y(
                this,
                function (e) {
                  return void 0 === e
                    ? C.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return je(this, arguments, function (e) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return je(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = De(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(we(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return C.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Y(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !Oe.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                      for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(we(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return je(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  C.inArray(this, e) < 0 && (C.cleanData(we(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            C.fn[e] = function (e) {
              for (var n, i = [], r = C(e), a = r.length - 1, s = 0; s <= a; s++) (n = s === a ? this : this.clone(!0)), C(r[s])[t](n), c.apply(i, n.get());
              return this.pushStack(i);
            };
          });
        var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          Re = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = i), t.getComputedStyle(e);
          },
          qe = function (e, t, n) {
            var i,
              r,
              a = {};
            for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((i = n.call(e)), t)) e.style[r] = a[r];
            return i;
          },
          We = new RegExp(ae.join("|"), "i");
        function Ge(e, t, n) {
          var i,
            r,
            a,
            s,
            o = e.style;
          return (
            (n = n || Re(e)) &&
              ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = C.style(e, t)),
              !g.pixelBoxStyles() && He.test(s) && We.test(t) && ((i = o.width), (r = o.minWidth), (a = o.maxWidth), (o.minWidth = o.maxWidth = o.width = s), (s = n.width), (o.width = i), (o.minWidth = r), (o.maxWidth = a))),
            void 0 !== s ? s + "" : s
          );
        }
        function Ye(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (d) {
              (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                se.appendChild(c).appendChild(d);
              var e = i.getComputedStyle(d);
              (n = "1%" !== e.top), (l = 12 === t(e.marginLeft)), (d.style.right = "60%"), (s = 36 === t(e.right)), (r = 36 === t(e.width)), (d.style.position = "absolute"), (a = 12 === t(d.offsetWidth / 3)), se.removeChild(c), (d = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            r,
            a,
            s,
            o,
            l,
            c = b.createElement("div"),
            d = b.createElement("div");
          d.style &&
            ((d.style.backgroundClip = "content-box"),
            (d.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === d.style.backgroundClip),
            C.extend(g, {
              boxSizingReliable: function () {
                return e(), r;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), a;
              },
              reliableTrDimensions: function () {
                var e, t, n, r;
                return (
                  null == o &&
                    ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (n = b.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                    (t.style.cssText = "border:1px solid"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    (n.style.display = "block"),
                    se.appendChild(e).appendChild(t).appendChild(n),
                    (r = i.getComputedStyle(t)),
                    (o = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                    se.removeChild(e)),
                  o
                );
              },
            }));
        })();
        var Fe = ["Webkit", "Moz", "ms"],
          Xe = b.createElement("div").style,
          Ve = {};
        function Ue(e) {
          var t = C.cssProps[e] || Ve[e];
          return (
            t ||
            (e in Xe
              ? e
              : (Ve[e] =
                  (function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--; ) if ((e = Fe[n] + t) in Xe) return e;
                  })(e) || e))
          );
        }
        var Qe = /^(none|table(?!-c[ea]).+)/,
          Ke = /^--/,
          Ze = { position: "absolute", visibility: "hidden", display: "block" },
          Je = { letterSpacing: "0", fontWeight: "400" };
        function et(e, t, n) {
          var i = re.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }
        function tt(e, t, n, i, r, a) {
          var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (l += C.css(e, n + ae[s], !0, r)),
              i
                ? ("content" === n && (l -= C.css(e, "padding" + ae[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ae[s] + "Width", !0, r)))
                : ((l += C.css(e, "padding" + ae[s], !0, r)), "padding" !== n ? (l += C.css(e, "border" + ae[s] + "Width", !0, r)) : (o += C.css(e, "border" + ae[s] + "Width", !0, r)));
          return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - 0.5)) || 0), l;
        }
        function nt(e, t, n) {
          var i = Re(e),
            r = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            a = r,
            s = Ge(e, t, i),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
          if (He.test(s)) {
            if (!n) return s;
            s = "auto";
          }
          return (
            ((!g.boxSizingReliable() && r) || (!g.reliableTrDimensions() && O(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === C.css(e, "display", !1, i))) &&
              e.getClientRects().length &&
              ((r = "border-box" === C.css(e, "boxSizing", !1, i)), (a = o in e) && (s = e[o])),
            (s = parseFloat(s) || 0) + tt(e, t, n || (r ? "border" : "content"), a, i, s) + "px"
          );
        }
        function it(e, t, n, i, r) {
          return new it.prototype.init(e, t, n, i, r);
        }
        C.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ge(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r,
                a,
                s,
                o = U(t),
                l = Ke.test(t),
                c = e.style;
              if ((l || (t = Ue(o)), (s = C.cssHooks[t] || C.cssHooks[o]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
              "string" === (a = typeof n) && (r = re.exec(n)) && r[1] && ((n = de(e, t, r)), (a = "number")),
                null != n &&
                  n == n &&
                  ("number" !== a || l || (n += (r && r[3]) || (C.cssNumber[o] ? "" : "px")),
                  g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
          },
          css: function (e, t, n, i) {
            var r,
              a,
              s,
              o = U(t);
            return (
              Ke.test(t) || (t = Ue(o)),
              (s = C.cssHooks[t] || C.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)),
              void 0 === r && (r = Ge(e, t, i)),
              "normal" === r && t in Je && (r = Je[t]),
              "" === n || n ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r) : r
            );
          },
        }),
          C.each(["height", "width"], function (e, t) {
            C.cssHooks[t] = {
              get: function (e, n, i) {
                if (n)
                  return !Qe.test(C.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? nt(e, t, i)
                    : qe(e, Ze, function () {
                        return nt(e, t, i);
                      });
              },
              set: function (e, n, i) {
                var r,
                  a = Re(e),
                  s = !g.scrollboxSize() && "absolute" === a.position,
                  o = (s || i) && "border-box" === C.css(e, "boxSizing", !1, a),
                  l = i ? tt(e, t, i, o, a) : 0;
                return (
                  o && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - tt(e, t, "border", !1, a) - 0.5)),
                  l && (r = re.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = C.css(e, t))),
                  et(0, n, l)
                );
              },
            };
          }),
          (C.cssHooks.marginLeft = Ye(g.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ge(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    qe(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (C.cssHooks[e + t] = {
              expand: function (n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
                return r;
              },
            }),
              "margin" !== e && (C.cssHooks[e + t].set = et);
          }),
          C.fn.extend({
            css: function (e, t) {
              return Y(
                this,
                function (e, t, n) {
                  var i,
                    r,
                    a = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (i = Re(e), r = t.length; s < r; s++) a[t[s]] = C.css(e, t[s], !1, i);
                    return a;
                  }
                  return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (C.Tween = it),
          (it.prototype = {
            constructor: it,
            init: function (e, t, n, i, r, a) {
              (this.elem = e), (this.prop = n), (this.easing = r || C.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = a || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = it.propHooks[this.prop];
              return e && e.get ? e.get(this) : it.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = it.propHooks[this.prop];
              return (
                this.options.duration ? (this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : it.propHooks._default.set(this),
                this
              );
            },
          }),
          (it.prototype.init.prototype = it.prototype),
          (it.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!C.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)]) ? (e.elem[e.prop] = e.now) : C.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (it.propHooks.scrollTop = it.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
              },
            }),
          (C.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (C.fx = it.prototype.init),
          (C.fx.step = {});
        var rt,
          at,
          st = /^(?:toggle|show|hide)$/,
          ot = /queueHooks$/;
        function lt() {
          at && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, C.fx.interval), C.fx.tick());
        }
        function ct() {
          return (
            i.setTimeout(function () {
              rt = void 0;
            }),
            (rt = Date.now())
          );
        }
        function dt(e, t) {
          var n,
            i = 0,
            r = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ae[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
        }
        function ut(e, t, n) {
          for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), a = 0, s = r.length; a < s; a++) if ((i = r[a].call(n, t, e))) return i;
        }
        function pt(e, t, n) {
          var i,
            r,
            a = 0,
            s = pt.prefilters.length,
            o = C.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (r) return !1;
              for (var t = rt || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), a = 0, s = c.tweens.length; a < s; a++) c.tweens[a].run(i);
              return o.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1);
            },
            c = o.promise({
              elem: e,
              props: C.extend({}, t),
              opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: rt || ct(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i;
              },
              stop: function (t) {
                var n = 0,
                  i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this;
              },
            }),
            d = c.props;
          for (
            !(function (e, t) {
              var n, i, r, a, s;
              for (n in e)
                if (((r = t[(i = U(n))]), (a = e[n]), Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])), n !== i && ((e[i] = a), delete e[n]), (s = C.cssHooks[i]) && ("expand" in s)))
                  for (n in ((a = s.expand(a)), delete e[i], a)) (n in e) || ((e[n] = a[n]), (t[n] = r));
                else t[i] = r;
            })(d, c.opts.specialEasing);
            a < s;
            a++
          )
            if ((i = pt.prefilters[a].call(c, e, d, c.opts))) return v(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
          return (
            C.map(d, ut, c),
            v(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            C.fx.timer(C.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (C.Animation = C.extend(pt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return de(n.elem, e, re.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
            for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var i,
                r,
                a,
                s,
                o,
                l,
                c,
                d,
                u = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                m = e.nodeType && ce(e),
                g = Z.get(e, "fxshow");
              for (i in (n.queue ||
                (null == (s = C._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (o = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || o();
                  })),
                s.unqueued++,
                p.always(function () {
                  p.always(function () {
                    s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((r = t[i]), st.test(r))) {
                  if ((delete t[i], (a = a || "toggle" === r), r === (m ? "hide" : "show"))) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0;
                  }
                  f[i] = (g && g[i]) || C.style(e, i);
                }
              if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                for (i in (u &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (c = g && g.display) && (c = Z.get(e, "display")),
                  "none" === (d = C.css(e, "display")) && (c ? (d = c) : (fe([e], !0), (c = e.style.display || c), (d = C.css(e, "display")), fe([e]))),
                  ("inline" === d || ("inline-block" === d && null != c)) &&
                    "none" === C.css(e, "float") &&
                    (l ||
                      (p.done(function () {
                        h.display = c;
                      }),
                      null == c && ((d = h.display), (c = "none" === d ? "" : d))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                f))
                  l ||
                    (g ? "hidden" in g && (m = g.hidden) : (g = Z.access(e, "fxshow", { display: c })),
                    a && (g.hidden = !m),
                    m && fe([e], !0),
                    p.done(function () {
                      for (i in (m || fe([e]), Z.remove(e, "fxshow"), f)) C.style(e, i, f[i]);
                    })),
                    (l = ut(m ? g[i] : 0, i, p)),
                    i in g || ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
          },
        })),
          (C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
            return (
              C.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in C.fx.speeds ? (i.duration = C.fx.speeds[i.duration]) : (i.duration = C.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
              }),
              i
            );
          }),
          C.fn.extend({
            fadeTo: function (e, t, n, i) {
              return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
              var r = C.isEmptyObject(e),
                a = C.speed(t, n, i),
                s = function () {
                  var t = pt(this, C.extend({}, e), a);
                  (r || Z.get(this, "finish")) && t.stop(!0);
                };
              return (s.finish = s), r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s);
            },
            stop: function (e, t, n) {
              var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    r = null != e && e + "queueHooks",
                    a = C.timers,
                    s = Z.get(this);
                  if (r) s[r] && s[r].stop && i(s[r]);
                  else for (r in s) s[r] && s[r].stop && ot.test(r) && i(s[r]);
                  for (r = a.length; r--; ) a[r].elem !== this || (null != e && a[r].queue !== e) || (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
                  (!t && n) || C.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    a = C.timers,
                    s = i ? i.length : 0;
                  for (n.finish = !0, C.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                  for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          C.each(["toggle", "show", "hide"], function (e, t) {
            var n = C.fn[t];
            C.fn[t] = function (e, i, r) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r);
            };
          }),
          C.each({ slideDown: dt("show"), slideUp: dt("hide"), slideToggle: dt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            C.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }),
          (C.timers = []),
          (C.fx.tick = function () {
            var e,
              t = 0,
              n = C.timers;
            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), (rt = void 0);
          }),
          (C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start();
          }),
          (C.fx.interval = 13),
          (C.fx.start = function () {
            at || ((at = !0), lt());
          }),
          (C.fx.stop = function () {
            at = null;
          }),
          (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (C.fn.delay = function (e, t) {
            return (
              (e = (C.fx && C.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var r = i.setTimeout(t, e);
                n.stop = function () {
                  i.clearTimeout(r);
                };
              })
            );
          }),
          (function () {
            var e = b.createElement("input"),
              t = b.createElement("select").appendChild(b.createElement("option"));
            (e.type = "checkbox"), (g.checkOn = "" !== e.value), (g.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (g.radioValue = "t" === e.value);
          })();
        var ft,
          ht = C.expr.attrHandle;
        C.fn.extend({
          attr: function (e, t) {
            return Y(this, C.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              C.removeAttr(this, e);
            });
          },
        }),
          C.extend({
            attr: function (e, t, n) {
              var i,
                r,
                a = e.nodeType;
              if (3 !== a && 8 !== a && 2 !== a)
                return void 0 === e.getAttribute
                  ? C.prop(e, t, n)
                  : ((1 === a && C.isXMLDoc(e)) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void C.removeAttr(e, t)
                        : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : null == (i = C.find.attr(e, t))
                      ? void 0
                      : i);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!g.radioValue && "radio" === t && O(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                i = 0,
                r = t && t.match(j);
              if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
            },
          }),
          (ft = {
            set: function (e, t, n) {
              return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || C.find.attr;
            ht[t] = function (e, t, i) {
              var r,
                a,
                s = t.toLowerCase();
              return i || ((a = ht[s]), (ht[s] = r), (r = null != n(e, t, i) ? s : null), (ht[s] = a)), r;
            };
          });
        var mt = /^(?:input|select|textarea|button)$/i,
          gt = /^(?:a|area)$/i;
        function vt(e) {
          return (e.match(j) || []).join(" ");
        }
        function yt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function bt(e) {
          return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
        }
        C.fn.extend({
          prop: function (e, t) {
            return Y(this, C.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[C.propFix[e] || e];
            });
          },
        }),
          C.extend({
            prop: function (e, t, n) {
              var i,
                r,
                a = e.nodeType;
              if (3 !== a && 8 !== a && 2 !== a)
                return (
                  (1 === a && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (r = C.propHooks[t])), void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = C.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          g.optSelected ||
            (C.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this;
          }),
          C.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                r,
                a,
                s,
                o,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  C(this).addClass(e.call(this, t, yt(this)));
                });
              if ((t = bt(e)).length)
                for (; (n = this[l++]); )
                  if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                    for (s = 0; (a = t[s++]); ) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                    r !== (o = vt(i)) && n.setAttribute("class", o);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                r,
                a,
                s,
                o,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  C(this).removeClass(e.call(this, t, yt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = bt(e)).length)
                for (; (n = this[l++]); )
                  if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                    for (s = 0; (a = t[s++]); ) for (; i.indexOf(" " + a + " ") > -1; ) i = i.replace(" " + a + " ", " ");
                    r !== (o = vt(i)) && n.setAttribute("class", o);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                i = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && i
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : v(e)
                ? this.each(function (n) {
                    C(this).toggleClass(e.call(this, n, yt(this), t), t);
                  })
                : this.each(function () {
                    var t, r, a, s;
                    if (i) for (r = 0, a = C(this), s = bt(e); (t = s[r++]); ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else (void 0 !== e && "boolean" !== n) || ((t = yt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                i = 0;
              for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
              return !1;
            },
          });
        var wt = /\r/g;
        C.fn.extend({
          val: function (e) {
            var t,
              n,
              i,
              r = this[0];
            return arguments.length
              ? ((i = v(e)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    (null == (r = i ? e.call(this, n, C(this).val()) : e)
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = C.map(r, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                }))
              : r
              ? (t = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                ? n
                : "string" == typeof (n = r.value)
                ? n.replace(wt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          C.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = C.find.attr(e, "value");
                  return null != t ? t : vt(C.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    i,
                    r = e.options,
                    a = e.selectedIndex,
                    s = "select-one" === e.type,
                    o = s ? null : [],
                    l = s ? a + 1 : r.length;
                  for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                    if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                      if (((t = C(n).val()), s)) return t;
                      o.push(t);
                    }
                  return o;
                },
                set: function (e, t) {
                  for (var n, i, r = e.options, a = C.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = C.inArray(C.valHooks.option.get(i), a) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), a;
                },
              },
            },
          }),
          C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return (e.checked = C.inArray(C(e).val(), t) > -1);
              },
            }),
              g.checkOn ||
                (C.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (g.focusin = "onfocusin" in i);
        var xt = /^(?:focusinfocus|focusoutblur)$/,
          Et = function (e) {
            e.stopPropagation();
          };
        C.extend(C.event, {
          trigger: function (e, t, n, r) {
            var a,
              s,
              o,
              l,
              c,
              d,
              u,
              p,
              h = [n || b],
              m = f.call(e, "type") ? e.type : e,
              g = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = p = o = n = n || b),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !xt.test(m + C.event.triggered) &&
                (m.indexOf(".") > -1 && ((g = m.split(".")), (m = g.shift()), g.sort()),
                (c = m.indexOf(":") < 0 && "on" + m),
                ((e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                (e.namespace = g.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : C.makeArray(t, [e])),
                (u = C.event.special[m] || {}),
                r || !u.trigger || !1 !== u.trigger.apply(n, t)))
            ) {
              if (!r && !u.noBubble && !y(n)) {
                for (l = u.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (o = s);
                o === (n.ownerDocument || b) && h.push(o.defaultView || o.parentWindow || i);
              }
              for (a = 0; (s = h[a++]) && !e.isPropagationStopped(); )
                (p = s),
                  (e.type = a > 1 ? l : u.bindType || m),
                  (d = (Z.get(s, "events") || Object.create(null))[e.type] && Z.get(s, "handle")) && d.apply(s, t),
                  (d = c && s[c]) && d.apply && Q(s) && ((e.result = d.apply(s, t)), !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                r ||
                  e.isDefaultPrevented() ||
                  (u._default && !1 !== u._default.apply(h.pop(), t)) ||
                  !Q(n) ||
                  (c &&
                    v(n[m]) &&
                    !y(n) &&
                    ((o = n[c]) && (n[c] = null),
                    (C.event.triggered = m),
                    e.isPropagationStopped() && p.addEventListener(m, Et),
                    n[m](),
                    e.isPropagationStopped() && p.removeEventListener(m, Et),
                    (C.event.triggered = void 0),
                    o && (n[c] = o))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
            C.event.trigger(i, null, t);
          },
        }),
          C.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                C.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return C.event.trigger(e, t, n, !0);
            },
          }),
          g.focusin ||
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                C.event.simulate(t, e.target, C.event.fix(e));
              };
              C.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t);
                  r || i.addEventListener(e, n, !0), Z.access(i, t, (r || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t) - 1;
                  r ? Z.access(i, t, r) : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                },
              };
            });
        var Tt = i.location,
          Ct = { guid: Date.now() },
          _t = /\?/;
        C.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new i.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
              C.error(
                "Invalid XML: " +
                  (n
                    ? C.map(n.childNodes, function (e) {
                        return e.textContent;
                      }).join("\n")
                    : e)
              ),
            t
          );
        };
        var At = /\[\]$/,
          St = /\r?\n/g,
          kt = /^(?:submit|button|image|reset|file)$/i,
          Mt = /^(?:input|select|textarea|keygen)/i;
        function Ot(e, t, n, i) {
          var r;
          if (Array.isArray(t))
            C.each(t, function (t, r) {
              n || At.test(e) ? i(e, r) : Ot(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
            });
          else if (n || "object" !== E(t)) i(e, t);
          else for (r in t) Ot(e + "[" + r + "]", t[r], n, i);
        }
        (C.param = function (e, t) {
          var n,
            i = [],
            r = function (e, t) {
              var n = v(t) ? t() : t;
              i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
            C.each(e, function () {
              r(this.name, this.value);
            });
          else for (n in e) Ot(n, e[n], t, r);
          return i.join("&");
        }),
          C.fn.extend({
            serialize: function () {
              return C.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return this.name && !C(this).is(":disabled") && Mt.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e));
                })
                .map(function (e, t) {
                  var n = C(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? C.map(n, function (e) {
                        return { name: t.name, value: e.replace(St, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(St, "\r\n") };
                })
                .get();
            },
          });
        var Lt = /%20/g,
          Pt = /#.*$/,
          Dt = /([?&])_=[^&]*/,
          $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Nt = /^(?:GET|HEAD)$/,
          zt = /^\/\//,
          It = {},
          jt = {},
          Bt = "*/".concat("*"),
          Ht = b.createElement("a");
        function Rt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
              r = 0,
              a = t.toLowerCase().match(j) || [];
            if (v(n)) for (; (i = a[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
          };
        }
        function qt(e, t, n, i) {
          var r = {},
            a = e === jt;
          function s(o) {
            var l;
            return (
              (r[o] = !0),
              C.each(e[o] || [], function (e, o) {
                var c = o(t, n, i);
                return "string" != typeof c || a || r[c] ? (a ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
              }),
              l
            );
          }
          return s(t.dataTypes[0]) || (!r["*"] && s("*"));
        }
        function Wt(e, t) {
          var n,
            i,
            r = C.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && C.extend(!0, e, i), e;
        }
        (Ht.href = Tt.href),
          C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Tt.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
              converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
            },
            ajaxPrefilter: Rt(It),
            ajaxTransport: Rt(jt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                r,
                a,
                s,
                o,
                l,
                c,
                d,
                u,
                p,
                f = C.ajaxSetup({}, t),
                h = f.context || f,
                m = f.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                g = C.Deferred(),
                v = C.Callbacks("once memory"),
                y = f.statusCode || {},
                w = {},
                x = {},
                E = "canceled",
                T = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!s) for (s = {}; (t = $t.exec(a)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return c ? a : null;
                  },
                  setRequestHeader: function (e, t) {
                    return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                    return null == c && (f.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) T.always(e[T.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || E;
                    return n && n.abort(t), _(0, t), this;
                  },
                };
              if (
                (g.promise(T),
                (f.url = ((e || f.url || Tt.href) + "").replace(zt, Tt.protocol + "//")),
                (f.type = t.method || t.type || f.method || f.type),
                (f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""]),
                null == f.crossDomain)
              ) {
                l = b.createElement("a");
                try {
                  (l.href = f.url), (l.href = l.href), (f.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host);
                } catch (e) {
                  f.crossDomain = !0;
                }
              }
              if ((f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), qt(It, f, t, T), c)) return T;
              for (u in ((d = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !Nt.test(f.type)),
              (r = f.url.replace(Pt, "")),
              f.hasContent
                ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+"))
                : ((p = f.url.slice(r.length)),
                  f.data && (f.processData || "string" == typeof f.data) && ((r += (_t.test(r) ? "&" : "?") + f.data), delete f.data),
                  !1 === f.cache && ((r = r.replace(Dt, "$1")), (p = (_t.test(r) ? "&" : "?") + "_=" + Ct.guid++ + p)),
                  (f.url = r + p)),
              f.ifModified && (C.lastModified[r] && T.setRequestHeader("If-Modified-Since", C.lastModified[r]), C.etag[r] && T.setRequestHeader("If-None-Match", C.etag[r])),
              ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && T.setRequestHeader("Content-Type", f.contentType),
              T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : f.accepts["*"]),
              f.headers))
                T.setRequestHeader(u, f.headers[u]);
              if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
              if (((E = "abort"), v.add(f.complete), T.done(f.success), T.fail(f.error), (n = qt(jt, f, t, T)))) {
                if (((T.readyState = 1), d && m.trigger("ajaxSend", [T, f]), c)) return T;
                f.async &&
                  f.timeout > 0 &&
                  (o = i.setTimeout(function () {
                    T.abort("timeout");
                  }, f.timeout));
                try {
                  (c = !1), n.send(w, _);
                } catch (e) {
                  if (c) throw e;
                  _(-1, e);
                }
              } else _(-1, "No Transport");
              function _(e, t, s, l) {
                var u,
                  p,
                  b,
                  w,
                  x,
                  E = t;
                c ||
                  ((c = !0),
                  o && i.clearTimeout(o),
                  (n = void 0),
                  (a = l || ""),
                  (T.readyState = e > 0 ? 4 : 0),
                  (u = (e >= 200 && e < 300) || 304 === e),
                  s &&
                    (w = (function (e, t, n) {
                      for (var i, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (i)
                        for (r in o)
                          if (o[r] && o[r].test(i)) {
                            l.unshift(r);
                            break;
                          }
                      if (l[0] in n) a = l[0];
                      else {
                        for (r in n) {
                          if (!l[0] || e.converters[r + " " + l[0]]) {
                            a = r;
                            break;
                          }
                          s || (s = r);
                        }
                        a = a || s;
                      }
                      if (a) return a !== l[0] && l.unshift(a), n[a];
                    })(f, T, s)),
                  !u && C.inArray("script", f.dataTypes) > -1 && C.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),
                  (w = (function (e, t, n, i) {
                    var r,
                      a,
                      s,
                      o,
                      l,
                      c = {},
                      d = e.dataTypes.slice();
                    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (a = d.shift(); a; )
                      if ((e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = d.shift())))
                        if ("*" === a) a = l;
                        else if ("*" !== l && l !== a) {
                          if (!(s = c[l + " " + a] || c["* " + a]))
                            for (r in c)
                              if ((o = r.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                                !0 === s ? (s = c[r]) : !0 !== c[r] && ((a = o[0]), d.unshift(o[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (e) {
                                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a };
                              }
                        }
                    return { state: "success", data: t };
                  })(f, w, T, u)),
                  u
                    ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (C.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (C.etag[r] = x)),
                      204 === e || "HEAD" === f.type ? (E = "nocontent") : 304 === e ? (E = "notmodified") : ((E = w.state), (p = w.data), (u = !(b = w.error))))
                    : ((b = E), (!e && E) || ((E = "error"), e < 0 && (e = 0))),
                  (T.status = e),
                  (T.statusText = (t || E) + ""),
                  u ? g.resolveWith(h, [p, E, T]) : g.rejectWith(h, [T, E, b]),
                  T.statusCode(y),
                  (y = void 0),
                  d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? p : b]),
                  v.fireWith(h, [T, E]),
                  d && (m.trigger("ajaxComplete", [T, f]), --C.active || C.event.trigger("ajaxStop")));
              }
              return T;
            },
            getJSON: function (e, t, n) {
              return C.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return C.get(e, void 0, t, "script");
            },
          }),
          C.each(["get", "post"], function (e, t) {
            C[t] = function (e, n, i, r) {
              return v(n) && ((r = r || i), (i = n), (n = void 0)), C.ajax(C.extend({ url: e, type: t, dataType: r, data: n, success: i }, C.isPlainObject(e) && e));
            };
          }),
          C.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }),
          (C._evalUrl = function (e, t, n) {
            return C.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                C.globalEval(e, t, n);
              },
            });
          }),
          C.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (v(e) && (e = e.call(this[0])),
                  (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return v(e)
                ? this.each(function (t) {
                    C(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = C(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                C(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    C(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e);
          }),
          (C.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (C.ajaxSettings.xhr = function () {
            try {
              return new i.XMLHttpRequest();
            } catch (e) {}
          });
        var Gt = { 0: 200, 1223: 204 },
          Yt = C.ajaxSettings.xhr();
        (g.cors = !!Yt && "withCredentials" in Yt),
          (g.ajax = Yt = !!Yt),
          C.ajaxTransport(function (e) {
            var t, n;
            if (g.cors || (Yt && !e.crossDomain))
              return {
                send: function (r, a) {
                  var s,
                    o = e.xhr();
                  if ((o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) o[s] = e.xhrFields[s];
                  for (s in (e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) o.setRequestHeader(s, r[s]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                        "abort" === e
                          ? o.abort()
                          : "error" === e
                          ? "number" != typeof o.status
                            ? a(0, "error")
                            : a(o.status, o.statusText)
                          : a(Gt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText }, o.getAllResponseHeaders()));
                    };
                  }),
                    (o.onload = t()),
                    (n = o.onerror = o.ontimeout = t("error")),
                    void 0 !== o.onabort
                      ? (o.onabort = n)
                      : (o.onreadystatechange = function () {
                          4 === o.readyState &&
                            i.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    o.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          C.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          C.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return C.globalEval(e), e;
              },
            },
          }),
          C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }),
          C.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (i, r) {
                  (t = C("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Ft,
          Xt = [],
          Vt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || C.expando + "_" + Ct.guid++;
            return (this[e] = !0), e;
          },
        }),
          C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
              a,
              s,
              o = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0])
              return (
                (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                o ? (e[o] = e[o].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                  return s || C.error(r + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (a = i[r]),
                (i[r] = function () {
                  s = arguments;
                }),
                n.always(function () {
                  void 0 === a ? C(i).removeProp(r) : (i[r] = a), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), s && v(a) && a(s[0]), (s = a = void 0);
                }),
                "script"
              );
          }),
          (g.createHTMLDocument = (((Ft = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ft.childNodes.length)),
          (C.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t || (g.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
                (a = !n && []),
                (r = L.exec(e)) ? [t.createElement(r[1])] : ((r = Te([e], t, a)), a && a.length && C(a).remove(), C.merge([], r.childNodes)));
            var i, r, a;
          }),
          (C.fn.load = function (e, t, n) {
            var i,
              r,
              a,
              s = this,
              o = e.indexOf(" ");
            return (
              o > -1 && ((i = vt(e.slice(o))), (e = e.slice(0, o))),
              v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
              s.length > 0 &&
                C.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (a = arguments), s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        s.each(function () {
                          n.apply(this, a || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (C.expr.pseudos.animated = function (e) {
            return C.grep(C.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (C.offset = {
            setOffset: function (e, t, n) {
              var i,
                r,
                a,
                s,
                o,
                l,
                c = C.css(e, "position"),
                d = C(e),
                u = {};
              "static" === c && (e.style.position = "relative"),
                (o = d.offset()),
                (a = C.css(e, "top")),
                (l = C.css(e, "left")),
                ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? ((s = (i = d.position()).top), (r = i.left)) : ((s = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
                v(t) && (t = t.call(e, n, C.extend({}, o))),
                null != t.top && (u.top = t.top - o.top + s),
                null != t.left && (u.left = t.left - o.left + r),
                "using" in t ? t.using.call(e, u) : d.css(u);
            },
          }),
          C.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      C.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0];
              return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                  for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
                  e && e !== i && 1 === e.nodeType && (((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0)), (r.left += C.css(e, "borderLeftWidth", !0)));
                }
                return { top: t.top - r.top - C.css(i, "marginTop", !0), left: t.left - r.left - C.css(i, "marginLeft", !0) };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
                return e || se;
              });
            },
          }),
          C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (i) {
              return Y(
                this,
                function (e, i, r) {
                  var a;
                  if ((y(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView), void 0 === r)) return a ? a[t] : e[i];
                  a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }),
          C.each(["top", "left"], function (e, t) {
            C.cssHooks[t] = Ye(g.pixelPosition, function (e, n) {
              if (n) return (n = Ge(e, t)), He.test(n) ? C(e).position()[t] + "px" : n;
            });
          }),
          C.each({ Height: "height", Width: "width" }, function (e, t) {
            C.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
              C.fn[i] = function (r, a) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  o = n || (!0 === r || !0 === a ? "margin" : "border");
                return Y(
                  this,
                  function (t, n, r) {
                    var a;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((a = t.documentElement), Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]))
                      : void 0 === r
                      ? C.css(t, n, o)
                      : C.style(t, n, r, o);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            });
          }),
          C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }),
          C.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
              return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          });
        var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (C.proxy = function (e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (i = o.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, i.concat(o.call(arguments)));
              }).guid = e.guid =
                e.guid || C.guid++),
              r
            );
        }),
          (C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0);
          }),
          (C.isArray = Array.isArray),
          (C.parseJSON = JSON.parse),
          (C.nodeName = O),
          (C.isFunction = v),
          (C.isWindow = y),
          (C.camelCase = U),
          (C.type = E),
          (C.now = Date.now),
          (C.isNumeric = function (e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }),
          (C.trim = function (e) {
            return null == e ? "" : (e + "").replace(Ut, "");
          }),
          void 0 ===
            (n = function () {
              return C;
            }.apply(t, [])) || (e.exports = n);
        var Qt = i.jQuery,
          Kt = i.$;
        return (
          (C.noConflict = function (e) {
            return i.$ === C && (i.$ = Kt), e && i.jQuery === C && (i.jQuery = Qt), C;
          }),
          void 0 === r && (i.jQuery = i.$ = C),
          C
        );
      });
    },
    672: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var i = n(379),
        r = n.n(i),
        a = n(206),
        s = { insert: "head", singleton: !1 };
      r()(a.Z, s);
      const o = a.Z.locals || {};
    },
    379: (e, t, n) => {
      "use strict";
      var i,
        r = function () {
          return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
        },
        a = (function () {
          var e = {};
          return function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })(),
        s = [];
      function o(e) {
        for (var t = -1, n = 0; n < s.length; n++)
          if (s[n].identifier === e) {
            t = n;
            break;
          }
        return t;
      }
      function l(e, t) {
        for (var n = {}, i = [], r = 0; r < e.length; r++) {
          var a = e[r],
            l = t.base ? a[0] + t.base : a[0],
            c = n[l] || 0,
            d = "".concat(l, " ").concat(c);
          n[l] = c + 1;
          var u = o(d),
            p = { css: a[1], media: a[2], sourceMap: a[3] };
          -1 !== u ? (s[u].references++, s[u].updater(p)) : s.push({ identifier: d, updater: g(p, t), references: 1 }), i.push(d);
        }
        return i;
      }
      function c(e) {
        var t = document.createElement("style"),
          i = e.attributes || {};
        if (void 0 === i.nonce) {
          var r = n.nc;
          r && (i.nonce = r);
        }
        if (
          (Object.keys(i).forEach(function (e) {
            t.setAttribute(e, i[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var s = a(e.insert || "head");
          if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          s.appendChild(t);
        }
        return t;
      }
      var d,
        u =
          ((d = []),
          function (e, t) {
            return (d[e] = t), d.filter(Boolean).join("\n");
          });
      function p(e, t, n, i) {
        var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
        if (e.styleSheet) e.styleSheet.cssText = u(t, r);
        else {
          var a = document.createTextNode(r),
            s = e.childNodes;
          s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a);
        }
      }
      function f(e, t, n) {
        var i = n.css,
          r = n.media,
          a = n.sourceMap;
        if (
          (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
          a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = i;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(i));
        }
      }
      var h = null,
        m = 0;
      function g(e, t) {
        var n, i, r;
        if (t.singleton) {
          var a = m++;
          (n = h || (h = c(t))), (i = p.bind(null, n, a, !1)), (r = p.bind(null, n, a, !0));
        } else
          (n = c(t)),
            (i = f.bind(null, n, t)),
            (r = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          i(e),
          function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
              i((e = t));
            } else r();
          }
        );
      }
      e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
        var n = l((e = e || []), t);
        return function (e) {
          if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
            for (var i = 0; i < n.length; i++) {
              var r = o(n[i]);
              s[r].references--;
            }
            for (var a = l(e, t), c = 0; c < n.length; c++) {
              var d = o(n[c]);
              0 === s[d].references && (s[d].updater(), s.splice(d, 1));
            }
            n = a;
          }
        };
      };
    },
    421: (e, t, n) => {
      "use strict";
      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (n) {
            void 0 === e[n] ? (e[n] = t[n]) : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && r(e[n], t[n]);
          });
      }
      n.r(t), n.d(t, { Swiper: () => te, default: () => te });
      var a = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
      };
      function s() {
        var e = "undefined" != typeof document ? document : {};
        return r(e, a), e;
      }
      var o = {
        document: a,
        navigator: { userAgent: "" },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        var e = "undefined" != typeof window ? window : {};
        return r(e, o), e;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function p(e, t, n) {
        return (p = u()
          ? Reflect.construct
          : function (e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var r = new (Function.bind.apply(e, i))();
              return n && d(r, n.prototype), r;
            }).apply(null, arguments);
      }
      function f(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (f = function (e) {
          if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
          var n;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i);
          }
          function i() {
            return p(e, arguments, c(this).constructor);
          }
          return (i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } })), d(i, e);
        })(e);
      }
      var h = (function (e) {
        var t, n;
        function i(t) {
          var n, i, r;
          return (
            (n = e.call.apply(e, [this].concat(t)) || this),
            (i = (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(n)),
            (r = i.__proto__),
            Object.defineProperty(i, "__proto__", {
              get: function () {
                return r;
              },
              set: function (e) {
                r.__proto__ = e;
              },
            }),
            n
          );
        }
        return (n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n), i;
      })(f(Array));
      function m(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, m(e)) : t.push(e);
          }),
          t
        );
      }
      function g(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function v(e, t) {
        var n = l(),
          i = s(),
          r = [];
        if (!t && e instanceof h) return e;
        if (!e) return new h(r);
        if ("string" == typeof e) {
          var a = e.trim();
          if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
            var o = "div";
            0 === a.indexOf("<li") && (o = "ul"),
              0 === a.indexOf("<tr") && (o = "tbody"),
              (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) || (o = "tr"),
              0 === a.indexOf("<tbody") && (o = "table"),
              0 === a.indexOf("<option") && (o = "select");
            var c = i.createElement(o);
            c.innerHTML = a;
            for (var d = 0; d < c.childNodes.length; d += 1) r.push(c.childNodes[d]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              for (var n = [], i = t.querySelectorAll(e), r = 0; r < i.length; r += 1) n.push(i[r]);
              return n;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof h) return e;
          r = e;
        }
        return new h(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(r)
        );
      }
      v.fn = h.prototype;
      var y = "resize scroll".split(" ");
      function b(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          if (void 0 === n[0]) {
            for (var r = 0; r < this.length; r += 1) y.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : v(this[r]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      b("click"),
        b("blur"),
        b("focus"),
        b("focusin"),
        b("focusout"),
        b("keyup"),
        b("keydown"),
        b("keypress"),
        b("submit"),
        b("change"),
        b("mousedown"),
        b("mousemove"),
        b("mouseup"),
        b("mouseenter"),
        b("mouseleave"),
        b("mouseout"),
        b("mouseover"),
        b("touchstart"),
        b("touchend"),
        b("touchmove"),
        b("resize"),
        b("scroll");
      var w = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = m(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, i);
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = m(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, i);
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = m(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            g(this, function (e) {
              return (
                i.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = m(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            i.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else for (var i in e) (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = t[0],
            r = t[1],
            a = t[2],
            s = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), v(t).is(r))) a.apply(t, n);
              else for (var i = v(t).parents(), s = 0; s < i.length; s += 1) v(i[s]).is(r) && a.apply(i[s], n);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
          }
          "function" == typeof t[1] && ((i = t[0]), (a = t[1]), (s = t[2]), (r = void 0)), s || (s = !1);
          for (var c, d = i.split(" "), u = 0; u < this.length; u += 1) {
            var p = this[u];
            if (r)
              for (c = 0; c < d.length; c += 1) {
                var f = d[c];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({ listener: a, proxyListener: o }), p.addEventListener(f, o, s);
              }
            else
              for (c = 0; c < d.length; c += 1) {
                var h = d[c];
                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[h] || (p.dom7Listeners[h] = []), p.dom7Listeners[h].push({ listener: a, proxyListener: l }), p.addEventListener(h, l, s);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var i = t[0],
            r = t[1],
            a = t[2],
            s = t[3];
          "function" == typeof t[1] && ((i = t[0]), (a = t[1]), (s = t[2]), (r = void 0)), s || (s = !1);
          for (var o = i.split(" "), l = 0; l < o.length; l += 1)
            for (var c = o[l], d = 0; d < this.length; d += 1) {
              var u = this[d],
                p = void 0;
              if ((!r && u.dom7Listeners ? (p = u.dom7Listeners[c]) : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]), p && p.length))
                for (var f = p.length - 1; f >= 0; f -= 1) {
                  var h = p[f];
                  (a && h.listener === a) || (a && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === a)
                    ? (u.removeEventListener(c, h.proxyListener, s), p.splice(f, 1))
                    : a || (u.removeEventListener(c, h.proxyListener, s), p.splice(f, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (var e = l(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          for (var r = n[0].split(" "), a = n[1], s = 0; s < r.length; s += 1)
            for (var o = r[s], c = 0; c < this.length; c += 1) {
              var d = this[c];
              if (e.CustomEvent) {
                var u = new e.CustomEvent(o, { detail: a, bubbles: !0, cancelable: !0 });
                (d.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  d.dispatchEvent(u),
                  (d.dom7EventData = []),
                  delete d.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = l(),
              t = s(),
              n = this[0],
              i = n.getBoundingClientRect(),
              r = t.body,
              a = n.clientTop || r.clientTop || 0,
              o = n.clientLeft || r.clientLeft || 0,
              c = n === e ? e.scrollY : n.scrollTop,
              d = n === e ? e.scrollX : n.scrollLeft;
            return { top: i.top + c - a, left: i.left + d - o };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            i = l();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (n = 0; n < this.length; n += 1) for (var r in e) this[n].style[r] = e[r];
              return this;
            }
            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            i = l(),
            r = s(),
            a = this[0];
          if (!a || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (a.matches) return a.matches(e);
            if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
            if (a.msMatchesSelector) return a.msMatchesSelector(e);
            for (t = v(e), n = 0; n < t.length; n += 1) if (t[n] === a) return !0;
            return !1;
          }
          if (e === r) return a === r;
          if (e === i) return a === i;
          if (e.nodeType || e instanceof h) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1) if (t[n] === a) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t = this.length;
          if (e > t - 1) return v([]);
          if (e < 0) {
            var n = t + e;
            return v(n < 0 ? [] : [this[n]]);
          }
          return v([this[e]]);
        },
        append: function () {
          for (var e, t = s(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var i = 0; i < this.length; i += 1)
              if ("string" == typeof e) {
                var r = t.createElement("div");
                for (r.innerHTML = e; r.firstChild; ) this[i].appendChild(r.firstChild);
              } else if (e instanceof h) for (var a = 0; a < e.length; a += 1) this[i].appendChild(e[a]);
              else this[i].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            i = s();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var r = i.createElement("div");
              for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof h) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0 ? (e ? (this[0].nextElementSibling && v(this[0].nextElementSibling).is(e) ? v([this[0].nextElementSibling]) : v([])) : this[0].nextElementSibling ? v([this[0].nextElementSibling]) : v([])) : v([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return v([]);
          for (; n.nextElementSibling; ) {
            var i = n.nextElementSibling;
            e ? v(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return v(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e ? (t.previousElementSibling && v(t.previousElementSibling).is(e) ? v([t.previousElementSibling]) : v([])) : t.previousElementSibling ? v([t.previousElementSibling]) : v([]);
          }
          return v([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return v([]);
          for (; n.previousElementSibling; ) {
            var i = n.previousElementSibling;
            e ? v(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return v(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? v(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
          return v(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].parentNode; i; ) e ? v(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          return v(t);
        },
        closest: function (e) {
          var t = this;
          return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
          return v(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1) for (var i = this[n].children, r = 0; r < i.length; r += 1) (e && !v(i[r]).is(e)) || t.push(i[r]);
          return v(t);
        },
        filter: function (e) {
          return v(g(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(w).forEach(function (e) {
        Object.defineProperty(v.fn, e, { value: w[e], writable: !0 });
      });
      const x = v;
      function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function T() {
        return Date.now();
      }
      function C(e, t) {
        void 0 === t && (t = "x");
        var n,
          i,
          r,
          a = l(),
          s = (function (e) {
            var t,
              n = l();
            return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
          })(e);
        return (
          a.WebKitCSSMatrix
            ? ((i = s.transform || s.webkitTransform).split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new a.WebKitCSSMatrix("none" === i ? "" : i)))
            : (n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
          "x" === t && (i = a.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
          "y" === t && (i = a.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
          i || 0
        );
      }
      function _(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
      }
      function A() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], n = 1; n < arguments.length; n += 1) {
          var i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i)
            for (
              var r = Object.keys(Object(i)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                a = 0,
                s = r.length;
              a < s;
              a += 1
            ) {
              var o = r[a],
                l = Object.getOwnPropertyDescriptor(i, o);
              void 0 !== l && l.enumerable && (_(e[o]) && _(i[o]) ? (i[o].__swiper__ ? (e[o] = i[o]) : A(e[o], i[o])) : !_(e[o]) && _(i[o]) ? ((e[o] = {}), i[o].__swiper__ ? (e[o] = i[o]) : A(e[o], i[o])) : (e[o] = i[o]));
            }
        }
        return e;
      }
      function S(e, t) {
        Object.keys(t).forEach(function (n) {
          _(t[n]) &&
            Object.keys(t[n]).forEach(function (i) {
              "function" == typeof t[n][i] && (t[n][i] = t[n][i].bind(e));
            }),
            (e[n] = t[n]);
        });
      }
      function k(e) {
        return (
          void 0 === e && (e = ""),
          "." +
            e
              .trim()
              .replace(/([\.:\/])/g, "\\$1")
              .replace(/ /g, ".")
        );
      }
      function M(e, t, n, i) {
        var r = s();
        return (
          n &&
            Object.keys(i).forEach(function (n) {
              if (!t[n] && !0 === t.auto) {
                var a = r.createElement("div");
                (a.className = i[n]), e.append(a), (t[n] = a);
              }
            }),
          t
        );
      }
      var O, L, P;
      function D() {
        return (
          O ||
            (O = (function () {
              var e = l(),
                t = s();
              return {
                touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          O
        );
      }
      function $(e) {
        return (
          void 0 === e && (e = {}),
          L ||
            (L = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = D(),
                i = l(),
                r = i.navigator.platform,
                a = t || i.navigator.userAgent,
                s = { ios: !1, android: !1 },
                o = i.screen.width,
                c = i.screen.height,
                d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                u = a.match(/(iPad).*OS\s([\d_]+)/),
                p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r,
                m = "MacIntel" === r;
              return (
                !u &&
                  m &&
                  n.touch &&
                  ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + c) >= 0 &&
                  ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), (m = !1)),
                d && !h && ((s.os = "android"), (s.android = !0)),
                (u || f || p) && ((s.os = "ios"), (s.ios = !0)),
                s
              );
            })(e)),
          L
        );
      }
      function N() {
        return (
          P ||
            (P = (function () {
              var e,
                t = l();
              return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
              };
            })()),
          P
        );
      }
      const z = {
        name: "resize",
        create: function () {
          var e = this;
          A(e, {
            resize: {
              observer: null,
              createObserver: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((e.resize.observer = new ResizeObserver(function (t) {
                    var n = e.width,
                      i = e.height,
                      r = n,
                      a = i;
                    t.forEach(function (t) {
                      var n = t.contentBoxSize,
                        i = t.contentRect,
                        s = t.target;
                      (s && s !== e.el) || ((r = i ? i.width : (n[0] || n).inlineSize), (a = i ? i.height : (n[0] || n).blockSize));
                    }),
                      (r === n && a === i) || e.resize.resizeHandler();
                  })),
                  e.resize.observer.observe(e.el));
              },
              removeObserver: function () {
                e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
              },
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function (e) {
            var t = l();
            e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
          },
          destroy: function (e) {
            var t = l();
            e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
          },
        },
      };
      function I() {
        return (I =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var j = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var n = l(),
            i = this,
            r = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
              if (1 !== e.length) {
                var t = function () {
                  i.emit("observerUpdate", e[0]);
                };
                n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
              } else i.emit("observerUpdate", e[0]);
            });
          r.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(r);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
            e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      const B = {
          name: "observer",
          params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
          create: function () {
            S(this, { observer: I({}, j, { observers: [] }) });
          },
          on: {
            init: function (e) {
              e.observer.init();
            },
            destroy: function (e) {
              e.observer.destroy();
            },
          },
        },
        H = {
          on: function (e, t, n) {
            var i = this;
            if ("function" != typeof t) return i;
            var r = n ? "unshift" : "push";
            return (
              e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
              }),
              i
            );
          },
          once: function (e, t, n) {
            var i = this;
            if ("function" != typeof t) return i;
            function r() {
              i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
              for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
              t.apply(i, a);
            }
            return (r.__emitterProxy = t), i.on(e, r, n);
          },
          onAny: function (e, t) {
            var n = this;
            if ("function" != typeof e) return n;
            var i = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off: function (e, t) {
            var n = this;
            return n.eventsListeners
              ? (e.split(" ").forEach(function (e) {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach(function (i, r) {
                        (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[e].splice(r, 1);
                      });
                }),
                n)
              : n;
          },
          emit: function () {
            var e,
              t,
              n,
              i = this;
            if (!i.eventsListeners) return i;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            "string" == typeof a[0] || Array.isArray(a[0]) ? ((e = a[0]), (t = a.slice(1, a.length)), (n = i)) : ((e = a[0].events), (t = a[0].data), (n = a[0].context || i)), t.unshift(n);
            var o = Array.isArray(e) ? e : e.split(" ");
            return (
              o.forEach(function (e) {
                i.eventsAnyListeners &&
                  i.eventsAnyListeners.length &&
                  i.eventsAnyListeners.forEach(function (i) {
                    i.apply(n, [e].concat(t));
                  }),
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(n, t);
                    });
              }),
              i
            );
          },
        };
      const R = {
        updateSize: function () {
          var e,
            t,
            n = this,
            i = n.$el;
          (e = void 0 !== n.params.width && null !== n.params.width ? n.params.width : i[0].clientWidth),
            (t = void 0 !== n.params.height && null !== n.params.height ? n.params.height : i[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
              (t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              A(n, { width: e, height: t, size: n.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var i = e.params,
            r = e.$wrapperEl,
            a = e.size,
            s = e.rtlTranslate,
            o = e.wrongRTL,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = r.children("." + e.params.slideClass),
            u = l ? e.virtual.slides.length : d.length,
            p = [],
            f = [],
            h = [],
            m = i.slidesOffsetBefore;
          "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
          var g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          var v = e.snapGrid.length,
            y = e.slidesGrid.length,
            b = i.spaceBetween,
            w = -m,
            x = 0,
            E = 0;
          if (void 0 !== a) {
            var T, C;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * a),
              (e.virtualSize = -b),
              s ? d.css({ marginLeft: "", marginTop: "" }) : d.css({ marginRight: "", marginBottom: "" }),
              i.slidesPerColumn > 1 &&
                ((T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
            for (var _, S, k, M = i.slidesPerColumn, O = T / M, L = Math.floor(u / i.slidesPerColumn), P = 0; P < u; P += 1) {
              C = 0;
              var D = d.eq(P);
              if (i.slidesPerColumn > 1) {
                var $ = void 0,
                  N = void 0,
                  z = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var I = Math.floor(P / (i.slidesPerGroup * i.slidesPerColumn)),
                    j = P - i.slidesPerColumn * i.slidesPerGroup * I,
                    B = 0 === I ? i.slidesPerGroup : Math.min(Math.ceil((u - I * M * i.slidesPerGroup) / M), i.slidesPerGroup);
                  ($ = (N = j - (z = Math.floor(j / B)) * B + I * i.slidesPerGroup) + (z * T) / M), D.css({ "-webkit-box-ordinal-group": $, "-moz-box-ordinal-group": $, "-ms-flex-order": $, "-webkit-order": $, order: $ });
                } else "column" === i.slidesPerColumnFill ? ((z = P - (N = Math.floor(P / M)) * M), (N > L || (N === L && z === M - 1)) && (z += 1) >= M && ((z = 0), (N += 1))) : (N = P - (z = Math.floor(P / O)) * O);
                D.css(t("margin-top"), 0 !== z && i.spaceBetween && i.spaceBetween + "px");
              }
              if ("none" !== D.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var H = getComputedStyle(D[0]),
                    R = D[0].style.transform,
                    q = D[0].style.webkitTransform;
                  if ((R && (D[0].style.transform = "none"), q && (D[0].style.webkitTransform = "none"), i.roundLengths)) C = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                  else {
                    var W = n(H, "width"),
                      G = n(H, "padding-left"),
                      Y = n(H, "padding-right"),
                      F = n(H, "margin-left"),
                      X = n(H, "margin-right"),
                      V = H.getPropertyValue("box-sizing");
                    if (V && "border-box" === V) C = W + F + X;
                    else {
                      var U = D[0],
                        Q = U.clientWidth;
                      C = W + G + Y + F + X + (U.offsetWidth - Q);
                    }
                  }
                  R && (D[0].style.transform = R), q && (D[0].style.webkitTransform = q), i.roundLengths && (C = Math.floor(C));
                } else (C = (a - (i.slidesPerView - 1) * b) / i.slidesPerView), i.roundLengths && (C = Math.floor(C)), d[P] && (d[P].style[t("width")] = C + "px");
                d[P] && (d[P].swiperSlideSize = C),
                  h.push(C),
                  i.centeredSlides
                    ? ((w = w + C / 2 + x / 2 + b),
                      0 === x && 0 !== P && (w = w - a / 2 - b),
                      0 === P && (w = w - a / 2 - b),
                      Math.abs(w) < 0.001 && (w = 0),
                      i.roundLengths && (w = Math.floor(w)),
                      E % i.slidesPerGroup == 0 && p.push(w),
                      f.push(w))
                    : (i.roundLengths && (w = Math.floor(w)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(w), f.push(w), (w = w + C + b)),
                  (e.virtualSize += C + b),
                  (x = C),
                  (E += 1);
              }
            }
            if (((e.virtualSize = Math.max(e.virtualSize, a) + g), s && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({ width: e.virtualSize + i.spaceBetween + "px" }), i.setWrapperSize))
              r.css((((S = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"), S));
            if (i.slidesPerColumn > 1)
              if (((e.virtualSize = (C + i.spaceBetween) * T), (e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween), r.css((((k = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"), k)), i.centeredSlides)) {
                _ = [];
                for (var K = 0; K < p.length; K += 1) {
                  var Z = p[K];
                  i.roundLengths && (Z = Math.floor(Z)), p[K] < e.virtualSize + p[0] && _.push(Z);
                }
                p = _;
              }
            if (!i.centeredSlides) {
              _ = [];
              for (var J = 0; J < p.length; J += 1) {
                var ee = p[J];
                i.roundLengths && (ee = Math.floor(ee)), p[J] <= e.virtualSize - a && _.push(ee);
              }
              (p = _), Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a);
            }
            if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
              var te,
                ne = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
              d.filter(function (e, t) {
                return !i.cssMode || t !== d.length - 1;
              }).css((((te = {})[ne] = b + "px"), te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              h.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var re = (ie -= i.spaceBetween) - a;
              p = p.map(function (e) {
                return e < 0 ? -m : e > re ? re + g : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var ae = 0;
              if (
                (h.forEach(function (e) {
                  ae += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (ae -= i.spaceBetween) < a)
              ) {
                var se = (a - ae) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - se;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + se;
                  });
              }
            }
            A(e, { slides: d, snapGrid: p, slidesGrid: f, slidesSizesGrid: h }),
              u !== c && e.emit("slidesLengthChange"),
              p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
              f.length !== y && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            i = [],
            r = n.virtual && n.params.virtual.enabled,
            a = 0;
          "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
          var s = function (e) {
            return r
              ? n.slides.filter(function (t) {
                  return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              n.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var o = n.activeIndex + t;
                if (o > n.slides.length && !r) break;
                i.push(s(o));
              }
          else i.push(s(n.activeIndex));
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var l = i[t].offsetHeight;
              a = l > a ? l : a;
            }
          a && n.$wrapperEl.css("height", a + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            i = t.slides,
            r = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var a = -e;
            r && (a = e), i.removeClass(n.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (var s = 0; s < i.length; s += 1) {
              var o = i[s],
                l = (a + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
              if (n.watchSlidesVisibility || (n.centeredSlides && n.autoHeight)) {
                var c = -(a - o.swiperSlideOffset),
                  d = c + t.slidesSizesGrid[s];
                ((c >= 0 && c < t.size - 1) || (d > 1 && d <= t.size) || (c <= 0 && d >= t.size)) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), i.eq(s).addClass(n.slideVisibleClass));
              }
              o.progress = r ? -l : l;
            }
            t.visibleSlides = x(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var i = t.params,
            r = t.maxTranslate() - t.minTranslate(),
            a = t.progress,
            s = t.isBeginning,
            o = t.isEnd,
            l = s,
            c = o;
          0 === r ? ((a = 0), (s = !0), (o = !0)) : ((s = (a = (e - t.minTranslate()) / r) <= 0), (o = a >= 1)),
            A(t, { progress: a, isBeginning: s, isEnd: o }),
            (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && t.updateSlidesProgress(e),
            s && !l && t.emit("reachBeginning toEdge"),
            o && !c && t.emit("reachEnd toEdge"),
            ((l && !s) || (c && !o)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            i = t.params,
            r = t.$wrapperEl,
            a = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && i.virtual.enabled;
          n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : n.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass)
                : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
          var l = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
          var c = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === c.length && (c = n.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            i = n.rtlTranslate ? n.translate : -n.translate,
            r = n.slidesGrid,
            a = n.snapGrid,
            s = n.params,
            o = n.activeIndex,
            l = n.realIndex,
            c = n.snapIndex,
            d = e;
          if (void 0 === d) {
            for (var u = 0; u < r.length; u += 1) void 0 !== r[u + 1] ? (i >= r[u] && i < r[u + 1] - (r[u + 1] - r[u]) / 2 ? (d = u) : i >= r[u] && i < r[u + 1] && (d = u + 1)) : i >= r[u] && (d = u);
            s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (a.indexOf(i) >= 0) t = a.indexOf(i);
          else {
            var p = Math.min(s.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / s.slidesPerGroup);
          }
          if ((t >= a.length && (t = a.length - 1), d !== o)) {
            var f = parseInt(n.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            A(n, { snapIndex: t, realIndex: f, previousIndex: o, activeIndex: d }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              l !== f && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange");
          } else t !== c && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            i = n.params,
            r = x(e.target).closest("." + i.slideClass)[0],
            a = !1;
          if (r)
            for (var s = 0; s < n.slides.length; s += 1)
              if (n.slides[s] === r) {
                (a = !0), (t = s);
                break;
              }
          if (!r || !a) return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = r),
            n.virtual && n.params.virtual.enabled ? (n.clickedIndex = parseInt(x(r).attr("data-swiper-slide-index"), 10)) : (n.clickedIndex = t),
            i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
        },
      };
      function q(e) {
        var t = this,
          n = s(),
          i = l(),
          r = t.touchEventsData,
          a = t.params,
          o = t.touches;
        if (t.enabled && (!t.animating || !a.preventInteractionOnTransition)) {
          var c = e;
          c.originalEvent && (c = c.originalEvent);
          var d = x(c.target);
          if ("wrapper" !== a.touchEventsTarget || d.closest(t.wrapperEl).length)
            if (((r.isTouchEvent = "touchstart" === c.type), r.isTouchEvent || !("which" in c) || 3 !== c.which))
              if (!(!r.isTouchEvent && "button" in c && c.button > 0))
                if (!r.isTouched || !r.isMoved)
                  if (
                    (!!a.noSwipingClass && "" !== a.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (d = x(e.path[0])),
                    a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0])
                  )
                    t.allowClick = !0;
                  else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                    (o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX), (o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
                    var u = o.currentX,
                      p = o.currentY,
                      f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                      h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                    if (f && (u <= h || u >= i.innerWidth - h)) {
                      if ("prevent" !== f) return;
                      e.preventDefault();
                    }
                    if (
                      (A(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                      (o.startX = u),
                      (o.startY = p),
                      (r.touchStartTime = T()),
                      (t.allowClick = !0),
                      t.updateSize(),
                      (t.swipeDirection = void 0),
                      a.threshold > 0 && (r.allowThresholdMove = !1),
                      "touchstart" !== c.type)
                    ) {
                      var m = !0;
                      d.is(r.formElements) && (m = !1), n.activeElement && x(n.activeElement).is(r.formElements) && n.activeElement !== d[0] && n.activeElement.blur();
                      var g = m && t.allowTouchMove && a.touchStartPreventDefault;
                      (!a.touchStartForcePreventDefault && !g) || d[0].isContentEditable || c.preventDefault();
                    }
                    t.emit("touchStart", c);
                  }
        }
      }
      function W(e) {
        var t = s(),
          n = this,
          i = n.touchEventsData,
          r = n.params,
          a = n.touches,
          o = n.rtlTranslate;
        if (n.enabled) {
          var l = e;
          if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
              var c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                d = "touchmove" === l.type ? c.pageX : l.pageX,
                u = "touchmove" === l.type ? c.pageY : l.pageY;
              if (l.preventedByNestedSwiper) return (a.startX = d), void (a.startY = u);
              if (!n.allowTouchMove) return (n.allowClick = !1), void (i.isTouched && (A(a, { startX: d, startY: u, currentX: d, currentY: u }), (i.touchStartTime = T())));
              if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                if (n.isVertical()) {
                  if ((u < a.startY && n.translate <= n.maxTranslate()) || (u > a.startY && n.translate >= n.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                } else if ((d < a.startX && n.translate <= n.maxTranslate()) || (d > a.startX && n.translate >= n.minTranslate())) return;
              if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && x(l.target).is(i.formElements)) return (i.isMoved = !0), void (n.allowClick = !1);
              if ((i.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1))) {
                (a.currentX = d), (a.currentY = u);
                var p = a.currentX - a.startX,
                  f = a.currentY - a.startY;
                if (!(n.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < n.params.threshold)) {
                  var h;
                  if (void 0 === i.isScrolling)
                    (n.isHorizontal() && a.currentY === a.startY) || (n.isVertical() && a.currentX === a.startX)
                      ? (i.isScrolling = !1)
                      : p * p + f * f >= 25 && ((h = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI), (i.isScrolling = n.isHorizontal() ? h > r.touchAngle : 90 - h > r.touchAngle));
                  if ((i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (i.startMoving = !0)), i.isScrolling)) i.isTouched = !1;
                  else if (i.startMoving) {
                    (n.allowClick = !1),
                      !r.cssMode && l.cancelable && l.preventDefault(),
                      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
                      i.isMoved ||
                        (r.loop && n.loopFix(),
                        (i.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (i.allowMomentumBounce = !1),
                        !r.grabCursor || (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) || n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", l)),
                      n.emit("sliderMove", l),
                      (i.isMoved = !0);
                    var m = n.isHorizontal() ? p : f;
                    (a.diff = m), (m *= r.touchRatio), o && (m = -m), (n.swipeDirection = m > 0 ? "prev" : "next"), (i.currentTranslate = m + i.startTranslate);
                    var g = !0,
                      v = r.resistanceRatio;
                    if (
                      (r.touchReleaseOnEdges && (v = 0),
                      m > 0 && i.currentTranslate > n.minTranslate()
                        ? ((g = !1), r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + m, v)))
                        : m < 0 && i.currentTranslate < n.maxTranslate() && ((g = !1), r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - m, v))),
                      g && (l.preventedByNestedSwiper = !0),
                      !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                      !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                      n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate),
                      r.threshold > 0)
                    ) {
                      if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                      if (!i.allowThresholdMove)
                        return (i.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (i.currentTranslate = i.startTranslate), void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
                    }
                    r.followFinger &&
                      !r.cssMode &&
                      ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()),
                      r.freeMode &&
                        (0 === i.velocities.length && i.velocities.push({ position: a[n.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                        i.velocities.push({ position: a[n.isHorizontal() ? "currentX" : "currentY"], time: T() })),
                      n.updateProgress(i.currentTranslate),
                      n.setTranslate(i.currentTranslate));
                  }
                }
              }
            }
          } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
        }
      }
      function G(e) {
        var t = this,
          n = t.touchEventsData,
          i = t.params,
          r = t.touches,
          a = t.rtlTranslate,
          s = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid;
        if (t.enabled) {
          var c = e;
          if ((c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), (n.allowTouchCallbacks = !1), !n.isTouched))
            return n.isMoved && i.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), void (n.startMoving = !1);
          i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var d,
            u = T(),
            p = u - n.touchStartTime;
          if (
            (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), p < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)),
            (n.lastClickTime = T()),
            E(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate)
          )
            return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
          if (((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1), (d = i.followFinger ? (a ? t.translate : -t.translate) : -n.currentTranslate), !i.cssMode))
            if (i.freeMode) {
              if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (d > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
              if (i.freeModeMomentum) {
                if (n.velocities.length > 1) {
                  var f = n.velocities.pop(),
                    h = n.velocities.pop(),
                    m = f.position - h.position,
                    g = f.time - h.time;
                  (t.velocity = m / g), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || T() - f.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;
                (t.velocity *= i.freeModeMomentumVelocityRatio), (n.velocities.length = 0);
                var v = 1e3 * i.freeModeMomentumRatio,
                  y = t.velocity * v,
                  b = t.translate + y;
                a && (b = -b);
                var w,
                  x,
                  C = !1,
                  _ = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                if (b < t.maxTranslate())
                  i.freeModeMomentumBounce ? (b + t.maxTranslate() < -_ && (b = t.maxTranslate() - _), (w = t.maxTranslate()), (C = !0), (n.allowMomentumBounce = !0)) : (b = t.maxTranslate()), i.loop && i.centeredSlides && (x = !0);
                else if (b > t.minTranslate())
                  i.freeModeMomentumBounce ? (b - t.minTranslate() > _ && (b = t.minTranslate() + _), (w = t.minTranslate()), (C = !0), (n.allowMomentumBounce = !0)) : (b = t.minTranslate()), i.loop && i.centeredSlides && (x = !0);
                else if (i.freeModeSticky) {
                  for (var A, S = 0; S < l.length; S += 1)
                    if (l[S] > -b) {
                      A = S;
                      break;
                    }
                  b = -(b = Math.abs(l[A] - b) < Math.abs(l[A - 1] - b) || "next" === t.swipeDirection ? l[A] : l[A - 1]);
                }
                if (
                  (x &&
                    t.once("transitionEnd", function () {
                      t.loopFix();
                    }),
                  0 !== t.velocity)
                ) {
                  if (((v = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity)), i.freeModeSticky)) {
                    var k = Math.abs((a ? -b : b) - t.translate),
                      M = t.slidesSizesGrid[t.activeIndex];
                    v = k < M ? i.speed : k < 2 * M ? 1.5 * i.speed : 2.5 * i.speed;
                  }
                } else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && C
                  ? (t.updateProgress(w),
                    t.setTransition(v),
                    t.setTranslate(b),
                    t.transitionStart(!0, t.swipeDirection),
                    (t.animating = !0),
                    s.transitionEnd(function () {
                      t &&
                        !t.destroyed &&
                        n.allowMomentumBounce &&
                        (t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        setTimeout(function () {
                          t.setTranslate(w),
                            s.transitionEnd(function () {
                              t && !t.destroyed && t.transitionEnd();
                            });
                        }, 0));
                    }))
                  : t.velocity
                  ? (t.updateProgress(b),
                    t.setTransition(v),
                    t.setTranslate(b),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      ((t.animating = !0),
                      s.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      })))
                  : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              } else {
                if (i.freeModeSticky) return void t.slideToClosest();
                i.freeMode && t.emit("_freeModeNoMomentumRelease");
              }
              (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
              for (var O = 0, L = t.slidesSizesGrid[0], P = 0; P < o.length; P += P < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                var D = P < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== o[P + D] ? d >= o[P] && d < o[P + D] && ((O = P), (L = o[P + D] - o[P])) : d >= o[P] && ((O = P), (L = o[o.length - 1] - o[o.length - 2]));
              }
              var $ = (d - o[O]) / L,
                N = O < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              if (p > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && ($ >= i.longSwipesRatio ? t.slideTo(O + N) : t.slideTo(O)), "prev" === t.swipeDirection && ($ > 1 - i.longSwipesRatio ? t.slideTo(O + N) : t.slideTo(O));
              } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
                  ? c.target === t.navigation.nextEl
                    ? t.slideTo(O + N)
                    : t.slideTo(O)
                  : ("next" === t.swipeDirection && t.slideTo(O + N), "prev" === t.swipeDirection && t.slideTo(O));
              }
            }
        }
      }
      function Y() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            r = e.allowSlidePrev,
            a = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            (e.allowSlidePrev = r),
            (e.allowSlideNext = i),
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
        }
      }
      function F(e) {
        var t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function X() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal() ? (e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft) : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var i = e.maxTranslate() - e.minTranslate();
          (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
        }
      }
      var V = !1;
      function U() {}
      const Q = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function K(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      var Z = {
          modular: {
            useParams: function (e) {
              var t = this;
              t.modules &&
                Object.keys(t.modules).forEach(function (n) {
                  var i = t.modules[n];
                  i.params && A(e, i.params);
                });
            },
            useModules: function (e) {
              void 0 === e && (e = {});
              var t = this;
              t.modules &&
                Object.keys(t.modules).forEach(function (n) {
                  var i = t.modules[n],
                    r = e[n] || {};
                  i.on &&
                    t.on &&
                    Object.keys(i.on).forEach(function (e) {
                      t.on(e, i.on[e]);
                    }),
                    i.create && i.create.bind(t)(r);
                });
            },
          },
          eventsEmitter: H,
          update: R,
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var t = this,
                n = t.params,
                i = t.rtlTranslate,
                r = t.translate,
                a = t.$wrapperEl;
              if (n.virtualTranslate) return i ? -r : r;
              if (n.cssMode) return r;
              var s = C(a[0], e);
              return i && (s = -s), s || 0;
            },
            setTranslate: function (e, t) {
              var n = this,
                i = n.rtlTranslate,
                r = n.params,
                a = n.$wrapperEl,
                s = n.wrapperEl,
                o = n.progress,
                l = 0,
                c = 0;
              n.isHorizontal() ? (l = i ? -e : e) : (c = e),
                r.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
                r.cssMode ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c) : r.virtualTranslate || a.transform("translate3d(" + l + "px, " + c + "px, 0px)"),
                (n.previousTranslate = n.translate),
                (n.translate = n.isHorizontal() ? l : c);
              var d = n.maxTranslate() - n.minTranslate();
              (0 === d ? 0 : (e - n.minTranslate()) / d) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, n, i, r) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
              var a = this,
                s = a.params,
                o = a.wrapperEl;
              if (a.animating && s.preventInteractionOnTransition) return !1;
              var l,
                c = a.minTranslate(),
                d = a.maxTranslate();
              if (((l = i && e > c ? c : i && e < d ? d : e), a.updateProgress(l), s.cssMode)) {
                var u,
                  p = a.isHorizontal();
                if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -l;
                else if (o.scrollTo) o.scrollTo((((u = {})[p ? "left" : "top"] = -l), (u.behavior = "smooth"), u));
                else o[p ? "scrollLeft" : "scrollTop"] = -l;
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0), a.setTranslate(l), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(l),
                    n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                            a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            n && a.emit("transitionEnd"));
                        }),
                      a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                i = n.activeIndex,
                r = n.params,
                a = n.previousIndex;
              if (!r.cssMode) {
                r.autoHeight && n.updateAutoHeight();
                var s = t;
                if ((s || (s = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a)) {
                  if ("reset" === s) return void n.emit("slideResetTransitionStart");
                  n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart");
                }
              }
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                i = n.activeIndex,
                r = n.previousIndex,
                a = n.params;
              if (((n.animating = !1), !a.cssMode)) {
                n.setTransition(0);
                var s = t;
                if ((s || (s = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r)) {
                  if ("reset" === s) return void n.emit("slideResetTransitionEnd");
                  n.emit("slideChangeTransitionEnd"), "next" === s ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd");
                }
              }
            },
          },
          slide: {
            slideTo: function (e, t, n, i, r) {
              if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e))
                throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
              if ("string" == typeof e) {
                var a = parseInt(e, 10);
                if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                e = a;
              }
              var s = this,
                o = e;
              o < 0 && (o = 0);
              var l = s.params,
                c = s.snapGrid,
                d = s.slidesGrid,
                u = s.previousIndex,
                p = s.activeIndex,
                f = s.rtlTranslate,
                h = s.wrapperEl,
                m = s.enabled;
              if ((s.animating && l.preventInteractionOnTransition) || (!m && !i && !r)) return !1;
              var g = Math.min(s.params.slidesPerGroupSkip, o),
                v = g + Math.floor((o - g) / s.params.slidesPerGroup);
              v >= c.length && (v = c.length - 1), (p || l.initialSlide || 0) === (u || 0) && n && s.emit("beforeSlideChangeStart");
              var y,
                b = -c[v];
              if ((s.updateProgress(b), l.normalizeSlideIndex))
                for (var w = 0; w < d.length; w += 1) {
                  var x = -Math.floor(100 * b),
                    E = Math.floor(100 * d[w]),
                    T = Math.floor(100 * d[w + 1]);
                  void 0 !== d[w + 1] ? (x >= E && x < T - (T - E) / 2 ? (o = w) : x >= E && x < T && (o = w + 1)) : x >= E && (o = w);
                }
              if (s.initialized && o !== p) {
                if (!s.allowSlideNext && b < s.translate && b < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && b > s.translate && b > s.maxTranslate() && (p || 0) !== o) return !1;
              }
              if (((y = o > p ? "next" : o < p ? "prev" : "reset"), (f && -b === s.translate) || (!f && b === s.translate)))
                return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(b), "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)), !1;
              if (l.cssMode) {
                var C,
                  _ = s.isHorizontal(),
                  A = -b;
                if ((f && (A = h.scrollWidth - h.offsetWidth - A), 0 === t)) h[_ ? "scrollLeft" : "scrollTop"] = A;
                else if (h.scrollTo) h.scrollTo((((C = {})[_ ? "left" : "top"] = A), (C.behavior = "smooth"), C));
                else h[_ ? "scrollLeft" : "scrollTop"] = A;
                return !0;
              }
              return (
                0 === t
                  ? (s.setTransition(0), s.setTranslate(b), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, y), s.transitionEnd(n, y))
                  : (s.setTransition(t),
                    s.setTranslate(b),
                    s.updateActiveIndex(o),
                    s.updateSlidesClasses(),
                    s.emit("beforeTransitionStart", t, i),
                    s.transitionStart(n, y),
                    s.animating ||
                      ((s.animating = !0),
                      s.onSlideToWrapperTransitionEnd ||
                        (s.onSlideToWrapperTransitionEnd = function (e) {
                          s &&
                            !s.destroyed &&
                            e.target === this &&
                            (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                            s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                            (s.onSlideToWrapperTransitionEnd = null),
                            delete s.onSlideToWrapperTransitionEnd,
                            s.transitionEnd(n, y));
                        }),
                      s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                      s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))),
                !0
              );
            },
            slideToLoop: function (e, t, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
              var r = this,
                a = e;
              return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i);
            },
            slideNext: function (e, t, n) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var i = this,
                r = i.params,
                a = i.animating;
              if (!i.enabled) return i;
              var s = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
              if (r.loop) {
                if (a && r.loopPreventsSlide) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              return i.slideTo(i.activeIndex + s, e, t, n);
            },
            slidePrev: function (e, t, n) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var i = this,
                r = i.params,
                a = i.animating,
                s = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
              if (!i.enabled) return i;
              if (r.loop) {
                if (a && r.loopPreventsSlide) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              var d,
                u = c(l ? i.translate : -i.translate),
                p = s.map(function (e) {
                  return c(e);
                }),
                f = (s[p.indexOf(u)], s[p.indexOf(u) - 1]);
              return (
                void 0 === f &&
                  r.cssMode &&
                  s.forEach(function (e) {
                    !f && u >= e && (f = e);
                  }),
                void 0 !== f && (d = o.indexOf(f)) < 0 && (d = i.activeIndex - 1),
                i.slideTo(d, e, t, n)
              );
            },
            slideReset: function (e, t, n) {
              return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n);
            },
            slideToClosest: function (e, t, n, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
              var r = this,
                a = r.activeIndex,
                s = Math.min(r.params.slidesPerGroupSkip, a),
                o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                l = r.rtlTranslate ? r.translate : -r.translate;
              if (l >= r.snapGrid[o]) {
                var c = r.snapGrid[o];
                l - c > (r.snapGrid[o + 1] - c) * i && (a += r.params.slidesPerGroup);
              } else {
                var d = r.snapGrid[o - 1];
                l - d <= (r.snapGrid[o] - d) * i && (a -= r.params.slidesPerGroup);
              }
              return (a = Math.max(a, 0)), (a = Math.min(a, r.slidesGrid.length - 1)), r.slideTo(a, e, t, n);
            },
            slideToClickedSlide: function () {
              var e,
                t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                a = t.clickedIndex;
              if (n.loop) {
                if (t.animating) return;
                (e = parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                  n.centeredSlides
                    ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2
                      ? (t.loopFix(),
                        (a = i
                          .children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")")
                          .eq(0)
                          .index()),
                        E(function () {
                          t.slideTo(a);
                        }))
                      : t.slideTo(a)
                    : a > t.slides.length - r
                    ? (t.loopFix(),
                      (a = i
                        .children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")")
                        .eq(0)
                        .index()),
                      E(function () {
                        t.slideTo(a);
                      }))
                    : t.slideTo(a);
              } else t.slideTo(a);
            },
          },
          loop: {
            loopCreate: function () {
              var e = this,
                t = s(),
                n = e.params,
                i = e.$wrapperEl;
              i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
              var r = i.children("." + n.slideClass);
              if (n.loopFillGroupWithBlank) {
                var a = n.slidesPerGroup - (r.length % n.slidesPerGroup);
                if (a !== n.slidesPerGroup) {
                  for (var o = 0; o < a; o += 1) {
                    var l = x(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                    i.append(l);
                  }
                  r = i.children("." + n.slideClass);
                }
              }
              "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length),
                (e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10))),
                (e.loopedSlides += n.loopAdditionalSlides),
                e.loopedSlides > r.length && (e.loopedSlides = r.length);
              var c = [],
                d = [];
              r.each(function (t, n) {
                var i = x(t);
                n < e.loopedSlides && d.push(t), n < r.length && n >= r.length - e.loopedSlides && c.push(t), i.attr("data-swiper-slide-index", n);
              });
              for (var u = 0; u < d.length; u += 1) i.append(x(d[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
              for (var p = c.length - 1; p >= 0; p -= 1) i.prepend(x(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
            },
            loopFix: function () {
              var e = this;
              e.emit("beforeLoopFix");
              var t,
                n = e.activeIndex,
                i = e.slides,
                r = e.loopedSlides,
                a = e.allowSlidePrev,
                s = e.allowSlideNext,
                o = e.snapGrid,
                l = e.rtlTranslate;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              var c = -o[n] - e.getTranslate();
              if (n < r) (t = i.length - 3 * r + n), (t += r), e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
              else if (n >= i.length - r) {
                (t = -i.length + n + r), (t += r), e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
              }
              (e.allowSlidePrev = a), (e.allowSlideNext = s), e.emit("loopFix");
            },
            loopDestroy: function () {
              var e = this,
                t = e.$wrapperEl,
                n = e.params,
                i = e.slides;
              t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (!(t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)) {
                var n = t.el;
                (n.style.cursor = "move"), (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e.el.style.cursor = "");
            },
          },
          manipulation: {
            appendSlide: function (e) {
              var t = this,
                n = t.$wrapperEl,
                i = t.params;
              if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
              else n.append(e);
              i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update();
            },
            prependSlide: function (e) {
              var t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = t.activeIndex;
              n.loop && t.loopDestroy();
              var a = r + 1;
              if ("object" == typeof e && "length" in e) {
                for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                a = r + e.length;
              } else i.prepend(e);
              n.loop && t.loopCreate(), (n.observer && t.support.observer) || t.update(), t.slideTo(a, 0, !1);
            },
            addSlide: function (e, t) {
              var n = this,
                i = n.$wrapperEl,
                r = n.params,
                a = n.activeIndex;
              r.loop && ((a -= n.loopedSlides), n.loopDestroy(), (n.slides = i.children("." + r.slideClass)));
              var s = n.slides.length;
              if (e <= 0) n.prependSlide(t);
              else if (e >= s) n.appendSlide(t);
              else {
                for (var o = a > e ? a + 1 : a, l = [], c = s - 1; c >= e; c -= 1) {
                  var d = n.slides.eq(c);
                  d.remove(), l.unshift(d);
                }
                if ("object" == typeof t && "length" in t) {
                  for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                  o = a > e ? a + t.length : a;
                } else i.append(t);
                for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                r.loop && n.loopCreate(), (r.observer && n.support.observer) || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1);
              }
            },
            removeSlide: function (e) {
              var t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = t.activeIndex;
              n.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children("." + n.slideClass)));
              var a,
                s = r;
              if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) (a = e[o]), t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                s = Math.max(s, 0);
              } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), (s = Math.max(s, 0));
              n.loop && t.loopCreate(), (n.observer && t.support.observer) || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
            },
            removeAllSlides: function () {
              for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
              this.removeSlide(e);
            },
          },
          events: {
            attachEvents: function () {
              var e = this,
                t = s(),
                n = e.params,
                i = e.touchEvents,
                r = e.el,
                a = e.wrapperEl,
                o = e.device,
                l = e.support;
              (e.onTouchStart = q.bind(e)), (e.onTouchMove = W.bind(e)), (e.onTouchEnd = G.bind(e)), n.cssMode && (e.onScroll = X.bind(e)), (e.onClick = F.bind(e));
              var c = !!n.nested;
              if (!l.touch && l.pointerEvents) r.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, c), t.addEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (l.touch) {
                  var d = !("touchstart" !== i.start || !l.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                  r.addEventListener(i.start, e.onTouchStart, d),
                    r.addEventListener(i.move, e.onTouchMove, l.passiveListener ? { passive: !1, capture: c } : c),
                    r.addEventListener(i.end, e.onTouchEnd, d),
                    i.cancel && r.addEventListener(i.cancel, e.onTouchEnd, d),
                    V || (t.addEventListener("touchstart", U), (V = !0));
                }
                ((n.simulateTouch && !o.ios && !o.android) || (n.simulateTouch && !l.touch && o.ios)) &&
                  (r.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, c), t.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (n.preventClicks || n.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                n.cssMode && a.addEventListener("scroll", e.onScroll),
                n.updateOnWindowResize ? e.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y, !0) : e.on("observerUpdate", Y, !0);
            },
            detachEvents: function () {
              var e = this,
                t = s(),
                n = e.params,
                i = e.touchEvents,
                r = e.el,
                a = e.wrapperEl,
                o = e.device,
                l = e.support,
                c = !!n.nested;
              if (!l.touch && l.pointerEvents) r.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, c), t.removeEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (l.touch) {
                  var d = !("onTouchStart" !== i.start || !l.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                  r.removeEventListener(i.start, e.onTouchStart, d), r.removeEventListener(i.move, e.onTouchMove, c), r.removeEventListener(i.end, e.onTouchEnd, d), i.cancel && r.removeEventListener(i.cancel, e.onTouchEnd, d);
                }
                ((n.simulateTouch && !o.ios && !o.android) || (n.simulateTouch && !l.touch && o.ios)) &&
                  (r.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, c), t.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (n.preventClicks || n.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                n.cssMode && a.removeEventListener("scroll", e.onScroll),
                e.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y);
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                t = e.activeIndex,
                n = e.initialized,
                i = e.loopedSlides,
                r = void 0 === i ? 0 : i,
                a = e.params,
                s = e.$el,
                o = a.breakpoints;
              if (o && (!o || 0 !== Object.keys(o).length)) {
                var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                if (l && e.currentBreakpoint !== l) {
                  var c = l in o ? o[l] : void 0;
                  c &&
                    ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                      var t = c[e];
                      void 0 !== t && (c[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                    });
                  var d = c || e.originalParams,
                    u = a.slidesPerColumn > 1,
                    p = d.slidesPerColumn > 1,
                    f = a.enabled;
                  u && !p
                    ? (s.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), e.emitContainerClasses())
                    : !u && p && (s.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && s.addClass(a.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                  var h = d.direction && d.direction !== a.direction,
                    m = a.loop && (d.slidesPerView !== a.slidesPerView || h);
                  h && n && e.changeDirection(), A(e.params, d);
                  var g = e.params.enabled;
                  A(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                    f && !g ? e.disable() : !f && g && e.enable(),
                    (e.currentBreakpoint = l),
                    e.emit("_beforeBreakpoint", d),
                    m && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", d);
                }
              }
            },
            getBreakpoint: function (e, t, n) {
              if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
                var i = !1,
                  r = l(),
                  a = "window" === t ? r.innerWidth : n.clientWidth,
                  s = "window" === t ? r.innerHeight : n.clientHeight,
                  o = Object.keys(e).map(function (e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                      var t = parseFloat(e.substr(1));
                      return { value: s * t, point: e };
                    }
                    return { value: e, point: e };
                  });
                o.sort(function (e, t) {
                  return parseInt(e.value, 10) - parseInt(t.value, 10);
                });
                for (var c = 0; c < o.length; c += 1) {
                  var d = o[c],
                    u = d.point;
                  d.value <= a && (i = u);
                }
                return i || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.params,
                n = e.isLocked,
                i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
              t.slidesOffsetBefore && t.slidesOffsetAfter && i ? (e.isLocked = i <= e.size) : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                n && n !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e,
                t,
                n,
                i = this,
                r = i.classNames,
                a = i.params,
                s = i.rtl,
                o = i.$el,
                l = i.device,
                c = i.support,
                d =
                  ((e = [
                    "initialized",
                    a.direction,
                    { "pointer-events": c.pointerEvents && !c.touch },
                    { "free-mode": a.freeMode },
                    { autoheight: a.autoHeight },
                    { rtl: s },
                    { multirow: a.slidesPerColumn > 1 },
                    { "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill },
                    { android: l.android },
                    { ios: l.ios },
                    { "css-mode": a.cssMode },
                  ]),
                  (t = a.containerModifierClass),
                  (n = []),
                  e.forEach(function (e) {
                    "object" == typeof e
                      ? Object.keys(e).forEach(function (i) {
                          e[i] && n.push(t + i);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n);
              r.push.apply(r, d), o.addClass([].concat(r).join(" ")), i.emitContainerClasses();
            },
            removeClasses: function () {
              var e = this,
                t = e.$el,
                n = e.classNames;
              t.removeClass(n.join(" ")), e.emitContainerClasses();
            },
          },
          images: {
            loadImage: function (e, t, n, i, r, a) {
              var s,
                o = l();
              function c() {
                a && a();
              }
              x(e).parent("picture")[0] || (e.complete && r) ? c() : t ? (((s = new o.Image()).onload = c), (s.onerror = c), i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : c();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                var i = e.imagesToLoad[n];
                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
              }
            },
          },
        },
        J = {},
        ee = (function () {
          function e() {
            for (var t, n, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
            if (
              (1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? (n = r[0]) : ((t = r[0]), (n = r[1])),
              n || (n = {}),
              (n = A({}, n)),
              t && !n.el && (n.el = t),
              n.el && x(n.el).length > 1)
            ) {
              var s = [];
              return (
                x(n.el).each(function (t) {
                  var i = A({}, n, { el: t });
                  s.push(new e(i));
                }),
                s
              );
            }
            var o = this;
            (o.__swiper__ = !0),
              (o.support = D()),
              (o.device = $({ userAgent: n.userAgent })),
              (o.browser = N()),
              (o.eventsListeners = {}),
              (o.eventsAnyListeners = []),
              void 0 === o.modules && (o.modules = {}),
              Object.keys(o.modules).forEach(function (e) {
                var t = o.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    r = t.params[i];
                  if ("object" != typeof r || null === r) return;
                  if ((["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === n[i] && (n[i] = { auto: !0 }), !(i in n) || !("enabled" in r))) return;
                  !0 === n[i] && (n[i] = { enabled: !0 }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = { enabled: !1 });
                }
              });
            var l,
              c,
              d = A({}, Q);
            return (
              o.useParams(d),
              (o.params = A({}, d, J, n)),
              (o.originalParams = A({}, o.params)),
              (o.passedParams = A({}, n)),
              o.params &&
                o.params.on &&
                Object.keys(o.params.on).forEach(function (e) {
                  o.on(e, o.params.on[e]);
                }),
              o.params && o.params.onAny && o.onAny(o.params.onAny),
              (o.$ = x),
              A(o, {
                enabled: o.params.enabled,
                el: t,
                classNames: [],
                slides: x(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === o.params.direction;
                },
                isVertical: function () {
                  return "vertical" === o.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEvents:
                  ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (c = ["mousedown", "mousemove", "mouseup"]),
                  o.support.pointerEvents && (c = ["pointerdown", "pointermove", "pointerup"]),
                  (o.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }),
                  (o.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
                  o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: "input, select, option, textarea, button, video, label",
                  lastClickTime: T(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              o.useModules(),
              o.emit("_swiper"),
              o.params.init && o.init(),
              o
            );
          }
          var t,
            n,
            i,
            r = e.prototype;
          return (
            (r.enable = function () {
              var e = this;
              e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
            }),
            (r.disable = function () {
              var e = this;
              e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
            }),
            (r.setProgress = function (e, t) {
              var n = this;
              e = Math.min(Math.max(e, 0), 1);
              var i = n.minTranslate(),
                r = (n.maxTranslate() - i) * e + i;
              n.translateTo(r, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
            }),
            (r.emitContainerClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter(function (t) {
                  return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                });
                e.emit("_containerClasses", t.join(" "));
              }
            }),
            (r.getSlideClasses = function (e) {
              var t = this;
              return e.className
                .split(" ")
                .filter(function (e) {
                  return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
                })
                .join(" ");
            }),
            (r.emitSlidesClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each(function (n) {
                  var i = e.getSlideClasses(n);
                  t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
                }),
                  e.emit("_slideClasses", t);
              }
            }),
            (r.slidesPerViewDynamic = function () {
              var e = this,
                t = e.params,
                n = e.slides,
                i = e.slidesGrid,
                r = e.size,
                a = e.activeIndex,
                s = 1;
              if (t.centeredSlides) {
                for (var o, l = n[a].swiperSlideSize, c = a + 1; c < n.length; c += 1) n[c] && !o && ((s += 1), (l += n[c].swiperSlideSize) > r && (o = !0));
                for (var d = a - 1; d >= 0; d -= 1) n[d] && !o && ((s += 1), (l += n[d].swiperSlideSize) > r && (o = !0));
              } else for (var u = a + 1; u < n.length; u += 1) i[u] - i[a] < r && (s += 1);
              return s;
            }),
            (r.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t = e.snapGrid,
                  n = e.params;
                n.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (i(), e.params.autoHeight && e.updateAutoHeight())
                    : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                  n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                  e.emit("update");
              }
              function i() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
              }
            }),
            (r.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var n = this,
                i = n.params.direction;
              return (
                e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i ||
                  ("horizontal" !== e && "vertical" !== e) ||
                  (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + e),
                  n.emitContainerClasses(),
                  (n.params.direction = e),
                  n.slides.each(function (t) {
                    "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                  }),
                  n.emit("changeDirection"),
                  t && n.update()),
                n
              );
            }),
            (r.mount = function (e) {
              var t = this;
              if (t.mounted) return !0;
              var n = x(e || t.params.el);
              if (!(e = n[0])) return !1;
              e.swiper = t;
              var i = (function () {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                  var i = x(e.shadowRoot.querySelector("." + t.params.wrapperClass));
                  return (
                    (i.children = function (e) {
                      return n.children(e);
                    }),
                    i
                  );
                }
                return n.children("." + t.params.wrapperClass);
              })();
              if (0 === i.length && t.params.createElements) {
                var r = s().createElement("div");
                (i = x(r)),
                  (r.className = t.params.wrapperClass),
                  n.append(r),
                  n.children("." + t.params.slideClass).each(function (e) {
                    i.append(e);
                  });
              }
              return (
                A(t, {
                  $el: n,
                  el: e,
                  $wrapperEl: i,
                  wrapperEl: i[0],
                  mounted: !0,
                  rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                  rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                  wrongRTL: "-webkit-box" === i.css("display"),
                }),
                !0
              );
            }),
            (r.init = function (e) {
              var t = this;
              return (
                t.initialized ||
                  !1 === t.mount(e) ||
                  (t.emit("beforeInit"),
                  t.params.breakpoints && t.setBreakpoint(),
                  t.addClasses(),
                  t.params.loop && t.loopCreate(),
                  t.updateSize(),
                  t.updateSlides(),
                  t.params.watchOverflow && t.checkOverflow(),
                  t.params.grabCursor && t.enabled && t.setGrabCursor(),
                  t.params.preloadImages && t.preloadImages(),
                  t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                  t.attachEvents(),
                  (t.initialized = !0),
                  t.emit("init"),
                  t.emit("afterInit")),
                t
              );
            }),
            (r.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var n,
                i = this,
                r = i.params,
                a = i.$el,
                s = i.$wrapperEl,
                o = i.slides;
              return (
                void 0 === i.params ||
                  i.destroyed ||
                  (i.emit("beforeDestroy"),
                  (i.initialized = !1),
                  i.detachEvents(),
                  r.loop && i.loopDestroy(),
                  t &&
                    (i.removeClasses(),
                    a.removeAttr("style"),
                    s.removeAttr("style"),
                    o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                  i.emit("destroy"),
                  Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e);
                  }),
                  !1 !== e &&
                    ((i.$el[0].swiper = null),
                    (n = i),
                    Object.keys(n).forEach(function (e) {
                      try {
                        n[e] = null;
                      } catch (e) {}
                      try {
                        delete n[e];
                      } catch (e) {}
                    })),
                  (i.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function (e) {
              A(J, e);
            }),
            (e.installModule = function (t) {
              e.prototype.modules || (e.prototype.modules = {});
              var n = t.name || Object.keys(e.prototype.modules).length + "_" + T();
              e.prototype.modules[n] = t;
            }),
            (e.use = function (t) {
              return Array.isArray(t)
                ? (t.forEach(function (t) {
                    return e.installModule(t);
                  }),
                  e)
                : (e.installModule(t), e);
            }),
            (t = e),
            (i = [
              {
                key: "extendedDefaults",
                get: function () {
                  return J;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return Q;
                },
              },
            ]),
            (n = null) && K(t.prototype, n),
            i && K(t, i),
            e
          );
        })();
      Object.keys(Z).forEach(function (e) {
        Object.keys(Z[e]).forEach(function (t) {
          ee.prototype[t] = Z[e][t];
        });
      }),
        ee.use([z, B]);
      const te = ee;
      function ne() {
        return (ne =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ie = {
        update: function (e) {
          var t = this,
            n = t.params,
            i = n.slidesPerView,
            r = n.slidesPerGroup,
            a = n.centeredSlides,
            s = t.params.virtual,
            o = s.addSlidesBefore,
            l = s.addSlidesAfter,
            c = t.virtual,
            d = c.from,
            u = c.to,
            p = c.slides,
            f = c.slidesGrid,
            h = c.renderSlide,
            m = c.offset;
          t.updateActiveIndex();
          var g,
            v,
            y,
            b = t.activeIndex || 0;
          (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), a ? ((v = Math.floor(i / 2) + r + l), (y = Math.floor(i / 2) + r + o)) : ((v = i + (r - 1) + l), (y = r + o));
          var w = Math.max((b || 0) - y, 0),
            x = Math.min((b || 0) + v, p.length - 1),
            E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
          function T() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if ((A(t.virtual, { from: w, to: x, offset: E, slidesGrid: t.slidesGrid }), d === w && u === x && !e)) return t.slidesGrid !== f && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: E,
                from: w,
                to: x,
                slides: (function () {
                  for (var e = [], t = w; t <= x; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (t.params.virtual.renderExternalUpdate && T())
            );
          var C = [],
            _ = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else for (var S = d; S <= u; S += 1) (S < w || S > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
          for (var k = 0; k < p.length; k += 1) k >= w && k <= x && (void 0 === u || e ? _.push(k) : (k > u && _.push(k), k < d && C.push(k)));
          _.forEach(function (e) {
            t.$wrapperEl.append(h(p[e], e));
          }),
            C.sort(function (e, t) {
              return t - e;
            }).forEach(function (e) {
              t.$wrapperEl.prepend(h(p[e], e));
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
            T();
        },
        renderSlide: function (e, t) {
          var n = this,
            i = n.params.virtual;
          if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
          var r = i.renderSlide ? x(i.renderSlide.call(n, e, t)) : x('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r;
        },
        appendSlide: function (e) {
          var t = this;
          if ("object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this,
            n = t.activeIndex,
            i = n + 1,
            r = 1;
          if (Array.isArray(e)) {
            for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
            (i = n + e.length), (r = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            var s = t.virtual.cache,
              o = {};
            Object.keys(s).forEach(function (e) {
              var t = s[e],
                n = t.attr("data-swiper-slide-index");
              n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), (o[parseInt(e, 10) + r] = t);
            }),
              (t.virtual.cache = o);
          }
          t.virtual.update(!0), t.slideTo(i, 0);
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var n = t.activeIndex;
            if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), (n = Math.max(n, 0));
            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), (n = Math.max(n, 0));
            t.virtual.update(!0), t.slideTo(n, 0);
          }
        },
        removeAllSlides: function () {
          var e = this;
          (e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
        },
      };
      const re = {
        name: "virtual",
        params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } },
        create: function () {
          S(this, { virtual: ne({}, ie, { slides: this.params.virtual.slides, cache: {} }) });
        },
        on: {
          beforeInit: function (e) {
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + "virtual");
              var t = { watchSlidesProgress: !0 };
              A(e.params, t), A(e.originalParams, t), e.params.initialSlide || e.virtual.update();
            }
          },
          setTranslate: function (e) {
            e.params.virtual.enabled && e.virtual.update();
          },
        },
      };
      function ae() {
        return (ae =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var se = {
        handle: function (e) {
          var t = this;
          if (t.enabled) {
            var n = l(),
              i = s(),
              r = t.rtlTranslate,
              a = e;
            a.originalEvent && (a = a.originalEvent);
            var o = a.keyCode || a.charCode,
              c = t.params.keyboard.pageUpDown,
              d = c && 33 === o,
              u = c && 34 === o,
              p = 37 === o,
              f = 39 === o,
              h = 38 === o,
              m = 40 === o;
            if (!t.allowSlideNext && ((t.isHorizontal() && f) || (t.isVertical() && m) || u)) return !1;
            if (!t.allowSlidePrev && ((t.isHorizontal() && p) || (t.isVertical() && h) || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase())))) {
              if (t.params.keyboard.onlyInViewport && (d || u || p || f || h || m)) {
                var g = !1;
                if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                var v = t.$el,
                  y = v[0].clientWidth,
                  b = v[0].clientHeight,
                  w = n.innerWidth,
                  x = n.innerHeight,
                  E = t.$el.offset();
                r && (E.left -= t.$el[0].scrollLeft);
                for (
                  var T = [
                      [E.left, E.top],
                      [E.left + y, E.top],
                      [E.left, E.top + b],
                      [E.left + y, E.top + b],
                    ],
                    C = 0;
                  C < T.length;
                  C += 1
                ) {
                  var _ = T[C];
                  if (_[0] >= 0 && _[0] <= w && _[1] >= 0 && _[1] <= x) {
                    if (0 === _[0] && 0 === _[1]) continue;
                    g = !0;
                  }
                }
                if (!g) return;
              }
              t.isHorizontal()
                ? ((d || u || p || f) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (((u || f) && !r) || ((d || p) && r)) && t.slideNext(), (((d || p) && !r) || ((u || f) && r)) && t.slidePrev())
                : ((d || u || h || m) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (u || m) && t.slideNext(), (d || h) && t.slidePrev()),
                t.emit("keyPress", o);
            }
          }
        },
        enable: function () {
          var e = this,
            t = s();
          e.keyboard.enabled || (x(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
        },
        disable: function () {
          var e = this,
            t = s();
          e.keyboard.enabled && (x(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
        },
      };
      const oe = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
        create: function () {
          S(this, { keyboard: ae({ enabled: !1 }, se) });
        },
        on: {
          init: function (e) {
            e.params.keyboard.enabled && e.keyboard.enable();
          },
          destroy: function (e) {
            e.keyboard.enabled && e.keyboard.disable();
          },
        },
      };
      var le = {
        lastScrollTime: T(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return l().navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                var e = s(),
                  t = "onwheel",
                  n = t in e;
                if (!n) {
                  var i = e.createElement("div");
                  i.setAttribute(t, "return;"), (n = "function" == typeof i.onwheel);
                }
                return !n && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (n = e.implementation.hasFeature("Events.wheel", "3.0")), n;
              })()
            ? "wheel"
            : "mousewheel";
        },
        normalize: function (e) {
          var t = 0,
            n = 0,
            i = 0,
            r = 0;
          return (
            "detail" in e && (n = e.detail),
            "wheelDelta" in e && (n = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
            (i = 10 * t),
            (r = 10 * n),
            "deltaY" in e && (r = e.deltaY),
            "deltaX" in e && (i = e.deltaX),
            e.shiftKey && !i && ((i = r), (r = 0)),
            (i || r) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (r *= 40)) : ((i *= 800), (r *= 800))),
            i && !t && (t = i < 1 ? -1 : 1),
            r && !n && (n = r < 1 ? -1 : 1),
            { spinX: t, spinY: n, pixelX: i, pixelY: r }
          );
        },
        handleMouseEnter: function () {
          this.enabled && (this.mouseEntered = !0);
        },
        handleMouseLeave: function () {
          this.enabled && (this.mouseEntered = !1);
        },
        handle: function (e) {
          var t = e,
            n = this;
          if (n.enabled) {
            var i = n.params.mousewheel;
            n.params.cssMode && t.preventDefault();
            var r = n.$el;
            if (("container" !== n.params.mousewheel.eventsTarget && (r = x(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges)) return !0;
            t.originalEvent && (t = t.originalEvent);
            var a = 0,
              s = n.rtlTranslate ? -1 : 1,
              o = le.normalize(t);
            if (i.forceToAxis)
              if (n.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                a = -o.pixelX * s;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                a = -o.pixelY;
              }
            else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
            if (0 === a) return !0;
            i.invert && (a = -a);
            var l = n.getTranslate() + a * i.sensitivity;
            if (
              (l >= n.minTranslate() && (l = n.minTranslate()),
              l <= n.maxTranslate() && (l = n.maxTranslate()),
              (!!n.params.loop || !(l === n.minTranslate() || l === n.maxTranslate())) && n.params.nested && t.stopPropagation(),
              n.params.freeMode)
            ) {
              var c = { time: T(), delta: Math.abs(a), direction: Math.sign(a) },
                d = n.mousewheel.lastEventBeforeSnap,
                u = d && c.time < d.time + 500 && c.delta <= d.delta && c.direction === d.direction;
              if (!u) {
                (n.mousewheel.lastEventBeforeSnap = void 0), n.params.loop && n.loopFix();
                var p = n.getTranslate() + a * i.sensitivity,
                  f = n.isBeginning,
                  h = n.isEnd;
                if (
                  (p >= n.minTranslate() && (p = n.minTranslate()),
                  p <= n.maxTranslate() && (p = n.maxTranslate()),
                  n.setTransition(0),
                  n.setTranslate(p),
                  n.updateProgress(),
                  n.updateActiveIndex(),
                  n.updateSlidesClasses(),
                  ((!f && n.isBeginning) || (!h && n.isEnd)) && n.updateSlidesClasses(),
                  n.params.freeModeSticky)
                ) {
                  clearTimeout(n.mousewheel.timeout), (n.mousewheel.timeout = void 0);
                  var m = n.mousewheel.recentWheelEvents;
                  m.length >= 15 && m.shift();
                  var g = m.length ? m[m.length - 1] : void 0,
                    v = m[0];
                  if ((m.push(c), g && (c.delta > g.delta || c.direction !== g.direction))) m.splice(0);
                  else if (m.length >= 15 && c.time - v.time < 500 && v.delta - c.delta >= 1 && c.delta <= 6) {
                    var y = a > 0 ? 0.8 : 0.2;
                    (n.mousewheel.lastEventBeforeSnap = c),
                      m.splice(0),
                      (n.mousewheel.timeout = E(function () {
                        n.slideToClosest(n.params.speed, !0, void 0, y);
                      }, 0));
                  }
                  n.mousewheel.timeout ||
                    (n.mousewheel.timeout = E(function () {
                      (n.mousewheel.lastEventBeforeSnap = c), m.splice(0), n.slideToClosest(n.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if ((u || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), p === n.minTranslate() || p === n.maxTranslate())) return !0;
              }
            } else {
              var b = { time: T(), delta: Math.abs(a), direction: Math.sign(a), raw: e },
                w = n.mousewheel.recentWheelEvents;
              w.length >= 2 && w.shift();
              var C = w.length ? w[w.length - 1] : void 0;
              if ((w.push(b), C ? (b.direction !== C.direction || b.delta > C.delta || b.time > C.time + 150) && n.mousewheel.animateSlider(b) : n.mousewheel.animateSlider(b), n.mousewheel.releaseScroll(b))) return !0;
            }
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
          }
        },
        animateSlider: function (e) {
          var t = this,
            n = l();
          return (
            !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) &&
            !(this.params.mousewheel.thresholdTime && T() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) &&
            ((e.delta >= 6 && T() - t.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)),
              (t.mousewheel.lastScrollTime = new n.Date().getTime()),
              !1))
          );
        },
        releaseScroll: function (e) {
          var t = this,
            n = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
          return !1;
        },
        enable: function () {
          var e = this,
            t = le.event();
          if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (e.mousewheel.enabled) return !1;
          var n = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarget && (n = x(e.params.mousewheel.eventsTarget)),
            n.on("mouseenter", e.mousewheel.handleMouseEnter),
            n.on("mouseleave", e.mousewheel.handleMouseLeave),
            n.on(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !0),
            !0
          );
        },
        disable: function () {
          var e = this,
            t = le.event();
          if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (!e.mousewheel.enabled) return !1;
          var n = e.$el;
          return "container" !== e.params.mousewheel.eventsTarget && (n = x(e.params.mousewheel.eventsTarget)), n.off(t, e.mousewheel.handle), (e.mousewheel.enabled = !1), !0;
        },
      };
      function ce() {
        return (ce =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var de = {
        toggleEl: function (e, t) {
          e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
        },
        update: function () {
          var e = this,
            t = e.params.navigation,
            n = e.navigation.toggleEl;
          if (!e.params.loop) {
            var i = e.navigation,
              r = i.$nextEl,
              a = i.$prevEl;
            a && a.length > 0 && (e.isBeginning ? n(a, !0) : n(a, !1), e.params.watchOverflow && e.enabled && a[e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
              r && r.length > 0 && (e.isEnd ? n(r, !0) : n(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
        },
        onNextClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        },
        init: function () {
          var e,
            t,
            n = this,
            i = n.params.navigation;
          ((n.params.navigation = M(n.$el, n.params.navigation, n.params.createElements, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), i.nextEl || i.prevEl) &&
            (i.nextEl && ((e = x(i.nextEl)), n.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))),
            i.prevEl && ((t = x(i.prevEl)), n.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", n.navigation.onNextClick),
            t && t.length > 0 && t.on("click", n.navigation.onPrevClick),
            A(n.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }),
            n.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            n = t.$nextEl,
            i = t.$prevEl;
          n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
        },
      };
      function ue() {
        return (ue =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var pe = {
        update: function () {
          var e = this,
            t = e.rtl,
            n = e.params.pagination;
          if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i,
              r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              a = e.pagination.$el,
              s = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (i -= r - 2 * e.loopedSlides),
                  i > s - 1 && (i -= s),
                  i < 0 && "bullets" !== e.params.paginationType && (i = s + i))
                : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0)
            ) {
              var o,
                l,
                c,
                d = e.pagination.bullets;
              if (
                (n.dynamicBullets &&
                  ((e.pagination.bulletSize = d.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"),
                  n.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                    e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                  (o = i - e.pagination.dynamicBulletIndex),
                  (c = ((l = o + (Math.min(d.length, n.dynamicMainBullets) - 1)) + o) / 2)),
                d.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"),
                a.length > 1)
              )
                d.each(function (e) {
                  var t = x(e),
                    r = t.index();
                  r === i && t.addClass(n.bulletActiveClass),
                    n.dynamicBullets &&
                      (r >= o && r <= l && t.addClass(n.bulletActiveClass + "-main"),
                      r === o &&
                        t
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev-prev"),
                      r === l &&
                        t
                          .next()
                          .addClass(n.bulletActiveClass + "-next")
                          .next()
                          .addClass(n.bulletActiveClass + "-next-next"));
                });
              else {
                var u = d.eq(i),
                  p = u.index();
                if ((u.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                  for (var f = d.eq(o), h = d.eq(l), m = o; m <= l; m += 1) d.eq(m).addClass(n.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (p >= d.length - n.dynamicMainBullets) {
                      for (var g = n.dynamicMainBullets; g >= 0; g -= 1) d.eq(d.length - g).addClass(n.bulletActiveClass + "-main");
                      d.eq(d.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev");
                    } else
                      f
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev-prev"),
                        h
                          .next()
                          .addClass(n.bulletActiveClass + "-next")
                          .next()
                          .addClass(n.bulletActiveClass + "-next-next");
                  else
                    f
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev-prev"),
                      h
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next");
                }
              }
              if (n.dynamicBullets) {
                var v = Math.min(d.length, n.dynamicMainBullets + 4),
                  y = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                  b = t ? "right" : "left";
                d.css(e.isHorizontal() ? b : "top", y + "px");
              }
            }
            if (("fraction" === n.type && (a.find(k(n.currentClass)).text(n.formatFractionCurrent(i + 1)), a.find(k(n.totalClass)).text(n.formatFractionTotal(s))), "progressbar" === n.type)) {
              var w;
              w = n.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
              var E = (i + 1) / s,
                T = 1,
                C = 1;
              "horizontal" === w ? (T = E) : (C = E),
                a
                  .find(k(n.progressbarFillClass))
                  .transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")")
                  .transition(e.params.speed);
            }
            "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(e, i + 1, s)), e.emit("paginationRender", a[0])) : e.emit("paginationUpdate", a[0]),
              e.params.watchOverflow && e.enabled && a[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              r = "";
            if ("bullets" === t.type) {
              var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
              e.params.freeMode && !e.params.loop && a > n && (a = n);
              for (var s = 0; s < a; s += 1) t.renderBullet ? (r += t.renderBullet.call(e, s, t.bulletClass)) : (r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
              i.html(r), (e.pagination.bullets = i.find(k(t.bulletClass)));
            }
            "fraction" === t.type && ((r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(r)),
              "progressbar" === t.type && ((r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(r)),
              "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this;
          e.params.pagination = M(e.$el, e.params.pagination, e.params.createElements, { el: "swiper-pagination" });
          var t = e.params.pagination;
          if (t.el) {
            var n = x(t.el);
            0 !== n.length &&
              (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)),
              "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
              n.addClass(t.modifierClass + t.type),
              "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass),
              t.clickable &&
                n.on("click", k(t.bulletClass), function (t) {
                  t.preventDefault();
                  var n = x(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (n += e.loopedSlides), e.slideTo(n);
                }),
              A(e.pagination, { $el: n, el: n[0] }),
              e.enabled || n.addClass(t.lockClass));
          }
        },
        destroy: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var n = e.pagination.$el;
            n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", k(t.bulletClass));
          }
        },
      };
      function fe() {
        return (fe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var he = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              n = e.rtlTranslate,
              i = e.progress,
              r = t.dragSize,
              a = t.trackSize,
              s = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              c = r,
              d = (a - r) * i;
            n ? ((d = -d) > 0 ? ((c = r - d), (d = 0)) : -d + r > a && (c = a + d)) : d < 0 ? ((c = r + d), (d = 0)) : d + r > a && (c = a - d),
              e.isHorizontal() ? (s.transform("translate3d(" + d + "px, 0, 0)"), (s[0].style.width = c + "px")) : (s.transform("translate3d(0px, " + d + "px, 0)"), (s[0].style.height = c + "px")),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              n = t.$dragEl,
              i = t.$el;
            (n[0].style.width = ""), (n[0].style.height = "");
            var r,
              a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              s = e.size / e.virtualSize,
              o = s * (a / e.size);
            (r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal() ? (n[0].style.width = r + "px") : (n[0].style.height = r + "px"),
              (i[0].style.display = s >= 1 ? "none" : ""),
              e.params.scrollbar.hide && (i[0].style.opacity = 0),
              A(t, { trackSize: a, divider: s, moveDivider: o, dragSize: r }),
              e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
          }
        },
        getPointerPosition: function (e) {
          return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            n = this,
            i = n.scrollbar,
            r = n.rtlTranslate,
            a = i.$el,
            s = i.dragSize,
            o = i.trackSize,
            l = i.dragStartPos;
          (t = (i.getPointerPosition(e) - a.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : s / 2)) / (o - s)), (t = Math.max(Math.min(t, 1), 0)), r && (t = 1 - t);
          var c = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
          n.updateProgress(c), n.setTranslate(c), n.updateActiveIndex(), n.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            n = t.params.scrollbar,
            i = t.scrollbar,
            r = t.$wrapperEl,
            a = i.$el,
            s = i.$dragEl;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            s.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            a.transition(0),
            n.hide && a.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this,
            n = t.scrollbar,
            i = t.$wrapperEl,
            r = n.$el,
            a = n.$dragEl;
          t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this,
            n = t.params.scrollbar,
            i = t.scrollbar,
            r = t.$wrapperEl,
            a = i.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
            n.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = E(function () {
                a.css("opacity", 0), a.transition(400);
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            n.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = s(),
              n = e.scrollbar,
              i = e.touchEventsTouch,
              r = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = n.$el[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              d = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            l &&
              (o.touch
                ? (l.addEventListener(i.start, e.scrollbar.onDragStart, c), l.addEventListener(i.move, e.scrollbar.onDragMove, c), l.addEventListener(i.end, e.scrollbar.onDragEnd, d))
                : (l.addEventListener(r.start, e.scrollbar.onDragStart, c), t.addEventListener(r.move, e.scrollbar.onDragMove, c), t.addEventListener(r.end, e.scrollbar.onDragEnd, d)));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = s(),
              n = e.scrollbar,
              i = e.touchEventsTouch,
              r = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = n.$el[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              d = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            l &&
              (o.touch
                ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, c), l.removeEventListener(i.move, e.scrollbar.onDragMove, c), l.removeEventListener(i.end, e.scrollbar.onDragEnd, d))
                : (l.removeEventListener(r.start, e.scrollbar.onDragStart, c), t.removeEventListener(r.move, e.scrollbar.onDragMove, c), t.removeEventListener(r.end, e.scrollbar.onDragEnd, d)));
          }
        },
        init: function () {
          var e = this,
            t = e.scrollbar,
            n = e.$el;
          e.params.scrollbar = M(n, e.params.scrollbar, e.params.createElements, { el: "swiper-scrollbar" });
          var i = e.params.scrollbar;
          if (i.el) {
            var r = x(i.el);
            e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === n.find(i.el).length && (r = n.find(i.el));
            var a = r.find("." + e.params.scrollbar.dragClass);
            0 === a.length && ((a = x('<div class="' + e.params.scrollbar.dragClass + '"></div>')), r.append(a)),
              A(t, { $el: r, el: r[0], $dragEl: a, dragEl: a[0] }),
              i.draggable && t.enableDraggable(),
              r && r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      };
      function me() {
        return (me =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ge = {
        setTransform: function (e, t) {
          var n = this.rtl,
            i = x(e),
            r = n ? -1 : 1,
            a = i.attr("data-swiper-parallax") || "0",
            s = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y"),
            l = i.attr("data-swiper-parallax-scale"),
            c = i.attr("data-swiper-parallax-opacity");
          if (
            (s || o ? ((s = s || "0"), (o = o || "0")) : this.isHorizontal() ? ((s = a), (o = "0")) : ((o = a), (s = "0")),
            (s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * r + "%" : s * t * r + "px"),
            (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
            null != c)
          ) {
            var d = c - (c - 1) * (1 - Math.abs(t));
            i[0].style.opacity = d;
          }
          if (null == l) i.transform("translate3d(" + s + ", " + o + ", 0px)");
          else {
            var u = l - (l - 1) * (1 - Math.abs(t));
            i.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + u + ")");
          }
        },
        setTranslate: function () {
          var e = this,
            t = e.$el,
            n = e.slides,
            i = e.progress,
            r = e.snapGrid;
          t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, i);
          }),
            n.each(function (t, n) {
              var a = t.progress;
              e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(n / 2) - i * (r.length - 1)),
                (a = Math.min(Math.max(a, -1), 1)),
                x(t)
                  .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                  .each(function (t) {
                    e.parallax.setTransform(t, a);
                  });
            });
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed);
          this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            var n = x(t),
              i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (i = 0), n.transition(i);
          });
        },
      };
      function ve() {
        return (ve =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ye = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            r = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2));
        },
        onGestureStart: function (e) {
          var t = this,
            n = t.support,
            i = t.params.zoom,
            r = t.zoom,
            a = r.gesture;
          if (((r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1), !n.gestures)) {
            if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
            (r.fakeGestureTouched = !0), (a.scaleStart = ye.getDistanceBetweenTouches(e));
          }
          (a.$slideEl && a.$slideEl.length) ||
          ((a.$slideEl = x(e.target).closest("." + t.params.slideClass)),
          0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)),
          (a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
          (a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
          (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          0 !== a.$imageWrapEl.length)
            ? (a.$imageEl && a.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (a.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this,
            n = t.support,
            i = t.params.zoom,
            r = t.zoom,
            a = r.gesture;
          if (!n.gestures) {
            if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
            (r.fakeGestureMoved = !0), (a.scaleMove = ye.getDistanceBetweenTouches(e));
          }
          a.$imageEl && 0 !== a.$imageEl.length
            ? (n.gestures ? (r.scale = e.scale * r.currentScale) : (r.scale = (a.scaleMove / a.scaleStart) * r.currentScale),
              r.scale > a.maxRatio && (r.scale = a.maxRatio - 1 + Math.pow(r.scale - a.maxRatio + 1, 0.5)),
              r.scale < i.minRatio && (r.scale = i.minRatio + 1 - Math.pow(i.minRatio - r.scale + 1, 0.5)),
              a.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")"))
            : "gesturechange" === e.type && r.onGestureStart(e);
        },
        onGestureEnd: function (e) {
          var t = this,
            n = t.device,
            i = t.support,
            r = t.params.zoom,
            a = t.zoom,
            s = a.gesture;
          if (!i.gestures) {
            if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
            if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !n.android)) return;
            (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
          }
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((a.scale = Math.max(Math.min(a.scale, s.maxRatio), r.minRatio)),
            s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
            (a.currentScale = a.scale),
            (a.isScaling = !1),
            1 === a.scale && (s.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.device,
            n = this.zoom,
            i = n.gesture,
            r = n.image;
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            (r.isTouched ||
              (t.android && e.cancelable && e.preventDefault(),
              (r.isTouched = !0),
              (r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this,
            n = t.zoom,
            i = n.gesture,
            r = n.image,
            a = n.velocity;
          if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), r.isTouched && i.$slideEl)) {
            r.isMoved ||
              ((r.width = i.$imageEl[0].offsetWidth),
              (r.height = i.$imageEl[0].offsetHeight),
              (r.startX = C(i.$imageWrapEl[0], "x") || 0),
              (r.startY = C(i.$imageWrapEl[0], "y") || 0),
              (i.slideWidth = i.$slideEl[0].offsetWidth),
              (i.slideHeight = i.$slideEl[0].offsetHeight),
              i.$imageWrapEl.transition(0),
              t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
            var s = r.width * n.scale,
              o = r.height * n.scale;
            if (!(s < i.slideWidth && o < i.slideHeight)) {
              if (
                ((r.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                (r.maxX = -r.minX),
                (r.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                (r.maxY = -r.minY),
                (r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !r.isMoved && !n.isScaling)
              ) {
                if (t.isHorizontal() && ((Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x) || (Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)))
                  return void (r.isTouched = !1);
                if (!t.isHorizontal() && ((Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y) || (Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)))
                  return void (r.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (r.isMoved = !0),
                (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
                (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
                r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
                r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
                r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
                r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
                a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x),
                a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y),
                a.prevTime || (a.prevTime = Date.now()),
                (a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                (a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                (a.prevPositionX = r.touchesCurrent.x),
                (a.prevPositionY = r.touchesCurrent.y),
                (a.prevTime = Date.now()),
                i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)");
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            n = e.image,
            i = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!n.isTouched || !n.isMoved) return (n.isTouched = !1), void (n.isMoved = !1);
            (n.isTouched = !1), (n.isMoved = !1);
            var r = 300,
              a = 300,
              s = i.x * r,
              o = n.currentX + s,
              l = i.y * a,
              c = n.currentY + l;
            0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((c - n.currentY) / i.y));
            var d = Math.max(r, a);
            (n.currentX = o), (n.currentY = c);
            var u = n.width * e.scale,
              p = n.height * e.scale;
            (n.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
              (n.maxX = -n.minX),
              (n.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
              (n.maxY = -n.minY),
              (n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX)),
              (n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY)),
              t.$imageWrapEl.transition(d).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)");
          }
        },
        onTransitionEnd: function () {
          var e = this,
            t = e.zoom,
            n = t.gesture;
          n.$slideEl &&
            e.previousIndex !== e.activeIndex &&
            (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"),
            (t.scale = 1),
            (t.currentScale = 1),
            (n.$slideEl = void 0),
            (n.$imageEl = void 0),
            (n.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            n,
            i,
            r,
            a,
            s,
            o,
            c,
            d,
            u,
            p,
            f,
            h,
            m,
            g,
            v,
            y = this,
            b = l(),
            w = y.zoom,
            x = y.params.zoom,
            E = w.gesture,
            T = w.image;
          (E.$slideEl ||
            (y.params.virtual && y.params.virtual.enabled && y.virtual ? (E.$slideEl = y.$wrapperEl.children("." + y.params.slideActiveClass)) : (E.$slideEl = y.slides.eq(y.activeIndex)),
            (E.$imageEl = E.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
            (E.$imageWrapEl = E.$imageEl.parent("." + x.containerClass))),
          E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) &&
            (E.$slideEl.addClass("" + x.zoomedSlideClass),
            void 0 === T.touchesStart.x && e ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY)) : ((t = T.touchesStart.x), (n = T.touchesStart.y)),
            (w.scale = E.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio),
            (w.currentScale = E.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio),
            e
              ? ((g = E.$slideEl[0].offsetWidth),
                (v = E.$slideEl[0].offsetHeight),
                (i = E.$slideEl.offset().left + b.scrollX + g / 2 - t),
                (r = E.$slideEl.offset().top + b.scrollY + v / 2 - n),
                (o = E.$imageEl[0].offsetWidth),
                (c = E.$imageEl[0].offsetHeight),
                (d = o * w.scale),
                (u = c * w.scale),
                (h = -(p = Math.min(g / 2 - d / 2, 0))),
                (m = -(f = Math.min(v / 2 - u / 2, 0))),
                (a = i * w.scale) < p && (a = p),
                a > h && (a = h),
                (s = r * w.scale) < f && (s = f),
                s > m && (s = m))
              : ((a = 0), (s = 0)),
            E.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"),
            E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")"));
        },
        out: function () {
          var e = this,
            t = e.zoom,
            n = e.params.zoom,
            i = t.gesture;
          i.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual ? (i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass)) : (i.$slideEl = e.slides.eq(e.activeIndex)),
            (i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
            (i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              i.$imageWrapEl &&
              0 !== i.$imageWrapEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
              i.$slideEl.removeClass("" + n.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        toggleGestures: function (e) {
          var t = this,
            n = t.zoom,
            i = n.slideSelector,
            r = n.passiveListener;
          t.$wrapperEl[e]("gesturestart", i, n.onGestureStart, r), t.$wrapperEl[e]("gesturechange", i, n.onGestureChange, r), t.$wrapperEl[e]("gestureend", i, n.onGestureEnd, r);
        },
        enableGestures: function () {
          this.zoom.gesturesEnabled || ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
        },
        disableGestures: function () {
          this.zoom.gesturesEnabled && ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
        },
        enable: function () {
          var e = this,
            t = e.support,
            n = e.zoom;
          if (!n.enabled) {
            n.enabled = !0;
            var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
              r = !t.passiveListener || { passive: !1, capture: !0 },
              a = "." + e.params.slideClass;
            (e.zoom.passiveListener = i),
              (e.zoom.slideSelector = a),
              t.gestures
                ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(e.touchEvents.start, a, n.onGestureStart, i),
                  e.$wrapperEl.on(e.touchEvents.move, a, n.onGestureChange, r),
                  e.$wrapperEl.on(e.touchEvents.end, a, n.onGestureEnd, i),
                  e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, n.onGestureEnd, i)),
              e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, n.onTouchMove, r);
          }
        },
        disable: function () {
          var e = this,
            t = e.zoom;
          if (t.enabled) {
            var n = e.support;
            e.zoom.enabled = !1;
            var i = !("touchstart" !== e.touchEvents.start || !n.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
              r = !n.passiveListener || { passive: !1, capture: !0 },
              a = "." + e.params.slideClass;
            n.gestures
              ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, i),
                e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, r),
                e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, i),
                e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, i)),
              e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, r);
          }
        },
      };
      function be() {
        return (be =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var we = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var n = this,
            i = n.params.lazy;
          if (void 0 !== e && 0 !== n.slides.length) {
            var r = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
              a = r.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
            !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || a.push(r[0]),
              0 !== a.length &&
                a.each(function (e) {
                  var a = x(e);
                  a.addClass(i.loadingClass);
                  var s = a.attr("data-background"),
                    o = a.attr("data-src"),
                    l = a.attr("data-srcset"),
                    c = a.attr("data-sizes"),
                    d = a.parent("picture");
                  n.loadImage(a[0], o || s, l, c, !1, function () {
                    if (null != n && n && (!n || n.params) && !n.destroyed) {
                      if (
                        (s
                          ? (a.css("background-image", 'url("' + s + '")'), a.removeAttr("data-background"))
                          : (l && (a.attr("srcset", l), a.removeAttr("data-srcset")),
                            c && (a.attr("sizes", c), a.removeAttr("data-sizes")),
                            d.length &&
                              d.children("source").each(function (e) {
                                var t = x(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                              }),
                            o && (a.attr("src", o), a.removeAttr("data-src"))),
                        a.addClass(i.loadedClass).removeClass(i.loadingClass),
                        r.find("." + i.preloaderClass).remove(),
                        n.params.loop && t)
                      ) {
                        var e = r.attr("data-swiper-slide-index");
                        if (r.hasClass(n.params.slideDuplicateClass)) {
                          var u = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                          n.lazy.loadInSlide(u.index(), !1);
                        } else {
                          var p = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                          n.lazy.loadInSlide(p.index(), !1);
                        }
                      }
                      n.emit("lazyImageReady", r[0], a[0]), n.params.autoHeight && n.updateAutoHeight();
                    }
                  }),
                    n.emit("lazyImageLoad", r[0], a[0]);
                });
          }
        },
        load: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            i = e.slides,
            r = e.activeIndex,
            a = e.virtual && n.virtual.enabled,
            s = n.lazy,
            o = n.slidesPerView;
          function l(e) {
            if (a) {
              if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function c(e) {
            return a ? x(e).attr("data-swiper-slide-index") : x(e).index();
          }
          if (("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
            t.children("." + n.slideVisibleClass).each(function (t) {
              var n = a ? x(t).attr("data-swiper-slide-index") : x(t).index();
              e.lazy.loadInSlide(n);
            });
          else if (o > 1) for (var d = r; d < r + o; d += 1) l(d) && e.lazy.loadInSlide(d);
          else e.lazy.loadInSlide(r);
          if (s.loadPrevNext)
            if (o > 1 || (s.loadPrevNextAmount && s.loadPrevNextAmount > 1)) {
              for (var u = s.loadPrevNextAmount, p = o, f = Math.min(r + p + Math.max(u, p), i.length), h = Math.max(r - Math.max(p, u), 0), m = r + o; m < f; m += 1) l(m) && e.lazy.loadInSlide(m);
              for (var g = h; g < r; g += 1) l(g) && e.lazy.loadInSlide(g);
            } else {
              var v = t.children("." + n.slideNextClass);
              v.length > 0 && e.lazy.loadInSlide(c(v));
              var y = t.children("." + n.slidePrevClass);
              y.length > 0 && e.lazy.loadInSlide(c(y));
            }
        },
        checkInViewOnLoad: function () {
          var e = l(),
            t = this;
          if (t && !t.destroyed) {
            var n = t.params.lazy.scrollingElement ? x(t.params.lazy.scrollingElement) : x(e),
              i = n[0] === e,
              r = i ? e.innerWidth : n[0].offsetWidth,
              a = i ? e.innerHeight : n[0].offsetHeight,
              s = t.$el.offset(),
              o = !1;
            t.rtlTranslate && (s.left -= t.$el[0].scrollLeft);
            for (
              var c = [
                  [s.left, s.top],
                  [s.left + t.width, s.top],
                  [s.left, s.top + t.height],
                  [s.left + t.width, s.top + t.height],
                ],
                d = 0;
              d < c.length;
              d += 1
            ) {
              var u = c[d];
              if (u[0] >= 0 && u[0] <= r && u[1] >= 0 && u[1] <= a) {
                if (0 === u[0] && 0 === u[1]) continue;
                o = !0;
              }
            }
            var p = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
            o ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad, p)) : t.lazy.scrollHandlerAttached || ((t.lazy.scrollHandlerAttached = !0), n.on("scroll", t.lazy.checkInViewOnLoad, p));
          }
        },
      };
      function xe() {
        return (xe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Ee = {
        LinearSpline: function (e, t) {
          var n,
            i,
            r,
            a,
            s,
            o = function (e, t) {
              for (i = -1, n = e.length; n - i > 1; ) e[(r = (n + i) >> 1)] <= t ? (i = r) : (n = r);
              return n;
            };
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e ? ((s = o(this.x, e)), (a = s - 1), ((e - this.x[a]) * (this.y[s] - this.y[a])) / (this.x[s] - this.x[a]) + this.y[a]) : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline || (t.controller.spline = t.params.loop ? new Ee.LinearSpline(t.slidesGrid, e.slidesGrid) : new Ee.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var n,
            i,
            r = this,
            a = r.controller.control,
            s = r.constructor;
          function o(e) {
            var t = r.rtlTranslate ? -r.translate : r.translate;
            "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (i = -r.controller.spline.interpolate(-t))),
              (i && "container" !== r.params.controller.by) || ((n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (i = (t - r.minTranslate()) * n + e.minTranslate())),
              r.params.controller.inverse && (i = e.maxTranslate() - i),
              e.updateProgress(i),
              e.setTranslate(i, r),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(a)) for (var l = 0; l < a.length; l += 1) a[l] !== t && a[l] instanceof s && o(a[l]);
          else a instanceof s && t !== a && o(a);
        },
        setTransition: function (e, t) {
          var n,
            i = this,
            r = i.constructor,
            a = i.controller.control;
          function s(t) {
            t.setTransition(e, i),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  E(function () {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(function () {
                  a && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
                }));
          }
          if (Array.isArray(a)) for (n = 0; n < a.length; n += 1) a[n] !== t && a[n] instanceof r && s(a[n]);
          else a instanceof r && t !== a && s(a);
        },
      };
      function Te() {
        return (Te =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Ce = {
        getRandomNumber: function (e) {
          void 0 === e && (e = 16);
          return "x".repeat(e).replace(/x/g, function () {
            return Math.round(16 * Math.random()).toString(16);
          });
        },
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        makeElNotFocusable: function (e) {
          return e.attr("tabIndex", "-1"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElRoleDescription: function (e, t) {
          return e.attr("aria-roledescription", t), e;
        },
        addElControls: function (e, t) {
          return e.attr("aria-controls", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        addElId: function (e, t) {
          return e.attr("id", t), e;
        },
        addElLive: function (e, t) {
          return e.attr("aria-live", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterOrSpaceKey: function (e) {
          if (13 === e.keyCode || 32 === e.keyCode) {
            var t = this,
              n = t.params.a11y,
              i = x(e.target);
            t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)),
              t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)),
              t.pagination && i.is(k(t.params.pagination.bulletClass)) && i[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop && e.navigation) {
            var t = e.navigation,
              n = t.$nextEl,
              i = t.$prevEl;
            i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
              n && n.length > 0 && (e.isEnd ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n)));
          }
        },
        updatePagination: function () {
          var e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each(function (n) {
              var i = x(n);
              e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
            });
        },
        init: function () {
          var e = this,
            t = e.params.a11y;
          e.$el.append(e.a11y.liveRegion);
          var n = e.$el;
          t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(n, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(n, t.containerMessage);
          var i,
            r,
            a = e.$wrapperEl,
            s = a.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
            o = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          e.a11y.addElId(a, s),
            e.a11y.addElLive(a, o),
            t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(x(e.slides), t.itemRoleDescriptionMessage),
            e.a11y.addElRole(x(e.slides), t.slideRole),
            e.slides.each(function (n) {
              var i = x(n),
                r = t.slideLabelMessage.replace(/\{\{index\}\}/, i.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
              e.a11y.addElLabel(i, r);
            }),
            e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
            i && i.length && (e.a11y.makeElFocusable(i), "BUTTON" !== i[0].tagName && (e.a11y.addElRole(i, "button"), i.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(i, t.nextSlideMessage), e.a11y.addElControls(i, s)),
            r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, s)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", k(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
        },
        destroy: function () {
          var e,
            t,
            n = this;
          n.a11y.liveRegion && n.a11y.liveRegion.length > 0 && n.a11y.liveRegion.remove(),
            n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl),
            n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl),
            e && e.off("keydown", n.a11y.onEnterOrSpaceKey),
            t && t.off("keydown", n.a11y.onEnterOrSpaceKey),
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", k(n.params.pagination.bulletClass), n.a11y.onEnterOrSpaceKey);
        },
      };
      function _e() {
        return (_e =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Ae = {
        init: function () {
          var e = this,
            t = l();
          if (e.params.history) {
            if (!t.history || !t.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
            var n = e.history;
            (n.initialized = !0),
              (n.paths = Ae.getPathValues(e.params.url)),
              (n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
          }
        },
        destroy: function () {
          var e = l();
          this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          var e = this;
          (e.history.paths = Ae.getPathValues(e.params.url)), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
        },
        getPathValues: function (e) {
          var t = l(),
            n = (e ? new URL(e) : t.location).pathname
              .slice(1)
              .split("/")
              .filter(function (e) {
                return "" !== e;
              }),
            i = n.length;
          return { key: n[i - 2], value: n[i - 1] };
        },
        setHistory: function (e, t) {
          var n = this,
            i = l();
          if (n.history.initialized && n.params.history.enabled) {
            var r;
            r = n.params.url ? new URL(n.params.url) : i.location;
            var a = n.slides.eq(t),
              s = Ae.slugify(a.attr("data-history"));
            if (n.params.history.root.length > 0) {
              var o = n.params.history.root;
              "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), (s = o + "/" + e + "/" + s);
            } else r.pathname.includes(e) || (s = e + "/" + s);
            var c = i.history.state;
            (c && c.value === s) || (n.params.history.replaceState ? i.history.replaceState({ value: s }, null, s) : i.history.pushState({ value: s }, null, s));
          }
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, n) {
          var i = this;
          if (t)
            for (var r = 0, a = i.slides.length; r < a; r += 1) {
              var s = i.slides.eq(r);
              if (Ae.slugify(s.attr("data-history")) === t && !s.hasClass(i.params.slideDuplicateClass)) {
                var o = s.index();
                i.slideTo(o, e, n);
              }
            }
          else i.slideTo(0, e, n);
        },
      };
      function Se() {
        return (Se =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ke = {
        onHashCange: function () {
          var e = this,
            t = s();
          e.emit("hashChange");
          var n = t.location.hash.replace("#", "");
          if (n !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index();
            if (void 0 === i) return;
            e.slideTo(i);
          }
        },
        setHash: function () {
          var e = this,
            t = l(),
            n = s();
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || 0), e.emit("hashSet");
            else {
              var i = e.slides.eq(e.activeIndex),
                r = i.attr("data-hash") || i.attr("data-history");
              (n.location.hash = r || ""), e.emit("hashSet");
            }
        },
        init: function () {
          var e = this,
            t = s(),
            n = l();
          if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
            e.hashNavigation.initialized = !0;
            var i = t.location.hash.replace("#", "");
            if (i)
              for (var r = 0, a = e.slides.length; r < a; r += 1) {
                var o = e.slides.eq(r);
                if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
                  var c = o.index();
                  e.slideTo(c, 0, e.params.runCallbacksOnInit, !0);
                }
              }
            e.params.hashNavigation.watchState && x(n).on("hashchange", e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          var e = l();
          this.params.hashNavigation.watchState && x(e).off("hashchange", this.hashNavigation.onHashCange);
        },
      };
      function Me() {
        return (Me =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Oe = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = E(function () {
              var t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), e.emit("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), e.emit("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && e.autoplay.run();
            }, n));
        },
        start: function () {
          var e = this;
          return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
        },
        stop: function () {
          var e = this;
          return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                    t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
                  })
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
        onVisibilityChange: function () {
          var e = this,
            t = s();
          "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), (e.autoplay.paused = !1));
        },
        onTransitionEnd: function (e) {
          var t = this;
          t &&
            !t.destroyed &&
            t.$wrapperEl &&
            e.target === t.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
              t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
            }),
            (t.autoplay.paused = !1),
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        },
        onMouseEnter: function () {
          var e = this;
          e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(),
            ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
              e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
            });
        },
        onMouseLeave: function () {
          var e = this;
          e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), e.autoplay.run());
        },
        attachMouseEvents: function () {
          var e = this;
          e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
        },
        detachMouseEvents: function () {
          var e = this;
          e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
        },
      };
      function Le() {
        return (Le =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Pe = {
        setTranslate: function () {
          for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
            var i = e.slides.eq(n),
              r = -i[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            var a = 0;
            e.isHorizontal() || ((a = r), (r = 0));
            var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({ opacity: s }).transform("translate3d(" + r + "px, " + a + "px, 0px)");
          }
        },
        setTransition: function (e) {
          var t = this,
            n = t.slides,
            i = t.$wrapperEl;
          if ((n.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var r = !1;
            n.transitionEnd(function () {
              if (!r && t && !t.destroyed) {
                (r = !0), (t.animating = !1);
                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n]);
              }
            });
          }
        },
      };
      function De() {
        return (De =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var $e = {
        setTranslate: function () {
          var e,
            t = this,
            n = t.$el,
            i = t.$wrapperEl,
            r = t.slides,
            a = t.width,
            s = t.height,
            o = t.rtlTranslate,
            l = t.size,
            c = t.browser,
            d = t.params.cubeEffect,
            u = t.isHorizontal(),
            p = t.virtual && t.params.virtual.enabled,
            f = 0;
          d.shadow &&
            (u
              ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = x('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: a + "px" }))
              : 0 === (e = n.find(".swiper-cube-shadow")).length && ((e = x('<div class="swiper-cube-shadow"></div>')), n.append(e)));
          for (var h = 0; h < r.length; h += 1) {
            var m = r.eq(h),
              g = h;
            p && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
            var v = 90 * g,
              y = Math.floor(v / 360);
            o && ((v = -v), (y = Math.floor(-v / 360)));
            var b = Math.max(Math.min(m[0].progress, 1), -1),
              w = 0,
              E = 0,
              T = 0;
            g % 4 == 0 ? ((w = 4 * -y * l), (T = 0)) : (g - 1) % 4 == 0 ? ((w = 0), (T = 4 * -y * l)) : (g - 2) % 4 == 0 ? ((w = l + 4 * y * l), (T = l)) : (g - 3) % 4 == 0 && ((w = -l), (T = 3 * l + 4 * l * y)),
              o && (w = -w),
              u || ((E = w), (w = 0));
            var C = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + w + "px, " + E + "px, " + T + "px)";
            if ((b <= 1 && b > -1 && ((f = 90 * g + 90 * b), o && (f = 90 * -g - 90 * b)), m.transform(C), d.slideShadows)) {
              var _ = u ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                A = u ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
              0 === _.length && ((_ = x('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>')), m.append(_)),
                0 === A.length && ((A = x('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>')), m.append(A)),
                _.length && (_[0].style.opacity = Math.max(-b, 0)),
                A.length && (A[0].style.opacity = Math.max(b, 0));
            }
          }
          if (
            (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
            d.shadow)
          )
            if (u) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
            else {
              var S = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                k = 1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2),
                M = d.shadowScale,
                O = d.shadowScale / k,
                L = d.shadowOffset;
              e.transform("scale3d(" + M + ", 1, " + O + ") translate3d(0px, " + (s / 2 + L) + "px, " + -s / 2 / O + "px) rotateX(-90deg)");
            }
          var P = c.isSafari || c.isWebView ? -l / 2 : 0;
          i.transform("translate3d(0px,0," + P + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)");
        },
        setTransition: function (e) {
          var t = this,
            n = t.$el;
          t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e);
        },
      };
      function Ne() {
        return (Ne =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ze = {
        setTranslate: function () {
          for (var e = this, t = e.slides, n = e.rtlTranslate, i = 0; i < t.length; i += 1) {
            var r = t.eq(i),
              a = r[0].progress;
            e.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), -1));
            var s = -180 * a,
              o = 0,
              l = -r[0].swiperSlideOffset,
              c = 0;
            if ((e.isHorizontal() ? n && (s = -s) : ((c = l), (l = 0), (o = -s), (s = 0)), (r[0].style.zIndex = -Math.abs(Math.round(a)) + t.length), e.params.flipEffect.slideShadows)) {
              var d = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                u = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
              0 === d.length && ((d = x('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>')), r.append(d)),
                0 === u.length && ((u = x('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>')), r.append(u)),
                d.length && (d[0].style.opacity = Math.max(-a, 0)),
                u.length && (u[0].style.opacity = Math.max(a, 0));
            }
            r.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)");
          }
        },
        setTransition: function (e) {
          var t = this,
            n = t.slides,
            i = t.activeIndex,
            r = t.$wrapperEl;
          if ((n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
            var a = !1;
            n.eq(i).transitionEnd(function () {
              if (!a && t && !t.destroyed) {
                (a = !0), (t.animating = !1);
                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n]);
              }
            });
          }
        },
      };
      function Ie() {
        return (Ie =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var je = {
        setTranslate: function () {
          for (
            var e = this,
              t = e.width,
              n = e.height,
              i = e.slides,
              r = e.slidesSizesGrid,
              a = e.params.coverflowEffect,
              s = e.isHorizontal(),
              o = e.translate,
              l = s ? t / 2 - o : n / 2 - o,
              c = s ? a.rotate : -a.rotate,
              d = a.depth,
              u = 0,
              p = i.length;
            u < p;
            u += 1
          ) {
            var f = i.eq(u),
              h = r[u],
              m = ((l - f[0].swiperSlideOffset - h / 2) / h) * a.modifier,
              g = s ? c * m : 0,
              v = s ? 0 : c * m,
              y = -d * Math.abs(m),
              b = a.stretch;
            "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(a.stretch) / 100) * h);
            var w = s ? 0 : b * m,
              E = s ? b * m : 0,
              T = 1 - (1 - a.scale) * Math.abs(m);
            Math.abs(E) < 0.001 && (E = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(v) < 0.001 && (v = 0), Math.abs(T) < 0.001 && (T = 0);
            var C = "translate3d(" + E + "px," + w + "px," + y + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg) scale(" + T + ")";
            if ((f.transform(C), (f[0].style.zIndex = 1 - Math.abs(Math.round(m))), a.slideShadows)) {
              var _ = s ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                A = s ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === _.length && ((_ = x('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>')), f.append(_)),
                0 === A.length && ((A = x('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>')), f.append(A)),
                _.length && (_[0].style.opacity = m > 0 ? m : 0),
                A.length && (A[0].style.opacity = -m > 0 ? -m : 0);
            }
          }
        },
        setTransition: function (e) {
          this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
        },
      };
      function Be() {
        return (Be =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var He = {
        init: function () {
          var e = this,
            t = e.params.thumbs;
          if (e.thumbs.initialized) return !1;
          e.thumbs.initialized = !0;
          var n = e.constructor;
          return (
            t.swiper instanceof n
              ? ((e.thumbs.swiper = t.swiper), A(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), A(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
              : _(t.swiper) && ((e.thumbs.swiper = new n(A({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
            !0
          );
        },
        onThumbClick: function () {
          var e = this,
            t = e.thumbs.swiper;
          if (t) {
            var n = t.clickedIndex,
              i = t.clickedSlide;
            if (!((i && x(i).hasClass(e.params.thumbs.slideThumbActiveClass)) || null == n)) {
              var r;
              if (((r = t.params.loop ? parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n), e.params.loop)) {
                var a = e.activeIndex;
                e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (a = e.activeIndex));
                var s = e.slides
                    .eq(a)
                    .prevAll('[data-swiper-slide-index="' + r + '"]')
                    .eq(0)
                    .index(),
                  o = e.slides
                    .eq(a)
                    .nextAll('[data-swiper-slide-index="' + r + '"]')
                    .eq(0)
                    .index();
                r = void 0 === s ? o : void 0 === o ? s : o - a < a - s ? o : s;
              }
              e.slideTo(r);
            }
          }
        },
        update: function (e) {
          var t = this,
            n = t.thumbs.swiper;
          if (n) {
            var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
              r = t.params.thumbs.autoScrollOffset,
              a = r && !n.params.loop;
            if (t.realIndex !== n.realIndex || a) {
              var s,
                o,
                l = n.activeIndex;
              if (n.params.loop) {
                n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), (l = n.activeIndex));
                var c = n.slides
                    .eq(l)
                    .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index(),
                  d = n.slides
                    .eq(l)
                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index();
                (s = void 0 === c ? d : void 0 === d ? c : d - l == l - c ? (n.params.slidesPerGroup > 1 ? d : l) : d - l < l - c ? d : c), (o = t.activeIndex > t.previousIndex ? "next" : "prev");
              } else o = (s = t.realIndex) > t.previousIndex ? "next" : "prev";
              a && (s += "next" === o ? r : -1 * r),
                n.visibleSlidesIndexes &&
                  n.visibleSlidesIndexes.indexOf(s) < 0 &&
                  (n.params.centeredSlides ? (s = s > l ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1) : s > l && n.params.slidesPerGroup, n.slideTo(s, e ? 0 : void 0));
            }
            var u = 1,
              p = t.params.thumbs.slideThumbActiveClass;
            if (
              (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (u = 1),
              (u = Math.floor(u)),
              n.slides.removeClass(p),
              n.params.loop || (n.params.virtual && n.params.virtual.enabled))
            )
              for (var f = 0; f < u; f += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + f) + '"]').addClass(p);
            else for (var h = 0; h < u; h += 1) n.slides.eq(t.realIndex + h).addClass(p);
          }
        },
      };
      var Re = [
        re,
        oe,
        {
          name: "mousewheel",
          params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } },
          create: function () {
            S(this, {
              mousewheel: {
                enabled: !1,
                lastScrollTime: T(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                enable: le.enable,
                disable: le.disable,
                handle: le.handle,
                handleMouseEnter: le.handleMouseEnter,
                handleMouseLeave: le.handleMouseLeave,
                animateSlider: le.animateSlider,
                releaseScroll: le.releaseScroll,
              },
            });
          },
          on: {
            init: function (e) {
              !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy: function (e) {
              e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
          create: function () {
            S(this, { navigation: ce({}, de) });
          },
          on: {
            init: function (e) {
              e.navigation.init(), e.navigation.update();
            },
            toEdge: function (e) {
              e.navigation.update();
            },
            fromEdge: function (e) {
              e.navigation.update();
            },
            destroy: function (e) {
              e.navigation.destroy();
            },
            "enable disable": function (e) {
              var t = e.navigation,
                n = t.$nextEl,
                i = t.$prevEl;
              n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
            },
            click: function (e, t) {
              var n = e.navigation,
                i = n.$nextEl,
                r = n.$prevEl,
                a = t.target;
              if (e.params.navigation.hideOnClick && !x(a).is(r) && !x(a).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                var s;
                i ? (s = i.hasClass(e.params.navigation.hiddenClass)) : r && (s = r.hasClass(e.params.navigation.hiddenClass)),
                  !0 === s ? e.emit("navigationShow") : e.emit("navigationHide"),
                  i && i.toggleClass(e.params.navigation.hiddenClass),
                  r && r.toggleClass(e.params.navigation.hiddenClass);
              }
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            S(this, { pagination: ue({ dynamicBulletIndex: 0 }, pe) });
          },
          on: {
            init: function (e) {
              e.pagination.init(), e.pagination.render(), e.pagination.update();
            },
            activeIndexChange: function (e) {
              (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
            },
            snapIndexChange: function (e) {
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange: function (e) {
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function (e) {
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function (e) {
              e.pagination.destroy();
            },
            "enable disable": function (e) {
              var t = e.pagination.$el;
              t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
            },
            click: function (e, t) {
              var n = t.target;
              if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !x(n).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && ((e.navigation.nextEl && n === e.navigation.nextEl) || (e.navigation.prevEl && n === e.navigation.prevEl))) return;
                !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
              }
            },
          },
        },
        {
          name: "scrollbar",
          params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
          create: function () {
            S(this, { scrollbar: fe({ isTouched: !1, timeout: null, dragTimeout: null }, he) });
          },
          on: {
            init: function (e) {
              e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
            },
            update: function (e) {
              e.scrollbar.updateSize();
            },
            resize: function (e) {
              e.scrollbar.updateSize();
            },
            observerUpdate: function (e) {
              e.scrollbar.updateSize();
            },
            setTranslate: function (e) {
              e.scrollbar.setTranslate();
            },
            setTransition: function (e, t) {
              e.scrollbar.setTransition(t);
            },
            "enable disable": function (e) {
              var t = e.scrollbar.$el;
              t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
            },
            destroy: function (e) {
              e.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            S(this, { parallax: me({}, ge) });
          },
          on: {
            beforeInit: function (e) {
              e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
            },
            init: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTranslate: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTransition: function (e, t) {
              e.params.parallax.enabled && e.parallax.setTransition(t);
            },
          },
        },
        {
          name: "zoom",
          params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
          create: function () {
            var e = this;
            S(e, {
              zoom: ve(
                {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                },
                ye
              ),
            });
            var t = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return t;
              },
              set: function (n) {
                if (t !== n) {
                  var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                  e.emit("zoomChange", n, i, r);
                }
                t = n;
              },
            });
          },
          on: {
            init: function (e) {
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy: function (e) {
              e.zoom.disable();
            },
            touchStart: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchStart(t);
            },
            touchEnd: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchEnd(t);
            },
            doubleTap: function (e, t) {
              !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
            },
            transitionEnd: function (e) {
              e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
            },
            slideChange: function (e) {
              e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              checkInView: !1,
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              scrollingElement: "",
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            S(this, { lazy: be({ initialImageLoaded: !1 }, we) });
          },
          on: {
            beforeInit: function (e) {
              e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
            },
            init: function (e) {
              e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
            },
            scroll: function (e) {
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart: function (e) {
              e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
            },
            transitionEnd: function (e) {
              e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
            },
            slideChange: function (e) {
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            S(this, { controller: xe({ control: this.params.controller.control }, Ee) });
          },
          on: {
            update: function (e) {
              e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize: function (e) {
              e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate: function (e) {
              e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate: function (e, t, n) {
              e.controller.control && e.controller.setTranslate(t, n);
            },
            setTransition: function (e, t, n) {
              e.controller.control && e.controller.setTransition(t, n);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: "group",
            },
          },
          create: function () {
            S(this, { a11y: Te({}, Ce, { liveRegion: x('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) });
          },
          on: {
            afterInit: function (e) {
              e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
            },
            toEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            fromEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            paginationUpdate: function (e) {
              e.params.a11y.enabled && e.a11y.updatePagination();
            },
            destroy: function (e) {
              e.params.a11y.enabled && e.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, root: "", replaceState: !1, key: "slides" } },
          create: function () {
            S(this, { history: _e({}, Ae) });
          },
          on: {
            init: function (e) {
              e.params.history.enabled && e.history.init();
            },
            destroy: function (e) {
              e.params.history.enabled && e.history.destroy();
            },
            "transitionEnd _freeModeNoMomentumRelease": function (e) {
              e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange: function (e) {
              e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
          create: function () {
            S(this, { hashNavigation: Se({ initialized: !1 }, ke) });
          },
          on: {
            init: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            "transitionEnd _freeModeNoMomentumRelease": function (e) {
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange: function (e) {
              e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } },
          create: function () {
            S(this, { autoplay: Me({}, Oe, { running: !1, paused: !1 }) });
          },
          on: {
            init: function (e) {
              e.params.autoplay.enabled && (e.autoplay.start(), s().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
            },
            beforeTransitionStart: function (e, t, n) {
              e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
            },
            sliderFirstMove: function (e) {
              e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
            },
            touchEnd: function (e) {
              e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
            },
            destroy: function (e) {
              e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), s().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            S(this, { fadeEffect: Le({}, Pe) });
          },
          on: {
            beforeInit: function (e) {
              if ("fade" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "fade");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                A(e.params, t), A(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "fade" === e.params.effect && e.fadeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "fade" === e.params.effect && e.fadeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-cube",
          params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
          create: function () {
            S(this, { cubeEffect: De({}, $e) });
          },
          on: {
            beforeInit: function (e) {
              if ("cube" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                A(e.params, t), A(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "cube" === e.params.effect && e.cubeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "cube" === e.params.effect && e.cubeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            S(this, { flipEffect: Ne({}, ze) });
          },
          on: {
            beforeInit: function (e) {
              if ("flip" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                A(e.params, t), A(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "flip" === e.params.effect && e.flipEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "flip" === e.params.effect && e.flipEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
          create: function () {
            S(this, { coverflowEffect: Ie({}, je) });
          },
          on: {
            beforeInit: function (e) {
              "coverflow" === e.params.effect &&
                (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function (e) {
              "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
            },
          },
        },
        {
          name: "thumbs",
          params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
          create: function () {
            S(this, { thumbs: Be({ swiper: null, initialized: !1 }, He) });
          },
          on: {
            beforeInit: function (e) {
              var t = e.params.thumbs;
              t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
            },
            slideChange: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            update: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            resize: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            observerUpdate: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            setTransition: function (e, t) {
              var n = e.thumbs.swiper;
              n && n.setTransition(t);
            },
            beforeDestroy: function (e) {
              var t = e.thumbs.swiper;
              t && e.thumbs.swiperCreated && t && t.destroy();
            },
          },
        },
      ];
      te.use(Re);
    },
  },
]);

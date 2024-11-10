/*

# My Heritage
## Relationship Diagram

"Relationship of target F to you": "{target}'s relationship to you:",
"Relationship of target M to you": "{target}'s relationship to you:",
"Relationship of target F to source F": "{target}'s relationship to {source}:",
"Relationship of target M to source F": "{target}'s relationship to {source}:",
"Relationship of target F to source M": "{target}'s relationship to {source}:",
"Relationship of target M to source M": "{target}'s relationship to {source}:",
"Relationship of F to source F": "Her relationship to {source}:",
"Relationship of F to source M": "Her relationship to {source}:",
"Relationship of M to source F": "His relationship to {source}:",
"Relationship of M to source M": "His relationship to {source}:",
"Relationship not found to you": "%1 is not related to you",
"Relationship not found to source": "%1 is not related to %2",





# These scripts seem to hold the code for the relationship diagram

    <script src="https://cf.mhcache.com/Static/FP/Assets/bundles/JS/PerformanceReportingApiBundled_v857ad5ce5a51411a8dfcdd83ed3e8ab0.js" type="text/javascript"  crossorigin="anonymous"></script>
    <link href="https://cf.mhcache.com/Static/FP/Assets/bundles/CssOutput/RelationshipDiagram/RelationshipDiagram_ltr_v6723042c299cebb650e0e28e51c4c808.css" rel="stylesheet" type="text/css" crossorigin="anonymous">
    <script src="https://cf.mhcache.com/Static/FP/Assets/bundles/JS/RelationshipDiagramBundled_ve3096ce71c58f4053782a5e9e88e5a29.js" type="text/javascript"  crossorigin="anonymous"></script>
    <script >





    <script src="https://cf.mhcache.com/Static/FP/Assets/JS/Members/PKindividualsComboBox_ve44ac401062d1b548acd512198f03b2f.js" type="text/javascript"  crossorigin="anonymous"></script><script src="" type="text/javascript" ></script><script type="text/javascript" >
    FILTER_TAGSHOT_FAMILY_TREES = 1;
    INDIVIDUAL_LOOKUP_NOT_IN_TREE_TEXT = 'Not in family tree';

    window.relationshipDiagramViewer.showReportPage({
    "siteId": 682460661,
    "treeId": 1,
    "source": {
        "id": 1500001,
        "name": "Chris Luong",
        "gender": "M",
        "ageGroup": "A",
        "photo": "",
        "relationshipType": "you",
        "relationship": ""
    },
    "target": {
        "id": 1500314,
        "name": "Ben From The Future",
        "gender": "M",
        "ageGroup": "A",
        "photo": "",
        "relationshipType": "you",
        "relationship": ""
    },
    "fullDetails": false,
    "siteTrees": [
        {
            "id": 1,
            "title": "Luong Family Tree",
            "size": 219
        },
        {
            "id": 3,
            "title": "Tran Family",
            "size": 23
        }
    ]
});
</script>

*/

# 1st JS Script
# https://cf.mhcache.com/Static/FP/Assets/bundles/JS/PerformanceReportingApiBundled_v857ad5ce5a51411a8dfcdd83ed3e8ab0.js

! function() {
  var e = {};
  e.g = function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), e.p = "/Static/FP/Assets/bundles/JS/", e.p = window.AssetManager ? window.AssetManager.R_JS("/Static/FP/Assets/bundles/JS/") : "",
    function() {
      "use strict";

      function t() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        return null != r ? r : (t = null, "undefined" != typeof window && "Window" === window.constructor.name ? t = window : void 0 !== e.g && (t = e.g), t)
      }

      function r(e, r) {
        return function(e, r) {
          var n, o, i = t();
          return e && (null == i || null === (n = i.navigator) || void 0 === n || null === (o = n.sendBeacon) || void 0 === o ? void 0 : o.call(n, e, r))
        }(e, JSON.stringify(r))
      }

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function o(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != n(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, t || "default");
              if ("object" != n(o)) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" == n(t) ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var i = "error",
        u = "info",
        l = "warning",
        a = "debug",
        c = a,
        f = "message",
        s = "logLevel",
        y = "timestamp",
        p = "error",
        b = "eventType",
        v = "startTime",
        m = "duration",
        d = "timeSinceOrigin",
        g = o(o(o(o(o({}, a, 0), u, 1), l, 3), i, 4), "critical", 5),
        h = "message",
        w = "logObject",
        O = "timing",
        j = "error";

      function S(e) {
        return function(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = null,
            o = t().performance;
          if (o) {
            if (!r || ! function(e) {
                var t = P(e);
                return t && t.length > 0
              }(e)) o.mark(e), n = o.getEntriesByName(e)
          }
          return n
        }(e, !0)
      }

      function P(e) {
        var r = t().performance;
        return r ? r.getEntriesByName(e) : []
      }

      function E(e) {
        return "".concat(e, "-Start")
      }
      var T = "navigation";

      function _(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, i, u, l = [],
              a = !0,
              c = !1;
            try {
              if (i = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r) return;
                a = !1
              } else
                for (; !(a = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
            } catch (e) {
              c = !0, o = e
            } finally {
              try {
                if (!a && null != r.return && (u = r.return(), Object(u) !== u)) return
              } finally {
                if (c) throw o
              }
            }
            return l
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return L(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? L(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function I() {
        var e, r = t().performance;
        r && (e = _(r.getEntriesByType(T), 1)[0]);
        return e
      }

      function k(e) {
        return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, k(e)
      }

      function C(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, A(n.key), n)
        }
      }

      function A(e) {
        var t = function(e, t) {
          if ("object" != k(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == k(t) ? t : t + ""
      }

      function x(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var M = 0;

      function R(e) {
        return "__private_" + M++ + "_" + e
      }
      var N = R("minimumLogLevel"),
        B = function() {
          return e = function e(t) {
            var r;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperty(this, N, {
              writable: !0,
              value: void 0
            }), x(this, N)[N] = null !== (r = g[t]) && void 0 !== r ? r : g[c]
          }, (t = [{
            key: "logMessage",
            value: function(e) {
              this.isAcceptedLogLevel(e) && this.logMessageImpl(e)
            }
          }, {
            key: "logMessageImpl",
            value: function(e) {}
          }, {
            key: "logObject",
            value: function(e) {
              this.isAcceptedLogLevel(e) && this.logObjectImpl(e)
            }
          }, {
            key: "logObjectImpl",
            value: function(e) {}
          }, {
            key: "logTiming",
            value: function(e) {
              this.isAcceptedLogLevel(e) && this.logTimingImpl(e)
            }
          }, {
            key: "logTimingImpl",
            value: function(e) {}
          }, {
            key: "logError",
            value: function(e) {
              this.isAcceptedLogLevel(e) && this.logErrorImpl(e)
            }
          }, {
            key: "logErrorImpl",
            value: function(e) {}
          }, {
            key: "isAcceptedLogLevel",
            value: function(e) {
              var t = e[s];
              return g[t] >= x(this, N)[N]
            }
          }]) && C(e.prototype, t), r && C(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
          var e, t, r
        }();

      function F() {
        var e = t();
        return e && e.performance && e.performance.now ? e.performance.now() : 0
      }

      function D(e) {
        return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, D(e)
      }

      function q(e, t, r) {
        return (t = J(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function U(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, J(n.key), n)
        }
      }

      function J(e) {
        var t = function(e, t) {
          if ("object" != D(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != D(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == D(t) ? t : t + ""
      }

      function V(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var H = 0;

      function $(e) {
        return "__private_" + H++ + "_" + e
      }
      var W = $("startTimingsMap"),
        K = function() {
          return e = function e() {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperty(this, W, {
              writable: !0,
              value: {}
            })
          }, t = [{
            key: "getTimingLogObject",
            value: function(e, t) {
              var r, n, o, i, u, l;
              t = null !== (r = t) && void 0 !== r ? r : {};
              var a = Date.now(),
                c = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {},
                      n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach((function(t) {
                      q(e, t, r[t])
                    }))
                  }
                  return e
                }({}, t),
                f = null !== (n = null !== (o = null !== (i = c[v]) && void 0 !== i ? i : V(this, W)[W][e]) && void 0 !== o ? o : c[y]) && void 0 !== n ? n : a,
                s = null !== (u = null !== (l = c.endTime) && void 0 !== l ? l : t[y]) && void 0 !== u ? u : a;
              return f === s || c[m] || (c[v] = f, c[m] = s - f), c[d] || (c[d] = F()), c[y] || (c[y] = f), V(this, W)[W][e] = f, c
            }
          }], t && U(e.prototype, t), r && U(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
          var e, t, r
        }();

      function Q(e) {
        return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Q(e)
      }
      var X = ["error"];

      function z(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != Q(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != Q(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" == Q(t) ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function G(e) {
        var t = e.error,
          r = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (t.indexOf(n) >= 0) continue;
                  r[n] = e[n]
                } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, X);
        return t ? function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? Object(arguments[t]) : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach((function(t) {
              z(e, t, r[t])
            }))
          }
          return e
        }({}, r, z(z({}, "errorMessage", t.message), "errorStack", t.stack)) : r
      }

      function Y(e) {
        return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Y(e)
      }
      var Z = ["includeContext"];

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? Object(arguments[t]) : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach((function(t) {
            te(e, t, r[t])
          }))
        }
        return e
      }

      function te(e, t, r) {
        return (t = ne(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ne(n.key), n)
        }
      }

      function ne(e) {
        var t = function(e, t) {
          if ("object" != Y(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Y(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == Y(t) ? t : t + ""
      }

      function oe(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var ie = 0;

      function ue(e) {
        return "__private_" + ie++ + "_" + e
      }
      var le = ue("loggingAgents"),
        ae = ue("maxLogLimit"),
        ce = ue("logCount"),
        fe = ue("contextIdentifiers"),
        se = ue("logTimingMeasurements"),
        ye = ue("setLogObjectDefaults"),
        pe = ue("addContextToLogObject"),
        be = ue("isLogRelevant"),
        ve = ue("isValidMessage"),
        me = ue("isValidLogObject"),
        de = ue("isValidTimingKey"),
        ge = ue("isValidError"),
        he = function() {
          return e = function e(t, r) {
            var n, o = this,
              u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperty(this, le, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, ae, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, ce, {
              writable: !0,
              value: 0
            }), Object.defineProperty(this, fe, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, se, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(this, ye, {
              writable: !0,
              value: function(e, t) {
                return ee({}, te(te(te({}, y, Date.now()), d, F()), s, c), t, e)
              }
            }), Object.defineProperty(this, pe, {
              writable: !0,
              value: function(e) {
                var t = e.includeContext,
                  r = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = function(e, t) {
                      if (null == e) return {};
                      var r = {};
                      for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                          if (t.indexOf(n) >= 0) continue;
                          r[n] = e[n]
                        } return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                  }(e, Z);
                return !0 === t ? ee({}, oe(o, fe)[fe], r) : r
              }
            }), Object.defineProperty(this, be, {
              writable: !0,
              value: function(e) {
                return oe(o, ce)[ce]++ < oe(o, ae)[ae] || e[s] === i
              }
            }), Object.defineProperty(this, ve, {
              writable: !0,
              value: function(e) {
                return e && isNaN(e)
              }
            }), Object.defineProperty(this, me, {
              writable: !0,
              value: function(e) {
                return e && Object.keys(e).length
              }
            }), Object.defineProperty(this, de, {
              writable: !0,
              value: function(e) {
                return oe(o, ve)[ve](e)
              }
            }), Object.defineProperty(this, ge, {
              writable: !0,
              value: function(e, t, r) {
                return t || oe(o, ve)[ve](e) || oe(o, me)[me](r)
              }
            }), oe(this, se)[se] = new K, oe(this, le)[le] = t, oe(this, fe)[fe] = u, oe(this, ae)[ae] = null !== (n = null == r ? void 0 : r.maxLogLimit) && void 0 !== n ? n : 10
          }, t = [{
            key: "logMessage",
            value: function(e) {
              var t = this,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (oe(this, ve)[ve](e)) {
                var o = oe(this, ye)[ye](te(te(te(te({}, f, e), s, r), "includeContext", n), b, h));
                oe(this, be)[be](o) && oe(this, le)[le].forEach((function(e) {
                  return e.logMessage(oe(t, pe)[pe](o))
                }))
              }
            }
          }, {
            key: "logObject",
            value: function(e) {
              var t = this;
              if (oe(this, me)[me](e)) {
                var r = G(oe(this, ye)[ye](e, te({}, b, w)));
                oe(this, be)[be](r) && oe(this, le)[le].forEach((function(e) {
                  return e.logObject(oe(t, pe)[pe](r))
                }))
              }
            }
          }, {
            key: "logTiming",
            value: function(e) {
              var t = this,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (oe(this, de)[de](e)) {
                var n = te(te({}, b, O), f, e);
                r = G(oe(this, se)[se].getTimingLogObject(e, oe(this, ye)[ye](r, n))), oe(this, be)[be](r) && oe(this, le)[le].forEach((function(e) {
                  return e.logTiming(oe(t, pe)[pe](r))
                }))
              }
            }
          }, {
            key: "logError",
            value: function(e, t, r) {
              var n = this;
              if (oe(this, ge)[ge](e, t, r)) {
                var o = te(te({}, b, j), s, i);
                t && (o[p] = t), e && (o[f] = e), r = oe(this, ye)[ye](o, r), oe(this, be)[be](r) && oe(this, le)[le].forEach((function(e) {
                  return e.logError(oe(n, pe)[pe](r))
                }))
              }
            }
          }], t && re(e.prototype, t), r && re(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
          var e, t, r
        }();

      function we(e) {
        return we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, we(e)
      }
      var Oe = ["message", "logLevel"];

      function je(e, t, r) {
        return (t = Pe(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Se(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Pe(n.key), n)
        }
      }

      function Pe(e) {
        var t = function(e, t) {
          if ("object" != we(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != we(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == we(t) ? t : t + ""
      }

      function Ee(e, t, r) {
        return t = _e(t),
          function(e, t) {
            if (t && ("object" == we(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, Te() ? Reflect.construct(t, r || [], _e(e).constructor) : t.apply(e, r))
      }

      function Te() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Te = function() {
          return !!e
        })()
      }

      function _e(e) {
        return _e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, _e(e)
      }

      function Le(e, t) {
        return Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Le(e, t)
      }

      function Ie(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var ke = 0;

      function Ce(e) {
        return "__private_" + ke++ + "_" + e
      }
      var Ae = Ce("logFunctions"),
        xe = Ce("defaultLogFunction"),
        Me = Ce("performanceMeasure"),
        Re = function(e) {
          function r(e) {
            var n, o, c;
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), c = Ee(this, r), Object.defineProperty(c, Ae, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(c, xe, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(c, Me, {
              writable: !0,
              value: void 0
            }), c.logObjectImpl = c.logMessageImpl, c.logErrorImpl = c.logMessageImpl, Ie(c, Ae)[Ae] = je(je(je(je({}, a, e.debug), u, e.info), l, e.warn), i, e.error), Ie(c, xe)[xe] = e.log, Ie(c, Me)[Me] = null === (n = t()) || void 0 === n || null === (o = n.performance) || void 0 === o ? void 0 : o.measure, c
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && Le(e, t)
          }(r, e), n = r, o = [{
            key: "logMessageImpl",
            value: function(e) {
              var t, r = e.message,
                n = e.logLevel,
                o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (t.indexOf(n) >= 0) continue;
                        r[n] = e[n]
                      } return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(e, Oe);
              (null !== (t = Ie(this, Ae)[Ae][n]) && void 0 !== t ? t : Ie(this, xe)[xe])(r, o)
            }
          }, {
            key: "logTimingImpl",
            value: function(e) {
              if (Ie(this, Me)[Me]) {
                var t, r, n = e.name,
                  o = e.message,
                  i = e.startTime,
                  u = e.timestamp,
                  l = e.endTime,
                  a = null !== (t = null != i ? i : u) && void 0 !== t ? t : l,
                  c = null != l ? l : u;
                c && a !== c && (r = c);
                var f = null != n ? n : o;
                Ie(this, Me)[Me](f, a, r)
              }
              this.logMessageImpl(e)
            }
          }, {
            key: "isAcceptedLogLevel",
            value: function() {
              return !0
            }
          }], o && Se(n.prototype, o), c && Se(n, c), Object.defineProperty(n, "prototype", {
            writable: !1
          }), n;
          var n, o, c
        }(B);

      function Ne(e) {
        return Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Ne(e)
      }

      function Be(e) {
        return function(e) {
          if (Array.isArray(e)) return Fe(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Fe(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Fe(e, t) : void 0
          }
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Fe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function De(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qe(n.key), n)
        }
      }

      function qe(e) {
        var t = function(e, t) {
          if ("object" != Ne(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ne(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == Ne(t) ? t : t + ""
      }

      function Ue(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var Je = 0;

      function Ve(e) {
        return "__private_" + Je++ + "_" + e
      }
      var He = Ve("buffer"),
        $e = Ve("dontFlushBefore"),
        We = Ve("timerId"),
        Ke = Ve("flushIterationCount"),
        Qe = Ve("updateForFlush"),
        Xe = Ve("flushAfterQuiteTime"),
        ze = function() {
          return e = function e(t) {
            var r = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = n.bufferingTime,
              i = void 0 === o ? 3e3 : o,
              u = n.maxItems,
              l = void 0 === u ? 0 : u,
              a = n.quiteTimeBeforeSend,
              c = void 0 === a ? 0 : a;
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object.defineProperty(this, He, {
              writable: !0,
              value: []
            }), Object.defineProperty(this, $e, {
              writable: !0,
              value: null
            }), Object.defineProperty(this, We, {
              writable: !0,
              value: null
            }), Object.defineProperty(this, Ke, {
              writable: !0,
              value: 0
            }), this.flush = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "explicit";
              Ue(r, We)[We] && clearTimeout(Ue(r, We)[We]), Ue(r, We)[We] = null, Ue(r, He)[He].length && r.flushCallback(Be(Ue(r, He)[He]), e, ++Ue(r, Ke)[Ke]), Ue(r, He)[He].length = 0
            }, Object.defineProperty(this, Qe, {
              writable: !0,
              value: function() {
                r.quiteTimeBeforeSend && (Ue(r, $e)[$e] = Date.now() + r.quiteTimeBeforeSend), r.maxItems && Ue(r, He)[He].length >= r.maxItems ? r.flush("maxItems") : Ue(r, We)[We] || !r.quiteTimeBeforeSend && !r.bufferingTime || (Ue(r, We)[We] = setTimeout(Ue(r, Xe)[Xe], r.quiteTimeBeforeSend || r.bufferingTime))
              }
            }), Object.defineProperty(this, Xe, {
              writable: !0,
              value: function() {
                var e = Date.now();
                Ue(r, $e)[$e] && Ue(r, $e)[$e] > e ? Ue(r, We)[We] = setTimeout(Ue(r, Xe)[Xe], Ue(r, $e)[$e] - e) : r.flush(r.quiteTimeBeforeSend ? "timeWithoutActivity" : "timer")
              }
            }), this.flushCallback = t, this.bufferingTime = i, this.maxItems = l, this.quiteTimeBeforeSend = c, Ue(this, Ke)[Ke] = 0, this.registerShutdownListener()
          }, (t = [{
            key: "add",
            value: function(e) {
              Ue(this, He)[He].push(e), Ue(this, Qe)[Qe]()
            }
          }, {
            key: "addMultiple",
            value: function(e) {
              var t;
              (t = Ue(this, He)[He]).push.apply(t, Be(e)), Ue(this, Qe)[Qe]()
            }
          }, {
            key: "registerShutdownListener",
            value: function() {}
          }]) && De(e.prototype, t), r && De(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
          var e, t, r
        }();

      function Ge(e) {
        return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Ge(e)
      }

      function Ye(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ze(n.key), n)
        }
      }

      function Ze(e) {
        var t = function(e, t) {
          if ("object" != Ge(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != Ge(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == Ge(t) ? t : t + ""
      }
      var et = function() {
        return e = function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.container = []
        }, (t = [{
          key: "addEvent",
          value: function(e, t, r) {
            var n = this;
            if (e && e.addEventListener && t && "function" == typeof r) return this.performPushAndAdd(e, t, r),
              function() {
                n.removeEvent(e, t, r)
              }
          }
        }, {
          key: "removeEvent",
          value: function(e, t, r) {
            e && e.removeEventListener && t && "function" == typeof r && (e.removeEventListener(t, r), this.container = this.container.filter((function(n) {
              return n.element !== e && n.eventName !== t && n.eventFn !== r
            })))
          }
        }, {
          key: "addMultipleEvents",
          value: function(e, t, r) {
            if (e && e.addEventListener && t && "function" == typeof r)
              for (var n = 0, o = t.length; n < o; n++) {
                var i = t[n];
                this.performPushAndAdd(e, i, r)
              }
          }
        }, {
          key: "performPushAndAdd",
          value: function(e, t, r) {
            this.container.push({
              element: e,
              eventName: t,
              eventFn: r
            }), e.addEventListener(t, r)
          }
        }, {
          key: "destroy",
          value: function() {
            for (var e = 0, t = this.container.length; e < t; e++) this.container[e].element.removeEventListener(this.container[e].eventName, this.container[e].eventFn);
            this.container = []
          }
        }]) && Ye(e.prototype, t), r && Ye(e, r), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
        var e, t, r
      }();

      function tt(e) {
        return tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, tt(e)
      }

      function rt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nt(n.key), n)
        }
      }

      function nt(e) {
        var t = function(e, t) {
          if ("object" != tt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != tt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == tt(t) ? t : t + ""
      }

      function ot(e, t, r) {
        return t = ut(t),
          function(e, t) {
            if (t && ("object" == tt(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, it() ? Reflect.construct(t, r || [], ut(e).constructor) : t.apply(e, r))
      }

      function it() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (it = function() {
          return !!e
        })()
      }

      function ut(e) {
        return ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ut(e)
      }

      function lt(e, t) {
        return lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, lt(e, t)
      }
      var at = function(e) {
          function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), ot(this, r, [e, t])
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && lt(e, t)
          }(r, e), n = r, (o = [{
            key: "registerShutdownListener",
            value: function() {
              var e = this;
              (new et).addEvent(t(), "beforeunload", (function() {
                return e.flush("unload")
              }))
            }
          }]) && rt(n.prototype, o), i && rt(n, i), Object.defineProperty(n, "prototype", {
            writable: !1
          }), n;
          var n, o, i
        }(ze),
        ct = {
          "<": "&lt;",
          ">": "&gt;"
        },
        ft = /[<>]/g;

      function st(e) {
        return ct[e]
      }

      function yt(e) {
        return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, yt(e)
      }

      function pt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bt(n.key), n)
        }
      }

      function bt(e) {
        var t = function(e, t) {
          if ("object" != yt(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != yt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == yt(t) ? t : t + ""
      }

      function vt(e, t, r) {
        return t = dt(t),
          function(e, t) {
            if (t && ("object" == yt(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, mt() ? Reflect.construct(t, r || [], dt(e).constructor) : t.apply(e, r))
      }

      function mt() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (mt = function() {
          return !!e
        })()
      }

      function dt(e) {
        return dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, dt(e)
      }

      function gt(e, t) {
        return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, gt(e, t)
      }

      function ht(e, t) {
        if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e
      }
      var wt = 0;

      function Ot(e) {
        return "__private_" + wt++ + "_" + e
      }
      var jt = Ot("reportURL"),
        St = Ot("browserBufferingAggregator"),
        Pt = Ot("onBufferFlush"),
        Et = function(e) {
          function t(e, r) {
            var n, o = r.reportURL,
              i = r.bufferingTime,
              u = r.maxBufferItems;
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = vt(this, t, [e]), Object.defineProperty(n, jt, {
              writable: !0,
              value: void 0
            }), Object.defineProperty(n, St, {
              writable: !0,
              value: void 0
            }), n.logObjectImpl = n.logMessageImpl, n.logTimingImpl = n.logMessageImpl, n.logErrorImpl = function(e) {
              return n.logMessageImpl(G(e))
            }, Object.defineProperty(n, Pt, {
              writable: !0,
              value: function(e, t, r) {
                var o, i = new XMLHttpRequest;
                i.open("POST", ht(n, jt)[jt]), i.setRequestHeader("Content-Type", "application/json"), i.send((o = JSON.stringify({
                  logs: e,
                  flushReason: null != t ? t : "No JS flush reason",
                  flushIterationCount: r
                })) && "string" == typeof o ? o.replace(ft, st) : o)
              }
            }), ht(n, jt)[jt] = o, ht(n, St)[St] = new at(ht(n, Pt)[Pt], i, u), n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && gt(e, t)
          }(t, e), r = t, (n = [{
            key: "logMessageImpl",
            value: function(e) {
              ht(this, St)[St].add(e)
            }
          }]) && pt(r.prototype, n), o && pt(r, o), Object.defineProperty(r, "prototype", {
            writable: !1
          }), r;
          var r, n, o
        }(B);
      var Tt = ["exposed"];

      function _t(e) {
        return _t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, _t(e)
      }

      function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? Object(arguments[t]) : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach((function(t) {
            It(e, t, r[t])
          }))
        }
        return e
      }

      function It(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != _t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != _t(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" == _t(t) ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function kt() {
        var e, r, n, o, i, u, l, a = t();
        if (a && !a.clientLogger) {
          var c = a.clientLoggerConfiguration || {};
          a.clientLogger = (e = Lt({}, c, {
            consoleLoggerConfig: Ct(c),
            endpointLoggerConfig: At(c)
          }), r = e.maxLogLimit, n = e.minimumLogLevel, o = e.contextIdentifiers, i = e.consoleLoggerConfig, u = e.endpointLoggerConfig, l = [], i && l.push(new Re(i.console)), u && l.push(new Et(n, u)), new he(l, {
            minimumLogLevel: n,
            maxLogLimit: r
          }, o))
        }
        return null == a ? void 0 : a.clientLogger
      }

      function Ct(e) {
        var r, n, o = null === (r = t()) || void 0 === r ? void 0 : r.console;
        return null != e && null !== (n = e.consoleLoggerConfig) && void 0 !== n && n.exposed && o ? {
          console: o
        } : void 0
      }
      var At = function(e) {
        var t = (null == e ? void 0 : e.endpointLoggerConfig) || {},
          r = t.exposed,
          n = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (t.indexOf(n) >= 0) continue;
                  r[n] = e[n]
                } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(t, Tt);
        return r ? Lt({
          reportURL: "/FP/API/ClientLog/client-log.php"
        }, n) : void 0
      };

      function xt() {
        return t().performanceReportingConfig.isPerformanceReportingExposed
      }

      function Mt(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
          n = t().DD_RUM;
        n && n.addTiming(e, r)
      }

      function Rt(e) {
        return Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Rt(e)
      }

      function Nt(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != Rt(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != Rt(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(e, "string");
          return "symbol" == Rt(t) ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Bt(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, o, i, u, l = [],
              a = !0,
              c = !1;
            try {
              if (i = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r) return;
                a = !1
              } else
                for (; !(a = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
            } catch (e) {
              c = !0, o = e
            } finally {
              try {
                if (!a && null != r.return && (u = r.return(), Object(u) !== u)) return
              } finally {
                if (c) throw o
              }
            }
            return l
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" == typeof e) return Ft(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ft(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Ft(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      var Dt = "SinglePageApplicationRouteChange",
        qt = "CriticalContentLoaded",
        Ut = "CriticalServerCall",
        Jt = "/FP/API/Performance/report-timing-event.php";

      function Vt(e, r) {
        var n = t(),
          o = n.mhRequestId,
          i = n.currentPageCanonicalId;
        return {
          event_name: e,
          timing_in_ms: Math.round(r),
          canonical: i,
          reported_request_id: o
        }
      }

      function Ht(e) {
        return "MH-".concat(e)
      }
      var $t = t();
      $t.reportCriticalContentLoaded = function() {
        var e = null,
          n = t(),
          o = Jt;
        null != n && n.REPORT_PERFORMANCE_EVENT_HOST && (o = new URL(Jt, n.REPORT_PERFORMANCE_EVENT_HOST).toString());
        try {
          Mt("critical_content_loaded"), e = Bt(S(Ht(qt)), 1)[0];
          var i = P(Dt);
          if (e && 0 === Object.keys(i).length) {
            var u = [Vt(qt, e.startTime)],
              a = function() {
                var e = null,
                  r = t().performance;
                if (r && (e = function() {
                    var e = t().performance,
                      r = null,
                      n = I();
                    if (n) r = n.responseStart;
                    else if (null != e && e.timing) {
                      var o = e.timing.responseStart - e.timing.navigationStart;
                      r = null != o ? o : null
                    }
                    return r && r < 0 ? null : r
                  }(), e)) {
                  var n = Bt(r.getEntriesByName(Ht(Ut)), 1)[0];
                  n && (e += n.duration)
                }
                return e
              }();
            if (a) {
              var c = Vt("CriticalServerLatency", a);
              u.push(c), Mt("backend_speed_index", a)
            }
            xt() && r(o, u)
          }
        } catch (e) {
          kt().logObject(Nt(Nt(Nt({}, f, "Failed to report percieived speed index"), p, e), s, l))
        }
        return e
      }, $t.reportCriticalServerCallStarted = function() {
        var e = null;
        try {
          e = S(E(Ht(Ut)))
        } catch (e) {
          kt().logObject(Nt(Nt(Nt({}, f, "Failed to mark CriticalServerCallStarted"), p, e), s, l))
        }
        return e
      }, $t.reportCriticalServerCallEnded = function() {
        var e, r, n, o, i, u = null;
        try {
          e = Ht(Ut), n = t().performance, o = E(e), i = function(e) {
            return "".concat(e, "-End")
          }(e), n && (S(i), r = n.measure(e, o, i)), u = r
        } catch (e) {
          kt().logObject(Nt(Nt(Nt({}, f, "Failed to mark CriticalServerCallEnded"), p, e), s, l))
        }
        return u
      }
    }()
}();
//# sourceMappingURL=https://www.myheritage.com/FP/Assets/bundles/JS/sourcemaps/PerformanceReportingApi-e96cd9e43f1f3cd926c30dd3e7cd80f4.js.map



"""

# These scripts seem to hold the code for the relationship diagram

    <script src="https://cf.mhcache.com/Static/FP/Assets/bundles/JS/PerformanceReportingApiBundled_v857ad5ce5a51411a8dfcdd83ed3e8ab0.js" type="text/javascript"  crossorigin="anonymous"></script>
    <link href="https://cf.mhcache.com/Static/FP/Assets/bundles/CssOutput/RelationshipDiagram/RelationshipDiagram_ltr_v6723042c299cebb650e0e28e51c4c808.css" rel="stylesheet" type="text/css" crossorigin="anonymous">
    <script src="https://cf.mhcache.com/Static/FP/Assets/bundles/JS/RelationshipDiagramBundled_ve3096ce71c58f4053782a5e9e88e5a29.js" type="text/javascript"  crossorigin="anonymous"></script>
    <script >

"""
# 2nd JS Script
# https://cf.mhcache.com/Static/FP/Assets/bundles/JS/RelationshipDiagramBundled_ve3096ce71c58f4053782a5e9e88e5a29.js

! function() {
  var e = {
    n: function(t) {
      var i = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(i, {
        a: i
      }), i
    },
    d: function(t, i) {
      for (var n in i) e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: i[n]
      })
    }
  };
  e.g = function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), e.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, e.p = "/Static/FP/Assets/bundles/JS/", e.p = window.AssetManager ? window.AssetManager.R_JS("/Static/FP/Assets/bundles/JS/") : "",
    function() {
      "use strict";
      var t = axios,
        i = e.n(t);

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function r(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
        }
      }

      function a(e) {
        var t = function(e, t) {
          if ("object" != n(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != n(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == n(t) ? t : t + ""
      }
      var o = function() {
        return e = function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.viewer = t
        }, (t = [{
          key: "getViewer",
          value: function() {
            return this.viewer
          }
        }, {
          key: "isRTL",
          value: function() {
            return "right" === displayLanguageDirection
          }
        }, {
          key: "isPhone",
          value: function() {
            return this.viewer.isPhone()
          }
        }, {
          key: "translate",
          value: function(e, t) {
            return this.getViewer().translate(e, t)
          }
        }, {
          key: "createStyle",
          value: function(e, t, i, n) {
            var r = ["left:".concat(e, "px"), "top:".concat(t, "px")];
            return i && r.push("width:".concat(i, "px")), n && r.push("height:".concat(n, "px")), r.join(";")
          }
        }]) && r(e.prototype, t), i && r(e, i), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
        var e, t, i
      }();

      function s(e) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s(e)
      }

      function l(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n)
        }
      }

      function u(e) {
        var t = function(e, t) {
          if ("object" != s(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != s(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == s(t) ? t : t + ""
      }

      function d(e, t, i) {
        return t = h(t),
          function(e, t) {
            if (t && ("object" == s(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, c() ? Reflect.construct(t, i || [], h(e).constructor) : t.apply(e, i))
      }

      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (c = function() {
          return !!e
        })()
      }

      function h(e) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, h(e)
      }

      function v(e, t) {
        return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, v(e, t)
      }
      var f = function(e) {
        function t(e) {
          var i;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (i = d(this, t, [e])).id = "", i.path = "", i.familyTreeLink = "", i.profileLink = "", i.researchLink = "", i.person = {}, i.isSource = !1, i.isTarget = !1, i._element = null, i.top = 0, i.left = 0, i.bottom = 0, i.right = 0, i
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
          }), t && v(e, t)
        }(t, e), i = t, (n = [{
          key: "setData",
          value: function(e) {
            this.id = e.id, this.path = e.path, this.familyTreeLink = e.familyTreeLink, this.profileLink = e.profileLink, this.researchLink = e.researchLink, this.left = e.left, this.top = e.top, this.width = e.width, this.height = e.height, this.person = e.person
          }
        }, {
          key: "getElement",
          value: function() {
            return this._element || (this._element = document.querySelector(".card_" + this.id)), this._element
          }
        }, {
          key: "getChildElement",
          value: function(e) {
            var t = this.getElement();
            return t ? t.querySelector(e) : null
          }
        }, {
          key: "getActionsMenuElement",
          value: function() {
            return this.getChildElement(".relationship_diagram_actions_menu")
          }
        }, {
          key: "getMenuActionsButtonElement",
          value: function() {
            return this.getChildElement(".relationship_diagram_actions_button")
          }
        }, {
          key: "isPhone",
          value: function() {
            return isMobile && !isTablet
          }
        }, {
          key: "render",
          value: function() {
            var e = this.person,
              t = this.viewer.getPersonsDisplayNameAndFontSize(e, this.width - 22, 30),
              i = this.viewer.renderPersonalPhoto(e),
              n = "relationship_diagram_card style_" + this.getViewer().getCardStyle() + " card_" + this.id + " gender_" + e.gender;
            return this.isSource ? n += " source" : this.isTarget && (n += " target"), '<div class="' + n + '" style="left:' + this.left + "px;top:" + this.top + "px;width:" + this.width + "px;height:" + this.height + 'px"><div class="relationship_diagram_card_inner">' + this.renderActions() + '<div class="relationship_diagram_image">' + i + '</div><div class="relationship_diagram_details"><div class="relationship_diagram_name ' + t.className + '">' + t.name + "</div>" + this.renderBirthAndDeath(e) + "</div></div></div>"
          }
        }, {
          key: "renderBirthAndDeath",
          value: function(e) {
            return this.getViewer().isLargeCardStyle() ? this.renderFullBirthAndDeathInfo(e) : '<div class="relationship_diagram_years">' + e.yearsRange + "</div>"
          }
        }, {
          key: "renderFullBirthAndDeathInfo",
          value: function(e) {
            var t = "";
            return (e.birthDate || e.birthPlace) && (t += '<div class="relationship_diagram_birth"><div class="relationship_diagram_date">' + this.formatDate(e.birthDate, this.translate("Born", e.gender)) + "</div>" + (e.birthPlace ? '<div class="relationship_diagram_place">' + e.birthPlace + "</div>" : "") + "</div>"), (e.deathDate || e.deathPlace) && (t += '<div class="relationship_diagram_death"><div class="relationship_diagram_date">' + this.formatDate(e.deathDate, this.translate("Died", e.gender)) + "</div>" + (e.deathPlace ? '<div class="relationship_diagram_place">' + e.deathPlace + "</div>" : "") + "</div>"), t
          }
        }, {
          key: "formatDate",
          value: function(e, t) {
            return e ? t + " " + e : (":" === t.substr(t.length - 1) && (t = t.substr(t.length - 1)), t)
          }
        }, {
          key: "renderActions",
          value: function() {
            return this.isPhone() ? "" : '<div class="relationship_diagram_actions"><div class="relationship_diagram_actions_button"></div>' + this.renderActionMenu() + "</div>"
          }
        }, {
          key: "renderActionMenu",
          value: function() {
            return '<div class="relationship_diagram_actions_menu"><div class="relationship_diagram_actions_menu_item action_view_in_tree">' + this.viewer.translate("View in tree", this.person.gender) + "</div>" + (this.isPhone() ? "" : '<div class="relationship_diagram_actions_menu_item action_view_profile">' + this.viewer.translate("View profile") + "</div>") + '<div class="relationship_diagram_actions_menu_item action_search_records">' + this.viewer.translate("Research this person") + "</div></div>"
          }
        }, {
          key: "events",
          value: function() {
            var e = this,
              t = this.getElement();
            if (t) {
              var i = this.getActionsMenuElement();
              if (this.isPhone()) t.onclick = function() {
                e.viewer.showFooter(e)
              };
              else {
                var n = this.getMenuActionsButtonElement();
                n && i && (n.onclick = function() {
                  if (i.classList.toggle("open"), i.classList.contains("open")) {
                    var t = e.viewer.isRTL();
                    t ? i.style.right = 0 : i.style.left = 0;
                    var n = i.getBoundingClientRect(),
                      r = e.viewer.getWindowElement().getBoundingClientRect();
                    t && n.left - r.left - 1 < 0 ? i.style.right = n.left - r.left - 1 + "px" : !t && r.right - n.right - 1 < 0 && (i.style.left = r.right - n.right - 1 + "px")
                  }
                })
              }
              i && this.menuActionEvents(i), document.body.addEventListener("click", (function(t) {
                e.closeMenuOnOutsideClick(t)
              }))
            }
          }
        }, {
          key: "menuActionEvents",
          value: function(e) {
            var t, i = this;
            (t = e.querySelector(".action_view_in_tree")) && (t.onclick = function() {
              e.classList.remove("open"), i.goToPage(i.familyTreeLink)
            }), (t = e.querySelector(".action_view_profile")) && (t.onclick = function() {
              e.classList.remove("open"), i.goToPage(i.profileLink)
            }), (t = e.querySelector(".action_search_records")) && (t.onclick = function() {
              e.classList.remove("open"), i.goToPage(i.researchLink)
            })
          }
        }, {
          key: "goToPage",
          value: function(e) {
            isMobile ? location.href = e : window.open(e)
          }
        }, {
          key: "closeMenuOnOutsideClick",
          value: function(e) {
            var t = this.getActionsMenuElement();
            t && t.classList.contains("open") && (this.isEventInElement(e, t) || this.isEventInElement(e, this.getMenuActionsButtonElement()) || t.classList.remove("open"))
          }
        }, {
          key: "isEventInElement",
          value: function(e, t) {
            if (!t) return !1;
            var i = e.clientX,
              n = e.clientY,
              r = t.getBoundingClientRect();
            return r.left <= i && r.right >= i && r.top <= n && r.bottom >= n
          }
        }, {
          key: "renderPersonInFooter",
          value: function() {
            var e = this.person,
              t = e.names[0].n;
            return '<div class="relationship_diagram_person"><div class="relationship_diagram_image">' + this.viewer.renderPersonalPhoto(e) + '</div><div class="relationship_diagram_details"><div class="relationship_diagram_name">' + t + '</div><div class="relationship_diagram_years">' + e.yearsRange + "</div></div>" + this.renderActionMenu() + "</div>"
          }
        }, {
          key: "getLeft",
          value: function() {
            return this.left
          }
        }, {
          key: "getTop",
          value: function() {
            return this.top
          }
        }, {
          key: "getWidth",
          value: function() {
            return this.width
          }
        }, {
          key: "getHeight",
          value: function() {
            return this.height
          }
        }, {
          key: "getRight",
          value: function() {
            return this.left + this.width
          }
        }, {
          key: "getBottom",
          value: function() {
            return this.top + this.height
          }
        }, {
          key: "getCenter",
          value: function() {
            return this.left + this.width / 2
          }
        }, {
          key: "getMiddle",
          value: function() {
            return this.top + this.height / 2
          }
        }]) && l(i.prototype, n), r && l(i, r), Object.defineProperty(i, "prototype", {
          writable: !1
        }), i;
        var i, n, r
      }(o);

      function p(e) {
        return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, p(e)
      }

      function g(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _(n.key), n)
        }
      }

      function _(e) {
        var t = function(e, t) {
          if ("object" != p(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != p(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == p(t) ? t : t + ""
      }

      function m(e, t, i) {
        return t = w(t),
          function(e, t) {
            if (t && ("object" == p(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, y() ? Reflect.construct(t, i || [], w(e).constructor) : t.apply(e, i))
      }

      function y() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (y = function() {
          return !!e
        })()
      }

      function w(e) {
        return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, w(e)
      }

      function I(e, t) {
        return I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, I(e, t)
      }
      var b = function(e) {
        function t(e) {
          var i;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (i = m(this, t, [e])).sourceCard = null, i.targetCard = null, i.relaionship = "", i.type = "", i.direction = "", i.hasArrow = !1, i.arrowOffset = 3, i
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
          }), t && I(e, t)
        }(t, e), i = t, (n = [{
          key: "setData",
          value: function(e) {
            this.sourceCard = this.viewer.getCard(e.sourceId), this.targetCard = this.viewer.getCard(e.targetId), this.relaionship = e.relationship, this.type = e.type, this.direction = e.direction, this.hasArrow = e.hasArrow
          }
        }, {
          key: "getStartPoint",
          value: function() {
            var e, t;
            return "down" === this.direction ? (e = this.sourceCard.getCenter(), t = this.sourceCard.getBottom()) : "up" === this.direction ? (e = this.targetCard.getCenter(), t = this.targetCard.getBottom()) : "right" === this.direction ? (e = this.sourceCard.getRight(), t = this.sourceCard.getMiddle()) : (e = this.targetCard.getRight(), t = this.targetCard.getMiddle()), {
              x: e,
              y: t
            }
          }
        }, {
          key: "getEndPoint",
          value: function() {
            var e, t;
            return "down" === this.direction ? (e = this.targetCard.getCenter(), t = this.targetCard.getTop()) : "up" === this.direction ? (e = this.sourceCard.getCenter(), t = this.sourceCard.getTop()) : "right" === this.direction ? (e = this.targetCard.getLeft(), t = this.sourceCard.getMiddle()) : (e = this.sourceCard.getLeft(), t = this.sourceCard.getMiddle()), {
              x: e,
              y: t
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this.getStartPoint(),
              t = this.getEndPoint(),
              i = "relationship_diagram_connector",
              n = "",
              r = 0;
            if ("up" === this.direction) {
              if (i += " vertical", this.hasArrow) {
                var a = e.y + this.arrowOffset;
                r = t.y - a - 2, n += this.renderLine(e.x - 1, a + 2, 0, r), n += this.renderArrow(e.x, a, "up")
              } else a = e.y, r = t.y - a, n += this.renderLine(e.x - 1, a, 0, r);
              n += this.renderRelationship(this.targetCard.getLeft(), a, this.targetCard.getWidth(), r)
            } else "down" === this.direction ? (i += " vertical", this.hasArrow ? (r = t.y - e.y - 2 - this.arrowOffset, n += this.renderLine(e.x - 1, e.y, 0, r), n += this.renderArrow(t.x, t.y - this.arrowOffset, "down")) : (r = t.y - e.y, n += this.renderLine(e.x - 1, e.y, 0, r)), n += this.renderRelationship(this.sourceCard.getLeft(), e.y, this.sourceCard.getWidth(), r)) : "right" === this.direction ? (i += " horizontal", "primary" === this.type ? (this.hasArrow ? (n += this.renderLine(e.x, e.y - 1, t.x - e.x - this.arrowOffset, 0), n += this.renderArrow(t.x - this.arrowOffset, t.y, "right")) : n += this.renderLine(e.x, e.y - 1, t.x - e.x, 0), n += this.renderRelationship(e.x, this.sourceCard.getTop(), t.x - e.x, this.sourceCard.getHeight() / 2 - 2)) : n += this.renderRelationship(e.x, this.sourceCard.getTop(), t.x - e.x, this.sourceCard.getHeight())) : "left" === this.direction && (i += " horizontal", "primary" === this.type ? (this.hasArrow ? (n += this.renderLine(e.x + 2 + this.arrowOffset, e.y - 1, t.x - e.x - 2 - this.arrowOffset, 0), n += this.renderArrow(e.x + this.arrowOffset, e.y, "left")) : n += this.renderLine(e.x, e.y - 1, t.x - e.x, 0), n += this.renderRelationship(e.x, this.targetCard.getTop(), t.x - e.x, this.targetCard.getHeight() / 2 - 2)) : n += this.renderRelationship(e.x, this.targetCard.getTop(), t.x - e.x, this.targetCard.getHeight()));
            return '<div class="' + this.createClassName(i, this.type) + '">' + n + "</div>"
          }
        }, {
          key: "renderLine",
          value: function(e, t, i, n) {
            return '<div class="relationship_diagram_connector_line" style="' + this.createStyle(e, t, i, n) + '"></div>'
          }
        }, {
          key: "renderArrow",
          value: function(e, t, i) {
            return '<div class="' + this.createClassName("relationship_diagram_connector_arrow", i) + '" style="' + this.createStyle(e, t) + '"></div>'
          }
        }, {
          key: "renderRelationship",
          value: function(e, t, i, n) {
            return '<div class="' + this.createClassName("relationship_diagram_connector_relationship") + '" style="' + this.createStyle(e, t, i, n) + '"><div class="type">' + this.relaionship + "</div></div>"
          }
        }, {
          key: "createClassName",
          value: function(e, t) {
            var i = e;
            return t && (i += " " + t), i
          }
        }]) && g(i.prototype, n), r && g(i, r), Object.defineProperty(i, "prototype", {
          writable: !1
        }), i;
        var i, n, r
      }(o);

      function E(e) {
        return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, E(e)
      }

      function k(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S(n.key), n)
        }
      }

      function S(e) {
        var t = function(e, t) {
          if ("object" != E(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == E(t) ? t : t + ""
      }

      function T(e, t, i) {
        return t = C(t),
          function(e, t) {
            if (t && ("object" == E(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, P() ? Reflect.construct(t, i || [], C(e).constructor) : t.apply(e, i))
      }

      function P() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (P = function() {
          return !!e
        })()
      }

      function C(e) {
        return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, C(e)
      }

      function D(e, t) {
        return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, D(e, t)
      }
      var L = function(e) {
        function t(e) {
          var i;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (i = T(this, t, [e])).childrenCards = [], i.parent1Card = null, i.parent2Card = null, i
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
          }), t && D(e, t)
        }(t, e), i = t, (n = [{
          key: "setData",
          value: function(e) {
            for (var t = 0; t < e.childrenIds.length; t++) this.childrenCards.push(this.viewer.getCard(e.childrenIds[t]));
            this.parent1Card = this.viewer.getCard(e.parent1Id), this.parent2Card = this.viewer.getCard(e.parent2Id)
          }
        }, {
          key: "render",
          value: function() {
            var e, t, i, n, r = [];
            if (this.parent2Card ? (this.parent1Card.getRight() < this.parent2Card.getLeft() ? (e = this.parent1Card.getRight(), t = this.parent1Card.getMiddle(), i = this.parent2Card.getLeft(), n = this.parent2Card.getMiddle()) : (e = this.parent2Card.getRight(), t = this.parent2Card.getMiddle(), i = this.parent1Card.getLeft(), n = this.parent1Card.getMiddle()), r.push(this._renderLine("horizontal", e, t, i - e, 0)), e = (e + i) / 2, t = (t + n) / 2) : (e = this.parent1Card.getCenter(), t = this.parent1Card.getBottom()), this.childrenCards.length > 0) {
              var a = e,
                o = (this.parent1Card.getBottom() + this.childrenCards[0].getTop()) / 2;
              r.push(this._renderLine("vertical", e, t, 0, o - t)), e = this.childrenCards[0].getCenter(), t = o, i = a, n = this.childrenCards[0].getTop(), e > i ? r.push(this._renderLine("top_right_corner", i, t, e - i, n - t)) : r.push(this._renderLine("top_left_corner", e, t, i - e, n - t)), 2 === this.childrenCards.length && (e = a, t = o, i = this.childrenCards[1].getCenter(), n = this.childrenCards[1].getTop(), e > i ? r.push(this._renderLine("top_left_corner", i, t, e - i, n - t)) : r.push(this._renderLine("top_right_corner", e, t, i - e, n - t)))
            }
            return '<div class="relationship_diagram_parents_connector">' + r.join("") + "</div>"
          }
        }, {
          key: "_renderLine",
          value: function(e, t, i, n, r) {
            return '<div class="relationship_diagram_connector_line ' + e + '" style="' + this.createStyle(t, i, n, r) + '"></div>'
          }
        }]) && k(i.prototype, n), r && k(i, r), Object.defineProperty(i, "prototype", {
          writable: !1
        }), i;
        var i, n, r
      }(o);

      function R(e) {
        return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, R(e)
      }

      function O(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, M(n.key), n)
        }
      }

      function M(e) {
        var t = function(e, t) {
          if ("object" != R(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != R(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == R(t) ? t : t + ""
      }

      function A(e, t, i) {
        return t = H(t),
          function(e, t) {
            if (t && ("object" == R(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, j() ? Reflect.construct(t, i || [], H(e).constructor) : t.apply(e, i))
      }

      function j() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (j = function() {
          return !!e
        })()
      }

      function H(e) {
        return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, H(e)
      }

      function x(e, t) {
        return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, x(e, t)
      }
      window.FAMILY_TREE_ICON = '<div class="search_family_tree_icon"></div>';
      var B = function(e) {
        function t(e, i, n) {
          var r;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (r = A(this, t, [e]))._type = n, r._treeId = i, r._autoComplete = null, r._selectedIndividualId = 0, r
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
          }), t && x(e, t)
        }(t, e), i = t, (n = [{
          key: "getComponentId",
          value: function() {
            return "RelationshipDiagramFinder_".concat(this._type)
          }
        }, {
          key: "getComponentElement",
          value: function() {
            return document.getElementById(this.getComponentId())
          }
        }, {
          key: "getLabel",
          value: function() {
            var e = this._type === this.viewer.TYPE_SOURCE ? "1" : "2";
            return this.translate("Person label").replace("{number}", e)
          }
        }, {
          key: "init",
          value: function() {
            var e = this,
              t = new AutoComplete(this.getViewer().getSiteId(), this.getComponentId(), null, ".relationship_diagram_".concat(this._type, " .relationship_diagram_finder"));
            t.familyTreeID = this._treeId ? this._treeId : null, t.clearOnSelect = !0, t.blurOnEnter = !0, t.smallSpinner = !0, t.LANG = this.getViewer().getLang(), t.shouldFilterTagshotIndividuals = !0, t.searchingText = this.translate("Finder Searching"), t.noResultsFoundText = this.translate("Finder No results found"), t.BAD_REQUEST_MESSAGE = this.translate("Finder IndividualLookupErrorBadRequestMessage"), t.DATABASE_ERROR_MESSAGE = this.translate("Finder IndividualLookupErrorDatabaseErrorMessage"), t.TOO_MANY_INDIVIDUALS_MESSAGE = this.translate("Finder SearchErrorTooManyIndividualsMobile"), t.GENERAL_ERROR_MESSAGE = this.translate("Finder ErrorOccurred"), t.thumbnailType = 4, t.MALE_SILHOUETTE = "svg_silhouette svg_silhouette_M_A", t.FEMALE_SILHOUETTE = "svg_silhouette svg_silhouette_F_A", t.BOY_SILHOUETTE = "svg_silhouette svg_silhouette_M_C", t.GIRL_SILHOUETTE = "svg_silhouette svg_silhouette_F_C", t.UNKNOWN_SILHOUETTE = "svg_silhouette svg_silhouette_U_A", this._autoComplete = t;
            var i = this.getComponentElement();
            this._autoComplete.onSelect = function(t, n, r, a) {
              i.vallue = t.name, e.update(), e.getViewer().onFindIndividual(e._type, {
                id: t.id,
                gender: t.gender,
                ageGroup: t.isChild ? "C" : "A",
                name: t.name,
                relationship: t.relationship,
                photo: t.path
              })
            }, i.oninput = function() {
              e.update()
            }, this.isPhone() && (i.onfocus = function() {
              e.onFocus(!0)
            }, i.onblur = function() {
              e.onFocus(!1)
            });
            var n = i.parentElement.querySelector(".search_close");
            n && (n.onclick = function() {
              i.value = "", e.update(), i.focus(), e.onFocus(!0)
            }), this.update()
          }
        }, {
          key: "update",
          value: function() {
            var e = this.getComponentElement(),
              t = e.parentElement,
              i = "" === e.value;
            if (t && (t.classList.toggle("empty", i), i)) {
              var n = t.parentElement.querySelector(".relationship_diagram_image");
              n && (n.innerHTML = this.getViewer().renderPhoto("", "U", "A"))
            }
          }
        }, {
          key: "onFocus",
          value: function(e) {
            var t = this;
            this.isPhone() && window.setTimeout((function() {
              t.getViewer().getContainerElement().classList.toggle("search_".concat(t._type), e)
            }), 10)
          }
        }, {
          key: "render",
          value: function(e) {
            var t = this.getComponentId(),
              i = this.translate("Finder IndividualLookupControlText");
            return '<div class="relationship_diagram_finder">' + '<input type="text" hideFocus="true" id="'.concat(t, '" autocorrect="off" autocomplete="off" isIndividualsCombo="1" placeholder="').concat(i, '" value="').concat(e, '" tabindex="5"/>') + '<div class="search_button"><div class="search_icon"></div></div><div class="search_close"></div></div>'
          }
        }]) && O(i.prototype, n), r && O(i, r), Object.defineProperty(i, "prototype", {
          writable: !1
        }), i;
        var i, n, r
      }(o);

      function F(e) {
        return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, F(e)
      }

      function N(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V(n.key), n)
        }
      }

      function V(e) {
        var t = function(e, t) {
          if ("object" != F(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != F(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == F(t) ? t : t + ""
      }

      function q(e, t, i) {
        return t = W(t),
          function(e, t) {
            if (t && ("object" == F(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, G() ? Reflect.construct(t, i || [], W(e).constructor) : t.apply(e, i))
      }

      function G() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (G = function() {
          return !!e
        })()
      }

      function W(e) {
        return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, W(e)
      }

      function U(e, t) {
        return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, U(e, t)
      }
      var Y = function(e) {
        function t(e, i, n, r) {
          var a;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), (a = q(this, t, [e])).DETAILS_BASIC = "basic", a.DETAILS_FULL = "full", a._treeId = n, a._siteTrees = r, a._sourcePersonFinder = new B(e, n, e.TYPE_SOURCE), a._targetPersonFinder = new B(e, n, e.TYPE_TARGET), a._detailsLevel = i ? a.DETAILS_FULL : a.DETAILS_BASIC, a._scrollInterval = null, a
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
          }), t && U(e, t)
        }(t, e), i = t, (n = [{
          key: "isFullDetails",
          value: function() {
            return this._detailsLevel === this.DETAILS_FULL
          }
        }, {
          key: "setFullDetails",
          value: function(e) {
            this._detailsLevel = e ? this.DETAILS_FULL : this.DETAILS_BASIC
          }
        }, {
          key: "getPersonFinder",
          value: function(e) {
            return e === this.getViewer().TYPE_SOURCE ? this._sourcePersonFinder : this._targetPersonFinder
          }
        }, {
          key: "renderDisplayRelationshipButton",
          value: function() {
            var e = this.getViewer().getSourceIndividual() && this.getViewer().getTargetIndividual() ? "" : "disabled",
              t = this.translate("Display relationship");
            return '<div class="relationship_diagram_display_report">' + '<div class="relationship_diagram_display_report_button mh_button mh_button_type_default" '.concat(e, ">").concat(t, "</div>") + "</div>"
          }
        }, {
          key: "renderTitleIndividual",
          value: function(e, t) {
            var i = this.getViewer();
            e || (e = i.createEmptyIndividual(""));
            var n = this.getPersonFinder(t),
              r = n.getLabel(),
              a = i.renderPhoto(e.photo, e.gender, e.ageGroup),
              o = n.render(e.name),
              s = this.renderBackToMe(e, t);
            return '<div class="relationship_diagram_individual_label">'.concat(r, "</div>") + '<div class="relationship_diagram_individual">' + '<div class="relationship_diagram_image">'.concat(a, "</div>").concat(o, "</div>").concat(s)
          }
        }, {
          key: "renderBackToMe",
          value: function(e, t) {
            if ("source" !== t) return "";
            var i = "back_to_me",
              n = this.getViewer().getMemberIndividual();
            return n && 0 != n.id && n.id !== e.id && this.getViewer().isIndividualInTree(n.id, this._treeId) || (i += " inactive"), '<div class="'.concat(i, '">').concat(this.translate("Back to me"), "</div>")
          }
        }, {
          key: "renderHeader",
          value: function(e) {
            if (0 === e.cards.length) return "";
            var t = this.getViewer().getSourcePerson(),
              i = this.getViewer().getTargetPerson();
            if (!t || !i) return "";
            var n = e.relationship;
            if (this.isPhone()) return this.renderPhoneHeader(t, i, n);
            var r = this.renderHeaderTitle(t, i);
            return '<div class="relationship_diagram_report_header container"><div class="description">' + '<div class="title">'.concat(r, "</div>") + '<div class="relationship">'.concat(n, "</div>") + "</div>" + '<div class="actions">'.concat(this.renderDetails()).concat(this.renderButtons(), "</div>") + "</div>"
          }
        }, {
          key: "renderPhoneHeader",
          value: function(e, t, i) {
            var n = this.renderPhoneHeaderTitle(e, t);
            return '<div class="relationship_diagram_report_header"><div class="relationship_diagram_back"></div><div class="relationship_diagram_details">' + '<div class="name">'.concat(t.name, "</div>") + '<div class="relationship">'.concat(n, " ").concat(i, "</div>") + "</div></div>"
          }
        }, {
          key: "renderHeaderTitle",
          value: function(e, t) {
            return (this.getViewer().isSourceIndividualYou() ? this.translate("Relationship of target ".concat(t.gender, " to you")) : this.translate("Relationship of target ".concat(t.gender, " to source ").concat(e.gender)).replace("{source}", e.name)).replace("{target}", t.name)
          }
        }, {
          key: "renderPhoneHeaderTitle",
          value: function(e, t) {
            return this.getViewer().isSourceIndividualYou() ? "" : this.translate("Relationship of ".concat(t.gender, " to source ").concat(e.gender)).replace("{source}", e.name)
          }
        }, {
          key: "renderDetails",
          value: function() {
            return '<div class="details">' + '<div class="label">'.concat(this.translate("Details label"), "</div>") + '<div class="value">'.concat(this.renderDetailsValue(), "</div>") + '<div class="selector"></div>' + "</div>".concat(this.renderDetailsMenu())
          }
        }, {
          key: "renderDetailsValue",
          value: function() {
            return this.translate("Details ".concat(this._detailsLevel))
          }
        }, {
          key: "renderDetailsMenu",
          value: function() {
            var e = [this.renderDetailsMenuEntry(this.DETAILS_BASIC), this.renderDetailsMenuEntry(this.DETAILS_FULL)].join("");
            return '<div class="details_menu">'.concat(e, "</div>")
          }
        }, {
          key: "renderDetailsMenuEntry",
          value: function(e) {
            var t = this.translate("Details ".concat(e));
            return '<div class="entry" data-value="'.concat(e, '">') + '<div class="label">'.concat(t, "</div>") + '<div class="icon"></div></div>'
          }
        }, {
          key: "renderButtons",
          value: function() {
            return '<div class="buttons">'.concat(this.getViewer().renderDownloadButton()).concat(this.getViewer().renderPrintButton(), "</div>")
          }
        }, {
          key: "renderNavigation",
          value: function() {
            return this.isPhone() ? "" : '<div class="relationship_diagram_move_left"></div><div class="relationship_diagram_move_right"></div>'
          }
        }, {
          key: "getDisplayRelationshipButtonElement",
          value: function() {
            return this.getViewer().querySelector(".relationship_diagram_display_report_button")
          }
        }, {
          key: "getHeaderElement",
          value: function() {
            return this.getViewer().querySelector(".relationship_diagram_report_header")
          }
        }, {
          key: "getDetailsElement",
          value: function() {
            return this.getViewer().querySelector(".relationship_diagram_report_header .details")
          }
        }, {
          key: "getDetailsMenuElement",
          value: function() {
            return this.getViewer().querySelector(".relationship_diagram_report_header .details_menu")
          }
        }, {
          key: "getCurrentTreeElement",
          value: function() {
            return this.getViewer().querySelector(".family_trees .current_tree")
          }
        }, {
          key: "getTreesMenuElement",
          value: function() {
            return this.getViewer().querySelector(".family_trees .family_tree_menu")
          }
        }, {
          key: "setEvents",
          value: function() {
            var e = this;
            this._sourcePersonFinder && this._sourcePersonFinder.init(), this._targetPersonFinder && this._targetPersonFinder.init();
            var t = this.getViewer();
            window.onresize = function() {
              e.onresize()
            };
            var i = this.getDisplayRelationshipButtonElement();
            if (i && (i.onclick = function() {
                t.refreshDiagram()
              }), this.setBackToMeEvent(), this.isPhone()) {
              var n = t.querySelector(".relationship_diagram_back");
              n && (n.onclick = function() {
                e.activateMobileHeader(!1)
              })
            } else document.addEventListener("scroll", (function() {
              t.onScrollReport()
            }));
            this.setDetailsEvents(), this.setTreesEvents(), this.setNavigationEvents(), window.setTimeout((function() {
              e.onresize()
            }), 100)
          }
        }, {
          key: "setBackToMeEvent",
          value: function() {
            var e = this,
              t = this.getViewer().querySelector(".back_to_me");
            t && (t.onclick = function() {
              e.getViewer().onSetMemberIndividualAsSource()
            })
          }
        }, {
          key: "onSwapDiagram",
          value: function() {
            this.setBackToMeEvent()
          }
        }, {
          key: "onresize",
          value: function() {
            var e = this.getViewer(),
              t = e.getCanvasElement(),
              i = e.querySelector(".relationship_diagram_background");
            t && i && t.classList.toggle("centered", i.offsetWidth < e._windowElement.offsetWidth), e._windowElement.style.height = "unset";
            var n = document.getElementById("pk_master_footer_container");
            if (n) {
              var r = e._windowElement.getBoundingClientRect(),
                a = n.getBoundingClientRect().top - r.top;
              a > r.height && (e._windowElement.style.height = "".concat(a, "px"))
            }
          }
        }, {
          key: "setDetailsEvents",
          value: function() {
            var e = this,
              t = this.getDetailsElement(),
              i = this.getDetailsMenuElement();
            if (t && i) {
              t.onclick = function(t) {
                t.preventDefault(), i.classList.contains("open") ? e.closeDetailsMenu() : e.openDetailsMenu()
              }, document.body.addEventListener("click", (function(t) {
                e.closeDetailsMenuClickedWhenOutside(t)
              }));
              for (var n = i.querySelectorAll(".entry"), r = 0; r < n.length; r++) n[r].onclick = function(t) {
                var i = e.closestParent(t.target, "entry");
                i && (e.setDetailLevel(i.getAttribute("data-value")), e.closeDetailsMenu())
              }
            }
          }
        }, {
          key: "setTreesEvents",
          value: function() {
            var e = this,
              t = this.getCurrentTreeElement(),
              i = this.getTreesMenuElement();
            if (t && i) {
              t.onclick = function(t) {
                t.preventDefault(), i.classList.contains("open") ? e.closeTreesMenu() : e.openTreesMenu()
              }, document.body.addEventListener("click", (function(t) {
                e.closeTreesMenuClickedWhenOutside(t)
              }));
              for (var n = i.querySelectorAll(".entry"), r = 0; r < n.length; r++) n[r].onclick = function(t) {
                var i = e.closestParent(t.target, "entry");
                i && e.changeTree(i.getAttribute("data-tree-id"))
              }
            }
          }
        }, {
          key: "changeTree",
          value: function(e) {
            var t = location.href.split("?")[0];
            location.href = "".concat(t, "?tree=").concat(e)
          }
        }, {
          key: "openTreesMenu",
          value: function() {
            var e = this.getTreesMenuElement(),
              t = this.getCurrentTreeElement();
            e && t && (e.classList.add("open"), t.classList.add("open"))
          }
        }, {
          key: "closeTreesMenu",
          value: function() {
            var e = this.getTreesMenuElement(),
              t = this.getCurrentTreeElement();
            e && t && (e.classList.remove("open"), t.classList.remove("open"))
          }
        }, {
          key: "closeTreesMenuClickedWhenOutside",
          value: function(e) {
            var t = this.getCurrentTreeElement().getBoundingClientRect();
            (e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && this.closeTreesMenu()
          }
        }, {
          key: "closestParent",
          value: function(e, t) {
            for (var i = e; i && !i.classList.contains(t);) i = i.parentElement;
            return i
          }
        }, {
          key: "openDetailsMenu",
          value: function() {
            var e = this.getDetailsMenuElement(),
              t = this.getDetailsElement();
            if (e && t) {
              for (var i = e.querySelectorAll(".entry"), n = 0; n < i.length; n++) {
                var r = i[n],
                  a = r.getAttribute("data-value");
                r.classList.toggle("selected", a === this._detailsLevel)
              }
              e.classList.add("open"), t.classList.add("open"), this.adjustDetailsMenu()
            }
          }
        }, {
          key: "closeDetailsMenu",
          value: function() {
            var e = this.getDetailsMenuElement(),
              t = this.getDetailsElement();
            e && t && (e.classList.remove("open"), t.classList.remove("open"))
          }
        }, {
          key: "adjustDetailsMenu",
          value: function() {
            var e = this.getDetailsElement(),
              t = this.getDetailsMenuElement();
            if (t.classList.contains("open")) {
              var i = e.getBoundingClientRect(),
                n = this.isRTL() ? i.left : i.right - t.offsetWidth;
              t.style.left = "".concat(n, "px")
            }
          }
        }, {
          key: "closeDetailsMenuClickedWhenOutside",
          value: function(e) {
            if (this.getDetailsElement()) {
              var t = this.getDetailsElement().getBoundingClientRect();
              (e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && this.closeDetailsMenu()
            }
          }
        }, {
          key: "setDetailLevel",
          value: function(e) {
            this._detailsLevel = e, this.getDetailsElement().querySelector(".value").innerHTML = this.renderDetailsValue(), this.getViewer().refreshDiagram()
          }
        }, {
          key: "setNavigationEvents",
          value: function() {
            var e = this.getViewer();
            this.setScrollEvent(e.querySelector(".relationship_diagram_move_left"), -1), this.setScrollEvent(e.querySelector(".relationship_diagram_move_right"), 1)
          }
        }, {
          key: "setScrollEvent",
          value: function(e, t) {
            var i = this;
            if (e) {
              var n = this.getViewer();
              e.onmousedown = function() {
                i.clearScrollInterval(), i._scrollInterval = window.setInterval((function() {
                  n.scrollCanvasLeft(t)
                }), 5)
              }, e.onmouseup = function() {
                i.clearScrollInterval()
              }
            }
          }
        }, {
          key: "clearScrollInterval",
          value: function() {
            this._scrollInterval && (window.clearInterval(this._scrollInterval), this._scrollInterval = null)
          }
        }, {
          key: "onRenderDiagramComplete",
          value: function(e) {
            this.onresize(), this.isPhone() && null !== e && this.activateMobileHeader(!0)
          }
        }, {
          key: "activateMobileHeader",
          value: function(e) {
            this.getViewer().getWindowElement().classList.toggle("active", e), e && this.adjustMobileHeight()
          }
        }, {
          key: "renderSiteTreesMenu",
          value: function() {
            if (!this._siteTrees || this._siteTrees.length < 2) return "";
            for (var e = "", t = [], i = 0; i < this._siteTrees.length; i++) {
              var n = this._siteTrees[i];
              t.push(this.renderSiteTreesMenuEntry(n.id, n.title, n.size)), n.id == this._treeId && (e = n.title)
            }
            return '<div class="separator"></div><div class="family_trees">' + '<div class="current_tree"><div class="value">'.concat(e, "</div>") + '<div class="selector"></div></div>' + '<div class="family_tree_menu">'.concat(t.join(""), "</div>") + "</div>"
          }
        }, {
          key: "renderSiteTreesMenuEntry",
          value: function(e, t, i) {
            var n = e == this._treeId ? "selected" : "";
            return i = i.toLocaleString(), '<div class="entry '.concat(n, '" data-tree-id="').concat(e, '">') + '<div class="label tree_name">'.concat(t, "</div>") + '<div class="label tree_size numeric">'.concat(i, "</div>") + '<div class="icon"></div></div>'
          }
        }, {
          key: "adjustMobileHeight",
          value: function() {
            var e = this.getHeaderElement(),
              t = this.getViewer().getCanvasElement();
            if (e && t) {
              var i = e.querySelector(".relationship_diagram_back"),
                n = e.querySelector(".relationship_diagram_details");
              if (i && n) {
                var r = Math.max(i.offsetHeight, n.offsetHeight) + 30;
                e.style.height = "".concat(r, "px"), t.style.top = "".concat(r, "px")
              }
            }
          }
        }]) && N(i.prototype, n), r && N(i, r), Object.defineProperty(i, "prototype", {
          writable: !1
        }), i;
        var i, n, r
      }(o);

      function z(e) {
        return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, z(e)
      }

      function X(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Q(n.key), n)
        }
      }

      function Q(e) {
        var t = function(e, t) {
          if ("object" != z(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == z(t) ? t : t + ""
      }
      var K = function() {
        return e = function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.PADDING = 30, this.MARGIN = 40, this.HEADER_HEIGHT = 98, this.SCROLLBAR_THICKNESS = 12, this.MIN_WIDTH = 680, this.MIN_HEIGHT = 480, this.INTRO_TIMEOUT_MS = 3e3, this.API_URL = "/FP/API/RelationshipDiagram/get-relationship-diagram.php", this.DONT_SHOW_AGAIN_URL = "/FP/API/dont-show-again.php", this.TYPE_SOURCE = "source", this.TYPE_TARGET = "target", this._translations = {}, this._accountId = "", this._siteId = "", this._lang = "", this._memberIndividual = {}, this._showIntro = !1, this._introMessageId = 0, this._introSiteId = 0, this._introLink = "", this._sourceIndividual = {}, this._targetIndividual = {}, this._individualsById = {}, this._flow = "", this._isSwapped = !1, this._hisHerRelationship = "", this._mouseDown = !1, this._windowElement = null, this._nameElement = null, this._containerElement = null, this._introElement = null, this._introAnchorElement = null, this._introElementInterval = null, this._cards = {}, this._connectors = [], this._report = null
        }, (t = [{
          key: "readSettings",
          value: function(e) {
            this._translations = e.translations, this._accountId = e.accountId, this._siteId = e.siteId, this._lang = e.lang, this._memberIndividual = e.memberIndividual, this._showIntro = e.showIntro, this._introMessageId = e.introMessageId, this._introSiteId = e.introSiteId, this._introLink = e.introLink, this._showPrint = e.showPrint && !isMobile, this._showEdit = e.showEdit, this._editReportLink = e.editReportLink
          }
        }, {
          key: "getSiteId",
          value: function() {
            return this._siteId
          }
        }, {
          key: "getLang",
          value: function() {
            return this._lang
          }
        }, {
          key: "getContainerElement",
          value: function() {
            return this._containerElement
          }
        }, {
          key: "getWindowElement",
          value: function() {
            return this._windowElement
          }
        }, {
          key: "isShowPrint",
          value: function() {
            return this._showPrint
          }
        }, {
          key: "isShowEdit",
          value: function() {
            return this._showEdit
          }
        }, {
          key: "isReportPage",
          value: function() {
            return null !== this._report
          }
        }, {
          key: "getCardStyle",
          value: function() {
            return this.isReportPage() ? this._report.isFullDetails() ? "large" : "medium" : "small"
          }
        }, {
          key: "isLargeCardStyle",
          value: function() {
            return "large" === this.getCardStyle()
          }
        }, {
          key: "translate",
          value: function(e, t) {
            return t && (e += " " + ("F" === t ? "F" : "M")), this._translations.hasOwnProperty(e) ? this._translations[e] : ""
          }
        }, {
          key: "getTooltip",
          value: function() {
            var e = this;
            return this._showIntro && setTimeout((function() {
              e.showIntro()
            }), this.INTRO_TIMEOUT_MS), this.translate("Tooltip")
          }
        }, {
          key: "getViewRelationshipDescription",
          value: function() {
            return this.translate("View relationship")
          }
        }, {
          key: "setCardStyle",
          value: function(e) {
            this.cardStyle = e
          }
        }, {
          key: "isTargetIndividualYou",
          value: function(e) {
            return this._memberIndividual && this._memberIndividual.id === this.cleanIndividualId(e)
          }
        }, {
          key: "addIndividual",
          value: function(e) {
            this._individualsById[e.id] = e
          }
        }, {
          key: "openPopupForIndividual",
          value: function(e, t) {
            this._sourceIndividual = this._memberIndividual, this._targetIndividual = e, this._flow = t, this.showDiagram()
          }
        }, {
          key: "openPopupForIndividualById",
          value: function(e, t) {
            this._individualsById.hasOwnProperty(e) && this.openPopupForIndividual(this._individualsById[e], t)
          }
        }, {
          key: "showReportPage",
          value: function(e) {
            var t = this;
            this._flow = "report", this._sourceIndividual = e.source, this._targetIndividual = e.target, !this._sourceIndividual && this._memberIndividual.id && this.isIndividualInTree(this._memberIndividual.id, e.treeId) && (this._sourceIndividual = this._memberIndividual), window.addEventListener("load", (function() {
              t._report = new Y(t, e.fullDetails, e.treeId, e.siteTrees), t.readHash(), t.showDiagram()
            }))
          }
        }, {
          key: "isIndividualInTree",
          value: function(e, t) {
            return parseInt(e / 1e6) === t
          }
        }, {
          key: "showDiagram",
          value: function() {
            if (this.closeIntroWindow(), this._containerElement || (this.isReportPage() ? this._containerElement = document.getElementById("RelationshipDiagramReport") : (this._containerElement = this._createElement("RelationshipDiagramContainer", document.body), this._containerElement.classList.add("container-fluid")), this._windowElement = this._createElement("RelationshipDiagramWindow", this._containerElement), this._windowElement.classList.add("relationship_diagram"), this._nameElement = this._createElement("RelationshipDiagramName", document.body)), this._cards = {}, this._connectors = [], this.renderProgress(), this._containerElement.style.display = "block", this._sourceIndividual && this._targetIndividual) this.fetchDiagram();
            else if (this.renderEmptyDiagram(), this.isReportPage() && !this.isPhone()) {
              var e = this._report.getPersonFinder(this._targetIndividual ? this.TYPE_SOURCE : this.TYPE_TARGET);
              e && e.getComponentElement().focus()
            }
          }
        }, {
          key: "_createElement",
          value: function(e, t) {
            var i = document.createElement("div");
            return i.setAttribute("id", e), t.appendChild(i), i
          }
        }, {
          key: "isPhone",
          value: function() {
            return isMobile && !isTablet
          }
        }, {
          key: "isRTL",
          value: function() {
            return "right" === displayLanguageDirection
          }
        }, {
          key: "renderProgress",
          value: function() {
            this._windowElement.innerHTML = "", this.toggleProgress(!0);
            var e = this.renderHeader() + '<div class="canvas">' + this.renderSpinner() + "</div>";
            this.renderInfo({
              html: e,
              width: this.MIN_WIDTH,
              height: this.MIN_HEIGHT,
              diagram: null
            })
          }
        }, {
          key: "toggleProgress",
          value: function(e) {
            this.isPhone() || this._windowElement.classList.toggle("progress", e)
          }
        }, {
          key: "renderSpinner",
          value: function() {
            return '<div class="progress"><div class="spinner"><div class="inner"><div></div></div></div></div>'
          }
        }, {
          key: "renderHeader",
          value: function() {
            var e = "",
              t = "relationship_diagram_title";
            return this.isReportPage() || (this.isShowPrint() && (t += " with_print", e += this.renderPrintButton()), this.isShowEdit() && (t += " with_edit", e += this.renderEditButton()), e += '<div class="relationship_diagram_close"></div>'), '<div class="relationship_diagram_header_container"><div class="relationship_diagram_header' + (this.isReportPage() ? " container" : "") + '"><div class="' + t + '">' + this.renderTitle() + "</div>" + e + "</div></div>" + this.renderReportDockedHeader()
          }
        }, {
          key: "renderPrintButton",
          value: function() {
            return this.isShowPrint() ? '<div class="relationship_diagram_print" title="' + this.translate("Print") + '"></div>' : ""
          }
        }, {
          key: "renderDownloadButton",
          value: function() {
            return this.isShowPrint() ? '<div class="relationship_diagram_download" title="' + this.translate("Download") + '"></div>' : ""
          }
        }, {
          key: "renderEditButton",
          value: function() {
            return this.isShowEdit() ? '<div class="relationship_diagram_edit" title="' + this.translate("Edit") + '"></div>' : ""
          }
        }, {
          key: "renderTitle",
          value: function() {
            var e = "",
              t = this.isPhone() ? this.translate("Title from you") : this.translate("Title"),
              i = "";
            return this.isReportPage() && (t = this.translate("Title report"), e = this._report.renderDisplayRelationshipButton(), i = this._report.renderSiteTreesMenu()), '<div class="relationship_diagram_description"><div class="caption">' + t + "</div>" + i + '</div><div class="relationship_diagram_path"><div class="relationship_diagram_source">' + this.renderTitleIndividual(this._sourceIndividual, "", this.TYPE_SOURCE) + "</div>" + this.renderSwapper() + '<div class="relationship_diagram_target">' + this.renderTitleIndividual(this._targetIndividual, this._isSwapped ? this._hisHerRelationship : "", this.TYPE_TARGET) + "</div>" + e + "</div>"
          }
        }, {
          key: "renderReportDockedHeader",
          value: function() {
            return !this.isReportPage() || this.isPhone() ? "" : '<div class="relationship_diagram_docked_header_container"><div class="relationship_diagram_docked_header container"><div class="relationship_diagram_title">' + this.renderReportDockedTitle() + '</div><div class="relationship_diagram_actions">' + this.renderDownloadButton() + this.renderPrintButton() + "</div></div></div>"
          }
        }, {
          key: "renderReportDockedTitle",
          value: function() {
            return '<div class="relationship_diagram_path"><div class="relationship_diagram_source">' + this.renderTitleIndividual(this._sourceIndividual, "", null) + "</div>" + this.renderSwapper() + '<div class="relationship_diagram_target">' + this.renderTitleIndividual(this._targetIndividual, this._isSwapped ? this._hisHerRelationship : "", null) + "</div></div>"
          }
        }, {
          key: "renderTitleIndividual",
          value: function(e, t, i) {
            if (i && this._report) return this._report.renderTitleIndividual(e, i);
            if (!e) return "";
            e.relationship || i !== this.TYPE_SOURCE || (e.relationship = this.translate("You"));
            var n = e.relationship;
            return t && (n += " - " + t), '<div class="relationship_diagram_individual"><div class="relationship_diagram_image">' + this.renderPhoto(e.photo, e.gender, e.ageGroup) + '</div><div class="relationship_diagram_details"><div class="relationship_diagram_info"><div class="relationship_diagram_name">' + e.name + '</div><div class="relationship_diagram_relationship">' + n + "</div></div></div></div>"
          }
        }, {
          key: "renderSwapper",
          value: function() {
            var e = "relationship_diagram_swapper_buttons";
            return this._isSwapped && (e += " swapped"), '<div class="relationship_diagram_swapper"><div class="' + e + '" title="' + this.translate("Swap direction") + '"></div></div>'
          }
        }, {
          key: "getSourceIndividual",
          value: function() {
            return this._sourceIndividual
          }
        }, {
          key: "getTargetIndividual",
          value: function() {
            return this._targetIndividual
          }
        }, {
          key: "getSourceIndividualId",
          value: function() {
            return this._sourceIndividual ? this._sourceIndividual.id : 0
          }
        }, {
          key: "getTargetIndividualId",
          value: function() {
            return this._targetIndividual ? this._targetIndividual.id : 0
          }
        }, {
          key: "setSourceIndividualId",
          value: function(e) {
            this._sourceIndividual && this._sourceIndividual === e || (this._sourceIndividual = this.createEmptyIndividual(e))
          }
        }, {
          key: "setTargetIndividualId",
          value: function(e) {
            this._targetIndividual && this._targetIndividual === e || (this._targetIndividual = this.createEmptyIndividual(e))
          }
        }, {
          key: "createEmptyIndividual",
          value: function(e) {
            return {
              id: e,
              name: "",
              photo: null,
              gender: "U",
              ageGroup: "A",
              relationship: ""
            }
          }
        }, {
          key: "getMemberIndividual",
          value: function() {
            return this._memberIndividual
          }
        }, {
          key: "isSourceIndividualYou",
          value: function() {
            return this._sourceIndividual && this._memberIndividual && this._sourceIndividual.id && this._sourceIndividual.id === this._memberIndividual.id
          }
        }, {
          key: "querySelector",
          value: function(e, t) {
            return t || (t = this._windowElement), t.querySelector(e)
          }
        }, {
          key: "getCanvasElement",
          value: function() {
            return this.querySelector(".relationship_diagram_canvas")
          }
        }, {
          key: "fetchDiagram",
          value: function() {
            var e = this;
            if (this._sourceIndividual && this._targetIndividual) {
              var t = this.getCanvasElement();
              t && (t.innerHTML = this.renderSpinner());
              var n = {
                s: this._siteId,
                lang: this._lang,
                individualId: this.cleanIndividualId(this._targetIndividual.id),
                flow: this._flow,
                style: this.getCardStyle()
              };
              this._sourceIndividual.id && (n.sourceIndividualId = this.cleanIndividualId(this._sourceIndividual.id)), i().get(this.API_URL, {
                params: n
              }).then((function(t) {
                200 === t.status && "success" === t.data.status ? e.renderDiagram(t.data.data) : (console.log(t), e.toggleProgress(!1))
              }))
            }
          }
        }, {
          key: "cleanIndividualId",
          value: function(e) {
            if ("string" == typeof e) {
              if (0 === e.indexOf("individual-")) {
                var t = e.split("-");
                e = t[t.length - 1]
              }
              e = parseInt(e)
            }
            return e
          }
        }, {
          key: "printDiagram",
          value: function(e) {
            if (this.isShowPrint()) {
              var t = ["s=" + this._siteId, "lang=" + this._lang, "individualId=" + this.cleanIndividualId(this._targetIndividual.id), "flow=" + this._flow, "format=pdf", "style=" + this.getCardStyle(), "csrf_token=" + window.mhXsrfToken];
              this._sourceIndividual.id && t.push("sourceIndividualId=" + this.cleanIndividualId(this._sourceIndividual.id)), e && t.push("download=1"), window.open(this.API_URL + "?" + t.join("&"), "_blank", "noopener")
            }
          }
        }, {
          key: "editDiagram",
          value: function() {
            if (this._sourceIndividual && this._targetIndividual) {
              var e = this._editReportLink;
              e = (e = e.replace("SOURCE", this._sourceIndividual.id)).replace("TARGET", this._targetIndividual.id), window.open(e, "_relationshipReport", "noopener")
            }
          }
        }, {
          key: "swapDiagram",
          value: function() {
            this._isSwapped = !this._isSwapped;
            var e = this._sourceIndividual;
            this._sourceIndividual = this._targetIndividual, this._targetIndividual = e, this._hisHerRelationship = "", this.isReportPage() && 0 === Object.keys(this._cards).length ? (this.refreshTitle(), this.events(), this._report.onSwapDiagram()) : (this.refreshDiagram(), this.isReportPage() && this._report.onSwapDiagram())
          }
        }, {
          key: "refreshDiagram",
          value: function() {
            this._cards = {}, this._connectors = [], this.refreshTitle(), this.fetchDiagram()
          }
        }, {
          key: "refreshTitle",
          value: function() {
            var e;
            (e = this.querySelector(".relationship_diagram_header .relationship_diagram_title", this._containerElement)) && (e.innerHTML = this.renderTitle()), this.isReportPage() && (e = this.querySelector(".relationship_diagram_header .relationship_diagram_docked_title", this._containerElement)) && (e.innerHTML = this.renderReportDockedTitle())
          }
        }, {
          key: "renderDiagram",
          value: function(e) {
            this._hisHerRelationship = e.hisHerRelationship, this.renderInfo(this.getDiagramRenderingInfo(e))
          }
        }, {
          key: "renderInfo",
          value: function(e) {
            var t = this;
            this.toggleProgress(!1), this.isPhone() || this.isReportPage() ? (this.renderHtml(e.html), this.isReportPage() && this._report.onRenderDiagramComplete(e.diagram), this.ensureTargetCardVisible()) : (e.diagram || (this._windowElement.style.height = 0, this._windowElement.style.width = 0), jQuery(this._windowElement).animate({
              width: e.width,
              height: e.height
            }, {
              complete: function() {
                t.renderHtml(e.html), t.ensureTargetCardVisible()
              }
            }))
          }
        }, {
          key: "renderHtml",
          value: function(e) {
            this._windowElement.innerHTML = e, this.adjustHeight(), this.events()
          }
        }, {
          key: "adjustHeight",
          value: function() {
            if (!this.isReportPage()) {
              var e = this.querySelector(".relationship_diagram_title"),
                t = this.querySelector(".relationship_diagram_header"),
                i = this.getCanvasElement();
              if (e && t && i) {
                var n = e.getBoundingClientRect().height;
                t.style.height = n + "px", i.style.top = n + "px"
              }
            }
          }
        }, {
          key: "events",
          value: function() {
            var e = this,
              t = this.querySelector(".relationship_diagram_header");
            if (t) {
              var i = this.querySelector(".relationship_diagram_close", t);
              i && (i.onclick = function() {
                e.closeWindow()
              });
              for (var n = document.querySelectorAll(".relationship_diagram_swapper_buttons"), r = 0; r < n.length; r++) n[r].onclick = function() {
                e.swapDiagram()
              };
              var a = document.querySelectorAll(".relationship_diagram_print");
              for (r = 0; r < a.length; r++) a[r].onclick = function() {
                e.printDiagram(!1)
              };
              var o = document.querySelectorAll(".relationship_diagram_download");
              for (r = 0; r < o.length; r++) o[r].onclick = function() {
                e.printDiagram(!0)
              };
              var s = document.querySelectorAll(".relationship_diagram_edit");
              for (r = 0; r < s.length; r++) s[r].onclick = function() {
                e.editDiagram()
              };
              for (var l in this._cards) this._cards[l].events();
              if (this.isPhone()) {
                var u = this.querySelector(".relationship_diagram_footer");
                if (u) {
                  var d = this.querySelector(".relationship_diagram_close", u);
                  d && (d.onclick = function() {
                    u.style.display = "none"
                  })
                }
              } else {
                var c = this.getCanvasElement();
                c && (c.classList.add("grab-cursor"), c.onmousedown = function(t) {
                  e._mouseDown = !0, c.classList.remove("grab-cursor"), c.classList.add("grabbing-cursor")
                }, c.onmouseup = function(t) {
                  e._mouseDown = !1, c.classList.remove("grabbing-cursor"), c.classList.add("grab-cursor")
                }, c.onmousemove = function(t) {
                  e._mouseDown && c.scrollBy(-t.movementX, -t.movementY)
                })
              }
              this._report && this._report.setEvents()
            }
          }
        }, {
          key: "ensureTargetCardVisible",
          value: function() {
            var e = this.getTargetIndividualId(),
              t = this.getCanvasElement();
            if (e && t) {
              var i = this.querySelector(".relationship_diagram_card.card_" + this._siteId + "-" + e);
              if (i) {
                var n = t.offsetWidth,
                  r = this.isPhone() ? t.offsetHeight : document.documentElement.offsetHeight - t.offsetTop,
                  a = Math.max(0, parseInt(i.style.left) + parseInt(i.style.width) + this.PADDING - n),
                  o = Math.max(0, parseInt(i.style.top) + parseInt(i.style.height) + this.PADDING - r);
                0 === a && 0 == o || (this.isPhone() ? jQuery(t).animate({
                  scrollLeft: a,
                  scrollTop: o
                }, 800) : (a > 0 && jQuery(t).animate({
                  scrollLeft: a
                }, 800), o > 0 && jQuery(document.documentElement).animate({
                  scrollTop: o
                }, 800)))
              }
            }
          }
        }, {
          key: "closeWindow",
          value: function() {
            this._isSwapped = !1, this._containerElement.style.display = "none", this._windowElement.innerHTML = ""
          }
        }, {
          key: "getDiagramRenderingInfo",
          value: function(e) {
            var t = this.isPhone(),
              i = e.width + 2 * this.PADDING + 12,
              n = e.height + 2 * this.PADDING,
              r = t ? 0 : this.MARGIN,
              a = window.innerWidth - 2 * r,
              o = window.innerHeight - 2 * r,
              s = t ? a : this.MIN_WIDTH,
              l = t ? o : this.MIN_HEIGHT,
              u = i,
              d = this.querySelector(".relationship_diagram_header"),
              c = n + (d ? d.offsetHeight : 0);
            c > o ? (c = o, t || this.SCROLLBAR_THICKNESS) : c < l && (c = l), u > a ? (u = a, t || (c += this.SCROLLBAR_THICKNESS)) : u < s && (u = s);
            var h = "";
            if (0 === e.cards.length) h = '<div class="relationship_diagram_background not_found">' + this.renderRelationshipNotFoundDiagramContent(e) + "</div>";
            else {
              var v = i - 4,
                f = n - 4;
              this.isReportPage() && (f += this.PADDING);
              var p = u > v ? (u - v) / 2 : 0;
              h = '<div class="relationship_diagram_background" style="' + (this.isRTL() ? "right:" : "left:") + p + "px; width:" + v + "px; height:" + f + 'px">' + this.renderDiagramContent(e) + "</div>" + (this.isReportPage() ? this._report.renderNavigation() : "");
              var g = e.cards[0].person;
              if (this._sourceIndividual || (this._sourceIndividual = {
                  id: g.id.split("-")[1],
                  relationship: this.translate("You")
                }), this._sourceIndividual.name = g.name, this._sourceIndividual.gender = g.gender, this._sourceIndividual.ageGroup = g.ageGroup, this._sourceIndividual.photo = g.photo ? g.photo.url : null, this._targetIndividual.relationship = e.relationship, this.isReportPage()) {
                if (this._targetIndividual && ("" === this._targetIndividual.name || "" === this._targetIndividual.relationship)) {
                  var _ = this.getCard(this._targetIndividual.id);
                  if (_) {
                    var m = _.person;
                    this._targetIndividual.name = m.name, this._targetIndividual.gender = m.gender, this._targetIndividual.ageGroup = m.ageGroup, this._targetIndividual.photo = m.photo ? m.photo.url : null
                  }
                }
                this.saveHash()
              }
            }
            return {
              html: this.renderHeader() + (this.isReportPage() ? this._report.renderHeader(e) : "") + '<div class="relationship_diagram_canvas">' + h + "</div>" + this.renderFooter(),
              width: u,
              height: c,
              diagram: e
            }
          }
        }, {
          key: "renderDiagramContent",
          value: function(e) {
            for (var t = 0; t < e.cards.length; t++) {
              var i = new f(this);
              i.setData(e.cards[t]), "" === i.path ? i.isSource = !0 : i.path === e.path && (i.isTarget = !0), this.setCardPosition(i), this.addCard(i)
            }
            for (t = 0; t < e.connectors.length; t++) {
              var n = e.connectors[t],
                r = "parents" === n.type ? new L(this) : new b(this);
              r.setData(n), this._connectors.push(r)
            }
            var a = [];
            for (t = 0; t < this._connectors.length; t++) a.push(this._connectors[t].render());
            for (var o in this._cards) a.push(this._cards[o].render());
            return a.join("")
          }
        }, {
          key: "renderRelationshipNotFoundDiagramContent",
          value: function() {
            var e = "";
            return this._targetIndividual && this._targetIndividual.name && (this._targetIndividual.name, this.isSourceIndividualYou() ? e = this.translate("Relationship not found to you").replace("%1", this._targetIndividual.name) : this._sourceIndividual && this._sourceIndividual.name && (e = this.translate("Relationship not found to source").replace("%1", this._targetIndividual.name).replace("%2", this._sourceIndividual.name))), '<div class="relationship_diagram_not_found"><div class="image"></div><div class="text">' + e + "</div></div>"
          }
        }, {
          key: "renderEmptyDiagram",
          value: function() {
            this.renderHtml(this.renderHeader() + '<div class="relationship_diagram_canvas"></div>' + this.renderFooter())
          }
        }, {
          key: "addCard",
          value: function(e) {
            this._cards[e.id] = e
          }
        }, {
          key: "getCard",
          value: function(e) {
            return "string" == typeof e && -1 !== e.indexOf("-") || (e = this.getSiteId() + "-" + e), this._cards.hasOwnProperty(e) ? this._cards[e] : null
          }
        }, {
          key: "setCardPosition",
          value: function(e) {
            e.left += this.PADDING, e.top += this.PADDING
          }
        }, {
          key: "getSourceCard",
          value: function() {
            return this._sourceIndividual ? this.getCard(this._sourceIndividual.id) : null
          }
        }, {
          key: "getTargetCard",
          value: function() {
            return this._targetIndividual ? this.getCard(this._targetIndividual.id) : null
          }
        }, {
          key: "getSourcePerson",
          value: function() {
            var e = this.getSourceCard();
            return e ? e.person : null
          }
        }, {
          key: "getTargetPerson",
          value: function() {
            var e = this.getTargetCard();
            return e ? e.person : null
          }
        }, {
          key: "renderFooter",
          value: function() {
            return this.isPhone() ? '<div class="relationship_diagram_footer"><div class="relationship_diagram_close"></div><div class="relationship_diagram_footer_inner"></div></div>' : ""
          }
        }, {
          key: "showFooter",
          value: function(e) {
            var t = this.querySelector(".relationship_diagram_footer");
            if (t) {
              var i = this.querySelector(".relationship_diagram_footer_inner", t);
              i && (i.innerHTML = e.renderPersonInFooter()), t.style.display = "block";
              var n = this.querySelector(".relationship_diagram_actions_menu", t);
              n && e.menuActionEvents(n)
            }
          }
        }, {
          key: "renderPersonalPhoto",
          value: function(e) {
            return this.renderPhoto(e.photo ? e.photo.url : null, e.gender, e.ageGroup)
          }
        }, {
          key: "renderPhoto",
          value: function(e, t, i) {
            var n = "relationship_diagram_photo photo_" + t,
              r = "";
            return e ? r = "background-image:url(" + e + ")" : (i || (i = "A"), n += " silhouette svg_silhouette_" + t + "_" + i), '<div class="' + n + '" style="' + r + '"></div>'
          }
        }, {
          key: "getPersonsDisplayNameAndFontSize",
          value: function(e, t, i) {
            this._nameElement.style.width = t + "px";
            for (var n = [e.name], r = 0; r < e.names.length; r++) {
              var a = e.names[r].n;
              n.includes(a) || n.push(a)
            }
            var o = ["relationship_diagram_name_large", "relationship_diagram_name_medium", "relationship_diagram_name_small"];
            for (a = "", r = 0; r < n.length; r++) {
              (a = n[r]) !== e.name && a !== e.names[0].n && (a += this.getNameEllipsisSuffix()), this._nameElement.innerHTML = a;
              var s = this._checkNameHeight(i, o);
              if (null !== s) return {
                name: a,
                className: s
              }
            }
            return {
              name: a,
              className: o[0]
            }
          }
        }, {
          key: "_checkNameHeight",
          value: function(e, t) {
            for (var i = 0; i < t.length; i++) {
              for (var n = 0; n < t.length; n++) n === i ? this._nameElement.classList.add(t[n]) : this._nameElement.classList.remove(t[n]);
              var r = t[i];
              if (this._nameElement.offsetHeight <= e) return r
            }
            return null
          }
        }, {
          key: "getNameEllipsisSuffix",
          value: function() {
            return '<span class="ellipsis">&hellip;</span>'
          }
        }, {
          key: "showIntro",
          value: function() {
            if (this._showIntro) {
              this._showIntro = !1;
              for (var e = document.querySelectorAll(".relationship_diagram_viewer, .relationship_diagram_viewer_dotted"), t = 0; t < e.length; t++) {
                var i = e[t];
                if (this.checkIfElementIsVisible(i)) {
                  this.showIntroWindow(i);
                  break
                }
              }
            }
          }
        }, {
          key: "showIntroWindow",
          value: function(e) {
            var t = this;
            if (!this._containerElement || "block" !== this._containerElement.style.display) {
              if (!this._introElement) {
                this._introElement = this._createElement("RelationshipDiagramIntro", document.body), this._introElement.classList.add("container-fluid"), this._introElement.innerHTML = '<div class="relationship_diagram_intro_top"><div class="relationship_diagram_intro_title">' + this.translate("Intro title") + '</div><div class="relationship_diagram_intro_new">' + this.translate("Intro new") + '</div></div><div class="relationship_diagram_intro_text">' + this.translate("Intro text") + '</div><div class="relationship_diagram_intro_bottom"><div class="relationship_diagram_learn_more">' + this.translate("Intro learn more") + '</div><div class="relationship_diagram_action">' + this.translate("Intro action") + "</div></div>", this._introAnchorElement = e, this.positionIntroElement();
                var i = this.querySelector(".relationship_diagram_action", this._introElement);
                i && (i.onclick = function() {
                  t.actionClicked()
                });
                var n = this.querySelector(".relationship_diagram_learn_more", this._introElement);
                n && ("" === this._introLink ? n.style.visibility = "hidden" : n.onclick = function() {
                  t.learnMoreClicked()
                }), this._introElementInterval = window.setInterval((function() {
                  t.checkIfElementIsVisible(t._introAnchorElement) || (t.closeIntroWindow(), window.clearInterval(t._introElementInterval))
                }), 1e3), document.addEventListener("scroll", (function() {
                  t._introElement && "none" !== t._introElement.style.display && t.positionIntroElement()
                }))
              }
              this._introElement.classList.add("open")
            }
          }
        }, {
          key: "positionIntroElement",
          value: function() {
            var e = this._introAnchorElement.getBoundingClientRect();
            if (this._introElement.style.top = e.bottom + 12 + "px", this.isPhone()) var t = (window.innerWidth - this._introElement.offsetWidth) / 2;
            else t = this.isRTL() ? e.right - this._introElement.offsetWidth + 15 : e.left - 15;
            this._introElement.style.left = Math.max(t, 0) + "px"
          }
        }, {
          key: "closeIntroWindow",
          value: function() {
            var e = this;
            this._introElement && (this._introElement.classList.remove("open"), window.setInterval((function() {
              e._introElement.style.display = "none"
            }), 500))
          }
        }, {
          key: "checkIfElementIsVisible",
          value: function(e) {
            if ("none" === e.style.display || "hidden" === e.style.visibility) return !1;
            if (0 === e.offsetWidth || 0 === e.offsetHeight) return !1;
            var t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
          }
        }, {
          key: "actionClicked",
          value: function() {
            var e = {
              memberID: this._accountId,
              siteID: this._introSiteId,
              messageID: this._introMessageId
            };
            i().get(this.DONT_SHOW_AGAIN_URL, {
              params: e
            }), this.closeIntroWindow()
          }
        }, {
          key: "learnMoreClicked",
          value: function() {
            this._introLink && window.open(this._introLink, "_blank"), this.closeIntroWindow()
          }
        }, {
          key: "onFindIndividual",
          value: function(e, t) {
            e === this.TYPE_TARGET ? this._targetIndividual = t : e === this.TYPE_SOURCE && (this._sourceIndividual = t), this.reloadDiagram()
          }
        }, {
          key: "onSetMemberIndividualAsSource",
          value: function() {
            this._memberIndividual && this._memberIndividual.id && !this.isSourceIndividualYou() && (this._sourceIndividual = this._memberIndividual, this._targetIndividual && this._targetIndividual.id === this._sourceIndividual.id && (this._targetIndividual = null), this.reloadDiagram())
          }
        }, {
          key: "reloadDiagram",
          value: function() {
            this._sourceIndividual && this._targetIndividual ? this.refreshDiagram() : (this.refreshTitle(), this.events())
          }
        }, {
          key: "scrollCanvasLeft",
          value: function(e) {
            var t = this.getCanvasElement();
            t && (t.scrollLeft = t.scrollLeft + e)
          }
        }, {
          key: "saveHash",
          value: function() {
            var e = new URL(document.location).searchParams;
            if (!(e.has("source") && e.has("target") || e.has("details"))) {
              var t = {
                source: this.getSourceIndividualId(),
                target: this.getTargetIndividualId(),
                fullDetails: this.isReportPage() && this._report.isFullDetails()
              };
              this.setHashToLocation(t)
            }
          }
        }, {
          key: "readHash",
          value: function() {
            var e = this.getHashFromLocation();
            0 !== e.length && (this.setSourceIndividualId(e.source), this.setTargetIndividualId(e.target), this.isReportPage() && this._report.setFullDetails(e.fullDetails))
          }
        }, {
          key: "getHashFromLocation",
          value: function() {
            var e = document.location.hash;
            if ("" === e || "#" !== e.substr(0, 1)) return [];
            var t = e.substr(1).split("-");
            return t.length < 2 ? [] : {
              source: t[0],
              target: t[1],
              fullDetails: 3 === t.length && "f" === t[2]
            }
          }
        }, {
          key: "setHashToLocation",
          value: function(e) {
            if (e.source && e.target) {
              var t = [e.source, e.target];
              t.fullDetails && t.push("f"), document.location.hash = t.join("-")
            }
          }
        }, {
          key: "onScrollReport",
          value: function() {
            var e = window.pageYOffset > 125;
            this.getContainerElement().classList.toggle("docked", e)
          }
        }]) && X(e.prototype, t), n && X(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
        var e, t, n
      }();

      function J() {
        var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        return null != i ? i : (t = null, "undefined" != typeof window && "Window" === window.constructor.name ? t = window : void 0 !== e.g && (t = e.g), t)
      }
      var Z = "tr_id";
      void 0 === window.relationshipDiagramViewer && (window.relationshipDiagramViewer = new K), void 0 === window.newTree && (window.newTree = {}), void 0 === window.newTree.addTrafficTrackingIdToUrl && (window.newTree.addTrafficTrackingIdToUrl = function(e, t) {
        var i, n = (null === (i = J()) || void 0 === i ? void 0 : i.trafficTrackingId) || t,
          r = e || "";
        return n && r.indexOf(Z) < 0 && (r += "".concat(r.indexOf("?") >= 0 ? "&" : "?").concat(Z, "=").concat(n)), r
      }), void 0 === window.newTree.translator && (window.newTree.translator = {}, window.newTree.translator.text = function(e) {
        return void 0 !== window.pedigreeTreeApp ? window.pedigreeTreeApp.canvasTEXT(e) : ""
      })
    }()
}();
//# sourceMappingURL=https://www.myheritage.com/FP/Assets/bundles/JS/sourcemaps/RelationshipDiagram-4de162086a657ac217f544c9e787b269.js.map

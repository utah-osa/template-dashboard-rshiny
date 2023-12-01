!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("utahHeader", [], t) : "object" == typeof exports ? exports.utahHeader = t() : e.utahHeader = t()
}(window, (function() {
    return function(e) {
        var t = {};
        function n(o) {
            if (t[o])
                return t[o].exports;
            var a = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(a.exports, a, a.exports, n),
            a.l = !0,
            a.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var o = Object.create(null);
            if (n.r(o),
            Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var a in e)
                    n.d(o, a, function(t) {
                        return e[t]
                    }
                    .bind(null, a));
            return o
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 3)
    }([function(e) {
        e.exports = JSON.parse('{"a":"1.0.1"}')
    }
    , function(e, t, n) {}
    , function(e, t) {
        Node.prototype.appendChildAll = function(e) {
            if (e instanceof HTMLCollection)
                for (; e.length > 0; )
                    this.appendChild(e[0]);
            else
                e instanceof Node ? this.appendChild(e) : console.error("Node.appendChildAll: Unknown child element!")
        }
        ,
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || (Element.prototype.closest = function(e) {
            var t = this;
            do {
                if (Element.prototype.matches.call(t, e))
                    return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        }
        ),
        Element.prototype.isVisible || (Element.prototype.isVisible = function() {
            return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length)
        }
        )
    }
    , function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "ENVIRONMENT", (function() {
            return U
        }
        )),
        n.d(t, "HEADER_SIZE", (function() {
            return l
        }
        )),
        n.d(t, "HEADER_STYLE", (function() {
            return c
        }
        )),
        n.d(t, "ICON_TYPES", (function() {
            return _
        }
        )),
        n.d(t, "POPUP_MENU_STYLE", (function() {
            return ye
        }
        )),
        n.d(t, "addActionItem", (function() {
            return He
        }
        )),
        n.d(t, "closeMainMenu", (function() {
            return C
        }
        )),
        n.d(t, "closeSearchForm", (function() {
            return me
        }
        )),
        n.d(t, "getConfig", (function() {
            return Ce
        }
        )),
        n.d(t, "getMainMenu", (function() {
            return Me
        }
        )),
        n.d(t, "getUserInfo", (function() {
            return le
        }
        )),
        n.d(t, "isLoaded", (function() {
            return xe
        }
        )),
        n.d(t, "loadHeader", (function() {
            return Ke
        }
        )),
        n.d(t, "openMainMenu", (function() {
            return Re
        }
        )),
        n.d(t, "openSearchForm", (function() {
            return pe
        }
        )),
        n.d(t, "removeActionItem", (function() {
            return we
        }
        )),
        n.d(t, "renderDOM", (function() {
            return a
        }
        )),
        n.d(t, "setConfig", (function() {
            return Ne
        }
        )),
        n.d(t, "setMainMenu", (function() {
            return be
        }
        )),
        n.d(t, "showSignIn", (function() {
            return re
        }
        )),
        n.d(t, "showUserAsSignedIn", (function() {
            return ie
        }
        )),
        n.d(t, "toggleMainMenu", (function() {
            return Pe
        }
        )),
        n.d(t, "updateConfig", (function() {
            return Le
        }
        ));
        var o = n(0);
        n(1);
        function a(e) {
            var t = (new DOMParser).parseFromString(e, "text/html");
            return t.body.children.length > 1 ? t.body.children : t.body.firstChild
        }
        var r = "ut-search-form"
          , i = {
            UTAH_GOV_HEADER: "".concat("utah-gov-header"),
            UTAH_GOV_HEADER_LOGO_TITLE_WRAPPER: "".concat("utah-gov-header", "__logo-title-wrapper"),
            UTAH_GOV_HEADER_LOGO_TITLE_INNER_WRAPPER: "".concat("utah-gov-header", "__logo-title-inner-wrapper"),
            UTAH_GOV_HEADER_TITLE_WRAPPER: "".concat("utah-gov-header", "__title-wrapper"),
            UTAH_GOV_HEADER_TITLE: "".concat("utah-gov-header", "__title"),
            UTAH_GOV_HEADER_SHORT_TITLE: "".concat("utah-gov-header", "__short-title"),
            UTAH_GOV_HEADER_LOGO_WRAPPER: "".concat("utah-gov-header", "__logo-wrapper"),
            UTAH_GOV_HEADER_LOGO_AND_TITLE: "".concat("utah-gov-header", "__logo-and-title"),
            UTAH_GOV_HEADER_VERT_LINE: "".concat("utah-gov-logo", "__vert-line"),
            UTAH_GOV_HEADER_STICKY: "".concat("utah-gov-header", "--sticky"),
            UTAH_GOV_HEADER_STICKY_PLACEHOLDER: "".concat("utah-gov-header", "__placeholder"),
            UT_COLOR_BLUE: "".concat("ut-color", "-blue"),
            UT_COLOR_BLUE_DARK: "".concat("ut-color", "-blue-dark"),
            UT_COLOR_DARK: "".concat("ut-color", "-dark"),
            UT_COLOR_GREEN: "".concat("ut-color", "-green"),
            UT_COLOR_GREEN_DARK: "".concat("ut-color", "-green-dark"),
            UT_COLOR_RED: "".concat("ut-color", "-red"),
            UT_COLOR_RED_DARK: "".concat("ut-color", "-red-dark"),
            UT_COLOR_YELLOW: "".concat("ut-color", "-yellow"),
            UT_COLOR_YELLOW_DARK: "".concat("ut-color", "-yellow-dark"),
            UT_SIZE_SMALL: "".concat("ut-size", "-small"),
            UT_SIZE_MEDIUM: "".concat("ut-size", "-medium"),
            UT_SIZE_MEDIUM_LARGE: "".concat("ut-size", "-medium-large"),
            UT_SIZE_LARGE: "".concat("ut-size", "-large"),
            HIVEBURGER: "hiveburger",
            HIVEBURGER__OPEN: "".concat("hiveburger", "--open"),
            HIVEBURGER_MAIN_MENU: "hiveburger-main-menu",
            HIVEBURGER_MAIN_MENU__CONTAINER: "".concat("hiveburger-main-menu", "__ut-container"),
            HIVEBURGER_MAIN_MENU__UT_LOGO: "".concat("hiveburger-main-menu", "__ut-logo"),
            HIVEBURGER_MAIN_MENU__UT_MENU: "".concat("hiveburger-main-menu", "__ut-menu"),
            HIVEBURGER_MAIN_MENU__CUSTOM_MENU: "".concat("hiveburger-main-menu", "__custom-menu"),
            HIVEBURGER_MAIN_MENU__OPEN: "".concat("hiveburger-main-menu", "--open"),
            SLIDE_IN: "slide-in",
            SLIDE_OUT: "slide-out",
            HIVEBURGER_UTAH_MENU_BACKGROUND: "hive-background",
            HIVEBURGER_MAIN_MENU_STICKY: "".concat("hiveburger-main-menu", "--sticky"),
            UT_MENU_ITEM: "ut-menu-item",
            UT_MENU_ITEM__CLOSED: "".concat("ut-menu-item", "--closed"),
            UT_MENU_ITEM__OPEN: "".concat("ut-menu-item", "--open"),
            UT_MENU_ITEM__SELECTED: "".concat("ut-menu-item", "--selected"),
            UT_MENU_ITEM__CHILDREN: "".concat("ut-menu-item", "__children"),
            UT_MENU_ITEM__ICON: "".concat("ut-menu-item", "__icon"),
            UT_MENU_ITEM__TEXT: "".concat("ut-menu-item", "__text"),
            UT_MENU_ITEM__EXTERNAL_LINK_TEXT: "".concat("ut-menu-item", "__ext"),
            UT_ACTION_ITEMS_WRAPPER: "".concat("utah-gov-header", "__action-items-wrapper"),
            UT_ACTION_ITEMS_WRAPPER_VISIBLE: "".concat("utah-gov-header", "__action-items-wrapper--visible"),
            UT_ACTION_ITEMS_MOBILE: "ut-mobile-action-items",
            UT_ACTION_ITEMS_MOBILE_ICON: "".concat("ut-mobile-action-items", "__icon"),
            UT_ACTION_ITEM: "ut-action-item",
            UT_ACTION_ITEM__LINK: "".concat("ut-action-item", "__link"),
            UT_ACTION_ITEM__ICON: "".concat("ut-action-item", "__icon"),
            UT_ACTION_ITEM__TITLE: "".concat("ut-action-item", "__title"),
            UT_ACTION_ITEM_SHOWING: "".concat("ut-action-item", "--showing"),
            UT_ACTION_ITEM_UTAH_ID: "".concat("ut-action-item", "--utah-id"),
            UT_ACTION_ITEM_UTAH_ID_AUTH: "".concat("ut-action-item", "--auth"),
            UT_ACTION_ITEM_UTAH_ID_NOAUTH: "".concat("ut-action-item", "--noauth"),
            UT_POPUP_BACKDROP: "".concat("ut-popup", "__backdrop"),
            UT_POPUP_CLOSE: "".concat("ut-popup", "__backdrop--close"),
            UT_POPUP_WRAPPER: "".concat("ut-popup", "__wrapper"),
            UT_SEARCH: r,
            UT_SEARCH_LABEL: "".concat(r, "__label"),
            UT_SEARCH_INPUT: "".concat(r, "__input"),
            UT_SEARCH_BUTTON: "".concat(r, "__button"),
            UT_SEARCH_CLOSE: "".concat(r, "__close"),
            UT_POPUP_PANEL: "ut-popup-panel",
            UT_POPUP_PANEL_CLOSE: "".concat("ut-popup-panel", "--close"),
            UT_POPUP_PANEL_MENU: "".concat("ut-popup-panel", "__menu"),
            UT_POPUP_PANEL_MENU_GRID: "".concat("ut-popup-panel", "__menu--grid"),
            UT_POPUP_PANEL_MENU_CARD: "".concat("ut-popup-panel", "__menu--card"),
            UT_POPUP_PANEL_CUSTOM_CONTENT: "".concat("ut-popup-panel", "__content")
        }
          , c = {
            BLUE: i.UT_COLOR_BLUE,
            BLUE_DARK: i.UT_COLOR_BLUE_DARK,
            DARK: i.UT_COLOR_DARK,
            DEFAULT: "default",
            GREEN: i.UT_COLOR_GREEN,
            GREEN_DARK: i.UT_COLOR_GREEN_DARK,
            RED: i.UT_COLOR_RED,
            RED_DARK: i.UT_COLOR_RED_DARK,
            YELLOW: i.UT_COLOR_YELLOW,
            YELLOW_DARK: i.UT_COLOR_YELLOW_DARK
        }
          , l = {
            SMALL: i.UT_SIZE_SMALL,
            MEDIUM: i.UT_SIZE_MEDIUM,
            MEDIUM_LARGE: i.UT_SIZE_MEDIUM_LARGE,
            LARGE: i.UT_SIZE_LARGE
        }
          , s = '<span class="utah-gov-logo__vert-line"></span>'
          , u = function() {
            return !!window.document.documentMode
        }
          , _ = {
            NONE: "",
            FUNCTION: "function",
            STRING: "string",
            URL: "url",
            DOMNODE: "domnode"
        };
        function d(e) {
            return function(e) {
                if (Array.isArray(e))
                    return E(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return E(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var m = function(e) {
            var t, n = e.icon, o = e.iconType, r = e.iconWrapper, i = e.cssClasses;
            switch (o) {
            case _.FUNCTION:
                t = n();
                break;
            case _.STRING:
                t = a(n);
                break;
            case _.URL:
                (t = document.createElement("img")).src = n;
                break;
            case _.DOMNODE:
                t = n;
                break;
            default:
                "string" == typeof n ? t = a(n) : "object" === p(n) && n.src ? (t = document.createElement("img")).src = n.src : t = "function" == typeof n ? n() : n
            }
            if (t) {
                var c;
                if (i)
                    (c = r.classList).add.apply(c, d(i));
                r.appendChildAll(t)
            }
        }
          , v = '<div class="utah-gov-header__logo-wrapper"></div>'
          , h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.headerTitle
              , n = e.logo
              , o = e.logoAltText
              , r = e.logoType
              , c = (e.url,
            e.onClick,
            document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_TITLE_INNER_WRAPPER)[0]);
            if (n) {
                var l = document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_WRAPPER)[0];
                if (l && l.parentNode && l.parentNode.removeChild(l),
                l = a(v),
                t ? l.setAttribute("aria-hidden", !0) : l.setAttribute("aria-label", o || t || "logo image"),
                m({
                    icon: n,
                    iconType: r,
                    iconWrapper: l,
                    cssClasses: [i.UTAH_GOV_HEADER_LOGO_WRAPPER]
                }),
                c.appendChild(l),
                u() && l.children.length > 0 && "svg" === l.children[0].tagName.toLowerCase()) {
                    var s = l.children[0]
                      , _ = s.getAttribute("viewBox").split(" ")
                      , d = Number(_[2]) / Number(_[3])
                      , E = s.clientHeight;
                    s.style.width = "".concat(E * d, "px")
                }
            }
        }
          , T = '<div class="utah-gov-header__title-wrapper">\n\t<span class="utah-gov-header__title"></span>\n\t<span class="utah-gov-header__short-title" aria-hidden="true"></span>\n</div>'
          , f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.title
              , n = e.shortTitle
              , o = (e.headerLogo,
            e.headerTitleURL,
            e.onClick,
            document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_TITLE_INNER_WRAPPER)[0]);
            if (t) {
                var r = document.getElementsByClassName(i.UTAH_GOV_HEADER_TITLE_WRAPPER)[0];
                r && r.parentNode && r.parentNode.removeChild(r);
                var c = (r = a(T)).getElementsByClassName(i.UTAH_GOV_HEADER_TITLE)[0]
                  , l = r.getElementsByClassName(i.UTAH_GOV_HEADER_SHORT_TITLE)[0];
                c.appendChild(document.createTextNode(t)),
                l.appendChild(document.createTextNode(n || t)),
                o.appendChild(r)
            }
        }
          , g = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.title
              , n = e.shortTitle
              , o = e.logo
              , a = e.logoAltText
              , r = e.logoType
              , c = e.url
              , l = e.onClick
              , s = function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                l(e)
            }
              , u = document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_TITLE_WRAPPER)[0]
              , _ = document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_TITLE_INNER_WRAPPER);
            if ((_ = _ ? _[0] : null) && u.removeChild(_),
            t || o) {
                var d = c || l ? "a" : "div";
                (_ = document.createElement(d)).classList.add(i.UTAH_GOV_HEADER_LOGO_TITLE_INNER_WRAPPER),
                u.appendChild(_),
                (c || l) && (l ? (_.addEventListener("click", s),
                _.setAttribute("href", "#")) : c && _.setAttribute("href", c)),
                o && t && _.classList.add(i.UTAH_GOV_HEADER_LOGO_AND_TITLE),
                h({
                    headerTitle: t,
                    logo: o,
                    logoAltText: a,
                    logoType: r,
                    url: c,
                    onClick: l
                }),
                f({
                    title: t,
                    shortTitle: n,
                    headerLogo: o,
                    headerTitleURL: c,
                    onClick: l
                })
            }
        }
          , U = {
            NONE: "none",
            PROD: "a1",
            AT: "a2",
            DEV: "a3",
            CUSTOM: "custom"
        };
        function I(e) {
            var t = e.domain
              , n = e.path
              , o = e.params
              , a = e.env
              , r = (o = (o || []).filter((function(e) {
                return e
            }
            ))) && o.length
              , i = "";
            r && a && a !== U.PROD && a !== U.CUSTOM ? i = "&".concat(O.UTAH_ID_ENV_PARAM(a)) : a && a !== U.PROD && a !== U.CUSTOM && (i = "?".concat(O.UTAH_ID_ENV_PARAM(a)));
            var c = "";
            return r && (c = "?".concat(o.join("&"))),
            "".concat(t).concat(n).concat(c).concat(i)
        }
        var O = {
            UTAH_ID: "https://id.utah.gov",
            UTAH_ID_TEST: "https://id.at.utah.gov",
            UTAH_ID_DEV: "https://id.dev.utah.gov",
            UTAH_ID_USER_INFO: "/api/userInfo",
            UTAH_ID_LOGIN: "/login",
            UTAH_ID_LOGOUT: "/logout",
            UTAH_ID_GOTO_PARAM: function(e) {
                return "goto=".concat(encodeURIComponent(e))
            },
            UTAH_ID_ENV_PARAM: function(e) {
                return e ? "e=".concat(e) : ""
            }
        }
          , A = O
          , N = {
            utahIdURL: A.UTAH_ID,
            utahIdURLs: null,
            environment: U.PROD,
            utahIdParams: [],
            actionItems: {},
            currentConfig: {}
        }
          , L = JSON.parse(JSON.stringify(N));
        function C() {
            var e = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0]
              , t = document.getElementsByClassName(i.HIVEBURGER)[0];
            t.classList.remove(i.HIVEBURGER__OPEN),
            t.setAttribute("aria-label", "Open Utah.gov menu"),
            e.classList.remove(i.SLIDE_IN),
            e.classList.add(i.SLIDE_OUT);
            var n = setTimeout((function() {
                e.classList.remove(i.HIVEBURGER_MAIN_MENU__OPEN, i.SLIDE_OUT),
                clearTimeout(n)
            }
            ), 400)
        }
        var y = function(e) {
            var t = e.parent
              , n = e.ele
              , o = t.offsetTop + t.offsetHeight
              , a = t.offsetLeft + (t.offsetWidth - n.offsetWidth) / 2;
            a + n.offsetWidth > document.body.scrollWidth ? a = document.body.scrollWidth - n.offsetWidth : a < 0 && (a = 0),
            n.style.top = "".concat(o, "px"),
            n.style.left = "".concat(a, "px")
        }
          , R = '<div class="ut-popup-panel inner-shadow-top"></div>'
          , M = function() {
            var e = document.getElementsByClassName(i.UT_POPUP_PANEL);
            Array.prototype.forEach.call(e, (function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
            ))
        };
        function b(e) {
            var t = !1;
            if (null != e) {
                var n = e.querySelector("." + i.UT_POPUP_PANEL + ":not(." + i.UT_POPUP_PANEL_CLOSE + ")");
                t = null != n
            }
            return t
        }
        function P() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.parent
              , n = e.posInParent
              , o = void 0 === n || n
              , r = e.posTop
              , i = e.posLeft
              , c = e.headerStyle
              , l = e.content;
            if (null != t) {
                M();
                var s = a(R);
                c && s.classList.add(c),
                s.appendChild(l),
                o ? t.appendChild(s) : document.body.appendChild(s),
                r && i ? (s.style.top = "".concat(r, "px"),
                s.style.left = "".concat(i, "px")) : y({
                    parent: t,
                    ele: s
                }),
                o ? t.addEventListener("mouseleave", (function(e) {
                    H(t)
                }
                )) : s.addEventListener("mouseleave", (function(e) {
                    H(t)
                }
                ))
            }
        }
        function H(e) {
            if (null != e) {
                var t = e.querySelector("." + i.UT_POPUP_PANEL + ":not(." + i.UT_POPUP_PANEL_CLOSE + ")");
                if (t) {
                    t.classList.add(i.UT_POPUP_PANEL_CLOSE);
                    var n = setTimeout((function() {
                        t.parentNode && t.parentNode.removeChild(t),
                        clearTimeout(n)
                    }
                    ), 400)
                }
            }
        }
        var w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.parent
              , n = e.posInParent
              , o = void 0 === n || n
              , a = e.posTop
              , r = e.posLeft
              , i = e.headerStyle
              , c = e.content
              , l = e.stayOpen
              , s = b(t);
            !l && s ? H(t) : s || P({
                parent: t,
                posInParent: o,
                posTop: a,
                posLeft: r,
                headerStyle: i,
                content: c
            })
        };
        function S(e) {
            var t = function(e) {
                var t = {
                    className: null,
                    element: null
                }
                  , n = e.closest(".".concat(i.HIVEBURGER_MAIN_MENU))
                  , o = e.closest(".".concat(i.UT_ACTION_ITEM))
                  , a = e.closest("body");
                return n ? (t.className = i.HIVEBURGER_MAIN_MENU,
                t.element = n) : o ? (t.className = i.UT_ACTION_ITEM,
                t.element = o) : a && (console.warn("menuParent: No parent found for menu / menu item"),
                t.className = "body",
                t.element = a),
                t
            }(e);
            t.className === i.HIVEBURGER_MAIN_MENU ? C() : t.className === i.UT_ACTION_ITEM ? H(t.element) : "body" === t.className && console.error("closeMenuItemParent: Parent not found for this menu item.", e)
        }
        function D(e) {
            var t = e.children
              , n = e.onClick
              , o = e.icon
              , r = e.iconType
              , c = e.open
              , l = e.openInNewTab
              , s = e.selected
              , u = e.text
              , _ = e.url
              , d = a('<li><a href="" class="ut-menu-item"></a></li>')
              , E = d.getElementsByTagName("a")[0];
            function p(e, t) {
                t ? (e.classList.add(i.UT_MENU_ITEM__OPEN),
                e.classList.remove(i.UT_MENU_ITEM__CLOSED)) : (e.classList.remove(i.UT_MENU_ITEM__OPEN),
                e.classList.add(i.UT_MENU_ITEM__CLOSED))
            }
            if (o) {
                var v = document.createElement("div");
                v.classList.add(i.UT_MENU_ITEM__ICON),
                m({
                    icon: o,
                    iconType: r,
                    iconWrapper: v,
                    cssClasses: ["svg"]
                }),
                E.appendChild(v)
            }
            var h = document.createElement("span");
            if (h.classList.add(i.UT_MENU_ITEM__TEXT),
            h.appendChild(document.createTextNode(u)),
            E.appendChild(h),
            E.setAttribute("href", _ || "#"),
            l) {
                E.setAttribute("target", "_blank");
                var T = a('<span class="ut-menu-item__ext">\n\t<span class="visually-hidden">(opens in new window)</span>\n\t<svg class="external-link-icon svg" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">\n\t\t<polyline class="ext__line" points="8.5 5.05 8.5 8.5 0.5 8.5 0.5 0.5 3.93 0.5"/>\n\t\t<line class="ext__line" x1="8.24" y1="0.76" x2="4.76" y2="4.24"/>\n\t\t<polyline class="ext__line" points="8.5 3.55 8.5 0.5 5.45 0.5"/>\n\t</svg>\n</span>');
                h.appendChild(T)
            }
            if (n ? E.addEventListener("click", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                S(E),
                n(e)
            }
            )) : E.addEventListener("click", (function(e) {
                e.stopPropagation(),
                (!t || t.length <= 0) && S(E)
            }
            )),
            t && t.length > 0) {
                d.classList.add(i.UT_MENU_ITEM__CHILDREN);
                var f = document.createElement("ul");
                t.forEach((function(e) {
                    f.appendChild(D(e))
                }
                )),
                d.appendChild(f),
                E.appendChild(a('<svg class="plus-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">\n\t<rect class="plus-icon__vert" x="5" width="1" height="11"/>\n\t<rect class="plus-icon__horiz" x="5" width="1" height="11" transform="translate(0 11) rotate(-90)"/>\n</svg>,')),
                E.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    p(d, !d.classList.contains(i.UT_MENU_ITEM__OPEN))
                }
                )),
                p(d, c)
            } else
                s && E.appendChild(a('<svg class="arrow-icon svg" viewBox="0 0 6.72 12.02" xmlns="http://www.w3.org/2000/svg">\n\t<polygon points="0.71 12.02 0 11.31 5.3 6.01 0 0.71 0.71 0 6.72 6.01 0.71 12.02"/>\n</svg>'));
            return s ? d.classList.add(i.UT_MENU_ITEM__SELECTED) : d.classList.remove(i.UT_MENU_ITEM__SELECTED),
            d
        }
        var B = '<ul role="navigation" class="ut-popup-panel__menu"></ul>'
          , G = function(e) {
            e.preventDefault()
        };
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach((function(t) {
                    k(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function k(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function j(e) {
            return function(e) {
                if (Array.isArray(e))
                    return W(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return W(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return W(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function W(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        var K = function(e) {
            var t, n = e.icon, o = e.iconType, r = e.title, c = e.showTitle, l = e.className, s = e.onClick, u = e.onHover, _ = e.menu, d = e.menuStyle, E = e.popupContent, p = e.headerStyle, v = a('<div class="ut-action-item">\n\t<a href="#"  class="ut-action-item__link">\n\t\t<div class="ut-action-item__icon" aria-hidden="true"></div>\n\t\t<div class="ut-action-item__title"></div>\n\t</a>\n</div>\n');
            l && (t = v.classList).add.apply(t, j(l.split(" ")));
            c && v.classList.add(i.UT_ACTION_ITEM_SHOWING);
            var h = v.getElementsByClassName(i.UT_ACTION_ITEM__ICON)[0];
            n ? m({
                icon: n,
                iconType: o,
                iconWrapper: h,
                cssClasses: ["svg"]
            }) : h.parentNode.removeChild(h),
            v.getElementsByClassName(i.UT_ACTION_ITEM__TITLE)[0].appendChild(document.createTextNode(!1 === c ? "" : r)),
            v.setAttribute("aria-label", r);
            var T = v.getElementsByClassName(i.UT_ACTION_ITEM__LINK)[0];
            if (s ? T.addEventListener("click", (function(e) {
                return G(e) || s(e)
            }
            )) : T.addEventListener("click", G, !1),
            u)
                T.addEventListener("click", (function(e) {
                    return G(e) || u(e)
                }
                )),
                T.addEventListener("mouseenter", u);
            else if (_) {
                var f = a(B);
                d && f.classList.add(d),
                _.forEach((function(e) {
                    f.appendChild(D(e))
                }
                ));
                var g = {
                    parent: v,
                    content: f,
                    headerStyle: p
                };
                T.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    w(g)
                }
                )),
                T.addEventListener("mouseenter", (function(e) {
                    w(V(V({}, g), {}, {
                        stayOpen: !0
                    }))
                }
                ))
            } else if (E) {
                var U = document.createElement("div");
                U.classList.add(i.UT_POPUP_PANEL_CUSTOM_CONTENT),
                U.appendChildAll(E);
                var I = {
                    parent: v,
                    content: U,
                    headerStyle: p
                };
                T.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    w(I)
                }
                )),
                T.addEventListener("mouseenter", (function(e) {
                    w(V(V({}, I), {}, {
                        stayOpen: !0
                    }))
                }
                ))
            }
            return v
        }
          , z = '<svg class="utah-id-logo svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n\t<path class="svg__fill" d="M19.93,28.11c0,.55-1,1-1.88,1s-2-.46-2-1L17,22.73a1.81,1.81,0,1,1,2.51-.48,1.43,1.43,0,0,1-.39.42Z"/>\n\t<path class="svg__line" d="M9.42,34a.83.83,0,0,1-.83-.82V10.51a.83.83,0,0,1,.83-.82H19a.82.82,0,0,1,.82.82v3.34a.83.83,0,0,0,.81.82h5.91a.83.83,0,0,1,.83.83V33.2a.81.81,0,0,1-.83.8Z"/>\n\t<path class="svg__line" d="M24.65,12.22V8.72A6.72,6.72,0,0,0,11.38,7.21"/>\n</svg>'
          , Z = {
            SIGN_IN: "Sign In",
            SIGN_OUT: "Sign Out",
            HELLO: "Hello, "
        };
        function Y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(n), !0).forEach((function(t) {
                    q(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function q(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var X, J = function() {
            var e = {
                env: L.environment,
                params: [].concat([A.UTAH_ID_GOTO_PARAM(window.location.href)], L.utahIdParams)
            }
              , t = [{
                text: "UtahID Profile",
                url: I({
                    domain: L.utahIdURL,
                    path: "",
                    env: L.environment,
                    params: [].concat(L.utahIdParams)
                }),
                openInNewTab: !0
            }, {
                text: "Sign Out",
                url: L.utahIdURLs && L.utahIdURLs.signout ? I(F({
                    domain: L.utahIdURLs.signout,
                    path: ""
                }, e)) : I(F({
                    domain: L.utahIdURL,
                    path: A.UTAH_ID_LOGOUT
                }, e))
            }]
              , n = a(B);
            return t.forEach((function(e) {
                n.appendChild(D(e))
            }
            )),
            n
        }, $ = function(e) {
            var t = e.actionItem
              , n = e.title;
            (t instanceof HTMLElement ? t : document.getElementsByClassName(t)[0]).getElementsByClassName(i.UT_ACTION_ITEM__TITLE)[0].childNodes[0].nodeValue = n
        }, Q = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.url
              , n = e.method
              , o = e.headers
              , a = e.timeout
              , r = e.onResolve
              , i = e.onReject
              , c = new XMLHttpRequest;
            c.addEventListener("load", (function(e) {
                return r(e.target)
            }
            )),
            c.addEventListener("error", (function(e) {
                return i(e.target)
            }
            )),
            c.addEventListener("timeout", (function(e) {
                return i(e.target)
            }
            )),
            c.open(n || "GET", t, !0),
            c.withCredentials = !0,
            a && (c.timeout = a),
            o && Object.keys(o).forEach((function(e) {
                return c.setRequestHeader(e, o[e])
            }
            )),
            c.send()
        };
        function ee(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function te(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ee(Object(n), !0).forEach((function(t) {
                    ne(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ne(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function oe(e) {
            e.preventDefault(),
            e.stopPropagation(),
            X && X()
        }
        function ae() {
            X = null
        }
        function re(e) {
            var t = document.getElementsByClassName(i.UT_ACTION_ITEM_UTAH_ID)[0];
            if (t) {
                if (t.removeEventListener("click", G, !1),
                e || X)
                    X || (X = e),
                    t.href = "#",
                    t.addEventListener("click", oe);
                else {
                    var n = {
                        env: L.environment,
                        params: [].concat([A.UTAH_ID_GOTO_PARAM(window.location.href)], L.utahIdParams)
                    };
                    t.href = L.utahIdURLs && L.utahIdURLs.signin ? I(te({
                        domain: L.utahIdURLs.signin,
                        path: ""
                    }, n)) : I(te({
                        domain: L.utahIdURL,
                        path: A.UTAH_ID_LOGIN
                    }, n)),
                    t.addEventListener("click", (function() {
                        return window.location = t.href
                    }
                    ))
                }
                t.classList.add(i.UT_ACTION_ITEM_UTAH_ID_NOAUTH),
                t.classList.remove(i.UT_ACTION_ITEM_UTAH_ID_AUTH),
                $({
                    actionItem: t,
                    title: Z.SIGN_IN
                })
            }
        }
        function ie(e) {
            var t = document.getElementsByClassName(i.UT_ACTION_ITEM_UTAH_ID)[0];
            t && (t.href = "#",
            t.classList.remove(i.UT_ACTION_ITEM_UTAH_ID_NOAUTH),
            t.classList.add(i.UT_ACTION_ITEM_UTAH_ID_AUTH),
            t.removeEventListener("click", oe),
            t.addEventListener("click", G, !1),
            $({
                actionItem: t,
                title: "".concat(Z.HELLO).concat(e.first)
            }))
        }
        function ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.authCallback
              , n = void 0 === t ? void 0 : t;
            function o(e, t) {
                if (L.auth !== e) {
                    L.auth = e,
                    n && n(t);
                    var o = document.createEvent("CustomEvent");
                    o.initEvent("ugovAuthChanged", !0, !0),
                    o.userInfo = t,
                    document.dispatchEvent(o)
                }
            }
            Q({
                url: I({
                    domain: L.utahIdURL,
                    path: A.UTAH_ID_USER_INFO,
                    env: L.environment,
                    params: L.utahIdParams
                }),
                method: "GET",
                timeout: 1e4,
                onResolve: function(e) {
                    if (200 === e.status) {
                        var t = JSON.parse(e.response);
                        t = t.data,
                        L.userInfo = t,
                        t.urls ? L.utahIdURLs = t.urls : L.utahIdURLs = N.utahIdURLs,
                        t.authenticated ? (ie(t),
                        o(!0, t)) : (re(),
                        o(!1, t))
                    }
                },
                onReject: function(e) {
                    console.log("Error in xhr request", e),
                    L.userInfo = {
                        authenticated: !1
                    },
                    re(),
                    o(!1, e)
                }
            })
        }
        function le() {
            return L.userInfo ? L.userInfo : {
                authenticated: !1
            }
        }
        var se = function(e) {
            var t = e.profileURL
              , n = e.signOutCallback
              , o = [];
            t && o.push({
                text: "UtahID Profile",
                url: t,
                openInNewTab: !0
            }),
            o.push({
                text: "Sign Out",
                url: "#",
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    n ? (n(),
                    M()) : console.warn("You must provide a onUserClickedSignOut function!")
                }
            });
            var r = a(B);
            return o.forEach((function(e) {
                r.appendChild(D(e))
            }
            )),
            r
        }
          , ue = '<svg class="app-grid-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n\t<circle class="svg__fill" cx="18" cy="18" r="2.25"/>\n\t<circle class="svg__fill" cx="9" cy="18" r="2.25"/>\n\t<circle class="svg__fill" cx="27" cy="18" r="2.25"/>\n\t<circle class="svg__fill" cx="18" cy="9" r="2.25"/>\n\t<circle class="svg__fill" cx="27" cy="9" r="2.25"/>\n\t<circle class="svg__fill" cx="9" cy="9" r="2.25"/>\n\t<circle class="svg__fill" cx="18" cy="27" r="2.25"/>\n\t<circle class="svg__fill" cx="27" cy="27" r="2.25"/>\n\t<circle class="svg__fill" cx="9" cy="27" r="2.25"/>\n</svg>'
          , _e = '<svg class="question-icon svg"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><circle class="svg__line" cx="18" cy="18" r="13.5"/><path class="svg__line" d="M13.648,12.874a4.507,4.507,0,0,1,8.369-.725c2.1,4.519-4.152,6.9-4.152,6.9l-.019,3.992"/><line class="svg__line" x1="17.846" y1="25.397" x2="17.846" y2="27.085"/></svg>'
          , de = '<svg class="gear-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n\t<path class="svg__line" d="M18,34a16.06,16.06,0,0,0,3.39-.36V29.71l.66-.24a12.41,12.41,0,0,0,3.86-2.22l.53-.46.61.35,2.8,1.62a16.09,16.09,0,0,0,3.39-5.87l-2.81-1.62-.61-.36.13-.69a12.32,12.32,0,0,0,0-4.45l-.13-.7.61-.35,2.8-1.62a16.14,16.14,0,0,0-3.39-5.86L27.05,8.85l-.62.36-.53-.47a12.06,12.06,0,0,0-3.85-2.22l-.67-.23V2.36A16.06,16.06,0,0,0,18,2a15.9,15.9,0,0,0-3.38.36V6.29l-.67.24a12.25,12.25,0,0,0-3.85,2.22l-.54.46-.61-.35L6.15,7.24a16.09,16.09,0,0,0-3.39,5.87l2.8,1.62.61.35-.13.7a12.27,12.27,0,0,0,0,4.44l.13.7-.61.35-2.8,1.62a16.18,16.18,0,0,0,3.39,5.87l2.79-1.62.62-.35.54.46a11.73,11.73,0,0,0,3.84,2.22l.67.23v3.94A16.06,16.06,0,0,0,18,34"/>\n\t<circle class="svg__line" cx="18" cy="18" r="5.48"/>\n</svg>'
          , Ee = '<svg class="search-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n\t<path class="svg__line" d="M33.56,29.66l-6.23-6.23A1.5,1.5,0,0,0,26.27,23h-1A13,13,0,1,0,23,25.24v1a1.52,1.52,0,0,0,.44,1.07l6.23,6.23a1.51,1.51,0,0,0,2.12,0h0l1.77-1.77A1.5,1.5,0,0,0,33.56,29.66ZM15,23a8,8,0,1,1,8-8h0A8,8,0,0,1,15,23Z"/>\n</svg>';
        function pe(e) {
            var t = function(e) {
                var t = e.placeholder
                  , n = e.searchCallback
                  , o = a('<div class="ut-popup__backdrop">\n\t<div class="ut-popup__wrapper">\n\t\t<form class="ut-search-form">\n\t\t\t<label for="ut-search-form__input" class="ut-search-form__label visually-hidden">Search</label>\n\t\t\t<input type="text" id="ut-search-form__input" class="ut-search-form__input">\n\t\t\t<button id="ut-search-form__button" class="ut-search-form__button"><span class="visually-hidden">Search</span></button>\n\t\t\t<button id="ut-search-form__close" class="ut-search-form__close"><span class="visually-hidden">Close</span></button>\n\t\t</form>\n\t</div>\n</div>')
                  , r = o.getElementsByClassName(i.UT_SEARCH_BUTTON)[0]
                  , c = o.getElementsByClassName(i.UT_SEARCH_CLOSE)[0]
                  , l = o.getElementsByClassName(i.UT_SEARCH_INPUT)[0];
                return r.appendChild(a(Ee)),
                r.addEventListener("click", (function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    n && n(l.value)
                }
                )),
                c.appendChild(a('<svg class="x-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n\t<line x1="8" y1="8" x2="28" y2="28"/>\n\t<line x1="8" y1="28" x2="28" y2="8"/>\n</svg>')),
                c.addEventListener("click", (function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    me()
                }
                )),
                l.addEventListener("keydown", (function(e) {
                    "Enter" !== e.key && "Return" !== e.key || !n || (e.preventDefault(),
                    e.stopPropagation(),
                    n(l.value))
                }
                )),
                l.placeholder = t,
                o.addEventListener("keydown", (function(e) {
                    "Escape" === e.key && (e.preventDefault(),
                    e.stopPropagation(),
                    me())
                }
                )),
                o.addEventListener("click", (function(e) {
                    e.target === o && (e.stopPropagation(),
                    me())
                }
                )),
                o
            }({
                placeholder: e.placeholder,
                searchCallback: e.searchCallback
            });
            document.body.appendChildAll(t),
            t.getElementsByClassName(i.UT_SEARCH_INPUT)[0].focus()
        }
        function me() {
            var e = document.getElementsByClassName(i.UT_POPUP_BACKDROP)[0];
            e.classList.add(i.UT_POPUP_CLOSE);
            var t = setTimeout((function() {
                e.parentNode && e.parentNode.removeChild(e),
                clearTimeout(t)
            }
            ), 500)
        }
        var ve = null
          , he = null
          , Te = null
          , fe = function() {
            var e = document.getElementsByClassName(i.UTAH_GOV_HEADER)[0];
            return e && e.offsetHeight
        }
          , ge = function(e, t) {
            var n = e.onHeaderResize
              , o = t.onHeaderResize;
            !he || n && o === n || (window.removeEventListener("resize", he),
            he = null),
            !he && n && window.addEventListener("resize", he = function(e) {
                return function() {
                    ve && (clearTimeout(ve),
                    ve = null),
                    ve = setTimeout((function() {
                        var t = fe();
                        t && Te && t !== Te && e(t),
                        Te = t
                    }
                    ), 250)
                }
            }(n)),
            Te = fe()
        }
          , Ue = function(e) {
            var t = document.getElementsByClassName(i.UT_ACTION_ITEMS_MOBILE)[0];
            if (e && !t) {
                var n = (t = a('<a href="#" class="ut-mobile-action-items" aria-label="Show Action Items">\n    <div class="ut-mobile-action-items__icon" aria-hidden="true"></div>\n</a>\n')).getElementsByClassName(i.UT_ACTION_ITEMS_MOBILE_ICON)[0]
                  , o = document.getElementsByClassName(i.UT_ACTION_ITEMS_WRAPPER)[0]
                  , r = document.getElementsByClassName(i.UTAH_GOV_HEADER)[0];
                n.appendChildAll(a('<svg class="three-dots-icon svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">\n    <circle class="svg__fill" cx="18" cy="18" r="2.25"/>\n    <circle class="svg__fill" cx="18" cy="9" r="2.25"/>\n    <circle class="svg__fill" cx="18" cy="27" r="2.25"/>\n</svg>')),
                t.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    document.getElementsByClassName(i.UT_ACTION_ITEMS_WRAPPER)[0].classList.contains(i.UT_ACTION_ITEMS_WRAPPER_VISIBLE) ? Oe() : (Ie(),
                    C())
                }
                )),
                r.insertBefore(t, o),
                document.addEventListener("click", (function(e) {
                    !!!e.target.closest("." + i.UT_ACTION_ITEMS_WRAPPER) && n.isVisible() && Oe()
                }
                ))
            }
        }
          , Ie = function() {
            document.getElementsByClassName(i.UT_ACTION_ITEMS_WRAPPER)[0].classList.add(i.UT_ACTION_ITEMS_WRAPPER_VISIBLE)
        }
          , Oe = function() {
            document.getElementsByClassName(i.UT_ACTION_ITEMS_WRAPPER)[0].classList.remove(i.UT_ACTION_ITEMS_WRAPPER_VISIBLE)
        };
        function Ae(e) {
            return (Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ne(e) {
            var t = e.headerStyle
              , n = e.headerSize
              , o = e.headerTitle
              , r = e.headerShortTitle
              , u = e.headerLogo
              , _ = e.headerLogoAltText
              , d = e.headerLogoType
              , E = e.headerTitleURL
              , p = e.headerTitleOnClick
              , m = e.utahId
              , v = e.utahIdCustom
              , h = e.appGridIcon
              , T = e.gearIcon
              , f = e.questionIcon
              , U = e.search
              , I = e.modifierClasses
              , O = e.onHeaderResize
              , A = L.currentConfig;
            L.currentConfig = arguments[0];
            var C = document.getElementsByClassName(i.UTAH_GOV_HEADER)[0]
              , y = document.getElementsByClassName(i.UT_ACTION_ITEMS_WRAPPER)[0]
              , R = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0]
              , M = document.getElementsByClassName(i.UTAH_GOV_HEADER_LOGO_TITLE_WRAPPER)[0]
              , b = !1;
            if (C) {
                Object.keys(c).forEach((function(e) {
                    C.classList.remove(c[e]),
                    R.classList.remove(c[e])
                }
                )),
                Object.keys(l).forEach((function(e) {
                    C.classList.remove(l[e]),
                    R.classList.remove(l[e])
                }
                )),
                t && t !== c.DEFAULT && (C.classList.add(t),
                R.classList.add(t)),
                n ? (C.classList.add(n),
                R.classList.add(n)) : (C.classList.add(i.UT_SIZE_SMALL),
                R.classList.add(i.UT_SIZE_SMALL));
                var P = A && A.modifierClasses || []
                  , H = I || [];
                if (P.filter((function(e) {
                    return !H.indexOf(e) >= 0
                }
                )).forEach((function(e) {
                    return C.classList.remove("".concat(i.UTAH_GOV_HEADER, "--").concat(e))
                }
                )),
                H.filter((function(e) {
                    return !P.indexOf(e) >= 0
                }
                )).forEach((function(e) {
                    return C.classList.add("".concat(i.UTAH_GOV_HEADER, "--").concat(e))
                }
                )),
                I && I.indexOf("sticky") >= 0) {
                    var S = document.getElementsByClassName(i.UTAH_GOV_HEADER_STICKY_PLACEHOLDER)[0];
                    S || (S = document.createElement("div")).classList.add(i.UTAH_GOV_HEADER_STICKY_PLACEHOLDER),
                    Object.keys(l).forEach((function(e) {
                        S.classList.remove(l[e])
                    }
                    )),
                    n && S.classList.add(n),
                    document.body.insertBefore(S, C),
                    R.classList.add(i.HIVEBURGER_MAIN_MENU_STICKY)
                } else {
                    var D = document.getElementsByClassName(i.UTAH_GOV_HEADER_STICKY_PLACEHOLDER);
                    D && D[0] && D[0].remove(),
                    R.classList.remove(i.HIVEBURGER_MAIN_MENU_STICKY)
                }
                var B = document.getElementsByClassName(i.UTAH_GOV_HEADER_VERT_LINE)[0];
                u || o ? B || C.insertBefore(a(s), M) : B && B.remove(),
                g({
                    title: o,
                    shortTitle: r,
                    logo: u,
                    logoAltText: _,
                    logoType: d,
                    url: E,
                    onClick: p
                });
                var G = C.getElementsByClassName(i.UT_ACTION_ITEM)
                  , x = Array.prototype.slice.call(G, 0);
                if (x.forEach((function(e) {
                    return e.parentNode.removeChild(e)
                }
                )),
                m) {
                    b = !0,
                    "object" === Ae(m) && (m.environment ? L.environment = m.environment : L.environment = N.environment,
                    m.customURL ? L.utahIdURL = m.customURL : L.utahIdURL = N.utahIdURL,
                    m.customParams ? L.utahIdParams = m.customParams : L.utahIdParams = N.customParams),
                    y.appendChildAll(K({
                        icon: a(z),
                        title: Z.SIGN_IN,
                        className: i.UT_ACTION_ITEM_UTAH_ID,
                        showTitle: !0,
                        onHover: function(e) {
                            var n = document.getElementsByClassName(i.UT_ACTION_ITEM_UTAH_ID)[0];
                            n.classList.contains(i.UT_ACTION_ITEM_UTAH_ID_AUTH) && (e.preventDefault(),
                            e.stopPropagation(),
                            w({
                                parent: n,
                                content: J(),
                                headerStyle: t,
                                stayOpen: !0
                            }))
                        }
                    }));
                    var V = m.authCallback ? m.authCallback : void 0;
                    L.windowFocusListener || (window.addEventListener("focus", (function(e) {
                        ce({
                            authCallback: V
                        })
                    }
                    )),
                    L.windowFocusListener = !0),
                    ce({
                        authCallback: V
                    })
                }
                for (var k in !m && v && (b = !0,
                y.appendChildAll(K({
                    icon: a(z),
                    title: Z.SIGN_IN,
                    className: i.UT_ACTION_ITEM_UTAH_ID,
                    showTitle: !0,
                    onHover: function(e) {
                        var n = document.getElementsByClassName(i.UT_ACTION_ITEM_UTAH_ID)[0];
                        n.classList.contains(i.UT_ACTION_ITEM_UTAH_ID_AUTH) && (e.preventDefault(),
                        e.stopPropagation(),
                        w({
                            parent: n,
                            content: se({
                                profileURL: v.profileURL,
                                signOutCallback: v.onUserClickedSignOut
                            }),
                            headerStyle: t,
                            stayOpen: !0
                        }))
                    }
                })),
                re(v.onUserClickedSignIn)),
                !m && v && v.onUserClickedSignIn || ae(),
                h && (b = !0,
                y.appendChildAll(K({
                    icon: a(ue),
                    title: h.title ? h.title : "Apps",
                    menu: h.menu,
                    menuStyle: h.menuStyle,
                    headerStyle: t,
                    onClick: h.onClick,
                    onHover: h.onHover,
                    popupContent: h.popupContent,
                    showTitle: h.showTitle
                }))),
                f && (b = !0,
                y.appendChildAll(K({
                    icon: a(_e),
                    title: f.title ? f.title : "Help",
                    menu: f.menu,
                    menuStyle: f.menuStyle,
                    headerStyle: t,
                    onClick: f.onClick,
                    onHover: f.onHover,
                    popupContent: f.popupContent,
                    showTitle: f.showTitle
                }))),
                T && (b = !0,
                y.appendChildAll(K({
                    icon: a(de),
                    title: T.title ? T.title : "Settings",
                    menu: T.menu,
                    menuStyle: T.menuStyle,
                    headerStyle: t,
                    onClick: T.onClick,
                    onHover: T.onHover,
                    popupContent: T.popupContent,
                    showTitle: T.showTitle
                }))),
                L.actionItems) {
                    var j = L.actionItems[k];
                    b = !0,
                    y.appendChildAll(K({
                        className: j.className,
                        iconType: j.iconType,
                        icon: j.icon,
                        title: j.title,
                        menu: j.menu,
                        menuStyle: j.menuStyle,
                        headerStyle: t,
                        onClick: j.onClick,
                        onHover: j.onHover,
                        popupContent: j.popupContent,
                        showTitle: j.showTitle
                    }))
                }
                U && (b = !0,
                y.appendChildAll(K({
                    icon: a(Ee),
                    showTitle: U.showTitle,
                    title: U.title ? U.title : "Search",
                    onClick: function(e) {
                        U.onClick ? U.onClick(e) : (e.preventDefault(),
                        e.stopPropagation(),
                        pe({
                            placeholder: U.placeholder ? U.placeholder : "Search",
                            searchCallback: function(e) {
                                U && U.searchCallback ? U.searchCallback(e) : console.warn("Search config given, but no searchCallback function provided: ".concat(e)),
                                me()
                            }
                        }))
                    }
                }))),
                Ue(b),
                ge({
                    onHeaderResize: O
                }, A)
            } else
                window.addEventListener("ugovHeaderLoaded", (function() {
                    Ne(L.currentConfig)
                }
                ))
        }
        function Le() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = Object.assign({}, L.currentConfig, e);
            Ne(t)
        }
        function Ce() {
            return L.currentConfig
        }
        var ye = {
            DEFAULT: "",
            GRID: i.UT_POPUP_PANEL_MENU_GRID,
            CARD: i.UT_POPUP_PANEL_MENU_CARD
        };
        function Re() {
            var e = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0]
              , t = document.getElementsByClassName(i.HIVEBURGER)[0];
            t.classList.add(i.HIVEBURGER__OPEN),
            t.setAttribute("aria-label", "Close Utah.gov menu"),
            e.classList.remove(i.SLIDE_OUT),
            e.classList.add(i.HIVEBURGER_MAIN_MENU__OPEN, i.SLIDE_IN);
            var n = setTimeout((function() {
                var t = e.querySelector("." + i.HIVEBURGER_MAIN_MENU__CUSTOM_MENU + " ." + i.UT_MENU_ITEM);
                t || (t = e.querySelector("." + i.UT_MENU_ITEM)),
                t && t.focus(),
                clearTimeout(n)
            }
            ), 100);
            Oe()
        }
        function Me() {
            return L.currentMainMenu
        }
        function be(e) {
            L.currentMainMenu = e;
            var t = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0]
              , n = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU__CUSTOM_MENU);
            if (t) {
                if (Array.prototype.forEach.call(n, (function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                e && e.length > 0) {
                    (n = document.createElement("div")).classList.add(i.HIVEBURGER_MAIN_MENU__CUSTOM_MENU);
                    var o = document.createElement("ul");
                    o.setAttribute("role", "navigation"),
                    n.appendChild(o),
                    t.appendChild(n),
                    e.forEach((function(e) {
                        !function e(t) {
                            var n = t && (t.open || t.selected);
                            return t && t.children && t.children.forEach((function(t) {
                                return n = e(t) || t.open || t.selected || n
                            }
                            )),
                            t.open = n,
                            n
                        }(e),
                        o.appendChild(D(e))
                    }
                    ))
                }
            } else
                window.addEventListener("ugovHeaderLoaded", (function() {
                    be(e)
                }
                ))
        }
        function Pe() {
            document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0].classList.contains(i.HIVEBURGER_MAIN_MENU__OPEN) ? C() : Re()
        }
        function He(e) {
            var t = e.actionItemName
              , n = e.config;
            L.actionItems[t] = n,
            Ne(L.currentConfig)
        }
        function we(e) {
            var t = e.actionItemName;
            delete L.actionItems[t],
            Ne(L.currentConfig)
        }
        var Se = function() {
            return a('<div class="utah-gov-logo" aria-hidden="true">\n<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">\n\t<path class="utah-gov-logo__dot" d="M0 35.5c0-4.8 3.9-8.7 8.7-8.7 4.8 0 8.7 3.9 8.7 8.7 0 4.8-3.9 8.7-8.7 8.7S0 40.3 0 35.5z"/>\n\t<path class="utah-gov-logo__utah" d="M3 12v10.9c0 2.6 1.1 3.9 3.4 3.9 1 0 1.9-0.3 2.7-0.9 0.8-0.6 1.4-1.2 1.6-2v-12h3v17h-3v-2.4c-0.3 0.7-1 1.3-2 1.8 -1 0.6-2 0.8-3 0.8 -1.9 0-3.3-0.5-4.3-1.6S0 24.9 0 22.9V11.7H3L3 12 3 12zM17.2 14.4h-2V12h2V8.4l3-1.2v4.7h4.7v2.4h-4.7v8.5c0 1.4 0.2 2.4 0.7 3.1 0.5 0.6 1.3 0.9 2.3 0.9 0.8 0 1.6-0.2 2.4-0.6l0.4 2.7c-1.3 0.3-2.6 0.5-4.1 0.5 -1.3 0-2.5-0.5-3.4-1.5 -0.9-1-1.4-2.3-1.4-3.8L17.2 14.4 17.2 14.4zM36.8 27.1c-1.2 1.5-3.1 2.3-5.6 2.3 -1.3 0-2.5-0.5-3.5-1.5 -1-1-1.5-2.2-1.5-3.6 0-1.7 0.8-3.2 2.3-4.4 1.5-1.2 3.4-1.8 5.8-1.8 0.6 0 1.4 0.1 2.2 0.4 0-2.8-1.2-4.1-3.7-4.1 -1.9 0-3.3 0.5-4.4 1.5l-1.3-2.5c0.6-0.5 1.4-0.9 2.4-1.2 1-0.3 2-0.5 2.9-0.5 2.5 0 4.3 0.6 5.4 1.7 1.1 1.1 1.7 2.9 1.7 5.4v6.1c0 1.5 0.4 2.5 1.3 3v1.5c-1.2 0-2.2-0.2-2.8-0.5C37.5 28.5 37.1 27.9 36.8 27.1zM36.5 20.7c-1-0.2-1.6-0.3-2-0.3 -1.5 0-2.8 0.4-3.7 1.2 -1 0.8-1.4 1.7-1.4 2.8 0 1.8 1 2.7 3.1 2.7 1.5 0 2.9-0.7 4.1-2.2L36.5 20.7 36.5 20.7zM53 29.1V18.4c0-1.3-0.3-2.3-0.9-3 -0.6-0.7-1.5-1.1-2.6-1.1 -0.7 0-1.5 0.2-2.2 0.6 -0.7 0.4-1.3 0.9-1.7 1.5v12.7h-3v-23l3-1V14c0.4-0.6 1.1-1.1 1.9-1.6 0.9-0.4 1.8-0.6 2.8-0.6 1.8 0 3.2 0.6 4.2 1.8 1 1.2 1.5 2.8 1.5 4.9v10.7L53 29.1 53 29.1z"/>\n\t<path class="utah-gov-logo__gov" d="M16.9 49l1.4-2.1c1.5 1 3 1.5 4.3 1.5 1.2 0 2.1-0.2 2.8-0.6s1-0.9 1-1.5c0-1.2-0.9-1.8-2.6-1.8 -0.3 0-0.8 0.1-1.6 0.2 -0.8 0.1-1.4 0.2-1.8 0.2 -2.1 0-3.2-0.8-3.2-2.4 0-0.5 0.2-0.9 0.7-1.3 0.5-0.4 1.1-0.7 1.8-0.9 -2.1-1-3.1-2.7-3.1-5.1 0-1.6 0.5-2.9 1.6-3.9 1.1-1 2.4-1.6 4-1.6 1.5 0 2.6 0.3 3.4 0.9l1.3-1.6 1.7 1.6L27 31.8c0.7 0.9 1 2 1 3.5 0 1.5-0.5 2.8-1.4 3.8 -0.9 1-2.2 1.6-3.7 1.8l-2.2 0.2c-0.3 0-0.6 0.1-1 0.3 -0.4 0.2-0.7 0.4-0.7 0.7 0 0.4 0.5 0.6 1.4 0.6 0.4 0 1-0.1 1.9-0.2 0.8-0.1 1.5-0.2 1.9-0.2 1.5 0 2.6 0.4 3.4 1.1 0.8 0.7 1.2 1.7 1.2 2.9 0 1.4-0.6 2.5-1.8 3.3 -1.2 0.8-2.8 1.3-4.7 1.3 -1 0-2-0.2-3-0.5C18.4 49.9 17.6 49.5 16.9 49zM22.5 31.8c-0.9 0-1.7 0.3-2.2 1 -0.6 0.6-0.9 1.4-0.9 2.4 0 1 0.3 1.9 0.8 2.6 0.6 0.7 1.3 1 2.3 1 0.9 0 1.7-0.3 2.2-1 0.5-0.7 0.8-1.5 0.8-2.6 0-0.9-0.3-1.7-0.9-2.4C24.1 32.2 23.4 31.8 22.5 31.8zM28.8 37.4c0-2.3 0.6-4.2 1.9-5.6 1.2-1.4 2.9-2.1 4.9-2.1 2.1 0 3.8 0.7 5 2 1.2 1.4 1.8 3.2 1.8 5.7 0 2.4-0.6 4.3-1.8 5.7 -1.2 1.4-2.8 2.1-4.9 2.1 -2.1 0-3.8-0.7-5-2.1C29.4 41.7 28.8 39.8 28.8 37.4zM31.5 37.4c0 3.7 1.3 5.6 4 5.6 1.2 0 2.2-0.5 2.9-1.5s1.1-2.4 1.1-4.1c0-3.7-1.3-5.5-4-5.5 -1.2 0-2.2 0.5-2.9 1.5C31.9 34.3 31.5 35.7 31.5 37.4zM49.5 45.2h-0.7L42.4 30h2.9l3.9 10.4 4-10.4H56L49.5 45.2z"/>\n</svg>\n</div>\n')
        }
          , De = function() {
            var e, t = a('<div class="utah-gov-header ut-size-medium" role="banner" aria-label="Utah.gov Header"></div>\n');
            return t.appendChildAll(((e = a('<button class="hiveburger" id="hiveburger" href="#" aria-label="Open Utah.gov Menu">\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n\t<line class="hiveburger__line" id="line3" x1="22" y1="61.5" x2="73" y2="61.5"/>\n\t<line class="hiveburger__line" id="line3-2" x1="22" y1="49.5" x2="73" y2="49.5"/>\n\t<line class="hiveburger__line" id="line3-1" x1="22" y1="37.5" x2="73" y2="37.5"/>\n\t<line class="hiveburger__line" id="line2" x1="24" y1="49.5" x2="71" y2="49.5"/>\n\t<line class="hiveburger__line" id="line1" x1="30.5" y1="37.5" x2="64.5" y2="37.5"/>\n\t<line class="hiveburger__line" id="lineTop" x1="42" y1="26.5" x2="53" y2="26.5"/>\n\t<line class="hiveburger__line" id="lineBottom1" x1="20" y1="73.5" x2="42" y2="73.5"/>\n\t<line class="hiveburger__line" id="lineBottom2" x1="53" y1="73.5" x2="75" y2="73.5"/>\n\t<line class="hiveburger__line" id="lineX1" x1="29.97" y1="31.97" x2="66.03" y2="68.03"/>\n\t<line class="hiveburger__line" id="lineX2" x1="29.97" y1="68.03" x2="66.03" y2="31.97"/>\n</svg>\n</button>\n')).addEventListener("click", (function(e) {
                var t = document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0];
                e.preventDefault(),
                e.stopPropagation(),
                t.classList.contains(i.HIVEBURGER_MAIN_MENU__OPEN) ? C() : Re()
            }
            )),
            document.addEventListener("click", (function(e) {
                document.getElementsByClassName(i.HIVEBURGER_MAIN_MENU)[0].classList.contains(i.HIVEBURGER_MAIN_MENU__OPEN) && C()
            }
            )),
            e)),
            t.appendChildAll(Se()),
            // t.appendChildAll(a('<div class="utah-gov-header__logo-title-wrapper"></div>')),
            t.appendChildAll(a(`<div class="utah-gov-header__logo-title-wrapper">
                                    <span class="utah-gov-logo__vert-line"></span>
                                    <div class="utah-gov-header__logo-title-wrapper">
                                        <a class="utah-gov-header__logo-title-inner-wrapper" href="https://auditor.utah.gov">
                                            <div class="utah-gov-header__logo-wrapper" aria-label="logo image">
                                                <img src="img/auditor-logo-w-text.svg">
                                            </div>
                                        </a>
                                    </div>
                                </div>`)),
            t.appendChildAll(a('<div class="utah-gov-header__action-items-wrapper"></div>')),
            t
        }
          , Be = [{
            text: "Visit Utah.gov",
            url: "https://www.utah.gov",
            openInNewTab: !0
        }, {
            text: "Services",
            url: "https://www.utah.gov/services/",
            openInNewTab: !0
        }, {
            text: "Agencies",
            url: "https://www.utah.gov/government/agencylist.html",
            openInNewTab: !0
        }, {
            text: "Search Utah.gov",
            url: "#",
            openInNewTab: !0,
            onClick: function() {
                pe({
                    placeholder: "Search Utah.gov",
                    searchCallback: function(e) {
                        var t = e.replace(/ /g, "+");
                        t.length > 0 && (window.open("https://www.utah.gov/search-results.html?q=".concat(t), "_blank"),
                        me())
                    }
                })
            }
        }]
          , Ge = function() {
            var e = a('<div class="hiveburger-main-menu ut-size-medium inner-shadow-top">\n\t<div class="hiveburger-main-menu__ut-menu inner-shadow-top">\n\t\t<div class="hiveburger-main-menu__ut-container">\n\t\t\t<div class="hiveburger-main-menu__ut-logo"></div>\n\t\t\t<ul role="navigation"></ul>\n\t\t</div>\n\t</div>\n</div>')
              , t = e.getElementsByClassName(i.HIVEBURGER_MAIN_MENU__CONTAINER)[0].getElementsByTagName("ul")[0];
            return e.getElementsByClassName(i.HIVEBURGER_MAIN_MENU__UT_LOGO)[0].appendChildAll(Se()),
            e.getElementsByClassName(i.HIVEBURGER_MAIN_MENU__UT_MENU)[0].appendChild(a('<svg class="hive-background svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 400.55">\n\t<path class="hive-background__fill" d="M0,328.39v2.16l21.2-12.24,50.38,7.8,13.5,29.08L48.24,376.46,0,369v1.62L47.51,378,58,400.55h2.8l-10.67-23L87,356.28l50.38,7.8,13.5,29.09L138,400.55h3.76l10.92-6.3,40.75,6.3h14.08L240,381.81v-2.16l-36.06,20.81-50.38-7.79-13.5-29.09,36.83-21.26h0l50.38,7.79L240,377.53v-6.06l-10.11-21.78L240,343.85v-2.16l-12,6.92h0l-50.38-7.8-13.5-29.09L201,290.46l39,6v-1.72l-38.18-5.9-13.5-29.09,36.83-21.26,14.84,2.3v-1.62L225.88,237l-13.5-29.08h0L240,192v-2.17l-29.49,17-50.38-7.79-.07,0-13.48-29,36.88-21.3,50.38,7.8L240,169.77v-6.38L236.58,156l3.42-2v-2.17l-5.3,3.06-50.38-7.79L170.82,118l36.83-21.26h0l32.35,5v-1.63l-31.61-4.89-13.5-29.09,36.82-21.26L240,46.2V44.49l-7.43-1.15-13.5-29.09L240,2.17V0L217.2,13.17l-1.09.62.4.85L230,43.73l-.17.1L193,65.1l-50.38-7.8-1.48-.23-1.08.63L103.19,79l-1.08.63.4.85L116,109.56l-.17.1L79,131l-1.08.63.4.85,13.5,29.09.4.85,1.48.23L144,170.39l13.48,29.1h0l-36.83,21.26-1.08.62.4.86,13.5,29.08-.17.1L96.5,272.68l-50.38-7.8-1.48-.22-1.08.62L6.68,286.57l-1.08.63.4.85,13.5,29.09-.17.1ZM105.06,80.08l36.88-21.3,50.31,7.79,0,0,13.5,29.08L168.94,117l-50.38-7.8Zm-10.74,81L80.82,132l36.88-21.29,50.38,7.79,13.5,29.09L144.7,168.91ZM175,341.23,138.2,362.5l-50.39-7.8-13.5-29.09,36.83-21.26h0l50.38,7.8Zm-52.45-119.4,36.83-21.27,50.38,7.8,13.5,29.08h0l-36.83,21.27-50.38-7.8Zm12.64,30.66,50.38,7.8,13.5,29.08-36.83,21.27-50.38-7.8-13.5-29.08ZM8.56,287.65l36.88-21.29,50.31,7.78,0,0,13.5,29.09L72.44,324.53l-50.38-7.79Z"/>\n</svg>')),
            Be.forEach((function(e) {
                t.appendChild(D(e))
            }
            )),
            e
        }
          , xe = (n(2),
        !1)
          , Ve = (o.a.replace(/\./g, ""),
        Array.prototype.filter.call(document.getElementsByTagName("script"), (function(e) {
            var t = new RegExp("utah_header.js".replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
            return e.getAttribute("src") && e.getAttribute("src").search(t) >= 0
        }
        ))[0])
          , ke = ".".concat(i.UTAH_GOV_HEADER, ", .").concat(i.HIVEBURGER_MAIN_MENU, "{display:none;}")
          , je = document.createElement("style");
        if (je.innerHTML = ke,
        document.head.appendChild(je),
        Ve) {
            Ve = Ve.src.split("utahHeader.bundle.js")[0];
            var We = document.createElement("link");
            We.setAttribute("rel", "stylesheet"),
            We.setAttribute("href", "css/utah_header.css"),
            document.head.appendChild(We)
        } else
            window.process || console.error('Unable to locate the cssFilePath. The HTML may be missing a "script" tag. Please contact the Utah Header developers.');
        function Ke() {
            document.body.firstChild ? document.body.insertBefore(Ge(), document.body.firstChild) : document.body.appendChildAll(Ge());
            var e = De();
            document.body.insertBefore(e, document.body.firstChild),
            xe = !0,
            setTimeout((function() {
                var e = document.createEvent("CustomEvent");
                e.initEvent("ugovHeaderLoaded", !0, !0),
                document.dispatchEvent(e)
            }
            ), 0)
        }
        "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", (function() {
            Ke()
        }
        )) : Ke()
    }
    ])
}
));
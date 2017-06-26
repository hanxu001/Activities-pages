function callback(t) {}! function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return e(t)
    }) : e(t)
}(this, function(t) {
    var e = function() {
        function e(t) {
            return null == t ? String(t) : W[X.call(t)] || "object"
        }

        function n(t) {
            return "function" == e(t)
        }

        function i(t) {
            return null != t && t == t.window
        }

        function r(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function o(t) {
            return "object" == e(t)
        }

        function a(t) {
            return o(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function s(t) {
            var e = !!t && "length" in t && t.length,
                n = j.type(t);
            return "function" != n && !i(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function c(t) {
            return _.call(t, function(t) {
                return null != t
            })
        }

        function u(t) {
            return t.length > 0 ? j.fn.concat.apply([], t) : t
        }

        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function f(t) {
            return t in L ? L[t] : L[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function d(t, e) {
            return "number" != typeof e || M[l(t)] ? e : e + "px"
        }

        function h(t) {
            var e, n;
            return A[t] || (e = O.createElement(t), O.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), A[t] = n), A[t]
        }

        function p(t) {
            return "children" in t ? P.call(t.children) : j.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function m(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || ""
        }

        function v(t, e, n) {
            for (N in e) n && (a(e[N]) || tt(e[N])) ? (a(e[N]) && !a(t[N]) && (t[N] = {}), tt(e[N]) && !tt(t[N]) && (t[N] = []), v(t[N], e[N], n)) : e[N] !== T && (t[N] = e[N])
        }

        function g(t, e) {
            return null == e ? j(t) : j(t).filter(e)
        }

        function y(t, e, i, r) {
            return n(e) ? e.call(t, i, r) : e
        }

        function b(t, e, n) { null == n ? t.removeAttribute(e) : t.setAttribute(e, n) }

        function w(t, e) {
            var n = t.className || "",
                i = n && n.baseVal !== T;
            return e === T ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
        }

        function x(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function E(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) E(t.childNodes[n], e)
        }
        var T, N, j, $, C, k, I = [],
            S = I.concat,
            _ = I.filter,
            P = I.slice,
            O = t.document,
            A = {},
            L = {},
            M = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
            R = /^\s*<(\w+|!)[^>]*>/,
            D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            H = /^(?:body|html)$/i,
            Z = /([A-Z])/g,
            F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            z = ["after", "prepend", "before", "append"],
            B = O.createElement("table"),
            U = O.createElement("tr"),
            K = { tr: O.createElement("tbody"), tbody: B, thead: B, tfoot: B, td: U, th: U, "*": O.createElement("div") },
            V = /complete|loaded|interactive/,
            G = /^[\w-]*$/,
            W = {},
            X = W.toString,
            J = {},
            Q = O.createElement("div"),
            Y = { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            tt = Array.isArray || function(t) {
                return t instanceof Array
            };
        return J.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode,
                o = !r;
            return o && (r = Q).appendChild(t), i = ~J.qsa(r, e).indexOf(t), o && Q.removeChild(t), i
        }, C = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, k = function(t) {
            return _.call(t, function(e, n) {
                return t.indexOf(e) == n
            })
        }, J.fragment = function(t, e, n) {
            var i, r, o;
            return D.test(t) && (i = j(O.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(q, "<$1></$2>")), e === T && (e = R.test(t) && RegExp.$1), e in K || (e = "*"), o = K[e], o.innerHTML = "" + t, i = j.each(P.call(o.childNodes), function() { o.removeChild(this) })), a(n) && (r = j(i), j.each(n, function(t, e) { F.indexOf(t) > -1 ? r[t](e) : r.attr(t, e) })), i
        }, J.Z = function(t, e) {
            return new m(t, e)
        }, J.isZ = function(t) {
            return t instanceof J.Z
        }, J.init = function(t, e) {
            var i;
            if (!t) return J.Z();
            if ("string" == typeof t)
                if (t = t.trim(), "<" == t[0] && R.test(t)) i = J.fragment(t, RegExp.$1, e), t = null;
                else {
                    if (e !== T) return j(e).find(t);
                    i = J.qsa(O, t)
                }
            else {
                if (n(t)) return j(O).ready(t);
                if (J.isZ(t)) return t;
                if (tt(t)) i = c(t);
                else if (o(t)) i = [t], t = null;
                else if (R.test(t)) i = J.fragment(t.trim(), RegExp.$1, e), t = null;
                else {
                    if (e !== T) return j(e).find(t);
                    i = J.qsa(O, t)
                }
            }
            return J.Z(i, t)
        }, j = function(t, e) {
            return J.init(t, e)
        }, j.extend = function(t) {
            var e, n = P.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) { v(t, n, e) }), t
        }, J.qsa = function(t, e) {
            var n, i = "#" == e[0],
                r = !i && "." == e[0],
                o = i || r ? e.slice(1) : e,
                a = G.test(o);
            return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : P.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, j.contains = O.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e)
        } : function(t, e) {
            for (; e && (e = e.parentNode);)
                if (e === t) return !0;
            return !1
        }, j.type = e, j.isFunction = n, j.isWindow = i, j.isArray = tt, j.isPlainObject = a, j.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0
        }, j.isNumeric = function(t) {
            var e = Number(t),
                n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, j.inArray = function(t, e, n) {
            return I.indexOf.call(e, t, n)
        }, j.camelCase = C, j.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, j.uuid = 0, j.support = {}, j.expr = {}, j.noop = function() {}, j.map = function(t, e) {
            var n, i, r, o = [];
            if (s(t))
                for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
            else
                for (r in t) n = e(t[r], r), null != n && o.push(n);
            return u(o)
        }, j.each = function(t, e) {
            var n, i;
            if (s(t)) {
                for (n = 0; n < t.length; n++)
                    if (e.call(t[n], n, t[n]) === !1) return t
            } else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) return t; return t
        }, j.grep = function(t, e) {
            return _.call(t, e)
        }, t.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { W["[object " + e + "]"] = e.toLowerCase() }), j.fn = {
            constructor: J.Z,
            length: 0,
            forEach: I.forEach,
            reduce: I.reduce,
            push: I.push,
            sort: I.sort,
            splice: I.splice,
            indexOf: I.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = J.isZ(e) ? e.toArray() : e;
                return S.apply(J.isZ(this) ? this.toArray() : this, n)
            },
            map: function(t) {
                return j(j.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return j(P.apply(this, arguments))
            },
            ready: function(t) {
                return V.test(O.readyState) && O.body ? t(j) : O.addEventListener("DOMContentLoaded", function() { t(j) }, !1), this
            },
            get: function(t) {
                return t === T ? P.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) })
            },
            each: function(t) {
                return I.every.call(this, function(e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function(t) {
                return n(t) ? this.not(this.not(t)) : j(_.call(this, function(e) {
                    return J.matches(e, t)
                }))
            },
            add: function(t, e) {
                return j(k(this.concat(j(t, e))))
            },
            is: function(t) {
                return this.length > 0 && J.matches(this[0], t)
            },
            not: function(t) {
                var e = [];
                if (n(t) && t.call !== T) this.each(function(n) { t.call(this, n) || e.push(this) });
                else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? P.call(t) : j(t);
                    this.forEach(function(t) { i.indexOf(t) < 0 && e.push(t) })
                }
                return j(e)
            },
            has: function(t) {
                return this.filter(function() {
                    return o(t) ? j.contains(this, t) : j(this).find(t).size()
                })
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function() {
                var t = this[0];
                return t && !o(t) ? t : j(t)
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : j(t)
            },
            find: function(t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? j(t).filter(function() {
                    var t = this;
                    return I.some.call(n, function(e) {
                        return j.contains(e, t)
                    })
                }) : 1 == this.length ? j(J.qsa(this[0], t)) : this.map(function() {
                    return J.qsa(this, t)
                }) : j()
            },
            closest: function(t, e) {
                var n = [],
                    i = "object" == typeof t && j(t);
                return this.each(function(o, a) {
                    for (; a && !(i ? i.indexOf(a) >= 0 : J.matches(a, t));) a = a !== e && !r(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a)
                }), j(n)
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0;) n = j.map(n, function(t) {
                    return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return g(e, t)
            },
            parent: function(t) {
                return g(k(this.pluck("parentNode")), t)
            },
            children: function(t) {
                return g(this.map(function() {
                    return p(this)
                }), t)
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || P.call(this.childNodes)
                })
            },
            siblings: function(t) {
                return g(this.map(function(t, e) {
                    return _.call(p(e.parentNode), function(t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function() {
                return this.each(function() { this.innerHTML = "" })
            },
            pluck: function(t) {
                return j.map(this, function(e) {
                    return e[t]
                })
            },
            show: function() {
                return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName)) })
            },
            replaceWith: function(t) {
                return this.before(t).remove()
            },
            wrap: function(t) {
                var e = n(t);
                if (this[0] && !e) var i = j(t).get(0),
                    r = i.parentNode || this.length > 1;
                return this.each(function(n) { j(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i) })
            },
            wrapAll: function(t) {
                if (this[0]) {
                    j(this[0]).before(t = j(t));
                    for (var e;
                        (e = t.children()).length;) t = e.first();
                    j(t).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                var e = n(t);
                return this.each(function(n) {
                    var i = j(this),
                        r = i.contents(),
                        o = e ? t.call(this, n) : t;
                    r.length ? r.wrapAll(o) : i.append(o)
                })
            },
            unwrap: function() {
                return this.parent().each(function() { j(this).replaceWith(j(this).children()) }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return this.each(function() {
                    var e = j(this);
                    (t === T ? "none" == e.css("display") : t) ? e.show(): e.hide()
                })
            },
            prev: function(t) {
                return j(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function(t) {
                return j(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    j(this).empty().append(y(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = y(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function(t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType)
                        if (o(t))
                            for (N in t) b(this, N, t[N]);
                        else b(this, t, y(this, e, n, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : T
            },
            removeAttr: function(t) {
                return this.each(function() { 1 === this.nodeType && t.split(" ").forEach(function(t) { b(this, t) }, this) })
            },
            prop: function(t, e) {
                return t = Y[t] || t, 1 in arguments ? this.each(function(n) { this[t] = y(this, e, n, this[t]) }) : this[0] && this[0][t]
            },
            removeProp: function(t) {
                return t = Y[t] || t, this.each(function() { delete this[t] })
            },
            data: function(t, e) {
                var n = "data-" + t.replace(Z, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? x(i) : T
            },
            val: function(t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function(e) { this.value = y(this, t, e, this.value) })) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(e) {
                if (e) return this.each(function(t) {
                    var n = j(this),
                        i = y(this, e, t, n.offset()),
                        r = n.offsetParent().offset(),
                        o = { top: i.top - r.top, left: i.left - r.left };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o)
                });
                if (!this.length) return null;
                if (O.documentElement !== this[0] && !j.contains(O.documentElement, this[0])) return { top: 0, left: 0 };
                var n = this[0].getBoundingClientRect();
                return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) }
            },
            css: function(t, n) {
                if (arguments.length < 2) {
                    var i = this[0];
                    if ("string" == typeof t) {
                        if (!i) return;
                        return i.style[C(t)] || getComputedStyle(i, "").getPropertyValue(t)
                    }
                    if (tt(t)) {
                        if (!i) return;
                        var r = {},
                            o = getComputedStyle(i, "");
                        return j.each(t, function(t, e) { r[e] = i.style[C(e)] || o.getPropertyValue(e) }), r
                    }
                }
                var a = "";
                if ("string" == e(t)) n || 0 === n ? a = l(t) + ":" + d(t, n) : this.each(function() { this.style.removeProperty(l(t)) });
                else
                    for (N in t) t[N] || 0 === t[N] ? a += l(N) + ":" + d(N, t[N]) + ";" : this.each(function() { this.style.removeProperty(l(N)) });
                return this.each(function() { this.style.cssText += ";" + a })
            },
            index: function(t) {
                return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(t) {
                return !!t && I.some.call(this, function(t) {
                    return this.test(w(t))
                }, f(t))
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        $ = [];
                        var n = w(this),
                            i = y(this, t, e, n);
                        i.split(/\s+/g).forEach(function(t) { j(this).hasClass(t) || $.push(t) }, this), $.length && w(this, n + (n ? " " : "") + $.join(" "))
                    }
                }) : this
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === T) return w(this, "");
                        $ = w(this), y(this, t, e, $).split(/\s+/g).forEach(function(t) { $ = $.replace(f(t), " ") }), w(this, $.trim())
                    }
                })
            },
            toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var i = j(this),
                        r = y(this, t, n, w(this));
                    r.split(/\s+/g).forEach(function(t) {
                        (e === T ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function(t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() { this.scrollTop = t } : function() { this.scrollTo(this.scrollX, t) })
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() { this.scrollLeft = t } : function() { this.scrollTo(t, this.scrollY) })
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        i = H.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
                    return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, i.top += parseFloat(j(e[0]).css("border-top-width")) || 0, i.left += parseFloat(j(e[0]).css("border-left-width")) || 0, { top: n.top - i.top, left: n.left - i.left }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || O.body; t && !H.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        }, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase()
            });
            j.fn[t] = function(n) {
                var o, a = this[0];
                return n === T ? i(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) { a = j(this), a.css(t, y(this, n, e, a[t]())) })
            }
        }), z.forEach(function(n, i) {
            var r = i % 2;
            j.fn[n] = function() {
                var n, o, a = j.map(arguments, function(t) {
                        var i = [];
                        return n = e(t), "array" == n ? (t.forEach(function(t) {
                            return t.nodeType !== T ? i.push(t) : j.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(J.fragment(t)))
                        }), i) : "object" == n || null == t ? t : J.fragment(t)
                    }),
                    s = this.length > 1;
                return a.length < 1 ? this : this.each(function(e, n) {
                    o = r ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
                    var c = j.contains(O.documentElement, o);
                    a.forEach(function(e) {
                        if (s) e = e.cloneNode(!0);
                        else if (!o) return j(e).remove();
                        o.insertBefore(e, n), c && E(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, j.fn[r ? n + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                return j(t)[n](this), this
            }
        }), J.Z.prototype = m.prototype = j.fn, J.uniq = k, J.deserializeValue = x, j.zepto = J, j
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e),
        function(e) {
            function n(t) {
                return t._zid || (t._zid = h++)
            }

            function i(t, e, i, a) {
                if (e = r(e), e.ns) var s = o(e.ns);
                return (g[n(t)] || []).filter(function(t) {
                    return t && (!e.e || t.e == e.e) && (!e.ns || s.test(t.ns)) && (!i || n(t.fn) === n(i)) && (!a || t.sel == a)
                })
            }

            function r(t) {
                var e = ("" + t).split(".");
                return { e: e[0], ns: e.slice(1).sort().join(" ") }
            }

            function o(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }

            function a(t, e) {
                return t.del && !b && t.e in w || !!e
            }

            function s(t) {
                return x[t] || b && w[t] || t
            }

            function c(t, i, o, c, u, f, h) {
                var p = n(t),
                    m = g[p] || (g[p] = []);
                i.split(/\s/).forEach(function(n) {
                    if ("ready" == n) return e(document).ready(o);
                    var i = r(n);
                    i.fn = o, i.sel = u, i.e in x && (o = function(t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
                    }), i.del = f;
                    var p = f || o;
                    i.proxy = function(e) {
                        if (e = l(e), !e.isImmediatePropagationStopped()) {
                            e.data = c;
                            var n = p.apply(t, e._args == d ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                        }
                    }, i.i = m.length, m.push(i), "addEventListener" in t && t.addEventListener(s(i.e), i.proxy, a(i, h))
                })
            }

            function u(t, e, r, o, c) {
                var u = n(t);
                (e || "").split(/\s/).forEach(function(e) { i(t, e, r, o).forEach(function(e) { delete g[u][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, c)) }) })
            }

            function l(t, n) {
                return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(j, function(e, i) {
                    var r = n[e];
                    t[e] = function() {
                        return this[i] = E, r && r.apply(n, arguments)
                    }, t[i] = T
                }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== d ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)), t
            }

            function f(t) {
                var e, n = { originalEvent: t };
                for (e in t) N.test(e) || t[e] === d || (n[e] = t[e]);
                return l(n, t)
            }
            var d, h = 1,
                p = Array.prototype.slice,
                m = e.isFunction,
                v = function(t) {
                    return "string" == typeof t
                },
                g = {},
                y = {},
                b = "onfocusin" in t,
                w = { focus: "focusin", blur: "focusout" },
                x = { mouseenter: "mouseover", mouseleave: "mouseout" };
            y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = { add: c, remove: u }, e.proxy = function(t, i) {
                var r = 2 in arguments && p.call(arguments, 2);
                if (m(t)) {
                    var o = function() {
                        return t.apply(i, r ? r.concat(p.call(arguments)) : arguments)
                    };
                    return o._zid = n(t), o
                }
                if (v(i)) return r ? (r.unshift(t[i], t), e.proxy.apply(null, r)) : e.proxy(t[i], t);
                throw new TypeError("expected function")
            }, e.fn.bind = function(t, e, n) {
                return this.on(t, e, n)
            }, e.fn.unbind = function(t, e) {
                return this.off(t, e)
            }, e.fn.one = function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            };
            var E = function() {
                    return !0
                },
                T = function() {
                    return !1
                },
                N = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                j = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
            e.fn.delegate = function(t, e, n) {
                return this.on(e, t, n)
            }, e.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n)
            }, e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n), this
            }, e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n), this
            }, e.fn.on = function(t, n, i, r, o) {
                var a, s, l = this;
                return t && !v(t) ? (e.each(t, function(t, e) { l.on(t, n, i, e, o) }), l) : (v(n) || m(r) || r === !1 || (r = i, i = n, n = d), (r === d || i === !1) && (r = i, i = d), r === !1 && (r = T), l.each(function(l, d) {
                    o && (a = function(t) {
                        return u(d, t.type, r), r.apply(this, arguments)
                    }), n && (s = function(t) {
                        var i, o = e(t.target).closest(n, d).get(0);
                        return o && o !== d ? (i = e.extend(f(t), { currentTarget: o, liveFired: d }), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
                    }), c(d, t, r, i, n, s || a)
                }))
            }, e.fn.off = function(t, n, i) {
                var r = this;
                return t && !v(t) ? (e.each(t, function(t, e) { r.off(t, n, e) }), r) : (v(n) || m(i) || i === !1 || (i = n, n = d), i === !1 && (i = T), r.each(function() { u(this, t, i, n) }))
            }, e.fn.trigger = function(t, n) {
                return t = v(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function() { t.type in w && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n) })
            }, e.fn.triggerHandler = function(t, n) {
                var r, o;
                return this.each(function(a, s) {
                    r = f(v(t) ? e.Event(t) : t), r._args = n, r.target = s, e.each(i(s, t.type || t), function(t, e) {
                        return o = e.proxy(r), !r.isImmediatePropagationStopped() && void 0
                    })
                }), o
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }), e.Event = function(t, e) {
                v(t) || (e = t, t = e.type);
                var n = document.createEvent(y[t] || "Events"),
                    i = !0;
                if (e)
                    for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                return n.initEvent(t, i, !0), l(n)
            }
        }(e),
        function(e) {
            function n(t, n, i) {
                var r = e.Event(n);
                return e(t).trigger(r, i), !r.isDefaultPrevented()
            }

            function i(t, e, i, r) {
                return t.global ? n(e || w, i, r) : void 0
            }

            function r(t) { t.global && 0 === e.active++ && i(t, null, "ajaxStart") }

            function o(t) { t.global && !--e.active && i(t, null, "ajaxStop") }

            function a(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) !== !1 && i(e, n, "ajaxBeforeSend", [t, e]) !== !1 && void i(e, n, "ajaxSend", [t, e])
            }

            function s(t, e, n, r) {
                var o = n.context,
                    a = "success";
                n.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), i(n, o, "ajaxSuccess", [e, n, t]), u(a, e, n)
            }

            function c(t, e, n, r, o) {
                var a = r.context;
                r.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), i(r, a, "ajaxError", [n, r, t || e]), u(e, n, r)
            }

            function u(t, e, n) {
                var r = n.context;
                n.complete.call(r, e, t), i(n, r, "ajaxComplete", [e, n]), o(n)
            }

            function l(t, e, n) {
                if (n.dataFilter == f) return t;
                var i = n.context;
                return n.dataFilter.call(i, t, e)
            }

            function f() {}

            function d(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == N ? "json" : E.test(t) ? "script" : T.test(t) && "xml") || "text"
            }

            function h(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function p(t) { t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = h(t.url, t.data), t.data = void 0) }

            function m(t, n, i, r) {
                return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), { url: t, data: n, success: i, dataType: r }
            }

            function v(t, n, i, r) {
                var o, a = e.isArray(n),
                    s = e.isPlainObject(n);
                e.each(n, function(n, c) { o = e.type(c), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? t.add(c.name, c.value) : "array" == o || !i && "object" == o ? v(t, c, i, n) : t.add(n, c) })
            }
            var g, y, b = +new Date,
                w = t.document,
                x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                E = /^(?:text|application)\/javascript/i,
                T = /^(?:text|application)\/xml/i,
                N = "application/json",
                j = "text/html",
                $ = /^\s*$/,
                C = w.createElement("a");
            C.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, i) {
                if (!("type" in n)) return e.ajax(n);
                var r, o, u = n.jsonpCallback,
                    l = (e.isFunction(u) ? u() : u) || "Zepto" + b++,
                    f = w.createElement("script"),
                    d = t[l],
                    h = function(t) { e(f).triggerHandler("error", t || "abort") },
                    p = { abort: h };
                return i && i.promise(p), e(f).on("load error", function(a, u) { clearTimeout(o), e(f).off().remove(), "error" != a.type && r ? s(r[0], p, n, i) : c(null, u || "error", p, n, i), t[l] = d, r && e.isFunction(d) && d(r[0]), d = r = void 0 }), a(p, n) === !1 ? (h("abort"), p) : (t[l] = function() { r = arguments }, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), w.head.appendChild(f), n.timeout > 0 && (o = setTimeout(function() { h("timeout") }, n.timeout)), p)
            }, e.ajaxSettings = {
                type: "GET",
                beforeSend: f,
                success: f,
                error: f,
                complete: f,
                context: null,
                global: !0,
                xhr: function() {
                    return new t.XMLHttpRequest
                },
                accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: N, xml: "application/xml, text/xml", html: j, text: "text/plain" },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: f
            }, e.ajax = function(n) {
                var i, o, u = e.extend({}, n || {}),
                    m = e.Deferred && e.Deferred();
                for (g in e.ajaxSettings) void 0 === u[g] && (u[g] = e.ajaxSettings[g]);
                r(u), u.crossDomain || (i = w.createElement("a"), i.href = u.url, i.href = i.href, u.crossDomain = C.protocol + "//" + C.host != i.protocol + "//" + i.host), u.url || (u.url = t.location.toString()), (o = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, o)), p(u);
                var v = u.dataType,
                    b = /\?.+=\?/.test(u.url);
                if (b && (v = "jsonp"), u.cache !== !1 && (n && n.cache === !0 || "script" != v && "jsonp" != v) || (u.url = h(u.url, "_=" + Date.now())), "jsonp" == v) return b || (u.url = h(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(u, m);
                var x, E = u.accepts[v],
                    T = {},
                    N = function(t, e) { T[t.toLowerCase()] = [t, e] },
                    j = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : t.location.protocol,
                    k = u.xhr(),
                    I = k.setRequestHeader;
                if (m && m.promise(k), u.crossDomain || N("X-Requested-With", "XMLHttpRequest"), N("Accept", E || "*/*"), (E = u.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(E)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && N("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)
                    for (y in u.headers) N(y, u.headers[y]);
                if (k.setRequestHeader = N, k.onreadystatechange = function() {
                        if (4 == k.readyState) {
                            k.onreadystatechange = f, clearTimeout(x);
                            var t, n = !1;
                            if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == j) {
                                if (v = v || d(u.mimeType || k.getResponseHeader("content-type")), "arraybuffer" == k.responseType || "blob" == k.responseType) t = k.response;
                                else {
                                    t = k.responseText;
                                    try { t = l(t, v, u), "script" == v ? (0, eval)(t) : "xml" == v ? t = k.responseXML : "json" == v && (t = $.test(t) ? null : e.parseJSON(t)) } catch (t) { n = t }
                                    if (n) return c(n, "parsererror", k, u, m)
                                }
                                s(t, k, u, m)
                            } else c(k.statusText || null, k.status ? "error" : "abort", k, u, m)
                        }
                    }, a(k, u) === !1) return k.abort(), c(null, "abort", k, u, m), k;
                var S = !("async" in u) || u.async;
                if (k.open(u.type, u.url, S, u.username, u.password), u.xhrFields)
                    for (y in u.xhrFields) k[y] = u.xhrFields[y];
                for (y in T) I.apply(k, T[y]);
                return u.timeout > 0 && (x = setTimeout(function() { k.onreadystatechange = f, k.abort(), c(null, "timeout", k, u, m) }, u.timeout)), k.send(u.data ? u.data : null), k
            }, e.get = function() {
                return e.ajax(m.apply(null, arguments))
            }, e.post = function() {
                var t = m.apply(null, arguments);
                return t.type = "POST", e.ajax(t)
            }, e.getJSON = function() {
                var t = m.apply(null, arguments);
                return t.dataType = "json", e.ajax(t)
            }, e.fn.load = function(t, n, i) {
                if (!this.length) return this;
                var r, o = this,
                    a = t.split(/\s/),
                    s = m(t, n, i),
                    c = s.success;
                return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(t) { o.html(r ? e("<div>").html(t.replace(x, "")).find(r) : t), c && c.apply(o, arguments) }, e.ajax(s), this
            };
            var k = encodeURIComponent;
            e.param = function(t, n) {
                var i = [];
                return i.add = function(t, n) { e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(k(t) + "=" + k(n)) }, v(i, t, n), i.join("&").replace(/%20/g, "+")
            }
        }(e),
        function(t) {
            t.fn.serializeArray = function() {
                var e, n, i = [],
                    r = function(t) {
                        return t.forEach ? t.forEach(r) : void i.push({ name: e, value: t })
                    };
                return this[0] && t.each(this[0].elements, function(i, o) { n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val()) }), i
            }, t.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach(function(e) { t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)) }), t.join("&")
            }, t.fn.submit = function(e) {
                if (0 in arguments) this.bind("submit", e);
                else if (this.length) {
                    var n = t.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        }(e),
        function() {
            try { getComputedStyle(void 0) } catch (n) {
                var e = getComputedStyle;
                t.getComputedStyle = function(t, n) {
                    try {
                        return e(t, n)
                    } catch (t) {
                        return null
                    }
                }
            }
        }(), e
});
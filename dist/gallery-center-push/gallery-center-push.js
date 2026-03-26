var ju = Object.defineProperty;
var Zu = (s, t, i) => t in s ? ju(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var L = (s, t, i) => Zu(s, typeof t != "symbol" ? t + "" : t, i);
function pi(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function hl(s, t) {
  s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Re = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Lr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Oo, Jt, vt, Ye = 1e8, ft = 1 / Ye, to = Math.PI * 2, Ku = to / 4, Qu = 0, fl = Math.sqrt, Ju = Math.cos, tc = Math.sin, $t = function(t) {
  return typeof t == "string";
}, Et = function(t) {
  return typeof t == "function";
}, wi = function(t) {
  return typeof t == "number";
}, Mo = function(t) {
  return typeof t > "u";
}, li = function(t) {
  return typeof t == "object";
}, ve = function(t) {
  return t !== !1;
}, Do = function() {
  return typeof window < "u";
}, In = function(t) {
  return Et(t) || $t(t);
}, pl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ae = Array.isArray, ec = /random\([^)]+\)/g, ic = /,\s*/g, ha = /(?:-?\.?\d|\.)+/gi, dl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ms = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _l = /[+-]=-?[.\d]+/, rc = /[^,'"\[\]\s]+/gi, nc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, xt, ii, eo, Ao, Le = {}, as = {}, gl, ml = function(t) {
  return (as = Ir(t, Le)) && Se;
}, Ro = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, bn = function(t, i) {
  return !i && console.warn(t);
}, yl = function(t, i) {
  return t && (Le[t] = i) && as && (as[t] = i) || Le;
}, xn = function() {
  return 0;
}, sc = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Kn = {
  suppressEvents: !0,
  kill: !1
}, oc = {
  suppressEvents: !0
}, Lo = {}, Ri = [], io = {}, vl, ke = {}, Ds = {}, fa = 30, Qn = [], Io = "", zo = function(t) {
  var i = t[0], e, r;
  if (li(i) || Et(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = Qn.length; r-- && !Qn[r].targetTest(i); )
      ;
    e = Qn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new Wl(t[r], e))) || t.splice(r, 1);
  return t;
}, Ji = function(t) {
  return t._gsap || zo(Xe(t))[0]._gsap;
}, wl = function(t, i, e) {
  return (e = t[i]) && Et(e) ? t[i]() : Mo(e) && t.getAttribute && t.getAttribute(i) || e;
}, we = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, Pt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, bt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, kr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, ac = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, ls = function() {
  var t = Ri.length, i = Ri.slice(0), e, r;
  for (io = {}, Ri.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Fo = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, bl = function(t, i, e, r) {
  Ri.length && !Jt && ls(), t.render(i, e, !!(Jt && i < 0 && Fo(t))), Ri.length && !Jt && ls();
}, xl = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(rc).length < 2 ? i : $t(t) ? t.trim() : t;
}, Sl = function(t) {
  return t;
}, Ie = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, lc = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, Ir = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, pa = function s(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = li(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, us = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, sn = function(t) {
  var i = t.parent || xt, e = t.keyframes ? lc(ae(t.keyframes)) : Ie;
  if (ve(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, uc = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, Tl = function(t, i, e, r, n) {
  var o = t[r], a;
  if (n)
    for (a = i[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i;
}, xs = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, o = i._next;
  n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, zi = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, tr = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, cc = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, ro = function(t, i, e, r) {
  return t._startAt && (Jt ? t._startAt.revert(Kn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, hc = function s(t) {
  return !t || t._ts && s(t.parent);
}, da = function(t) {
  return t._repeat ? zr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, zr = function(t, i) {
  var e = Math.floor(t = bt(t / i));
  return t && e === t ? e - 1 : e;
}, cs = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, Ss = function(t) {
  return t._end = bt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ft) || 0));
}, Ts = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = bt(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Ss(t), e._dirty || tr(e, t)), t;
}, El = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = cs(t.rawTime(), i), (!i._dur || Dn(0, i.totalDuration(), e) - i._tTime > ft) && i.render(e, !0)), tr(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -ft;
  }
}, ni = function(t, i, e, r) {
  return i.parent && zi(i), i._start = bt((wi(e) ? e : e || t !== xt ? Fe(t, e, i) : t._time) + i._delay), i._end = bt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), Tl(t, i, "_first", "_last", t._sort ? "_start" : 0), no(i) || (t._recent = i), r || El(t, i), t._ts < 0 && Ts(t, t._tTime), t;
}, Cl = function(t, i) {
  return (Le.ScrollTrigger || Ro("scrollTrigger", i)) && Le.ScrollTrigger.create(i, t);
}, kl = function(t, i, e, r, n) {
  if (No(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Jt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && vl !== Oe.frame)
    return Ri.push(t), t._lazy = [n, r], 1;
}, fc = function s(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
}, no = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, pc = function(t, i, e, r) {
  var n = t.ratio, o = i < 0 || !i && (!t._start && fc(t) && !(!t._initted && no(t)) || (t._ts < 0 || t._dp._ts < 0) && !no(t)) ? 0 : 1, a = t._rDelay, u = 0, l, c, p;
  if (a && t._repeat && (u = Dn(0, t._tDur, i), c = zr(u, a), t._yoyo && c & 1 && (o = 1 - o), c !== zr(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Jt || r || t._zTime === ft || !i && t._zTime) {
    if (!t._initted && kl(t, i, r, e, u))
      return;
    for (p = t._zTime, t._zTime = i || (e ? ft : 0), e || (e = i && !p), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(o, l.d), l = l._next;
    i < 0 && ro(t, i, e, !0), t._onUpdate && !e && De(t, "onUpdate"), u && t._repeat && !e && t.parent && De(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && zi(t, 1), !e && !Jt && (De(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, dc = function(t, i, e) {
  var r;
  if (e > i)
    for (r = t._first; r && r._start <= e; ) {
      if (r.data === "isPause" && r._start > i)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= e; ) {
      if (r.data === "isPause" && r._start < i)
        return r;
      r = r._prev;
    }
}, Fr = function(t, i, e, r) {
  var n = t._repeat, o = bt(i) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : bt(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && Ts(t, t._tTime = t._tDur * a), t.parent && Ss(t), e || tr(t.parent, t), t;
}, _a = function(t) {
  return t instanceof de ? tr(t) : Fr(t, t._dur);
}, _c = {
  _start: 0,
  endTime: xn,
  totalDuration: xn
}, Fe = function s(t, i, e) {
  var r = t.labels, n = t._recent || _c, o = t.duration() >= Ye ? n.endTime(!1) : t._dur, a, u, l;
  return $t(i) && (isNaN(i) || i in r) ? (u = i.charAt(0), l = i.substr(-1) === "%", a = i.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (l ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (u = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), l && e && (u = u / 100 * (ae(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, i.substr(0, a - 1), e) + u : o + u)) : i == null ? o : +i;
}, on = function(t, i, e) {
  var r = wi(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, u;
  if (r && (o.duration = i[1]), o.parent = e, t) {
    for (a = o, u = e; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = ve(u.vars.inherit) && u.parent;
    o.immediateRender = ve(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1];
  }
  return new Lt(i[0], o, i[n + 1]);
}, Yi = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, Dn = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, se = function(t, i) {
  return !$t(t) || !(i = nc.exec(t)) ? "" : i[1];
}, gc = function(t, i, e) {
  return Yi(e, function(r) {
    return Dn(t, i, r);
  });
}, so = [].slice, Pl = function(t, i) {
  return t && li(t) && "length" in t && (!i && !t.length || t.length - 1 in t && li(t[0])) && !t.nodeType && t !== ii;
}, mc = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return $t(r) && !i || Pl(r, 1) ? (n = e).push.apply(n, Xe(r)) : e.push(r);
  }) || e;
}, Xe = function(t, i, e) {
  return vt && !i && vt.selector ? vt.selector(t) : $t(t) && !e && (eo || !Br()) ? so.call((i || Ao).querySelectorAll(t), 0) : ae(t) ? mc(t, e) : Pl(t) ? so.call(t, 0) : t ? [t] : [];
}, oo = function(t) {
  return t = Xe(t)[0] || bn("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return Xe(i, e.querySelectorAll ? e : e === t ? bn("Invalid scope") || Ao.createElement("div") : t);
  };
}, Ol = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ml = function(t) {
  if (Et(t))
    return t;
  var i = li(t) ? t : {
    each: t
  }, e = er(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {}, a = r > 0 && r < 1, u = isNaN(r) || a, l = i.axis, c = r, p = r;
  return $t(r) ? c = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && u && (c = r[0], p = r[1]), function(h, f, _) {
    var d = (_ || i).length, g = o[d], m, x, w, v, b, E, S, P, C;
    if (!g) {
      if (C = i.grid === "auto" ? 0 : (i.grid || [1, Ye])[1], !C) {
        for (S = -Ye; S < (S = _[C++].getBoundingClientRect().left) && C < d; )
          ;
        C < d && C--;
      }
      for (g = o[d] = [], m = u ? Math.min(C, d) * c - 0.5 : r % C, x = C === Ye ? 0 : u ? d * p / C - 0.5 : r / C | 0, S = 0, P = Ye, E = 0; E < d; E++)
        w = E % C - m, v = x - (E / C | 0), g[E] = b = l ? Math.abs(l === "y" ? v : w) : fl(w * w + v * v), b > S && (S = b), b < P && (P = b);
      r === "random" && Ol(g), g.max = S - P, g.min = P, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (C > d ? d - 1 : l ? l === "y" ? d / C : C : Math.max(C, d / C)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = se(i.amount || i.each) || 0, e = e && d < 0 ? Yl(e) : e;
    }
    return d = (g[h] - g.min) / g.max || 0, bt(g.b + (e ? e(d) : d) * g.v) + g.u;
  };
}, ao = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = bt(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (wi(e) ? 0 : se(e));
  };
}, Dl = function(t, i) {
  var e = ae(t), r, n;
  return !e && li(t) && (r = e = t.radius || Ye, t.values ? (t = Xe(t.values), (n = !wi(t[0])) && (r *= r)) : t = ao(t.increment)), Yi(i, e ? Et(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= r ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), u = parseFloat(n ? o.y : 0), l = Ye, c = 0, p = t.length, h, f; p--; )
      n ? (h = t[p].x - a, f = t[p].y - u, h = h * h + f * f) : h = Math.abs(t[p] - a), h < l && (l = h, c = p);
    return c = !r || l <= r ? t[c] : o, n || c === o || wi(o) ? c : c + se(o);
  } : ao(t));
}, Al = function(t, i, e, r) {
  return Yi(ae(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return ae(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, yc = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}, vc = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || se(e));
  };
}, wc = function(t, i, e) {
  return Ll(t, i, 0, 1, e);
}, Rl = function(t, i, e) {
  return Yi(e, function(r) {
    return t[~~i(r)];
  });
}, bc = function s(t, i, e) {
  var r = i - t;
  return ae(t) ? Rl(t, s(0, t.length), i) : Yi(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, xc = function s(t, i, e) {
  var r = i - t, n = r * 2;
  return ae(t) ? Rl(t, s(0, t.length - 1), i) : Yi(e, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
  });
}, Sn = function(t) {
  return t.replace(ec, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(ic);
    return Al(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, Ll = function(t, i, e, r, n) {
  var o = i - t, a = r - e;
  return Yi(n, function(u) {
    return e + ((u - t) / o * a || 0);
  });
}, Sc = function s(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(f) {
    return (1 - f) * t + f * i;
  };
  if (!n) {
    var o = $t(t), a = {}, u, l, c, p, h;
    if (e === !0 && (r = 1) && (e = null), o)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (ae(t) && !ae(i)) {
      for (c = [], p = t.length, h = p - 2, l = 1; l < p; l++)
        c.push(s(t[l - 1], t[l]));
      p--, n = function(_) {
        _ *= p;
        var d = Math.min(h, ~~_);
        return c[d](_ - d);
      }, e = i;
    } else r || (t = Ir(ae(t) ? [] : {}, t));
    if (!c) {
      for (u in i)
        Bo.call(a, t, u, "get", i[u]);
      n = function(_) {
        return Vo(_, a) || (o ? t.p : t);
      };
    }
  }
  return Yi(e, n);
}, ga = function(t, i, e) {
  var r = t.labels, n = Ye, o, a, u;
  for (o in r)
    a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (u = o, n = a);
  return u;
}, De = function(t, i, e) {
  var r = t.vars, n = r[i], o = vt, a = t._ctx, u, l, c;
  if (n)
    return u = r[i + "Params"], l = r.callbackScope || t, e && Ri.length && ls(), a && (vt = a), c = u ? n.apply(l, u) : n.call(l), vt = o, c;
}, Zr = function(t) {
  return zi(t), t.scrollTrigger && t.scrollTrigger.kill(!!Jt), t.progress() < 1 && De(t, "onInterrupt"), t;
}, xr, Il = [], zl = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Do() || t.headless) {
      var i = t.name, e = Et(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: xn,
        render: Vo,
        add: Bo,
        kill: Nc,
        modifier: Bc,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Xo,
        aliases: {},
        register: 0
      };
      if (Br(), t !== r) {
        if (ke[i])
          return;
        Ie(r, Ie(us(t, n), o)), Ir(r.prototype, Ir(n, us(t, o))), ke[r.prop = i] = r, t.targetTest && (Qn.push(r), Lo[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      yl(i, r), t.register && t.register(Se, r, be);
    } else
      Il.push(t);
}, ht = 255, Kr = {
  aqua: [0, ht, ht],
  lime: [0, ht, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ht],
  navy: [0, 0, 128],
  white: [ht, ht, ht],
  olive: [128, 128, 0],
  yellow: [ht, ht, 0],
  orange: [ht, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ht, 0, 0],
  pink: [ht, 192, 203],
  cyan: [0, ht, ht],
  transparent: [ht, ht, ht, 0]
}, As = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * ht + 0.5 | 0;
}, Fl = function(t, i, e) {
  var r = t ? wi(t) ? [t >> 16, t >> 8 & ht, t & ht] : 0 : Kr.black, n, o, a, u, l, c, p, h, f, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Kr[t])
      r = Kr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & ht, r & ht, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & ht, t & ht];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(ha), !i)
        u = +r[0] % 360 / 360, l = +r[1] / 100, c = +r[2] / 100, o = c <= 0.5 ? c * (l + 1) : c + l - c * l, n = c * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = As(u + 1 / 3, n, o), r[1] = As(u, n, o), r[2] = As(u - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return r = t.match(dl), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(ha) || Kr.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / ht, o = r[1] / ht, a = r[2] / ht, p = Math.max(n, o, a), h = Math.min(n, o, a), c = (p + h) / 2, p === h ? u = l = 0 : (f = p - h, l = c > 0.5 ? f / (2 - p - h) : f / (p + h), u = p === n ? (o - a) / f + (o < a ? 6 : 0) : p === o ? (a - n) / f + 2 : (n - o) / f + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(l * 100 + 0.5), r[2] = ~~(c * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, Bl = function(t) {
  var i = [], e = [], r = -1;
  return t.split(Li).forEach(function(n) {
    var o = n.match(br) || [];
    i.push.apply(i, o), e.push(r += o.length + 1);
  }), i.c = e, i;
}, ma = function(t, i, e) {
  var r = "", n = (t + r).match(Li), o = i ? "hsla(" : "rgba(", a = 0, u, l, c, p;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Fl(h, i, 1)) && o + (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), e && (c = Bl(t), u = e.c, u.join(r) !== c.c.join(r)))
    for (l = t.replace(Li, "1").split(br), p = l.length - 1; a < p; a++)
      r += l[a] + (~u.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : e).shift());
  if (!l)
    for (l = t.split(Li), p = l.length - 1; a < p; a++)
      r += l[a] + n[a];
  return r + l[p];
}, Li = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Kr)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), Tc = /hsl[a]?\(/, Nl = function(t) {
  var i = t.join(" "), e;
  if (Li.lastIndex = 0, Li.test(i))
    return e = Tc.test(i), t[1] = ma(t[1], e), t[0] = ma(t[0], e, Bl(t[1])), !0;
}, Tn, Oe = function() {
  var s = Date.now, t = 500, i = 33, e = s(), r = e, n = 1e3 / 240, o = n, a = [], u, l, c, p, h, f, _ = function d(g) {
    var m = s() - r, x = g === !0, w, v, b, E;
    if ((m > t || m < 0) && (e += m - i), r += m, b = r - e, w = b - o, (w > 0 || x) && (E = ++p.frame, h = b - p.time * 1e3, p.time = b = b / 1e3, o += w + (w >= n ? 4 : n - w), v = 1), x || (u = l(d)), v)
      for (f = 0; f < a.length; f++)
        a[f](b, h, E, g);
  };
  return p = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(g) {
      return h / (1e3 / (g || 60));
    },
    wake: function() {
      gl && (!eo && Do() && (ii = eo = window, Ao = ii.document || {}, Le.gsap = Se, (ii.gsapVersions || (ii.gsapVersions = [])).push(Se.version), ml(as || ii.GreenSockGlobals || !ii.gsap && ii || {}), Il.forEach(zl)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && p.sleep(), l = c || function(g) {
        return setTimeout(g, o - p.time * 1e3 + 1 | 0);
      }, Tn = 1, _(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(u), Tn = 0, l = xn;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, i = Math.min(m || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), o = p.time * 1e3 + n;
    },
    add: function(g, m, x) {
      var w = m ? function(v, b, E, S) {
        g(v, b, E, S), p.remove(w);
      } : g;
      return p.remove(g), a[x ? "unshift" : "push"](w), Br(), w;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && f >= m && f--;
    },
    _listeners: a
  }, p;
}(), Br = function() {
  return !Tn && Oe.wake();
}, et = {}, Ec = /^[\d.\-M][\d.\-,\s]/, Cc = /["']/g, kc = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, u, l; n < o; n++)
    u = e[n], a = n !== o - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, a), i[r] = isNaN(l) ? l.replace(Cc, "").trim() : +l, r = u.substr(a + 1).trim();
  return i;
}, Pc = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, Oc = function(t) {
  var i = (t + "").split("("), e = et[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [kc(i[1])] : Pc(t).split(",").map(xl)) : et._CE && Ec.test(t) ? et._CE("", t) : e;
}, Yl = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, Xl = function s(t, i) {
  for (var e = t._first, r; e; )
    e instanceof de ? s(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? s(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next;
}, er = function(t, i) {
  return t && (Et(t) ? t : et[t] || Oc(t)) || i;
}, fr = function(t, i, e, r) {
  e === void 0 && (e = function(u) {
    return 1 - i(1 - u);
  }), r === void 0 && (r = function(u) {
    return u < 0.5 ? i(u * 2) / 2 : 1 - i((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, o;
  return we(t, function(a) {
    et[a] = Le[a] = n, et[o = a.toLowerCase()] = e;
    for (var u in n)
      et[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = et[a + "." + u] = n[u];
  }), n;
}, Vl = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, Rs = function s(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = n / to * (Math.asin(1 / r) || 0), a = function(c) {
    return c === 1 ? 1 : r * Math.pow(2, -10 * c) * tc((c - o) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(l) {
    return 1 - a(1 - l);
  } : Vl(a);
  return n = to / n, u.config = function(l, c) {
    return s(t, l, c);
  }, u;
}, Ls = function s(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : Vl(e);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
we("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var i = t < 5 ? t + 1 : t;
  fr(s + ",Power" + (i - 1), t ? function(e) {
    return Math.pow(e, i);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, i);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2;
  });
});
et.Linear.easeNone = et.none = et.Linear.easeIn;
fr("Elastic", Rs("in"), Rs("out"), Rs());
(function(s, t) {
  var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
    return a < i ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  fr("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
fr("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
fr("Circ", function(s) {
  return -(fl(1 - s * s) - 1);
});
fr("Sine", function(s) {
  return s === 1 ? 1 : -Ju(s * Ku) + 1;
});
fr("Back", Ls("in"), Ls("out"), Ls());
et.SteppedEase = et.steps = Le.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - ft;
    return function(a) {
      return ((r * Dn(0, o, a) | 0) + n) * e;
    };
  }
};
Lr.ease = et["quad.out"];
we("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Io += s + "," + s + "Params,";
});
var Wl = function(t, i) {
  this.id = Qu++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : wl, this.set = i ? i.getSetter : Xo;
}, En = /* @__PURE__ */ function() {
  function s(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Fr(this, +i.duration, 1, 1), this.data = i.data, vt && (this._ctx = vt, vt.data.push(this)), Tn || Oe.wake();
  }
  var t = s.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, Fr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, r) {
    if (Br(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ts(this, e), !n._dp || n.parent || El(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ni(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === ft || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), bl(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + da(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + da(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? zr(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -ft ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? cs(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -ft ? 0 : this._rts, this.totalTime(Dn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Ss(this), cc(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Br(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ft && (this._tTime -= ft)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = bt(e);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && ni(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (ve(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var r = this.parent || this._dp;
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? cs(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = oc);
    var r = Jt;
    return Jt = e, Fo(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Jt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, _a(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, _a(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, r) {
    return this.totalTime(Fe(this, e), ve(r));
  }, t.restart = function(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, ve(r)), this._dur || (this._zTime = -ft), this;
  }, t.play = function(e, r) {
    return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, r) {
    return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(e, r) {
    return e != null && this.seek(e, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -ft : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ft, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, r = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - ft);
  }, t.eventCallback = function(e, r, n) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var r = this, n = r._prom;
    return new Promise(function(o) {
      var a = Et(e) ? e : Sl, u = function() {
        var c = r.then;
        r.then = null, n && n(), Et(a) && (a = a(r)) && (a.then || a === r) && (r.then = c), o(a), r.then = c;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    Zr(this);
  }, s;
}();
Ie(En.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ft,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var de = /* @__PURE__ */ function(s) {
  hl(t, s);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ve(e.sortChildren), xt && ni(e.parent || xt, pi(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Cl(pi(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, o) {
    return on(0, arguments, this), this;
  }, i.from = function(r, n, o) {
    return on(1, arguments, this), this;
  }, i.fromTo = function(r, n, o, a) {
    return on(2, arguments, this), this;
  }, i.set = function(r, n, o) {
    return n.duration = 0, n.parent = this, sn(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Lt(r, n, Fe(this, o), 1), this;
  }, i.call = function(r, n, o) {
    return ni(this, Lt.delayedCall(0, r, n), o);
  }, i.staggerTo = function(r, n, o, a, u, l, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = l, o.onCompleteParams = c, o.parent = this, new Lt(r, o, Fe(this, u)), this;
  }, i.staggerFrom = function(r, n, o, a, u, l, c) {
    return o.runBackwards = 1, sn(o).immediateRender = ve(o.immediateRender), this.staggerTo(r, n, o, a, u, l, c);
  }, i.staggerFromTo = function(r, n, o, a, u, l, c, p) {
    return a.startAt = o, sn(a).immediateRender = ve(a.immediateRender), this.staggerTo(r, n, a, u, l, c, p);
  }, i.render = function(r, n, o) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = r <= 0 ? 0 : bt(r), p = this._zTime < 0 != r < 0 && (this._initted || !l), h, f, _, d, g, m, x, w, v, b, E, S;
    if (this !== xt && c > u && r >= 0 && (c = u), c !== this._tTime || o || p) {
      if (a !== this._time && l && (c += this._time - a, r += this._time - a), h = c, v = this._start, w = this._ts, m = !w, p && (l || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (E = this._yoyo, g = l + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, o);
        if (h = bt(c % g), c === u ? (d = this._repeat, h = l) : (b = bt(c / g), d = ~~b, d && d === b && (h = l, d--), h > l && (h = l)), b = zr(this._tTime, g), !a && this._tTime && b !== d && this._tTime - b * g - this._dur <= 0 && (b = d), E && d & 1 && (h = l - h, S = 1), d !== b && !this._lock) {
          var P = E && b & 1, C = P === (E && d & 1);
          if (d < b && (P = !P), a = P ? 0 : c % l ? l : c, this._lock = 1, this.render(a || (S ? 0 : bt(d * g)), n, !l)._lock = 0, this._tTime = c, !n && this.parent && De(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, b = d), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, C && (this._lock = 2, a = P ? l : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          Xl(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = dc(this, bt(a), bt(h)), x && (c -= h - (h = x._start))), this._tTime = c, this._time = h, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && l && !n && !b && (De(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && r >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && x !== f) {
            if (f.parent !== this)
              return this.render(r, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !m) {
              x = 0, _ && (c += this._zTime = -ft);
              break;
            }
          }
          f = _;
        }
      else {
        f = this._last;
        for (var k = r < 0 ? r : h; f; ) {
          if (_ = f._prev, (f._act || k <= f._end) && f._ts && x !== f) {
            if (f.parent !== this)
              return this.render(r, n, o);
            if (f.render(f._ts > 0 ? (k - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (k - f._start) * f._ts, n, o || Jt && Fo(f)), h !== this._time || !this._ts && !m) {
              x = 0, _ && (c += this._zTime = k ? -ft : ft);
              break;
            }
          }
          f = _;
        }
      }
      if (x && !n && (this.pause(), x.render(h >= a ? 0 : -ft)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, Ss(this), this.render(r, n, o);
      this._onUpdate && !n && De(this, "onUpdate", !0), (c === u && this._tTime >= this.totalDuration() || !c && a) && (v === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (c === u && this._ts > 0 || !c && this._ts < 0) && zi(this, 1), !n && !(r < 0 && !a) && (c || a || !u) && (De(this, c === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var o = this;
    if (wi(n) || (n = Fe(this, n, r)), !(r instanceof En)) {
      if (ae(r))
        return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if ($t(r))
        return this.addLabel(r, n);
      if (Et(r))
        r = Lt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? ni(this, r, n) : this;
  }, i.getChildren = function(r, n, o, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ye);
    for (var u = [], l = this._first; l; )
      l._start >= a && (l instanceof Lt ? n && u.push(l) : (o && u.push(l), r && u.push.apply(u, l.getChildren(!0, n, o)))), l = l._next;
    return u;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === r)
        return n[o];
  }, i.remove = function(r) {
    return $t(r) ? this.removeLabel(r) : Et(r) ? this.killTweensOf(r) : (r.parent === this && xs(this, r), r === this._recent && (this._recent = this._last), tr(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = bt(Oe.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = Fe(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, o) {
    var a = Lt.delayedCall(0, n || xn, o);
    return a.data = "isPause", this._hasPause = 1, ni(this, a, Fe(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = Fe(this, r); n; )
      n._start === r && n.data === "isPause" && zi(n), n = n._next;
  }, i.killTweensOf = function(r, n, o) {
    for (var a = this.getTweensOf(r, o), u = a.length; u--; )
      Pi !== a[u] && a[u].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var o = [], a = Xe(r), u = this._first, l = wi(n), c; u; )
      u instanceof Lt ? ac(u._targets, a) && (l ? (!Pi || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && o.push(u) : (c = u.getTweensOf(a, n)).length && o.push.apply(o, c), u = u._next;
    return o;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var o = this, a = Fe(o, r), u = n, l = u.startAt, c = u.onStart, p = u.onStartParams, h = u.immediateRender, f, _ = Lt.to(o, Ie({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale()) || ft,
      onStart: function() {
        if (o.pause(), !f) {
          var g = n.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale());
          _._dur !== g && Fr(_, g, 0, 1).render(_._time, !0, !0), f = 1;
        }
        c && c.apply(_, p || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, i.tweenFromTo = function(r, n, o) {
    return this.tweenTo(n, Ie({
      startAt: {
        time: Fe(this, r)
      }
    }, o));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), ga(this, Fe(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), ga(this, Fe(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ft);
  }, i.shiftChildren = function(r, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, u = this.labels, l;
    for (r = bt(r); a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (l in u)
        u[l] >= o && (u[l] += r);
    return tr(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), tr(this);
  }, i.totalDuration = function(r) {
    var n = 0, o = this, a = o._last, u = Ye, l, c, p;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (p = o.parent; a; )
        l = a._prev, a._dirty && a.totalDuration(), c = a._start, c > u && o._sort && a._ts && !o._lock ? (o._lock = 1, ni(o, a, c - a._delay, 1)._lock = 0) : u = c, c < 0 && a._ts && (n -= c, (!p && !o._dp || p && p.smoothChildTiming) && (o._start += bt(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), u = 0), a._end > n && a._ts && (n = a._end), a = l;
      Fr(o, o === xt && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (xt._ts && (bl(xt, cs(r, xt)), vl = Oe.frame), Oe.frame >= fa) {
      fa += Re.autoSleep || 120;
      var n = xt._first;
      if ((!n || !n._ts) && Re.autoSleep && Oe._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Oe.sleep();
      }
    }
  }, t;
}(En);
Ie(de.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Mc = function(t, i, e, r, n, o, a) {
  var u = new be(this._pt, t, i, 0, 1, jl, null, n), l = 0, c = 0, p, h, f, _, d, g, m, x;
  for (u.b = e, u.e = r, e += "", r += "", (m = ~r.indexOf("random(")) && (r = Sn(r)), o && (x = [e, r], o(x, t, i), e = x[0], r = x[1]), h = e.match(Ms) || []; p = Ms.exec(r); )
    _ = p[0], d = r.substring(l, p.index), f ? f = (f + 1) % 5 : d.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (g = parseFloat(h[c - 1]) || 0, u._pt = {
      _next: u._pt,
      p: d || c === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? kr(g, _) - g : parseFloat(_) - g,
      m: f && f < 4 ? Math.round : 0
    }, l = Ms.lastIndex);
  return u.c = l < r.length ? r.substring(l, r.length) : "", u.fp = a, (_l.test(r) || m) && (u.e = 0), this._pt = u, u;
}, Bo = function(t, i, e, r, n, o, a, u, l, c) {
  Et(r) && (r = r(n || 0, t, o));
  var p = t[i], h = e !== "get" ? e : Et(p) ? l ? t[i.indexOf("set") || !Et(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](l) : t[i]() : p, f = Et(p) ? l ? Ic : Ul : Yo, _;
  if ($t(r) && (~r.indexOf("random(") && (r = Sn(r)), r.charAt(1) === "=" && (_ = kr(h, r) + (se(h) || 0), (_ || _ === 0) && (r = _))), !c || h !== r || lo)
    return !isNaN(h * r) && r !== "" ? (_ = new be(this._pt, t, i, +h || 0, r - (h || 0), typeof p == "boolean" ? Fc : Gl, 0, f), l && (_.fp = l), a && _.modifier(a, this, t), this._pt = _) : (!p && !(i in t) && Ro(i, r), Mc.call(this, t, i, h, r, f, u || Re.stringFilter, l));
}, Dc = function(t, i, e, r, n) {
  if (Et(t) && (t = an(t, n, i, e, r)), !li(t) || t.style && t.nodeType || ae(t) || pl(t))
    return $t(t) ? an(t, n, i, e, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = an(t[a], n, i, e, r);
  return o;
}, ql = function(t, i, e, r, n, o) {
  var a, u, l, c;
  if (ke[t] && (a = new ke[t]()).init(n, a.rawVars ? i[t] : Dc(i[t], r, n, o, e), e, r, o) !== !1 && (e._pt = u = new be(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== xr))
    for (l = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--; )
      l[a._props[c]] = u;
  return a;
}, Pi, lo, No = function s(t, i, e) {
  var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, u = r.lazy, l = r.onUpdate, c = r.runBackwards, p = r.yoyoEase, h = r.keyframes, f = r.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, m = t.parent, x = m && m.data === "nested" ? m.vars.targets : g, w = t._overwrite === "auto" && !Oo, v = t.timeline, b, E, S, P, C, k, A, O, B, I, D, H, X;
  if (v && (!h || !n) && (n = "none"), t._ease = er(n, Lr.ease), t._yEase = p ? Yl(er(p === !0 ? n : p, Lr.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !v && !!r.runBackwards, !v || h && !r.stagger) {
    if (O = g[0] ? Ji(g[0]).harness : 0, H = O && r[O.prop], b = us(r, Lo), d && (d._zTime < 0 && d.progress(1), i < 0 && c && a && !f ? d.render(-1, !0) : d.revert(c && _ ? Kn : sc), d._lazy = 0), o) {
      if (zi(t._startAt = Lt.set(g, Ie({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !d && ve(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return De(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Jt || !a && !f) && t._startAt.revert(Kn), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (c && _ && !d) {
      if (i && (a = !1), S = Ie({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && ve(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), H && (S[O.prop] = H), zi(t._startAt = Lt.set(g, S)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Jt ? t._startAt.revert(Kn) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        s(t._startAt, ft, ft);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, u = _ && ve(u) || u && !_, E = 0; E < g.length; E++) {
      if (C = g[E], A = C._gsap || zo(g)[E]._gsap, t._ptLookup[E] = I = {}, io[A.id] && Ri.length && ls(), D = x === g ? E : x.indexOf(C), O && (B = new O()).init(C, H || b, t, D, x) !== !1 && (t._pt = P = new be(t._pt, C, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(it) {
        I[it] = P;
      }), B.priority && (k = 1)), !O || H)
        for (S in b)
          ke[S] && (B = ql(S, b, t, D, C, x)) ? B.priority && (k = 1) : I[S] = P = Bo.call(t, C, S, "get", b[S], D, x, 0, r.stringFilter);
      t._op && t._op[E] && t.kill(C, t._op[E]), w && t._pt && (Pi = t, xt.killTweensOf(C, I, t.globalTime(i)), X = !t.parent, Pi = 0), t._pt && u && (io[A.id] = 1);
    }
    k && Zl(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !X, h && i <= 0 && v.render(Ye, !0, !0);
}, Ac = function(t, i, e, r, n, o, a, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[i], c, p, h, f;
  if (!l)
    for (l = t._ptCache[i] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (c = h[f][i], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== i && c.fp !== i; )
          c = c._next;
      if (!c)
        return lo = 1, t.vars[i] = "+=0", No(t, a), lo = 0, u ? bn(i + " not eligible for reset") : 1;
      l.push(c);
    }
  for (f = l.length; f--; )
    p = l[f], c = p._pt || p, c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c, c.c = e - c.s, p.e && (p.e = Pt(e) + se(p.e)), p.b && (p.b = c.s + se(p.b));
}, Rc = function(t, i) {
  var e = t[0] ? Ji(t[0]).harness : 0, r = e && e.aliases, n, o, a, u;
  if (!r)
    return i;
  n = Ir({}, i);
  for (o in r)
    if (o in n)
      for (u = r[o].split(","), a = u.length; a--; )
        n[u[a]] = n[o];
  return n;
}, Lc = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", o, a;
  if (ae(i))
    a = e[t] || (e[t] = []), i.forEach(function(u, l) {
      return a.push({
        t: l / (i.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (o in i)
      a = e[o] || (e[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: i[o],
        e: n
      });
}, an = function(t, i, e, r, n) {
  return Et(t) ? t.call(i, e, r, n) : $t(t) && ~t.indexOf("random(") ? Sn(t) : t;
}, Hl = Io + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $l = {};
we(Hl + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return $l[s] = 1;
});
var Lt = /* @__PURE__ */ function(s) {
  hl(t, s);
  function t(e, r, n, o) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : sn(r)) || this;
    var u = a.vars, l = u.duration, c = u.delay, p = u.immediateRender, h = u.stagger, f = u.overwrite, _ = u.keyframes, d = u.defaults, g = u.scrollTrigger, m = u.yoyoEase, x = r.parent || xt, w = (ae(e) || pl(e) ? wi(e[0]) : "length" in r) ? [e] : Xe(e), v, b, E, S, P, C, k, A;
    if (a._targets = w.length ? zo(w) : bn("GSAP target " + e + " not found. https://gsap.com", !Re.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || In(l) || In(c)) {
      if (r = a.vars, v = a.timeline = new de({
        data: "nested",
        defaults: d || {},
        targets: x && x.data === "nested" ? x.vars.targets : w
      }), v.kill(), v.parent = v._dp = pi(a), v._start = 0, h || In(l) || In(c)) {
        if (S = w.length, k = h && Ml(h), li(h))
          for (P in h)
            ~Hl.indexOf(P) && (A || (A = {}), A[P] = h[P]);
        for (b = 0; b < S; b++)
          E = us(r, $l), E.stagger = 0, m && (E.yoyoEase = m), A && Ir(E, A), C = w[b], E.duration = +an(l, pi(a), b, C, w), E.delay = (+an(c, pi(a), b, C, w) || 0) - a._delay, !h && S === 1 && E.delay && (a._delay = c = E.delay, a._start += c, E.delay = 0), v.to(C, E, k ? k(b, C, w) : 0), v._ease = et.none;
        v.duration() ? l = c = 0 : a.timeline = 0;
      } else if (_) {
        sn(Ie(v.vars.defaults, {
          ease: "none"
        })), v._ease = er(_.ease || r.ease || "none");
        var O = 0, B, I, D;
        if (ae(_))
          _.forEach(function(H) {
            return v.to(w, H, ">");
          }), v.duration();
        else {
          E = {};
          for (P in _)
            P === "ease" || P === "easeEach" || Lc(P, _[P], E, _.easeEach);
          for (P in E)
            for (B = E[P].sort(function(H, X) {
              return H.t - X.t;
            }), O = 0, b = 0; b < B.length; b++)
              I = B[b], D = {
                ease: I.e,
                duration: (I.t - (b ? B[b - 1].t : 0)) / 100 * l
              }, D[P] = I.v, v.to(w, D, O), O += D.duration;
          v.duration() < l && v.to({}, {
            duration: l - v.duration()
          });
        }
      }
      l || a.duration(l = v.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Oo && (Pi = pi(a), xt.killTweensOf(w), Pi = 0), ni(x, pi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (p || !l && !_ && a._start === bt(x._time) && ve(p) && hc(pi(a)) && x.data !== "nested") && (a._tTime = -ft, a.render(Math.max(0, -c) || 0)), g && Cl(pi(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, o) {
    var a = this._time, u = this._tDur, l = this._dur, c = r < 0, p = r > u - ft && !c ? u : r < ft ? 0 : r, h, f, _, d, g, m, x, w, v;
    if (!l)
      pc(this, r, n, o);
    else if (p !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = p, w = this.timeline, this._repeat) {
        if (d = l + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(d * 100 + r, n, o);
        if (h = bt(p % d), p === u ? (_ = this._repeat, h = l) : (g = bt(p / d), _ = ~~g, _ && _ === g ? (h = l, _--) : h > l && (h = l)), m = this._yoyo && _ & 1, m && (v = this._yEase, h = l - h), g = zr(this._tTime, d), h === a && !o && this._initted && _ === g)
          return this._tTime = p, this;
        _ !== g && (w && this._yEase && Xl(w, m), this.vars.repeatRefresh && !m && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(bt(d * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (kl(this, c ? r : h, o, n, p))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g))
          return this;
        if (l !== this._dur)
          return this.render(r, n, o);
      }
      if (this._tTime = p, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (v || this._ease)(h / l), this._from && (this.ratio = x = 1 - x), !a && p && !n && !g && (De(this, "onStart"), this._tTime !== p))
        return this;
      for (f = this._pt; f; )
        f.r(x, f.d), f = f._next;
      w && w.render(r < 0 ? r : w._dur * w._ease(h / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (c && ro(this, r, n, o), De(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && De(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (c && !this._onUpdate && ro(this, r, !0, !0), (r || !l) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && zi(this, 1), !n && !(c && !a) && (p || a || m) && (De(this, p === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, o, a, u) {
    Tn || Oe.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || No(this, l), c = this._ease(l / this._dur), Ac(this, r, n, o, a, c, l, u) ? this.resetTo(r, n, o, a, 1) : (Ts(this, 0), this.parent || Tl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Zr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Jt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Pi && Pi.vars.overwrite !== !0)._first || Zr(this), this.parent && o !== this.timeline.totalDuration() && Fr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, u = r ? Xe(r) : a, l = this._ptLookup, c = this._pt, p, h, f, _, d, g, m;
    if ((!n || n === "all") && uc(a, u))
      return n === "all" && (this._pt = 0), Zr(this);
    for (p = this._op = this._op || [], n !== "all" && ($t(n) && (d = {}, we(n, function(x) {
      return d[x] = 1;
    }), n = d), n = Rc(a, n)), m = a.length; m--; )
      if (~u.indexOf(a[m])) {
        h = l[m], n === "all" ? (p[m] = n, _ = h, f = {}) : (f = p[m] = p[m] || {}, _ = n);
        for (d in _)
          g = h && h[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && xs(this, g, "_pt"), delete h[d]), f !== "all" && (f[d] = 1);
      }
    return this._initted && !this._pt && c && Zr(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return on(1, arguments);
  }, t.delayedCall = function(r, n, o, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, o) {
    return on(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, o) {
    return xt.killTweensOf(r, n, o);
  }, t;
}(En);
Ie(Lt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
we("staggerTo,staggerFrom,staggerFromTo", function(s) {
  Lt[s] = function() {
    var t = new de(), i = so.call(arguments, 0);
    return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
  };
});
var Yo = function(t, i, e) {
  return t[i] = e;
}, Ul = function(t, i, e) {
  return t[i](e);
}, Ic = function(t, i, e, r) {
  return t[i](r.fp, e);
}, zc = function(t, i, e) {
  return t.setAttribute(i, e);
}, Xo = function(t, i) {
  return Et(t[i]) ? Ul : Mo(t[i]) && t.setAttribute ? zc : Yo;
}, Gl = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, Fc = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, jl = function(t, i) {
  var e = i._pt, r = "";
  if (!t && i.b)
    r = i.b;
  else if (t === 1 && i.e)
    r = i.e;
  else {
    for (; e; )
      r = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + r, e = e._next;
    r += i.c;
  }
  i.set(i.t, i.p, r, i);
}, Vo = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, Bc = function(t, i, e, r) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === r && n.modifier(t, i, e), n = o;
}, Nc = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? xs(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, Yc = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, Zl = function(t) {
  for (var i = t._pt, e, r, n, o; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e;
  }
  t._pt = n;
}, be = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a, u, l, c) {
    this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || Gl, this.d = u || this, this.set = l || Yo, this.pr = c || 0, this._next = i, i && (i._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = Yc, this.m = e, this.mt = n, this.tween = r;
  }, s;
}();
we(Io + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Lo[s] = 1;
});
Le.TweenMax = Le.TweenLite = Lt;
Le.TimelineLite = Le.TimelineMax = de;
xt = new de({
  sortChildren: !1,
  defaults: Lr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Re.stringFilter = Nl;
var ir = [], Jn = {}, Xc = [], ya = 0, Vc = 0, Is = function(t) {
  return (Jn[t] || Xc).map(function(i) {
    return i();
  });
}, uo = function() {
  var t = Date.now(), i = [];
  t - ya > 2 && (Is("matchMediaInit"), ir.forEach(function(e) {
    var r = e.queries, n = e.conditions, o, a, u, l;
    for (a in r)
      o = ii.matchMedia(r[a]).matches, o && (u = 1), o !== n[a] && (n[a] = o, l = 1);
    l && (e.revert(), u && i.push(e));
  }), Is("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), ya = t, Is("matchMedia"));
}, Kl = /* @__PURE__ */ function() {
  function s(i, e) {
    this.selector = e && oo(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Vc++, i && this.add(i);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    Et(e) && (n = r, r = e, e = Et);
    var o = this, a = function() {
      var l = vt, c = o.selector, p;
      return l && l !== o && l.data.push(o), n && (o.selector = oo(n)), vt = o, p = r.apply(o, arguments), Et(p) && o._r.push(p), vt = l, o.selector = c, o.isReverted = !1, p;
    };
    return o.last = a, e === Et ? a(o, function(u) {
      return o.add(null, u);
    }) : e ? o[e] = a : a;
  }, t.ignore = function(e) {
    var r = vt;
    vt = null, e(this), vt = r;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? e.push.apply(e, r.getTweens()) : r instanceof Lt && !(r.parent && r.parent.data === "nested") && e.push(r);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, r) {
    var n = this;
    if (e ? function() {
      for (var a = n.getTweens(), u = n.data.length, l; u--; )
        l = n.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, p) {
        return p.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(e);
      }), u = n.data.length; u--; )
        l = n.data[u], l instanceof de ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Lt) && l.revert && l.revert(e);
      n._r.forEach(function(c) {
        return c(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = ir.length; o--; )
        ir[o].id === this.id && ir.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, s;
}(), Wc = /* @__PURE__ */ function() {
  function s(i) {
    this.contexts = [], this.scope = i, vt && vt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    li(e) || (e = {
      matches: e
    });
    var o = new Kl(0, n || this.scope), a = o.conditions = {}, u, l, c;
    vt && !o.selector && (o.selector = vt.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
    for (l in e)
      l === "all" ? c = 1 : (u = ii.matchMedia(e[l]), u && (ir.indexOf(o) < 0 && ir.push(o), (a[l] = u.matches) && (c = 1), u.addListener ? u.addListener(uo) : u.addEventListener("change", uo)));
    return c && r(o, function(p) {
      return o.add(null, p);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(r) {
      return r.kill(e, !0);
    });
  }, s;
}(), hs = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return zl(r);
    });
  },
  timeline: function(t) {
    return new de(t);
  },
  getTweensOf: function(t, i) {
    return xt.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    $t(t) && (t = Xe(t)[0]);
    var n = Ji(t || {}).get, o = e ? Sl : xl;
    return e === "native" && (e = ""), t && (i ? o((ke[i] && ke[i].get || n)(t, i, e, r)) : function(a, u, l) {
      return o((ke[a] && ke[a].get || n)(t, a, u, l));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = Xe(t), t.length > 1) {
      var r = t.map(function(c) {
        return Se.quickSetter(c, i, e);
      }), n = r.length;
      return function(c) {
        for (var p = n; p--; )
          r[p](c);
      };
    }
    t = t[0] || {};
    var o = ke[i], a = Ji(t), u = a.harness && (a.harness.aliases || {})[i] || i, l = o ? function(c) {
      var p = new o();
      xr._pt = 0, p.init(t, e ? c + e : c, xr, 0, [t]), p.render(1, p), xr._pt && Vo(1, xr);
    } : a.set(t, u);
    return o ? l : function(c) {
      return l(t, u, e ? c + e : c, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = Se.to(t, Ie((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), o = function(u, l, c) {
      return n.resetTo(i, u, l, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return xt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = er(t.ease, Lr.ease)), pa(Lr, t || {});
  },
  config: function(t) {
    return pa(Re, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ke[a] && !Le[a] && bn(i + " effect requires " + a + " plugin.");
    }), Ds[i] = function(a, u, l) {
      return e(Xe(a), Ie(u || {}, n), l);
    }, o && (de.prototype[i] = function(a, u, l) {
      return this.add(Ds[i](a, li(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(t, i) {
    et[t] = er(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? er(t, i) : et;
  },
  getById: function(t) {
    return xt.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new de(t), r, n;
    for (e.smoothChildTiming = ve(t.smoothChildTiming), xt.remove(e), e._dp = 0, e._time = e._tTime = xt._time, r = xt._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof Lt && r.vars.onComplete === r._targets[0])) && ni(e, r, r._start - r._delay), r = n;
    return ni(xt, e, 0), e;
  },
  context: function(t, i) {
    return t ? new Kl(t, i) : vt;
  },
  matchMedia: function(t) {
    return new Wc(t);
  },
  matchMediaRefresh: function() {
    return ir.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || uo();
  },
  addEventListener: function(t, i) {
    var e = Jn[t] || (Jn[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = Jn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: bc,
    wrapYoyo: xc,
    distribute: Ml,
    random: Al,
    snap: Dl,
    normalize: wc,
    getUnit: se,
    clamp: gc,
    splitColor: Fl,
    toArray: Xe,
    selector: oo,
    mapRange: Ll,
    pipe: yc,
    unitize: vc,
    interpolate: Sc,
    shuffle: Ol
  },
  install: ml,
  effects: Ds,
  ticker: Oe,
  updateRoot: de.updateRoot,
  plugins: ke,
  globalTimeline: xt,
  core: {
    PropTween: be,
    globals: yl,
    Tween: Lt,
    Timeline: de,
    Animation: En,
    getCache: Ji,
    _removeLinkedListItem: xs,
    reverting: function() {
      return Jt;
    },
    context: function(t) {
      return t && vt && (vt.data.push(t), t._ctx = vt), vt;
    },
    suppressOverwrites: function(t) {
      return Oo = t;
    }
  }
};
we("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return hs[s] = Lt[s];
});
Oe.add(de.updateRoot);
xr = hs.to({}, {
  duration: 0
});
var qc = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, Hc = function(t, i) {
  var e = t._targets, r, n, o;
  for (r in i)
    for (n = e.length; n--; )
      o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = qc(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r));
}, zs = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, o) {
      o._onInit = function(a) {
        var u, l;
        if ($t(n) && (u = {}, we(n, function(c) {
          return u[c] = 1;
        }), n = u), i) {
          u = {};
          for (l in n)
            u[l] = i(n[l]);
          n = u;
        }
        Hc(a, n);
      };
    }
  };
}, Se = hs.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var o, a, u;
    this.tween = e;
    for (o in i)
      u = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (u || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = u, this._props.push(o);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      Jt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, zs("roundProps", ao), zs("modifiers"), zs("snap", Dl)) || hs;
Lt.version = de.version = Se.version = "3.14.2";
gl = 1;
Do() && Br();
et.Power0;
et.Power1;
et.Power2;
et.Power3;
et.Power4;
et.Linear;
et.Quad;
et.Cubic;
et.Quart;
et.Quint;
et.Strong;
et.Elastic;
et.Back;
et.SteppedEase;
et.Bounce;
et.Sine;
et.Expo;
et.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var va, Oi, Pr, Wo, Ki, wa, qo, $c = function() {
  return typeof window < "u";
}, bi = {}, Gi = 180 / Math.PI, Or = Math.PI / 180, gr = Math.atan2, ba = 1e8, Ho = /([A-Z])/g, Uc = /(left|right|width|margin|padding|x)/i, Gc = /[\s,\(]\S/, si = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, co = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, jc = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Zc = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Kc = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Qc = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, Ql = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, Jl = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, Jc = function(t, i, e) {
  return t.style[i] = e;
}, th = function(t, i, e) {
  return t.style.setProperty(i, e);
}, eh = function(t, i, e) {
  return t._gsap[i] = e;
}, ih = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, rh = function(t, i, e, r, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(n, o);
}, nh = function(t, i, e, r, n) {
  var o = t._gsap;
  o[i] = e, o.renderTransform(n, o);
}, St = "transform", xe = St + "Origin", sh = function s(t, i) {
  var e = this, r = this.target, n = r.style, o = r._gsap;
  if (t in bi && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = si[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = di(r, a);
      }) : this.tfm[t] = o.x ? o[t] : di(r, t), t === xe && (this.tfm.zOrigin = o.zOrigin);
    else
      return si.transform.split(",").forEach(function(a) {
        return s.call(e, a, i);
      });
    if (this.props.indexOf(St) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(xe, i, "")), t = St;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, tu = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, oh = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ho, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = qo(), (!n || !n.isStart) && !e[St] && (tu(e), r.zOrigin && e[xe] && (e[xe] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, eu = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: oh,
    save: sh
  };
  return t._gsap || Se.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, iu, ho = function(t, i) {
  var e = Oi.createElementNS ? Oi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Oi.createElement(t);
  return e && e.style ? e : Oi.createElement(t);
}, Ae = function s(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(Ho, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s(t, Nr(i) || i, 1) || "";
}, xa = "O,Moz,ms,Ms,Webkit".split(","), Nr = function(t, i, e) {
  var r = i || Ki, n = r.style, o = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(xa[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? xa[o] : "") + t;
}, fo = function() {
  $c() && window.document && (va = window, Oi = va.document, Pr = Oi.documentElement, Ki = ho("div") || {
    style: {}
  }, ho("div"), St = Nr(St), xe = St + "Origin", Ki.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", iu = !!Nr("perspective"), qo = Se.core.reverting, Wo = 1);
}, Sa = function(t) {
  var i = t.ownerSVGElement, e = ho("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), Pr.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), Pr.removeChild(e), n;
}, Ta = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, ru = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = Sa(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = Sa(t)), i && !i.width && !i.x && !i.y ? {
    x: +Ta(t, ["x", "cx", "x1"]) || 0,
    y: +Ta(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, nu = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ru(t));
}, Fi = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in bi && i !== xe && (i = St), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Ho, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, Mi = function(t, i, e, r, n, o) {
  var a = new be(t._pt, i, e, 0, 1, o ? Jl : Ql);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, Ea = {
  deg: 1,
  rad: 1,
  turn: 1
}, ah = {
  grid: 1,
  flex: 1
}, Bi = function s(t, i, e, r) {
  var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Ki.style, u = Uc.test(i), l = t.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (u ? "Width" : "Height"), p = 100, h = r === "px", f = r === "%", _, d, g, m;
  if (r === o || !n || Ea[r] || Ea[o])
    return n;
  if (o !== "px" && !h && (n = s(t, i, e, "px")), m = t.getCTM && nu(t), (f || o === "%") && (bi[i] || ~i.indexOf("adius")))
    return _ = m ? t.getBBox()[u ? "width" : "height"] : t[c], Pt(f ? n / _ * p : n / 100 * _);
  if (a[u ? "width" : "height"] = p + (h ? o : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, m && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === Oi || !d.appendChild) && (d = Oi.body), g = d._gsap, g && f && g.width && u && g.time === Oe.time && !g.uncache)
    return Pt(n / g.width * p);
  if (f && (i === "height" || i === "width")) {
    var x = t.style[i];
    t.style[i] = p + r, _ = t[c], x ? t.style[i] = x : Fi(t, i);
  } else
    (f || o === "%") && !ah[Ae(d, "display")] && (a.position = Ae(t, "position")), d === t && (a.position = "static"), d.appendChild(Ki), _ = Ki[c], d.removeChild(Ki), a.position = "absolute";
  return u && f && (g = Ji(d), g.time = Oe.time, g.width = d[c]), Pt(h ? _ * n / p : _ && n ? p / _ * n : 0);
}, di = function(t, i, e, r) {
  var n;
  return Wo || fo(), i in si && i !== "transform" && (i = si[i], ~i.indexOf(",") && (i = i.split(",")[0])), bi[i] && i !== "transform" ? (n = kn(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : ps(Ae(t, xe)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = fs[i] && fs[i](t, i, e) || Ae(t, i) || wl(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Bi(t, i, n, e) + e : n;
}, lh = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = Nr(i, t, 1), o = n && Ae(t, n, 1);
    o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = Ae(t, "borderTopColor"));
  }
  var a = new be(this._pt, t.style, i, 0, 1, jl), u = 0, l = 0, c, p, h, f, _, d, g, m, x, w, v, b;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Ae(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = Ae(t, i) || r, d ? t.style[i] = d : Fi(t, i)), c = [e, r], Nl(c), e = c[0], r = c[1], h = e.match(br) || [], b = r.match(br) || [], b.length) {
    for (; p = br.exec(r); )
      g = p[0], x = r.substring(u, p.index), _ ? _ = (_ + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (_ = 1), g !== (d = h[l++] || "") && (f = parseFloat(d) || 0, v = d.substr((f + "").length), g.charAt(1) === "=" && (g = kr(f, g) + v), m = parseFloat(g), w = g.substr((m + "").length), u = br.lastIndex - w.length, w || (w = w || Re.units[i] || v, u === r.length && (r += w, a.e += w)), v !== w && (f = Bi(t, i, d, w) || 0), a._pt = {
        _next: a._pt,
        p: x || l === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: m - f,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? Jl : Ql;
  return _l.test(r) && (a.e = 0), this._pt = a, a;
}, Ca = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, uh = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = Ca[e] || e, i[1] = Ca[r] || r, i.join(" ");
}, ch = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, o = e._gsap, a, u, l;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        a = n[l], bi[a] && (u = 1, a = a === "transformOrigin" ? xe : St), Fi(e, a);
    u && (Fi(e, St), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", kn(e, 1), o.uncache = 1, tu(r)));
  }
}, fs = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new be(t._pt, i, e, 0, 0, ch);
      return o.u = r, o.pr = -10, o.tween = n, t._props.push(e), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Cn = [1, 0, 0, 1, 0, 0], su = {}, ou = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, ka = function(t) {
  var i = Ae(t, St);
  return ou(i) ? Cn : i.substr(7).match(dl).map(Pt);
}, $o = function(t, i) {
  var e = t._gsap || Ji(t), r = t.style, n = ka(t), o, a, u, l;
  return e.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Cn : n) : (n === Cn && !t.offsetParent && t !== Pr && !e.svg && (u = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, a = t.nextElementSibling, Pr.appendChild(t)), n = ka(t), u ? r.display = u : Fi(t, "display"), l && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : Pr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, po = function(t, i, e, r, n, o) {
  var a = t._gsap, u = n || $o(t, !0), l = a.xOrigin || 0, c = a.yOrigin || 0, p = a.xOffset || 0, h = a.yOffset || 0, f = u[0], _ = u[1], d = u[2], g = u[3], m = u[4], x = u[5], w = i.split(" "), v = parseFloat(w[0]) || 0, b = parseFloat(w[1]) || 0, E, S, P, C;
  e ? u !== Cn && (S = f * g - _ * d) && (P = v * (g / S) + b * (-d / S) + (d * x - g * m) / S, C = v * (-_ / S) + b * (f / S) - (f * x - _ * m) / S, v = P, b = C) : (E = ru(t), v = E.x + (~w[0].indexOf("%") ? v / 100 * E.width : v), b = E.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * E.height : b)), r || r !== !1 && a.smooth ? (m = v - l, x = b - c, a.xOffset = p + (m * f + x * d) - m, a.yOffset = h + (m * _ + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = b, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[xe] = "0px 0px", o && (Mi(o, a, "xOrigin", l, v), Mi(o, a, "yOrigin", c, b), Mi(o, a, "xOffset", p, a.xOffset), Mi(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + b);
}, kn = function(t, i) {
  var e = t._gsap || new Wl(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", u = getComputedStyle(t), l = Ae(t, xe) || "0", c, p, h, f, _, d, g, m, x, w, v, b, E, S, P, C, k, A, O, B, I, D, H, X, it, at, y, rt, lt, ge, nt, $;
  return c = p = h = d = g = m = x = w = v = 0, f = _ = 1, e.svg = !!(t.getCTM && nu(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[St] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[St] !== "none" ? u[St] : "")), r.scale = r.rotate = r.translate = "none"), S = $o(t, e.svg), e.svg && (e.uncache ? (it = t.getBBox(), l = e.xOrigin - it.x + "px " + (e.yOrigin - it.y) + "px", X = "") : X = !i && t.getAttribute("data-svg-origin"), po(t, X || l, !!X || e.originIsAbsolute, e.smooth !== !1, S)), b = e.xOrigin || 0, E = e.yOrigin || 0, S !== Cn && (A = S[0], O = S[1], B = S[2], I = S[3], c = D = S[4], p = H = S[5], S.length === 6 ? (f = Math.sqrt(A * A + O * O), _ = Math.sqrt(I * I + B * B), d = A || O ? gr(O, A) * Gi : 0, x = B || I ? gr(B, I) * Gi + d : 0, x && (_ *= Math.abs(Math.cos(x * Or))), e.svg && (c -= b - (b * A + E * B), p -= E - (b * O + E * I))) : ($ = S[6], ge = S[7], y = S[8], rt = S[9], lt = S[10], nt = S[11], c = S[12], p = S[13], h = S[14], P = gr($, lt), g = P * Gi, P && (C = Math.cos(-P), k = Math.sin(-P), X = D * C + y * k, it = H * C + rt * k, at = $ * C + lt * k, y = D * -k + y * C, rt = H * -k + rt * C, lt = $ * -k + lt * C, nt = ge * -k + nt * C, D = X, H = it, $ = at), P = gr(-B, lt), m = P * Gi, P && (C = Math.cos(-P), k = Math.sin(-P), X = A * C - y * k, it = O * C - rt * k, at = B * C - lt * k, nt = I * k + nt * C, A = X, O = it, B = at), P = gr(O, A), d = P * Gi, P && (C = Math.cos(P), k = Math.sin(P), X = A * C + O * k, it = D * C + H * k, O = O * C - A * k, H = H * C - D * k, A = X, D = it), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, m = 180 - m), f = Pt(Math.sqrt(A * A + O * O + B * B)), _ = Pt(Math.sqrt(H * H + $ * $)), P = gr(D, H), x = Math.abs(P) > 2e-4 ? P * Gi : 0, v = nt ? 1 / (nt < 0 ? -nt : nt) : 0), e.svg && (X = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !ou(Ae(t, St)), X && t.setAttribute("transform", X))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (f *= -1, x += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, x += x <= 0 ? 180 : -180)), i = i || e.uncache, e.x = c - ((e.xPercent = c && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = p - ((e.yPercent = p && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = h + o, e.scaleX = Pt(f), e.scaleY = Pt(_), e.rotation = Pt(d) + a, e.rotationX = Pt(g) + a, e.rotationY = Pt(m) + a, e.skewX = x + a, e.skewY = w + a, e.transformPerspective = v + o, (e.zOrigin = parseFloat(l.split(" ")[2]) || !i && e.zOrigin || 0) && (r[xe] = ps(l)), e.xOffset = e.yOffset = 0, e.force3D = Re.force3D, e.renderTransform = e.svg ? fh : iu ? au : hh, e.uncache = 0, e;
}, ps = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Fs = function(t, i, e) {
  var r = se(i);
  return Pt(parseFloat(i) + parseFloat(Bi(t, "x", e + "px", r))) + r;
}, hh = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, au(t, i);
}, $i = "0deg", Ur = "0px", Ui = ") ", au = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, u = e.z, l = e.rotation, c = e.rotationY, p = e.rotationX, h = e.skewX, f = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective, m = e.force3D, x = e.target, w = e.zOrigin, v = "", b = m === "auto" && t && t !== 1 || m === !0;
  if (w && (p !== $i || c !== $i)) {
    var E = parseFloat(c) * Or, S = Math.sin(E), P = Math.cos(E), C;
    E = parseFloat(p) * Or, C = Math.cos(E), o = Fs(x, o, S * C * -w), a = Fs(x, a, -Math.sin(E) * -w), u = Fs(x, u, P * C * -w + w);
  }
  g !== Ur && (v += "perspective(" + g + Ui), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (b || o !== Ur || a !== Ur || u !== Ur) && (v += u !== Ur || b ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + Ui), l !== $i && (v += "rotate(" + l + Ui), c !== $i && (v += "rotateY(" + c + Ui), p !== $i && (v += "rotateX(" + p + Ui), (h !== $i || f !== $i) && (v += "skew(" + h + ", " + f + Ui), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Ui), x.style[St] = v || "translate(0, 0)";
}, fh = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, u = e.rotation, l = e.skewX, c = e.skewY, p = e.scaleX, h = e.scaleY, f = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, m = e.yOffset, x = e.forceCSS, w = parseFloat(o), v = parseFloat(a), b, E, S, P, C;
  u = parseFloat(u), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, u += c), u || l ? (u *= Or, l *= Or, b = Math.cos(u) * p, E = Math.sin(u) * p, S = Math.sin(u - l) * -h, P = Math.cos(u - l) * h, l && (c *= Or, C = Math.tan(l - c), C = Math.sqrt(1 + C * C), S *= C, P *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), b *= C, E *= C)), b = Pt(b), E = Pt(E), S = Pt(S), P = Pt(P)) : (b = p, P = h, E = S = 0), (w && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (w = Bi(f, "x", o, "px"), v = Bi(f, "y", a, "px")), (_ || d || g || m) && (w = Pt(w + _ - (_ * b + d * S) + g), v = Pt(v + d - (_ * E + d * P) + m)), (r || n) && (C = f.getBBox(), w = Pt(w + r / 100 * C.width), v = Pt(v + n / 100 * C.height)), C = "matrix(" + b + "," + E + "," + S + "," + P + "," + w + "," + v + ")", f.setAttribute("transform", C), x && (f.style[St] = C);
}, ph = function(t, i, e, r, n) {
  var o = 360, a = $t(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? Gi : 1), l = u - r, c = r + l + "deg", p, h;
  return a && (p = n.split("_")[1], p === "short" && (l %= o, l !== l % (o / 2) && (l += l < 0 ? o : -o)), p === "cw" && l < 0 ? l = (l + o * ba) % o - ~~(l / o) * o : p === "ccw" && l > 0 && (l = (l - o * ba) % o - ~~(l / o) * o)), t._pt = h = new be(t._pt, i, e, r, l, jc), h.e = c, h.u = "deg", t._props.push(e), h;
}, Pa = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, dh = function(t, i, e) {
  var r = Pa({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, u, l, c, p, h, f, _;
  r.svg ? (l = e.getAttribute("transform"), e.setAttribute("transform", ""), o[St] = i, a = kn(e, 1), Fi(e, St), e.setAttribute("transform", l)) : (l = getComputedStyle(e)[St], o[St] = i, a = kn(e, 1), o[St] = l);
  for (u in bi)
    l = r[u], c = a[u], l !== c && n.indexOf(u) < 0 && (f = se(l), _ = se(c), p = f !== _ ? Bi(e, u, l, _) : parseFloat(l), h = parseFloat(c), t._pt = new be(t._pt, a, u, p, h - p, co), t._pt.u = _ || 0, t._props.push(u));
  Pa(a, r);
};
we("padding,margin,Width,Radius", function(s, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  fs[t > 1 ? "border" + s : s] = function(a, u, l, c, p) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return di(a, _, l);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(_, d) {
      return f[_] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(u, f, p);
  };
});
var lu = {
  name: "css",
  register: fo,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var o = this._props, a = t.style, u = e.vars.startAt, l, c, p, h, f, _, d, g, m, x, w, v, b, E, S, P, C;
    Wo || fo(), this.styles = this.styles || eu(t), P = this.styles.props, this.tween = e;
    for (d in i)
      if (d !== "autoRound" && (c = i[d], !(ke[d] && ql(d, i, e, r, t, n)))) {
        if (f = typeof c, _ = fs[d], f === "function" && (c = c.call(e, r, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = Sn(c)), _)
          _(this, t, d, c, e) && (S = 1);
        else if (d.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(d) + "").trim(), c += "", Li.lastIndex = 0, Li.test(l) || (g = se(l), m = se(c), m ? g !== m && (l = Bi(t, d, l, m) + m) : g && (c += g)), this.add(a, "setProperty", l, c, r, n, 0, 0, d), o.push(d), P.push(d, 0, a[d]);
        else if (f !== "undefined") {
          if (u && d in u ? (l = typeof u[d] == "function" ? u[d].call(e, r, t, n) : u[d], $t(l) && ~l.indexOf("random(") && (l = Sn(l)), se(l + "") || l === "auto" || (l += Re.units[d] || se(di(t, d)) || ""), (l + "").charAt(1) === "=" && (l = di(t, d))) : l = di(t, d), h = parseFloat(l), x = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), x && (c = c.substr(2)), p = parseFloat(c), d in si && (d === "autoAlpha" && (h === 1 && di(t, "visibility") === "hidden" && p && (h = 0), P.push("visibility", 0, a.visibility), Mi(this, a, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = si[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in bi, w) {
            if (this.styles.save(d), C = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = Ae(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var k = t.style.perspective;
                t.style.perspective = c, c = Ae(t, "perspective"), k ? t.style.perspective = k : Fi(t, "perspective");
              }
              p = parseFloat(c);
            }
            if (v || (b = t._gsap, b.renderTransform && !i.parseTransform || kn(t, i.parseTransform), E = i.smoothOrigin !== !1 && b.smooth, v = this._pt = new be(this._pt, a, St, 0, 1, b.renderTransform, b, 0, -1), v.dep = 1), d === "scale")
              this._pt = new be(this._pt, b, "scaleY", b.scaleY, (x ? kr(b.scaleY, x + p) : p) - b.scaleY || 0, co), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              P.push(xe, 0, a[xe]), c = uh(c), b.svg ? po(t, c, 0, E, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0, m !== b.zOrigin && Mi(this, b, "zOrigin", b.zOrigin, m), Mi(this, a, d, ps(l), ps(c)));
              continue;
            } else if (d === "svgOrigin") {
              po(t, c, 1, E, 0, this);
              continue;
            } else if (d in su) {
              ph(this, b, d, h, x ? kr(h, x + c) : c);
              continue;
            } else if (d === "smoothOrigin") {
              Mi(this, b, "smooth", b.smooth, c);
              continue;
            } else if (d === "force3D") {
              b[d] = c;
              continue;
            } else if (d === "transform") {
              dh(this, c, t);
              continue;
            }
          } else d in a || (d = Nr(d) || d);
          if (w || (p || p === 0) && (h || h === 0) && !Gc.test(c) && d in a)
            g = (l + "").substr((h + "").length), p || (p = 0), m = se(c) || (d in Re.units ? Re.units[d] : g), g !== m && (h = Bi(t, d, l, m)), this._pt = new be(this._pt, w ? b : a, d, h, (x ? kr(h, x + p) : p) - h, !w && (m === "px" || d === "zIndex") && i.autoRound !== !1 ? Qc : co), this._pt.u = m || 0, w && C !== c ? (this._pt.b = l, this._pt.e = C, this._pt.r = Kc) : g !== m && m !== "%" && (this._pt.b = l, this._pt.r = Zc);
          else if (d in a)
            lh.call(this, t, d, l, x ? x + c : c);
          else if (d in t)
            this.add(t, d, l || t[d], x ? x + c : c, r, n);
          else if (d !== "parseTransform") {
            Ro(d, c);
            continue;
          }
          w || (d in a ? P.push(d, 0, a[d]) : typeof t[d] == "function" ? P.push(d, 2, t[d]()) : P.push(d, 1, l || t[d])), o.push(d);
        }
      }
    S && Zl(this);
  },
  render: function(t, i) {
    if (i.tween._time || !qo())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: di,
  aliases: si,
  getSetter: function(t, i, e) {
    var r = si[i];
    return r && r.indexOf(",") < 0 && (i = r), i in bi && i !== xe && (t._gsap.x || di(t, "x")) ? e && wa === e ? i === "scale" ? ih : eh : (wa = e || {}) && (i === "scale" ? rh : nh) : t.style && !Mo(t.style[i]) ? Jc : ~i.indexOf("-") ? th : Xo(t, i);
  },
  core: {
    _removeProperty: Fi,
    _getMatrix: $o
  }
};
Se.utils.checkPrefix = Nr;
Se.core.getStyleSaver = eu;
(function(s, t, i, e) {
  var r = we(s + "," + t + "," + i, function(n) {
    bi[n] = 1;
  });
  we(t, function(n) {
    Re.units[n] = "deg", su[n] = 1;
  }), si[r[13]] = s + "," + t, we(e, function(n) {
    var o = n.split(":");
    si[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
we("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  Re.units[s] = "px";
});
Se.registerPlugin(lu);
var Ht = Se.registerPlugin(lu) || Se;
Ht.core.Tween;
function _h(s, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
  }
}
function gh(s, t, i) {
  return t && _h(s.prototype, t), s;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Qt, ts, Me, Di, Ai, Mr, uu, ji, ln, cu, gi, je, hu, fu = function() {
  return Qt || typeof window < "u" && (Qt = window.gsap) && Qt.registerPlugin && Qt;
}, pu = 1, Sr = [], K = [], ai = [], un = Date.now, _o = function(t, i) {
  return i;
}, mh = function() {
  var t = ln.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, K), r.push.apply(r, ai), K = e, ai = r, _o = function(o, a) {
    return i[o](a);
  };
}, Ii = function(t, i) {
  return ~ai.indexOf(t) && ai[ai.indexOf(t) + 1][i];
}, cn = function(t) {
  return !!~cu.indexOf(t);
}, ce = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, ue = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, zn = "scrollLeft", Fn = "scrollTop", go = function() {
  return gi && gi.isPressed || K.cache++;
}, ds = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      pu && (Me.history.scrollRestoration = "manual");
      var o = gi && gi.isPressed;
      n = r.v = Math.round(n) || (gi && gi.iOS ? 1 : 0), t(n), r.cacheID = K.cache, o && _o("ss", n);
    } else (i || K.cache !== r.cacheID || _o("ref")) && (r.cacheID = K.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, _e = {
  s: zn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: ds(function(s) {
    return arguments.length ? Me.scrollTo(s, Bt.sc()) : Me.pageXOffset || Di[zn] || Ai[zn] || Mr[zn] || 0;
  })
}, Bt = {
  s: Fn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _e,
  sc: ds(function(s) {
    return arguments.length ? Me.scrollTo(_e.sc(), s) : Me.pageYOffset || Di[Fn] || Ai[Fn] || Mr[Fn] || 0;
  })
}, ye = function(t, i) {
  return (i && i._ctx && i._ctx.selector || Qt.utils.toArray)(t)[0] || (typeof t == "string" && Qt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, yh = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, Ni = function(t, i) {
  var e = i.s, r = i.sc;
  cn(t) && (t = Di.scrollingElement || Ai);
  var n = K.indexOf(t), o = r === Bt.sc ? 1 : 2;
  !~n && (n = K.push(t) - 1), K[n + o] || ce(t, "scroll", go);
  var a = K[n + o], u = a || (K[n + o] = ds(Ii(t, e), !0) || (cn(t) ? r : ds(function(l) {
    return arguments.length ? t[e] = l : t[e];
  })));
  return u.target = t, a || (u.smooth = Qt.getProperty(t, "scrollBehavior") === "smooth"), u;
}, mo = function(t, i, e) {
  var r = t, n = t, o = un(), a = o, u = i || 50, l = Math.max(500, u * 3), c = function(_, d) {
    var g = un();
    d || g - o > u ? (n = r, r = _, a = o, o = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (o - a);
  }, p = function() {
    n = r = e ? 0 : r, a = o = 0;
  }, h = function(_) {
    var d = a, g = n, m = un();
    return (_ || _ === 0) && _ !== r && c(_), o === a || m - a > l ? 0 : (r + (e ? g : -g)) / ((e ? m : o) - d) * 1e3;
  };
  return {
    update: c,
    reset: p,
    getVelocity: h
  };
}, Gr = function(t, i) {
  return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Oa = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, du = function() {
  ln = Qt.core.globals().ScrollTrigger, ln && ln.core && mh();
}, _u = function(t) {
  return Qt = t || fu(), !ts && Qt && typeof document < "u" && document.body && (Me = window, Di = document, Ai = Di.documentElement, Mr = Di.body, cu = [Me, Di, Ai, Mr], Qt.utils.clamp, hu = Qt.core.context || function() {
  }, ji = "onpointerenter" in Mr ? "pointer" : "mouse", uu = Ot.isTouch = Me.matchMedia && Me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Me || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, je = Ot.eventTypes = ("ontouchstart" in Ai ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ai ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return pu = 0;
  }, 500), du(), ts = 1), ts;
};
_e.op = Bt;
K.cache = 0;
var Ot = /* @__PURE__ */ function() {
  function s(i) {
    this.init(i);
  }
  var t = s.prototype;
  return t.init = function(e) {
    ts || _u(Qt) || console.warn("Please gsap.registerPlugin(Observer)"), ln || du();
    var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, u = e.lineHeight, l = e.debounce, c = e.preventDefault, p = e.onStop, h = e.onStopDelay, f = e.ignore, _ = e.wheelSpeed, d = e.event, g = e.onDragStart, m = e.onDragEnd, x = e.onDrag, w = e.onPress, v = e.onRelease, b = e.onRight, E = e.onLeft, S = e.onUp, P = e.onDown, C = e.onChangeX, k = e.onChangeY, A = e.onChange, O = e.onToggleX, B = e.onToggleY, I = e.onHover, D = e.onHoverEnd, H = e.onMove, X = e.ignoreCheck, it = e.isNormalizer, at = e.onGestureStart, y = e.onGestureEnd, rt = e.onWheel, lt = e.onEnable, ge = e.onDisable, nt = e.onClick, $ = e.scrollSpeed, U = e.capture, ut = e.allowClicks, pt = e.lockAxis, Mt = e.onLockAxis;
    this.target = a = ye(a) || Ai, this.vars = e, f && (f = Qt.utils.toArray(f)), r = r || 1e-9, n = n || 0, _ = _ || 1, $ = $ || 1, o = o || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(Me.getComputedStyle(Mr).lineHeight) || 22);
    var Nt, gt, It, z, Q, Ut, Gt, T = this, Dt = 0, le = 0, Qe = e.passive || !c && e.passive !== !1, dt = Ni(a, _e), N = Ni(a, Bt), We = dt(), Xi = N(), Yt = ~o.indexOf("touch") && !~o.indexOf("pointer") && je[0] === "pointerdown", xi = cn(a), Ct = a.ownerDocument || Di, qe = [0, 0, 0], ze = [0, 0, 0], ci = 0, Wr = function() {
      return ci = un();
    }, At = function(Y, st) {
      return (T.event = Y) && f && yh(Y.target, f) || st && Yt && Y.pointerType !== "touch" || X && X(Y, st);
    }, An = function() {
      T._vx.reset(), T._vy.reset(), gt.pause(), p && p(T);
    }, hi = function() {
      var Y = T.deltaX = Oa(qe), st = T.deltaY = Oa(ze), M = Math.abs(Y) >= r, V = Math.abs(st) >= r;
      A && (M || V) && A(T, Y, st, qe, ze), M && (b && T.deltaX > 0 && b(T), E && T.deltaX < 0 && E(T), C && C(T), O && T.deltaX < 0 != Dt < 0 && O(T), Dt = T.deltaX, qe[0] = qe[1] = qe[2] = 0), V && (P && T.deltaY > 0 && P(T), S && T.deltaY < 0 && S(T), k && k(T), B && T.deltaY < 0 != le < 0 && B(T), le = T.deltaY, ze[0] = ze[1] = ze[2] = 0), (z || It) && (H && H(T), It && (g && It === 1 && g(T), x && x(T), It = 0), z = !1), Ut && !(Ut = !1) && Mt && Mt(T), Q && (rt(T), Q = !1), Nt = 0;
    }, pr = function(Y, st, M) {
      qe[M] += Y, ze[M] += st, T._vx.update(Y), T._vy.update(st), l ? Nt || (Nt = requestAnimationFrame(hi)) : hi();
    }, dr = function(Y, st) {
      pt && !Gt && (T.axis = Gt = Math.abs(Y) > Math.abs(st) ? "x" : "y", Ut = !0), Gt !== "y" && (qe[2] += Y, T._vx.update(Y, !0)), Gt !== "x" && (ze[2] += st, T._vy.update(st, !0)), l ? Nt || (Nt = requestAnimationFrame(hi)) : hi();
    }, Si = function(Y) {
      if (!At(Y, 1)) {
        Y = Gr(Y, c);
        var st = Y.clientX, M = Y.clientY, V = st - T.x, F = M - T.y, W = T.isDragging;
        T.x = st, T.y = M, (W || (V || F) && (Math.abs(T.startX - st) >= n || Math.abs(T.startY - M) >= n)) && (It || (It = W ? 2 : 1), W || (T.isDragging = !0), dr(V, F));
      }
    }, Vi = T.onPress = function(q) {
      At(q, 1) || q && q.button || (T.axis = Gt = null, gt.pause(), T.isPressed = !0, q = Gr(q), Dt = le = 0, T.startX = T.x = q.clientX, T.startY = T.y = q.clientY, T._vx.reset(), T._vy.reset(), ce(it ? a : Ct, je[1], Si, Qe, !0), T.deltaX = T.deltaY = 0, w && w(T));
    }, J = T.onRelease = function(q) {
      if (!At(q, 1)) {
        ue(it ? a : Ct, je[1], Si, !0);
        var Y = !isNaN(T.y - T.startY), st = T.isDragging, M = st && (Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3), V = Gr(q);
        !M && Y && (T._vx.reset(), T._vy.reset(), c && ut && Qt.delayedCall(0.08, function() {
          if (un() - ci > 300 && !q.defaultPrevented) {
            if (q.target.click)
              q.target.click();
            else if (Ct.createEvent) {
              var F = Ct.createEvent("MouseEvents");
              F.initMouseEvent("click", !0, !0, Me, 1, V.screenX, V.screenY, V.clientX, V.clientY, !1, !1, !1, !1, 0, null), q.target.dispatchEvent(F);
            }
          }
        })), T.isDragging = T.isGesturing = T.isPressed = !1, p && st && !it && gt.restart(!0), It && hi(), m && st && m(T), v && v(T, M);
      }
    }, Wi = function(Y) {
      return Y.touches && Y.touches.length > 1 && (T.isGesturing = !0) && at(Y, T.isDragging);
    }, He = function() {
      return (T.isGesturing = !1) || y(T);
    }, $e = function(Y) {
      if (!At(Y)) {
        var st = dt(), M = N();
        pr((st - We) * $, (M - Xi) * $, 1), We = st, Xi = M, p && gt.restart(!0);
      }
    }, Ue = function(Y) {
      if (!At(Y)) {
        Y = Gr(Y, c), rt && (Q = !0);
        var st = (Y.deltaMode === 1 ? u : Y.deltaMode === 2 ? Me.innerHeight : 1) * _;
        pr(Y.deltaX * st, Y.deltaY * st, 0), p && !it && gt.restart(!0);
      }
    }, qi = function(Y) {
      if (!At(Y)) {
        var st = Y.clientX, M = Y.clientY, V = st - T.x, F = M - T.y;
        T.x = st, T.y = M, z = !0, p && gt.restart(!0), (V || F) && dr(V, F);
      }
    }, _r = function(Y) {
      T.event = Y, I(T);
    }, fi = function(Y) {
      T.event = Y, D(T);
    }, qr = function(Y) {
      return At(Y) || Gr(Y, c) && nt(T);
    };
    gt = T._dc = Qt.delayedCall(h || 0.25, An).pause(), T.deltaX = T.deltaY = 0, T._vx = mo(0, 50, !0), T._vy = mo(0, 50, !0), T.scrollX = dt, T.scrollY = N, T.isDragging = T.isGesturing = T.isPressed = !1, hu(this), T.enable = function(q) {
      return T.isEnabled || (ce(xi ? Ct : a, "scroll", go), o.indexOf("scroll") >= 0 && ce(xi ? Ct : a, "scroll", $e, Qe, U), o.indexOf("wheel") >= 0 && ce(a, "wheel", Ue, Qe, U), (o.indexOf("touch") >= 0 && uu || o.indexOf("pointer") >= 0) && (ce(a, je[0], Vi, Qe, U), ce(Ct, je[2], J), ce(Ct, je[3], J), ut && ce(a, "click", Wr, !0, !0), nt && ce(a, "click", qr), at && ce(Ct, "gesturestart", Wi), y && ce(Ct, "gestureend", He), I && ce(a, ji + "enter", _r), D && ce(a, ji + "leave", fi), H && ce(a, ji + "move", qi)), T.isEnabled = !0, T.isDragging = T.isGesturing = T.isPressed = z = It = !1, T._vx.reset(), T._vy.reset(), We = dt(), Xi = N(), q && q.type && Vi(q), lt && lt(T)), T;
    }, T.disable = function() {
      T.isEnabled && (Sr.filter(function(q) {
        return q !== T && cn(q.target);
      }).length || ue(xi ? Ct : a, "scroll", go), T.isPressed && (T._vx.reset(), T._vy.reset(), ue(it ? a : Ct, je[1], Si, !0)), ue(xi ? Ct : a, "scroll", $e, U), ue(a, "wheel", Ue, U), ue(a, je[0], Vi, U), ue(Ct, je[2], J), ue(Ct, je[3], J), ue(a, "click", Wr, !0), ue(a, "click", qr), ue(Ct, "gesturestart", Wi), ue(Ct, "gestureend", He), ue(a, ji + "enter", _r), ue(a, ji + "leave", fi), ue(a, ji + "move", qi), T.isEnabled = T.isPressed = T.isDragging = !1, ge && ge(T));
    }, T.kill = T.revert = function() {
      T.disable();
      var q = Sr.indexOf(T);
      q >= 0 && Sr.splice(q, 1), gi === T && (gi = 0);
    }, Sr.push(T), it && cn(a) && (gi = T), T.enable(d);
  }, gh(s, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), s;
}();
Ot.version = "3.14.2";
Ot.create = function(s) {
  return new Ot(s);
};
Ot.register = _u;
Ot.getAll = function() {
  return Sr.slice();
};
Ot.getById = function(s) {
  return Sr.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
fu() && Qt.registerPlugin(Ot);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var R, vr, Z, _t, Pe, ot, Uo, _s, Pn, hn, Qr, Bn, re, Es, yo, fe, Ma, Da, wr, gu, Bs, mu, he, vo, yu, vu, Ci, wo, Go, Dr, jo, fn, bo, Ns, Nn = 1, ne = Date.now, Ys = ne(), Ve = 0, Jr = 0, Aa = function(t, i, e) {
  var r = Ce(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Ra = function(t, i) {
  return i && (!Ce(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, vh = function s() {
  return Jr && requestAnimationFrame(s);
}, La = function() {
  return Es = 1;
}, Ia = function() {
  return Es = 0;
}, ri = function(t) {
  return t;
}, tn = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, wu = function() {
  return typeof window < "u";
}, bu = function() {
  return R || wu() && (R = window.gsap) && R.registerPlugin && R;
}, ar = function(t) {
  return !!~Uo.indexOf(t);
}, xu = function(t) {
  return (t === "Height" ? jo : Z["inner" + t]) || Pe["client" + t] || ot["client" + t];
}, Su = function(t) {
  return Ii(t, "getBoundingClientRect") || (ar(t) ? function() {
    return ss.width = Z.innerWidth, ss.height = jo, ss;
  } : function() {
    return _i(t);
  });
}, wh = function(t, i, e) {
  var r = e.d, n = e.d2, o = e.a;
  return (o = Ii(t, "getBoundingClientRect")) ? function() {
    return o()[r];
  } : function() {
    return (i ? xu(n) : t["client" + n]) || 0;
  };
}, bh = function(t, i) {
  return !i || ~ai.indexOf(t) ? Su(t) : function() {
    return ss;
  };
}, oi = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, o = i.a;
  return Math.max(0, (e = "scroll" + r) && (o = Ii(t, e)) ? o() - Su(t)()[n] : ar(t) ? (Pe[e] || ot[e]) - xu(r) : t[e] - t["offset" + r]);
}, Yn = function(t, i) {
  for (var e = 0; e < wr.length; e += 3)
    (!i || ~i.indexOf(wr[e + 1])) && t(wr[e], wr[e + 1], wr[e + 2]);
}, Ce = function(t) {
  return typeof t == "string";
}, oe = function(t) {
  return typeof t == "function";
}, en = function(t) {
  return typeof t == "number";
}, Zi = function(t) {
  return typeof t == "object";
}, jr = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, Xs = function(t, i) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return i(t);
    }) : i(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, mr = Math.abs, Tu = "left", Eu = "top", Zo = "right", Ko = "bottom", rr = "width", nr = "height", pn = "Right", dn = "Left", _n = "Top", gn = "Bottom", Rt = "padding", Be = "margin", Yr = "Width", Qo = "Height", Ft = "px", Ne = function(t) {
  return Z.getComputedStyle(t);
}, xh = function(t) {
  var i = Ne(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, za = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, _i = function(t, i) {
  var e = i && Ne(t)[yo] !== "matrix(1, 0, 0, 1, 0, 0)" && R.to(t, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), r = t.getBoundingClientRect();
  return e && e.progress(0).kill(), r;
}, gs = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, Cu = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, Sh = function(t) {
  return function(i) {
    return R.utils.snap(Cu(t), i);
  };
}, Jo = function(t) {
  var i = R.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
    return r - n;
  });
  return e ? function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!n)
      return i(r);
    if (n > 0) {
      for (r -= o, a = 0; a < e.length; a++)
        if (e[a] >= r)
          return e[a];
      return e[a - 1];
    } else
      for (a = e.length, r += o; a--; )
        if (e[a] <= r)
          return e[a];
    return e[0];
  } : function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a = i(r);
    return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : i(n < 0 ? r - t : r + t);
  };
}, Th = function(t) {
  return function(i, e) {
    return Jo(Cu(t))(i, e.direction);
  };
}, Xn = function(t, i, e, r) {
  return e.split(",").forEach(function(n) {
    return t(i, n, r);
  });
}, qt = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: !r,
    capture: !!n
  });
}, Wt = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Vn = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, Fa = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Wn = {
  toggleActions: "play",
  anticipatePin: 0
}, ms = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, es = function(t, i) {
  if (Ce(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in ms ? ms[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, qn = function(t, i, e, r, n, o, a, u) {
  var l = n.startColor, c = n.endColor, p = n.fontSize, h = n.indent, f = n.fontWeight, _ = _t.createElement("div"), d = ar(e) || Ii(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, m = d ? ot : e, x = t.indexOf("start") !== -1, w = x ? l : c, v = "border-color:" + w + ";font-size:" + p + ";color:" + w + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((g || u) && d ? "fixed;" : "absolute;"), (g || u || !d) && (v += (r === Bt ? Zo : Ko) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = x, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_), _._offset = _["offset" + r.op.d2], is(_, 0, r, x), _;
}, is = function(t, i, e, r) {
  var n = {
    display: "block"
  }, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + Yr] = 1, n["border" + a + Yr] = 0, n[e.p] = i + "px", R.set(t, n);
}, j = [], xo = {}, On, Ba = function() {
  return ne() - Ve > 34 && (On || (On = requestAnimationFrame(vi)));
}, yr = function() {
  (!he || !he.isPressed || he.startX > ot.clientWidth) && (K.cache++, he ? On || (On = requestAnimationFrame(vi)) : vi(), Ve || ur("scrollStart"), Ve = ne());
}, Vs = function() {
  vu = Z.innerWidth, yu = Z.innerHeight;
}, rn = function(t) {
  K.cache++, (t === !0 || !re && !mu && !_t.fullscreenElement && !_t.webkitFullscreenElement && (!vo || vu !== Z.innerWidth || Math.abs(Z.innerHeight - yu) > Z.innerHeight * 0.25)) && _s.restart(!0);
}, lr = {}, Eh = [], ku = function s() {
  return Wt(G, "scrollEnd", s) || Qi(!0);
}, ur = function(t) {
  return lr[t] && lr[t].map(function(i) {
    return i();
  }) || Eh;
}, Ee = [], Pu = function(t) {
  for (var i = 0; i < Ee.length; i += 5)
    (!t || Ee[i + 4] && Ee[i + 4].query === t) && (Ee[i].style.cssText = Ee[i + 1], Ee[i].getBBox && Ee[i].setAttribute("transform", Ee[i + 2] || ""), Ee[i + 3].uncache = 1);
}, Ou = function() {
  return K.forEach(function(t) {
    return oe(t) && ++t.cacheID && (t.rec = t());
  });
}, ta = function(t, i) {
  var e;
  for (fe = 0; fe < j.length; fe++)
    e = j[fe], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  fn = !0, i && Pu(i), i || ur("revert");
}, Mu = function(t, i) {
  K.cache++, (i || !pe) && K.forEach(function(e) {
    return oe(e) && e.cacheID++ && (e.rec = 0);
  }), Ce(t) && (Z.history.scrollRestoration = Go = t);
}, pe, sr = 0, Na, Ch = function() {
  if (Na !== sr) {
    var t = Na = sr;
    requestAnimationFrame(function() {
      return t === sr && Qi(!0);
    });
  }
}, Du = function() {
  ot.appendChild(Dr), jo = !he && Dr.offsetHeight || Z.innerHeight, ot.removeChild(Dr);
}, Ya = function(t) {
  return Pn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, Qi = function(t, i) {
  if (Pe = _t.documentElement, ot = _t.body, Uo = [Z, _t, Pe, ot], Ve && !t && !fn) {
    qt(G, "scrollEnd", ku);
    return;
  }
  Du(), pe = G.isRefreshing = !0, fn || Ou();
  var e = ur("refreshInit");
  gu && G.sort(), i || ta(), K.forEach(function(r) {
    oe(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), j.slice(0).forEach(function(r) {
    return r.refresh();
  }), fn = !1, j.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
    }
  }), bo = 1, Ya(!0), j.forEach(function(r) {
    var n = oi(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Ya(!1), bo = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), K.forEach(function(r) {
    oe(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), Mu(Go, 1), _s.pause(), sr++, pe = 2, vi(2), j.forEach(function(r) {
    return oe(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), pe = G.isRefreshing = !1, ur("refresh");
}, So = 0, rs = 1, mn, vi = function(t) {
  if (t === 2 || !pe && !fn) {
    G.isUpdating = !0, mn && mn.update(0);
    var i = j.length, e = ne(), r = e - Ys >= 50, n = i && j[0].scroll();
    if (rs = So > n ? -1 : 1, pe || (So = n), r && (Ve && !Es && e - Ve > 200 && (Ve = 0, ur("scrollEnd")), Qr = Ys, Ys = e), rs < 0) {
      for (fe = i; fe-- > 0; )
        j[fe] && j[fe].update(0, r);
      rs = 1;
    } else
      for (fe = 0; fe < i; fe++)
        j[fe] && j[fe].update(0, r);
    G.isUpdating = !1;
  }
  On = 0;
}, To = [Tu, Eu, Ko, Zo, Be + gn, Be + pn, Be + _n, Be + dn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ns = To.concat([rr, nr, "boxSizing", "max" + Yr, "max" + Qo, "position", Be, Rt, Rt + _n, Rt + pn, Rt + gn, Rt + dn]), kh = function(t, i, e) {
  Ar(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    Ar(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, Ws = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = To.length, o = i.style, a = t.style, u; n--; )
      u = To[n], o[u] = e[u];
    o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[Ko] = a[Zo] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[rr] = gs(t, _e) + Ft, o[nr] = gs(t, Bt) + Ft, o[Rt] = a[Be] = a[Eu] = a[Tu] = "0", Ar(r), a[rr] = a["max" + Yr] = e[rr], a[nr] = a["max" + Qo] = e[nr], a[Rt] = e[Rt], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Ph = /([A-Z])/g, Ar = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, o;
    for ((t.t._gsap || R.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(Ph, "-$1").toLowerCase());
  }
}, Hn = function(t) {
  for (var i = ns.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(ns[n], e[ns[n]]);
  return r.t = t, r;
}, Oh = function(t, i, e) {
  for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
    a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
  return r.t = t.t, r;
}, ss = {
  left: 0,
  top: 0
}, Xa = function(t, i, e, r, n, o, a, u, l, c, p, h, f, _) {
  oe(t) && (t = t(u)), Ce(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? es("0" + t.substr(3), e) : 0));
  var d = f ? f.time() : 0, g, m, x;
  if (f && f.seek(0), isNaN(t) || (t = +t), en(t))
    f && (t = R.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && is(a, e, r, !0);
  else {
    oe(i) && (i = i(u));
    var w = (t || "0").split(" "), v, b, E, S;
    x = ye(i, u) || ot, v = _i(x) || {}, (!v || !v.left && !v.top) && Ne(x).display === "none" && (S = x.style.display, x.style.display = "block", v = _i(x), S ? x.style.display = S : x.style.removeProperty("display")), b = es(w[0], v[r.d]), E = es(w[1] || "0", e), t = v[r.p] - l[r.p] - c + b + n - E, a && is(a, E, r, e - E < 20 || a._isStart && E > 20), e -= e - E;
  }
  if (_ && (u[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + e, C = o._isStart;
    g = "scroll" + r.d2, is(o, P, r, C && P > 20 || !C && (p ? Math.max(ot[g], Pe[g]) : o.parentNode[g]) <= P + 1), p && (l = _i(a), p && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + Ft));
  }
  return f && x && (g = _i(x), f.seek(h), m = _i(x), f._caScrollDist = g[r.p] - m[r.p], t = t / f._caScrollDist * h), f && f.seek(d), f ? t : Math.round(t);
}, Mh = /(webkit|moz|length|cssText|inset)/i, Va = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, o, a;
    if (i === ot) {
      t._stOrig = n.cssText, a = Ne(t);
      for (o in a)
        !+o && !Mh.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    R.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, Au = function(t, i, e) {
  var r = i, n = r;
  return function(o) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r;
  };
}, $n = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, R.set(t, r);
}, Wa = function(t, i) {
  var e = Ni(t, i), r = "_scroll" + i.p2, n = function o(a, u, l, c, p) {
    var h = o.tween, f = u.onComplete, _ = {};
    l = l || e();
    var d = Au(e, l, function() {
      h.kill(), o.tween = 0;
    });
    return p = c && p || 0, c = c || a - l, h && h.kill(), u[r] = a, u.inherit = !1, u.modifiers = _, _[r] = function() {
      return d(l + c * h.ratio + p * h.ratio * h.ratio);
    }, u.onUpdate = function() {
      K.cache++, o.tween && vi();
    }, u.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = R.to(t, u), h;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, qt(t, "wheel", e.wheelHandler), G.isTouch && qt(t, "touchmove", e.wheelHandler), n;
}, G = /* @__PURE__ */ function() {
  function s(i, e) {
    vr || s.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), wo(this), this.init(i, e);
  }
  var t = s.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Jr) {
      this.update = this.refresh = this.kill = ri;
      return;
    }
    e = za(Ce(e) || en(e) || e.nodeType ? {
      trigger: e
    } : e, Wn);
    var n = e, o = n.onUpdate, a = n.toggleClass, u = n.id, l = n.onToggle, c = n.onRefresh, p = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, m = n.onScrubComplete, x = n.onSnapComplete, w = n.once, v = n.snap, b = n.pinReparent, E = n.pinSpacer, S = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, k = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? _e : Bt, A = !p && p !== 0, O = ye(e.scroller || Z), B = R.core.getCache(O), I = ar(O), D = ("pinType" in e ? e.pinType : Ii(O, "pinType") || I && "fixed") === "fixed", H = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], X = A && e.toggleActions.split(" "), it = "markers" in e ? e.markers : Wn.markers, at = I ? 0 : parseFloat(Ne(O)["border" + k.p2 + Yr]) || 0, y = this, rt = e.onRefreshInit && function() {
      return e.onRefreshInit(y);
    }, lt = wh(O, I, k), ge = bh(O, I), nt = 0, $ = 0, U = 0, ut = Ni(O, k), pt, Mt, Nt, gt, It, z, Q, Ut, Gt, T, Dt, le, Qe, dt, N, We, Xi, Yt, xi, Ct, qe, ze, ci, Wr, At, An, hi, pr, dr, Si, Vi, J, Wi, He, $e, Ue, qi, _r, fi;
    if (y._startClamp = y._endClamp = !1, y._dir = k, g *= 45, y.scroller = O, y.scroll = S ? S.time.bind(S) : ut, gt = ut(), y.vars = e, r = r || e.animation, "refreshPriority" in e && (gu = 1, e.refreshPriority === -9999 && (mn = y)), B.tweenScroll = B.tweenScroll || {
      top: Wa(O, Bt),
      left: Wa(O, _e)
    }, y.tweenTo = pt = B.tweenScroll[k.p], y.scrubDuration = function(M) {
      Wi = en(M) && M, Wi ? J ? J.duration(M) : J = R.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Wi,
        paused: !0,
        onComplete: function() {
          return m && m(y);
        }
      }) : (J && J.progress(1).kill(), J = 0);
    }, r && (r.vars.lazy = !1, r._initted && !y.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), y.animation = r.pause(), r.scrollTrigger = y, y.scrubDuration(p), Si = 0, u || (u = r.vars.id)), v && ((!Zi(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in ot.style && R.set(I ? [ot, Pe] : O, {
      scrollBehavior: "auto"
    }), K.forEach(function(M) {
      return oe(M) && M.target === (I ? _t.scrollingElement || Pe : O) && (M.smooth = !1);
    }), Nt = oe(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Sh(r) : v.snapTo === "labelsDirectional" ? Th(r) : v.directional !== !1 ? function(M, V) {
      return Jo(v.snapTo)(M, ne() - $ < 500 ? 0 : V.direction);
    } : R.utils.snap(v.snapTo), He = v.duration || {
      min: 0.1,
      max: 2
    }, He = Zi(He) ? hn(He.min, He.max) : hn(He, He), $e = R.delayedCall(v.delay || Wi / 2 || 0.1, function() {
      var M = ut(), V = ne() - $ < 500, F = pt.tween;
      if ((V || Math.abs(y.getVelocity()) < 10) && !F && !Es && nt !== M) {
        var W = (M - z) / dt, Xt = r && !A ? r.totalProgress() : W, tt = V ? 0 : (Xt - Vi) / (ne() - Qr) * 1e3 || 0, kt = R.utils.clamp(-W, 1 - W, mr(tt / 2) * tt / 0.185), te = W + (v.inertia === !1 ? 0 : kt), Tt, yt, ct = v, Ge = ct.onStart, wt = ct.onInterrupt, Te = ct.onComplete;
        if (Tt = Nt(te, y), en(Tt) || (Tt = te), yt = Math.max(0, Math.round(z + Tt * dt)), M <= Q && M >= z && yt !== M) {
          if (F && !F._initted && F.data <= mr(yt - M))
            return;
          v.inertia === !1 && (kt = Tt - W), pt(yt, {
            duration: He(mr(Math.max(mr(te - Xt), mr(Tt - Xt)) * 0.185 / tt / 0.05 || 0)),
            ease: v.ease || "power3",
            data: mr(yt - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return $e.restart(!0) && wt && wt(y);
            },
            onComplete: function() {
              y.update(), nt = ut(), r && !A && (J ? J.resetTo("totalProgress", Tt, r._tTime / r._tDur) : r.progress(Tt)), Si = Vi = r && !A ? r.totalProgress() : y.progress, x && x(y), Te && Te(y);
            }
          }, M, kt * dt, yt - M - kt * dt), Ge && Ge(y, pt.tween);
        }
      } else y.isActive && nt !== M && $e.restart(!0);
    }).pause()), u && (xo[u] = y), h = y.trigger = ye(h || f !== !0 && f), fi = h && h._gsap && h._gsap.stRevert, fi && (fi = fi(y)), f = f === !0 ? h : ye(f), Ce(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Be || (_ = !_ && f.parentNode && f.parentNode.style && Ne(f.parentNode).display === "flex" ? !1 : Rt), y.pin = f, Mt = R.core.getCache(f), Mt.spacer ? N = Mt.pinState : (E && (E = ye(E), E && !E.nodeType && (E = E.current || E.nativeElement), Mt.spacerIsNative = !!E, E && (Mt.spacerState = Hn(E))), Mt.spacer = Yt = E || _t.createElement("div"), Yt.classList.add("pin-spacer"), u && Yt.classList.add("pin-spacer-" + u), Mt.pinState = N = Hn(f)), e.force3D !== !1 && R.set(f, {
      force3D: !0
    }), y.spacer = Yt = Mt.spacer, dr = Ne(f), Wr = dr[_ + k.os2], Ct = R.getProperty(f), qe = R.quickSetter(f, k.a, Ft), Ws(f, Yt, dr), Xi = Hn(f)), it) {
      le = Zi(it) ? za(it, Fa) : Fa, T = qn("scroller-start", u, O, k, le, 0), Dt = qn("scroller-end", u, O, k, le, 0, T), xi = T["offset" + k.op.d2];
      var qr = ye(Ii(O, "content") || O);
      Ut = this.markerStart = qn("start", u, qr, k, le, xi, 0, S), Gt = this.markerEnd = qn("end", u, qr, k, le, xi, 0, S), S && (_r = R.quickSetter([Ut, Gt], k.a, Ft)), !D && !(ai.length && Ii(O, "fixedMarkers") === !0) && (xh(I ? ot : O), R.set([T, Dt], {
        force3D: !0
      }), An = R.quickSetter(T, k.a, Ft), pr = R.quickSetter(Dt, k.a, Ft));
    }
    if (S) {
      var q = S.vars.onUpdate, Y = S.vars.onUpdateParams;
      S.eventCallback("onUpdate", function() {
        y.update(0, 0, 1), q && q.apply(S, Y || []);
      });
    }
    if (y.previous = function() {
      return j[j.indexOf(y) - 1];
    }, y.next = function() {
      return j[j.indexOf(y) + 1];
    }, y.revert = function(M, V) {
      if (!V)
        return y.kill(!0);
      var F = M !== !1 || !y.enabled, W = re;
      F !== y.isReverted && (F && (Ue = Math.max(ut(), y.scroll.rec || 0), U = y.progress, qi = r && r.progress()), Ut && [Ut, Gt, T, Dt].forEach(function(Xt) {
        return Xt.style.display = F ? "none" : "block";
      }), F && (re = y, y.update(F)), f && (!b || !y.isActive) && (F ? kh(f, Yt, N) : Ws(f, Yt, Ne(f), At)), F || y.update(F), re = W, y.isReverted = F);
    }, y.refresh = function(M, V, F, W) {
      if (!((re || !y.enabled) && !V)) {
        if (f && M && Ve) {
          qt(s, "scrollEnd", ku);
          return;
        }
        !pe && rt && rt(y), re = y, pt.tween && !F && (pt.tween.kill(), pt.tween = 0), J && J.pause(), d && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(Ti) {
          return Ti.vars.immediateRender && Ti.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), y.isReverted || y.revert(!0, !0), y._subPinOffset = !1;
        var Xt = lt(), tt = ge(), kt = S ? S.duration() : oi(O, k), te = dt <= 0.01 || !dt, Tt = 0, yt = W || 0, ct = Zi(F) ? F.end : e.end, Ge = e.endTrigger || h, wt = Zi(F) ? F.start : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), Te = y.pinnedContainer = e.pinnedContainer && ye(e.pinnedContainer, y), Je = h && Math.max(0, j.indexOf(y)) || 0, jt = Je, Zt, ee, Hi, Rn, ie, zt, ti, Os, ca, Hr, ei, $r, Ln;
        for (it && Zi(F) && ($r = R.getProperty(T, k.p), Ln = R.getProperty(Dt, k.p)); jt-- > 0; )
          zt = j[jt], zt.end || zt.refresh(0, 1) || (re = y), ti = zt.pin, ti && (ti === h || ti === f || ti === Te) && !zt.isReverted && (Hr || (Hr = []), Hr.unshift(zt), zt.revert(!0, !0)), zt !== j[jt] && (Je--, jt--);
        for (oe(wt) && (wt = wt(y)), wt = Aa(wt, "start", y), z = Xa(wt, h, Xt, k, ut(), Ut, T, y, tt, at, D, kt, S, y._startClamp && "_startClamp") || (f ? -1e-3 : 0), oe(ct) && (ct = ct(y)), Ce(ct) && !ct.indexOf("+=") && (~ct.indexOf(" ") ? ct = (Ce(wt) ? wt.split(" ")[0] : "") + ct : (Tt = es(ct.substr(2), Xt), ct = Ce(wt) ? wt : (S ? R.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, z) : z) + Tt, Ge = h)), ct = Aa(ct, "end", y), Q = Math.max(z, Xa(ct || (Ge ? "100% 0" : kt), Ge, Xt, k, ut() + Tt, Gt, Dt, y, tt, at, D, kt, S, y._endClamp && "_endClamp")) || -1e-3, Tt = 0, jt = Je; jt--; )
          zt = j[jt] || {}, ti = zt.pin, ti && zt.start - zt._pinPush <= z && !S && zt.end > 0 && (Zt = zt.end - (y._startClamp ? Math.max(0, zt.start) : zt.start), (ti === h && zt.start - zt._pinPush < z || ti === Te) && isNaN(wt) && (Tt += Zt * (1 - zt.progress)), ti === f && (yt += Zt));
        if (z += Tt, Q += Tt, y._startClamp && (y._startClamp += Tt), y._endClamp && !pe && (y._endClamp = Q || -1e-3, Q = Math.min(Q, oi(O, k))), dt = Q - z || (z -= 0.01) && 1e-3, te && (U = R.utils.clamp(0, 1, R.utils.normalize(z, Q, Ue))), y._pinPush = yt, Ut && Tt && (Zt = {}, Zt[k.a] = "+=" + Tt, Te && (Zt[k.p] = "-=" + ut()), R.set([Ut, Gt], Zt)), f && !(bo && y.end >= oi(O, k)))
          Zt = Ne(f), Rn = k === Bt, Hi = ut(), ze = parseFloat(Ct(k.a)) + yt, !kt && Q > 1 && (ei = (I ? _t.scrollingElement || Pe : O).style, ei = {
            style: ei,
            value: ei["overflow" + k.a.toUpperCase()]
          }, I && Ne(ot)["overflow" + k.a.toUpperCase()] !== "scroll" && (ei.style["overflow" + k.a.toUpperCase()] = "scroll")), Ws(f, Yt, Zt), Xi = Hn(f), ee = _i(f, !0), Os = D && Ni(O, Rn ? _e : Bt)(), _ ? (At = [_ + k.os2, dt + yt + Ft], At.t = Yt, jt = _ === Rt ? gs(f, k) + dt + yt : 0, jt && (At.push(k.d, jt + Ft), Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = jt + Ft)), Ar(At), Te && j.forEach(function(Ti) {
            Ti.pin === Te && Ti.vars.pinSpacing !== !1 && (Ti._subPinOffset = !0);
          }), D && ut(Ue)) : (jt = gs(f, k), jt && Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = jt + Ft)), D && (ie = {
            top: ee.top + (Rn ? Hi - z : Os) + Ft,
            left: ee.left + (Rn ? Os : Hi - z) + Ft,
            boxSizing: "border-box",
            position: "fixed"
          }, ie[rr] = ie["max" + Yr] = Math.ceil(ee.width) + Ft, ie[nr] = ie["max" + Qo] = Math.ceil(ee.height) + Ft, ie[Be] = ie[Be + _n] = ie[Be + pn] = ie[Be + gn] = ie[Be + dn] = "0", ie[Rt] = Zt[Rt], ie[Rt + _n] = Zt[Rt + _n], ie[Rt + pn] = Zt[Rt + pn], ie[Rt + gn] = Zt[Rt + gn], ie[Rt + dn] = Zt[Rt + dn], We = Oh(N, ie, b), pe && ut(0)), r ? (ca = r._initted, Bs(1), r.render(r.duration(), !0, !0), ci = Ct(k.a) - ze + dt + yt, hi = Math.abs(dt - ci) > 1, D && hi && We.splice(We.length - 2, 2), r.render(0, !0, !0), ca || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Bs(0)) : ci = dt, ei && (ei.value ? ei.style["overflow" + k.a.toUpperCase()] = ei.value : ei.style.removeProperty("overflow-" + k.a));
        else if (h && ut() && !S)
          for (ee = h.parentNode; ee && ee !== ot; )
            ee._pinOffset && (z -= ee._pinOffset, Q -= ee._pinOffset), ee = ee.parentNode;
        Hr && Hr.forEach(function(Ti) {
          return Ti.revert(!1, !0);
        }), y.start = z, y.end = Q, gt = It = pe ? Ue : ut(), !S && !pe && (gt < Ue && ut(Ue), y.scroll.rec = 0), y.revert(!1, !0), $ = ne(), $e && (nt = -1, $e.restart(!0)), re = 0, r && A && (r._initted || qi) && r.progress() !== qi && r.progress(qi || 0, !0).render(r.time(), !0, !0), (te || U !== y.progress || S || d || r && !r._initted) && (r && !A && (r._initted || U || r.vars.immediateRender !== !1) && r.totalProgress(S && z < -1e-3 && !U ? R.utils.normalize(z, Q, 0) : U, !0), y.progress = te || (gt - z) / dt === U ? 0 : U), f && _ && (Yt._pinOffset = Math.round(y.progress * ci)), J && J.invalidate(), isNaN($r) || ($r -= R.getProperty(T, k.p), Ln -= R.getProperty(Dt, k.p), $n(T, k, $r), $n(Ut, k, $r - (W || 0)), $n(Dt, k, Ln), $n(Gt, k, Ln - (W || 0))), te && !pe && y.update(), c && !pe && !Qe && (Qe = !0, c(y), Qe = !1);
      }
    }, y.getVelocity = function() {
      return (ut() - It) / (ne() - Qr) * 1e3 || 0;
    }, y.endAnimation = function() {
      jr(y.callbackAnimation), r && (J ? J.progress(1) : r.paused() ? A || jr(r, y.direction < 0, 1) : jr(r, r.reversed()));
    }, y.labelToScroll = function(M) {
      return r && r.labels && (z || y.refresh() || z) + r.labels[M] / r.duration() * dt || 0;
    }, y.getTrailing = function(M) {
      var V = j.indexOf(y), F = y.direction > 0 ? j.slice(0, V).reverse() : j.slice(V + 1);
      return (Ce(M) ? F.filter(function(W) {
        return W.vars.preventOverlaps === M;
      }) : F).filter(function(W) {
        return y.direction > 0 ? W.end <= z : W.start >= Q;
      });
    }, y.update = function(M, V, F) {
      if (!(S && !F && !M)) {
        var W = pe === !0 ? Ue : y.scroll(), Xt = M ? 0 : (W - z) / dt, tt = Xt < 0 ? 0 : Xt > 1 ? 1 : Xt || 0, kt = y.progress, te, Tt, yt, ct, Ge, wt, Te, Je;
        if (V && (It = gt, gt = S ? ut() : W, v && (Vi = Si, Si = r && !A ? r.totalProgress() : tt)), g && f && !re && !Nn && Ve && (!tt && z < W + (W - It) / (ne() - Qr) * g ? tt = 1e-4 : tt === 1 && Q > W + (W - It) / (ne() - Qr) * g && (tt = 0.9999)), tt !== kt && y.enabled) {
          if (te = y.isActive = !!tt && tt < 1, Tt = !!kt && kt < 1, wt = te !== Tt, Ge = wt || !!tt != !!kt, y.direction = tt > kt ? 1 : -1, y.progress = tt, Ge && !re && (yt = tt && !kt ? 0 : tt === 1 ? 1 : kt === 1 ? 2 : 3, A && (ct = !wt && X[yt + 1] !== "none" && X[yt + 1] || X[yt], Je = r && (ct === "complete" || ct === "reset" || ct in r))), C && (wt || Je) && (Je || p || !r) && (oe(C) ? C(y) : y.getTrailing(C).forEach(function(Hi) {
            return Hi.endAnimation();
          })), A || (J && !re && !Nn ? (J._dp._time - J._start !== J._time && J.render(J._dp._time - J._start), J.resetTo ? J.resetTo("totalProgress", tt, r._tTime / r._tDur) : (J.vars.totalProgress = tt, J.invalidate().restart())) : r && r.totalProgress(tt, !!(re && ($ || M)))), f) {
            if (M && _ && (Yt.style[_ + k.os2] = Wr), !D)
              qe(tn(ze + ci * tt));
            else if (Ge) {
              if (Te = !M && tt > kt && Q + 1 > W && W + 1 >= oi(O, k), b)
                if (!M && (te || Te)) {
                  var jt = _i(f, !0), Zt = W - z;
                  Va(f, ot, jt.top + (k === Bt ? Zt : 0) + Ft, jt.left + (k === Bt ? 0 : Zt) + Ft);
                } else
                  Va(f, Yt);
              Ar(te || Te ? We : Xi), hi && tt < 1 && te || qe(ze + (tt === 1 && !Te ? ci : 0));
            }
          }
          v && !pt.tween && !re && !Nn && $e.restart(!0), a && (wt || w && tt && (tt < 1 || !Ns)) && Pn(a.targets).forEach(function(Hi) {
            return Hi.classList[te || w ? "add" : "remove"](a.className);
          }), o && !A && !M && o(y), Ge && !re ? (A && (Je && (ct === "complete" ? r.pause().totalProgress(1) : ct === "reset" ? r.restart(!0).pause() : ct === "restart" ? r.restart(!0) : r[ct]()), o && o(y)), (wt || !Ns) && (l && wt && Xs(y, l), H[yt] && Xs(y, H[yt]), w && (tt === 1 ? y.kill(!1, 1) : H[yt] = 0), wt || (yt = tt === 1 ? 1 : 3, H[yt] && Xs(y, H[yt]))), P && !te && Math.abs(y.getVelocity()) > (en(P) ? P : 2500) && (jr(y.callbackAnimation), J ? J.progress(1) : jr(r, ct === "reverse" ? 1 : !tt, 1))) : A && o && !re && o(y);
        }
        if (pr) {
          var ee = S ? W / S.duration() * (S._caScrollDist || 0) : W;
          An(ee + (T._isFlipped ? 1 : 0)), pr(ee);
        }
        _r && _r(-W / S.duration() * (S._caScrollDist || 0));
      }
    }, y.enable = function(M, V) {
      y.enabled || (y.enabled = !0, qt(O, "resize", rn), I || qt(O, "scroll", yr), rt && qt(s, "refreshInit", rt), M !== !1 && (y.progress = U = 0, gt = It = nt = ut()), V !== !1 && y.refresh());
    }, y.getTween = function(M) {
      return M && pt ? pt.tween : J;
    }, y.setPositions = function(M, V, F, W) {
      if (S) {
        var Xt = S.scrollTrigger, tt = S.duration(), kt = Xt.end - Xt.start;
        M = Xt.start + kt * M / tt, V = Xt.start + kt * V / tt;
      }
      y.refresh(!1, !1, {
        start: Ra(M, F && !!y._startClamp),
        end: Ra(V, F && !!y._endClamp)
      }, W), y.update();
    }, y.adjustPinSpacing = function(M) {
      if (At && M) {
        var V = At.indexOf(k.d) + 1;
        At[V] = parseFloat(At[V]) + M + Ft, At[1] = parseFloat(At[1]) + M + Ft, Ar(At);
      }
    }, y.disable = function(M, V) {
      if (M !== !1 && y.revert(!0, !0), y.enabled && (y.enabled = y.isActive = !1, V || J && J.pause(), Ue = 0, Mt && (Mt.uncache = 1), rt && Wt(s, "refreshInit", rt), $e && ($e.pause(), pt.tween && pt.tween.kill() && (pt.tween = 0)), !I)) {
        for (var F = j.length; F--; )
          if (j[F].scroller === O && j[F] !== y)
            return;
        Wt(O, "resize", rn), I || Wt(O, "scroll", yr);
      }
    }, y.kill = function(M, V) {
      y.disable(M, V), J && !V && J.kill(), u && delete xo[u];
      var F = j.indexOf(y);
      F >= 0 && j.splice(F, 1), F === fe && rs > 0 && fe--, F = 0, j.forEach(function(W) {
        return W.scroller === y.scroller && (F = 1);
      }), F || pe || (y.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({
        kill: !1
      }), V || r.kill()), Ut && [Ut, Gt, T, Dt].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), mn === y && (mn = 0), f && (Mt && (Mt.uncache = 1), F = 0, j.forEach(function(W) {
        return W.pin === f && F++;
      }), F || (Mt.spacer = 0)), e.onKill && e.onKill(y);
    }, j.push(y), y.enable(!1, !1), fi && fi(y), r && r.add && !dt) {
      var st = y.update;
      y.update = function() {
        y.update = st, K.cache++, z || Q || y.refresh();
      }, R.delayedCall(0.01, y.update), dt = 0.01, z = Q = 0;
    } else
      y.refresh();
    f && Ch();
  }, s.register = function(e) {
    return vr || (R = e || bu(), wu() && window.document && s.enable(), vr = Jr), vr;
  }, s.defaults = function(e) {
    if (e)
      for (var r in e)
        Wn[r] = e[r];
    return Wn;
  }, s.disable = function(e, r) {
    Jr = 0, j.forEach(function(o) {
      return o[r ? "kill" : "disable"](e);
    }), Wt(Z, "wheel", yr), Wt(_t, "scroll", yr), clearInterval(Bn), Wt(_t, "touchcancel", ri), Wt(ot, "touchstart", ri), Xn(Wt, _t, "pointerdown,touchstart,mousedown", La), Xn(Wt, _t, "pointerup,touchend,mouseup", Ia), _s.kill(), Yn(Wt);
    for (var n = 0; n < K.length; n += 3)
      Vn(Wt, K[n], K[n + 1]), Vn(Wt, K[n], K[n + 2]);
  }, s.enable = function() {
    if (Z = window, _t = document, Pe = _t.documentElement, ot = _t.body, R && (Pn = R.utils.toArray, hn = R.utils.clamp, wo = R.core.context || ri, Bs = R.core.suppressOverwrites || ri, Go = Z.history.scrollRestoration || "auto", So = Z.pageYOffset || 0, R.core.globals("ScrollTrigger", s), ot)) {
      Jr = 1, Dr = document.createElement("div"), Dr.style.height = "100vh", Dr.style.position = "absolute", Du(), vh(), Ot.register(R), s.isTouch = Ot.isTouch, Ci = Ot.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vo = Ot.isTouch === 1, qt(Z, "wheel", yr), Uo = [Z, _t, Pe, ot], R.matchMedia ? (s.matchMedia = function(l) {
        var c = R.matchMedia(), p;
        for (p in l)
          c.add(p, l[p]);
        return c;
      }, R.addEventListener("matchMediaInit", function() {
        Ou(), ta();
      }), R.addEventListener("matchMediaRevert", function() {
        return Pu();
      }), R.addEventListener("matchMedia", function() {
        Qi(0, 1), ur("matchMedia");
      }), R.matchMedia().add("(orientation: portrait)", function() {
        return Vs(), Vs;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Vs(), qt(_t, "scroll", yr);
      var e = ot.hasAttribute("style"), r = ot.style, n = r.borderTopStyle, o = R.core.Animation.prototype, a, u;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", a = _i(ot), Bt.m = Math.round(a.top + Bt.sc()) || 0, _e.m = Math.round(a.left + _e.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (ot.setAttribute("style", ""), ot.removeAttribute("style")), Bn = setInterval(Ba, 250), R.delayedCall(0.5, function() {
        return Nn = 0;
      }), qt(_t, "touchcancel", ri), qt(ot, "touchstart", ri), Xn(qt, _t, "pointerdown,touchstart,mousedown", La), Xn(qt, _t, "pointerup,touchend,mouseup", Ia), yo = R.utils.checkPrefix("transform"), ns.push(yo), vr = ne(), _s = R.delayedCall(0.2, Qi).pause(), wr = [_t, "visibilitychange", function() {
        var l = Z.innerWidth, c = Z.innerHeight;
        _t.hidden ? (Ma = l, Da = c) : (Ma !== l || Da !== c) && rn();
      }, _t, "DOMContentLoaded", Qi, Z, "load", Qi, Z, "resize", rn], Yn(qt), j.forEach(function(l) {
        return l.enable(0, 1);
      }), u = 0; u < K.length; u += 3)
        Vn(Wt, K[u], K[u + 1]), Vn(Wt, K[u], K[u + 2]);
    }
  }, s.config = function(e) {
    "limitCallbacks" in e && (Ns = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(Bn) || (Bn = r) && setInterval(Ba, r), "ignoreMobileResize" in e && (vo = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (Yn(Wt) || Yn(qt, e.autoRefreshEvents || "none"), mu = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(e, r) {
    var n = ye(e), o = K.indexOf(n), a = ar(n);
    ~o && K.splice(o, a ? 6 : 2), r && (a ? ai.unshift(Z, r, ot, r, Pe, r) : ai.unshift(n, r));
  }, s.clearMatchMedia = function(e) {
    j.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(e, r, n) {
    var o = (Ce(e) ? ye(e) : e).getBoundingClientRect(), a = o[n ? rr : nr] * r || 0;
    return n ? o.right - a > 0 && o.left + a < Z.innerWidth : o.bottom - a > 0 && o.top + a < Z.innerHeight;
  }, s.positionInViewport = function(e, r, n) {
    Ce(e) && (e = ye(e));
    var o = e.getBoundingClientRect(), a = o[n ? rr : nr], u = r == null ? a / 2 : r in ms ? ms[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (o.left + u) / Z.innerWidth : (o.top + u) / Z.innerHeight;
  }, s.killAll = function(e) {
    if (j.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = lr.killAll || [];
      lr = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
G.version = "3.14.2";
G.saveStyles = function(s) {
  return s ? Pn(s).forEach(function(t) {
    if (t && t.style) {
      var i = Ee.indexOf(t);
      i >= 0 && Ee.splice(i, 5), Ee.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), R.core.getCache(t), wo());
    }
  }) : Ee;
};
G.revert = function(s, t) {
  return ta(!s, t);
};
G.create = function(s, t) {
  return new G(s, t);
};
G.refresh = function(s) {
  return s ? rn(!0) : (vr || G.register()) && Qi(!0);
};
G.update = function(s) {
  return ++K.cache && vi(s === !0 ? 2 : 0);
};
G.clearScrollMemory = Mu;
G.maxScroll = function(s, t) {
  return oi(s, t ? _e : Bt);
};
G.getScrollFunc = function(s, t) {
  return Ni(ye(s), t ? _e : Bt);
};
G.getById = function(s) {
  return xo[s];
};
G.getAll = function() {
  return j.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function() {
  return !!Ve;
};
G.snapDirectional = Jo;
G.addEventListener = function(s, t) {
  var i = lr[s] || (lr[s] = []);
  ~i.indexOf(t) || i.push(t);
};
G.removeEventListener = function(s, t) {
  var i = lr[s], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
G.batch = function(s, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(l, c) {
    var p = [], h = [], f = R.delayedCall(r, function() {
      c(p, h), p = [], h = [];
    }).pause();
    return function(_) {
      p.length || f.restart(!0), p.push(_.trigger), h.push(_), n <= p.length && f.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && oe(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return oe(n) && (n = n(), qt(G, "refresh", function() {
    return n = t.batchMax();
  })), Pn(s).forEach(function(u) {
    var l = {};
    for (a in e)
      l[a] = e[a];
    l.trigger = u, i.push(G.create(l));
  }), i;
};
var qa = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, qs = function s(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Ot.isTouch ? " pinch-zoom" : "") : "none", t === Pe && s(ot, i);
}, Un = {
  auto: 1,
  scroll: 1
}, Dh = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, o = n._gsap || R.core.getCache(n), a = ne(), u;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== ot && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Un[(u = Ne(n)).overflowY] || Un[u.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== e && !ar(n) && (Un[(u = Ne(n)).overflowY] || Un[u.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, Ru = function(t, i, e, r) {
  return Ot.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && Dh,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && qt(_t, Ot.eventTypes[0], $a, !1, !0);
    },
    onDisable: function() {
      return Wt(_t, Ot.eventTypes[0], $a, !0);
    }
  });
}, Ah = /(input|label|select|textarea)/i, Ha, $a = function(t) {
  var i = Ah.test(t.target.tagName);
  (i || Ha) && (t._gsapAllow = !0, Ha = i);
}, Rh = function(t) {
  Zi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, u, l = ye(t.target) || Pe, c = R.core.globals().ScrollSmoother, p = c && c.get(), h = Ci && (t.content && ye(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), f = Ni(l, Bt), _ = Ni(l, _e), d = 1, g = (Ot.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth, m = 0, x = oe(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, w, v, b = Ru(l, t.type, !0, n), E = function() {
    return v = !1;
  }, S = ri, P = ri, C = function() {
    u = oi(l, Bt), P = hn(Ci ? 1 : 0, u), e && (S = hn(0, oi(l, _e))), w = sr;
  }, k = function() {
    h._gsap.y = tn(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, A = function() {
    if (v) {
      requestAnimationFrame(E);
      var it = tn(a.deltaY / 2), at = P(f.v - it);
      if (h && at !== f.v + f.offset) {
        f.offset = at - f.v;
        var y = tn((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)", h._gsap.y = y + "px", f.cacheID = K.cache, vi();
      }
      return !0;
    }
    f.offset && k(), v = !0;
  }, O, B, I, D, H = function() {
    C(), O.isActive() && O.vars.scrollY > u && (f() > u ? O.progress(1) && f(u) : O.resetTo("scrollY", u));
  };
  return h && R.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(X) {
    return Ci && X.type === "touchmove" && A() || d > 1.05 && X.type !== "touchstart" || a.isGesturing || X.touches && X.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var X = d;
    d = tn((Z.visualViewport && Z.visualViewport.scale || 1) / g), O.pause(), X !== d && qs(l, d > 1.01 ? !0 : e ? !1 : "x"), B = _(), I = f(), C(), w = sr;
  }, t.onRelease = t.onGestureStart = function(X, it) {
    if (f.offset && k(), !it)
      D.restart(!0);
    else {
      K.cache++;
      var at = x(), y, rt;
      e && (y = _(), rt = y + at * 0.05 * -X.velocityX / 0.227, at *= qa(_, y, rt, oi(l, _e)), O.vars.scrollX = S(rt)), y = f(), rt = y + at * 0.05 * -X.velocityY / 0.227, at *= qa(f, y, rt, oi(l, Bt)), O.vars.scrollY = P(rt), O.invalidate().duration(at).play(0.01), (Ci && O.vars.scrollY >= u || y >= u - 1) && R.to({}, {
        onUpdate: H,
        duration: at
      });
    }
    o && o(X);
  }, t.onWheel = function() {
    O._ts && O.pause(), ne() - m > 1e3 && (w = 0, m = ne());
  }, t.onChange = function(X, it, at, y, rt) {
    if (sr !== w && C(), it && e && _(S(y[2] === it ? B + (X.startX - X.x) : _() + it - y[1])), at) {
      f.offset && k();
      var lt = rt[2] === at, ge = lt ? I + X.startY - X.y : f() + at - rt[1], nt = P(ge);
      lt && ge !== nt && (I += nt - ge), f(nt);
    }
    (at || it) && vi();
  }, t.onEnable = function() {
    qs(l, e ? !1 : "x"), G.addEventListener("refresh", H), qt(Z, "resize", H), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), b.enable();
  }, t.onDisable = function() {
    qs(l, !0), Wt(Z, "resize", H), G.removeEventListener("refresh", H), b.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new Ot(t), a.iOS = Ci, Ci && !f() && f(1), Ci && R.ticker.add(ri), D = a._dc, O = R.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Au(f, f(), function() {
        return O.pause();
      })
    },
    onUpdate: vi,
    onComplete: D.vars.onComplete
  }), a;
};
G.sort = function(s) {
  if (oe(s))
    return j.sort(s);
  var t = Z.pageYOffset || 0;
  return G.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + Z.innerHeight;
  }), j.sort(s || function(i, e) {
    return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
  });
};
G.observe = function(s) {
  return new Ot(s);
};
G.normalizeScroll = function(s) {
  if (typeof s > "u")
    return he;
  if (s === !0 && he)
    return he.enable();
  if (s === !1) {
    he && he.kill(), he = s;
    return;
  }
  var t = s instanceof Ot ? s : Rh(s);
  return he && he.target === t.target && he.kill(), ar(t.target) && (he = t), t;
};
G.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: mo,
  _inputObserver: Ru,
  _scrollers: K,
  _proxies: ai,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Ve || ur("scrollStart"), Ve = ne();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return re;
    }
  }
};
bu() && R.registerPlugin(G);
var Ua = "1.3.19";
function Lu(s, t, i) {
  return Math.max(s, Math.min(t, i));
}
function Lh(s, t, i) {
  return (1 - i) * s + i * t;
}
function Ih(s, t, i, e) {
  return Lh(s, t, 1 - Math.exp(-i * e));
}
function zh(s, t) {
  return (s % t + t) % t;
}
var Fh = class {
  constructor() {
    L(this, "isRunning", !1);
    L(this, "value", 0);
    L(this, "from", 0);
    L(this, "to", 0);
    L(this, "currentTime", 0);
    // These are instanciated in the fromTo method
    L(this, "lerp");
    L(this, "duration");
    L(this, "easing");
    L(this, "onUpdate");
  }
  /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */
  advance(s) {
    var i;
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const e = Lu(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Ih(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
    t && this.stop(), (i = this.onUpdate) == null || i.call(this, this.value, t);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = !1;
  }
  /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */
  fromTo(s, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: o }) {
    this.from = this.value = s, this.to = t, this.lerp = i, this.duration = e, this.easing = r, this.currentTime = 0, this.isRunning = !0, n == null || n(), this.onUpdate = o;
  }
};
function Bh(s, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, s.apply(this, e);
    }, t);
  };
}
var Nh = class {
  constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
    L(this, "width", 0);
    L(this, "height", 0);
    L(this, "scrollHeight", 0);
    L(this, "scrollWidth", 0);
    // These are instanciated in the constructor as they need information from the options
    L(this, "debouncedResize");
    L(this, "wrapperResizeObserver");
    L(this, "contentResizeObserver");
    L(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    L(this, "onWrapperResize", () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    });
    L(this, "onContentResize", () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    });
    this.wrapper = s, this.content = t, i && (this.debouncedResize = Bh(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  destroy() {
    var s, t;
    (s = this.wrapperResizeObserver) == null || s.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}, Iu = class {
  constructor() {
    L(this, "events", {});
  }
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(s, ...t) {
    var e;
    const i = this.events[s] || [];
    for (let r = 0, n = i.length; r < n; r++)
      (e = i[r]) == null || e.call(i, ...t);
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(s, t) {
    return this.events[s] ? this.events[s].push(t) : this.events[s] = [t], () => {
      var i;
      this.events[s] = (i = this.events[s]) == null ? void 0 : i.filter((e) => t !== e);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(s, t) {
    var i;
    this.events[s] = (i = this.events[s]) == null ? void 0 : i.filter((e) => t !== e);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
}, Yh = 100 / 6, Ei = { passive: !1 };
function Ga(s, t) {
  return s === 1 ? Yh : s === 2 ? t : 1;
}
var Xh = class {
  constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    L(this, "touchStart", {
      x: 0,
      y: 0
    });
    L(this, "lastDelta", {
      x: 0,
      y: 0
    });
    L(this, "window", {
      width: 0,
      height: 0
    });
    L(this, "emitter", new Iu());
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    L(this, "onTouchStart", (s) => {
      const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: s
      });
    });
    /** Event handler for 'touchmove' event */
    L(this, "onTouchMove", (s) => {
      const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s, e = -(t - this.touchStart.x) * this.options.touchMultiplier, r = -(i - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: e,
        y: r
      }, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: r,
        event: s
      });
    });
    L(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    L(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: i, deltaMode: e } = s;
      const r = Ga(e, this.window.width), n = Ga(e, this.window.height);
      t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: s });
    });
    L(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, Ei), this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      Ei
    ), this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      Ei
    ), this.element.addEventListener("touchend", this.onTouchEnd, Ei);
  }
  /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */
  on(s, t) {
    return this.emitter.on(s, t);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, Ei), this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      Ei
    ), this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      Ei
    ), this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      Ei
    );
  }
}, ja = (s) => Math.min(1, 1.001 - 2 ** (-10 * s)), Vh = class {
  constructor({
    wrapper: s = window,
    content: t = document.documentElement,
    eventsTarget: i = s,
    smoothWheel: e = !0,
    syncTouch: r = !1,
    syncTouchLerp: n = 0.075,
    touchInertiaExponent: o = 1.7,
    duration: a,
    // in seconds
    easing: u,
    lerp: l = 0.1,
    infinite: c = !1,
    orientation: p = "vertical",
    // vertical, horizontal
    gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
    // vertical, horizontal, both
    touchMultiplier: f = 1,
    wheelMultiplier: _ = 1,
    autoResize: d = !0,
    prevent: g,
    virtualScroll: m,
    overscroll: x = !0,
    autoRaf: w = !1,
    anchors: v = !1,
    autoToggle: b = !1,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll: E = !1,
    __experimental__naiveDimensions: S = !1,
    naiveDimensions: P = S,
    stopInertiaOnNavigate: C = !1
  } = {}) {
    L(this, "_isScrolling", !1);
    // true when scroll is animating
    L(this, "_isStopped", !1);
    // true if user should not be able to scroll - enable/disable programmatically
    L(this, "_isLocked", !1);
    // same as isStopped but enabled/disabled when scroll reaches target
    L(this, "_preventNextNativeScrollEvent", !1);
    L(this, "_resetVelocityTimeout", null);
    L(this, "_rafId", null);
    /**
     * Whether or not the user is touching the screen
     */
    L(this, "isTouching");
    /**
     * The time in ms since the lenis instance was created
     */
    L(this, "time", 0);
    /**
     * User data that will be forwarded through the scroll event
     *
     * @example
     * lenis.scrollTo(100, {
     *   userData: {
     *     foo: 'bar'
     *   }
     * })
     */
    L(this, "userData", {});
    /**
     * The last velocity of the scroll
     */
    L(this, "lastVelocity", 0);
    /**
     * The current velocity of the scroll
     */
    L(this, "velocity", 0);
    /**
     * The direction of the scroll
     */
    L(this, "direction", 0);
    /**
     * The options passed to the lenis instance
     */
    L(this, "options");
    /**
     * The target scroll value
     */
    L(this, "targetScroll");
    /**
     * The animated scroll value
     */
    L(this, "animatedScroll");
    // These are instanciated here as they don't need information from the options
    L(this, "animate", new Fh());
    L(this, "emitter", new Iu());
    // These are instanciated in the constructor as they need information from the options
    L(this, "dimensions");
    // This is not private because it's used in the Snap class
    L(this, "virtualScroll");
    L(this, "onScrollEnd", (s) => {
      s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation();
    });
    L(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          // cancelable: false,
          detail: {
            lenisScrollEnd: !0
          }
        })
      );
    });
    L(this, "onTransitionEnd", (s) => {
      s.propertyName.includes("overflow") && this.checkOverflow();
    });
    L(this, "onClick", (s) => {
      const e = s.composedPath().filter(
        (n) => n instanceof HTMLAnchorElement && n.href
      ).map(
        (n) => new URL(n.href)
      ), r = new URL(window.location.href);
      if (this.options.anchors) {
        const n = e.find(
          (o) => r.host === o.host && r.pathname === o.pathname && o.hash
        );
        if (n) {
          const o = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, a = `#${n.hash.split("#")[1]}`;
          this.scrollTo(a, o);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && e.some(
        (o) => r.host === o.host && r.pathname !== o.pathname
      )) {
        this.reset();
        return;
      }
    });
    L(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    L(this, "onVirtualScroll", (s) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1)
        return;
      const { deltaX: t, deltaY: i, event: e } = s;
      if (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: i, event: e }), e.ctrlKey || e.lenisStopPropagation) return;
      const r = e.type.includes("touch"), n = e.type.includes("wheel");
      this.isTouching = e.type === "touchstart" || e.type === "touchmove";
      const o = t === 0 && i === 0;
      if (this.options.syncTouch && r && e.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const u = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || u)
        return;
      let l = e.composedPath();
      l = l.slice(0, l.indexOf(this.rootElement));
      const c = this.options.prevent, p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (l.find(
        (m) => {
          var x, w, v, b, E;
          return m instanceof HTMLElement && (typeof c == "function" && (c == null ? void 0 : c(m)) || ((x = m.hasAttribute) == null ? void 0 : x.call(m, "data-lenis-prevent")) || p === "vertical" && ((w = m.hasAttribute) == null ? void 0 : w.call(m, "data-lenis-prevent-vertical")) || p === "horizontal" && ((v = m.hasAttribute) == null ? void 0 : v.call(m, "data-lenis-prevent-horizontal")) || r && ((b = m.hasAttribute) == null ? void 0 : b.call(m, "data-lenis-prevent-touch")) || n && ((E = m.hasAttribute) == null ? void 0 : E.call(m, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(m, {
            deltaX: t,
            deltaY: i
          }));
        }
      ))
        return;
      if (this.isStopped || this.isLocked) {
        e.cancelable && e.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && r || this.options.smoothWheel && n)) {
        this.isScrolling = "native", this.animate.stop(), e.lenisStopPropagation = !0;
        return;
      }
      let f = i;
      this.options.gestureOrientation === "both" ? f = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (f = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const _ = r && this.options.syncTouch, g = r && e.type === "touchend";
      g && (f = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + f, {
        programmatic: !1,
        ..._ ? {
          lerp: g ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    });
    L(this, "onNativeScroll", () => {
      if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === "native") {
        const s = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - s, this.direction = Math.sign(
          this.animatedScroll - s
        ), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
        }, 400));
      }
    });
    /**
     * RequestAnimationFrame for lenis
     *
     * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
     */
    L(this, "raf", (s) => {
      const t = s - (this.time || s);
      this.time = s, this.animate.advance(t * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    window.lenisVersion = Ua, window.lenis || (window.lenis = {}), window.lenis.version = Ua, p === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof u != "function" ? u = ja : typeof u == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
      syncTouch: r,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: u,
      lerp: l,
      infinite: c,
      gestureOrientation: h,
      orientation: p,
      touchMultiplier: f,
      wheelMultiplier: _,
      autoResize: d,
      prevent: g,
      virtualScroll: m,
      overscroll: x,
      autoRaf: w,
      anchors: v,
      autoToggle: b,
      allowNestedScroll: E,
      naiveDimensions: P,
      stopInertiaOnNavigate: C
    }, this.dimensions = new Nh(s, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new Xh(i, {
      touchMultiplier: f,
      wheelMultiplier: _
    }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  }
  /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), this.options.wrapper.removeEventListener(
      "pointerdown",
      this.onPointerDown
    ), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener(
      "click",
      this.onClick
    ), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
  }
  on(s, t) {
    return this.emitter.on(s, t);
  }
  off(s, t) {
    return this.emitter.off(s, t);
  }
  get overflow() {
    const s = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[s];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
  }
  setScroll(s) {
    this.isHorizontal ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
  }
  /**
   * Force lenis to recalculate the dimensions
   */
  resize() {
    this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
  }
  /**
   * Start lenis scroll after it has been stopped
   */
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), this.isStopped = !1, this.emit());
  }
  /**
   * Stop lenis scroll
   */
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), this.isStopped = !0, this.emit());
  }
  /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */
  scrollTo(s, {
    offset: t = 0,
    immediate: i = !1,
    lock: e = !1,
    programmatic: r = !0,
    // called from outside of the class
    lerp: n = r ? this.options.lerp : void 0,
    duration: o = r ? this.options.duration : void 0,
    easing: a = r ? this.options.easing : void 0,
    onStart: u,
    onComplete: l,
    force: c = !1,
    // scroll even if stopped
    userData: p
  } = {}) {
    if ((this.isStopped || this.isLocked) && !c) return;
    let h = s, f = t;
    if (typeof h == "string" && ["top", "left", "start", "#"].includes(h))
      h = 0;
    else if (typeof h == "string" && ["bottom", "right", "end"].includes(h))
      h = this.limit;
    else {
      let _ = null;
      if (typeof h == "string" ? (_ = document.querySelector(h), _ || (h === "#top" ? h = 0 : console.warn("Lenis: Target not found", h))) : h instanceof HTMLElement && (h != null && h.nodeType) && (_ = h), _) {
        if (this.options.wrapper !== window) {
          const g = this.rootElement.getBoundingClientRect();
          f -= this.isHorizontal ? g.left : g.top;
        }
        const d = _.getBoundingClientRect();
        h = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
      }
    }
    if (typeof h == "number") {
      if (h += f, h = Math.round(h), this.options.infinite) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else
        h = Lu(0, h, this.limit);
      if (h === this.targetScroll) {
        u == null || u(this), l == null || l(this);
        return;
      }
      if (this.userData = p ?? {}, i) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l == null || l(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = ja : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", u == null || u(this);
        },
        onUpdate: (_, d) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), r && (this.targetScroll = _), d || this.emit(), d && (this.reset(), this.emit(), l == null || l(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }), this.preventNextNativeScrollEvent());
        }
      });
    }
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = !1;
    });
  }
  hasNestedScroll(s, { deltaX: t, deltaY: i }) {
    const e = Date.now();
    s._lenis || (s._lenis = {});
    const r = s._lenis;
    let n, o, a, u, l, c, p, h, f, _;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const S = window.getComputedStyle(s);
      if (r.computedStyle = S, n = ["auto", "overlay", "scroll"].includes(
        S.overflowX
      ), o = ["auto", "overlay", "scroll"].includes(
        S.overflowY
      ), l = ["auto"].includes(
        S.overscrollBehaviorX
      ), c = ["auto"].includes(
        S.overscrollBehaviorY
      ), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return !1;
      p = s.scrollWidth, h = s.scrollHeight, f = s.clientWidth, _ = s.clientHeight, a = p > f, u = h > _, r.isScrollableX = a, r.isScrollableY = u, r.scrollWidth = p, r.scrollHeight = h, r.clientWidth = f, r.clientHeight = _, r.hasOverscrollBehaviorX = l, r.hasOverscrollBehaviorY = c;
    } else
      a = r.isScrollableX, u = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, p = r.scrollWidth, h = r.scrollHeight, f = r.clientWidth, _ = r.clientHeight, l = r.hasOverscrollBehaviorX, c = r.hasOverscrollBehaviorY;
    if (!(n && a || o && u))
      return !1;
    const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, m, x, w, v, b;
    if (d === "horizontal")
      g = Math.round(s.scrollLeft), m = p - f, x = t, w = n, v = a, b = l;
    else if (d === "vertical")
      g = Math.round(s.scrollTop), m = h - _, x = i, w = o, v = u, b = c;
    else
      return !1;
    return !b && (g >= m || g <= 0) ? !0 : (x > 0 ? g < m : g > 0) && w && v;
  }
  /**
   * The root element on which lenis is instanced
   */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
   * The limit which is the maximum scroll value
   */
  get limit() {
    return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  /**
   * Whether or not the scroll is horizontal
   */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
   * The actual scroll value
   */
  get actualScroll() {
    const s = this.options.wrapper;
    return this.isHorizontal ? s.scrollX ?? s.scrollLeft : s.scrollY ?? s.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? zh(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
   * The progress of the scroll relative to the limit
   */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
   * Current scroll state
   */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(s) {
    this._isScrolling !== s && (this._isScrolling = s, this.updateClassName());
  }
  /**
   * Check if lenis is stopped
   */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(s) {
    this._isStopped !== s && (this._isStopped = s, this.updateClassName());
  }
  /**
   * Check if lenis is locked
   */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(s) {
    this._isLocked !== s && (this._isLocked = s, this.updateClassName());
  }
  /**
   * Check if lenis is smooth scrolling
   */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
   * The class name applied to the wrapper element
   */
  get className() {
    let s = "lenis";
    return this.options.autoToggle && (s += " lenis-autoToggle"), this.isStopped && (s += " lenis-stopped"), this.isLocked && (s += " lenis-locked"), this.isScrolling && (s += " lenis-scrolling"), this.isScrolling === "smooth" && (s += " lenis-smooth"), s;
  }
  updateClassName() {
    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
}, zu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wh(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Fu = { exports: {} }, Hs = { exports: {} }, Za;
function qh() {
  return Za || (Za = 1, function(s) {
    (function(t, i) {
      s.exports ? s.exports = i() : t.EvEmitter = i();
    })(typeof window < "u" ? window : zu, function() {
      function t() {
      }
      let i = t.prototype;
      return i.on = function(e, r) {
        if (!e || !r) return this;
        let n = this._events = this._events || {}, o = n[e] = n[e] || [];
        return o.includes(r) || o.push(r), this;
      }, i.once = function(e, r) {
        if (!e || !r) return this;
        this.on(e, r);
        let n = this._onceEvents = this._onceEvents || {}, o = n[e] = n[e] || {};
        return o[r] = !0, this;
      }, i.off = function(e, r) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        let o = n.indexOf(r);
        return o != -1 && n.splice(o, 1), this;
      }, i.emitEvent = function(e, r) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        n = n.slice(0), r = r || [];
        let o = this._onceEvents && this._onceEvents[e];
        for (let a of n)
          o && o[a] && (this.off(e, a), delete o[a]), a.apply(this, r);
        return this;
      }, i.allOff = function() {
        return delete this._events, delete this._onceEvents, this;
      }, t;
    });
  }(Hs)), Hs.exports;
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(s) {
  (function(t, i) {
    s.exports ? s.exports = i(t, qh()) : t.imagesLoaded = i(t, t.EvEmitter);
  })(
    typeof window < "u" ? window : zu,
    function(i, e) {
      let r = i.jQuery, n = i.console;
      function o(h) {
        return Array.isArray(h) ? h : typeof h == "object" && typeof h.length == "number" ? [...h] : [h];
      }
      function a(h, f, _) {
        if (!(this instanceof a))
          return new a(h, f, _);
        let d = h;
        if (typeof h == "string" && (d = document.querySelectorAll(h)), !d) {
          n.error(`Bad element for imagesLoaded ${d || h}`);
          return;
        }
        this.elements = o(d), this.options = {}, typeof f == "function" ? _ = f : Object.assign(this.options, f), _ && this.on("always", _), this.getImages(), r && (this.jqDeferred = new r.Deferred()), setTimeout(this.check.bind(this));
      }
      a.prototype = Object.create(e.prototype), a.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      };
      const u = [1, 9, 11];
      a.prototype.addElementImages = function(h) {
        h.nodeName === "IMG" && this.addImage(h), this.options.background === !0 && this.addElementBackgroundImages(h);
        let { nodeType: f } = h;
        if (!f || !u.includes(f)) return;
        let _ = h.querySelectorAll("img");
        for (let d of _)
          this.addImage(d);
        if (typeof this.options.background == "string") {
          let d = h.querySelectorAll(this.options.background);
          for (let g of d)
            this.addElementBackgroundImages(g);
        }
      };
      const l = /url\((['"])?(.*?)\1\)/gi;
      a.prototype.addElementBackgroundImages = function(h) {
        let f = getComputedStyle(h);
        if (!f) return;
        let _ = l.exec(f.backgroundImage);
        for (; _ !== null; ) {
          let d = _ && _[2];
          d && this.addBackground(d, h), _ = l.exec(f.backgroundImage);
        }
      }, a.prototype.addImage = function(h) {
        let f = new c(h);
        this.images.push(f);
      }, a.prototype.addBackground = function(h, f) {
        let _ = new p(h, f);
        this.images.push(_);
      }, a.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
          this.complete();
          return;
        }
        let h = (f, _, d) => {
          setTimeout(() => {
            this.progress(f, _, d);
          });
        };
        this.images.forEach(function(f) {
          f.once("progress", h), f.check();
        });
      }, a.prototype.progress = function(h, f, _) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !h.isLoaded, this.emitEvent("progress", [this, h, f]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, h), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${_}`, h, f);
      }, a.prototype.complete = function() {
        let h = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(h, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          let f = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[f](this);
        }
      };
      function c(h) {
        this.img = h;
      }
      c.prototype = Object.create(e.prototype), c.prototype.check = function() {
        if (this.getIsImageComplete()) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src;
      }, c.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }, c.prototype.confirm = function(h, f) {
        this.isLoaded = h;
        let { parentNode: _ } = this.img, d = _.nodeName === "PICTURE" ? _ : this.img;
        this.emitEvent("progress", [this, d, f]);
      }, c.prototype.handleEvent = function(h) {
        let f = "on" + h.type;
        this[f] && this[f](h);
      }, c.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }, c.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }, c.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      };
      function p(h, f) {
        this.url = h, this.element = f, this.img = new Image();
      }
      return p.prototype = Object.create(c.prototype), p.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
      }, p.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, p.prototype.confirm = function(h, f) {
        this.isLoaded = h, this.emitEvent("progress", [this, this.element, f]);
      }, a.makeJQueryPlugin = function(h) {
        h = h || i.jQuery, h && (r = h, r.fn.imagesLoaded = function(f, _) {
          return new a(this, f, _).jqDeferred.promise(r(this));
        });
      }, a.makeJQueryPlugin(), a;
    }
  );
})(Fu);
var Hh = Fu.exports;
const $h = /* @__PURE__ */ Wh(Hh);
function me(s, t, i) {
  const e = s.dataset[t];
  if (e === void 0 || e === "")
    return i;
  const r = Number(e);
  return Number.isFinite(r) ? r : i;
}
function Tr(s, t, i) {
  const e = s.dataset[t];
  return e && e.trim() !== "" ? e.trim() : i;
}
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var mi, or, ea, Cs, nn, os, ys, yn, Ze = "transform", Eo = Ze + "Origin", Bu, ia = function(t) {
  var i = t.ownerDocument || t;
  for (!(Ze in t.style) && ("msTransform" in t.style) && (Ze = "msTransform", Eo = Ze + "Origin"); i.parentNode && (i = i.parentNode); )
    ;
  if (or = window, ys = new cr(), i) {
    mi = i, ea = i.documentElement, Cs = i.body, yn = mi.createElementNS("http://www.w3.org/2000/svg", "g"), yn.style.transform = "none";
    var e = i.createElement("div"), r = i.createElement("div"), n = i && (i.body || i.firstElementChild);
    n && n.appendChild && (n.appendChild(e), e.appendChild(r), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", Bu = r.offsetParent !== e, n.removeChild(e));
  }
  return i;
}, Uh = function(t) {
  for (var i, e; t && t !== Cs; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), i ? i.push(e) : i = [e]), t = t.parentNode;
  return i;
}, Nu = [], Yu = [], ra = function() {
  return or.pageYOffset || mi.scrollTop || ea.scrollTop || Cs.scrollTop || 0;
}, na = function() {
  return or.pageXOffset || mi.scrollLeft || ea.scrollLeft || Cs.scrollLeft || 0;
}, sa = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, Gh = function s(t) {
  if (or.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return s(t);
}, $s = function s(t, i) {
  if (t.parentNode && (mi || ia(t))) {
    var e = sa(t), r = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = e ? i ? "rect" : "g" : "div", o = i !== 2 ? 0 : 100, a = i === 3 ? 100 : 0, u = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, l = mi.createElementNS ? mi.createElementNS(r.replace(/^https/, "http"), n) : mi.createElement(n);
    return i && (e ? (os || (os = s(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + o + "," + a + ")"), l.setAttribute("fill", "transparent"), os.appendChild(l)) : (nn || (nn = s(t), Object.assign(nn.style, u)), Object.assign(l.style, u, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: o + "px"
    }), nn.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, jh = function(t) {
  for (var i = new cr(), e = 0; e < t.numberOfItems; e++)
    i.multiply(t.getItem(e).matrix);
  return i;
}, Xu = function(t) {
  var i = t.getCTM(), e;
  return i || (e = t.style[Ze], t.style[Ze] = "none", t.appendChild(yn), i = yn.getCTM(), t.removeChild(yn), e ? t.style[Ze] = e : t.style.removeProperty(Ze.replace(/([A-Z])/g, "-$1").toLowerCase())), i || ys.clone();
}, Zh = function(t, i) {
  var e = sa(t), r = t === e, n = e ? Nu : Yu, o = t.parentNode, a = o && !e && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o, u, l, c, p, h, f;
  if (t === or)
    return t;
  if (n.length || n.push($s(t, 1), $s(t, 2), $s(t, 3)), u = e ? os : nn, e)
    r ? (c = Xu(t), p = -c.e / c.a, h = -c.f / c.d, l = ys) : t.getBBox ? (c = t.getBBox(), l = t.transform ? t.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? jh(l) : l.getItem(0).matrix : ys, p = l.a * c.x + l.c * c.y, h = l.b * c.x + l.d * c.y) : (l = new cr(), p = h = 0), i && t.tagName.toLowerCase() === "g" && (p = h = 0), (r || !t.getBoundingClientRect().width ? e : o).appendChild(u), u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + p) + "," + (l.f + h) + ")");
  else {
    if (p = h = 0, Bu)
      for (l = t.offsetParent, c = t; c && (c = c.parentNode) && c !== l && c.parentNode; )
        (or.getComputedStyle(c)[Ze] + "").length > 4 && (p = c.offsetLeft, h = c.offsetTop, c = 0);
    if (f = or.getComputedStyle(t), f.position !== "absolute" && f.position !== "fixed")
      for (l = t.offsetParent; o && o !== l; )
        p += o.scrollLeft || 0, h += o.scrollTop || 0, o = o.parentNode;
    c = u.style, c.top = t.offsetTop - h + "px", c.left = t.offsetLeft - p + "px", c[Ze] = f[Ze], c[Eo] = f[Eo], c.position = f.position === "fixed" ? "fixed" : "absolute", a.appendChild(u);
  }
  return u;
}, Us = function(t, i, e, r, n, o, a) {
  return t.a = i, t.b = e, t.c = r, t.d = n, t.e = o, t.f = a, t;
}, cr = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a) {
    i === void 0 && (i = 1), e === void 0 && (e = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), o === void 0 && (o = 0), a === void 0 && (a = 0), Us(this, i, e, r, n, o, a);
  }
  var t = s.prototype;
  return t.inverse = function() {
    var e = this.a, r = this.b, n = this.c, o = this.d, a = this.e, u = this.f, l = e * o - r * n || 1e-10;
    return Us(this, o / l, -r / l, -n / l, e / l, (n * u - o * a) / l, -(e * u - r * a) / l);
  }, t.multiply = function(e) {
    var r = this.a, n = this.b, o = this.c, a = this.d, u = this.e, l = this.f, c = e.a, p = e.c, h = e.b, f = e.d, _ = e.e, d = e.f;
    return Us(this, c * r + h * o, c * n + h * a, p * r + f * o, p * n + f * a, u + _ * r + d * o, l + _ * n + d * a);
  }, t.clone = function() {
    return new s(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var r = this.a, n = this.b, o = this.c, a = this.d, u = this.e, l = this.f;
    return r === e.a && n === e.b && o === e.c && a === e.d && u === e.e && l === e.f;
  }, t.apply = function(e, r) {
    r === void 0 && (r = {});
    var n = e.x, o = e.y, a = this.a, u = this.b, l = this.c, c = this.d, p = this.e, h = this.f;
    return r.x = n * a + o * l + p || 0, r.y = n * u + o * c + h || 0, r;
  }, s;
}();
function ui(s, t, i, e) {
  if (!s || !s.parentNode || (mi || ia(s)).documentElement === s)
    return new cr();
  var r = Uh(s), n = sa(s), o = n ? Nu : Yu, a = Zh(s, i), u = o[0].getBoundingClientRect(), l = o[1].getBoundingClientRect(), c = o[2].getBoundingClientRect(), p = a.parentNode, h = !e && Gh(s), f = new cr((l.left - u.left) / 100, (l.top - u.top) / 100, (c.left - u.left) / 100, (c.top - u.top) / 100, u.left + (h ? 0 : na()), u.top + (h ? 0 : ra()));
  if (p.removeChild(a), r)
    for (u = r.length; u--; )
      l = r[u], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return t ? f.inverse() : f;
}
/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Kh = 1, Xr, Kt, mt, vn, ki, yi, Co, Ka = function(t, i) {
  return t.actions.forEach(function(e) {
    return e.vars[i] && e.vars[i](e);
  });
}, ko = {}, Qa = 180 / Math.PI, Qh = Math.PI / 180, vs = {}, Ja = {}, ks = {}, oa = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, Jh = oa("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ps = oa("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), wn = function(t) {
  return Xr(t)[0] || console.warn("Element not found:", t);
}, Er = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, Gs = function(t, i, e) {
  return t.forEach(function(r) {
    return r.classList[e](i);
  });
}, tl = {
  zIndex: 1,
  kill: 1,
  simple: 1,
  spin: 1,
  clearProps: 1,
  targets: 1,
  toggleClass: 1,
  onComplete: 1,
  onUpdate: 1,
  onInterrupt: 1,
  onStart: 1,
  delay: 1,
  repeat: 1,
  repeatDelay: 1,
  yoyo: 1,
  scale: 1,
  fade: 1,
  absolute: 1,
  props: 1,
  onEnter: 1,
  onLeave: 1,
  custom: 1,
  paused: 1,
  nested: 1,
  prune: 1,
  absoluteOnLeave: 1
}, Vu = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, Wu = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, Cr = function(t, i) {
  var e = {}, r;
  for (r in t)
    i[r] || (e[r] = t[r]);
  return e;
}, aa = {}, qu = function(t) {
  var i = aa[t] = oa(t);
  return ks[t] = i.concat(Ps), i;
}, tf = function(t) {
  var i = t._gsap || Kt.core.getCache(t);
  return i.gmCache === Kt.ticker.frame ? i.gMatrix : (i.gmCache = Kt.ticker.frame, i.gMatrix = ui(t, !0, !1, !0));
}, ef = function s(t, i, e) {
  e === void 0 && (e = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, e) * (i ? -1 : 1), o = i ? -n * 900 : 0; t; )
    o += n, t = t.previousSibling;
  return r ? o + s(r, i, e + 1) : o;
}, ws = function(t, i, e) {
  return t.forEach(function(r) {
    return r.d = ef(e ? r.element : r.t, i);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, Mn = function(t, i) {
  for (var e = t.element.style, r = t.css = t.css || [], n = i.length, o, a; n--; )
    o = i[n], a = e[o] || e.getPropertyValue(o), r.push(a ? o : Ja[o] || (Ja[o] = Wu(o)), a);
  return e;
}, bs = function(t) {
  var i = t.css, e = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < i.length; r += 2)
    i[r + 1] ? e[i[r]] = i[r + 1] : e.removeProperty(i[r]);
  !i[i.indexOf("transform") + 1] && e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, el = function(t, i) {
  t.forEach(function(e) {
    return e.a.cache.uncache = 1;
  }), i || t.finalStates.forEach(bs);
}, js = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), la = function(t, i, e) {
  var r = t.element, n = t.width, o = t.height, a = t.uncache, u = t.getProp, l = r.style, c = 4, p, h, f;
  if (typeof i != "object" && (i = t), mt && e !== 1)
    return mt._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), mt._final.push(function() {
      return (t.cache.uncache = 1) && bs(t);
    }), r;
  for (h = u("display") === "none", (!t.isVisible || h) && (h && (Mn(t, ["display"]).display = i.display), t.matrix = i.matrix, t.width = n = t.width || i.width, t.height = o = t.height || i.height), Mn(t, js), f = window.getComputedStyle(r); c--; )
    l[js[c]] = f[js[c]];
  if (l.gridArea = "1 / 1 / 1 / 1", l.transition = "none", l.position = "absolute", l.width = n + "px", l.height = o + "px", l.top || (l.top = "0px"), l.left || (l.left = "0px"), a)
    p = new hr(r);
  else if (p = Cr(t, vs), p.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    p.matrix = new cr(1, 0, 0, 1, _.left + na(), _.top + ra());
  } else
    p.matrix = ui(r, !1, !1, !0);
  return p = Rr(p, t, !0), t.x = yi(p.x, 0.01), t.y = yi(p.y, 0.01), r;
}, il = function(t, i) {
  return i !== !0 && (i = Xr(i), t = t.filter(function(e) {
    if (i.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1)
      return !0;
    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
  })), t;
}, Hu = function(t) {
  return ws(t, !0).forEach(function(i) {
    return (i.a.isVisible || i.b.isVisible) && la(i.sd < 0 ? i.b : i.a, i.b, 1);
  });
}, rf = function(t, i) {
  return i && t.idLookup[Po(i).id] || t.elementStates[0];
}, Po = function(t, i, e, r) {
  return t instanceof hr ? t : t instanceof Ke ? rf(t, r) : new hr(typeof t == "string" ? wn(t) || console.warn(t + " not found") : t, i, e);
}, nf = function(t, i) {
  for (var e = Kt.getProperty(t.element, null, "native"), r = t.props = {}, n = i.length; n--; )
    r[i[n]] = (e(i[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, $u = function(t, i) {
  var e = t.style || t, r;
  for (r in i)
    e[r] = i[r];
}, sf = function(t) {
  var i = t.getAttribute("data-flip-id");
  return i || t.setAttribute("data-flip-id", i = "auto-" + Kh++), i;
}, Uu = function(t) {
  return t.map(function(i) {
    return i.element;
  });
}, rl = function(t, i, e) {
  return t && i.length && e.add(t(Uu(i), e, new Ke(i, 0, !0)), 0);
}, Rr = function(t, i, e, r, n, o) {
  var a = t.element, u = t.cache, l = t.parent, c = t.x, p = t.y, h = i.width, f = i.height, _ = i.scaleX, d = i.scaleY, g = i.rotation, m = i.bounds, x = o && Co && Co(a, "transform,width,height"), w = t, v = i.matrix, b = v.e, E = v.f, S = t.bounds.width !== m.width || t.bounds.height !== m.height || t.scaleX !== _ || t.scaleY !== d || t.rotation !== g, P = !S && t.simple && i.simple && !n, C, k, A, O, B, I, D;
  return P || !l ? (_ = d = 1, g = C = 0) : (B = tf(l), I = B.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix), g = Er(Math.atan2(I.b, I.a) * Qa), C = Er(Math.atan2(I.c, I.d) * Qa + g) % 360, _ = Math.sqrt(Math.pow(I.a, 2) + Math.pow(I.b, 2)), d = Math.sqrt(Math.pow(I.c, 2) + Math.pow(I.d, 2)) * Math.cos(C * Qh), n && (n = Xr(n)[0], O = Kt.getProperty(n), D = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), w = {
    scaleX: O("scaleX"),
    scaleY: O("scaleY"),
    width: D ? D.width : Math.ceil(parseFloat(O("width", "px"))),
    height: D ? D.height : parseFloat(O("height", "px"))
  }), u.rotation = g + "deg", u.skewX = C + "deg"), e ? (_ *= h === w.width || !w.width ? 1 : h / w.width, d *= f === w.height || !w.height ? 1 : f / w.height, u.scaleX = _, u.scaleY = d) : (h = yi(h * _ / w.scaleX, 0), f = yi(f * d / w.scaleY, 0), a.style.width = h + "px", a.style.height = f + "px"), r && $u(a, i.props), P || !l ? (c += b - t.matrix.e, p += E - t.matrix.f) : S || l !== i.parent ? (u.x = c + "px", u.y = p + "px", u.renderTransform(1, u), I = ui(n || a, !1, !1, !0), k = B.apply({
    x: I.e,
    y: I.f
  }), A = B.apply({
    x: b,
    y: E
  }), c += A.x - k.x, p += A.y - k.y) : (B.e = B.f = 0, A = B.apply({
    x: b - t.matrix.e,
    y: E - t.matrix.f
  }), c += A.x, p += A.y), c = yi(c, 0.02), p = yi(p, 0.02), o && !(o instanceof hr) ? x && x.revert() : (u.x = c + "px", u.y = p + "px", u.renderTransform(1, u)), o && (o.x = c, o.y = p, o.rotation = g, o.skewX = C, e ? (o.scaleX = _, o.scaleY = d) : (o.width = h, o.height = f)), o || u;
}, Zs = function(t, i) {
  return t instanceof Ke ? t : new Ke(t, i);
}, Gu = function(t, i, e) {
  var r = t.idLookup[e], n = t.alt[e];
  return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, Ks = [], Qs = "width,height,overflowX,overflowY".split(","), Gn, nl = function(t) {
  if (t !== Gn) {
    var i = ki.style, e = ki.clientWidth === window.outerWidth, r = ki.clientHeight === window.outerHeight, n = 4;
    if (t && (e || r)) {
      for (; n--; )
        Ks[n] = i[Qs[n]];
      e && (i.width = ki.clientWidth + "px", i.overflowY = "hidden"), r && (i.height = ki.clientHeight + "px", i.overflowX = "hidden"), Gn = t;
    } else if (Gn) {
      for (; n--; )
        Ks[n] ? i[Qs[n]] = Ks[n] : i.removeProperty(Wu(Qs[n]));
      Gn = t;
    }
  }
}, sl = function(t, i) {
  for (var e = 0; e < t.length; e += 3)
    Kt.set(t[e], {
      clearProps: !0
    }), t[e].setAttribute("style", t[e + i]), t[e]._gsap.gmCache = -1;
}, Js = function(t, i, e, r) {
  t instanceof Ke && i instanceof Ke || console.warn("Not a valid state object."), e = e || {};
  var n = e, o = n.clearProps, a = n.onEnter, u = n.onLeave, l = n.absolute, c = n.absoluteOnLeave, p = n.custom, h = n.delay, f = n.paused, _ = n.repeat, d = n.repeatDelay, g = n.yoyo, m = n.toggleClass, x = n.nested, w = n.zIndex, v = n.scale, b = n.fade, E = n.stagger, S = n.spin, P = n.prune, C = ("props" in e ? e : t).props, k = Cr(e, tl), A = Kt.timeline({
    delay: h,
    paused: f,
    repeat: _,
    repeatDelay: d,
    yoyo: g,
    data: "isFlip"
  }), O = k, B = [], I = [], D = [], H = [], X = S === !0 ? 1 : S || 0, it = typeof S == "function" ? S : function() {
    return X;
  }, at = t.interrupted || i.interrupted, y = A[r !== 1 ? "to" : "from"], rt, lt, ge, nt, $, U, ut, pt, Mt, Nt, gt, It, z, Q;
  for (lt in i.idLookup)
    gt = i.alt[lt] ? Gu(i, t, lt) : i.idLookup[lt], $ = gt.element, Nt = t.idLookup[lt], t.alt[lt] && $ === Nt.element && (t.alt[lt].isVisible || !gt.isVisible) && (Nt = t.alt[lt]), Nt ? (U = {
      t: $,
      b: Nt,
      a: gt,
      sd: Nt.element === $ ? 0 : gt.isVisible ? 1 : -1
    }, D.push(U), U.sd && (U.sd < 0 && (U.b = gt, U.a = Nt), at && Mn(U.b, C ? ks[C] : Ps), b && D.push(U.swap = {
      t: Nt.element,
      b: U.b,
      a: U.a,
      sd: -U.sd,
      swap: U
    })), $._flip = Nt.element._flip = mt ? mt.timeline : A) : gt.isVisible && (D.push({
      t: $,
      b: Cr(gt, {
        isVisible: 1
      }),
      a: gt,
      sd: 0,
      entering: 1
    }), $._flip = mt ? mt.timeline : A);
  if (C && (aa[C] || qu(C)).forEach(function(T) {
    return k[T] = function(Dt) {
      return D[Dt].a.props[T];
    };
  }), D.finalStates = Mt = [], It = function() {
    ws(D), nl(!0);
    var Dt = [];
    for (nt = 0; nt < D.length; nt++)
      U = D[nt], z = U.a, Q = U.b, P && !z.isDifferent(Q) && !U.entering ? D.splice(nt--, 1) : ($ = U.t, x && !(U.sd < 0) && nt && (z = U.a = z.clone({
        matrix: ui($, !1, !1, !0)
      })), Q.isVisible && z.isVisible ? (U.sd < 0 ? (x && sl(Dt, 1), ut = new hr($, C, t.simple), Rr(ut, z, v, 0, 0, ut), ut.matrix = ui($, !1, !1, !0), ut.bounds = $.getBoundingClientRect(), ut.css = U.b.css, U.a = z = ut, b && ($.style.opacity = at ? Q.opacity : z.opacity), E && H.push($), x && (sl(Dt, 2), Dt.push($, $.getAttribute("style")))) : U.sd > 0 && b && ($.style.opacity = at ? z.opacity - Q.opacity : "0"), Rr(z, Q, v, C), x && U.sd < 0 && Dt.push($.getAttribute("style"))) : Q.isVisible !== z.isVisible && (Q.isVisible ? z.isVisible || (Q.css = z.css, I.push(Q), D.splice(nt--, 1), l && x && Rr(z, Q, v, C)) : (z.isVisible && B.push(z), D.splice(nt--, 1))), v || ($.style.maxWidth = Math.max(z.width, Q.width) + "px", $.style.maxHeight = Math.max(z.height, Q.height) + "px", $.style.minWidth = Math.min(z.width, Q.width) + "px", $.style.minHeight = Math.min(z.height, Q.height) + "px"), x && m && $.classList.add(m)), Mt.push(z);
    var le;
    if (m && (le = Mt.map(function(N) {
      return N.element;
    }), x && le.forEach(function(N) {
      return N.classList.remove(m);
    })), nl(!1), v ? (k.scaleX = function(N) {
      return D[N].a.scaleX;
    }, k.scaleY = function(N) {
      return D[N].a.scaleY;
    }) : (k.width = function(N) {
      return D[N].a.width + "px";
    }, k.height = function(N) {
      return D[N].a.height + "px";
    }, k.autoRound = e.autoRound || !1), k.x = function(N) {
      return D[N].a.x + "px";
    }, k.y = function(N) {
      return D[N].a.y + "px";
    }, k.rotation = function(N) {
      return D[N].a.rotation + (S ? it(N, pt[N], pt) * 360 : 0);
    }, k.skewX = function(N) {
      return D[N].a.skewX;
    }, pt = D.map(function(N) {
      return N.t;
    }), (w || w === 0) && (k.modifiers = {
      zIndex: function() {
        return w;
      }
    }, k.zIndex = w, k.immediateRender = e.immediateRender !== !1), b && (k.opacity = function(N) {
      return D[N].sd < 0 ? 0 : D[N].sd > 0 ? D[N].a.opacity : "+=0";
    }), H.length) {
      E = Kt.utils.distribute(E);
      var Qe = pt.slice(H.length);
      k.stagger = function(N, We) {
        return E(~H.indexOf(We) ? pt.indexOf(D[N].swap.t) : N, We, Qe);
      };
    }
    if (Jh.forEach(function(N) {
      return e[N] && A.eventCallback(N, e[N], e[N + "Params"]);
    }), p && pt.length) {
      O = Cr(k, tl), "scale" in p && (p.scaleX = p.scaleY = p.scale, delete p.scale);
      for (lt in p)
        rt = Cr(p[lt], Vu), rt[lt] = k[lt], !("duration" in rt) && "duration" in k && (rt.duration = k.duration), rt.stagger = k.stagger, y.call(A, pt, rt, 0), delete O[lt];
    }
    (pt.length || I.length || B.length) && (m && A.add(function() {
      return Gs(le, m, A._zTime < 0 ? "remove" : "add");
    }, 0) && !f && Gs(le, m, "add"), pt.length && y.call(A, pt, O, 0)), rl(a, B, A), rl(u, I, A);
    var dt = mt && mt.timeline;
    dt && (dt.add(A, 0), mt._final.push(function() {
      return el(D, !o);
    })), ge = A.duration(), A.call(function() {
      var N = A.time() >= ge;
      N && !dt && el(D, !o), m && Gs(le, m, N ? "remove" : "add");
    });
  }, c && (l = D.filter(function(T) {
    return !T.sd && !T.a.isVisible && T.b.isVisible;
  }).map(function(T) {
    return T.a.element;
  })), mt) {
    var Ut;
    l && (Ut = mt._abs).push.apply(Ut, il(D, l)), mt._run.push(It);
  } else
    l && Hu(il(D, l)), It();
  var Gt = mt ? mt.timeline : A;
  return Gt.revert = function() {
    return ua(Gt, 1, 1);
  }, Gt;
}, of = function s(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(s);
}, ua = function(t, i, e) {
  if (t && t.progress() < 1 && (!t.paused() || e))
    return i && (of(t), i < 2 && t.progress(1), t.kill()), !0;
}, jn = function(t) {
  for (var i = t.idLookup = {}, e = t.alt = {}, r = t.elementStates, n = r.length, o; n--; )
    o = r[n], i[o.id] ? e[o.id] = o : i[o.id] = o;
}, Ke = /* @__PURE__ */ function() {
  function s(i, e, r) {
    if (this.props = e && e.props, this.simple = !!(e && e.simple), r)
      this.targets = Uu(i), this.elementStates = i, jn(this);
    else {
      this.targets = Xr(i);
      var n = e && (e.kill === !1 || e.batch && !e.kill);
      mt && !n && mt._kill.push(this), this.update(n || !!mt);
    }
  }
  var t = s.prototype;
  return t.update = function(e) {
    var r = this;
    return this.elementStates = this.targets.map(function(n) {
      return new hr(n, r.props, r.simple);
    }), jn(this), this.interrupt(e), this.recordInlineStyles(), this;
  }, t.clear = function() {
    return this.targets.length = this.elementStates.length = 0, jn(this), this;
  }, t.fit = function(e, r, n) {
    for (var o = ws(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, u = 0, l, c; u < o.length; u++)
      l = o[u], n && (l.matrix = ui(l.element, !1, !1, !0)), c = a[l.id], c && Rr(l, c, r, !0, 0, l), l.matrix = ui(l.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(e, r) {
    var n = this.getElementState(e) || vs;
    return (r in n ? n : n.props || vs)[r];
  }, t.add = function(e) {
    for (var r = e.targets.length, n = this.idLookup, o = this.alt, a, u, l; r--; )
      u = e.elementStates[r], l = n[u.id], l && (u.element === l.element || o[u.id] && o[u.id].element === u.element) ? (a = this.elementStates.indexOf(u.element === l.element ? l : o[u.id]), this.targets.splice(a, 1, e.targets[r]), this.elementStates.splice(a, 1, u)) : (this.targets.push(e.targets[r]), this.elementStates.push(u));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), jn(this), this;
  }, t.compare = function(e) {
    var r = e.idLookup, n = this.idLookup, o = [], a = [], u = [], l = [], c = [], p = e.alt, h = this.alt, f = function(P, C, k) {
      return (P.isVisible !== C.isVisible ? P.isVisible ? u : l : P.isVisible ? a : o).push(k) && c.push(k);
    }, _ = function(P, C, k) {
      return c.indexOf(k) < 0 && f(P, C, k);
    }, d, g, m, x, w, v, b, E;
    for (m in r)
      w = p[m], v = h[m], d = w ? Gu(e, this, m) : r[m], x = d.element, g = n[m], v ? (E = g.isVisible || !v.isVisible && x === g.element ? g : v, b = w && !d.isVisible && !w.isVisible && E.element === w.element ? w : d, b.isVisible && E.isVisible && b.element !== E.element ? ((b.isDifferent(E) ? a : o).push(b.element, E.element), c.push(b.element, E.element)) : f(b, E, b.element), w && b.element === w.element && (w = r[m]), _(b.element !== g.element && w ? w : b, g, g.element), _(w && w.element === v.element ? w : b, v, v.element), w && _(w, v.element === w.element ? v : g, w.element)) : (g ? g.isDifferent(d) ? f(d, g, x) : o.push(x) : u.push(x), w && _(w, g, w.element));
    for (m in n)
      r[m] || (l.push(n[m].element), h[m] && l.push(h[m].element));
    return {
      changed: a,
      unchanged: o,
      enter: u,
      leave: l
    };
  }, t.recordInlineStyles = function() {
    for (var e = ks[this.props] || Ps, r = this.elementStates.length; r--; )
      Mn(this.elementStates[r], e);
  }, t.interrupt = function(e) {
    var r = this, n = [];
    this.targets.forEach(function(o) {
      var a = o._flip, u = ua(a, e ? 0 : 1);
      e && u && n.indexOf(a) < 0 && a.add(function() {
        return r.updateVisibility();
      }), u && n.push(a);
    }), !e && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
  }, t.updateVisibility = function() {
    this.elementStates.forEach(function(e) {
      var r = e.element.getBoundingClientRect();
      e.isVisible = !!(r.width || r.height || r.top || r.left), e.uncache = 1;
    });
  }, t.getElementState = function(e) {
    return this.elementStates[this.targets.indexOf(wn(e))];
  }, t.makeAbsolute = function() {
    return ws(this.elementStates.slice(0), !0, !0).map(la);
  }, s;
}(), hr = /* @__PURE__ */ function() {
  function s(i, e, r) {
    i instanceof s ? Object.assign(this, i, e || {}) : (this.element = i, this.update(e, r));
  }
  var t = s.prototype;
  return t.isDifferent = function(e) {
    var r = this.bounds, n = e.bounds;
    return r.top !== n.top || r.left !== n.left || r.width !== n.width || r.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props);
  }, t.clone = function(e) {
    return new s(this, e);
  }, t.update = function(e, r) {
    var n = this, o = n.element, a = Kt.getProperty(o), u = Kt.core.getCache(o), l = o.getBoundingClientRect(), c = o.getBBox && typeof o.getBBox == "function" && o.nodeName.toLowerCase() !== "svg" && o.getBBox(), p = r ? new cr(1, 0, 0, 1, l.left + na(), l.top + ra()) : ui(o, !1, !1, !0);
    u.uncache = 1, n.getProp = a, n.element = o, n.id = sf(o), n.matrix = p, n.cache = u, n.bounds = l, n.isVisible = !!(l.width || l.height || l.left || l.top), n.display = a("display"), n.position = a("position"), n.parent = o.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = u.scaleX, n.scaleY = u.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = c ? c.width : yi(a("width", "px"), 0.04), n.height = c ? c.height : yi(a("height", "px"), 0.04), e && nf(n, aa[e] || qu(e)), n.ctm = o.getCTM && o.nodeName.toLowerCase() === "svg" && Xu(o).inverse(), n.simple = r || Er(p.a) === 1 && !Er(p.b) && !Er(p.c) && Er(p.d) === 1, n.uncache = 0;
  }, s;
}(), af = /* @__PURE__ */ function() {
  function s(i, e) {
    this.vars = i, this.batch = e, this.states = [], this.timeline = e.timeline;
  }
  var t = s.prototype;
  return t.getStateById = function(e) {
    for (var r = this.states.length; r--; )
      if (this.states[r].idLookup[e])
        return this.states[r];
  }, t.kill = function() {
    this.batch.remove(this);
  }, s;
}(), lf = /* @__PURE__ */ function() {
  function s(i) {
    this.id = i, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ke(), this.timeline = Kt.timeline();
  }
  var t = s.prototype;
  return t.add = function(e) {
    var r = this.actions.filter(function(n) {
      return n.vars === e;
    });
    return r.length ? r[0] : (r = new af(typeof e == "function" ? {
      animate: e
    } : e, this), this.actions.push(r), r);
  }, t.remove = function(e) {
    var r = this.actions.indexOf(e);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(e) {
    var r = this, n = mt, o = vn;
    return mt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, vn = a, a.state = a.vars.getState(a)), e && a.states.forEach(function(u) {
        return r.state.add(u);
      });
    }), vn = o, mt = n, this.killConflicts(), this;
  }, t.animate = function() {
    var e = this, r = mt, n = this.timeline, o = this.actions.length, a, u;
    for (mt = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(l) {
      l.vars.animate && l.vars.animate(l);
      var c = l.vars.onEnter, p = l.vars.onLeave, h = l.targets, f, _;
      h && h.length && (c || p) && (f = new Ke(), l.states.forEach(function(d) {
        return f.add(d);
      }), _ = f.compare(Vr.getState(h)), _.enter.length && c && c(_.enter), _.leave.length && p && p(_.leave));
    }), Hu(this._abs), this._run.forEach(function(l) {
      return l();
    }), u = n.duration(), a = this._final.slice(0), n.add(function() {
      u <= n.time() && (a.forEach(function(l) {
        return l();
      }), Ka(e, "onComplete"));
    }), mt = r; o--; )
      this.actions[o].vars.once && this.actions[o].kill();
    return Ka(this, "onStart"), n.restart(), this;
  }, t.loadState = function(e) {
    e || (e = function() {
      return 0;
    });
    var r = [];
    return this.actions.forEach(function(n) {
      if (n.vars.loadState) {
        var o, a = function u(l) {
          l && (n.targets = l), o = r.indexOf(u), ~o && (r.splice(o, 1), r.length || e());
        };
        r.push(a), n.vars.loadState(a);
      }
    }), r.length || e(), this;
  }, t.setState = function() {
    return this.actions.forEach(function(e) {
      return e.targets = e.vars.setState && e.vars.setState(e);
    }), this;
  }, t.killConflicts = function(e) {
    return this.state.interrupt(e), this._kill.forEach(function(r) {
      return r.interrupt(e);
    }), this;
  }, t.run = function(e, r) {
    var n = this;
    return this !== mt && (e || this.getState(r), this.loadState(function() {
      n._killed || (n.setState(), n.animate());
    })), this;
  }, t.clear = function(e) {
    this.state.clear(), e || (this.actions.length = 0);
  }, t.getStateById = function(e) {
    for (var r = this.actions.length, n; r--; )
      if (n = this.actions[r].getStateById(e), n)
        return n;
    return this.state.idLookup[e] && this.state;
  }, t.kill = function() {
    this._killed = 1, this.clear(), delete ko[this.id];
  }, s;
}(), Vr = /* @__PURE__ */ function() {
  function s() {
  }
  return s.getState = function(i, e) {
    var r = Zs(i, e);
    return vn && vn.states.push(r), e && e.batch && s.batch(e.batch).state.add(r), r;
  }, s.from = function(i, e) {
    return e = e || {}, "clearProps" in e || (e.clearProps = !0), Js(i, Zs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, -1);
  }, s.to = function(i, e) {
    return Js(i, Zs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, 1);
  }, s.fromTo = function(i, e, r) {
    return Js(i, e, r);
  }, s.fit = function(i, e, r) {
    var n = r ? Cr(r, Vu) : {}, o = r || n, a = o.absolute, u = o.scale, l = o.getVars, c = o.props, p = o.runBackwards, h = o.onComplete, f = o.simple, _ = r && r.fitChild && wn(r.fitChild), d = Po(e, c, f, i), g = Po(i, 0, f, d), m = c ? ks[c] : Ps, x = Kt.context();
    return c && $u(n, d.props), Mn(g, m), p && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      bs(g), h && h.apply(this, arguments);
    }), a && la(g, d), n = Rr(g, d, u || _, !n.duration && c, _, n.duration || l ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), x && !l && x.add(function() {
      return function() {
        return bs(g);
      };
    }), l ? n : n.duration ? Kt.to(g.element, n) : null;
  }, s.makeAbsolute = function(i, e) {
    return (i instanceof Ke ? i : new Ke(i, e)).makeAbsolute();
  }, s.batch = function(i) {
    return i || (i = "default"), ko[i] || (ko[i] = new lf(i));
  }, s.killFlipsOf = function(i, e) {
    (i instanceof Ke ? i.targets : Xr(i)).forEach(function(r) {
      return r && ua(r._flip, e !== !1 ? 1 : 2);
    });
  }, s.isFlipping = function(i) {
    var e = s.getByTarget(i);
    return !!e && e.isActive();
  }, s.getByTarget = function(i) {
    return (wn(i) || vs)._flip;
  }, s.getElementState = function(i, e) {
    return new hr(wn(i), e);
  }, s.convertCoordinates = function(i, e, r) {
    var n = ui(e, !0, !0).multiply(ui(i));
    return r ? n.apply(r) : n;
  }, s.register = function(i) {
    if (ki = typeof document < "u" && document.body, ki) {
      Kt = i, ia(ki), Xr = Kt.utils.toArray, Co = Kt.core.getStyleSaver;
      var e = Kt.utils.snap(0.1);
      yi = function(n, o) {
        return e(parseFloat(n) + o);
      };
    }
  }, s;
}();
Vr.version = "3.14.2";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Vr);
Ht.registerPlugin(Vr, G);
const Zn = {
  absoluteOnLeave: !1,
  absolute: !1,
  scale: !0,
  simple: !0
}, ol = [1, 0.82, 1.08, 0.9, 1, 0.92, 1.06, 0.88, 1];
function uf(s) {
  const {
    gridEl: t,
    pinEl: i,
    items: e,
    caption: r,
    scroll: n,
    switchClass: o,
    getScaleTarget: a,
    getParallaxImg: u,
    parallax: l,
    parallaxTravel: c = 14,
    parallaxStrengthKey: p,
    reduceMotion: h
  } = s, f = [...e], _ = r ? [...f, r] : f;
  t.classList.add(o);
  const d = Vr.getState(_, {
    props: "filter, opacity"
  });
  t.classList.remove(o);
  const g = {
    trigger: t,
    start: n.start,
    end: n.end,
    pin: i,
    scrub: !0
  }, m = Vr.to(d, {
    ease: "none",
    absoluteOnLeave: Zn.absoluteOnLeave,
    absolute: Zn.absolute,
    scale: Zn.scale,
    simple: Zn.simple,
    scrollTrigger: g,
    stagger: 0
  }), x = f.map((w) => a(w)).filter(Boolean);
  return x.length && m.fromTo(x, { scale: 2 }, { scale: 1, ease: "none" }, 0), l && !h && f.forEach((w, v) => {
    const b = u(w);
    if (!b) return;
    const E = me(
      w,
      p,
      ol[v % ol.length]
    ), S = v % 2 === 0 ? 1 : -1, P = c * E;
    Ht.set(b, { force3D: !0 }), m.fromTo(
      b,
      { yPercent: -P * S },
      { yPercent: P * S, ease: "none" },
      0
    );
  }), m;
}
Ht.registerPlugin(G);
const Vt = {
  /** `true` = suivi scroll 1:1 (recommandé, type démos Webflow / xpcs) */
  scrub: !0,
  start: "top top",
  end: "bottom bottom",
  scaleBuffer: 1.05,
  pushMobilePortrait: 1.5,
  pushMobileLandscape: 1.3,
  pushDesktop: 0.8,
  mobileBreakpoint: 768,
  phase1Duration: 2,
  /** none = toutes les tuiles partagent exactement la même courbe de progression au scroll */
  phase1Ease: "none",
  overlayAt: 2,
  overlayDuration: 0.5,
  charsAt: 2.2,
  charsDuration: 0.5,
  charsStagger: 0.03,
  charsEase: "power2.out",
  peripheralScale: 1.15
}, al = { start: "center center", end: "+=300%" }, cf = 14;
function hf(s) {
  const t = s.getAttribute("data-gcp-scrub");
  if (t === null || t === "") return Vt.scrub;
  if (t === "true") return !0;
  if (t === "false") return !1;
  const i = Number(t);
  return Number.isFinite(i) ? i : Vt.scrub;
}
function ff(s) {
  const t = s.querySelectorAll("img");
  return new Promise((i) => {
    if (!t.length) {
      i();
      return;
    }
    $h(t, () => i());
  });
}
function pf(s, t) {
  const i = s.getBoundingClientRect(), e = t.getBoundingClientRect(), r = e.left + e.width / 2 - i.left, n = e.top + e.height / 2 - i.top;
  Ht.set(s, { transformOrigin: `${r}px ${n}px`, force3D: !0 });
}
function ll(s) {
  if (!s || s.dataset.gcpOriginalText != null)
    return (s == null ? void 0 : s.querySelectorAll(".gcp-split-char")) ?? [];
  const t = s.textContent ?? "";
  s.dataset.gcpOriginalText = t, s.textContent = "";
  for (const i of t) {
    const e = document.createElement("span");
    e.className = "gcp-split-char", e.textContent = i === " " ? " " : i, s.appendChild(e);
  }
  return s.querySelectorAll(".gcp-split-char");
}
function df(s) {
  s.querySelectorAll("[data-gcp-split], [data-gcp-split-desc]").forEach((t) => {
    const i = t.dataset.gcpOriginalText;
    i !== void 0 && (t.textContent = i, delete t.dataset.gcpOriginalText);
  });
}
function _f(s) {
  const t = window.innerWidth, i = window.innerHeight, e = t < s.mobileBreakpoint;
  return e && t < i ? t * s.pushMobilePortrait : e && t >= i ? i * s.pushMobileLandscape : Math.min(t, i) * s.pushDesktop;
}
function gf(s) {
  const t = getComputedStyle(s);
  let i = parseFloat(t.rowGap), e = parseFloat(t.columnGap);
  const r = parseFloat(t.gap);
  return Number.isFinite(i) || (i = Number.isFinite(r) ? r : 0), Number.isFinite(e) || (e = Number.isFinite(r) ? r : 0), !Number.isFinite(i) && !Number.isFinite(e) ? { row: 12, col: 12 } : (Number.isFinite(i) || (i = e), Number.isFinite(e) || (e = i), { row: i, col: e });
}
function ul(s) {
  s.style.removeProperty("row-gap"), s.style.removeProperty("column-gap"), s.style.removeProperty("gap");
}
function cl(s, t, i) {
  const r = 1 / Math.max(Math.abs(i) || 1, 1e-3);
  s.style.removeProperty("gap"), s.style.rowGap = `${t.row * r}px`, s.style.columnGap = `${t.col * r}px`;
}
function mf(s, t) {
  const {
    section: i,
    pinEl: e,
    grid: r,
    centerItem: n,
    otherItems: o,
    overlay: a,
    splitChars: u
  } = s, l = n.getBoundingClientRect();
  (l.width < 1 || l.height < 1) && console.warn("[gallery-center-push] Zone centrale trop petite pour le calcul du scale");
  const c = window.innerWidth / Math.max(l.width, 1), p = window.innerHeight / Math.max(l.height, 1), h = Math.max(c, p) * t.scaleBuffer, f = r.querySelectorAll("[data-gcp-item]"), _ = Ht.timeline({
    scrollTrigger: {
      trigger: i,
      start: t.start,
      end: t.end,
      scrub: t.scrub,
      pin: e,
      pinSpacing: !0,
      invalidateOnRefresh: !0
    }
  });
  pf(r, n);
  const d = gf(r), g = { s: 1 };
  Ht.set(r, { scale: 1, force3D: !0 }), cl(r, d, 1), _.to(
    g,
    {
      s: h,
      duration: t.phase1Duration,
      ease: t.phase1Ease,
      onUpdate() {
        const b = g.s;
        Ht.set(r, { scale: b, force3D: !0 }), cl(r, d, b);
      }
    },
    0
  ), _.to(
    f,
    {
      borderRadius: 0,
      duration: t.phase1Duration,
      ease: t.phase1Ease
    },
    0
  );
  const m = _f(t), x = n.getBoundingClientRect(), w = x.left + x.width / 2, v = x.top + x.height / 2;
  return o.forEach((b) => {
    if (!b.querySelector("img")) return;
    const E = b.getBoundingClientRect(), S = E.left + E.width / 2, P = E.top + E.height / 2, C = S - w, k = P - v, A = Math.sqrt(C * C + k * k);
    if (A < 1) return;
    const O = m / A, B = C * O, I = k * O;
    Ht.set(b, { force3D: !0 }), _.to(
      b,
      {
        x: B,
        y: I,
        scale: t.peripheralScale,
        opacity: 0,
        duration: t.phase1Duration,
        ease: t.phase1Ease,
        force3D: !0,
        overwrite: "auto"
      },
      0
    );
  }), a && _.to(
    a,
    {
      opacity: 1,
      duration: t.overlayDuration
    },
    t.overlayAt
  ), u.length && _.to(
    u,
    {
      opacity: 1,
      y: 0,
      stagger: t.charsStagger,
      duration: t.charsDuration,
      ease: t.charsEase
    },
    t.charsAt
  ), _;
}
function yf(s, t, i) {
  const { pinEl: e, grid: r } = t, { reduceMotion: n } = i, o = r.querySelectorAll(":scope > [data-gcp-item]");
  if (!o.length)
    return console.warn("[gallery-center-push] Mode flip : aucune [data-gcp-item] dans la grille"), null;
  const a = r.querySelector(":scope > [data-gcp-overlay]"), u = {
    start: Tr(s, "gcpFlipScrollStart", al.start),
    end: Tr(s, "gcpFlipScrollEnd", al.end)
  }, l = s.getAttribute("data-gcp-flip-parallax") === "true", c = me(
    s,
    "gcpFlipParallaxTravel",
    cf
  );
  return uf({
    gridEl: r,
    pinEl: e,
    items: o,
    caption: a,
    scroll: u,
    switchClass: "gcp--switch",
    getScaleTarget: (p) => p.querySelector(".gcp-item-inner") ?? p.querySelector("img"),
    getParallaxImg: (p) => p.querySelector(".gcp-item-inner img") ?? p.querySelector("img"),
    parallax: l,
    parallaxTravel: c,
    parallaxStrengthKey: "gcpFlipParallaxStrength",
    reduceMotion: n
  });
}
function vf(s) {
  s._galleryCenterPushCleanup && s._galleryCenterPushCleanup();
  const t = s.querySelector("[data-gcp-section]"), i = s.querySelector("[data-gcp-pin]"), e = s.querySelector("[data-gcp-grid]"), r = s.getAttribute("data-gcp-flip") === "true", n = s.querySelector("[data-gcp-item][data-gcp-center]"), o = s.querySelector("[data-gcp-overlay]"), a = s.querySelector("[data-gcp-split]"), u = s.querySelector("[data-gcp-split-desc]");
  if (!t || !i || !e) {
    console.warn("[gallery-center-push] Éléments requis manquants (section, pin, grid)");
    return;
  }
  if (!r && !n) {
    console.warn("[gallery-center-push] Sans data-gcp-flip, [data-gcp-center] est requis sur une tuile");
    return;
  }
  const l = n ? [...e.querySelectorAll("[data-gcp-item]")].filter(
    (P) => !P.hasAttribute("data-gcp-center")
  ) : [];
  let c = [], p = [];
  r || (a && (c = [...ll(a)]), u && (p = [...ll(u)]));
  const h = [...c, ...p];
  h.length && Ht.set(h, { opacity: 0, y: 20 });
  const f = {
    scrub: hf(s),
    start: Tr(s, "gcpStart", Vt.start),
    end: Tr(s, "gcpEnd", Vt.end),
    scaleBuffer: me(s, "gcpScaleBuffer", Vt.scaleBuffer),
    pushMobilePortrait: me(s, "gcpPushMobilePortrait", Vt.pushMobilePortrait),
    pushMobileLandscape: me(s, "gcpPushMobileLandscape", Vt.pushMobileLandscape),
    pushDesktop: me(s, "gcpPushDesktop", Vt.pushDesktop),
    mobileBreakpoint: me(s, "gcpMobileBreakpoint", Vt.mobileBreakpoint),
    phase1Duration: me(s, "gcpPhase1Duration", Vt.phase1Duration),
    overlayAt: me(s, "gcpOverlayAt", Vt.overlayAt),
    overlayDuration: me(s, "gcpOverlayDuration", Vt.overlayDuration),
    charsAt: me(s, "gcpCharsAt", Vt.charsAt),
    charsDuration: me(s, "gcpCharsDuration", Vt.charsDuration),
    charsStagger: me(s, "gcpCharsStagger", Vt.charsStagger),
    peripheralScale: me(s, "gcpPeripheralScale", Vt.peripheralScale),
    phase1Ease: Tr(s, "gcpPhase1Ease", Vt.phase1Ease),
    charsEase: Tr(s, "gcpCharsEase", Vt.charsEase)
  }, _ = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let d = null, g = null, m = null, x = null, w = !1;
  const v = () => {
    d == null || d.revert(), d = null;
    const P = s.querySelector("[data-gcp-grid]");
    P && ul(P);
  }, b = async () => {
    if (v(), w = !1, _) {
      o && Ht.set(o, { opacity: 1 }), h.length && Ht.set(h, { opacity: 1, y: 0 }), Ht.set(e, { scale: 1, clearProps: "transformOrigin" }), ul(e), e.querySelectorAll("[data-gcp-item]").forEach((P) => {
        Ht.set(P, { borderRadius: 0, clearProps: "transform" });
      });
      return;
    }
    await ff(e), !w && requestAnimationFrame(() => {
      w || (d = Ht.context(() => {
        r ? yf(s, { pinEl: i, grid: e }, { reduceMotion: _ }) : mf(
          { section: t, pinEl: i, grid: e, centerItem: n, otherItems: l, overlay: o, splitChars: h },
          f
        );
      }, s), G.refresh());
    });
  }, E = () => {
    w = !0, window.removeEventListener("resize", S), v(), m && (Ht.ticker.remove(m), m = null), g == null || g.destroy(), g = null, df(s), s._galleryCenterPushCleanup = null, G.refresh();
  };
  function S() {
    clearTimeout(x), x = setTimeout(() => {
      s._galleryCenterPushCleanup && b();
    }, 120);
  }
  return s._galleryCenterPushCleanup = E, s.dataset.gcpLenis === "true" && (g = new Vh({ lerp: 0.1, smoothWheel: !0 }), g.on("scroll", () => G.update()), m = (P) => g.raf(P * 1e3), Ht.ticker.add(m), Ht.ticker.lagSmoothing(0)), b(), window.addEventListener("resize", S), E;
}
if (typeof window < "u") {
  const s = () => {
    document.querySelectorAll('[data-component="gallery-center-push"]').forEach((t) => vf(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
export {
  vf as initGalleryCenterPush
};

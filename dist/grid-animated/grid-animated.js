var kl = Object.defineProperty;
var Ol = (s, t, r) => t in s ? kl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[t] = r;
var R = (s, t, r) => Ol(s, typeof t != "symbol" ? t + "" : t, r);
function nr(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Qo(s, t) {
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
var ke = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, vi = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Fs, Ft, lt, Re = 1e8, it = 1 / Re, ps = Math.PI * 2, Cl = ps / 4, El = 0, Jo = Math.sqrt, Pl = Math.cos, Ml = Math.sin, At = function(t) {
  return typeof t == "string";
}, gt = function(t) {
  return typeof t == "function";
}, ur = function(t) {
  return typeof t == "number";
}, Bs = function(t) {
  return typeof t > "u";
}, Qe = function(t) {
  return typeof t == "object";
}, le = function(t) {
  return t !== !1;
}, Ys = function() {
  return typeof window < "u";
}, dn = function(t) {
  return gt(t) || At(t);
}, ta = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, $t = Array.isArray, Dl = /random\([^)]+\)/g, Rl = /,\s*/g, fo = /(?:-?\.?\d|\.)+/gi, ea = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ui = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Kn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ra = /[+-]=-?[.\d]+/, Al = /[^,'"\[\]\s]+/gi, Ll = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, qe, _s, Ws, Oe = {}, zn = {}, ia, na = function(t) {
  return (zn = yi(t, Oe)) && he;
}, Xs = function(t, r) {
  return console.warn("Invalid property", t, "set to", r, "Missing plugin? gsap.registerPlugin()");
}, Ji = function(t, r) {
  return !r && console.warn(t);
}, sa = function(t, r) {
  return t && (Oe[t] = r) && zn && (zn[t] = r) || Oe;
}, tn = function() {
  return 0;
}, zl = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, On = {
  suppressEvents: !0,
  kill: !1
}, Il = {
  suppressEvents: !0
}, Hs = {}, Sr = [], gs = {}, oa, ve = {}, Qn = {}, ho = 30, Cn = [], Vs = "", Us = function(t) {
  var r = t[0], e, i;
  if (Qe(r) || gt(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
    for (i = Cn.length; i-- && !Cn[i].targetTest(r); )
      ;
    e = Cn[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Ma(t[i], e))) || t.splice(i, 1);
  return t;
}, Vr = function(t) {
  return t._gsap || Us(Ae(t))[0]._gsap;
}, aa = function(t, r, e) {
  return (e = t[r]) && gt(e) ? t[r]() : Bs(e) && t.getAttribute && t.getAttribute(r) || e;
}, ue = function(t, r) {
  return (t = t.split(",")).forEach(r) || t;
}, wt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ct = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, hi = function(t, r) {
  var e = r.charAt(0), i = parseFloat(r.substr(2));
  return t = parseFloat(t), e === "+" ? t + i : e === "-" ? t - i : e === "*" ? t * i : t / i;
}, Nl = function(t, r) {
  for (var e = r.length, i = 0; t.indexOf(r[i]) < 0 && ++i < e; )
    ;
  return i < e;
}, In = function() {
  var t = Sr.length, r = Sr.slice(0), e, i;
  for (gs = {}, Sr.length = 0, e = 0; e < t; e++)
    i = r[e], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, qs = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, la = function(t, r, e, i) {
  Sr.length && !Ft && In(), t.render(r, e, !!(Ft && r < 0 && qs(t))), Sr.length && !Ft && In();
}, ua = function(t) {
  var r = parseFloat(t);
  return (r || r === 0) && (t + "").match(Al).length < 2 ? r : At(t) ? t.trim() : t;
}, ca = function(t) {
  return t;
}, Ce = function(t, r) {
  for (var e in r)
    e in t || (t[e] = r[e]);
  return t;
}, Fl = function(t) {
  return function(r, e) {
    for (var i in e)
      i in r || i === "duration" && t || i === "ease" || (r[i] = e[i]);
  };
}, yi = function(t, r) {
  for (var e in r)
    t[e] = r[e];
  return t;
}, po = function s(t, r) {
  for (var e in r)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = Qe(r[e]) ? s(t[e] || (t[e] = {}), r[e]) : r[e]);
  return t;
}, Nn = function(t, r) {
  var e = {}, i;
  for (i in t)
    i in r || (e[i] = t[i]);
  return e;
}, Yi = function(t) {
  var r = t.parent || ft, e = t.keyframes ? Fl($t(t.keyframes)) : Ce;
  if (le(t.inherit))
    for (; r; )
      e(t, r.vars.defaults), r = r.parent || r._dp;
  return t;
}, Bl = function(t, r) {
  for (var e = t.length, i = e === r.length; i && e-- && t[e] === r[e]; )
    ;
  return e < 0;
}, fa = function(t, r, e, i, n) {
  var o = t[i], a;
  if (n)
    for (a = r[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (r._next = o._next, o._next = r) : (r._next = t[e], t[e] = r), r._next ? r._next._prev = r : t[i] = r, r._prev = o, r.parent = r._dp = t, r;
}, qn = function(t, r, e, i) {
  e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
  var n = r._prev, o = r._next;
  n ? n._next = o : t[e] === r && (t[e] = o), o ? o._prev = n : t[i] === r && (t[i] = n), r._next = r._prev = r.parent = null;
}, Cr = function(t, r) {
  t.parent && (!r || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Ur = function(t, r) {
  if (t && (!r || r._end > t._dur || r._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, Yl = function(t) {
  for (var r = t.parent; r && r.parent; )
    r._dirty = 1, r.totalDuration(), r = r.parent;
  return t;
}, ms = function(t, r, e, i) {
  return t._startAt && (Ft ? t._startAt.revert(On) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(r, !0, i));
}, Wl = function s(t) {
  return !t || t._ts && s(t.parent);
}, _o = function(t) {
  return t._repeat ? wi(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, wi = function(t, r) {
  var e = Math.floor(t = ct(t / r));
  return t && e === t ? e - 1 : e;
}, Fn = function(t, r) {
  return (t - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
}, Gn = function(t) {
  return t._end = ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || it) || 0));
}, $n = function(t, r) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = ct(e._time - (t._ts > 0 ? r / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)), Gn(t), e._dirty || Ur(e, t)), t;
}, ha = function(t, r) {
  var e;
  if ((r._time || !r._dur && r._initted || r._start < t._time && (r._dur || !r.add)) && (e = Fn(t.rawTime(), r), (!r._dur || un(0, r.totalDuration(), e) - r._tTime > it) && r.render(e, !0)), Ur(t, r)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -it;
  }
}, $e = function(t, r, e, i) {
  return r.parent && Cr(r), r._start = ct((ur(e) ? e : e || t !== ft ? Pe(t, e, r) : t._time) + r._delay), r._end = ct(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), fa(t, r, "_first", "_last", t._sort ? "_start" : 0), vs(r) || (t._recent = r), i || ha(t, r), t._ts < 0 && $n(t, t._tTime), t;
}, da = function(t, r) {
  return (Oe.ScrollTrigger || Xs("scrollTrigger", r)) && Oe.ScrollTrigger.create(r, t);
}, pa = function(t, r, e, i, n) {
  if ($s(t, r, n), !t._initted)
    return 1;
  if (!e && t._pt && !Ft && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && oa !== xe.frame)
    return Sr.push(t), t._lazy = [n, i], 1;
}, Xl = function s(t) {
  var r = t.parent;
  return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || s(r));
}, vs = function(t) {
  var r = t.data;
  return r === "isFromStart" || r === "isStart";
}, Hl = function(t, r, e, i) {
  var n = t.ratio, o = r < 0 || !r && (!t._start && Xl(t) && !(!t._initted && vs(t)) || (t._ts < 0 || t._dp._ts < 0) && !vs(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, p;
  if (a && t._repeat && (l = un(0, t._tDur, r), c = wi(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== wi(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Ft || i || t._zTime === it || !r && t._zTime) {
    if (!t._initted && pa(t, r, i, e, l))
      return;
    for (p = t._zTime, t._zTime = r || (e ? it : 0), e || (e = r && !p), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    r < 0 && ms(t, r, e, !0), t._onUpdate && !e && be(t, "onUpdate"), l && t._repeat && !e && t.parent && be(t, "onRepeat"), (r >= t._tDur || r < 0) && t.ratio === o && (o && Cr(t, 1), !e && !Ft && (be(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = r);
}, Vl = function(t, r, e) {
  var i;
  if (e > r)
    for (i = t._first; i && i._start <= e; ) {
      if (i.data === "isPause" && i._start > r)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= e; ) {
      if (i.data === "isPause" && i._start < r)
        return i;
      i = i._prev;
    }
}, xi = function(t, r, e, i) {
  var n = t._repeat, o = ct(r) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ct(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i && $n(t, t._tTime = t._tDur * a), t.parent && Gn(t), e || Ur(t.parent, t), t;
}, go = function(t) {
  return t instanceof ne ? Ur(t) : xi(t, t._dur);
}, Ul = {
  _start: 0,
  endTime: tn,
  totalDuration: tn
}, Pe = function s(t, r, e) {
  var i = t.labels, n = t._recent || Ul, o = t.duration() >= Re ? n.endTime(!1) : t._dur, a, l, u;
  return At(r) && (isNaN(r) || r in i) ? (l = r.charAt(0), u = r.substr(-1) === "%", a = r.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (r = r.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (r in i || (i[r] = o), i[r]) : (l = parseFloat(r.charAt(a - 1) + r.substr(a + 1)), u && e && (l = l / 100 * ($t(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, r.substr(0, a - 1), e) + l : o + l)) : r == null ? o : +r;
}, Wi = function(t, r, e) {
  var i = ur(r[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = r[n], a, l;
  if (i && (o.duration = r[1]), o.parent = e, t) {
    for (a = o, l = e; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = le(l.vars.inherit) && l.parent;
    o.immediateRender = le(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = r[n - 1];
  }
  return new kt(r[0], o, r[n + 1]);
}, Dr = function(t, r) {
  return t || t === 0 ? r(t) : r;
}, un = function(t, r, e) {
  return e < t ? t : e > r ? r : e;
}, qt = function(t, r) {
  return !At(t) || !(r = Ll.exec(t)) ? "" : r[1];
}, ql = function(t, r, e) {
  return Dr(e, function(i) {
    return un(t, r, i);
  });
}, ys = [].slice, _a = function(t, r) {
  return t && Qe(t) && "length" in t && (!r && !t.length || t.length - 1 in t && Qe(t[0])) && !t.nodeType && t !== qe;
}, Gl = function(t, r, e) {
  return e === void 0 && (e = []), t.forEach(function(i) {
    var n;
    return At(i) && !r || _a(i, 1) ? (n = e).push.apply(n, Ae(i)) : e.push(i);
  }) || e;
}, Ae = function(t, r, e) {
  return lt && !r && lt.selector ? lt.selector(t) : At(t) && !e && (_s || !Ti()) ? ys.call((r || Ws).querySelectorAll(t), 0) : $t(t) ? Gl(t, e) : _a(t) ? ys.call(t, 0) : t ? [t] : [];
}, ws = function(t) {
  return t = Ae(t)[0] || Ji("Invalid scope") || {}, function(r) {
    var e = t.current || t.nativeElement || t;
    return Ae(r, e.querySelectorAll ? e : e === t ? Ji("Invalid scope") || Ws.createElement("div") : t);
  };
}, ga = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ma = function(t) {
  if (gt(t))
    return t;
  var r = Qe(t) ? t : {
    each: t
  }, e = qr(r.ease), i = r.from || 0, n = parseFloat(r.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = r.axis, c = i, p = i;
  return At(i) ? c = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (c = i[0], p = i[1]), function(h, f, _) {
    var d = (_ || r).length, g = o[d], v, T, S, y, b, O, w, E, k;
    if (!g) {
      if (k = r.grid === "auto" ? 0 : (r.grid || [1, Re])[1], !k) {
        for (w = -Re; w < (w = _[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (g = o[d] = [], v = l ? Math.min(k, d) * c - 0.5 : i % k, T = k === Re ? 0 : l ? d * p / k - 0.5 : i / k | 0, w = 0, E = Re, O = 0; O < d; O++)
        S = O % k - v, y = T - (O / k | 0), g[O] = b = u ? Math.abs(u === "y" ? y : S) : Jo(S * S + y * y), b > w && (w = b), b < E && (E = b);
      i === "random" && ga(g), g.max = w - E, g.min = E, g.v = d = (parseFloat(r.amount) || parseFloat(r.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (i === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = qt(r.amount || r.each) || 0, e = e && d < 0 ? Ca(e) : e;
    }
    return d = (g[h] - g.min) / g.max || 0, ct(g.b + (e ? e(d) : d) * g.v) + g.u;
  };
}, xs = function(t) {
  var r = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var i = ct(Math.round(parseFloat(e) / t) * t * r);
    return (i - i % 1) / r + (ur(e) ? 0 : qt(e));
  };
}, va = function(t, r) {
  var e = $t(t), i, n;
  return !e && Qe(t) && (i = e = t.radius || Re, t.values ? (t = Ae(t.values), (n = !ur(t[0])) && (i *= i)) : t = xs(t.increment)), Dr(r, e ? gt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = Re, c = 0, p = t.length, h, f; p--; )
      n ? (h = t[p].x - a, f = t[p].y - l, h = h * h + f * f) : h = Math.abs(t[p] - a), h < u && (u = h, c = p);
    return c = !i || u <= i ? t[c] : o, n || c === o || ur(o) ? c : c + qt(o);
  } : xs(t));
}, ya = function(t, r, e, i) {
  return Dr($t(t) ? !r : e === !0 ? !!(e = 0) : !i, function() {
    return $t(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (r - t + e * 0.99)) / e) * e * i) / i;
  });
}, $l = function() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return function(i) {
    return r.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, Zl = function(t, r) {
  return function(e) {
    return t(parseFloat(e)) + (r || qt(e));
  };
}, jl = function(t, r, e) {
  return xa(t, r, 0, 1, e);
}, wa = function(t, r, e) {
  return Dr(e, function(i) {
    return t[~~r(i)];
  });
}, Kl = function s(t, r, e) {
  var i = r - t;
  return $t(t) ? wa(t, s(0, t.length), r) : Dr(e, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, Ql = function s(t, r, e) {
  var i = r - t, n = i * 2;
  return $t(t) ? wa(t, s(0, t.length - 1), r) : Dr(e, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o);
  });
}, en = function(t) {
  return t.replace(Dl, function(r) {
    var e = r.indexOf("[") + 1, i = r.substring(e || 7, e ? r.indexOf("]") : r.length - 1).split(Rl);
    return ya(e ? i : +i[0], e ? 0 : +i[1], +i[2] || 1e-5);
  });
}, xa = function(t, r, e, i, n) {
  var o = r - t, a = i - e;
  return Dr(n, function(l) {
    return e + ((l - t) / o * a || 0);
  });
}, Jl = function s(t, r, e, i) {
  var n = isNaN(t + r) ? 0 : function(f) {
    return (1 - f) * t + f * r;
  };
  if (!n) {
    var o = At(t), a = {}, l, u, c, p, h;
    if (e === !0 && (i = 1) && (e = null), o)
      t = {
        p: t
      }, r = {
        p: r
      };
    else if ($t(t) && !$t(r)) {
      for (c = [], p = t.length, h = p - 2, u = 1; u < p; u++)
        c.push(s(t[u - 1], t[u]));
      p--, n = function(_) {
        _ *= p;
        var d = Math.min(h, ~~_);
        return c[d](_ - d);
      }, e = r;
    } else i || (t = yi($t(t) ? [] : {}, t));
    if (!c) {
      for (l in r)
        Gs.call(a, t, l, "get", r[l]);
      n = function(_) {
        return Ks(_, a) || (o ? t.p : t);
      };
    }
  }
  return Dr(e, n);
}, mo = function(t, r, e) {
  var i = t.labels, n = Re, o, a, l;
  for (o in i)
    a = i[o] - r, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, be = function(t, r, e) {
  var i = t.vars, n = i[r], o = lt, a = t._ctx, l, u, c;
  if (n)
    return l = i[r + "Params"], u = i.callbackScope || t, e && Sr.length && In(), a && (lt = a), c = l ? n.apply(u, l) : n.call(u), lt = o, c;
}, Ai = function(t) {
  return Cr(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ft), t.progress() < 1 && be(t, "onInterrupt"), t;
}, ci, Ta = [], ba = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ys() || t.headless) {
      var r = t.name, e = gt(t), i = r && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: tn,
        render: Ks,
        add: Gs,
        kill: _u,
        modifier: pu,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: js,
        aliases: {},
        register: 0
      };
      if (Ti(), t !== i) {
        if (ve[r])
          return;
        Ce(i, Ce(Nn(t, n), o)), yi(i.prototype, yi(n, Nn(t, o))), ve[i.prop = r] = i, t.targetTest && (Cn.push(i), Hs[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
      }
      sa(r, i), t.register && t.register(he, i, ce);
    } else
      Ta.push(t);
}, rt = 255, Li = {
  aqua: [0, rt, rt],
  lime: [0, rt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, rt],
  navy: [0, 0, 128],
  white: [rt, rt, rt],
  olive: [128, 128, 0],
  yellow: [rt, rt, 0],
  orange: [rt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [rt, 0, 0],
  pink: [rt, 192, 203],
  cyan: [0, rt, rt],
  transparent: [rt, rt, rt, 0]
}, Jn = function(t, r, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? r + (e - r) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? r + (e - r) * (2 / 3 - t) * 6 : r) * rt + 0.5 | 0;
}, Sa = function(t, r, e) {
  var i = t ? ur(t) ? [t >> 16, t >> 8 & rt, t & rt] : 0 : Li.black, n, o, a, l, u, c, p, h, f, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Li[t])
      i = Li[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & rt, i & rt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & rt, t & rt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(fo), !r)
        l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Jn(l + 1 / 3, n, o), i[1] = Jn(l, n, o), i[2] = Jn(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return i = t.match(ea), e && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(fo) || Li.transparent;
    i = i.map(Number);
  }
  return r && !_ && (n = i[0] / rt, o = i[1] / rt, a = i[2] / rt, p = Math.max(n, o, a), h = Math.min(n, o, a), c = (p + h) / 2, p === h ? l = u = 0 : (f = p - h, u = c > 0.5 ? f / (2 - p - h) : f / (p + h), l = p === n ? (o - a) / f + (o < a ? 6 : 0) : p === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), e && i.length < 4 && (i[3] = 1), i;
}, ka = function(t) {
  var r = [], e = [], i = -1;
  return t.split(kr).forEach(function(n) {
    var o = n.match(ui) || [];
    r.push.apply(r, o), e.push(i += o.length + 1);
  }), r.c = e, r;
}, vo = function(t, r, e) {
  var i = "", n = (t + i).match(kr), o = r ? "hsla(" : "rgba(", a = 0, l, u, c, p;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Sa(h, r, 1)) && o + (r ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), e && (c = ka(t), l = e.c, l.join(i) !== c.c.join(i)))
    for (u = t.replace(kr, "1").split(ui), p = u.length - 1; a < p; a++)
      i += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : e).shift());
  if (!u)
    for (u = t.split(kr), p = u.length - 1; a < p; a++)
      i += u[a] + n[a];
  return i + u[p];
}, kr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Li)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), tu = /hsl[a]?\(/, Oa = function(t) {
  var r = t.join(" "), e;
  if (kr.lastIndex = 0, kr.test(r))
    return e = tu.test(r), t[1] = vo(t[1], e), t[0] = vo(t[0], e, ka(t[1])), !0;
}, rn, xe = function() {
  var s = Date.now, t = 500, r = 33, e = s(), i = e, n = 1e3 / 240, o = n, a = [], l, u, c, p, h, f, _ = function d(g) {
    var v = s() - i, T = g === !0, S, y, b, O;
    if ((v > t || v < 0) && (e += v - r), i += v, b = i - e, S = b - o, (S > 0 || T) && (O = ++p.frame, h = b - p.time * 1e3, p.time = b = b / 1e3, o += S + (S >= n ? 4 : n - S), y = 1), T || (l = u(d)), y)
      for (f = 0; f < a.length; f++)
        a[f](b, h, O, g);
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
      ia && (!_s && Ys() && (qe = _s = window, Ws = qe.document || {}, Oe.gsap = he, (qe.gsapVersions || (qe.gsapVersions = [])).push(he.version), na(zn || qe.GreenSockGlobals || !qe.gsap && qe || {}), Ta.forEach(ba)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && p.sleep(), u = c || function(g) {
        return setTimeout(g, o - p.time * 1e3 + 1 | 0);
      }, rn = 1, _(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), rn = 0, u = tn;
    },
    lagSmoothing: function(g, v) {
      t = g || 1 / 0, r = Math.min(v || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), o = p.time * 1e3 + n;
    },
    add: function(g, v, T) {
      var S = v ? function(y, b, O, w) {
        g(y, b, O, w), p.remove(S);
      } : g;
      return p.remove(g), a[T ? "unshift" : "push"](S), Ti(), S;
    },
    remove: function(g, v) {
      ~(v = a.indexOf(g)) && a.splice(v, 1) && f >= v && f--;
    },
    _listeners: a
  }, p;
}(), Ti = function() {
  return !rn && xe.wake();
}, j = {}, eu = /^[\d.\-M][\d.\-,\s]/, ru = /["']/g, iu = function(t) {
  for (var r = {}, e = t.substr(1, t.length - 3).split(":"), i = e[0], n = 1, o = e.length, a, l, u; n < o; n++)
    l = e[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), r[i] = isNaN(u) ? u.replace(ru, "").trim() : +u, i = l.substr(a + 1).trim();
  return r;
}, nu = function(t) {
  var r = t.indexOf("(") + 1, e = t.indexOf(")"), i = t.indexOf("(", r);
  return t.substring(r, ~i && i < e ? t.indexOf(")", e + 1) : e);
}, su = function(t) {
  var r = (t + "").split("("), e = j[r[0]];
  return e && r.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [iu(r[1])] : nu(t).split(",").map(ua)) : j._CE && eu.test(t) ? j._CE("", t) : e;
}, Ca = function(t) {
  return function(r) {
    return 1 - t(1 - r);
  };
}, Ea = function s(t, r) {
  for (var e = t._first, i; e; )
    e instanceof ne ? s(e, r) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== r && (e.timeline ? s(e.timeline, r) : (i = e._ease, e._ease = e._yEase, e._yEase = i, e._yoyo = r)), e = e._next;
}, qr = function(t, r) {
  return t && (gt(t) ? t : j[t] || su(t)) || r;
}, ti = function(t, r, e, i) {
  e === void 0 && (e = function(l) {
    return 1 - r(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: r,
    easeOut: e,
    easeInOut: i
  }, o;
  return ue(t, function(a) {
    j[a] = Oe[a] = n, j[o = a.toLowerCase()] = e;
    for (var l in n)
      j[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = j[a + "." + l] = n[l];
  }), n;
}, Pa = function(t) {
  return function(r) {
    return r < 0.5 ? (1 - t(1 - r * 2)) / 2 : 0.5 + t((r - 0.5) * 2) / 2;
  };
}, ts = function s(t, r, e) {
  var i = r >= 1 ? r : 1, n = (e || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1), o = n / ps * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Ml((c - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Pa(a);
  return n = ps / n, l.config = function(u, c) {
    return s(t, u, c);
  }, l;
}, es = function s(t, r) {
  r === void 0 && (r = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((r + 1) * o + r) + 1 : 0;
  }, i = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : Pa(e);
  return i.config = function(n) {
    return s(t, n);
  }, i;
};
ue("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var r = t < 5 ? t + 1 : t;
  ti(s + ",Power" + (r - 1), t ? function(e) {
    return Math.pow(e, r);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, r);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2;
  });
});
j.Linear.easeNone = j.none = j.Linear.easeIn;
ti("Elastic", ts("in"), ts("out"), ts());
(function(s, t) {
  var r = 1 / t, e = 2 * r, i = 2.5 * r, n = function(a) {
    return a < r ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ti("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
ti("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ti("Circ", function(s) {
  return -(Jo(1 - s * s) - 1);
});
ti("Sine", function(s) {
  return s === 1 ? 1 : -Pl(s * Cl) + 1;
});
ti("Back", es("in"), es("out"), es());
j.SteppedEase = j.steps = Oe.SteppedEase = {
  config: function(t, r) {
    t === void 0 && (t = 1);
    var e = 1 / t, i = t + (r ? 0 : 1), n = r ? 1 : 0, o = 1 - it;
    return function(a) {
      return ((i * un(0, o, a) | 0) + n) * e;
    };
  }
};
vi.ease = j["quad.out"];
ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Vs += s + "," + s + "Params,";
});
var Ma = function(t, r) {
  this.id = El++, t._gsap = this, this.target = t, this.harness = r, this.get = r ? r.get : aa, this.set = r ? r.getSetter : js;
}, nn = /* @__PURE__ */ function() {
  function s(r) {
    this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, xi(this, +r.duration, 1, 1), this.data = r.data, lt && (this._ctx = lt, lt.data.push(this)), rn || xe.wake();
  }
  var t = s.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, xi(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, i) {
    if (Ti(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for ($n(this, e), !n._dp || n.parent || ha(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && $e(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !i || this._initted && Math.abs(this._zTime) === it || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), la(this, e, i)), this;
  }, t.time = function(e, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + _o(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(e, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + _o(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, i) : this._repeat ? wi(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, i) {
    if (!arguments.length)
      return this._rts === -it ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? Fn(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -it ? 0 : this._rts, this.totalTime(un(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), Gn(this), Yl(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ti(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== it && (this._tTime -= it)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = ct(e);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && $e(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (le(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var i = this.parent || this._dp;
    return i ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fn(i.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Il);
    var i = Ft;
    return Ft = e, qs(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Ft = i, this;
  }, t.globalTime = function(e) {
    for (var i = this, n = arguments.length ? e : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, go(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = e, go(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, i) {
    return this.totalTime(Pe(this, e), le(i));
  }, t.restart = function(e, i) {
    return this.play().totalTime(e ? -this._delay : 0, le(i)), this._dur || (this._zTime = -it), this;
  }, t.play = function(e, i) {
    return e != null && this.seek(e, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, i) {
    return e != null && this.seek(e || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(e, i) {
    return e != null && this.seek(e, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -it : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -it, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, i = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= i && n < this.endTime(!0) - it);
  }, t.eventCallback = function(e, i, n) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[e] = i, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = i)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var i = this, n = i._prom;
    return new Promise(function(o) {
      var a = gt(e) ? e : ca, l = function() {
        var c = i.then;
        i.then = null, n && n(), gt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), o(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, t.kill = function() {
    Ai(this);
  }, s;
}();
Ce(nn.prototype, {
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
  _zTime: -it,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ne = /* @__PURE__ */ function(s) {
  Qo(t, s);
  function t(e, i) {
    var n;
    return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = le(e.sortChildren), ft && $e(e.parent || ft, nr(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && da(nr(n), e.scrollTrigger), n;
  }
  var r = t.prototype;
  return r.to = function(i, n, o) {
    return Wi(0, arguments, this), this;
  }, r.from = function(i, n, o) {
    return Wi(1, arguments, this), this;
  }, r.fromTo = function(i, n, o, a) {
    return Wi(2, arguments, this), this;
  }, r.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Yi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new kt(i, n, Pe(this, o), 1), this;
  }, r.call = function(i, n, o) {
    return $e(this, kt.delayedCall(0, i, n), o);
  }, r.staggerTo = function(i, n, o, a, l, u, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new kt(i, o, Pe(this, l)), this;
  }, r.staggerFrom = function(i, n, o, a, l, u, c) {
    return o.runBackwards = 1, Yi(o).immediateRender = le(o.immediateRender), this.staggerTo(i, n, o, a, l, u, c);
  }, r.staggerFromTo = function(i, n, o, a, l, u, c, p) {
    return a.startAt = o, Yi(a).immediateRender = le(a.immediateRender), this.staggerTo(i, n, a, l, u, c, p);
  }, r.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : ct(i), p = this._zTime < 0 != i < 0 && (this._initted || !u), h, f, _, d, g, v, T, S, y, b, O, w;
    if (this !== ft && c > l && i >= 0 && (c = l), c !== this._tTime || o || p) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), h = c, y = this._start, S = this._ts, v = !S, p && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (O = this._yoyo, g = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, n, o);
        if (h = ct(c % g), c === l ? (d = this._repeat, h = u) : (b = ct(c / g), d = ~~b, d && d === b && (h = u, d--), h > u && (h = u)), b = wi(this._tTime, g), !a && this._tTime && b !== d && this._tTime - b * g - this._dur <= 0 && (b = d), O && d & 1 && (h = u - h, w = 1), d !== b && !this._lock) {
          var E = O && b & 1, k = E === (O && d & 1);
          if (d < b && (E = !E), a = E ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (w ? 0 : ct(d * g)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && be(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1, b = d), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = E ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Ea(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (T = Vl(this, ct(a), ct(h)), T && (c -= h - (h = T._start))), this._tTime = c, this._time = h, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && u && !n && !b && (be(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && i >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && T !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !v) {
              T = 0, _ && (c += this._zTime = -it);
              break;
            }
          }
          f = _;
        }
      else {
        f = this._last;
        for (var C = i < 0 ? i : h; f; ) {
          if (_ = f._prev, (f._act || C <= f._end) && f._ts && T !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (C - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (C - f._start) * f._ts, n, o || Ft && qs(f)), h !== this._time || !this._ts && !v) {
              T = 0, _ && (c += this._zTime = C ? -it : it);
              break;
            }
          }
          f = _;
        }
      }
      if (T && !n && (this.pause(), T.render(h >= a ? 0 : -it)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = y, Gn(this), this.render(i, n, o);
      this._onUpdate && !n && be(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (y === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Cr(this, 1), !n && !(i < 0 && !a) && (c || a || !l) && (be(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, r.add = function(i, n) {
    var o = this;
    if (ur(n) || (n = Pe(this, n, i)), !(i instanceof nn)) {
      if ($t(i))
        return i.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (At(i))
        return this.addLabel(i, n);
      if (gt(i))
        i = kt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? $e(this, i, n) : this;
  }, r.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Re);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof kt ? n && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, r.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, r.remove = function(i) {
    return At(i) ? this.removeLabel(i) : gt(i) ? this.killTweensOf(i) : (i.parent === this && qn(this, i), i === this._recent && (this._recent = this._last), Ur(this));
  }, r.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ct(xe.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, r.addLabel = function(i, n) {
    return this.labels[i] = Pe(this, n), this;
  }, r.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, r.addPause = function(i, n, o) {
    var a = kt.delayedCall(0, n || tn, o);
    return a.data = "isPause", this._hasPause = 1, $e(this, a, Pe(this, i));
  }, r.removePause = function(i) {
    var n = this._first;
    for (i = Pe(this, i); n; )
      n._start === i && n.data === "isPause" && Cr(n), n = n._next;
  }, r.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      yr !== a[l] && a[l].kill(i, n);
    return this;
  }, r.getTweensOf = function(i, n) {
    for (var o = [], a = Ae(i), l = this._first, u = ur(n), c; l; )
      l instanceof kt ? Nl(l._targets, a) && (u ? (!yr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, r.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = Pe(o, i), l = n, u = l.startAt, c = l.onStart, p = l.onStartParams, h = l.immediateRender, f, _ = kt.to(o, Ce({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || it,
      onStart: function() {
        if (o.pause(), !f) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          _._dur !== g && xi(_, g, 0, 1).render(_._time, !0, !0), f = 1;
        }
        c && c.apply(_, p || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, r.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, Ce({
      startAt: {
        time: Pe(this, i)
      }
    }, o));
  }, r.recent = function() {
    return this._recent;
  }, r.nextLabel = function(i) {
    return i === void 0 && (i = this._time), mo(this, Pe(this, i));
  }, r.previousLabel = function(i) {
    return i === void 0 && (i = this._time), mo(this, Pe(this, i), 1);
  }, r.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + it);
  }, r.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (i = ct(i); a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (u in l)
        l[u] >= o && (l[u] += i);
    return Ur(this);
  }, r.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, r.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ur(this);
  }, r.totalDuration = function(i) {
    var n = 0, o = this, a = o._last, l = Re, u, c, p;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (p = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, $e(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!p && !o._dp || p && p.smoothChildTiming) && (o._start += ct(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      xi(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (ft._ts && (la(ft, Fn(i, ft)), oa = xe.frame), xe.frame >= ho) {
      ho += ke.autoSleep || 120;
      var n = ft._first;
      if ((!n || !n._ts) && ke.autoSleep && xe._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || xe.sleep();
      }
    }
  }, t;
}(nn);
Ce(ne.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var ou = function(t, r, e, i, n, o, a) {
  var l = new ce(this._pt, t, r, 0, 1, Ia, null, n), u = 0, c = 0, p, h, f, _, d, g, v, T;
  for (l.b = e, l.e = i, e += "", i += "", (v = ~i.indexOf("random(")) && (i = en(i)), o && (T = [e, i], o(T, t, r), e = T[0], i = T[1]), h = e.match(Kn) || []; p = Kn.exec(i); )
    _ = p[0], d = i.substring(u, p.index), f ? f = (f + 1) % 5 : d.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (g = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || c === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? hi(g, _) - g : parseFloat(_) - g,
      m: f && f < 4 ? Math.round : 0
    }, u = Kn.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (ra.test(i) || v) && (l.e = 0), this._pt = l, l;
}, Gs = function(t, r, e, i, n, o, a, l, u, c) {
  gt(i) && (i = i(n || 0, t, o));
  var p = t[r], h = e !== "get" ? e : gt(p) ? u ? t[r.indexOf("set") || !gt(t["get" + r.substr(3)]) ? r : "get" + r.substr(3)](u) : t[r]() : p, f = gt(p) ? u ? fu : La : Zs, _;
  if (At(i) && (~i.indexOf("random(") && (i = en(i)), i.charAt(1) === "=" && (_ = hi(h, i) + (qt(h) || 0), (_ || _ === 0) && (i = _))), !c || h !== i || Ts)
    return !isNaN(h * i) && i !== "" ? (_ = new ce(this._pt, t, r, +h || 0, i - (h || 0), typeof p == "boolean" ? du : za, 0, f), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!p && !(r in t) && Xs(r, i), ou.call(this, t, r, h, i, f, l || ke.stringFilter, u));
}, au = function(t, r, e, i, n) {
  if (gt(t) && (t = Xi(t, n, r, e, i)), !Qe(t) || t.style && t.nodeType || $t(t) || ta(t))
    return At(t) ? Xi(t, n, r, e, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Xi(t[a], n, r, e, i);
  return o;
}, Da = function(t, r, e, i, n, o) {
  var a, l, u, c;
  if (ve[t] && (a = new ve[t]()).init(n, a.rawVars ? r[t] : au(r[t], i, n, o, e), e, i, o) !== !1 && (e._pt = l = new ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== ci))
    for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, yr, Ts, $s = function s(t, r, e) {
  var i = t.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, p = i.yoyoEase, h = i.keyframes, f = i.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : g, S = t._overwrite === "auto" && !Fs, y = t.timeline, b, O, w, E, k, C, I, P, W, H, X, N, A;
  if (y && (!h || !n) && (n = "none"), t._ease = qr(n, vi.ease), t._yEase = p ? Ca(qr(p === !0 ? n : p, vi.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !y && !!i.runBackwards, !y || h && !i.stagger) {
    if (P = g[0] ? Vr(g[0]).harness : 0, N = P && i[P.prop], b = Nn(i, Hs), d && (d._zTime < 0 && d.progress(1), r < 0 && c && a && !f ? d.render(-1, !0) : d.revert(c && _ ? On : zl), d._lazy = 0), o) {
      if (Cr(t._startAt = kt.set(g, Ce({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !d && le(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return be(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (Ft || !a && !f) && t._startAt.revert(On), a && _ && r <= 0 && e <= 0) {
        r && (t._zTime = r);
        return;
      }
    } else if (c && _ && !d) {
      if (r && (a = !1), w = Ce({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && le(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), N && (w[P.prop] = N), Cr(t._startAt = kt.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (Ft ? t._startAt.revert(On) : t._startAt.render(-1, !0)), t._zTime = r, !a)
        s(t._startAt, it, it);
      else if (!r)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && le(l) || l && !_, O = 0; O < g.length; O++) {
      if (k = g[O], I = k._gsap || Us(g)[O]._gsap, t._ptLookup[O] = H = {}, gs[I.id] && Sr.length && In(), X = T === g ? O : T.indexOf(k), P && (W = new P()).init(k, N || b, t, X, T) !== !1 && (t._pt = E = new ce(t._pt, k, W.name, 0, 1, W.render, W, 0, W.priority), W._props.forEach(function(Q) {
        H[Q] = E;
      }), W.priority && (C = 1)), !P || N)
        for (w in b)
          ve[w] && (W = Da(w, b, t, X, k, T)) ? W.priority && (C = 1) : H[w] = E = Gs.call(t, k, w, "get", b[w], X, T, 0, i.stringFilter);
      t._op && t._op[O] && t.kill(k, t._op[O]), S && t._pt && (yr = t, ft.killTweensOf(k, H, t.globalTime(r)), A = !t.parent, yr = 0), t._pt && l && (gs[I.id] = 1);
    }
    C && Na(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !A, h && r <= 0 && y.render(Re, !0, !0);
}, lu = function(t, r, e, i, n, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[r], c, p, h, f;
  if (!u)
    for (u = t._ptCache[r] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (c = h[f][r], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== r && c.fp !== r; )
          c = c._next;
      if (!c)
        return Ts = 1, t.vars[r] = "+=0", $s(t, a), Ts = 0, l ? Ji(r + " not eligible for reset") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    p = u[f], c = p._pt || p, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + o * c.c, c.c = e - c.s, p.e && (p.e = wt(e) + qt(p.e)), p.b && (p.b = c.s + qt(p.b));
}, uu = function(t, r) {
  var e = t[0] ? Vr(t[0]).harness : 0, i = e && e.aliases, n, o, a, l;
  if (!i)
    return r;
  n = yi({}, r);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, cu = function(t, r, e, i) {
  var n = r.ease || i || "power1.inOut", o, a;
  if ($t(r))
    a = e[t] || (e[t] = []), r.forEach(function(l, u) {
      return a.push({
        t: u / (r.length - 1) * 100,
        v: l,
        e: n
      });
    });
  else
    for (o in r)
      a = e[o] || (e[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: r[o],
        e: n
      });
}, Xi = function(t, r, e, i, n) {
  return gt(t) ? t.call(r, e, i, n) : At(t) && ~t.indexOf("random(") ? en(t) : t;
}, Ra = Vs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Aa = {};
ue(Ra + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Aa[s] = 1;
});
var kt = /* @__PURE__ */ function(s) {
  Qo(t, s);
  function t(e, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Yi(i)) || this;
    var l = a.vars, u = l.duration, c = l.delay, p = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, d = l.defaults, g = l.scrollTrigger, v = l.yoyoEase, T = i.parent || ft, S = ($t(e) || ta(e) ? ur(e[0]) : "length" in i) ? [e] : Ae(e), y, b, O, w, E, k, C, I;
    if (a._targets = S.length ? Us(S) : Ji("GSAP target " + e + " not found. https://gsap.com", !ke.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || dn(u) || dn(c)) {
      if (i = a.vars, y = a.timeline = new ne({
        data: "nested",
        defaults: d || {},
        targets: T && T.data === "nested" ? T.vars.targets : S
      }), y.kill(), y.parent = y._dp = nr(a), y._start = 0, h || dn(u) || dn(c)) {
        if (w = S.length, C = h && ma(h), Qe(h))
          for (E in h)
            ~Ra.indexOf(E) && (I || (I = {}), I[E] = h[E]);
        for (b = 0; b < w; b++)
          O = Nn(i, Aa), O.stagger = 0, v && (O.yoyoEase = v), I && yi(O, I), k = S[b], O.duration = +Xi(u, nr(a), b, k, S), O.delay = (+Xi(c, nr(a), b, k, S) || 0) - a._delay, !h && w === 1 && O.delay && (a._delay = c = O.delay, a._start += c, O.delay = 0), y.to(k, O, C ? C(b, k, S) : 0), y._ease = j.none;
        y.duration() ? u = c = 0 : a.timeline = 0;
      } else if (_) {
        Yi(Ce(y.vars.defaults, {
          ease: "none"
        })), y._ease = qr(_.ease || i.ease || "none");
        var P = 0, W, H, X;
        if ($t(_))
          _.forEach(function(N) {
            return y.to(S, N, ">");
          }), y.duration();
        else {
          O = {};
          for (E in _)
            E === "ease" || E === "easeEach" || cu(E, _[E], O, _.easeEach);
          for (E in O)
            for (W = O[E].sort(function(N, A) {
              return N.t - A.t;
            }), P = 0, b = 0; b < W.length; b++)
              H = W[b], X = {
                ease: H.e,
                duration: (H.t - (b ? W[b - 1].t : 0)) / 100 * u
              }, X[E] = H.v, y.to(S, X, P), P += X.duration;
          y.duration() < u && y.to({}, {
            duration: u - y.duration()
          });
        }
      }
      u || a.duration(u = y.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Fs && (yr = nr(a), ft.killTweensOf(S), yr = 0), $e(T, nr(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (p || !u && !_ && a._start === ct(T._time) && le(p) && Wl(nr(a)) && T.data !== "nested") && (a._tTime = -it, a.render(Math.max(0, -c) || 0)), g && da(nr(a), g), a;
  }
  var r = t.prototype;
  return r.render = function(i, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = i < 0, p = i > l - it && !c ? l : i < it ? 0 : i, h, f, _, d, g, v, T, S, y;
    if (!u)
      Hl(this, i, n, o);
    else if (p !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = p, S = this.timeline, this._repeat) {
        if (d = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(d * 100 + i, n, o);
        if (h = ct(p % d), p === l ? (_ = this._repeat, h = u) : (g = ct(p / d), _ = ~~g, _ && _ === g ? (h = u, _--) : h > u && (h = u)), v = this._yoyo && _ & 1, v && (y = this._yEase, h = u - h), g = wi(this._tTime, d), h === a && !o && this._initted && _ === g)
          return this._tTime = p, this;
        _ !== g && (S && this._yEase && Ea(S, v), this.vars.repeatRefresh && !v && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(ct(d * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (pa(this, c ? i : h, o, n, p))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g))
          return this;
        if (u !== this._dur)
          return this.render(i, n, o);
      }
      if (this._tTime = p, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = T = (y || this._ease)(h / u), this._from && (this.ratio = T = 1 - T), !a && p && !n && !g && (be(this, "onStart"), this._tTime !== p))
        return this;
      for (f = this._pt; f; )
        f.r(T, f.d), f = f._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && ms(this, i, n, o), be(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && be(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (c && !this._onUpdate && ms(this, i, !0, !0), (i || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Cr(this, 1), !n && !(c && !a) && (p || a || v) && (be(this, p === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, r.targets = function() {
    return this._targets;
  }, r.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, r.resetTo = function(i, n, o, a, l) {
    rn || xe.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || $s(this, u), c = this._ease(u / this._dur), lu(this, i, n, o, a, c, u, l) ? this.resetTo(i, n, o, a, 1) : ($n(this, 0), this.parent || fa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, r.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ai(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ft), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, yr && yr.vars.overwrite !== !0)._first || Ai(this), this.parent && o !== this.timeline.totalDuration() && xi(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? Ae(i) : a, u = this._ptLookup, c = this._pt, p, h, f, _, d, g, v;
    if ((!n || n === "all") && Bl(a, l))
      return n === "all" && (this._pt = 0), Ai(this);
    for (p = this._op = this._op || [], n !== "all" && (At(n) && (d = {}, ue(n, function(T) {
      return d[T] = 1;
    }), n = d), n = uu(a, n)), v = a.length; v--; )
      if (~l.indexOf(a[v])) {
        h = u[v], n === "all" ? (p[v] = n, _ = h, f = {}) : (f = p[v] = p[v] || {}, _ = n);
        for (d in _)
          g = h && h[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && qn(this, g, "_pt"), delete h[d]), f !== "all" && (f[d] = 1);
      }
    return this._initted && !this._pt && c && Ai(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return Wi(1, arguments);
  }, t.delayedCall = function(i, n, o, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(i, n, o) {
    return Wi(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, o) {
    return ft.killTweensOf(i, n, o);
  }, t;
}(nn);
Ce(kt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ue("staggerTo,staggerFrom,staggerFromTo", function(s) {
  kt[s] = function() {
    var t = new ne(), r = ys.call(arguments, 0);
    return r.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, r);
  };
});
var Zs = function(t, r, e) {
  return t[r] = e;
}, La = function(t, r, e) {
  return t[r](e);
}, fu = function(t, r, e, i) {
  return t[r](i.fp, e);
}, hu = function(t, r, e) {
  return t.setAttribute(r, e);
}, js = function(t, r) {
  return gt(t[r]) ? La : Bs(t[r]) && t.setAttribute ? hu : Zs;
}, za = function(t, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e6) / 1e6, r);
}, du = function(t, r) {
  return r.set(r.t, r.p, !!(r.s + r.c * t), r);
}, Ia = function(t, r) {
  var e = r._pt, i = "";
  if (!t && r.b)
    i = r.b;
  else if (t === 1 && r.e)
    i = r.e;
  else {
    for (; e; )
      i = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + i, e = e._next;
    i += r.c;
  }
  r.set(r.t, r.p, i, r);
}, Ks = function(t, r) {
  for (var e = r._pt; e; )
    e.r(t, e.d), e = e._next;
}, pu = function(t, r, e, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(t, r, e), n = o;
}, _u = function(t) {
  for (var r = this._pt, e, i; r; )
    i = r._next, r.p === t && !r.op || r.op === t ? qn(this, r, "_pt") : r.dep || (e = 1), r = i;
  return !e;
}, gu = function(t, r, e, i) {
  i.mSet(t, r, i.m.call(i.tween, e, i.mt), i);
}, Na = function(t) {
  for (var r = t._pt, e, i, n, o; r; ) {
    for (e = r._next, i = n; i && i.pr > r.pr; )
      i = i._next;
    (r._prev = i ? i._prev : o) ? r._prev._next = r : n = r, (r._next = i) ? i._prev = r : o = r, r = e;
  }
  t._pt = n;
}, ce = /* @__PURE__ */ function() {
  function s(r, e, i, n, o, a, l, u, c) {
    this.t = e, this.s = n, this.c = o, this.p = i, this.r = a || za, this.d = l || this, this.set = u || Zs, this.pr = c || 0, this._next = r, r && (r._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(e, i, n) {
    this.mSet = this.mSet || this.set, this.set = gu, this.m = e, this.mt = n, this.tween = i;
  }, s;
}();
ue(Vs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Hs[s] = 1;
});
Oe.TweenMax = Oe.TweenLite = kt;
Oe.TimelineLite = Oe.TimelineMax = ne;
ft = new ne({
  sortChildren: !1,
  defaults: vi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ke.stringFilter = Oa;
var Gr = [], En = {}, mu = [], yo = 0, vu = 0, rs = function(t) {
  return (En[t] || mu).map(function(r) {
    return r();
  });
}, bs = function() {
  var t = Date.now(), r = [];
  t - yo > 2 && (rs("matchMediaInit"), Gr.forEach(function(e) {
    var i = e.queries, n = e.conditions, o, a, l, u;
    for (a in i)
      o = qe.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (e.revert(), l && r.push(e));
  }), rs("matchMediaRevert"), r.forEach(function(e) {
    return e.onMatch(e, function(i) {
      return e.add(null, i);
    });
  }), yo = t, rs("matchMedia"));
}, Fa = /* @__PURE__ */ function() {
  function s(r, e) {
    this.selector = e && ws(e), this.data = [], this._r = [], this.isReverted = !1, this.id = vu++, r && this.add(r);
  }
  var t = s.prototype;
  return t.add = function(e, i, n) {
    gt(e) && (n = i, i = e, e = gt);
    var o = this, a = function() {
      var u = lt, c = o.selector, p;
      return u && u !== o && u.data.push(o), n && (o.selector = ws(n)), lt = o, p = i.apply(o, arguments), gt(p) && o._r.push(p), lt = u, o.selector = c, o.isReverted = !1, p;
    };
    return o.last = a, e === gt ? a(o, function(l) {
      return o.add(null, l);
    }) : e ? o[e] = a : a;
  }, t.ignore = function(e) {
    var i = lt;
    lt = null, e(this), lt = i;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? e.push.apply(e, i.getTweens()) : i instanceof kt && !(i.parent && i.parent.data === "nested") && e.push(i);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, i) {
    var n = this;
    if (e ? function() {
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
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
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof ne ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof kt) && u.revert && u.revert(e);
      n._r.forEach(function(c) {
        return c(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Gr.length; o--; )
        Gr[o].id === this.id && Gr.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, s;
}(), yu = /* @__PURE__ */ function() {
  function s(r) {
    this.contexts = [], this.scope = r, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(e, i, n) {
    Qe(e) || (e = {
      matches: e
    });
    var o = new Fa(0, n || this.scope), a = o.conditions = {}, l, u, c;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = e;
    for (u in e)
      u === "all" ? c = 1 : (l = qe.matchMedia(e[u]), l && (Gr.indexOf(o) < 0 && Gr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(bs) : l.addEventListener("change", bs)));
    return c && i(o, function(p) {
      return o.add(null, p);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(i) {
      return i.kill(e, !0);
    });
  }, s;
}(), Bn = {
  registerPlugin: function() {
    for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
      r[e] = arguments[e];
    r.forEach(function(i) {
      return ba(i);
    });
  },
  timeline: function(t) {
    return new ne(t);
  },
  getTweensOf: function(t, r) {
    return ft.getTweensOf(t, r);
  },
  getProperty: function(t, r, e, i) {
    At(t) && (t = Ae(t)[0]);
    var n = Vr(t || {}).get, o = e ? ca : ua;
    return e === "native" && (e = ""), t && (r ? o((ve[r] && ve[r].get || n)(t, r, e, i)) : function(a, l, u) {
      return o((ve[a] && ve[a].get || n)(t, a, l, u));
    });
  },
  quickSetter: function(t, r, e) {
    if (t = Ae(t), t.length > 1) {
      var i = t.map(function(c) {
        return he.quickSetter(c, r, e);
      }), n = i.length;
      return function(c) {
        for (var p = n; p--; )
          i[p](c);
      };
    }
    t = t[0] || {};
    var o = ve[r], a = Vr(t), l = a.harness && (a.harness.aliases || {})[r] || r, u = o ? function(c) {
      var p = new o();
      ci._pt = 0, p.init(t, e ? c + e : c, ci, 0, [t]), p.render(1, p), ci._pt && Ks(1, ci);
    } : a.set(t, l);
    return o ? u : function(c) {
      return u(t, l, e ? c + e : c, a, 1);
    };
  },
  quickTo: function(t, r, e) {
    var i, n = he.to(t, Ce((i = {}, i[r] = "+=0.1", i.paused = !0, i.stagger = 0, i), e || {})), o = function(l, u, c) {
      return n.resetTo(r, l, u, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ft.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = qr(t.ease, vi.ease)), po(vi, t || {});
  },
  config: function(t) {
    return po(ke, t || {});
  },
  registerEffect: function(t) {
    var r = t.name, e = t.effect, i = t.plugins, n = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !ve[a] && !Oe[a] && Ji(r + " effect requires " + a + " plugin.");
    }), Qn[r] = function(a, l, u) {
      return e(Ae(a), Ce(l || {}, n), u);
    }, o && (ne.prototype[r] = function(a, l, u) {
      return this.add(Qn[r](a, Qe(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, r) {
    j[t] = qr(r);
  },
  parseEase: function(t, r) {
    return arguments.length ? qr(t, r) : j;
  },
  getById: function(t) {
    return ft.getById(t);
  },
  exportRoot: function(t, r) {
    t === void 0 && (t = {});
    var e = new ne(t), i, n;
    for (e.smoothChildTiming = le(t.smoothChildTiming), ft.remove(e), e._dp = 0, e._time = e._tTime = ft._time, i = ft._first; i; )
      n = i._next, (r || !(!i._dur && i instanceof kt && i.vars.onComplete === i._targets[0])) && $e(e, i, i._start - i._delay), i = n;
    return $e(ft, e, 0), e;
  },
  context: function(t, r) {
    return t ? new Fa(t, r) : lt;
  },
  matchMedia: function(t) {
    return new yu(t);
  },
  matchMediaRefresh: function() {
    return Gr.forEach(function(t) {
      var r = t.conditions, e, i;
      for (i in r)
        r[i] && (r[i] = !1, e = 1);
      e && t.revert();
    }) || bs();
  },
  addEventListener: function(t, r) {
    var e = En[t] || (En[t] = []);
    ~e.indexOf(r) || e.push(r);
  },
  removeEventListener: function(t, r) {
    var e = En[t], i = e && e.indexOf(r);
    i >= 0 && e.splice(i, 1);
  },
  utils: {
    wrap: Kl,
    wrapYoyo: Ql,
    distribute: ma,
    random: ya,
    snap: va,
    normalize: jl,
    getUnit: qt,
    clamp: ql,
    splitColor: Sa,
    toArray: Ae,
    selector: ws,
    mapRange: xa,
    pipe: $l,
    unitize: Zl,
    interpolate: Jl,
    shuffle: ga
  },
  install: na,
  effects: Qn,
  ticker: xe,
  updateRoot: ne.updateRoot,
  plugins: ve,
  globalTimeline: ft,
  core: {
    PropTween: ce,
    globals: sa,
    Tween: kt,
    Timeline: ne,
    Animation: nn,
    getCache: Vr,
    _removeLinkedListItem: qn,
    reverting: function() {
      return Ft;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return Fs = t;
    }
  }
};
ue("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Bn[s] = kt[s];
});
xe.add(ne.updateRoot);
ci = Bn.to({}, {
  duration: 0
});
var wu = function(t, r) {
  for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
    e = e._next;
  return e;
}, xu = function(t, r) {
  var e = t._targets, i, n, o;
  for (i in r)
    for (n = e.length; n--; )
      o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = wu(o, i)), o && o.modifier && o.modifier(r[i], t, e[n], i));
}, is = function(t, r) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (At(n) && (l = {}, ue(n, function(c) {
          return l[c] = 1;
        }), n = l), r) {
          l = {};
          for (u in n)
            l[u] = r(n[u]);
          n = l;
        }
        xu(a, n);
      };
    }
  };
}, he = Bn.registerPlugin({
  name: "attr",
  init: function(t, r, e, i, n) {
    var o, a, l;
    this.tween = e;
    for (o in r)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", r[o], i, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, r) {
    for (var e = r._pt; e; )
      Ft ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, r) {
    for (var e = r.length; e--; )
      this.add(t, e, t[e] || 0, r[e], 0, 0, 0, 0, 0, 1);
  }
}, is("roundProps", xs), is("modifiers"), is("snap", va)) || Bn;
kt.version = ne.version = he.version = "3.14.2";
ia = 1;
Ys() && Ti();
j.Power0;
j.Power1;
j.Power2;
j.Power3;
j.Power4;
j.Linear;
j.Quad;
j.Cubic;
j.Quart;
j.Quint;
j.Strong;
j.Elastic;
j.Back;
j.SteppedEase;
j.Bounce;
j.Sine;
j.Expo;
j.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var wo, wr, di, Qs, Xr, xo, Js, Tu = function() {
  return typeof window < "u";
}, cr = {}, Br = 180 / Math.PI, pi = Math.PI / 180, ni = Math.atan2, To = 1e8, to = /([A-Z])/g, bu = /(left|right|width|margin|padding|x)/i, Su = /[\s,\(]\S/, Ze = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ss = function(t, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
}, ku = function(t, r) {
  return r.set(r.t, r.p, t === 1 ? r.e : Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
}, Ou = function(t, r) {
  return r.set(r.t, r.p, t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b, r);
}, Cu = function(t, r) {
  return r.set(r.t, r.p, t === 1 ? r.e : t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b, r);
}, Eu = function(t, r) {
  var e = r.s + r.c * t;
  r.set(r.t, r.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + r.u, r);
}, Ba = function(t, r) {
  return r.set(r.t, r.p, t ? r.e : r.b, r);
}, Ya = function(t, r) {
  return r.set(r.t, r.p, t !== 1 ? r.b : r.e, r);
}, Pu = function(t, r, e) {
  return t.style[r] = e;
}, Mu = function(t, r, e) {
  return t.style.setProperty(r, e);
}, Du = function(t, r, e) {
  return t._gsap[r] = e;
}, Ru = function(t, r, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Au = function(t, r, e, i, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(n, o);
}, Lu = function(t, r, e, i, n) {
  var o = t._gsap;
  o[r] = e, o.renderTransform(n, o);
}, ht = "transform", fe = ht + "Origin", zu = function s(t, r) {
  var e = this, i = this.target, n = i.style, o = i._gsap;
  if (t in cr && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Ze[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = sr(i, a);
      }) : this.tfm[t] = o.x ? o[t] : sr(i, t), t === fe && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ze.transform.split(",").forEach(function(a) {
        return s.call(e, a, r);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(fe, r, "")), t = ht;
  }
  (n || r) && this.props.push(t, r, n[t]);
}, Wa = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Iu = function() {
  var t = this.props, r = this.target, e = r.style, i = r._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? r[t[n]](t[n + 2]) : r[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(to, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), n = Js(), (!n || !n.isStart) && !e[ht] && (Wa(e), i.zOrigin && e[fe] && (e[fe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Xa = function(t, r) {
  var e = {
    target: t,
    props: [],
    revert: Iu,
    save: zu
  };
  return t._gsap || he.core.getCache(t), r && t.style && t.nodeType && r.split(",").forEach(function(i) {
    return e.save(i);
  }), e;
}, Ha, ks = function(t, r) {
  var e = wr.createElementNS ? wr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wr.createElement(t);
  return e && e.style ? e : wr.createElement(t);
}, Se = function s(t, r, e) {
  var i = getComputedStyle(t);
  return i[r] || i.getPropertyValue(r.replace(to, "-$1").toLowerCase()) || i.getPropertyValue(r) || !e && s(t, bi(r) || r, 1) || "";
}, bo = "O,Moz,ms,Ms,Webkit".split(","), bi = function(t, r, e) {
  var i = r || Xr, n = i.style, o = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(bo[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? bo[o] : "") + t;
}, Os = function() {
  Tu() && window.document && (wo = window, wr = wo.document, di = wr.documentElement, Xr = ks("div") || {
    style: {}
  }, ks("div"), ht = bi(ht), fe = ht + "Origin", Xr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ha = !!bi("perspective"), Js = he.core.reverting, Qs = 1);
}, So = function(t) {
  var r = t.ownerSVGElement, e = ks("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), n;
  i.style.display = "block", e.appendChild(i), di.appendChild(e);
  try {
    n = i.getBBox();
  } catch {
  }
  return e.removeChild(i), di.removeChild(e), n;
}, ko = function(t, r) {
  for (var e = r.length; e--; )
    if (t.hasAttribute(r[e]))
      return t.getAttribute(r[e]);
}, Va = function(t) {
  var r, e;
  try {
    r = t.getBBox();
  } catch {
    r = So(t), e = 1;
  }
  return r && (r.width || r.height) || e || (r = So(t)), r && !r.width && !r.x && !r.y ? {
    x: +ko(t, ["x", "cx", "x1"]) || 0,
    y: +ko(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : r;
}, Ua = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Va(t));
}, Er = function(t, r) {
  if (r) {
    var e = t.style, i;
    r in cr && r !== fe && (r = ht), e.removeProperty ? (i = r.substr(0, 2), (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), e.removeProperty(i === "--" ? r : r.replace(to, "-$1").toLowerCase())) : e.removeAttribute(r);
  }
}, xr = function(t, r, e, i, n, o) {
  var a = new ce(t._pt, r, e, 0, 1, o ? Ya : Ba);
  return t._pt = a, a.b = i, a.e = n, t._props.push(e), a;
}, Oo = {
  deg: 1,
  rad: 1,
  turn: 1
}, Nu = {
  grid: 1,
  flex: 1
}, Pr = function s(t, r, e, i) {
  var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Xr.style, l = bu.test(r), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), p = 100, h = i === "px", f = i === "%", _, d, g, v;
  if (i === o || !n || Oo[i] || Oo[o])
    return n;
  if (o !== "px" && !h && (n = s(t, r, e, "px")), v = t.getCTM && Ua(t), (f || o === "%") && (cr[r] || ~r.indexOf("adius")))
    return _ = v ? t.getBBox()[l ? "width" : "height"] : t[c], wt(f ? n / _ * p : n / 100 * _);
  if (a[l ? "width" : "height"] = p + (h ? o : i), d = i !== "rem" && ~r.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, v && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === wr || !d.appendChild) && (d = wr.body), g = d._gsap, g && f && g.width && l && g.time === xe.time && !g.uncache)
    return wt(n / g.width * p);
  if (f && (r === "height" || r === "width")) {
    var T = t.style[r];
    t.style[r] = p + i, _ = t[c], T ? t.style[r] = T : Er(t, r);
  } else
    (f || o === "%") && !Nu[Se(d, "display")] && (a.position = Se(t, "position")), d === t && (a.position = "static"), d.appendChild(Xr), _ = Xr[c], d.removeChild(Xr), a.position = "absolute";
  return l && f && (g = Vr(d), g.time = xe.time, g.width = d[c]), wt(h ? _ * n / p : _ && n ? p / _ * n : 0);
}, sr = function(t, r, e, i) {
  var n;
  return Qs || Os(), r in Ze && r !== "transform" && (r = Ze[r], ~r.indexOf(",") && (r = r.split(",")[0])), cr[r] && r !== "transform" ? (n = on(t, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Wn(Se(t, fe)) + " " + n.zOrigin + "px") : (n = t.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Yn[r] && Yn[r](t, r, e) || Se(t, r) || aa(t, r) || (r === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Pr(t, r, n, e) + e : n;
}, Fu = function(t, r, e, i) {
  if (!e || e === "none") {
    var n = bi(r, t, 1), o = n && Se(t, n, 1);
    o && o !== e ? (r = n, e = o) : r === "borderColor" && (e = Se(t, "borderTopColor"));
  }
  var a = new ce(this._pt, t.style, r, 0, 1, Ia), l = 0, u = 0, c, p, h, f, _, d, g, v, T, S, y, b;
  if (a.b = e, a.e = i, e += "", i += "", i.substring(0, 6) === "var(--" && (i = Se(t, i.substring(4, i.indexOf(")")))), i === "auto" && (d = t.style[r], t.style[r] = i, i = Se(t, r) || i, d ? t.style[r] = d : Er(t, r)), c = [e, i], Oa(c), e = c[0], i = c[1], h = e.match(ui) || [], b = i.match(ui) || [], b.length) {
    for (; p = ui.exec(i); )
      g = p[0], T = i.substring(l, p.index), _ ? _ = (_ + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (_ = 1), g !== (d = h[u++] || "") && (f = parseFloat(d) || 0, y = d.substr((f + "").length), g.charAt(1) === "=" && (g = hi(f, g) + y), v = parseFloat(g), S = g.substr((v + "").length), l = ui.lastIndex - S.length, S || (S = S || ke.units[r] || y, l === i.length && (i += S, a.e += S)), y !== S && (f = Pr(t, r, d, S) || 0), a._pt = {
        _next: a._pt,
        p: T || u === 1 ? T : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: v - f,
        m: _ && _ < 4 || r === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = r === "display" && i === "none" ? Ya : Ba;
  return ra.test(i) && (a.e = 0), this._pt = a, a;
}, Co = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Bu = function(t) {
  var r = t.split(" "), e = r[0], i = r[1] || "50%";
  return (e === "top" || e === "bottom" || i === "left" || i === "right") && (t = e, e = i, i = t), r[0] = Co[e] || e, r[1] = Co[i] || i, r.join(" ");
}, Yu = function(t, r) {
  if (r.tween && r.tween._time === r.tween._dur) {
    var e = r.t, i = e.style, n = r.u, o = e._gsap, a, l, u;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], cr[a] && (l = 1, a = a === "transformOrigin" ? fe : ht), Er(e, a);
    l && (Er(e, ht), o && (o.svg && e.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", on(e, 1), o.uncache = 1, Wa(i)));
  }
}, Yn = {
  clearProps: function(t, r, e, i, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new ce(t._pt, r, e, 0, 0, Yu);
      return o.u = i, o.pr = -10, o.tween = n, t._props.push(e), 1;
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
}, sn = [1, 0, 0, 1, 0, 0], qa = {}, Ga = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Eo = function(t) {
  var r = Se(t, ht);
  return Ga(r) ? sn : r.substr(7).match(ea).map(wt);
}, eo = function(t, r) {
  var e = t._gsap || Vr(t), i = t.style, n = Eo(t), o, a, l, u;
  return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? sn : n) : (n === sn && !t.offsetParent && t !== di && !e.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, di.appendChild(t)), n = Eo(t), l ? i.display = l : Er(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : di.removeChild(t))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Cs = function(t, r, e, i, n, o) {
  var a = t._gsap, l = n || eo(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, p = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], d = l[2], g = l[3], v = l[4], T = l[5], S = r.split(" "), y = parseFloat(S[0]) || 0, b = parseFloat(S[1]) || 0, O, w, E, k;
  e ? l !== sn && (w = f * g - _ * d) && (E = y * (g / w) + b * (-d / w) + (d * T - g * v) / w, k = y * (-_ / w) + b * (f / w) - (f * T - _ * v) / w, y = E, b = k) : (O = Va(t), y = O.x + (~S[0].indexOf("%") ? y / 100 * O.width : y), b = O.y + (~(S[1] || S[0]).indexOf("%") ? b / 100 * O.height : b)), i || i !== !1 && a.smooth ? (v = y - u, T = b - c, a.xOffset = p + (v * f + T * d) - v, a.yOffset = h + (v * _ + T * g) - T) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = b, a.smooth = !!i, a.origin = r, a.originIsAbsolute = !!e, t.style[fe] = "0px 0px", o && (xr(o, a, "xOrigin", u, y), xr(o, a, "yOrigin", c, b), xr(o, a, "xOffset", p, a.xOffset), xr(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", y + " " + b);
}, on = function(t, r) {
  var e = t._gsap || new Ma(t);
  if ("x" in e && !r && !e.uncache)
    return e;
  var i = t.style, n = e.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = Se(t, fe) || "0", c, p, h, f, _, d, g, v, T, S, y, b, O, w, E, k, C, I, P, W, H, X, N, A, Q, st, m, ot, Zt, ze, dt, Lt;
  return c = p = h = d = g = v = T = S = y = 0, f = _ = 1, e.svg = !!(t.getCTM && Ua(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), i.scale = i.rotate = i.translate = "none"), w = eo(t, e.svg), e.svg && (e.uncache ? (Q = t.getBBox(), u = e.xOrigin - Q.x + "px " + (e.yOrigin - Q.y) + "px", A = "") : A = !r && t.getAttribute("data-svg-origin"), Cs(t, A || u, !!A || e.originIsAbsolute, e.smooth !== !1, w)), b = e.xOrigin || 0, O = e.yOrigin || 0, w !== sn && (I = w[0], P = w[1], W = w[2], H = w[3], c = X = w[4], p = N = w[5], w.length === 6 ? (f = Math.sqrt(I * I + P * P), _ = Math.sqrt(H * H + W * W), d = I || P ? ni(P, I) * Br : 0, T = W || H ? ni(W, H) * Br + d : 0, T && (_ *= Math.abs(Math.cos(T * pi))), e.svg && (c -= b - (b * I + O * W), p -= O - (b * P + O * H))) : (Lt = w[6], ze = w[7], m = w[8], ot = w[9], Zt = w[10], dt = w[11], c = w[12], p = w[13], h = w[14], E = ni(Lt, Zt), g = E * Br, E && (k = Math.cos(-E), C = Math.sin(-E), A = X * k + m * C, Q = N * k + ot * C, st = Lt * k + Zt * C, m = X * -C + m * k, ot = N * -C + ot * k, Zt = Lt * -C + Zt * k, dt = ze * -C + dt * k, X = A, N = Q, Lt = st), E = ni(-W, Zt), v = E * Br, E && (k = Math.cos(-E), C = Math.sin(-E), A = I * k - m * C, Q = P * k - ot * C, st = W * k - Zt * C, dt = H * C + dt * k, I = A, P = Q, W = st), E = ni(P, I), d = E * Br, E && (k = Math.cos(E), C = Math.sin(E), A = I * k + P * C, Q = X * k + N * C, P = P * k - I * C, N = N * k - X * C, I = A, X = Q), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, v = 180 - v), f = wt(Math.sqrt(I * I + P * P + W * W)), _ = wt(Math.sqrt(N * N + Lt * Lt)), E = ni(X, N), T = Math.abs(E) > 2e-4 ? E * Br : 0, y = dt ? 1 / (dt < 0 ? -dt : dt) : 0), e.svg && (A = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Ga(Se(t, ht)), A && t.setAttribute("transform", A))), Math.abs(T) > 90 && Math.abs(T) < 270 && (n ? (f *= -1, T += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, T += T <= 0 ? 180 : -180)), r = r || e.uncache, e.x = c - ((e.xPercent = c && (!r && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = p - ((e.yPercent = p && (!r && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = h + o, e.scaleX = wt(f), e.scaleY = wt(_), e.rotation = wt(d) + a, e.rotationX = wt(g) + a, e.rotationY = wt(v) + a, e.skewX = T + a, e.skewY = S + a, e.transformPerspective = y + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !r && e.zOrigin || 0) && (i[fe] = Wn(u)), e.xOffset = e.yOffset = 0, e.force3D = ke.force3D, e.renderTransform = e.svg ? Xu : Ha ? $a : Wu, e.uncache = 0, e;
}, Wn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ns = function(t, r, e) {
  var i = qt(r);
  return wt(parseFloat(r) + parseFloat(Pr(t, "x", e + "px", i))) + i;
}, Wu = function(t, r) {
  r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, $a(t, r);
}, Nr = "0deg", Pi = "0px", Fr = ") ", $a = function(t, r) {
  var e = r || this, i = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.z, u = e.rotation, c = e.rotationY, p = e.rotationX, h = e.skewX, f = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective, v = e.force3D, T = e.target, S = e.zOrigin, y = "", b = v === "auto" && t && t !== 1 || v === !0;
  if (S && (p !== Nr || c !== Nr)) {
    var O = parseFloat(c) * pi, w = Math.sin(O), E = Math.cos(O), k;
    O = parseFloat(p) * pi, k = Math.cos(O), o = ns(T, o, w * k * -S), a = ns(T, a, -Math.sin(O) * -S), l = ns(T, l, E * k * -S + S);
  }
  g !== Pi && (y += "perspective(" + g + Fr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (b || o !== Pi || a !== Pi || l !== Pi) && (y += l !== Pi || b ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Fr), u !== Nr && (y += "rotate(" + u + Fr), c !== Nr && (y += "rotateY(" + c + Fr), p !== Nr && (y += "rotateX(" + p + Fr), (h !== Nr || f !== Nr) && (y += "skew(" + h + ", " + f + Fr), (_ !== 1 || d !== 1) && (y += "scale(" + _ + ", " + d + Fr), T.style[ht] = y || "translate(0, 0)";
}, Xu = function(t, r) {
  var e = r || this, i = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.rotation, u = e.skewX, c = e.skewY, p = e.scaleX, h = e.scaleY, f = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, v = e.yOffset, T = e.forceCSS, S = parseFloat(o), y = parseFloat(a), b, O, w, E, k;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= pi, u *= pi, b = Math.cos(l) * p, O = Math.sin(l) * p, w = Math.sin(l - u) * -h, E = Math.cos(l - u) * h, u && (c *= pi, k = Math.tan(u - c), k = Math.sqrt(1 + k * k), w *= k, E *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), b *= k, O *= k)), b = wt(b), O = wt(O), w = wt(w), E = wt(E)) : (b = p, E = h, O = w = 0), (S && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (S = Pr(f, "x", o, "px"), y = Pr(f, "y", a, "px")), (_ || d || g || v) && (S = wt(S + _ - (_ * b + d * w) + g), y = wt(y + d - (_ * O + d * E) + v)), (i || n) && (k = f.getBBox(), S = wt(S + i / 100 * k.width), y = wt(y + n / 100 * k.height)), k = "matrix(" + b + "," + O + "," + w + "," + E + "," + S + "," + y + ")", f.setAttribute("transform", k), T && (f.style[ht] = k);
}, Hu = function(t, r, e, i, n) {
  var o = 360, a = At(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Br : 1), u = l - i, c = i + u + "deg", p, h;
  return a && (p = n.split("_")[1], p === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), p === "cw" && u < 0 ? u = (u + o * To) % o - ~~(u / o) * o : p === "ccw" && u > 0 && (u = (u - o * To) % o - ~~(u / o) * o)), t._pt = h = new ce(t._pt, r, e, i, u, ku), h.e = c, h.u = "deg", t._props.push(e), h;
}, Po = function(t, r) {
  for (var e in r)
    t[e] = r[e];
  return t;
}, Vu = function(t, r, e) {
  var i = Po({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, l, u, c, p, h, f, _;
  i.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[ht] = r, a = on(e, 1), Er(e, ht), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[ht], o[ht] = r, a = on(e, 1), o[ht] = u);
  for (l in cr)
    u = i[l], c = a[l], u !== c && n.indexOf(l) < 0 && (f = qt(u), _ = qt(c), p = f !== _ ? Pr(e, l, u, _) : parseFloat(u), h = parseFloat(c), t._pt = new ce(t._pt, a, l, p, h - p, Ss), t._pt.u = _ || 0, t._props.push(l));
  Po(a, i);
};
ue("padding,margin,Width,Radius", function(s, t) {
  var r = "Top", e = "Right", i = "Bottom", n = "Left", o = (t < 3 ? [r, e, i, n] : [r + n, r + e, i + e, i + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  Yn[t > 1 ? "border" + s : s] = function(a, l, u, c, p) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return sr(a, _, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(_, d) {
      return f[_] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(l, f, p);
  };
});
var Za = {
  name: "css",
  register: Os,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, r, e, i, n) {
    var o = this._props, a = t.style, l = e.vars.startAt, u, c, p, h, f, _, d, g, v, T, S, y, b, O, w, E, k;
    Qs || Os(), this.styles = this.styles || Xa(t), E = this.styles.props, this.tween = e;
    for (d in r)
      if (d !== "autoRound" && (c = r[d], !(ve[d] && Da(d, r, e, i, t, n)))) {
        if (f = typeof c, _ = Yn[d], f === "function" && (c = c.call(e, i, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = en(c)), _)
          _(this, t, d, c, e) && (w = 1);
        else if (d.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(d) + "").trim(), c += "", kr.lastIndex = 0, kr.test(u) || (g = qt(u), v = qt(c), v ? g !== v && (u = Pr(t, d, u, v) + v) : g && (c += g)), this.add(a, "setProperty", u, c, i, n, 0, 0, d), o.push(d), E.push(d, 0, a[d]);
        else if (f !== "undefined") {
          if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(e, i, t, n) : l[d], At(u) && ~u.indexOf("random(") && (u = en(u)), qt(u + "") || u === "auto" || (u += ke.units[d] || qt(sr(t, d)) || ""), (u + "").charAt(1) === "=" && (u = sr(t, d))) : u = sr(t, d), h = parseFloat(u), T = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), T && (c = c.substr(2)), p = parseFloat(c), d in Ze && (d === "autoAlpha" && (h === 1 && sr(t, "visibility") === "hidden" && p && (h = 0), E.push("visibility", 0, a.visibility), xr(this, a, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = Ze[d], ~d.indexOf(",") && (d = d.split(",")[0]))), S = d in cr, S) {
            if (this.styles.save(d), k = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = Se(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var C = t.style.perspective;
                t.style.perspective = c, c = Se(t, "perspective"), C ? t.style.perspective = C : Er(t, "perspective");
              }
              p = parseFloat(c);
            }
            if (y || (b = t._gsap, b.renderTransform && !r.parseTransform || on(t, r.parseTransform), O = r.smoothOrigin !== !1 && b.smooth, y = this._pt = new ce(this._pt, a, ht, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), d === "scale")
              this._pt = new ce(this._pt, b, "scaleY", b.scaleY, (T ? hi(b.scaleY, T + p) : p) - b.scaleY || 0, Ss), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              E.push(fe, 0, a[fe]), c = Bu(c), b.svg ? Cs(t, c, 0, O, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== b.zOrigin && xr(this, b, "zOrigin", b.zOrigin, v), xr(this, a, d, Wn(u), Wn(c)));
              continue;
            } else if (d === "svgOrigin") {
              Cs(t, c, 1, O, 0, this);
              continue;
            } else if (d in qa) {
              Hu(this, b, d, h, T ? hi(h, T + c) : c);
              continue;
            } else if (d === "smoothOrigin") {
              xr(this, b, "smooth", b.smooth, c);
              continue;
            } else if (d === "force3D") {
              b[d] = c;
              continue;
            } else if (d === "transform") {
              Vu(this, c, t);
              continue;
            }
          } else d in a || (d = bi(d) || d);
          if (S || (p || p === 0) && (h || h === 0) && !Su.test(c) && d in a)
            g = (u + "").substr((h + "").length), p || (p = 0), v = qt(c) || (d in ke.units ? ke.units[d] : g), g !== v && (h = Pr(t, d, u, v)), this._pt = new ce(this._pt, S ? b : a, d, h, (T ? hi(h, T + p) : p) - h, !S && (v === "px" || d === "zIndex") && r.autoRound !== !1 ? Eu : Ss), this._pt.u = v || 0, S && k !== c ? (this._pt.b = u, this._pt.e = k, this._pt.r = Cu) : g !== v && v !== "%" && (this._pt.b = u, this._pt.r = Ou);
          else if (d in a)
            Fu.call(this, t, d, u, T ? T + c : c);
          else if (d in t)
            this.add(t, d, u || t[d], T ? T + c : c, i, n);
          else if (d !== "parseTransform") {
            Xs(d, c);
            continue;
          }
          S || (d in a ? E.push(d, 0, a[d]) : typeof t[d] == "function" ? E.push(d, 2, t[d]()) : E.push(d, 1, u || t[d])), o.push(d);
        }
      }
    w && Na(this);
  },
  render: function(t, r) {
    if (r.tween._time || !Js())
      for (var e = r._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      r.styles.revert();
  },
  get: sr,
  aliases: Ze,
  getSetter: function(t, r, e) {
    var i = Ze[r];
    return i && i.indexOf(",") < 0 && (r = i), r in cr && r !== fe && (t._gsap.x || sr(t, "x")) ? e && xo === e ? r === "scale" ? Ru : Du : (xo = e || {}) && (r === "scale" ? Au : Lu) : t.style && !Bs(t.style[r]) ? Pu : ~r.indexOf("-") ? Mu : js(t, r);
  },
  core: {
    _removeProperty: Er,
    _getMatrix: eo
  }
};
he.utils.checkPrefix = bi;
he.core.getStyleSaver = Xa;
(function(s, t, r, e) {
  var i = ue(s + "," + t + "," + r, function(n) {
    cr[n] = 1;
  });
  ue(t, function(n) {
    ke.units[n] = "deg", qa[n] = 1;
  }), Ze[i[13]] = s + "," + t, ue(e, function(n) {
    var o = n.split(":");
    Ze[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ke.units[s] = "px";
});
he.registerPlugin(Za);
var ye = he.registerPlugin(Za) || he;
ye.core.Tween;
function Uu(s, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
  }
}
function qu(s, t, r) {
  return t && Uu(s.prototype, t), s;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Nt, Pn, Te, Tr, br, _i, ja, Yr, Hi, Ka, ar, We, Qa, Ja = function() {
  return Nt || typeof window < "u" && (Nt = window.gsap) && Nt.registerPlugin && Nt;
}, tl = 1, fi = [], G = [], Ke = [], Vi = Date.now, Es = function(t, r) {
  return r;
}, Gu = function() {
  var t = Hi.core, r = t.bridge || {}, e = t._scrollers, i = t._proxies;
  e.push.apply(e, G), i.push.apply(i, Ke), G = e, Ke = i, Es = function(o, a) {
    return r[o](a);
  };
}, Or = function(t, r) {
  return ~Ke.indexOf(t) && Ke[Ke.indexOf(t) + 1][r];
}, Ui = function(t) {
  return !!~Ka.indexOf(t);
}, te = function(t, r, e, i, n) {
  return t.addEventListener(r, e, {
    passive: i !== !1,
    capture: !!n
  });
}, Jt = function(t, r, e, i) {
  return t.removeEventListener(r, e, !!i);
}, pn = "scrollLeft", _n = "scrollTop", Ps = function() {
  return ar && ar.isPressed || G.cache++;
}, Xn = function(t, r) {
  var e = function i(n) {
    if (n || n === 0) {
      tl && (Te.history.scrollRestoration = "manual");
      var o = ar && ar.isPressed;
      n = i.v = Math.round(n) || (ar && ar.iOS ? 1 : 0), t(n), i.cacheID = G.cache, o && Es("ss", n);
    } else (r || G.cache !== i.cacheID || Es("ref")) && (i.cacheID = G.cache, i.v = t());
    return i.v + i.offset;
  };
  return e.offset = 0, t && e;
}, se = {
  s: pn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Xn(function(s) {
    return arguments.length ? Te.scrollTo(s, Et.sc()) : Te.pageXOffset || Tr[pn] || br[pn] || _i[pn] || 0;
  })
}, Et = {
  s: _n,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: se,
  sc: Xn(function(s) {
    return arguments.length ? Te.scrollTo(se.sc(), s) : Te.pageYOffset || Tr[_n] || br[_n] || _i[_n] || 0;
  })
}, ae = function(t, r) {
  return (r && r._ctx && r._ctx.selector || Nt.utils.toArray)(t)[0] || (typeof t == "string" && Nt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, $u = function(t, r) {
  for (var e = r.length; e--; )
    if (r[e] === t || r[e].contains(t))
      return !0;
  return !1;
}, Mr = function(t, r) {
  var e = r.s, i = r.sc;
  Ui(t) && (t = Tr.scrollingElement || br);
  var n = G.indexOf(t), o = i === Et.sc ? 1 : 2;
  !~n && (n = G.push(t) - 1), G[n + o] || te(t, "scroll", Ps);
  var a = G[n + o], l = a || (G[n + o] = Xn(Or(t, e), !0) || (Ui(t) ? i : Xn(function(u) {
    return arguments.length ? t[e] = u : t[e];
  })));
  return l.target = t, a || (l.smooth = Nt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Ms = function(t, r, e) {
  var i = t, n = t, o = Vi(), a = o, l = r || 50, u = Math.max(500, l * 3), c = function(_, d) {
    var g = Vi();
    d || g - o > l ? (n = i, i = _, a = o, o = g) : e ? i += _ : i = n + (_ - n) / (g - a) * (o - a);
  }, p = function() {
    n = i = e ? 0 : i, a = o = 0;
  }, h = function(_) {
    var d = a, g = n, v = Vi();
    return (_ || _ === 0) && _ !== i && c(_), o === a || v - a > u ? 0 : (i + (e ? g : -g)) / ((e ? v : o) - d) * 1e3;
  };
  return {
    update: c,
    reset: p,
    getVelocity: h
  };
}, Mi = function(t, r) {
  return r && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Mo = function(t) {
  var r = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(r) >= Math.abs(e) ? r : e;
}, el = function() {
  Hi = Nt.core.globals().ScrollTrigger, Hi && Hi.core && Gu();
}, rl = function(t) {
  return Nt = t || Ja(), !Pn && Nt && typeof document < "u" && document.body && (Te = window, Tr = document, br = Tr.documentElement, _i = Tr.body, Ka = [Te, Tr, br, _i], Nt.utils.clamp, Qa = Nt.core.context || function() {
  }, Yr = "onpointerenter" in _i ? "pointer" : "mouse", ja = xt.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, We = xt.eventTypes = ("ontouchstart" in br ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in br ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return tl = 0;
  }, 500), el(), Pn = 1), Pn;
};
se.op = Et;
G.cache = 0;
var xt = /* @__PURE__ */ function() {
  function s(r) {
    this.init(r);
  }
  var t = s.prototype;
  return t.init = function(e) {
    Pn || rl(Nt) || console.warn("Please gsap.registerPlugin(Observer)"), Hi || el();
    var i = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, l = e.lineHeight, u = e.debounce, c = e.preventDefault, p = e.onStop, h = e.onStopDelay, f = e.ignore, _ = e.wheelSpeed, d = e.event, g = e.onDragStart, v = e.onDragEnd, T = e.onDrag, S = e.onPress, y = e.onRelease, b = e.onRight, O = e.onLeft, w = e.onUp, E = e.onDown, k = e.onChangeX, C = e.onChangeY, I = e.onChange, P = e.onToggleX, W = e.onToggleY, H = e.onHover, X = e.onHoverEnd, N = e.onMove, A = e.ignoreCheck, Q = e.isNormalizer, st = e.onGestureStart, m = e.onGestureEnd, ot = e.onWheel, Zt = e.onEnable, ze = e.onDisable, dt = e.onClick, Lt = e.scrollSpeed, Bt = e.capture, Tt = e.allowClicks, jt = e.lockAxis, Yt = e.onLockAxis;
    this.target = a = ae(a) || br, this.vars = e, f && (f = Nt.utils.toArray(f)), i = i || 1e-9, n = n || 0, _ = _ || 1, Lt = Lt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Te.getComputedStyle(_i).lineHeight) || 22);
    var fr, Kt, Qt, K, mt, oe, de, x = this, pe = 0, Je = 0, hr = e.passive || !c && e.passive !== !1, pt = Mr(a, se), tr = Mr(a, Et), dr = pt(), Rr = tr(), Pt = ~o.indexOf("touch") && !~o.indexOf("pointer") && We[0] === "pointerdown", pr = Ui(a), vt = a.ownerDocument || Tr, Ie = [0, 0, 0], Ee = [0, 0, 0], er = 0, ki = function() {
      return er = Vi();
    }, bt = function(z, J) {
      return (x.event = z) && f && $u(z.target, f) || J && Pt && z.pointerType !== "touch" || A && A(z, J);
    }, cn = function() {
      x._vx.reset(), x._vy.reset(), Kt.pause(), p && p(x);
    }, rr = function() {
      var z = x.deltaX = Mo(Ie), J = x.deltaY = Mo(Ee), M = Math.abs(z) >= i, F = Math.abs(J) >= i;
      I && (M || F) && I(x, z, J, Ie, Ee), M && (b && x.deltaX > 0 && b(x), O && x.deltaX < 0 && O(x), k && k(x), P && x.deltaX < 0 != pe < 0 && P(x), pe = x.deltaX, Ie[0] = Ie[1] = Ie[2] = 0), F && (E && x.deltaY > 0 && E(x), w && x.deltaY < 0 && w(x), C && C(x), W && x.deltaY < 0 != Je < 0 && W(x), Je = x.deltaY, Ee[0] = Ee[1] = Ee[2] = 0), (K || Qt) && (N && N(x), Qt && (g && Qt === 1 && g(x), T && T(x), Qt = 0), K = !1), oe && !(oe = !1) && Yt && Yt(x), mt && (ot(x), mt = !1), fr = 0;
    }, ei = function(z, J, M) {
      Ie[M] += z, Ee[M] += J, x._vx.update(z), x._vy.update(J), u ? fr || (fr = requestAnimationFrame(rr)) : rr();
    }, ri = function(z, J) {
      jt && !de && (x.axis = de = Math.abs(z) > Math.abs(J) ? "x" : "y", oe = !0), de !== "y" && (Ie[2] += z, x._vx.update(z, !0)), de !== "x" && (Ee[2] += J, x._vy.update(J, !0)), u ? fr || (fr = requestAnimationFrame(rr)) : rr();
    }, _r = function(z) {
      if (!bt(z, 1)) {
        z = Mi(z, c);
        var J = z.clientX, M = z.clientY, F = J - x.x, L = M - x.y, B = x.isDragging;
        x.x = J, x.y = M, (B || (F || L) && (Math.abs(x.startX - J) >= n || Math.abs(x.startY - M) >= n)) && (Qt || (Qt = B ? 2 : 1), B || (x.isDragging = !0), ri(F, L));
      }
    }, Ar = x.onPress = function(Y) {
      bt(Y, 1) || Y && Y.button || (x.axis = de = null, Kt.pause(), x.isPressed = !0, Y = Mi(Y), pe = Je = 0, x.startX = x.x = Y.clientX, x.startY = x.y = Y.clientY, x._vx.reset(), x._vy.reset(), te(Q ? a : vt, We[1], _r, hr, !0), x.deltaX = x.deltaY = 0, S && S(x));
    }, $ = x.onRelease = function(Y) {
      if (!bt(Y, 1)) {
        Jt(Q ? a : vt, We[1], _r, !0);
        var z = !isNaN(x.y - x.startY), J = x.isDragging, M = J && (Math.abs(x.x - x.startX) > 3 || Math.abs(x.y - x.startY) > 3), F = Mi(Y);
        !M && z && (x._vx.reset(), x._vy.reset(), c && Tt && Nt.delayedCall(0.08, function() {
          if (Vi() - er > 300 && !Y.defaultPrevented) {
            if (Y.target.click)
              Y.target.click();
            else if (vt.createEvent) {
              var L = vt.createEvent("MouseEvents");
              L.initMouseEvent("click", !0, !0, Te, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), Y.target.dispatchEvent(L);
            }
          }
        })), x.isDragging = x.isGesturing = x.isPressed = !1, p && J && !Q && Kt.restart(!0), Qt && rr(), v && J && v(x), y && y(x, M);
      }
    }, Lr = function(z) {
      return z.touches && z.touches.length > 1 && (x.isGesturing = !0) && st(z, x.isDragging);
    }, Ne = function() {
      return (x.isGesturing = !1) || m(x);
    }, Fe = function(z) {
      if (!bt(z)) {
        var J = pt(), M = tr();
        ei((J - dr) * Lt, (M - Rr) * Lt, 1), dr = J, Rr = M, p && Kt.restart(!0);
      }
    }, Be = function(z) {
      if (!bt(z)) {
        z = Mi(z, c), ot && (mt = !0);
        var J = (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Te.innerHeight : 1) * _;
        ei(z.deltaX * J, z.deltaY * J, 0), p && !Q && Kt.restart(!0);
      }
    }, zr = function(z) {
      if (!bt(z)) {
        var J = z.clientX, M = z.clientY, F = J - x.x, L = M - x.y;
        x.x = J, x.y = M, K = !0, p && Kt.restart(!0), (F || L) && ri(F, L);
      }
    }, ii = function(z) {
      x.event = z, H(x);
    }, ir = function(z) {
      x.event = z, X(x);
    }, Oi = function(z) {
      return bt(z) || Mi(z, c) && dt(x);
    };
    Kt = x._dc = Nt.delayedCall(h || 0.25, cn).pause(), x.deltaX = x.deltaY = 0, x._vx = Ms(0, 50, !0), x._vy = Ms(0, 50, !0), x.scrollX = pt, x.scrollY = tr, x.isDragging = x.isGesturing = x.isPressed = !1, Qa(this), x.enable = function(Y) {
      return x.isEnabled || (te(pr ? vt : a, "scroll", Ps), o.indexOf("scroll") >= 0 && te(pr ? vt : a, "scroll", Fe, hr, Bt), o.indexOf("wheel") >= 0 && te(a, "wheel", Be, hr, Bt), (o.indexOf("touch") >= 0 && ja || o.indexOf("pointer") >= 0) && (te(a, We[0], Ar, hr, Bt), te(vt, We[2], $), te(vt, We[3], $), Tt && te(a, "click", ki, !0, !0), dt && te(a, "click", Oi), st && te(vt, "gesturestart", Lr), m && te(vt, "gestureend", Ne), H && te(a, Yr + "enter", ii), X && te(a, Yr + "leave", ir), N && te(a, Yr + "move", zr)), x.isEnabled = !0, x.isDragging = x.isGesturing = x.isPressed = K = Qt = !1, x._vx.reset(), x._vy.reset(), dr = pt(), Rr = tr(), Y && Y.type && Ar(Y), Zt && Zt(x)), x;
    }, x.disable = function() {
      x.isEnabled && (fi.filter(function(Y) {
        return Y !== x && Ui(Y.target);
      }).length || Jt(pr ? vt : a, "scroll", Ps), x.isPressed && (x._vx.reset(), x._vy.reset(), Jt(Q ? a : vt, We[1], _r, !0)), Jt(pr ? vt : a, "scroll", Fe, Bt), Jt(a, "wheel", Be, Bt), Jt(a, We[0], Ar, Bt), Jt(vt, We[2], $), Jt(vt, We[3], $), Jt(a, "click", ki, !0), Jt(a, "click", Oi), Jt(vt, "gesturestart", Lr), Jt(vt, "gestureend", Ne), Jt(a, Yr + "enter", ii), Jt(a, Yr + "leave", ir), Jt(a, Yr + "move", zr), x.isEnabled = x.isPressed = x.isDragging = !1, ze && ze(x));
    }, x.kill = x.revert = function() {
      x.disable();
      var Y = fi.indexOf(x);
      Y >= 0 && fi.splice(Y, 1), ar === x && (ar = 0);
    }, fi.push(x), Q && Ui(a) && (ar = x), x.enable(d);
  }, qu(s, [{
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
xt.version = "3.14.2";
xt.create = function(s) {
  return new xt(s);
};
xt.register = rl;
xt.getAll = function() {
  return fi.slice();
};
xt.getById = function(s) {
  return fi.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
Ja() && Nt.registerPlugin(xt);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, ai, q, nt, we, tt, ro, Hn, an, qi, zi, gn, Vt, Zn, Ds, re, Do, Ro, li, il, ss, nl, ee, Rs, sl, ol, vr, As, io, gi, no, Gi, Ls, os, mn = 1, Ut = Date.now, as = Ut(), Le = 0, Ii = 0, Ao = function(t, r, e) {
  var i = me(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + r + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t;
}, Lo = function(t, r) {
  return r && (!me(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Zu = function s() {
  return Ii && requestAnimationFrame(s);
}, zo = function() {
  return Zn = 1;
}, Io = function() {
  return Zn = 0;
}, Ge = function(t) {
  return t;
}, Ni = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, al = function() {
  return typeof window < "u";
}, ll = function() {
  return D || al() && (D = window.gsap) && D.registerPlugin && D;
}, Kr = function(t) {
  return !!~ro.indexOf(t);
}, ul = function(t) {
  return (t === "Height" ? no : q["inner" + t]) || we["client" + t] || tt["client" + t];
}, cl = function(t) {
  return Or(t, "getBoundingClientRect") || (Kr(t) ? function() {
    return Ln.width = q.innerWidth, Ln.height = no, Ln;
  } : function() {
    return or(t);
  });
}, ju = function(t, r, e) {
  var i = e.d, n = e.d2, o = e.a;
  return (o = Or(t, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (r ? ul(n) : t["client" + n]) || 0;
  };
}, Ku = function(t, r) {
  return !r || ~Ke.indexOf(t) ? cl(t) : function() {
    return Ln;
  };
}, je = function(t, r) {
  var e = r.s, i = r.d2, n = r.d, o = r.a;
  return Math.max(0, (e = "scroll" + i) && (o = Or(t, e)) ? o() - cl(t)()[n] : Kr(t) ? (we[e] || tt[e]) - ul(i) : t[e] - t["offset" + i]);
}, vn = function(t, r) {
  for (var e = 0; e < li.length; e += 3)
    (!r || ~r.indexOf(li[e + 1])) && t(li[e], li[e + 1], li[e + 2]);
}, me = function(t) {
  return typeof t == "string";
}, Gt = function(t) {
  return typeof t == "function";
}, Fi = function(t) {
  return typeof t == "number";
}, Wr = function(t) {
  return typeof t == "object";
}, Di = function(t, r, e) {
  return t && t.progress(r ? 0 : 1) && e && t.pause();
}, ls = function(t, r) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return r(t);
    }) : r(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, si = Math.abs, fl = "left", hl = "top", so = "right", oo = "bottom", $r = "width", Zr = "height", $i = "Right", Zi = "Left", ji = "Top", Ki = "Bottom", St = "padding", Me = "margin", Si = "Width", ao = "Height", Ct = "px", De = function(t) {
  return q.getComputedStyle(t);
}, Qu = function(t) {
  var r = De(t).position;
  t.style.position = r === "absolute" || r === "fixed" ? r : "relative";
}, No = function(t, r) {
  for (var e in r)
    e in t || (t[e] = r[e]);
  return t;
}, or = function(t, r) {
  var e = r && De(t)[Ds] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
  }).progress(1), i = t.getBoundingClientRect();
  return e && e.progress(0).kill(), i;
}, Vn = function(t, r) {
  var e = r.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, dl = function(t) {
  var r = [], e = t.labels, i = t.duration(), n;
  for (n in e)
    r.push(e[n] / i);
  return r;
}, Ju = function(t) {
  return function(r) {
    return D.utils.snap(dl(t), r);
  };
}, lo = function(t) {
  var r = D.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(i, n) {
    return i - n;
  });
  return e ? function(i, n, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!n)
      return r(i);
    if (n > 0) {
      for (i -= o, a = 0; a < e.length; a++)
        if (e[a] >= i)
          return e[a];
      return e[a - 1];
    } else
      for (a = e.length, i += o; a--; )
        if (e[a] <= i)
          return e[a];
    return e[0];
  } : function(i, n, o) {
    o === void 0 && (o = 1e-3);
    var a = r(i);
    return !n || Math.abs(a - i) < o || a - i < 0 == n < 0 ? a : r(n < 0 ? i - t : i + t);
  };
}, tc = function(t) {
  return function(r, e) {
    return lo(dl(t))(r, e.direction);
  };
}, yn = function(t, r, e, i) {
  return e.split(",").forEach(function(n) {
    return t(r, n, i);
  });
}, Rt = function(t, r, e, i, n) {
  return t.addEventListener(r, e, {
    passive: !i,
    capture: !!n
  });
}, Dt = function(t, r, e, i) {
  return t.removeEventListener(r, e, !!i);
}, wn = function(t, r, e) {
  e = e && e.wheelHandler, e && (t(r, "wheel", e), t(r, "touchmove", e));
}, Fo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, xn = {
  toggleActions: "play",
  anticipatePin: 0
}, Un = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Mn = function(t, r) {
  if (me(t)) {
    var e = t.indexOf("="), i = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (i *= r / 100), t = t.substr(0, e - 1)), t = i + (t in Un ? Un[t] * r : ~t.indexOf("%") ? parseFloat(t) * r / 100 : parseFloat(t) || 0);
  }
  return t;
}, Tn = function(t, r, e, i, n, o, a, l) {
  var u = n.startColor, c = n.endColor, p = n.fontSize, h = n.indent, f = n.fontWeight, _ = nt.createElement("div"), d = Kr(e) || Or(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, v = d ? tt : e, T = t.indexOf("start") !== -1, S = T ? u : c, y = "border-color:" + S + ";font-size:" + p + ";color:" + S + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return y += "position:" + ((g || l) && d ? "fixed;" : "absolute;"), (g || l || !d) && (y += (i === Et ? so : oo) + ":" + (o + parseFloat(h)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = T, _.setAttribute("class", "gsap-marker-" + t + (r ? " marker-" + r : "")), _.style.cssText = y, _.innerText = r || r === 0 ? t + "-" + r : t, v.children[0] ? v.insertBefore(_, v.children[0]) : v.appendChild(_), _._offset = _["offset" + i.op.d2], Dn(_, 0, i, T), _;
}, Dn = function(t, r, e, i) {
  var n = {
    display: "block"
  }, o = e[i ? "os2" : "p2"], a = e[i ? "p2" : "os2"];
  t._isFlipped = i, n[e.a + "Percent"] = i ? -100 : 0, n[e.a] = i ? "1px" : 0, n["border" + o + Si] = 1, n["border" + a + Si] = 0, n[e.p] = r + "px", D.set(t, n);
}, U = [], zs = {}, ln, Bo = function() {
  return Ut() - Le > 34 && (ln || (ln = requestAnimationFrame(lr)));
}, oi = function() {
  (!ee || !ee.isPressed || ee.startX > tt.clientWidth) && (G.cache++, ee ? ln || (ln = requestAnimationFrame(lr)) : lr(), Le || Jr("scrollStart"), Le = Ut());
}, us = function() {
  ol = q.innerWidth, sl = q.innerHeight;
}, Bi = function(t) {
  G.cache++, (t === !0 || !Vt && !nl && !nt.fullscreenElement && !nt.webkitFullscreenElement && (!Rs || ol !== q.innerWidth || Math.abs(q.innerHeight - sl) > q.innerHeight * 0.25)) && Hn.restart(!0);
}, Qr = {}, ec = [], pl = function s() {
  return Dt(V, "scrollEnd", s) || Hr(!0);
}, Jr = function(t) {
  return Qr[t] && Qr[t].map(function(r) {
    return r();
  }) || ec;
}, ge = [], _l = function(t) {
  for (var r = 0; r < ge.length; r += 5)
    (!t || ge[r + 4] && ge[r + 4].query === t) && (ge[r].style.cssText = ge[r + 1], ge[r].getBBox && ge[r].setAttribute("transform", ge[r + 2] || ""), ge[r + 3].uncache = 1);
}, gl = function() {
  return G.forEach(function(t) {
    return Gt(t) && ++t.cacheID && (t.rec = t());
  });
}, uo = function(t, r) {
  var e;
  for (re = 0; re < U.length; re++)
    e = U[re], e && (!r || e._ctx === r) && (t ? e.kill(1) : e.revert(!0, !0));
  Gi = !0, r && _l(r), r || Jr("revert");
}, ml = function(t, r) {
  G.cache++, (r || !ie) && G.forEach(function(e) {
    return Gt(e) && e.cacheID++ && (e.rec = 0);
  }), me(t) && (q.history.scrollRestoration = io = t);
}, ie, jr = 0, Yo, rc = function() {
  if (Yo !== jr) {
    var t = Yo = jr;
    requestAnimationFrame(function() {
      return t === jr && Hr(!0);
    });
  }
}, vl = function() {
  tt.appendChild(gi), no = !ee && gi.offsetHeight || q.innerHeight, tt.removeChild(gi);
}, Wo = function(t) {
  return an(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
    return r.style.display = t ? "none" : "block";
  });
}, Hr = function(t, r) {
  if (we = nt.documentElement, tt = nt.body, ro = [q, nt, we, tt], Le && !t && !Gi) {
    Rt(V, "scrollEnd", pl);
    return;
  }
  vl(), ie = V.isRefreshing = !0, Gi || gl();
  var e = Jr("refreshInit");
  il && V.sort(), r || uo(), G.forEach(function(i) {
    Gt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), U.slice(0).forEach(function(i) {
    return i.refresh();
  }), Gi = !1, U.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
    }
  }), Ls = 1, Wo(!0), U.forEach(function(i) {
    var n = je(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > n, a = i._startClamp && i.start >= n;
    (o || a) && i.setPositions(a ? n - 1 : i.start, o ? Math.max(a ? n : i.start + 1, n) : i.end, !0);
  }), Wo(!1), Ls = 0, e.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), G.forEach(function(i) {
    Gt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), ml(io, 1), Hn.pause(), jr++, ie = 2, lr(2), U.forEach(function(i) {
    return Gt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), ie = V.isRefreshing = !1, Jr("refresh");
}, Is = 0, Rn = 1, Qi, lr = function(t) {
  if (t === 2 || !ie && !Gi) {
    V.isUpdating = !0, Qi && Qi.update(0);
    var r = U.length, e = Ut(), i = e - as >= 50, n = r && U[0].scroll();
    if (Rn = Is > n ? -1 : 1, ie || (Is = n), i && (Le && !Zn && e - Le > 200 && (Le = 0, Jr("scrollEnd")), zi = as, as = e), Rn < 0) {
      for (re = r; re-- > 0; )
        U[re] && U[re].update(0, i);
      Rn = 1;
    } else
      for (re = 0; re < r; re++)
        U[re] && U[re].update(0, i);
    V.isUpdating = !1;
  }
  ln = 0;
}, Ns = [fl, hl, oo, so, Me + Ki, Me + $i, Me + ji, Me + Zi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], An = Ns.concat([$r, Zr, "boxSizing", "max" + Si, "max" + ao, "position", Me, St, St + ji, St + $i, St + Ki, St + Zi]), ic = function(t, r, e) {
  mi(e);
  var i = t._gsap;
  if (i.spacerIsNative)
    mi(i.spacerState);
  else if (t._gsap.swappedIn) {
    var n = r.parentNode;
    n && (n.insertBefore(t, r), n.removeChild(r));
  }
  t._gsap.swappedIn = !1;
}, cs = function(t, r, e, i) {
  if (!t._gsap.swappedIn) {
    for (var n = Ns.length, o = r.style, a = t.style, l; n--; )
      l = Ns[n], o[l] = e[l];
    o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[oo] = a[so] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[$r] = Vn(t, se) + Ct, o[Zr] = Vn(t, Et) + Ct, o[St] = a[Me] = a[hl] = a[fl] = "0", mi(i), a[$r] = a["max" + Si] = e[$r], a[Zr] = a["max" + ao] = e[Zr], a[St] = e[St], t.parentNode !== r && (t.parentNode.insertBefore(r, t), r.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, nc = /([A-Z])/g, mi = function(t) {
  if (t) {
    var r = t.t.style, e = t.length, i = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; i < e; i += 2)
      o = t[i + 1], n = t[i], o ? r[n] = o : r[n] && r.removeProperty(n.replace(nc, "-$1").toLowerCase());
  }
}, bn = function(t) {
  for (var r = An.length, e = t.style, i = [], n = 0; n < r; n++)
    i.push(An[n], e[An[n]]);
  return i.t = t, i;
}, sc = function(t, r, e) {
  for (var i = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
    a = t[o], i.push(a, a in r ? r[a] : t[o + 1]);
  return i.t = t.t, i;
}, Ln = {
  left: 0,
  top: 0
}, Xo = function(t, r, e, i, n, o, a, l, u, c, p, h, f, _) {
  Gt(t) && (t = t(l)), me(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Mn("0" + t.substr(3), e) : 0));
  var d = f ? f.time() : 0, g, v, T;
  if (f && f.seek(0), isNaN(t) || (t = +t), Fi(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && Dn(a, e, i, !0);
  else {
    Gt(r) && (r = r(l));
    var S = (t || "0").split(" "), y, b, O, w;
    T = ae(r, l) || tt, y = or(T) || {}, (!y || !y.left && !y.top) && De(T).display === "none" && (w = T.style.display, T.style.display = "block", y = or(T), w ? T.style.display = w : T.style.removeProperty("display")), b = Mn(S[0], y[i.d]), O = Mn(S[1] || "0", e), t = y[i.p] - u[i.p] - c + b + n - O, a && Dn(a, O, i, e - O < 20 || a._isStart && O > 20), e -= e - O;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var E = t + e, k = o._isStart;
    g = "scroll" + i.d2, Dn(o, E, i, k && E > 20 || !k && (p ? Math.max(tt[g], we[g]) : o.parentNode[g]) <= E + 1), p && (u = or(a), p && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Ct));
  }
  return f && T && (g = or(T), f.seek(h), v = or(T), f._caScrollDist = g[i.p] - v[i.p], t = t / f._caScrollDist * h), f && f.seek(d), f ? t : Math.round(t);
}, oc = /(webkit|moz|length|cssText|inset)/i, Ho = function(t, r, e, i) {
  if (t.parentNode !== r) {
    var n = t.style, o, a;
    if (r === tt) {
      t._stOrig = n.cssText, a = De(t);
      for (o in a)
        !+o && !oc.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = e, n.left = i;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, r.appendChild(t);
  }
}, yl = function(t, r, e) {
  var i = r, n = i;
  return function(o) {
    var a = Math.round(t());
    return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = i, i = Math.round(o), i;
  };
}, Sn = function(t, r, e) {
  var i = {};
  i[r.p] = "+=" + e, D.set(t, i);
}, Vo = function(t, r) {
  var e = Mr(t, r), i = "_scroll" + r.p2, n = function o(a, l, u, c, p) {
    var h = o.tween, f = l.onComplete, _ = {};
    u = u || e();
    var d = yl(e, u, function() {
      h.kill(), o.tween = 0;
    });
    return p = c && p || 0, c = c || a - u, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = _, _[i] = function() {
      return d(u + c * h.ratio + p * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      G.cache++, o.tween && lr();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[i] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Rt(t, "wheel", e.wheelHandler), V.isTouch && Rt(t, "touchmove", e.wheelHandler), n;
}, V = /* @__PURE__ */ function() {
  function s(r, e) {
    ai || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), As(this), this.init(r, e);
  }
  var t = s.prototype;
  return t.init = function(e, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ii) {
      this.update = this.refresh = this.kill = Ge;
      return;
    }
    e = No(me(e) || Fi(e) || e.nodeType ? {
      trigger: e
    } : e, xn);
    var n = e, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, p = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, v = n.onScrubComplete, T = n.onSnapComplete, S = n.once, y = n.snap, b = n.pinReparent, O = n.pinSpacer, w = n.containerAnimation, E = n.fastScrollEnd, k = n.preventOverlaps, C = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? se : Et, I = !p && p !== 0, P = ae(e.scroller || q), W = D.core.getCache(P), H = Kr(P), X = ("pinType" in e ? e.pinType : Or(P, "pinType") || H && "fixed") === "fixed", N = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], A = I && e.toggleActions.split(" "), Q = "markers" in e ? e.markers : xn.markers, st = H ? 0 : parseFloat(De(P)["border" + C.p2 + Si]) || 0, m = this, ot = e.onRefreshInit && function() {
      return e.onRefreshInit(m);
    }, Zt = ju(P, H, C), ze = Ku(P, H), dt = 0, Lt = 0, Bt = 0, Tt = Mr(P, C), jt, Yt, fr, Kt, Qt, K, mt, oe, de, x, pe, Je, hr, pt, tr, dr, Rr, Pt, pr, vt, Ie, Ee, er, ki, bt, cn, rr, ei, ri, _r, Ar, $, Lr, Ne, Fe, Be, zr, ii, ir;
    if (m._startClamp = m._endClamp = !1, m._dir = C, g *= 45, m.scroller = P, m.scroll = w ? w.time.bind(w) : Tt, Kt = Tt(), m.vars = e, i = i || e.animation, "refreshPriority" in e && (il = 1, e.refreshPriority === -9999 && (Qi = m)), W.tweenScroll = W.tweenScroll || {
      top: Vo(P, Et),
      left: Vo(P, se)
    }, m.tweenTo = jt = W.tweenScroll[C.p], m.scrubDuration = function(M) {
      Lr = Fi(M) && M, Lr ? $ ? $.duration(M) : $ = D.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Lr,
        paused: !0,
        onComplete: function() {
          return v && v(m);
        }
      }) : ($ && $.progress(1).kill(), $ = 0);
    }, i && (i.vars.lazy = !1, i._initted && !m.isReverted || i.vars.immediateRender !== !1 && e.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), m.animation = i.pause(), i.scrollTrigger = m, m.scrubDuration(p), _r = 0, l || (l = i.vars.id)), y && ((!Wr(y) || y.push) && (y = {
      snapTo: y
    }), "scrollBehavior" in tt.style && D.set(H ? [tt, we] : P, {
      scrollBehavior: "auto"
    }), G.forEach(function(M) {
      return Gt(M) && M.target === (H ? nt.scrollingElement || we : P) && (M.smooth = !1);
    }), fr = Gt(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Ju(i) : y.snapTo === "labelsDirectional" ? tc(i) : y.directional !== !1 ? function(M, F) {
      return lo(y.snapTo)(M, Ut() - Lt < 500 ? 0 : F.direction);
    } : D.utils.snap(y.snapTo), Ne = y.duration || {
      min: 0.1,
      max: 2
    }, Ne = Wr(Ne) ? qi(Ne.min, Ne.max) : qi(Ne, Ne), Fe = D.delayedCall(y.delay || Lr / 2 || 0.1, function() {
      var M = Tt(), F = Ut() - Lt < 500, L = jt.tween;
      if ((F || Math.abs(m.getVelocity()) < 10) && !L && !Zn && dt !== M) {
        var B = (M - K) / pt, Mt = i && !I ? i.totalProgress() : B, Z = F ? 0 : (Mt - Ar) / (Ut() - zi) * 1e3 || 0, yt = D.utils.clamp(-B, 1 - B, si(Z / 2) * Z / 0.185), Wt = B + (y.inertia === !1 ? 0 : yt), _t, at, et = y, Ye = et.onStart, ut = et.onInterrupt, _e = et.onComplete;
        if (_t = fr(Wt, m), Fi(_t) || (_t = Wt), at = Math.max(0, Math.round(K + _t * pt)), M <= mt && M >= K && at !== M) {
          if (L && !L._initted && L.data <= si(at - M))
            return;
          y.inertia === !1 && (yt = _t - B), jt(at, {
            duration: Ne(si(Math.max(si(Wt - Mt), si(_t - Mt)) * 0.185 / Z / 0.05 || 0)),
            ease: y.ease || "power3",
            data: si(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Fe.restart(!0) && ut && ut(m);
            },
            onComplete: function() {
              m.update(), dt = Tt(), i && !I && ($ ? $.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), _r = Ar = i && !I ? i.totalProgress() : m.progress, T && T(m), _e && _e(m);
            }
          }, M, yt * pt, at - M - yt * pt), Ye && Ye(m, jt.tween);
        }
      } else m.isActive && dt !== M && Fe.restart(!0);
    }).pause()), l && (zs[l] = m), h = m.trigger = ae(h || f !== !0 && f), ir = h && h._gsap && h._gsap.stRevert, ir && (ir = ir(m)), f = f === !0 ? h : ae(f), me(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Me || (_ = !_ && f.parentNode && f.parentNode.style && De(f.parentNode).display === "flex" ? !1 : St), m.pin = f, Yt = D.core.getCache(f), Yt.spacer ? tr = Yt.pinState : (O && (O = ae(O), O && !O.nodeType && (O = O.current || O.nativeElement), Yt.spacerIsNative = !!O, O && (Yt.spacerState = bn(O))), Yt.spacer = Pt = O || nt.createElement("div"), Pt.classList.add("pin-spacer"), l && Pt.classList.add("pin-spacer-" + l), Yt.pinState = tr = bn(f)), e.force3D !== !1 && D.set(f, {
      force3D: !0
    }), m.spacer = Pt = Yt.spacer, ri = De(f), ki = ri[_ + C.os2], vt = D.getProperty(f), Ie = D.quickSetter(f, C.a, Ct), cs(f, Pt, ri), Rr = bn(f)), Q) {
      Je = Wr(Q) ? No(Q, Fo) : Fo, x = Tn("scroller-start", l, P, C, Je, 0), pe = Tn("scroller-end", l, P, C, Je, 0, x), pr = x["offset" + C.op.d2];
      var Oi = ae(Or(P, "content") || P);
      oe = this.markerStart = Tn("start", l, Oi, C, Je, pr, 0, w), de = this.markerEnd = Tn("end", l, Oi, C, Je, pr, 0, w), w && (ii = D.quickSetter([oe, de], C.a, Ct)), !X && !(Ke.length && Or(P, "fixedMarkers") === !0) && (Qu(H ? tt : P), D.set([x, pe], {
        force3D: !0
      }), cn = D.quickSetter(x, C.a, Ct), ei = D.quickSetter(pe, C.a, Ct));
    }
    if (w) {
      var Y = w.vars.onUpdate, z = w.vars.onUpdateParams;
      w.eventCallback("onUpdate", function() {
        m.update(0, 0, 1), Y && Y.apply(w, z || []);
      });
    }
    if (m.previous = function() {
      return U[U.indexOf(m) - 1];
    }, m.next = function() {
      return U[U.indexOf(m) + 1];
    }, m.revert = function(M, F) {
      if (!F)
        return m.kill(!0);
      var L = M !== !1 || !m.enabled, B = Vt;
      L !== m.isReverted && (L && (Be = Math.max(Tt(), m.scroll.rec || 0), Bt = m.progress, zr = i && i.progress()), oe && [oe, de, x, pe].forEach(function(Mt) {
        return Mt.style.display = L ? "none" : "block";
      }), L && (Vt = m, m.update(L)), f && (!b || !m.isActive) && (L ? ic(f, Pt, tr) : cs(f, Pt, De(f), bt)), L || m.update(L), Vt = B, m.isReverted = L);
    }, m.refresh = function(M, F, L, B) {
      if (!((Vt || !m.enabled) && !F)) {
        if (f && M && Le) {
          Rt(s, "scrollEnd", pl);
          return;
        }
        !ie && ot && ot(m), Vt = m, jt.tween && !L && (jt.tween.kill(), jt.tween = 0), $ && $.pause(), d && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(gr) {
          return gr.vars.immediateRender && gr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
        var Mt = Zt(), Z = ze(), yt = w ? w.duration() : je(P, C), Wt = pt <= 0.01 || !pt, _t = 0, at = B || 0, et = Wr(L) ? L.end : e.end, Ye = e.endTrigger || h, ut = Wr(L) ? L.start : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), _e = m.pinnedContainer = e.pinnedContainer && ae(e.pinnedContainer, m), Xe = h && Math.max(0, U.indexOf(m)) || 0, zt = Xe, It, Xt, Ir, fn, Ht, Ot, He, jn, co, Ci, Ve, Ei, hn;
        for (Q && Wr(L) && (Ei = D.getProperty(x, C.p), hn = D.getProperty(pe, C.p)); zt-- > 0; )
          Ot = U[zt], Ot.end || Ot.refresh(0, 1) || (Vt = m), He = Ot.pin, He && (He === h || He === f || He === _e) && !Ot.isReverted && (Ci || (Ci = []), Ci.unshift(Ot), Ot.revert(!0, !0)), Ot !== U[zt] && (Xe--, zt--);
        for (Gt(ut) && (ut = ut(m)), ut = Ao(ut, "start", m), K = Xo(ut, h, Mt, C, Tt(), oe, x, m, Z, st, X, yt, w, m._startClamp && "_startClamp") || (f ? -1e-3 : 0), Gt(et) && (et = et(m)), me(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (me(ut) ? ut.split(" ")[0] : "") + et : (_t = Mn(et.substr(2), Mt), et = me(ut) ? ut : (w ? D.utils.mapRange(0, w.duration(), w.scrollTrigger.start, w.scrollTrigger.end, K) : K) + _t, Ye = h)), et = Ao(et, "end", m), mt = Math.max(K, Xo(et || (Ye ? "100% 0" : yt), Ye, Mt, C, Tt() + _t, de, pe, m, Z, st, X, yt, w, m._endClamp && "_endClamp")) || -1e-3, _t = 0, zt = Xe; zt--; )
          Ot = U[zt] || {}, He = Ot.pin, He && Ot.start - Ot._pinPush <= K && !w && Ot.end > 0 && (It = Ot.end - (m._startClamp ? Math.max(0, Ot.start) : Ot.start), (He === h && Ot.start - Ot._pinPush < K || He === _e) && isNaN(ut) && (_t += It * (1 - Ot.progress)), He === f && (at += It));
        if (K += _t, mt += _t, m._startClamp && (m._startClamp += _t), m._endClamp && !ie && (m._endClamp = mt || -1e-3, mt = Math.min(mt, je(P, C))), pt = mt - K || (K -= 0.01) && 1e-3, Wt && (Bt = D.utils.clamp(0, 1, D.utils.normalize(K, mt, Be))), m._pinPush = at, oe && _t && (It = {}, It[C.a] = "+=" + _t, _e && (It[C.p] = "-=" + Tt()), D.set([oe, de], It)), f && !(Ls && m.end >= je(P, C)))
          It = De(f), fn = C === Et, Ir = Tt(), Ee = parseFloat(vt(C.a)) + at, !yt && mt > 1 && (Ve = (H ? nt.scrollingElement || we : P).style, Ve = {
            style: Ve,
            value: Ve["overflow" + C.a.toUpperCase()]
          }, H && De(tt)["overflow" + C.a.toUpperCase()] !== "scroll" && (Ve.style["overflow" + C.a.toUpperCase()] = "scroll")), cs(f, Pt, It), Rr = bn(f), Xt = or(f, !0), jn = X && Mr(P, fn ? se : Et)(), _ ? (bt = [_ + C.os2, pt + at + Ct], bt.t = Pt, zt = _ === St ? Vn(f, C) + pt + at : 0, zt && (bt.push(C.d, zt + Ct), Pt.style.flexBasis !== "auto" && (Pt.style.flexBasis = zt + Ct)), mi(bt), _e && U.forEach(function(gr) {
            gr.pin === _e && gr.vars.pinSpacing !== !1 && (gr._subPinOffset = !0);
          }), X && Tt(Be)) : (zt = Vn(f, C), zt && Pt.style.flexBasis !== "auto" && (Pt.style.flexBasis = zt + Ct)), X && (Ht = {
            top: Xt.top + (fn ? Ir - K : jn) + Ct,
            left: Xt.left + (fn ? jn : Ir - K) + Ct,
            boxSizing: "border-box",
            position: "fixed"
          }, Ht[$r] = Ht["max" + Si] = Math.ceil(Xt.width) + Ct, Ht[Zr] = Ht["max" + ao] = Math.ceil(Xt.height) + Ct, Ht[Me] = Ht[Me + ji] = Ht[Me + $i] = Ht[Me + Ki] = Ht[Me + Zi] = "0", Ht[St] = It[St], Ht[St + ji] = It[St + ji], Ht[St + $i] = It[St + $i], Ht[St + Ki] = It[St + Ki], Ht[St + Zi] = It[St + Zi], dr = sc(tr, Ht, b), ie && Tt(0)), i ? (co = i._initted, ss(1), i.render(i.duration(), !0, !0), er = vt(C.a) - Ee + pt + at, rr = Math.abs(pt - er) > 1, X && rr && dr.splice(dr.length - 2, 2), i.render(0, !0, !0), co || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), ss(0)) : er = pt, Ve && (Ve.value ? Ve.style["overflow" + C.a.toUpperCase()] = Ve.value : Ve.style.removeProperty("overflow-" + C.a));
        else if (h && Tt() && !w)
          for (Xt = h.parentNode; Xt && Xt !== tt; )
            Xt._pinOffset && (K -= Xt._pinOffset, mt -= Xt._pinOffset), Xt = Xt.parentNode;
        Ci && Ci.forEach(function(gr) {
          return gr.revert(!1, !0);
        }), m.start = K, m.end = mt, Kt = Qt = ie ? Be : Tt(), !w && !ie && (Kt < Be && Tt(Be), m.scroll.rec = 0), m.revert(!1, !0), Lt = Ut(), Fe && (dt = -1, Fe.restart(!0)), Vt = 0, i && I && (i._initted || zr) && i.progress() !== zr && i.progress(zr || 0, !0).render(i.time(), !0, !0), (Wt || Bt !== m.progress || w || d || i && !i._initted) && (i && !I && (i._initted || Bt || i.vars.immediateRender !== !1) && i.totalProgress(w && K < -1e-3 && !Bt ? D.utils.normalize(K, mt, 0) : Bt, !0), m.progress = Wt || (Kt - K) / pt === Bt ? 0 : Bt), f && _ && (Pt._pinOffset = Math.round(m.progress * er)), $ && $.invalidate(), isNaN(Ei) || (Ei -= D.getProperty(x, C.p), hn -= D.getProperty(pe, C.p), Sn(x, C, Ei), Sn(oe, C, Ei - (B || 0)), Sn(pe, C, hn), Sn(de, C, hn - (B || 0))), Wt && !ie && m.update(), c && !ie && !hr && (hr = !0, c(m), hr = !1);
      }
    }, m.getVelocity = function() {
      return (Tt() - Qt) / (Ut() - zi) * 1e3 || 0;
    }, m.endAnimation = function() {
      Di(m.callbackAnimation), i && ($ ? $.progress(1) : i.paused() ? I || Di(i, m.direction < 0, 1) : Di(i, i.reversed()));
    }, m.labelToScroll = function(M) {
      return i && i.labels && (K || m.refresh() || K) + i.labels[M] / i.duration() * pt || 0;
    }, m.getTrailing = function(M) {
      var F = U.indexOf(m), L = m.direction > 0 ? U.slice(0, F).reverse() : U.slice(F + 1);
      return (me(M) ? L.filter(function(B) {
        return B.vars.preventOverlaps === M;
      }) : L).filter(function(B) {
        return m.direction > 0 ? B.end <= K : B.start >= mt;
      });
    }, m.update = function(M, F, L) {
      if (!(w && !L && !M)) {
        var B = ie === !0 ? Be : m.scroll(), Mt = M ? 0 : (B - K) / pt, Z = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0, yt = m.progress, Wt, _t, at, et, Ye, ut, _e, Xe;
        if (F && (Qt = Kt, Kt = w ? Tt() : B, y && (Ar = _r, _r = i && !I ? i.totalProgress() : Z)), g && f && !Vt && !mn && Le && (!Z && K < B + (B - Qt) / (Ut() - zi) * g ? Z = 1e-4 : Z === 1 && mt > B + (B - Qt) / (Ut() - zi) * g && (Z = 0.9999)), Z !== yt && m.enabled) {
          if (Wt = m.isActive = !!Z && Z < 1, _t = !!yt && yt < 1, ut = Wt !== _t, Ye = ut || !!Z != !!yt, m.direction = Z > yt ? 1 : -1, m.progress = Z, Ye && !Vt && (at = Z && !yt ? 0 : Z === 1 ? 1 : yt === 1 ? 2 : 3, I && (et = !ut && A[at + 1] !== "none" && A[at + 1] || A[at], Xe = i && (et === "complete" || et === "reset" || et in i))), k && (ut || Xe) && (Xe || p || !i) && (Gt(k) ? k(m) : m.getTrailing(k).forEach(function(Ir) {
            return Ir.endAnimation();
          })), I || ($ && !Vt && !mn ? ($._dp._time - $._start !== $._time && $.render($._dp._time - $._start), $.resetTo ? $.resetTo("totalProgress", Z, i._tTime / i._tDur) : ($.vars.totalProgress = Z, $.invalidate().restart())) : i && i.totalProgress(Z, !!(Vt && (Lt || M)))), f) {
            if (M && _ && (Pt.style[_ + C.os2] = ki), !X)
              Ie(Ni(Ee + er * Z));
            else if (Ye) {
              if (_e = !M && Z > yt && mt + 1 > B && B + 1 >= je(P, C), b)
                if (!M && (Wt || _e)) {
                  var zt = or(f, !0), It = B - K;
                  Ho(f, tt, zt.top + (C === Et ? It : 0) + Ct, zt.left + (C === Et ? 0 : It) + Ct);
                } else
                  Ho(f, Pt);
              mi(Wt || _e ? dr : Rr), rr && Z < 1 && Wt || Ie(Ee + (Z === 1 && !_e ? er : 0));
            }
          }
          y && !jt.tween && !Vt && !mn && Fe.restart(!0), a && (ut || S && Z && (Z < 1 || !os)) && an(a.targets).forEach(function(Ir) {
            return Ir.classList[Wt || S ? "add" : "remove"](a.className);
          }), o && !I && !M && o(m), Ye && !Vt ? (I && (Xe && (et === "complete" ? i.pause().totalProgress(1) : et === "reset" ? i.restart(!0).pause() : et === "restart" ? i.restart(!0) : i[et]()), o && o(m)), (ut || !os) && (u && ut && ls(m, u), N[at] && ls(m, N[at]), S && (Z === 1 ? m.kill(!1, 1) : N[at] = 0), ut || (at = Z === 1 ? 1 : 3, N[at] && ls(m, N[at]))), E && !Wt && Math.abs(m.getVelocity()) > (Fi(E) ? E : 2500) && (Di(m.callbackAnimation), $ ? $.progress(1) : Di(i, et === "reverse" ? 1 : !Z, 1))) : I && o && !Vt && o(m);
        }
        if (ei) {
          var Xt = w ? B / w.duration() * (w._caScrollDist || 0) : B;
          cn(Xt + (x._isFlipped ? 1 : 0)), ei(Xt);
        }
        ii && ii(-B / w.duration() * (w._caScrollDist || 0));
      }
    }, m.enable = function(M, F) {
      m.enabled || (m.enabled = !0, Rt(P, "resize", Bi), H || Rt(P, "scroll", oi), ot && Rt(s, "refreshInit", ot), M !== !1 && (m.progress = Bt = 0, Kt = Qt = dt = Tt()), F !== !1 && m.refresh());
    }, m.getTween = function(M) {
      return M && jt ? jt.tween : $;
    }, m.setPositions = function(M, F, L, B) {
      if (w) {
        var Mt = w.scrollTrigger, Z = w.duration(), yt = Mt.end - Mt.start;
        M = Mt.start + yt * M / Z, F = Mt.start + yt * F / Z;
      }
      m.refresh(!1, !1, {
        start: Lo(M, L && !!m._startClamp),
        end: Lo(F, L && !!m._endClamp)
      }, B), m.update();
    }, m.adjustPinSpacing = function(M) {
      if (bt && M) {
        var F = bt.indexOf(C.d) + 1;
        bt[F] = parseFloat(bt[F]) + M + Ct, bt[1] = parseFloat(bt[1]) + M + Ct, mi(bt);
      }
    }, m.disable = function(M, F) {
      if (M !== !1 && m.revert(!0, !0), m.enabled && (m.enabled = m.isActive = !1, F || $ && $.pause(), Be = 0, Yt && (Yt.uncache = 1), ot && Dt(s, "refreshInit", ot), Fe && (Fe.pause(), jt.tween && jt.tween.kill() && (jt.tween = 0)), !H)) {
        for (var L = U.length; L--; )
          if (U[L].scroller === P && U[L] !== m)
            return;
        Dt(P, "resize", Bi), H || Dt(P, "scroll", oi);
      }
    }, m.kill = function(M, F) {
      m.disable(M, F), $ && !F && $.kill(), l && delete zs[l];
      var L = U.indexOf(m);
      L >= 0 && U.splice(L, 1), L === re && Rn > 0 && re--, L = 0, U.forEach(function(B) {
        return B.scroller === m.scroller && (L = 1);
      }), L || ie || (m.scroll.rec = 0), i && (i.scrollTrigger = null, M && i.revert({
        kill: !1
      }), F || i.kill()), oe && [oe, de, x, pe].forEach(function(B) {
        return B.parentNode && B.parentNode.removeChild(B);
      }), Qi === m && (Qi = 0), f && (Yt && (Yt.uncache = 1), L = 0, U.forEach(function(B) {
        return B.pin === f && L++;
      }), L || (Yt.spacer = 0)), e.onKill && e.onKill(m);
    }, U.push(m), m.enable(!1, !1), ir && ir(m), i && i.add && !pt) {
      var J = m.update;
      m.update = function() {
        m.update = J, G.cache++, K || mt || m.refresh();
      }, D.delayedCall(0.01, m.update), pt = 0.01, K = mt = 0;
    } else
      m.refresh();
    f && rc();
  }, s.register = function(e) {
    return ai || (D = e || ll(), al() && window.document && s.enable(), ai = Ii), ai;
  }, s.defaults = function(e) {
    if (e)
      for (var i in e)
        xn[i] = e[i];
    return xn;
  }, s.disable = function(e, i) {
    Ii = 0, U.forEach(function(o) {
      return o[i ? "kill" : "disable"](e);
    }), Dt(q, "wheel", oi), Dt(nt, "scroll", oi), clearInterval(gn), Dt(nt, "touchcancel", Ge), Dt(tt, "touchstart", Ge), yn(Dt, nt, "pointerdown,touchstart,mousedown", zo), yn(Dt, nt, "pointerup,touchend,mouseup", Io), Hn.kill(), vn(Dt);
    for (var n = 0; n < G.length; n += 3)
      wn(Dt, G[n], G[n + 1]), wn(Dt, G[n], G[n + 2]);
  }, s.enable = function() {
    if (q = window, nt = document, we = nt.documentElement, tt = nt.body, D && (an = D.utils.toArray, qi = D.utils.clamp, As = D.core.context || Ge, ss = D.core.suppressOverwrites || Ge, io = q.history.scrollRestoration || "auto", Is = q.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt)) {
      Ii = 1, gi = document.createElement("div"), gi.style.height = "100vh", gi.style.position = "absolute", vl(), Zu(), xt.register(D), s.isTouch = xt.isTouch, vr = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Rs = xt.isTouch === 1, Rt(q, "wheel", oi), ro = [q, nt, we, tt], D.matchMedia ? (s.matchMedia = function(u) {
        var c = D.matchMedia(), p;
        for (p in u)
          c.add(p, u[p]);
        return c;
      }, D.addEventListener("matchMediaInit", function() {
        gl(), uo();
      }), D.addEventListener("matchMediaRevert", function() {
        return _l();
      }), D.addEventListener("matchMedia", function() {
        Hr(0, 1), Jr("matchMedia");
      }), D.matchMedia().add("(orientation: portrait)", function() {
        return us(), us;
      })) : console.warn("Requires GSAP 3.11.0 or later"), us(), Rt(nt, "scroll", oi);
      var e = tt.hasAttribute("style"), i = tt.style, n = i.borderTopStyle, o = D.core.Animation.prototype, a, l;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), i.borderTopStyle = "solid", a = or(tt), Et.m = Math.round(a.top + Et.sc()) || 0, se.m = Math.round(a.left + se.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), e || (tt.setAttribute("style", ""), tt.removeAttribute("style")), gn = setInterval(Bo, 250), D.delayedCall(0.5, function() {
        return mn = 0;
      }), Rt(nt, "touchcancel", Ge), Rt(tt, "touchstart", Ge), yn(Rt, nt, "pointerdown,touchstart,mousedown", zo), yn(Rt, nt, "pointerup,touchend,mouseup", Io), Ds = D.utils.checkPrefix("transform"), An.push(Ds), ai = Ut(), Hn = D.delayedCall(0.2, Hr).pause(), li = [nt, "visibilitychange", function() {
        var u = q.innerWidth, c = q.innerHeight;
        nt.hidden ? (Do = u, Ro = c) : (Do !== u || Ro !== c) && Bi();
      }, nt, "DOMContentLoaded", Hr, q, "load", Hr, q, "resize", Bi], vn(Rt), U.forEach(function(u) {
        return u.enable(0, 1);
      }), l = 0; l < G.length; l += 3)
        wn(Dt, G[l], G[l + 1]), wn(Dt, G[l], G[l + 2]);
    }
  }, s.config = function(e) {
    "limitCallbacks" in e && (os = !!e.limitCallbacks);
    var i = e.syncInterval;
    i && clearInterval(gn) || (gn = i) && setInterval(Bo, i), "ignoreMobileResize" in e && (Rs = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (vn(Dt) || vn(Rt, e.autoRefreshEvents || "none"), nl = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(e, i) {
    var n = ae(e), o = G.indexOf(n), a = Kr(n);
    ~o && G.splice(o, a ? 6 : 2), i && (a ? Ke.unshift(q, i, tt, i, we, i) : Ke.unshift(n, i));
  }, s.clearMatchMedia = function(e) {
    U.forEach(function(i) {
      return i._ctx && i._ctx.query === e && i._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(e, i, n) {
    var o = (me(e) ? ae(e) : e).getBoundingClientRect(), a = o[n ? $r : Zr] * i || 0;
    return n ? o.right - a > 0 && o.left + a < q.innerWidth : o.bottom - a > 0 && o.top + a < q.innerHeight;
  }, s.positionInViewport = function(e, i, n) {
    me(e) && (e = ae(e));
    var o = e.getBoundingClientRect(), a = o[n ? $r : Zr], l = i == null ? a / 2 : i in Un ? Un[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return n ? (o.left + l) / q.innerWidth : (o.top + l) / q.innerHeight;
  }, s.killAll = function(e) {
    if (U.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var i = Qr.killAll || [];
      Qr = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
V.version = "3.14.2";
V.saveStyles = function(s) {
  return s ? an(s).forEach(function(t) {
    if (t && t.style) {
      var r = ge.indexOf(t);
      r >= 0 && ge.splice(r, 5), ge.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), As());
    }
  }) : ge;
};
V.revert = function(s, t) {
  return uo(!s, t);
};
V.create = function(s, t) {
  return new V(s, t);
};
V.refresh = function(s) {
  return s ? Bi(!0) : (ai || V.register()) && Hr(!0);
};
V.update = function(s) {
  return ++G.cache && lr(s === !0 ? 2 : 0);
};
V.clearScrollMemory = ml;
V.maxScroll = function(s, t) {
  return je(s, t ? se : Et);
};
V.getScrollFunc = function(s, t) {
  return Mr(ae(s), t ? se : Et);
};
V.getById = function(s) {
  return zs[s];
};
V.getAll = function() {
  return U.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
V.isScrolling = function() {
  return !!Le;
};
V.snapDirectional = lo;
V.addEventListener = function(s, t) {
  var r = Qr[s] || (Qr[s] = []);
  ~r.indexOf(t) || r.push(t);
};
V.removeEventListener = function(s, t) {
  var r = Qr[s], e = r && r.indexOf(t);
  e >= 0 && r.splice(e, 1);
};
V.batch = function(s, t) {
  var r = [], e = {}, i = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, c) {
    var p = [], h = [], f = D.delayedCall(i, function() {
      c(p, h), p = [], h = [];
    }).pause();
    return function(_) {
      p.length || f.restart(!0), p.push(_.trigger), h.push(_), n <= p.length && f.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Gt(n) && (n = n(), Rt(V, "refresh", function() {
    return n = t.batchMax();
  })), an(s).forEach(function(l) {
    var u = {};
    for (a in e)
      u[a] = e[a];
    u.trigger = l, r.push(V.create(u));
  }), r;
};
var Uo = function(t, r, e, i) {
  return r > i ? t(i) : r < 0 && t(0), e > i ? (i - r) / (e - r) : e < 0 ? r / (r - e) : 1;
}, fs = function s(t, r) {
  r === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (xt.isTouch ? " pinch-zoom" : "") : "none", t === we && s(tt, r);
}, kn = {
  auto: 1,
  scroll: 1
}, ac = function(t) {
  var r = t.event, e = t.target, i = t.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target, o = n._gsap || D.core.getCache(n), a = Ut(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(kn[(l = De(n)).overflowY] || kn[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== e && !Kr(n) && (kn[(l = De(n)).overflowY] || kn[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0);
}, wl = function(t, r, e, i) {
  return xt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: r,
    onWheel: i = i && ac,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return e && Rt(nt, xt.eventTypes[0], Go, !1, !0);
    },
    onDisable: function() {
      return Dt(nt, xt.eventTypes[0], Go, !0);
    }
  });
}, lc = /(input|label|select|textarea)/i, qo, Go = function(t) {
  var r = lc.test(t.target.tagName);
  (r || qo) && (t._gsapAllow = !0, qo = r);
}, uc = function(t) {
  Wr(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var r = t, e = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, o = r.onRelease, a, l, u = ae(t.target) || we, c = D.core.globals().ScrollSmoother, p = c && c.get(), h = vr && (t.content && ae(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), f = Mr(u, Et), _ = Mr(u, se), d = 1, g = (xt.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, v = 0, T = Gt(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, S, y, b = wl(u, t.type, !0, n), O = function() {
    return y = !1;
  }, w = Ge, E = Ge, k = function() {
    l = je(u, Et), E = qi(vr ? 1 : 0, l), e && (w = qi(0, je(u, se))), S = jr;
  }, C = function() {
    h._gsap.y = Ni(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, I = function() {
    if (y) {
      requestAnimationFrame(O);
      var Q = Ni(a.deltaY / 2), st = E(f.v - Q);
      if (h && st !== f.v + f.offset) {
        f.offset = st - f.v;
        var m = Ni((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", h._gsap.y = m + "px", f.cacheID = G.cache, lr();
      }
      return !0;
    }
    f.offset && C(), y = !0;
  }, P, W, H, X, N = function() {
    k(), P.isActive() && P.vars.scrollY > l && (f() > l ? P.progress(1) && f(l) : P.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(A) {
    return vr && A.type === "touchmove" && I() || d > 1.05 && A.type !== "touchstart" || a.isGesturing || A.touches && A.touches.length > 1;
  }, t.onPress = function() {
    y = !1;
    var A = d;
    d = Ni((q.visualViewport && q.visualViewport.scale || 1) / g), P.pause(), A !== d && fs(u, d > 1.01 ? !0 : e ? !1 : "x"), W = _(), H = f(), k(), S = jr;
  }, t.onRelease = t.onGestureStart = function(A, Q) {
    if (f.offset && C(), !Q)
      X.restart(!0);
    else {
      G.cache++;
      var st = T(), m, ot;
      e && (m = _(), ot = m + st * 0.05 * -A.velocityX / 0.227, st *= Uo(_, m, ot, je(u, se)), P.vars.scrollX = w(ot)), m = f(), ot = m + st * 0.05 * -A.velocityY / 0.227, st *= Uo(f, m, ot, je(u, Et)), P.vars.scrollY = E(ot), P.invalidate().duration(st).play(0.01), (vr && P.vars.scrollY >= l || m >= l - 1) && D.to({}, {
        onUpdate: N,
        duration: st
      });
    }
    o && o(A);
  }, t.onWheel = function() {
    P._ts && P.pause(), Ut() - v > 1e3 && (S = 0, v = Ut());
  }, t.onChange = function(A, Q, st, m, ot) {
    if (jr !== S && k(), Q && e && _(w(m[2] === Q ? W + (A.startX - A.x) : _() + Q - m[1])), st) {
      f.offset && C();
      var Zt = ot[2] === st, ze = Zt ? H + A.startY - A.y : f() + st - ot[1], dt = E(ze);
      Zt && ze !== dt && (H += dt - ze), f(dt);
    }
    (st || Q) && lr();
  }, t.onEnable = function() {
    fs(u, e ? !1 : "x"), V.addEventListener("refresh", N), Rt(q, "resize", N), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), b.enable();
  }, t.onDisable = function() {
    fs(u, !0), Dt(q, "resize", N), V.removeEventListener("refresh", N), b.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new xt(t), a.iOS = vr, vr && !f() && f(1), vr && D.ticker.add(Ge), X = a._dc, P = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: yl(f, f(), function() {
        return P.pause();
      })
    },
    onUpdate: lr,
    onComplete: X.vars.onComplete
  }), a;
};
V.sort = function(s) {
  if (Gt(s))
    return U.sort(s);
  var t = q.pageYOffset || 0;
  return V.getAll().forEach(function(r) {
    return r._sortY = r.trigger ? t + r.trigger.getBoundingClientRect().top : r.start + q.innerHeight;
  }), U.sort(s || function(r, e) {
    return (r.vars.refreshPriority || 0) * -1e6 + (r.vars.containerAnimation ? 1e6 : r._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
  });
};
V.observe = function(s) {
  return new xt(s);
};
V.normalizeScroll = function(s) {
  if (typeof s > "u")
    return ee;
  if (s === !0 && ee)
    return ee.enable();
  if (s === !1) {
    ee && ee.kill(), ee = s;
    return;
  }
  var t = s instanceof xt ? s : uc(s);
  return ee && ee.target === t.target && ee.kill(), Kr(t.target) && (ee = t), t;
};
V.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Ms,
  _inputObserver: wl,
  _scrollers: G,
  _proxies: Ke,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Le || Jr("scrollStart"), Le = Ut();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Vt;
    }
  }
};
ll() && D.registerPlugin(V);
var $o = "1.3.19";
function xl(s, t, r) {
  return Math.max(s, Math.min(t, r));
}
function cc(s, t, r) {
  return (1 - r) * s + r * t;
}
function fc(s, t, r, e) {
  return cc(s, t, 1 - Math.exp(-r * e));
}
function hc(s, t) {
  return (s % t + t) % t;
}
var dc = class {
  constructor() {
    R(this, "isRunning", !1);
    R(this, "value", 0);
    R(this, "from", 0);
    R(this, "to", 0);
    R(this, "currentTime", 0);
    // These are instanciated in the fromTo method
    R(this, "lerp");
    R(this, "duration");
    R(this, "easing");
    R(this, "onUpdate");
  }
  /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */
  advance(s) {
    var r;
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const e = xl(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const i = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * i;
    } else this.lerp ? (this.value = fc(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
    t && this.stop(), (r = this.onUpdate) == null || r.call(this, this.value, t);
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
  fromTo(s, t, { lerp: r, duration: e, easing: i, onStart: n, onUpdate: o }) {
    this.from = this.value = s, this.to = t, this.lerp = r, this.duration = e, this.easing = i, this.currentTime = 0, this.isRunning = !0, n == null || n(), this.onUpdate = o;
  }
};
function pc(s, t) {
  let r;
  return function(...e) {
    clearTimeout(r), r = setTimeout(() => {
      r = void 0, s.apply(this, e);
    }, t);
  };
}
var _c = class {
  constructor(s, t, { autoResize: r = !0, debounce: e = 250 } = {}) {
    R(this, "width", 0);
    R(this, "height", 0);
    R(this, "scrollHeight", 0);
    R(this, "scrollWidth", 0);
    // These are instanciated in the constructor as they need information from the options
    R(this, "debouncedResize");
    R(this, "wrapperResizeObserver");
    R(this, "contentResizeObserver");
    R(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    R(this, "onWrapperResize", () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    });
    R(this, "onContentResize", () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    });
    this.wrapper = s, this.content = t, r && (this.debouncedResize = pc(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, Tl = class {
  constructor() {
    R(this, "events", {});
  }
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(s, ...t) {
    var e;
    const r = this.events[s] || [];
    for (let i = 0, n = r.length; i < n; i++)
      (e = r[i]) == null || e.call(r, ...t);
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(s, t) {
    return this.events[s] ? this.events[s].push(t) : this.events[s] = [t], () => {
      var r;
      this.events[s] = (r = this.events[s]) == null ? void 0 : r.filter((e) => t !== e);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(s, t) {
    var r;
    this.events[s] = (r = this.events[s]) == null ? void 0 : r.filter((e) => t !== e);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
}, gc = 100 / 6, mr = { passive: !1 };
function Zo(s, t) {
  return s === 1 ? gc : s === 2 ? t : 1;
}
var mc = class {
  constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    R(this, "touchStart", {
      x: 0,
      y: 0
    });
    R(this, "lastDelta", {
      x: 0,
      y: 0
    });
    R(this, "window", {
      width: 0,
      height: 0
    });
    R(this, "emitter", new Tl());
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    R(this, "onTouchStart", (s) => {
      const { clientX: t, clientY: r } = s.targetTouches ? s.targetTouches[0] : s;
      this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: s
      });
    });
    /** Event handler for 'touchmove' event */
    R(this, "onTouchMove", (s) => {
      const { clientX: t, clientY: r } = s.targetTouches ? s.targetTouches[0] : s, e = -(t - this.touchStart.x) * this.options.touchMultiplier, i = -(r - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
        x: e,
        y: i
      }, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: i,
        event: s
      });
    });
    R(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    R(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: r, deltaMode: e } = s;
      const i = Zo(e, this.window.width), n = Zo(e, this.window.height);
      t *= i, r *= n, t *= this.options.wheelMultiplier, r *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: r, event: s });
    });
    R(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, mr), this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      mr
    ), this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      mr
    ), this.element.addEventListener("touchend", this.onTouchEnd, mr);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, mr), this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      mr
    ), this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      mr
    ), this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      mr
    );
  }
}, jo = (s) => Math.min(1, 1.001 - 2 ** (-10 * s)), vc = class {
  constructor({
    wrapper: s = window,
    content: t = document.documentElement,
    eventsTarget: r = s,
    smoothWheel: e = !0,
    syncTouch: i = !1,
    syncTouchLerp: n = 0.075,
    touchInertiaExponent: o = 1.7,
    duration: a,
    // in seconds
    easing: l,
    lerp: u = 0.1,
    infinite: c = !1,
    orientation: p = "vertical",
    // vertical, horizontal
    gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
    // vertical, horizontal, both
    touchMultiplier: f = 1,
    wheelMultiplier: _ = 1,
    autoResize: d = !0,
    prevent: g,
    virtualScroll: v,
    overscroll: T = !0,
    autoRaf: S = !1,
    anchors: y = !1,
    autoToggle: b = !1,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll: O = !1,
    __experimental__naiveDimensions: w = !1,
    naiveDimensions: E = w,
    stopInertiaOnNavigate: k = !1
  } = {}) {
    R(this, "_isScrolling", !1);
    // true when scroll is animating
    R(this, "_isStopped", !1);
    // true if user should not be able to scroll - enable/disable programmatically
    R(this, "_isLocked", !1);
    // same as isStopped but enabled/disabled when scroll reaches target
    R(this, "_preventNextNativeScrollEvent", !1);
    R(this, "_resetVelocityTimeout", null);
    R(this, "_rafId", null);
    /**
     * Whether or not the user is touching the screen
     */
    R(this, "isTouching");
    /**
     * The time in ms since the lenis instance was created
     */
    R(this, "time", 0);
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
    R(this, "userData", {});
    /**
     * The last velocity of the scroll
     */
    R(this, "lastVelocity", 0);
    /**
     * The current velocity of the scroll
     */
    R(this, "velocity", 0);
    /**
     * The direction of the scroll
     */
    R(this, "direction", 0);
    /**
     * The options passed to the lenis instance
     */
    R(this, "options");
    /**
     * The target scroll value
     */
    R(this, "targetScroll");
    /**
     * The animated scroll value
     */
    R(this, "animatedScroll");
    // These are instanciated here as they don't need information from the options
    R(this, "animate", new dc());
    R(this, "emitter", new Tl());
    // These are instanciated in the constructor as they need information from the options
    R(this, "dimensions");
    // This is not private because it's used in the Snap class
    R(this, "virtualScroll");
    R(this, "onScrollEnd", (s) => {
      s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation();
    });
    R(this, "dispatchScrollendEvent", () => {
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
    R(this, "onTransitionEnd", (s) => {
      s.propertyName.includes("overflow") && this.checkOverflow();
    });
    R(this, "onClick", (s) => {
      const e = s.composedPath().filter(
        (n) => n instanceof HTMLAnchorElement && n.href
      ).map(
        (n) => new URL(n.href)
      ), i = new URL(window.location.href);
      if (this.options.anchors) {
        const n = e.find(
          (o) => i.host === o.host && i.pathname === o.pathname && o.hash
        );
        if (n) {
          const o = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, a = `#${n.hash.split("#")[1]}`;
          this.scrollTo(a, o);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && e.some(
        (o) => i.host === o.host && i.pathname !== o.pathname
      )) {
        this.reset();
        return;
      }
    });
    R(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    R(this, "onVirtualScroll", (s) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1)
        return;
      const { deltaX: t, deltaY: r, event: e } = s;
      if (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: r, event: e }), e.ctrlKey || e.lenisStopPropagation) return;
      const i = e.type.includes("touch"), n = e.type.includes("wheel");
      this.isTouching = e.type === "touchstart" || e.type === "touchmove";
      const o = t === 0 && r === 0;
      if (this.options.syncTouch && i && e.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const l = this.options.gestureOrientation === "vertical" && r === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || l)
        return;
      let u = e.composedPath();
      u = u.slice(0, u.indexOf(this.rootElement));
      const c = this.options.prevent, p = Math.abs(t) >= Math.abs(r) ? "horizontal" : "vertical";
      if (u.find(
        (v) => {
          var T, S, y, b, O;
          return v instanceof HTMLElement && (typeof c == "function" && (c == null ? void 0 : c(v)) || ((T = v.hasAttribute) == null ? void 0 : T.call(v, "data-lenis-prevent")) || p === "vertical" && ((S = v.hasAttribute) == null ? void 0 : S.call(v, "data-lenis-prevent-vertical")) || p === "horizontal" && ((y = v.hasAttribute) == null ? void 0 : y.call(v, "data-lenis-prevent-horizontal")) || i && ((b = v.hasAttribute) == null ? void 0 : b.call(v, "data-lenis-prevent-touch")) || n && ((O = v.hasAttribute) == null ? void 0 : O.call(v, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(v, {
            deltaX: t,
            deltaY: r
          }));
        }
      ))
        return;
      if (this.isStopped || this.isLocked) {
        e.cancelable && e.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && i || this.options.smoothWheel && n)) {
        this.isScrolling = "native", this.animate.stop(), e.lenisStopPropagation = !0;
        return;
      }
      let f = r;
      this.options.gestureOrientation === "both" ? f = Math.abs(r) > Math.abs(t) ? r : t : this.options.gestureOrientation === "horizontal" && (f = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && r > 0 || this.animatedScroll === this.limit && r < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const _ = i && this.options.syncTouch, g = i && e.type === "touchend";
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
    R(this, "onNativeScroll", () => {
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
    R(this, "raf", (s) => {
      const t = s - (this.time || s);
      this.time = s, this.animate.advance(t * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    window.lenisVersion = $o, window.lenis || (window.lenis = {}), window.lenis.version = $o, p === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = jo : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: r,
      smoothWheel: e,
      syncTouch: i,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: l,
      lerp: u,
      infinite: c,
      gestureOrientation: h,
      orientation: p,
      touchMultiplier: f,
      wheelMultiplier: _,
      autoResize: d,
      prevent: g,
      virtualScroll: v,
      overscroll: T,
      autoRaf: S,
      anchors: y,
      autoToggle: b,
      allowNestedScroll: O,
      naiveDimensions: E,
      stopInertiaOnNavigate: k
    }, this.dimensions = new _c(s, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new mc(r, {
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
    immediate: r = !1,
    lock: e = !1,
    programmatic: i = !0,
    // called from outside of the class
    lerp: n = i ? this.options.lerp : void 0,
    duration: o = i ? this.options.duration : void 0,
    easing: a = i ? this.options.easing : void 0,
    onStart: l,
    onComplete: u,
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
        if (i) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else
        h = xl(0, h, this.limit);
      if (h === this.targetScroll) {
        l == null || l(this), u == null || u(this);
        return;
      }
      if (this.userData = p ?? {}, r) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      i || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = jo : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", l == null || l(this);
        },
        onUpdate: (_, d) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), i && (this.targetScroll = _), d || this.emit(), d && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
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
  hasNestedScroll(s, { deltaX: t, deltaY: r }) {
    const e = Date.now();
    s._lenis || (s._lenis = {});
    const i = s._lenis;
    let n, o, a, l, u, c, p, h, f, _;
    if (e - (i.time ?? 0) > 2e3) {
      i.time = Date.now();
      const w = window.getComputedStyle(s);
      if (i.computedStyle = w, n = ["auto", "overlay", "scroll"].includes(
        w.overflowX
      ), o = ["auto", "overlay", "scroll"].includes(
        w.overflowY
      ), u = ["auto"].includes(
        w.overscrollBehaviorX
      ), c = ["auto"].includes(
        w.overscrollBehaviorY
      ), i.hasOverflowX = n, i.hasOverflowY = o, !(n || o)) return !1;
      p = s.scrollWidth, h = s.scrollHeight, f = s.clientWidth, _ = s.clientHeight, a = p > f, l = h > _, i.isScrollableX = a, i.isScrollableY = l, i.scrollWidth = p, i.scrollHeight = h, i.clientWidth = f, i.clientHeight = _, i.hasOverscrollBehaviorX = u, i.hasOverscrollBehaviorY = c;
    } else
      a = i.isScrollableX, l = i.isScrollableY, n = i.hasOverflowX, o = i.hasOverflowY, p = i.scrollWidth, h = i.scrollHeight, f = i.clientWidth, _ = i.clientHeight, u = i.hasOverscrollBehaviorX, c = i.hasOverscrollBehaviorY;
    if (!(n && a || o && l))
      return !1;
    const d = Math.abs(t) >= Math.abs(r) ? "horizontal" : "vertical";
    let g, v, T, S, y, b;
    if (d === "horizontal")
      g = Math.round(s.scrollLeft), v = p - f, T = t, S = n, y = a, b = u;
    else if (d === "vertical")
      g = Math.round(s.scrollTop), v = h - _, T = r, S = o, y = l, b = c;
    else
      return !1;
    return !b && (g >= v || g <= 0) ? !0 : (T > 0 ? g < v : g > 0) && S && y;
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
    return this.options.infinite ? hc(this.animatedScroll, this.limit) : this.animatedScroll;
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
}, bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yc(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Sl = { exports: {} }, hs = { exports: {} }, Ko;
function wc() {
  return Ko || (Ko = 1, function(s) {
    (function(t, r) {
      s.exports ? s.exports = r() : t.EvEmitter = r();
    })(typeof window < "u" ? window : bl, function() {
      function t() {
      }
      let r = t.prototype;
      return r.on = function(e, i) {
        if (!e || !i) return this;
        let n = this._events = this._events || {}, o = n[e] = n[e] || [];
        return o.includes(i) || o.push(i), this;
      }, r.once = function(e, i) {
        if (!e || !i) return this;
        this.on(e, i);
        let n = this._onceEvents = this._onceEvents || {}, o = n[e] = n[e] || {};
        return o[i] = !0, this;
      }, r.off = function(e, i) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        let o = n.indexOf(i);
        return o != -1 && n.splice(o, 1), this;
      }, r.emitEvent = function(e, i) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        n = n.slice(0), i = i || [];
        let o = this._onceEvents && this._onceEvents[e];
        for (let a of n)
          o && o[a] && (this.off(e, a), delete o[a]), a.apply(this, i);
        return this;
      }, r.allOff = function() {
        return delete this._events, delete this._onceEvents, this;
      }, t;
    });
  }(hs)), hs.exports;
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(s) {
  (function(t, r) {
    s.exports ? s.exports = r(t, wc()) : t.imagesLoaded = r(t, t.EvEmitter);
  })(
    typeof window < "u" ? window : bl,
    function(r, e) {
      let i = r.jQuery, n = r.console;
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
        this.elements = o(d), this.options = {}, typeof f == "function" ? _ = f : Object.assign(this.options, f), _ && this.on("always", _), this.getImages(), i && (this.jqDeferred = new i.Deferred()), setTimeout(this.check.bind(this));
      }
      a.prototype = Object.create(e.prototype), a.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      };
      const l = [1, 9, 11];
      a.prototype.addElementImages = function(h) {
        h.nodeName === "IMG" && this.addImage(h), this.options.background === !0 && this.addElementBackgroundImages(h);
        let { nodeType: f } = h;
        if (!f || !l.includes(f)) return;
        let _ = h.querySelectorAll("img");
        for (let d of _)
          this.addImage(d);
        if (typeof this.options.background == "string") {
          let d = h.querySelectorAll(this.options.background);
          for (let g of d)
            this.addElementBackgroundImages(g);
        }
      };
      const u = /url\((['"])?(.*?)\1\)/gi;
      a.prototype.addElementBackgroundImages = function(h) {
        let f = getComputedStyle(h);
        if (!f) return;
        let _ = u.exec(f.backgroundImage);
        for (; _ !== null; ) {
          let d = _ && _[2];
          d && this.addBackground(d, h), _ = u.exec(f.backgroundImage);
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
        h = h || r.jQuery, h && (i = h, i.fn.imagesLoaded = function(f, _) {
          return new a(this, f, _).jqDeferred.promise(i(this));
        });
      }, a.makeJQueryPlugin(), a;
    }
  );
})(Sl);
var xc = Sl.exports;
const Tc = /* @__PURE__ */ yc(xc);
ye.registerPlugin(V);
const Ue = {
  scrollTrigger: {
    start: "center center",
    /** Distance de scroll (hauteur viewport) pour l’anim + le plateau option A. */
    end: "+=420%"
  },
  /**
   * Option A : durée timeline après la fin du zoom (t = 1) où l’état plein cadre est figé ;
   * le scroll continue sans changer l’image, puis le pin se lève. 0 = pas de plateau.
   */
  /** Fraction de timeline après le zoom (segment explicite via delayedCall — fiable). */
  fullViewScrollHold: 0.35,
  pushStrength: 1,
  centerZoomOutStart: 1.2,
  othersZoomInEnd: 1.12,
  coverOverscan: 1.04
};
function ds(s, t = 1) {
  const r = s.offsetWidth, e = s.offsetHeight;
  return r < 1 || e < 1 ? 2.5 : Math.max(window.innerWidth / r, window.innerHeight / e) * t;
}
function bc(s, t, r) {
  const e = t.getBoundingClientRect(), i = e.left + e.width / 2, n = e.top + e.height / 2;
  return s.map((o) => {
    const a = o.getBoundingClientRect(), l = a.left + a.width / 2, u = a.top + a.height / 2, c = l - i, p = u - n;
    return { el: o, x: c * r, y: p * r };
  });
}
function Sc(s) {
  const t = s.querySelectorAll(".gallery__item, .gallery__item-inner");
  return new Promise((r) => {
    if (!t.length) {
      r();
      return;
    }
    Tc(t, { background: !0 }, () => r());
  });
}
function kc(s) {
  const t = Cc(s), r = s.getAttribute("data-csla-options");
  if (!r) return t;
  try {
    const e = JSON.parse(r);
    return Oc(t, e);
  } catch (e) {
    return console.warn("[grid-animated] data-csla-options JSON invalide", e), t;
  }
}
function Oc(s, t) {
  return {
    ...s || {},
    ...t || {},
    scrollTrigger: {
      ...(s == null ? void 0 : s.scrollTrigger) || {},
      ...(t == null ? void 0 : t.scrollTrigger) || {}
    }
  };
}
function Ri(s, t) {
  const r = s.getAttribute(t);
  if (r == null || r === "") return null;
  const e = Number(r);
  return Number.isFinite(e) ? e : null;
}
function Cc(s) {
  const t = {}, r = (o, a) => {
    a != null && a !== "" && (t[o] = a);
  };
  r("preset2RowGap", s.getAttribute("data-csla-preset2-row-gap")), r(
    "preset2ColumnGap",
    s.getAttribute("data-csla-preset2-column-gap")
  ), r(
    "fullViewScrollHold",
    Ri(s, "data-csla-full-view-scroll-hold")
  ), r("pushStrength", Ri(s, "data-csla-push-strength")), r(
    "centerZoomOutStart",
    Ri(s, "data-csla-center-zoom-out-start")
  ), r(
    "othersZoomInEnd",
    Ri(s, "data-csla-others-zoom-in-end")
  ), r("coverOverscan", Ri(s, "data-csla-cover-overscan"));
  const e = {};
  n("start", s.getAttribute("data-csla-scroll-start")), n("end", s.getAttribute("data-csla-scroll-end")), n("endTrigger", s.getAttribute("data-csla-scroll-end-trigger")), n("pinType", s.getAttribute("data-csla-scroll-pin-type"));
  const i = s.getAttribute("data-csla-scroll-use-outro-end");
  return (i === "true" || i === "false") && (e.useOutroEnd = i === "true"), Object.keys(e).length > 0 && (t.scrollTrigger = e), t;
  function n(o, a) {
    a != null && a !== "" && (e[o] = a);
  }
}
function Ec(s, t) {
  var i, n, o, a;
  const r = s.parentElement;
  if (!((n = r == null ? void 0 : (i = r.classList).contains) != null && n.call(i, "gallery-wrap")) || (a = (o = s.parentElement) == null ? void 0 : o.classList) != null && a.contains("gallery-wrap-clip"))
    return;
  const e = document.createElement("div");
  e.className = "gallery-wrap-clip", r.insertBefore(e, s), e.appendChild(s), t.add(() => {
    e.isConnected && s.parentElement === e && e.parentElement && (e.parentElement.insertBefore(s, e), e.remove());
  });
}
function Pc(s, t, r) {
  var P, W, H;
  const e = Object.assign({}, Ue, t), i = Object.assign(
    {},
    Ue.scrollTrigger,
    e.scrollTrigger || {}
  ), n = [...s.querySelectorAll(".gallery__item")], o = s.querySelector(".caption");
  if (n.length < 1) return;
  const a = n.length >= 9 ? 4 : Math.floor(n.length / 2), l = n[a], u = l.querySelector(".gallery__item-inner"), c = n.filter((X, N) => N !== a), p = c.map((X) => X.querySelector(".gallery__item-inner")).filter(Boolean), h = Math.max(
    0.85,
    Number(e.pushStrength ?? Ue.pushStrength) || 1
  ), f = Math.max(
    1,
    Number(e.coverOverscan ?? Ue.coverOverscan) || Ue.coverOverscan
  ), _ = Math.max(
    1,
    Number(e.centerZoomOutStart ?? Ue.centerZoomOutStart) || Ue.centerZoomOutStart
  ), d = Math.max(
    1,
    Number(e.othersZoomInEnd ?? Ue.othersZoomInEnd) || Ue.othersZoomInEnd
  ), g = Math.max(
    0,
    Number(e.fullViewScrollHold ?? Ue.fullViewScrollHold) || 0
  );
  t.preset2RowGap != null && s.style.setProperty(
    "--csla-p2-row-gap",
    String(t.preset2RowGap)
  ), t.preset2ColumnGap != null && s.style.setProperty(
    "--csla-p2-column-gap",
    String(t.preset2ColumnGap)
  ), s.classList.add("gallery--csla2"), l.classList.add("gallery__item--csla2-center");
  const v = s.closest(".gallery-wrap") ?? s.parentElement, T = e.scrollTrigger || {}, S = T.end !== void 0 && T.end !== null || T.endTrigger !== void 0 && T.endTrigger !== null, y = s.closest(".csla2-section"), b = (H = (W = (P = y == null ? void 0 : y.nextElementSibling) == null ? void 0 : P.classList) == null ? void 0 : W.contains) != null && H.call(
    W,
    "csla2-section--outro"
  ) ? y.nextElementSibling : null, O = !!b && T.useOutroEnd === !0 && !S, w = {
    trigger: s,
    start: i.start,
    pin: v,
    scrub: !0,
    invalidateOnRefresh: !0,
    anticipatePin: 1,
    onRefresh: () => I()
  };
  O ? (w.endTrigger = b, w.end = "top bottom") : (w.end = i.end, i.endTrigger != null && (w.endTrigger = i.endTrigger));
  const E = s.closest(
    '[data-component="grid-animated"]'
  );
  i.pinType != null ? w.pinType = i.pinType : (E == null ? void 0 : E.getAttribute("data-csla-lenis")) === "true" && (w.pinType = "transform"), r.add(() => {
    s.classList.remove("gallery--csla2"), l.classList.remove("gallery__item--csla2-center"), ye.set(l, { clearProps: "transform" }), u && ye.set(u, { clearProps: "transform" }), c.length && ye.set(c, { clearProps: "transform" }), p.length && ye.set(p, { clearProps: "transform" }), o && ye.set(o, { clearProps: "transform,opacity,visibility" });
  });
  const k = ye.timeline({
    scrollTrigger: w
  });
  let C = /* @__PURE__ */ new Map();
  const I = () => {
    const X = ds(l, f), N = Math.max(0, (X - 1) * h);
    C = new Map(
      bc(c, l, N).map((A) => [
        A.el,
        { x: A.x, y: A.y }
      ])
    );
  };
  c.length && k.to(
    c,
    {
      x: (X, N) => {
        var A;
        return ((A = C.get(N)) == null ? void 0 : A.x) ?? 0;
      },
      y: (X, N) => {
        var A;
        return ((A = C.get(N)) == null ? void 0 : A.y) ?? 0;
      },
      scale: () => ds(l, f),
      duration: 1,
      ease: "none",
      force3D: !0
    },
    0
  ), k.fromTo(
    l,
    { scale: 1 },
    {
      scale: () => ds(l, f),
      duration: 1,
      ease: "none",
      force3D: !0
    },
    0
  ), u && k.fromTo(
    u,
    { scale: _, transformOrigin: "50% 50%" },
    { scale: 1, duration: 1, ease: "none", force3D: !0 },
    0
  ), p.length && k.fromTo(
    p,
    { scale: 1, transformOrigin: "50% 50%" },
    { scale: d, duration: 1, ease: "none", force3D: !0 },
    0
  ), o && k.fromTo(
    o,
    { autoAlpha: 0, y: 28 },
    { autoAlpha: 1, y: 0, duration: 0.72, ease: "none" },
    0.18
  ), g > 0 && k.add(ye.delayedCall(g, () => {
  }), 1), I();
}
function Mc(s) {
  s._scrollBasedLayout2Cleanup && s._scrollBasedLayout2Cleanup();
  let t = !1, r = null, e = null, i = null;
  const n = () => {
    t = !0, r == null || r.revert(), r = null, i && (ye.ticker.remove(i), i = null), e == null || e.destroy(), e = null, s.classList.remove("csla2-js", "csla2-loading"), V.refresh();
  };
  return s._scrollBasedLayout2Cleanup = n, s.classList.add("csla2-js", "csla2-loading"), Sc(s).then(() => {
    t || (s.classList.remove("csla2-loading"), r = ye.context((o) => {
      s.getAttribute("data-csla-lenis") === "true" && (e = new vc({
        lerp: 0.1,
        smoothWheel: !0
      }), e.on("scroll", () => V.update()), i = (l) => e.raf(l * 1e3), ye.ticker.add(i), ye.ticker.lagSmoothing(0)), s.querySelectorAll(".gallery").forEach((l) => {
        if (l.querySelector(".gallery__item")) {
          if (Ec(l, o), !l.classList.contains("gallery--grid")) {
            console.warn(
              "[grid-animated] .gallery attendu avec .gallery--grid (preset grille 3×3)."
            );
            return;
          }
          try {
            Pc(
              l,
              kc(l),
              o
            );
          } catch (u) {
            console.error("[grid-animated] ScrollTrigger", u);
          }
        }
      });
    }, s), V.refresh());
  }), n;
}
if (typeof window < "u") {
  const s = () => {
    document.querySelectorAll('[data-component="grid-animated"]').forEach((t) => Mc(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
export {
  Mc as initScrollBasedLayout2
};

function Tt(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Xi(a, t) {
  a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var at = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Qt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, oi, H, N, ht = 1e8, L = 1 / ht, Ge = Math.PI * 2, Wr = Ge / 4, Gr = 0, Wi = Math.sqrt, Hr = Math.cos, $r = Math.sin, G = function(t) {
  return typeof t == "string";
}, U = function(t) {
  return typeof t == "function";
}, bt = function(t) {
  return typeof t == "number";
}, ai = function(t) {
  return typeof t > "u";
}, gt = function(t) {
  return typeof t == "object";
}, Q = function(t) {
  return t !== !1;
}, ui = function() {
  return typeof window < "u";
}, be = function(t) {
  return U(t) || G(t);
}, Gi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, j = Array.isArray, jr = /random\([^)]+\)/g, Kr = /,\s*/g, Oi = /(?:-?\.?\d|\.)+/gi, Hi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ne = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $i = /[+-]=-?[.\d]+/, Qr = /[^,'"\[\]\s]+/gi, Zr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, B, dt, He, fi, ut = {}, ke = {}, ji, Ki = function(t) {
  return (ke = Zt(t, ut)) && et;
}, li = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, fe = function(t, e) {
  return !e && console.warn(t);
}, Qi = function(t, e) {
  return t && (ut[t] = e) && ke && (ke[t] = e) || ut;
}, le = function() {
  return 0;
}, Jr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Oe = {
  suppressEvents: !0,
  kill: !1
}, tn = {
  suppressEvents: !0
}, hi = {}, Mt = [], $e = {}, Zi, rt = {}, qe = {}, Pi = 30, Pe = [], _i = "", ci = function(t) {
  var e = t[0], i, r;
  if (gt(e) || U(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = Pe.length; r-- && !Pe[r].targetTest(e); )
      ;
    i = Pe[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new wr(t[r], i))) || t.splice(r, 1);
  return t;
}, Bt = function(t) {
  return t._gsap || ci(_t(t))[0]._gsap;
}, Ji = function(t, e, i) {
  return (i = t[e]) && U(i) ? t[e]() : ai(i) && t.getAttribute && t.getAttribute(e) || i;
}, Z = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Y = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, $t = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, en = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Ae = function() {
  var t = Mt.length, e = Mt.slice(0), i, r;
  for ($e = {}, Mt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, di = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, tr = function(t, e, i, r) {
  Mt.length && !H && Ae(), t.render(e, i, !!(H && e < 0 && di(t))), Mt.length && !H && Ae();
}, er = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Qr).length < 2 ? e : G(t) ? t.trim() : t;
}, ir = function(t) {
  return t;
}, ft = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, rn = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, Zt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Ci = function a(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = gt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Me = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, oe = function(t) {
  var e = t.parent || B, i = t.keyframes ? rn(j(t.keyframes)) : ft;
  if (Q(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, nn = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, rr = function(t, e, i, r, n) {
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, Fe = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Et = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Vt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, sn = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, je = function(t, e, i, r) {
  return t._startAt && (H ? t._startAt.revert(Oe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, on = function a(t) {
  return !t || t._ts && a(t.parent);
}, ki = function(t) {
  return t._repeat ? Jt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Jt = function(t, e) {
  var i = Math.floor(t = q(t / e));
  return t && i === t ? i - 1 : i;
}, De = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Le = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || L) || 0));
}, Ie = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Le(t), i._dirty || Vt(i, t)), t;
}, nr = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = De(t.rawTime(), e), (!e._dur || me(0, e.totalDuration(), i) - e._tTime > L) && e.render(i, !0)), Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -L;
  }
}, pt = function(t, e, i, r) {
  return e.parent && Et(e), e._start = q((bt(i) ? i : i || t !== B ? lt(t, i, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), rr(t, e, "_first", "_last", t._sort ? "_start" : 0), Ke(e) || (t._recent = e), r || nr(t, e), t._ts < 0 && Ie(t, t._tTime), t;
}, sr = function(t, e) {
  return (ut.ScrollTrigger || li("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t);
}, or = function(t, e, i, r, n) {
  if (mi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !H && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Zi !== nt.frame)
    return Mt.push(t), t._lazy = [n, r], 1;
}, an = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, Ke = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, un = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && an(t) && !(!t._initted && Ke(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ke(t)) ? 0 : 1, o = t._rDelay, u = 0, f, l, _;
  if (o && t._repeat && (u = me(0, t._tDur, e), l = Jt(u, o), t._yoyo && l & 1 && (s = 1 - s), l !== Jt(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || H || r || t._zTime === L || !e && t._zTime) {
    if (!t._initted && or(t, e, r, i, u))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? L : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && je(t, e, i, !0), t._onUpdate && !i && st(t, "onUpdate"), u && t._repeat && !i && t.parent && st(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Et(t, 1), !i && !H && (st(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, fn = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, te = function(t, e, i, r) {
  var n = t._repeat, s = q(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, o > 0 && !r && Ie(t, t._tTime = t._tDur * o), t.parent && Le(t), i || Vt(t.parent, t), t;
}, Ai = function(t) {
  return t instanceof K ? Vt(t) : te(t, t._dur);
}, ln = {
  _start: 0,
  endTime: le,
  totalDuration: le
}, lt = function a(t, e, i) {
  var r = t.labels, n = t._recent || ln, s = t.duration() >= ht ? n.endTime(!1) : t._dur, o, u, f;
  return G(e) && (isNaN(e) || e in r) ? (u = e.charAt(0), f = e.substr(-1) === "%", o = e.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s), r[e]) : (u = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), f && i && (u = u / 100 * (j(i) ? i[0] : i).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), i) + u : s + u)) : e == null ? s : +e;
}, ae = function(t, e, i) {
  var r = bt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, u;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (o = s, u = i; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = Q(u.vars.inherit) && u.parent;
    s.immediateRender = Q(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new W(e[0], s, e[n + 1]);
}, Ft = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, me = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, $ = function(t, e) {
  return !G(t) || !(e = Zr.exec(t)) ? "" : e[1];
}, hn = function(t, e, i) {
  return Ft(i, function(r) {
    return me(t, e, r);
  });
}, Qe = [].slice, ar = function(t, e) {
  return t && gt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && gt(t[0])) && !t.nodeType && t !== dt;
}, _n = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return G(r) && !e || ar(r, 1) ? (n = i).push.apply(n, _t(r)) : i.push(r);
  }) || i;
}, _t = function(t, e, i) {
  return N && !e && N.selector ? N.selector(t) : G(t) && !i && (He || !ee()) ? Qe.call((e || fi).querySelectorAll(t), 0) : j(t) ? _n(t, i) : ar(t) ? Qe.call(t, 0) : t ? [t] : [];
}, Ze = function(t) {
  return t = _t(t)[0] || fe("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return _t(e, i.querySelectorAll ? i : i === t ? fe("Invalid scope") || fi.createElement("div") : t);
  };
}, ur = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, fr = function(t) {
  if (U(t))
    return t;
  var e = gt(t) ? t : {
    each: t
  }, i = Ut(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, u = isNaN(r) || o, f = e.axis, l = r, _ = r;
  return G(r) ? l = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && u && (l = r[0], _ = r[1]), function(c, d, p) {
    var h = (p || e).length, m = s[h], y, x, T, w, g, b, S, O, v;
    if (!m) {
      if (v = e.grid === "auto" ? 0 : (e.grid || [1, ht])[1], !v) {
        for (S = -ht; S < (S = p[v++].getBoundingClientRect().left) && v < h; )
          ;
        v < h && v--;
      }
      for (m = s[h] = [], y = u ? Math.min(v, h) * l - 0.5 : r % v, x = v === ht ? 0 : u ? h * _ / v - 0.5 : r / v | 0, S = 0, O = ht, b = 0; b < h; b++)
        T = b % v - y, w = x - (b / v | 0), m[b] = g = f ? Math.abs(f === "y" ? w : T) : Wi(T * T + w * w), g > S && (S = g), g < O && (O = g);
      r === "random" && ur(m), m.max = S - O, m.min = O, m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (v > h ? h - 1 : f ? f === "y" ? h / v : v : Math.max(v, h / v)) || 0) * (r === "edges" ? -1 : 1), m.b = h < 0 ? n - h : n, m.u = $(e.amount || e.each) || 0, i = i && h < 0 ? xr(i) : i;
    }
    return h = (m[c] - m.min) / m.max || 0, q(m.b + (i ? i(h) : h) * m.v) + m.u;
  };
}, Je = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = q(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (bt(i) ? 0 : $(i));
  };
}, lr = function(t, e) {
  var i = j(t), r, n;
  return !i && gt(t) && (r = i = t.radius || ht, t.values ? (t = _t(t.values), (n = !bt(t[0])) && (r *= r)) : t = Je(t.increment)), Ft(e, i ? U(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = ht, l = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - o, d = t[_].y - u, c = c * c + d * d) : c = Math.abs(t[_] - o), c < f && (f = c, l = _);
    return l = !r || f <= r ? t[l] : s, n || l === s || bt(s) ? l : l + $(s);
  } : Je(t));
}, hr = function(t, e, i, r) {
  return Ft(j(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return j(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, cn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, dn = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || $(i));
  };
}, pn = function(t, e, i) {
  return cr(t, e, 0, 1, i);
}, _r = function(t, e, i) {
  return Ft(i, function(r) {
    return t[~~e(r)];
  });
}, mn = function a(t, e, i) {
  var r = e - t;
  return j(t) ? _r(t, a(0, t.length), e) : Ft(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, gn = function a(t, e, i) {
  var r = e - t, n = r * 2;
  return j(t) ? _r(t, a(0, t.length - 1), e) : Ft(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, he = function(t) {
  return t.replace(jr, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Kr);
    return hr(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, cr = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Ft(n, function(u) {
    return i + ((u - t) / s * o || 0);
  });
}, yn = function a(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = G(t), o = {}, u, f, l, _, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (j(t) && !j(e)) {
      for (l = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
        l.push(a(t[f - 1], t[f]));
      _--, n = function(p) {
        p *= _;
        var h = Math.min(c, ~~p);
        return l[h](p - h);
      }, i = e;
    } else r || (t = Zt(j(t) ? [] : {}, t));
    if (!l) {
      for (u in e)
        pi.call(o, t, u, "get", e[u]);
      n = function(p) {
        return xi(p, o) || (s ? t.p : t);
      };
    }
  }
  return Ft(i, n);
}, Mi = function(t, e, i) {
  var r = t.labels, n = ht, s, o, u;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (u = s, n = o);
  return u;
}, st = function(t, e, i) {
  var r = t.vars, n = r[e], s = N, o = t._ctx, u, f, l;
  if (n)
    return u = r[e + "Params"], f = r.callbackScope || t, i && Mt.length && Ae(), o && (N = o), l = u ? n.apply(f, u) : n.call(f), N = s, l;
}, ne = function(t) {
  return Et(t), t.scrollTrigger && t.scrollTrigger.kill(!!H), t.progress() < 1 && st(t, "onInterrupt"), t;
}, Ht, dr = [], pr = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ui() || t.headless) {
      var e = t.name, i = U(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: le,
        render: xi,
        add: pi,
        kill: zn,
        modifier: Rn,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: yi,
        aliases: {},
        register: 0
      };
      if (ee(), t !== r) {
        if (rt[e])
          return;
        ft(r, ft(Me(t, n), s)), Zt(r.prototype, Zt(n, Me(t, s))), rt[r.prop = e] = r, t.targetTest && (Pe.push(r), hi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Qi(e, r), t.register && t.register(et, r, J);
    } else
      dr.push(t);
}, F = 255, se = {
  aqua: [0, F, F],
  lime: [0, F, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, F],
  navy: [0, 0, 128],
  white: [F, F, F],
  olive: [128, 128, 0],
  yellow: [F, F, 0],
  orange: [F, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [F, 0, 0],
  pink: [F, 192, 203],
  cyan: [0, F, F],
  transparent: [F, F, F, 0]
}, Be = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * F + 0.5 | 0;
}, mr = function(t, e, i) {
  var r = t ? bt(t) ? [t >> 16, t >> 8 & F, t & F] : 0 : se.black, n, s, o, u, f, l, _, c, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), se[t])
      r = se[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & F, r & F, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & F, t & F];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(Oi), !e)
        u = +r[0] % 360 / 360, f = +r[1] / 100, l = +r[2] / 100, s = l <= 0.5 ? l * (f + 1) : l + f - l * f, n = l * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Be(u + 1 / 3, n, s), r[1] = Be(u, n, s), r[2] = Be(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Hi), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(Oi) || se.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / F, s = r[1] / F, o = r[2] / F, _ = Math.max(n, s, o), c = Math.min(n, s, o), l = (_ + c) / 2, _ === c ? u = f = 0 : (d = _ - c, f = l > 0.5 ? d / (2 - _ - c) : d / (_ + c), u = _ === n ? (s - o) / d + (s < o ? 6 : 0) : _ === s ? (o - n) / d + 2 : (n - s) / d + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, gr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(Dt).forEach(function(n) {
    var s = n.match(Gt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Di = function(t, e, i) {
  var r = "", n = (t + r).match(Dt), s = e ? "hsla(" : "rgba(", o = 0, u, f, l, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = mr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (l = gr(t), u = i.c, u.join(r) !== l.c.join(r)))
    for (f = t.replace(Dt, "1").split(Gt), _ = f.length - 1; o < _; o++)
      r += f[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(Dt), _ = f.length - 1; o < _; o++)
      r += f[o] + n[o];
  return r + f[_];
}, Dt = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in se)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), xn = /hsl[a]?\(/, yr = function(t) {
  var e = t.join(" "), i;
  if (Dt.lastIndex = 0, Dt.test(e))
    return i = xn.test(e), t[1] = Di(t[1], i), t[0] = Di(t[0], i, gr(t[1])), !0;
}, _e, nt = function() {
  var a = Date.now, t = 500, e = 33, i = a(), r = i, n = 1e3 / 240, s = n, o = [], u, f, l, _, c, d, p = function h(m) {
    var y = a() - r, x = m === !0, T, w, g, b;
    if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, T = g - s, (T > 0 || x) && (b = ++_.frame, c = g - _.time * 1e3, _.time = g = g / 1e3, s += T + (T >= n ? 4 : n - T), w = 1), x || (u = f(h)), w)
      for (d = 0; d < o.length; d++)
        o[d](g, c, b, m);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return c / (1e3 / (m || 60));
    },
    wake: function() {
      ji && (!He && ui() && (dt = He = window, fi = dt.document || {}, ut.gsap = et, (dt.gsapVersions || (dt.gsapVersions = [])).push(et.version), Ki(ke || dt.GreenSockGlobals || !dt.gsap && dt || {}), dr.forEach(pr)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), f = l || function(m) {
        return setTimeout(m, s - _.time * 1e3 + 1 | 0);
      }, _e = 1, p(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(u), _e = 0, f = le;
    },
    lagSmoothing: function(m, y) {
      t = m || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = _.time * 1e3 + n;
    },
    add: function(m, y, x) {
      var T = y ? function(w, g, b, S) {
        m(w, g, b, S), _.remove(T);
      } : m;
      return _.remove(m), o[x ? "unshift" : "push"](T), ee(), T;
    },
    remove: function(m, y) {
      ~(y = o.indexOf(m)) && o.splice(y, 1) && d >= y && d--;
    },
    _listeners: o
  }, _;
}(), ee = function() {
  return !_e && nt.wake();
}, M = {}, vn = /^[\d.\-M][\d.\-,\s]/, Tn = /["']/g, wn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, u, f; n < s; n++)
    u = i[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, o), e[r] = isNaN(f) ? f.replace(Tn, "").trim() : +f, r = u.substr(o + 1).trim();
  return e;
}, bn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Sn = function(t) {
  var e = (t + "").split("("), i = M[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [wn(e[1])] : bn(t).split(",").map(er)) : M._CE && vn.test(t) ? M._CE("", t) : i;
}, xr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, vr = function a(t, e) {
  for (var i = t._first, r; i; )
    i instanceof K ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, Ut = function(t, e) {
  return t && (U(t) ? t : M[t] || Sn(t)) || e;
}, Xt = function(t, e, i, r) {
  i === void 0 && (i = function(u) {
    return 1 - e(1 - u);
  }), r === void 0 && (r = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return Z(t, function(o) {
    M[o] = ut[o] = n, M[s = o.toLowerCase()] = i;
    for (var u in n)
      M[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = M[o + "." + u] = n[u];
  }), n;
}, Tr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ve = function a(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ge * (Math.asin(1 / r) || 0), o = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * $r((l - s) * n) + 1;
  }, u = t === "out" ? o : t === "in" ? function(f) {
    return 1 - o(1 - f);
  } : Tr(o);
  return n = Ge / n, u.config = function(f, l) {
    return a(t, f, l);
  }, u;
}, Ue = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : Tr(i);
  return r.config = function(n) {
    return a(t, n);
  }, r;
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  Xt(a + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
M.Linear.easeNone = M.none = M.Linear.easeIn;
Xt("Elastic", Ve("in"), Ve("out"), Ve());
(function(a, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? a * o * o : o < i ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Xt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Xt("Expo", function(a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Xt("Circ", function(a) {
  return -(Wi(1 - a * a) - 1);
});
Xt("Sine", function(a) {
  return a === 1 ? 1 : -Hr(a * Wr) + 1;
});
Xt("Back", Ue("in"), Ue("out"), Ue());
M.SteppedEase = M.steps = ut.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - L;
    return function(o) {
      return ((r * me(0, s, o) | 0) + n) * i;
    };
  }
};
Qt.ease = M["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return _i += a + "," + a + "Params,";
});
var wr = function(t, e) {
  this.id = Gr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ji, this.set = e ? e.getSetter : yi;
}, ce = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, te(this, +e.duration, 1, 1), this.data = e.data, N && (this._ctx = N, N.data.push(this)), _e || nt.wake();
  }
  var t = a.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, te(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (ee(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ie(this, i), !n._dp || n.parent || nr(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && pt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === L || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), tr(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ki(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ki(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Jt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -L ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? De(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -L ? 0 : this._rts, this.totalTime(me(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Le(this), sn(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ee(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== L && (this._tTime -= L)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = q(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && pt(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? De(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = tn);
    var r = H;
    return H = i, di(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), H = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ai(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Ai(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(lt(this, i), Q(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Q(r)), this._dur || (this._zTime = -L), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -L : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -L, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - L);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(s) {
      var o = U(i) ? i : ir, u = function() {
        var l = r.then;
        r.then = null, n && n(), U(o) && (o = o(r)) && (o.then || o === r) && (r.then = l), s(o), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    ne(this);
  }, a;
}();
ft(ce.prototype, {
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
  _zTime: -L,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(a) {
  Xi(t, a);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = a.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Q(i.sortChildren), B && pt(i.parent || B, Tt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && sr(Tt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return ae(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return ae(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, o) {
    return ae(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, oe(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new W(r, n, lt(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return pt(this, W.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, o, u, f, l) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = f, s.onCompleteParams = l, s.parent = this, new W(r, s, lt(this, u)), this;
  }, e.staggerFrom = function(r, n, s, o, u, f, l) {
    return s.runBackwards = 1, oe(s).immediateRender = Q(s.immediateRender), this.staggerTo(r, n, s, o, u, f, l);
  }, e.staggerFromTo = function(r, n, s, o, u, f, l, _) {
    return o.startAt = s, oe(o).immediateRender = Q(o.immediateRender), this.staggerTo(r, n, o, u, f, l, _);
  }, e.render = function(r, n, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = r <= 0 ? 0 : q(r), _ = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, p, h, m, y, x, T, w, g, b, S;
    if (this !== B && l > u && r >= 0 && (l = u), l !== this._tTime || s || _) {
      if (o !== this._time && f && (l += this._time - o, r += this._time - o), c = l, w = this._start, T = this._ts, y = !T, _ && (f || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (b = this._yoyo, m = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (c = q(l % m), l === u ? (h = this._repeat, c = f) : (g = q(l / m), h = ~~g, h && h === g && (c = f, h--), c > f && (c = f)), g = Jt(this._tTime, m), !o && this._tTime && g !== h && this._tTime - g * m - this._dur <= 0 && (g = h), b && h & 1 && (c = f - c, S = 1), h !== g && !this._lock) {
          var O = b && g & 1, v = O === (b && h & 1);
          if (h < g && (O = !O), o = O ? 0 : l % f ? f : l, this._lock = 1, this.render(o || (S ? 0 : q(h * m)), n, !f)._lock = 0, this._tTime = l, !n && this.parent && st(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, g = h), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, v && (this._lock = 2, o = O ? f : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          vr(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = fn(this, q(o), q(c)), x && (l -= c - (c = x._start))), this._tTime = l, this._time = c, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && l && f && !n && !g && (st(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= o && r >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || c >= d._start) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !y) {
              x = 0, p && (l += this._zTime = -L);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var A = r < 0 ? r : c; d; ) {
          if (p = d._prev, (d._act || A <= d._end) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (A - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (A - d._start) * d._ts, n, s || H && di(d)), c !== this._time || !this._ts && !y) {
              x = 0, p && (l += this._zTime = A ? -L : L);
              break;
            }
          }
          d = p;
        }
      }
      if (x && !n && (this.pause(), x.render(c >= o ? 0 : -L)._zTime = c >= o ? 1 : -1, this._ts))
        return this._start = w, Le(this), this.render(r, n, s);
      this._onUpdate && !n && st(this, "onUpdate", !0), (l === u && this._tTime >= this.totalDuration() || !l && o) && (w === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (l === u && this._ts > 0 || !l && this._ts < 0) && Et(this, 1), !n && !(r < 0 && !o) && (l || o || !u) && (st(this, l === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (bt(n) || (n = lt(this, n, r)), !(r instanceof ce)) {
      if (j(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (G(r))
        return this.addLabel(r, n);
      if (U(r))
        r = W.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? pt(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -ht);
    for (var u = [], f = this._first; f; )
      f._start >= o && (f instanceof W ? n && u.push(f) : (s && u.push(f), r && u.push.apply(u, f.getChildren(!0, n, s)))), f = f._next;
    return u;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return G(r) ? this.removeLabel(r) : U(r) ? this.killTweensOf(r) : (r.parent === this && Fe(this, r), r === this._recent && (this._recent = this._last), Vt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(nt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), a.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = lt(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = W.delayedCall(0, n || le, s);
    return o.data = "isPause", this._hasPause = 1, pt(this, o, lt(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = lt(this, r); n; )
      n._start === r && n.data === "isPause" && Et(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), u = o.length; u--; )
      Ct !== o[u] && o[u].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = _t(r), u = this._first, f = bt(n), l; u; )
      u instanceof W ? en(u._targets, o) && (f ? (!Ct || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (l = u.getTweensOf(o, n)).length && s.push.apply(s, l), u = u._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = lt(s, r), u = n, f = u.startAt, l = u.onStart, _ = u.onStartParams, c = u.immediateRender, d, p = W.to(s, ft({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || L,
      onStart: function() {
        if (s.pause(), !d) {
          var m = n.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          p._dur !== m && te(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        l && l.apply(p, _ || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, ft({
      startAt: {
        time: lt(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Mi(this, lt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Mi(this, lt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + L);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var o = this._first, u = this.labels, f;
    for (r = q(r); o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (f in u)
        u[f] >= s && (u[f] += r);
    return Vt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return a.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Vt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, u = ht, f, l, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; o; )
        f = o._prev, o._dirty && o.totalDuration(), l = o._start, l > u && s._sort && o._ts && !s._lock ? (s._lock = 1, pt(s, o, l - o._delay, 1)._lock = 0) : u = l, l < 0 && o._ts && (n -= l, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += q(l / s._ts), s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = f;
      te(s, s === B && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (B._ts && (tr(B, De(r, B)), Zi = nt.frame), nt.frame >= Pi) {
      Pi += at.autoSleep || 120;
      var n = B._first;
      if ((!n || !n._ts) && at.autoSleep && nt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || nt.sleep();
      }
    }
  }, t;
}(ce);
ft(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var On = function(t, e, i, r, n, s, o) {
  var u = new J(this._pt, t, e, 0, 1, kr, null, n), f = 0, l = 0, _, c, d, p, h, m, y, x;
  for (u.b = i, u.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = he(r)), s && (x = [i, r], s(x, t, e), i = x[0], r = x[1]), c = i.match(Ne) || []; _ = Ne.exec(r); )
    p = _[0], h = r.substring(f, _.index), d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1), p !== c[l++] && (m = parseFloat(c[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || l === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? $t(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, f = Ne.lastIndex);
  return u.c = f < r.length ? r.substring(f, r.length) : "", u.fp = o, ($i.test(r) || y) && (u.e = 0), this._pt = u, u;
}, pi = function(t, e, i, r, n, s, o, u, f, l) {
  U(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : U(_) ? f ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : _, d = U(_) ? f ? Mn : Pr : gi, p;
  if (G(r) && (~r.indexOf("random(") && (r = he(r)), r.charAt(1) === "=" && (p = $t(c, r) + ($(c) || 0), (p || p === 0) && (r = p))), !l || c !== r || ti)
    return !isNaN(c * r) && r !== "" ? (p = new J(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? En : Cr, 0, d), f && (p.fp = f), o && p.modifier(o, this, t), this._pt = p) : (!_ && !(e in t) && li(e, r), On.call(this, t, e, c, r, d, u || at.stringFilter, f));
}, Pn = function(t, e, i, r, n) {
  if (U(t) && (t = ue(t, n, e, i, r)), !gt(t) || t.style && t.nodeType || j(t) || Gi(t))
    return G(t) ? ue(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = ue(t[o], n, e, i, r);
  return s;
}, br = function(t, e, i, r, n, s) {
  var o, u, f, l;
  if (rt[t] && (o = new rt[t]()).init(n, o.rawVars ? e[t] : Pn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = u = new J(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== Ht))
    for (f = i._ptLookup[i._targets.indexOf(n)], l = o._props.length; l--; )
      f[o._props[l]] = u;
  return o;
}, Ct, ti, mi = function a(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, u = r.lazy, f = r.onUpdate, l = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, d = r.autoRevert, p = t._dur, h = t._startAt, m = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : m, T = t._overwrite === "auto" && !oi, w = t.timeline, g, b, S, O, v, A, z, E, R, X, P, C, k;
  if (w && (!c || !n) && (n = "none"), t._ease = Ut(n, Qt.ease), t._yEase = _ ? xr(Ut(_ === !0 ? n : _, Qt.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !w && !!r.runBackwards, !w || c && !r.stagger) {
    if (E = m[0] ? Bt(m[0]).harness : 0, C = E && r[E.prop], g = Me(r, hi), h && (h._zTime < 0 && h.progress(1), e < 0 && l && o && !d ? h.render(-1, !0) : h.revert(l && p ? Oe : Jr), h._lazy = 0), s) {
      if (Et(t._startAt = W.set(m, ft({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !h && Q(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return st(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (H || !o && !d) && t._startAt.revert(Oe), o && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && p && !h) {
      if (e && (o = !1), S = ft({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && Q(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), C && (S[E.prop] = C), Et(t._startAt = W.set(m, S)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (H ? t._startAt.revert(Oe) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, L, L);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = p && Q(u) || u && !p, b = 0; b < m.length; b++) {
      if (v = m[b], z = v._gsap || ci(m)[b]._gsap, t._ptLookup[b] = X = {}, $e[z.id] && Mt.length && Ae(), P = x === m ? b : x.indexOf(v), E && (R = new E()).init(v, C || g, t, P, x) !== !1 && (t._pt = O = new J(t._pt, v, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(D) {
        X[D] = O;
      }), R.priority && (A = 1)), !E || C)
        for (S in g)
          rt[S] && (R = br(S, g, t, P, v, x)) ? R.priority && (A = 1) : X[S] = O = pi.call(t, v, S, "get", g[S], P, x, 0, r.stringFilter);
      t._op && t._op[b] && t.kill(v, t._op[b]), T && t._pt && (Ct = t, B.killTweensOf(v, X, t.globalTime(e)), k = !t.parent, Ct = 0), t._pt && u && ($e[z.id] = 1);
    }
    A && Ar(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !k, c && e <= 0 && w.render(ht, !0, !0);
}, Cn = function(t, e, i, r, n, s, o, u) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, _, c, d;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (l = c[d][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return ti = 1, t.vars[e] = "+=0", mi(t, o), ti = 0, u ? fe(e + " not eligible for reset") : 1;
      f.push(l);
    }
  for (d = f.length; d--; )
    _ = f[d], l = _._pt || _, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, _.e && (_.e = Y(i) + $(_.e)), _.b && (_.b = l.s + $(_.b));
}, kn = function(t, e) {
  var i = t[0] ? Bt(t[0]).harness : 0, r = i && i.aliases, n, s, o, u;
  if (!r)
    return e;
  n = Zt({}, e);
  for (s in r)
    if (s in n)
      for (u = r[s].split(","), o = u.length; o--; )
        n[u[o]] = n[s];
  return n;
}, An = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, o;
  if (j(e))
    o = i[t] || (i[t] = []), e.forEach(function(u, f) {
      return o.push({
        t: f / (e.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in e)
      o = i[s] || (i[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ue = function(t, e, i, r, n) {
  return U(t) ? t.call(e, i, r, n) : G(t) && ~t.indexOf("random(") ? he(t) : t;
}, Sr = _i + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Or = {};
Z(Sr + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Or[a] = 1;
});
var W = /* @__PURE__ */ function(a) {
  Xi(t, a);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = a.call(this, s ? r : oe(r)) || this;
    var u = o.vars, f = u.duration, l = u.delay, _ = u.immediateRender, c = u.stagger, d = u.overwrite, p = u.keyframes, h = u.defaults, m = u.scrollTrigger, y = u.yoyoEase, x = r.parent || B, T = (j(i) || Gi(i) ? bt(i[0]) : "length" in r) ? [i] : _t(i), w, g, b, S, O, v, A, z;
    if (o._targets = T.length ? ci(T) : fe("GSAP target " + i + " not found. https://gsap.com", !at.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || c || be(f) || be(l)) {
      if (r = o.vars, w = o.timeline = new K({
        data: "nested",
        defaults: h || {},
        targets: x && x.data === "nested" ? x.vars.targets : T
      }), w.kill(), w.parent = w._dp = Tt(o), w._start = 0, c || be(f) || be(l)) {
        if (S = T.length, A = c && fr(c), gt(c))
          for (O in c)
            ~Sr.indexOf(O) && (z || (z = {}), z[O] = c[O]);
        for (g = 0; g < S; g++)
          b = Me(r, Or), b.stagger = 0, y && (b.yoyoEase = y), z && Zt(b, z), v = T[g], b.duration = +ue(f, Tt(o), g, v, T), b.delay = (+ue(l, Tt(o), g, v, T) || 0) - o._delay, !c && S === 1 && b.delay && (o._delay = l = b.delay, o._start += l, b.delay = 0), w.to(v, b, A ? A(g, v, T) : 0), w._ease = M.none;
        w.duration() ? f = l = 0 : o.timeline = 0;
      } else if (p) {
        oe(ft(w.vars.defaults, {
          ease: "none"
        })), w._ease = Ut(p.ease || r.ease || "none");
        var E = 0, R, X, P;
        if (j(p))
          p.forEach(function(C) {
            return w.to(T, C, ">");
          }), w.duration();
        else {
          b = {};
          for (O in p)
            O === "ease" || O === "easeEach" || An(O, p[O], b, p.easeEach);
          for (O in b)
            for (R = b[O].sort(function(C, k) {
              return C.t - k.t;
            }), E = 0, g = 0; g < R.length; g++)
              X = R[g], P = {
                ease: X.e,
                duration: (X.t - (g ? R[g - 1].t : 0)) / 100 * f
              }, P[O] = X.v, w.to(T, P, E), E += P.duration;
          w.duration() < f && w.to({}, {
            duration: f - w.duration()
          });
        }
      }
      f || o.duration(f = w.duration());
    } else
      o.timeline = 0;
    return d === !0 && !oi && (Ct = Tt(o), B.killTweensOf(T), Ct = 0), pt(x, Tt(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (_ || !f && !p && o._start === q(x._time) && Q(_) && on(Tt(o)) && x.data !== "nested") && (o._tTime = -L, o.render(Math.max(0, -l) || 0)), m && sr(Tt(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, u = this._tDur, f = this._dur, l = r < 0, _ = r > u - L && !l ? u : r < L ? 0 : r, c, d, p, h, m, y, x, T, w;
    if (!f)
      un(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l || this._lazy) {
      if (c = _, T = this.timeline, this._repeat) {
        if (h = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(h * 100 + r, n, s);
        if (c = q(_ % h), _ === u ? (p = this._repeat, c = f) : (m = q(_ / h), p = ~~m, p && p === m ? (c = f, p--) : c > f && (c = f)), y = this._yoyo && p & 1, y && (w = this._yEase, c = f - c), m = Jt(this._tTime, h), c === o && !s && this._initted && p === m)
          return this._tTime = _, this;
        p !== m && (T && this._yEase && vr(T, y), this.vars.repeatRefresh && !y && !this._lock && c !== h && this._initted && (this._lock = s = 1, this.render(q(h * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (or(this, l ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (w || this._ease)(c / f), this._from && (this.ratio = x = 1 - x), !o && _ && !n && !m && (st(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(x, d.d), d = d._next;
      T && T.render(r < 0 ? r : T._dur * T._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && je(this, r, n, s), st(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && st(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (l && !this._onUpdate && je(this, r, !0, !0), (r || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Et(this, 1), !n && !(l && !o) && (_ || o || y) && (st(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), a.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, o, u) {
    _e || nt.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || mi(this, f), l = this._ease(f / this._dur), Cn(this, r, n, s, o, l, f, u) ? this.resetTo(r, n, s, o, 1) : (Ie(this, 0), this.parent || rr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ne(this) : this.scrollTrigger && this.scrollTrigger.kill(!!H), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Ct && Ct.vars.overwrite !== !0)._first || ne(this), this.parent && s !== this.timeline.totalDuration() && te(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = r ? _t(r) : o, f = this._ptLookup, l = this._pt, _, c, d, p, h, m, y;
    if ((!n || n === "all") && nn(o, u))
      return n === "all" && (this._pt = 0), ne(this);
    for (_ = this._op = this._op || [], n !== "all" && (G(n) && (h = {}, Z(n, function(x) {
      return h[x] = 1;
    }), n = h), n = kn(o, n)), y = o.length; y--; )
      if (~u.indexOf(o[y])) {
        c = f[y], n === "all" ? (_[y] = n, p = c, d = {}) : (d = _[y] = _[y] || {}, p = n);
        for (h in p)
          m = c && c[h], m && ((!("kill" in m.d) || m.d.kill(h) === !0) && Fe(this, m, "_pt"), delete c[h]), d !== "all" && (d[h] = 1);
      }
    return this._initted && !this._pt && l && ne(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return ae(1, arguments);
  }, t.delayedCall = function(r, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, s) {
    return ae(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return B.killTweensOf(r, n, s);
  }, t;
}(ce);
ft(W.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(a) {
  W[a] = function() {
    var t = new K(), e = Qe.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var gi = function(t, e, i) {
  return t[e] = i;
}, Pr = function(t, e, i) {
  return t[e](i);
}, Mn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Dn = function(t, e, i) {
  return t.setAttribute(e, i);
}, yi = function(t, e) {
  return U(t[e]) ? Pr : ai(t[e]) && t.setAttribute ? Dn : gi;
}, Cr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, En = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, kr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, xi = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, Rn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, zn = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Fe(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, Fn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, Ar = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, J = /* @__PURE__ */ function() {
  function a(e, i, r, n, s, o, u, f, l) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || Cr, this.d = u || this, this.set = f || gi, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = Fn, this.m = i, this.mt = n, this.tween = r;
  }, a;
}();
Z(_i + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return hi[a] = 1;
});
ut.TweenMax = ut.TweenLite = W;
ut.TimelineLite = ut.TimelineMax = K;
B = new K({
  sortChildren: !1,
  defaults: Qt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
at.stringFilter = yr;
var Yt = [], Ce = {}, Ln = [], Ei = 0, In = 0, Ye = function(t) {
  return (Ce[t] || Ln).map(function(e) {
    return e();
  });
}, ei = function() {
  var t = Date.now(), e = [];
  t - Ei > 2 && (Ye("matchMediaInit"), Yt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, o, u, f;
    for (o in r)
      s = dt.matchMedia(r[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, f = 1);
    f && (i.revert(), u && e.push(i));
  }), Ye("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Ei = t, Ye("matchMedia"));
}, Mr = /* @__PURE__ */ function() {
  function a(e, i) {
    this.selector = i && Ze(i), this.data = [], this._r = [], this.isReverted = !1, this.id = In++, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    U(i) && (n = r, r = i, i = U);
    var s = this, o = function() {
      var f = N, l = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = Ze(n)), N = s, _ = r.apply(s, arguments), U(_) && s._r.push(_), N = f, s.selector = l, s.isReverted = !1, _;
    };
    return s.last = o, i === U ? o(s, function(u) {
      return s.add(null, u);
    }) : i ? s[i] = o : o;
  }, t.ignore = function(i) {
    var r = N;
    N = null, i(this), N = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof W && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var o = n.getTweens(), u = n.data.length, f; u--; )
        f = n.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return o.splice(o.indexOf(l), 1);
        }));
      for (o.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, _) {
        return _.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), u = n.data.length; u--; )
        f = n.data[u], f instanceof K ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof W) && f.revert && f.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), r)
      for (var s = Yt.length; s--; )
        Yt[s].id === this.id && Yt.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, a;
}(), Nn = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, N && N.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    gt(i) || (i = {
      matches: i
    });
    var s = new Mr(0, n || this.scope), o = s.conditions = {}, u, f, l;
    N && !s.selector && (s.selector = N.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? l = 1 : (u = dt.matchMedia(i[f]), u && (Yt.indexOf(s) < 0 && Yt.push(s), (o[f] = u.matches) && (l = 1), u.addListener ? u.addListener(ei) : u.addEventListener("change", ei)));
    return l && r(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, a;
}(), Ee = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return pr(r);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return B.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    G(t) && (t = _t(t)[0]);
    var n = Bt(t || {}).get, s = i ? ir : er;
    return i === "native" && (i = ""), t && (e ? s((rt[e] && rt[e].get || n)(t, e, i, r)) : function(o, u, f) {
      return s((rt[o] && rt[o].get || n)(t, o, u, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = _t(t), t.length > 1) {
      var r = t.map(function(l) {
        return et.quickSetter(l, e, i);
      }), n = r.length;
      return function(l) {
        for (var _ = n; _--; )
          r[_](l);
      };
    }
    t = t[0] || {};
    var s = rt[e], o = Bt(t), u = o.harness && (o.harness.aliases || {})[e] || e, f = s ? function(l) {
      var _ = new s();
      Ht._pt = 0, _.init(t, i ? l + i : l, Ht, 0, [t]), _.render(1, _), Ht._pt && xi(1, Ht);
    } : o.set(t, u);
    return s ? f : function(l) {
      return f(t, u, i ? l + i : l, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = et.to(t, ft((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(u, f, l) {
      return n.resetTo(e, u, f, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return B.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ut(t.ease, Qt.ease)), Ci(Qt, t || {});
  },
  config: function(t) {
    return Ci(at, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !rt[o] && !ut[o] && fe(e + " effect requires " + o + " plugin.");
    }), qe[e] = function(o, u, f) {
      return i(_t(o), ft(u || {}, n), f);
    }, s && (K.prototype[e] = function(o, u, f) {
      return this.add(qe[e](o, gt(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    M[t] = Ut(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ut(t, e) : M;
  },
  getById: function(t) {
    return B.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new K(t), r, n;
    for (i.smoothChildTiming = Q(t.smoothChildTiming), B.remove(i), i._dp = 0, i._time = i._tTime = B._time, r = B._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof W && r.vars.onComplete === r._targets[0])) && pt(i, r, r._start - r._delay), r = n;
    return pt(B, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Mr(t, e) : N;
  },
  matchMedia: function(t) {
    return new Nn(t);
  },
  matchMediaRefresh: function() {
    return Yt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || ei();
  },
  addEventListener: function(t, e) {
    var i = Ce[t] || (Ce[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = Ce[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: mn,
    wrapYoyo: gn,
    distribute: fr,
    random: hr,
    snap: lr,
    normalize: pn,
    getUnit: $,
    clamp: hn,
    splitColor: mr,
    toArray: _t,
    selector: Ze,
    mapRange: cr,
    pipe: cn,
    unitize: dn,
    interpolate: yn,
    shuffle: ur
  },
  install: Ki,
  effects: qe,
  ticker: nt,
  updateRoot: K.updateRoot,
  plugins: rt,
  globalTimeline: B,
  core: {
    PropTween: J,
    globals: Qi,
    Tween: W,
    Timeline: K,
    Animation: ce,
    getCache: Bt,
    _removeLinkedListItem: Fe,
    reverting: function() {
      return H;
    },
    context: function(t) {
      return t && N && (N.data.push(t), t._ctx = N), N;
    },
    suppressOverwrites: function(t) {
      return oi = t;
    }
  }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Ee[a] = W[a];
});
nt.add(K.updateRoot);
Ht = Ee.to({}, {
  duration: 0
});
var qn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, Bn = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = qn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Xe = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(o) {
        var u, f;
        if (G(n) && (u = {}, Z(n, function(l) {
          return u[l] = 1;
        }), n = u), e) {
          u = {};
          for (f in n)
            u[f] = e(n[f]);
          n = u;
        }
        Bn(o, n);
      };
    }
  };
}, et = Ee.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o, u;
    this.tween = i;
    for (s in e)
      u = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      H ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Xe("roundProps", Je), Xe("modifiers"), Xe("snap", lr)) || Ee;
W.version = K.version = et.version = "3.14.2";
ji = 1;
ui() && ee();
M.Power0;
M.Power1;
M.Power2;
M.Power3;
M.Power4;
M.Linear;
M.Quad;
M.Cubic;
M.Quart;
M.Quint;
M.Strong;
M.Elastic;
M.Back;
M.SteppedEase;
M.Bounce;
M.Sine;
M.Expo;
M.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ri, kt, jt, vi, qt, zi, Ti, Vn = function() {
  return typeof window < "u";
}, St = {}, Nt = 180 / Math.PI, Kt = Math.PI / 180, Wt = Math.atan2, Fi = 1e8, wi = /([A-Z])/g, Un = /(left|right|width|margin|padding|x)/i, Yn = /[\s,\(]\S/, mt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ii = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Xn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Wn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Gn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Hn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Dr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Er = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, $n = function(t, e, i) {
  return t.style[e] = i;
}, jn = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Kn = function(t, e, i) {
  return t._gsap[e] = i;
}, Qn = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Zn = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, Jn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, V = "transform", tt = V + "Origin", ts = function a(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in St && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = mt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = wt(r, o);
      }) : this.tfm[t] = s.x ? s[t] : wt(r, t), t === tt && (this.tfm.zOrigin = s.zOrigin);
    else
      return mt.transform.split(",").forEach(function(o) {
        return a.call(i, o, e);
      });
    if (this.props.indexOf(V) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(tt, e, "")), t = V;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Rr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, es = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(wi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Ti(), (!n || !n.isStart) && !i[V] && (Rr(i), r.zOrigin && i[tt] && (i[tt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, zr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: es,
    save: ts
  };
  return t._gsap || et.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Fr, ri = function(t, e) {
  var i = kt.createElementNS ? kt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : kt.createElement(t);
  return i && i.style ? i : kt.createElement(t);
}, ot = function a(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(wi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, ie(e) || e, 1) || "";
}, Li = "O,Moz,ms,Ms,Webkit".split(","), ie = function(t, e, i) {
  var r = e || qt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Li[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Li[s] : "") + t;
}, ni = function() {
  Vn() && window.document && (Ri = window, kt = Ri.document, jt = kt.documentElement, qt = ri("div") || {
    style: {}
  }, ri("div"), V = ie(V), tt = V + "Origin", qt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Fr = !!ie("perspective"), Ti = et.core.reverting, vi = 1);
}, Ii = function(t) {
  var e = t.ownerSVGElement, i = ri("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), jt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), jt.removeChild(i), n;
}, Ni = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Lr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Ii(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Ii(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ni(t, ["x", "cx", "x1"]) || 0,
    y: +Ni(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Ir = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Lr(t));
}, Rt = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in St && e !== tt && (e = V), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(wi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, At = function(t, e, i, r, n, s) {
  var o = new J(t._pt, e, i, 0, 1, s ? Er : Dr);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, qi = {
  deg: 1,
  rad: 1,
  turn: 1
}, is = {
  grid: 1,
  flex: 1
}, zt = function a(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = qt.style, u = Un.test(e), f = t.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", p, h, m, y;
  if (r === s || !n || qi[r] || qi[s])
    return n;
  if (s !== "px" && !c && (n = a(t, e, i, "px")), y = t.getCTM && Ir(t), (d || s === "%") && (St[e] || ~e.indexOf("adius")))
    return p = y ? t.getBBox()[u ? "width" : "height"] : t[l], Y(d ? n / p * _ : n / 100 * p);
  if (o[u ? "width" : "height"] = _ + (c ? s : r), h = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, y && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === kt || !h.appendChild) && (h = kt.body), m = h._gsap, m && d && m.width && u && m.time === nt.time && !m.uncache)
    return Y(n / m.width * _);
  if (d && (e === "height" || e === "width")) {
    var x = t.style[e];
    t.style[e] = _ + r, p = t[l], x ? t.style[e] = x : Rt(t, e);
  } else
    (d || s === "%") && !is[ot(h, "display")] && (o.position = ot(t, "position")), h === t && (o.position = "static"), h.appendChild(qt), p = qt[l], h.removeChild(qt), o.position = "absolute";
  return u && d && (m = Bt(h), m.time = nt.time, m.width = h[l]), Y(c ? p * n / _ : p && n ? _ / p * n : 0);
}, wt = function(t, e, i, r) {
  var n;
  return vi || ni(), e in mt && e !== "transform" && (e = mt[e], ~e.indexOf(",") && (e = e.split(",")[0])), St[e] && e !== "transform" ? (n = pe(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : ze(ot(t, tt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Re[e] && Re[e](t, e, i) || ot(t, e) || Ji(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? zt(t, e, n, i) + i : n;
}, rs = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = ie(e, t, 1), s = n && ot(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = ot(t, "borderTopColor"));
  }
  var o = new J(this._pt, t.style, e, 0, 1, kr), u = 0, f = 0, l, _, c, d, p, h, m, y, x, T, w, g;
  if (o.b = i, o.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = ot(t, r.substring(4, r.indexOf(")")))), r === "auto" && (h = t.style[e], t.style[e] = r, r = ot(t, e) || r, h ? t.style[e] = h : Rt(t, e)), l = [i, r], yr(l), i = l[0], r = l[1], c = i.match(Gt) || [], g = r.match(Gt) || [], g.length) {
    for (; _ = Gt.exec(r); )
      m = _[0], x = r.substring(u, _.index), p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1), m !== (h = c[f++] || "") && (d = parseFloat(h) || 0, w = h.substr((d + "").length), m.charAt(1) === "=" && (m = $t(d, m) + w), y = parseFloat(m), T = m.substr((y + "").length), u = Gt.lastIndex - T.length, T || (T = T || at.units[e] || w, u === r.length && (r += T, o.e += T)), w !== T && (d = zt(t, e, h, T) || 0), o._pt = {
        _next: o._pt,
        p: x || f === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Er : Dr;
  return $i.test(r) && (o.e = 0), this._pt = o, o;
}, Bi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ns = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Bi[i] || i, e[1] = Bi[r] || r, e.join(" ");
}, ss = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, u, f;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        o = n[f], St[o] && (u = 1, o = o === "transformOrigin" ? tt : V), Rt(i, o);
    u && (Rt(i, V), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", pe(i, 1), s.uncache = 1, Rr(r)));
  }
}, Re = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new J(t._pt, e, i, 0, 0, ss);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
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
}, de = [1, 0, 0, 1, 0, 0], Nr = {}, qr = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Vi = function(t) {
  var e = ot(t, V);
  return qr(e) ? de : e.substr(7).match(Hi).map(Y);
}, bi = function(t, e) {
  var i = t._gsap || Bt(t), r = t.style, n = Vi(t), s, o, u, f;
  return i.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? de : n) : (n === de && !t.offsetParent && t !== jt && !i.svg && (u = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, o = t.nextElementSibling, jt.appendChild(t)), n = Vi(t), u ? r.display = u : Rt(t, "display"), f && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : jt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, si = function(t, e, i, r, n, s) {
  var o = t._gsap, u = n || bi(t, !0), f = o.xOrigin || 0, l = o.yOrigin || 0, _ = o.xOffset || 0, c = o.yOffset || 0, d = u[0], p = u[1], h = u[2], m = u[3], y = u[4], x = u[5], T = e.split(" "), w = parseFloat(T[0]) || 0, g = parseFloat(T[1]) || 0, b, S, O, v;
  i ? u !== de && (S = d * m - p * h) && (O = w * (m / S) + g * (-h / S) + (h * x - m * y) / S, v = w * (-p / S) + g * (d / S) - (d * x - p * y) / S, w = O, g = v) : (b = Lr(t), w = b.x + (~T[0].indexOf("%") ? w / 100 * b.width : w), g = b.y + (~(T[1] || T[0]).indexOf("%") ? g / 100 * b.height : g)), r || r !== !1 && o.smooth ? (y = w - f, x = g - l, o.xOffset = _ + (y * d + x * h) - y, o.yOffset = c + (y * p + x * m) - x) : o.xOffset = o.yOffset = 0, o.xOrigin = w, o.yOrigin = g, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[tt] = "0px 0px", s && (At(s, o, "xOrigin", f, w), At(s, o, "yOrigin", l, g), At(s, o, "xOffset", _, o.xOffset), At(s, o, "yOffset", c, o.yOffset)), t.setAttribute("data-svg-origin", w + " " + g);
}, pe = function(t, e) {
  var i = t._gsap || new wr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(t), f = ot(t, tt) || "0", l, _, c, d, p, h, m, y, x, T, w, g, b, S, O, v, A, z, E, R, X, P, C, k, D, Ot, yt, xt, vt, ge, it, ct;
  return l = _ = c = h = m = y = x = T = w = 0, d = p = 1, i.svg = !!(t.getCTM && Ir(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[V] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[V] !== "none" ? u[V] : "")), r.scale = r.rotate = r.translate = "none"), S = bi(t, i.svg), i.svg && (i.uncache ? (D = t.getBBox(), f = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px", k = "") : k = !e && t.getAttribute("data-svg-origin"), si(t, k || f, !!k || i.originIsAbsolute, i.smooth !== !1, S)), g = i.xOrigin || 0, b = i.yOrigin || 0, S !== de && (z = S[0], E = S[1], R = S[2], X = S[3], l = P = S[4], _ = C = S[5], S.length === 6 ? (d = Math.sqrt(z * z + E * E), p = Math.sqrt(X * X + R * R), h = z || E ? Wt(E, z) * Nt : 0, x = R || X ? Wt(R, X) * Nt + h : 0, x && (p *= Math.abs(Math.cos(x * Kt))), i.svg && (l -= g - (g * z + b * R), _ -= b - (g * E + b * X))) : (ct = S[6], ge = S[7], yt = S[8], xt = S[9], vt = S[10], it = S[11], l = S[12], _ = S[13], c = S[14], O = Wt(ct, vt), m = O * Nt, O && (v = Math.cos(-O), A = Math.sin(-O), k = P * v + yt * A, D = C * v + xt * A, Ot = ct * v + vt * A, yt = P * -A + yt * v, xt = C * -A + xt * v, vt = ct * -A + vt * v, it = ge * -A + it * v, P = k, C = D, ct = Ot), O = Wt(-R, vt), y = O * Nt, O && (v = Math.cos(-O), A = Math.sin(-O), k = z * v - yt * A, D = E * v - xt * A, Ot = R * v - vt * A, it = X * A + it * v, z = k, E = D, R = Ot), O = Wt(E, z), h = O * Nt, O && (v = Math.cos(O), A = Math.sin(O), k = z * v + E * A, D = P * v + C * A, E = E * v - z * A, C = C * v - P * A, z = k, P = D), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, y = 180 - y), d = Y(Math.sqrt(z * z + E * E + R * R)), p = Y(Math.sqrt(C * C + ct * ct)), O = Wt(P, C), x = Math.abs(O) > 2e-4 ? O * Nt : 0, w = it ? 1 / (it < 0 ? -it : it) : 0), i.svg && (k = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !qr(ot(t, V)), k && t.setAttribute("transform", k))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (d *= -1, x += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (p *= -1, x += x <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = Y(d), i.scaleY = Y(p), i.rotation = Y(h) + o, i.rotationX = Y(m) + o, i.rotationY = Y(y) + o, i.skewX = x + o, i.skewY = T + o, i.transformPerspective = w + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[tt] = ze(f)), i.xOffset = i.yOffset = 0, i.force3D = at.force3D, i.renderTransform = i.svg ? as : Fr ? Br : os, i.uncache = 0, i;
}, ze = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, We = function(t, e, i) {
  var r = $(e);
  return Y(parseFloat(e) + parseFloat(zt(t, "x", i + "px", r))) + r;
}, os = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Br(t, e);
}, Lt = "0deg", re = "0px", It = ") ", Br = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, u = i.z, f = i.rotation, l = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, p = i.scaleX, h = i.scaleY, m = i.transformPerspective, y = i.force3D, x = i.target, T = i.zOrigin, w = "", g = y === "auto" && t && t !== 1 || y === !0;
  if (T && (_ !== Lt || l !== Lt)) {
    var b = parseFloat(l) * Kt, S = Math.sin(b), O = Math.cos(b), v;
    b = parseFloat(_) * Kt, v = Math.cos(b), s = We(x, s, S * v * -T), o = We(x, o, -Math.sin(b) * -T), u = We(x, u, O * v * -T + T);
  }
  m !== re && (w += "perspective(" + m + It), (r || n) && (w += "translate(" + r + "%, " + n + "%) "), (g || s !== re || o !== re || u !== re) && (w += u !== re || g ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + It), f !== Lt && (w += "rotate(" + f + It), l !== Lt && (w += "rotateY(" + l + It), _ !== Lt && (w += "rotateX(" + _ + It), (c !== Lt || d !== Lt) && (w += "skew(" + c + ", " + d + It), (p !== 1 || h !== 1) && (w += "scale(" + p + ", " + h + It), x.style[V] = w || "translate(0, 0)";
}, as = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, u = i.rotation, f = i.skewX, l = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, h = i.yOrigin, m = i.xOffset, y = i.yOffset, x = i.forceCSS, T = parseFloat(s), w = parseFloat(o), g, b, S, O, v;
  u = parseFloat(u), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, u += l), u || f ? (u *= Kt, f *= Kt, g = Math.cos(u) * _, b = Math.sin(u) * _, S = Math.sin(u - f) * -c, O = Math.cos(u - f) * c, f && (l *= Kt, v = Math.tan(f - l), v = Math.sqrt(1 + v * v), S *= v, O *= v, l && (v = Math.tan(l), v = Math.sqrt(1 + v * v), g *= v, b *= v)), g = Y(g), b = Y(b), S = Y(S), O = Y(O)) : (g = _, O = c, b = S = 0), (T && !~(s + "").indexOf("px") || w && !~(o + "").indexOf("px")) && (T = zt(d, "x", s, "px"), w = zt(d, "y", o, "px")), (p || h || m || y) && (T = Y(T + p - (p * g + h * S) + m), w = Y(w + h - (p * b + h * O) + y)), (r || n) && (v = d.getBBox(), T = Y(T + r / 100 * v.width), w = Y(w + n / 100 * v.height)), v = "matrix(" + g + "," + b + "," + S + "," + O + "," + T + "," + w + ")", d.setAttribute("transform", v), x && (d.style[V] = v);
}, us = function(t, e, i, r, n) {
  var s = 360, o = G(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? Nt : 1), f = u - r, l = r + f + "deg", _, c;
  return o && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), _ === "cw" && f < 0 ? f = (f + s * Fi) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * Fi) % s - ~~(f / s) * s)), t._pt = c = new J(t._pt, e, i, r, f, Xn), c.e = l, c.u = "deg", t._props.push(i), c;
}, Ui = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, fs = function(t, e, i) {
  var r = Ui({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, u, f, l, _, c, d, p;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[V] = e, o = pe(i, 1), Rt(i, V), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[V], s[V] = e, o = pe(i, 1), s[V] = f);
  for (u in St)
    f = r[u], l = o[u], f !== l && n.indexOf(u) < 0 && (d = $(f), p = $(l), _ = d !== p ? zt(i, u, f, p) : parseFloat(f), c = parseFloat(l), t._pt = new J(t._pt, o, u, _, c - _, ii), t._pt.u = p || 0, t._props.push(u));
  Ui(o, r);
};
Z("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  Re[t > 1 ? "border" + a : a] = function(o, u, f, l, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return wt(o, p, f);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (l + "").split(" "), d = {}, s.forEach(function(p, h) {
      return d[p] = c[h] = c[h] || c[(h - 1) / 2 | 0];
    }), o.init(u, d, _);
  };
});
var Vr = {
  name: "css",
  register: ni,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, u = i.vars.startAt, f, l, _, c, d, p, h, m, y, x, T, w, g, b, S, O, v;
    vi || ni(), this.styles = this.styles || zr(t), O = this.styles.props, this.tween = i;
    for (h in e)
      if (h !== "autoRound" && (l = e[h], !(rt[h] && br(h, e, i, r, t, n)))) {
        if (d = typeof l, p = Re[h], d === "function" && (l = l.call(i, r, t, n), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = he(l)), p)
          p(this, t, h, l, i) && (S = 1);
        else if (h.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(h) + "").trim(), l += "", Dt.lastIndex = 0, Dt.test(f) || (m = $(f), y = $(l), y ? m !== y && (f = zt(t, h, f, y) + y) : m && (l += m)), this.add(o, "setProperty", f, l, r, n, 0, 0, h), s.push(h), O.push(h, 0, o[h]);
        else if (d !== "undefined") {
          if (u && h in u ? (f = typeof u[h] == "function" ? u[h].call(i, r, t, n) : u[h], G(f) && ~f.indexOf("random(") && (f = he(f)), $(f + "") || f === "auto" || (f += at.units[h] || $(wt(t, h)) || ""), (f + "").charAt(1) === "=" && (f = wt(t, h))) : f = wt(t, h), c = parseFloat(f), x = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), x && (l = l.substr(2)), _ = parseFloat(l), h in mt && (h === "autoAlpha" && (c === 1 && wt(t, "visibility") === "hidden" && _ && (c = 0), O.push("visibility", 0, o.visibility), At(this, o, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), h !== "scale" && h !== "transform" && (h = mt[h], ~h.indexOf(",") && (h = h.split(",")[0]))), T = h in St, T) {
            if (this.styles.save(h), v = l, d === "string" && l.substring(0, 6) === "var(--") {
              if (l = ot(t, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
                var A = t.style.perspective;
                t.style.perspective = l, l = ot(t, "perspective"), A ? t.style.perspective = A : Rt(t, "perspective");
              }
              _ = parseFloat(l);
            }
            if (w || (g = t._gsap, g.renderTransform && !e.parseTransform || pe(t, e.parseTransform), b = e.smoothOrigin !== !1 && g.smooth, w = this._pt = new J(this._pt, o, V, 0, 1, g.renderTransform, g, 0, -1), w.dep = 1), h === "scale")
              this._pt = new J(this._pt, g, "scaleY", g.scaleY, (x ? $t(g.scaleY, x + _) : _) - g.scaleY || 0, ii), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              O.push(tt, 0, o[tt]), l = ns(l), g.svg ? si(t, l, 0, b, 0, this) : (y = parseFloat(l.split(" ")[2]) || 0, y !== g.zOrigin && At(this, g, "zOrigin", g.zOrigin, y), At(this, o, h, ze(f), ze(l)));
              continue;
            } else if (h === "svgOrigin") {
              si(t, l, 1, b, 0, this);
              continue;
            } else if (h in Nr) {
              us(this, g, h, c, x ? $t(c, x + l) : l);
              continue;
            } else if (h === "smoothOrigin") {
              At(this, g, "smooth", g.smooth, l);
              continue;
            } else if (h === "force3D") {
              g[h] = l;
              continue;
            } else if (h === "transform") {
              fs(this, l, t);
              continue;
            }
          } else h in o || (h = ie(h) || h);
          if (T || (_ || _ === 0) && (c || c === 0) && !Yn.test(l) && h in o)
            m = (f + "").substr((c + "").length), _ || (_ = 0), y = $(l) || (h in at.units ? at.units[h] : m), m !== y && (c = zt(t, h, f, y)), this._pt = new J(this._pt, T ? g : o, h, c, (x ? $t(c, x + _) : _) - c, !T && (y === "px" || h === "zIndex") && e.autoRound !== !1 ? Hn : ii), this._pt.u = y || 0, T && v !== l ? (this._pt.b = f, this._pt.e = v, this._pt.r = Gn) : m !== y && y !== "%" && (this._pt.b = f, this._pt.r = Wn);
          else if (h in o)
            rs.call(this, t, h, f, x ? x + l : l);
          else if (h in t)
            this.add(t, h, f || t[h], x ? x + l : l, r, n);
          else if (h !== "parseTransform") {
            li(h, l);
            continue;
          }
          T || (h in o ? O.push(h, 0, o[h]) : typeof t[h] == "function" ? O.push(h, 2, t[h]()) : O.push(h, 1, f || t[h])), s.push(h);
        }
      }
    S && Ar(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Ti())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: wt,
  aliases: mt,
  getSetter: function(t, e, i) {
    var r = mt[e];
    return r && r.indexOf(",") < 0 && (e = r), e in St && e !== tt && (t._gsap.x || wt(t, "x")) ? i && zi === i ? e === "scale" ? Qn : Kn : (zi = i || {}) && (e === "scale" ? Zn : Jn) : t.style && !ai(t.style[e]) ? $n : ~e.indexOf("-") ? jn : yi(t, e);
  },
  core: {
    _removeProperty: Rt,
    _getMatrix: bi
  }
};
et.utils.checkPrefix = ie;
et.core.getStyleSaver = zr;
(function(a, t, e, i) {
  var r = Z(a + "," + t + "," + e, function(n) {
    St[n] = 1;
  });
  Z(t, function(n) {
    at.units[n] = "deg", Nr[n] = 1;
  }), mt[r[13]] = a + "," + t, Z(i, function(n) {
    var s = n.split(":");
    mt[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  at.units[a] = "px";
});
et.registerPlugin(Vr);
var I = et.registerPlugin(Vr) || et;
I.core.Tween;
function Yi(a) {
  if (!a) return "";
  const t = document.createElement("div");
  return t.textContent = a, t.innerHTML;
}
const ls = 4e3, Se = 0.4;
function hs(a) {
  const t = a.getAttribute("data-stories");
  if (t)
    try {
      const i = JSON.parse(t);
      return Array.isArray(i) ? i : [];
    } catch {
      return [];
    }
  const e = a.querySelectorAll("[data-story]");
  return Array.from(e).map((i) => {
    const r = i.getAttribute("data-title");
    return {
      profileImg: i.getAttribute("data-profile-img") ?? "",
      profileName: i.getAttribute("data-profile-name") ?? "",
      title: r ? r.split("|").map((n) => n.trim()) : [],
      linkLabel: i.getAttribute("data-link-label") ?? "",
      linkSrc: i.getAttribute("data-link-src") ?? "#",
      storyImg: i.getAttribute("data-story-img") ?? ""
    };
  });
}
function _s(a) {
  a._storiesCleanup && a._storiesCleanup();
  const t = hs(a);
  if (!t.length) return;
  const e = Number(a.getAttribute("data-stories-duration")) || ls, i = a.getAttribute("data-stories-cursor") !== "false";
  let r = 0, n = "next", s;
  const o = a.querySelector("[data-stories-container]"), u = a.querySelector("[data-stories-cursor]"), f = u == null ? void 0 : u.querySelector("p"), l = a.querySelector("[data-stories-img]"), _ = a.querySelector("[data-stories-indices]"), c = a.querySelector("[data-stories-profile-icon]"), d = a.querySelector("[data-stories-profile-name]"), p = a.querySelector("[data-stories-title]"), h = a.querySelector("[data-stories-link]");
  if (!o || !l || !_ || !d || !p || !h)
    return;
  const m = Math.max(...t.map((P) => {
    var C;
    return (((C = P.title) == null ? void 0 : C.length) ?? 0) || 1;
  }), 1);
  _.innerHTML = t.map(() => '<div class="stories-index"><div class="stories-index-highlight"></div></div>').join(""), _.querySelectorAll(".stories-index");
  const y = _.querySelectorAll(".stories-index-highlight");
  function x(P, C) {
    const k = y[P];
    k && (I.killTweensOf(k), I.set(k, { transformOrigin: "left center" }), I.to(k, {
      width: C === "next" ? "100%" : "0%",
      duration: 0.3,
      ease: "power2.out"
    }));
  }
  function T() {
    y.forEach((P) => {
      I.killTweensOf(P), I.set(P, { width: "0%", transformOrigin: "left center" });
    });
  }
  function w(P) {
    const C = y[P];
    C && (I.killTweensOf(C), I.set(C, { width: "0%", transformOrigin: "left center" }), I.to(C, {
      width: "100%",
      duration: e / 1e3,
      ease: "none"
    }));
  }
  function g(P, C) {
    I.set(P, {
      clipPath: C === "next" ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    }), I.to(P, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut"
    });
  }
  function b(P, C, k) {
    I.fromTo(
      P,
      { scale: 1, rotate: 0 },
      {
        scale: 2,
        rotate: k === "next" ? -25 : 25,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          var D;
          (D = P.closest(".stories-img-item")) == null || D.remove();
        }
      }
    ), I.fromTo(
      C,
      { scale: 2, rotate: k === "next" ? 25 : -25 },
      { scale: 1, rotate: 0, duration: 1, ease: "power4.inOut" }
    );
  }
  function S() {
    for (; d.children.length > 2; )
      d.removeChild(d.firstChild);
    p.querySelectorAll(".stories-title-row").forEach((P) => {
      for (; P.children.length > 2; )
        P.removeChild(P.firstChild);
    });
  }
  const O = 600;
  let v = 0;
  function A(P = !0) {
    v = Date.now();
    const C = r, k = P ? "next" : n;
    k === "next" ? r = (r + 1) % t.length : r = (r - 1 + t.length) % t.length;
    const D = t[r], Ot = Array.isArray(D.title) ? D.title : [D.title ?? ""], yt = d.querySelectorAll("p"), xt = p.querySelectorAll(".stories-title-row h1");
    I.killTweensOf(yt), I.killTweensOf(xt);
    const vt = k === "next" ? -24 : 24, ge = k === "next" ? -48 : 48;
    I.to(yt, {
      y: vt,
      duration: 0.5,
      delay: Se,
      force3D: !0,
      onComplete: () => {
        yt.forEach((Pt) => Pt.remove());
      }
    }), I.to(xt, {
      y: ge,
      duration: 0.5,
      delay: Se,
      force3D: !0,
      onComplete: () => {
        xt.forEach((Pt) => Pt.remove());
      }
    });
    const it = l.querySelector(".stories-img-item"), ct = it == null ? void 0 : it.querySelector("img");
    setTimeout(() => {
      const Pt = k === "next" ? 24 : -24, Ur = k === "next" ? 48 : -48, ye = document.createElement("p");
      ye.textContent = D.profileName, ye.style.zIndex = "1", d.appendChild(ye), I.fromTo(
        ye,
        { y: Pt },
        { y: 0, duration: 0.5, delay: Se, force3D: !0 }
      );
      const Yr = p.querySelectorAll(".stories-title-row");
      for (let Te = 0; Te < m; Te++) {
        const Xr = Ot[Te] ?? "", Si = Yr[Te];
        if (Si) {
          const we = document.createElement("h1");
          we.textContent = Xr, we.style.zIndex = "1", Si.appendChild(we), I.fromTo(
            we,
            { y: Ur },
            { y: 0, duration: 0.5, delay: Se, force3D: !0 }
          );
        }
      }
      const xe = document.createElement("div");
      xe.className = "stories-img-item";
      const ve = document.createElement("img");
      ve.src = D.storyImg, ve.alt = D.profileName, xe.appendChild(ve), l.appendChild(xe), g(xe, k), ct && b(ct, ve, k), k === "next" && C === t.length - 1 && r === 0 ? T() : x(C, k), w(r), S(), clearTimeout(s), s = setTimeout(() => A(!0), e);
    }, 200), setTimeout(() => {
      if (c) {
        const Pt = c.querySelector("img");
        Pt && (Pt.src = D.profileImg);
      }
      h.textContent = D.linkLabel, h.href = D.linkSrc;
    }, 600);
  }
  l.innerHTML = "";
  const z = document.createElement("div");
  z.className = "stories-img-item";
  const E = document.createElement("img");
  if (E.src = t[0].storyImg, E.alt = t[0].profileName, z.appendChild(E), l.appendChild(z), d.innerHTML = `<p>${Yi(t[0].profileName)}</p>`, p.innerHTML = Array.from({ length: m }, (P, C) => {
    var D;
    const k = (((D = t[0].title) == null ? void 0 : D.length) ?? 0) > C ? t[0].title[C] : "";
    return `<div class="stories-title-row"><h1>${Yi(k)}</h1></div>`;
  }).join(""), h.textContent = t[0].linkLabel, h.href = t[0].linkSrc, c) {
    const P = c.querySelector("img");
    P && (P.src = t[0].profileImg);
  }
  w(0);
  const R = (P) => {
    if (!u || !f) return;
    const { clientX: C, clientY: k } = P, D = o.getBoundingClientRect();
    I.to(u, {
      x: C - D.left - u.offsetWidth / 2,
      y: k - D.top - u.offsetHeight / 2,
      ease: "power2.out",
      duration: 0.3
    });
    const Ot = D.left + D.width / 2;
    C < Ot ? (f.textContent = "Prev", n = "prev") : (f.textContent = "Next", n = "next");
  }, X = () => {
    Date.now() - v < O || (clearTimeout(s), x(r, n), A(!1));
  };
  i && u && o.addEventListener("mousemove", R), o.addEventListener("click", X), s = setTimeout(() => A(!0), e), a._storiesCleanup = () => {
    clearTimeout(s), i && u && o.removeEventListener("mousemove", R), o.removeEventListener("click", X), y.forEach((P) => I.killTweensOf(P)), d.querySelectorAll("p").forEach((P) => I.killTweensOf(P)), p.querySelectorAll(".stories-title-row h1").forEach((P) => I.killTweensOf(P)), l.querySelectorAll(".stories-img-item, img").forEach(
      (P) => I.killTweensOf(P)
    );
  };
}
if (typeof window < "u") {
  const a = () => {
    document.querySelectorAll('[data-component="stories"]').forEach((t) => _s(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
export {
  _s as initStories
};

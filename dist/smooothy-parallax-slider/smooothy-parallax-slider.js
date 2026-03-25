function mt(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Ii(o, t) {
  o.prototype = Object.create(t.prototype), o.prototype.constructor = o, o.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var nt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Gt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Je, W, E, ut = 1e8, A = 1 / ut, Be = Math.PI * 2, zr = Be / 4, Lr = 0, Ni = Math.sqrt, Ir = Math.cos, Nr = Math.sin, X = function(t) {
  return typeof t == "string";
}, N = function(t) {
  return typeof t == "function";
}, yt = function(t) {
  return typeof t == "number";
}, ti = function(t) {
  return typeof t > "u";
}, dt = function(t) {
  return typeof t == "object";
}, K = function(t) {
  return t !== !1;
}, ei = function() {
  return typeof window < "u";
}, me = function(t) {
  return N(t) || X(t);
}, Bi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, $ = Array.isArray, Br = /random\([^)]+\)/g, Vr = /,\s*/g, yi = /(?:-?\.?\d|\.)+/gi, Vi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ui = /[+-]=-?[.\d]+/, Ur = /[^,'"\[\]\s]+/gi, Yr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, L, ht, Ve, ii, st = {}, Te = {}, Yi, qi = function(t) {
  return (Te = $t(t, st)) && J;
}, ri = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, oe = function(t, e) {
  return !e && console.warn(t);
}, Xi = function(t, e) {
  return t && (st[t] = e) && Te && (Te[t] = e) || st;
}, ue = function() {
  return 0;
}, qr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ye = {
  suppressEvents: !0,
  kill: !1
}, Xr = {
  suppressEvents: !0
}, ni = {}, wt = [], Ue = {}, Wi, tt = {}, Re = {}, vi = 30, ve = [], si = "", ai = function(t) {
  var e = t[0], i, r;
  if (dt(e) || N(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ve.length; r-- && !ve[r].targetTest(e); )
      ;
    i = ve[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new pr(t[r], i))) || t.splice(r, 1);
  return t;
}, zt = function(t) {
  return t._gsap || ai(ft(t))[0]._gsap;
}, Gi = function(t, e, i) {
  return (i = t[e]) && N(i) ? t[e]() : ti(i) && t.getAttribute && t.getAttribute(e) || i;
}, Q = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, B = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, z = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, qt = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Wr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, be = function() {
  var t = wt.length, e = wt.slice(0), i, r;
  for (Ue = {}, wt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, oi = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, $i = function(t, e, i, r) {
  wt.length && !W && be(), t.render(e, i, !!(W && e < 0 && oi(t))), wt.length && !W && be();
}, ji = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Ur).length < 2 ? e : X(t) ? t.trim() : t;
}, Ki = function(t) {
  return t;
}, at = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Gr = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, $t = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, xi = function o(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, we = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || L, i = t.keyframes ? Gr($(t.keyframes)) : at;
  if (K(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, $r = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Qi = function(t, e, i, r, n) {
  var s = t[r], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, ke = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Pt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Lt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, jr = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ye = function(t, e, i, r) {
  return t._startAt && (W ? t._startAt.revert(ye) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Kr = function o(t) {
  return !t || t._ts && o(t.parent);
}, Ti = function(t) {
  return t._repeat ? jt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, jt = function(t, e) {
  var i = Math.floor(t = z(t / e));
  return t && i === t ? i - 1 : i;
}, Se = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Me = function(t) {
  return t._end = z(t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0));
}, De = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = z(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Me(t), i._dirty || Lt(i, t)), t;
}, Zi = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Se(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > A) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -A;
  }
}, _t = function(t, e, i, r) {
  return e.parent && Pt(e), e._start = z((yt(i) ? i : i || t !== L ? ot(t, i, e) : t._time) + e._delay), e._end = z(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Qi(t, e, "_first", "_last", t._sort ? "_start" : 0), qe(e) || (t._recent = e), r || Zi(t, e), t._ts < 0 && De(t, t._tTime), t;
}, Hi = function(t, e) {
  return (st.ScrollTrigger || ri("scrollTrigger", e)) && st.ScrollTrigger.create(e, t);
}, Ji = function(t, e, i, r, n) {
  if (fi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Wi !== et.frame)
    return wt.push(t), t._lazy = [n, r], 1;
}, Qr = function o(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
}, qe = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Zr = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Qr(t) && !(!t._initted && qe(t)) || (t._ts < 0 || t._dp._ts < 0) && !qe(t)) ? 0 : 1, a = t._rDelay, u = 0, f, l, _;
  if (a && t._repeat && (u = de(0, t._tDur, e), l = jt(u, a), t._yoyo && l & 1 && (s = 1 - s), l !== jt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || W || r || t._zTime === A || !e && t._zTime) {
    if (!t._initted && Ji(t, e, r, i, u))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? A : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Ye(t, e, i, !0), t._onUpdate && !i && it(t, "onUpdate"), u && t._repeat && !i && t.parent && it(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Pt(t, 1), !i && !W && (it(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Hr = function(t, e, i) {
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
}, Kt = function(t, e, i, r) {
  var n = t._repeat, s = z(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : z(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && De(t, t._tTime = t._tDur * a), t.parent && Me(t), i || Lt(t.parent, t), t;
}, bi = function(t) {
  return t instanceof j ? Lt(t) : Kt(t, t._dur);
}, Jr = {
  _start: 0,
  endTime: ue,
  totalDuration: ue
}, ot = function o(t, e, i) {
  var r = t.labels, n = t._recent || Jr, s = t.duration() >= ut ? n.endTime(!1) : t._dur, a, u, f;
  return X(e) && (isNaN(e) || e in r) ? (u = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && i && (u = u / 100 * ($(i) ? i[0] : i).totalDuration()), a > 1 ? o(t, e.substr(0, a - 1), i) + u : s + u)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, u;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (a = s, u = i; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = K(u.vars.inherit) && u.parent;
    s.immediateRender = K(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new U(e[0], s, e[n + 1]);
}, kt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, de = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, G = function(t, e) {
  return !X(t) || !(e = Yr.exec(t)) ? "" : e[1];
}, tn = function(t, e, i) {
  return kt(i, function(r) {
    return de(t, e, r);
  });
}, Xe = [].slice, tr = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== ht;
}, en = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return X(r) && !e || tr(r, 1) ? (n = i).push.apply(n, ft(r)) : i.push(r);
  }) || i;
}, ft = function(t, e, i) {
  return E && !e && E.selector ? E.selector(t) : X(t) && !i && (Ve || !Qt()) ? Xe.call((e || ii).querySelectorAll(t), 0) : $(t) ? en(t, i) : tr(t) ? Xe.call(t, 0) : t ? [t] : [];
}, We = function(t) {
  return t = ft(t)[0] || oe("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ft(e, i.querySelectorAll ? i : i === t ? oe("Invalid scope") || ii.createElement("div") : t);
  };
}, er = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ir = function(t) {
  if (N(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = It(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = r > 0 && r < 1, u = isNaN(r) || a, f = e.axis, l = r, _ = r;
  return X(r) ? l = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && u && (l = r[0], _ = r[1]), function(c, d, m) {
    var h = (m || e).length, p = s[h], y, v, T, b, g, S, w, P, x;
    if (!p) {
      if (x = e.grid === "auto" ? 0 : (e.grid || [1, ut])[1], !x) {
        for (w = -ut; w < (w = m[x++].getBoundingClientRect().left) && x < h; )
          ;
        x < h && x--;
      }
      for (p = s[h] = [], y = u ? Math.min(x, h) * l - 0.5 : r % x, v = x === ut ? 0 : u ? h * _ / x - 0.5 : r / x | 0, w = 0, P = ut, S = 0; S < h; S++)
        T = S % x - y, b = v - (S / x | 0), p[S] = g = f ? Math.abs(f === "y" ? b : T) : Ni(T * T + b * b), g > w && (w = g), g < P && (P = g);
      r === "random" && er(p), p.max = w - P, p.min = P, p.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (x > h ? h - 1 : f ? f === "y" ? h / x : x : Math.max(x, h / x)) || 0) * (r === "edges" ? -1 : 1), p.b = h < 0 ? n - h : n, p.u = G(e.amount || e.each) || 0, i = i && h < 0 ? _r(i) : i;
    }
    return h = (p[c] - p.min) / p.max || 0, z(p.b + (i ? i(h) : h) * p.v) + p.u;
  };
}, Ge = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = z(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : G(i));
  };
}, rr = function(t, e) {
  var i = $(t), r, n;
  return !i && dt(t) && (r = i = t.radius || ut, t.values ? (t = ft(t.values), (n = !yt(t[0])) && (r *= r)) : t = Ge(t.increment)), kt(e, i ? N(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = ut, l = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - a, d = t[_].y - u, c = c * c + d * d) : c = Math.abs(t[_] - a), c < f && (f = c, l = _);
    return l = !r || f <= r ? t[l] : s, n || l === s || yt(s) ? l : l + G(s);
  } : Ge(t));
}, nr = function(t, e, i, r) {
  return kt($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, rn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, nn = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || G(i));
  };
}, sn = function(t, e, i) {
  return ar(t, e, 0, 1, i);
}, sr = function(t, e, i) {
  return kt(i, function(r) {
    return t[~~e(r)];
  });
}, an = function o(t, e, i) {
  var r = e - t;
  return $(t) ? sr(t, o(0, t.length), e) : kt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, on = function o(t, e, i) {
  var r = e - t, n = r * 2;
  return $(t) ? sr(t, o(0, t.length - 1), e) : kt(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, fe = function(t) {
  return t.replace(Br, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Vr);
    return nr(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ar = function(t, e, i, r, n) {
  var s = e - t, a = r - i;
  return kt(n, function(u) {
    return i + ((u - t) / s * a || 0);
  });
}, un = function o(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = X(t), a = {}, u, f, l, _, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if ($(t) && !$(e)) {
      for (l = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
        l.push(o(t[f - 1], t[f]));
      _--, n = function(m) {
        m *= _;
        var h = Math.min(c, ~~m);
        return l[h](m - h);
      }, i = e;
    } else r || (t = $t($(t) ? [] : {}, t));
    if (!l) {
      for (u in e)
        ui.call(a, t, u, "get", e[u]);
      n = function(m) {
        return _i(m, a) || (s ? t.p : t);
      };
    }
  }
  return kt(i, n);
}, wi = function(t, e, i) {
  var r = t.labels, n = ut, s, a, u;
  for (s in r)
    a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (u = s, n = a);
  return u;
}, it = function(t, e, i) {
  var r = t.vars, n = r[e], s = E, a = t._ctx, u, f, l;
  if (n)
    return u = r[e + "Params"], f = r.callbackScope || t, i && wt.length && be(), a && (E = a), l = u ? n.apply(f, u) : n.call(f), E = s, l;
}, ee = function(t) {
  return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!W), t.progress() < 1 && it(t, "onInterrupt"), t;
}, Yt, or = [], ur = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ei() || t.headless) {
      var e = t.name, i = N(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: ue,
        render: _i,
        add: ui,
        kill: Sn,
        modifier: wn,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: hi,
        aliases: {},
        register: 0
      };
      if (Qt(), t !== r) {
        if (tt[e])
          return;
        at(r, at(we(t, n), s)), $t(r.prototype, $t(n, we(t, s))), tt[r.prop = e] = r, t.targetTest && (ve.push(r), ni[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Xi(e, r), t.register && t.register(J, r, Z);
    } else
      or.push(t);
}, D = 255, ie = {
  aqua: [0, D, D],
  lime: [0, D, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, D],
  navy: [0, 0, 128],
  white: [D, D, D],
  olive: [128, 128, 0],
  yellow: [D, D, 0],
  orange: [D, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [D, 0, 0],
  pink: [D, 192, 203],
  cyan: [0, D, D],
  transparent: [D, D, D, 0]
}, Ee = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * D + 0.5 | 0;
}, fr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & D, t & D] : 0 : ie.black, n, s, a, u, f, l, _, c, d, m;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ie[t])
      r = ie[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & D, r & D, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & D, t & D];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = m = t.match(yi), !e)
        u = +r[0] % 360 / 360, f = +r[1] / 100, l = +r[2] / 100, s = l <= 0.5 ? l * (f + 1) : l + f - l * f, n = l * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ee(u + 1 / 3, n, s), r[1] = Ee(u, n, s), r[2] = Ee(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Vi), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(yi) || ie.transparent;
    r = r.map(Number);
  }
  return e && !m && (n = r[0] / D, s = r[1] / D, a = r[2] / D, _ = Math.max(n, s, a), c = Math.min(n, s, a), l = (_ + c) / 2, _ === c ? u = f = 0 : (d = _ - c, f = l > 0.5 ? d / (2 - _ - c) : d / (_ + c), u = _ === n ? (s - a) / d + (s < a ? 6 : 0) : _ === s ? (a - n) / d + 2 : (n - s) / d + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, lr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(St).forEach(function(n) {
    var s = n.match(Ut) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Si = function(t, e, i) {
  var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", a = 0, u, f, l, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = fr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (l = lr(t), u = i.c, u.join(r) !== l.c.join(r)))
    for (f = t.replace(St, "1").split(Ut), _ = f.length - 1; a < _; a++)
      r += f[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(St), _ = f.length - 1; a < _; a++)
      r += f[a] + n[a];
  return r + f[_];
}, St = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ie)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), fn = /hsl[a]?\(/, hr = function(t) {
  var e = t.join(" "), i;
  if (St.lastIndex = 0, St.test(e))
    return i = fn.test(e), t[1] = Si(t[1], i), t[0] = Si(t[0], i, lr(t[1])), !0;
}, le, et = function() {
  var o = Date.now, t = 500, e = 33, i = o(), r = i, n = 1e3 / 240, s = n, a = [], u, f, l, _, c, d, m = function h(p) {
    var y = o() - r, v = p === !0, T, b, g, S;
    if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, T = g - s, (T > 0 || v) && (S = ++_.frame, c = g - _.time * 1e3, _.time = g = g / 1e3, s += T + (T >= n ? 4 : n - T), b = 1), v || (u = f(h)), b)
      for (d = 0; d < a.length; d++)
        a[d](g, c, S, p);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(p) {
      return c / (1e3 / (p || 60));
    },
    wake: function() {
      Yi && (!Ve && ei() && (ht = Ve = window, ii = ht.document || {}, st.gsap = J, (ht.gsapVersions || (ht.gsapVersions = [])).push(J.version), qi(Te || ht.GreenSockGlobals || !ht.gsap && ht || {}), or.forEach(ur)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), f = l || function(p) {
        return setTimeout(p, s - _.time * 1e3 + 1 | 0);
      }, le = 1, m(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(u), le = 0, f = ue;
    },
    lagSmoothing: function(p, y) {
      t = p || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(p) {
      n = 1e3 / (p || 240), s = _.time * 1e3 + n;
    },
    add: function(p, y, v) {
      var T = y ? function(b, g, S, w) {
        p(b, g, S, w), _.remove(T);
      } : p;
      return _.remove(p), a[v ? "unshift" : "push"](T), Qt(), T;
    },
    remove: function(p, y) {
      ~(y = a.indexOf(p)) && a.splice(y, 1) && d >= y && d--;
    },
    _listeners: a
  }, _;
}(), Qt = function() {
  return !le && et.wake();
}, C = {}, ln = /^[\d.\-M][\d.\-,\s]/, hn = /["']/g, _n = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, u, f; n < s; n++)
    u = i[n], a = n !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, a), e[r] = isNaN(f) ? f.replace(hn, "").trim() : +f, r = u.substr(a + 1).trim();
  return e;
}, cn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, dn = function(t) {
  var e = (t + "").split("("), i = C[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [_n(e[1])] : cn(t).split(",").map(ji)) : C._CE && ln.test(t) ? C._CE("", t) : i;
}, _r = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, cr = function o(t, e) {
  for (var i = t._first, r; i; )
    i instanceof j ? o(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, It = function(t, e) {
  return t && (N(t) ? t : C[t] || dn(t)) || e;
}, Bt = function(t, e, i, r) {
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
  return Q(t, function(a) {
    C[a] = st[a] = n, C[s = a.toLowerCase()] = i;
    for (var u in n)
      C[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = C[a + "." + u] = n[u];
  }), n;
}, dr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Fe = function o(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Be * (Math.asin(1 / r) || 0), a = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Nr((l - s) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(f) {
    return 1 - a(1 - f);
  } : dr(a);
  return n = Be / n, u.config = function(f, l) {
    return o(t, f, l);
  }, u;
}, ze = function o(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : dr(i);
  return r.config = function(n) {
    return o(t, n);
  }, r;
};
Q("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var e = t < 5 ? t + 1 : t;
  Bt(o + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
C.Linear.easeNone = C.none = C.Linear.easeIn;
Bt("Elastic", Fe("in"), Fe("out"), Fe());
(function(o, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? o * a * a : a < i ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Bt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Bt("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
Bt("Circ", function(o) {
  return -(Ni(1 - o * o) - 1);
});
Bt("Sine", function(o) {
  return o === 1 ? 1 : -Ir(o * zr) + 1;
});
Bt("Back", ze("in"), ze("out"), ze());
C.SteppedEase = C.steps = st.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - A;
    return function(a) {
      return ((r * de(0, s, a) | 0) + n) * i;
    };
  }
};
Gt.ease = C["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return si += o + "," + o + "Params,";
});
var pr = function(t, e) {
  this.id = Lr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Gi, this.set = e ? e.getSetter : hi;
}, he = /* @__PURE__ */ function() {
  function o(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Kt(this, +e.duration, 1, 1), this.data = e.data, E && (this._ctx = E, E.data.push(this)), le || et.wake();
  }
  var t = o.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Qt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (De(this, i), !n._dp || n.parent || Zi(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === A || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), $i(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ti(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ti(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? jt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -A ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? Se(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -A ? 0 : this._rts, this.totalTime(de(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Me(this), jr(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== A && (this._tTime -= A)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = z(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && _t(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (K(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Se(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Xr);
    var r = W;
    return W = i, oi(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), W = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, bi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, bi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(ot(this, i), K(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, K(r)), this._dur || (this._zTime = -A), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -A : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -A, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - A);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(s) {
      var a = N(i) ? i : Ki, u = function() {
        var l = r.then;
        r.then = null, n && n(), N(a) && (a = a(r)) && (a.then || a === r) && (r.then = l), s(a), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    ee(this);
  }, o;
}();
at(he.prototype, {
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
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var j = /* @__PURE__ */ function(o) {
  Ii(t, o);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = o.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = K(i.sortChildren), L && _t(i.parent || L, mt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Hi(mt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, a) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(r, n, ot(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return _t(this, U.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, a, u, f, l) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = l, s.parent = this, new U(r, s, ot(this, u)), this;
  }, e.staggerFrom = function(r, n, s, a, u, f, l) {
    return s.runBackwards = 1, ne(s).immediateRender = K(s.immediateRender), this.staggerTo(r, n, s, a, u, f, l);
  }, e.staggerFromTo = function(r, n, s, a, u, f, l, _) {
    return a.startAt = s, ne(a).immediateRender = K(a.immediateRender), this.staggerTo(r, n, a, u, f, l, _);
  }, e.render = function(r, n, s) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = r <= 0 ? 0 : z(r), _ = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, m, h, p, y, v, T, b, g, S, w;
    if (this !== L && l > u && r >= 0 && (l = u), l !== this._tTime || s || _) {
      if (a !== this._time && f && (l += this._time - a, r += this._time - a), c = l, b = this._start, T = this._ts, y = !T, _ && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, p = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(p * 100 + r, n, s);
        if (c = z(l % p), l === u ? (h = this._repeat, c = f) : (g = z(l / p), h = ~~g, h && h === g && (c = f, h--), c > f && (c = f)), g = jt(this._tTime, p), !a && this._tTime && g !== h && this._tTime - g * p - this._dur <= 0 && (g = h), S && h & 1 && (c = f - c, w = 1), h !== g && !this._lock) {
          var P = S && g & 1, x = P === (S && h & 1);
          if (h < g && (P = !P), a = P ? 0 : l % f ? f : l, this._lock = 1, this.render(a || (w ? 0 : z(h * p)), n, !f)._lock = 0, this._tTime = l, !n && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1, g = h), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, x && (this._lock = 2, a = P ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          cr(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = Hr(this, z(a), z(c)), v && (l -= c - (c = v._start))), this._tTime = l, this._time = c, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && l && f && !n && !g && (it(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= a && r >= 0)
        for (d = this._first; d; ) {
          if (m = d._next, (d._act || c >= d._start) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !y) {
              v = 0, m && (l += this._zTime = -A);
              break;
            }
          }
          d = m;
        }
      else {
        d = this._last;
        for (var O = r < 0 ? r : c; d; ) {
          if (m = d._prev, (d._act || O <= d._end) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || W && oi(d)), c !== this._time || !this._ts && !y) {
              v = 0, m && (l += this._zTime = O ? -A : A);
              break;
            }
          }
          d = m;
        }
      }
      if (v && !n && (this.pause(), v.render(c >= a ? 0 : -A)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = b, Me(this), this.render(r, n, s);
      this._onUpdate && !n && it(this, "onUpdate", !0), (l === u && this._tTime >= this.totalDuration() || !l && a) && (b === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (l === u && this._ts > 0 || !l && this._ts < 0) && Pt(this, 1), !n && !(r < 0 && !a) && (l || a || !u) && (it(this, l === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = ot(this, n, r)), !(r instanceof he)) {
      if ($(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (X(r))
        return this.addLabel(r, n);
      if (N(r))
        r = U.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _t(this, r, n) : this;
  }, e.getChildren = function(r, n, s, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -ut);
    for (var u = [], f = this._first; f; )
      f._start >= a && (f instanceof U ? n && u.push(f) : (s && u.push(f), r && u.push.apply(u, f.getChildren(!0, n, s)))), f = f._next;
    return u;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return X(r) ? this.removeLabel(r) : N(r) ? this.killTweensOf(r) : (r.parent === this && ke(this, r), r === this._recent && (this._recent = this._last), Lt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = z(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = ot(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var a = U.delayedCall(0, n || ue, s);
    return a.data = "isPause", this._hasPause = 1, _t(this, a, ot(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = ot(this, r); n; )
      n._start === r && n.data === "isPause" && Pt(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), u = a.length; u--; )
      xt !== a[u] && a[u].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], a = ft(r), u = this._first, f = yt(n), l; u; )
      u instanceof U ? Wr(u._targets, a) && (f ? (!xt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (l = u.getTweensOf(a, n)).length && s.push.apply(s, l), u = u._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = ot(s, r), u = n, f = u.startAt, l = u.onStart, _ = u.onStartParams, c = u.immediateRender, d, m = U.to(s, at({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || A,
      onStart: function() {
        if (s.pause(), !d) {
          var p = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          m._dur !== p && Kt(m, p, 0, 1).render(m._time, !0, !0), d = 1;
        }
        l && l.apply(m, _ || []);
      }
    }, n));
    return c ? m.render(0) : m;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, at({
      startAt: {
        time: ot(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), wi(this, ot(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), wi(this, ot(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + A);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var a = this._first, u = this.labels, f;
    for (r = z(r); a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (f in u)
        u[f] >= s && (u[f] += r);
    return Lt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return o.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Lt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, u = ut, f, l, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), l = a._start, l > u && s._sort && a._ts && !s._lock ? (s._lock = 1, _t(s, a, l - a._delay, 1)._lock = 0) : u = l, l < 0 && a._ts && (n -= l, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += z(l / s._ts), s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), u = 0), a._end > n && a._ts && (n = a._end), a = f;
      Kt(s, s === L && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (L._ts && ($i(L, Se(r, L)), Wi = et.frame), et.frame >= vi) {
      vi += nt.autoSleep || 120;
      var n = L._first;
      if ((!n || !n._ts) && nt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
}(he);
at(j.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var pn = function(t, e, i, r, n, s, a) {
  var u = new Z(this._pt, t, e, 0, 1, Tr, null, n), f = 0, l = 0, _, c, d, m, h, p, y, v;
  for (u.b = i, u.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = fe(r)), s && (v = [i, r], s(v, t, e), i = v[0], r = v[1]), c = i.match(Ae) || []; _ = Ae.exec(r); )
    m = _[0], h = r.substring(f, _.index), d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1), m !== c[l++] && (p = parseFloat(c[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || l === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: m.charAt(1) === "=" ? qt(p, m) - p : parseFloat(m) - p,
      m: d && d < 4 ? Math.round : 0
    }, f = Ae.lastIndex);
  return u.c = f < r.length ? r.substring(f, r.length) : "", u.fp = a, (Ui.test(r) || y) && (u.e = 0), this._pt = u, u;
}, ui = function(t, e, i, r, n, s, a, u, f, l) {
  N(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : N(_) ? f ? t[e.indexOf("set") || !N(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : _, d = N(_) ? f ? xn : vr : li, m;
  if (X(r) && (~r.indexOf("random(") && (r = fe(r)), r.charAt(1) === "=" && (m = qt(c, r) + (G(c) || 0), (m || m === 0) && (r = m))), !l || c !== r || $e)
    return !isNaN(c * r) && r !== "" ? (m = new Z(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? bn : xr, 0, d), f && (m.fp = f), a && m.modifier(a, this, t), this._pt = m) : (!_ && !(e in t) && ri(e, r), pn.call(this, t, e, c, r, d, u || nt.stringFilter, f));
}, mn = function(t, e, i, r, n) {
  if (N(t) && (t = ae(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || $(t) || Bi(t))
    return X(t) ? ae(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = ae(t[a], n, e, i, r);
  return s;
}, mr = function(t, e, i, r, n, s) {
  var a, u, f, l;
  if (tt[t] && (a = new tt[t]()).init(n, a.rawVars ? e[t] : mn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = u = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Yt))
    for (f = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--; )
      f[a._props[l]] = u;
  return a;
}, xt, $e, fi = function o(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, u = r.lazy, f = r.onUpdate, l = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, d = r.autoRevert, m = t._dur, h = t._startAt, p = t._targets, y = t.parent, v = y && y.data === "nested" ? y.vars.targets : p, T = t._overwrite === "auto" && !Je, b = t.timeline, g, S, w, P, x, O, R, k, M, Y, V, F, q;
  if (b && (!c || !n) && (n = "none"), t._ease = It(n, Gt.ease), t._yEase = _ ? _r(It(_ === !0 ? n : _, Gt.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !b && !!r.runBackwards, !b || c && !r.stagger) {
    if (k = p[0] ? zt(p[0]).harness : 0, F = k && r[k.prop], g = we(r, ni), h && (h._zTime < 0 && h.progress(1), e < 0 && l && a && !d ? h.render(-1, !0) : h.revert(l && m ? ye : qr), h._lazy = 0), s) {
      if (Pt(t._startAt = U.set(p, at({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !h && K(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return it(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W || !a && !d) && t._startAt.revert(ye), a && m && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && m && !h) {
      if (e && (a = !1), w = at({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !h && K(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), F && (w[k.prop] = F), Pt(t._startAt = U.set(p, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W ? t._startAt.revert(ye) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        o(t._startAt, A, A);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = m && K(u) || u && !m, S = 0; S < p.length; S++) {
      if (x = p[S], R = x._gsap || ai(p)[S]._gsap, t._ptLookup[S] = Y = {}, Ue[R.id] && wt.length && be(), V = v === p ? S : v.indexOf(x), k && (M = new k()).init(x, F || g, t, V, v) !== !1 && (t._pt = P = new Z(t._pt, x, M.name, 0, 1, M.render, M, 0, M.priority), M._props.forEach(function(lt) {
        Y[lt] = P;
      }), M.priority && (O = 1)), !k || F)
        for (w in g)
          tt[w] && (M = mr(w, g, t, V, x, v)) ? M.priority && (O = 1) : Y[w] = P = ui.call(t, x, w, "get", g[w], V, v, 0, r.stringFilter);
      t._op && t._op[S] && t.kill(x, t._op[S]), T && t._pt && (xt = t, L.killTweensOf(x, Y, t.globalTime(e)), q = !t.parent, xt = 0), t._pt && u && (Ue[R.id] = 1);
    }
    O && br(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !q, c && e <= 0 && b.render(ut, !0, !0);
}, gn = function(t, e, i, r, n, s, a, u) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, _, c, d;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (l = c[d][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return $e = 1, t.vars[e] = "+=0", fi(t, a), $e = 0, u ? oe(e + " not eligible for reset") : 1;
      f.push(l);
    }
  for (d = f.length; d--; )
    _ = f[d], l = _._pt || _, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, _.e && (_.e = B(i) + G(_.e)), _.b && (_.b = l.s + G(_.b));
}, yn = function(t, e) {
  var i = t[0] ? zt(t[0]).harness : 0, r = i && i.aliases, n, s, a, u;
  if (!r)
    return e;
  n = $t({}, e);
  for (s in r)
    if (s in n)
      for (u = r[s].split(","), a = u.length; a--; )
        n[u[a]] = n[s];
  return n;
}, vn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if ($(e))
    a = i[t] || (i[t] = []), e.forEach(function(u, f) {
      return a.push({
        t: f / (e.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in e)
      a = i[s] || (i[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ae = function(t, e, i, r, n) {
  return N(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? fe(t) : t;
}, gr = si + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", yr = {};
Q(gr + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return yr[o] = 1;
});
var U = /* @__PURE__ */ function(o) {
  Ii(t, o);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = o.call(this, s ? r : ne(r)) || this;
    var u = a.vars, f = u.duration, l = u.delay, _ = u.immediateRender, c = u.stagger, d = u.overwrite, m = u.keyframes, h = u.defaults, p = u.scrollTrigger, y = u.yoyoEase, v = r.parent || L, T = ($(i) || Bi(i) ? yt(i[0]) : "length" in r) ? [i] : ft(i), b, g, S, w, P, x, O, R;
    if (a._targets = T.length ? ai(T) : oe("GSAP target " + i + " not found. https://gsap.com", !nt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, m || c || me(f) || me(l)) {
      if (r = a.vars, b = a.timeline = new j({
        data: "nested",
        defaults: h || {},
        targets: v && v.data === "nested" ? v.vars.targets : T
      }), b.kill(), b.parent = b._dp = mt(a), b._start = 0, c || me(f) || me(l)) {
        if (w = T.length, O = c && ir(c), dt(c))
          for (P in c)
            ~gr.indexOf(P) && (R || (R = {}), R[P] = c[P]);
        for (g = 0; g < w; g++)
          S = we(r, yr), S.stagger = 0, y && (S.yoyoEase = y), R && $t(S, R), x = T[g], S.duration = +ae(f, mt(a), g, x, T), S.delay = (+ae(l, mt(a), g, x, T) || 0) - a._delay, !c && w === 1 && S.delay && (a._delay = l = S.delay, a._start += l, S.delay = 0), b.to(x, S, O ? O(g, x, T) : 0), b._ease = C.none;
        b.duration() ? f = l = 0 : a.timeline = 0;
      } else if (m) {
        ne(at(b.vars.defaults, {
          ease: "none"
        })), b._ease = It(m.ease || r.ease || "none");
        var k = 0, M, Y, V;
        if ($(m))
          m.forEach(function(F) {
            return b.to(T, F, ">");
          }), b.duration();
        else {
          S = {};
          for (P in m)
            P === "ease" || P === "easeEach" || vn(P, m[P], S, m.easeEach);
          for (P in S)
            for (M = S[P].sort(function(F, q) {
              return F.t - q.t;
            }), k = 0, g = 0; g < M.length; g++)
              Y = M[g], V = {
                ease: Y.e,
                duration: (Y.t - (g ? M[g - 1].t : 0)) / 100 * f
              }, V[P] = Y.v, b.to(T, V, k), k += V.duration;
          b.duration() < f && b.to({}, {
            duration: f - b.duration()
          });
        }
      }
      f || a.duration(f = b.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Je && (xt = mt(a), L.killTweensOf(T), xt = 0), _t(v, mt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (_ || !f && !m && a._start === z(v._time) && K(_) && Kr(mt(a)) && v.data !== "nested") && (a._tTime = -A, a.render(Math.max(0, -l) || 0)), p && Hi(mt(a), p), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var a = this._time, u = this._tDur, f = this._dur, l = r < 0, _ = r > u - A && !l ? u : r < A ? 0 : r, c, d, m, h, p, y, v, T, b;
    if (!f)
      Zr(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l || this._lazy) {
      if (c = _, T = this.timeline, this._repeat) {
        if (h = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(h * 100 + r, n, s);
        if (c = z(_ % h), _ === u ? (m = this._repeat, c = f) : (p = z(_ / h), m = ~~p, m && m === p ? (c = f, m--) : c > f && (c = f)), y = this._yoyo && m & 1, y && (b = this._yEase, c = f - c), p = jt(this._tTime, h), c === a && !s && this._initted && m === p)
          return this._tTime = _, this;
        m !== p && (T && this._yEase && cr(T, y), this.vars.repeatRefresh && !y && !this._lock && c !== h && this._initted && (this._lock = s = 1, this.render(z(h * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ji(this, l ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && m !== p))
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (b || this._ease)(c / f), this._from && (this.ratio = v = 1 - v), !a && _ && !n && !p && (it(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(v, d.d), d = d._next;
      T && T.render(r < 0 ? r : T._dur * T._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && Ye(this, r, n, s), it(this, "onUpdate")), this._repeat && m !== p && this.vars.onRepeat && !n && this.parent && it(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (l && !this._onUpdate && Ye(this, r, !0, !0), (r || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Pt(this, 1), !n && !(l && !a) && (_ || a || y) && (it(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, a, u) {
    le || et.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || fi(this, f), l = this._ease(f / this._dur), gn(this, r, n, s, a, l, f, u) ? this.resetTo(r, n, s, a, 1) : (De(this, 0), this.parent || Qi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ee(this) : this.scrollTrigger && this.scrollTrigger.kill(!!W), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, xt && xt.vars.overwrite !== !0)._first || ee(this), this.parent && s !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, u = r ? ft(r) : a, f = this._ptLookup, l = this._pt, _, c, d, m, h, p, y;
    if ((!n || n === "all") && $r(a, u))
      return n === "all" && (this._pt = 0), ee(this);
    for (_ = this._op = this._op || [], n !== "all" && (X(n) && (h = {}, Q(n, function(v) {
      return h[v] = 1;
    }), n = h), n = yn(a, n)), y = a.length; y--; )
      if (~u.indexOf(a[y])) {
        c = f[y], n === "all" ? (_[y] = n, m = c, d = {}) : (d = _[y] = _[y] || {}, m = n);
        for (h in m)
          p = c && c[h], p && ((!("kill" in p.d) || p.d.kill(h) === !0) && ke(this, p, "_pt"), delete c[h]), d !== "all" && (d[h] = 1);
      }
    return this._initted && !this._pt && l && ee(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
  }, t.delayedCall = function(r, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, s) {
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return L.killTweensOf(r, n, s);
  }, t;
}(he);
at(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Q("staggerTo,staggerFrom,staggerFromTo", function(o) {
  U[o] = function() {
    var t = new j(), e = Xe.call(arguments, 0);
    return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
  };
});
var li = function(t, e, i) {
  return t[e] = i;
}, vr = function(t, e, i) {
  return t[e](i);
}, xn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Tn = function(t, e, i) {
  return t.setAttribute(e, i);
}, hi = function(t, e) {
  return N(t[e]) ? vr : ti(t[e]) && t.setAttribute ? Tn : li;
}, xr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, bn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Tr = function(t, e) {
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
}, _i = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, wn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, Sn = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? ke(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, Pn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, br = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Z = /* @__PURE__ */ function() {
  function o(e, i, r, n, s, a, u, f, l) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || xr, this.d = u || this, this.set = f || li, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = Pn, this.m = i, this.mt = n, this.tween = r;
  }, o;
}();
Q(si + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return ni[o] = 1;
});
st.TweenMax = st.TweenLite = U;
st.TimelineLite = st.TimelineMax = j;
L = new j({
  sortChildren: !1,
  defaults: Gt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
nt.stringFilter = hr;
var Nt = [], xe = {}, On = [], Pi = 0, Cn = 0, Le = function(t) {
  return (xe[t] || On).map(function(e) {
    return e();
  });
}, je = function() {
  var t = Date.now(), e = [];
  t - Pi > 2 && (Le("matchMediaInit"), Nt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, a, u, f;
    for (a in r)
      s = ht.matchMedia(r[a]).matches, s && (u = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (i.revert(), u && e.push(i));
  }), Le("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Pi = t, Le("matchMedia"));
}, wr = /* @__PURE__ */ function() {
  function o(e, i) {
    this.selector = i && We(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Cn++, e && this.add(e);
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
    N(i) && (n = r, r = i, i = N);
    var s = this, a = function() {
      var f = E, l = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = We(n)), E = s, _ = r.apply(s, arguments), N(_) && s._r.push(_), E = f, s.selector = l, s.isReverted = !1, _;
    };
    return s.last = a, i === N ? a(s, function(u) {
      return s.add(null, u);
    }) : i ? s[i] = a : a;
  }, t.ignore = function(i) {
    var r = E;
    E = null, i(this), E = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof o ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var a = n.getTweens(), u = n.data.length, f; u--; )
        f = n.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return a.splice(a.indexOf(l), 1);
        }));
      for (a.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, _) {
        return _.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), u = n.data.length; u--; )
        f = n.data[u], f instanceof j ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof U) && f.revert && f.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Nt.length; s--; )
        Nt[s].id === this.id && Nt.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, o;
}(), kn = /* @__PURE__ */ function() {
  function o(e) {
    this.contexts = [], this.scope = e, E && E.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
    dt(i) || (i = {
      matches: i
    });
    var s = new wr(0, n || this.scope), a = s.conditions = {}, u, f, l;
    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? l = 1 : (u = ht.matchMedia(i[f]), u && (Nt.indexOf(s) < 0 && Nt.push(s), (a[f] = u.matches) && (l = 1), u.addListener ? u.addListener(je) : u.addEventListener("change", je)));
    return l && r(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, o;
}(), Pe = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return ur(r);
    });
  },
  timeline: function(t) {
    return new j(t);
  },
  getTweensOf: function(t, e) {
    return L.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    X(t) && (t = ft(t)[0]);
    var n = zt(t || {}).get, s = i ? Ki : ji;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, u, f) {
      return s((tt[a] && tt[a].get || n)(t, a, u, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ft(t), t.length > 1) {
      var r = t.map(function(l) {
        return J.quickSetter(l, e, i);
      }), n = r.length;
      return function(l) {
        for (var _ = n; _--; )
          r[_](l);
      };
    }
    t = t[0] || {};
    var s = tt[e], a = zt(t), u = a.harness && (a.harness.aliases || {})[e] || e, f = s ? function(l) {
      var _ = new s();
      Yt._pt = 0, _.init(t, i ? l + i : l, Yt, 0, [t]), _.render(1, _), Yt._pt && _i(1, Yt);
    } : a.set(t, u);
    return s ? f : function(l) {
      return f(t, u, i ? l + i : l, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, at((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(u, f, l) {
      return n.resetTo(e, u, f, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return L.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = It(t.ease, Gt.ease)), xi(Gt, t || {});
  },
  config: function(t) {
    return xi(nt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !tt[a] && !st[a] && oe(e + " effect requires " + a + " plugin.");
    }), Re[e] = function(a, u, f) {
      return i(ft(a), at(u || {}, n), f);
    }, s && (j.prototype[e] = function(a, u, f) {
      return this.add(Re[e](a, dt(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    C[t] = It(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? It(t, e) : C;
  },
  getById: function(t) {
    return L.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new j(t), r, n;
    for (i.smoothChildTiming = K(t.smoothChildTiming), L.remove(i), i._dp = 0, i._time = i._tTime = L._time, r = L._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
    return _t(L, i, 0), i;
  },
  context: function(t, e) {
    return t ? new wr(t, e) : E;
  },
  matchMedia: function(t) {
    return new kn(t);
  },
  matchMediaRefresh: function() {
    return Nt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || je();
  },
  addEventListener: function(t, e) {
    var i = xe[t] || (xe[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = xe[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: an,
    wrapYoyo: on,
    distribute: ir,
    random: nr,
    snap: rr,
    normalize: sn,
    getUnit: G,
    clamp: tn,
    splitColor: fr,
    toArray: ft,
    selector: We,
    mapRange: ar,
    pipe: rn,
    unitize: nn,
    interpolate: un,
    shuffle: er
  },
  install: qi,
  effects: Re,
  ticker: et,
  updateRoot: j.updateRoot,
  plugins: tt,
  globalTimeline: L,
  core: {
    PropTween: Z,
    globals: Xi,
    Tween: U,
    Timeline: j,
    Animation: he,
    getCache: zt,
    _removeLinkedListItem: ke,
    reverting: function() {
      return W;
    },
    context: function(t) {
      return t && E && (E.data.push(t), t._ctx = E), E;
    },
    suppressOverwrites: function(t) {
      return Je = t;
    }
  }
};
Q("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Pe[o] = U[o];
});
et.add(j.updateRoot);
Yt = Pe.to({}, {
  duration: 0
});
var Mn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, Dn = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Mn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Ie = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var u, f;
        if (X(n) && (u = {}, Q(n, function(l) {
          return u[l] = 1;
        }), n = u), e) {
          u = {};
          for (f in n)
            u[f] = e(n[f]);
          n = u;
        }
        Dn(a, n);
      };
    }
  };
}, J = Pe.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, a, u;
    this.tween = i;
    for (s in e)
      u = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Ie("roundProps", Ge), Ie("modifiers"), Ie("snap", rr)) || Pe;
U.version = j.version = J.version = "3.14.2";
Yi = 1;
ei() && Qt();
C.Power0;
C.Power1;
C.Power2;
C.Power3;
C.Power4;
C.Linear;
C.Quad;
C.Cubic;
C.Quart;
C.Quint;
C.Strong;
C.Elastic;
C.Back;
C.SteppedEase;
C.Bounce;
C.Sine;
C.Expo;
C.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Oi, Tt, Xt, ci, Ft, Ci, di, An = function() {
  return typeof window < "u";
}, vt = {}, Et = 180 / Math.PI, Wt = Math.PI / 180, Vt = Math.atan2, ki = 1e8, pi = /([A-Z])/g, Rn = /(left|right|width|margin|padding|x)/i, En = /[\s,\(]\S/, ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ke = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Fn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, zn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ln = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, In = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Sr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Pr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Nn = function(t, e, i) {
  return t.style[e] = i;
}, Bn = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Vn = function(t, e, i) {
  return t._gsap[e] = i;
}, Un = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Yn = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, qn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, I = "transform", H = I + "Origin", Xn = function o(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ct[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = gt(r, a);
      }) : this.tfm[t] = s.x ? s[t] : gt(r, t), t === H && (this.tfm.zOrigin = s.zOrigin);
    else
      return ct.transform.split(",").forEach(function(a) {
        return o.call(i, a, e);
      });
    if (this.props.indexOf(I) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(H, e, "")), t = I;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Or = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Wn = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(pi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = di(), (!n || !n.isStart) && !i[I] && (Or(i), r.zOrigin && i[H] && (i[H] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Cr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Wn,
    save: Xn
  };
  return t._gsap || J.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, kr, Qe = function(t, e) {
  var i = Tt.createElementNS ? Tt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tt.createElement(t);
  return i && i.style ? i : Tt.createElement(t);
}, rt = function o(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(pi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && o(t, Zt(e) || e, 1) || "";
}, Mi = "O,Moz,ms,Ms,Webkit".split(","), Zt = function(t, e, i) {
  var r = e || Ft, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Mi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Mi[s] : "") + t;
}, Ze = function() {
  An() && window.document && (Oi = window, Tt = Oi.document, Xt = Tt.documentElement, Ft = Qe("div") || {
    style: {}
  }, Qe("div"), I = Zt(I), H = I + "Origin", Ft.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kr = !!Zt("perspective"), di = J.core.reverting, ci = 1);
}, Di = function(t) {
  var e = t.ownerSVGElement, i = Qe("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), Xt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), Xt.removeChild(i), n;
}, Ai = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Mr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Di(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Di(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ai(t, ["x", "cx", "x1"]) || 0,
    y: +Ai(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Dr = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mr(t));
}, Ot = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== H && (e = I), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(pi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, bt = function(t, e, i, r, n, s) {
  var a = new Z(t._pt, e, i, 0, 1, s ? Pr : Sr);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
}, Ri = {
  deg: 1,
  rad: 1,
  turn: 1
}, Gn = {
  grid: 1,
  flex: 1
}, Ct = function o(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = Ft.style, u = Rn.test(e), f = t.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", m, h, p, y;
  if (r === s || !n || Ri[r] || Ri[s])
    return n;
  if (s !== "px" && !c && (n = o(t, e, i, "px")), y = t.getCTM && Dr(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return m = y ? t.getBBox()[u ? "width" : "height"] : t[l], B(d ? n / m * _ : n / 100 * m);
  if (a[u ? "width" : "height"] = _ + (c ? s : r), h = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, y && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Tt || !h.appendChild) && (h = Tt.body), p = h._gsap, p && d && p.width && u && p.time === et.time && !p.uncache)
    return B(n / p.width * _);
  if (d && (e === "height" || e === "width")) {
    var v = t.style[e];
    t.style[e] = _ + r, m = t[l], v ? t.style[e] = v : Ot(t, e);
  } else
    (d || s === "%") && !Gn[rt(h, "display")] && (a.position = rt(t, "position")), h === t && (a.position = "static"), h.appendChild(Ft), m = Ft[l], h.removeChild(Ft), a.position = "absolute";
  return u && d && (p = zt(h), p.time = et.time, p.width = h[l]), B(c ? m * n / _ : m && n ? _ / m * n : 0);
}, gt = function(t, e, i, r) {
  var n;
  return ci || Ze(), e in ct && e !== "transform" && (e = ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ce(rt(t, H)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Oe[e] && Oe[e](t, e, i) || rt(t, e) || Gi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ct(t, e, n, i) + i : n;
}, $n = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Zt(e, t, 1), s = n && rt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = rt(t, "borderTopColor"));
  }
  var a = new Z(this._pt, t.style, e, 0, 1, Tr), u = 0, f = 0, l, _, c, d, m, h, p, y, v, T, b, g;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = rt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (h = t.style[e], t.style[e] = r, r = rt(t, e) || r, h ? t.style[e] = h : Ot(t, e)), l = [i, r], hr(l), i = l[0], r = l[1], c = i.match(Ut) || [], g = r.match(Ut) || [], g.length) {
    for (; _ = Ut.exec(r); )
      p = _[0], v = r.substring(u, _.index), m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1), p !== (h = c[f++] || "") && (d = parseFloat(h) || 0, b = h.substr((d + "").length), p.charAt(1) === "=" && (p = qt(d, p) + b), y = parseFloat(p), T = p.substr((y + "").length), u = Ut.lastIndex - T.length, T || (T = T || nt.units[e] || b, u === r.length && (r += T, a.e += T)), b !== T && (d = Ct(t, e, h, T) || 0), a._pt = {
        _next: a._pt,
        p: v || f === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? Pr : Sr;
  return Ui.test(r) && (a.e = 0), this._pt = a, a;
}, Ei = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, jn = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Ei[i] || i, e[1] = Ei[r] || r, e.join(" ");
}, Kn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, a, u, f;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], vt[a] && (u = 1, a = a === "transformOrigin" ? H : I), Ot(i, a);
    u && (Ot(i, I), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, Or(r)));
  }
}, Oe = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Z(t._pt, e, i, 0, 0, Kn);
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
}, _e = [1, 0, 0, 1, 0, 0], Ar = {}, Rr = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Fi = function(t) {
  var e = rt(t, I);
  return Rr(e) ? _e : e.substr(7).match(Vi).map(B);
}, mi = function(t, e) {
  var i = t._gsap || zt(t), r = t.style, n = Fi(t), s, a, u, f;
  return i.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? _e : n) : (n === _e && !t.offsetParent && t !== Xt && !i.svg && (u = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, a = t.nextElementSibling, Xt.appendChild(t)), n = Fi(t), u ? r.display = u : Ot(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Xt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, He = function(t, e, i, r, n, s) {
  var a = t._gsap, u = n || mi(t, !0), f = a.xOrigin || 0, l = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, d = u[0], m = u[1], h = u[2], p = u[3], y = u[4], v = u[5], T = e.split(" "), b = parseFloat(T[0]) || 0, g = parseFloat(T[1]) || 0, S, w, P, x;
  i ? u !== _e && (w = d * p - m * h) && (P = b * (p / w) + g * (-h / w) + (h * v - p * y) / w, x = b * (-m / w) + g * (d / w) - (d * v - m * y) / w, b = P, g = x) : (S = Mr(t), b = S.x + (~T[0].indexOf("%") ? b / 100 * S.width : b), g = S.y + (~(T[1] || T[0]).indexOf("%") ? g / 100 * S.height : g)), r || r !== !1 && a.smooth ? (y = b - f, v = g - l, a.xOffset = _ + (y * d + v * h) - y, a.yOffset = c + (y * m + v * p) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = g, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[H] = "0px 0px", s && (bt(s, a, "xOrigin", f, b), bt(s, a, "yOrigin", l, g), bt(s, a, "xOffset", _, a.xOffset), bt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + g);
}, ce = function(t, e) {
  var i = t._gsap || new pr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), f = rt(t, H) || "0", l, _, c, d, m, h, p, y, v, T, b, g, S, w, P, x, O, R, k, M, Y, V, F, q, lt, pe, Ht, Jt, Mt, gi, pt, Dt;
  return l = _ = c = h = p = y = v = T = b = 0, d = m = 1, i.svg = !!(t.getCTM && Dr(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[I] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[I] !== "none" ? u[I] : "")), r.scale = r.rotate = r.translate = "none"), w = mi(t, i.svg), i.svg && (i.uncache ? (lt = t.getBBox(), f = i.xOrigin - lt.x + "px " + (i.yOrigin - lt.y) + "px", q = "") : q = !e && t.getAttribute("data-svg-origin"), He(t, q || f, !!q || i.originIsAbsolute, i.smooth !== !1, w)), g = i.xOrigin || 0, S = i.yOrigin || 0, w !== _e && (R = w[0], k = w[1], M = w[2], Y = w[3], l = V = w[4], _ = F = w[5], w.length === 6 ? (d = Math.sqrt(R * R + k * k), m = Math.sqrt(Y * Y + M * M), h = R || k ? Vt(k, R) * Et : 0, v = M || Y ? Vt(M, Y) * Et + h : 0, v && (m *= Math.abs(Math.cos(v * Wt))), i.svg && (l -= g - (g * R + S * M), _ -= S - (g * k + S * Y))) : (Dt = w[6], gi = w[7], Ht = w[8], Jt = w[9], Mt = w[10], pt = w[11], l = w[12], _ = w[13], c = w[14], P = Vt(Dt, Mt), p = P * Et, P && (x = Math.cos(-P), O = Math.sin(-P), q = V * x + Ht * O, lt = F * x + Jt * O, pe = Dt * x + Mt * O, Ht = V * -O + Ht * x, Jt = F * -O + Jt * x, Mt = Dt * -O + Mt * x, pt = gi * -O + pt * x, V = q, F = lt, Dt = pe), P = Vt(-M, Mt), y = P * Et, P && (x = Math.cos(-P), O = Math.sin(-P), q = R * x - Ht * O, lt = k * x - Jt * O, pe = M * x - Mt * O, pt = Y * O + pt * x, R = q, k = lt, M = pe), P = Vt(k, R), h = P * Et, P && (x = Math.cos(P), O = Math.sin(P), q = R * x + k * O, lt = V * x + F * O, k = k * x - R * O, F = F * x - V * O, R = q, V = lt), p && Math.abs(p) + Math.abs(h) > 359.9 && (p = h = 0, y = 180 - y), d = B(Math.sqrt(R * R + k * k + M * M)), m = B(Math.sqrt(F * F + Dt * Dt)), P = Vt(V, F), v = Math.abs(P) > 2e-4 ? P * Et : 0, b = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (q = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Rr(rt(t, I)), q && t.setAttribute("transform", q))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1, v += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (m *= -1, v += v <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = B(d), i.scaleY = B(m), i.rotation = B(h) + a, i.rotationX = B(p) + a, i.rotationY = B(y) + a, i.skewX = v + a, i.skewY = T + a, i.transformPerspective = b + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[H] = Ce(f)), i.xOffset = i.yOffset = 0, i.force3D = nt.force3D, i.renderTransform = i.svg ? Zn : kr ? Er : Qn, i.uncache = 0, i;
}, Ce = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ne = function(t, e, i) {
  var r = G(e);
  return B(parseFloat(e) + parseFloat(Ct(t, "x", i + "px", r))) + r;
}, Qn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Er(t, e);
}, At = "0deg", te = "0px", Rt = ") ", Er = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, u = i.z, f = i.rotation, l = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, m = i.scaleX, h = i.scaleY, p = i.transformPerspective, y = i.force3D, v = i.target, T = i.zOrigin, b = "", g = y === "auto" && t && t !== 1 || y === !0;
  if (T && (_ !== At || l !== At)) {
    var S = parseFloat(l) * Wt, w = Math.sin(S), P = Math.cos(S), x;
    S = parseFloat(_) * Wt, x = Math.cos(S), s = Ne(v, s, w * x * -T), a = Ne(v, a, -Math.sin(S) * -T), u = Ne(v, u, P * x * -T + T);
  }
  p !== te && (b += "perspective(" + p + Rt), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (g || s !== te || a !== te || u !== te) && (b += u !== te || g ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Rt), f !== At && (b += "rotate(" + f + Rt), l !== At && (b += "rotateY(" + l + Rt), _ !== At && (b += "rotateX(" + _ + Rt), (c !== At || d !== At) && (b += "skew(" + c + ", " + d + Rt), (m !== 1 || h !== 1) && (b += "scale(" + m + ", " + h + Rt), v.style[I] = b || "translate(0, 0)";
}, Zn = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, u = i.rotation, f = i.skewX, l = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, m = i.xOrigin, h = i.yOrigin, p = i.xOffset, y = i.yOffset, v = i.forceCSS, T = parseFloat(s), b = parseFloat(a), g, S, w, P, x;
  u = parseFloat(u), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, u += l), u || f ? (u *= Wt, f *= Wt, g = Math.cos(u) * _, S = Math.sin(u) * _, w = Math.sin(u - f) * -c, P = Math.cos(u - f) * c, f && (l *= Wt, x = Math.tan(f - l), x = Math.sqrt(1 + x * x), w *= x, P *= x, l && (x = Math.tan(l), x = Math.sqrt(1 + x * x), g *= x, S *= x)), g = B(g), S = B(S), w = B(w), P = B(P)) : (g = _, P = c, S = w = 0), (T && !~(s + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (T = Ct(d, "x", s, "px"), b = Ct(d, "y", a, "px")), (m || h || p || y) && (T = B(T + m - (m * g + h * w) + p), b = B(b + h - (m * S + h * P) + y)), (r || n) && (x = d.getBBox(), T = B(T + r / 100 * x.width), b = B(b + n / 100 * x.height)), x = "matrix(" + g + "," + S + "," + w + "," + P + "," + T + "," + b + ")", d.setAttribute("transform", x), v && (d.style[I] = x);
}, Hn = function(t, e, i, r, n) {
  var s = 360, a = X(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? Et : 1), f = u - r, l = r + f + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), _ === "cw" && f < 0 ? f = (f + s * ki) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * ki) % s - ~~(f / s) * s)), t._pt = c = new Z(t._pt, e, i, r, f, Fn), c.e = l, c.u = "deg", t._props.push(i), c;
}, zi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Jn = function(t, e, i) {
  var r = zi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, u, f, l, _, c, d, m;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[I] = e, a = ce(i, 1), Ot(i, I), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[I], s[I] = e, a = ce(i, 1), s[I] = f);
  for (u in vt)
    f = r[u], l = a[u], f !== l && n.indexOf(u) < 0 && (d = G(f), m = G(l), _ = d !== m ? Ct(i, u, f, m) : parseFloat(f), c = parseFloat(l), t._pt = new Z(t._pt, a, u, _, c - _, Ke), t._pt.u = m || 0, t._props.push(u));
  zi(a, r);
};
Q("padding,margin,Width,Radius", function(o, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  Oe[t > 1 ? "border" + o : o] = function(a, u, f, l, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(m) {
        return gt(a, m, f);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (l + "").split(" "), d = {}, s.forEach(function(m, h) {
      return d[m] = c[h] = c[h] || c[(h - 1) / 2 | 0];
    }), a.init(u, d, _);
  };
});
var Fr = {
  name: "css",
  register: Ze,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, a = t.style, u = i.vars.startAt, f, l, _, c, d, m, h, p, y, v, T, b, g, S, w, P, x;
    ci || Ze(), this.styles = this.styles || Cr(t), P = this.styles.props, this.tween = i;
    for (h in e)
      if (h !== "autoRound" && (l = e[h], !(tt[h] && mr(h, e, i, r, t, n)))) {
        if (d = typeof l, m = Oe[h], d === "function" && (l = l.call(i, r, t, n), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = fe(l)), m)
          m(this, t, h, l, i) && (w = 1);
        else if (h.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(h) + "").trim(), l += "", St.lastIndex = 0, St.test(f) || (p = G(f), y = G(l), y ? p !== y && (f = Ct(t, h, f, y) + y) : p && (l += p)), this.add(a, "setProperty", f, l, r, n, 0, 0, h), s.push(h), P.push(h, 0, a[h]);
        else if (d !== "undefined") {
          if (u && h in u ? (f = typeof u[h] == "function" ? u[h].call(i, r, t, n) : u[h], X(f) && ~f.indexOf("random(") && (f = fe(f)), G(f + "") || f === "auto" || (f += nt.units[h] || G(gt(t, h)) || ""), (f + "").charAt(1) === "=" && (f = gt(t, h))) : f = gt(t, h), c = parseFloat(f), v = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), v && (l = l.substr(2)), _ = parseFloat(l), h in ct && (h === "autoAlpha" && (c === 1 && gt(t, "visibility") === "hidden" && _ && (c = 0), P.push("visibility", 0, a.visibility), bt(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), h !== "scale" && h !== "transform" && (h = ct[h], ~h.indexOf(",") && (h = h.split(",")[0]))), T = h in vt, T) {
            if (this.styles.save(h), x = l, d === "string" && l.substring(0, 6) === "var(--") {
              if (l = rt(t, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
                var O = t.style.perspective;
                t.style.perspective = l, l = rt(t, "perspective"), O ? t.style.perspective = O : Ot(t, "perspective");
              }
              _ = parseFloat(l);
            }
            if (b || (g = t._gsap, g.renderTransform && !e.parseTransform || ce(t, e.parseTransform), S = e.smoothOrigin !== !1 && g.smooth, b = this._pt = new Z(this._pt, a, I, 0, 1, g.renderTransform, g, 0, -1), b.dep = 1), h === "scale")
              this._pt = new Z(this._pt, g, "scaleY", g.scaleY, (v ? qt(g.scaleY, v + _) : _) - g.scaleY || 0, Ke), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              P.push(H, 0, a[H]), l = jn(l), g.svg ? He(t, l, 0, S, 0, this) : (y = parseFloat(l.split(" ")[2]) || 0, y !== g.zOrigin && bt(this, g, "zOrigin", g.zOrigin, y), bt(this, a, h, Ce(f), Ce(l)));
              continue;
            } else if (h === "svgOrigin") {
              He(t, l, 1, S, 0, this);
              continue;
            } else if (h in Ar) {
              Hn(this, g, h, c, v ? qt(c, v + l) : l);
              continue;
            } else if (h === "smoothOrigin") {
              bt(this, g, "smooth", g.smooth, l);
              continue;
            } else if (h === "force3D") {
              g[h] = l;
              continue;
            } else if (h === "transform") {
              Jn(this, l, t);
              continue;
            }
          } else h in a || (h = Zt(h) || h);
          if (T || (_ || _ === 0) && (c || c === 0) && !En.test(l) && h in a)
            p = (f + "").substr((c + "").length), _ || (_ = 0), y = G(l) || (h in nt.units ? nt.units[h] : p), p !== y && (c = Ct(t, h, f, y)), this._pt = new Z(this._pt, T ? g : a, h, c, (v ? qt(c, v + _) : _) - c, !T && (y === "px" || h === "zIndex") && e.autoRound !== !1 ? In : Ke), this._pt.u = y || 0, T && x !== l ? (this._pt.b = f, this._pt.e = x, this._pt.r = Ln) : p !== y && y !== "%" && (this._pt.b = f, this._pt.r = zn);
          else if (h in a)
            $n.call(this, t, h, f, v ? v + l : l);
          else if (h in t)
            this.add(t, h, f || t[h], v ? v + l : l, r, n);
          else if (h !== "parseTransform") {
            ri(h, l);
            continue;
          }
          T || (h in a ? P.push(h, 0, a[h]) : typeof t[h] == "function" ? P.push(h, 2, t[h]()) : P.push(h, 1, f || t[h])), s.push(h);
        }
      }
    w && br(this);
  },
  render: function(t, e) {
    if (e.tween._time || !di())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: gt,
  aliases: ct,
  getSetter: function(t, e, i) {
    var r = ct[e];
    return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== H && (t._gsap.x || gt(t, "x")) ? i && Ci === i ? e === "scale" ? Un : Vn : (Ci = i || {}) && (e === "scale" ? Yn : qn) : t.style && !ti(t.style[e]) ? Nn : ~e.indexOf("-") ? Bn : hi(t, e);
  },
  core: {
    _removeProperty: Ot,
    _getMatrix: mi
  }
};
J.utils.checkPrefix = Zt;
J.core.getStyleSaver = Cr;
(function(o, t, e, i) {
  var r = Q(o + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  Q(t, function(n) {
    nt.units[n] = "deg", Ar[n] = 1;
  }), ct[r[13]] = o + "," + t, Q(i, function(n) {
    var s = n.split(":");
    ct[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  nt.units[o] = "px";
});
J.registerPlugin(Fr);
var re = J.registerPlugin(Fr) || J;
re.core.Tween;
const ge = {
  sensitivity: 1,
  easeFactor: 0.05,
  parallaxStrength: 15,
  cloneCount: 4
}, Li = (o, t, e) => o + (t - o) * e;
function ts(o) {
  const t = o.getAttribute("data-sps-slides");
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return [];
    }
  const e = o.querySelectorAll("[data-sps-slide]");
  return Array.from(e).map((i) => ({
    img: i.getAttribute("data-img") ?? "",
    alt: i.getAttribute("data-alt") ?? ""
  }));
}
function es(o) {
  return o.map(
    (t) => `
    <div class="sps-slide">
      <div class="sps-slide-inner">
        <div data-p class="sps-parallax">
          <img src="${t.img}" alt="${t.alt || ""}" />
        </div>
      </div>
    </div>
  `
  ).join("");
}
function is(o) {
  o._spsCleanup && o._spsCleanup();
  const t = o.querySelector("[data-sps-track]");
  if (!t) return;
  const e = ts(o), i = t.children.length > 0 && t.querySelectorAll("[data-p]").length > 0;
  if (!e.length && !i) return;
  e.length > 0 && (t.innerHTML = es(e));
  const r = Number(o.getAttribute("data-sps-sensitivity")) || ge.sensitivity, n = Number(o.getAttribute("data-sps-ease")) || ge.easeFactor, s = Number(o.getAttribute("data-sps-parallax-strength")) ?? ge.parallaxStrength, a = Number(o.getAttribute("data-sps-clones")) || ge.cloneCount, u = [...t.querySelectorAll(".sps-slide")], f = u.length;
  if (!f) return;
  const l = () => {
    const g = t.querySelector(".sps-slide");
    if (!g) return { itemWidth: 0, fullSetWidth: 0 };
    const S = getComputedStyle(g), w = g.offsetWidth + parseFloat(S.marginRight || 0);
    return {
      itemWidth: w,
      fullSetWidth: f * w
    };
  };
  for (let g = 0; g < a; g++)
    u.forEach((S) => {
      t.appendChild(S.cloneNode(!0));
    });
  const _ = [...t.querySelectorAll(".sps-slide")], c = [...t.querySelectorAll("[data-p]")], d = re.quickSetter(t, "x", "px");
  let m = 0, h = 0, p = l();
  const y = () => {
    const g = o.getBoundingClientRect(), S = g.left + g.width / 2;
    c.forEach((w, P) => {
      const x = _[P];
      if (!x) return;
      const O = x.getBoundingClientRect(), k = O.left + O.width / 2 - S, Y = Math.max(
        -1,
        Math.min(1, k / (g.width * 0.5))
      ) * s, V = parseFloat(w.dataset.parallaxLerp ?? "0"), F = Li(V, Y, 0.08);
      w.dataset.parallaxLerp = String(F), w.style.transform = `translateX(${F}%)`;
    });
  }, v = (g) => {
    g.preventDefault(), m += g.deltaY * r;
  };
  let T;
  T = () => {
    if (p = l(), p.fullSetWidth <= 0) return;
    h = Li(h, m, n);
    let g = h % p.fullSetWidth;
    g < 0 && (g += p.fullSetWidth), d(-g), y();
  }, re.ticker.lagSmoothing(0), o.addEventListener("wheel", v, { passive: !1 }), re.ticker.add(T);
  const b = new ResizeObserver(() => {
    o.getBoundingClientRect().width && y();
  });
  b.observe(o), o._spsCleanup = () => {
    o.removeEventListener("wheel", v), re.ticker.remove(T), b.disconnect(), o._spsCleanup = null;
  };
}
if (typeof window < "u") {
  const o = () => {
    document.querySelectorAll('[data-component="smooothy-parallax-slider"]').forEach(is);
  };
  document.readyState === "complete" ? o() : window.addEventListener("load", o, { once: !0 });
}
export {
  is as initSmooothyParallaxSlider
};

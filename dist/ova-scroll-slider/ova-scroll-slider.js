var yl = Object.defineProperty;
var wl = (s, t, i) => t in s ? yl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var R = (s, t, i) => wl(s, typeof t != "symbol" ? t + "" : t, i);
function ri(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function $o(s, t) {
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
}, mr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, zs, Yt, lt, Re = 1e8, rt = 1 / Re, fs = Math.PI * 2, xl = fs / 4, Sl = 0, Go = Math.sqrt, Tl = Math.cos, bl = Math.sin, At = function(t) {
  return typeof t == "string";
}, gt = function(t) {
  return typeof t == "function";
}, li = function(t) {
  return typeof t == "number";
}, Ls = function(t) {
  return typeof t > "u";
}, Ze = function(t) {
  return typeof t == "object";
}, ue = function(t) {
  return t !== !1;
}, Ns = function() {
  return typeof window < "u";
}, cn = function(t) {
  return gt(t) || At(t);
}, Ko = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Kt = Array.isArray, kl = /random\([^)]+\)/g, Cl = /,\s*/g, ao = /(?:-?\.?\d|\.)+/gi, Qo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Kn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Zo = /[+-]=-?[.\d]+/, Pl = /[^,'"\[\]\s]+/gi, El = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ct, Ue, cs, Fs, Ce = {}, An = {}, jo, Jo = function(t) {
  return (An = vr(t, Ce)) && de;
}, Is = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, Zr = function(t, i) {
  return !i && console.warn(t);
}, ta = function(t, i) {
  return t && (Ce[t] = i) && An && (An[t] = i) || Ce;
}, jr = function() {
  return 0;
}, Ol = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, bn = {
  suppressEvents: !0,
  kill: !1
}, Ml = {
  suppressEvents: !0
}, Ys = {}, Ti = [], hs = {}, ea, ye = {}, Qn = {}, lo = 30, kn = [], Bs = "", Xs = function(t) {
  var i = t[0], e, r;
  if (Ze(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = kn.length; r-- && !kn[r].targetTest(i); )
      ;
    e = kn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new ka(t[r], e))) || t.splice(r, 1);
  return t;
}, Hi = function(t) {
  return t._gsap || Xs(Ae(t))[0]._gsap;
}, ia = function(t, i, e) {
  return (e = t[i]) && gt(e) ? t[i]() : Ls(e) && t.getAttribute && t.getAttribute(i) || e;
}, fe = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, wt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ft = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, cr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, Dl = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, zn = function() {
  var t = Ti.length, i = Ti.slice(0), e, r;
  for (hs = {}, Ti.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Ws = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, ra = function(t, i, e, r) {
  Ti.length && !Yt && zn(), t.render(i, e, !!(Yt && i < 0 && Ws(t))), Ti.length && !Yt && zn();
}, na = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(Pl).length < 2 ? i : At(t) ? t.trim() : t;
}, sa = function(t) {
  return t;
}, Pe = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, Rl = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, vr = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, uo = function s(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = Ze(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, Ln = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, Ir = function(t) {
  var i = t.parent || ct, e = t.keyframes ? Rl(Kt(t.keyframes)) : Pe;
  if (ue(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, Al = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, oa = function(t, i, e, r, n) {
  var o = t[r], a;
  if (n)
    for (a = i[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i;
}, Vn = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, o = i._next;
  n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, Ci = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Vi = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, zl = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, ds = function(t, i, e, r) {
  return t._startAt && (Yt ? t._startAt.revert(bn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, Ll = function s(t) {
  return !t || t._ts && s(t.parent);
}, fo = function(t) {
  return t._repeat ? yr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, yr = function(t, i) {
  var e = Math.floor(t = ft(t / i));
  return t && e === t ? e - 1 : e;
}, Nn = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, Un = function(t) {
  return t._end = ft(t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0));
}, qn = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = ft(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Un(t), e._dirty || Vi(e, t)), t;
}, aa = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = Nn(t.rawTime(), i), (!i._dur || an(0, i.totalDuration(), e) - i._tTime > rt) && i.render(e, !0)), Vi(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -rt;
  }
}, $e = function(t, i, e, r) {
  return i.parent && Ci(i), i._start = ft((li(e) ? e : e || t !== ct ? Oe(t, e, i) : t._time) + i._delay), i._end = ft(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), oa(t, i, "_first", "_last", t._sort ? "_start" : 0), _s(i) || (t._recent = i), r || aa(t, i), t._ts < 0 && qn(t, t._tTime), t;
}, la = function(t, i) {
  return (Ce.ScrollTrigger || Is("scrollTrigger", i)) && Ce.ScrollTrigger.create(i, t);
}, ua = function(t, i, e, r, n) {
  if (Vs(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Yt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ea !== xe.frame)
    return Ti.push(t), t._lazy = [n, r], 1;
}, Nl = function s(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
}, _s = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, Fl = function(t, i, e, r) {
  var n = t.ratio, o = i < 0 || !i && (!t._start && Nl(t) && !(!t._initted && _s(t)) || (t._ts < 0 || t._dp._ts < 0) && !_s(t)) ? 0 : 1, a = t._rDelay, l = 0, u, f, d;
  if (a && t._repeat && (l = an(0, t._tDur, i), f = yr(l, a), t._yoyo && f & 1 && (o = 1 - o), f !== yr(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Yt || r || t._zTime === rt || !i && t._zTime) {
    if (!t._initted && ua(t, i, r, e, l))
      return;
    for (d = t._zTime, t._zTime = i || (e ? rt : 0), e || (e = i && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    i < 0 && ds(t, i, e, !0), t._onUpdate && !e && Te(t, "onUpdate"), l && t._repeat && !e && t.parent && Te(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && Ci(t, 1), !e && !Yt && (Te(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, Il = function(t, i, e) {
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
}, wr = function(t, i, e, r) {
  var n = t._repeat, o = ft(i) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ft(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && qn(t, t._tTime = t._tDur * a), t.parent && Un(t), e || Vi(t.parent, t), t;
}, co = function(t) {
  return t instanceof se ? Vi(t) : wr(t, t._dur);
}, Yl = {
  _start: 0,
  endTime: jr,
  totalDuration: jr
}, Oe = function s(t, i, e) {
  var r = t.labels, n = t._recent || Yl, o = t.duration() >= Re ? n.endTime(!1) : t._dur, a, l, u;
  return At(i) && (isNaN(i) || i in r) ? (l = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (l = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (l = l / 100 * (Kt(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, i.substr(0, a - 1), e) + l : o + l)) : i == null ? o : +i;
}, Yr = function(t, i, e) {
  var r = li(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, l;
  if (r && (o.duration = i[1]), o.parent = e, t) {
    for (a = o, l = e; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = ue(l.vars.inherit) && l.parent;
    o.immediateRender = ue(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1];
  }
  return new kt(i[0], o, i[n + 1]);
}, Mi = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, an = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, $t = function(t, i) {
  return !At(t) || !(i = El.exec(t)) ? "" : i[1];
}, Bl = function(t, i, e) {
  return Mi(e, function(r) {
    return an(t, i, r);
  });
}, ps = [].slice, fa = function(t, i) {
  return t && Ze(t) && "length" in t && (!i && !t.length || t.length - 1 in t && Ze(t[0])) && !t.nodeType && t !== Ue;
}, Xl = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return At(r) && !i || fa(r, 1) ? (n = e).push.apply(n, Ae(r)) : e.push(r);
  }) || e;
}, Ae = function(t, i, e) {
  return lt && !i && lt.selector ? lt.selector(t) : At(t) && !e && (cs || !xr()) ? ps.call((i || Fs).querySelectorAll(t), 0) : Kt(t) ? Xl(t, e) : fa(t) ? ps.call(t, 0) : t ? [t] : [];
}, gs = function(t) {
  return t = Ae(t)[0] || Zr("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return Ae(i, e.querySelectorAll ? e : e === t ? Zr("Invalid scope") || Fs.createElement("div") : t);
  };
}, ca = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ha = function(t) {
  if (gt(t))
    return t;
  var i = Ze(t) ? t : {
    each: t
  }, e = Ui(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = i.axis, f = r, d = r;
  return At(r) ? f = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && l && (f = r[0], d = r[1]), function(h, c, p) {
    var _ = (p || i).length, g = o[_], y, w, b, v, x, k, T, P, C;
    if (!g) {
      if (C = i.grid === "auto" ? 0 : (i.grid || [1, Re])[1], !C) {
        for (T = -Re; T < (T = p[C++].getBoundingClientRect().left) && C < _; )
          ;
        C < _ && C--;
      }
      for (g = o[_] = [], y = l ? Math.min(C, _) * f - 0.5 : r % C, w = C === Re ? 0 : l ? _ * d / C - 0.5 : r / C | 0, T = 0, P = Re, k = 0; k < _; k++)
        b = k % C - y, v = w - (k / C | 0), g[k] = x = u ? Math.abs(u === "y" ? v : b) : Go(b * b + v * v), x > T && (T = x), x < P && (P = x);
      r === "random" && ca(g), g.max = T - P, g.min = P, g.v = _ = (parseFloat(i.amount) || parseFloat(i.each) * (C > _ ? _ - 1 : u ? u === "y" ? _ / C : C : Math.max(C, _ / C)) || 0) * (r === "edges" ? -1 : 1), g.b = _ < 0 ? n - _ : n, g.u = $t(i.amount || i.each) || 0, e = e && _ < 0 ? Sa(e) : e;
    }
    return _ = (g[h] - g.min) / g.max || 0, ft(g.b + (e ? e(_) : _) * g.v) + g.u;
  };
}, ms = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = ft(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (li(e) ? 0 : $t(e));
  };
}, da = function(t, i) {
  var e = Kt(t), r, n;
  return !e && Ze(t) && (r = e = t.radius || Re, t.values ? (t = Ae(t.values), (n = !li(t[0])) && (r *= r)) : t = ms(t.increment)), Mi(i, e ? gt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= r ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = Re, f = 0, d = t.length, h, c; d--; )
      n ? (h = t[d].x - a, c = t[d].y - l, h = h * h + c * c) : h = Math.abs(t[d] - a), h < u && (u = h, f = d);
    return f = !r || u <= r ? t[f] : o, n || f === o || li(o) ? f : f + $t(o);
  } : ms(t));
}, _a = function(t, i, e, r) {
  return Mi(Kt(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return Kt(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, Wl = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}, Hl = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || $t(e));
  };
}, Vl = function(t, i, e) {
  return ga(t, i, 0, 1, e);
}, pa = function(t, i, e) {
  return Mi(e, function(r) {
    return t[~~i(r)];
  });
}, Ul = function s(t, i, e) {
  var r = i - t;
  return Kt(t) ? pa(t, s(0, t.length), i) : Mi(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, ql = function s(t, i, e) {
  var r = i - t, n = r * 2;
  return Kt(t) ? pa(t, s(0, t.length - 1), i) : Mi(e, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
  });
}, Jr = function(t) {
  return t.replace(kl, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Cl);
    return _a(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ga = function(t, i, e, r, n) {
  var o = i - t, a = r - e;
  return Mi(n, function(l) {
    return e + ((l - t) / o * a || 0);
  });
}, $l = function s(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(c) {
    return (1 - c) * t + c * i;
  };
  if (!n) {
    var o = At(t), a = {}, l, u, f, d, h;
    if (e === !0 && (r = 1) && (e = null), o)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (Kt(t) && !Kt(i)) {
      for (f = [], d = t.length, h = d - 2, u = 1; u < d; u++)
        f.push(s(t[u - 1], t[u]));
      d--, n = function(p) {
        p *= d;
        var _ = Math.min(h, ~~p);
        return f[_](p - _);
      }, e = i;
    } else r || (t = vr(Kt(t) ? [] : {}, t));
    if (!f) {
      for (l in i)
        Hs.call(a, t, l, "get", i[l]);
      n = function(p) {
        return $s(p, a) || (o ? t.p : t);
      };
    }
  }
  return Mi(e, n);
}, ho = function(t, i, e) {
  var r = t.labels, n = Re, o, a, l;
  for (o in r)
    a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Te = function(t, i, e) {
  var r = t.vars, n = r[i], o = lt, a = t._ctx, l, u, f;
  if (n)
    return l = r[i + "Params"], u = r.callbackScope || t, e && Ti.length && zn(), a && (lt = a), f = l ? n.apply(u, l) : n.call(u), lt = o, f;
}, Dr = function(t) {
  return Ci(t), t.scrollTrigger && t.scrollTrigger.kill(!!Yt), t.progress() < 1 && Te(t, "onInterrupt"), t;
}, ur, ma = [], va = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ns() || t.headless) {
      var i = t.name, e = gt(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: jr,
        render: $s,
        add: Hs,
        kill: uu,
        modifier: lu,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: qs,
        aliases: {},
        register: 0
      };
      if (xr(), t !== r) {
        if (ye[i])
          return;
        Pe(r, Pe(Ln(t, n), o)), vr(r.prototype, vr(n, Ln(t, o))), ye[r.prop = i] = r, t.targetTest && (kn.push(r), Ys[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      ta(i, r), t.register && t.register(de, r, ce);
    } else
      ma.push(t);
}, it = 255, Rr = {
  aqua: [0, it, it],
  lime: [0, it, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, it],
  navy: [0, 0, 128],
  white: [it, it, it],
  olive: [128, 128, 0],
  yellow: [it, it, 0],
  orange: [it, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [it, 0, 0],
  pink: [it, 192, 203],
  cyan: [0, it, it],
  transparent: [it, it, it, 0]
}, Zn = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * it + 0.5 | 0;
}, ya = function(t, i, e) {
  var r = t ? li(t) ? [t >> 16, t >> 8 & it, t & it] : 0 : Rr.black, n, o, a, l, u, f, d, h, c, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Rr[t])
      r = Rr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & it, r & it, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & it, t & it];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(ao), !i)
        l = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Zn(l + 1 / 3, n, o), r[1] = Zn(l, n, o), r[2] = Zn(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return r = t.match(Qo), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(ao) || Rr.transparent;
    r = r.map(Number);
  }
  return i && !p && (n = r[0] / it, o = r[1] / it, a = r[2] / it, d = Math.max(n, o, a), h = Math.min(n, o, a), f = (d + h) / 2, d === h ? l = u = 0 : (c = d - h, u = f > 0.5 ? c / (2 - d - h) : c / (d + h), l = d === n ? (o - a) / c + (o < a ? 6 : 0) : d === o ? (a - n) / c + 2 : (n - o) / c + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, wa = function(t) {
  var i = [], e = [], r = -1;
  return t.split(bi).forEach(function(n) {
    var o = n.match(lr) || [];
    i.push.apply(i, o), e.push(r += o.length + 1);
  }), i.c = e, i;
}, _o = function(t, i, e) {
  var r = "", n = (t + r).match(bi), o = i ? "hsla(" : "rgba(", a = 0, l, u, f, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = ya(h, i, 1)) && o + (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), e && (f = wa(t), l = e.c, l.join(r) !== f.c.join(r)))
    for (u = t.replace(bi, "1").split(lr), d = u.length - 1; a < d; a++)
      r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
  if (!u)
    for (u = t.split(bi), d = u.length - 1; a < d; a++)
      r += u[a] + n[a];
  return r + u[d];
}, bi = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Rr)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), Gl = /hsl[a]?\(/, xa = function(t) {
  var i = t.join(" "), e;
  if (bi.lastIndex = 0, bi.test(i))
    return e = Gl.test(i), t[1] = _o(t[1], e), t[0] = _o(t[0], e, wa(t[1])), !0;
}, tn, xe = function() {
  var s = Date.now, t = 500, i = 33, e = s(), r = e, n = 1e3 / 240, o = n, a = [], l, u, f, d, h, c, p = function _(g) {
    var y = s() - r, w = g === !0, b, v, x, k;
    if ((y > t || y < 0) && (e += y - i), r += y, x = r - e, b = x - o, (b > 0 || w) && (k = ++d.frame, h = x - d.time * 1e3, d.time = x = x / 1e3, o += b + (b >= n ? 4 : n - b), v = 1), w || (l = u(_)), v)
      for (c = 0; c < a.length; c++)
        a[c](x, h, k, g);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return h / (1e3 / (g || 60));
    },
    wake: function() {
      jo && (!cs && Ns() && (Ue = cs = window, Fs = Ue.document || {}, Ce.gsap = de, (Ue.gsapVersions || (Ue.gsapVersions = [])).push(de.version), Jo(An || Ue.GreenSockGlobals || !Ue.gsap && Ue || {}), ma.forEach(va)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = f || function(g) {
        return setTimeout(g, o - d.time * 1e3 + 1 | 0);
      }, tn = 1, p(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(l), tn = 0, u = jr;
    },
    lagSmoothing: function(g, y) {
      t = g || 1 / 0, i = Math.min(y || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), o = d.time * 1e3 + n;
    },
    add: function(g, y, w) {
      var b = y ? function(v, x, k, T) {
        g(v, x, k, T), d.remove(b);
      } : g;
      return d.remove(g), a[w ? "unshift" : "push"](b), xr(), b;
    },
    remove: function(g, y) {
      ~(y = a.indexOf(g)) && a.splice(y, 1) && c >= y && c--;
    },
    _listeners: a
  }, d;
}(), xr = function() {
  return !tn && xe.wake();
}, K = {}, Kl = /^[\d.\-M][\d.\-,\s]/, Ql = /["']/g, Zl = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, l, u; n < o; n++)
    l = e[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), i[r] = isNaN(u) ? u.replace(Ql, "").trim() : +u, r = l.substr(a + 1).trim();
  return i;
}, jl = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, Jl = function(t) {
  var i = (t + "").split("("), e = K[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [Zl(i[1])] : jl(t).split(",").map(na)) : K._CE && Kl.test(t) ? K._CE("", t) : e;
}, Sa = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, Ta = function s(t, i) {
  for (var e = t._first, r; e; )
    e instanceof se ? s(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? s(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next;
}, Ui = function(t, i) {
  return t && (gt(t) ? t : K[t] || Jl(t)) || i;
}, Ji = function(t, i, e, r) {
  e === void 0 && (e = function(l) {
    return 1 - i(1 - l);
  }), r === void 0 && (r = function(l) {
    return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, o;
  return fe(t, function(a) {
    K[a] = Ce[a] = n, K[o = a.toLowerCase()] = e;
    for (var l in n)
      K[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = K[a + "." + l] = n[l];
  }), n;
}, ba = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, jn = function s(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = n / fs * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * bl((f - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : ba(a);
  return n = fs / n, l.config = function(u, f) {
    return s(t, u, f);
  }, l;
}, Jn = function s(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : ba(e);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
fe("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var i = t < 5 ? t + 1 : t;
  Ji(s + ",Power" + (i - 1), t ? function(e) {
    return Math.pow(e, i);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, i);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2;
  });
});
K.Linear.easeNone = K.none = K.Linear.easeIn;
Ji("Elastic", jn("in"), jn("out"), jn());
(function(s, t) {
  var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
    return a < i ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Ji("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
Ji("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Ji("Circ", function(s) {
  return -(Go(1 - s * s) - 1);
});
Ji("Sine", function(s) {
  return s === 1 ? 1 : -Tl(s * xl) + 1;
});
Ji("Back", Jn("in"), Jn("out"), Jn());
K.SteppedEase = K.steps = Ce.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - rt;
    return function(a) {
      return ((r * an(0, o, a) | 0) + n) * e;
    };
  }
};
mr.ease = K["quad.out"];
fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Bs += s + "," + s + "Params,";
});
var ka = function(t, i) {
  this.id = Sl++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : ia, this.set = i ? i.getSetter : qs;
}, en = /* @__PURE__ */ function() {
  function s(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, wr(this, +i.duration, 1, 1), this.data = i.data, lt && (this._ctx = lt, lt.data.push(this)), tn || xe.wake();
  }
  var t = s.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, wr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, r) {
    if (xr(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (qn(this, e), !n._dp || n.parent || aa(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && $e(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === rt || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ra(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + fo(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + fo(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? yr(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -rt ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? Nn(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -rt ? 0 : this._rts, this.totalTime(an(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Un(this), zl(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== rt && (this._tTime -= rt)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = ft(e);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && $e(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (ue(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var r = this.parent || this._dp;
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Nn(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Ml);
    var r = Yt;
    return Yt = e, Ws(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Yt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, co(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, co(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, r) {
    return this.totalTime(Oe(this, e), ue(r));
  }, t.restart = function(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, ue(r)), this._dur || (this._zTime = -rt), this;
  }, t.play = function(e, r) {
    return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, r) {
    return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(e, r) {
    return e != null && this.seek(e, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -rt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -rt, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, r = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - rt);
  }, t.eventCallback = function(e, r, n) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var r = this, n = r._prom;
    return new Promise(function(o) {
      var a = gt(e) ? e : sa, l = function() {
        var f = r.then;
        r.then = null, n && n(), gt(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), o(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l;
    });
  }, t.kill = function() {
    Dr(this);
  }, s;
}();
Pe(en.prototype, {
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
  _zTime: -rt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var se = /* @__PURE__ */ function(s) {
  $o(t, s);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ue(e.sortChildren), ct && $e(e.parent || ct, ri(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && la(ri(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, o) {
    return Yr(0, arguments, this), this;
  }, i.from = function(r, n, o) {
    return Yr(1, arguments, this), this;
  }, i.fromTo = function(r, n, o, a) {
    return Yr(2, arguments, this), this;
  }, i.set = function(r, n, o) {
    return n.duration = 0, n.parent = this, Ir(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new kt(r, n, Oe(this, o), 1), this;
  }, i.call = function(r, n, o) {
    return $e(this, kt.delayedCall(0, r, n), o);
  }, i.staggerTo = function(r, n, o, a, l, u, f) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new kt(r, o, Oe(this, l)), this;
  }, i.staggerFrom = function(r, n, o, a, l, u, f) {
    return o.runBackwards = 1, Ir(o).immediateRender = ue(o.immediateRender), this.staggerTo(r, n, o, a, l, u, f);
  }, i.staggerFromTo = function(r, n, o, a, l, u, f, d) {
    return a.startAt = o, Ir(a).immediateRender = ue(a.immediateRender), this.staggerTo(r, n, a, l, u, f, d);
  }, i.render = function(r, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : ft(r), d = this._zTime < 0 != r < 0 && (this._initted || !u), h, c, p, _, g, y, w, b, v, x, k, T;
    if (this !== ct && f > l && r >= 0 && (f = l), f !== this._tTime || o || d) {
      if (a !== this._time && u && (f += this._time - a, r += this._time - a), h = f, v = this._start, b = this._ts, y = !b, d && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (k = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, o);
        if (h = ft(f % g), f === l ? (_ = this._repeat, h = u) : (x = ft(f / g), _ = ~~x, _ && _ === x && (h = u, _--), h > u && (h = u)), x = yr(this._tTime, g), !a && this._tTime && x !== _ && this._tTime - x * g - this._dur <= 0 && (x = _), k && _ & 1 && (h = u - h, T = 1), _ !== x && !this._lock) {
          var P = k && x & 1, C = P === (k && _ & 1);
          if (_ < x && (P = !P), a = P ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (T ? 0 : ft(_ * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && Te(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, x = _), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, C && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Ta(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Il(this, ft(a), ft(h)), w && (f -= h - (h = w._start))), this._tTime = f, this._time = h, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && u && !n && !x && (Te(this, "onStart"), this._tTime !== f))
        return this;
      if (h >= a && r >= 0)
        for (c = this._first; c; ) {
          if (p = c._next, (c._act || h >= c._start) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(r, n, o);
            if (c.render(c._ts > 0 ? (h - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (h - c._start) * c._ts, n, o), h !== this._time || !this._ts && !y) {
              w = 0, p && (f += this._zTime = -rt);
              break;
            }
          }
          c = p;
        }
      else {
        c = this._last;
        for (var E = r < 0 ? r : h; c; ) {
          if (p = c._prev, (c._act || E <= c._end) && c._ts && w !== c) {
            if (c.parent !== this)
              return this.render(r, n, o);
            if (c.render(c._ts > 0 ? (E - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (E - c._start) * c._ts, n, o || Yt && Ws(c)), h !== this._time || !this._ts && !y) {
              w = 0, p && (f += this._zTime = E ? -rt : rt);
              break;
            }
          }
          c = p;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= a ? 0 : -rt)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, Un(this), this.render(r, n, o);
      this._onUpdate && !n && Te(this, "onUpdate", !0), (f === l && this._tTime >= this.totalDuration() || !f && a) && (v === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Ci(this, 1), !n && !(r < 0 && !a) && (f || a || !l) && (Te(this, f === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var o = this;
    if (li(n) || (n = Oe(this, n, r)), !(r instanceof en)) {
      if (Kt(r))
        return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (At(r))
        return this.addLabel(r, n);
      if (gt(r))
        r = kt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? $e(this, r, n) : this;
  }, i.getChildren = function(r, n, o, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Re);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof kt ? n && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === r)
        return n[o];
  }, i.remove = function(r) {
    return At(r) ? this.removeLabel(r) : gt(r) ? this.killTweensOf(r) : (r.parent === this && Vn(this, r), r === this._recent && (this._recent = this._last), Vi(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ft(xe.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = Oe(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, o) {
    var a = kt.delayedCall(0, n || jr, o);
    return a.data = "isPause", this._hasPause = 1, $e(this, a, Oe(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = Oe(this, r); n; )
      n._start === r && n.data === "isPause" && Ci(n), n = n._next;
  }, i.killTweensOf = function(r, n, o) {
    for (var a = this.getTweensOf(r, o), l = a.length; l--; )
      vi !== a[l] && a[l].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var o = [], a = Ae(r), l = this._first, u = li(n), f; l; )
      l instanceof kt ? Dl(l._targets, a) && (u ? (!vi || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (f = l.getTweensOf(a, n)).length && o.push.apply(o, f), l = l._next;
    return o;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var o = this, a = Oe(o, r), l = n, u = l.startAt, f = l.onStart, d = l.onStartParams, h = l.immediateRender, c, p = kt.to(o, Pe({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || rt,
      onStart: function() {
        if (o.pause(), !c) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== g && wr(p, g, 0, 1).render(p._time, !0, !0), c = 1;
        }
        f && f.apply(p, d || []);
      }
    }, n));
    return h ? p.render(0) : p;
  }, i.tweenFromTo = function(r, n, o) {
    return this.tweenTo(n, Pe({
      startAt: {
        time: Oe(this, r)
      }
    }, o));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), ho(this, Oe(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), ho(this, Oe(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + rt);
  }, i.shiftChildren = function(r, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (r = ft(r); a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in l)
        l[u] >= o && (l[u] += r);
    return Vi(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Vi(this);
  }, i.totalDuration = function(r) {
    var n = 0, o = this, a = o._last, l = Re, u, f, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > l && o._sort && a._ts && !o._lock ? (o._lock = 1, $e(o, a, f - a._delay, 1)._lock = 0) : l = f, f < 0 && a._ts && (n -= f, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ft(f / o._ts), o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      wr(o, o === ct && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (ct._ts && (ra(ct, Nn(r, ct)), ea = xe.frame), xe.frame >= lo) {
      lo += ke.autoSleep || 120;
      var n = ct._first;
      if ((!n || !n._ts) && ke.autoSleep && xe._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || xe.sleep();
      }
    }
  }, t;
}(en);
Pe(se.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var tu = function(t, i, e, r, n, o, a) {
  var l = new ce(this._pt, t, i, 0, 1, Da, null, n), u = 0, f = 0, d, h, c, p, _, g, y, w;
  for (l.b = e, l.e = r, e += "", r += "", (y = ~r.indexOf("random(")) && (r = Jr(r)), o && (w = [e, r], o(w, t, i), e = w[0], r = w[1]), h = e.match(Kn) || []; d = Kn.exec(r); )
    p = d[0], _ = r.substring(u, d.index), c ? c = (c + 1) % 5 : _.substr(-5) === "rgba(" && (c = 1), p !== h[f++] && (g = parseFloat(h[f - 1]) || 0, l._pt = {
      _next: l._pt,
      p: _ || f === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? cr(g, p) - g : parseFloat(p) - g,
      m: c && c < 4 ? Math.round : 0
    }, u = Kn.lastIndex);
  return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (Zo.test(r) || y) && (l.e = 0), this._pt = l, l;
}, Hs = function(t, i, e, r, n, o, a, l, u, f) {
  gt(r) && (r = r(n || 0, t, o));
  var d = t[i], h = e !== "get" ? e : gt(d) ? u ? t[i.indexOf("set") || !gt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : d, c = gt(d) ? u ? su : Oa : Us, p;
  if (At(r) && (~r.indexOf("random(") && (r = Jr(r)), r.charAt(1) === "=" && (p = cr(h, r) + ($t(h) || 0), (p || p === 0) && (r = p))), !f || h !== r || vs)
    return !isNaN(h * r) && r !== "" ? (p = new ce(this._pt, t, i, +h || 0, r - (h || 0), typeof d == "boolean" ? au : Ma, 0, c), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!d && !(i in t) && Is(i, r), tu.call(this, t, i, h, r, c, l || ke.stringFilter, u));
}, eu = function(t, i, e, r, n) {
  if (gt(t) && (t = Br(t, n, i, e, r)), !Ze(t) || t.style && t.nodeType || Kt(t) || Ko(t))
    return At(t) ? Br(t, n, i, e, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Br(t[a], n, i, e, r);
  return o;
}, Ca = function(t, i, e, r, n, o) {
  var a, l, u, f;
  if (ye[t] && (a = new ye[t]()).init(n, a.rawVars ? i[t] : eu(i[t], r, n, o, e), e, r, o) !== !1 && (e._pt = l = new ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== ur))
    for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = l;
  return a;
}, vi, vs, Vs = function s(t, i, e) {
  var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, f = r.runBackwards, d = r.yoyoEase, h = r.keyframes, c = r.autoRevert, p = t._dur, _ = t._startAt, g = t._targets, y = t.parent, w = y && y.data === "nested" ? y.vars.targets : g, b = t._overwrite === "auto" && !zs, v = t.timeline, x, k, T, P, C, E, N, O, q, V, Q, $, L;
  if (v && (!h || !n) && (n = "none"), t._ease = Ui(n, mr.ease), t._yEase = d ? Sa(Ui(d === !0 ? n : d, mr.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !v && !!r.runBackwards, !v || h && !r.stagger) {
    if (O = g[0] ? Hi(g[0]).harness : 0, $ = O && r[O.prop], x = Ln(r, Ys), _ && (_._zTime < 0 && _.progress(1), i < 0 && f && a && !c ? _.render(-1, !0) : _.revert(f && p ? bn : Ol), _._lazy = 0), o) {
      if (Ci(t._startAt = kt.set(g, Pe({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !_ && ue(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Te(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Yt || !a && !c) && t._startAt.revert(bn), a && p && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (f && p && !_) {
      if (i && (a = !1), T = Pe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !_ && ue(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), $ && (T[O.prop] = $), Ci(t._startAt = kt.set(g, T)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Yt ? t._startAt.revert(bn) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        s(t._startAt, rt, rt);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, l = p && ue(l) || l && !p, k = 0; k < g.length; k++) {
      if (C = g[k], N = C._gsap || Xs(g)[k]._gsap, t._ptLookup[k] = V = {}, hs[N.id] && Ti.length && zn(), Q = w === g ? k : w.indexOf(C), O && (q = new O()).init(C, $ || x, t, Q, w) !== !1 && (t._pt = P = new ce(t._pt, C, q.name, 0, 1, q.render, q, 0, q.priority), q._props.forEach(function(j) {
        V[j] = P;
      }), q.priority && (E = 1)), !O || $)
        for (T in x)
          ye[T] && (q = Ca(T, x, t, Q, C, w)) ? q.priority && (E = 1) : V[T] = P = Hs.call(t, C, T, "get", x[T], Q, w, 0, r.stringFilter);
      t._op && t._op[k] && t.kill(C, t._op[k]), b && t._pt && (vi = t, ct.killTweensOf(C, V, t.globalTime(i)), L = !t.parent, vi = 0), t._pt && l && (hs[N.id] = 1);
    }
    E && Ra(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !L, h && i <= 0 && v.render(Re, !0, !0);
}, iu = function(t, i, e, r, n, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, d, h, c;
  if (!u)
    for (u = t._ptCache[i] = [], h = t._ptLookup, c = t._targets.length; c--; ) {
      if (f = h[c][i], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== i && f.fp !== i; )
          f = f._next;
      if (!f)
        return vs = 1, t.vars[i] = "+=0", Vs(t, a), vs = 0, l ? Zr(i + " not eligible for reset") : 1;
      u.push(f);
    }
  for (c = u.length; c--; )
    d = u[c], f = d._pt || d, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c, f.c = e - f.s, d.e && (d.e = wt(e) + $t(d.e)), d.b && (d.b = f.s + $t(d.b));
}, ru = function(t, i) {
  var e = t[0] ? Hi(t[0]).harness : 0, r = e && e.aliases, n, o, a, l;
  if (!r)
    return i;
  n = vr({}, i);
  for (o in r)
    if (o in n)
      for (l = r[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, nu = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", o, a;
  if (Kt(i))
    a = e[t] || (e[t] = []), i.forEach(function(l, u) {
      return a.push({
        t: u / (i.length - 1) * 100,
        v: l,
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
}, Br = function(t, i, e, r, n) {
  return gt(t) ? t.call(i, e, r, n) : At(t) && ~t.indexOf("random(") ? Jr(t) : t;
}, Pa = Bs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ea = {};
fe(Pa + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Ea[s] = 1;
});
var kt = /* @__PURE__ */ function(s) {
  $o(t, s);
  function t(e, r, n, o) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : Ir(r)) || this;
    var l = a.vars, u = l.duration, f = l.delay, d = l.immediateRender, h = l.stagger, c = l.overwrite, p = l.keyframes, _ = l.defaults, g = l.scrollTrigger, y = l.yoyoEase, w = r.parent || ct, b = (Kt(e) || Ko(e) ? li(e[0]) : "length" in r) ? [e] : Ae(e), v, x, k, T, P, C, E, N;
    if (a._targets = b.length ? Xs(b) : Zr("GSAP target " + e + " not found. https://gsap.com", !ke.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = c, p || h || cn(u) || cn(f)) {
      if (r = a.vars, v = a.timeline = new se({
        data: "nested",
        defaults: _ || {},
        targets: w && w.data === "nested" ? w.vars.targets : b
      }), v.kill(), v.parent = v._dp = ri(a), v._start = 0, h || cn(u) || cn(f)) {
        if (T = b.length, E = h && ha(h), Ze(h))
          for (P in h)
            ~Pa.indexOf(P) && (N || (N = {}), N[P] = h[P]);
        for (x = 0; x < T; x++)
          k = Ln(r, Ea), k.stagger = 0, y && (k.yoyoEase = y), N && vr(k, N), C = b[x], k.duration = +Br(u, ri(a), x, C, b), k.delay = (+Br(f, ri(a), x, C, b) || 0) - a._delay, !h && T === 1 && k.delay && (a._delay = f = k.delay, a._start += f, k.delay = 0), v.to(C, k, E ? E(x, C, b) : 0), v._ease = K.none;
        v.duration() ? u = f = 0 : a.timeline = 0;
      } else if (p) {
        Ir(Pe(v.vars.defaults, {
          ease: "none"
        })), v._ease = Ui(p.ease || r.ease || "none");
        var O = 0, q, V, Q;
        if (Kt(p))
          p.forEach(function($) {
            return v.to(b, $, ">");
          }), v.duration();
        else {
          k = {};
          for (P in p)
            P === "ease" || P === "easeEach" || nu(P, p[P], k, p.easeEach);
          for (P in k)
            for (q = k[P].sort(function($, L) {
              return $.t - L.t;
            }), O = 0, x = 0; x < q.length; x++)
              V = q[x], Q = {
                ease: V.e,
                duration: (V.t - (x ? q[x - 1].t : 0)) / 100 * u
              }, Q[P] = V.v, v.to(b, Q, O), O += Q.duration;
          v.duration() < u && v.to({}, {
            duration: u - v.duration()
          });
        }
      }
      u || a.duration(u = v.duration());
    } else
      a.timeline = 0;
    return c === !0 && !zs && (vi = ri(a), ct.killTweensOf(b), vi = 0), $e(w, ri(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (d || !u && !p && a._start === ft(w._time) && ue(d) && Ll(ri(a)) && w.data !== "nested") && (a._tTime = -rt, a.render(Math.max(0, -f) || 0)), g && la(ri(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, f = r < 0, d = r > l - rt && !f ? l : r < rt ? 0 : r, h, c, p, _, g, y, w, b, v;
    if (!u)
      Fl(this, r, n, o);
    else if (d !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (h = d, b = this.timeline, this._repeat) {
        if (_ = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(_ * 100 + r, n, o);
        if (h = ft(d % _), d === l ? (p = this._repeat, h = u) : (g = ft(d / _), p = ~~g, p && p === g ? (h = u, p--) : h > u && (h = u)), y = this._yoyo && p & 1, y && (v = this._yEase, h = u - h), g = yr(this._tTime, _), h === a && !o && this._initted && p === g)
          return this._tTime = d, this;
        p !== g && (b && this._yEase && Ta(b, y), this.vars.repeatRefresh && !y && !this._lock && h !== _ && this._initted && (this._lock = o = 1, this.render(ft(_ * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ua(this, f ? r : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && p !== g))
          return this;
        if (u !== this._dur)
          return this.render(r, n, o);
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (v || this._ease)(h / u), this._from && (this.ratio = w = 1 - w), !a && d && !n && !g && (Te(this, "onStart"), this._tTime !== d))
        return this;
      for (c = this._pt; c; )
        c.r(w, c.d), c = c._next;
      b && b.render(r < 0 ? r : b._dur * b._ease(h / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && ds(this, r, n, o), Te(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && Te(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (f && !this._onUpdate && ds(this, r, !0, !0), (r || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ci(this, 1), !n && !(f && !a) && (d || a || y) && (Te(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, o, a, l) {
    tn || xe.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Vs(this, u), f = this._ease(u / this._dur), iu(this, r, n, o, a, f, u, l) ? this.resetTo(r, n, o, a, 1) : (qn(this, 0), this.parent || oa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Dr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Yt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, vi && vi.vars.overwrite !== !0)._first || Dr(this), this.parent && o !== this.timeline.totalDuration() && wr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = r ? Ae(r) : a, u = this._ptLookup, f = this._pt, d, h, c, p, _, g, y;
    if ((!n || n === "all") && Al(a, l))
      return n === "all" && (this._pt = 0), Dr(this);
    for (d = this._op = this._op || [], n !== "all" && (At(n) && (_ = {}, fe(n, function(w) {
      return _[w] = 1;
    }), n = _), n = ru(a, n)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        h = u[y], n === "all" ? (d[y] = n, p = h, c = {}) : (c = d[y] = d[y] || {}, p = n);
        for (_ in p)
          g = h && h[_], g && ((!("kill" in g.d) || g.d.kill(_) === !0) && Vn(this, g, "_pt"), delete h[_]), c !== "all" && (c[_] = 1);
      }
    return this._initted && !this._pt && f && Dr(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return Yr(1, arguments);
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
    return Yr(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, o) {
    return ct.killTweensOf(r, n, o);
  }, t;
}(en);
Pe(kt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
fe("staggerTo,staggerFrom,staggerFromTo", function(s) {
  kt[s] = function() {
    var t = new se(), i = ps.call(arguments, 0);
    return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
  };
});
var Us = function(t, i, e) {
  return t[i] = e;
}, Oa = function(t, i, e) {
  return t[i](e);
}, su = function(t, i, e, r) {
  return t[i](r.fp, e);
}, ou = function(t, i, e) {
  return t.setAttribute(i, e);
}, qs = function(t, i) {
  return gt(t[i]) ? Oa : Ls(t[i]) && t.setAttribute ? ou : Us;
}, Ma = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, au = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, Da = function(t, i) {
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
}, $s = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, lu = function(t, i, e, r) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === r && n.modifier(t, i, e), n = o;
}, uu = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? Vn(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, fu = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, Ra = function(t) {
  for (var i = t._pt, e, r, n, o; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e;
  }
  t._pt = n;
}, ce = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a, l, u, f) {
    this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || Ma, this.d = l || this, this.set = u || Us, this.pr = f || 0, this._next = i, i && (i._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = fu, this.m = e, this.mt = n, this.tween = r;
  }, s;
}();
fe(Bs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Ys[s] = 1;
});
Ce.TweenMax = Ce.TweenLite = kt;
Ce.TimelineLite = Ce.TimelineMax = se;
ct = new se({
  sortChildren: !1,
  defaults: mr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ke.stringFilter = xa;
var qi = [], Cn = {}, cu = [], po = 0, hu = 0, ts = function(t) {
  return (Cn[t] || cu).map(function(i) {
    return i();
  });
}, ys = function() {
  var t = Date.now(), i = [];
  t - po > 2 && (ts("matchMediaInit"), qi.forEach(function(e) {
    var r = e.queries, n = e.conditions, o, a, l, u;
    for (a in r)
      o = Ue.matchMedia(r[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (e.revert(), l && i.push(e));
  }), ts("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), po = t, ts("matchMedia"));
}, Aa = /* @__PURE__ */ function() {
  function s(i, e) {
    this.selector = e && gs(e), this.data = [], this._r = [], this.isReverted = !1, this.id = hu++, i && this.add(i);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    gt(e) && (n = r, r = e, e = gt);
    var o = this, a = function() {
      var u = lt, f = o.selector, d;
      return u && u !== o && u.data.push(o), n && (o.selector = gs(n)), lt = o, d = r.apply(o, arguments), gt(d) && o._r.push(d), lt = u, o.selector = f, o.isReverted = !1, d;
    };
    return o.last = a, e === gt ? a(o, function(l) {
      return o.add(null, l);
    }) : e ? o[e] = a : a;
  }, t.ignore = function(e) {
    var r = lt;
    lt = null, e(this), lt = r;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? e.push.apply(e, r.getTweens()) : r instanceof kt && !(r.parent && r.parent.data === "nested") && e.push(r);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, r) {
    var n = this;
    if (e ? function() {
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
      for (a.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, d) {
        return d.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(e);
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof se ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof kt) && u.revert && u.revert(e);
      n._r.forEach(function(f) {
        return f(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = qi.length; o--; )
        qi[o].id === this.id && qi.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, s;
}(), du = /* @__PURE__ */ function() {
  function s(i) {
    this.contexts = [], this.scope = i, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    Ze(e) || (e = {
      matches: e
    });
    var o = new Aa(0, n || this.scope), a = o.conditions = {}, l, u, f;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
    for (u in e)
      u === "all" ? f = 1 : (l = Ue.matchMedia(e[u]), l && (qi.indexOf(o) < 0 && qi.push(o), (a[u] = l.matches) && (f = 1), l.addListener ? l.addListener(ys) : l.addEventListener("change", ys)));
    return f && r(o, function(d) {
      return o.add(null, d);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(r) {
      return r.kill(e, !0);
    });
  }, s;
}(), Fn = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return va(r);
    });
  },
  timeline: function(t) {
    return new se(t);
  },
  getTweensOf: function(t, i) {
    return ct.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    At(t) && (t = Ae(t)[0]);
    var n = Hi(t || {}).get, o = e ? sa : na;
    return e === "native" && (e = ""), t && (i ? o((ye[i] && ye[i].get || n)(t, i, e, r)) : function(a, l, u) {
      return o((ye[a] && ye[a].get || n)(t, a, l, u));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = Ae(t), t.length > 1) {
      var r = t.map(function(f) {
        return de.quickSetter(f, i, e);
      }), n = r.length;
      return function(f) {
        for (var d = n; d--; )
          r[d](f);
      };
    }
    t = t[0] || {};
    var o = ye[i], a = Hi(t), l = a.harness && (a.harness.aliases || {})[i] || i, u = o ? function(f) {
      var d = new o();
      ur._pt = 0, d.init(t, e ? f + e : f, ur, 0, [t]), d.render(1, d), ur._pt && $s(1, ur);
    } : a.set(t, l);
    return o ? u : function(f) {
      return u(t, l, e ? f + e : f, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = de.to(t, Pe((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), o = function(l, u, f) {
      return n.resetTo(i, l, u, f);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ct.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ui(t.ease, mr.ease)), uo(mr, t || {});
  },
  config: function(t) {
    return uo(ke, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ye[a] && !Ce[a] && Zr(i + " effect requires " + a + " plugin.");
    }), Qn[i] = function(a, l, u) {
      return e(Ae(a), Pe(l || {}, n), u);
    }, o && (se.prototype[i] = function(a, l, u) {
      return this.add(Qn[i](a, Ze(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, i) {
    K[t] = Ui(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? Ui(t, i) : K;
  },
  getById: function(t) {
    return ct.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new se(t), r, n;
    for (e.smoothChildTiming = ue(t.smoothChildTiming), ct.remove(e), e._dp = 0, e._time = e._tTime = ct._time, r = ct._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof kt && r.vars.onComplete === r._targets[0])) && $e(e, r, r._start - r._delay), r = n;
    return $e(ct, e, 0), e;
  },
  context: function(t, i) {
    return t ? new Aa(t, i) : lt;
  },
  matchMedia: function(t) {
    return new du(t);
  },
  matchMediaRefresh: function() {
    return qi.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || ys();
  },
  addEventListener: function(t, i) {
    var e = Cn[t] || (Cn[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = Cn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: Ul,
    wrapYoyo: ql,
    distribute: ha,
    random: _a,
    snap: da,
    normalize: Vl,
    getUnit: $t,
    clamp: Bl,
    splitColor: ya,
    toArray: Ae,
    selector: gs,
    mapRange: ga,
    pipe: Wl,
    unitize: Hl,
    interpolate: $l,
    shuffle: ca
  },
  install: Jo,
  effects: Qn,
  ticker: xe,
  updateRoot: se.updateRoot,
  plugins: ye,
  globalTimeline: ct,
  core: {
    PropTween: ce,
    globals: ta,
    Tween: kt,
    Timeline: se,
    Animation: en,
    getCache: Hi,
    _removeLinkedListItem: Vn,
    reverting: function() {
      return Yt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return zs = t;
    }
  }
};
fe("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Fn[s] = kt[s];
});
xe.add(se.updateRoot);
ur = Fn.to({}, {
  duration: 0
});
var _u = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, pu = function(t, i) {
  var e = t._targets, r, n, o;
  for (r in i)
    for (n = e.length; n--; )
      o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = _u(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r));
}, es = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (At(n) && (l = {}, fe(n, function(f) {
          return l[f] = 1;
        }), n = l), i) {
          l = {};
          for (u in n)
            l[u] = i(n[u]);
          n = l;
        }
        pu(a, n);
      };
    }
  };
}, de = Fn.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var o, a, l;
    this.tween = e;
    for (o in i)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      Yt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, es("roundProps", ms), es("modifiers"), es("snap", da)) || Fn;
kt.version = se.version = de.version = "3.14.2";
jo = 1;
Ns() && xr();
K.Power0;
K.Power1;
K.Power2;
K.Power3;
K.Power4;
K.Linear;
K.Quad;
K.Cubic;
K.Quart;
K.Quint;
K.Strong;
K.Elastic;
K.Back;
K.SteppedEase;
K.Bounce;
K.Sine;
K.Expo;
K.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var go, yi, hr, Gs, Xi, mo, Ks, gu = function() {
  return typeof window < "u";
}, ui = {}, Ii = 180 / Math.PI, dr = Math.PI / 180, rr = Math.atan2, vo = 1e8, Qs = /([A-Z])/g, mu = /(left|right|width|margin|padding|x)/i, vu = /[\s,\(]\S/, Ge = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ws = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, yu = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, wu = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, xu = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Su = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, za = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, La = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, Tu = function(t, i, e) {
  return t.style[i] = e;
}, bu = function(t, i, e) {
  return t.style.setProperty(i, e);
}, ku = function(t, i, e) {
  return t._gsap[i] = e;
}, Cu = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Pu = function(t, i, e, r, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(n, o);
}, Eu = function(t, i, e, r, n) {
  var o = t._gsap;
  o[i] = e, o.renderTransform(n, o);
}, ht = "transform", he = ht + "Origin", Ou = function s(t, i) {
  var e = this, r = this.target, n = r.style, o = r._gsap;
  if (t in ui && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Ge[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = ni(r, a);
      }) : this.tfm[t] = o.x ? o[t] : ni(r, t), t === he && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ge.transform.split(",").forEach(function(a) {
        return s.call(e, a, i);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(he, i, "")), t = ht;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, Na = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Mu = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Qs, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = Ks(), (!n || !n.isStart) && !e[ht] && (Na(e), r.zOrigin && e[he] && (e[he] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Fa = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: Mu,
    save: Ou
  };
  return t._gsap || de.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, Ia, xs = function(t, i) {
  var e = yi.createElementNS ? yi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : yi.createElement(t);
  return e && e.style ? e : yi.createElement(t);
}, be = function s(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(Qs, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s(t, Sr(i) || i, 1) || "";
}, yo = "O,Moz,ms,Ms,Webkit".split(","), Sr = function(t, i, e) {
  var r = i || Xi, n = r.style, o = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(yo[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? yo[o] : "") + t;
}, Ss = function() {
  gu() && window.document && (go = window, yi = go.document, hr = yi.documentElement, Xi = xs("div") || {
    style: {}
  }, xs("div"), ht = Sr(ht), he = ht + "Origin", Xi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ia = !!Sr("perspective"), Ks = de.core.reverting, Gs = 1);
}, wo = function(t) {
  var i = t.ownerSVGElement, e = xs("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), hr.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), hr.removeChild(e), n;
}, xo = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, Ya = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = wo(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = wo(t)), i && !i.width && !i.x && !i.y ? {
    x: +xo(t, ["x", "cx", "x1"]) || 0,
    y: +xo(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Ba = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ya(t));
}, Pi = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in ui && i !== he && (i = ht), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Qs, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, wi = function(t, i, e, r, n, o) {
  var a = new ce(t._pt, i, e, 0, 1, o ? La : za);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, So = {
  deg: 1,
  rad: 1,
  turn: 1
}, Du = {
  grid: 1,
  flex: 1
}, Ei = function s(t, i, e, r) {
  var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Xi.style, l = mu.test(i), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = r === "px", c = r === "%", p, _, g, y;
  if (r === o || !n || So[r] || So[o])
    return n;
  if (o !== "px" && !h && (n = s(t, i, e, "px")), y = t.getCTM && Ba(t), (c || o === "%") && (ui[i] || ~i.indexOf("adius")))
    return p = y ? t.getBBox()[l ? "width" : "height"] : t[f], wt(c ? n / p * d : n / 100 * p);
  if (a[l ? "width" : "height"] = d + (h ? o : r), _ = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, y && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === yi || !_.appendChild) && (_ = yi.body), g = _._gsap, g && c && g.width && l && g.time === xe.time && !g.uncache)
    return wt(n / g.width * d);
  if (c && (i === "height" || i === "width")) {
    var w = t.style[i];
    t.style[i] = d + r, p = t[f], w ? t.style[i] = w : Pi(t, i);
  } else
    (c || o === "%") && !Du[be(_, "display")] && (a.position = be(t, "position")), _ === t && (a.position = "static"), _.appendChild(Xi), p = Xi[f], _.removeChild(Xi), a.position = "absolute";
  return l && c && (g = Hi(_), g.time = xe.time, g.width = _[f]), wt(h ? p * n / d : p && n ? d / p * n : 0);
}, ni = function(t, i, e, r) {
  var n;
  return Gs || Ss(), i in Ge && i !== "transform" && (i = Ge[i], ~i.indexOf(",") && (i = i.split(",")[0])), ui[i] && i !== "transform" ? (n = nn(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : Yn(be(t, he)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = In[i] && In[i](t, i, e) || be(t, i) || ia(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Ei(t, i, n, e) + e : n;
}, Ru = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = Sr(i, t, 1), o = n && be(t, n, 1);
    o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = be(t, "borderTopColor"));
  }
  var a = new ce(this._pt, t.style, i, 0, 1, Da), l = 0, u = 0, f, d, h, c, p, _, g, y, w, b, v, x;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = be(t, r.substring(4, r.indexOf(")")))), r === "auto" && (_ = t.style[i], t.style[i] = r, r = be(t, i) || r, _ ? t.style[i] = _ : Pi(t, i)), f = [e, r], xa(f), e = f[0], r = f[1], h = e.match(lr) || [], x = r.match(lr) || [], x.length) {
    for (; d = lr.exec(r); )
      g = d[0], w = r.substring(l, d.index), p ? p = (p + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (p = 1), g !== (_ = h[u++] || "") && (c = parseFloat(_) || 0, v = _.substr((c + "").length), g.charAt(1) === "=" && (g = cr(c, g) + v), y = parseFloat(g), b = g.substr((y + "").length), l = lr.lastIndex - b.length, b || (b = b || ke.units[i] || v, l === r.length && (r += b, a.e += b)), v !== b && (c = Ei(t, i, _, b) || 0), a._pt = {
        _next: a._pt,
        p: w || u === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: y - c,
        m: p && p < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = l < r.length ? r.substring(l, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? La : za;
  return Zo.test(r) && (a.e = 0), this._pt = a, a;
}, To = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Au = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = To[e] || e, i[1] = To[r] || r, i.join(" ");
}, zu = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, o = e._gsap, a, l, u;
    if (n === "all" || n === !0)
      r.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], ui[a] && (l = 1, a = a === "transformOrigin" ? he : ht), Pi(e, a);
    l && (Pi(e, ht), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", nn(e, 1), o.uncache = 1, Na(r)));
  }
}, In = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new ce(t._pt, i, e, 0, 0, zu);
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
}, rn = [1, 0, 0, 1, 0, 0], Xa = {}, Wa = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, bo = function(t) {
  var i = be(t, ht);
  return Wa(i) ? rn : i.substr(7).match(Qo).map(wt);
}, Zs = function(t, i) {
  var e = t._gsap || Hi(t), r = t.style, n = bo(t), o, a, l, u;
  return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? rn : n) : (n === rn && !t.offsetParent && t !== hr && !e.svg && (l = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, hr.appendChild(t)), n = bo(t), l ? r.display = l : Pi(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : hr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ts = function(t, i, e, r, n, o) {
  var a = t._gsap, l = n || Zs(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, c = l[0], p = l[1], _ = l[2], g = l[3], y = l[4], w = l[5], b = i.split(" "), v = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0, k, T, P, C;
  e ? l !== rn && (T = c * g - p * _) && (P = v * (g / T) + x * (-_ / T) + (_ * w - g * y) / T, C = v * (-p / T) + x * (c / T) - (c * w - p * y) / T, v = P, x = C) : (k = Ya(t), v = k.x + (~b[0].indexOf("%") ? v / 100 * k.width : v), x = k.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * k.height : x)), r || r !== !1 && a.smooth ? (y = v - u, w = x - f, a.xOffset = d + (y * c + w * _) - y, a.yOffset = h + (y * p + w * g) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = x, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[he] = "0px 0px", o && (wi(o, a, "xOrigin", u, v), wi(o, a, "yOrigin", f, x), wi(o, a, "xOffset", d, a.xOffset), wi(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + x);
}, nn = function(t, i) {
  var e = t._gsap || new ka(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = be(t, he) || "0", f, d, h, c, p, _, g, y, w, b, v, x, k, T, P, C, E, N, O, q, V, Q, $, L, j, st, m, ot, Qt, Le, dt, zt;
  return f = d = h = _ = g = y = w = b = v = 0, c = p = 1, e.svg = !!(t.getCTM && Ba(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), r.scale = r.rotate = r.translate = "none"), T = Zs(t, e.svg), e.svg && (e.uncache ? (j = t.getBBox(), u = e.xOrigin - j.x + "px " + (e.yOrigin - j.y) + "px", L = "") : L = !i && t.getAttribute("data-svg-origin"), Ts(t, L || u, !!L || e.originIsAbsolute, e.smooth !== !1, T)), x = e.xOrigin || 0, k = e.yOrigin || 0, T !== rn && (N = T[0], O = T[1], q = T[2], V = T[3], f = Q = T[4], d = $ = T[5], T.length === 6 ? (c = Math.sqrt(N * N + O * O), p = Math.sqrt(V * V + q * q), _ = N || O ? rr(O, N) * Ii : 0, w = q || V ? rr(q, V) * Ii + _ : 0, w && (p *= Math.abs(Math.cos(w * dr))), e.svg && (f -= x - (x * N + k * q), d -= k - (x * O + k * V))) : (zt = T[6], Le = T[7], m = T[8], ot = T[9], Qt = T[10], dt = T[11], f = T[12], d = T[13], h = T[14], P = rr(zt, Qt), g = P * Ii, P && (C = Math.cos(-P), E = Math.sin(-P), L = Q * C + m * E, j = $ * C + ot * E, st = zt * C + Qt * E, m = Q * -E + m * C, ot = $ * -E + ot * C, Qt = zt * -E + Qt * C, dt = Le * -E + dt * C, Q = L, $ = j, zt = st), P = rr(-q, Qt), y = P * Ii, P && (C = Math.cos(-P), E = Math.sin(-P), L = N * C - m * E, j = O * C - ot * E, st = q * C - Qt * E, dt = V * E + dt * C, N = L, O = j, q = st), P = rr(O, N), _ = P * Ii, P && (C = Math.cos(P), E = Math.sin(P), L = N * C + O * E, j = Q * C + $ * E, O = O * C - N * E, $ = $ * C - Q * E, N = L, Q = j), g && Math.abs(g) + Math.abs(_) > 359.9 && (g = _ = 0, y = 180 - y), c = wt(Math.sqrt(N * N + O * O + q * q)), p = wt(Math.sqrt($ * $ + zt * zt)), P = rr(Q, $), w = Math.abs(P) > 2e-4 ? P * Ii : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), e.svg && (L = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Wa(be(t, ht)), L && t.setAttribute("transform", L))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (c *= -1, w += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, w += w <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = d - ((e.yPercent = d && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = h + o, e.scaleX = wt(c), e.scaleY = wt(p), e.rotation = wt(_) + a, e.rotationX = wt(g) + a, e.rotationY = wt(y) + a, e.skewX = w + a, e.skewY = b + a, e.transformPerspective = v + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[he] = Yn(u)), e.xOffset = e.yOffset = 0, e.force3D = ke.force3D, e.renderTransform = e.svg ? Nu : Ia ? Ha : Lu, e.uncache = 0, e;
}, Yn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, is = function(t, i, e) {
  var r = $t(i);
  return wt(parseFloat(i) + parseFloat(Ei(t, "x", e + "px", r))) + r;
}, Lu = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Ha(t, i);
}, Ni = "0deg", Er = "0px", Fi = ") ", Ha = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.z, u = e.rotation, f = e.rotationY, d = e.rotationX, h = e.skewX, c = e.skewY, p = e.scaleX, _ = e.scaleY, g = e.transformPerspective, y = e.force3D, w = e.target, b = e.zOrigin, v = "", x = y === "auto" && t && t !== 1 || y === !0;
  if (b && (d !== Ni || f !== Ni)) {
    var k = parseFloat(f) * dr, T = Math.sin(k), P = Math.cos(k), C;
    k = parseFloat(d) * dr, C = Math.cos(k), o = is(w, o, T * C * -b), a = is(w, a, -Math.sin(k) * -b), l = is(w, l, P * C * -b + b);
  }
  g !== Er && (v += "perspective(" + g + Fi), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (x || o !== Er || a !== Er || l !== Er) && (v += l !== Er || x ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Fi), u !== Ni && (v += "rotate(" + u + Fi), f !== Ni && (v += "rotateY(" + f + Fi), d !== Ni && (v += "rotateX(" + d + Fi), (h !== Ni || c !== Ni) && (v += "skew(" + h + ", " + c + Fi), (p !== 1 || _ !== 1) && (v += "scale(" + p + ", " + _ + Fi), w.style[ht] = v || "translate(0, 0)";
}, Nu = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.rotation, u = e.skewX, f = e.skewY, d = e.scaleX, h = e.scaleY, c = e.target, p = e.xOrigin, _ = e.yOrigin, g = e.xOffset, y = e.yOffset, w = e.forceCSS, b = parseFloat(o), v = parseFloat(a), x, k, T, P, C;
  l = parseFloat(l), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, l += f), l || u ? (l *= dr, u *= dr, x = Math.cos(l) * d, k = Math.sin(l) * d, T = Math.sin(l - u) * -h, P = Math.cos(l - u) * h, u && (f *= dr, C = Math.tan(u - f), C = Math.sqrt(1 + C * C), T *= C, P *= C, f && (C = Math.tan(f), C = Math.sqrt(1 + C * C), x *= C, k *= C)), x = wt(x), k = wt(k), T = wt(T), P = wt(P)) : (x = d, P = h, k = T = 0), (b && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (b = Ei(c, "x", o, "px"), v = Ei(c, "y", a, "px")), (p || _ || g || y) && (b = wt(b + p - (p * x + _ * T) + g), v = wt(v + _ - (p * k + _ * P) + y)), (r || n) && (C = c.getBBox(), b = wt(b + r / 100 * C.width), v = wt(v + n / 100 * C.height)), C = "matrix(" + x + "," + k + "," + T + "," + P + "," + b + "," + v + ")", c.setAttribute("transform", C), w && (c.style[ht] = C);
}, Fu = function(t, i, e, r, n) {
  var o = 360, a = At(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1), u = l - r, f = r + u + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * vo) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * vo) % o - ~~(u / o) * o)), t._pt = h = new ce(t._pt, i, e, r, u, yu), h.e = f, h.u = "deg", t._props.push(e), h;
}, ko = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, Iu = function(t, i, e) {
  var r = ko({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, l, u, f, d, h, c, p;
  r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[ht] = i, a = nn(e, 1), Pi(e, ht), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[ht], o[ht] = i, a = nn(e, 1), o[ht] = u);
  for (l in ui)
    u = r[l], f = a[l], u !== f && n.indexOf(l) < 0 && (c = $t(u), p = $t(f), d = c !== p ? Ei(e, l, u, p) : parseFloat(u), h = parseFloat(f), t._pt = new ce(t._pt, a, l, d, h - d, ws), t._pt.u = p || 0, t._props.push(l));
  ko(a, r);
};
fe("padding,margin,Width,Radius", function(s, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  In[t > 1 ? "border" + s : s] = function(a, l, u, f, d) {
    var h, c;
    if (arguments.length < 4)
      return h = o.map(function(p) {
        return ni(a, p, u);
      }), c = h.join(" "), c.split(h[0]).length === 5 ? h[0] : c;
    h = (f + "").split(" "), c = {}, o.forEach(function(p, _) {
      return c[p] = h[_] = h[_] || h[(_ - 1) / 2 | 0];
    }), a.init(l, c, d);
  };
});
var Va = {
  name: "css",
  register: Ss,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var o = this._props, a = t.style, l = e.vars.startAt, u, f, d, h, c, p, _, g, y, w, b, v, x, k, T, P, C;
    Gs || Ss(), this.styles = this.styles || Fa(t), P = this.styles.props, this.tween = e;
    for (_ in i)
      if (_ !== "autoRound" && (f = i[_], !(ye[_] && Ca(_, i, e, r, t, n)))) {
        if (c = typeof f, p = In[_], c === "function" && (f = f.call(e, r, t, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = Jr(f)), p)
          p(this, t, _, f, e) && (T = 1);
        else if (_.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(_) + "").trim(), f += "", bi.lastIndex = 0, bi.test(u) || (g = $t(u), y = $t(f), y ? g !== y && (u = Ei(t, _, u, y) + y) : g && (f += g)), this.add(a, "setProperty", u, f, r, n, 0, 0, _), o.push(_), P.push(_, 0, a[_]);
        else if (c !== "undefined") {
          if (l && _ in l ? (u = typeof l[_] == "function" ? l[_].call(e, r, t, n) : l[_], At(u) && ~u.indexOf("random(") && (u = Jr(u)), $t(u + "") || u === "auto" || (u += ke.units[_] || $t(ni(t, _)) || ""), (u + "").charAt(1) === "=" && (u = ni(t, _))) : u = ni(t, _), h = parseFloat(u), w = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), w && (f = f.substr(2)), d = parseFloat(f), _ in Ge && (_ === "autoAlpha" && (h === 1 && ni(t, "visibility") === "hidden" && d && (h = 0), P.push("visibility", 0, a.visibility), wi(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), _ !== "scale" && _ !== "transform" && (_ = Ge[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), b = _ in ui, b) {
            if (this.styles.save(_), C = f, c === "string" && f.substring(0, 6) === "var(--") {
              if (f = be(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = f, f = be(t, "perspective"), E ? t.style.perspective = E : Pi(t, "perspective");
              }
              d = parseFloat(f);
            }
            if (v || (x = t._gsap, x.renderTransform && !i.parseTransform || nn(t, i.parseTransform), k = i.smoothOrigin !== !1 && x.smooth, v = this._pt = new ce(this._pt, a, ht, 0, 1, x.renderTransform, x, 0, -1), v.dep = 1), _ === "scale")
              this._pt = new ce(this._pt, x, "scaleY", x.scaleY, (w ? cr(x.scaleY, w + d) : d) - x.scaleY || 0, ws), this._pt.u = 0, o.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              P.push(he, 0, a[he]), f = Au(f), x.svg ? Ts(t, f, 0, k, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== x.zOrigin && wi(this, x, "zOrigin", x.zOrigin, y), wi(this, a, _, Yn(u), Yn(f)));
              continue;
            } else if (_ === "svgOrigin") {
              Ts(t, f, 1, k, 0, this);
              continue;
            } else if (_ in Xa) {
              Fu(this, x, _, h, w ? cr(h, w + f) : f);
              continue;
            } else if (_ === "smoothOrigin") {
              wi(this, x, "smooth", x.smooth, f);
              continue;
            } else if (_ === "force3D") {
              x[_] = f;
              continue;
            } else if (_ === "transform") {
              Iu(this, f, t);
              continue;
            }
          } else _ in a || (_ = Sr(_) || _);
          if (b || (d || d === 0) && (h || h === 0) && !vu.test(f) && _ in a)
            g = (u + "").substr((h + "").length), d || (d = 0), y = $t(f) || (_ in ke.units ? ke.units[_] : g), g !== y && (h = Ei(t, _, u, y)), this._pt = new ce(this._pt, b ? x : a, _, h, (w ? cr(h, w + d) : d) - h, !b && (y === "px" || _ === "zIndex") && i.autoRound !== !1 ? Su : ws), this._pt.u = y || 0, b && C !== f ? (this._pt.b = u, this._pt.e = C, this._pt.r = xu) : g !== y && y !== "%" && (this._pt.b = u, this._pt.r = wu);
          else if (_ in a)
            Ru.call(this, t, _, u, w ? w + f : f);
          else if (_ in t)
            this.add(t, _, u || t[_], w ? w + f : f, r, n);
          else if (_ !== "parseTransform") {
            Is(_, f);
            continue;
          }
          b || (_ in a ? P.push(_, 0, a[_]) : typeof t[_] == "function" ? P.push(_, 2, t[_]()) : P.push(_, 1, u || t[_])), o.push(_);
        }
      }
    T && Ra(this);
  },
  render: function(t, i) {
    if (i.tween._time || !Ks())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: ni,
  aliases: Ge,
  getSetter: function(t, i, e) {
    var r = Ge[i];
    return r && r.indexOf(",") < 0 && (i = r), i in ui && i !== he && (t._gsap.x || ni(t, "x")) ? e && mo === e ? i === "scale" ? Cu : ku : (mo = e || {}) && (i === "scale" ? Pu : Eu) : t.style && !Ls(t.style[i]) ? Tu : ~i.indexOf("-") ? bu : qs(t, i);
  },
  core: {
    _removeProperty: Pi,
    _getMatrix: Zs
  }
};
de.utils.checkPrefix = Sr;
de.core.getStyleSaver = Fa;
(function(s, t, i, e) {
  var r = fe(s + "," + t + "," + i, function(n) {
    ui[n] = 1;
  });
  fe(t, function(n) {
    ke.units[n] = "deg", Xa[n] = 1;
  }), Ge[r[13]] = s + "," + t, fe(e, function(n) {
    var o = n.split(":");
    Ge[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ke.units[s] = "px";
});
de.registerPlugin(Va);
var Ft = de.registerPlugin(Va) || de;
Ft.core.Tween;
function Yu(s, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
  }
}
function Bu(s, t, i) {
  return t && Yu(s.prototype, t), s;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var It, Pn, Se, xi, Si, _r, Ua, Yi, Xr, qa, oi, Xe, $a, Ga = function() {
  return It || typeof window < "u" && (It = window.gsap) && It.registerPlugin && It;
}, Ka = 1, fr = [], H = [], Qe = [], Wr = Date.now, bs = function(t, i) {
  return i;
}, Xu = function() {
  var t = Xr.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, H), r.push.apply(r, Qe), H = e, Qe = r, bs = function(o, a) {
    return i[o](a);
  };
}, ki = function(t, i) {
  return ~Qe.indexOf(t) && Qe[Qe.indexOf(t) + 1][i];
}, Hr = function(t) {
  return !!~qa.indexOf(t);
}, ee = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, te = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, hn = "scrollLeft", dn = "scrollTop", ks = function() {
  return oi && oi.isPressed || H.cache++;
}, Bn = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      Ka && (Se.history.scrollRestoration = "manual");
      var o = oi && oi.isPressed;
      n = r.v = Math.round(n) || (oi && oi.iOS ? 1 : 0), t(n), r.cacheID = H.cache, o && bs("ss", n);
    } else (i || H.cache !== r.cacheID || bs("ref")) && (r.cacheID = H.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, oe = {
  s: hn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Bn(function(s) {
    return arguments.length ? Se.scrollTo(s, Et.sc()) : Se.pageXOffset || xi[hn] || Si[hn] || _r[hn] || 0;
  })
}, Et = {
  s: dn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: oe,
  sc: Bn(function(s) {
    return arguments.length ? Se.scrollTo(oe.sc(), s) : Se.pageYOffset || xi[dn] || Si[dn] || _r[dn] || 0;
  })
}, le = function(t, i) {
  return (i && i._ctx && i._ctx.selector || It.utils.toArray)(t)[0] || (typeof t == "string" && It.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Wu = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, Oi = function(t, i) {
  var e = i.s, r = i.sc;
  Hr(t) && (t = xi.scrollingElement || Si);
  var n = H.indexOf(t), o = r === Et.sc ? 1 : 2;
  !~n && (n = H.push(t) - 1), H[n + o] || ee(t, "scroll", ks);
  var a = H[n + o], l = a || (H[n + o] = Bn(ki(t, e), !0) || (Hr(t) ? r : Bn(function(u) {
    return arguments.length ? t[e] = u : t[e];
  })));
  return l.target = t, a || (l.smooth = It.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Cs = function(t, i, e) {
  var r = t, n = t, o = Wr(), a = o, l = i || 50, u = Math.max(500, l * 3), f = function(p, _) {
    var g = Wr();
    _ || g - o > l ? (n = r, r = p, a = o, o = g) : e ? r += p : r = n + (p - n) / (g - a) * (o - a);
  }, d = function() {
    n = r = e ? 0 : r, a = o = 0;
  }, h = function(p) {
    var _ = a, g = n, y = Wr();
    return (p || p === 0) && p !== r && f(p), o === a || y - a > u ? 0 : (r + (e ? g : -g)) / ((e ? y : o) - _) * 1e3;
  };
  return {
    update: f,
    reset: d,
    getVelocity: h
  };
}, Or = function(t, i) {
  return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Co = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, Qa = function() {
  Xr = It.core.globals().ScrollTrigger, Xr && Xr.core && Xu();
}, Za = function(t) {
  return It = t || Ga(), !Pn && It && typeof document < "u" && document.body && (Se = window, xi = document, Si = xi.documentElement, _r = xi.body, qa = [Se, xi, Si, _r], It.utils.clamp, $a = It.core.context || function() {
  }, Yi = "onpointerenter" in _r ? "pointer" : "mouse", Ua = xt.isTouch = Se.matchMedia && Se.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Se || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Xe = xt.eventTypes = ("ontouchstart" in Si ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Si ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Ka = 0;
  }, 500), Qa(), Pn = 1), Pn;
};
oe.op = Et;
H.cache = 0;
var xt = /* @__PURE__ */ function() {
  function s(i) {
    this.init(i);
  }
  var t = s.prototype;
  return t.init = function(e) {
    Pn || Za(It) || console.warn("Please gsap.registerPlugin(Observer)"), Xr || Qa();
    var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, l = e.lineHeight, u = e.debounce, f = e.preventDefault, d = e.onStop, h = e.onStopDelay, c = e.ignore, p = e.wheelSpeed, _ = e.event, g = e.onDragStart, y = e.onDragEnd, w = e.onDrag, b = e.onPress, v = e.onRelease, x = e.onRight, k = e.onLeft, T = e.onUp, P = e.onDown, C = e.onChangeX, E = e.onChangeY, N = e.onChange, O = e.onToggleX, q = e.onToggleY, V = e.onHover, Q = e.onHoverEnd, $ = e.onMove, L = e.ignoreCheck, j = e.isNormalizer, st = e.onGestureStart, m = e.onGestureEnd, ot = e.onWheel, Qt = e.onEnable, Le = e.onDisable, dt = e.onClick, zt = e.scrollSpeed, Bt = e.capture, St = e.allowClicks, Zt = e.lockAxis, Xt = e.onLockAxis;
    this.target = a = le(a) || Si, this.vars = e, c && (c = It.utils.toArray(c)), r = r || 1e-9, n = n || 0, p = p || 1, zt = zt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Se.getComputedStyle(_r).lineHeight) || 22);
    var fi, jt, Jt, Z, mt, ae, _e, S = this, pe = 0, je = 0, ci = e.passive || !f && e.passive !== !1, _t = Oi(a, oe), Je = Oi(a, Et), hi = _t(), Di = Je(), Ot = ~o.indexOf("touch") && !~o.indexOf("pointer") && Xe[0] === "pointerdown", di = Hr(a), vt = a.ownerDocument || xi, Ne = [0, 0, 0], Ee = [0, 0, 0], ti = 0, br = function() {
      return ti = Wr();
    }, Tt = function(z, J) {
      return (S.event = z) && c && Wu(z.target, c) || J && Ot && z.pointerType !== "touch" || L && L(z, J);
    }, ln = function() {
      S._vx.reset(), S._vy.reset(), jt.pause(), d && d(S);
    }, ei = function() {
      var z = S.deltaX = Co(Ne), J = S.deltaY = Co(Ee), M = Math.abs(z) >= r, F = Math.abs(J) >= r;
      N && (M || F) && N(S, z, J, Ne, Ee), M && (x && S.deltaX > 0 && x(S), k && S.deltaX < 0 && k(S), C && C(S), O && S.deltaX < 0 != pe < 0 && O(S), pe = S.deltaX, Ne[0] = Ne[1] = Ne[2] = 0), F && (P && S.deltaY > 0 && P(S), T && S.deltaY < 0 && T(S), E && E(S), q && S.deltaY < 0 != je < 0 && q(S), je = S.deltaY, Ee[0] = Ee[1] = Ee[2] = 0), (Z || Jt) && ($ && $(S), Jt && (g && Jt === 1 && g(S), w && w(S), Jt = 0), Z = !1), ae && !(ae = !1) && Xt && Xt(S), mt && (ot(S), mt = !1), fi = 0;
    }, tr = function(z, J, M) {
      Ne[M] += z, Ee[M] += J, S._vx.update(z), S._vy.update(J), u ? fi || (fi = requestAnimationFrame(ei)) : ei();
    }, er = function(z, J) {
      Zt && !_e && (S.axis = _e = Math.abs(z) > Math.abs(J) ? "x" : "y", ae = !0), _e !== "y" && (Ne[2] += z, S._vx.update(z, !0)), _e !== "x" && (Ee[2] += J, S._vy.update(J, !0)), u ? fi || (fi = requestAnimationFrame(ei)) : ei();
    }, _i = function(z) {
      if (!Tt(z, 1)) {
        z = Or(z, f);
        var J = z.clientX, M = z.clientY, F = J - S.x, A = M - S.y, I = S.isDragging;
        S.x = J, S.y = M, (I || (F || A) && (Math.abs(S.startX - J) >= n || Math.abs(S.startY - M) >= n)) && (Jt || (Jt = I ? 2 : 1), I || (S.isDragging = !0), er(F, A));
      }
    }, Ri = S.onPress = function(Y) {
      Tt(Y, 1) || Y && Y.button || (S.axis = _e = null, jt.pause(), S.isPressed = !0, Y = Or(Y), pe = je = 0, S.startX = S.x = Y.clientX, S.startY = S.y = Y.clientY, S._vx.reset(), S._vy.reset(), ee(j ? a : vt, Xe[1], _i, ci, !0), S.deltaX = S.deltaY = 0, b && b(S));
    }, U = S.onRelease = function(Y) {
      if (!Tt(Y, 1)) {
        te(j ? a : vt, Xe[1], _i, !0);
        var z = !isNaN(S.y - S.startY), J = S.isDragging, M = J && (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3), F = Or(Y);
        !M && z && (S._vx.reset(), S._vy.reset(), f && St && It.delayedCall(0.08, function() {
          if (Wr() - ti > 300 && !Y.defaultPrevented) {
            if (Y.target.click)
              Y.target.click();
            else if (vt.createEvent) {
              var A = vt.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, Se, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), Y.target.dispatchEvent(A);
            }
          }
        })), S.isDragging = S.isGesturing = S.isPressed = !1, d && J && !j && jt.restart(!0), Jt && ei(), y && J && y(S), v && v(S, M);
      }
    }, Ai = function(z) {
      return z.touches && z.touches.length > 1 && (S.isGesturing = !0) && st(z, S.isDragging);
    }, Fe = function() {
      return (S.isGesturing = !1) || m(S);
    }, Ie = function(z) {
      if (!Tt(z)) {
        var J = _t(), M = Je();
        tr((J - hi) * zt, (M - Di) * zt, 1), hi = J, Di = M, d && jt.restart(!0);
      }
    }, Ye = function(z) {
      if (!Tt(z)) {
        z = Or(z, f), ot && (mt = !0);
        var J = (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Se.innerHeight : 1) * p;
        tr(z.deltaX * J, z.deltaY * J, 0), d && !j && jt.restart(!0);
      }
    }, zi = function(z) {
      if (!Tt(z)) {
        var J = z.clientX, M = z.clientY, F = J - S.x, A = M - S.y;
        S.x = J, S.y = M, Z = !0, d && jt.restart(!0), (F || A) && er(F, A);
      }
    }, ir = function(z) {
      S.event = z, V(S);
    }, ii = function(z) {
      S.event = z, Q(S);
    }, kr = function(z) {
      return Tt(z) || Or(z, f) && dt(S);
    };
    jt = S._dc = It.delayedCall(h || 0.25, ln).pause(), S.deltaX = S.deltaY = 0, S._vx = Cs(0, 50, !0), S._vy = Cs(0, 50, !0), S.scrollX = _t, S.scrollY = Je, S.isDragging = S.isGesturing = S.isPressed = !1, $a(this), S.enable = function(Y) {
      return S.isEnabled || (ee(di ? vt : a, "scroll", ks), o.indexOf("scroll") >= 0 && ee(di ? vt : a, "scroll", Ie, ci, Bt), o.indexOf("wheel") >= 0 && ee(a, "wheel", Ye, ci, Bt), (o.indexOf("touch") >= 0 && Ua || o.indexOf("pointer") >= 0) && (ee(a, Xe[0], Ri, ci, Bt), ee(vt, Xe[2], U), ee(vt, Xe[3], U), St && ee(a, "click", br, !0, !0), dt && ee(a, "click", kr), st && ee(vt, "gesturestart", Ai), m && ee(vt, "gestureend", Fe), V && ee(a, Yi + "enter", ir), Q && ee(a, Yi + "leave", ii), $ && ee(a, Yi + "move", zi)), S.isEnabled = !0, S.isDragging = S.isGesturing = S.isPressed = Z = Jt = !1, S._vx.reset(), S._vy.reset(), hi = _t(), Di = Je(), Y && Y.type && Ri(Y), Qt && Qt(S)), S;
    }, S.disable = function() {
      S.isEnabled && (fr.filter(function(Y) {
        return Y !== S && Hr(Y.target);
      }).length || te(di ? vt : a, "scroll", ks), S.isPressed && (S._vx.reset(), S._vy.reset(), te(j ? a : vt, Xe[1], _i, !0)), te(di ? vt : a, "scroll", Ie, Bt), te(a, "wheel", Ye, Bt), te(a, Xe[0], Ri, Bt), te(vt, Xe[2], U), te(vt, Xe[3], U), te(a, "click", br, !0), te(a, "click", kr), te(vt, "gesturestart", Ai), te(vt, "gestureend", Fe), te(a, Yi + "enter", ir), te(a, Yi + "leave", ii), te(a, Yi + "move", zi), S.isEnabled = S.isPressed = S.isDragging = !1, Le && Le(S));
    }, S.kill = S.revert = function() {
      S.disable();
      var Y = fr.indexOf(S);
      Y >= 0 && fr.splice(Y, 1), oi === S && (oi = 0);
    }, fr.push(S), j && Hr(a) && (oi = S), S.enable(_);
  }, Bu(s, [{
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
xt.register = Za;
xt.getAll = function() {
  return fr.slice();
};
xt.getById = function(s) {
  return fr.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
Ga() && It.registerPlugin(xt);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, or, W, nt, we, tt, js, Xn, sn, Vr, Ar, _n, Ut, $n, Ps, re, Po, Eo, ar, ja, rs, Ja, ie, Es, tl, el, mi, Os, Js, pr, to, Ur, Ms, ns, pn = 1, qt = Date.now, ss = qt(), ze = 0, zr = 0, Oo = function(t, i, e) {
  var r = ve(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Mo = function(t, i) {
  return i && (!ve(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Hu = function s() {
  return zr && requestAnimationFrame(s);
}, Do = function() {
  return $n = 1;
}, Ro = function() {
  return $n = 0;
}, qe = function(t) {
  return t;
}, Lr = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, il = function() {
  return typeof window < "u";
}, rl = function() {
  return D || il() && (D = window.gsap) && D.registerPlugin && D;
}, Qi = function(t) {
  return !!~js.indexOf(t);
}, nl = function(t) {
  return (t === "Height" ? to : W["inner" + t]) || we["client" + t] || tt["client" + t];
}, sl = function(t) {
  return ki(t, "getBoundingClientRect") || (Qi(t) ? function() {
    return Rn.width = W.innerWidth, Rn.height = to, Rn;
  } : function() {
    return si(t);
  });
}, Vu = function(t, i, e) {
  var r = e.d, n = e.d2, o = e.a;
  return (o = ki(t, "getBoundingClientRect")) ? function() {
    return o()[r];
  } : function() {
    return (i ? nl(n) : t["client" + n]) || 0;
  };
}, Uu = function(t, i) {
  return !i || ~Qe.indexOf(t) ? sl(t) : function() {
    return Rn;
  };
}, Ke = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, o = i.a;
  return Math.max(0, (e = "scroll" + r) && (o = ki(t, e)) ? o() - sl(t)()[n] : Qi(t) ? (we[e] || tt[e]) - nl(r) : t[e] - t["offset" + r]);
}, gn = function(t, i) {
  for (var e = 0; e < ar.length; e += 3)
    (!i || ~i.indexOf(ar[e + 1])) && t(ar[e], ar[e + 1], ar[e + 2]);
}, ve = function(t) {
  return typeof t == "string";
}, Gt = function(t) {
  return typeof t == "function";
}, Nr = function(t) {
  return typeof t == "number";
}, Bi = function(t) {
  return typeof t == "object";
}, Mr = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, os = function(t, i) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return i(t);
    }) : i(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, nr = Math.abs, ol = "left", al = "top", eo = "right", io = "bottom", $i = "width", Gi = "height", qr = "Right", $r = "Left", Gr = "Top", Kr = "Bottom", bt = "padding", Me = "margin", Tr = "Width", ro = "Height", Pt = "px", De = function(t) {
  return W.getComputedStyle(t);
}, qu = function(t) {
  var i = De(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, Ao = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, si = function(t, i) {
  var e = i && De(t)[Ps] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
}, Wn = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, ll = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, $u = function(t) {
  return function(i) {
    return D.utils.snap(ll(t), i);
  };
}, no = function(t) {
  var i = D.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
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
}, Gu = function(t) {
  return function(i, e) {
    return no(ll(t))(i, e.direction);
  };
}, mn = function(t, i, e, r) {
  return e.split(",").forEach(function(n) {
    return t(i, n, r);
  });
}, Rt = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: !r,
    capture: !!n
  });
}, Dt = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, vn = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, zo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, yn = {
  toggleActions: "play",
  anticipatePin: 0
}, Hn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, En = function(t, i) {
  if (ve(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in Hn ? Hn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, wn = function(t, i, e, r, n, o, a, l) {
  var u = n.startColor, f = n.endColor, d = n.fontSize, h = n.indent, c = n.fontWeight, p = nt.createElement("div"), _ = Qi(e) || ki(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, y = _ ? tt : e, w = t.indexOf("start") !== -1, b = w ? u : f, v = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((g || l) && _ ? "fixed;" : "absolute;"), (g || l || !_) && (v += (r === Et ? eo : io) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = w, p.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), p.style.cssText = v, p.innerText = i || i === 0 ? t + "-" + i : t, y.children[0] ? y.insertBefore(p, y.children[0]) : y.appendChild(p), p._offset = p["offset" + r.op.d2], On(p, 0, r, w), p;
}, On = function(t, i, e, r) {
  var n = {
    display: "block"
  }, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + Tr] = 1, n["border" + a + Tr] = 0, n[e.p] = i + "px", D.set(t, n);
}, B = [], Ds = {}, on, Lo = function() {
  return qt() - ze > 34 && (on || (on = requestAnimationFrame(ai)));
}, sr = function() {
  (!ie || !ie.isPressed || ie.startX > tt.clientWidth) && (H.cache++, ie ? on || (on = requestAnimationFrame(ai)) : ai(), ze || ji("scrollStart"), ze = qt());
}, as = function() {
  el = W.innerWidth, tl = W.innerHeight;
}, Fr = function(t) {
  H.cache++, (t === !0 || !Ut && !Ja && !nt.fullscreenElement && !nt.webkitFullscreenElement && (!Es || el !== W.innerWidth || Math.abs(W.innerHeight - tl) > W.innerHeight * 0.25)) && Xn.restart(!0);
}, Zi = {}, Ku = [], ul = function s() {
  return Dt(X, "scrollEnd", s) || Wi(!0);
}, ji = function(t) {
  return Zi[t] && Zi[t].map(function(i) {
    return i();
  }) || Ku;
}, me = [], fl = function(t) {
  for (var i = 0; i < me.length; i += 5)
    (!t || me[i + 4] && me[i + 4].query === t) && (me[i].style.cssText = me[i + 1], me[i].getBBox && me[i].setAttribute("transform", me[i + 2] || ""), me[i + 3].uncache = 1);
}, cl = function() {
  return H.forEach(function(t) {
    return Gt(t) && ++t.cacheID && (t.rec = t());
  });
}, so = function(t, i) {
  var e;
  for (re = 0; re < B.length; re++)
    e = B[re], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  Ur = !0, i && fl(i), i || ji("revert");
}, hl = function(t, i) {
  H.cache++, (i || !ne) && H.forEach(function(e) {
    return Gt(e) && e.cacheID++ && (e.rec = 0);
  }), ve(t) && (W.history.scrollRestoration = Js = t);
}, ne, Ki = 0, No, Qu = function() {
  if (No !== Ki) {
    var t = No = Ki;
    requestAnimationFrame(function() {
      return t === Ki && Wi(!0);
    });
  }
}, dl = function() {
  tt.appendChild(pr), to = !ie && pr.offsetHeight || W.innerHeight, tt.removeChild(pr);
}, Fo = function(t) {
  return sn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, Wi = function(t, i) {
  if (we = nt.documentElement, tt = nt.body, js = [W, nt, we, tt], ze && !t && !Ur) {
    Rt(X, "scrollEnd", ul);
    return;
  }
  dl(), ne = X.isRefreshing = !0, Ur || cl();
  var e = ji("refreshInit");
  ja && X.sort(), i || so(), H.forEach(function(r) {
    Gt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), B.slice(0).forEach(function(r) {
    return r.refresh();
  }), Ur = !1, B.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
    }
  }), Ms = 1, Fo(!0), B.forEach(function(r) {
    var n = Ke(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Fo(!1), Ms = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), H.forEach(function(r) {
    Gt(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), hl(Js, 1), Xn.pause(), Ki++, ne = 2, ai(2), B.forEach(function(r) {
    return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), ne = X.isRefreshing = !1, ji("refresh");
}, Rs = 0, Mn = 1, Qr, ai = function(t) {
  if (t === 2 || !ne && !Ur) {
    X.isUpdating = !0, Qr && Qr.update(0);
    var i = B.length, e = qt(), r = e - ss >= 50, n = i && B[0].scroll();
    if (Mn = Rs > n ? -1 : 1, ne || (Rs = n), r && (ze && !$n && e - ze > 200 && (ze = 0, ji("scrollEnd")), Ar = ss, ss = e), Mn < 0) {
      for (re = i; re-- > 0; )
        B[re] && B[re].update(0, r);
      Mn = 1;
    } else
      for (re = 0; re < i; re++)
        B[re] && B[re].update(0, r);
    X.isUpdating = !1;
  }
  on = 0;
}, As = [ol, al, io, eo, Me + Kr, Me + qr, Me + Gr, Me + $r, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Dn = As.concat([$i, Gi, "boxSizing", "max" + Tr, "max" + ro, "position", Me, bt, bt + Gr, bt + qr, bt + Kr, bt + $r]), Zu = function(t, i, e) {
  gr(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    gr(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, ls = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = As.length, o = i.style, a = t.style, l; n--; )
      l = As[n], o[l] = e[l];
    o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[io] = a[eo] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[$i] = Wn(t, oe) + Pt, o[Gi] = Wn(t, Et) + Pt, o[bt] = a[Me] = a[al] = a[ol] = "0", gr(r), a[$i] = a["max" + Tr] = e[$i], a[Gi] = a["max" + ro] = e[Gi], a[bt] = e[bt], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, ju = /([A-Z])/g, gr = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(ju, "-$1").toLowerCase());
  }
}, xn = function(t) {
  for (var i = Dn.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(Dn[n], e[Dn[n]]);
  return r.t = t, r;
}, Ju = function(t, i, e) {
  for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
    a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
  return r.t = t.t, r;
}, Rn = {
  left: 0,
  top: 0
}, Io = function(t, i, e, r, n, o, a, l, u, f, d, h, c, p) {
  Gt(t) && (t = t(l)), ve(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? En("0" + t.substr(3), e) : 0));
  var _ = c ? c.time() : 0, g, y, w;
  if (c && c.seek(0), isNaN(t) || (t = +t), Nr(t))
    c && (t = D.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, h, t)), a && On(a, e, r, !0);
  else {
    Gt(i) && (i = i(l));
    var b = (t || "0").split(" "), v, x, k, T;
    w = le(i, l) || tt, v = si(w) || {}, (!v || !v.left && !v.top) && De(w).display === "none" && (T = w.style.display, w.style.display = "block", v = si(w), T ? w.style.display = T : w.style.removeProperty("display")), x = En(b[0], v[r.d]), k = En(b[1] || "0", e), t = v[r.p] - u[r.p] - f + x + n - k, a && On(a, k, r, e - k < 20 || a._isStart && k > 20), e -= e - k;
  }
  if (p && (l[p] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + e, C = o._isStart;
    g = "scroll" + r.d2, On(o, P, r, C && P > 20 || !C && (d ? Math.max(tt[g], we[g]) : o.parentNode[g]) <= P + 1), d && (u = si(a), d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Pt));
  }
  return c && w && (g = si(w), c.seek(h), y = si(w), c._caScrollDist = g[r.p] - y[r.p], t = t / c._caScrollDist * h), c && c.seek(_), c ? t : Math.round(t);
}, tf = /(webkit|moz|length|cssText|inset)/i, Yo = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, o, a;
    if (i === tt) {
      t._stOrig = n.cssText, a = De(t);
      for (o in a)
        !+o && !tf.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, _l = function(t, i, e) {
  var r = i, n = r;
  return function(o) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r;
  };
}, Sn = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, D.set(t, r);
}, Bo = function(t, i) {
  var e = Oi(t, i), r = "_scroll" + i.p2, n = function o(a, l, u, f, d) {
    var h = o.tween, c = l.onComplete, p = {};
    u = u || e();
    var _ = _l(e, u, function() {
      h.kill(), o.tween = 0;
    });
    return d = f && d || 0, f = f || a - u, h && h.kill(), l[r] = a, l.inherit = !1, l.modifiers = p, p[r] = function() {
      return _(u + f * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      H.cache++, o.tween && ai();
    }, l.onComplete = function() {
      o.tween = 0, c && c.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Rt(t, "wheel", e.wheelHandler), X.isTouch && Rt(t, "touchmove", e.wheelHandler), n;
}, X = /* @__PURE__ */ function() {
  function s(i, e) {
    or || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Os(this), this.init(i, e);
  }
  var t = s.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !zr) {
      this.update = this.refresh = this.kill = qe;
      return;
    }
    e = Ao(ve(e) || Nr(e) || e.nodeType ? {
      trigger: e
    } : e, yn);
    var n = e, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, d = n.scrub, h = n.trigger, c = n.pin, p = n.pinSpacing, _ = n.invalidateOnRefresh, g = n.anticipatePin, y = n.onScrubComplete, w = n.onSnapComplete, b = n.once, v = n.snap, x = n.pinReparent, k = n.pinSpacer, T = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, E = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? oe : Et, N = !d && d !== 0, O = le(e.scroller || W), q = D.core.getCache(O), V = Qi(O), Q = ("pinType" in e ? e.pinType : ki(O, "pinType") || V && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], L = N && e.toggleActions.split(" "), j = "markers" in e ? e.markers : yn.markers, st = V ? 0 : parseFloat(De(O)["border" + E.p2 + Tr]) || 0, m = this, ot = e.onRefreshInit && function() {
      return e.onRefreshInit(m);
    }, Qt = Vu(O, V, E), Le = Uu(O, V), dt = 0, zt = 0, Bt = 0, St = Oi(O, E), Zt, Xt, fi, jt, Jt, Z, mt, ae, _e, S, pe, je, ci, _t, Je, hi, Di, Ot, di, vt, Ne, Ee, ti, br, Tt, ln, ei, tr, er, _i, Ri, U, Ai, Fe, Ie, Ye, zi, ir, ii;
    if (m._startClamp = m._endClamp = !1, m._dir = E, g *= 45, m.scroller = O, m.scroll = T ? T.time.bind(T) : St, jt = St(), m.vars = e, r = r || e.animation, "refreshPriority" in e && (ja = 1, e.refreshPriority === -9999 && (Qr = m)), q.tweenScroll = q.tweenScroll || {
      top: Bo(O, Et),
      left: Bo(O, oe)
    }, m.tweenTo = Zt = q.tweenScroll[E.p], m.scrubDuration = function(M) {
      Ai = Nr(M) && M, Ai ? U ? U.duration(M) : U = D.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Ai,
        paused: !0,
        onComplete: function() {
          return y && y(m);
        }
      }) : (U && U.progress(1).kill(), U = 0);
    }, r && (r.vars.lazy = !1, r._initted && !m.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), m.animation = r.pause(), r.scrollTrigger = m, m.scrubDuration(d), _i = 0, l || (l = r.vars.id)), v && ((!Bi(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(V ? [tt, we] : O, {
      scrollBehavior: "auto"
    }), H.forEach(function(M) {
      return Gt(M) && M.target === (V ? nt.scrollingElement || we : O) && (M.smooth = !1);
    }), fi = Gt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? $u(r) : v.snapTo === "labelsDirectional" ? Gu(r) : v.directional !== !1 ? function(M, F) {
      return no(v.snapTo)(M, qt() - zt < 500 ? 0 : F.direction);
    } : D.utils.snap(v.snapTo), Fe = v.duration || {
      min: 0.1,
      max: 2
    }, Fe = Bi(Fe) ? Vr(Fe.min, Fe.max) : Vr(Fe, Fe), Ie = D.delayedCall(v.delay || Ai / 2 || 0.1, function() {
      var M = St(), F = qt() - zt < 500, A = Zt.tween;
      if ((F || Math.abs(m.getVelocity()) < 10) && !A && !$n && dt !== M) {
        var I = (M - Z) / _t, Mt = r && !N ? r.totalProgress() : I, G = F ? 0 : (Mt - Ri) / (qt() - Ar) * 1e3 || 0, yt = D.utils.clamp(-I, 1 - I, nr(G / 2) * G / 0.185), Wt = I + (v.inertia === !1 ? 0 : yt), pt, at, et = v, Be = et.onStart, ut = et.onInterrupt, ge = et.onComplete;
        if (pt = fi(Wt, m), Nr(pt) || (pt = Wt), at = Math.max(0, Math.round(Z + pt * _t)), M <= mt && M >= Z && at !== M) {
          if (A && !A._initted && A.data <= nr(at - M))
            return;
          v.inertia === !1 && (yt = pt - I), Zt(at, {
            duration: Fe(nr(Math.max(nr(Wt - Mt), nr(pt - Mt)) * 0.185 / G / 0.05 || 0)),
            ease: v.ease || "power3",
            data: nr(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Ie.restart(!0) && ut && ut(m);
            },
            onComplete: function() {
              m.update(), dt = St(), r && !N && (U ? U.resetTo("totalProgress", pt, r._tTime / r._tDur) : r.progress(pt)), _i = Ri = r && !N ? r.totalProgress() : m.progress, w && w(m), ge && ge(m);
            }
          }, M, yt * _t, at - M - yt * _t), Be && Be(m, Zt.tween);
        }
      } else m.isActive && dt !== M && Ie.restart(!0);
    }).pause()), l && (Ds[l] = m), h = m.trigger = le(h || c !== !0 && c), ii = h && h._gsap && h._gsap.stRevert, ii && (ii = ii(m)), c = c === !0 ? h : le(c), ve(a) && (a = {
      targets: h,
      className: a
    }), c && (p === !1 || p === Me || (p = !p && c.parentNode && c.parentNode.style && De(c.parentNode).display === "flex" ? !1 : bt), m.pin = c, Xt = D.core.getCache(c), Xt.spacer ? Je = Xt.pinState : (k && (k = le(k), k && !k.nodeType && (k = k.current || k.nativeElement), Xt.spacerIsNative = !!k, k && (Xt.spacerState = xn(k))), Xt.spacer = Ot = k || nt.createElement("div"), Ot.classList.add("pin-spacer"), l && Ot.classList.add("pin-spacer-" + l), Xt.pinState = Je = xn(c)), e.force3D !== !1 && D.set(c, {
      force3D: !0
    }), m.spacer = Ot = Xt.spacer, er = De(c), br = er[p + E.os2], vt = D.getProperty(c), Ne = D.quickSetter(c, E.a, Pt), ls(c, Ot, er), Di = xn(c)), j) {
      je = Bi(j) ? Ao(j, zo) : zo, S = wn("scroller-start", l, O, E, je, 0), pe = wn("scroller-end", l, O, E, je, 0, S), di = S["offset" + E.op.d2];
      var kr = le(ki(O, "content") || O);
      ae = this.markerStart = wn("start", l, kr, E, je, di, 0, T), _e = this.markerEnd = wn("end", l, kr, E, je, di, 0, T), T && (ir = D.quickSetter([ae, _e], E.a, Pt)), !Q && !(Qe.length && ki(O, "fixedMarkers") === !0) && (qu(V ? tt : O), D.set([S, pe], {
        force3D: !0
      }), ln = D.quickSetter(S, E.a, Pt), tr = D.quickSetter(pe, E.a, Pt));
    }
    if (T) {
      var Y = T.vars.onUpdate, z = T.vars.onUpdateParams;
      T.eventCallback("onUpdate", function() {
        m.update(0, 0, 1), Y && Y.apply(T, z || []);
      });
    }
    if (m.previous = function() {
      return B[B.indexOf(m) - 1];
    }, m.next = function() {
      return B[B.indexOf(m) + 1];
    }, m.revert = function(M, F) {
      if (!F)
        return m.kill(!0);
      var A = M !== !1 || !m.enabled, I = Ut;
      A !== m.isReverted && (A && (Ye = Math.max(St(), m.scroll.rec || 0), Bt = m.progress, zi = r && r.progress()), ae && [ae, _e, S, pe].forEach(function(Mt) {
        return Mt.style.display = A ? "none" : "block";
      }), A && (Ut = m, m.update(A)), c && (!x || !m.isActive) && (A ? Zu(c, Ot, Je) : ls(c, Ot, De(c), Tt)), A || m.update(A), Ut = I, m.isReverted = A);
    }, m.refresh = function(M, F, A, I) {
      if (!((Ut || !m.enabled) && !F)) {
        if (c && M && ze) {
          Rt(s, "scrollEnd", ul);
          return;
        }
        !ne && ot && ot(m), Ut = m, Zt.tween && !A && (Zt.tween.kill(), Zt.tween = 0), U && U.pause(), _ && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(pi) {
          return pi.vars.immediateRender && pi.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
        var Mt = Qt(), G = Le(), yt = T ? T.duration() : Ke(O, E), Wt = _t <= 0.01 || !_t, pt = 0, at = I || 0, et = Bi(A) ? A.end : e.end, Be = e.endTrigger || h, ut = Bi(A) ? A.start : e.start || (e.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"), ge = m.pinnedContainer = e.pinnedContainer && le(e.pinnedContainer, m), We = h && Math.max(0, B.indexOf(m)) || 0, Lt = We, Nt, Ht, Li, un, Vt, Ct, He, Gn, oo, Cr, Ve, Pr, fn;
        for (j && Bi(A) && (Pr = D.getProperty(S, E.p), fn = D.getProperty(pe, E.p)); Lt-- > 0; )
          Ct = B[Lt], Ct.end || Ct.refresh(0, 1) || (Ut = m), He = Ct.pin, He && (He === h || He === c || He === ge) && !Ct.isReverted && (Cr || (Cr = []), Cr.unshift(Ct), Ct.revert(!0, !0)), Ct !== B[Lt] && (We--, Lt--);
        for (Gt(ut) && (ut = ut(m)), ut = Oo(ut, "start", m), Z = Io(ut, h, Mt, E, St(), ae, S, m, G, st, Q, yt, T, m._startClamp && "_startClamp") || (c ? -1e-3 : 0), Gt(et) && (et = et(m)), ve(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (ve(ut) ? ut.split(" ")[0] : "") + et : (pt = En(et.substr(2), Mt), et = ve(ut) ? ut : (T ? D.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, Z) : Z) + pt, Be = h)), et = Oo(et, "end", m), mt = Math.max(Z, Io(et || (Be ? "100% 0" : yt), Be, Mt, E, St() + pt, _e, pe, m, G, st, Q, yt, T, m._endClamp && "_endClamp")) || -1e-3, pt = 0, Lt = We; Lt--; )
          Ct = B[Lt] || {}, He = Ct.pin, He && Ct.start - Ct._pinPush <= Z && !T && Ct.end > 0 && (Nt = Ct.end - (m._startClamp ? Math.max(0, Ct.start) : Ct.start), (He === h && Ct.start - Ct._pinPush < Z || He === ge) && isNaN(ut) && (pt += Nt * (1 - Ct.progress)), He === c && (at += Nt));
        if (Z += pt, mt += pt, m._startClamp && (m._startClamp += pt), m._endClamp && !ne && (m._endClamp = mt || -1e-3, mt = Math.min(mt, Ke(O, E))), _t = mt - Z || (Z -= 0.01) && 1e-3, Wt && (Bt = D.utils.clamp(0, 1, D.utils.normalize(Z, mt, Ye))), m._pinPush = at, ae && pt && (Nt = {}, Nt[E.a] = "+=" + pt, ge && (Nt[E.p] = "-=" + St()), D.set([ae, _e], Nt)), c && !(Ms && m.end >= Ke(O, E)))
          Nt = De(c), un = E === Et, Li = St(), Ee = parseFloat(vt(E.a)) + at, !yt && mt > 1 && (Ve = (V ? nt.scrollingElement || we : O).style, Ve = {
            style: Ve,
            value: Ve["overflow" + E.a.toUpperCase()]
          }, V && De(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (Ve.style["overflow" + E.a.toUpperCase()] = "scroll")), ls(c, Ot, Nt), Di = xn(c), Ht = si(c, !0), Gn = Q && Oi(O, un ? oe : Et)(), p ? (Tt = [p + E.os2, _t + at + Pt], Tt.t = Ot, Lt = p === bt ? Wn(c, E) + _t + at : 0, Lt && (Tt.push(E.d, Lt + Pt), Ot.style.flexBasis !== "auto" && (Ot.style.flexBasis = Lt + Pt)), gr(Tt), ge && B.forEach(function(pi) {
            pi.pin === ge && pi.vars.pinSpacing !== !1 && (pi._subPinOffset = !0);
          }), Q && St(Ye)) : (Lt = Wn(c, E), Lt && Ot.style.flexBasis !== "auto" && (Ot.style.flexBasis = Lt + Pt)), Q && (Vt = {
            top: Ht.top + (un ? Li - Z : Gn) + Pt,
            left: Ht.left + (un ? Gn : Li - Z) + Pt,
            boxSizing: "border-box",
            position: "fixed"
          }, Vt[$i] = Vt["max" + Tr] = Math.ceil(Ht.width) + Pt, Vt[Gi] = Vt["max" + ro] = Math.ceil(Ht.height) + Pt, Vt[Me] = Vt[Me + Gr] = Vt[Me + qr] = Vt[Me + Kr] = Vt[Me + $r] = "0", Vt[bt] = Nt[bt], Vt[bt + Gr] = Nt[bt + Gr], Vt[bt + qr] = Nt[bt + qr], Vt[bt + Kr] = Nt[bt + Kr], Vt[bt + $r] = Nt[bt + $r], hi = Ju(Je, Vt, x), ne && St(0)), r ? (oo = r._initted, rs(1), r.render(r.duration(), !0, !0), ti = vt(E.a) - Ee + _t + at, ei = Math.abs(_t - ti) > 1, Q && ei && hi.splice(hi.length - 2, 2), r.render(0, !0, !0), oo || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), rs(0)) : ti = _t, Ve && (Ve.value ? Ve.style["overflow" + E.a.toUpperCase()] = Ve.value : Ve.style.removeProperty("overflow-" + E.a));
        else if (h && St() && !T)
          for (Ht = h.parentNode; Ht && Ht !== tt; )
            Ht._pinOffset && (Z -= Ht._pinOffset, mt -= Ht._pinOffset), Ht = Ht.parentNode;
        Cr && Cr.forEach(function(pi) {
          return pi.revert(!1, !0);
        }), m.start = Z, m.end = mt, jt = Jt = ne ? Ye : St(), !T && !ne && (jt < Ye && St(Ye), m.scroll.rec = 0), m.revert(!1, !0), zt = qt(), Ie && (dt = -1, Ie.restart(!0)), Ut = 0, r && N && (r._initted || zi) && r.progress() !== zi && r.progress(zi || 0, !0).render(r.time(), !0, !0), (Wt || Bt !== m.progress || T || _ || r && !r._initted) && (r && !N && (r._initted || Bt || r.vars.immediateRender !== !1) && r.totalProgress(T && Z < -1e-3 && !Bt ? D.utils.normalize(Z, mt, 0) : Bt, !0), m.progress = Wt || (jt - Z) / _t === Bt ? 0 : Bt), c && p && (Ot._pinOffset = Math.round(m.progress * ti)), U && U.invalidate(), isNaN(Pr) || (Pr -= D.getProperty(S, E.p), fn -= D.getProperty(pe, E.p), Sn(S, E, Pr), Sn(ae, E, Pr - (I || 0)), Sn(pe, E, fn), Sn(_e, E, fn - (I || 0))), Wt && !ne && m.update(), f && !ne && !ci && (ci = !0, f(m), ci = !1);
      }
    }, m.getVelocity = function() {
      return (St() - Jt) / (qt() - Ar) * 1e3 || 0;
    }, m.endAnimation = function() {
      Mr(m.callbackAnimation), r && (U ? U.progress(1) : r.paused() ? N || Mr(r, m.direction < 0, 1) : Mr(r, r.reversed()));
    }, m.labelToScroll = function(M) {
      return r && r.labels && (Z || m.refresh() || Z) + r.labels[M] / r.duration() * _t || 0;
    }, m.getTrailing = function(M) {
      var F = B.indexOf(m), A = m.direction > 0 ? B.slice(0, F).reverse() : B.slice(F + 1);
      return (ve(M) ? A.filter(function(I) {
        return I.vars.preventOverlaps === M;
      }) : A).filter(function(I) {
        return m.direction > 0 ? I.end <= Z : I.start >= mt;
      });
    }, m.update = function(M, F, A) {
      if (!(T && !A && !M)) {
        var I = ne === !0 ? Ye : m.scroll(), Mt = M ? 0 : (I - Z) / _t, G = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0, yt = m.progress, Wt, pt, at, et, Be, ut, ge, We;
        if (F && (Jt = jt, jt = T ? St() : I, v && (Ri = _i, _i = r && !N ? r.totalProgress() : G)), g && c && !Ut && !pn && ze && (!G && Z < I + (I - Jt) / (qt() - Ar) * g ? G = 1e-4 : G === 1 && mt > I + (I - Jt) / (qt() - Ar) * g && (G = 0.9999)), G !== yt && m.enabled) {
          if (Wt = m.isActive = !!G && G < 1, pt = !!yt && yt < 1, ut = Wt !== pt, Be = ut || !!G != !!yt, m.direction = G > yt ? 1 : -1, m.progress = G, Be && !Ut && (at = G && !yt ? 0 : G === 1 ? 1 : yt === 1 ? 2 : 3, N && (et = !ut && L[at + 1] !== "none" && L[at + 1] || L[at], We = r && (et === "complete" || et === "reset" || et in r))), C && (ut || We) && (We || d || !r) && (Gt(C) ? C(m) : m.getTrailing(C).forEach(function(Li) {
            return Li.endAnimation();
          })), N || (U && !Ut && !pn ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", G, r._tTime / r._tDur) : (U.vars.totalProgress = G, U.invalidate().restart())) : r && r.totalProgress(G, !!(Ut && (zt || M)))), c) {
            if (M && p && (Ot.style[p + E.os2] = br), !Q)
              Ne(Lr(Ee + ti * G));
            else if (Be) {
              if (ge = !M && G > yt && mt + 1 > I && I + 1 >= Ke(O, E), x)
                if (!M && (Wt || ge)) {
                  var Lt = si(c, !0), Nt = I - Z;
                  Yo(c, tt, Lt.top + (E === Et ? Nt : 0) + Pt, Lt.left + (E === Et ? 0 : Nt) + Pt);
                } else
                  Yo(c, Ot);
              gr(Wt || ge ? hi : Di), ei && G < 1 && Wt || Ne(Ee + (G === 1 && !ge ? ti : 0));
            }
          }
          v && !Zt.tween && !Ut && !pn && Ie.restart(!0), a && (ut || b && G && (G < 1 || !ns)) && sn(a.targets).forEach(function(Li) {
            return Li.classList[Wt || b ? "add" : "remove"](a.className);
          }), o && !N && !M && o(m), Be && !Ut ? (N && (We && (et === "complete" ? r.pause().totalProgress(1) : et === "reset" ? r.restart(!0).pause() : et === "restart" ? r.restart(!0) : r[et]()), o && o(m)), (ut || !ns) && (u && ut && os(m, u), $[at] && os(m, $[at]), b && (G === 1 ? m.kill(!1, 1) : $[at] = 0), ut || (at = G === 1 ? 1 : 3, $[at] && os(m, $[at]))), P && !Wt && Math.abs(m.getVelocity()) > (Nr(P) ? P : 2500) && (Mr(m.callbackAnimation), U ? U.progress(1) : Mr(r, et === "reverse" ? 1 : !G, 1))) : N && o && !Ut && o(m);
        }
        if (tr) {
          var Ht = T ? I / T.duration() * (T._caScrollDist || 0) : I;
          ln(Ht + (S._isFlipped ? 1 : 0)), tr(Ht);
        }
        ir && ir(-I / T.duration() * (T._caScrollDist || 0));
      }
    }, m.enable = function(M, F) {
      m.enabled || (m.enabled = !0, Rt(O, "resize", Fr), V || Rt(O, "scroll", sr), ot && Rt(s, "refreshInit", ot), M !== !1 && (m.progress = Bt = 0, jt = Jt = dt = St()), F !== !1 && m.refresh());
    }, m.getTween = function(M) {
      return M && Zt ? Zt.tween : U;
    }, m.setPositions = function(M, F, A, I) {
      if (T) {
        var Mt = T.scrollTrigger, G = T.duration(), yt = Mt.end - Mt.start;
        M = Mt.start + yt * M / G, F = Mt.start + yt * F / G;
      }
      m.refresh(!1, !1, {
        start: Mo(M, A && !!m._startClamp),
        end: Mo(F, A && !!m._endClamp)
      }, I), m.update();
    }, m.adjustPinSpacing = function(M) {
      if (Tt && M) {
        var F = Tt.indexOf(E.d) + 1;
        Tt[F] = parseFloat(Tt[F]) + M + Pt, Tt[1] = parseFloat(Tt[1]) + M + Pt, gr(Tt);
      }
    }, m.disable = function(M, F) {
      if (M !== !1 && m.revert(!0, !0), m.enabled && (m.enabled = m.isActive = !1, F || U && U.pause(), Ye = 0, Xt && (Xt.uncache = 1), ot && Dt(s, "refreshInit", ot), Ie && (Ie.pause(), Zt.tween && Zt.tween.kill() && (Zt.tween = 0)), !V)) {
        for (var A = B.length; A--; )
          if (B[A].scroller === O && B[A] !== m)
            return;
        Dt(O, "resize", Fr), V || Dt(O, "scroll", sr);
      }
    }, m.kill = function(M, F) {
      m.disable(M, F), U && !F && U.kill(), l && delete Ds[l];
      var A = B.indexOf(m);
      A >= 0 && B.splice(A, 1), A === re && Mn > 0 && re--, A = 0, B.forEach(function(I) {
        return I.scroller === m.scroller && (A = 1);
      }), A || ne || (m.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({
        kill: !1
      }), F || r.kill()), ae && [ae, _e, S, pe].forEach(function(I) {
        return I.parentNode && I.parentNode.removeChild(I);
      }), Qr === m && (Qr = 0), c && (Xt && (Xt.uncache = 1), A = 0, B.forEach(function(I) {
        return I.pin === c && A++;
      }), A || (Xt.spacer = 0)), e.onKill && e.onKill(m);
    }, B.push(m), m.enable(!1, !1), ii && ii(m), r && r.add && !_t) {
      var J = m.update;
      m.update = function() {
        m.update = J, H.cache++, Z || mt || m.refresh();
      }, D.delayedCall(0.01, m.update), _t = 0.01, Z = mt = 0;
    } else
      m.refresh();
    c && Qu();
  }, s.register = function(e) {
    return or || (D = e || rl(), il() && window.document && s.enable(), or = zr), or;
  }, s.defaults = function(e) {
    if (e)
      for (var r in e)
        yn[r] = e[r];
    return yn;
  }, s.disable = function(e, r) {
    zr = 0, B.forEach(function(o) {
      return o[r ? "kill" : "disable"](e);
    }), Dt(W, "wheel", sr), Dt(nt, "scroll", sr), clearInterval(_n), Dt(nt, "touchcancel", qe), Dt(tt, "touchstart", qe), mn(Dt, nt, "pointerdown,touchstart,mousedown", Do), mn(Dt, nt, "pointerup,touchend,mouseup", Ro), Xn.kill(), gn(Dt);
    for (var n = 0; n < H.length; n += 3)
      vn(Dt, H[n], H[n + 1]), vn(Dt, H[n], H[n + 2]);
  }, s.enable = function() {
    if (W = window, nt = document, we = nt.documentElement, tt = nt.body, D && (sn = D.utils.toArray, Vr = D.utils.clamp, Os = D.core.context || qe, rs = D.core.suppressOverwrites || qe, Js = W.history.scrollRestoration || "auto", Rs = W.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt)) {
      zr = 1, pr = document.createElement("div"), pr.style.height = "100vh", pr.style.position = "absolute", dl(), Hu(), xt.register(D), s.isTouch = xt.isTouch, mi = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Es = xt.isTouch === 1, Rt(W, "wheel", sr), js = [W, nt, we, tt], D.matchMedia ? (s.matchMedia = function(u) {
        var f = D.matchMedia(), d;
        for (d in u)
          f.add(d, u[d]);
        return f;
      }, D.addEventListener("matchMediaInit", function() {
        cl(), so();
      }), D.addEventListener("matchMediaRevert", function() {
        return fl();
      }), D.addEventListener("matchMedia", function() {
        Wi(0, 1), ji("matchMedia");
      }), D.matchMedia().add("(orientation: portrait)", function() {
        return as(), as;
      })) : console.warn("Requires GSAP 3.11.0 or later"), as(), Rt(nt, "scroll", sr);
      var e = tt.hasAttribute("style"), r = tt.style, n = r.borderTopStyle, o = D.core.Animation.prototype, a, l;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", a = si(tt), Et.m = Math.round(a.top + Et.sc()) || 0, oe.m = Math.round(a.left + oe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (tt.setAttribute("style", ""), tt.removeAttribute("style")), _n = setInterval(Lo, 250), D.delayedCall(0.5, function() {
        return pn = 0;
      }), Rt(nt, "touchcancel", qe), Rt(tt, "touchstart", qe), mn(Rt, nt, "pointerdown,touchstart,mousedown", Do), mn(Rt, nt, "pointerup,touchend,mouseup", Ro), Ps = D.utils.checkPrefix("transform"), Dn.push(Ps), or = qt(), Xn = D.delayedCall(0.2, Wi).pause(), ar = [nt, "visibilitychange", function() {
        var u = W.innerWidth, f = W.innerHeight;
        nt.hidden ? (Po = u, Eo = f) : (Po !== u || Eo !== f) && Fr();
      }, nt, "DOMContentLoaded", Wi, W, "load", Wi, W, "resize", Fr], gn(Rt), B.forEach(function(u) {
        return u.enable(0, 1);
      }), l = 0; l < H.length; l += 3)
        vn(Dt, H[l], H[l + 1]), vn(Dt, H[l], H[l + 2]);
    }
  }, s.config = function(e) {
    "limitCallbacks" in e && (ns = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(_n) || (_n = r) && setInterval(Lo, r), "ignoreMobileResize" in e && (Es = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (gn(Dt) || gn(Rt, e.autoRefreshEvents || "none"), Ja = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(e, r) {
    var n = le(e), o = H.indexOf(n), a = Qi(n);
    ~o && H.splice(o, a ? 6 : 2), r && (a ? Qe.unshift(W, r, tt, r, we, r) : Qe.unshift(n, r));
  }, s.clearMatchMedia = function(e) {
    B.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(e, r, n) {
    var o = (ve(e) ? le(e) : e).getBoundingClientRect(), a = o[n ? $i : Gi] * r || 0;
    return n ? o.right - a > 0 && o.left + a < W.innerWidth : o.bottom - a > 0 && o.top + a < W.innerHeight;
  }, s.positionInViewport = function(e, r, n) {
    ve(e) && (e = le(e));
    var o = e.getBoundingClientRect(), a = o[n ? $i : Gi], l = r == null ? a / 2 : r in Hn ? Hn[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (o.left + l) / W.innerWidth : (o.top + l) / W.innerHeight;
  }, s.killAll = function(e) {
    if (B.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = Zi.killAll || [];
      Zi = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
X.version = "3.14.2";
X.saveStyles = function(s) {
  return s ? sn(s).forEach(function(t) {
    if (t && t.style) {
      var i = me.indexOf(t);
      i >= 0 && me.splice(i, 5), me.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Os());
    }
  }) : me;
};
X.revert = function(s, t) {
  return so(!s, t);
};
X.create = function(s, t) {
  return new X(s, t);
};
X.refresh = function(s) {
  return s ? Fr(!0) : (or || X.register()) && Wi(!0);
};
X.update = function(s) {
  return ++H.cache && ai(s === !0 ? 2 : 0);
};
X.clearScrollMemory = hl;
X.maxScroll = function(s, t) {
  return Ke(s, t ? oe : Et);
};
X.getScrollFunc = function(s, t) {
  return Oi(le(s), t ? oe : Et);
};
X.getById = function(s) {
  return Ds[s];
};
X.getAll = function() {
  return B.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
X.isScrolling = function() {
  return !!ze;
};
X.snapDirectional = no;
X.addEventListener = function(s, t) {
  var i = Zi[s] || (Zi[s] = []);
  ~i.indexOf(t) || i.push(t);
};
X.removeEventListener = function(s, t) {
  var i = Zi[s], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
X.batch = function(s, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, f) {
    var d = [], h = [], c = D.delayedCall(r, function() {
      f(d, h), d = [], h = [];
    }).pause();
    return function(p) {
      d.length || c.restart(!0), d.push(p.trigger), h.push(p), n <= d.length && c.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Gt(n) && (n = n(), Rt(X, "refresh", function() {
    return n = t.batchMax();
  })), sn(s).forEach(function(l) {
    var u = {};
    for (a in e)
      u[a] = e[a];
    u.trigger = l, i.push(X.create(u));
  }), i;
};
var Xo = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, us = function s(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "") : "none", t === we && s(tt, i);
}, Tn = {
  auto: 1,
  scroll: 1
}, ef = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, o = n._gsap || D.core.getCache(n), a = qt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Tn[(l = De(n)).overflowY] || Tn[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== e && !Qi(n) && (Tn[(l = De(n)).overflowY] || Tn[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, pl = function(t, i, e, r) {
  return xt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && ef,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && Rt(nt, xt.eventTypes[0], Ho, !1, !0);
    },
    onDisable: function() {
      return Dt(nt, xt.eventTypes[0], Ho, !0);
    }
  });
}, rf = /(input|label|select|textarea)/i, Wo, Ho = function(t) {
  var i = rf.test(t.target.tagName);
  (i || Wo) && (t._gsapAllow = !0, Wo = i);
}, nf = function(t) {
  Bi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, l, u = le(t.target) || we, f = D.core.globals().ScrollSmoother, d = f && f.get(), h = mi && (t.content && le(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), c = Oi(u, Et), p = Oi(u, oe), _ = 1, g = (xt.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth, y = 0, w = Gt(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, b, v, x = pl(u, t.type, !0, n), k = function() {
    return v = !1;
  }, T = qe, P = qe, C = function() {
    l = Ke(u, Et), P = Vr(mi ? 1 : 0, l), e && (T = Vr(0, Ke(u, oe))), b = Ki;
  }, E = function() {
    h._gsap.y = Lr(parseFloat(h._gsap.y) + c.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, N = function() {
    if (v) {
      requestAnimationFrame(k);
      var j = Lr(a.deltaY / 2), st = P(c.v - j);
      if (h && st !== c.v + c.offset) {
        c.offset = st - c.v;
        var m = Lr((parseFloat(h && h._gsap.y) || 0) - c.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", h._gsap.y = m + "px", c.cacheID = H.cache, ai();
      }
      return !0;
    }
    c.offset && E(), v = !0;
  }, O, q, V, Q, $ = function() {
    C(), O.isActive() && O.vars.scrollY > l && (c() > l ? O.progress(1) && c(l) : O.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(L) {
    return mi && L.type === "touchmove" && N() || _ > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var L = _;
    _ = Lr((W.visualViewport && W.visualViewport.scale || 1) / g), O.pause(), L !== _ && us(u, _ > 1.01 ? !0 : e ? !1 : "x"), q = p(), V = c(), C(), b = Ki;
  }, t.onRelease = t.onGestureStart = function(L, j) {
    if (c.offset && E(), !j)
      Q.restart(!0);
    else {
      H.cache++;
      var st = w(), m, ot;
      e && (m = p(), ot = m + st * 0.05 * -L.velocityX / 0.227, st *= Xo(p, m, ot, Ke(u, oe)), O.vars.scrollX = T(ot)), m = c(), ot = m + st * 0.05 * -L.velocityY / 0.227, st *= Xo(c, m, ot, Ke(u, Et)), O.vars.scrollY = P(ot), O.invalidate().duration(st).play(0.01), (mi && O.vars.scrollY >= l || m >= l - 1) && D.to({}, {
        onUpdate: $,
        duration: st
      });
    }
    o && o(L);
  }, t.onWheel = function() {
    O._ts && O.pause(), qt() - y > 1e3 && (b = 0, y = qt());
  }, t.onChange = function(L, j, st, m, ot) {
    if (Ki !== b && C(), j && e && p(T(m[2] === j ? q + (L.startX - L.x) : p() + j - m[1])), st) {
      c.offset && E();
      var Qt = ot[2] === st, Le = Qt ? V + L.startY - L.y : c() + st - ot[1], dt = P(Le);
      Qt && Le !== dt && (V += dt - Le), c(dt);
    }
    (st || j) && ai();
  }, t.onEnable = function() {
    us(u, e ? !1 : "x"), X.addEventListener("refresh", $), Rt(W, "resize", $), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), x.enable();
  }, t.onDisable = function() {
    us(u, !0), Dt(W, "resize", $), X.removeEventListener("refresh", $), x.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new xt(t), a.iOS = mi, mi && !c() && c(1), mi && D.ticker.add(qe), Q = a._dc, O = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _l(c, c(), function() {
        return O.pause();
      })
    },
    onUpdate: ai,
    onComplete: Q.vars.onComplete
  }), a;
};
X.sort = function(s) {
  if (Gt(s))
    return B.sort(s);
  var t = W.pageYOffset || 0;
  return X.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + W.innerHeight;
  }), B.sort(s || function(i, e) {
    return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
  });
};
X.observe = function(s) {
  return new xt(s);
};
X.normalizeScroll = function(s) {
  if (typeof s > "u")
    return ie;
  if (s === !0 && ie)
    return ie.enable();
  if (s === !1) {
    ie && ie.kill(), ie = s;
    return;
  }
  var t = s instanceof xt ? s : nf(s);
  return ie && ie.target === t.target && ie.kill(), Qi(t.target) && (ie = t), t;
};
X.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Cs,
  _inputObserver: pl,
  _scrollers: H,
  _proxies: Qe,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      ze || ji("scrollStart"), ze = qt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Ut;
    }
  }
};
rl() && D.registerPlugin(X);
var Vo = "1.3.19";
function gl(s, t, i) {
  return Math.max(s, Math.min(t, i));
}
function sf(s, t, i) {
  return (1 - i) * s + i * t;
}
function of(s, t, i, e) {
  return sf(s, t, 1 - Math.exp(-i * e));
}
function af(s, t) {
  return (s % t + t) % t;
}
var lf = class {
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
    var i;
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const e = gl(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = of(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function uf(s, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, s.apply(this, e);
    }, t);
  };
}
var ff = class {
  constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
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
    this.wrapper = s, this.content = t, i && (this.debouncedResize = uf(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, ml = class {
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
}, cf = 100 / 6, gi = { passive: !1 };
function Uo(s, t) {
  return s === 1 ? cf : s === 2 ? t : 1;
}
var hf = class {
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
    R(this, "emitter", new ml());
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    R(this, "onTouchStart", (s) => {
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
    R(this, "onTouchMove", (s) => {
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
    R(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    R(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: i, deltaMode: e } = s;
      const r = Uo(e, this.window.width), n = Uo(e, this.window.height);
      t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: s });
    });
    R(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, gi), this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      gi
    ), this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      gi
    ), this.element.addEventListener("touchend", this.onTouchEnd, gi);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, gi), this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      gi
    ), this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      gi
    ), this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      gi
    );
  }
}, qo = (s) => Math.min(1, 1.001 - 2 ** (-10 * s)), df = class {
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
    easing: l,
    lerp: u = 0.1,
    infinite: f = !1,
    orientation: d = "vertical",
    // vertical, horizontal
    gestureOrientation: h = d === "horizontal" ? "both" : "vertical",
    // vertical, horizontal, both
    touchMultiplier: c = 1,
    wheelMultiplier: p = 1,
    autoResize: _ = !0,
    prevent: g,
    virtualScroll: y,
    overscroll: w = !0,
    autoRaf: b = !1,
    anchors: v = !1,
    autoToggle: x = !1,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll: k = !1,
    __experimental__naiveDimensions: T = !1,
    naiveDimensions: P = T,
    stopInertiaOnNavigate: C = !1
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
    R(this, "animate", new lf());
    R(this, "emitter", new ml());
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
    R(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    R(this, "onVirtualScroll", (s) => {
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
      const l = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || l)
        return;
      let u = e.composedPath();
      u = u.slice(0, u.indexOf(this.rootElement));
      const f = this.options.prevent, d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (u.find(
        (y) => {
          var w, b, v, x, k;
          return y instanceof HTMLElement && (typeof f == "function" && (f == null ? void 0 : f(y)) || ((w = y.hasAttribute) == null ? void 0 : w.call(y, "data-lenis-prevent")) || d === "vertical" && ((b = y.hasAttribute) == null ? void 0 : b.call(y, "data-lenis-prevent-vertical")) || d === "horizontal" && ((v = y.hasAttribute) == null ? void 0 : v.call(y, "data-lenis-prevent-horizontal")) || r && ((x = y.hasAttribute) == null ? void 0 : x.call(y, "data-lenis-prevent-touch")) || n && ((k = y.hasAttribute) == null ? void 0 : k.call(y, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(y, {
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
      let c = i;
      this.options.gestureOrientation === "both" ? c = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (c = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const p = r && this.options.syncTouch, g = r && e.type === "touchend";
      g && (c = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + c, {
        programmatic: !1,
        ...p ? {
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
    window.lenisVersion = Vo, window.lenis || (window.lenis = {}), window.lenis.version = Vo, d === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = qo : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
      syncTouch: r,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: l,
      lerp: u,
      infinite: f,
      gestureOrientation: h,
      orientation: d,
      touchMultiplier: c,
      wheelMultiplier: p,
      autoResize: _,
      prevent: g,
      virtualScroll: y,
      overscroll: w,
      autoRaf: b,
      anchors: v,
      autoToggle: x,
      allowNestedScroll: k,
      naiveDimensions: P,
      stopInertiaOnNavigate: C
    }, this.dimensions = new ff(s, t, { autoResize: _ }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new hf(i, {
      touchMultiplier: c,
      wheelMultiplier: p
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
    onStart: l,
    onComplete: u,
    force: f = !1,
    // scroll even if stopped
    userData: d
  } = {}) {
    if ((this.isStopped || this.isLocked) && !f) return;
    let h = s, c = t;
    if (typeof h == "string" && ["top", "left", "start", "#"].includes(h))
      h = 0;
    else if (typeof h == "string" && ["bottom", "right", "end"].includes(h))
      h = this.limit;
    else {
      let p = null;
      if (typeof h == "string" ? (p = document.querySelector(h), p || (h === "#top" ? h = 0 : console.warn("Lenis: Target not found", h))) : h instanceof HTMLElement && (h != null && h.nodeType) && (p = h), p) {
        if (this.options.wrapper !== window) {
          const g = this.rootElement.getBoundingClientRect();
          c -= this.isHorizontal ? g.left : g.top;
        }
        const _ = p.getBoundingClientRect();
        h = (this.isHorizontal ? _.left : _.top) + this.animatedScroll;
      }
    }
    if (typeof h == "number") {
      if (h += c, h = Math.round(h), this.options.infinite) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const p = h - this.animatedScroll;
          p > this.limit / 2 ? h -= this.limit : p < -this.limit / 2 && (h += this.limit);
        }
      } else
        h = gl(0, h, this.limit);
      if (h === this.targetScroll) {
        l == null || l(this), u == null || u(this);
        return;
      }
      if (this.userData = d ?? {}, i) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = qo : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", l == null || l(this);
        },
        onUpdate: (p, _) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = p - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = p, this.setScroll(this.scroll), r && (this.targetScroll = p), _ || this.emit(), _ && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
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
    let n, o, a, l, u, f, d, h, c, p;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const T = window.getComputedStyle(s);
      if (r.computedStyle = T, n = ["auto", "overlay", "scroll"].includes(
        T.overflowX
      ), o = ["auto", "overlay", "scroll"].includes(
        T.overflowY
      ), u = ["auto"].includes(
        T.overscrollBehaviorX
      ), f = ["auto"].includes(
        T.overscrollBehaviorY
      ), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return !1;
      d = s.scrollWidth, h = s.scrollHeight, c = s.clientWidth, p = s.clientHeight, a = d > c, l = h > p, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = d, r.scrollHeight = h, r.clientWidth = c, r.clientHeight = p, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = f;
    } else
      a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, d = r.scrollWidth, h = r.scrollHeight, c = r.clientWidth, p = r.clientHeight, u = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
    if (!(n && a || o && l))
      return !1;
    const _ = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, y, w, b, v, x;
    if (_ === "horizontal")
      g = Math.round(s.scrollLeft), y = d - c, w = t, b = n, v = a, x = u;
    else if (_ === "vertical")
      g = Math.round(s.scrollTop), y = h - p, w = i, b = o, v = l, x = f;
    else
      return !1;
    return !x && (g >= y || g <= 0) ? !0 : (w > 0 ? g < y : g > 0) && b && v;
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
    return this.options.infinite ? af(this.animatedScroll, this.limit) : this.animatedScroll;
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
};
function vl(s) {
  if (!s) return "";
  const t = document.createElement("div");
  return t.textContent = s, t.innerHTML;
}
Ft.registerPlugin(X);
function _f(s) {
  const t = s.textContent.trim().split(/\s+/);
  return s.innerHTML = t.map(
    (i) => `<span class="ova-word-mask"><span class="ova-word">${vl(i)}</span></span>`
  ).join(" "), s.querySelectorAll(".ova-word");
}
function pf(s) {
  const t = s.getAttribute("data-ova-slides");
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return [];
    }
  const i = s.querySelectorAll("[data-ova-slide]");
  return Array.from(i).map((e) => {
    var r;
    return {
      image: e.getAttribute("data-image") ?? "",
      title: e.getAttribute("data-title") ?? ((r = e.textContent) == null ? void 0 : r.trim()) ?? ""
    };
  });
}
function gf(s) {
  s._ovaScrollSliderCleanup && s._ovaScrollSliderCleanup();
  const t = s.querySelector("[data-ova-slider]"), i = s.querySelector("[data-ova-images]"), e = s.querySelector("[data-ova-title]"), r = s.querySelector("[data-ova-indices]"), n = s.querySelector("[data-ova-progress]"), o = pf(s);
  if (!t || !i || !e || !r || !n || !o.length)
    return;
  const a = s.getAttribute("data-ova-lenis") === "true", l = Number(s.getAttribute("data-ova-scrub")) || 1;
  let u = null, f = null, d = -1, h = null;
  const c = window.innerHeight * o.length;
  function p() {
    r.innerHTML = "", o.forEach((w, b) => {
      const v = (b + 1).toString().padStart(2, "0"), x = document.createElement("p");
      x.dataset.index = String(b), x.innerHTML = `<span class="ova-marker"></span><span class="ova-index">${vl(v)}</span>`, r.appendChild(x), b === 0 ? (Ft.set(x.querySelector(".ova-index"), { opacity: 1 }), Ft.set(x.querySelector(".ova-marker"), { scaleX: 1 })) : (Ft.set(x.querySelector(".ova-index"), { opacity: 0.35 }), Ft.set(x.querySelector(".ova-marker"), { scaleX: 0 }));
    });
  }
  function _(w) {
    r.querySelectorAll("p").forEach((v, x) => {
      const k = v.querySelector(".ova-marker"), T = v.querySelector(".ova-index"), P = x === w;
      Ft.to(T, {
        opacity: P ? 1 : 0.35,
        duration: 0.3,
        ease: "power2.out"
      }), Ft.to(k, {
        scaleX: P ? 1 : 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
  function g(w) {
    var k;
    const b = ((k = o[w]) == null ? void 0 : k.title) ?? "", v = e.querySelector("h1") ?? document.createElement("h1");
    v.textContent = b, e.contains(v) || e.appendChild(v);
    const x = _f(v);
    Ft.set(x, { yPercent: 100, opacity: 0 }), Ft.to(x, {
      yPercent: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out"
    });
  }
  function y(w) {
    const b = o[w];
    if (!(b != null && b.image)) return;
    const v = document.createElement("img");
    v.src = b.image, v.alt = b.title || `Slide ${w + 1}`, Ft.set(v, { opacity: 0, scale: 1.1 }), i.appendChild(v), Ft.to(v, { opacity: 1, duration: 0.5, ease: "power2.out" }), Ft.to(v, { scale: 1, duration: 1, ease: "power2.out" });
    const x = i.querySelectorAll("img");
    if (x.length > 3)
      for (let k = 0; k < x.length - 3; k++)
        x[k].remove();
    g(w), _(w);
  }
  p(), h = X.create({
    trigger: t,
    start: "top top",
    end: `+=${c}px`,
    scrub: l,
    pin: !0,
    pinSpacing: !0,
    onUpdate: (w) => {
      Ft.set(n, { scaleY: w.progress });
      const b = Math.floor(w.progress * o.length), v = Math.min(b, o.length - 1);
      d !== v && v >= 0 && (d = v, y(d));
    }
  }), a && (u = new df(), u.on("scroll", X.update), f = (w) => u.raf(w * 1e3), Ft.ticker.add(f), Ft.ticker.lagSmoothing(0)), d = 0, y(0), s._ovaScrollSliderCleanup = () => {
    h == null || h.kill(), f && Ft.ticker.remove(f), u == null || u.destroy();
  };
}
if (typeof window < "u") {
  const s = () => {
    document.querySelectorAll('[data-component="ova-scroll-slider"]').forEach((t) => gf(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
export {
  gf as initOvaScrollSlider
};

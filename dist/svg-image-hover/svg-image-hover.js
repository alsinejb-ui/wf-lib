function mt(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Ni(a, t) {
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
var nt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ht = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ti, X, E, ut = 1e8, D = 1 / ut, Ue = Math.PI * 2, Ir = Ue / 4, Lr = 0, Bi = Math.sqrt, Nr = Math.cos, Br = Math.sin, Y = function(t) {
  return typeof t == "string";
}, L = function(t) {
  return typeof t == "function";
}, yt = function(t) {
  return typeof t == "number";
}, ei = function(t) {
  return typeof t > "u";
}, dt = function(t) {
  return typeof t == "object";
}, $ = function(t) {
  return t !== !1;
}, ii = function() {
  return typeof window < "u";
}, me = function(t) {
  return L(t) || Y(t);
}, Ui = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, H = Array.isArray, Ur = /random\([^)]+\)/g, Vr = /,\s*/g, vi = /(?:-?\.?\d|\.)+/gi, Vi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Wt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Me = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Wi = /[+-]=-?[.\d]+/, Wr = /[^,'"\[\]\s]+/gi, Yr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, z, lt, Ve, ri, st = {}, xe = {}, Yi, qi = function(t) {
  return (xe = Kt(t, st)) && J;
}, ni = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, ae = function(t, e) {
  return !e && console.warn(t);
}, Xi = function(t, e) {
  return t && (st[t] = e) && xe && (xe[t] = e) || st;
}, ue = function() {
  return 0;
}, qr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ge = {
  suppressEvents: !0,
  kill: !1
}, Xr = {
  suppressEvents: !0
}, si = {}, bt = [], We = {}, Gi, tt = {}, Ae = {}, xi = 30, ye = [], oi = "", ai = function(t) {
  var e = t[0], i, r;
  if (dt(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ye.length; r-- && !ye[r].targetTest(e); )
      ;
    i = ye[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new mr(t[r], i))) || t.splice(r, 1);
  return t;
}, It = function(t) {
  return t._gsap || ai(ft(t))[0]._gsap;
}, Hi = function(t, e, i) {
  return (i = t[e]) && L(i) ? t[e]() : ei(i) && t.getAttribute && t.getAttribute(e) || i;
}, Q = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, N = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, F = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, qt = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Gr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Te = function() {
  var t = bt.length, e = bt.slice(0), i, r;
  for (We = {}, bt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, ui = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ki = function(t, e, i, r) {
  bt.length && !X && Te(), t.render(e, i, !!(X && e < 0 && ui(t))), bt.length && !X && Te();
}, $i = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Wr).length < 2 ? e : Y(t) ? t.trim() : t;
}, Qi = function(t) {
  return t;
}, ot = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Hr = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, Kt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Ti = function a(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, we = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || z, i = t.keyframes ? Hr(H(t.keyframes)) : ot;
  if ($(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Kr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Zi = function(t, e, i, r, n) {
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, Pe = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Ot = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Lt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, $r = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ye = function(t, e, i, r) {
  return t._startAt && (X ? t._startAt.revert(ge) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Qr = function a(t) {
  return !t || t._ts && a(t.parent);
}, wi = function(t) {
  return t._repeat ? $t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, $t = function(t, e) {
  var i = Math.floor(t = F(t / e));
  return t && i === t ? i - 1 : i;
}, be = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ce = function(t) {
  return t._end = F(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
}, De = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = F(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ce(t), i._dirty || Lt(i, t)), t;
}, ji = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = be(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -D;
  }
}, _t = function(t, e, i, r) {
  return e.parent && Ot(e), e._start = F((yt(i) ? i : i || t !== z ? at(t, i, e) : t._time) + e._delay), e._end = F(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Zi(t, e, "_first", "_last", t._sort ? "_start" : 0), qe(e) || (t._recent = e), r || ji(t, e), t._ts < 0 && De(t, t._tTime), t;
}, Ji = function(t, e) {
  return (st.ScrollTrigger || ni("scrollTrigger", e)) && st.ScrollTrigger.create(e, t);
}, tr = function(t, e, i, r, n) {
  if (hi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !X && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Gi !== et.frame)
    return bt.push(t), t._lazy = [n, r], 1;
}, Zr = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, qe = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, jr = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Zr(t) && !(!t._initted && qe(t)) || (t._ts < 0 || t._dp._ts < 0) && !qe(t)) ? 0 : 1, o = t._rDelay, u = 0, f, h, _;
  if (o && t._repeat && (u = de(0, t._tDur, e), h = $t(u, o), t._yoyo && h & 1 && (s = 1 - s), h !== $t(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || X || r || t._zTime === D || !e && t._zTime) {
    if (!t._initted && tr(t, e, r, i, u))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Ye(t, e, i, !0), t._onUpdate && !i && it(t, "onUpdate"), u && t._repeat && !i && t.parent && it(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Ot(t, 1), !i && !X && (it(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Jr = function(t, e, i) {
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
}, Qt = function(t, e, i, r) {
  var n = t._repeat, s = F(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : F(s * (n + 1) + t._rDelay * n) : s, o > 0 && !r && De(t, t._tTime = t._tDur * o), t.parent && Ce(t), i || Lt(t.parent, t), t;
}, bi = function(t) {
  return t instanceof K ? Lt(t) : Qt(t, t._dur);
}, tn = {
  _start: 0,
  endTime: ue,
  totalDuration: ue
}, at = function a(t, e, i) {
  var r = t.labels, n = t._recent || tn, s = t.duration() >= ut ? n.endTime(!1) : t._dur, o, u, f;
  return Y(e) && (isNaN(e) || e in r) ? (u = e.charAt(0), f = e.substr(-1) === "%", o = e.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s), r[e]) : (u = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), f && i && (u = u / 100 * (H(i) ? i[0] : i).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), i) + u : s + u)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, u;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (o = s, u = i; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = $(u.vars.inherit) && u.parent;
    s.immediateRender = $(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new U(e[0], s, e[n + 1]);
}, Ct = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, de = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, G = function(t, e) {
  return !Y(t) || !(e = Yr.exec(t)) ? "" : e[1];
}, en = function(t, e, i) {
  return Ct(i, function(r) {
    return de(t, e, r);
  });
}, Xe = [].slice, er = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== lt;
}, rn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return Y(r) && !e || er(r, 1) ? (n = i).push.apply(n, ft(r)) : i.push(r);
  }) || i;
}, ft = function(t, e, i) {
  return E && !e && E.selector ? E.selector(t) : Y(t) && !i && (Ve || !Zt()) ? Xe.call((e || ri).querySelectorAll(t), 0) : H(t) ? rn(t, i) : er(t) ? Xe.call(t, 0) : t ? [t] : [];
}, Ge = function(t) {
  return t = ft(t)[0] || ae("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ft(e, i.querySelectorAll ? i : i === t ? ae("Invalid scope") || ri.createElement("div") : t);
  };
}, ir = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, rr = function(t) {
  if (L(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = Nt(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, u = isNaN(r) || o, f = e.axis, h = r, _ = r;
  return Y(r) ? h = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && u && (h = r[0], _ = r[1]), function(c, d, m) {
    var l = (m || e).length, p = s[l], y, v, w, x, g, b, S, O, T;
    if (!p) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, ut])[1], !T) {
        for (S = -ut; S < (S = m[T++].getBoundingClientRect().left) && T < l; )
          ;
        T < l && T--;
      }
      for (p = s[l] = [], y = u ? Math.min(T, l) * h - 0.5 : r % T, v = T === ut ? 0 : u ? l * _ / T - 0.5 : r / T | 0, S = 0, O = ut, b = 0; b < l; b++)
        w = b % T - y, x = v - (b / T | 0), p[b] = g = f ? Math.abs(f === "y" ? x : w) : Bi(w * w + x * x), g > S && (S = g), g < O && (O = g);
      r === "random" && ir(p), p.max = S - O, p.min = O, p.v = l = (parseFloat(e.amount) || parseFloat(e.each) * (T > l ? l - 1 : f ? f === "y" ? l / T : T : Math.max(T, l / T)) || 0) * (r === "edges" ? -1 : 1), p.b = l < 0 ? n - l : n, p.u = G(e.amount || e.each) || 0, i = i && l < 0 ? cr(i) : i;
    }
    return l = (p[c] - p.min) / p.max || 0, F(p.b + (i ? i(l) : l) * p.v) + p.u;
  };
}, He = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = F(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : G(i));
  };
}, nr = function(t, e) {
  var i = H(t), r, n;
  return !i && dt(t) && (r = i = t.radius || ut, t.values ? (t = ft(t.values), (n = !yt(t[0])) && (r *= r)) : t = He(t.increment)), Ct(e, i ? L(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = ut, h = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - o, d = t[_].y - u, c = c * c + d * d) : c = Math.abs(t[_] - o), c < f && (f = c, h = _);
    return h = !r || f <= r ? t[h] : s, n || h === s || yt(s) ? h : h + G(s);
  } : He(t));
}, sr = function(t, e, i, r) {
  return Ct(H(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return H(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, nn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, sn = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || G(i));
  };
}, on = function(t, e, i) {
  return ar(t, e, 0, 1, i);
}, or = function(t, e, i) {
  return Ct(i, function(r) {
    return t[~~e(r)];
  });
}, an = function a(t, e, i) {
  var r = e - t;
  return H(t) ? or(t, a(0, t.length), e) : Ct(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, un = function a(t, e, i) {
  var r = e - t, n = r * 2;
  return H(t) ? or(t, a(0, t.length - 1), e) : Ct(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, fe = function(t) {
  return t.replace(Ur, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Vr);
    return sr(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ar = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Ct(n, function(u) {
    return i + ((u - t) / s * o || 0);
  });
}, fn = function a(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = Y(t), o = {}, u, f, h, _, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (H(t) && !H(e)) {
      for (h = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
        h.push(a(t[f - 1], t[f]));
      _--, n = function(m) {
        m *= _;
        var l = Math.min(c, ~~m);
        return h[l](m - l);
      }, i = e;
    } else r || (t = Kt(H(t) ? [] : {}, t));
    if (!h) {
      for (u in e)
        fi.call(o, t, u, "get", e[u]);
      n = function(m) {
        return ci(m, o) || (s ? t.p : t);
      };
    }
  }
  return Ct(i, n);
}, Si = function(t, e, i) {
  var r = t.labels, n = ut, s, o, u;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (u = s, n = o);
  return u;
}, it = function(t, e, i) {
  var r = t.vars, n = r[e], s = E, o = t._ctx, u, f, h;
  if (n)
    return u = r[e + "Params"], f = r.callbackScope || t, i && bt.length && Te(), o && (E = o), h = u ? n.apply(f, u) : n.call(f), E = s, h;
}, ie = function(t) {
  return Ot(t), t.scrollTrigger && t.scrollTrigger.kill(!!X), t.progress() < 1 && it(t, "onInterrupt"), t;
}, Yt, ur = [], fr = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ii() || t.headless) {
      var e = t.name, i = L(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: ue,
        render: ci,
        add: fi,
        kill: On,
        modifier: Sn,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: _i,
        aliases: {},
        register: 0
      };
      if (Zt(), t !== r) {
        if (tt[e])
          return;
        ot(r, ot(we(t, n), s)), Kt(r.prototype, Kt(n, we(t, s))), tt[r.prop = e] = r, t.targetTest && (ye.push(r), si[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Xi(e, r), t.register && t.register(J, r, Z);
    } else
      ur.push(t);
}, C = 255, re = {
  aqua: [0, C, C],
  lime: [0, C, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, C],
  navy: [0, 0, 128],
  white: [C, C, C],
  olive: [128, 128, 0],
  yellow: [C, C, 0],
  orange: [C, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [C, 0, 0],
  pink: [C, 192, 203],
  cyan: [0, C, C],
  transparent: [C, C, C, 0]
}, Re = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * C + 0.5 | 0;
}, hr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & C, t & C] : 0 : re.black, n, s, o, u, f, h, _, c, d, m;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t])
      r = re[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & C, r & C, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & C, t & C];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = m = t.match(vi), !e)
        u = +r[0] % 360 / 360, f = +r[1] / 100, h = +r[2] / 100, s = h <= 0.5 ? h * (f + 1) : h + f - h * f, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Re(u + 1 / 3, n, s), r[1] = Re(u, n, s), r[2] = Re(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Vi), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(vi) || re.transparent;
    r = r.map(Number);
  }
  return e && !m && (n = r[0] / C, s = r[1] / C, o = r[2] / C, _ = Math.max(n, s, o), c = Math.min(n, s, o), h = (_ + c) / 2, _ === c ? u = f = 0 : (d = _ - c, f = h > 0.5 ? d / (2 - _ - c) : d / (_ + c), u = _ === n ? (s - o) / d + (s < o ? 6 : 0) : _ === s ? (o - n) / d + 2 : (n - s) / d + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(h * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, lr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(St).forEach(function(n) {
    var s = n.match(Wt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Oi = function(t, e, i) {
  var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", o = 0, u, f, h, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = hr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (h = lr(t), u = i.c, u.join(r) !== h.c.join(r)))
    for (f = t.replace(St, "1").split(Wt), _ = f.length - 1; o < _; o++)
      r += f[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(St), _ = f.length - 1; o < _; o++)
      r += f[o] + n[o];
  return r + f[_];
}, St = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in re)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), hn = /hsl[a]?\(/, _r = function(t) {
  var e = t.join(" "), i;
  if (St.lastIndex = 0, St.test(e))
    return i = hn.test(e), t[1] = Oi(t[1], i), t[0] = Oi(t[0], i, lr(t[1])), !0;
}, he, et = function() {
  var a = Date.now, t = 500, e = 33, i = a(), r = i, n = 1e3 / 240, s = n, o = [], u, f, h, _, c, d, m = function l(p) {
    var y = a() - r, v = p === !0, w, x, g, b;
    if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, w = g - s, (w > 0 || v) && (b = ++_.frame, c = g - _.time * 1e3, _.time = g = g / 1e3, s += w + (w >= n ? 4 : n - w), x = 1), v || (u = f(l)), x)
      for (d = 0; d < o.length; d++)
        o[d](g, c, b, p);
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
      Yi && (!Ve && ii() && (lt = Ve = window, ri = lt.document || {}, st.gsap = J, (lt.gsapVersions || (lt.gsapVersions = [])).push(J.version), qi(xe || lt.GreenSockGlobals || !lt.gsap && lt || {}), ur.forEach(fr)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), f = h || function(p) {
        return setTimeout(p, s - _.time * 1e3 + 1 | 0);
      }, he = 1, m(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(u), he = 0, f = ue;
    },
    lagSmoothing: function(p, y) {
      t = p || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(p) {
      n = 1e3 / (p || 240), s = _.time * 1e3 + n;
    },
    add: function(p, y, v) {
      var w = y ? function(x, g, b, S) {
        p(x, g, b, S), _.remove(w);
      } : p;
      return _.remove(p), o[v ? "unshift" : "push"](w), Zt(), w;
    },
    remove: function(p, y) {
      ~(y = o.indexOf(p)) && o.splice(y, 1) && d >= y && d--;
    },
    _listeners: o
  }, _;
}(), Zt = function() {
  return !he && et.wake();
}, k = {}, ln = /^[\d.\-M][\d.\-,\s]/, _n = /["']/g, cn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, u, f; n < s; n++)
    u = i[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, o), e[r] = isNaN(f) ? f.replace(_n, "").trim() : +f, r = u.substr(o + 1).trim();
  return e;
}, dn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, pn = function(t) {
  var e = (t + "").split("("), i = k[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [cn(e[1])] : dn(t).split(",").map($i)) : k._CE && ln.test(t) ? k._CE("", t) : i;
}, cr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, dr = function a(t, e) {
  for (var i = t._first, r; i; )
    i instanceof K ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, Nt = function(t, e) {
  return t && (L(t) ? t : k[t] || pn(t)) || e;
}, Ut = function(t, e, i, r) {
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
  return Q(t, function(o) {
    k[o] = st[o] = n, k[s = o.toLowerCase()] = i;
    for (var u in n)
      k[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = k[o + "." + u] = n[u];
  }), n;
}, pr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ee = function a(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ue * (Math.asin(1 / r) || 0), o = function(h) {
    return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Br((h - s) * n) + 1;
  }, u = t === "out" ? o : t === "in" ? function(f) {
    return 1 - o(1 - f);
  } : pr(o);
  return n = Ue / n, u.config = function(f, h) {
    return a(t, f, h);
  }, u;
}, Fe = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : pr(i);
  return r.config = function(n) {
    return a(t, n);
  }, r;
};
Q("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  Ut(a + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
Ut("Elastic", Ee("in"), Ee("out"), Ee());
(function(a, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? a * o * o : o < i ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Ut("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Ut("Expo", function(a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Ut("Circ", function(a) {
  return -(Bi(1 - a * a) - 1);
});
Ut("Sine", function(a) {
  return a === 1 ? 1 : -Nr(a * Ir) + 1;
});
Ut("Back", Fe("in"), Fe("out"), Fe());
k.SteppedEase = k.steps = st.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - D;
    return function(o) {
      return ((r * de(0, s, o) | 0) + n) * i;
    };
  }
};
Ht.ease = k["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return oi += a + "," + a + "Params,";
});
var mr = function(t, e) {
  this.id = Lr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Hi, this.set = e ? e.getSetter : _i;
}, le = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Qt(this, +e.duration, 1, 1), this.data = e.data, E && (this._ctx = E, E.data.push(this)), he || et.wake();
  }
  var t = a.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Qt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Zt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (De(this, i), !n._dp || n.parent || ji(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ki(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + wi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + wi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? $t(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -D ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? be(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -D ? 0 : this._rts, this.totalTime(de(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Ce(this), $r(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Zt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = F(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && _t(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + ($(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? be(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Xr);
    var r = X;
    return X = i, ui(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), X = r, this;
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
    return this.totalTime(at(this, i), $(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, $(r)), this._dur || (this._zTime = -D), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -D, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(s) {
      var o = L(i) ? i : Qi, u = function() {
        var h = r.then;
        r.then = null, n && n(), L(o) && (o = o(r)) && (o.then || o === r) && (r.then = h), s(o), r.then = h;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    ie(this);
  }, a;
}();
ot(le.prototype, {
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
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(a) {
  Ni(t, a);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = a.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = $(i.sortChildren), z && _t(i.parent || z, mt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Ji(mt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, o) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(r, n, at(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return _t(this, U.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, o, u, f, h) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = f, s.onCompleteParams = h, s.parent = this, new U(r, s, at(this, u)), this;
  }, e.staggerFrom = function(r, n, s, o, u, f, h) {
    return s.runBackwards = 1, ne(s).immediateRender = $(s.immediateRender), this.staggerTo(r, n, s, o, u, f, h);
  }, e.staggerFromTo = function(r, n, s, o, u, f, h, _) {
    return o.startAt = s, ne(o).immediateRender = $(o.immediateRender), this.staggerTo(r, n, o, u, f, h, _);
  }, e.render = function(r, n, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = r <= 0 ? 0 : F(r), _ = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, m, l, p, y, v, w, x, g, b, S;
    if (this !== z && h > u && r >= 0 && (h = u), h !== this._tTime || s || _) {
      if (o !== this._time && f && (h += this._time - o, r += this._time - o), c = h, x = this._start, w = this._ts, y = !w, _ && (f || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (b = this._yoyo, p = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(p * 100 + r, n, s);
        if (c = F(h % p), h === u ? (l = this._repeat, c = f) : (g = F(h / p), l = ~~g, l && l === g && (c = f, l--), c > f && (c = f)), g = $t(this._tTime, p), !o && this._tTime && g !== l && this._tTime - g * p - this._dur <= 0 && (g = l), b && l & 1 && (c = f - c, S = 1), l !== g && !this._lock) {
          var O = b && g & 1, T = O === (b && l & 1);
          if (l < g && (O = !O), o = O ? 0 : h % f ? f : h, this._lock = 1, this.render(o || (S ? 0 : F(l * p)), n, !f)._lock = 0, this._tTime = h, !n && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, g = l), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, T && (this._lock = 2, o = O ? f : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          dr(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = Jr(this, F(o), F(c)), v && (h -= c - (c = v._start))), this._tTime = h, this._time = c, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && h && f && !n && !g && (it(this, "onStart"), this._tTime !== h))
        return this;
      if (c >= o && r >= 0)
        for (d = this._first; d; ) {
          if (m = d._next, (d._act || c >= d._start) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !y) {
              v = 0, m && (h += this._zTime = -D);
              break;
            }
          }
          d = m;
        }
      else {
        d = this._last;
        for (var P = r < 0 ? r : c; d; ) {
          if (m = d._prev, (d._act || P <= d._end) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, n, s || X && ui(d)), c !== this._time || !this._ts && !y) {
              v = 0, m && (h += this._zTime = P ? -D : D);
              break;
            }
          }
          d = m;
        }
      }
      if (v && !n && (this.pause(), v.render(c >= o ? 0 : -D)._zTime = c >= o ? 1 : -1, this._ts))
        return this._start = x, Ce(this), this.render(r, n, s);
      this._onUpdate && !n && it(this, "onUpdate", !0), (h === u && this._tTime >= this.totalDuration() || !h && o) && (x === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === u && this._ts > 0 || !h && this._ts < 0) && Ot(this, 1), !n && !(r < 0 && !o) && (h || o || !u) && (it(this, h === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = at(this, n, r)), !(r instanceof le)) {
      if (H(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (Y(r))
        return this.addLabel(r, n);
      if (L(r))
        r = U.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _t(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -ut);
    for (var u = [], f = this._first; f; )
      f._start >= o && (f instanceof U ? n && u.push(f) : (s && u.push(f), r && u.push.apply(u, f.getChildren(!0, n, s)))), f = f._next;
    return u;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return Y(r) ? this.removeLabel(r) : L(r) ? this.killTweensOf(r) : (r.parent === this && Pe(this, r), r === this._recent && (this._recent = this._last), Lt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = F(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), a.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = at(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = U.delayedCall(0, n || ue, s);
    return o.data = "isPause", this._hasPause = 1, _t(this, o, at(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = at(this, r); n; )
      n._start === r && n.data === "isPause" && Ot(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), u = o.length; u--; )
      xt !== o[u] && o[u].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = ft(r), u = this._first, f = yt(n), h; u; )
      u instanceof U ? Gr(u._targets, o) && (f ? (!xt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (h = u.getTweensOf(o, n)).length && s.push.apply(s, h), u = u._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = at(s, r), u = n, f = u.startAt, h = u.onStart, _ = u.onStartParams, c = u.immediateRender, d, m = U.to(s, ot({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || D,
      onStart: function() {
        if (s.pause(), !d) {
          var p = n.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          m._dur !== p && Qt(m, p, 0, 1).render(m._time, !0, !0), d = 1;
        }
        h && h.apply(m, _ || []);
      }
    }, n));
    return c ? m.render(0) : m;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, ot({
      startAt: {
        time: at(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Si(this, at(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Si(this, at(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var o = this._first, u = this.labels, f;
    for (r = F(r); o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (f in u)
        u[f] >= s && (u[f] += r);
    return Lt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return a.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Lt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, u = ut, f, h, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; o; )
        f = o._prev, o._dirty && o.totalDuration(), h = o._start, h > u && s._sort && o._ts && !s._lock ? (s._lock = 1, _t(s, o, h - o._delay, 1)._lock = 0) : u = h, h < 0 && o._ts && (n -= h, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += F(h / s._ts), s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = f;
      Qt(s, s === z && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (z._ts && (Ki(z, be(r, z)), Gi = et.frame), et.frame >= xi) {
      xi += nt.autoSleep || 120;
      var n = z._first;
      if ((!n || !n._ts) && nt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
}(le);
ot(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var mn = function(t, e, i, r, n, s, o) {
  var u = new Z(this._pt, t, e, 0, 1, wr, null, n), f = 0, h = 0, _, c, d, m, l, p, y, v;
  for (u.b = i, u.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = fe(r)), s && (v = [i, r], s(v, t, e), i = v[0], r = v[1]), c = i.match(Me) || []; _ = Me.exec(r); )
    m = _[0], l = r.substring(f, _.index), d ? d = (d + 1) % 5 : l.substr(-5) === "rgba(" && (d = 1), m !== c[h++] && (p = parseFloat(c[h - 1]) || 0, u._pt = {
      _next: u._pt,
      p: l || h === 1 ? l : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: m.charAt(1) === "=" ? qt(p, m) - p : parseFloat(m) - p,
      m: d && d < 4 ? Math.round : 0
    }, f = Me.lastIndex);
  return u.c = f < r.length ? r.substring(f, r.length) : "", u.fp = o, (Wi.test(r) || y) && (u.e = 0), this._pt = u, u;
}, fi = function(t, e, i, r, n, s, o, u, f, h) {
  L(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : L(_) ? f ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : _, d = L(_) ? f ? Tn : xr : li, m;
  if (Y(r) && (~r.indexOf("random(") && (r = fe(r)), r.charAt(1) === "=" && (m = qt(c, r) + (G(c) || 0), (m || m === 0) && (r = m))), !h || c !== r || Ke)
    return !isNaN(c * r) && r !== "" ? (m = new Z(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? bn : Tr, 0, d), f && (m.fp = f), o && m.modifier(o, this, t), this._pt = m) : (!_ && !(e in t) && ni(e, r), mn.call(this, t, e, c, r, d, u || nt.stringFilter, f));
}, gn = function(t, e, i, r, n) {
  if (L(t) && (t = oe(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || H(t) || Ui(t))
    return Y(t) ? oe(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = oe(t[o], n, e, i, r);
  return s;
}, gr = function(t, e, i, r, n, s) {
  var o, u, f, h;
  if (tt[t] && (o = new tt[t]()).init(n, o.rawVars ? e[t] : gn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = u = new Z(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== Yt))
    for (f = i._ptLookup[i._targets.indexOf(n)], h = o._props.length; h--; )
      f[o._props[h]] = u;
  return o;
}, xt, Ke, hi = function a(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, u = r.lazy, f = r.onUpdate, h = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, d = r.autoRevert, m = t._dur, l = t._startAt, p = t._targets, y = t.parent, v = y && y.data === "nested" ? y.vars.targets : p, w = t._overwrite === "auto" && !ti, x = t.timeline, g, b, S, O, T, P, R, M, A, q, V, B, W;
  if (x && (!c || !n) && (n = "none"), t._ease = Nt(n, Ht.ease), t._yEase = _ ? cr(Nt(_ === !0 ? n : _, Ht.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !x && !!r.runBackwards, !x || c && !r.stagger) {
    if (M = p[0] ? It(p[0]).harness : 0, B = M && r[M.prop], g = we(r, si), l && (l._zTime < 0 && l.progress(1), e < 0 && h && o && !d ? l.render(-1, !0) : l.revert(h && m ? ge : qr), l._lazy = 0), s) {
      if (Ot(t._startAt = U.set(p, ot({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !l && $(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return it(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X || !o && !d) && t._startAt.revert(ge), o && m && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && m && !l) {
      if (e && (o = !1), S = ot({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !l && $(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), B && (S[M.prop] = B), Ot(t._startAt = U.set(p, S)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X ? t._startAt.revert(ge) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, D, D);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = m && $(u) || u && !m, b = 0; b < p.length; b++) {
      if (T = p[b], R = T._gsap || ai(p)[b]._gsap, t._ptLookup[b] = q = {}, We[R.id] && bt.length && Te(), V = v === p ? b : v.indexOf(T), M && (A = new M()).init(T, B || g, t, V, v) !== !1 && (t._pt = O = new Z(t._pt, T, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(ht) {
        q[ht] = O;
      }), A.priority && (P = 1)), !M || B)
        for (S in g)
          tt[S] && (A = gr(S, g, t, V, T, v)) ? A.priority && (P = 1) : q[S] = O = fi.call(t, T, S, "get", g[S], V, v, 0, r.stringFilter);
      t._op && t._op[b] && t.kill(T, t._op[b]), w && t._pt && (xt = t, z.killTweensOf(T, q, t.globalTime(e)), W = !t.parent, xt = 0), t._pt && u && (We[R.id] = 1);
    }
    P && br(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !W, c && e <= 0 && x.render(ut, !0, !0);
}, yn = function(t, e, i, r, n, s, o, u) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, _, c, d;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (h = c[d][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return Ke = 1, t.vars[e] = "+=0", hi(t, o), Ke = 0, u ? ae(e + " not eligible for reset") : 1;
      f.push(h);
    }
  for (d = f.length; d--; )
    _ = f[d], h = _._pt || _, h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c, h.c = i - h.s, _.e && (_.e = N(i) + G(_.e)), _.b && (_.b = h.s + G(_.b));
}, vn = function(t, e) {
  var i = t[0] ? It(t[0]).harness : 0, r = i && i.aliases, n, s, o, u;
  if (!r)
    return e;
  n = Kt({}, e);
  for (s in r)
    if (s in n)
      for (u = r[s].split(","), o = u.length; o--; )
        n[u[o]] = n[s];
  return n;
}, xn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, o;
  if (H(e))
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
}, oe = function(t, e, i, r, n) {
  return L(t) ? t.call(e, i, r, n) : Y(t) && ~t.indexOf("random(") ? fe(t) : t;
}, yr = oi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", vr = {};
Q(yr + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return vr[a] = 1;
});
var U = /* @__PURE__ */ function(a) {
  Ni(t, a);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = a.call(this, s ? r : ne(r)) || this;
    var u = o.vars, f = u.duration, h = u.delay, _ = u.immediateRender, c = u.stagger, d = u.overwrite, m = u.keyframes, l = u.defaults, p = u.scrollTrigger, y = u.yoyoEase, v = r.parent || z, w = (H(i) || Ui(i) ? yt(i[0]) : "length" in r) ? [i] : ft(i), x, g, b, S, O, T, P, R;
    if (o._targets = w.length ? ai(w) : ae("GSAP target " + i + " not found. https://gsap.com", !nt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, m || c || me(f) || me(h)) {
      if (r = o.vars, x = o.timeline = new K({
        data: "nested",
        defaults: l || {},
        targets: v && v.data === "nested" ? v.vars.targets : w
      }), x.kill(), x.parent = x._dp = mt(o), x._start = 0, c || me(f) || me(h)) {
        if (S = w.length, P = c && rr(c), dt(c))
          for (O in c)
            ~yr.indexOf(O) && (R || (R = {}), R[O] = c[O]);
        for (g = 0; g < S; g++)
          b = we(r, vr), b.stagger = 0, y && (b.yoyoEase = y), R && Kt(b, R), T = w[g], b.duration = +oe(f, mt(o), g, T, w), b.delay = (+oe(h, mt(o), g, T, w) || 0) - o._delay, !c && S === 1 && b.delay && (o._delay = h = b.delay, o._start += h, b.delay = 0), x.to(T, b, P ? P(g, T, w) : 0), x._ease = k.none;
        x.duration() ? f = h = 0 : o.timeline = 0;
      } else if (m) {
        ne(ot(x.vars.defaults, {
          ease: "none"
        })), x._ease = Nt(m.ease || r.ease || "none");
        var M = 0, A, q, V;
        if (H(m))
          m.forEach(function(B) {
            return x.to(w, B, ">");
          }), x.duration();
        else {
          b = {};
          for (O in m)
            O === "ease" || O === "easeEach" || xn(O, m[O], b, m.easeEach);
          for (O in b)
            for (A = b[O].sort(function(B, W) {
              return B.t - W.t;
            }), M = 0, g = 0; g < A.length; g++)
              q = A[g], V = {
                ease: q.e,
                duration: (q.t - (g ? A[g - 1].t : 0)) / 100 * f
              }, V[O] = q.v, x.to(w, V, M), M += V.duration;
          x.duration() < f && x.to({}, {
            duration: f - x.duration()
          });
        }
      }
      f || o.duration(f = x.duration());
    } else
      o.timeline = 0;
    return d === !0 && !ti && (xt = mt(o), z.killTweensOf(w), xt = 0), _t(v, mt(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (_ || !f && !m && o._start === F(v._time) && $(_) && Qr(mt(o)) && v.data !== "nested") && (o._tTime = -D, o.render(Math.max(0, -h) || 0)), p && Ji(mt(o), p), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, u = this._tDur, f = this._dur, h = r < 0, _ = r > u - D && !h ? u : r < D ? 0 : r, c, d, m, l, p, y, v, w, x;
    if (!f)
      jr(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (c = _, w = this.timeline, this._repeat) {
        if (l = f + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(l * 100 + r, n, s);
        if (c = F(_ % l), _ === u ? (m = this._repeat, c = f) : (p = F(_ / l), m = ~~p, m && m === p ? (c = f, m--) : c > f && (c = f)), y = this._yoyo && m & 1, y && (x = this._yEase, c = f - c), p = $t(this._tTime, l), c === o && !s && this._initted && m === p)
          return this._tTime = _, this;
        m !== p && (w && this._yEase && dr(w, y), this.vars.repeatRefresh && !y && !this._lock && c !== l && this._initted && (this._lock = s = 1, this.render(F(l * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (tr(this, h ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && m !== p))
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (x || this._ease)(c / f), this._from && (this.ratio = v = 1 - v), !o && _ && !n && !p && (it(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(v, d.d), d = d._next;
      w && w.render(r < 0 ? r : w._dur * w._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && Ye(this, r, n, s), it(this, "onUpdate")), this._repeat && m !== p && this.vars.onRepeat && !n && this.parent && it(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (h && !this._onUpdate && Ye(this, r, !0, !0), (r || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Ot(this, 1), !n && !(h && !o) && (_ || o || y) && (it(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), a.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, o, u) {
    he || et.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || hi(this, f), h = this._ease(f / this._dur), yn(this, r, n, s, o, h, f, u) ? this.resetTo(r, n, s, o, 1) : (De(this, 0), this.parent || Zi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ie(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, xt && xt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Qt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = r ? ft(r) : o, f = this._ptLookup, h = this._pt, _, c, d, m, l, p, y;
    if ((!n || n === "all") && Kr(o, u))
      return n === "all" && (this._pt = 0), ie(this);
    for (_ = this._op = this._op || [], n !== "all" && (Y(n) && (l = {}, Q(n, function(v) {
      return l[v] = 1;
    }), n = l), n = vn(o, n)), y = o.length; y--; )
      if (~u.indexOf(o[y])) {
        c = f[y], n === "all" ? (_[y] = n, m = c, d = {}) : (d = _[y] = _[y] || {}, m = n);
        for (l in m)
          p = c && c[l], p && ((!("kill" in p.d) || p.d.kill(l) === !0) && Pe(this, p, "_pt"), delete c[l]), d !== "all" && (d[l] = 1);
      }
    return this._initted && !this._pt && h && ie(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
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
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return z.killTweensOf(r, n, s);
  }, t;
}(le);
ot(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Q("staggerTo,staggerFrom,staggerFromTo", function(a) {
  U[a] = function() {
    var t = new K(), e = Xe.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var li = function(t, e, i) {
  return t[e] = i;
}, xr = function(t, e, i) {
  return t[e](i);
}, Tn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, wn = function(t, e, i) {
  return t.setAttribute(e, i);
}, _i = function(t, e) {
  return L(t[e]) ? xr : ei(t[e]) && t.setAttribute ? wn : li;
}, Tr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, bn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, wr = function(t, e) {
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
}, ci = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, Sn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, On = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Pe(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, kn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, br = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Z = /* @__PURE__ */ function() {
  function a(e, i, r, n, s, o, u, f, h) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || Tr, this.d = u || this, this.set = f || li, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = kn, this.m = i, this.mt = n, this.tween = r;
  }, a;
}();
Q(oi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return si[a] = 1;
});
st.TweenMax = st.TweenLite = U;
st.TimelineLite = st.TimelineMax = K;
z = new K({
  sortChildren: !1,
  defaults: Ht,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
nt.stringFilter = _r;
var Bt = [], ve = {}, Pn = [], ki = 0, Cn = 0, ze = function(t) {
  return (ve[t] || Pn).map(function(e) {
    return e();
  });
}, $e = function() {
  var t = Date.now(), e = [];
  t - ki > 2 && (ze("matchMediaInit"), Bt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, o, u, f;
    for (o in r)
      s = lt.matchMedia(r[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, f = 1);
    f && (i.revert(), u && e.push(i));
  }), ze("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), ki = t, ze("matchMedia"));
}, Sr = /* @__PURE__ */ function() {
  function a(e, i) {
    this.selector = i && Ge(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Cn++, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    L(i) && (n = r, r = i, i = L);
    var s = this, o = function() {
      var f = E, h = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = Ge(n)), E = s, _ = r.apply(s, arguments), L(_) && s._r.push(_), E = f, s.selector = h, s.isReverted = !1, _;
    };
    return s.last = o, i === L ? o(s, function(u) {
      return s.add(null, u);
    }) : i ? s[i] = o : o;
  }, t.ignore = function(i) {
    var r = E;
    E = null, i(this), E = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var o = n.getTweens(), u = n.data.length, f; u--; )
        f = n.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(h) {
          return o.splice(o.indexOf(h), 1);
        }));
      for (o.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, _) {
        return _.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(i);
      }), u = n.data.length; u--; )
        f = n.data[u], f instanceof K ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof U) && f.revert && f.revert(i);
      n._r.forEach(function(h) {
        return h(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), r)
      for (var s = Bt.length; s--; )
        Bt[s].id === this.id && Bt.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, a;
}(), Dn = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, E && E.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    dt(i) || (i = {
      matches: i
    });
    var s = new Sr(0, n || this.scope), o = s.conditions = {}, u, f, h;
    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? h = 1 : (u = lt.matchMedia(i[f]), u && (Bt.indexOf(s) < 0 && Bt.push(s), (o[f] = u.matches) && (h = 1), u.addListener ? u.addListener($e) : u.addEventListener("change", $e)));
    return h && r(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, a;
}(), Se = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return fr(r);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return z.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    Y(t) && (t = ft(t)[0]);
    var n = It(t || {}).get, s = i ? Qi : $i;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(o, u, f) {
      return s((tt[o] && tt[o].get || n)(t, o, u, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ft(t), t.length > 1) {
      var r = t.map(function(h) {
        return J.quickSetter(h, e, i);
      }), n = r.length;
      return function(h) {
        for (var _ = n; _--; )
          r[_](h);
      };
    }
    t = t[0] || {};
    var s = tt[e], o = It(t), u = o.harness && (o.harness.aliases || {})[e] || e, f = s ? function(h) {
      var _ = new s();
      Yt._pt = 0, _.init(t, i ? h + i : h, Yt, 0, [t]), _.render(1, _), Yt._pt && ci(1, Yt);
    } : o.set(t, u);
    return s ? f : function(h) {
      return f(t, u, i ? h + i : h, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, ot((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(u, f, h) {
      return n.resetTo(e, u, f, h);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return z.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Nt(t.ease, Ht.ease)), Ti(Ht, t || {});
  },
  config: function(t) {
    return Ti(nt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !tt[o] && !st[o] && ae(e + " effect requires " + o + " plugin.");
    }), Ae[e] = function(o, u, f) {
      return i(ft(o), ot(u || {}, n), f);
    }, s && (K.prototype[e] = function(o, u, f) {
      return this.add(Ae[e](o, dt(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    k[t] = Nt(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Nt(t, e) : k;
  },
  getById: function(t) {
    return z.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new K(t), r, n;
    for (i.smoothChildTiming = $(t.smoothChildTiming), z.remove(i), i._dp = 0, i._time = i._tTime = z._time, r = z._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
    return _t(z, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Sr(t, e) : E;
  },
  matchMedia: function(t) {
    return new Dn(t);
  },
  matchMediaRefresh: function() {
    return Bt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || $e();
  },
  addEventListener: function(t, e) {
    var i = ve[t] || (ve[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = ve[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: an,
    wrapYoyo: un,
    distribute: rr,
    random: sr,
    snap: nr,
    normalize: on,
    getUnit: G,
    clamp: en,
    splitColor: hr,
    toArray: ft,
    selector: Ge,
    mapRange: ar,
    pipe: nn,
    unitize: sn,
    interpolate: fn,
    shuffle: ir
  },
  install: qi,
  effects: Ae,
  ticker: et,
  updateRoot: K.updateRoot,
  plugins: tt,
  globalTimeline: z,
  core: {
    PropTween: Z,
    globals: Xi,
    Tween: U,
    Timeline: K,
    Animation: le,
    getCache: It,
    _removeLinkedListItem: Pe,
    reverting: function() {
      return X;
    },
    context: function(t) {
      return t && E && (E.data.push(t), t._ctx = E), E;
    },
    suppressOverwrites: function(t) {
      return ti = t;
    }
  }
};
Q("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Se[a] = U[a];
});
et.add(K.updateRoot);
Yt = Se.to({}, {
  duration: 0
});
var Mn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, An = function(t, e) {
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
      s._onInit = function(o) {
        var u, f;
        if (Y(n) && (u = {}, Q(n, function(h) {
          return u[h] = 1;
        }), n = u), e) {
          u = {};
          for (f in n)
            u[f] = e(n[f]);
          n = u;
        }
        An(o, n);
      };
    }
  };
}, J = Se.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o, u;
    this.tween = i;
    for (s in e)
      u = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      X ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Ie("roundProps", He), Ie("modifiers"), Ie("snap", nr)) || Se;
U.version = K.version = J.version = "3.14.2";
Yi = 1;
ii() && Zt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Pi, Tt, Xt, di, zt, Ci, pi, Rn = function() {
  return typeof window < "u";
}, vt = {}, Et = 180 / Math.PI, Gt = Math.PI / 180, Vt = Math.atan2, Di = 1e8, mi = /([A-Z])/g, En = /(left|right|width|margin|padding|x)/i, Fn = /[\s,\(]\S/, ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Qe = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, zn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, In = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ln = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Nn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Or = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, kr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Bn = function(t, e, i) {
  return t.style[e] = i;
}, Un = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Vn = function(t, e, i) {
  return t._gsap[e] = i;
}, Wn = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Yn = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, qn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, I = "transform", j = I + "Origin", Xn = function a(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ct[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = gt(r, o);
      }) : this.tfm[t] = s.x ? s[t] : gt(r, t), t === j && (this.tfm.zOrigin = s.zOrigin);
    else
      return ct.transform.split(",").forEach(function(o) {
        return a.call(i, o, e);
      });
    if (this.props.indexOf(I) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(j, e, "")), t = I;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Pr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Gn = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(mi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = pi(), (!n || !n.isStart) && !i[I] && (Pr(i), r.zOrigin && i[j] && (i[j] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Cr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Gn,
    save: Xn
  };
  return t._gsap || J.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Dr, Ze = function(t, e) {
  var i = Tt.createElementNS ? Tt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tt.createElement(t);
  return i && i.style ? i : Tt.createElement(t);
}, rt = function a(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(mi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, jt(e) || e, 1) || "";
}, Mi = "O,Moz,ms,Ms,Webkit".split(","), jt = function(t, e, i) {
  var r = e || zt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Mi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Mi[s] : "") + t;
}, je = function() {
  Rn() && window.document && (Pi = window, Tt = Pi.document, Xt = Tt.documentElement, zt = Ze("div") || {
    style: {}
  }, Ze("div"), I = jt(I), j = I + "Origin", zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Dr = !!jt("perspective"), pi = J.core.reverting, di = 1);
}, Ai = function(t) {
  var e = t.ownerSVGElement, i = Ze("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), Xt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), Xt.removeChild(i), n;
}, Ri = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Mr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Ai(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Ai(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ri(t, ["x", "cx", "x1"]) || 0,
    y: +Ri(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Ar = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mr(t));
}, kt = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== j && (e = I), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(mi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, wt = function(t, e, i, r, n, s) {
  var o = new Z(t._pt, e, i, 0, 1, s ? kr : Or);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, Ei = {
  deg: 1,
  rad: 1,
  turn: 1
}, Hn = {
  grid: 1,
  flex: 1
}, Pt = function a(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = zt.style, u = En.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", m, l, p, y;
  if (r === s || !n || Ei[r] || Ei[s])
    return n;
  if (s !== "px" && !c && (n = a(t, e, i, "px")), y = t.getCTM && Ar(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return m = y ? t.getBBox()[u ? "width" : "height"] : t[h], N(d ? n / m * _ : n / 100 * m);
  if (o[u ? "width" : "height"] = _ + (c ? s : r), l = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, y && (l = (t.ownerSVGElement || {}).parentNode), (!l || l === Tt || !l.appendChild) && (l = Tt.body), p = l._gsap, p && d && p.width && u && p.time === et.time && !p.uncache)
    return N(n / p.width * _);
  if (d && (e === "height" || e === "width")) {
    var v = t.style[e];
    t.style[e] = _ + r, m = t[h], v ? t.style[e] = v : kt(t, e);
  } else
    (d || s === "%") && !Hn[rt(l, "display")] && (o.position = rt(t, "position")), l === t && (o.position = "static"), l.appendChild(zt), m = zt[h], l.removeChild(zt), o.position = "absolute";
  return u && d && (p = It(l), p.time = et.time, p.width = l[h]), N(c ? m * n / _ : m && n ? _ / m * n : 0);
}, gt = function(t, e, i, r) {
  var n;
  return di || je(), e in ct && e !== "transform" && (e = ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : ke(rt(t, j)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Oe[e] && Oe[e](t, e, i) || rt(t, e) || Hi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Pt(t, e, n, i) + i : n;
}, Kn = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = jt(e, t, 1), s = n && rt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = rt(t, "borderTopColor"));
  }
  var o = new Z(this._pt, t.style, e, 0, 1, wr), u = 0, f = 0, h, _, c, d, m, l, p, y, v, w, x, g;
  if (o.b = i, o.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = rt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (l = t.style[e], t.style[e] = r, r = rt(t, e) || r, l ? t.style[e] = l : kt(t, e)), h = [i, r], _r(h), i = h[0], r = h[1], c = i.match(Wt) || [], g = r.match(Wt) || [], g.length) {
    for (; _ = Wt.exec(r); )
      p = _[0], v = r.substring(u, _.index), m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1), p !== (l = c[f++] || "") && (d = parseFloat(l) || 0, x = l.substr((d + "").length), p.charAt(1) === "=" && (p = qt(d, p) + x), y = parseFloat(p), w = p.substr((y + "").length), u = Wt.lastIndex - w.length, w || (w = w || nt.units[e] || x, u === r.length && (r += w, o.e += w)), x !== w && (d = Pt(t, e, l, w) || 0), o._pt = {
        _next: o._pt,
        p: v || f === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? kr : Or;
  return Wi.test(r) && (o.e = 0), this._pt = o, o;
}, Fi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, $n = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Fi[i] || i, e[1] = Fi[r] || r, e.join(" ");
}, Qn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, u, f;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        o = n[f], vt[o] && (u = 1, o = o === "transformOrigin" ? j : I), kt(i, o);
    u && (kt(i, I), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, Pr(r)));
  }
}, Oe = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Z(t._pt, e, i, 0, 0, Qn);
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
}, _e = [1, 0, 0, 1, 0, 0], Rr = {}, Er = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, zi = function(t) {
  var e = rt(t, I);
  return Er(e) ? _e : e.substr(7).match(Vi).map(N);
}, gi = function(t, e) {
  var i = t._gsap || It(t), r = t.style, n = zi(t), s, o, u, f;
  return i.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? _e : n) : (n === _e && !t.offsetParent && t !== Xt && !i.svg && (u = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, o = t.nextElementSibling, Xt.appendChild(t)), n = zi(t), u ? r.display = u : kt(t, "display"), f && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : Xt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Je = function(t, e, i, r, n, s) {
  var o = t._gsap, u = n || gi(t, !0), f = o.xOrigin || 0, h = o.yOrigin || 0, _ = o.xOffset || 0, c = o.yOffset || 0, d = u[0], m = u[1], l = u[2], p = u[3], y = u[4], v = u[5], w = e.split(" "), x = parseFloat(w[0]) || 0, g = parseFloat(w[1]) || 0, b, S, O, T;
  i ? u !== _e && (S = d * p - m * l) && (O = x * (p / S) + g * (-l / S) + (l * v - p * y) / S, T = x * (-m / S) + g * (d / S) - (d * v - m * y) / S, x = O, g = T) : (b = Mr(t), x = b.x + (~w[0].indexOf("%") ? x / 100 * b.width : x), g = b.y + (~(w[1] || w[0]).indexOf("%") ? g / 100 * b.height : g)), r || r !== !1 && o.smooth ? (y = x - f, v = g - h, o.xOffset = _ + (y * d + v * l) - y, o.yOffset = c + (y * m + v * p) - v) : o.xOffset = o.yOffset = 0, o.xOrigin = x, o.yOrigin = g, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[j] = "0px 0px", s && (wt(s, o, "xOrigin", f, x), wt(s, o, "yOrigin", h, g), wt(s, o, "xOffset", _, o.xOffset), wt(s, o, "yOffset", c, o.yOffset)), t.setAttribute("data-svg-origin", x + " " + g);
}, ce = function(t, e) {
  var i = t._gsap || new mr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(t), f = rt(t, j) || "0", h, _, c, d, m, l, p, y, v, w, x, g, b, S, O, T, P, R, M, A, q, V, B, W, ht, pe, Jt, te, Dt, yi, pt, Mt;
  return h = _ = c = l = p = y = v = w = x = 0, d = m = 1, i.svg = !!(t.getCTM && Ar(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[I] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[I] !== "none" ? u[I] : "")), r.scale = r.rotate = r.translate = "none"), S = gi(t, i.svg), i.svg && (i.uncache ? (ht = t.getBBox(), f = i.xOrigin - ht.x + "px " + (i.yOrigin - ht.y) + "px", W = "") : W = !e && t.getAttribute("data-svg-origin"), Je(t, W || f, !!W || i.originIsAbsolute, i.smooth !== !1, S)), g = i.xOrigin || 0, b = i.yOrigin || 0, S !== _e && (R = S[0], M = S[1], A = S[2], q = S[3], h = V = S[4], _ = B = S[5], S.length === 6 ? (d = Math.sqrt(R * R + M * M), m = Math.sqrt(q * q + A * A), l = R || M ? Vt(M, R) * Et : 0, v = A || q ? Vt(A, q) * Et + l : 0, v && (m *= Math.abs(Math.cos(v * Gt))), i.svg && (h -= g - (g * R + b * A), _ -= b - (g * M + b * q))) : (Mt = S[6], yi = S[7], Jt = S[8], te = S[9], Dt = S[10], pt = S[11], h = S[12], _ = S[13], c = S[14], O = Vt(Mt, Dt), p = O * Et, O && (T = Math.cos(-O), P = Math.sin(-O), W = V * T + Jt * P, ht = B * T + te * P, pe = Mt * T + Dt * P, Jt = V * -P + Jt * T, te = B * -P + te * T, Dt = Mt * -P + Dt * T, pt = yi * -P + pt * T, V = W, B = ht, Mt = pe), O = Vt(-A, Dt), y = O * Et, O && (T = Math.cos(-O), P = Math.sin(-O), W = R * T - Jt * P, ht = M * T - te * P, pe = A * T - Dt * P, pt = q * P + pt * T, R = W, M = ht, A = pe), O = Vt(M, R), l = O * Et, O && (T = Math.cos(O), P = Math.sin(O), W = R * T + M * P, ht = V * T + B * P, M = M * T - R * P, B = B * T - V * P, R = W, V = ht), p && Math.abs(p) + Math.abs(l) > 359.9 && (p = l = 0, y = 180 - y), d = N(Math.sqrt(R * R + M * M + A * A)), m = N(Math.sqrt(B * B + Mt * Mt)), O = Vt(V, B), v = Math.abs(O) > 2e-4 ? O * Et : 0, x = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (W = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Er(rt(t, I)), W && t.setAttribute("transform", W))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1, v += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (m *= -1, v += v <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = N(d), i.scaleY = N(m), i.rotation = N(l) + o, i.rotationX = N(p) + o, i.rotationY = N(y) + o, i.skewX = v + o, i.skewY = w + o, i.transformPerspective = x + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[j] = ke(f)), i.xOffset = i.yOffset = 0, i.force3D = nt.force3D, i.renderTransform = i.svg ? jn : Dr ? Fr : Zn, i.uncache = 0, i;
}, ke = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Le = function(t, e, i) {
  var r = G(e);
  return N(parseFloat(e) + parseFloat(Pt(t, "x", i + "px", r))) + r;
}, Zn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fr(t, e);
}, At = "0deg", ee = "0px", Rt = ") ", Fr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, u = i.z, f = i.rotation, h = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, m = i.scaleX, l = i.scaleY, p = i.transformPerspective, y = i.force3D, v = i.target, w = i.zOrigin, x = "", g = y === "auto" && t && t !== 1 || y === !0;
  if (w && (_ !== At || h !== At)) {
    var b = parseFloat(h) * Gt, S = Math.sin(b), O = Math.cos(b), T;
    b = parseFloat(_) * Gt, T = Math.cos(b), s = Le(v, s, S * T * -w), o = Le(v, o, -Math.sin(b) * -w), u = Le(v, u, O * T * -w + w);
  }
  p !== ee && (x += "perspective(" + p + Rt), (r || n) && (x += "translate(" + r + "%, " + n + "%) "), (g || s !== ee || o !== ee || u !== ee) && (x += u !== ee || g ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Rt), f !== At && (x += "rotate(" + f + Rt), h !== At && (x += "rotateY(" + h + Rt), _ !== At && (x += "rotateX(" + _ + Rt), (c !== At || d !== At) && (x += "skew(" + c + ", " + d + Rt), (m !== 1 || l !== 1) && (x += "scale(" + m + ", " + l + Rt), v.style[I] = x || "translate(0, 0)";
}, jn = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, u = i.rotation, f = i.skewX, h = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, m = i.xOrigin, l = i.yOrigin, p = i.xOffset, y = i.yOffset, v = i.forceCSS, w = parseFloat(s), x = parseFloat(o), g, b, S, O, T;
  u = parseFloat(u), f = parseFloat(f), h = parseFloat(h), h && (h = parseFloat(h), f += h, u += h), u || f ? (u *= Gt, f *= Gt, g = Math.cos(u) * _, b = Math.sin(u) * _, S = Math.sin(u - f) * -c, O = Math.cos(u - f) * c, f && (h *= Gt, T = Math.tan(f - h), T = Math.sqrt(1 + T * T), S *= T, O *= T, h && (T = Math.tan(h), T = Math.sqrt(1 + T * T), g *= T, b *= T)), g = N(g), b = N(b), S = N(S), O = N(O)) : (g = _, O = c, b = S = 0), (w && !~(s + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (w = Pt(d, "x", s, "px"), x = Pt(d, "y", o, "px")), (m || l || p || y) && (w = N(w + m - (m * g + l * S) + p), x = N(x + l - (m * b + l * O) + y)), (r || n) && (T = d.getBBox(), w = N(w + r / 100 * T.width), x = N(x + n / 100 * T.height)), T = "matrix(" + g + "," + b + "," + S + "," + O + "," + w + "," + x + ")", d.setAttribute("transform", T), v && (d.style[I] = T);
}, Jn = function(t, e, i, r, n) {
  var s = 360, o = Y(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? Et : 1), f = u - r, h = r + f + "deg", _, c;
  return o && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), _ === "cw" && f < 0 ? f = (f + s * Di) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * Di) % s - ~~(f / s) * s)), t._pt = c = new Z(t._pt, e, i, r, f, zn), c.e = h, c.u = "deg", t._props.push(i), c;
}, Ii = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, ts = function(t, e, i) {
  var r = Ii({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, u, f, h, _, c, d, m;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[I] = e, o = ce(i, 1), kt(i, I), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[I], s[I] = e, o = ce(i, 1), s[I] = f);
  for (u in vt)
    f = r[u], h = o[u], f !== h && n.indexOf(u) < 0 && (d = G(f), m = G(h), _ = d !== m ? Pt(i, u, f, m) : parseFloat(f), c = parseFloat(h), t._pt = new Z(t._pt, o, u, _, c - _, Qe), t._pt.u = m || 0, t._props.push(u));
  Ii(o, r);
};
Q("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  Oe[t > 1 ? "border" + a : a] = function(o, u, f, h, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(m) {
        return gt(o, m, f);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (h + "").split(" "), d = {}, s.forEach(function(m, l) {
      return d[m] = c[l] = c[l] || c[(l - 1) / 2 | 0];
    }), o.init(u, d, _);
  };
});
var zr = {
  name: "css",
  register: je,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, u = i.vars.startAt, f, h, _, c, d, m, l, p, y, v, w, x, g, b, S, O, T;
    di || je(), this.styles = this.styles || Cr(t), O = this.styles.props, this.tween = i;
    for (l in e)
      if (l !== "autoRound" && (h = e[l], !(tt[l] && gr(l, e, i, r, t, n)))) {
        if (d = typeof h, m = Oe[l], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = fe(h)), m)
          m(this, t, l, h, i) && (S = 1);
        else if (l.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(l) + "").trim(), h += "", St.lastIndex = 0, St.test(f) || (p = G(f), y = G(h), y ? p !== y && (f = Pt(t, l, f, y) + y) : p && (h += p)), this.add(o, "setProperty", f, h, r, n, 0, 0, l), s.push(l), O.push(l, 0, o[l]);
        else if (d !== "undefined") {
          if (u && l in u ? (f = typeof u[l] == "function" ? u[l].call(i, r, t, n) : u[l], Y(f) && ~f.indexOf("random(") && (f = fe(f)), G(f + "") || f === "auto" || (f += nt.units[l] || G(gt(t, l)) || ""), (f + "").charAt(1) === "=" && (f = gt(t, l))) : f = gt(t, l), c = parseFloat(f), v = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), v && (h = h.substr(2)), _ = parseFloat(h), l in ct && (l === "autoAlpha" && (c === 1 && gt(t, "visibility") === "hidden" && _ && (c = 0), O.push("visibility", 0, o.visibility), wt(this, o, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), l !== "scale" && l !== "transform" && (l = ct[l], ~l.indexOf(",") && (l = l.split(",")[0]))), w = l in vt, w) {
            if (this.styles.save(l), T = h, d === "string" && h.substring(0, 6) === "var(--") {
              if (h = rt(t, h.substring(4, h.indexOf(")"))), h.substring(0, 5) === "calc(") {
                var P = t.style.perspective;
                t.style.perspective = h, h = rt(t, "perspective"), P ? t.style.perspective = P : kt(t, "perspective");
              }
              _ = parseFloat(h);
            }
            if (x || (g = t._gsap, g.renderTransform && !e.parseTransform || ce(t, e.parseTransform), b = e.smoothOrigin !== !1 && g.smooth, x = this._pt = new Z(this._pt, o, I, 0, 1, g.renderTransform, g, 0, -1), x.dep = 1), l === "scale")
              this._pt = new Z(this._pt, g, "scaleY", g.scaleY, (v ? qt(g.scaleY, v + _) : _) - g.scaleY || 0, Qe), this._pt.u = 0, s.push("scaleY", l), l += "X";
            else if (l === "transformOrigin") {
              O.push(j, 0, o[j]), h = $n(h), g.svg ? Je(t, h, 0, b, 0, this) : (y = parseFloat(h.split(" ")[2]) || 0, y !== g.zOrigin && wt(this, g, "zOrigin", g.zOrigin, y), wt(this, o, l, ke(f), ke(h)));
              continue;
            } else if (l === "svgOrigin") {
              Je(t, h, 1, b, 0, this);
              continue;
            } else if (l in Rr) {
              Jn(this, g, l, c, v ? qt(c, v + h) : h);
              continue;
            } else if (l === "smoothOrigin") {
              wt(this, g, "smooth", g.smooth, h);
              continue;
            } else if (l === "force3D") {
              g[l] = h;
              continue;
            } else if (l === "transform") {
              ts(this, h, t);
              continue;
            }
          } else l in o || (l = jt(l) || l);
          if (w || (_ || _ === 0) && (c || c === 0) && !Fn.test(h) && l in o)
            p = (f + "").substr((c + "").length), _ || (_ = 0), y = G(h) || (l in nt.units ? nt.units[l] : p), p !== y && (c = Pt(t, l, f, y)), this._pt = new Z(this._pt, w ? g : o, l, c, (v ? qt(c, v + _) : _) - c, !w && (y === "px" || l === "zIndex") && e.autoRound !== !1 ? Nn : Qe), this._pt.u = y || 0, w && T !== h ? (this._pt.b = f, this._pt.e = T, this._pt.r = Ln) : p !== y && y !== "%" && (this._pt.b = f, this._pt.r = In);
          else if (l in o)
            Kn.call(this, t, l, f, v ? v + h : h);
          else if (l in t)
            this.add(t, l, f || t[l], v ? v + h : h, r, n);
          else if (l !== "parseTransform") {
            ni(l, h);
            continue;
          }
          w || (l in o ? O.push(l, 0, o[l]) : typeof t[l] == "function" ? O.push(l, 2, t[l]()) : O.push(l, 1, f || t[l])), s.push(l);
        }
      }
    S && br(this);
  },
  render: function(t, e) {
    if (e.tween._time || !pi())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: gt,
  aliases: ct,
  getSetter: function(t, e, i) {
    var r = ct[e];
    return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== j && (t._gsap.x || gt(t, "x")) ? i && Ci === i ? e === "scale" ? Wn : Vn : (Ci = i || {}) && (e === "scale" ? Yn : qn) : t.style && !ei(t.style[e]) ? Bn : ~e.indexOf("-") ? Un : _i(t, e);
  },
  core: {
    _removeProperty: kt,
    _getMatrix: gi
  }
};
J.utils.checkPrefix = jt;
J.core.getStyleSaver = Cr;
(function(a, t, e, i) {
  var r = Q(a + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  Q(t, function(n) {
    nt.units[n] = "deg", Rr[n] = 1;
  }), ct[r[13]] = a + "," + t, Q(i, function(n) {
    var s = n.split(":");
    ct[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  nt.units[a] = "px";
});
J.registerPlugin(zr);
var Ft = J.registerPlugin(zr) || J;
Ft.core.Tween;
const es = 700, Li = 200, is = 1.5, rs = 1, ns = 0.75, ss = 0.5, os = 0.075, as = 0.05, us = 0.35, Ne = "data-wf-lib-svg-hover", Be = /* @__PURE__ */ new WeakMap();
function fs(a) {
  const t = a.textContent.trim().split(/\s+/).filter(Boolean);
  a.replaceChildren();
  const e = [];
  return t.forEach((i, r) => {
    r > 0 && a.appendChild(document.createTextNode(" "));
    const n = document.createElement("span");
    n.className = "wf-lib-word-mask";
    const s = document.createElement("span");
    s.className = "wf-lib-svg-hover-word", s.textContent = i, n.appendChild(s), a.appendChild(n), e.push(s);
  }), e;
}
function hs(a) {
  var t;
  return !a || a.nodeType !== 1 ? [] : (t = a.matches) != null && t.call(a, "[data-svg-hover-card]") ? [a] : [...a.querySelectorAll("[data-svg-hover-card]")];
}
function ls(a) {
  const e = a.querySelector("[data-svg-hover-paths]") ?? a, i = e.querySelectorAll(".svg-stroke path");
  return i.length > 0 ? [...i] : [...e.querySelectorAll("svg path")];
}
function _s(a) {
  var e;
  typeof a.getBoundingClientRect == "function" && a.getBoundingClientRect();
  const t = ((e = a.getTotalLength) == null ? void 0 : e.call(a)) ?? 0;
  return Number.isFinite(t) && t > 0 ? t : 0;
}
function cs(a) {
  const t = a.getAttribute("stroke-width") ?? a.getAttribute("strokeWidth") ?? String(Li), e = parseFloat(String(t), 10);
  return Number.isFinite(e) && e > 0 ? e : Li;
}
function ds(a, t = {}) {
  const e = t.strokeWidthHover ?? es, i = t.durationStrokeIn ?? is, r = t.durationStrokeOut ?? rs, n = t.durationWordsIn ?? ns, s = t.durationWordsOut ?? ss, o = Be.get(a);
  o && o();
  const u = hs(a), f = [];
  if (u.length === 0)
    return { destroy() {
    } };
  u.forEach((_) => {
    if (_.getAttribute(Ne) === "1") return;
    const c = ls(_), d = _.querySelector("[data-svg-hover-title]");
    if (!d) return;
    const m = fs(d);
    Ft.set(m, { yPercent: 100 });
    const l = c.map((x) => {
      x.style.strokeDasharray = "", x.style.strokeDashoffset = "";
      const g = _s(x);
      if (g <= 0) return null;
      const b = cs(x);
      return Ft.set(x, {
        attr: {
          "stroke-dasharray": g,
          "stroke-dashoffset": g,
          "stroke-width": b
        }
      }), { path: x, length: g, baseStrokeWidth: b };
    }).filter(Boolean);
    let p;
    const y = () => {
      p && p.kill(), p = Ft.timeline(), l.forEach(({ path: x, length: g }) => {
        Ft.set(x, {
          attr: {
            "stroke-dasharray": g,
            "stroke-dashoffset": g
          }
        }), p.to(
          x,
          {
            attr: {
              "stroke-dashoffset": 0,
              "stroke-width": e
            },
            duration: i,
            ease: "power2.out"
          },
          0
        );
      }), p.to(
        m,
        {
          yPercent: 0,
          duration: n,
          ease: "power3.out",
          stagger: os
        },
        us
      );
    }, v = () => {
      p && p.kill(), p = Ft.timeline(), l.forEach(({ path: x, length: g, baseStrokeWidth: b }) => {
        p.to(
          x,
          {
            attr: {
              "stroke-dashoffset": g,
              "stroke-width": b
            },
            duration: r,
            ease: "power2.out"
          },
          0
        );
      }), p.to(
        m,
        {
          yPercent: 100,
          duration: s,
          ease: "power3.out",
          stagger: { each: as, from: "end" }
        },
        0
      );
    };
    _.addEventListener("mouseenter", y), _.addEventListener("mouseleave", v), _.addEventListener("focus", y), _.addEventListener("blur", v), _.setAttribute(Ne, "1");
    const w = l.map((x) => x.path);
    f.push(() => {
      p && p.kill(), Ft.killTweensOf([...m, ...w]), _.removeEventListener("mouseenter", y), _.removeEventListener("mouseleave", v), _.removeEventListener("focus", y), _.removeEventListener("blur", v), _.removeAttribute(Ne);
    });
  });
  const h = () => {
    for (let _ = f.length - 1; _ >= 0; _--) f[_]();
    f.length = 0, Be.delete(a);
  };
  return Be.set(a, h), { destroy: h };
}
if (typeof window < "u") {
  const a = () => document.querySelectorAll('[data-component="svg-image-hover"]').forEach((t) => ds(t));
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
export {
  ds as initSvgImageHover
};

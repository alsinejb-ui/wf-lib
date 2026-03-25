function tr(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Vo(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var wt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, di = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Es, Le, ae, Dt = 1e8, re = 1 / Dt, as = Math.PI * 2, _u = as / 4, du = 0, Uo = Math.sqrt, pu = Math.cos, gu = Math.sin, Ae = function(e) {
  return typeof e == "string";
}, pe = function(e) {
  return typeof e == "function";
}, or = function(e) {
  return typeof e == "number";
}, As = function(e) {
  return typeof e > "u";
}, Kt = function(e) {
  return typeof e == "object";
}, at = function(e) {
  return e !== !1;
}, Rs = function() {
  return typeof window < "u";
}, un = function(e) {
  return pe(e) || Ae(e);
}, $o = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, He = Array.isArray, mu = /random\([^)]+\)/g, yu = /,\s*/g, no = /(?:-?\.?\d|\.)+/gi, Wo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, si = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Gn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Go = /[+-]=-?[.\d]+/, vu = /[^,'"\[\]\s]+/gi, xu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe, Ut, us, Fs, St = {}, Dn = {}, Ho, qo = function(e) {
  return (Dn = pi(e, St)) && ct;
}, zs = function(e, r) {
  return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()");
}, qi = function(e, r) {
  return !r && console.warn(e);
}, Ko = function(e, r) {
  return e && (St[e] = r) && Dn && (Dn[e] = r) || St;
}, Ki = function() {
  return 0;
}, Tu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Tn = {
  suppressEvents: !0,
  kill: !1
}, bu = {
  suppressEvents: !0
}, Is = {}, xr = [], ls = {}, Zo, mt = {}, Hn = {}, so = 30, bn = [], Ls = "", Ns = function(e) {
  var r = e[0], t, i;
  if (Kt(r) || pe(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
    for (i = bn.length; i-- && !bn[i].targetTest(r); )
      ;
    t = bn[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new xa(e[i], t))) || e.splice(i, 1);
  return e;
}, Yr = function(e) {
  return e._gsap || Ns(Et(e))[0]._gsap;
}, Qo = function(e, r, t) {
  return (t = e[r]) && pe(t) ? e[r]() : As(t) && e.getAttribute && e.getAttribute(r) || t;
}, ut = function(e, r) {
  return (e = e.split(",")).forEach(r) || e;
}, ve = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, le = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ui = function(e, r) {
  var t = r.charAt(0), i = parseFloat(r.substr(2));
  return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i;
}, wu = function(e, r) {
  for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; )
    ;
  return i < t;
}, En = function() {
  var e = xr.length, r = xr.slice(0), t, i;
  for (ls = {}, xr.length = 0, t = 0; t < e; t++)
    i = r[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Bs = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Jo = function(e, r, t, i) {
  xr.length && !Le && En(), e.render(r, t, !!(Le && r < 0 && Bs(e))), xr.length && !Le && En();
}, jo = function(e) {
  var r = parseFloat(e);
  return (r || r === 0) && (e + "").match(vu).length < 2 ? r : Ae(e) ? e.trim() : e;
}, ea = function(e) {
  return e;
}, Ct = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, Su = function(e) {
  return function(r, t) {
    for (var i in t)
      i in r || i === "duration" && e || i === "ease" || (r[i] = t[i]);
  };
}, pi = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, oo = function a(e, r) {
  for (var t in r)
    t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Kt(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
  return e;
}, An = function(e, r) {
  var t = {}, i;
  for (i in e)
    i in r || (t[i] = e[i]);
  return t;
}, zi = function(e) {
  var r = e.parent || fe, t = e.keyframes ? Su(He(e.keyframes)) : Ct;
  if (at(e.inherit))
    for (; r; )
      t(e, r.vars.defaults), r = r.parent || r._dp;
  return e;
}, Cu = function(e, r) {
  for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; )
    ;
  return t < 0;
}, ta = function(e, r, t, i, n) {
  var s = e[i], o;
  if (n)
    for (o = r[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = s, r.parent = r._dp = e, r;
}, Xn = function(e, r, t, i) {
  t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
  var n = r._prev, s = r._next;
  n ? n._next = s : e[t] === r && (e[t] = s), s ? s._prev = n : e[i] === r && (e[i] = n), r._next = r._prev = r.parent = null;
}, wr = function(e, r) {
  e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Xr = function(e, r) {
  if (e && (!r || r._end > e._dur || r._start < 0))
    for (var t = e; t; )
      t._dirty = 1, t = t.parent;
  return e;
}, Pu = function(e) {
  for (var r = e.parent; r && r.parent; )
    r._dirty = 1, r.totalDuration(), r = r.parent;
  return e;
}, fs = function(e, r, t, i) {
  return e._startAt && (Le ? e._startAt.revert(Tn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i));
}, ku = function a(e) {
  return !e || e._ts && a(e.parent);
}, ao = function(e) {
  return e._repeat ? gi(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, gi = function(e, r) {
  var t = Math.floor(e = le(e / r));
  return e && t === e ? t - 1 : t;
}, Rn = function(e, r) {
  return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
}, Vn = function(e) {
  return e._end = le(e._start + (e._tDur / Math.abs(e._ts || e._rts || re) || 0));
}, Un = function(e, r) {
  var t = e._dp;
  return t && t.smoothChildTiming && e._ts && (e._start = le(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), Vn(e), t._dirty || Xr(t, e)), e;
}, ra = function(e, r) {
  var t;
  if ((r._time || !r._dur && r._initted || r._start < e._time && (r._dur || !r.add)) && (t = Rn(e.rawTime(), r), (!r._dur || nn(0, r.totalDuration(), t) - r._tTime > re) && r.render(t, !0)), Xr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (t = e; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    e._zTime = -re;
  }
}, Wt = function(e, r, t, i) {
  return r.parent && wr(r), r._start = le((or(t) ? t : t || e !== fe ? kt(e, t, r) : e._time) + r._delay), r._end = le(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), ta(e, r, "_first", "_last", e._sort ? "_start" : 0), cs(r) || (e._recent = r), i || ra(e, r), e._ts < 0 && Un(e, e._tTime), e;
}, ia = function(e, r) {
  return (St.ScrollTrigger || zs("scrollTrigger", r)) && St.ScrollTrigger.create(r, e);
}, na = function(e, r, t, i, n) {
  if (Xs(e, r, n), !e._initted)
    return 1;
  if (!t && e._pt && !Le && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Zo !== vt.frame)
    return xr.push(e), e._lazy = [n, i], 1;
}, Ou = function a(e) {
  var r = e.parent;
  return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
}, cs = function(e) {
  var r = e.data;
  return r === "isFromStart" || r === "isStart";
}, Mu = function(e, r, t, i) {
  var n = e.ratio, s = r < 0 || !r && (!e._start && Ou(e) && !(!e._initted && cs(e)) || (e._ts < 0 || e._dp._ts < 0) && !cs(e)) ? 0 : 1, o = e._rDelay, u = 0, l, f, _;
  if (o && e._repeat && (u = nn(0, e._tDur, r), f = gi(u, o), e._yoyo && f & 1 && (s = 1 - s), f !== gi(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Le || i || e._zTime === re || !r && e._zTime) {
    if (!e._initted && na(e, r, i, t, u))
      return;
    for (_ = e._zTime, e._zTime = r || (t ? re : 0), t || (t = r && !_), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, l = e._pt; l; )
      l.r(s, l.d), l = l._next;
    r < 0 && fs(e, r, t, !0), e._onUpdate && !t && Tt(e, "onUpdate"), u && e._repeat && !t && e.parent && Tt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && wr(e, 1), !t && !Le && (Tt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = r);
}, Du = function(e, r, t) {
  var i;
  if (t > r)
    for (i = e._first; i && i._start <= t; ) {
      if (i.data === "isPause" && i._start > r)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= t; ) {
      if (i.data === "isPause" && i._start < r)
        return i;
      i = i._prev;
    }
}, mi = function(e, r, t, i) {
  var n = e._repeat, s = le(r) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : le(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Un(e, e._tTime = e._tDur * o), e.parent && Vn(e), t || Xr(e.parent, e), e;
}, uo = function(e) {
  return e instanceof it ? Xr(e) : mi(e, e._dur);
}, Eu = {
  _start: 0,
  endTime: Ki,
  totalDuration: Ki
}, kt = function a(e, r, t) {
  var i = e.labels, n = e._recent || Eu, s = e.duration() >= Dt ? n.endTime(!1) : e._dur, o, u, l;
  return Ae(r) && (isNaN(r) || r in i) ? (u = r.charAt(0), l = r.substr(-1) === "%", o = r.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (r = r.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (o < 0 ? n : t).totalDuration() / 100 : 1)) : o < 0 ? (r in i || (i[r] = s), i[r]) : (u = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), l && t && (u = u / 100 * (He(t) ? t[0] : t).totalDuration()), o > 1 ? a(e, r.substr(0, o - 1), t) + u : s + u)) : r == null ? s : +r;
}, Ii = function(e, r, t) {
  var i = or(r[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = r[n], o, u;
  if (i && (s.duration = r[1]), s.parent = t, e) {
    for (o = s, u = t; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = at(u.vars.inherit) && u.parent;
    s.immediateRender = at(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1];
  }
  return new Se(r[0], s, r[n + 1]);
}, kr = function(e, r) {
  return e || e === 0 ? r(e) : r;
}, nn = function(e, r, t) {
  return t < e ? e : t > r ? r : t;
}, We = function(e, r) {
  return !Ae(e) || !(r = xu.exec(e)) ? "" : r[1];
}, Au = function(e, r, t) {
  return kr(t, function(i) {
    return nn(e, r, i);
  });
}, hs = [].slice, sa = function(e, r) {
  return e && Kt(e) && "length" in e && (!r && !e.length || e.length - 1 in e && Kt(e[0])) && !e.nodeType && e !== Ut;
}, Ru = function(e, r, t) {
  return t === void 0 && (t = []), e.forEach(function(i) {
    var n;
    return Ae(i) && !r || sa(i, 1) ? (n = t).push.apply(n, Et(i)) : t.push(i);
  }) || t;
}, Et = function(e, r, t) {
  return ae && !r && ae.selector ? ae.selector(e) : Ae(e) && !t && (us || !yi()) ? hs.call((r || Fs).querySelectorAll(e), 0) : He(e) ? Ru(e, t) : sa(e) ? hs.call(e, 0) : e ? [e] : [];
}, _s = function(e) {
  return e = Et(e)[0] || qi("Invalid scope") || {}, function(r) {
    var t = e.current || e.nativeElement || e;
    return Et(r, t.querySelectorAll ? t : t === e ? qi("Invalid scope") || Fs.createElement("div") : e);
  };
}, oa = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, aa = function(e) {
  if (pe(e))
    return e;
  var r = Kt(e) ? e : {
    each: e
  }, t = Vr(r.ease), i = r.from || 0, n = parseFloat(r.base) || 0, s = {}, o = i > 0 && i < 1, u = isNaN(i) || o, l = r.axis, f = i, _ = i;
  return Ae(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && u && (f = i[0], _ = i[1]), function(d, c, p) {
    var h = (p || r).length, m = s[h], b, T, S, v, w, P, x, O, C;
    if (!m) {
      if (C = r.grid === "auto" ? 0 : (r.grid || [1, Dt])[1], !C) {
        for (x = -Dt; x < (x = p[C++].getBoundingClientRect().left) && C < h; )
          ;
        C < h && C--;
      }
      for (m = s[h] = [], b = u ? Math.min(C, h) * f - 0.5 : i % C, T = C === Dt ? 0 : u ? h * _ / C - 0.5 : i / C | 0, x = 0, O = Dt, P = 0; P < h; P++)
        S = P % C - b, v = T - (P / C | 0), m[P] = w = l ? Math.abs(l === "y" ? v : S) : Uo(S * S + v * v), w > x && (x = w), w < O && (O = w);
      i === "random" && oa(m), m.max = x - O, m.min = O, m.v = h = (parseFloat(r.amount) || parseFloat(r.each) * (C > h ? h - 1 : l ? l === "y" ? h / C : C : Math.max(C, h / C)) || 0) * (i === "edges" ? -1 : 1), m.b = h < 0 ? n - h : n, m.u = We(r.amount || r.each) || 0, t = t && h < 0 ? ma(t) : t;
    }
    return h = (m[d] - m.min) / m.max || 0, le(m.b + (t ? t(h) : h) * m.v) + m.u;
  };
}, ds = function(e) {
  var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(t) {
    var i = le(Math.round(parseFloat(t) / e) * e * r);
    return (i - i % 1) / r + (or(t) ? 0 : We(t));
  };
}, ua = function(e, r) {
  var t = He(e), i, n;
  return !t && Kt(e) && (i = t = e.radius || Dt, e.values ? (e = Et(e.values), (n = !or(e[0])) && (i *= i)) : e = ds(e.increment)), kr(r, t ? pe(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = Dt, f = 0, _ = e.length, d, c; _--; )
      n ? (d = e[_].x - o, c = e[_].y - u, d = d * d + c * c) : d = Math.abs(e[_] - o), d < l && (l = d, f = _);
    return f = !i || l <= i ? e[f] : s, n || f === s || or(s) ? f : f + We(s);
  } : ds(e));
}, la = function(e, r, t, i) {
  return kr(He(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
    return He(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) * t * i) / i;
  });
}, Fu = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(i) {
    return r.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, zu = function(e, r) {
  return function(t) {
    return e(parseFloat(t)) + (r || We(t));
  };
}, Iu = function(e, r, t) {
  return ca(e, r, 0, 1, t);
}, fa = function(e, r, t) {
  return kr(t, function(i) {
    return e[~~r(i)];
  });
}, Lu = function a(e, r, t) {
  var i = r - e;
  return He(e) ? fa(e, a(0, e.length), r) : kr(t, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, Nu = function a(e, r, t) {
  var i = r - e, n = i * 2;
  return He(e) ? fa(e, a(0, e.length - 1), r) : kr(t, function(s) {
    return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s);
  });
}, Zi = function(e) {
  return e.replace(mu, function(r) {
    var t = r.indexOf("[") + 1, i = r.substring(t || 7, t ? r.indexOf("]") : r.length - 1).split(yu);
    return la(t ? i : +i[0], t ? 0 : +i[1], +i[2] || 1e-5);
  });
}, ca = function(e, r, t, i, n) {
  var s = r - e, o = i - t;
  return kr(n, function(u) {
    return t + ((u - e) / s * o || 0);
  });
}, Bu = function a(e, r, t, i) {
  var n = isNaN(e + r) ? 0 : function(c) {
    return (1 - c) * e + c * r;
  };
  if (!n) {
    var s = Ae(e), o = {}, u, l, f, _, d;
    if (t === !0 && (i = 1) && (t = null), s)
      e = {
        p: e
      }, r = {
        p: r
      };
    else if (He(e) && !He(r)) {
      for (f = [], _ = e.length, d = _ - 2, l = 1; l < _; l++)
        f.push(a(e[l - 1], e[l]));
      _--, n = function(p) {
        p *= _;
        var h = Math.min(d, ~~p);
        return f[h](p - h);
      }, t = r;
    } else i || (e = pi(He(e) ? [] : {}, e));
    if (!f) {
      for (u in r)
        Ys.call(o, e, u, "get", r[u]);
      n = function(p) {
        return $s(p, o) || (s ? e.p : e);
      };
    }
  }
  return kr(t, n);
}, lo = function(e, r, t) {
  var i = e.labels, n = Dt, s, o, u;
  for (s in i)
    o = i[s] - r, o < 0 == !!t && o && n > (o = Math.abs(o)) && (u = s, n = o);
  return u;
}, Tt = function(e, r, t) {
  var i = e.vars, n = i[r], s = ae, o = e._ctx, u, l, f;
  if (n)
    return u = i[r + "Params"], l = i.callbackScope || e, t && xr.length && En(), o && (ae = o), f = u ? n.apply(l, u) : n.call(l), ae = s, f;
}, Oi = function(e) {
  return wr(e), e.scrollTrigger && e.scrollTrigger.kill(!!Le), e.progress() < 1 && Tt(e, "onInterrupt"), e;
}, oi, ha = [], _a = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Rs() || e.headless) {
      var r = e.name, t = pe(e), i = r && !t && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Ki,
        render: $s,
        add: Ys,
        kill: tl,
        modifier: el,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Us,
        aliases: {},
        register: 0
      };
      if (yi(), e !== i) {
        if (mt[r])
          return;
        Ct(i, Ct(An(e, n), s)), pi(i.prototype, pi(n, An(e, s))), mt[i.prop = r] = i, e.targetTest && (bn.push(i), Is[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
      }
      Ko(r, i), e.register && e.register(ct, i, lt);
    } else
      ha.push(e);
}, te = 255, Mi = {
  aqua: [0, te, te],
  lime: [0, te, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, te],
  navy: [0, 0, 128],
  white: [te, te, te],
  olive: [128, 128, 0],
  yellow: [te, te, 0],
  orange: [te, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [te, 0, 0],
  pink: [te, 192, 203],
  cyan: [0, te, te],
  transparent: [te, te, te, 0]
}, qn = function(e, r, t) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * te + 0.5 | 0;
}, da = function(e, r, t) {
  var i = e ? or(e) ? [e >> 16, e >> 8 & te, e & te] : 0 : Mi.black, n, s, o, u, l, f, _, d, c, p;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Mi[e])
      i = Mi[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & te, i & te, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & te, e & te];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = p = e.match(no), !r)
        u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = qn(u + 1 / 3, n, s), i[1] = qn(u, n, s), i[2] = qn(u - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(Wo), t && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(no) || Mi.transparent;
    i = i.map(Number);
  }
  return r && !p && (n = i[0] / te, s = i[1] / te, o = i[2] / te, _ = Math.max(n, s, o), d = Math.min(n, s, o), f = (_ + d) / 2, _ === d ? u = l = 0 : (c = _ - d, l = f > 0.5 ? c / (2 - _ - d) : c / (_ + d), u = _ === n ? (s - o) / c + (s < o ? 6 : 0) : _ === s ? (o - n) / c + 2 : (n - s) / c + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), t && i.length < 4 && (i[3] = 1), i;
}, pa = function(e) {
  var r = [], t = [], i = -1;
  return e.split(Tr).forEach(function(n) {
    var s = n.match(si) || [];
    r.push.apply(r, s), t.push(i += s.length + 1);
  }), r.c = t, r;
}, fo = function(e, r, t) {
  var i = "", n = (e + i).match(Tr), s = r ? "hsla(" : "rgba(", o = 0, u, l, f, _;
  if (!n)
    return e;
  if (n = n.map(function(d) {
    return (d = da(d, r, 1)) && s + (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), t && (f = pa(e), u = t.c, u.join(i) !== f.c.join(i)))
    for (l = e.replace(Tr, "1").split(si), _ = l.length - 1; o < _; o++)
      i += l[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
  if (!l)
    for (l = e.split(Tr), _ = l.length - 1; o < _; o++)
      i += l[o] + n[o];
  return i + l[_];
}, Tr = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Mi)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
}(), Yu = /hsl[a]?\(/, ga = function(e) {
  var r = e.join(" "), t;
  if (Tr.lastIndex = 0, Tr.test(r))
    return t = Yu.test(r), e[1] = fo(e[1], t), e[0] = fo(e[0], t, pa(e[1])), !0;
}, Qi, vt = function() {
  var a = Date.now, e = 500, r = 33, t = a(), i = t, n = 1e3 / 240, s = n, o = [], u, l, f, _, d, c, p = function h(m) {
    var b = a() - i, T = m === !0, S, v, w, P;
    if ((b > e || b < 0) && (t += b - r), i += b, w = i - t, S = w - s, (S > 0 || T) && (P = ++_.frame, d = w - _.time * 1e3, _.time = w = w / 1e3, s += S + (S >= n ? 4 : n - S), v = 1), T || (u = l(h)), v)
      for (c = 0; c < o.length; c++)
        o[c](w, d, P, m);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return d / (1e3 / (m || 60));
    },
    wake: function() {
      Ho && (!us && Rs() && (Ut = us = window, Fs = Ut.document || {}, St.gsap = ct, (Ut.gsapVersions || (Ut.gsapVersions = [])).push(ct.version), qo(Dn || Ut.GreenSockGlobals || !Ut.gsap && Ut || {}), ha.forEach(_a)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), l = f || function(m) {
        return setTimeout(m, s - _.time * 1e3 + 1 | 0);
      }, Qi = 1, p(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), Qi = 0, l = Ki;
    },
    lagSmoothing: function(m, b) {
      e = m || 1 / 0, r = Math.min(b || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = _.time * 1e3 + n;
    },
    add: function(m, b, T) {
      var S = b ? function(v, w, P, x) {
        m(v, w, P, x), _.remove(S);
      } : m;
      return _.remove(m), o[T ? "unshift" : "push"](S), yi(), S;
    },
    remove: function(m, b) {
      ~(b = o.indexOf(m)) && o.splice(b, 1) && c >= b && c--;
    },
    _listeners: o
  }, _;
}(), yi = function() {
  return !Qi && vt.wake();
}, q = {}, Xu = /^[\d.\-M][\d.\-,\s]/, Vu = /["']/g, Uu = function(e) {
  for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, o, u, l; n < s; n++)
    u = t[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), r[i] = isNaN(l) ? l.replace(Vu, "").trim() : +l, i = u.substr(o + 1).trim();
  return r;
}, $u = function(e) {
  var r = e.indexOf("(") + 1, t = e.indexOf(")"), i = e.indexOf("(", r);
  return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t);
}, Wu = function(e) {
  var r = (e + "").split("("), t = q[r[0]];
  return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Uu(r[1])] : $u(e).split(",").map(jo)) : q._CE && Xu.test(e) ? q._CE("", e) : t;
}, ma = function(e) {
  return function(r) {
    return 1 - e(1 - r);
  };
}, ya = function a(e, r) {
  for (var t = e._first, i; t; )
    t instanceof it ? a(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? a(t.timeline, r) : (i = t._ease, t._ease = t._yEase, t._yEase = i, t._yoyo = r)), t = t._next;
}, Vr = function(e, r) {
  return e && (pe(e) ? e : q[e] || Wu(e)) || r;
}, Zr = function(e, r, t, i) {
  t === void 0 && (t = function(u) {
    return 1 - r(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: r,
    easeOut: t,
    easeInOut: i
  }, s;
  return ut(e, function(o) {
    q[o] = St[o] = n, q[s = o.toLowerCase()] = t;
    for (var u in n)
      q[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = q[o + "." + u] = n[u];
  }), n;
}, va = function(e) {
  return function(r) {
    return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2;
  };
}, Kn = function a(e, r, t) {
  var i = r >= 1 ? r : 1, n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1), s = n / as * (Math.asin(1 / i) || 0), o = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * gu((f - s) * n) + 1;
  }, u = e === "out" ? o : e === "in" ? function(l) {
    return 1 - o(1 - l);
  } : va(o);
  return n = as / n, u.config = function(l, f) {
    return a(e, l, f);
  }, u;
}, Zn = function a(e, r) {
  r === void 0 && (r = 1.70158);
  var t = function(s) {
    return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
  }, i = e === "out" ? t : e === "in" ? function(n) {
    return 1 - t(1 - n);
  } : va(t);
  return i.config = function(n) {
    return a(e, n);
  }, i;
};
ut("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
  var r = e < 5 ? e + 1 : e;
  Zr(a + ",Power" + (r - 1), e ? function(t) {
    return Math.pow(t, r);
  } : function(t) {
    return t;
  }, function(t) {
    return 1 - Math.pow(1 - t, r);
  }, function(t) {
    return t < 0.5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2;
  });
});
q.Linear.easeNone = q.none = q.Linear.easeIn;
Zr("Elastic", Kn("in"), Kn("out"), Kn());
(function(a, e) {
  var r = 1 / e, t = 2 * r, i = 2.5 * r, n = function(o) {
    return o < r ? a * o * o : o < t ? a * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? a * (o -= 2.25 / e) * o + 0.9375 : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  Zr("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Zr("Expo", function(a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Zr("Circ", function(a) {
  return -(Uo(1 - a * a) - 1);
});
Zr("Sine", function(a) {
  return a === 1 ? 1 : -pu(a * _u) + 1;
});
Zr("Back", Zn("in"), Zn("out"), Zn());
q.SteppedEase = q.steps = St.SteppedEase = {
  config: function(e, r) {
    e === void 0 && (e = 1);
    var t = 1 / e, i = e + (r ? 0 : 1), n = r ? 1 : 0, s = 1 - re;
    return function(o) {
      return ((i * nn(0, s, o) | 0) + n) * t;
    };
  }
};
di.ease = q["quad.out"];
ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Ls += a + "," + a + "Params,";
});
var xa = function(e, r) {
  this.id = du++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : Qo, this.set = r ? r.getSetter : Us;
}, Ji = /* @__PURE__ */ function() {
  function a(r) {
    this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, mi(this, +r.duration, 1, 1), this.data = r.data, ae && (this._ctx = ae, ae.data.push(this)), Qi || vt.wake();
  }
  var e = a.prototype;
  return e.delay = function(t) {
    return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, e.duration = function(t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(t) {
    return arguments.length ? (this._dirty = 0, mi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(t, i) {
    if (yi(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Un(this, t), !n._dp || n.parent || ra(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Wt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === re || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Jo(this, t, i)), this;
  }, e.time = function(t, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ao(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(t, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(t, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + ao(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(t, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? gi(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(t, i) {
    if (!arguments.length)
      return this._rts === -re ? 0 : this._rts;
    if (this._rts === t)
      return this;
    var n = this.parent && this._ts ? Rn(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -re ? 0 : this._rts, this.totalTime(nn(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), Vn(this), Pu(this);
  }, e.paused = function(t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (yi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== re && (this._tTime -= re)))), this) : this._ps;
  }, e.startTime = function(t) {
    if (arguments.length) {
      this._start = le(t);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Wt(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(t) {
    return this._start + (at(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(t) {
    var i = this.parent || this._dp;
    return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rn(i.rawTime(t), this) : this._tTime : this._tTime;
  }, e.revert = function(t) {
    t === void 0 && (t = bu);
    var i = Le;
    return Le = t, Bs(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), Le = i, this;
  }, e.globalTime = function(t) {
    for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t) : n;
  }, e.repeat = function(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, uo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(t) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = t, uo(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, e.seek = function(t, i) {
    return this.totalTime(kt(this, t), at(i));
  }, e.restart = function(t, i) {
    return this.play().totalTime(t ? -this._delay : 0, at(i)), this._dur || (this._zTime = -re), this;
  }, e.play = function(t, i) {
    return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(t, i) {
    return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(t, i) {
    return t != null && this.seek(t, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -re : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -re, this;
  }, e.isActive = function() {
    var t = this.parent || this._dp, i = this._start, n;
    return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - re);
  }, e.eventCallback = function(t, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[t] = i, n && (s[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete s[t], this) : s[t];
  }, e.then = function(t) {
    var i = this, n = i._prom;
    return new Promise(function(s) {
      var o = pe(t) ? t : ea, u = function() {
        var f = i.then;
        i.then = null, n && n(), pe(o) && (o = o(i)) && (o.then || o === i) && (i.then = f), s(o), i.then = f;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? u() : i._prom = u;
    });
  }, e.kill = function() {
    Oi(this);
  }, a;
}();
Ct(Ji.prototype, {
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
  _zTime: -re,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var it = /* @__PURE__ */ function(a) {
  Vo(e, a);
  function e(t, i) {
    var n;
    return t === void 0 && (t = {}), n = a.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = at(t.sortChildren), fe && Wt(t.parent || fe, tr(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && ia(tr(n), t.scrollTrigger), n;
  }
  var r = e.prototype;
  return r.to = function(i, n, s) {
    return Ii(0, arguments, this), this;
  }, r.from = function(i, n, s) {
    return Ii(1, arguments, this), this;
  }, r.fromTo = function(i, n, s, o) {
    return Ii(2, arguments, this), this;
  }, r.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, zi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Se(i, n, kt(this, s), 1), this;
  }, r.call = function(i, n, s) {
    return Wt(this, Se.delayedCall(0, i, n), s);
  }, r.staggerTo = function(i, n, s, o, u, l, f) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new Se(i, s, kt(this, u)), this;
  }, r.staggerFrom = function(i, n, s, o, u, l, f) {
    return s.runBackwards = 1, zi(s).immediateRender = at(s.immediateRender), this.staggerTo(i, n, s, o, u, l, f);
  }, r.staggerFromTo = function(i, n, s, o, u, l, f, _) {
    return o.startAt = s, zi(o).immediateRender = at(o.immediateRender), this.staggerTo(i, n, o, u, l, f, _);
  }, r.render = function(i, n, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : le(i), _ = this._zTime < 0 != i < 0 && (this._initted || !l), d, c, p, h, m, b, T, S, v, w, P, x;
    if (this !== fe && f > u && i >= 0 && (f = u), f !== this._tTime || s || _) {
      if (o !== this._time && l && (f += this._time - o, i += this._time - o), d = f, v = this._start, S = this._ts, b = !S, _ && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (P = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (d = le(f % m), f === u ? (h = this._repeat, d = l) : (w = le(f / m), h = ~~w, h && h === w && (d = l, h--), d > l && (d = l)), w = gi(this._tTime, m), !o && this._tTime && w !== h && this._tTime - w * m - this._dur <= 0 && (w = h), P && h & 1 && (d = l - d, x = 1), h !== w && !this._lock) {
          var O = P && w & 1, C = O === (P && h & 1);
          if (h < w && (O = !O), o = O ? 0 : f % l ? l : f, this._lock = 1, this.render(o || (x ? 0 : le(h * m)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && Tt(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, w = h), o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, C && (this._lock = 2, o = O ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          ya(this, x);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (T = Du(this, le(o), le(d)), T && (f -= d - (d = T._start))), this._tTime = f, this._time = d, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && f && l && !n && !w && (Tt(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= o && i >= 0)
        for (c = this._first; c; ) {
          if (p = c._next, (c._act || d >= c._start) && c._ts && T !== c) {
            if (c.parent !== this)
              return this.render(i, n, s);
            if (c.render(c._ts > 0 ? (d - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (d - c._start) * c._ts, n, s), d !== this._time || !this._ts && !b) {
              T = 0, p && (f += this._zTime = -re);
              break;
            }
          }
          c = p;
        }
      else {
        c = this._last;
        for (var k = i < 0 ? i : d; c; ) {
          if (p = c._prev, (c._act || k <= c._end) && c._ts && T !== c) {
            if (c.parent !== this)
              return this.render(i, n, s);
            if (c.render(c._ts > 0 ? (k - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (k - c._start) * c._ts, n, s || Le && Bs(c)), d !== this._time || !this._ts && !b) {
              T = 0, p && (f += this._zTime = k ? -re : re);
              break;
            }
          }
          c = p;
        }
      }
      if (T && !n && (this.pause(), T.render(d >= o ? 0 : -re)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = v, Vn(this), this.render(i, n, s);
      this._onUpdate && !n && Tt(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && o) && (v === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && wr(this, 1), !n && !(i < 0 && !o) && (f || o || !u) && (Tt(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, r.add = function(i, n) {
    var s = this;
    if (or(n) || (n = kt(this, n, i)), !(i instanceof Ji)) {
      if (He(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (Ae(i))
        return this.addLabel(i, n);
      if (pe(i))
        i = Se.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Wt(this, i, n) : this;
  }, r.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -Dt);
    for (var u = [], l = this._first; l; )
      l._start >= o && (l instanceof Se ? n && u.push(l) : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
    return u;
  }, r.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, r.remove = function(i) {
    return Ae(i) ? this.removeLabel(i) : pe(i) ? this.killTweensOf(i) : (i.parent === this && Xn(this, i), i === this._recent && (this._recent = this._last), Xr(this));
  }, r.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = le(vt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, r.addLabel = function(i, n) {
    return this.labels[i] = kt(this, n), this;
  }, r.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, r.addPause = function(i, n, s) {
    var o = Se.delayedCall(0, n || Ki, s);
    return o.data = "isPause", this._hasPause = 1, Wt(this, o, kt(this, i));
  }, r.removePause = function(i) {
    var n = this._first;
    for (i = kt(this, i); n; )
      n._start === i && n.data === "isPause" && wr(n), n = n._next;
  }, r.killTweensOf = function(i, n, s) {
    for (var o = this.getTweensOf(i, s), u = o.length; u--; )
      pr !== o[u] && o[u].kill(i, n);
    return this;
  }, r.getTweensOf = function(i, n) {
    for (var s = [], o = Et(i), u = this._first, l = or(n), f; u; )
      u instanceof Se ? wu(u._targets, o) && (l ? (!pr || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(o, n)).length && s.push.apply(s, f), u = u._next;
    return s;
  }, r.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = kt(s, i), u = n, l = u.startAt, f = u.onStart, _ = u.onStartParams, d = u.immediateRender, c, p = Se.to(s, Ct({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || re,
      onStart: function() {
        if (s.pause(), !c) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          p._dur !== m && mi(p, m, 0, 1).render(p._time, !0, !0), c = 1;
        }
        f && f.apply(p, _ || []);
      }
    }, n));
    return d ? p.render(0) : p;
  }, r.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, Ct({
      startAt: {
        time: kt(this, i)
      }
    }, s));
  }, r.recent = function() {
    return this._recent;
  }, r.nextLabel = function(i) {
    return i === void 0 && (i = this._time), lo(this, kt(this, i));
  }, r.previousLabel = function(i) {
    return i === void 0 && (i = this._time), lo(this, kt(this, i), 1);
  }, r.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + re);
  }, r.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    var o = this._first, u = this.labels, l;
    for (i = le(i); o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in u)
        u[l] >= s && (u[l] += i);
    return Xr(this);
  }, r.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return a.prototype.invalidate.call(this, i);
  }, r.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Xr(this);
  }, r.totalDuration = function(i) {
    var n = 0, s = this, o = s._last, u = Dt, l, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), f = o._start, f > u && s._sort && o._ts && !s._lock ? (s._lock = 1, Wt(s, o, f - o._delay, 1)._lock = 0) : u = f, f < 0 && o._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += le(f / s._ts), s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = l;
      mi(s, s === fe && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (fe._ts && (Jo(fe, Rn(i, fe)), Zo = vt.frame), vt.frame >= so) {
      so += wt.autoSleep || 120;
      var n = fe._first;
      if ((!n || !n._ts) && wt.autoSleep && vt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || vt.sleep();
      }
    }
  }, e;
}(Ji);
Ct(it.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Gu = function(e, r, t, i, n, s, o) {
  var u = new lt(this._pt, e, r, 0, 1, Pa, null, n), l = 0, f = 0, _, d, c, p, h, m, b, T;
  for (u.b = t, u.e = i, t += "", i += "", (b = ~i.indexOf("random(")) && (i = Zi(i)), s && (T = [t, i], s(T, e, r), t = T[0], i = T[1]), d = t.match(Gn) || []; _ = Gn.exec(i); )
    p = _[0], h = i.substring(l, _.index), c ? c = (c + 1) % 5 : h.substr(-5) === "rgba(" && (c = 1), p !== d[f++] && (m = parseFloat(d[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || f === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ui(m, p) - m : parseFloat(p) - m,
      m: c && c < 4 ? Math.round : 0
    }, l = Gn.lastIndex);
  return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (Go.test(i) || b) && (u.e = 0), this._pt = u, u;
}, Ys = function(e, r, t, i, n, s, o, u, l, f) {
  pe(i) && (i = i(n || 0, e, s));
  var _ = e[r], d = t !== "get" ? t : pe(_) ? l ? e[r.indexOf("set") || !pe(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : _, c = pe(_) ? l ? Qu : Sa : Vs, p;
  if (Ae(i) && (~i.indexOf("random(") && (i = Zi(i)), i.charAt(1) === "=" && (p = ui(d, i) + (We(d) || 0), (p || p === 0) && (i = p))), !f || d !== i || ps)
    return !isNaN(d * i) && i !== "" ? (p = new lt(this._pt, e, r, +d || 0, i - (d || 0), typeof _ == "boolean" ? ju : Ca, 0, c), l && (p.fp = l), o && p.modifier(o, this, e), this._pt = p) : (!_ && !(r in e) && zs(r, i), Gu.call(this, e, r, d, i, c, u || wt.stringFilter, l));
}, Hu = function(e, r, t, i, n) {
  if (pe(e) && (e = Li(e, n, r, t, i)), !Kt(e) || e.style && e.nodeType || He(e) || $o(e))
    return Ae(e) ? Li(e, n, r, t, i) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Li(e[o], n, r, t, i);
  return s;
}, Ta = function(e, r, t, i, n, s) {
  var o, u, l, f;
  if (mt[e] && (o = new mt[e]()).init(n, o.rawVars ? r[e] : Hu(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = u = new lt(t._pt, n, e, 0, 1, o.render, o, 0, o.priority), t !== oi))
    for (l = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--; )
      l[o._props[f]] = u;
  return o;
}, pr, ps, Xs = function a(e, r, t) {
  var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, u = i.lazy, l = i.onUpdate, f = i.runBackwards, _ = i.yoyoEase, d = i.keyframes, c = i.autoRevert, p = e._dur, h = e._startAt, m = e._targets, b = e.parent, T = b && b.data === "nested" ? b.vars.targets : m, S = e._overwrite === "auto" && !Es, v = e.timeline, w, P, x, O, C, k, z, M, W, U, K, G, F;
  if (v && (!d || !n) && (n = "none"), e._ease = Vr(n, di.ease), e._yEase = _ ? ma(Vr(_ === !0 ? n : _, di.ease)) : 0, _ && e._yoyo && !e._repeat && (_ = e._yEase, e._yEase = e._ease, e._ease = _), e._from = !v && !!i.runBackwards, !v || d && !i.stagger) {
    if (M = m[0] ? Yr(m[0]).harness : 0, G = M && i[M.prop], w = An(i, Is), h && (h._zTime < 0 && h.progress(1), r < 0 && f && o && !c ? h.render(-1, !0) : h.revert(f && p ? Tn : Tu), h._lazy = 0), s) {
      if (wr(e._startAt = Se.set(m, Ct({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !h && at(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Tt(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Le || !o && !c) && e._startAt.revert(Tn), o && p && r <= 0 && t <= 0) {
        r && (e._zTime = r);
        return;
      }
    } else if (f && p && !h) {
      if (r && (o = !1), x = Ct({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && at(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), G && (x[M.prop] = G), wr(e._startAt = Se.set(m, x)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Le ? e._startAt.revert(Tn) : e._startAt.render(-1, !0)), e._zTime = r, !o)
        a(e._startAt, re, re);
      else if (!r)
        return;
    }
    for (e._pt = e._ptCache = 0, u = p && at(u) || u && !p, P = 0; P < m.length; P++) {
      if (C = m[P], z = C._gsap || Ns(m)[P]._gsap, e._ptLookup[P] = U = {}, ls[z.id] && xr.length && En(), K = T === m ? P : T.indexOf(C), M && (W = new M()).init(C, G || w, e, K, T) !== !1 && (e._pt = O = new lt(e._pt, C, W.name, 0, 1, W.render, W, 0, W.priority), W._props.forEach(function(Q) {
        U[Q] = O;
      }), W.priority && (k = 1)), !M || G)
        for (x in w)
          mt[x] && (W = Ta(x, w, e, K, C, T)) ? W.priority && (k = 1) : U[x] = O = Ys.call(e, C, x, "get", w[x], K, T, 0, i.stringFilter);
      e._op && e._op[P] && e.kill(C, e._op[P]), S && e._pt && (pr = e, fe.killTweensOf(C, U, e.globalTime(r)), F = !e.parent, pr = 0), e._pt && u && (ls[z.id] = 1);
    }
    k && ka(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = l, e._initted = (!e._op || e._pt) && !F, d && r <= 0 && v.render(Dt, !0, !0);
}, qu = function(e, r, t, i, n, s, o, u) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[r], f, _, d, c;
  if (!l)
    for (l = e._ptCache[r] = [], d = e._ptLookup, c = e._targets.length; c--; ) {
      if (f = d[c][r], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== r && f.fp !== r; )
          f = f._next;
      if (!f)
        return ps = 1, e.vars[r] = "+=0", Xs(e, o), ps = 0, u ? qi(r + " not eligible for reset") : 1;
      l.push(f);
    }
  for (c = l.length; c--; )
    _ = l[c], f = _._pt || _, f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c, f.c = t - f.s, _.e && (_.e = ve(t) + We(_.e)), _.b && (_.b = f.s + We(_.b));
}, Ku = function(e, r) {
  var t = e[0] ? Yr(e[0]).harness : 0, i = t && t.aliases, n, s, o, u;
  if (!i)
    return r;
  n = pi({}, r);
  for (s in i)
    if (s in n)
      for (u = i[s].split(","), o = u.length; o--; )
        n[u[o]] = n[s];
  return n;
}, Zu = function(e, r, t, i) {
  var n = r.ease || i || "power1.inOut", s, o;
  if (He(r))
    o = t[e] || (t[e] = []), r.forEach(function(u, l) {
      return o.push({
        t: l / (r.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in r)
      o = t[s] || (t[s] = []), s === "ease" || o.push({
        t: parseFloat(e),
        v: r[s],
        e: n
      });
}, Li = function(e, r, t, i, n) {
  return pe(e) ? e.call(r, t, i, n) : Ae(e) && ~e.indexOf("random(") ? Zi(e) : e;
}, ba = Ls + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", wa = {};
ut(ba + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return wa[a] = 1;
});
var Se = /* @__PURE__ */ function(a) {
  Vo(e, a);
  function e(t, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : zi(i)) || this;
    var u = o.vars, l = u.duration, f = u.delay, _ = u.immediateRender, d = u.stagger, c = u.overwrite, p = u.keyframes, h = u.defaults, m = u.scrollTrigger, b = u.yoyoEase, T = i.parent || fe, S = (He(t) || $o(t) ? or(t[0]) : "length" in i) ? [t] : Et(t), v, w, P, x, O, C, k, z;
    if (o._targets = S.length ? Ns(S) : qi("GSAP target " + t + " not found. https://gsap.com", !wt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = c, p || d || un(l) || un(f)) {
      if (i = o.vars, v = o.timeline = new it({
        data: "nested",
        defaults: h || {},
        targets: T && T.data === "nested" ? T.vars.targets : S
      }), v.kill(), v.parent = v._dp = tr(o), v._start = 0, d || un(l) || un(f)) {
        if (x = S.length, k = d && aa(d), Kt(d))
          for (O in d)
            ~ba.indexOf(O) && (z || (z = {}), z[O] = d[O]);
        for (w = 0; w < x; w++)
          P = An(i, wa), P.stagger = 0, b && (P.yoyoEase = b), z && pi(P, z), C = S[w], P.duration = +Li(l, tr(o), w, C, S), P.delay = (+Li(f, tr(o), w, C, S) || 0) - o._delay, !d && x === 1 && P.delay && (o._delay = f = P.delay, o._start += f, P.delay = 0), v.to(C, P, k ? k(w, C, S) : 0), v._ease = q.none;
        v.duration() ? l = f = 0 : o.timeline = 0;
      } else if (p) {
        zi(Ct(v.vars.defaults, {
          ease: "none"
        })), v._ease = Vr(p.ease || i.ease || "none");
        var M = 0, W, U, K;
        if (He(p))
          p.forEach(function(G) {
            return v.to(S, G, ">");
          }), v.duration();
        else {
          P = {};
          for (O in p)
            O === "ease" || O === "easeEach" || Zu(O, p[O], P, p.easeEach);
          for (O in P)
            for (W = P[O].sort(function(G, F) {
              return G.t - F.t;
            }), M = 0, w = 0; w < W.length; w++)
              U = W[w], K = {
                ease: U.e,
                duration: (U.t - (w ? W[w - 1].t : 0)) / 100 * l
              }, K[O] = U.v, v.to(S, K, M), M += K.duration;
          v.duration() < l && v.to({}, {
            duration: l - v.duration()
          });
        }
      }
      l || o.duration(l = v.duration());
    } else
      o.timeline = 0;
    return c === !0 && !Es && (pr = tr(o), fe.killTweensOf(S), pr = 0), Wt(T, tr(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (_ || !l && !p && o._start === le(T._time) && at(_) && ku(tr(o)) && T.data !== "nested") && (o._tTime = -re, o.render(Math.max(0, -f) || 0)), m && ia(tr(o), m), o;
  }
  var r = e.prototype;
  return r.render = function(i, n, s) {
    var o = this._time, u = this._tDur, l = this._dur, f = i < 0, _ = i > u - re && !f ? u : i < re ? 0 : i, d, c, p, h, m, b, T, S, v;
    if (!l)
      Mu(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = _, S = this.timeline, this._repeat) {
        if (h = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(h * 100 + i, n, s);
        if (d = le(_ % h), _ === u ? (p = this._repeat, d = l) : (m = le(_ / h), p = ~~m, p && p === m ? (d = l, p--) : d > l && (d = l)), b = this._yoyo && p & 1, b && (v = this._yEase, d = l - d), m = gi(this._tTime, h), d === o && !s && this._initted && p === m)
          return this._tTime = _, this;
        p !== m && (S && this._yEase && ya(S, b), this.vars.repeatRefresh && !b && !this._lock && d !== h && this._initted && (this._lock = s = 1, this.render(le(h * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (na(this, f ? i : d, s, n, _))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = T = (v || this._ease)(d / l), this._from && (this.ratio = T = 1 - T), !o && _ && !n && !m && (Tt(this, "onStart"), this._tTime !== _))
        return this;
      for (c = this._pt; c; )
        c.r(T, c.d), c = c._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && fs(this, i, n, s), Tt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && Tt(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && fs(this, i, !0, !0), (i || !l) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && wr(this, 1), !n && !(f && !o) && (_ || o || b) && (Tt(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, r.targets = function() {
    return this._targets;
  }, r.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, r.resetTo = function(i, n, s, o, u) {
    Qi || vt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Xs(this, l), f = this._ease(l / this._dur), qu(this, i, n, s, o, f, l, u) ? this.resetTo(i, n, s, o, 1) : (Un(this, 0), this.parent || ta(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, r.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Oi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Le), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, pr && pr.vars.overwrite !== !0)._first || Oi(this), this.parent && s !== this.timeline.totalDuration() && mi(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = i ? Et(i) : o, l = this._ptLookup, f = this._pt, _, d, c, p, h, m, b;
    if ((!n || n === "all") && Cu(o, u))
      return n === "all" && (this._pt = 0), Oi(this);
    for (_ = this._op = this._op || [], n !== "all" && (Ae(n) && (h = {}, ut(n, function(T) {
      return h[T] = 1;
    }), n = h), n = Ku(o, n)), b = o.length; b--; )
      if (~u.indexOf(o[b])) {
        d = l[b], n === "all" ? (_[b] = n, p = d, c = {}) : (c = _[b] = _[b] || {}, p = n);
        for (h in p)
          m = d && d[h], m && ((!("kill" in m.d) || m.d.kill(h) === !0) && Xn(this, m, "_pt"), delete d[h]), c !== "all" && (c[h] = 1);
      }
    return this._initted && !this._pt && f && Oi(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Ii(1, arguments);
  }, e.delayedCall = function(i, n, s, o) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, e.fromTo = function(i, n, s) {
    return Ii(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, s) {
    return fe.killTweensOf(i, n, s);
  }, e;
}(Ji);
Ct(Se.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ut("staggerTo,staggerFrom,staggerFromTo", function(a) {
  Se[a] = function() {
    var e = new it(), r = hs.call(arguments, 0);
    return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r);
  };
});
var Vs = function(e, r, t) {
  return e[r] = t;
}, Sa = function(e, r, t) {
  return e[r](t);
}, Qu = function(e, r, t, i) {
  return e[r](i.fp, t);
}, Ju = function(e, r, t) {
  return e.setAttribute(r, t);
}, Us = function(e, r) {
  return pe(e[r]) ? Sa : As(e[r]) && e.setAttribute ? Ju : Vs;
}, Ca = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
}, ju = function(e, r) {
  return r.set(r.t, r.p, !!(r.s + r.c * e), r);
}, Pa = function(e, r) {
  var t = r._pt, i = "";
  if (!e && r.b)
    i = r.b;
  else if (e === 1 && r.e)
    i = r.e;
  else {
    for (; t; )
      i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
    i += r.c;
  }
  r.set(r.t, r.p, i, r);
}, $s = function(e, r) {
  for (var t = r._pt; t; )
    t.r(e, t.d), t = t._next;
}, el = function(e, r, t, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, r, t), n = s;
}, tl = function(e) {
  for (var r = this._pt, t, i; r; )
    i = r._next, r.p === e && !r.op || r.op === e ? Xn(this, r, "_pt") : r.dep || (t = 1), r = i;
  return !t;
}, rl = function(e, r, t, i) {
  i.mSet(e, r, i.m.call(i.tween, t, i.mt), i);
}, ka = function(e) {
  for (var r = e._pt, t, i, n, s; r; ) {
    for (t = r._next, i = n; i && i.pr > r.pr; )
      i = i._next;
    (r._prev = i ? i._prev : s) ? r._prev._next = r : n = r, (r._next = i) ? i._prev = r : s = r, r = t;
  }
  e._pt = n;
}, lt = /* @__PURE__ */ function() {
  function a(r, t, i, n, s, o, u, l, f) {
    this.t = t, this.s = n, this.c = s, this.p = i, this.r = o || Ca, this.d = u || this, this.set = l || Vs, this.pr = f || 0, this._next = r, r && (r._prev = this);
  }
  var e = a.prototype;
  return e.modifier = function(t, i, n) {
    this.mSet = this.mSet || this.set, this.set = rl, this.m = t, this.mt = n, this.tween = i;
  }, a;
}();
ut(Ls + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return Is[a] = 1;
});
St.TweenMax = St.TweenLite = Se;
St.TimelineLite = St.TimelineMax = it;
fe = new it({
  sortChildren: !1,
  defaults: di,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
wt.stringFilter = ga;
var Ur = [], wn = {}, il = [], co = 0, nl = 0, Qn = function(e) {
  return (wn[e] || il).map(function(r) {
    return r();
  });
}, gs = function() {
  var e = Date.now(), r = [];
  e - co > 2 && (Qn("matchMediaInit"), Ur.forEach(function(t) {
    var i = t.queries, n = t.conditions, s, o, u, l;
    for (o in i)
      s = Ut.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, l = 1);
    l && (t.revert(), u && r.push(t));
  }), Qn("matchMediaRevert"), r.forEach(function(t) {
    return t.onMatch(t, function(i) {
      return t.add(null, i);
    });
  }), co = e, Qn("matchMedia"));
}, Oa = /* @__PURE__ */ function() {
  function a(r, t) {
    this.selector = t && _s(t), this.data = [], this._r = [], this.isReverted = !1, this.id = nl++, r && this.add(r);
  }
  var e = a.prototype;
  return e.add = function(t, i, n) {
    pe(t) && (n = i, i = t, t = pe);
    var s = this, o = function() {
      var l = ae, f = s.selector, _;
      return l && l !== s && l.data.push(s), n && (s.selector = _s(n)), ae = s, _ = i.apply(s, arguments), pe(_) && s._r.push(_), ae = l, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = o, t === pe ? o(s, function(u) {
      return s.add(null, u);
    }) : t ? s[t] = o : o;
  }, e.ignore = function(t) {
    var i = ae;
    ae = null, t(this), ae = i;
  }, e.getTweens = function() {
    var t = [];
    return this.data.forEach(function(i) {
      return i instanceof a ? t.push.apply(t, i.getTweens()) : i instanceof Se && !(i.parent && i.parent.data === "nested") && t.push(i);
    }), t;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(t, i) {
    var n = this;
    if (t ? function() {
      for (var o = n.getTweens(), u = n.data.length, l; u--; )
        l = n.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
          return o.splice(o.indexOf(f), 1);
        }));
      for (o.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, _) {
        return _.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(t);
      }), u = n.data.length; u--; )
        l = n.data[u], l instanceof it ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Se) && l.revert && l.revert(t);
      n._r.forEach(function(f) {
        return f(t, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var s = Ur.length; s--; )
        Ur[s].id === this.id && Ur.splice(s, 1);
  }, e.revert = function(t) {
    this.kill(t || {});
  }, a;
}(), sl = /* @__PURE__ */ function() {
  function a(r) {
    this.contexts = [], this.scope = r, ae && ae.data.push(this);
  }
  var e = a.prototype;
  return e.add = function(t, i, n) {
    Kt(t) || (t = {
      matches: t
    });
    var s = new Oa(0, n || this.scope), o = s.conditions = {}, u, l, f;
    ae && !s.selector && (s.selector = ae.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = t;
    for (l in t)
      l === "all" ? f = 1 : (u = Ut.matchMedia(t[l]), u && (Ur.indexOf(s) < 0 && Ur.push(s), (o[l] = u.matches) && (f = 1), u.addListener ? u.addListener(gs) : u.addEventListener("change", gs)));
    return f && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, e.revert = function(t) {
    this.kill(t || {});
  }, e.kill = function(t) {
    this.contexts.forEach(function(i) {
      return i.kill(t, !0);
    });
  }, a;
}(), Fn = {
  registerPlugin: function() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t];
    r.forEach(function(i) {
      return _a(i);
    });
  },
  timeline: function(e) {
    return new it(e);
  },
  getTweensOf: function(e, r) {
    return fe.getTweensOf(e, r);
  },
  getProperty: function(e, r, t, i) {
    Ae(e) && (e = Et(e)[0]);
    var n = Yr(e || {}).get, s = t ? ea : jo;
    return t === "native" && (t = ""), e && (r ? s((mt[r] && mt[r].get || n)(e, r, t, i)) : function(o, u, l) {
      return s((mt[o] && mt[o].get || n)(e, o, u, l));
    });
  },
  quickSetter: function(e, r, t) {
    if (e = Et(e), e.length > 1) {
      var i = e.map(function(f) {
        return ct.quickSetter(f, r, t);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    e = e[0] || {};
    var s = mt[r], o = Yr(e), u = o.harness && (o.harness.aliases || {})[r] || r, l = s ? function(f) {
      var _ = new s();
      oi._pt = 0, _.init(e, t ? f + t : f, oi, 0, [e]), _.render(1, _), oi._pt && $s(1, oi);
    } : o.set(e, u);
    return s ? l : function(f) {
      return l(e, u, t ? f + t : f, o, 1);
    };
  },
  quickTo: function(e, r, t) {
    var i, n = ct.to(e, Ct((i = {}, i[r] = "+=0.1", i.paused = !0, i.stagger = 0, i), t || {})), s = function(u, l, f) {
      return n.resetTo(r, u, l, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return fe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Vr(e.ease, di.ease)), oo(di, e || {});
  },
  config: function(e) {
    return oo(wt, e || {});
  },
  registerEffect: function(e) {
    var r = e.name, t = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !mt[o] && !St[o] && qi(r + " effect requires " + o + " plugin.");
    }), Hn[r] = function(o, u, l) {
      return t(Et(o), Ct(u || {}, n), l);
    }, s && (it.prototype[r] = function(o, u, l) {
      return this.add(Hn[r](o, Kt(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(e, r) {
    q[e] = Vr(r);
  },
  parseEase: function(e, r) {
    return arguments.length ? Vr(e, r) : q;
  },
  getById: function(e) {
    return fe.getById(e);
  },
  exportRoot: function(e, r) {
    e === void 0 && (e = {});
    var t = new it(e), i, n;
    for (t.smoothChildTiming = at(e.smoothChildTiming), fe.remove(t), t._dp = 0, t._time = t._tTime = fe._time, i = fe._first; i; )
      n = i._next, (r || !(!i._dur && i instanceof Se && i.vars.onComplete === i._targets[0])) && Wt(t, i, i._start - i._delay), i = n;
    return Wt(fe, t, 0), t;
  },
  context: function(e, r) {
    return e ? new Oa(e, r) : ae;
  },
  matchMedia: function(e) {
    return new sl(e);
  },
  matchMediaRefresh: function() {
    return Ur.forEach(function(e) {
      var r = e.conditions, t, i;
      for (i in r)
        r[i] && (r[i] = !1, t = 1);
      t && e.revert();
    }) || gs();
  },
  addEventListener: function(e, r) {
    var t = wn[e] || (wn[e] = []);
    ~t.indexOf(r) || t.push(r);
  },
  removeEventListener: function(e, r) {
    var t = wn[e], i = t && t.indexOf(r);
    i >= 0 && t.splice(i, 1);
  },
  utils: {
    wrap: Lu,
    wrapYoyo: Nu,
    distribute: aa,
    random: la,
    snap: ua,
    normalize: Iu,
    getUnit: We,
    clamp: Au,
    splitColor: da,
    toArray: Et,
    selector: _s,
    mapRange: ca,
    pipe: Fu,
    unitize: zu,
    interpolate: Bu,
    shuffle: oa
  },
  install: qo,
  effects: Hn,
  ticker: vt,
  updateRoot: it.updateRoot,
  plugins: mt,
  globalTimeline: fe,
  core: {
    PropTween: lt,
    globals: Ko,
    Tween: Se,
    Timeline: it,
    Animation: Ji,
    getCache: Yr,
    _removeLinkedListItem: Xn,
    reverting: function() {
      return Le;
    },
    context: function(e) {
      return e && ae && (ae.data.push(e), e._ctx = ae), ae;
    },
    suppressOverwrites: function(e) {
      return Es = e;
    }
  }
};
ut("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Fn[a] = Se[a];
});
vt.add(it.updateRoot);
oi = Fn.to({}, {
  duration: 0
});
var ol = function(e, r) {
  for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
    t = t._next;
  return t;
}, al = function(e, r) {
  var t = e._targets, i, n, s;
  for (i in r)
    for (n = t.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = ol(s, i)), s && s.modifier && s.modifier(r[i], e, t[n], i));
}, Jn = function(e, r) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var u, l;
        if (Ae(n) && (u = {}, ut(n, function(f) {
          return u[f] = 1;
        }), n = u), r) {
          u = {};
          for (l in n)
            u[l] = r(n[l]);
          n = u;
        }
        al(o, n);
      };
    }
  };
}, ct = Fn.registerPlugin({
  name: "attr",
  init: function(e, r, t, i, n) {
    var s, o, u;
    this.tween = t;
    for (s in r)
      u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", r[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(e, r) {
    for (var t = r._pt; t; )
      Le ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, r) {
    for (var t = r.length; t--; )
      this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
  }
}, Jn("roundProps", ds), Jn("modifiers"), Jn("snap", ua)) || Fn;
Se.version = it.version = ct.version = "3.14.2";
Ho = 1;
Rs() && yi();
q.Power0;
q.Power1;
q.Power2;
q.Power3;
q.Power4;
q.Linear;
q.Quad;
q.Cubic;
q.Quart;
q.Quint;
q.Strong;
q.Elastic;
q.Back;
q.SteppedEase;
q.Bounce;
q.Sine;
q.Expo;
q.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ho, gr, li, Ws, Nr, _o, Gs, ul = function() {
  return typeof window < "u";
}, ar = {}, zr = 180 / Math.PI, fi = Math.PI / 180, ei = Math.atan2, po = 1e8, Hs = /([A-Z])/g, ll = /(left|right|width|margin|padding|x)/i, fl = /[\s,\(]\S/, Gt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ms = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, cl = function(e, r) {
  return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, hl = function(e, r) {
  return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r);
}, _l = function(e, r) {
  return r.set(r.t, r.p, e === 1 ? r.e : e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r);
}, dl = function(e, r) {
  var t = r.s + r.c * e;
  r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
}, Ma = function(e, r) {
  return r.set(r.t, r.p, e ? r.e : r.b, r);
}, Da = function(e, r) {
  return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
}, pl = function(e, r, t) {
  return e.style[r] = t;
}, gl = function(e, r, t) {
  return e.style.setProperty(r, t);
}, ml = function(e, r, t) {
  return e._gsap[r] = t;
}, yl = function(e, r, t) {
  return e._gsap.scaleX = e._gsap.scaleY = t;
}, vl = function(e, r, t, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = t, s.renderTransform(n, s);
}, xl = function(e, r, t, i, n) {
  var s = e._gsap;
  s[r] = t, s.renderTransform(n, s);
}, ce = "transform", ft = ce + "Origin", Tl = function a(e, r) {
  var t = this, i = this.target, n = i.style, s = i._gsap;
  if (e in ar && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Gt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return t.tfm[o] = rr(i, o);
      }) : this.tfm[e] = s.x ? s[e] : rr(i, e), e === ft && (this.tfm.zOrigin = s.zOrigin);
    else
      return Gt.transform.split(",").forEach(function(o) {
        return a.call(t, o, r);
      });
    if (this.props.indexOf(ce) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ft, r, "")), e = ce;
  }
  (n || r) && this.props.push(e, r, n[e]);
}, Ea = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, bl = function() {
  var e = this.props, r = this.target, t = r.style, i = r._gsap, n, s;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? r[e[n]](e[n + 2]) : r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Hs, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), n = Gs(), (!n || !n.isStart) && !t[ce] && (Ea(t), i.zOrigin && t[ft] && (t[ft] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Aa = function(e, r) {
  var t = {
    target: e,
    props: [],
    revert: bl,
    save: Tl
  };
  return e._gsap || ct.core.getCache(e), r && e.style && e.nodeType && r.split(",").forEach(function(i) {
    return t.save(i);
  }), t;
}, Ra, ys = function(e, r) {
  var t = gr.createElementNS ? gr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : gr.createElement(e);
  return t && t.style ? t : gr.createElement(e);
}, bt = function a(e, r, t) {
  var i = getComputedStyle(e);
  return i[r] || i.getPropertyValue(r.replace(Hs, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && a(e, vi(r) || r, 1) || "";
}, go = "O,Moz,ms,Ms,Webkit".split(","), vi = function(e, r, t) {
  var i = r || Nr, n = i.style, s = 5;
  if (e in n && !t)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(go[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? go[s] : "") + e;
}, vs = function() {
  ul() && window.document && (ho = window, gr = ho.document, li = gr.documentElement, Nr = ys("div") || {
    style: {}
  }, ys("div"), ce = vi(ce), ft = ce + "Origin", Nr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ra = !!vi("perspective"), Gs = ct.core.reverting, Ws = 1);
}, mo = function(e) {
  var r = e.ownerSVGElement, t = ys("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", t.appendChild(i), li.appendChild(t);
  try {
    n = i.getBBox();
  } catch {
  }
  return t.removeChild(i), li.removeChild(t), n;
}, yo = function(e, r) {
  for (var t = r.length; t--; )
    if (e.hasAttribute(r[t]))
      return e.getAttribute(r[t]);
}, Fa = function(e) {
  var r, t;
  try {
    r = e.getBBox();
  } catch {
    r = mo(e), t = 1;
  }
  return r && (r.width || r.height) || t || (r = mo(e)), r && !r.width && !r.x && !r.y ? {
    x: +yo(e, ["x", "cx", "x1"]) || 0,
    y: +yo(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : r;
}, za = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fa(e));
}, Sr = function(e, r) {
  if (r) {
    var t = e.style, i;
    r in ar && r !== ft && (r = ce), t.removeProperty ? (i = r.substr(0, 2), (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(i === "--" ? r : r.replace(Hs, "-$1").toLowerCase())) : t.removeAttribute(r);
  }
}, mr = function(e, r, t, i, n, s) {
  var o = new lt(e._pt, r, t, 0, 1, s ? Da : Ma);
  return e._pt = o, o.b = i, o.e = n, e._props.push(t), o;
}, vo = {
  deg: 1,
  rad: 1,
  turn: 1
}, wl = {
  grid: 1,
  flex: 1
}, Cr = function a(e, r, t, i) {
  var n = parseFloat(t) || 0, s = (t + "").trim().substr((n + "").length) || "px", o = Nr.style, u = ll.test(r), l = e.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, d = i === "px", c = i === "%", p, h, m, b;
  if (i === s || !n || vo[i] || vo[s])
    return n;
  if (s !== "px" && !d && (n = a(e, r, t, "px")), b = e.getCTM && za(e), (c || s === "%") && (ar[r] || ~r.indexOf("adius")))
    return p = b ? e.getBBox()[u ? "width" : "height"] : e[f], ve(c ? n / p * _ : n / 100 * p);
  if (o[u ? "width" : "height"] = _ + (d ? s : i), h = i !== "rem" && ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === gr || !h.appendChild) && (h = gr.body), m = h._gsap, m && c && m.width && u && m.time === vt.time && !m.uncache)
    return ve(n / m.width * _);
  if (c && (r === "height" || r === "width")) {
    var T = e.style[r];
    e.style[r] = _ + i, p = e[f], T ? e.style[r] = T : Sr(e, r);
  } else
    (c || s === "%") && !wl[bt(h, "display")] && (o.position = bt(e, "position")), h === e && (o.position = "static"), h.appendChild(Nr), p = Nr[f], h.removeChild(Nr), o.position = "absolute";
  return u && c && (m = Yr(h), m.time = vt.time, m.width = h[f]), ve(d ? p * n / _ : p && n ? _ / p * n : 0);
}, rr = function(e, r, t, i) {
  var n;
  return Ws || vs(), r in Gt && r !== "transform" && (r = Gt[r], ~r.indexOf(",") && (r = r.split(",")[0])), ar[r] && r !== "transform" ? (n = en(e, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : In(bt(e, ft)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = zn[r] && zn[r](e, r, t) || bt(e, r) || Qo(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? Cr(e, r, n, t) + t : n;
}, Sl = function(e, r, t, i) {
  if (!t || t === "none") {
    var n = vi(r, e, 1), s = n && bt(e, n, 1);
    s && s !== t ? (r = n, t = s) : r === "borderColor" && (t = bt(e, "borderTopColor"));
  }
  var o = new lt(this._pt, e.style, r, 0, 1, Pa), u = 0, l = 0, f, _, d, c, p, h, m, b, T, S, v, w;
  if (o.b = t, o.e = i, t += "", i += "", i.substring(0, 6) === "var(--" && (i = bt(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[r], e.style[r] = i, i = bt(e, r) || i, h ? e.style[r] = h : Sr(e, r)), f = [t, i], ga(f), t = f[0], i = f[1], d = t.match(si) || [], w = i.match(si) || [], w.length) {
    for (; _ = si.exec(i); )
      m = _[0], T = i.substring(u, _.index), p ? p = (p + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (p = 1), m !== (h = d[l++] || "") && (c = parseFloat(h) || 0, v = h.substr((c + "").length), m.charAt(1) === "=" && (m = ui(c, m) + v), b = parseFloat(m), S = m.substr((b + "").length), u = si.lastIndex - S.length, S || (S = S || wt.units[r] || v, u === i.length && (i += S, o.e += S)), v !== S && (c = Cr(e, r, h, S) || 0), o._pt = {
        _next: o._pt,
        p: T || l === 1 ? T : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: b - c,
        m: p && p < 4 || r === "zIndex" ? Math.round : 0
      });
    o.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    o.r = r === "display" && i === "none" ? Da : Ma;
  return Go.test(i) && (o.e = 0), this._pt = o, o;
}, xo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Cl = function(e) {
  var r = e.split(" "), t = r[0], i = r[1] || "50%";
  return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), r[0] = xo[t] || t, r[1] = xo[i] || i, r.join(" ");
}, Pl = function(e, r) {
  if (r.tween && r.tween._time === r.tween._dur) {
    var t = r.t, i = t.style, n = r.u, s = t._gsap, o, u, l;
    if (n === "all" || n === !0)
      i.cssText = "", u = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], ar[o] && (u = 1, o = o === "transformOrigin" ? ft : ce), Sr(t, o);
    u && (Sr(t, ce), s && (s.svg && t.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", en(t, 1), s.uncache = 1, Ea(i)));
  }
}, zn = {
  clearProps: function(e, r, t, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new lt(e._pt, r, t, 0, 0, Pl);
      return s.u = i, s.pr = -10, s.tween = n, e._props.push(t), 1;
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
}, ji = [1, 0, 0, 1, 0, 0], Ia = {}, La = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, To = function(e) {
  var r = bt(e, ce);
  return La(r) ? ji : r.substr(7).match(Wo).map(ve);
}, qs = function(e, r) {
  var t = e._gsap || Yr(e), i = e.style, n = To(e), s, o, u, l;
  return t.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? ji : n) : (n === ji && !e.offsetParent && e !== li && !t.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (l = 1, o = e.nextElementSibling, li.appendChild(e)), n = To(e), u ? i.display = u : Sr(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : li.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, xs = function(e, r, t, i, n, s) {
  var o = e._gsap, u = n || qs(e, !0), l = o.xOrigin || 0, f = o.yOrigin || 0, _ = o.xOffset || 0, d = o.yOffset || 0, c = u[0], p = u[1], h = u[2], m = u[3], b = u[4], T = u[5], S = r.split(" "), v = parseFloat(S[0]) || 0, w = parseFloat(S[1]) || 0, P, x, O, C;
  t ? u !== ji && (x = c * m - p * h) && (O = v * (m / x) + w * (-h / x) + (h * T - m * b) / x, C = v * (-p / x) + w * (c / x) - (c * T - p * b) / x, v = O, w = C) : (P = Fa(e), v = P.x + (~S[0].indexOf("%") ? v / 100 * P.width : v), w = P.y + (~(S[1] || S[0]).indexOf("%") ? w / 100 * P.height : w)), i || i !== !1 && o.smooth ? (b = v - l, T = w - f, o.xOffset = _ + (b * c + T * h) - b, o.yOffset = d + (b * p + T * m) - T) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = w, o.smooth = !!i, o.origin = r, o.originIsAbsolute = !!t, e.style[ft] = "0px 0px", s && (mr(s, o, "xOrigin", l, v), mr(s, o, "yOrigin", f, w), mr(s, o, "xOffset", _, o.xOffset), mr(s, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", v + " " + w);
}, en = function(e, r) {
  var t = e._gsap || new xa(e);
  if ("x" in t && !r && !t.uncache)
    return t;
  var i = e.style, n = t.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(e), l = bt(e, ft) || "0", f, _, d, c, p, h, m, b, T, S, v, w, P, x, O, C, k, z, M, W, U, K, G, F, Q, ne, g, se, qe, Rt, he, Re;
  return f = _ = d = h = m = b = T = S = v = 0, c = p = 1, t.svg = !!(e.getCTM && za(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[ce] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[ce] !== "none" ? u[ce] : "")), i.scale = i.rotate = i.translate = "none"), x = qs(e, t.svg), t.svg && (t.uncache ? (Q = e.getBBox(), l = t.xOrigin - Q.x + "px " + (t.yOrigin - Q.y) + "px", F = "") : F = !r && e.getAttribute("data-svg-origin"), xs(e, F || l, !!F || t.originIsAbsolute, t.smooth !== !1, x)), w = t.xOrigin || 0, P = t.yOrigin || 0, x !== ji && (z = x[0], M = x[1], W = x[2], U = x[3], f = K = x[4], _ = G = x[5], x.length === 6 ? (c = Math.sqrt(z * z + M * M), p = Math.sqrt(U * U + W * W), h = z || M ? ei(M, z) * zr : 0, T = W || U ? ei(W, U) * zr + h : 0, T && (p *= Math.abs(Math.cos(T * fi))), t.svg && (f -= w - (w * z + P * W), _ -= P - (w * M + P * U))) : (Re = x[6], Rt = x[7], g = x[8], se = x[9], qe = x[10], he = x[11], f = x[12], _ = x[13], d = x[14], O = ei(Re, qe), m = O * zr, O && (C = Math.cos(-O), k = Math.sin(-O), F = K * C + g * k, Q = G * C + se * k, ne = Re * C + qe * k, g = K * -k + g * C, se = G * -k + se * C, qe = Re * -k + qe * C, he = Rt * -k + he * C, K = F, G = Q, Re = ne), O = ei(-W, qe), b = O * zr, O && (C = Math.cos(-O), k = Math.sin(-O), F = z * C - g * k, Q = M * C - se * k, ne = W * C - qe * k, he = U * k + he * C, z = F, M = Q, W = ne), O = ei(M, z), h = O * zr, O && (C = Math.cos(O), k = Math.sin(O), F = z * C + M * k, Q = K * C + G * k, M = M * C - z * k, G = G * C - K * k, z = F, K = Q), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, b = 180 - b), c = ve(Math.sqrt(z * z + M * M + W * W)), p = ve(Math.sqrt(G * G + Re * Re)), O = ei(K, G), T = Math.abs(O) > 2e-4 ? O * zr : 0, v = he ? 1 / (he < 0 ? -he : he) : 0), t.svg && (F = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !La(bt(e, ce)), F && e.setAttribute("transform", F))), Math.abs(T) > 90 && Math.abs(T) < 270 && (n ? (c *= -1, T += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (p *= -1, T += T <= 0 ? 180 : -180)), r = r || t.uncache, t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = _ - ((t.yPercent = _ && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = d + s, t.scaleX = ve(c), t.scaleY = ve(p), t.rotation = ve(h) + o, t.rotationX = ve(m) + o, t.rotationY = ve(b) + o, t.skewX = T + o, t.skewY = S + o, t.transformPerspective = v + s, (t.zOrigin = parseFloat(l.split(" ")[2]) || !r && t.zOrigin || 0) && (i[ft] = In(l)), t.xOffset = t.yOffset = 0, t.force3D = wt.force3D, t.renderTransform = t.svg ? Ol : Ra ? Na : kl, t.uncache = 0, t;
}, In = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, jn = function(e, r, t) {
  var i = We(r);
  return ve(parseFloat(r) + parseFloat(Cr(e, "x", t + "px", i))) + i;
}, kl = function(e, r) {
  r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, Na(e, r);
}, Rr = "0deg", Ci = "0px", Fr = ") ", Na = function(e, r) {
  var t = r || this, i = t.xPercent, n = t.yPercent, s = t.x, o = t.y, u = t.z, l = t.rotation, f = t.rotationY, _ = t.rotationX, d = t.skewX, c = t.skewY, p = t.scaleX, h = t.scaleY, m = t.transformPerspective, b = t.force3D, T = t.target, S = t.zOrigin, v = "", w = b === "auto" && e && e !== 1 || b === !0;
  if (S && (_ !== Rr || f !== Rr)) {
    var P = parseFloat(f) * fi, x = Math.sin(P), O = Math.cos(P), C;
    P = parseFloat(_) * fi, C = Math.cos(P), s = jn(T, s, x * C * -S), o = jn(T, o, -Math.sin(P) * -S), u = jn(T, u, O * C * -S + S);
  }
  m !== Ci && (v += "perspective(" + m + Fr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (w || s !== Ci || o !== Ci || u !== Ci) && (v += u !== Ci || w ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Fr), l !== Rr && (v += "rotate(" + l + Fr), f !== Rr && (v += "rotateY(" + f + Fr), _ !== Rr && (v += "rotateX(" + _ + Fr), (d !== Rr || c !== Rr) && (v += "skew(" + d + ", " + c + Fr), (p !== 1 || h !== 1) && (v += "scale(" + p + ", " + h + Fr), T.style[ce] = v || "translate(0, 0)";
}, Ol = function(e, r) {
  var t = r || this, i = t.xPercent, n = t.yPercent, s = t.x, o = t.y, u = t.rotation, l = t.skewX, f = t.skewY, _ = t.scaleX, d = t.scaleY, c = t.target, p = t.xOrigin, h = t.yOrigin, m = t.xOffset, b = t.yOffset, T = t.forceCSS, S = parseFloat(s), v = parseFloat(o), w, P, x, O, C;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= fi, l *= fi, w = Math.cos(u) * _, P = Math.sin(u) * _, x = Math.sin(u - l) * -d, O = Math.cos(u - l) * d, l && (f *= fi, C = Math.tan(l - f), C = Math.sqrt(1 + C * C), x *= C, O *= C, f && (C = Math.tan(f), C = Math.sqrt(1 + C * C), w *= C, P *= C)), w = ve(w), P = ve(P), x = ve(x), O = ve(O)) : (w = _, O = d, P = x = 0), (S && !~(s + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (S = Cr(c, "x", s, "px"), v = Cr(c, "y", o, "px")), (p || h || m || b) && (S = ve(S + p - (p * w + h * x) + m), v = ve(v + h - (p * P + h * O) + b)), (i || n) && (C = c.getBBox(), S = ve(S + i / 100 * C.width), v = ve(v + n / 100 * C.height)), C = "matrix(" + w + "," + P + "," + x + "," + O + "," + S + "," + v + ")", c.setAttribute("transform", C), T && (c.style[ce] = C);
}, Ml = function(e, r, t, i, n) {
  var s = 360, o = Ae(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? zr : 1), l = u - i, f = i + l + "deg", _, d;
  return o && (_ = n.split("_")[1], _ === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), _ === "cw" && l < 0 ? l = (l + s * po) % s - ~~(l / s) * s : _ === "ccw" && l > 0 && (l = (l - s * po) % s - ~~(l / s) * s)), e._pt = d = new lt(e._pt, r, t, i, l, cl), d.e = f, d.u = "deg", e._props.push(t), d;
}, bo = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, Dl = function(e, r, t) {
  var i = bo({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = t.style, o, u, l, f, _, d, c, p;
  i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), s[ce] = r, o = en(t, 1), Sr(t, ce), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[ce], s[ce] = r, o = en(t, 1), s[ce] = l);
  for (u in ar)
    l = i[u], f = o[u], l !== f && n.indexOf(u) < 0 && (c = We(l), p = We(f), _ = c !== p ? Cr(t, u, l, p) : parseFloat(l), d = parseFloat(f), e._pt = new lt(e._pt, o, u, _, d - _, ms), e._pt.u = p || 0, e._props.push(u));
  bo(o, i);
};
ut("padding,margin,Width,Radius", function(a, e) {
  var r = "Top", t = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  zn[e > 1 ? "border" + a : a] = function(o, u, l, f, _) {
    var d, c;
    if (arguments.length < 4)
      return d = s.map(function(p) {
        return rr(o, p, l);
      }), c = d.join(" "), c.split(d[0]).length === 5 ? d[0] : c;
    d = (f + "").split(" "), c = {}, s.forEach(function(p, h) {
      return c[p] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), o.init(u, c, _);
  };
});
var Ba = {
  name: "css",
  register: vs,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, r, t, i, n) {
    var s = this._props, o = e.style, u = t.vars.startAt, l, f, _, d, c, p, h, m, b, T, S, v, w, P, x, O, C;
    Ws || vs(), this.styles = this.styles || Aa(e), O = this.styles.props, this.tween = t;
    for (h in r)
      if (h !== "autoRound" && (f = r[h], !(mt[h] && Ta(h, r, t, i, e, n)))) {
        if (c = typeof f, p = zn[h], c === "function" && (f = f.call(t, i, e, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = Zi(f)), p)
          p(this, e, h, f, t) && (x = 1);
        else if (h.substr(0, 2) === "--")
          l = (getComputedStyle(e).getPropertyValue(h) + "").trim(), f += "", Tr.lastIndex = 0, Tr.test(l) || (m = We(l), b = We(f), b ? m !== b && (l = Cr(e, h, l, b) + b) : m && (f += m)), this.add(o, "setProperty", l, f, i, n, 0, 0, h), s.push(h), O.push(h, 0, o[h]);
        else if (c !== "undefined") {
          if (u && h in u ? (l = typeof u[h] == "function" ? u[h].call(t, i, e, n) : u[h], Ae(l) && ~l.indexOf("random(") && (l = Zi(l)), We(l + "") || l === "auto" || (l += wt.units[h] || We(rr(e, h)) || ""), (l + "").charAt(1) === "=" && (l = rr(e, h))) : l = rr(e, h), d = parseFloat(l), T = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), T && (f = f.substr(2)), _ = parseFloat(f), h in Gt && (h === "autoAlpha" && (d === 1 && rr(e, "visibility") === "hidden" && _ && (d = 0), O.push("visibility", 0, o.visibility), mr(this, o, "visibility", d ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), h !== "scale" && h !== "transform" && (h = Gt[h], ~h.indexOf(",") && (h = h.split(",")[0]))), S = h in ar, S) {
            if (this.styles.save(h), C = f, c === "string" && f.substring(0, 6) === "var(--") {
              if (f = bt(e, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var k = e.style.perspective;
                e.style.perspective = f, f = bt(e, "perspective"), k ? e.style.perspective = k : Sr(e, "perspective");
              }
              _ = parseFloat(f);
            }
            if (v || (w = e._gsap, w.renderTransform && !r.parseTransform || en(e, r.parseTransform), P = r.smoothOrigin !== !1 && w.smooth, v = this._pt = new lt(this._pt, o, ce, 0, 1, w.renderTransform, w, 0, -1), v.dep = 1), h === "scale")
              this._pt = new lt(this._pt, w, "scaleY", w.scaleY, (T ? ui(w.scaleY, T + _) : _) - w.scaleY || 0, ms), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              O.push(ft, 0, o[ft]), f = Cl(f), w.svg ? xs(e, f, 0, P, 0, this) : (b = parseFloat(f.split(" ")[2]) || 0, b !== w.zOrigin && mr(this, w, "zOrigin", w.zOrigin, b), mr(this, o, h, In(l), In(f)));
              continue;
            } else if (h === "svgOrigin") {
              xs(e, f, 1, P, 0, this);
              continue;
            } else if (h in Ia) {
              Ml(this, w, h, d, T ? ui(d, T + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              mr(this, w, "smooth", w.smooth, f);
              continue;
            } else if (h === "force3D") {
              w[h] = f;
              continue;
            } else if (h === "transform") {
              Dl(this, f, e);
              continue;
            }
          } else h in o || (h = vi(h) || h);
          if (S || (_ || _ === 0) && (d || d === 0) && !fl.test(f) && h in o)
            m = (l + "").substr((d + "").length), _ || (_ = 0), b = We(f) || (h in wt.units ? wt.units[h] : m), m !== b && (d = Cr(e, h, l, b)), this._pt = new lt(this._pt, S ? w : o, h, d, (T ? ui(d, T + _) : _) - d, !S && (b === "px" || h === "zIndex") && r.autoRound !== !1 ? dl : ms), this._pt.u = b || 0, S && C !== f ? (this._pt.b = l, this._pt.e = C, this._pt.r = _l) : m !== b && b !== "%" && (this._pt.b = l, this._pt.r = hl);
          else if (h in o)
            Sl.call(this, e, h, l, T ? T + f : f);
          else if (h in e)
            this.add(e, h, l || e[h], T ? T + f : f, i, n);
          else if (h !== "parseTransform") {
            zs(h, f);
            continue;
          }
          S || (h in o ? O.push(h, 0, o[h]) : typeof e[h] == "function" ? O.push(h, 2, e[h]()) : O.push(h, 1, l || e[h])), s.push(h);
        }
      }
    x && ka(this);
  },
  render: function(e, r) {
    if (r.tween._time || !Gs())
      for (var t = r._pt; t; )
        t.r(e, t.d), t = t._next;
    else
      r.styles.revert();
  },
  get: rr,
  aliases: Gt,
  getSetter: function(e, r, t) {
    var i = Gt[r];
    return i && i.indexOf(",") < 0 && (r = i), r in ar && r !== ft && (e._gsap.x || rr(e, "x")) ? t && _o === t ? r === "scale" ? yl : ml : (_o = t || {}) && (r === "scale" ? vl : xl) : e.style && !As(e.style[r]) ? pl : ~r.indexOf("-") ? gl : Us(e, r);
  },
  core: {
    _removeProperty: Sr,
    _getMatrix: qs
  }
};
ct.utils.checkPrefix = vi;
ct.core.getStyleSaver = Aa;
(function(a, e, r, t) {
  var i = ut(a + "," + e + "," + r, function(n) {
    ar[n] = 1;
  });
  ut(e, function(n) {
    wt.units[n] = "deg", Ia[n] = 1;
  }), Gt[i[13]] = a + "," + e, ut(t, function(n) {
    var s = n.split(":");
    Gt[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  wt.units[a] = "px";
});
ct.registerPlugin(Ba);
var Ya = ct.registerPlugin(Ba) || ct;
Ya.core.Tween;
function El(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
  }
}
function Al(a, e, r) {
  return e && El(a.prototype, e), a;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ie, Sn, xt, yr, vr, ci, Xa, Ir, Ni, Va, nr, Bt, Ua, $a = function() {
  return Ie || typeof window < "u" && (Ie = window.gsap) && Ie.registerPlugin && Ie;
}, Wa = 1, ai = [], V = [], qt = [], Bi = Date.now, Ts = function(e, r) {
  return r;
}, Rl = function() {
  var e = Ni.core, r = e.bridge || {}, t = e._scrollers, i = e._proxies;
  t.push.apply(t, V), i.push.apply(i, qt), V = t, qt = i, Ts = function(s, o) {
    return r[s](o);
  };
}, br = function(e, r) {
  return ~qt.indexOf(e) && qt[qt.indexOf(e) + 1][r];
}, Yi = function(e) {
  return !!~Va.indexOf(e);
}, je = function(e, r, t, i, n) {
  return e.addEventListener(r, t, {
    passive: i !== !1,
    capture: !!n
  });
}, Je = function(e, r, t, i) {
  return e.removeEventListener(r, t, !!i);
}, ln = "scrollLeft", fn = "scrollTop", bs = function() {
  return nr && nr.isPressed || V.cache++;
}, Ln = function(e, r) {
  var t = function i(n) {
    if (n || n === 0) {
      Wa && (xt.history.scrollRestoration = "manual");
      var s = nr && nr.isPressed;
      n = i.v = Math.round(n) || (nr && nr.iOS ? 1 : 0), e(n), i.cacheID = V.cache, s && Ts("ss", n);
    } else (r || V.cache !== i.cacheID || Ts("ref")) && (i.cacheID = V.cache, i.v = e());
    return i.v + i.offset;
  };
  return t.offset = 0, e && t;
}, nt = {
  s: ln,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Ln(function(a) {
    return arguments.length ? xt.scrollTo(a, ke.sc()) : xt.pageXOffset || yr[ln] || vr[ln] || ci[ln] || 0;
  })
}, ke = {
  s: fn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: nt,
  sc: Ln(function(a) {
    return arguments.length ? xt.scrollTo(nt.sc(), a) : xt.pageYOffset || yr[fn] || vr[fn] || ci[fn] || 0;
  })
}, ot = function(e, r) {
  return (r && r._ctx && r._ctx.selector || Ie.utils.toArray)(e)[0] || (typeof e == "string" && Ie.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Fl = function(e, r) {
  for (var t = r.length; t--; )
    if (r[t] === e || r[t].contains(e))
      return !0;
  return !1;
}, Pr = function(e, r) {
  var t = r.s, i = r.sc;
  Yi(e) && (e = yr.scrollingElement || vr);
  var n = V.indexOf(e), s = i === ke.sc ? 1 : 2;
  !~n && (n = V.push(e) - 1), V[n + s] || je(e, "scroll", bs);
  var o = V[n + s], u = o || (V[n + s] = Ln(br(e, t), !0) || (Yi(e) ? i : Ln(function(l) {
    return arguments.length ? e[t] = l : e[t];
  })));
  return u.target = e, o || (u.smooth = Ie.getProperty(e, "scrollBehavior") === "smooth"), u;
}, ws = function(e, r, t) {
  var i = e, n = e, s = Bi(), o = s, u = r || 50, l = Math.max(500, u * 3), f = function(p, h) {
    var m = Bi();
    h || m - s > u ? (n = i, i = p, o = s, s = m) : t ? i += p : i = n + (p - n) / (m - o) * (s - o);
  }, _ = function() {
    n = i = t ? 0 : i, o = s = 0;
  }, d = function(p) {
    var h = o, m = n, b = Bi();
    return (p || p === 0) && p !== i && f(p), s === o || b - o > l ? 0 : (i + (t ? m : -m)) / ((t ? b : s) - h) * 1e3;
  };
  return {
    update: f,
    reset: _,
    getVelocity: d
  };
}, Pi = function(e, r) {
  return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, wo = function(e) {
  var r = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(r) >= Math.abs(t) ? r : t;
}, Ga = function() {
  Ni = Ie.core.globals().ScrollTrigger, Ni && Ni.core && Rl();
}, Ha = function(e) {
  return Ie = e || $a(), !Sn && Ie && typeof document < "u" && document.body && (xt = window, yr = document, vr = yr.documentElement, ci = yr.body, Va = [xt, yr, vr, ci], Ie.utils.clamp, Ua = Ie.core.context || function() {
  }, Ir = "onpointerenter" in ci ? "pointer" : "mouse", Xa = xe.isTouch = xt.matchMedia && xt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in xt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Bt = xe.eventTypes = ("ontouchstart" in vr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in vr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Wa = 0;
  }, 500), Ga(), Sn = 1), Sn;
};
nt.op = ke;
V.cache = 0;
var xe = /* @__PURE__ */ function() {
  function a(r) {
    this.init(r);
  }
  var e = a.prototype;
  return e.init = function(t) {
    Sn || Ha(Ie) || console.warn("Please gsap.registerPlugin(Observer)"), Ni || Ga();
    var i = t.tolerance, n = t.dragMinimum, s = t.type, o = t.target, u = t.lineHeight, l = t.debounce, f = t.preventDefault, _ = t.onStop, d = t.onStopDelay, c = t.ignore, p = t.wheelSpeed, h = t.event, m = t.onDragStart, b = t.onDragEnd, T = t.onDrag, S = t.onPress, v = t.onRelease, w = t.onRight, P = t.onLeft, x = t.onUp, O = t.onDown, C = t.onChangeX, k = t.onChangeY, z = t.onChange, M = t.onToggleX, W = t.onToggleY, U = t.onHover, K = t.onHoverEnd, G = t.onMove, F = t.ignoreCheck, Q = t.isNormalizer, ne = t.onGestureStart, g = t.onGestureEnd, se = t.onWheel, qe = t.onEnable, Rt = t.onDisable, he = t.onClick, Re = t.scrollSpeed, Ne = t.capture, Te = t.allowClicks, Ke = t.lockAxis, Be = t.onLockAxis;
    this.target = o = ot(o) || vr, this.vars = t, c && (c = Ie.utils.toArray(c)), i = i || 1e-9, n = n || 0, p = p || 1, Re = Re || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(xt.getComputedStyle(ci).lineHeight) || 22);
    var ur, Ze, Qe, Z, ge, st, ht, y = this, _t = 0, Zt = 0, lr = t.passive || !f && t.passive !== !1, _e = Pr(o, nt), Qt = Pr(o, ke), fr = _e(), Or = Qt(), Oe = ~s.indexOf("touch") && !~s.indexOf("pointer") && Bt[0] === "pointerdown", cr = Yi(o), me = o.ownerDocument || yr, Ft = [0, 0, 0], Pt = [0, 0, 0], Jt = 0, Ti = function() {
      return Jt = Bi();
    }, be = function(R, J) {
      return (y.event = R) && c && Fl(R.target, c) || J && Oe && R.pointerType !== "touch" || F && F(R, J);
    }, sn = function() {
      y._vx.reset(), y._vy.reset(), Ze.pause(), _ && _(y);
    }, jt = function() {
      var R = y.deltaX = wo(Ft), J = y.deltaY = wo(Pt), D = Math.abs(R) >= i, I = Math.abs(J) >= i;
      z && (D || I) && z(y, R, J, Ft, Pt), D && (w && y.deltaX > 0 && w(y), P && y.deltaX < 0 && P(y), C && C(y), M && y.deltaX < 0 != _t < 0 && M(y), _t = y.deltaX, Ft[0] = Ft[1] = Ft[2] = 0), I && (O && y.deltaY > 0 && O(y), x && y.deltaY < 0 && x(y), k && k(y), W && y.deltaY < 0 != Zt < 0 && W(y), Zt = y.deltaY, Pt[0] = Pt[1] = Pt[2] = 0), (Z || Qe) && (G && G(y), Qe && (m && Qe === 1 && m(y), T && T(y), Qe = 0), Z = !1), st && !(st = !1) && Be && Be(y), ge && (se(y), ge = !1), ur = 0;
    }, Qr = function(R, J, D) {
      Ft[D] += R, Pt[D] += J, y._vx.update(R), y._vy.update(J), l ? ur || (ur = requestAnimationFrame(jt)) : jt();
    }, Jr = function(R, J) {
      Ke && !ht && (y.axis = ht = Math.abs(R) > Math.abs(J) ? "x" : "y", st = !0), ht !== "y" && (Ft[2] += R, y._vx.update(R, !0)), ht !== "x" && (Pt[2] += J, y._vy.update(J, !0)), l ? ur || (ur = requestAnimationFrame(jt)) : jt();
    }, hr = function(R) {
      if (!be(R, 1)) {
        R = Pi(R, f);
        var J = R.clientX, D = R.clientY, I = J - y.x, A = D - y.y, L = y.isDragging;
        y.x = J, y.y = D, (L || (I || A) && (Math.abs(y.startX - J) >= n || Math.abs(y.startY - D) >= n)) && (Qe || (Qe = L ? 2 : 1), L || (y.isDragging = !0), Jr(I, A));
      }
    }, Mr = y.onPress = function(N) {
      be(N, 1) || N && N.button || (y.axis = ht = null, Ze.pause(), y.isPressed = !0, N = Pi(N), _t = Zt = 0, y.startX = y.x = N.clientX, y.startY = y.y = N.clientY, y._vx.reset(), y._vy.reset(), je(Q ? o : me, Bt[1], hr, lr, !0), y.deltaX = y.deltaY = 0, S && S(y));
    }, $ = y.onRelease = function(N) {
      if (!be(N, 1)) {
        Je(Q ? o : me, Bt[1], hr, !0);
        var R = !isNaN(y.y - y.startY), J = y.isDragging, D = J && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), I = Pi(N);
        !D && R && (y._vx.reset(), y._vy.reset(), f && Te && Ie.delayedCall(0.08, function() {
          if (Bi() - Jt > 300 && !N.defaultPrevented) {
            if (N.target.click)
              N.target.click();
            else if (me.createEvent) {
              var A = me.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, xt, 1, I.screenX, I.screenY, I.clientX, I.clientY, !1, !1, !1, !1, 0, null), N.target.dispatchEvent(A);
            }
          }
        })), y.isDragging = y.isGesturing = y.isPressed = !1, _ && J && !Q && Ze.restart(!0), Qe && jt(), b && J && b(y), v && v(y, D);
      }
    }, Dr = function(R) {
      return R.touches && R.touches.length > 1 && (y.isGesturing = !0) && ne(R, y.isDragging);
    }, zt = function() {
      return (y.isGesturing = !1) || g(y);
    }, It = function(R) {
      if (!be(R)) {
        var J = _e(), D = Qt();
        Qr((J - fr) * Re, (D - Or) * Re, 1), fr = J, Or = D, _ && Ze.restart(!0);
      }
    }, Lt = function(R) {
      if (!be(R)) {
        R = Pi(R, f), se && (ge = !0);
        var J = (R.deltaMode === 1 ? u : R.deltaMode === 2 ? xt.innerHeight : 1) * p;
        Qr(R.deltaX * J, R.deltaY * J, 0), _ && !Q && Ze.restart(!0);
      }
    }, Er = function(R) {
      if (!be(R)) {
        var J = R.clientX, D = R.clientY, I = J - y.x, A = D - y.y;
        y.x = J, y.y = D, Z = !0, _ && Ze.restart(!0), (I || A) && Jr(I, A);
      }
    }, jr = function(R) {
      y.event = R, U(y);
    }, er = function(R) {
      y.event = R, K(y);
    }, bi = function(R) {
      return be(R) || Pi(R, f) && he(y);
    };
    Ze = y._dc = Ie.delayedCall(d || 0.25, sn).pause(), y.deltaX = y.deltaY = 0, y._vx = ws(0, 50, !0), y._vy = ws(0, 50, !0), y.scrollX = _e, y.scrollY = Qt, y.isDragging = y.isGesturing = y.isPressed = !1, Ua(this), y.enable = function(N) {
      return y.isEnabled || (je(cr ? me : o, "scroll", bs), s.indexOf("scroll") >= 0 && je(cr ? me : o, "scroll", It, lr, Ne), s.indexOf("wheel") >= 0 && je(o, "wheel", Lt, lr, Ne), (s.indexOf("touch") >= 0 && Xa || s.indexOf("pointer") >= 0) && (je(o, Bt[0], Mr, lr, Ne), je(me, Bt[2], $), je(me, Bt[3], $), Te && je(o, "click", Ti, !0, !0), he && je(o, "click", bi), ne && je(me, "gesturestart", Dr), g && je(me, "gestureend", zt), U && je(o, Ir + "enter", jr), K && je(o, Ir + "leave", er), G && je(o, Ir + "move", Er)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = Z = Qe = !1, y._vx.reset(), y._vy.reset(), fr = _e(), Or = Qt(), N && N.type && Mr(N), qe && qe(y)), y;
    }, y.disable = function() {
      y.isEnabled && (ai.filter(function(N) {
        return N !== y && Yi(N.target);
      }).length || Je(cr ? me : o, "scroll", bs), y.isPressed && (y._vx.reset(), y._vy.reset(), Je(Q ? o : me, Bt[1], hr, !0)), Je(cr ? me : o, "scroll", It, Ne), Je(o, "wheel", Lt, Ne), Je(o, Bt[0], Mr, Ne), Je(me, Bt[2], $), Je(me, Bt[3], $), Je(o, "click", Ti, !0), Je(o, "click", bi), Je(me, "gesturestart", Dr), Je(me, "gestureend", zt), Je(o, Ir + "enter", jr), Je(o, Ir + "leave", er), Je(o, Ir + "move", Er), y.isEnabled = y.isPressed = y.isDragging = !1, Rt && Rt(y));
    }, y.kill = y.revert = function() {
      y.disable();
      var N = ai.indexOf(y);
      N >= 0 && ai.splice(N, 1), nr === y && (nr = 0);
    }, ai.push(y), Q && Yi(o) && (nr = y), y.enable(h);
  }, Al(a, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), a;
}();
xe.version = "3.14.2";
xe.create = function(a) {
  return new xe(a);
};
xe.register = Ha;
xe.getAll = function() {
  return ai.slice();
};
xe.getById = function(a) {
  return ai.filter(function(e) {
    return e.vars.id === a;
  })[0];
};
$a() && Ie.registerPlugin(xe);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var E, ii, X, ie, yt, j, Ks, Nn, tn, Xi, Di, cn, Ue, $n, Ss, tt, So, Co, ni, qa, es, Ka, et, Cs, Za, Qa, dr, Ps, Zs, hi, Qs, Vi, ks, ts, hn = 1, $e = Date.now, rs = $e(), At = 0, Ei = 0, Po = function(e, r, t) {
  var i = gt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + r + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, ko = function(e, r) {
  return r && (!gt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, zl = function a() {
  return Ei && requestAnimationFrame(a);
}, Oo = function() {
  return $n = 1;
}, Mo = function() {
  return $n = 0;
}, $t = function(e) {
  return e;
}, Ai = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Ja = function() {
  return typeof window < "u";
}, ja = function() {
  return E || Ja() && (E = window.gsap) && E.registerPlugin && E;
}, Hr = function(e) {
  return !!~Ks.indexOf(e);
}, eu = function(e) {
  return (e === "Height" ? Qs : X["inner" + e]) || yt["client" + e] || j["client" + e];
}, tu = function(e) {
  return br(e, "getBoundingClientRect") || (Hr(e) ? function() {
    return Mn.width = X.innerWidth, Mn.height = Qs, Mn;
  } : function() {
    return ir(e);
  });
}, Il = function(e, r, t) {
  var i = t.d, n = t.d2, s = t.a;
  return (s = br(e, "getBoundingClientRect")) ? function() {
    return s()[i];
  } : function() {
    return (r ? eu(n) : e["client" + n]) || 0;
  };
}, Ll = function(e, r) {
  return !r || ~qt.indexOf(e) ? tu(e) : function() {
    return Mn;
  };
}, Ht = function(e, r) {
  var t = r.s, i = r.d2, n = r.d, s = r.a;
  return Math.max(0, (t = "scroll" + i) && (s = br(e, t)) ? s() - tu(e)()[n] : Hr(e) ? (yt[t] || j[t]) - eu(i) : e[t] - e["offset" + i]);
}, _n = function(e, r) {
  for (var t = 0; t < ni.length; t += 3)
    (!r || ~r.indexOf(ni[t + 1])) && e(ni[t], ni[t + 1], ni[t + 2]);
}, gt = function(e) {
  return typeof e == "string";
}, Ge = function(e) {
  return typeof e == "function";
}, Ri = function(e) {
  return typeof e == "number";
}, Lr = function(e) {
  return typeof e == "object";
}, ki = function(e, r, t) {
  return e && e.progress(r ? 0 : 1) && t && e.pause();
}, is = function(e, r) {
  if (e.enabled) {
    var t = e._ctx ? e._ctx.add(function() {
      return r(e);
    }) : r(e);
    t && t.totalTime && (e.callbackAnimation = t);
  }
}, ti = Math.abs, ru = "left", iu = "top", Js = "right", js = "bottom", $r = "width", Wr = "height", Ui = "Right", $i = "Left", Wi = "Top", Gi = "Bottom", we = "padding", Ot = "margin", xi = "Width", eo = "Height", Pe = "px", Mt = function(e) {
  return X.getComputedStyle(e);
}, Nl = function(e) {
  var r = Mt(e).position;
  e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
}, Do = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, ir = function(e, r) {
  var t = r && Mt(e)[Ss] !== "matrix(1, 0, 0, 1, 0, 0)" && E.to(e, {
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
  }).progress(1), i = e.getBoundingClientRect();
  return t && t.progress(0).kill(), i;
}, Bn = function(e, r) {
  var t = r.d2;
  return e["offset" + t] || e["client" + t] || 0;
}, nu = function(e) {
  var r = [], t = e.labels, i = e.duration(), n;
  for (n in t)
    r.push(t[n] / i);
  return r;
}, Bl = function(e) {
  return function(r) {
    return E.utils.snap(nu(e), r);
  };
}, to = function(e) {
  var r = E.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
    return i - n;
  });
  return t ? function(i, n, s) {
    s === void 0 && (s = 1e-3);
    var o;
    if (!n)
      return r(i);
    if (n > 0) {
      for (i -= s, o = 0; o < t.length; o++)
        if (t[o] >= i)
          return t[o];
      return t[o - 1];
    } else
      for (o = t.length, i += s; o--; )
        if (t[o] <= i)
          return t[o];
    return t[0];
  } : function(i, n, s) {
    s === void 0 && (s = 1e-3);
    var o = r(i);
    return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : r(n < 0 ? i - e : i + e);
  };
}, Yl = function(e) {
  return function(r, t) {
    return to(nu(e))(r, t.direction);
  };
}, dn = function(e, r, t, i) {
  return t.split(",").forEach(function(n) {
    return e(r, n, i);
  });
}, Ee = function(e, r, t, i, n) {
  return e.addEventListener(r, t, {
    passive: !i,
    capture: !!n
  });
}, De = function(e, r, t, i) {
  return e.removeEventListener(r, t, !!i);
}, pn = function(e, r, t) {
  t = t && t.wheelHandler, t && (e(r, "wheel", t), e(r, "touchmove", t));
}, Eo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, gn = {
  toggleActions: "play",
  anticipatePin: 0
}, Yn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Cn = function(e, r) {
  if (gt(e)) {
    var t = e.indexOf("="), i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (i *= r / 100), e = e.substr(0, t - 1)), e = i + (e in Yn ? Yn[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0);
  }
  return e;
}, mn = function(e, r, t, i, n, s, o, u) {
  var l = n.startColor, f = n.endColor, _ = n.fontSize, d = n.indent, c = n.fontWeight, p = ie.createElement("div"), h = Hr(t) || br(t, "pinType") === "fixed", m = e.indexOf("scroller") !== -1, b = h ? j : t, T = e.indexOf("start") !== -1, S = T ? l : f, v = "border-color:" + S + ";font-size:" + _ + ";color:" + S + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || u) && h ? "fixed;" : "absolute;"), (m || u || !h) && (v += (i === ke ? Js : js) + ":" + (s + parseFloat(d)) + "px;"), o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = T, p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), p.style.cssText = v, p.innerText = r || r === 0 ? e + "-" + r : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + i.op.d2], Pn(p, 0, i, T), p;
}, Pn = function(e, r, t, i) {
  var n = {
    display: "block"
  }, s = t[i ? "os2" : "p2"], o = t[i ? "p2" : "os2"];
  e._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + s + xi] = 1, n["border" + o + xi] = 0, n[t.p] = r + "px", E.set(e, n);
}, Y = [], Os = {}, rn, Ao = function() {
  return $e() - At > 34 && (rn || (rn = requestAnimationFrame(sr)));
}, ri = function() {
  (!et || !et.isPressed || et.startX > j.clientWidth) && (V.cache++, et ? rn || (rn = requestAnimationFrame(sr)) : sr(), At || Kr("scrollStart"), At = $e());
}, ns = function() {
  Qa = X.innerWidth, Za = X.innerHeight;
}, Fi = function(e) {
  V.cache++, (e === !0 || !Ue && !Ka && !ie.fullscreenElement && !ie.webkitFullscreenElement && (!Cs || Qa !== X.innerWidth || Math.abs(X.innerHeight - Za) > X.innerHeight * 0.25)) && Nn.restart(!0);
}, qr = {}, Xl = [], su = function a() {
  return De(B, "scrollEnd", a) || Br(!0);
}, Kr = function(e) {
  return qr[e] && qr[e].map(function(r) {
    return r();
  }) || Xl;
}, pt = [], ou = function(e) {
  for (var r = 0; r < pt.length; r += 5)
    (!e || pt[r + 4] && pt[r + 4].query === e) && (pt[r].style.cssText = pt[r + 1], pt[r].getBBox && pt[r].setAttribute("transform", pt[r + 2] || ""), pt[r + 3].uncache = 1);
}, au = function() {
  return V.forEach(function(e) {
    return Ge(e) && ++e.cacheID && (e.rec = e());
  });
}, ro = function(e, r) {
  var t;
  for (tt = 0; tt < Y.length; tt++)
    t = Y[tt], t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
  Vi = !0, r && ou(r), r || Kr("revert");
}, uu = function(e, r) {
  V.cache++, (r || !rt) && V.forEach(function(t) {
    return Ge(t) && t.cacheID++ && (t.rec = 0);
  }), gt(e) && (X.history.scrollRestoration = Zs = e);
}, rt, Gr = 0, Ro, Vl = function() {
  if (Ro !== Gr) {
    var e = Ro = Gr;
    requestAnimationFrame(function() {
      return e === Gr && Br(!0);
    });
  }
}, lu = function() {
  j.appendChild(hi), Qs = !et && hi.offsetHeight || X.innerHeight, j.removeChild(hi);
}, Fo = function(e) {
  return tn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
    return r.style.display = e ? "none" : "block";
  });
}, Br = function(e, r) {
  if (yt = ie.documentElement, j = ie.body, Ks = [X, ie, yt, j], At && !e && !Vi) {
    Ee(B, "scrollEnd", su);
    return;
  }
  lu(), rt = B.isRefreshing = !0, Vi || au();
  var t = Kr("refreshInit");
  qa && B.sort(), r || ro(), V.forEach(function(i) {
    Ge(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), Y.slice(0).forEach(function(i) {
    return i.refresh();
  }), Vi = !1, Y.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", s = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
    }
  }), ks = 1, Fo(!0), Y.forEach(function(i) {
    var n = Ht(i.scroller, i._dir), s = i.vars.end === "max" || i._endClamp && i.end > n, o = i._startClamp && i.start >= n;
    (s || o) && i.setPositions(o ? n - 1 : i.start, s ? Math.max(o ? n : i.start + 1, n) : i.end, !0);
  }), Fo(!1), ks = 0, t.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), V.forEach(function(i) {
    Ge(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), uu(Zs, 1), Nn.pause(), Gr++, rt = 2, sr(2), Y.forEach(function(i) {
    return Ge(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), rt = B.isRefreshing = !1, Kr("refresh");
}, Ms = 0, kn = 1, Hi, sr = function(e) {
  if (e === 2 || !rt && !Vi) {
    B.isUpdating = !0, Hi && Hi.update(0);
    var r = Y.length, t = $e(), i = t - rs >= 50, n = r && Y[0].scroll();
    if (kn = Ms > n ? -1 : 1, rt || (Ms = n), i && (At && !$n && t - At > 200 && (At = 0, Kr("scrollEnd")), Di = rs, rs = t), kn < 0) {
      for (tt = r; tt-- > 0; )
        Y[tt] && Y[tt].update(0, i);
      kn = 1;
    } else
      for (tt = 0; tt < r; tt++)
        Y[tt] && Y[tt].update(0, i);
    B.isUpdating = !1;
  }
  rn = 0;
}, Ds = [ru, iu, js, Js, Ot + Gi, Ot + Ui, Ot + Wi, Ot + $i, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], On = Ds.concat([$r, Wr, "boxSizing", "max" + xi, "max" + eo, "position", Ot, we, we + Wi, we + Ui, we + Gi, we + $i]), Ul = function(e, r, t) {
  _i(t);
  var i = e._gsap;
  if (i.spacerIsNative)
    _i(i.spacerState);
  else if (e._gsap.swappedIn) {
    var n = r.parentNode;
    n && (n.insertBefore(e, r), n.removeChild(r));
  }
  e._gsap.swappedIn = !1;
}, ss = function(e, r, t, i) {
  if (!e._gsap.swappedIn) {
    for (var n = Ds.length, s = r.style, o = e.style, u; n--; )
      u = Ds[n], s[u] = t[u];
    s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[js] = o[Js] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[$r] = Bn(e, nt) + Pe, s[Wr] = Bn(e, ke) + Pe, s[we] = o[Ot] = o[iu] = o[ru] = "0", _i(i), o[$r] = o["max" + xi] = t[$r], o[Wr] = o["max" + eo] = t[Wr], o[we] = t[we], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, $l = /([A-Z])/g, _i = function(e) {
  if (e) {
    var r = e.t.style, t = e.length, i = 0, n, s;
    for ((e.t._gsap || E.core.getCache(e.t)).uncache = 1; i < t; i += 2)
      s = e[i + 1], n = e[i], s ? r[n] = s : r[n] && r.removeProperty(n.replace($l, "-$1").toLowerCase());
  }
}, yn = function(e) {
  for (var r = On.length, t = e.style, i = [], n = 0; n < r; n++)
    i.push(On[n], t[On[n]]);
  return i.t = e, i;
}, Wl = function(e, r, t) {
  for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
    o = e[s], i.push(o, o in r ? r[o] : e[s + 1]);
  return i.t = e.t, i;
}, Mn = {
  left: 0,
  top: 0
}, zo = function(e, r, t, i, n, s, o, u, l, f, _, d, c, p) {
  Ge(e) && (e = e(u)), gt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Cn("0" + e.substr(3), t) : 0));
  var h = c ? c.time() : 0, m, b, T;
  if (c && c.seek(0), isNaN(e) || (e = +e), Ri(e))
    c && (e = E.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, d, e)), o && Pn(o, t, i, !0);
  else {
    Ge(r) && (r = r(u));
    var S = (e || "0").split(" "), v, w, P, x;
    T = ot(r, u) || j, v = ir(T) || {}, (!v || !v.left && !v.top) && Mt(T).display === "none" && (x = T.style.display, T.style.display = "block", v = ir(T), x ? T.style.display = x : T.style.removeProperty("display")), w = Cn(S[0], v[i.d]), P = Cn(S[1] || "0", t), e = v[i.p] - l[i.p] - f + w + n - P, o && Pn(o, P, i, t - P < 20 || o._isStart && P > 20), t -= t - P;
  }
  if (p && (u[p] = e || -1e-3, e < 0 && (e = 0)), s) {
    var O = e + t, C = s._isStart;
    m = "scroll" + i.d2, Pn(s, O, i, C && O > 20 || !C && (_ ? Math.max(j[m], yt[m]) : s.parentNode[m]) <= O + 1), _ && (l = ir(o), _ && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Pe));
  }
  return c && T && (m = ir(T), c.seek(d), b = ir(T), c._caScrollDist = m[i.p] - b[i.p], e = e / c._caScrollDist * d), c && c.seek(h), c ? e : Math.round(e);
}, Gl = /(webkit|moz|length|cssText|inset)/i, Io = function(e, r, t, i) {
  if (e.parentNode !== r) {
    var n = e.style, s, o;
    if (r === j) {
      e._stOrig = n.cssText, o = Mt(e);
      for (s in o)
        !+s && !Gl.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
      n.top = t, n.left = i;
    } else
      n.cssText = e._stOrig;
    E.core.getCache(e).uncache = 1, r.appendChild(e);
  }
}, fu = function(e, r, t) {
  var i = r, n = i;
  return function(s) {
    var o = Math.round(e());
    return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && (s = o, t && t()), n = i, i = Math.round(s), i;
  };
}, vn = function(e, r, t) {
  var i = {};
  i[r.p] = "+=" + t, E.set(e, i);
}, Lo = function(e, r) {
  var t = Pr(e, r), i = "_scroll" + r.p2, n = function s(o, u, l, f, _) {
    var d = s.tween, c = u.onComplete, p = {};
    l = l || t();
    var h = fu(t, l, function() {
      d.kill(), s.tween = 0;
    });
    return _ = f && _ || 0, f = f || o - l, d && d.kill(), u[i] = o, u.inherit = !1, u.modifiers = p, p[i] = function() {
      return h(l + f * d.ratio + _ * d.ratio * d.ratio);
    }, u.onUpdate = function() {
      V.cache++, s.tween && sr();
    }, u.onComplete = function() {
      s.tween = 0, c && c.call(d);
    }, d = s.tween = E.to(e, u), d;
  };
  return e[i] = t, t.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Ee(e, "wheel", t.wheelHandler), B.isTouch && Ee(e, "touchmove", t.wheelHandler), n;
}, B = /* @__PURE__ */ function() {
  function a(r, t) {
    ii || a.register(E) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ps(this), this.init(r, t);
  }
  var e = a.prototype;
  return e.init = function(t, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ei) {
      this.update = this.refresh = this.kill = $t;
      return;
    }
    t = Do(gt(t) || Ri(t) || t.nodeType ? {
      trigger: t
    } : t, gn);
    var n = t, s = n.onUpdate, o = n.toggleClass, u = n.id, l = n.onToggle, f = n.onRefresh, _ = n.scrub, d = n.trigger, c = n.pin, p = n.pinSpacing, h = n.invalidateOnRefresh, m = n.anticipatePin, b = n.onScrubComplete, T = n.onSnapComplete, S = n.once, v = n.snap, w = n.pinReparent, P = n.pinSpacer, x = n.containerAnimation, O = n.fastScrollEnd, C = n.preventOverlaps, k = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? nt : ke, z = !_ && _ !== 0, M = ot(t.scroller || X), W = E.core.getCache(M), U = Hr(M), K = ("pinType" in t ? t.pinType : br(M, "pinType") || U && "fixed") === "fixed", G = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], F = z && t.toggleActions.split(" "), Q = "markers" in t ? t.markers : gn.markers, ne = U ? 0 : parseFloat(Mt(M)["border" + k.p2 + xi]) || 0, g = this, se = t.onRefreshInit && function() {
      return t.onRefreshInit(g);
    }, qe = Il(M, U, k), Rt = Ll(M, U), he = 0, Re = 0, Ne = 0, Te = Pr(M, k), Ke, Be, ur, Ze, Qe, Z, ge, st, ht, y, _t, Zt, lr, _e, Qt, fr, Or, Oe, cr, me, Ft, Pt, Jt, Ti, be, sn, jt, Qr, Jr, hr, Mr, $, Dr, zt, It, Lt, Er, jr, er;
    if (g._startClamp = g._endClamp = !1, g._dir = k, m *= 45, g.scroller = M, g.scroll = x ? x.time.bind(x) : Te, Ze = Te(), g.vars = t, i = i || t.animation, "refreshPriority" in t && (qa = 1, t.refreshPriority === -9999 && (Hi = g)), W.tweenScroll = W.tweenScroll || {
      top: Lo(M, ke),
      left: Lo(M, nt)
    }, g.tweenTo = Ke = W.tweenScroll[k.p], g.scrubDuration = function(D) {
      Dr = Ri(D) && D, Dr ? $ ? $.duration(D) : $ = E.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Dr,
        paused: !0,
        onComplete: function() {
          return b && b(g);
        }
      }) : ($ && $.progress(1).kill(), $ = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(_), hr = 0, u || (u = i.vars.id)), v && ((!Lr(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in j.style && E.set(U ? [j, yt] : M, {
      scrollBehavior: "auto"
    }), V.forEach(function(D) {
      return Ge(D) && D.target === (U ? ie.scrollingElement || yt : M) && (D.smooth = !1);
    }), ur = Ge(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Bl(i) : v.snapTo === "labelsDirectional" ? Yl(i) : v.directional !== !1 ? function(D, I) {
      return to(v.snapTo)(D, $e() - Re < 500 ? 0 : I.direction);
    } : E.utils.snap(v.snapTo), zt = v.duration || {
      min: 0.1,
      max: 2
    }, zt = Lr(zt) ? Xi(zt.min, zt.max) : Xi(zt, zt), It = E.delayedCall(v.delay || Dr / 2 || 0.1, function() {
      var D = Te(), I = $e() - Re < 500, A = Ke.tween;
      if ((I || Math.abs(g.getVelocity()) < 10) && !A && !$n && he !== D) {
        var L = (D - Z) / _e, Me = i && !z ? i.totalProgress() : L, H = I ? 0 : (Me - Mr) / ($e() - Di) * 1e3 || 0, ye = E.utils.clamp(-L, 1 - L, ti(H / 2) * H / 0.185), Ye = L + (v.inertia === !1 ? 0 : ye), de, oe, ee = v, Nt = ee.onStart, ue = ee.onInterrupt, dt = ee.onComplete;
        if (de = ur(Ye, g), Ri(de) || (de = Ye), oe = Math.max(0, Math.round(Z + de * _e)), D <= ge && D >= Z && oe !== D) {
          if (A && !A._initted && A.data <= ti(oe - D))
            return;
          v.inertia === !1 && (ye = de - L), Ke(oe, {
            duration: zt(ti(Math.max(ti(Ye - Me), ti(de - Me)) * 0.185 / H / 0.05 || 0)),
            ease: v.ease || "power3",
            data: ti(oe - D),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return It.restart(!0) && ue && ue(g);
            },
            onComplete: function() {
              g.update(), he = Te(), i && !z && ($ ? $.resetTo("totalProgress", de, i._tTime / i._tDur) : i.progress(de)), hr = Mr = i && !z ? i.totalProgress() : g.progress, T && T(g), dt && dt(g);
            }
          }, D, ye * _e, oe - D - ye * _e), Nt && Nt(g, Ke.tween);
        }
      } else g.isActive && he !== D && It.restart(!0);
    }).pause()), u && (Os[u] = g), d = g.trigger = ot(d || c !== !0 && c), er = d && d._gsap && d._gsap.stRevert, er && (er = er(g)), c = c === !0 ? d : ot(c), gt(o) && (o = {
      targets: d,
      className: o
    }), c && (p === !1 || p === Ot || (p = !p && c.parentNode && c.parentNode.style && Mt(c.parentNode).display === "flex" ? !1 : we), g.pin = c, Be = E.core.getCache(c), Be.spacer ? Qt = Be.pinState : (P && (P = ot(P), P && !P.nodeType && (P = P.current || P.nativeElement), Be.spacerIsNative = !!P, P && (Be.spacerState = yn(P))), Be.spacer = Oe = P || ie.createElement("div"), Oe.classList.add("pin-spacer"), u && Oe.classList.add("pin-spacer-" + u), Be.pinState = Qt = yn(c)), t.force3D !== !1 && E.set(c, {
      force3D: !0
    }), g.spacer = Oe = Be.spacer, Jr = Mt(c), Ti = Jr[p + k.os2], me = E.getProperty(c), Ft = E.quickSetter(c, k.a, Pe), ss(c, Oe, Jr), Or = yn(c)), Q) {
      Zt = Lr(Q) ? Do(Q, Eo) : Eo, y = mn("scroller-start", u, M, k, Zt, 0), _t = mn("scroller-end", u, M, k, Zt, 0, y), cr = y["offset" + k.op.d2];
      var bi = ot(br(M, "content") || M);
      st = this.markerStart = mn("start", u, bi, k, Zt, cr, 0, x), ht = this.markerEnd = mn("end", u, bi, k, Zt, cr, 0, x), x && (jr = E.quickSetter([st, ht], k.a, Pe)), !K && !(qt.length && br(M, "fixedMarkers") === !0) && (Nl(U ? j : M), E.set([y, _t], {
        force3D: !0
      }), sn = E.quickSetter(y, k.a, Pe), Qr = E.quickSetter(_t, k.a, Pe));
    }
    if (x) {
      var N = x.vars.onUpdate, R = x.vars.onUpdateParams;
      x.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), N && N.apply(x, R || []);
      });
    }
    if (g.previous = function() {
      return Y[Y.indexOf(g) - 1];
    }, g.next = function() {
      return Y[Y.indexOf(g) + 1];
    }, g.revert = function(D, I) {
      if (!I)
        return g.kill(!0);
      var A = D !== !1 || !g.enabled, L = Ue;
      A !== g.isReverted && (A && (Lt = Math.max(Te(), g.scroll.rec || 0), Ne = g.progress, Er = i && i.progress()), st && [st, ht, y, _t].forEach(function(Me) {
        return Me.style.display = A ? "none" : "block";
      }), A && (Ue = g, g.update(A)), c && (!w || !g.isActive) && (A ? Ul(c, Oe, Qt) : ss(c, Oe, Mt(c), be)), A || g.update(A), Ue = L, g.isReverted = A);
    }, g.refresh = function(D, I, A, L) {
      if (!((Ue || !g.enabled) && !I)) {
        if (c && D && At) {
          Ee(a, "scrollEnd", su);
          return;
        }
        !rt && se && se(g), Ue = g, Ke.tween && !A && (Ke.tween.kill(), Ke.tween = 0), $ && $.pause(), h && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(_r) {
          return _r.vars.immediateRender && _r.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Me = qe(), H = Rt(), ye = x ? x.duration() : Ht(M, k), Ye = _e <= 0.01 || !_e, de = 0, oe = L || 0, ee = Lr(A) ? A.end : t.end, Nt = t.endTrigger || d, ue = Lr(A) ? A.start : t.start || (t.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"), dt = g.pinnedContainer = t.pinnedContainer && ot(t.pinnedContainer, g), Yt = d && Math.max(0, Y.indexOf(g)) || 0, Fe = Yt, ze, Xe, Ar, on, Ve, Ce, Xt, Wn, io, wi, Vt, Si, an;
        for (Q && Lr(A) && (Si = E.getProperty(y, k.p), an = E.getProperty(_t, k.p)); Fe-- > 0; )
          Ce = Y[Fe], Ce.end || Ce.refresh(0, 1) || (Ue = g), Xt = Ce.pin, Xt && (Xt === d || Xt === c || Xt === dt) && !Ce.isReverted && (wi || (wi = []), wi.unshift(Ce), Ce.revert(!0, !0)), Ce !== Y[Fe] && (Yt--, Fe--);
        for (Ge(ue) && (ue = ue(g)), ue = Po(ue, "start", g), Z = zo(ue, d, Me, k, Te(), st, y, g, H, ne, K, ye, x, g._startClamp && "_startClamp") || (c ? -1e-3 : 0), Ge(ee) && (ee = ee(g)), gt(ee) && !ee.indexOf("+=") && (~ee.indexOf(" ") ? ee = (gt(ue) ? ue.split(" ")[0] : "") + ee : (de = Cn(ee.substr(2), Me), ee = gt(ue) ? ue : (x ? E.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, Z) : Z) + de, Nt = d)), ee = Po(ee, "end", g), ge = Math.max(Z, zo(ee || (Nt ? "100% 0" : ye), Nt, Me, k, Te() + de, ht, _t, g, H, ne, K, ye, x, g._endClamp && "_endClamp")) || -1e-3, de = 0, Fe = Yt; Fe--; )
          Ce = Y[Fe] || {}, Xt = Ce.pin, Xt && Ce.start - Ce._pinPush <= Z && !x && Ce.end > 0 && (ze = Ce.end - (g._startClamp ? Math.max(0, Ce.start) : Ce.start), (Xt === d && Ce.start - Ce._pinPush < Z || Xt === dt) && isNaN(ue) && (de += ze * (1 - Ce.progress)), Xt === c && (oe += ze));
        if (Z += de, ge += de, g._startClamp && (g._startClamp += de), g._endClamp && !rt && (g._endClamp = ge || -1e-3, ge = Math.min(ge, Ht(M, k))), _e = ge - Z || (Z -= 0.01) && 1e-3, Ye && (Ne = E.utils.clamp(0, 1, E.utils.normalize(Z, ge, Lt))), g._pinPush = oe, st && de && (ze = {}, ze[k.a] = "+=" + de, dt && (ze[k.p] = "-=" + Te()), E.set([st, ht], ze)), c && !(ks && g.end >= Ht(M, k)))
          ze = Mt(c), on = k === ke, Ar = Te(), Pt = parseFloat(me(k.a)) + oe, !ye && ge > 1 && (Vt = (U ? ie.scrollingElement || yt : M).style, Vt = {
            style: Vt,
            value: Vt["overflow" + k.a.toUpperCase()]
          }, U && Mt(j)["overflow" + k.a.toUpperCase()] !== "scroll" && (Vt.style["overflow" + k.a.toUpperCase()] = "scroll")), ss(c, Oe, ze), Or = yn(c), Xe = ir(c, !0), Wn = K && Pr(M, on ? nt : ke)(), p ? (be = [p + k.os2, _e + oe + Pe], be.t = Oe, Fe = p === we ? Bn(c, k) + _e + oe : 0, Fe && (be.push(k.d, Fe + Pe), Oe.style.flexBasis !== "auto" && (Oe.style.flexBasis = Fe + Pe)), _i(be), dt && Y.forEach(function(_r) {
            _r.pin === dt && _r.vars.pinSpacing !== !1 && (_r._subPinOffset = !0);
          }), K && Te(Lt)) : (Fe = Bn(c, k), Fe && Oe.style.flexBasis !== "auto" && (Oe.style.flexBasis = Fe + Pe)), K && (Ve = {
            top: Xe.top + (on ? Ar - Z : Wn) + Pe,
            left: Xe.left + (on ? Wn : Ar - Z) + Pe,
            boxSizing: "border-box",
            position: "fixed"
          }, Ve[$r] = Ve["max" + xi] = Math.ceil(Xe.width) + Pe, Ve[Wr] = Ve["max" + eo] = Math.ceil(Xe.height) + Pe, Ve[Ot] = Ve[Ot + Wi] = Ve[Ot + Ui] = Ve[Ot + Gi] = Ve[Ot + $i] = "0", Ve[we] = ze[we], Ve[we + Wi] = ze[we + Wi], Ve[we + Ui] = ze[we + Ui], Ve[we + Gi] = ze[we + Gi], Ve[we + $i] = ze[we + $i], fr = Wl(Qt, Ve, w), rt && Te(0)), i ? (io = i._initted, es(1), i.render(i.duration(), !0, !0), Jt = me(k.a) - Pt + _e + oe, jt = Math.abs(_e - Jt) > 1, K && jt && fr.splice(fr.length - 2, 2), i.render(0, !0, !0), io || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), es(0)) : Jt = _e, Vt && (Vt.value ? Vt.style["overflow" + k.a.toUpperCase()] = Vt.value : Vt.style.removeProperty("overflow-" + k.a));
        else if (d && Te() && !x)
          for (Xe = d.parentNode; Xe && Xe !== j; )
            Xe._pinOffset && (Z -= Xe._pinOffset, ge -= Xe._pinOffset), Xe = Xe.parentNode;
        wi && wi.forEach(function(_r) {
          return _r.revert(!1, !0);
        }), g.start = Z, g.end = ge, Ze = Qe = rt ? Lt : Te(), !x && !rt && (Ze < Lt && Te(Lt), g.scroll.rec = 0), g.revert(!1, !0), Re = $e(), It && (he = -1, It.restart(!0)), Ue = 0, i && z && (i._initted || Er) && i.progress() !== Er && i.progress(Er || 0, !0).render(i.time(), !0, !0), (Ye || Ne !== g.progress || x || h || i && !i._initted) && (i && !z && (i._initted || Ne || i.vars.immediateRender !== !1) && i.totalProgress(x && Z < -1e-3 && !Ne ? E.utils.normalize(Z, ge, 0) : Ne, !0), g.progress = Ye || (Ze - Z) / _e === Ne ? 0 : Ne), c && p && (Oe._pinOffset = Math.round(g.progress * Jt)), $ && $.invalidate(), isNaN(Si) || (Si -= E.getProperty(y, k.p), an -= E.getProperty(_t, k.p), vn(y, k, Si), vn(st, k, Si - (L || 0)), vn(_t, k, an), vn(ht, k, an - (L || 0))), Ye && !rt && g.update(), f && !rt && !lr && (lr = !0, f(g), lr = !1);
      }
    }, g.getVelocity = function() {
      return (Te() - Qe) / ($e() - Di) * 1e3 || 0;
    }, g.endAnimation = function() {
      ki(g.callbackAnimation), i && ($ ? $.progress(1) : i.paused() ? z || ki(i, g.direction < 0, 1) : ki(i, i.reversed()));
    }, g.labelToScroll = function(D) {
      return i && i.labels && (Z || g.refresh() || Z) + i.labels[D] / i.duration() * _e || 0;
    }, g.getTrailing = function(D) {
      var I = Y.indexOf(g), A = g.direction > 0 ? Y.slice(0, I).reverse() : Y.slice(I + 1);
      return (gt(D) ? A.filter(function(L) {
        return L.vars.preventOverlaps === D;
      }) : A).filter(function(L) {
        return g.direction > 0 ? L.end <= Z : L.start >= ge;
      });
    }, g.update = function(D, I, A) {
      if (!(x && !A && !D)) {
        var L = rt === !0 ? Lt : g.scroll(), Me = D ? 0 : (L - Z) / _e, H = Me < 0 ? 0 : Me > 1 ? 1 : Me || 0, ye = g.progress, Ye, de, oe, ee, Nt, ue, dt, Yt;
        if (I && (Qe = Ze, Ze = x ? Te() : L, v && (Mr = hr, hr = i && !z ? i.totalProgress() : H)), m && c && !Ue && !hn && At && (!H && Z < L + (L - Qe) / ($e() - Di) * m ? H = 1e-4 : H === 1 && ge > L + (L - Qe) / ($e() - Di) * m && (H = 0.9999)), H !== ye && g.enabled) {
          if (Ye = g.isActive = !!H && H < 1, de = !!ye && ye < 1, ue = Ye !== de, Nt = ue || !!H != !!ye, g.direction = H > ye ? 1 : -1, g.progress = H, Nt && !Ue && (oe = H && !ye ? 0 : H === 1 ? 1 : ye === 1 ? 2 : 3, z && (ee = !ue && F[oe + 1] !== "none" && F[oe + 1] || F[oe], Yt = i && (ee === "complete" || ee === "reset" || ee in i))), C && (ue || Yt) && (Yt || _ || !i) && (Ge(C) ? C(g) : g.getTrailing(C).forEach(function(Ar) {
            return Ar.endAnimation();
          })), z || ($ && !Ue && !hn ? ($._dp._time - $._start !== $._time && $.render($._dp._time - $._start), $.resetTo ? $.resetTo("totalProgress", H, i._tTime / i._tDur) : ($.vars.totalProgress = H, $.invalidate().restart())) : i && i.totalProgress(H, !!(Ue && (Re || D)))), c) {
            if (D && p && (Oe.style[p + k.os2] = Ti), !K)
              Ft(Ai(Pt + Jt * H));
            else if (Nt) {
              if (dt = !D && H > ye && ge + 1 > L && L + 1 >= Ht(M, k), w)
                if (!D && (Ye || dt)) {
                  var Fe = ir(c, !0), ze = L - Z;
                  Io(c, j, Fe.top + (k === ke ? ze : 0) + Pe, Fe.left + (k === ke ? 0 : ze) + Pe);
                } else
                  Io(c, Oe);
              _i(Ye || dt ? fr : Or), jt && H < 1 && Ye || Ft(Pt + (H === 1 && !dt ? Jt : 0));
            }
          }
          v && !Ke.tween && !Ue && !hn && It.restart(!0), o && (ue || S && H && (H < 1 || !ts)) && tn(o.targets).forEach(function(Ar) {
            return Ar.classList[Ye || S ? "add" : "remove"](o.className);
          }), s && !z && !D && s(g), Nt && !Ue ? (z && (Yt && (ee === "complete" ? i.pause().totalProgress(1) : ee === "reset" ? i.restart(!0).pause() : ee === "restart" ? i.restart(!0) : i[ee]()), s && s(g)), (ue || !ts) && (l && ue && is(g, l), G[oe] && is(g, G[oe]), S && (H === 1 ? g.kill(!1, 1) : G[oe] = 0), ue || (oe = H === 1 ? 1 : 3, G[oe] && is(g, G[oe]))), O && !Ye && Math.abs(g.getVelocity()) > (Ri(O) ? O : 2500) && (ki(g.callbackAnimation), $ ? $.progress(1) : ki(i, ee === "reverse" ? 1 : !H, 1))) : z && s && !Ue && s(g);
        }
        if (Qr) {
          var Xe = x ? L / x.duration() * (x._caScrollDist || 0) : L;
          sn(Xe + (y._isFlipped ? 1 : 0)), Qr(Xe);
        }
        jr && jr(-L / x.duration() * (x._caScrollDist || 0));
      }
    }, g.enable = function(D, I) {
      g.enabled || (g.enabled = !0, Ee(M, "resize", Fi), U || Ee(M, "scroll", ri), se && Ee(a, "refreshInit", se), D !== !1 && (g.progress = Ne = 0, Ze = Qe = he = Te()), I !== !1 && g.refresh());
    }, g.getTween = function(D) {
      return D && Ke ? Ke.tween : $;
    }, g.setPositions = function(D, I, A, L) {
      if (x) {
        var Me = x.scrollTrigger, H = x.duration(), ye = Me.end - Me.start;
        D = Me.start + ye * D / H, I = Me.start + ye * I / H;
      }
      g.refresh(!1, !1, {
        start: ko(D, A && !!g._startClamp),
        end: ko(I, A && !!g._endClamp)
      }, L), g.update();
    }, g.adjustPinSpacing = function(D) {
      if (be && D) {
        var I = be.indexOf(k.d) + 1;
        be[I] = parseFloat(be[I]) + D + Pe, be[1] = parseFloat(be[1]) + D + Pe, _i(be);
      }
    }, g.disable = function(D, I) {
      if (D !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, I || $ && $.pause(), Lt = 0, Be && (Be.uncache = 1), se && De(a, "refreshInit", se), It && (It.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)), !U)) {
        for (var A = Y.length; A--; )
          if (Y[A].scroller === M && Y[A] !== g)
            return;
        De(M, "resize", Fi), U || De(M, "scroll", ri);
      }
    }, g.kill = function(D, I) {
      g.disable(D, I), $ && !I && $.kill(), u && delete Os[u];
      var A = Y.indexOf(g);
      A >= 0 && Y.splice(A, 1), A === tt && kn > 0 && tt--, A = 0, Y.forEach(function(L) {
        return L.scroller === g.scroller && (A = 1);
      }), A || rt || (g.scroll.rec = 0), i && (i.scrollTrigger = null, D && i.revert({
        kill: !1
      }), I || i.kill()), st && [st, ht, y, _t].forEach(function(L) {
        return L.parentNode && L.parentNode.removeChild(L);
      }), Hi === g && (Hi = 0), c && (Be && (Be.uncache = 1), A = 0, Y.forEach(function(L) {
        return L.pin === c && A++;
      }), A || (Be.spacer = 0)), t.onKill && t.onKill(g);
    }, Y.push(g), g.enable(!1, !1), er && er(g), i && i.add && !_e) {
      var J = g.update;
      g.update = function() {
        g.update = J, V.cache++, Z || ge || g.refresh();
      }, E.delayedCall(0.01, g.update), _e = 0.01, Z = ge = 0;
    } else
      g.refresh();
    c && Vl();
  }, a.register = function(t) {
    return ii || (E = t || ja(), Ja() && window.document && a.enable(), ii = Ei), ii;
  }, a.defaults = function(t) {
    if (t)
      for (var i in t)
        gn[i] = t[i];
    return gn;
  }, a.disable = function(t, i) {
    Ei = 0, Y.forEach(function(s) {
      return s[i ? "kill" : "disable"](t);
    }), De(X, "wheel", ri), De(ie, "scroll", ri), clearInterval(cn), De(ie, "touchcancel", $t), De(j, "touchstart", $t), dn(De, ie, "pointerdown,touchstart,mousedown", Oo), dn(De, ie, "pointerup,touchend,mouseup", Mo), Nn.kill(), _n(De);
    for (var n = 0; n < V.length; n += 3)
      pn(De, V[n], V[n + 1]), pn(De, V[n], V[n + 2]);
  }, a.enable = function() {
    if (X = window, ie = document, yt = ie.documentElement, j = ie.body, E && (tn = E.utils.toArray, Xi = E.utils.clamp, Ps = E.core.context || $t, es = E.core.suppressOverwrites || $t, Zs = X.history.scrollRestoration || "auto", Ms = X.pageYOffset || 0, E.core.globals("ScrollTrigger", a), j)) {
      Ei = 1, hi = document.createElement("div"), hi.style.height = "100vh", hi.style.position = "absolute", lu(), zl(), xe.register(E), a.isTouch = xe.isTouch, dr = xe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Cs = xe.isTouch === 1, Ee(X, "wheel", ri), Ks = [X, ie, yt, j], E.matchMedia ? (a.matchMedia = function(l) {
        var f = E.matchMedia(), _;
        for (_ in l)
          f.add(_, l[_]);
        return f;
      }, E.addEventListener("matchMediaInit", function() {
        au(), ro();
      }), E.addEventListener("matchMediaRevert", function() {
        return ou();
      }), E.addEventListener("matchMedia", function() {
        Br(0, 1), Kr("matchMedia");
      }), E.matchMedia().add("(orientation: portrait)", function() {
        return ns(), ns;
      })) : console.warn("Requires GSAP 3.11.0 or later"), ns(), Ee(ie, "scroll", ri);
      var t = j.hasAttribute("style"), i = j.style, n = i.borderTopStyle, s = E.core.Animation.prototype, o, u;
      for (s.revert || Object.defineProperty(s, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), i.borderTopStyle = "solid", o = ir(j), ke.m = Math.round(o.top + ke.sc()) || 0, nt.m = Math.round(o.left + nt.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), t || (j.setAttribute("style", ""), j.removeAttribute("style")), cn = setInterval(Ao, 250), E.delayedCall(0.5, function() {
        return hn = 0;
      }), Ee(ie, "touchcancel", $t), Ee(j, "touchstart", $t), dn(Ee, ie, "pointerdown,touchstart,mousedown", Oo), dn(Ee, ie, "pointerup,touchend,mouseup", Mo), Ss = E.utils.checkPrefix("transform"), On.push(Ss), ii = $e(), Nn = E.delayedCall(0.2, Br).pause(), ni = [ie, "visibilitychange", function() {
        var l = X.innerWidth, f = X.innerHeight;
        ie.hidden ? (So = l, Co = f) : (So !== l || Co !== f) && Fi();
      }, ie, "DOMContentLoaded", Br, X, "load", Br, X, "resize", Fi], _n(Ee), Y.forEach(function(l) {
        return l.enable(0, 1);
      }), u = 0; u < V.length; u += 3)
        pn(De, V[u], V[u + 1]), pn(De, V[u], V[u + 2]);
    }
  }, a.config = function(t) {
    "limitCallbacks" in t && (ts = !!t.limitCallbacks);
    var i = t.syncInterval;
    i && clearInterval(cn) || (cn = i) && setInterval(Ao, i), "ignoreMobileResize" in t && (Cs = a.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (_n(De) || _n(Ee, t.autoRefreshEvents || "none"), Ka = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, a.scrollerProxy = function(t, i) {
    var n = ot(t), s = V.indexOf(n), o = Hr(n);
    ~s && V.splice(s, o ? 6 : 2), i && (o ? qt.unshift(X, i, j, i, yt, i) : qt.unshift(n, i));
  }, a.clearMatchMedia = function(t) {
    Y.forEach(function(i) {
      return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0);
    });
  }, a.isInViewport = function(t, i, n) {
    var s = (gt(t) ? ot(t) : t).getBoundingClientRect(), o = s[n ? $r : Wr] * i || 0;
    return n ? s.right - o > 0 && s.left + o < X.innerWidth : s.bottom - o > 0 && s.top + o < X.innerHeight;
  }, a.positionInViewport = function(t, i, n) {
    gt(t) && (t = ot(t));
    var s = t.getBoundingClientRect(), o = s[n ? $r : Wr], u = i == null ? o / 2 : i in Yn ? Yn[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
    return n ? (s.left + u) / X.innerWidth : (s.top + u) / X.innerHeight;
  }, a.killAll = function(t) {
    if (Y.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), t !== !0) {
      var i = qr.killAll || [];
      qr = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, a;
}();
B.version = "3.14.2";
B.saveStyles = function(a) {
  return a ? tn(a).forEach(function(e) {
    if (e && e.style) {
      var r = pt.indexOf(e);
      r >= 0 && pt.splice(r, 5), pt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), E.core.getCache(e), Ps());
    }
  }) : pt;
};
B.revert = function(a, e) {
  return ro(!a, e);
};
B.create = function(a, e) {
  return new B(a, e);
};
B.refresh = function(a) {
  return a ? Fi(!0) : (ii || B.register()) && Br(!0);
};
B.update = function(a) {
  return ++V.cache && sr(a === !0 ? 2 : 0);
};
B.clearScrollMemory = uu;
B.maxScroll = function(a, e) {
  return Ht(a, e ? nt : ke);
};
B.getScrollFunc = function(a, e) {
  return Pr(ot(a), e ? nt : ke);
};
B.getById = function(a) {
  return Os[a];
};
B.getAll = function() {
  return Y.filter(function(a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
B.isScrolling = function() {
  return !!At;
};
B.snapDirectional = to;
B.addEventListener = function(a, e) {
  var r = qr[a] || (qr[a] = []);
  ~r.indexOf(e) || r.push(e);
};
B.removeEventListener = function(a, e) {
  var r = qr[a], t = r && r.indexOf(e);
  t >= 0 && r.splice(t, 1);
};
B.batch = function(a, e) {
  var r = [], t = {}, i = e.interval || 0.016, n = e.batchMax || 1e9, s = function(l, f) {
    var _ = [], d = [], c = E.delayedCall(i, function() {
      f(_, d), _ = [], d = [];
    }).pause();
    return function(p) {
      _.length || c.restart(!0), _.push(p.trigger), d.push(p), n <= _.length && c.progress(1);
    };
  }, o;
  for (o in e)
    t[o] = o.substr(0, 2) === "on" && Ge(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
  return Ge(n) && (n = n(), Ee(B, "refresh", function() {
    return n = e.batchMax();
  })), tn(a).forEach(function(u) {
    var l = {};
    for (o in t)
      l[o] = t[o];
    l.trigger = u, r.push(B.create(l));
  }), r;
};
var No = function(e, r, t, i) {
  return r > i ? e(i) : r < 0 && e(0), t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1;
}, os = function a(e, r) {
  r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (xe.isTouch ? " pinch-zoom" : "") : "none", e === yt && a(j, r);
}, xn = {
  auto: 1,
  scroll: 1
}, Hl = function(e) {
  var r = e.event, t = e.target, i = e.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target, s = n._gsap || E.core.getCache(n), o = $e(), u;
  if (!s._isScrollT || o - s._isScrollT > 2e3) {
    for (; n && n !== j && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(xn[(u = Mt(n)).overflowY] || xn[u.overflowX])); )
      n = n.parentNode;
    s._isScroll = n && n !== t && !Hr(n) && (xn[(u = Mt(n)).overflowY] || xn[u.overflowX]), s._isScrollT = o;
  }
  (s._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0);
}, cu = function(e, r, t, i) {
  return xe.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: r,
    onWheel: i = i && Hl,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return t && Ee(ie, xe.eventTypes[0], Yo, !1, !0);
    },
    onDisable: function() {
      return De(ie, xe.eventTypes[0], Yo, !0);
    }
  });
}, ql = /(input|label|select|textarea)/i, Bo, Yo = function(e) {
  var r = ql.test(e.target.tagName);
  (r || Bo) && (e._gsapAllow = !0, Bo = r);
}, Kl = function(e) {
  Lr(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var r = e, t = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, s = r.onRelease, o, u, l = ot(e.target) || yt, f = E.core.globals().ScrollSmoother, _ = f && f.get(), d = dr && (e.content && ot(e.content) || _ && e.content !== !1 && !_.smooth() && _.content()), c = Pr(l, ke), p = Pr(l, nt), h = 1, m = (xe.isTouch && X.visualViewport ? X.visualViewport.scale * X.visualViewport.width : X.outerWidth) / X.innerWidth, b = 0, T = Ge(i) ? function() {
    return i(o);
  } : function() {
    return i || 2.8;
  }, S, v, w = cu(l, e.type, !0, n), P = function() {
    return v = !1;
  }, x = $t, O = $t, C = function() {
    u = Ht(l, ke), O = Xi(dr ? 1 : 0, u), t && (x = Xi(0, Ht(l, nt))), S = Gr;
  }, k = function() {
    d._gsap.y = Ai(parseFloat(d._gsap.y) + c.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, z = function() {
    if (v) {
      requestAnimationFrame(P);
      var Q = Ai(o.deltaY / 2), ne = O(c.v - Q);
      if (d && ne !== c.v + c.offset) {
        c.offset = ne - c.v;
        var g = Ai((parseFloat(d && d._gsap.y) || 0) - c.offset);
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", d._gsap.y = g + "px", c.cacheID = V.cache, sr();
      }
      return !0;
    }
    c.offset && k(), v = !0;
  }, M, W, U, K, G = function() {
    C(), M.isActive() && M.vars.scrollY > u && (c() > u ? M.progress(1) && c(u) : M.resetTo("scrollY", u));
  };
  return d && E.set(d, {
    y: "+=0"
  }), e.ignoreCheck = function(F) {
    return dr && F.type === "touchmove" && z() || h > 1.05 && F.type !== "touchstart" || o.isGesturing || F.touches && F.touches.length > 1;
  }, e.onPress = function() {
    v = !1;
    var F = h;
    h = Ai((X.visualViewport && X.visualViewport.scale || 1) / m), M.pause(), F !== h && os(l, h > 1.01 ? !0 : t ? !1 : "x"), W = p(), U = c(), C(), S = Gr;
  }, e.onRelease = e.onGestureStart = function(F, Q) {
    if (c.offset && k(), !Q)
      K.restart(!0);
    else {
      V.cache++;
      var ne = T(), g, se;
      t && (g = p(), se = g + ne * 0.05 * -F.velocityX / 0.227, ne *= No(p, g, se, Ht(l, nt)), M.vars.scrollX = x(se)), g = c(), se = g + ne * 0.05 * -F.velocityY / 0.227, ne *= No(c, g, se, Ht(l, ke)), M.vars.scrollY = O(se), M.invalidate().duration(ne).play(0.01), (dr && M.vars.scrollY >= u || g >= u - 1) && E.to({}, {
        onUpdate: G,
        duration: ne
      });
    }
    s && s(F);
  }, e.onWheel = function() {
    M._ts && M.pause(), $e() - b > 1e3 && (S = 0, b = $e());
  }, e.onChange = function(F, Q, ne, g, se) {
    if (Gr !== S && C(), Q && t && p(x(g[2] === Q ? W + (F.startX - F.x) : p() + Q - g[1])), ne) {
      c.offset && k();
      var qe = se[2] === ne, Rt = qe ? U + F.startY - F.y : c() + ne - se[1], he = O(Rt);
      qe && Rt !== he && (U += he - Rt), c(he);
    }
    (ne || Q) && sr();
  }, e.onEnable = function() {
    os(l, t ? !1 : "x"), B.addEventListener("refresh", G), Ee(X, "resize", G), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), w.enable();
  }, e.onDisable = function() {
    os(l, !0), De(X, "resize", G), B.removeEventListener("refresh", G), w.kill();
  }, e.lockAxis = e.lockAxis !== !1, o = new xe(e), o.iOS = dr, dr && !c() && c(1), dr && E.ticker.add($t), K = o._dc, M = E.to(o, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: t ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: fu(c, c(), function() {
        return M.pause();
      })
    },
    onUpdate: sr,
    onComplete: K.vars.onComplete
  }), o;
};
B.sort = function(a) {
  if (Ge(a))
    return Y.sort(a);
  var e = X.pageYOffset || 0;
  return B.getAll().forEach(function(r) {
    return r._sortY = r.trigger ? e + r.trigger.getBoundingClientRect().top : r.start + X.innerHeight;
  }), Y.sort(a || function(r, t) {
    return (r.vars.refreshPriority || 0) * -1e6 + (r.vars.containerAnimation ? 1e6 : r._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
  });
};
B.observe = function(a) {
  return new xe(a);
};
B.normalizeScroll = function(a) {
  if (typeof a > "u")
    return et;
  if (a === !0 && et)
    return et.enable();
  if (a === !1) {
    et && et.kill(), et = a;
    return;
  }
  var e = a instanceof xe ? a : Kl(a);
  return et && et.target === e.target && et.kill(), Hr(e.target) && (et = e), e;
};
B.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: ws,
  _inputObserver: cu,
  _scrollers: V,
  _proxies: qt,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      At || Kr("scrollStart"), At = $e();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Ue;
    }
  }
};
ja() && E.registerPlugin(B);
Ya.registerPlugin(B);
const Zl = 900, Ql = { startOffset: 550, endOffset: 450, from: [1, 0.5], to: [15, 10] }, Jl = { startOffset: 400, endOffset: 300, from: [15, 10], to: [1, 0.5] }, Xo = 50, jl = 92, ef = 1.25, tf = 2.5, rf = 9, nf = 100;
function hu(a) {
  a._bcScrollAnimTriggers && a._bcScrollAnimTriggers.forEach((l) => l.kill());
  const e = [], r = a.querySelector("[data-bc-sticky]"), t = a.querySelector("[data-bc-trigger-footer]"), i = a.querySelectorAll("[data-bc-row]");
  if (!r || !t || !i.length)
    return;
  const n = () => {
    const l = r.getBoundingClientRect();
    return l.top + window.scrollY + l.height / 2;
  }, s = () => t.offsetHeight, o = () => window.innerWidth < Zl;
  function u(l, { startOffset: f, endOffset: _, from: d, to: c }) {
    return B.create({
      trigger: l,
      start: () => `top+=${n() - f} center`,
      end: () => `top+=${n() - _} center`,
      scrub: !0,
      onUpdate: (p) => {
        const h = o() ? d[1] : d[0], m = o() ? c[1] : c[0];
        l.style.gap = `${h + (m - h) * p.progress}em`;
      }
    });
  }
  i.forEach((l) => {
    e.push(u(l, Ql)), e.push(u(l, Jl));
  }), e.push(
    B.create({
      trigger: t,
      start: "top bottom",
      end: () => `top+=${s() - window.innerHeight} center`,
      scrub: !0,
      onUpdate: (l) => {
        const f = Xo + (jl - Xo) * l.progress;
        r.style.top = `${f}%`;
      }
    })
  ), e.push(
    B.create({
      trigger: t,
      start: () => `top+=${s() - (window.innerHeight + nf)} bottom`,
      end: "bottom bottom",
      scrub: !0,
      onUpdate: (l) => {
        const f = o() ? tf : ef, _ = f + (rf - f) * l.progress;
        r.querySelectorAll("p").forEach((d) => {
          d.style.fontSize = `${_}vw`;
        });
      }
    })
  ), a._bcScrollAnimTriggers = e;
}
if (typeof window < "u") {
  const a = () => {
    document.querySelectorAll('[data-component="bennett-clive-scroll-anim"]').forEach((e) => hu(e));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
const sf = hu;
export {
  hu as initBennettCliveScrollAnim,
  sf as initBennettCliveScrollAnimation
};

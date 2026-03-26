var Xu = Object.defineProperty;
var Wu = (o, t, i) => t in o ? Xu(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var L = (o, t, i) => Wu(o, typeof t != "symbol" ? t + "" : t, i);
function fi(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function nl(o, t) {
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
var Me = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Dr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Eo, Kt, vt, Fe = 1e8, ct = 1 / Fe, Ks = Math.PI * 2, Hu = Ks / 4, $u = 0, sl = Math.sqrt, Uu = Math.cos, qu = Math.sin, Ht = function(t) {
  return typeof t == "string";
}, kt = function(t) {
  return typeof t == "function";
}, mi = function(t) {
  return typeof t == "number";
}, Co = function(t) {
  return typeof t > "u";
}, si = function(t) {
  return typeof t == "object";
}, ge = function(t) {
  return t !== !1;
}, Po = function() {
  return typeof window < "u";
}, Rn = function(t) {
  return kt(t) || Ht(t);
}, ol = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, se = Array.isArray, Gu = /random\([^)]+\)/g, ju = /,\s*/g, la = /(?:-?\.?\d|\.)+/gi, al = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, yr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Cs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ll = /[+-]=-?[.\d]+/, Zu = /[^,'"\[\]\s]+/gi, Ku = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, bt, Je, Qs, Oo, De = {}, ns = {}, ul, fl = function(t) {
  return (ns = Rr(t, De)) && we;
}, Mo = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, yn = function(t, i) {
  return !i && console.warn(t);
}, hl = function(t, i) {
  return t && (De[t] = i) && ns && (ns[t] = i) || De;
}, vn = function() {
  return 0;
}, Qu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Gn = {
  suppressEvents: !0,
  kill: !1
}, Ju = {
  suppressEvents: !0
}, Do = {}, Mi = [], Js = {}, cl, Se = {}, Ps = {}, ua = 30, jn = [], Ro = "", Ao = function(t) {
  var i = t[0], e, r;
  if (si(i) || kt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = jn.length; r-- && !jn[r].targetTest(i); )
      ;
    e = jn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new zl(t[r], e))) || t.splice(r, 1);
  return t;
}, Zi = function(t) {
  return t._gsap || Ao(Be(t))[0]._gsap;
}, pl = function(t, i, e) {
  return (e = t[i]) && kt(e) ? t[i]() : Co(e) && t.getAttribute && t.getAttribute(i) || e;
}, me = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, Pt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, xt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Sr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, tf = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, ss = function() {
  var t = Mi.length, i = Mi.slice(0), e, r;
  for (Js = {}, Mi.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Lo = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, dl = function(t, i, e, r) {
  Mi.length && !Kt && ss(), t.render(i, e, !!(Kt && i < 0 && Lo(t))), Mi.length && !Kt && ss();
}, _l = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(Zu).length < 2 ? i : Ht(t) ? t.trim() : t;
}, gl = function(t) {
  return t;
}, Re = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, ef = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, Rr = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, fa = function o(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = si(i[e]) ? o(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, os = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, en = function(t) {
  var i = t.parent || bt, e = t.keyframes ? ef(se(t.keyframes)) : Re;
  if (ge(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, rf = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, ml = function(t, i, e, r, n) {
  var s = t[r], a;
  if (n)
    for (a = i[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (i._next = s._next, s._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = s, i.parent = i._dp = t, i;
}, vs = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, s = i._next;
  n ? n._next = s : t[e] === i && (t[e] = s), s ? s._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, Ai = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Ki = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, nf = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, to = function(t, i, e, r) {
  return t._startAt && (Kt ? t._startAt.revert(Gn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, sf = function o(t) {
  return !t || t._ts && o(t.parent);
}, ha = function(t) {
  return t._repeat ? Ar(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ar = function(t, i) {
  var e = Math.floor(t = xt(t / i));
  return t && e === t ? e - 1 : e;
}, as = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, ws = function(t) {
  return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ct) || 0));
}, xs = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = xt(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), ws(t), e._dirty || Ki(e, t)), t;
}, yl = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = as(t.rawTime(), i), (!i._dur || Pn(0, i.totalDuration(), e) - i._tTime > ct) && i.render(e, !0)), Ki(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -ct;
  }
}, ei = function(t, i, e, r) {
  return i.parent && Ai(i), i._start = xt((mi(e) ? e : e || t !== bt ? Le(t, e, i) : t._time) + i._delay), i._end = xt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), ml(t, i, "_first", "_last", t._sort ? "_start" : 0), eo(i) || (t._recent = i), r || yl(t, i), t._ts < 0 && xs(t, t._tTime), t;
}, vl = function(t, i) {
  return (De.ScrollTrigger || Mo("scrollTrigger", i)) && De.ScrollTrigger.create(i, t);
}, wl = function(t, i, e, r, n) {
  if (zo(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Kt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && cl !== Ee.frame)
    return Mi.push(t), t._lazy = [n, r], 1;
}, of = function o(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || o(i));
}, eo = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, af = function(t, i, e, r) {
  var n = t.ratio, s = i < 0 || !i && (!t._start && of(t) && !(!t._initted && eo(t)) || (t._ts < 0 || t._dp._ts < 0) && !eo(t)) ? 0 : 1, a = t._rDelay, u = 0, l, f, p;
  if (a && t._repeat && (u = Pn(0, t._tDur, i), f = Ar(u, a), t._yoyo && f & 1 && (s = 1 - s), f !== Ar(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || Kt || r || t._zTime === ct || !i && t._zTime) {
    if (!t._initted && wl(t, i, r, e, u))
      return;
    for (p = t._zTime, t._zTime = i || (e ? ct : 0), e || (e = i && !p), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(s, l.d), l = l._next;
    i < 0 && to(t, i, e, !0), t._onUpdate && !e && Pe(t, "onUpdate"), u && t._repeat && !e && t.parent && Pe(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === s && (s && Ai(t, 1), !e && !Kt && (Pe(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, lf = function(t, i, e) {
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
}, Lr = function(t, i, e, r) {
  var n = t._repeat, s = xt(i) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : xt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && xs(t, t._tTime = t._tDur * a), t.parent && ws(t), e || Ki(t.parent, t), t;
}, ca = function(t) {
  return t instanceof ce ? Ki(t) : Lr(t, t._dur);
}, uf = {
  _start: 0,
  endTime: vn,
  totalDuration: vn
}, Le = function o(t, i, e) {
  var r = t.labels, n = t._recent || uf, s = t.duration() >= Fe ? n.endTime(!1) : t._dur, a, u, l;
  return Ht(i) && (isNaN(i) || i in r) ? (u = i.charAt(0), l = i.substr(-1) === "%", a = i.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (l ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = s), r[i]) : (u = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), l && e && (u = u / 100 * (se(e) ? e[0] : e).totalDuration()), a > 1 ? o(t, i.substr(0, a - 1), e) + u : s + u)) : i == null ? s : +i;
}, rn = function(t, i, e) {
  var r = mi(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = i[n], a, u;
  if (r && (s.duration = i[1]), s.parent = e, t) {
    for (a = s, u = e; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = ge(u.vars.inherit) && u.parent;
    s.immediateRender = ge(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = i[n - 1];
  }
  return new Lt(i[0], s, i[n + 1]);
}, Fi = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, Pn = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, re = function(t, i) {
  return !Ht(t) || !(i = Ku.exec(t)) ? "" : i[1];
}, ff = function(t, i, e) {
  return Fi(e, function(r) {
    return Pn(t, i, r);
  });
}, io = [].slice, xl = function(t, i) {
  return t && si(t) && "length" in t && (!i && !t.length || t.length - 1 in t && si(t[0])) && !t.nodeType && t !== Je;
}, hf = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return Ht(r) && !i || xl(r, 1) ? (n = e).push.apply(n, Be(r)) : e.push(r);
  }) || e;
}, Be = function(t, i, e) {
  return vt && !i && vt.selector ? vt.selector(t) : Ht(t) && !e && (Qs || !Ir()) ? io.call((i || Oo).querySelectorAll(t), 0) : se(t) ? hf(t, e) : xl(t) ? io.call(t, 0) : t ? [t] : [];
}, ro = function(t) {
  return t = Be(t)[0] || yn("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return Be(i, e.querySelectorAll ? e : e === t ? yn("Invalid scope") || Oo.createElement("div") : t);
  };
}, bl = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Tl = function(t) {
  if (kt(t))
    return t;
  var i = si(t) ? t : {
    each: t
  }, e = Qi(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, s = {}, a = r > 0 && r < 1, u = isNaN(r) || a, l = i.axis, f = r, p = r;
  return Ht(r) ? f = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && u && (f = r[0], p = r[1]), function(c, h, _) {
    var d = (_ || i).length, g = s[d], y, x, w, v, T, C, S, P, k;
    if (!g) {
      if (k = i.grid === "auto" ? 0 : (i.grid || [1, Fe])[1], !k) {
        for (S = -Fe; S < (S = _[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (g = s[d] = [], y = u ? Math.min(k, d) * f - 0.5 : r % k, x = k === Fe ? 0 : u ? d * p / k - 0.5 : r / k | 0, S = 0, P = Fe, C = 0; C < d; C++)
        w = C % k - y, v = x - (C / k | 0), g[C] = T = l ? Math.abs(l === "y" ? v : w) : sl(w * w + v * v), T > S && (S = T), T < P && (P = T);
      r === "random" && bl(g), g.max = S - P, g.min = P, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (k > d ? d - 1 : l ? l === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = re(i.amount || i.each) || 0, e = e && d < 0 ? Al(e) : e;
    }
    return d = (g[c] - g.min) / g.max || 0, xt(g.b + (e ? e(d) : d) * g.v) + g.u;
  };
}, no = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = xt(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (mi(e) ? 0 : re(e));
  };
}, Sl = function(t, i) {
  var e = se(t), r, n;
  return !e && si(t) && (r = e = t.radius || Fe, t.values ? (t = Be(t.values), (n = !mi(t[0])) && (r *= r)) : t = no(t.increment)), Fi(i, e ? kt(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = Fe, f = 0, p = t.length, c, h; p--; )
      n ? (c = t[p].x - a, h = t[p].y - u, c = c * c + h * h) : c = Math.abs(t[p] - a), c < l && (l = c, f = p);
    return f = !r || l <= r ? t[f] : s, n || f === s || mi(s) ? f : f + re(s);
  } : no(t));
}, kl = function(t, i, e, r) {
  return Fi(se(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return se(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, cf = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, pf = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || re(e));
  };
}, df = function(t, i, e) {
  return Cl(t, i, 0, 1, e);
}, El = function(t, i, e) {
  return Fi(e, function(r) {
    return t[~~i(r)];
  });
}, _f = function o(t, i, e) {
  var r = i - t;
  return se(t) ? El(t, o(0, t.length), i) : Fi(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, gf = function o(t, i, e) {
  var r = i - t, n = r * 2;
  return se(t) ? El(t, o(0, t.length - 1), i) : Fi(e, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, wn = function(t) {
  return t.replace(Gu, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(ju);
    return kl(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, Cl = function(t, i, e, r, n) {
  var s = i - t, a = r - e;
  return Fi(n, function(u) {
    return e + ((u - t) / s * a || 0);
  });
}, mf = function o(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(h) {
    return (1 - h) * t + h * i;
  };
  if (!n) {
    var s = Ht(t), a = {}, u, l, f, p, c;
    if (e === !0 && (r = 1) && (e = null), s)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (se(t) && !se(i)) {
      for (f = [], p = t.length, c = p - 2, l = 1; l < p; l++)
        f.push(o(t[l - 1], t[l]));
      p--, n = function(_) {
        _ *= p;
        var d = Math.min(c, ~~_);
        return f[d](_ - d);
      }, e = i;
    } else r || (t = Rr(se(t) ? [] : {}, t));
    if (!f) {
      for (u in i)
        Io.call(a, t, u, "get", i[u]);
      n = function(_) {
        return No(_, a) || (s ? t.p : t);
      };
    }
  }
  return Fi(e, n);
}, pa = function(t, i, e) {
  var r = t.labels, n = Fe, s, a, u;
  for (s in r)
    a = r[s] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (u = s, n = a);
  return u;
}, Pe = function(t, i, e) {
  var r = t.vars, n = r[i], s = vt, a = t._ctx, u, l, f;
  if (n)
    return u = r[i + "Params"], l = r.callbackScope || t, e && Mi.length && ss(), a && (vt = a), f = u ? n.apply(l, u) : n.call(l), vt = s, f;
}, qr = function(t) {
  return Ai(t), t.scrollTrigger && t.scrollTrigger.kill(!!Kt), t.progress() < 1 && Pe(t, "onInterrupt"), t;
}, vr, Pl = [], Ol = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Po() || t.headless) {
      var i = t.name, e = kt(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: vn,
        render: No,
        add: Io,
        kill: Af,
        modifier: Rf,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Bo,
        aliases: {},
        register: 0
      };
      if (Ir(), t !== r) {
        if (Se[i])
          return;
        Re(r, Re(os(t, n), s)), Rr(r.prototype, Rr(n, os(t, s))), Se[r.prop = i] = r, t.targetTest && (jn.push(r), Do[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      hl(i, r), t.register && t.register(we, r, ye);
    } else
      Pl.push(t);
}, ht = 255, Gr = {
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
}, Os = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * ht + 0.5 | 0;
}, Ml = function(t, i, e) {
  var r = t ? mi(t) ? [t >> 16, t >> 8 & ht, t & ht] : 0 : Gr.black, n, s, a, u, l, f, p, c, h, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Gr[t])
      r = Gr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & ht, r & ht, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & ht, t & ht];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(la), !i)
        u = +r[0] % 360 / 360, l = +r[1] / 100, f = +r[2] / 100, s = f <= 0.5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Os(u + 1 / 3, n, s), r[1] = Os(u, n, s), r[2] = Os(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(al), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(la) || Gr.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / ht, s = r[1] / ht, a = r[2] / ht, p = Math.max(n, s, a), c = Math.min(n, s, a), f = (p + c) / 2, p === c ? u = l = 0 : (h = p - c, l = f > 0.5 ? h / (2 - p - c) : h / (p + c), u = p === n ? (s - a) / h + (s < a ? 6 : 0) : p === s ? (a - n) / h + 2 : (n - s) / h + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(l * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, Dl = function(t) {
  var i = [], e = [], r = -1;
  return t.split(Di).forEach(function(n) {
    var s = n.match(yr) || [];
    i.push.apply(i, s), e.push(r += s.length + 1);
  }), i.c = e, i;
}, da = function(t, i, e) {
  var r = "", n = (t + r).match(Di), s = i ? "hsla(" : "rgba(", a = 0, u, l, f, p;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = Ml(c, i, 1)) && s + (i ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), e && (f = Dl(t), u = e.c, u.join(r) !== f.c.join(r)))
    for (l = t.replace(Di, "1").split(yr), p = l.length - 1; a < p; a++)
      r += l[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
  if (!l)
    for (l = t.split(Di), p = l.length - 1; a < p; a++)
      r += l[a] + n[a];
  return r + l[p];
}, Di = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Gr)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), yf = /hsl[a]?\(/, Rl = function(t) {
  var i = t.join(" "), e;
  if (Di.lastIndex = 0, Di.test(i))
    return e = yf.test(i), t[1] = da(t[1], e), t[0] = da(t[0], e, Dl(t[1])), !0;
}, xn, Ee = function() {
  var o = Date.now, t = 500, i = 33, e = o(), r = e, n = 1e3 / 240, s = n, a = [], u, l, f, p, c, h, _ = function d(g) {
    var y = o() - r, x = g === !0, w, v, T, C;
    if ((y > t || y < 0) && (e += y - i), r += y, T = r - e, w = T - s, (w > 0 || x) && (C = ++p.frame, c = T - p.time * 1e3, p.time = T = T / 1e3, s += w + (w >= n ? 4 : n - w), v = 1), x || (u = l(d)), v)
      for (h = 0; h < a.length; h++)
        a[h](T, c, C, g);
  };
  return p = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    },
    wake: function() {
      ul && (!Qs && Po() && (Je = Qs = window, Oo = Je.document || {}, De.gsap = we, (Je.gsapVersions || (Je.gsapVersions = [])).push(we.version), fl(ns || Je.GreenSockGlobals || !Je.gsap && Je || {}), Pl.forEach(Ol)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && p.sleep(), l = f || function(g) {
        return setTimeout(g, s - p.time * 1e3 + 1 | 0);
      }, xn = 1, _(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), xn = 0, l = vn;
    },
    lagSmoothing: function(g, y) {
      t = g || 1 / 0, i = Math.min(y || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = p.time * 1e3 + n;
    },
    add: function(g, y, x) {
      var w = y ? function(v, T, C, S) {
        g(v, T, C, S), p.remove(w);
      } : g;
      return p.remove(g), a[x ? "unshift" : "push"](w), Ir(), w;
    },
    remove: function(g, y) {
      ~(y = a.indexOf(g)) && a.splice(y, 1) && h >= y && h--;
    },
    _listeners: a
  }, p;
}(), Ir = function() {
  return !xn && Ee.wake();
}, et = {}, vf = /^[\d.\-M][\d.\-,\s]/, wf = /["']/g, xf = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, s = e.length, a, u, l; n < s; n++)
    u = e[n], a = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, a), i[r] = isNaN(l) ? l.replace(wf, "").trim() : +l, r = u.substr(a + 1).trim();
  return i;
}, bf = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, Tf = function(t) {
  var i = (t + "").split("("), e = et[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [xf(i[1])] : bf(t).split(",").map(_l)) : et._CE && vf.test(t) ? et._CE("", t) : e;
}, Al = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, Ll = function o(t, i) {
  for (var e = t._first, r; e; )
    e instanceof ce ? o(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? o(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next;
}, Qi = function(t, i) {
  return t && (kt(t) ? t : et[t] || Tf(t)) || i;
}, ur = function(t, i, e, r) {
  e === void 0 && (e = function(u) {
    return 1 - i(1 - u);
  }), r === void 0 && (r = function(u) {
    return u < 0.5 ? i(u * 2) / 2 : 1 - i((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, s;
  return me(t, function(a) {
    et[a] = De[a] = n, et[s = a.toLowerCase()] = e;
    for (var u in n)
      et[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = et[a + "." + u] = n[u];
  }), n;
}, Il = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, Ms = function o(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), s = n / Ks * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * qu((f - s) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(l) {
    return 1 - a(1 - l);
  } : Il(a);
  return n = Ks / n, u.config = function(l, f) {
    return o(t, l, f);
  }, u;
}, Ds = function o(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(s) {
    return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : Il(e);
  return r.config = function(n) {
    return o(t, n);
  }, r;
};
me("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var i = t < 5 ? t + 1 : t;
  ur(o + ",Power" + (i - 1), t ? function(e) {
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
ur("Elastic", Ms("in"), Ms("out"), Ms());
(function(o, t) {
  var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
    return a < i ? o * a * a : a < e ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ur("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
ur("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
ur("Circ", function(o) {
  return -(sl(1 - o * o) - 1);
});
ur("Sine", function(o) {
  return o === 1 ? 1 : -Uu(o * Hu) + 1;
});
ur("Back", Ds("in"), Ds("out"), Ds());
et.SteppedEase = et.steps = De.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, s = 1 - ct;
    return function(a) {
      return ((r * Pn(0, s, a) | 0) + n) * e;
    };
  }
};
Dr.ease = et["quad.out"];
me("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Ro += o + "," + o + "Params,";
});
var zl = function(t, i) {
  this.id = $u++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : pl, this.set = i ? i.getSetter : Bo;
}, bn = /* @__PURE__ */ function() {
  function o(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Lr(this, +i.duration, 1, 1), this.data = i.data, vt && (this._ctx = vt, vt.data.push(this)), xn || Ee.wake();
  }
  var t = o.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, Lr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, r) {
    if (Ir(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (xs(this, e), !n._dp || n.parent || yl(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ei(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === ct || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), dl(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ha(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + ha(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? Ar(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -ct ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? as(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -ct ? 0 : this._rts, this.totalTime(Pn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), ws(this), nf(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ir(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ct && (this._tTime -= ct)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = xt(e);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && ei(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (ge(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var r = this.parent || this._dp;
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? as(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Ju);
    var r = Kt;
    return Kt = e, Lo(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Kt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, ca(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, ca(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, r) {
    return this.totalTime(Le(this, e), ge(r));
  }, t.restart = function(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, ge(r)), this._dur || (this._zTime = -ct), this;
  }, t.play = function(e, r) {
    return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, r) {
    return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(e, r) {
    return e != null && this.seek(e, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -ct : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ct, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, r = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - ct);
  }, t.eventCallback = function(e, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[e] = r, n && (s[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete s[e], this) : s[e];
  }, t.then = function(e) {
    var r = this, n = r._prom;
    return new Promise(function(s) {
      var a = kt(e) ? e : gl, u = function() {
        var f = r.then;
        r.then = null, n && n(), kt(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), s(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    qr(this);
  }, o;
}();
Re(bn.prototype, {
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
  _zTime: -ct,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ce = /* @__PURE__ */ function(o) {
  nl(t, o);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = o.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ge(e.sortChildren), bt && ei(e.parent || bt, fi(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && vl(fi(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, s) {
    return rn(0, arguments, this), this;
  }, i.from = function(r, n, s) {
    return rn(1, arguments, this), this;
  }, i.fromTo = function(r, n, s, a) {
    return rn(2, arguments, this), this;
  }, i.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, en(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Lt(r, n, Le(this, s), 1), this;
  }, i.call = function(r, n, s) {
    return ei(this, Lt.delayedCall(0, r, n), s);
  }, i.staggerTo = function(r, n, s, a, u, l, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new Lt(r, s, Le(this, u)), this;
  }, i.staggerFrom = function(r, n, s, a, u, l, f) {
    return s.runBackwards = 1, en(s).immediateRender = ge(s.immediateRender), this.staggerTo(r, n, s, a, u, l, f);
  }, i.staggerFromTo = function(r, n, s, a, u, l, f, p) {
    return a.startAt = s, en(a).immediateRender = ge(a.immediateRender), this.staggerTo(r, n, a, u, l, f, p);
  }, i.render = function(r, n, s) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = r <= 0 ? 0 : xt(r), p = this._zTime < 0 != r < 0 && (this._initted || !l), c, h, _, d, g, y, x, w, v, T, C, S;
    if (this !== bt && f > u && r >= 0 && (f = u), f !== this._tTime || s || p) {
      if (a !== this._time && l && (f += this._time - a, r += this._time - a), c = f, v = this._start, w = this._ts, y = !w, p && (l || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (C = this._yoyo, g = l + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (c = xt(f % g), f === u ? (d = this._repeat, c = l) : (T = xt(f / g), d = ~~T, d && d === T && (c = l, d--), c > l && (c = l)), T = Ar(this._tTime, g), !a && this._tTime && T !== d && this._tTime - T * g - this._dur <= 0 && (T = d), C && d & 1 && (c = l - c, S = 1), d !== T && !this._lock) {
          var P = C && T & 1, k = P === (C && d & 1);
          if (d < T && (P = !P), a = P ? 0 : f % l ? l : f, this._lock = 1, this.render(a || (S ? 0 : xt(d * g)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && Pe(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, T = d), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, k && (this._lock = 2, a = P ? l : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Ll(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = lf(this, xt(a), xt(c)), x && (f -= c - (c = x._start))), this._tTime = f, this._time = c, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && l && !n && !T && (Pe(this, "onStart"), this._tTime !== f))
        return this;
      if (c >= a && r >= 0)
        for (h = this._first; h; ) {
          if (_ = h._next, (h._act || c >= h._start) && h._ts && x !== h) {
            if (h.parent !== this)
              return this.render(r, n, s);
            if (h.render(h._ts > 0 ? (c - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (c - h._start) * h._ts, n, s), c !== this._time || !this._ts && !y) {
              x = 0, _ && (f += this._zTime = -ct);
              break;
            }
          }
          h = _;
        }
      else {
        h = this._last;
        for (var E = r < 0 ? r : c; h; ) {
          if (_ = h._prev, (h._act || E <= h._end) && h._ts && x !== h) {
            if (h.parent !== this)
              return this.render(r, n, s);
            if (h.render(h._ts > 0 ? (E - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (E - h._start) * h._ts, n, s || Kt && Lo(h)), c !== this._time || !this._ts && !y) {
              x = 0, _ && (f += this._zTime = E ? -ct : ct);
              break;
            }
          }
          h = _;
        }
      }
      if (x && !n && (this.pause(), x.render(c >= a ? 0 : -ct)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = v, ws(this), this.render(r, n, s);
      this._onUpdate && !n && Pe(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && a) && (v === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && Ai(this, 1), !n && !(r < 0 && !a) && (f || a || !u) && (Pe(this, f === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var s = this;
    if (mi(n) || (n = Le(this, n, r)), !(r instanceof bn)) {
      if (se(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (Ht(r))
        return this.addLabel(r, n);
      if (kt(r))
        r = Lt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? ei(this, r, n) : this;
  }, i.getChildren = function(r, n, s, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -Fe);
    for (var u = [], l = this._first; l; )
      l._start >= a && (l instanceof Lt ? n && u.push(l) : (s && u.push(l), r && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
    return u;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, i.remove = function(r) {
    return Ht(r) ? this.removeLabel(r) : kt(r) ? this.killTweensOf(r) : (r.parent === this && vs(this, r), r === this._recent && (this._recent = this._last), Ki(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Ee.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = Le(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, s) {
    var a = Lt.delayedCall(0, n || vn, s);
    return a.data = "isPause", this._hasPause = 1, ei(this, a, Le(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = Le(this, r); n; )
      n._start === r && n.data === "isPause" && Ai(n), n = n._next;
  }, i.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), u = a.length; u--; )
      ki !== a[u] && a[u].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var s = [], a = Be(r), u = this._first, l = mi(n), f; u; )
      u instanceof Lt ? tf(u._targets, a) && (l ? (!ki || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(a, n)).length && s.push.apply(s, f), u = u._next;
    return s;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = Le(s, r), u = n, l = u.startAt, f = u.onStart, p = u.onStartParams, c = u.immediateRender, h, _ = Lt.to(s, Re({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || ct,
      onStart: function() {
        if (s.pause(), !h) {
          var g = n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          _._dur !== g && Lr(_, g, 0, 1).render(_._time, !0, !0), h = 1;
        }
        f && f.apply(_, p || []);
      }
    }, n));
    return c ? _.render(0) : _;
  }, i.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, Re({
      startAt: {
        time: Le(this, r)
      }
    }, s));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), pa(this, Le(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), pa(this, Le(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ct);
  }, i.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var a = this._first, u = this.labels, l;
    for (r = xt(r); a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (l in u)
        u[l] >= s && (u[l] += r);
    return Ki(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return o.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ki(this);
  }, i.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, u = Fe, l, f, p;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (p = s.parent; a; )
        l = a._prev, a._dirty && a.totalDuration(), f = a._start, f > u && s._sort && a._ts && !s._lock ? (s._lock = 1, ei(s, a, f - a._delay, 1)._lock = 0) : u = f, f < 0 && a._ts && (n -= f, (!p && !s._dp || p && p.smoothChildTiming) && (s._start += xt(f / s._ts), s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), a._end > n && a._ts && (n = a._end), a = l;
      Lr(s, s === bt && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (bt._ts && (dl(bt, as(r, bt)), cl = Ee.frame), Ee.frame >= ua) {
      ua += Me.autoSleep || 120;
      var n = bt._first;
      if ((!n || !n._ts) && Me.autoSleep && Ee._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Ee.sleep();
      }
    }
  }, t;
}(bn);
Re(ce.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Sf = function(t, i, e, r, n, s, a) {
  var u = new ye(this._pt, t, i, 0, 1, Xl, null, n), l = 0, f = 0, p, c, h, _, d, g, y, x;
  for (u.b = e, u.e = r, e += "", r += "", (y = ~r.indexOf("random(")) && (r = wn(r)), s && (x = [e, r], s(x, t, i), e = x[0], r = x[1]), c = e.match(Cs) || []; p = Cs.exec(r); )
    _ = p[0], d = r.substring(l, p.index), h ? h = (h + 1) % 5 : d.substr(-5) === "rgba(" && (h = 1), _ !== c[f++] && (g = parseFloat(c[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: d || f === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? Sr(g, _) - g : parseFloat(_) - g,
      m: h && h < 4 ? Math.round : 0
    }, l = Cs.lastIndex);
  return u.c = l < r.length ? r.substring(l, r.length) : "", u.fp = a, (ll.test(r) || y) && (u.e = 0), this._pt = u, u;
}, Io = function(t, i, e, r, n, s, a, u, l, f) {
  kt(r) && (r = r(n || 0, t, s));
  var p = t[i], c = e !== "get" ? e : kt(p) ? l ? t[i.indexOf("set") || !kt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](l) : t[i]() : p, h = kt(p) ? l ? Of : Yl : Fo, _;
  if (Ht(r) && (~r.indexOf("random(") && (r = wn(r)), r.charAt(1) === "=" && (_ = Sr(c, r) + (re(c) || 0), (_ || _ === 0) && (r = _))), !f || c !== r || so)
    return !isNaN(c * r) && r !== "" ? (_ = new ye(this._pt, t, i, +c || 0, r - (c || 0), typeof p == "boolean" ? Df : Vl, 0, h), l && (_.fp = l), a && _.modifier(a, this, t), this._pt = _) : (!p && !(i in t) && Mo(i, r), Sf.call(this, t, i, c, r, h, u || Me.stringFilter, l));
}, kf = function(t, i, e, r, n) {
  if (kt(t) && (t = nn(t, n, i, e, r)), !si(t) || t.style && t.nodeType || se(t) || ol(t))
    return Ht(t) ? nn(t, n, i, e, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = nn(t[a], n, i, e, r);
  return s;
}, Fl = function(t, i, e, r, n, s) {
  var a, u, l, f;
  if (Se[t] && (a = new Se[t]()).init(n, a.rawVars ? i[t] : kf(i[t], r, n, s, e), e, r, s) !== !1 && (e._pt = u = new ye(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== vr))
    for (l = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
      l[a._props[f]] = u;
  return a;
}, ki, so, zo = function o(t, i, e) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, u = r.lazy, l = r.onUpdate, f = r.runBackwards, p = r.yoyoEase, c = r.keyframes, h = r.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : g, w = t._overwrite === "auto" && !Eo, v = t.timeline, T, C, S, P, k, E, R, O, Y, z, D, $, V;
  if (v && (!c || !n) && (n = "none"), t._ease = Qi(n, Dr.ease), t._yEase = p ? Al(Qi(p === !0 ? n : p, Dr.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !v && !!r.runBackwards, !v || c && !r.stagger) {
    if (O = g[0] ? Zi(g[0]).harness : 0, $ = O && r[O.prop], T = os(r, Do), d && (d._zTime < 0 && d.progress(1), i < 0 && f && a && !h ? d.render(-1, !0) : d.revert(f && _ ? Gn : Qu), d._lazy = 0), s) {
      if (Ai(t._startAt = Lt.set(g, Re({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !d && ge(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Pe(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Kt || !a && !h) && t._startAt.revert(Gn), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (f && _ && !d) {
      if (i && (a = !1), S = Re({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && ge(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), $ && (S[O.prop] = $), Ai(t._startAt = Lt.set(g, S)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Kt ? t._startAt.revert(Gn) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        o(t._startAt, ct, ct);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, u = _ && ge(u) || u && !_, C = 0; C < g.length; C++) {
      if (k = g[C], R = k._gsap || Ao(g)[C]._gsap, t._ptLookup[C] = z = {}, Js[R.id] && Mi.length && ss(), D = x === g ? C : x.indexOf(k), O && (Y = new O()).init(k, $ || T, t, D, x) !== !1 && (t._pt = P = new ye(t._pt, k, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(it) {
        z[it] = P;
      }), Y.priority && (E = 1)), !O || $)
        for (S in T)
          Se[S] && (Y = Fl(S, T, t, D, k, x)) ? Y.priority && (E = 1) : z[S] = P = Io.call(t, k, S, "get", T[S], D, x, 0, r.stringFilter);
      t._op && t._op[C] && t.kill(k, t._op[C]), w && t._pt && (ki = t, bt.killTweensOf(k, z, t.globalTime(i)), V = !t.parent, ki = 0), t._pt && u && (Js[R.id] = 1);
    }
    E && Wl(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !V, c && i <= 0 && v.render(Fe, !0, !0);
}, Ef = function(t, i, e, r, n, s, a, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, p, c, h;
  if (!l)
    for (l = t._ptCache[i] = [], c = t._ptLookup, h = t._targets.length; h--; ) {
      if (f = c[h][i], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== i && f.fp !== i; )
          f = f._next;
      if (!f)
        return so = 1, t.vars[i] = "+=0", zo(t, a), so = 0, u ? yn(i + " not eligible for reset") : 1;
      l.push(f);
    }
  for (h = l.length; h--; )
    p = l[h], f = p._pt || p, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c, f.c = e - f.s, p.e && (p.e = Pt(e) + re(p.e)), p.b && (p.b = f.s + re(p.b));
}, Cf = function(t, i) {
  var e = t[0] ? Zi(t[0]).harness : 0, r = e && e.aliases, n, s, a, u;
  if (!r)
    return i;
  n = Rr({}, i);
  for (s in r)
    if (s in n)
      for (u = r[s].split(","), a = u.length; a--; )
        n[u[a]] = n[s];
  return n;
}, Pf = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", s, a;
  if (se(i))
    a = e[t] || (e[t] = []), i.forEach(function(u, l) {
      return a.push({
        t: l / (i.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in i)
      a = e[s] || (e[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: i[s],
        e: n
      });
}, nn = function(t, i, e, r, n) {
  return kt(t) ? t.call(i, e, r, n) : Ht(t) && ~t.indexOf("random(") ? wn(t) : t;
}, Bl = Ro + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Nl = {};
me(Bl + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return Nl[o] = 1;
});
var Lt = /* @__PURE__ */ function(o) {
  nl(t, o);
  function t(e, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = o.call(this, s ? r : en(r)) || this;
    var u = a.vars, l = u.duration, f = u.delay, p = u.immediateRender, c = u.stagger, h = u.overwrite, _ = u.keyframes, d = u.defaults, g = u.scrollTrigger, y = u.yoyoEase, x = r.parent || bt, w = (se(e) || ol(e) ? mi(e[0]) : "length" in r) ? [e] : Be(e), v, T, C, S, P, k, E, R;
    if (a._targets = w.length ? Ao(w) : yn("GSAP target " + e + " not found. https://gsap.com", !Me.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, _ || c || Rn(l) || Rn(f)) {
      if (r = a.vars, v = a.timeline = new ce({
        data: "nested",
        defaults: d || {},
        targets: x && x.data === "nested" ? x.vars.targets : w
      }), v.kill(), v.parent = v._dp = fi(a), v._start = 0, c || Rn(l) || Rn(f)) {
        if (S = w.length, E = c && Tl(c), si(c))
          for (P in c)
            ~Bl.indexOf(P) && (R || (R = {}), R[P] = c[P]);
        for (T = 0; T < S; T++)
          C = os(r, Nl), C.stagger = 0, y && (C.yoyoEase = y), R && Rr(C, R), k = w[T], C.duration = +nn(l, fi(a), T, k, w), C.delay = (+nn(f, fi(a), T, k, w) || 0) - a._delay, !c && S === 1 && C.delay && (a._delay = f = C.delay, a._start += f, C.delay = 0), v.to(k, C, E ? E(T, k, w) : 0), v._ease = et.none;
        v.duration() ? l = f = 0 : a.timeline = 0;
      } else if (_) {
        en(Re(v.vars.defaults, {
          ease: "none"
        })), v._ease = Qi(_.ease || r.ease || "none");
        var O = 0, Y, z, D;
        if (se(_))
          _.forEach(function($) {
            return v.to(w, $, ">");
          }), v.duration();
        else {
          C = {};
          for (P in _)
            P === "ease" || P === "easeEach" || Pf(P, _[P], C, _.easeEach);
          for (P in C)
            for (Y = C[P].sort(function($, V) {
              return $.t - V.t;
            }), O = 0, T = 0; T < Y.length; T++)
              z = Y[T], D = {
                ease: z.e,
                duration: (z.t - (T ? Y[T - 1].t : 0)) / 100 * l
              }, D[P] = z.v, v.to(w, D, O), O += D.duration;
          v.duration() < l && v.to({}, {
            duration: l - v.duration()
          });
        }
      }
      l || a.duration(l = v.duration());
    } else
      a.timeline = 0;
    return h === !0 && !Eo && (ki = fi(a), bt.killTweensOf(w), ki = 0), ei(x, fi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (p || !l && !_ && a._start === xt(x._time) && ge(p) && sf(fi(a)) && x.data !== "nested") && (a._tTime = -ct, a.render(Math.max(0, -f) || 0)), g && vl(fi(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, s) {
    var a = this._time, u = this._tDur, l = this._dur, f = r < 0, p = r > u - ct && !f ? u : r < ct ? 0 : r, c, h, _, d, g, y, x, w, v;
    if (!l)
      af(this, r, n, s);
    else if (p !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (c = p, w = this.timeline, this._repeat) {
        if (d = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(d * 100 + r, n, s);
        if (c = xt(p % d), p === u ? (_ = this._repeat, c = l) : (g = xt(p / d), _ = ~~g, _ && _ === g ? (c = l, _--) : c > l && (c = l)), y = this._yoyo && _ & 1, y && (v = this._yEase, c = l - c), g = Ar(this._tTime, d), c === a && !s && this._initted && _ === g)
          return this._tTime = p, this;
        _ !== g && (w && this._yEase && Ll(w, y), this.vars.repeatRefresh && !y && !this._lock && c !== d && this._initted && (this._lock = s = 1, this.render(xt(d * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (wl(this, f ? r : c, s, n, p))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
          return this;
        if (l !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = p, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (v || this._ease)(c / l), this._from && (this.ratio = x = 1 - x), !a && p && !n && !g && (Pe(this, "onStart"), this._tTime !== p))
        return this;
      for (h = this._pt; h; )
        h.r(x, h.d), h = h._next;
      w && w.render(r < 0 ? r : w._dur * w._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && to(this, r, n, s), Pe(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && Pe(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (f && !this._onUpdate && to(this, r, !0, !0), (r || !l) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Ai(this, 1), !n && !(f && !a) && (p || a || y) && (Pe(this, p === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, s, a, u) {
    xn || Ee.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || zo(this, l), f = this._ease(l / this._dur), Ef(this, r, n, s, a, f, l, u) ? this.resetTo(r, n, s, a, 1) : (xs(this, 0), this.parent || ml(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? qr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Kt), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, ki && ki.vars.overwrite !== !0)._first || qr(this), this.parent && s !== this.timeline.totalDuration() && Lr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, u = r ? Be(r) : a, l = this._ptLookup, f = this._pt, p, c, h, _, d, g, y;
    if ((!n || n === "all") && rf(a, u))
      return n === "all" && (this._pt = 0), qr(this);
    for (p = this._op = this._op || [], n !== "all" && (Ht(n) && (d = {}, me(n, function(x) {
      return d[x] = 1;
    }), n = d), n = Cf(a, n)), y = a.length; y--; )
      if (~u.indexOf(a[y])) {
        c = l[y], n === "all" ? (p[y] = n, _ = c, h = {}) : (h = p[y] = p[y] || {}, _ = n);
        for (d in _)
          g = c && c[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && vs(this, g, "_pt"), delete c[d]), h !== "all" && (h[d] = 1);
      }
    return this._initted && !this._pt && f && qr(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return rn(1, arguments);
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
    return rn(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return bt.killTweensOf(r, n, s);
  }, t;
}(bn);
Re(Lt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
me("staggerTo,staggerFrom,staggerFromTo", function(o) {
  Lt[o] = function() {
    var t = new ce(), i = io.call(arguments, 0);
    return i.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, i);
  };
});
var Fo = function(t, i, e) {
  return t[i] = e;
}, Yl = function(t, i, e) {
  return t[i](e);
}, Of = function(t, i, e, r) {
  return t[i](r.fp, e);
}, Mf = function(t, i, e) {
  return t.setAttribute(i, e);
}, Bo = function(t, i) {
  return kt(t[i]) ? Yl : Co(t[i]) && t.setAttribute ? Mf : Fo;
}, Vl = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, Df = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, Xl = function(t, i) {
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
}, No = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, Rf = function(t, i, e, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, i, e), n = s;
}, Af = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? vs(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, Lf = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, Wl = function(t) {
  for (var i = t._pt, e, r, n, s; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : s) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : s = i, i = e;
  }
  t._pt = n;
}, ye = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a, u, l, f) {
    this.t = e, this.s = n, this.c = s, this.p = r, this.r = a || Vl, this.d = u || this, this.set = l || Fo, this.pr = f || 0, this._next = i, i && (i._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = Lf, this.m = e, this.mt = n, this.tween = r;
  }, o;
}();
me(Ro + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Do[o] = 1;
});
De.TweenMax = De.TweenLite = Lt;
De.TimelineLite = De.TimelineMax = ce;
bt = new ce({
  sortChildren: !1,
  defaults: Dr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Me.stringFilter = Rl;
var Ji = [], Zn = {}, If = [], _a = 0, zf = 0, Rs = function(t) {
  return (Zn[t] || If).map(function(i) {
    return i();
  });
}, oo = function() {
  var t = Date.now(), i = [];
  t - _a > 2 && (Rs("matchMediaInit"), Ji.forEach(function(e) {
    var r = e.queries, n = e.conditions, s, a, u, l;
    for (a in r)
      s = Je.matchMedia(r[a]).matches, s && (u = 1), s !== n[a] && (n[a] = s, l = 1);
    l && (e.revert(), u && i.push(e));
  }), Rs("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), _a = t, Rs("matchMedia"));
}, Hl = /* @__PURE__ */ function() {
  function o(i, e) {
    this.selector = e && ro(e), this.data = [], this._r = [], this.isReverted = !1, this.id = zf++, i && this.add(i);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    kt(e) && (n = r, r = e, e = kt);
    var s = this, a = function() {
      var l = vt, f = s.selector, p;
      return l && l !== s && l.data.push(s), n && (s.selector = ro(n)), vt = s, p = r.apply(s, arguments), kt(p) && s._r.push(p), vt = l, s.selector = f, s.isReverted = !1, p;
    };
    return s.last = a, e === kt ? a(s, function(u) {
      return s.add(null, u);
    }) : e ? s[e] = a : a;
  }, t.ignore = function(e) {
    var r = vt;
    vt = null, e(this), vt = r;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(r) {
      return r instanceof o ? e.push.apply(e, r.getTweens()) : r instanceof Lt && !(r.parent && r.parent.data === "nested") && e.push(r);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, r) {
    var n = this;
    if (e ? function() {
      for (var a = n.getTweens(), u = n.data.length, l; u--; )
        l = n.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
      for (a.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, p) {
        return p.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(e);
      }), u = n.data.length; u--; )
        l = n.data[u], l instanceof ce ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Lt) && l.revert && l.revert(e);
      n._r.forEach(function(f) {
        return f(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Ji.length; s--; )
        Ji[s].id === this.id && Ji.splice(s, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, o;
}(), Ff = /* @__PURE__ */ function() {
  function o(i) {
    this.contexts = [], this.scope = i, vt && vt.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    si(e) || (e = {
      matches: e
    });
    var s = new Hl(0, n || this.scope), a = s.conditions = {}, u, l, f;
    vt && !s.selector && (s.selector = vt.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = e;
    for (l in e)
      l === "all" ? f = 1 : (u = Je.matchMedia(e[l]), u && (Ji.indexOf(s) < 0 && Ji.push(s), (a[l] = u.matches) && (f = 1), u.addListener ? u.addListener(oo) : u.addEventListener("change", oo)));
    return f && r(s, function(p) {
      return s.add(null, p);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(r) {
      return r.kill(e, !0);
    });
  }, o;
}(), ls = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return Ol(r);
    });
  },
  timeline: function(t) {
    return new ce(t);
  },
  getTweensOf: function(t, i) {
    return bt.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    Ht(t) && (t = Be(t)[0]);
    var n = Zi(t || {}).get, s = e ? gl : _l;
    return e === "native" && (e = ""), t && (i ? s((Se[i] && Se[i].get || n)(t, i, e, r)) : function(a, u, l) {
      return s((Se[a] && Se[a].get || n)(t, a, u, l));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = Be(t), t.length > 1) {
      var r = t.map(function(f) {
        return we.quickSetter(f, i, e);
      }), n = r.length;
      return function(f) {
        for (var p = n; p--; )
          r[p](f);
      };
    }
    t = t[0] || {};
    var s = Se[i], a = Zi(t), u = a.harness && (a.harness.aliases || {})[i] || i, l = s ? function(f) {
      var p = new s();
      vr._pt = 0, p.init(t, e ? f + e : f, vr, 0, [t]), p.render(1, p), vr._pt && No(1, vr);
    } : a.set(t, u);
    return s ? l : function(f) {
      return l(t, u, e ? f + e : f, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = we.to(t, Re((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), s = function(u, l, f) {
      return n.resetTo(i, u, l, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return bt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Qi(t.ease, Dr.ease)), fa(Dr, t || {});
  },
  config: function(t) {
    return fa(Me, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !Se[a] && !De[a] && yn(i + " effect requires " + a + " plugin.");
    }), Ps[i] = function(a, u, l) {
      return e(Be(a), Re(u || {}, n), l);
    }, s && (ce.prototype[i] = function(a, u, l) {
      return this.add(Ps[i](a, si(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(t, i) {
    et[t] = Qi(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? Qi(t, i) : et;
  },
  getById: function(t) {
    return bt.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new ce(t), r, n;
    for (e.smoothChildTiming = ge(t.smoothChildTiming), bt.remove(e), e._dp = 0, e._time = e._tTime = bt._time, r = bt._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof Lt && r.vars.onComplete === r._targets[0])) && ei(e, r, r._start - r._delay), r = n;
    return ei(bt, e, 0), e;
  },
  context: function(t, i) {
    return t ? new Hl(t, i) : vt;
  },
  matchMedia: function(t) {
    return new Ff(t);
  },
  matchMediaRefresh: function() {
    return Ji.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || oo();
  },
  addEventListener: function(t, i) {
    var e = Zn[t] || (Zn[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = Zn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: _f,
    wrapYoyo: gf,
    distribute: Tl,
    random: kl,
    snap: Sl,
    normalize: df,
    getUnit: re,
    clamp: ff,
    splitColor: Ml,
    toArray: Be,
    selector: ro,
    mapRange: Cl,
    pipe: cf,
    unitize: pf,
    interpolate: mf,
    shuffle: bl
  },
  install: fl,
  effects: Ps,
  ticker: Ee,
  updateRoot: ce.updateRoot,
  plugins: Se,
  globalTimeline: bt,
  core: {
    PropTween: ye,
    globals: hl,
    Tween: Lt,
    Timeline: ce,
    Animation: bn,
    getCache: Zi,
    _removeLinkedListItem: vs,
    reverting: function() {
      return Kt;
    },
    context: function(t) {
      return t && vt && (vt.data.push(t), t._ctx = vt), vt;
    },
    suppressOverwrites: function(t) {
      return Eo = t;
    }
  }
};
me("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return ls[o] = Lt[o];
});
Ee.add(ce.updateRoot);
vr = ls.to({}, {
  duration: 0
});
var Bf = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, Nf = function(t, i) {
  var e = t._targets, r, n, s;
  for (r in i)
    for (n = e.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Bf(s, r)), s && s.modifier && s.modifier(i[r], t, e[n], r));
}, As = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var u, l;
        if (Ht(n) && (u = {}, me(n, function(f) {
          return u[f] = 1;
        }), n = u), i) {
          u = {};
          for (l in n)
            u[l] = i(n[l]);
          n = u;
        }
        Nf(a, n);
      };
    }
  };
}, we = ls.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var s, a, u;
    this.tween = e;
    for (s in i)
      u = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (u || 0) + "", i[s], r, n, 0, 0, s), a.op = s, a.b = u, this._props.push(s);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      Kt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, As("roundProps", no), As("modifiers"), As("snap", Sl)) || ls;
Lt.version = ce.version = we.version = "3.14.2";
ul = 1;
Po() && Ir();
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
var ga, Ei, kr, Yo, Gi, ma, Vo, Yf = function() {
  return typeof window < "u";
}, yi = {}, $i = 180 / Math.PI, Er = Math.PI / 180, pr = Math.atan2, ya = 1e8, Xo = /([A-Z])/g, Vf = /(left|right|width|margin|padding|x)/i, Xf = /[\s,\(]\S/, ii = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ao = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Wf = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Hf = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, $f = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Uf = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, $l = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, Ul = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, qf = function(t, i, e) {
  return t.style[i] = e;
}, Gf = function(t, i, e) {
  return t.style.setProperty(i, e);
}, jf = function(t, i, e) {
  return t._gsap[i] = e;
}, Zf = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Kf = function(t, i, e, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = e, s.renderTransform(n, s);
}, Qf = function(t, i, e, r, n) {
  var s = t._gsap;
  s[i] = e, s.renderTransform(n, s);
}, Tt = "transform", ve = Tt + "Origin", Jf = function o(t, i) {
  var e = this, r = this.target, n = r.style, s = r._gsap;
  if (t in yi && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ii[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = hi(r, a);
      }) : this.tfm[t] = s.x ? s[t] : hi(r, t), t === ve && (this.tfm.zOrigin = s.zOrigin);
    else
      return ii.transform.split(",").forEach(function(a) {
        return o.call(e, a, i);
      });
    if (this.props.indexOf(Tt) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ve, i, "")), t = Tt;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, ql = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, th = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Xo, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = Vo(), (!n || !n.isStart) && !e[Tt] && (ql(e), r.zOrigin && e[ve] && (e[ve] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Gl = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: th,
    save: Jf
  };
  return t._gsap || we.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, jl, lo = function(t, i) {
  var e = Ei.createElementNS ? Ei.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ei.createElement(t);
  return e && e.style ? e : Ei.createElement(t);
}, Oe = function o(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(Xo, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && o(t, zr(i) || i, 1) || "";
}, va = "O,Moz,ms,Ms,Webkit".split(","), zr = function(t, i, e) {
  var r = i || Gi, n = r.style, s = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(va[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? va[s] : "") + t;
}, uo = function() {
  Yf() && window.document && (ga = window, Ei = ga.document, kr = Ei.documentElement, Gi = lo("div") || {
    style: {}
  }, lo("div"), Tt = zr(Tt), ve = Tt + "Origin", Gi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", jl = !!zr("perspective"), Vo = we.core.reverting, Yo = 1);
}, wa = function(t) {
  var i = t.ownerSVGElement, e = lo("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), kr.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), kr.removeChild(e), n;
}, xa = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, Zl = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = wa(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = wa(t)), i && !i.width && !i.x && !i.y ? {
    x: +xa(t, ["x", "cx", "x1"]) || 0,
    y: +xa(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Kl = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Zl(t));
}, Li = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in yi && i !== ve && (i = Tt), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Xo, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, Ci = function(t, i, e, r, n, s) {
  var a = new ye(t._pt, i, e, 0, 1, s ? Ul : $l);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, ba = {
  deg: 1,
  rad: 1,
  turn: 1
}, eh = {
  grid: 1,
  flex: 1
}, Ii = function o(t, i, e, r) {
  var n = parseFloat(e) || 0, s = (e + "").trim().substr((n + "").length) || "px", a = Gi.style, u = Vf.test(i), l = t.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), p = 100, c = r === "px", h = r === "%", _, d, g, y;
  if (r === s || !n || ba[r] || ba[s])
    return n;
  if (s !== "px" && !c && (n = o(t, i, e, "px")), y = t.getCTM && Kl(t), (h || s === "%") && (yi[i] || ~i.indexOf("adius")))
    return _ = y ? t.getBBox()[u ? "width" : "height"] : t[f], Pt(h ? n / _ * p : n / 100 * _);
  if (a[u ? "width" : "height"] = p + (c ? s : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, y && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === Ei || !d.appendChild) && (d = Ei.body), g = d._gsap, g && h && g.width && u && g.time === Ee.time && !g.uncache)
    return Pt(n / g.width * p);
  if (h && (i === "height" || i === "width")) {
    var x = t.style[i];
    t.style[i] = p + r, _ = t[f], x ? t.style[i] = x : Li(t, i);
  } else
    (h || s === "%") && !eh[Oe(d, "display")] && (a.position = Oe(t, "position")), d === t && (a.position = "static"), d.appendChild(Gi), _ = Gi[f], d.removeChild(Gi), a.position = "absolute";
  return u && h && (g = Zi(d), g.time = Ee.time, g.width = d[f]), Pt(c ? _ * n / p : _ && n ? p / _ * n : 0);
}, hi = function(t, i, e, r) {
  var n;
  return Yo || uo(), i in ii && i !== "transform" && (i = ii[i], ~i.indexOf(",") && (i = i.split(",")[0])), yi[i] && i !== "transform" ? (n = Sn(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : fs(Oe(t, ve)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = us[i] && us[i](t, i, e) || Oe(t, i) || pl(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Ii(t, i, n, e) + e : n;
}, ih = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = zr(i, t, 1), s = n && Oe(t, n, 1);
    s && s !== e ? (i = n, e = s) : i === "borderColor" && (e = Oe(t, "borderTopColor"));
  }
  var a = new ye(this._pt, t.style, i, 0, 1, Xl), u = 0, l = 0, f, p, c, h, _, d, g, y, x, w, v, T;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Oe(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = Oe(t, i) || r, d ? t.style[i] = d : Li(t, i)), f = [e, r], Rl(f), e = f[0], r = f[1], c = e.match(yr) || [], T = r.match(yr) || [], T.length) {
    for (; p = yr.exec(r); )
      g = p[0], x = r.substring(u, p.index), _ ? _ = (_ + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (_ = 1), g !== (d = c[l++] || "") && (h = parseFloat(d) || 0, v = d.substr((h + "").length), g.charAt(1) === "=" && (g = Sr(h, g) + v), y = parseFloat(g), w = g.substr((y + "").length), u = yr.lastIndex - w.length, w || (w = w || Me.units[i] || v, u === r.length && (r += w, a.e += w)), v !== w && (h = Ii(t, i, d, w) || 0), a._pt = {
        _next: a._pt,
        p: x || l === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: h,
        c: y - h,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? Ul : $l;
  return ll.test(r) && (a.e = 0), this._pt = a, a;
}, Ta = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, rh = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = Ta[e] || e, i[1] = Ta[r] || r, i.join(" ");
}, nh = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, s = e._gsap, a, u, l;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        a = n[l], yi[a] && (u = 1, a = a === "transformOrigin" ? ve : Tt), Li(e, a);
    u && (Li(e, Tt), s && (s.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Sn(e, 1), s.uncache = 1, ql(r)));
  }
}, us = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new ye(t._pt, i, e, 0, 0, nh);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(e), 1;
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
}, Tn = [1, 0, 0, 1, 0, 0], Ql = {}, Jl = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Sa = function(t) {
  var i = Oe(t, Tt);
  return Jl(i) ? Tn : i.substr(7).match(al).map(Pt);
}, Wo = function(t, i) {
  var e = t._gsap || Zi(t), r = t.style, n = Sa(t), s, a, u, l;
  return e.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Tn : n) : (n === Tn && !t.offsetParent && t !== kr && !e.svg && (u = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, a = t.nextElementSibling, kr.appendChild(t)), n = Sa(t), u ? r.display = u : Li(t, "display"), l && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : kr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, fo = function(t, i, e, r, n, s) {
  var a = t._gsap, u = n || Wo(t, !0), l = a.xOrigin || 0, f = a.yOrigin || 0, p = a.xOffset || 0, c = a.yOffset || 0, h = u[0], _ = u[1], d = u[2], g = u[3], y = u[4], x = u[5], w = i.split(" "), v = parseFloat(w[0]) || 0, T = parseFloat(w[1]) || 0, C, S, P, k;
  e ? u !== Tn && (S = h * g - _ * d) && (P = v * (g / S) + T * (-d / S) + (d * x - g * y) / S, k = v * (-_ / S) + T * (h / S) - (h * x - _ * y) / S, v = P, T = k) : (C = Zl(t), v = C.x + (~w[0].indexOf("%") ? v / 100 * C.width : v), T = C.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * C.height : T)), r || r !== !1 && a.smooth ? (y = v - l, x = T - f, a.xOffset = p + (y * h + x * d) - y, a.yOffset = c + (y * _ + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = T, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[ve] = "0px 0px", s && (Ci(s, a, "xOrigin", l, v), Ci(s, a, "yOrigin", f, T), Ci(s, a, "xOffset", p, a.xOffset), Ci(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + T);
}, Sn = function(t, i) {
  var e = t._gsap || new zl(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), l = Oe(t, ve) || "0", f, p, c, h, _, d, g, y, x, w, v, T, C, S, P, k, E, R, O, Y, z, D, $, V, it, at, m, rt, lt, de, nt, U;
  return f = p = c = d = g = y = x = w = v = 0, h = _ = 1, e.svg = !!(t.getCTM && Kl(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[Tt] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[Tt] !== "none" ? u[Tt] : "")), r.scale = r.rotate = r.translate = "none"), S = Wo(t, e.svg), e.svg && (e.uncache ? (it = t.getBBox(), l = e.xOrigin - it.x + "px " + (e.yOrigin - it.y) + "px", V = "") : V = !i && t.getAttribute("data-svg-origin"), fo(t, V || l, !!V || e.originIsAbsolute, e.smooth !== !1, S)), T = e.xOrigin || 0, C = e.yOrigin || 0, S !== Tn && (R = S[0], O = S[1], Y = S[2], z = S[3], f = D = S[4], p = $ = S[5], S.length === 6 ? (h = Math.sqrt(R * R + O * O), _ = Math.sqrt(z * z + Y * Y), d = R || O ? pr(O, R) * $i : 0, x = Y || z ? pr(Y, z) * $i + d : 0, x && (_ *= Math.abs(Math.cos(x * Er))), e.svg && (f -= T - (T * R + C * Y), p -= C - (T * O + C * z))) : (U = S[6], de = S[7], m = S[8], rt = S[9], lt = S[10], nt = S[11], f = S[12], p = S[13], c = S[14], P = pr(U, lt), g = P * $i, P && (k = Math.cos(-P), E = Math.sin(-P), V = D * k + m * E, it = $ * k + rt * E, at = U * k + lt * E, m = D * -E + m * k, rt = $ * -E + rt * k, lt = U * -E + lt * k, nt = de * -E + nt * k, D = V, $ = it, U = at), P = pr(-Y, lt), y = P * $i, P && (k = Math.cos(-P), E = Math.sin(-P), V = R * k - m * E, it = O * k - rt * E, at = Y * k - lt * E, nt = z * E + nt * k, R = V, O = it, Y = at), P = pr(O, R), d = P * $i, P && (k = Math.cos(P), E = Math.sin(P), V = R * k + O * E, it = D * k + $ * E, O = O * k - R * E, $ = $ * k - D * E, R = V, D = it), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, y = 180 - y), h = Pt(Math.sqrt(R * R + O * O + Y * Y)), _ = Pt(Math.sqrt($ * $ + U * U)), P = pr(D, $), x = Math.abs(P) > 2e-4 ? P * $i : 0, v = nt ? 1 / (nt < 0 ? -nt : nt) : 0), e.svg && (V = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Jl(Oe(t, Tt)), V && t.setAttribute("transform", V))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (h *= -1, x += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, x += x <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + s, e.y = p - ((e.yPercent = p && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + s, e.z = c + s, e.scaleX = Pt(h), e.scaleY = Pt(_), e.rotation = Pt(d) + a, e.rotationX = Pt(g) + a, e.rotationY = Pt(y) + a, e.skewX = x + a, e.skewY = w + a, e.transformPerspective = v + s, (e.zOrigin = parseFloat(l.split(" ")[2]) || !i && e.zOrigin || 0) && (r[ve] = fs(l)), e.xOffset = e.yOffset = 0, e.force3D = Me.force3D, e.renderTransform = e.svg ? oh : jl ? tu : sh, e.uncache = 0, e;
}, fs = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ls = function(t, i, e) {
  var r = re(i);
  return Pt(parseFloat(i) + parseFloat(Ii(t, "x", e + "px", r))) + r;
}, sh = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, tu(t, i);
}, Wi = "0deg", Hr = "0px", Hi = ") ", tu = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, u = e.z, l = e.rotation, f = e.rotationY, p = e.rotationX, c = e.skewX, h = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective, y = e.force3D, x = e.target, w = e.zOrigin, v = "", T = y === "auto" && t && t !== 1 || y === !0;
  if (w && (p !== Wi || f !== Wi)) {
    var C = parseFloat(f) * Er, S = Math.sin(C), P = Math.cos(C), k;
    C = parseFloat(p) * Er, k = Math.cos(C), s = Ls(x, s, S * k * -w), a = Ls(x, a, -Math.sin(C) * -w), u = Ls(x, u, P * k * -w + w);
  }
  g !== Hr && (v += "perspective(" + g + Hi), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (T || s !== Hr || a !== Hr || u !== Hr) && (v += u !== Hr || T ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Hi), l !== Wi && (v += "rotate(" + l + Hi), f !== Wi && (v += "rotateY(" + f + Hi), p !== Wi && (v += "rotateX(" + p + Hi), (c !== Wi || h !== Wi) && (v += "skew(" + c + ", " + h + Hi), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Hi), x.style[Tt] = v || "translate(0, 0)";
}, oh = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, u = e.rotation, l = e.skewX, f = e.skewY, p = e.scaleX, c = e.scaleY, h = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, y = e.yOffset, x = e.forceCSS, w = parseFloat(s), v = parseFloat(a), T, C, S, P, k;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= Er, l *= Er, T = Math.cos(u) * p, C = Math.sin(u) * p, S = Math.sin(u - l) * -c, P = Math.cos(u - l) * c, l && (f *= Er, k = Math.tan(l - f), k = Math.sqrt(1 + k * k), S *= k, P *= k, f && (k = Math.tan(f), k = Math.sqrt(1 + k * k), T *= k, C *= k)), T = Pt(T), C = Pt(C), S = Pt(S), P = Pt(P)) : (T = p, P = c, C = S = 0), (w && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (w = Ii(h, "x", s, "px"), v = Ii(h, "y", a, "px")), (_ || d || g || y) && (w = Pt(w + _ - (_ * T + d * S) + g), v = Pt(v + d - (_ * C + d * P) + y)), (r || n) && (k = h.getBBox(), w = Pt(w + r / 100 * k.width), v = Pt(v + n / 100 * k.height)), k = "matrix(" + T + "," + C + "," + S + "," + P + "," + w + "," + v + ")", h.setAttribute("transform", k), x && (h.style[Tt] = k);
}, ah = function(t, i, e, r, n) {
  var s = 360, a = Ht(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? $i : 1), l = u - r, f = r + l + "deg", p, c;
  return a && (p = n.split("_")[1], p === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), p === "cw" && l < 0 ? l = (l + s * ya) % s - ~~(l / s) * s : p === "ccw" && l > 0 && (l = (l - s * ya) % s - ~~(l / s) * s)), t._pt = c = new ye(t._pt, i, e, r, l, Wf), c.e = f, c.u = "deg", t._props.push(e), c;
}, ka = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, lh = function(t, i, e) {
  var r = ka({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = e.style, a, u, l, f, p, c, h, _;
  r.svg ? (l = e.getAttribute("transform"), e.setAttribute("transform", ""), s[Tt] = i, a = Sn(e, 1), Li(e, Tt), e.setAttribute("transform", l)) : (l = getComputedStyle(e)[Tt], s[Tt] = i, a = Sn(e, 1), s[Tt] = l);
  for (u in yi)
    l = r[u], f = a[u], l !== f && n.indexOf(u) < 0 && (h = re(l), _ = re(f), p = h !== _ ? Ii(e, u, l, _) : parseFloat(l), c = parseFloat(f), t._pt = new ye(t._pt, a, u, p, c - p, ao), t._pt.u = _ || 0, t._props.push(u));
  ka(a, r);
};
me("padding,margin,Width,Radius", function(o, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  us[t > 1 ? "border" + o : o] = function(a, u, l, f, p) {
    var c, h;
    if (arguments.length < 4)
      return c = s.map(function(_) {
        return hi(a, _, l);
      }), h = c.join(" "), h.split(c[0]).length === 5 ? c[0] : h;
    c = (f + "").split(" "), h = {}, s.forEach(function(_, d) {
      return h[_] = c[d] = c[d] || c[(d - 1) / 2 | 0];
    }), a.init(u, h, p);
  };
});
var eu = {
  name: "css",
  register: uo,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var s = this._props, a = t.style, u = e.vars.startAt, l, f, p, c, h, _, d, g, y, x, w, v, T, C, S, P, k;
    Yo || uo(), this.styles = this.styles || Gl(t), P = this.styles.props, this.tween = e;
    for (d in i)
      if (d !== "autoRound" && (f = i[d], !(Se[d] && Fl(d, i, e, r, t, n)))) {
        if (h = typeof f, _ = us[d], h === "function" && (f = f.call(e, r, t, n), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = wn(f)), _)
          _(this, t, d, f, e) && (S = 1);
        else if (d.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(d) + "").trim(), f += "", Di.lastIndex = 0, Di.test(l) || (g = re(l), y = re(f), y ? g !== y && (l = Ii(t, d, l, y) + y) : g && (f += g)), this.add(a, "setProperty", l, f, r, n, 0, 0, d), s.push(d), P.push(d, 0, a[d]);
        else if (h !== "undefined") {
          if (u && d in u ? (l = typeof u[d] == "function" ? u[d].call(e, r, t, n) : u[d], Ht(l) && ~l.indexOf("random(") && (l = wn(l)), re(l + "") || l === "auto" || (l += Me.units[d] || re(hi(t, d)) || ""), (l + "").charAt(1) === "=" && (l = hi(t, d))) : l = hi(t, d), c = parseFloat(l), x = h === "string" && f.charAt(1) === "=" && f.substr(0, 2), x && (f = f.substr(2)), p = parseFloat(f), d in ii && (d === "autoAlpha" && (c === 1 && hi(t, "visibility") === "hidden" && p && (c = 0), P.push("visibility", 0, a.visibility), Ci(this, a, "visibility", c ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = ii[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in yi, w) {
            if (this.styles.save(d), k = f, h === "string" && f.substring(0, 6) === "var(--") {
              if (f = Oe(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = f, f = Oe(t, "perspective"), E ? t.style.perspective = E : Li(t, "perspective");
              }
              p = parseFloat(f);
            }
            if (v || (T = t._gsap, T.renderTransform && !i.parseTransform || Sn(t, i.parseTransform), C = i.smoothOrigin !== !1 && T.smooth, v = this._pt = new ye(this._pt, a, Tt, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), d === "scale")
              this._pt = new ye(this._pt, T, "scaleY", T.scaleY, (x ? Sr(T.scaleY, x + p) : p) - T.scaleY || 0, ao), this._pt.u = 0, s.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              P.push(ve, 0, a[ve]), f = rh(f), T.svg ? fo(t, f, 0, C, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== T.zOrigin && Ci(this, T, "zOrigin", T.zOrigin, y), Ci(this, a, d, fs(l), fs(f)));
              continue;
            } else if (d === "svgOrigin") {
              fo(t, f, 1, C, 0, this);
              continue;
            } else if (d in Ql) {
              ah(this, T, d, c, x ? Sr(c, x + f) : f);
              continue;
            } else if (d === "smoothOrigin") {
              Ci(this, T, "smooth", T.smooth, f);
              continue;
            } else if (d === "force3D") {
              T[d] = f;
              continue;
            } else if (d === "transform") {
              lh(this, f, t);
              continue;
            }
          } else d in a || (d = zr(d) || d);
          if (w || (p || p === 0) && (c || c === 0) && !Xf.test(f) && d in a)
            g = (l + "").substr((c + "").length), p || (p = 0), y = re(f) || (d in Me.units ? Me.units[d] : g), g !== y && (c = Ii(t, d, l, y)), this._pt = new ye(this._pt, w ? T : a, d, c, (x ? Sr(c, x + p) : p) - c, !w && (y === "px" || d === "zIndex") && i.autoRound !== !1 ? Uf : ao), this._pt.u = y || 0, w && k !== f ? (this._pt.b = l, this._pt.e = k, this._pt.r = $f) : g !== y && y !== "%" && (this._pt.b = l, this._pt.r = Hf);
          else if (d in a)
            ih.call(this, t, d, l, x ? x + f : f);
          else if (d in t)
            this.add(t, d, l || t[d], x ? x + f : f, r, n);
          else if (d !== "parseTransform") {
            Mo(d, f);
            continue;
          }
          w || (d in a ? P.push(d, 0, a[d]) : typeof t[d] == "function" ? P.push(d, 2, t[d]()) : P.push(d, 1, l || t[d])), s.push(d);
        }
      }
    S && Wl(this);
  },
  render: function(t, i) {
    if (i.tween._time || !Vo())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: hi,
  aliases: ii,
  getSetter: function(t, i, e) {
    var r = ii[i];
    return r && r.indexOf(",") < 0 && (i = r), i in yi && i !== ve && (t._gsap.x || hi(t, "x")) ? e && ma === e ? i === "scale" ? Zf : jf : (ma = e || {}) && (i === "scale" ? Kf : Qf) : t.style && !Co(t.style[i]) ? qf : ~i.indexOf("-") ? Gf : Bo(t, i);
  },
  core: {
    _removeProperty: Li,
    _getMatrix: Wo
  }
};
we.utils.checkPrefix = zr;
we.core.getStyleSaver = Gl;
(function(o, t, i, e) {
  var r = me(o + "," + t + "," + i, function(n) {
    yi[n] = 1;
  });
  me(t, function(n) {
    Me.units[n] = "deg", Ql[n] = 1;
  }), ii[r[13]] = o + "," + t, me(e, function(n) {
    var s = n.split(":");
    ii[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
me("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  Me.units[o] = "px";
});
we.registerPlugin(eu);
var wr = we.registerPlugin(eu) || we;
wr.core.Tween;
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var pi, tr, Ho, bs, jr, Kn, hs, sn, qe = "transform", ho = qe + "Origin", iu, $o = function(t) {
  var i = t.ownerDocument || t;
  for (!(qe in t.style) && ("msTransform" in t.style) && (qe = "msTransform", ho = qe + "Origin"); i.parentNode && (i = i.parentNode); )
    ;
  if (tr = window, hs = new nr(), i) {
    pi = i, Ho = i.documentElement, bs = i.body, sn = pi.createElementNS("http://www.w3.org/2000/svg", "g"), sn.style.transform = "none";
    var e = i.createElement("div"), r = i.createElement("div"), n = i && (i.body || i.firstElementChild);
    n && n.appendChild && (n.appendChild(e), e.appendChild(r), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", iu = r.offsetParent !== e, n.removeChild(e));
  }
  return i;
}, uh = function(t) {
  for (var i, e; t && t !== bs; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), i ? i.push(e) : i = [e]), t = t.parentNode;
  return i;
}, ru = [], nu = [], Uo = function() {
  return tr.pageYOffset || pi.scrollTop || Ho.scrollTop || bs.scrollTop || 0;
}, qo = function() {
  return tr.pageXOffset || pi.scrollLeft || Ho.scrollLeft || bs.scrollLeft || 0;
}, Go = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, fh = function o(t) {
  if (tr.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return o(t);
}, Is = function o(t, i) {
  if (t.parentNode && (pi || $o(t))) {
    var e = Go(t), r = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = e ? i ? "rect" : "g" : "div", s = i !== 2 ? 0 : 100, a = i === 3 ? 100 : 0, u = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, l = pi.createElementNS ? pi.createElementNS(r.replace(/^https/, "http"), n) : pi.createElement(n);
    return i && (e ? (Kn || (Kn = o(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), l.setAttribute("fill", "transparent"), Kn.appendChild(l)) : (jr || (jr = o(t), Object.assign(jr.style, u)), Object.assign(l.style, u, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: s + "px"
    }), jr.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, hh = function(t) {
  for (var i = new nr(), e = 0; e < t.numberOfItems; e++)
    i.multiply(t.getItem(e).matrix);
  return i;
}, su = function(t) {
  var i = t.getCTM(), e;
  return i || (e = t.style[qe], t.style[qe] = "none", t.appendChild(sn), i = sn.getCTM(), t.removeChild(sn), e ? t.style[qe] = e : t.style.removeProperty(qe.replace(/([A-Z])/g, "-$1").toLowerCase())), i || hs.clone();
}, ch = function(t, i) {
  var e = Go(t), r = t === e, n = e ? ru : nu, s = t.parentNode, a = s && !e && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, u, l, f, p, c, h;
  if (t === tr)
    return t;
  if (n.length || n.push(Is(t, 1), Is(t, 2), Is(t, 3)), u = e ? Kn : jr, e)
    r ? (f = su(t), p = -f.e / f.a, c = -f.f / f.d, l = hs) : t.getBBox ? (f = t.getBBox(), l = t.transform ? t.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? hh(l) : l.getItem(0).matrix : hs, p = l.a * f.x + l.c * f.y, c = l.b * f.x + l.d * f.y) : (l = new nr(), p = c = 0), i && t.tagName.toLowerCase() === "g" && (p = c = 0), (r || !t.getBoundingClientRect().width ? e : s).appendChild(u), u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + p) + "," + (l.f + c) + ")");
  else {
    if (p = c = 0, iu)
      for (l = t.offsetParent, f = t; f && (f = f.parentNode) && f !== l && f.parentNode; )
        (tr.getComputedStyle(f)[qe] + "").length > 4 && (p = f.offsetLeft, c = f.offsetTop, f = 0);
    if (h = tr.getComputedStyle(t), h.position !== "absolute" && h.position !== "fixed")
      for (l = t.offsetParent; s && s !== l; )
        p += s.scrollLeft || 0, c += s.scrollTop || 0, s = s.parentNode;
    f = u.style, f.top = t.offsetTop - c + "px", f.left = t.offsetLeft - p + "px", f[qe] = h[qe], f[ho] = h[ho], f.position = h.position === "fixed" ? "fixed" : "absolute", a.appendChild(u);
  }
  return u;
}, zs = function(t, i, e, r, n, s, a) {
  return t.a = i, t.b = e, t.c = r, t.d = n, t.e = s, t.f = a, t;
}, nr = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a) {
    i === void 0 && (i = 1), e === void 0 && (e = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), zs(this, i, e, r, n, s, a);
  }
  var t = o.prototype;
  return t.inverse = function() {
    var e = this.a, r = this.b, n = this.c, s = this.d, a = this.e, u = this.f, l = e * s - r * n || 1e-10;
    return zs(this, s / l, -r / l, -n / l, e / l, (n * u - s * a) / l, -(e * u - r * a) / l);
  }, t.multiply = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, u = this.e, l = this.f, f = e.a, p = e.c, c = e.b, h = e.d, _ = e.e, d = e.f;
    return zs(this, f * r + c * s, f * n + c * a, p * r + h * s, p * n + h * a, u + _ * r + d * s, l + _ * n + d * a);
  }, t.clone = function() {
    return new o(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, u = this.e, l = this.f;
    return r === e.a && n === e.b && s === e.c && a === e.d && u === e.e && l === e.f;
  }, t.apply = function(e, r) {
    r === void 0 && (r = {});
    var n = e.x, s = e.y, a = this.a, u = this.b, l = this.c, f = this.d, p = this.e, c = this.f;
    return r.x = n * a + s * l + p || 0, r.y = n * u + s * f + c || 0, r;
  }, o;
}();
function oi(o, t, i, e) {
  if (!o || !o.parentNode || (pi || $o(o)).documentElement === o)
    return new nr();
  var r = uh(o), n = Go(o), s = n ? ru : nu, a = ch(o, i), u = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), f = s[2].getBoundingClientRect(), p = a.parentNode, c = !e && fh(o), h = new nr((l.left - u.left) / 100, (l.top - u.top) / 100, (f.left - u.left) / 100, (f.top - u.top) / 100, u.left + (c ? 0 : qo()), u.top + (c ? 0 : Uo()));
  if (p.removeChild(a), r)
    for (u = r.length; u--; )
      l = r[u], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return t ? h.inverse() : h;
}
/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ph = 1, Fr, jt, mt, on, Si, di, co, Ea = function(t, i) {
  return t.actions.forEach(function(e) {
    return e.vars[i] && e.vars[i](e);
  });
}, po = {}, Ca = 180 / Math.PI, dh = Math.PI / 180, cs = {}, Pa = {}, Ts = {}, jo = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, _h = jo("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ss = jo("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), an = function(t) {
  return Fr(t)[0] || console.warn("Element not found:", t);
}, xr = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, Fs = function(t, i, e) {
  return t.forEach(function(r) {
    return r.classList[e](i);
  });
}, Oa = {
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
}, ou = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, au = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, br = function(t, i) {
  var e = {}, r;
  for (r in t)
    i[r] || (e[r] = t[r]);
  return e;
}, Zo = {}, lu = function(t) {
  var i = Zo[t] = jo(t);
  return Ts[t] = i.concat(Ss), i;
}, gh = function(t) {
  var i = t._gsap || jt.core.getCache(t);
  return i.gmCache === jt.ticker.frame ? i.gMatrix : (i.gmCache = jt.ticker.frame, i.gMatrix = oi(t, !0, !1, !0));
}, mh = function o(t, i, e) {
  e === void 0 && (e = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, e) * (i ? -1 : 1), s = i ? -n * 900 : 0; t; )
    s += n, t = t.previousSibling;
  return r ? s + o(r, i, e + 1) : s;
}, ps = function(t, i, e) {
  return t.forEach(function(r) {
    return r.d = mh(e ? r.element : r.t, i);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, kn = function(t, i) {
  for (var e = t.element.style, r = t.css = t.css || [], n = i.length, s, a; n--; )
    s = i[n], a = e[s] || e.getPropertyValue(s), r.push(a ? s : Pa[s] || (Pa[s] = au(s)), a);
  return e;
}, ds = function(t) {
  var i = t.css, e = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < i.length; r += 2)
    i[r + 1] ? e[i[r]] = i[r + 1] : e.removeProperty(i[r]);
  !i[i.indexOf("transform") + 1] && e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Ma = function(t, i) {
  t.forEach(function(e) {
    return e.a.cache.uncache = 1;
  }), i || t.finalStates.forEach(ds);
}, Bs = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Ko = function(t, i, e) {
  var r = t.element, n = t.width, s = t.height, a = t.uncache, u = t.getProp, l = r.style, f = 4, p, c, h;
  if (typeof i != "object" && (i = t), mt && e !== 1)
    return mt._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), mt._final.push(function() {
      return (t.cache.uncache = 1) && ds(t);
    }), r;
  for (c = u("display") === "none", (!t.isVisible || c) && (c && (kn(t, ["display"]).display = i.display), t.matrix = i.matrix, t.width = n = t.width || i.width, t.height = s = t.height || i.height), kn(t, Bs), h = window.getComputedStyle(r); f--; )
    l[Bs[f]] = h[Bs[f]];
  if (l.gridArea = "1 / 1 / 1 / 1", l.transition = "none", l.position = "absolute", l.width = n + "px", l.height = s + "px", l.top || (l.top = "0px"), l.left || (l.left = "0px"), a)
    p = new sr(r);
  else if (p = br(t, cs), p.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    p.matrix = new nr(1, 0, 0, 1, _.left + qo(), _.top + Uo());
  } else
    p.matrix = oi(r, !1, !1, !0);
  return p = Cr(p, t, !0), t.x = di(p.x, 0.01), t.y = di(p.y, 0.01), r;
}, Da = function(t, i) {
  return i !== !0 && (i = Fr(i), t = t.filter(function(e) {
    if (i.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1)
      return !0;
    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
  })), t;
}, uu = function(t) {
  return ps(t, !0).forEach(function(i) {
    return (i.a.isVisible || i.b.isVisible) && Ko(i.sd < 0 ? i.b : i.a, i.b, 1);
  });
}, yh = function(t, i) {
  return i && t.idLookup[_o(i).id] || t.elementStates[0];
}, _o = function(t, i, e, r) {
  return t instanceof sr ? t : t instanceof Ge ? yh(t, r) : new sr(typeof t == "string" ? an(t) || console.warn(t + " not found") : t, i, e);
}, vh = function(t, i) {
  for (var e = jt.getProperty(t.element, null, "native"), r = t.props = {}, n = i.length; n--; )
    r[i[n]] = (e(i[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, fu = function(t, i) {
  var e = t.style || t, r;
  for (r in i)
    e[r] = i[r];
}, wh = function(t) {
  var i = t.getAttribute("data-flip-id");
  return i || t.setAttribute("data-flip-id", i = "auto-" + ph++), i;
}, hu = function(t) {
  return t.map(function(i) {
    return i.element;
  });
}, Ra = function(t, i, e) {
  return t && i.length && e.add(t(hu(i), e, new Ge(i, 0, !0)), 0);
}, Cr = function(t, i, e, r, n, s) {
  var a = t.element, u = t.cache, l = t.parent, f = t.x, p = t.y, c = i.width, h = i.height, _ = i.scaleX, d = i.scaleY, g = i.rotation, y = i.bounds, x = s && co && co(a, "transform,width,height"), w = t, v = i.matrix, T = v.e, C = v.f, S = t.bounds.width !== y.width || t.bounds.height !== y.height || t.scaleX !== _ || t.scaleY !== d || t.rotation !== g, P = !S && t.simple && i.simple && !n, k, E, R, O, Y, z, D;
  return P || !l ? (_ = d = 1, g = k = 0) : (Y = gh(l), z = Y.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix), g = xr(Math.atan2(z.b, z.a) * Ca), k = xr(Math.atan2(z.c, z.d) * Ca + g) % 360, _ = Math.sqrt(Math.pow(z.a, 2) + Math.pow(z.b, 2)), d = Math.sqrt(Math.pow(z.c, 2) + Math.pow(z.d, 2)) * Math.cos(k * dh), n && (n = Fr(n)[0], O = jt.getProperty(n), D = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), w = {
    scaleX: O("scaleX"),
    scaleY: O("scaleY"),
    width: D ? D.width : Math.ceil(parseFloat(O("width", "px"))),
    height: D ? D.height : parseFloat(O("height", "px"))
  }), u.rotation = g + "deg", u.skewX = k + "deg"), e ? (_ *= c === w.width || !w.width ? 1 : c / w.width, d *= h === w.height || !w.height ? 1 : h / w.height, u.scaleX = _, u.scaleY = d) : (c = di(c * _ / w.scaleX, 0), h = di(h * d / w.scaleY, 0), a.style.width = c + "px", a.style.height = h + "px"), r && fu(a, i.props), P || !l ? (f += T - t.matrix.e, p += C - t.matrix.f) : S || l !== i.parent ? (u.x = f + "px", u.y = p + "px", u.renderTransform(1, u), z = oi(n || a, !1, !1, !0), E = Y.apply({
    x: z.e,
    y: z.f
  }), R = Y.apply({
    x: T,
    y: C
  }), f += R.x - E.x, p += R.y - E.y) : (Y.e = Y.f = 0, R = Y.apply({
    x: T - t.matrix.e,
    y: C - t.matrix.f
  }), f += R.x, p += R.y), f = di(f, 0.02), p = di(p, 0.02), s && !(s instanceof sr) ? x && x.revert() : (u.x = f + "px", u.y = p + "px", u.renderTransform(1, u)), s && (s.x = f, s.y = p, s.rotation = g, s.skewX = k, e ? (s.scaleX = _, s.scaleY = d) : (s.width = c, s.height = h)), s || u;
}, Ns = function(t, i) {
  return t instanceof Ge ? t : new Ge(t, i);
}, cu = function(t, i, e) {
  var r = t.idLookup[e], n = t.alt[e];
  return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, Ys = [], Vs = "width,height,overflowX,overflowY".split(","), An, Aa = function(t) {
  if (t !== An) {
    var i = Si.style, e = Si.clientWidth === window.outerWidth, r = Si.clientHeight === window.outerHeight, n = 4;
    if (t && (e || r)) {
      for (; n--; )
        Ys[n] = i[Vs[n]];
      e && (i.width = Si.clientWidth + "px", i.overflowY = "hidden"), r && (i.height = Si.clientHeight + "px", i.overflowX = "hidden"), An = t;
    } else if (An) {
      for (; n--; )
        Ys[n] ? i[Vs[n]] = Ys[n] : i.removeProperty(au(Vs[n]));
      An = t;
    }
  }
}, La = function(t, i) {
  for (var e = 0; e < t.length; e += 3)
    jt.set(t[e], {
      clearProps: !0
    }), t[e].setAttribute("style", t[e + i]), t[e]._gsap.gmCache = -1;
}, Xs = function(t, i, e, r) {
  t instanceof Ge && i instanceof Ge || console.warn("Not a valid state object."), e = e || {};
  var n = e, s = n.clearProps, a = n.onEnter, u = n.onLeave, l = n.absolute, f = n.absoluteOnLeave, p = n.custom, c = n.delay, h = n.paused, _ = n.repeat, d = n.repeatDelay, g = n.yoyo, y = n.toggleClass, x = n.nested, w = n.zIndex, v = n.scale, T = n.fade, C = n.stagger, S = n.spin, P = n.prune, k = ("props" in e ? e : t).props, E = br(e, Oa), R = jt.timeline({
    delay: c,
    paused: h,
    repeat: _,
    repeatDelay: d,
    yoyo: g,
    data: "isFlip"
  }), O = E, Y = [], z = [], D = [], $ = [], V = S === !0 ? 1 : S || 0, it = typeof S == "function" ? S : function() {
    return V;
  }, at = t.interrupted || i.interrupted, m = R[r !== 1 ? "to" : "from"], rt, lt, de, nt, U, q, ut, pt, Mt, Nt, gt, It, I, Q;
  for (lt in i.idLookup)
    gt = i.alt[lt] ? cu(i, t, lt) : i.idLookup[lt], U = gt.element, Nt = t.idLookup[lt], t.alt[lt] && U === Nt.element && (t.alt[lt].isVisible || !gt.isVisible) && (Nt = t.alt[lt]), Nt ? (q = {
      t: U,
      b: Nt,
      a: gt,
      sd: Nt.element === U ? 0 : gt.isVisible ? 1 : -1
    }, D.push(q), q.sd && (q.sd < 0 && (q.b = gt, q.a = Nt), at && kn(q.b, k ? Ts[k] : Ss), T && D.push(q.swap = {
      t: Nt.element,
      b: q.b,
      a: q.a,
      sd: -q.sd,
      swap: q
    })), U._flip = Nt.element._flip = mt ? mt.timeline : R) : gt.isVisible && (D.push({
      t: U,
      b: br(gt, {
        isVisible: 1
      }),
      a: gt,
      sd: 0,
      entering: 1
    }), U._flip = mt ? mt.timeline : R);
  if (k && (Zo[k] || lu(k)).forEach(function(b) {
    return E[b] = function(Dt) {
      return D[Dt].a.props[b];
    };
  }), D.finalStates = Mt = [], It = function() {
    ps(D), Aa(!0);
    var Dt = [];
    for (nt = 0; nt < D.length; nt++)
      q = D[nt], I = q.a, Q = q.b, P && !I.isDifferent(Q) && !q.entering ? D.splice(nt--, 1) : (U = q.t, x && !(q.sd < 0) && nt && (I = q.a = I.clone({
        matrix: oi(U, !1, !1, !0)
      })), Q.isVisible && I.isVisible ? (q.sd < 0 ? (x && La(Dt, 1), ut = new sr(U, k, t.simple), Cr(ut, I, v, 0, 0, ut), ut.matrix = oi(U, !1, !1, !0), ut.bounds = U.getBoundingClientRect(), ut.css = q.b.css, q.a = I = ut, T && (U.style.opacity = at ? Q.opacity : I.opacity), C && $.push(U), x && (La(Dt, 2), Dt.push(U, U.getAttribute("style")))) : q.sd > 0 && T && (U.style.opacity = at ? I.opacity - Q.opacity : "0"), Cr(I, Q, v, k), x && q.sd < 0 && Dt.push(U.getAttribute("style"))) : Q.isVisible !== I.isVisible && (Q.isVisible ? I.isVisible || (Q.css = I.css, z.push(Q), D.splice(nt--, 1), l && x && Cr(I, Q, v, k)) : (I.isVisible && Y.push(I), D.splice(nt--, 1))), v || (U.style.maxWidth = Math.max(I.width, Q.width) + "px", U.style.maxHeight = Math.max(I.height, Q.height) + "px", U.style.minWidth = Math.min(I.width, Q.width) + "px", U.style.minHeight = Math.min(I.height, Q.height) + "px"), x && y && U.classList.add(y)), Mt.push(I);
    var oe;
    if (y && (oe = Mt.map(function(B) {
      return B.element;
    }), x && oe.forEach(function(B) {
      return B.classList.remove(y);
    })), Aa(!1), v ? (E.scaleX = function(B) {
      return D[B].a.scaleX;
    }, E.scaleY = function(B) {
      return D[B].a.scaleY;
    }) : (E.width = function(B) {
      return D[B].a.width + "px";
    }, E.height = function(B) {
      return D[B].a.height + "px";
    }, E.autoRound = e.autoRound || !1), E.x = function(B) {
      return D[B].a.x + "px";
    }, E.y = function(B) {
      return D[B].a.y + "px";
    }, E.rotation = function(B) {
      return D[B].a.rotation + (S ? it(B, pt[B], pt) * 360 : 0);
    }, E.skewX = function(B) {
      return D[B].a.skewX;
    }, pt = D.map(function(B) {
      return B.t;
    }), (w || w === 0) && (E.modifiers = {
      zIndex: function() {
        return w;
      }
    }, E.zIndex = w, E.immediateRender = e.immediateRender !== !1), T && (E.opacity = function(B) {
      return D[B].sd < 0 ? 0 : D[B].sd > 0 ? D[B].a.opacity : "+=0";
    }), $.length) {
      C = jt.utils.distribute(C);
      var je = pt.slice($.length);
      E.stagger = function(B, Ye) {
        return C(~$.indexOf(Ye) ? pt.indexOf(D[B].swap.t) : B, Ye, je);
      };
    }
    if (_h.forEach(function(B) {
      return e[B] && R.eventCallback(B, e[B], e[B + "Params"]);
    }), p && pt.length) {
      O = br(E, Oa), "scale" in p && (p.scaleX = p.scaleY = p.scale, delete p.scale);
      for (lt in p)
        rt = br(p[lt], ou), rt[lt] = E[lt], !("duration" in rt) && "duration" in E && (rt.duration = E.duration), rt.stagger = E.stagger, m.call(R, pt, rt, 0), delete O[lt];
    }
    (pt.length || z.length || Y.length) && (y && R.add(function() {
      return Fs(oe, y, R._zTime < 0 ? "remove" : "add");
    }, 0) && !h && Fs(oe, y, "add"), pt.length && m.call(R, pt, O, 0)), Ra(a, Y, R), Ra(u, z, R);
    var dt = mt && mt.timeline;
    dt && (dt.add(R, 0), mt._final.push(function() {
      return Ma(D, !s);
    })), de = R.duration(), R.call(function() {
      var B = R.time() >= de;
      B && !dt && Ma(D, !s), y && Fs(oe, y, B ? "remove" : "add");
    });
  }, f && (l = D.filter(function(b) {
    return !b.sd && !b.a.isVisible && b.b.isVisible;
  }).map(function(b) {
    return b.a.element;
  })), mt) {
    var $t;
    l && ($t = mt._abs).push.apply($t, Da(D, l)), mt._run.push(It);
  } else
    l && uu(Da(D, l)), It();
  var Ut = mt ? mt.timeline : R;
  return Ut.revert = function() {
    return Qo(Ut, 1, 1);
  }, Ut;
}, xh = function o(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(o);
}, Qo = function(t, i, e) {
  if (t && t.progress() < 1 && (!t.paused() || e))
    return i && (xh(t), i < 2 && t.progress(1), t.kill()), !0;
}, Ln = function(t) {
  for (var i = t.idLookup = {}, e = t.alt = {}, r = t.elementStates, n = r.length, s; n--; )
    s = r[n], i[s.id] ? e[s.id] = s : i[s.id] = s;
}, Ge = /* @__PURE__ */ function() {
  function o(i, e, r) {
    if (this.props = e && e.props, this.simple = !!(e && e.simple), r)
      this.targets = hu(i), this.elementStates = i, Ln(this);
    else {
      this.targets = Fr(i);
      var n = e && (e.kill === !1 || e.batch && !e.kill);
      mt && !n && mt._kill.push(this), this.update(n || !!mt);
    }
  }
  var t = o.prototype;
  return t.update = function(e) {
    var r = this;
    return this.elementStates = this.targets.map(function(n) {
      return new sr(n, r.props, r.simple);
    }), Ln(this), this.interrupt(e), this.recordInlineStyles(), this;
  }, t.clear = function() {
    return this.targets.length = this.elementStates.length = 0, Ln(this), this;
  }, t.fit = function(e, r, n) {
    for (var s = ps(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, u = 0, l, f; u < s.length; u++)
      l = s[u], n && (l.matrix = oi(l.element, !1, !1, !0)), f = a[l.id], f && Cr(l, f, r, !0, 0, l), l.matrix = oi(l.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(e, r) {
    var n = this.getElementState(e) || cs;
    return (r in n ? n : n.props || cs)[r];
  }, t.add = function(e) {
    for (var r = e.targets.length, n = this.idLookup, s = this.alt, a, u, l; r--; )
      u = e.elementStates[r], l = n[u.id], l && (u.element === l.element || s[u.id] && s[u.id].element === u.element) ? (a = this.elementStates.indexOf(u.element === l.element ? l : s[u.id]), this.targets.splice(a, 1, e.targets[r]), this.elementStates.splice(a, 1, u)) : (this.targets.push(e.targets[r]), this.elementStates.push(u));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Ln(this), this;
  }, t.compare = function(e) {
    var r = e.idLookup, n = this.idLookup, s = [], a = [], u = [], l = [], f = [], p = e.alt, c = this.alt, h = function(P, k, E) {
      return (P.isVisible !== k.isVisible ? P.isVisible ? u : l : P.isVisible ? a : s).push(E) && f.push(E);
    }, _ = function(P, k, E) {
      return f.indexOf(E) < 0 && h(P, k, E);
    }, d, g, y, x, w, v, T, C;
    for (y in r)
      w = p[y], v = c[y], d = w ? cu(e, this, y) : r[y], x = d.element, g = n[y], v ? (C = g.isVisible || !v.isVisible && x === g.element ? g : v, T = w && !d.isVisible && !w.isVisible && C.element === w.element ? w : d, T.isVisible && C.isVisible && T.element !== C.element ? ((T.isDifferent(C) ? a : s).push(T.element, C.element), f.push(T.element, C.element)) : h(T, C, T.element), w && T.element === w.element && (w = r[y]), _(T.element !== g.element && w ? w : T, g, g.element), _(w && w.element === v.element ? w : T, v, v.element), w && _(w, v.element === w.element ? v : g, w.element)) : (g ? g.isDifferent(d) ? h(d, g, x) : s.push(x) : u.push(x), w && _(w, g, w.element));
    for (y in n)
      r[y] || (l.push(n[y].element), c[y] && l.push(c[y].element));
    return {
      changed: a,
      unchanged: s,
      enter: u,
      leave: l
    };
  }, t.recordInlineStyles = function() {
    for (var e = Ts[this.props] || Ss, r = this.elementStates.length; r--; )
      kn(this.elementStates[r], e);
  }, t.interrupt = function(e) {
    var r = this, n = [];
    this.targets.forEach(function(s) {
      var a = s._flip, u = Qo(a, e ? 0 : 1);
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
    return this.elementStates[this.targets.indexOf(an(e))];
  }, t.makeAbsolute = function() {
    return ps(this.elementStates.slice(0), !0, !0).map(Ko);
  }, o;
}(), sr = /* @__PURE__ */ function() {
  function o(i, e, r) {
    i instanceof o ? Object.assign(this, i, e || {}) : (this.element = i, this.update(e, r));
  }
  var t = o.prototype;
  return t.isDifferent = function(e) {
    var r = this.bounds, n = e.bounds;
    return r.top !== n.top || r.left !== n.left || r.width !== n.width || r.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props);
  }, t.clone = function(e) {
    return new o(this, e);
  }, t.update = function(e, r) {
    var n = this, s = n.element, a = jt.getProperty(s), u = jt.core.getCache(s), l = s.getBoundingClientRect(), f = s.getBBox && typeof s.getBBox == "function" && s.nodeName.toLowerCase() !== "svg" && s.getBBox(), p = r ? new nr(1, 0, 0, 1, l.left + qo(), l.top + Uo()) : oi(s, !1, !1, !0);
    u.uncache = 1, n.getProp = a, n.element = s, n.id = wh(s), n.matrix = p, n.cache = u, n.bounds = l, n.isVisible = !!(l.width || l.height || l.left || l.top), n.display = a("display"), n.position = a("position"), n.parent = s.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = u.scaleX, n.scaleY = u.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = f ? f.width : di(a("width", "px"), 0.04), n.height = f ? f.height : di(a("height", "px"), 0.04), e && vh(n, Zo[e] || lu(e)), n.ctm = s.getCTM && s.nodeName.toLowerCase() === "svg" && su(s).inverse(), n.simple = r || xr(p.a) === 1 && !xr(p.b) && !xr(p.c) && xr(p.d) === 1, n.uncache = 0;
  }, o;
}(), bh = /* @__PURE__ */ function() {
  function o(i, e) {
    this.vars = i, this.batch = e, this.states = [], this.timeline = e.timeline;
  }
  var t = o.prototype;
  return t.getStateById = function(e) {
    for (var r = this.states.length; r--; )
      if (this.states[r].idLookup[e])
        return this.states[r];
  }, t.kill = function() {
    this.batch.remove(this);
  }, o;
}(), Th = /* @__PURE__ */ function() {
  function o(i) {
    this.id = i, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ge(), this.timeline = jt.timeline();
  }
  var t = o.prototype;
  return t.add = function(e) {
    var r = this.actions.filter(function(n) {
      return n.vars === e;
    });
    return r.length ? r[0] : (r = new bh(typeof e == "function" ? {
      animate: e
    } : e, this), this.actions.push(r), r);
  }, t.remove = function(e) {
    var r = this.actions.indexOf(e);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(e) {
    var r = this, n = mt, s = on;
    return mt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, on = a, a.state = a.vars.getState(a)), e && a.states.forEach(function(u) {
        return r.state.add(u);
      });
    }), on = s, mt = n, this.killConflicts(), this;
  }, t.animate = function() {
    var e = this, r = mt, n = this.timeline, s = this.actions.length, a, u;
    for (mt = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(l) {
      l.vars.animate && l.vars.animate(l);
      var f = l.vars.onEnter, p = l.vars.onLeave, c = l.targets, h, _;
      c && c.length && (f || p) && (h = new Ge(), l.states.forEach(function(d) {
        return h.add(d);
      }), _ = h.compare(Br.getState(c)), _.enter.length && f && f(_.enter), _.leave.length && p && p(_.leave));
    }), uu(this._abs), this._run.forEach(function(l) {
      return l();
    }), u = n.duration(), a = this._final.slice(0), n.add(function() {
      u <= n.time() && (a.forEach(function(l) {
        return l();
      }), Ea(e, "onComplete"));
    }), mt = r; s--; )
      this.actions[s].vars.once && this.actions[s].kill();
    return Ea(this, "onStart"), n.restart(), this;
  }, t.loadState = function(e) {
    e || (e = function() {
      return 0;
    });
    var r = [];
    return this.actions.forEach(function(n) {
      if (n.vars.loadState) {
        var s, a = function u(l) {
          l && (n.targets = l), s = r.indexOf(u), ~s && (r.splice(s, 1), r.length || e());
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
    this._killed = 1, this.clear(), delete po[this.id];
  }, o;
}(), Br = /* @__PURE__ */ function() {
  function o() {
  }
  return o.getState = function(i, e) {
    var r = Ns(i, e);
    return on && on.states.push(r), e && e.batch && o.batch(e.batch).state.add(r), r;
  }, o.from = function(i, e) {
    return e = e || {}, "clearProps" in e || (e.clearProps = !0), Xs(i, Ns(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, -1);
  }, o.to = function(i, e) {
    return Xs(i, Ns(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, 1);
  }, o.fromTo = function(i, e, r) {
    return Xs(i, e, r);
  }, o.fit = function(i, e, r) {
    var n = r ? br(r, ou) : {}, s = r || n, a = s.absolute, u = s.scale, l = s.getVars, f = s.props, p = s.runBackwards, c = s.onComplete, h = s.simple, _ = r && r.fitChild && an(r.fitChild), d = _o(e, f, h, i), g = _o(i, 0, h, d), y = f ? Ts[f] : Ss, x = jt.context();
    return f && fu(n, d.props), kn(g, y), p && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      ds(g), c && c.apply(this, arguments);
    }), a && Ko(g, d), n = Cr(g, d, u || _, !n.duration && f, _, n.duration || l ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), x && !l && x.add(function() {
      return function() {
        return ds(g);
      };
    }), l ? n : n.duration ? jt.to(g.element, n) : null;
  }, o.makeAbsolute = function(i, e) {
    return (i instanceof Ge ? i : new Ge(i, e)).makeAbsolute();
  }, o.batch = function(i) {
    return i || (i = "default"), po[i] || (po[i] = new Th(i));
  }, o.killFlipsOf = function(i, e) {
    (i instanceof Ge ? i.targets : Fr(i)).forEach(function(r) {
      return r && Qo(r._flip, e !== !1 ? 1 : 2);
    });
  }, o.isFlipping = function(i) {
    var e = o.getByTarget(i);
    return !!e && e.isActive();
  }, o.getByTarget = function(i) {
    return (an(i) || cs)._flip;
  }, o.getElementState = function(i, e) {
    return new sr(an(i), e);
  }, o.convertCoordinates = function(i, e, r) {
    var n = oi(e, !0, !0).multiply(oi(i));
    return r ? n.apply(r) : n;
  }, o.register = function(i) {
    if (Si = typeof document < "u" && document.body, Si) {
      jt = i, $o(Si), Fr = jt.utils.toArray, co = jt.core.getStyleSaver;
      var e = jt.utils.snap(0.1);
      di = function(n, s) {
        return e(parseFloat(n) + s);
      };
    }
  }, o;
}();
Br.version = "3.14.2";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Br);
function Sh(o, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e);
  }
}
function kh(o, t, i) {
  return t && Sh(o.prototype, t), o;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Zt, Qn, Ce, Pi, Oi, Pr, pu, Ui, ln, du, _i, Ue, _u, gu = function() {
  return Zt || typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt;
}, mu = 1, Tr = [], K = [], ni = [], un = Date.now, go = function(t, i) {
  return i;
}, Eh = function() {
  var t = ln.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, K), r.push.apply(r, ni), K = e, ni = r, go = function(s, a) {
    return i[s](a);
  };
}, Ri = function(t, i) {
  return ~ni.indexOf(t) && ni[ni.indexOf(t) + 1][i];
}, fn = function(t) {
  return !!~du.indexOf(t);
}, le = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, ae = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, In = "scrollLeft", zn = "scrollTop", mo = function() {
  return _i && _i.isPressed || K.cache++;
}, _s = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      mu && (Ce.history.scrollRestoration = "manual");
      var s = _i && _i.isPressed;
      n = r.v = Math.round(n) || (_i && _i.iOS ? 1 : 0), t(n), r.cacheID = K.cache, s && go("ss", n);
    } else (i || K.cache !== r.cacheID || go("ref")) && (r.cacheID = K.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, pe = {
  s: In,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _s(function(o) {
    return arguments.length ? Ce.scrollTo(o, Bt.sc()) : Ce.pageXOffset || Pi[In] || Oi[In] || Pr[In] || 0;
  })
}, Bt = {
  s: zn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: pe,
  sc: _s(function(o) {
    return arguments.length ? Ce.scrollTo(pe.sc(), o) : Ce.pageYOffset || Pi[zn] || Oi[zn] || Pr[zn] || 0;
  })
}, _e = function(t, i) {
  return (i && i._ctx && i._ctx.selector || Zt.utils.toArray)(t)[0] || (typeof t == "string" && Zt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Ch = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, zi = function(t, i) {
  var e = i.s, r = i.sc;
  fn(t) && (t = Pi.scrollingElement || Oi);
  var n = K.indexOf(t), s = r === Bt.sc ? 1 : 2;
  !~n && (n = K.push(t) - 1), K[n + s] || le(t, "scroll", mo);
  var a = K[n + s], u = a || (K[n + s] = _s(Ri(t, e), !0) || (fn(t) ? r : _s(function(l) {
    return arguments.length ? t[e] = l : t[e];
  })));
  return u.target = t, a || (u.smooth = Zt.getProperty(t, "scrollBehavior") === "smooth"), u;
}, yo = function(t, i, e) {
  var r = t, n = t, s = un(), a = s, u = i || 50, l = Math.max(500, u * 3), f = function(_, d) {
    var g = un();
    d || g - s > u ? (n = r, r = _, a = s, s = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (s - a);
  }, p = function() {
    n = r = e ? 0 : r, a = s = 0;
  }, c = function(_) {
    var d = a, g = n, y = un();
    return (_ || _ === 0) && _ !== r && f(_), s === a || y - a > l ? 0 : (r + (e ? g : -g)) / ((e ? y : s) - d) * 1e3;
  };
  return {
    update: f,
    reset: p,
    getVelocity: c
  };
}, $r = function(t, i) {
  return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Ia = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, yu = function() {
  ln = Zt.core.globals().ScrollTrigger, ln && ln.core && Eh();
}, vu = function(t) {
  return Zt = t || gu(), !Qn && Zt && typeof document < "u" && document.body && (Ce = window, Pi = document, Oi = Pi.documentElement, Pr = Pi.body, du = [Ce, Pi, Oi, Pr], Zt.utils.clamp, _u = Zt.core.context || function() {
  }, Ui = "onpointerenter" in Pr ? "pointer" : "mouse", pu = Ot.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ce || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ue = Ot.eventTypes = ("ontouchstart" in Oi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Oi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return mu = 0;
  }, 500), yu(), Qn = 1), Qn;
};
pe.op = Bt;
K.cache = 0;
var Ot = /* @__PURE__ */ function() {
  function o(i) {
    this.init(i);
  }
  var t = o.prototype;
  return t.init = function(e) {
    Qn || vu(Zt) || console.warn("Please gsap.registerPlugin(Observer)"), ln || yu();
    var r = e.tolerance, n = e.dragMinimum, s = e.type, a = e.target, u = e.lineHeight, l = e.debounce, f = e.preventDefault, p = e.onStop, c = e.onStopDelay, h = e.ignore, _ = e.wheelSpeed, d = e.event, g = e.onDragStart, y = e.onDragEnd, x = e.onDrag, w = e.onPress, v = e.onRelease, T = e.onRight, C = e.onLeft, S = e.onUp, P = e.onDown, k = e.onChangeX, E = e.onChangeY, R = e.onChange, O = e.onToggleX, Y = e.onToggleY, z = e.onHover, D = e.onHoverEnd, $ = e.onMove, V = e.ignoreCheck, it = e.isNormalizer, at = e.onGestureStart, m = e.onGestureEnd, rt = e.onWheel, lt = e.onEnable, de = e.onDisable, nt = e.onClick, U = e.scrollSpeed, q = e.capture, ut = e.allowClicks, pt = e.lockAxis, Mt = e.onLockAxis;
    this.target = a = _e(a) || Oi, this.vars = e, h && (h = Zt.utils.toArray(h)), r = r || 1e-9, n = n || 0, _ = _ || 1, U = U || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(Ce.getComputedStyle(Pr).lineHeight) || 22);
    var Nt, gt, It, I, Q, $t, Ut, b = this, Dt = 0, oe = 0, je = e.passive || !f && e.passive !== !1, dt = zi(a, pe), B = zi(a, Bt), Ye = dt(), Bi = B(), Yt = ~s.indexOf("touch") && !~s.indexOf("pointer") && Ue[0] === "pointerdown", vi = fn(a), Et = a.ownerDocument || Pi, Ve = [0, 0, 0], Ae = [0, 0, 0], ai = 0, Yr = function() {
      return ai = un();
    }, Rt = function(N, st) {
      return (b.event = N) && h && Ch(N.target, h) || st && Yt && N.pointerType !== "touch" || V && V(N, st);
    }, On = function() {
      b._vx.reset(), b._vy.reset(), gt.pause(), p && p(b);
    }, li = function() {
      var N = b.deltaX = Ia(Ve), st = b.deltaY = Ia(Ae), M = Math.abs(N) >= r, X = Math.abs(st) >= r;
      R && (M || X) && R(b, N, st, Ve, Ae), M && (T && b.deltaX > 0 && T(b), C && b.deltaX < 0 && C(b), k && k(b), O && b.deltaX < 0 != Dt < 0 && O(b), Dt = b.deltaX, Ve[0] = Ve[1] = Ve[2] = 0), X && (P && b.deltaY > 0 && P(b), S && b.deltaY < 0 && S(b), E && E(b), Y && b.deltaY < 0 != oe < 0 && Y(b), oe = b.deltaY, Ae[0] = Ae[1] = Ae[2] = 0), (I || It) && ($ && $(b), It && (g && It === 1 && g(b), x && x(b), It = 0), I = !1), $t && !($t = !1) && Mt && Mt(b), Q && (rt(b), Q = !1), Nt = 0;
    }, fr = function(N, st, M) {
      Ve[M] += N, Ae[M] += st, b._vx.update(N), b._vy.update(st), l ? Nt || (Nt = requestAnimationFrame(li)) : li();
    }, hr = function(N, st) {
      pt && !Ut && (b.axis = Ut = Math.abs(N) > Math.abs(st) ? "x" : "y", $t = !0), Ut !== "y" && (Ve[2] += N, b._vx.update(N, !0)), Ut !== "x" && (Ae[2] += st, b._vy.update(st, !0)), l ? Nt || (Nt = requestAnimationFrame(li)) : li();
    }, wi = function(N) {
      if (!Rt(N, 1)) {
        N = $r(N, f);
        var st = N.clientX, M = N.clientY, X = st - b.x, F = M - b.y, W = b.isDragging;
        b.x = st, b.y = M, (W || (X || F) && (Math.abs(b.startX - st) >= n || Math.abs(b.startY - M) >= n)) && (It || (It = W ? 2 : 1), W || (b.isDragging = !0), hr(X, F));
      }
    }, Ni = b.onPress = function(H) {
      Rt(H, 1) || H && H.button || (b.axis = Ut = null, gt.pause(), b.isPressed = !0, H = $r(H), Dt = oe = 0, b.startX = b.x = H.clientX, b.startY = b.y = H.clientY, b._vx.reset(), b._vy.reset(), le(it ? a : Et, Ue[1], wi, je, !0), b.deltaX = b.deltaY = 0, w && w(b));
    }, J = b.onRelease = function(H) {
      if (!Rt(H, 1)) {
        ae(it ? a : Et, Ue[1], wi, !0);
        var N = !isNaN(b.y - b.startY), st = b.isDragging, M = st && (Math.abs(b.x - b.startX) > 3 || Math.abs(b.y - b.startY) > 3), X = $r(H);
        !M && N && (b._vx.reset(), b._vy.reset(), f && ut && Zt.delayedCall(0.08, function() {
          if (un() - ai > 300 && !H.defaultPrevented) {
            if (H.target.click)
              H.target.click();
            else if (Et.createEvent) {
              var F = Et.createEvent("MouseEvents");
              F.initMouseEvent("click", !0, !0, Ce, 1, X.screenX, X.screenY, X.clientX, X.clientY, !1, !1, !1, !1, 0, null), H.target.dispatchEvent(F);
            }
          }
        })), b.isDragging = b.isGesturing = b.isPressed = !1, p && st && !it && gt.restart(!0), It && li(), y && st && y(b), v && v(b, M);
      }
    }, Yi = function(N) {
      return N.touches && N.touches.length > 1 && (b.isGesturing = !0) && at(N, b.isDragging);
    }, Xe = function() {
      return (b.isGesturing = !1) || m(b);
    }, We = function(N) {
      if (!Rt(N)) {
        var st = dt(), M = B();
        fr((st - Ye) * U, (M - Bi) * U, 1), Ye = st, Bi = M, p && gt.restart(!0);
      }
    }, He = function(N) {
      if (!Rt(N)) {
        N = $r(N, f), rt && (Q = !0);
        var st = (N.deltaMode === 1 ? u : N.deltaMode === 2 ? Ce.innerHeight : 1) * _;
        fr(N.deltaX * st, N.deltaY * st, 0), p && !it && gt.restart(!0);
      }
    }, Vi = function(N) {
      if (!Rt(N)) {
        var st = N.clientX, M = N.clientY, X = st - b.x, F = M - b.y;
        b.x = st, b.y = M, I = !0, p && gt.restart(!0), (X || F) && hr(X, F);
      }
    }, cr = function(N) {
      b.event = N, z(b);
    }, ui = function(N) {
      b.event = N, D(b);
    }, Vr = function(N) {
      return Rt(N) || $r(N, f) && nt(b);
    };
    gt = b._dc = Zt.delayedCall(c || 0.25, On).pause(), b.deltaX = b.deltaY = 0, b._vx = yo(0, 50, !0), b._vy = yo(0, 50, !0), b.scrollX = dt, b.scrollY = B, b.isDragging = b.isGesturing = b.isPressed = !1, _u(this), b.enable = function(H) {
      return b.isEnabled || (le(vi ? Et : a, "scroll", mo), s.indexOf("scroll") >= 0 && le(vi ? Et : a, "scroll", We, je, q), s.indexOf("wheel") >= 0 && le(a, "wheel", He, je, q), (s.indexOf("touch") >= 0 && pu || s.indexOf("pointer") >= 0) && (le(a, Ue[0], Ni, je, q), le(Et, Ue[2], J), le(Et, Ue[3], J), ut && le(a, "click", Yr, !0, !0), nt && le(a, "click", Vr), at && le(Et, "gesturestart", Yi), m && le(Et, "gestureend", Xe), z && le(a, Ui + "enter", cr), D && le(a, Ui + "leave", ui), $ && le(a, Ui + "move", Vi)), b.isEnabled = !0, b.isDragging = b.isGesturing = b.isPressed = I = It = !1, b._vx.reset(), b._vy.reset(), Ye = dt(), Bi = B(), H && H.type && Ni(H), lt && lt(b)), b;
    }, b.disable = function() {
      b.isEnabled && (Tr.filter(function(H) {
        return H !== b && fn(H.target);
      }).length || ae(vi ? Et : a, "scroll", mo), b.isPressed && (b._vx.reset(), b._vy.reset(), ae(it ? a : Et, Ue[1], wi, !0)), ae(vi ? Et : a, "scroll", We, q), ae(a, "wheel", He, q), ae(a, Ue[0], Ni, q), ae(Et, Ue[2], J), ae(Et, Ue[3], J), ae(a, "click", Yr, !0), ae(a, "click", Vr), ae(Et, "gesturestart", Yi), ae(Et, "gestureend", Xe), ae(a, Ui + "enter", cr), ae(a, Ui + "leave", ui), ae(a, Ui + "move", Vi), b.isEnabled = b.isPressed = b.isDragging = !1, de && de(b));
    }, b.kill = b.revert = function() {
      b.disable();
      var H = Tr.indexOf(b);
      H >= 0 && Tr.splice(H, 1), _i === b && (_i = 0);
    }, Tr.push(b), it && fn(a) && (_i = b), b.enable(d);
  }, kh(o, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), o;
}();
Ot.version = "3.14.2";
Ot.create = function(o) {
  return new Ot(o);
};
Ot.register = vu;
Ot.getAll = function() {
  return Tr.slice();
};
Ot.getById = function(o) {
  return Tr.filter(function(t) {
    return t.vars.id === o;
  })[0];
};
gu() && Zt.registerPlugin(Ot);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var A, gr, Z, _t, ke, ot, Jo, gs, En, hn, Zr, Fn, ee, ks, vo, fe, za, Fa, mr, wu, Ws, xu, ue, wo, bu, Tu, Ti, xo, ta, Or, ea, cn, bo, Hs, Bn = 1, ie = Date.now, $s = ie(), Ne = 0, Kr = 0, Ba = function(t, i, e) {
  var r = Te(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Na = function(t, i) {
  return i && (!Te(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Ph = function o() {
  return Kr && requestAnimationFrame(o);
}, Ya = function() {
  return ks = 1;
}, Va = function() {
  return ks = 0;
}, ti = function(t) {
  return t;
}, Qr = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Su = function() {
  return typeof window < "u";
}, ku = function() {
  return A || Su() && (A = window.gsap) && A.registerPlugin && A;
}, or = function(t) {
  return !!~Jo.indexOf(t);
}, Eu = function(t) {
  return (t === "Height" ? ea : Z["inner" + t]) || ke["client" + t] || ot["client" + t];
}, Cu = function(t) {
  return Ri(t, "getBoundingClientRect") || (or(t) ? function() {
    return rs.width = Z.innerWidth, rs.height = ea, rs;
  } : function() {
    return ci(t);
  });
}, Oh = function(t, i, e) {
  var r = e.d, n = e.d2, s = e.a;
  return (s = Ri(t, "getBoundingClientRect")) ? function() {
    return s()[r];
  } : function() {
    return (i ? Eu(n) : t["client" + n]) || 0;
  };
}, Mh = function(t, i) {
  return !i || ~ni.indexOf(t) ? Cu(t) : function() {
    return rs;
  };
}, ri = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, s = i.a;
  return Math.max(0, (e = "scroll" + r) && (s = Ri(t, e)) ? s() - Cu(t)()[n] : or(t) ? (ke[e] || ot[e]) - Eu(r) : t[e] - t["offset" + r]);
}, Nn = function(t, i) {
  for (var e = 0; e < mr.length; e += 3)
    (!i || ~i.indexOf(mr[e + 1])) && t(mr[e], mr[e + 1], mr[e + 2]);
}, Te = function(t) {
  return typeof t == "string";
}, ne = function(t) {
  return typeof t == "function";
}, Jr = function(t) {
  return typeof t == "number";
}, qi = function(t) {
  return typeof t == "object";
}, Ur = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, Us = function(t, i) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return i(t);
    }) : i(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, dr = Math.abs, Pu = "left", Ou = "top", ia = "right", ra = "bottom", er = "width", ir = "height", pn = "Right", dn = "Left", _n = "Top", gn = "Bottom", At = "padding", Ie = "margin", Nr = "Width", na = "Height", Ft = "px", ze = function(t) {
  return Z.getComputedStyle(t);
}, Dh = function(t) {
  var i = ze(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, Xa = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, ci = function(t, i) {
  var e = i && ze(t)[vo] !== "matrix(1, 0, 0, 1, 0, 0)" && A.to(t, {
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
}, ms = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, Mu = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, Rh = function(t) {
  return function(i) {
    return A.utils.snap(Mu(t), i);
  };
}, sa = function(t) {
  var i = A.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
    return r - n;
  });
  return e ? function(r, n, s) {
    s === void 0 && (s = 1e-3);
    var a;
    if (!n)
      return i(r);
    if (n > 0) {
      for (r -= s, a = 0; a < e.length; a++)
        if (e[a] >= r)
          return e[a];
      return e[a - 1];
    } else
      for (a = e.length, r += s; a--; )
        if (e[a] <= r)
          return e[a];
    return e[0];
  } : function(r, n, s) {
    s === void 0 && (s = 1e-3);
    var a = i(r);
    return !n || Math.abs(a - r) < s || a - r < 0 == n < 0 ? a : i(n < 0 ? r - t : r + t);
  };
}, Ah = function(t) {
  return function(i, e) {
    return sa(Mu(t))(i, e.direction);
  };
}, Yn = function(t, i, e, r) {
  return e.split(",").forEach(function(n) {
    return t(i, n, r);
  });
}, Wt = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: !r,
    capture: !!n
  });
}, Xt = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Vn = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, Wa = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Xn = {
  toggleActions: "play",
  anticipatePin: 0
}, ys = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Jn = function(t, i) {
  if (Te(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in ys ? ys[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, Wn = function(t, i, e, r, n, s, a, u) {
  var l = n.startColor, f = n.endColor, p = n.fontSize, c = n.indent, h = n.fontWeight, _ = _t.createElement("div"), d = or(e) || Ri(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, y = d ? ot : e, x = t.indexOf("start") !== -1, w = x ? l : f, v = "border-color:" + w + ";font-size:" + p + ";color:" + w + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((g || u) && d ? "fixed;" : "absolute;"), (g || u || !d) && (v += (r === Bt ? ia : ra) + ":" + (s + parseFloat(c)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = x, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_), _._offset = _["offset" + r.op.d2], ts(_, 0, r, x), _;
}, ts = function(t, i, e, r) {
  var n = {
    display: "block"
  }, s = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + s + Nr] = 1, n["border" + a + Nr] = 0, n[e.p] = i + "px", A.set(t, n);
}, j = [], To = {}, Cn, Ha = function() {
  return ie() - Ne > 34 && (Cn || (Cn = requestAnimationFrame(gi)));
}, _r = function() {
  (!ue || !ue.isPressed || ue.startX > ot.clientWidth) && (K.cache++, ue ? Cn || (Cn = requestAnimationFrame(gi)) : gi(), Ne || lr("scrollStart"), Ne = ie());
}, qs = function() {
  Tu = Z.innerWidth, bu = Z.innerHeight;
}, tn = function(t) {
  K.cache++, (t === !0 || !ee && !xu && !_t.fullscreenElement && !_t.webkitFullscreenElement && (!wo || Tu !== Z.innerWidth || Math.abs(Z.innerHeight - bu) > Z.innerHeight * 0.25)) && gs.restart(!0);
}, ar = {}, Lh = [], Du = function o() {
  return Xt(G, "scrollEnd", o) || ji(!0);
}, lr = function(t) {
  return ar[t] && ar[t].map(function(i) {
    return i();
  }) || Lh;
}, be = [], Ru = function(t) {
  for (var i = 0; i < be.length; i += 5)
    (!t || be[i + 4] && be[i + 4].query === t) && (be[i].style.cssText = be[i + 1], be[i].getBBox && be[i].setAttribute("transform", be[i + 2] || ""), be[i + 3].uncache = 1);
}, Au = function() {
  return K.forEach(function(t) {
    return ne(t) && ++t.cacheID && (t.rec = t());
  });
}, oa = function(t, i) {
  var e;
  for (fe = 0; fe < j.length; fe++)
    e = j[fe], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  cn = !0, i && Ru(i), i || lr("revert");
}, Lu = function(t, i) {
  K.cache++, (i || !he) && K.forEach(function(e) {
    return ne(e) && e.cacheID++ && (e.rec = 0);
  }), Te(t) && (Z.history.scrollRestoration = ta = t);
}, he, rr = 0, $a, Ih = function() {
  if ($a !== rr) {
    var t = $a = rr;
    requestAnimationFrame(function() {
      return t === rr && ji(!0);
    });
  }
}, Iu = function() {
  ot.appendChild(Or), ea = !ue && Or.offsetHeight || Z.innerHeight, ot.removeChild(Or);
}, Ua = function(t) {
  return En(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, ji = function(t, i) {
  if (ke = _t.documentElement, ot = _t.body, Jo = [Z, _t, ke, ot], Ne && !t && !cn) {
    Wt(G, "scrollEnd", Du);
    return;
  }
  Iu(), he = G.isRefreshing = !0, cn || Au();
  var e = lr("refreshInit");
  wu && G.sort(), i || oa(), K.forEach(function(r) {
    ne(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), j.slice(0).forEach(function(r) {
    return r.refresh();
  }), cn = !1, j.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", s = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - s), r.refresh();
    }
  }), bo = 1, Ua(!0), j.forEach(function(r) {
    var n = ri(r.scroller, r._dir), s = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (s || a) && r.setPositions(a ? n - 1 : r.start, s ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Ua(!1), bo = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), K.forEach(function(r) {
    ne(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), Lu(ta, 1), gs.pause(), rr++, he = 2, gi(2), j.forEach(function(r) {
    return ne(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), he = G.isRefreshing = !1, lr("refresh");
}, So = 0, es = 1, mn, gi = function(t) {
  if (t === 2 || !he && !cn) {
    G.isUpdating = !0, mn && mn.update(0);
    var i = j.length, e = ie(), r = e - $s >= 50, n = i && j[0].scroll();
    if (es = So > n ? -1 : 1, he || (So = n), r && (Ne && !ks && e - Ne > 200 && (Ne = 0, lr("scrollEnd")), Zr = $s, $s = e), es < 0) {
      for (fe = i; fe-- > 0; )
        j[fe] && j[fe].update(0, r);
      es = 1;
    } else
      for (fe = 0; fe < i; fe++)
        j[fe] && j[fe].update(0, r);
    G.isUpdating = !1;
  }
  Cn = 0;
}, ko = [Pu, Ou, ra, ia, Ie + gn, Ie + pn, Ie + _n, Ie + dn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], is = ko.concat([er, ir, "boxSizing", "max" + Nr, "max" + na, "position", Ie, At, At + _n, At + pn, At + gn, At + dn]), zh = function(t, i, e) {
  Mr(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    Mr(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, Gs = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = ko.length, s = i.style, a = t.style, u; n--; )
      u = ko[n], s[u] = e[u];
    s.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (s.display = "inline-block"), a[ra] = a[ia] = "auto", s.flexBasis = e.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[er] = ms(t, pe) + Ft, s[ir] = ms(t, Bt) + Ft, s[At] = a[Ie] = a[Ou] = a[Pu] = "0", Mr(r), a[er] = a["max" + Nr] = e[er], a[ir] = a["max" + na] = e[ir], a[At] = e[At], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Fh = /([A-Z])/g, Mr = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, s;
    for ((t.t._gsap || A.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      s = t[r + 1], n = t[r], s ? i[n] = s : i[n] && i.removeProperty(n.replace(Fh, "-$1").toLowerCase());
  }
}, Hn = function(t) {
  for (var i = is.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(is[n], e[is[n]]);
  return r.t = t, r;
}, Bh = function(t, i, e) {
  for (var r = [], n = t.length, s = e ? 8 : 0, a; s < n; s += 2)
    a = t[s], r.push(a, a in i ? i[a] : t[s + 1]);
  return r.t = t.t, r;
}, rs = {
  left: 0,
  top: 0
}, qa = function(t, i, e, r, n, s, a, u, l, f, p, c, h, _) {
  ne(t) && (t = t(u)), Te(t) && t.substr(0, 3) === "max" && (t = c + (t.charAt(4) === "=" ? Jn("0" + t.substr(3), e) : 0));
  var d = h ? h.time() : 0, g, y, x;
  if (h && h.seek(0), isNaN(t) || (t = +t), Jr(t))
    h && (t = A.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, c, t)), a && ts(a, e, r, !0);
  else {
    ne(i) && (i = i(u));
    var w = (t || "0").split(" "), v, T, C, S;
    x = _e(i, u) || ot, v = ci(x) || {}, (!v || !v.left && !v.top) && ze(x).display === "none" && (S = x.style.display, x.style.display = "block", v = ci(x), S ? x.style.display = S : x.style.removeProperty("display")), T = Jn(w[0], v[r.d]), C = Jn(w[1] || "0", e), t = v[r.p] - l[r.p] - f + T + n - C, a && ts(a, C, r, e - C < 20 || a._isStart && C > 20), e -= e - C;
  }
  if (_ && (u[_] = t || -1e-3, t < 0 && (t = 0)), s) {
    var P = t + e, k = s._isStart;
    g = "scroll" + r.d2, ts(s, P, r, k && P > 20 || !k && (p ? Math.max(ot[g], ke[g]) : s.parentNode[g]) <= P + 1), p && (l = ci(a), p && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + Ft));
  }
  return h && x && (g = ci(x), h.seek(c), y = ci(x), h._caScrollDist = g[r.p] - y[r.p], t = t / h._caScrollDist * c), h && h.seek(d), h ? t : Math.round(t);
}, Nh = /(webkit|moz|length|cssText|inset)/i, Ga = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, s, a;
    if (i === ot) {
      t._stOrig = n.cssText, a = ze(t);
      for (s in a)
        !+s && !Nh.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    A.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, zu = function(t, i, e) {
  var r = i, n = r;
  return function(s) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (s = a, e && e()), n = r, r = Math.round(s), r;
  };
}, $n = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, A.set(t, r);
}, ja = function(t, i) {
  var e = zi(t, i), r = "_scroll" + i.p2, n = function s(a, u, l, f, p) {
    var c = s.tween, h = u.onComplete, _ = {};
    l = l || e();
    var d = zu(e, l, function() {
      c.kill(), s.tween = 0;
    });
    return p = f && p || 0, f = f || a - l, c && c.kill(), u[r] = a, u.inherit = !1, u.modifiers = _, _[r] = function() {
      return d(l + f * c.ratio + p * c.ratio * c.ratio);
    }, u.onUpdate = function() {
      K.cache++, s.tween && gi();
    }, u.onComplete = function() {
      s.tween = 0, h && h.call(c);
    }, c = s.tween = A.to(t, u), c;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Wt(t, "wheel", e.wheelHandler), G.isTouch && Wt(t, "touchmove", e.wheelHandler), n;
}, G = /* @__PURE__ */ function() {
  function o(i, e) {
    gr || o.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), xo(this), this.init(i, e);
  }
  var t = o.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Kr) {
      this.update = this.refresh = this.kill = ti;
      return;
    }
    e = Xa(Te(e) || Jr(e) || e.nodeType ? {
      trigger: e
    } : e, Xn);
    var n = e, s = n.onUpdate, a = n.toggleClass, u = n.id, l = n.onToggle, f = n.onRefresh, p = n.scrub, c = n.trigger, h = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, y = n.onScrubComplete, x = n.onSnapComplete, w = n.once, v = n.snap, T = n.pinReparent, C = n.pinSpacer, S = n.containerAnimation, P = n.fastScrollEnd, k = n.preventOverlaps, E = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? pe : Bt, R = !p && p !== 0, O = _e(e.scroller || Z), Y = A.core.getCache(O), z = or(O), D = ("pinType" in e ? e.pinType : Ri(O, "pinType") || z && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], V = R && e.toggleActions.split(" "), it = "markers" in e ? e.markers : Xn.markers, at = z ? 0 : parseFloat(ze(O)["border" + E.p2 + Nr]) || 0, m = this, rt = e.onRefreshInit && function() {
      return e.onRefreshInit(m);
    }, lt = Oh(O, z, E), de = Mh(O, z), nt = 0, U = 0, q = 0, ut = zi(O, E), pt, Mt, Nt, gt, It, I, Q, $t, Ut, b, Dt, oe, je, dt, B, Ye, Bi, Yt, vi, Et, Ve, Ae, ai, Yr, Rt, On, li, fr, hr, wi, Ni, J, Yi, Xe, We, He, Vi, cr, ui;
    if (m._startClamp = m._endClamp = !1, m._dir = E, g *= 45, m.scroller = O, m.scroll = S ? S.time.bind(S) : ut, gt = ut(), m.vars = e, r = r || e.animation, "refreshPriority" in e && (wu = 1, e.refreshPriority === -9999 && (mn = m)), Y.tweenScroll = Y.tweenScroll || {
      top: ja(O, Bt),
      left: ja(O, pe)
    }, m.tweenTo = pt = Y.tweenScroll[E.p], m.scrubDuration = function(M) {
      Yi = Jr(M) && M, Yi ? J ? J.duration(M) : J = A.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Yi,
        paused: !0,
        onComplete: function() {
          return y && y(m);
        }
      }) : (J && J.progress(1).kill(), J = 0);
    }, r && (r.vars.lazy = !1, r._initted && !m.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), m.animation = r.pause(), r.scrollTrigger = m, m.scrubDuration(p), wi = 0, u || (u = r.vars.id)), v && ((!qi(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in ot.style && A.set(z ? [ot, ke] : O, {
      scrollBehavior: "auto"
    }), K.forEach(function(M) {
      return ne(M) && M.target === (z ? _t.scrollingElement || ke : O) && (M.smooth = !1);
    }), Nt = ne(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Rh(r) : v.snapTo === "labelsDirectional" ? Ah(r) : v.directional !== !1 ? function(M, X) {
      return sa(v.snapTo)(M, ie() - U < 500 ? 0 : X.direction);
    } : A.utils.snap(v.snapTo), Xe = v.duration || {
      min: 0.1,
      max: 2
    }, Xe = qi(Xe) ? hn(Xe.min, Xe.max) : hn(Xe, Xe), We = A.delayedCall(v.delay || Yi / 2 || 0.1, function() {
      var M = ut(), X = ie() - U < 500, F = pt.tween;
      if ((X || Math.abs(m.getVelocity()) < 10) && !F && !ks && nt !== M) {
        var W = (M - I) / dt, Vt = r && !R ? r.totalProgress() : W, tt = X ? 0 : (Vt - Ni) / (ie() - Zr) * 1e3 || 0, Ct = A.utils.clamp(-W, 1 - W, dr(tt / 2) * tt / 0.185), Qt = W + (v.inertia === !1 ? 0 : Ct), St, yt, ft = v, $e = ft.onStart, wt = ft.onInterrupt, xe = ft.onComplete;
        if (St = Nt(Qt, m), Jr(St) || (St = Qt), yt = Math.max(0, Math.round(I + St * dt)), M <= Q && M >= I && yt !== M) {
          if (F && !F._initted && F.data <= dr(yt - M))
            return;
          v.inertia === !1 && (Ct = St - W), pt(yt, {
            duration: Xe(dr(Math.max(dr(Qt - Vt), dr(St - Vt)) * 0.185 / tt / 0.05 || 0)),
            ease: v.ease || "power3",
            data: dr(yt - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && wt && wt(m);
            },
            onComplete: function() {
              m.update(), nt = ut(), r && !R && (J ? J.resetTo("totalProgress", St, r._tTime / r._tDur) : r.progress(St)), wi = Ni = r && !R ? r.totalProgress() : m.progress, x && x(m), xe && xe(m);
            }
          }, M, Ct * dt, yt - M - Ct * dt), $e && $e(m, pt.tween);
        }
      } else m.isActive && nt !== M && We.restart(!0);
    }).pause()), u && (To[u] = m), c = m.trigger = _e(c || h !== !0 && h), ui = c && c._gsap && c._gsap.stRevert, ui && (ui = ui(m)), h = h === !0 ? c : _e(h), Te(a) && (a = {
      targets: c,
      className: a
    }), h && (_ === !1 || _ === Ie || (_ = !_ && h.parentNode && h.parentNode.style && ze(h.parentNode).display === "flex" ? !1 : At), m.pin = h, Mt = A.core.getCache(h), Mt.spacer ? B = Mt.pinState : (C && (C = _e(C), C && !C.nodeType && (C = C.current || C.nativeElement), Mt.spacerIsNative = !!C, C && (Mt.spacerState = Hn(C))), Mt.spacer = Yt = C || _t.createElement("div"), Yt.classList.add("pin-spacer"), u && Yt.classList.add("pin-spacer-" + u), Mt.pinState = B = Hn(h)), e.force3D !== !1 && A.set(h, {
      force3D: !0
    }), m.spacer = Yt = Mt.spacer, hr = ze(h), Yr = hr[_ + E.os2], Et = A.getProperty(h), Ve = A.quickSetter(h, E.a, Ft), Gs(h, Yt, hr), Bi = Hn(h)), it) {
      oe = qi(it) ? Xa(it, Wa) : Wa, b = Wn("scroller-start", u, O, E, oe, 0), Dt = Wn("scroller-end", u, O, E, oe, 0, b), vi = b["offset" + E.op.d2];
      var Vr = _e(Ri(O, "content") || O);
      $t = this.markerStart = Wn("start", u, Vr, E, oe, vi, 0, S), Ut = this.markerEnd = Wn("end", u, Vr, E, oe, vi, 0, S), S && (cr = A.quickSetter([$t, Ut], E.a, Ft)), !D && !(ni.length && Ri(O, "fixedMarkers") === !0) && (Dh(z ? ot : O), A.set([b, Dt], {
        force3D: !0
      }), On = A.quickSetter(b, E.a, Ft), fr = A.quickSetter(Dt, E.a, Ft));
    }
    if (S) {
      var H = S.vars.onUpdate, N = S.vars.onUpdateParams;
      S.eventCallback("onUpdate", function() {
        m.update(0, 0, 1), H && H.apply(S, N || []);
      });
    }
    if (m.previous = function() {
      return j[j.indexOf(m) - 1];
    }, m.next = function() {
      return j[j.indexOf(m) + 1];
    }, m.revert = function(M, X) {
      if (!X)
        return m.kill(!0);
      var F = M !== !1 || !m.enabled, W = ee;
      F !== m.isReverted && (F && (He = Math.max(ut(), m.scroll.rec || 0), q = m.progress, Vi = r && r.progress()), $t && [$t, Ut, b, Dt].forEach(function(Vt) {
        return Vt.style.display = F ? "none" : "block";
      }), F && (ee = m, m.update(F)), h && (!T || !m.isActive) && (F ? zh(h, Yt, B) : Gs(h, Yt, ze(h), Rt)), F || m.update(F), ee = W, m.isReverted = F);
    }, m.refresh = function(M, X, F, W) {
      if (!((ee || !m.enabled) && !X)) {
        if (h && M && Ne) {
          Wt(o, "scrollEnd", Du);
          return;
        }
        !he && rt && rt(m), ee = m, pt.tween && !F && (pt.tween.kill(), pt.tween = 0), J && J.pause(), d && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(xi) {
          return xi.vars.immediateRender && xi.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
        var Vt = lt(), tt = de(), Ct = S ? S.duration() : ri(O, E), Qt = dt <= 0.01 || !dt, St = 0, yt = W || 0, ft = qi(F) ? F.end : e.end, $e = e.endTrigger || c, wt = qi(F) ? F.start : e.start || (e.start === 0 || !c ? 0 : h ? "0 0" : "0 100%"), xe = m.pinnedContainer = e.pinnedContainer && _e(e.pinnedContainer, m), Ze = c && Math.max(0, j.indexOf(m)) || 0, qt = Ze, Gt, Jt, Xi, Mn, te, zt, Ke, Es, aa, Xr, Qe, Wr, Dn;
        for (it && qi(F) && (Wr = A.getProperty(b, E.p), Dn = A.getProperty(Dt, E.p)); qt-- > 0; )
          zt = j[qt], zt.end || zt.refresh(0, 1) || (ee = m), Ke = zt.pin, Ke && (Ke === c || Ke === h || Ke === xe) && !zt.isReverted && (Xr || (Xr = []), Xr.unshift(zt), zt.revert(!0, !0)), zt !== j[qt] && (Ze--, qt--);
        for (ne(wt) && (wt = wt(m)), wt = Ba(wt, "start", m), I = qa(wt, c, Vt, E, ut(), $t, b, m, tt, at, D, Ct, S, m._startClamp && "_startClamp") || (h ? -1e-3 : 0), ne(ft) && (ft = ft(m)), Te(ft) && !ft.indexOf("+=") && (~ft.indexOf(" ") ? ft = (Te(wt) ? wt.split(" ")[0] : "") + ft : (St = Jn(ft.substr(2), Vt), ft = Te(wt) ? wt : (S ? A.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, I) : I) + St, $e = c)), ft = Ba(ft, "end", m), Q = Math.max(I, qa(ft || ($e ? "100% 0" : Ct), $e, Vt, E, ut() + St, Ut, Dt, m, tt, at, D, Ct, S, m._endClamp && "_endClamp")) || -1e-3, St = 0, qt = Ze; qt--; )
          zt = j[qt] || {}, Ke = zt.pin, Ke && zt.start - zt._pinPush <= I && !S && zt.end > 0 && (Gt = zt.end - (m._startClamp ? Math.max(0, zt.start) : zt.start), (Ke === c && zt.start - zt._pinPush < I || Ke === xe) && isNaN(wt) && (St += Gt * (1 - zt.progress)), Ke === h && (yt += Gt));
        if (I += St, Q += St, m._startClamp && (m._startClamp += St), m._endClamp && !he && (m._endClamp = Q || -1e-3, Q = Math.min(Q, ri(O, E))), dt = Q - I || (I -= 0.01) && 1e-3, Qt && (q = A.utils.clamp(0, 1, A.utils.normalize(I, Q, He))), m._pinPush = yt, $t && St && (Gt = {}, Gt[E.a] = "+=" + St, xe && (Gt[E.p] = "-=" + ut()), A.set([$t, Ut], Gt)), h && !(bo && m.end >= ri(O, E)))
          Gt = ze(h), Mn = E === Bt, Xi = ut(), Ae = parseFloat(Et(E.a)) + yt, !Ct && Q > 1 && (Qe = (z ? _t.scrollingElement || ke : O).style, Qe = {
            style: Qe,
            value: Qe["overflow" + E.a.toUpperCase()]
          }, z && ze(ot)["overflow" + E.a.toUpperCase()] !== "scroll" && (Qe.style["overflow" + E.a.toUpperCase()] = "scroll")), Gs(h, Yt, Gt), Bi = Hn(h), Jt = ci(h, !0), Es = D && zi(O, Mn ? pe : Bt)(), _ ? (Rt = [_ + E.os2, dt + yt + Ft], Rt.t = Yt, qt = _ === At ? ms(h, E) + dt + yt : 0, qt && (Rt.push(E.d, qt + Ft), Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = qt + Ft)), Mr(Rt), xe && j.forEach(function(xi) {
            xi.pin === xe && xi.vars.pinSpacing !== !1 && (xi._subPinOffset = !0);
          }), D && ut(He)) : (qt = ms(h, E), qt && Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = qt + Ft)), D && (te = {
            top: Jt.top + (Mn ? Xi - I : Es) + Ft,
            left: Jt.left + (Mn ? Es : Xi - I) + Ft,
            boxSizing: "border-box",
            position: "fixed"
          }, te[er] = te["max" + Nr] = Math.ceil(Jt.width) + Ft, te[ir] = te["max" + na] = Math.ceil(Jt.height) + Ft, te[Ie] = te[Ie + _n] = te[Ie + pn] = te[Ie + gn] = te[Ie + dn] = "0", te[At] = Gt[At], te[At + _n] = Gt[At + _n], te[At + pn] = Gt[At + pn], te[At + gn] = Gt[At + gn], te[At + dn] = Gt[At + dn], Ye = Bh(B, te, T), he && ut(0)), r ? (aa = r._initted, Ws(1), r.render(r.duration(), !0, !0), ai = Et(E.a) - Ae + dt + yt, li = Math.abs(dt - ai) > 1, D && li && Ye.splice(Ye.length - 2, 2), r.render(0, !0, !0), aa || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Ws(0)) : ai = dt, Qe && (Qe.value ? Qe.style["overflow" + E.a.toUpperCase()] = Qe.value : Qe.style.removeProperty("overflow-" + E.a));
        else if (c && ut() && !S)
          for (Jt = c.parentNode; Jt && Jt !== ot; )
            Jt._pinOffset && (I -= Jt._pinOffset, Q -= Jt._pinOffset), Jt = Jt.parentNode;
        Xr && Xr.forEach(function(xi) {
          return xi.revert(!1, !0);
        }), m.start = I, m.end = Q, gt = It = he ? He : ut(), !S && !he && (gt < He && ut(He), m.scroll.rec = 0), m.revert(!1, !0), U = ie(), We && (nt = -1, We.restart(!0)), ee = 0, r && R && (r._initted || Vi) && r.progress() !== Vi && r.progress(Vi || 0, !0).render(r.time(), !0, !0), (Qt || q !== m.progress || S || d || r && !r._initted) && (r && !R && (r._initted || q || r.vars.immediateRender !== !1) && r.totalProgress(S && I < -1e-3 && !q ? A.utils.normalize(I, Q, 0) : q, !0), m.progress = Qt || (gt - I) / dt === q ? 0 : q), h && _ && (Yt._pinOffset = Math.round(m.progress * ai)), J && J.invalidate(), isNaN(Wr) || (Wr -= A.getProperty(b, E.p), Dn -= A.getProperty(Dt, E.p), $n(b, E, Wr), $n($t, E, Wr - (W || 0)), $n(Dt, E, Dn), $n(Ut, E, Dn - (W || 0))), Qt && !he && m.update(), f && !he && !je && (je = !0, f(m), je = !1);
      }
    }, m.getVelocity = function() {
      return (ut() - It) / (ie() - Zr) * 1e3 || 0;
    }, m.endAnimation = function() {
      Ur(m.callbackAnimation), r && (J ? J.progress(1) : r.paused() ? R || Ur(r, m.direction < 0, 1) : Ur(r, r.reversed()));
    }, m.labelToScroll = function(M) {
      return r && r.labels && (I || m.refresh() || I) + r.labels[M] / r.duration() * dt || 0;
    }, m.getTrailing = function(M) {
      var X = j.indexOf(m), F = m.direction > 0 ? j.slice(0, X).reverse() : j.slice(X + 1);
      return (Te(M) ? F.filter(function(W) {
        return W.vars.preventOverlaps === M;
      }) : F).filter(function(W) {
        return m.direction > 0 ? W.end <= I : W.start >= Q;
      });
    }, m.update = function(M, X, F) {
      if (!(S && !F && !M)) {
        var W = he === !0 ? He : m.scroll(), Vt = M ? 0 : (W - I) / dt, tt = Vt < 0 ? 0 : Vt > 1 ? 1 : Vt || 0, Ct = m.progress, Qt, St, yt, ft, $e, wt, xe, Ze;
        if (X && (It = gt, gt = S ? ut() : W, v && (Ni = wi, wi = r && !R ? r.totalProgress() : tt)), g && h && !ee && !Bn && Ne && (!tt && I < W + (W - It) / (ie() - Zr) * g ? tt = 1e-4 : tt === 1 && Q > W + (W - It) / (ie() - Zr) * g && (tt = 0.9999)), tt !== Ct && m.enabled) {
          if (Qt = m.isActive = !!tt && tt < 1, St = !!Ct && Ct < 1, wt = Qt !== St, $e = wt || !!tt != !!Ct, m.direction = tt > Ct ? 1 : -1, m.progress = tt, $e && !ee && (yt = tt && !Ct ? 0 : tt === 1 ? 1 : Ct === 1 ? 2 : 3, R && (ft = !wt && V[yt + 1] !== "none" && V[yt + 1] || V[yt], Ze = r && (ft === "complete" || ft === "reset" || ft in r))), k && (wt || Ze) && (Ze || p || !r) && (ne(k) ? k(m) : m.getTrailing(k).forEach(function(Xi) {
            return Xi.endAnimation();
          })), R || (J && !ee && !Bn ? (J._dp._time - J._start !== J._time && J.render(J._dp._time - J._start), J.resetTo ? J.resetTo("totalProgress", tt, r._tTime / r._tDur) : (J.vars.totalProgress = tt, J.invalidate().restart())) : r && r.totalProgress(tt, !!(ee && (U || M)))), h) {
            if (M && _ && (Yt.style[_ + E.os2] = Yr), !D)
              Ve(Qr(Ae + ai * tt));
            else if ($e) {
              if (xe = !M && tt > Ct && Q + 1 > W && W + 1 >= ri(O, E), T)
                if (!M && (Qt || xe)) {
                  var qt = ci(h, !0), Gt = W - I;
                  Ga(h, ot, qt.top + (E === Bt ? Gt : 0) + Ft, qt.left + (E === Bt ? 0 : Gt) + Ft);
                } else
                  Ga(h, Yt);
              Mr(Qt || xe ? Ye : Bi), li && tt < 1 && Qt || Ve(Ae + (tt === 1 && !xe ? ai : 0));
            }
          }
          v && !pt.tween && !ee && !Bn && We.restart(!0), a && (wt || w && tt && (tt < 1 || !Hs)) && En(a.targets).forEach(function(Xi) {
            return Xi.classList[Qt || w ? "add" : "remove"](a.className);
          }), s && !R && !M && s(m), $e && !ee ? (R && (Ze && (ft === "complete" ? r.pause().totalProgress(1) : ft === "reset" ? r.restart(!0).pause() : ft === "restart" ? r.restart(!0) : r[ft]()), s && s(m)), (wt || !Hs) && (l && wt && Us(m, l), $[yt] && Us(m, $[yt]), w && (tt === 1 ? m.kill(!1, 1) : $[yt] = 0), wt || (yt = tt === 1 ? 1 : 3, $[yt] && Us(m, $[yt]))), P && !Qt && Math.abs(m.getVelocity()) > (Jr(P) ? P : 2500) && (Ur(m.callbackAnimation), J ? J.progress(1) : Ur(r, ft === "reverse" ? 1 : !tt, 1))) : R && s && !ee && s(m);
        }
        if (fr) {
          var Jt = S ? W / S.duration() * (S._caScrollDist || 0) : W;
          On(Jt + (b._isFlipped ? 1 : 0)), fr(Jt);
        }
        cr && cr(-W / S.duration() * (S._caScrollDist || 0));
      }
    }, m.enable = function(M, X) {
      m.enabled || (m.enabled = !0, Wt(O, "resize", tn), z || Wt(O, "scroll", _r), rt && Wt(o, "refreshInit", rt), M !== !1 && (m.progress = q = 0, gt = It = nt = ut()), X !== !1 && m.refresh());
    }, m.getTween = function(M) {
      return M && pt ? pt.tween : J;
    }, m.setPositions = function(M, X, F, W) {
      if (S) {
        var Vt = S.scrollTrigger, tt = S.duration(), Ct = Vt.end - Vt.start;
        M = Vt.start + Ct * M / tt, X = Vt.start + Ct * X / tt;
      }
      m.refresh(!1, !1, {
        start: Na(M, F && !!m._startClamp),
        end: Na(X, F && !!m._endClamp)
      }, W), m.update();
    }, m.adjustPinSpacing = function(M) {
      if (Rt && M) {
        var X = Rt.indexOf(E.d) + 1;
        Rt[X] = parseFloat(Rt[X]) + M + Ft, Rt[1] = parseFloat(Rt[1]) + M + Ft, Mr(Rt);
      }
    }, m.disable = function(M, X) {
      if (M !== !1 && m.revert(!0, !0), m.enabled && (m.enabled = m.isActive = !1, X || J && J.pause(), He = 0, Mt && (Mt.uncache = 1), rt && Xt(o, "refreshInit", rt), We && (We.pause(), pt.tween && pt.tween.kill() && (pt.tween = 0)), !z)) {
        for (var F = j.length; F--; )
          if (j[F].scroller === O && j[F] !== m)
            return;
        Xt(O, "resize", tn), z || Xt(O, "scroll", _r);
      }
    }, m.kill = function(M, X) {
      m.disable(M, X), J && !X && J.kill(), u && delete To[u];
      var F = j.indexOf(m);
      F >= 0 && j.splice(F, 1), F === fe && es > 0 && fe--, F = 0, j.forEach(function(W) {
        return W.scroller === m.scroller && (F = 1);
      }), F || he || (m.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({
        kill: !1
      }), X || r.kill()), $t && [$t, Ut, b, Dt].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), mn === m && (mn = 0), h && (Mt && (Mt.uncache = 1), F = 0, j.forEach(function(W) {
        return W.pin === h && F++;
      }), F || (Mt.spacer = 0)), e.onKill && e.onKill(m);
    }, j.push(m), m.enable(!1, !1), ui && ui(m), r && r.add && !dt) {
      var st = m.update;
      m.update = function() {
        m.update = st, K.cache++, I || Q || m.refresh();
      }, A.delayedCall(0.01, m.update), dt = 0.01, I = Q = 0;
    } else
      m.refresh();
    h && Ih();
  }, o.register = function(e) {
    return gr || (A = e || ku(), Su() && window.document && o.enable(), gr = Kr), gr;
  }, o.defaults = function(e) {
    if (e)
      for (var r in e)
        Xn[r] = e[r];
    return Xn;
  }, o.disable = function(e, r) {
    Kr = 0, j.forEach(function(s) {
      return s[r ? "kill" : "disable"](e);
    }), Xt(Z, "wheel", _r), Xt(_t, "scroll", _r), clearInterval(Fn), Xt(_t, "touchcancel", ti), Xt(ot, "touchstart", ti), Yn(Xt, _t, "pointerdown,touchstart,mousedown", Ya), Yn(Xt, _t, "pointerup,touchend,mouseup", Va), gs.kill(), Nn(Xt);
    for (var n = 0; n < K.length; n += 3)
      Vn(Xt, K[n], K[n + 1]), Vn(Xt, K[n], K[n + 2]);
  }, o.enable = function() {
    if (Z = window, _t = document, ke = _t.documentElement, ot = _t.body, A && (En = A.utils.toArray, hn = A.utils.clamp, xo = A.core.context || ti, Ws = A.core.suppressOverwrites || ti, ta = Z.history.scrollRestoration || "auto", So = Z.pageYOffset || 0, A.core.globals("ScrollTrigger", o), ot)) {
      Kr = 1, Or = document.createElement("div"), Or.style.height = "100vh", Or.style.position = "absolute", Iu(), Ph(), Ot.register(A), o.isTouch = Ot.isTouch, Ti = Ot.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), wo = Ot.isTouch === 1, Wt(Z, "wheel", _r), Jo = [Z, _t, ke, ot], A.matchMedia ? (o.matchMedia = function(l) {
        var f = A.matchMedia(), p;
        for (p in l)
          f.add(p, l[p]);
        return f;
      }, A.addEventListener("matchMediaInit", function() {
        Au(), oa();
      }), A.addEventListener("matchMediaRevert", function() {
        return Ru();
      }), A.addEventListener("matchMedia", function() {
        ji(0, 1), lr("matchMedia");
      }), A.matchMedia().add("(orientation: portrait)", function() {
        return qs(), qs;
      })) : console.warn("Requires GSAP 3.11.0 or later"), qs(), Wt(_t, "scroll", _r);
      var e = ot.hasAttribute("style"), r = ot.style, n = r.borderTopStyle, s = A.core.Animation.prototype, a, u;
      for (s.revert || Object.defineProperty(s, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", a = ci(ot), Bt.m = Math.round(a.top + Bt.sc()) || 0, pe.m = Math.round(a.left + pe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (ot.setAttribute("style", ""), ot.removeAttribute("style")), Fn = setInterval(Ha, 250), A.delayedCall(0.5, function() {
        return Bn = 0;
      }), Wt(_t, "touchcancel", ti), Wt(ot, "touchstart", ti), Yn(Wt, _t, "pointerdown,touchstart,mousedown", Ya), Yn(Wt, _t, "pointerup,touchend,mouseup", Va), vo = A.utils.checkPrefix("transform"), is.push(vo), gr = ie(), gs = A.delayedCall(0.2, ji).pause(), mr = [_t, "visibilitychange", function() {
        var l = Z.innerWidth, f = Z.innerHeight;
        _t.hidden ? (za = l, Fa = f) : (za !== l || Fa !== f) && tn();
      }, _t, "DOMContentLoaded", ji, Z, "load", ji, Z, "resize", tn], Nn(Wt), j.forEach(function(l) {
        return l.enable(0, 1);
      }), u = 0; u < K.length; u += 3)
        Vn(Xt, K[u], K[u + 1]), Vn(Xt, K[u], K[u + 2]);
    }
  }, o.config = function(e) {
    "limitCallbacks" in e && (Hs = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(Fn) || (Fn = r) && setInterval(Ha, r), "ignoreMobileResize" in e && (wo = o.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (Nn(Xt) || Nn(Wt, e.autoRefreshEvents || "none"), xu = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, o.scrollerProxy = function(e, r) {
    var n = _e(e), s = K.indexOf(n), a = or(n);
    ~s && K.splice(s, a ? 6 : 2), r && (a ? ni.unshift(Z, r, ot, r, ke, r) : ni.unshift(n, r));
  }, o.clearMatchMedia = function(e) {
    j.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, o.isInViewport = function(e, r, n) {
    var s = (Te(e) ? _e(e) : e).getBoundingClientRect(), a = s[n ? er : ir] * r || 0;
    return n ? s.right - a > 0 && s.left + a < Z.innerWidth : s.bottom - a > 0 && s.top + a < Z.innerHeight;
  }, o.positionInViewport = function(e, r, n) {
    Te(e) && (e = _e(e));
    var s = e.getBoundingClientRect(), a = s[n ? er : ir], u = r == null ? a / 2 : r in ys ? ys[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (s.left + u) / Z.innerWidth : (s.top + u) / Z.innerHeight;
  }, o.killAll = function(e) {
    if (j.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = ar.killAll || [];
      ar = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, o;
}();
G.version = "3.14.2";
G.saveStyles = function(o) {
  return o ? En(o).forEach(function(t) {
    if (t && t.style) {
      var i = be.indexOf(t);
      i >= 0 && be.splice(i, 5), be.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), A.core.getCache(t), xo());
    }
  }) : be;
};
G.revert = function(o, t) {
  return oa(!o, t);
};
G.create = function(o, t) {
  return new G(o, t);
};
G.refresh = function(o) {
  return o ? tn(!0) : (gr || G.register()) && ji(!0);
};
G.update = function(o) {
  return ++K.cache && gi(o === !0 ? 2 : 0);
};
G.clearScrollMemory = Lu;
G.maxScroll = function(o, t) {
  return ri(o, t ? pe : Bt);
};
G.getScrollFunc = function(o, t) {
  return zi(_e(o), t ? pe : Bt);
};
G.getById = function(o) {
  return To[o];
};
G.getAll = function() {
  return j.filter(function(o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function() {
  return !!Ne;
};
G.snapDirectional = sa;
G.addEventListener = function(o, t) {
  var i = ar[o] || (ar[o] = []);
  ~i.indexOf(t) || i.push(t);
};
G.removeEventListener = function(o, t) {
  var i = ar[o], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
G.batch = function(o, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, s = function(l, f) {
    var p = [], c = [], h = A.delayedCall(r, function() {
      f(p, c), p = [], c = [];
    }).pause();
    return function(_) {
      p.length || h.restart(!0), p.push(_.trigger), c.push(_), n <= p.length && h.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && ne(t[a]) && a !== "onRefreshInit" ? s(a, t[a]) : t[a];
  return ne(n) && (n = n(), Wt(G, "refresh", function() {
    return n = t.batchMax();
  })), En(o).forEach(function(u) {
    var l = {};
    for (a in e)
      l[a] = e[a];
    l.trigger = u, i.push(G.create(l));
  }), i;
};
var Za = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, js = function o(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Ot.isTouch ? " pinch-zoom" : "") : "none", t === ke && o(ot, i);
}, Un = {
  auto: 1,
  scroll: 1
}, Yh = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, s = n._gsap || A.core.getCache(n), a = ie(), u;
  if (!s._isScrollT || a - s._isScrollT > 2e3) {
    for (; n && n !== ot && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Un[(u = ze(n)).overflowY] || Un[u.overflowX])); )
      n = n.parentNode;
    s._isScroll = n && n !== e && !or(n) && (Un[(u = ze(n)).overflowY] || Un[u.overflowX]), s._isScrollT = a;
  }
  (s._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, Fu = function(t, i, e, r) {
  return Ot.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && Yh,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && Wt(_t, Ot.eventTypes[0], Qa, !1, !0);
    },
    onDisable: function() {
      return Xt(_t, Ot.eventTypes[0], Qa, !0);
    }
  });
}, Vh = /(input|label|select|textarea)/i, Ka, Qa = function(t) {
  var i = Vh.test(t.target.tagName);
  (i || Ka) && (t._gsapAllow = !0, Ka = i);
}, Xh = function(t) {
  qi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, s = i.onRelease, a, u, l = _e(t.target) || ke, f = A.core.globals().ScrollSmoother, p = f && f.get(), c = Ti && (t.content && _e(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), h = zi(l, Bt), _ = zi(l, pe), d = 1, g = (Ot.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth, y = 0, x = ne(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, w, v, T = Fu(l, t.type, !0, n), C = function() {
    return v = !1;
  }, S = ti, P = ti, k = function() {
    u = ri(l, Bt), P = hn(Ti ? 1 : 0, u), e && (S = hn(0, ri(l, pe))), w = rr;
  }, E = function() {
    c._gsap.y = Qr(parseFloat(c._gsap.y) + h.offset) + "px", c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(c._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0;
  }, R = function() {
    if (v) {
      requestAnimationFrame(C);
      var it = Qr(a.deltaY / 2), at = P(h.v - it);
      if (c && at !== h.v + h.offset) {
        h.offset = at - h.v;
        var m = Qr((parseFloat(c && c._gsap.y) || 0) - h.offset);
        c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", c._gsap.y = m + "px", h.cacheID = K.cache, gi();
      }
      return !0;
    }
    h.offset && E(), v = !0;
  }, O, Y, z, D, $ = function() {
    k(), O.isActive() && O.vars.scrollY > u && (h() > u ? O.progress(1) && h(u) : O.resetTo("scrollY", u));
  };
  return c && A.set(c, {
    y: "+=0"
  }), t.ignoreCheck = function(V) {
    return Ti && V.type === "touchmove" && R() || d > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var V = d;
    d = Qr((Z.visualViewport && Z.visualViewport.scale || 1) / g), O.pause(), V !== d && js(l, d > 1.01 ? !0 : e ? !1 : "x"), Y = _(), z = h(), k(), w = rr;
  }, t.onRelease = t.onGestureStart = function(V, it) {
    if (h.offset && E(), !it)
      D.restart(!0);
    else {
      K.cache++;
      var at = x(), m, rt;
      e && (m = _(), rt = m + at * 0.05 * -V.velocityX / 0.227, at *= Za(_, m, rt, ri(l, pe)), O.vars.scrollX = S(rt)), m = h(), rt = m + at * 0.05 * -V.velocityY / 0.227, at *= Za(h, m, rt, ri(l, Bt)), O.vars.scrollY = P(rt), O.invalidate().duration(at).play(0.01), (Ti && O.vars.scrollY >= u || m >= u - 1) && A.to({}, {
        onUpdate: $,
        duration: at
      });
    }
    s && s(V);
  }, t.onWheel = function() {
    O._ts && O.pause(), ie() - y > 1e3 && (w = 0, y = ie());
  }, t.onChange = function(V, it, at, m, rt) {
    if (rr !== w && k(), it && e && _(S(m[2] === it ? Y + (V.startX - V.x) : _() + it - m[1])), at) {
      h.offset && E();
      var lt = rt[2] === at, de = lt ? z + V.startY - V.y : h() + at - rt[1], nt = P(de);
      lt && de !== nt && (z += nt - de), h(nt);
    }
    (at || it) && gi();
  }, t.onEnable = function() {
    js(l, e ? !1 : "x"), G.addEventListener("refresh", $), Wt(Z, "resize", $), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = _.smooth = !1), T.enable();
  }, t.onDisable = function() {
    js(l, !0), Xt(Z, "resize", $), G.removeEventListener("refresh", $), T.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new Ot(t), a.iOS = Ti, Ti && !h() && h(1), Ti && A.ticker.add(ti), D = a._dc, O = A.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: zu(h, h(), function() {
        return O.pause();
      })
    },
    onUpdate: gi,
    onComplete: D.vars.onComplete
  }), a;
};
G.sort = function(o) {
  if (ne(o))
    return j.sort(o);
  var t = Z.pageYOffset || 0;
  return G.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + Z.innerHeight;
  }), j.sort(o || function(i, e) {
    return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
  });
};
G.observe = function(o) {
  return new Ot(o);
};
G.normalizeScroll = function(o) {
  if (typeof o > "u")
    return ue;
  if (o === !0 && ue)
    return ue.enable();
  if (o === !1) {
    ue && ue.kill(), ue = o;
    return;
  }
  var t = o instanceof Ot ? o : Xh(o);
  return ue && ue.target === t.target && ue.kill(), or(t.target) && (ue = t), t;
};
G.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: yo,
  _inputObserver: Fu,
  _scrollers: K,
  _proxies: ni,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Ne || lr("scrollStart"), Ne = ie();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return ee;
    }
  }
};
ku() && A.registerPlugin(G);
var Ja = "1.3.19";
function Bu(o, t, i) {
  return Math.max(o, Math.min(t, i));
}
function Wh(o, t, i) {
  return (1 - i) * o + i * t;
}
function Hh(o, t, i, e) {
  return Wh(o, t, 1 - Math.exp(-i * e));
}
function $h(o, t) {
  return (o % t + t) % t;
}
var Uh = class {
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
  advance(o) {
    var i;
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += o;
      const e = Bu(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Hh(this.value, this.to, this.lerp * 60, o), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
  fromTo(o, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: s }) {
    this.from = this.value = o, this.to = t, this.lerp = i, this.duration = e, this.easing = r, this.currentTime = 0, this.isRunning = !0, n == null || n(), this.onUpdate = s;
  }
};
function qh(o, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, o.apply(this, e);
    }, t);
  };
}
var Gh = class {
  constructor(o, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
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
    this.wrapper = o, this.content = t, i && (this.debouncedResize = qh(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  destroy() {
    var o, t;
    (o = this.wrapperResizeObserver) == null || o.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}, Nu = class {
  constructor() {
    L(this, "events", {});
  }
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(o, ...t) {
    var e;
    const i = this.events[o] || [];
    for (let r = 0, n = i.length; r < n; r++)
      (e = i[r]) == null || e.call(i, ...t);
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(o, t) {
    return this.events[o] ? this.events[o].push(t) : this.events[o] = [t], () => {
      var i;
      this.events[o] = (i = this.events[o]) == null ? void 0 : i.filter((e) => t !== e);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(o, t) {
    var i;
    this.events[o] = (i = this.events[o]) == null ? void 0 : i.filter((e) => t !== e);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
}, jh = 100 / 6, bi = { passive: !1 };
function tl(o, t) {
  return o === 1 ? jh : o === 2 ? t : 1;
}
var Zh = class {
  constructor(o, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
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
    L(this, "emitter", new Nu());
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    L(this, "onTouchStart", (o) => {
      const { clientX: t, clientY: i } = o.targetTouches ? o.targetTouches[0] : o;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: o
      });
    });
    /** Event handler for 'touchmove' event */
    L(this, "onTouchMove", (o) => {
      const { clientX: t, clientY: i } = o.targetTouches ? o.targetTouches[0] : o, e = -(t - this.touchStart.x) * this.options.touchMultiplier, r = -(i - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: e,
        y: r
      }, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: r,
        event: o
      });
    });
    L(this, "onTouchEnd", (o) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: o
      });
    });
    /** Event handler for 'wheel' event */
    L(this, "onWheel", (o) => {
      let { deltaX: t, deltaY: i, deltaMode: e } = o;
      const r = tl(e, this.window.width), n = tl(e, this.window.height);
      t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: o });
    });
    L(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = o, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, bi), this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      bi
    ), this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      bi
    ), this.element.addEventListener("touchend", this.onTouchEnd, bi);
  }
  /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */
  on(o, t) {
    return this.emitter.on(o, t);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, bi), this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      bi
    ), this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      bi
    ), this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      bi
    );
  }
}, el = (o) => Math.min(1, 1.001 - 2 ** (-10 * o)), Kh = class {
  constructor({
    wrapper: o = window,
    content: t = document.documentElement,
    eventsTarget: i = o,
    smoothWheel: e = !0,
    syncTouch: r = !1,
    syncTouchLerp: n = 0.075,
    touchInertiaExponent: s = 1.7,
    duration: a,
    // in seconds
    easing: u,
    lerp: l = 0.1,
    infinite: f = !1,
    orientation: p = "vertical",
    // vertical, horizontal
    gestureOrientation: c = p === "horizontal" ? "both" : "vertical",
    // vertical, horizontal, both
    touchMultiplier: h = 1,
    wheelMultiplier: _ = 1,
    autoResize: d = !0,
    prevent: g,
    virtualScroll: y,
    overscroll: x = !0,
    autoRaf: w = !1,
    anchors: v = !1,
    autoToggle: T = !1,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll: C = !1,
    __experimental__naiveDimensions: S = !1,
    naiveDimensions: P = S,
    stopInertiaOnNavigate: k = !1
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
    L(this, "animate", new Uh());
    L(this, "emitter", new Nu());
    // These are instanciated in the constructor as they need information from the options
    L(this, "dimensions");
    // This is not private because it's used in the Snap class
    L(this, "virtualScroll");
    L(this, "onScrollEnd", (o) => {
      o instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && o.stopPropagation();
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
    L(this, "onTransitionEnd", (o) => {
      o.propertyName.includes("overflow") && this.checkOverflow();
    });
    L(this, "onClick", (o) => {
      const e = o.composedPath().filter(
        (n) => n instanceof HTMLAnchorElement && n.href
      ).map(
        (n) => new URL(n.href)
      ), r = new URL(window.location.href);
      if (this.options.anchors) {
        const n = e.find(
          (s) => r.host === s.host && r.pathname === s.pathname && s.hash
        );
        if (n) {
          const s = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, a = `#${n.hash.split("#")[1]}`;
          this.scrollTo(a, s);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && e.some(
        (s) => r.host === s.host && r.pathname !== s.pathname
      )) {
        this.reset();
        return;
      }
    });
    L(this, "onPointerDown", (o) => {
      o.button === 1 && this.reset();
    });
    L(this, "onVirtualScroll", (o) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(o) === !1)
        return;
      const { deltaX: t, deltaY: i, event: e } = o;
      if (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: i, event: e }), e.ctrlKey || e.lenisStopPropagation) return;
      const r = e.type.includes("touch"), n = e.type.includes("wheel");
      this.isTouching = e.type === "touchstart" || e.type === "touchmove";
      const s = t === 0 && i === 0;
      if (this.options.syncTouch && r && e.type === "touchstart" && s && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const u = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (s || u)
        return;
      let l = e.composedPath();
      l = l.slice(0, l.indexOf(this.rootElement));
      const f = this.options.prevent, p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (l.find(
        (y) => {
          var x, w, v, T, C;
          return y instanceof HTMLElement && (typeof f == "function" && (f == null ? void 0 : f(y)) || ((x = y.hasAttribute) == null ? void 0 : x.call(y, "data-lenis-prevent")) || p === "vertical" && ((w = y.hasAttribute) == null ? void 0 : w.call(y, "data-lenis-prevent-vertical")) || p === "horizontal" && ((v = y.hasAttribute) == null ? void 0 : v.call(y, "data-lenis-prevent-horizontal")) || r && ((T = y.hasAttribute) == null ? void 0 : T.call(y, "data-lenis-prevent-touch")) || n && ((C = y.hasAttribute) == null ? void 0 : C.call(y, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(y, {
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
      let h = i;
      this.options.gestureOrientation === "both" ? h = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const _ = r && this.options.syncTouch, g = r && e.type === "touchend";
      g && (h = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
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
        const o = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - o, this.direction = Math.sign(
          this.animatedScroll - o
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
    L(this, "raf", (o) => {
      const t = o - (this.time || o);
      this.time = o, this.animate.advance(t * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    window.lenisVersion = Ja, window.lenis || (window.lenis = {}), window.lenis.version = Ja, p === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), (!o || o === document.documentElement) && (o = window), typeof a == "number" && typeof u != "function" ? u = el : typeof u == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: o,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
      syncTouch: r,
      syncTouchLerp: n,
      touchInertiaExponent: s,
      duration: a,
      easing: u,
      lerp: l,
      infinite: f,
      gestureOrientation: c,
      orientation: p,
      touchMultiplier: h,
      wheelMultiplier: _,
      autoResize: d,
      prevent: g,
      virtualScroll: y,
      overscroll: x,
      autoRaf: w,
      anchors: v,
      autoToggle: T,
      allowNestedScroll: C,
      naiveDimensions: P,
      stopInertiaOnNavigate: k
    }, this.dimensions = new Gh(o, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new Zh(i, {
      touchMultiplier: h,
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
  on(o, t) {
    return this.emitter.on(o, t);
  }
  off(o, t) {
    return this.emitter.off(o, t);
  }
  get overflow() {
    const o = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[o];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
  }
  setScroll(o) {
    this.isHorizontal ? this.options.wrapper.scrollTo({ left: o, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: o, behavior: "instant" });
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
  scrollTo(o, {
    offset: t = 0,
    immediate: i = !1,
    lock: e = !1,
    programmatic: r = !0,
    // called from outside of the class
    lerp: n = r ? this.options.lerp : void 0,
    duration: s = r ? this.options.duration : void 0,
    easing: a = r ? this.options.easing : void 0,
    onStart: u,
    onComplete: l,
    force: f = !1,
    // scroll even if stopped
    userData: p
  } = {}) {
    if ((this.isStopped || this.isLocked) && !f) return;
    let c = o, h = t;
    if (typeof c == "string" && ["top", "left", "start", "#"].includes(c))
      c = 0;
    else if (typeof c == "string" && ["bottom", "right", "end"].includes(c))
      c = this.limit;
    else {
      let _ = null;
      if (typeof c == "string" ? (_ = document.querySelector(c), _ || (c === "#top" ? c = 0 : console.warn("Lenis: Target not found", c))) : c instanceof HTMLElement && (c != null && c.nodeType) && (_ = c), _) {
        if (this.options.wrapper !== window) {
          const g = this.rootElement.getBoundingClientRect();
          h -= this.isHorizontal ? g.left : g.top;
        }
        const d = _.getBoundingClientRect();
        c = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
      }
    }
    if (typeof c == "number") {
      if (c += h, c = Math.round(c), this.options.infinite) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = c - this.animatedScroll;
          _ > this.limit / 2 ? c -= this.limit : _ < -this.limit / 2 && (c += this.limit);
        }
      } else
        c = Bu(0, c, this.limit);
      if (c === this.targetScroll) {
        u == null || u(this), l == null || l(this);
        return;
      }
      if (this.userData = p ?? {}, i) {
        this.animatedScroll = this.targetScroll = c, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l == null || l(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = c), typeof s == "number" && typeof a != "function" ? a = el : typeof a == "function" && typeof s != "number" && (s = 1), this.animate.fromTo(this.animatedScroll, c, {
        duration: s,
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
  hasNestedScroll(o, { deltaX: t, deltaY: i }) {
    const e = Date.now();
    o._lenis || (o._lenis = {});
    const r = o._lenis;
    let n, s, a, u, l, f, p, c, h, _;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const S = window.getComputedStyle(o);
      if (r.computedStyle = S, n = ["auto", "overlay", "scroll"].includes(
        S.overflowX
      ), s = ["auto", "overlay", "scroll"].includes(
        S.overflowY
      ), l = ["auto"].includes(
        S.overscrollBehaviorX
      ), f = ["auto"].includes(
        S.overscrollBehaviorY
      ), r.hasOverflowX = n, r.hasOverflowY = s, !(n || s)) return !1;
      p = o.scrollWidth, c = o.scrollHeight, h = o.clientWidth, _ = o.clientHeight, a = p > h, u = c > _, r.isScrollableX = a, r.isScrollableY = u, r.scrollWidth = p, r.scrollHeight = c, r.clientWidth = h, r.clientHeight = _, r.hasOverscrollBehaviorX = l, r.hasOverscrollBehaviorY = f;
    } else
      a = r.isScrollableX, u = r.isScrollableY, n = r.hasOverflowX, s = r.hasOverflowY, p = r.scrollWidth, c = r.scrollHeight, h = r.clientWidth, _ = r.clientHeight, l = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
    if (!(n && a || s && u))
      return !1;
    const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, y, x, w, v, T;
    if (d === "horizontal")
      g = Math.round(o.scrollLeft), y = p - h, x = t, w = n, v = a, T = l;
    else if (d === "vertical")
      g = Math.round(o.scrollTop), y = c - _, x = i, w = s, v = u, T = f;
    else
      return !1;
    return !T && (g >= y || g <= 0) ? !0 : (x > 0 ? g < y : g > 0) && w && v;
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
    const o = this.options.wrapper;
    return this.isHorizontal ? o.scrollX ?? o.scrollLeft : o.scrollY ?? o.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? $h(this.animatedScroll, this.limit) : this.animatedScroll;
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
  set isScrolling(o) {
    this._isScrolling !== o && (this._isScrolling = o, this.updateClassName());
  }
  /**
   * Check if lenis is stopped
   */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(o) {
    this._isStopped !== o && (this._isStopped = o, this.updateClassName());
  }
  /**
   * Check if lenis is locked
   */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(o) {
    this._isLocked !== o && (this._isLocked = o, this.updateClassName());
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
    let o = "lenis";
    return this.options.autoToggle && (o += " lenis-autoToggle"), this.isStopped && (o += " lenis-stopped"), this.isLocked && (o += " lenis-locked"), this.isScrolling && (o += " lenis-scrolling"), this.isScrolling === "smooth" && (o += " lenis-smooth"), o;
  }
  updateClassName() {
    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
}, Yu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Vu = { exports: {} }, Zs = { exports: {} }, il;
function Jh() {
  return il || (il = 1, function(o) {
    (function(t, i) {
      o.exports ? o.exports = i() : t.EvEmitter = i();
    })(typeof window < "u" ? window : Yu, function() {
      function t() {
      }
      let i = t.prototype;
      return i.on = function(e, r) {
        if (!e || !r) return this;
        let n = this._events = this._events || {}, s = n[e] = n[e] || [];
        return s.includes(r) || s.push(r), this;
      }, i.once = function(e, r) {
        if (!e || !r) return this;
        this.on(e, r);
        let n = this._onceEvents = this._onceEvents || {}, s = n[e] = n[e] || {};
        return s[r] = !0, this;
      }, i.off = function(e, r) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        let s = n.indexOf(r);
        return s != -1 && n.splice(s, 1), this;
      }, i.emitEvent = function(e, r) {
        let n = this._events && this._events[e];
        if (!n || !n.length) return this;
        n = n.slice(0), r = r || [];
        let s = this._onceEvents && this._onceEvents[e];
        for (let a of n)
          s && s[a] && (this.off(e, a), delete s[a]), a.apply(this, r);
        return this;
      }, i.allOff = function() {
        return delete this._events, delete this._onceEvents, this;
      }, t;
    });
  }(Zs)), Zs.exports;
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(o) {
  (function(t, i) {
    o.exports ? o.exports = i(t, Jh()) : t.imagesLoaded = i(t, t.EvEmitter);
  })(
    typeof window < "u" ? window : Yu,
    function(i, e) {
      let r = i.jQuery, n = i.console;
      function s(c) {
        return Array.isArray(c) ? c : typeof c == "object" && typeof c.length == "number" ? [...c] : [c];
      }
      function a(c, h, _) {
        if (!(this instanceof a))
          return new a(c, h, _);
        let d = c;
        if (typeof c == "string" && (d = document.querySelectorAll(c)), !d) {
          n.error(`Bad element for imagesLoaded ${d || c}`);
          return;
        }
        this.elements = s(d), this.options = {}, typeof h == "function" ? _ = h : Object.assign(this.options, h), _ && this.on("always", _), this.getImages(), r && (this.jqDeferred = new r.Deferred()), setTimeout(this.check.bind(this));
      }
      a.prototype = Object.create(e.prototype), a.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      };
      const u = [1, 9, 11];
      a.prototype.addElementImages = function(c) {
        c.nodeName === "IMG" && this.addImage(c), this.options.background === !0 && this.addElementBackgroundImages(c);
        let { nodeType: h } = c;
        if (!h || !u.includes(h)) return;
        let _ = c.querySelectorAll("img");
        for (let d of _)
          this.addImage(d);
        if (typeof this.options.background == "string") {
          let d = c.querySelectorAll(this.options.background);
          for (let g of d)
            this.addElementBackgroundImages(g);
        }
      };
      const l = /url\((['"])?(.*?)\1\)/gi;
      a.prototype.addElementBackgroundImages = function(c) {
        let h = getComputedStyle(c);
        if (!h) return;
        let _ = l.exec(h.backgroundImage);
        for (; _ !== null; ) {
          let d = _ && _[2];
          d && this.addBackground(d, c), _ = l.exec(h.backgroundImage);
        }
      }, a.prototype.addImage = function(c) {
        let h = new f(c);
        this.images.push(h);
      }, a.prototype.addBackground = function(c, h) {
        let _ = new p(c, h);
        this.images.push(_);
      }, a.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
          this.complete();
          return;
        }
        let c = (h, _, d) => {
          setTimeout(() => {
            this.progress(h, _, d);
          });
        };
        this.images.forEach(function(h) {
          h.once("progress", c), h.check();
        });
      }, a.prototype.progress = function(c, h, _) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !c.isLoaded, this.emitEvent("progress", [this, c, h]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, c), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${_}`, c, h);
      }, a.prototype.complete = function() {
        let c = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(c, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          let h = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[h](this);
        }
      };
      function f(c) {
        this.img = c;
      }
      f.prototype = Object.create(e.prototype), f.prototype.check = function() {
        if (this.getIsImageComplete()) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src;
      }, f.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }, f.prototype.confirm = function(c, h) {
        this.isLoaded = c;
        let { parentNode: _ } = this.img, d = _.nodeName === "PICTURE" ? _ : this.img;
        this.emitEvent("progress", [this, d, h]);
      }, f.prototype.handleEvent = function(c) {
        let h = "on" + c.type;
        this[h] && this[h](c);
      }, f.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }, f.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }, f.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      };
      function p(c, h) {
        this.url = c, this.element = h, this.img = new Image();
      }
      return p.prototype = Object.create(f.prototype), p.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
      }, p.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, p.prototype.confirm = function(c, h) {
        this.isLoaded = c, this.emitEvent("progress", [this, this.element, h]);
      }, a.makeJQueryPlugin = function(c) {
        c = c || i.jQuery, c && (r = c, r.fn.imagesLoaded = function(h, _) {
          return new a(this, h, _).jqDeferred.promise(r(this));
        });
      }, a.makeJQueryPlugin(), a;
    }
  );
})(Vu);
var tc = Vu.exports;
const ec = /* @__PURE__ */ Qh(tc);
wr.registerPlugin(Br, G);
const qn = {
  absoluteOnLeave: !0,
  absolute: !1,
  scale: !1,
  simple: !0
}, rl = { start: "center center", end: "+=300%" };
function ic(o) {
  const t = o.querySelectorAll(".gallery__item, .gallery__item-inner");
  return new Promise((i) => {
    if (!t.length) {
      i();
      return;
    }
    ec(t, { background: !0 }, () => i());
  });
}
function rc(o) {
  const t = o.getAttribute("data-sflr-scroll-start") ?? rl.start, i = o.getAttribute("data-sflr-scroll-end") ?? rl.end;
  return { start: t, end: i };
}
function nc(o, t) {
  const i = o.querySelector(".caption"), e = o.querySelectorAll(".gallery__item"), r = [...e].map((a) => a.children.length > 0 ? [...a.children] : []).flat();
  o.classList.add("gallery--switch");
  const n = Br.getState([e, i], {
    props: "filter, opacity"
  });
  o.classList.remove("gallery--switch");
  const s = Br.to(n, {
    ease: "none",
    absoluteOnLeave: qn.absoluteOnLeave,
    absolute: qn.absolute,
    scale: qn.scale,
    simple: qn.simple,
    scrollTrigger: {
      trigger: o,
      start: t.start,
      end: t.end,
      pin: o.parentNode,
      scrub: !0
    },
    stagger: 0
  });
  r.length && s.fromTo(
    r,
    { scale: 2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: o,
        start: t.start,
        end: t.end,
        scrub: !0
      }
    },
    0
  );
}
function sc(o) {
  o._scrollFlipRowCleanup && o._scrollFlipRowCleanup();
  const t = o.querySelector("[data-sflr-gallery], .gallery--row");
  if (!t || !t.classList.contains("gallery--row")) {
    console.warn("[scroll-flip-row] Galerie .gallery--row introuvable");
    return;
  }
  let i = !1, e = null, r = null, n = null;
  const s = () => {
    i = !0, e == null || e.revert(), e = null, n && (wr.ticker.remove(n), n = null), r == null || r.destroy(), r = null, o.classList.remove("sflr-js", "sflr-loading"), G.refresh();
  };
  o._scrollFlipRowCleanup = s, o.classList.add("sflr-js", "sflr-loading");
  const a = rc(o);
  return ic(o).then(() => {
    i || (o.classList.remove("sflr-loading"), e = wr.context(() => {
      o.getAttribute("data-sflr-lenis") === "true" && (r = new Kh({
        lerp: 0.1,
        smoothWheel: !0
      }), r.on("scroll", () => G.update()), n = (l) => r.raf(l * 1e3), wr.ticker.add(n), wr.ticker.lagSmoothing(0));
      try {
        nc(t, a);
      } catch (l) {
        console.error("[scroll-flip-row] Flip / ScrollTrigger", l);
      }
    }, o), G.refresh());
  }), s;
}
if (typeof window < "u") {
  const o = () => {
    document.querySelectorAll('[data-component="scroll-flip-row"]').forEach((t) => sc(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, { once: !0 }) : o();
}
export {
  sc as initScrollFlipRow
};

var Vu = Object.defineProperty;
var Xu = (o, t, i) => t in o ? Vu(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var L = (o, t, i) => Xu(o, typeof t != "symbol" ? t + "" : t, i);
function fi(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function rl(o, t) {
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
}, ko, Kt, vt, Fe = 1e8, ct = 1 / Fe, Zs = Math.PI * 2, Wu = Zs / 4, Hu = 0, nl = Math.sqrt, $u = Math.cos, qu = Math.sin, Ht = function(t) {
  return typeof t == "string";
}, kt = function(t) {
  return typeof t == "function";
}, mi = function(t) {
  return typeof t == "number";
}, Eo = function(t) {
  return typeof t > "u";
}, si = function(t) {
  return typeof t == "object";
}, ge = function(t) {
  return t !== !1;
}, Co = function() {
  return typeof window < "u";
}, Rn = function(t) {
  return kt(t) || Ht(t);
}, sl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, se = Array.isArray, Uu = /random\([^)]+\)/g, Gu = /,\s*/g, aa = /(?:-?\.?\d|\.)+/gi, ol = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, yr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Es = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, al = /[+-]=-?[.\d]+/, ju = /[^,'"\[\]\s]+/gi, Zu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, bt, Qe, Ks, Po, De = {}, rs = {}, ll, ul = function(t) {
  return (rs = Rr(t, De)) && we;
}, Oo = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, yn = function(t, i) {
  return !i && console.warn(t);
}, fl = function(t, i) {
  return t && (De[t] = i) && rs && (rs[t] = i) || De;
}, vn = function() {
  return 0;
}, Ku = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Un = {
  suppressEvents: !0,
  kill: !1
}, Ju = {
  suppressEvents: !0
}, Mo = {}, Mi = [], Js = {}, hl, Se = {}, Cs = {}, la = 30, Gn = [], Do = "", Ro = function(t) {
  var i = t[0], e, r;
  if (si(i) || kt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = Gn.length; r-- && !Gn[r].targetTest(i); )
      ;
    e = Gn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new zl(t[r], e))) || t.splice(r, 1);
  return t;
}, Zi = function(t) {
  return t._gsap || Ro(Be(t))[0]._gsap;
}, cl = function(t, i, e) {
  return (e = t[i]) && kt(e) ? t[i]() : Eo(e) && t.getAttribute && t.getAttribute(i) || e;
}, me = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, Pt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, xt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Sr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, Qu = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, ns = function() {
  var t = Mi.length, i = Mi.slice(0), e, r;
  for (Js = {}, Mi.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Ao = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, pl = function(t, i, e, r) {
  Mi.length && !Kt && ns(), t.render(i, e, !!(Kt && i < 0 && Ao(t))), Mi.length && !Kt && ns();
}, dl = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(ju).length < 2 ? i : Ht(t) ? t.trim() : t;
}, _l = function(t) {
  return t;
}, Re = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, tf = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, Rr = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, ua = function o(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = si(i[e]) ? o(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, ss = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, en = function(t) {
  var i = t.parent || bt, e = t.keyframes ? tf(se(t.keyframes)) : Re;
  if (ge(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, ef = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, gl = function(t, i, e, r, n) {
  var s = t[r], a;
  if (n)
    for (a = i[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (i._next = s._next, s._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = s, i.parent = i._dp = t, i;
}, ys = function(t, i, e, r) {
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
}, rf = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, Qs = function(t, i, e, r) {
  return t._startAt && (Kt ? t._startAt.revert(Un) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, nf = function o(t) {
  return !t || t._ts && o(t.parent);
}, fa = function(t) {
  return t._repeat ? Ar(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ar = function(t, i) {
  var e = Math.floor(t = xt(t / i));
  return t && e === t ? e - 1 : e;
}, os = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, vs = function(t) {
  return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ct) || 0));
}, ws = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = xt(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), vs(t), e._dirty || Ki(e, t)), t;
}, ml = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = os(t.rawTime(), i), (!i._dur || Pn(0, i.totalDuration(), e) - i._tTime > ct) && i.render(e, !0)), Ki(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -ct;
  }
}, ei = function(t, i, e, r) {
  return i.parent && Ai(i), i._start = xt((mi(e) ? e : e || t !== bt ? Le(t, e, i) : t._time) + i._delay), i._end = xt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), gl(t, i, "_first", "_last", t._sort ? "_start" : 0), to(i) || (t._recent = i), r || ml(t, i), t._ts < 0 && ws(t, t._tTime), t;
}, yl = function(t, i) {
  return (De.ScrollTrigger || Oo("scrollTrigger", i)) && De.ScrollTrigger.create(i, t);
}, vl = function(t, i, e, r, n) {
  if (zo(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Kt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && hl !== Ee.frame)
    return Mi.push(t), t._lazy = [n, r], 1;
}, sf = function o(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || o(i));
}, to = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, of = function(t, i, e, r) {
  var n = t.ratio, s = i < 0 || !i && (!t._start && sf(t) && !(!t._initted && to(t)) || (t._ts < 0 || t._dp._ts < 0) && !to(t)) ? 0 : 1, a = t._rDelay, l = 0, u, f, p;
  if (a && t._repeat && (l = Pn(0, t._tDur, i), f = Ar(l, a), t._yoyo && f & 1 && (s = 1 - s), f !== Ar(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || Kt || r || t._zTime === ct || !i && t._zTime) {
    if (!t._initted && vl(t, i, r, e, l))
      return;
    for (p = t._zTime, t._zTime = i || (e ? ct : 0), e || (e = i && !p), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    i < 0 && Qs(t, i, e, !0), t._onUpdate && !e && Pe(t, "onUpdate"), l && t._repeat && !e && t.parent && Pe(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === s && (s && Ai(t, 1), !e && !Kt && (Pe(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, af = function(t, i, e) {
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
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : xt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && ws(t, t._tTime = t._tDur * a), t.parent && vs(t), e || Ki(t.parent, t), t;
}, ha = function(t) {
  return t instanceof ce ? Ki(t) : Lr(t, t._dur);
}, lf = {
  _start: 0,
  endTime: vn,
  totalDuration: vn
}, Le = function o(t, i, e) {
  var r = t.labels, n = t._recent || lf, s = t.duration() >= Fe ? n.endTime(!1) : t._dur, a, l, u;
  return Ht(i) && (isNaN(i) || i in r) ? (l = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = s), r[i]) : (l = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (l = l / 100 * (se(e) ? e[0] : e).totalDuration()), a > 1 ? o(t, i.substr(0, a - 1), e) + l : s + l)) : i == null ? s : +i;
}, rn = function(t, i, e) {
  var r = mi(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = i[n], a, l;
  if (r && (s.duration = i[1]), s.parent = e, t) {
    for (a = s, l = e; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = ge(l.vars.inherit) && l.parent;
    s.immediateRender = ge(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = i[n - 1];
  }
  return new Lt(i[0], s, i[n + 1]);
}, Fi = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, Pn = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, re = function(t, i) {
  return !Ht(t) || !(i = Zu.exec(t)) ? "" : i[1];
}, uf = function(t, i, e) {
  return Fi(e, function(r) {
    return Pn(t, i, r);
  });
}, eo = [].slice, wl = function(t, i) {
  return t && si(t) && "length" in t && (!i && !t.length || t.length - 1 in t && si(t[0])) && !t.nodeType && t !== Qe;
}, ff = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return Ht(r) && !i || wl(r, 1) ? (n = e).push.apply(n, Be(r)) : e.push(r);
  }) || e;
}, Be = function(t, i, e) {
  return vt && !i && vt.selector ? vt.selector(t) : Ht(t) && !e && (Ks || !zr()) ? eo.call((i || Po).querySelectorAll(t), 0) : se(t) ? ff(t, e) : wl(t) ? eo.call(t, 0) : t ? [t] : [];
}, io = function(t) {
  return t = Be(t)[0] || yn("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return Be(i, e.querySelectorAll ? e : e === t ? yn("Invalid scope") || Po.createElement("div") : t);
  };
}, xl = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, bl = function(t) {
  if (kt(t))
    return t;
  var i = si(t) ? t : {
    each: t
  }, e = Ji(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, s = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = i.axis, f = r, p = r;
  return Ht(r) ? f = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && l && (f = r[0], p = r[1]), function(c, h, _) {
    var d = (_ || i).length, g = s[d], y, x, w, v, T, C, S, P, k;
    if (!g) {
      if (k = i.grid === "auto" ? 0 : (i.grid || [1, Fe])[1], !k) {
        for (S = -Fe; S < (S = _[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (g = s[d] = [], y = l ? Math.min(k, d) * f - 0.5 : r % k, x = k === Fe ? 0 : l ? d * p / k - 0.5 : r / k | 0, S = 0, P = Fe, C = 0; C < d; C++)
        w = C % k - y, v = x - (C / k | 0), g[C] = T = u ? Math.abs(u === "y" ? v : w) : nl(w * w + v * v), T > S && (S = T), T < P && (P = T);
      r === "random" && xl(g), g.max = S - P, g.min = P, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = re(i.amount || i.each) || 0, e = e && d < 0 ? Rl(e) : e;
    }
    return d = (g[c] - g.min) / g.max || 0, xt(g.b + (e ? e(d) : d) * g.v) + g.u;
  };
}, ro = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = xt(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (mi(e) ? 0 : re(e));
  };
}, Tl = function(t, i) {
  var e = se(t), r, n;
  return !e && si(t) && (r = e = t.radius || Fe, t.values ? (t = Be(t.values), (n = !mi(t[0])) && (r *= r)) : t = ro(t.increment)), Fi(i, e ? kt(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), u = Fe, f = 0, p = t.length, c, h; p--; )
      n ? (c = t[p].x - a, h = t[p].y - l, c = c * c + h * h) : c = Math.abs(t[p] - a), c < u && (u = c, f = p);
    return f = !r || u <= r ? t[f] : s, n || f === s || mi(s) ? f : f + re(s);
  } : ro(t));
}, Sl = function(t, i, e, r) {
  return Fi(se(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return se(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, hf = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, cf = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || re(e));
  };
}, pf = function(t, i, e) {
  return El(t, i, 0, 1, e);
}, kl = function(t, i, e) {
  return Fi(e, function(r) {
    return t[~~i(r)];
  });
}, df = function o(t, i, e) {
  var r = i - t;
  return se(t) ? kl(t, o(0, t.length), i) : Fi(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, _f = function o(t, i, e) {
  var r = i - t, n = r * 2;
  return se(t) ? kl(t, o(0, t.length - 1), i) : Fi(e, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, wn = function(t) {
  return t.replace(Uu, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Gu);
    return Sl(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, El = function(t, i, e, r, n) {
  var s = i - t, a = r - e;
  return Fi(n, function(l) {
    return e + ((l - t) / s * a || 0);
  });
}, gf = function o(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(h) {
    return (1 - h) * t + h * i;
  };
  if (!n) {
    var s = Ht(t), a = {}, l, u, f, p, c;
    if (e === !0 && (r = 1) && (e = null), s)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (se(t) && !se(i)) {
      for (f = [], p = t.length, c = p - 2, u = 1; u < p; u++)
        f.push(o(t[u - 1], t[u]));
      p--, n = function(_) {
        _ *= p;
        var d = Math.min(c, ~~_);
        return f[d](_ - d);
      }, e = i;
    } else r || (t = Rr(se(t) ? [] : {}, t));
    if (!f) {
      for (l in i)
        Lo.call(a, t, l, "get", i[l]);
      n = function(_) {
        return Bo(_, a) || (s ? t.p : t);
      };
    }
  }
  return Fi(e, n);
}, ca = function(t, i, e) {
  var r = t.labels, n = Fe, s, a, l;
  for (s in r)
    a = r[s] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = s, n = a);
  return l;
}, Pe = function(t, i, e) {
  var r = t.vars, n = r[i], s = vt, a = t._ctx, l, u, f;
  if (n)
    return l = r[i + "Params"], u = r.callbackScope || t, e && Mi.length && ns(), a && (vt = a), f = l ? n.apply(u, l) : n.call(u), vt = s, f;
}, Ur = function(t) {
  return Ai(t), t.scrollTrigger && t.scrollTrigger.kill(!!Kt), t.progress() < 1 && Pe(t, "onInterrupt"), t;
}, vr, Cl = [], Pl = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Co() || t.headless) {
      var i = t.name, e = kt(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: vn,
        render: Bo,
        add: Lo,
        kill: Rf,
        modifier: Df,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Fo,
        aliases: {},
        register: 0
      };
      if (zr(), t !== r) {
        if (Se[i])
          return;
        Re(r, Re(ss(t, n), s)), Rr(r.prototype, Rr(n, ss(t, s))), Se[r.prop = i] = r, t.targetTest && (Gn.push(r), Mo[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      fl(i, r), t.register && t.register(we, r, ye);
    } else
      Cl.push(t);
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
}, Ps = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * ht + 0.5 | 0;
}, Ol = function(t, i, e) {
  var r = t ? mi(t) ? [t >> 16, t >> 8 & ht, t & ht] : 0 : Gr.black, n, s, a, l, u, f, p, c, h, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Gr[t])
      r = Gr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & ht, r & ht, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & ht, t & ht];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(aa), !i)
        l = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, s = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ps(l + 1 / 3, n, s), r[1] = Ps(l, n, s), r[2] = Ps(l - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(ol), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(aa) || Gr.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / ht, s = r[1] / ht, a = r[2] / ht, p = Math.max(n, s, a), c = Math.min(n, s, a), f = (p + c) / 2, p === c ? l = u = 0 : (h = p - c, u = f > 0.5 ? h / (2 - p - c) : h / (p + c), l = p === n ? (s - a) / h + (s < a ? 6 : 0) : p === s ? (a - n) / h + 2 : (n - s) / h + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, Ml = function(t) {
  var i = [], e = [], r = -1;
  return t.split(Di).forEach(function(n) {
    var s = n.match(yr) || [];
    i.push.apply(i, s), e.push(r += s.length + 1);
  }), i.c = e, i;
}, pa = function(t, i, e) {
  var r = "", n = (t + r).match(Di), s = i ? "hsla(" : "rgba(", a = 0, l, u, f, p;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = Ol(c, i, 1)) && s + (i ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), e && (f = Ml(t), l = e.c, l.join(r) !== f.c.join(r)))
    for (u = t.replace(Di, "1").split(yr), p = u.length - 1; a < p; a++)
      r += u[a] + (~l.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
  if (!u)
    for (u = t.split(Di), p = u.length - 1; a < p; a++)
      r += u[a] + n[a];
  return r + u[p];
}, Di = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Gr)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), mf = /hsl[a]?\(/, Dl = function(t) {
  var i = t.join(" "), e;
  if (Di.lastIndex = 0, Di.test(i))
    return e = mf.test(i), t[1] = pa(t[1], e), t[0] = pa(t[0], e, Ml(t[1])), !0;
}, xn, Ee = function() {
  var o = Date.now, t = 500, i = 33, e = o(), r = e, n = 1e3 / 240, s = n, a = [], l, u, f, p, c, h, _ = function d(g) {
    var y = o() - r, x = g === !0, w, v, T, C;
    if ((y > t || y < 0) && (e += y - i), r += y, T = r - e, w = T - s, (w > 0 || x) && (C = ++p.frame, c = T - p.time * 1e3, p.time = T = T / 1e3, s += w + (w >= n ? 4 : n - w), v = 1), x || (l = u(d)), v)
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
      ll && (!Ks && Co() && (Qe = Ks = window, Po = Qe.document || {}, De.gsap = we, (Qe.gsapVersions || (Qe.gsapVersions = [])).push(we.version), ul(rs || Qe.GreenSockGlobals || !Qe.gsap && Qe || {}), Cl.forEach(Pl)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && p.sleep(), u = f || function(g) {
        return setTimeout(g, s - p.time * 1e3 + 1 | 0);
      }, xn = 1, _(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(l), xn = 0, u = vn;
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
      return p.remove(g), a[x ? "unshift" : "push"](w), zr(), w;
    },
    remove: function(g, y) {
      ~(y = a.indexOf(g)) && a.splice(y, 1) && h >= y && h--;
    },
    _listeners: a
  }, p;
}(), zr = function() {
  return !xn && Ee.wake();
}, et = {}, yf = /^[\d.\-M][\d.\-,\s]/, vf = /["']/g, wf = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, s = e.length, a, l, u; n < s; n++)
    l = e[n], a = n !== s - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), i[r] = isNaN(u) ? u.replace(vf, "").trim() : +u, r = l.substr(a + 1).trim();
  return i;
}, xf = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, bf = function(t) {
  var i = (t + "").split("("), e = et[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [wf(i[1])] : xf(t).split(",").map(dl)) : et._CE && yf.test(t) ? et._CE("", t) : e;
}, Rl = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, Al = function o(t, i) {
  for (var e = t._first, r; e; )
    e instanceof ce ? o(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? o(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next;
}, Ji = function(t, i) {
  return t && (kt(t) ? t : et[t] || bf(t)) || i;
}, ur = function(t, i, e, r) {
  e === void 0 && (e = function(l) {
    return 1 - i(1 - l);
  }), r === void 0 && (r = function(l) {
    return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, s;
  return me(t, function(a) {
    et[a] = De[a] = n, et[s = a.toLowerCase()] = e;
    for (var l in n)
      et[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = et[a + "." + l] = n[l];
  }), n;
}, Ll = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, Os = function o(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), s = n / Zs * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * qu((f - s) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Ll(a);
  return n = Zs / n, l.config = function(u, f) {
    return o(t, u, f);
  }, l;
}, Ms = function o(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(s) {
    return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : Ll(e);
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
ur("Elastic", Os("in"), Os("out"), Os());
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
  return -(nl(1 - o * o) - 1);
});
ur("Sine", function(o) {
  return o === 1 ? 1 : -$u(o * Wu) + 1;
});
ur("Back", Ms("in"), Ms("out"), Ms());
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
  return Do += o + "," + o + "Params,";
});
var zl = function(t, i) {
  this.id = Hu++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : cl, this.set = i ? i.getSetter : Fo;
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
    if (zr(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (ws(this, e), !n._dp || n.parent || ml(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ei(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === ct || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), pl(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + fa(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + fa(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? Ar(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -ct ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? os(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -ct ? 0 : this._rts, this.totalTime(Pn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), vs(this), rf(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ct && (this._tTime -= ct)))), this) : this._ps;
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
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? os(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Ju);
    var r = Kt;
    return Kt = e, Ao(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Kt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, ha(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, ha(this), r ? this.time(r) : this;
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
      var a = kt(e) ? e : _l, l = function() {
        var f = r.then;
        r.then = null, n && n(), kt(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), s(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l;
    });
  }, t.kill = function() {
    Ur(this);
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
  rl(t, o);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = o.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ge(e.sortChildren), bt && ei(e.parent || bt, fi(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && yl(fi(n), e.scrollTrigger), n;
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
  }, i.staggerTo = function(r, n, s, a, l, u, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = f, s.parent = this, new Lt(r, s, Le(this, l)), this;
  }, i.staggerFrom = function(r, n, s, a, l, u, f) {
    return s.runBackwards = 1, en(s).immediateRender = ge(s.immediateRender), this.staggerTo(r, n, s, a, l, u, f);
  }, i.staggerFromTo = function(r, n, s, a, l, u, f, p) {
    return a.startAt = s, en(a).immediateRender = ge(a.immediateRender), this.staggerTo(r, n, a, l, u, f, p);
  }, i.render = function(r, n, s) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : xt(r), p = this._zTime < 0 != r < 0 && (this._initted || !u), c, h, _, d, g, y, x, w, v, T, C, S;
    if (this !== bt && f > l && r >= 0 && (f = l), f !== this._tTime || s || p) {
      if (a !== this._time && u && (f += this._time - a, r += this._time - a), c = f, v = this._start, w = this._ts, y = !w, p && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (C = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (c = xt(f % g), f === l ? (d = this._repeat, c = u) : (T = xt(f / g), d = ~~T, d && d === T && (c = u, d--), c > u && (c = u)), T = Ar(this._tTime, g), !a && this._tTime && T !== d && this._tTime - T * g - this._dur <= 0 && (T = d), C && d & 1 && (c = u - c, S = 1), d !== T && !this._lock) {
          var P = C && T & 1, k = P === (C && d & 1);
          if (d < T && (P = !P), a = P ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (S ? 0 : xt(d * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && Pe(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, T = d), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Al(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = af(this, xt(a), xt(c)), x && (f -= c - (c = x._start))), this._tTime = f, this._time = c, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && u && !n && !T && (Pe(this, "onStart"), this._tTime !== f))
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
            if (h.render(h._ts > 0 ? (E - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (E - h._start) * h._ts, n, s || Kt && Ao(h)), c !== this._time || !this._ts && !y) {
              x = 0, _ && (f += this._zTime = E ? -ct : ct);
              break;
            }
          }
          h = _;
        }
      }
      if (x && !n && (this.pause(), x.render(c >= a ? 0 : -ct)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = v, vs(this), this.render(r, n, s);
      this._onUpdate && !n && Pe(this, "onUpdate", !0), (f === l && this._tTime >= this.totalDuration() || !f && a) && (v === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Ai(this, 1), !n && !(r < 0 && !a) && (f || a || !l) && (Pe(this, f === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
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
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof Lt ? n && l.push(u) : (s && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, s)))), u = u._next;
    return l;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, i.remove = function(r) {
    return Ht(r) ? this.removeLabel(r) : kt(r) ? this.killTweensOf(r) : (r.parent === this && ys(this, r), r === this._recent && (this._recent = this._last), Ki(this));
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
    for (var a = this.getTweensOf(r, s), l = a.length; l--; )
      ki !== a[l] && a[l].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var s = [], a = Be(r), l = this._first, u = mi(n), f; l; )
      l instanceof Lt ? Qu(l._targets, a) && (u ? (!ki || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f), l = l._next;
    return s;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = Le(s, r), l = n, u = l.startAt, f = l.onStart, p = l.onStartParams, c = l.immediateRender, h, _ = Lt.to(s, Re({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || ct,
      onStart: function() {
        if (s.pause(), !h) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
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
    return r === void 0 && (r = this._time), ca(this, Le(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), ca(this, Le(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ct);
  }, i.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var a = this._first, l = this.labels, u;
    for (r = xt(r); a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in l)
        l[u] >= s && (l[u] += r);
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
    var n = 0, s = this, a = s._last, l = Fe, u, f, p;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (p = s.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > l && s._sort && a._ts && !s._lock ? (s._lock = 1, ei(s, a, f - a._delay, 1)._lock = 0) : l = f, f < 0 && a._ts && (n -= f, (!p && !s._dp || p && p.smoothChildTiming) && (s._start += xt(f / s._ts), s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      Lr(s, s === bt && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (bt._ts && (pl(bt, os(r, bt)), hl = Ee.frame), Ee.frame >= la) {
      la += Me.autoSleep || 120;
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
var Tf = function(t, i, e, r, n, s, a) {
  var l = new ye(this._pt, t, i, 0, 1, Vl, null, n), u = 0, f = 0, p, c, h, _, d, g, y, x;
  for (l.b = e, l.e = r, e += "", r += "", (y = ~r.indexOf("random(")) && (r = wn(r)), s && (x = [e, r], s(x, t, i), e = x[0], r = x[1]), c = e.match(Es) || []; p = Es.exec(r); )
    _ = p[0], d = r.substring(u, p.index), h ? h = (h + 1) % 5 : d.substr(-5) === "rgba(" && (h = 1), _ !== c[f++] && (g = parseFloat(c[f - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || f === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? Sr(g, _) - g : parseFloat(_) - g,
      m: h && h < 4 ? Math.round : 0
    }, u = Es.lastIndex);
  return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (al.test(r) || y) && (l.e = 0), this._pt = l, l;
}, Lo = function(t, i, e, r, n, s, a, l, u, f) {
  kt(r) && (r = r(n || 0, t, s));
  var p = t[i], c = e !== "get" ? e : kt(p) ? u ? t[i.indexOf("set") || !kt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : p, h = kt(p) ? u ? Pf : Nl : Io, _;
  if (Ht(r) && (~r.indexOf("random(") && (r = wn(r)), r.charAt(1) === "=" && (_ = Sr(c, r) + (re(c) || 0), (_ || _ === 0) && (r = _))), !f || c !== r || no)
    return !isNaN(c * r) && r !== "" ? (_ = new ye(this._pt, t, i, +c || 0, r - (c || 0), typeof p == "boolean" ? Mf : Yl, 0, h), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!p && !(i in t) && Oo(i, r), Tf.call(this, t, i, c, r, h, l || Me.stringFilter, u));
}, Sf = function(t, i, e, r, n) {
  if (kt(t) && (t = nn(t, n, i, e, r)), !si(t) || t.style && t.nodeType || se(t) || sl(t))
    return Ht(t) ? nn(t, n, i, e, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = nn(t[a], n, i, e, r);
  return s;
}, Il = function(t, i, e, r, n, s) {
  var a, l, u, f;
  if (Se[t] && (a = new Se[t]()).init(n, a.rawVars ? i[t] : Sf(i[t], r, n, s, e), e, r, s) !== !1 && (e._pt = l = new ye(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== vr))
    for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = l;
  return a;
}, ki, no, zo = function o(t, i, e) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, f = r.runBackwards, p = r.yoyoEase, c = r.keyframes, h = r.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : g, w = t._overwrite === "auto" && !ko, v = t.timeline, T, C, S, P, k, E, R, O, Y, I, D, $, V;
  if (v && (!c || !n) && (n = "none"), t._ease = Ji(n, Dr.ease), t._yEase = p ? Rl(Ji(p === !0 ? n : p, Dr.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !v && !!r.runBackwards, !v || c && !r.stagger) {
    if (O = g[0] ? Zi(g[0]).harness : 0, $ = O && r[O.prop], T = ss(r, Mo), d && (d._zTime < 0 && d.progress(1), i < 0 && f && a && !h ? d.render(-1, !0) : d.revert(f && _ ? Un : Ku), d._lazy = 0), s) {
      if (Ai(t._startAt = Lt.set(g, Re({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !d && ge(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Pe(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Kt || !a && !h) && t._startAt.revert(Un), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (f && _ && !d) {
      if (i && (a = !1), S = Re({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && ge(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), $ && (S[O.prop] = $), Ai(t._startAt = Lt.set(g, S)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Kt ? t._startAt.revert(Un) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        o(t._startAt, ct, ct);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && ge(l) || l && !_, C = 0; C < g.length; C++) {
      if (k = g[C], R = k._gsap || Ro(g)[C]._gsap, t._ptLookup[C] = I = {}, Js[R.id] && Mi.length && ns(), D = x === g ? C : x.indexOf(k), O && (Y = new O()).init(k, $ || T, t, D, x) !== !1 && (t._pt = P = new ye(t._pt, k, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(it) {
        I[it] = P;
      }), Y.priority && (E = 1)), !O || $)
        for (S in T)
          Se[S] && (Y = Il(S, T, t, D, k, x)) ? Y.priority && (E = 1) : I[S] = P = Lo.call(t, k, S, "get", T[S], D, x, 0, r.stringFilter);
      t._op && t._op[C] && t.kill(k, t._op[C]), w && t._pt && (ki = t, bt.killTweensOf(k, I, t.globalTime(i)), V = !t.parent, ki = 0), t._pt && l && (Js[R.id] = 1);
    }
    E && Xl(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !V, c && i <= 0 && v.render(Fe, !0, !0);
}, kf = function(t, i, e, r, n, s, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, p, c, h;
  if (!u)
    for (u = t._ptCache[i] = [], c = t._ptLookup, h = t._targets.length; h--; ) {
      if (f = c[h][i], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== i && f.fp !== i; )
          f = f._next;
      if (!f)
        return no = 1, t.vars[i] = "+=0", zo(t, a), no = 0, l ? yn(i + " not eligible for reset") : 1;
      u.push(f);
    }
  for (h = u.length; h--; )
    p = u[h], f = p._pt || p, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c, f.c = e - f.s, p.e && (p.e = Pt(e) + re(p.e)), p.b && (p.b = f.s + re(p.b));
}, Ef = function(t, i) {
  var e = t[0] ? Zi(t[0]).harness : 0, r = e && e.aliases, n, s, a, l;
  if (!r)
    return i;
  n = Rr({}, i);
  for (s in r)
    if (s in n)
      for (l = r[s].split(","), a = l.length; a--; )
        n[l[a]] = n[s];
  return n;
}, Cf = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", s, a;
  if (se(i))
    a = e[t] || (e[t] = []), i.forEach(function(l, u) {
      return a.push({
        t: u / (i.length - 1) * 100,
        v: l,
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
}, Fl = Do + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Bl = {};
me(Fl + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return Bl[o] = 1;
});
var Lt = /* @__PURE__ */ function(o) {
  rl(t, o);
  function t(e, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = o.call(this, s ? r : en(r)) || this;
    var l = a.vars, u = l.duration, f = l.delay, p = l.immediateRender, c = l.stagger, h = l.overwrite, _ = l.keyframes, d = l.defaults, g = l.scrollTrigger, y = l.yoyoEase, x = r.parent || bt, w = (se(e) || sl(e) ? mi(e[0]) : "length" in r) ? [e] : Be(e), v, T, C, S, P, k, E, R;
    if (a._targets = w.length ? Ro(w) : yn("GSAP target " + e + " not found. https://gsap.com", !Me.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, _ || c || Rn(u) || Rn(f)) {
      if (r = a.vars, v = a.timeline = new ce({
        data: "nested",
        defaults: d || {},
        targets: x && x.data === "nested" ? x.vars.targets : w
      }), v.kill(), v.parent = v._dp = fi(a), v._start = 0, c || Rn(u) || Rn(f)) {
        if (S = w.length, E = c && bl(c), si(c))
          for (P in c)
            ~Fl.indexOf(P) && (R || (R = {}), R[P] = c[P]);
        for (T = 0; T < S; T++)
          C = ss(r, Bl), C.stagger = 0, y && (C.yoyoEase = y), R && Rr(C, R), k = w[T], C.duration = +nn(u, fi(a), T, k, w), C.delay = (+nn(f, fi(a), T, k, w) || 0) - a._delay, !c && S === 1 && C.delay && (a._delay = f = C.delay, a._start += f, C.delay = 0), v.to(k, C, E ? E(T, k, w) : 0), v._ease = et.none;
        v.duration() ? u = f = 0 : a.timeline = 0;
      } else if (_) {
        en(Re(v.vars.defaults, {
          ease: "none"
        })), v._ease = Ji(_.ease || r.ease || "none");
        var O = 0, Y, I, D;
        if (se(_))
          _.forEach(function($) {
            return v.to(w, $, ">");
          }), v.duration();
        else {
          C = {};
          for (P in _)
            P === "ease" || P === "easeEach" || Cf(P, _[P], C, _.easeEach);
          for (P in C)
            for (Y = C[P].sort(function($, V) {
              return $.t - V.t;
            }), O = 0, T = 0; T < Y.length; T++)
              I = Y[T], D = {
                ease: I.e,
                duration: (I.t - (T ? Y[T - 1].t : 0)) / 100 * u
              }, D[P] = I.v, v.to(w, D, O), O += D.duration;
          v.duration() < u && v.to({}, {
            duration: u - v.duration()
          });
        }
      }
      u || a.duration(u = v.duration());
    } else
      a.timeline = 0;
    return h === !0 && !ko && (ki = fi(a), bt.killTweensOf(w), ki = 0), ei(x, fi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (p || !u && !_ && a._start === xt(x._time) && ge(p) && nf(fi(a)) && x.data !== "nested") && (a._tTime = -ct, a.render(Math.max(0, -f) || 0)), g && yl(fi(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, s) {
    var a = this._time, l = this._tDur, u = this._dur, f = r < 0, p = r > l - ct && !f ? l : r < ct ? 0 : r, c, h, _, d, g, y, x, w, v;
    if (!u)
      of(this, r, n, s);
    else if (p !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (c = p, w = this.timeline, this._repeat) {
        if (d = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(d * 100 + r, n, s);
        if (c = xt(p % d), p === l ? (_ = this._repeat, c = u) : (g = xt(p / d), _ = ~~g, _ && _ === g ? (c = u, _--) : c > u && (c = u)), y = this._yoyo && _ & 1, y && (v = this._yEase, c = u - c), g = Ar(this._tTime, d), c === a && !s && this._initted && _ === g)
          return this._tTime = p, this;
        _ !== g && (w && this._yEase && Al(w, y), this.vars.repeatRefresh && !y && !this._lock && c !== d && this._initted && (this._lock = s = 1, this.render(xt(d * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (vl(this, f ? r : c, s, n, p))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
          return this;
        if (u !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = p, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (v || this._ease)(c / u), this._from && (this.ratio = x = 1 - x), !a && p && !n && !g && (Pe(this, "onStart"), this._tTime !== p))
        return this;
      for (h = this._pt; h; )
        h.r(x, h.d), h = h._next;
      w && w.render(r < 0 ? r : w._dur * w._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && Qs(this, r, n, s), Pe(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && Pe(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (f && !this._onUpdate && Qs(this, r, !0, !0), (r || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Ai(this, 1), !n && !(f && !a) && (p || a || y) && (Pe(this, p === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, s, a, l) {
    xn || Ee.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || zo(this, u), f = this._ease(u / this._dur), kf(this, r, n, s, a, f, u, l) ? this.resetTo(r, n, s, a, 1) : (ws(this, 0), this.parent || gl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ur(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Kt), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, ki && ki.vars.overwrite !== !0)._first || Ur(this), this.parent && s !== this.timeline.totalDuration() && Lr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, l = r ? Be(r) : a, u = this._ptLookup, f = this._pt, p, c, h, _, d, g, y;
    if ((!n || n === "all") && ef(a, l))
      return n === "all" && (this._pt = 0), Ur(this);
    for (p = this._op = this._op || [], n !== "all" && (Ht(n) && (d = {}, me(n, function(x) {
      return d[x] = 1;
    }), n = d), n = Ef(a, n)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        c = u[y], n === "all" ? (p[y] = n, _ = c, h = {}) : (h = p[y] = p[y] || {}, _ = n);
        for (d in _)
          g = c && c[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && ys(this, g, "_pt"), delete c[d]), h !== "all" && (h[d] = 1);
      }
    return this._initted && !this._pt && f && Ur(this), this;
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
    var t = new ce(), i = eo.call(arguments, 0);
    return i.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, i);
  };
});
var Io = function(t, i, e) {
  return t[i] = e;
}, Nl = function(t, i, e) {
  return t[i](e);
}, Pf = function(t, i, e, r) {
  return t[i](r.fp, e);
}, Of = function(t, i, e) {
  return t.setAttribute(i, e);
}, Fo = function(t, i) {
  return kt(t[i]) ? Nl : Eo(t[i]) && t.setAttribute ? Of : Io;
}, Yl = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, Mf = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, Vl = function(t, i) {
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
}, Bo = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, Df = function(t, i, e, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, i, e), n = s;
}, Rf = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? ys(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, Af = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, Xl = function(t) {
  for (var i = t._pt, e, r, n, s; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : s) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : s = i, i = e;
  }
  t._pt = n;
}, ye = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a, l, u, f) {
    this.t = e, this.s = n, this.c = s, this.p = r, this.r = a || Yl, this.d = l || this, this.set = u || Io, this.pr = f || 0, this._next = i, i && (i._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = Af, this.m = e, this.mt = n, this.tween = r;
  }, o;
}();
me(Do + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Mo[o] = 1;
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
Me.stringFilter = Dl;
var Qi = [], jn = {}, Lf = [], da = 0, zf = 0, Ds = function(t) {
  return (jn[t] || Lf).map(function(i) {
    return i();
  });
}, so = function() {
  var t = Date.now(), i = [];
  t - da > 2 && (Ds("matchMediaInit"), Qi.forEach(function(e) {
    var r = e.queries, n = e.conditions, s, a, l, u;
    for (a in r)
      s = Qe.matchMedia(r[a]).matches, s && (l = 1), s !== n[a] && (n[a] = s, u = 1);
    u && (e.revert(), l && i.push(e));
  }), Ds("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), da = t, Ds("matchMedia"));
}, Wl = /* @__PURE__ */ function() {
  function o(i, e) {
    this.selector = e && io(e), this.data = [], this._r = [], this.isReverted = !1, this.id = zf++, i && this.add(i);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    kt(e) && (n = r, r = e, e = kt);
    var s = this, a = function() {
      var u = vt, f = s.selector, p;
      return u && u !== s && u.data.push(s), n && (s.selector = io(n)), vt = s, p = r.apply(s, arguments), kt(p) && s._r.push(p), vt = u, s.selector = f, s.isReverted = !1, p;
    };
    return s.last = a, e === kt ? a(s, function(l) {
      return s.add(null, l);
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
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
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
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof ce ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Lt) && u.revert && u.revert(e);
      n._r.forEach(function(f) {
        return f(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Qi.length; s--; )
        Qi[s].id === this.id && Qi.splice(s, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, o;
}(), If = /* @__PURE__ */ function() {
  function o(i) {
    this.contexts = [], this.scope = i, vt && vt.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    si(e) || (e = {
      matches: e
    });
    var s = new Wl(0, n || this.scope), a = s.conditions = {}, l, u, f;
    vt && !s.selector && (s.selector = vt.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = e;
    for (u in e)
      u === "all" ? f = 1 : (l = Qe.matchMedia(e[u]), l && (Qi.indexOf(s) < 0 && Qi.push(s), (a[u] = l.matches) && (f = 1), l.addListener ? l.addListener(so) : l.addEventListener("change", so)));
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
}(), as = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return Pl(r);
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
    var n = Zi(t || {}).get, s = e ? _l : dl;
    return e === "native" && (e = ""), t && (i ? s((Se[i] && Se[i].get || n)(t, i, e, r)) : function(a, l, u) {
      return s((Se[a] && Se[a].get || n)(t, a, l, u));
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
    var s = Se[i], a = Zi(t), l = a.harness && (a.harness.aliases || {})[i] || i, u = s ? function(f) {
      var p = new s();
      vr._pt = 0, p.init(t, e ? f + e : f, vr, 0, [t]), p.render(1, p), vr._pt && Bo(1, vr);
    } : a.set(t, l);
    return s ? u : function(f) {
      return u(t, l, e ? f + e : f, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = we.to(t, Re((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), s = function(l, u, f) {
      return n.resetTo(i, l, u, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return bt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ji(t.ease, Dr.ease)), ua(Dr, t || {});
  },
  config: function(t) {
    return ua(Me, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !Se[a] && !De[a] && yn(i + " effect requires " + a + " plugin.");
    }), Cs[i] = function(a, l, u) {
      return e(Be(a), Re(l || {}, n), u);
    }, s && (ce.prototype[i] = function(a, l, u) {
      return this.add(Cs[i](a, si(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, i) {
    et[t] = Ji(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? Ji(t, i) : et;
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
    return t ? new Wl(t, i) : vt;
  },
  matchMedia: function(t) {
    return new If(t);
  },
  matchMediaRefresh: function() {
    return Qi.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || so();
  },
  addEventListener: function(t, i) {
    var e = jn[t] || (jn[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = jn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: df,
    wrapYoyo: _f,
    distribute: bl,
    random: Sl,
    snap: Tl,
    normalize: pf,
    getUnit: re,
    clamp: uf,
    splitColor: Ol,
    toArray: Be,
    selector: io,
    mapRange: El,
    pipe: hf,
    unitize: cf,
    interpolate: gf,
    shuffle: xl
  },
  install: ul,
  effects: Cs,
  ticker: Ee,
  updateRoot: ce.updateRoot,
  plugins: Se,
  globalTimeline: bt,
  core: {
    PropTween: ye,
    globals: fl,
    Tween: Lt,
    Timeline: ce,
    Animation: bn,
    getCache: Zi,
    _removeLinkedListItem: ys,
    reverting: function() {
      return Kt;
    },
    context: function(t) {
      return t && vt && (vt.data.push(t), t._ctx = vt), vt;
    },
    suppressOverwrites: function(t) {
      return ko = t;
    }
  }
};
me("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return as[o] = Lt[o];
});
Ee.add(ce.updateRoot);
vr = as.to({}, {
  duration: 0
});
var Ff = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, Bf = function(t, i) {
  var e = t._targets, r, n, s;
  for (r in i)
    for (n = e.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Ff(s, r)), s && s.modifier && s.modifier(i[r], t, e[n], r));
}, Rs = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var l, u;
        if (Ht(n) && (l = {}, me(n, function(f) {
          return l[f] = 1;
        }), n = l), i) {
          l = {};
          for (u in n)
            l[u] = i(n[u]);
          n = l;
        }
        Bf(a, n);
      };
    }
  };
}, we = as.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var s, a, l;
    this.tween = e;
    for (s in i)
      l = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (l || 0) + "", i[s], r, n, 0, 0, s), a.op = s, a.b = l, this._props.push(s);
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
}, Rs("roundProps", ro), Rs("modifiers"), Rs("snap", Tl)) || as;
Lt.version = ce.version = we.version = "3.14.2";
ll = 1;
Co() && zr();
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
var _a, Ei, kr, No, Gi, ga, Yo, Nf = function() {
  return typeof window < "u";
}, yi = {}, $i = 180 / Math.PI, Er = Math.PI / 180, pr = Math.atan2, ma = 1e8, Vo = /([A-Z])/g, Yf = /(left|right|width|margin|padding|x)/i, Vf = /[\s,\(]\S/, ii = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, oo = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Xf = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Wf = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Hf = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, $f = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, Hl = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, $l = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, qf = function(t, i, e) {
  return t.style[i] = e;
}, Uf = function(t, i, e) {
  return t.style.setProperty(i, e);
}, Gf = function(t, i, e) {
  return t._gsap[i] = e;
}, jf = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Zf = function(t, i, e, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = e, s.renderTransform(n, s);
}, Kf = function(t, i, e, r, n) {
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
}, Qf = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Vo, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = Yo(), (!n || !n.isStart) && !e[Tt] && (ql(e), r.zOrigin && e[ve] && (e[ve] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Ul = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: Qf,
    save: Jf
  };
  return t._gsap || we.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, Gl, ao = function(t, i) {
  var e = Ei.createElementNS ? Ei.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ei.createElement(t);
  return e && e.style ? e : Ei.createElement(t);
}, Oe = function o(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(Vo, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && o(t, Ir(i) || i, 1) || "";
}, ya = "O,Moz,ms,Ms,Webkit".split(","), Ir = function(t, i, e) {
  var r = i || Gi, n = r.style, s = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(ya[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ya[s] : "") + t;
}, lo = function() {
  Nf() && window.document && (_a = window, Ei = _a.document, kr = Ei.documentElement, Gi = ao("div") || {
    style: {}
  }, ao("div"), Tt = Ir(Tt), ve = Tt + "Origin", Gi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Gl = !!Ir("perspective"), Yo = we.core.reverting, No = 1);
}, va = function(t) {
  var i = t.ownerSVGElement, e = ao("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), kr.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), kr.removeChild(e), n;
}, wa = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, jl = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = va(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = va(t)), i && !i.width && !i.x && !i.y ? {
    x: +wa(t, ["x", "cx", "x1"]) || 0,
    y: +wa(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Zl = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && jl(t));
}, Li = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in yi && i !== ve && (i = Tt), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Vo, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, Ci = function(t, i, e, r, n, s) {
  var a = new ye(t._pt, i, e, 0, 1, s ? $l : Hl);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, xa = {
  deg: 1,
  rad: 1,
  turn: 1
}, th = {
  grid: 1,
  flex: 1
}, zi = function o(t, i, e, r) {
  var n = parseFloat(e) || 0, s = (e + "").trim().substr((n + "").length) || "px", a = Gi.style, l = Yf.test(i), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), p = 100, c = r === "px", h = r === "%", _, d, g, y;
  if (r === s || !n || xa[r] || xa[s])
    return n;
  if (s !== "px" && !c && (n = o(t, i, e, "px")), y = t.getCTM && Zl(t), (h || s === "%") && (yi[i] || ~i.indexOf("adius")))
    return _ = y ? t.getBBox()[l ? "width" : "height"] : t[f], Pt(h ? n / _ * p : n / 100 * _);
  if (a[l ? "width" : "height"] = p + (c ? s : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, y && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === Ei || !d.appendChild) && (d = Ei.body), g = d._gsap, g && h && g.width && l && g.time === Ee.time && !g.uncache)
    return Pt(n / g.width * p);
  if (h && (i === "height" || i === "width")) {
    var x = t.style[i];
    t.style[i] = p + r, _ = t[f], x ? t.style[i] = x : Li(t, i);
  } else
    (h || s === "%") && !th[Oe(d, "display")] && (a.position = Oe(t, "position")), d === t && (a.position = "static"), d.appendChild(Gi), _ = Gi[f], d.removeChild(Gi), a.position = "absolute";
  return l && h && (g = Zi(d), g.time = Ee.time, g.width = d[f]), Pt(c ? _ * n / p : _ && n ? p / _ * n : 0);
}, hi = function(t, i, e, r) {
  var n;
  return No || lo(), i in ii && i !== "transform" && (i = ii[i], ~i.indexOf(",") && (i = i.split(",")[0])), yi[i] && i !== "transform" ? (n = Sn(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : us(Oe(t, ve)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = ls[i] && ls[i](t, i, e) || Oe(t, i) || cl(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? zi(t, i, n, e) + e : n;
}, eh = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = Ir(i, t, 1), s = n && Oe(t, n, 1);
    s && s !== e ? (i = n, e = s) : i === "borderColor" && (e = Oe(t, "borderTopColor"));
  }
  var a = new ye(this._pt, t.style, i, 0, 1, Vl), l = 0, u = 0, f, p, c, h, _, d, g, y, x, w, v, T;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Oe(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = Oe(t, i) || r, d ? t.style[i] = d : Li(t, i)), f = [e, r], Dl(f), e = f[0], r = f[1], c = e.match(yr) || [], T = r.match(yr) || [], T.length) {
    for (; p = yr.exec(r); )
      g = p[0], x = r.substring(l, p.index), _ ? _ = (_ + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (_ = 1), g !== (d = c[u++] || "") && (h = parseFloat(d) || 0, v = d.substr((h + "").length), g.charAt(1) === "=" && (g = Sr(h, g) + v), y = parseFloat(g), w = g.substr((y + "").length), l = yr.lastIndex - w.length, w || (w = w || Me.units[i] || v, l === r.length && (r += w, a.e += w)), v !== w && (h = zi(t, i, d, w) || 0), a._pt = {
        _next: a._pt,
        p: x || u === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: h,
        c: y - h,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = l < r.length ? r.substring(l, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? $l : Hl;
  return al.test(r) && (a.e = 0), this._pt = a, a;
}, ba = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ih = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = ba[e] || e, i[1] = ba[r] || r, i.join(" ");
}, rh = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, s = e._gsap, a, l, u;
    if (n === "all" || n === !0)
      r.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], yi[a] && (l = 1, a = a === "transformOrigin" ? ve : Tt), Li(e, a);
    l && (Li(e, Tt), s && (s.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Sn(e, 1), s.uncache = 1, ql(r)));
  }
}, ls = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new ye(t._pt, i, e, 0, 0, rh);
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
}, Tn = [1, 0, 0, 1, 0, 0], Kl = {}, Jl = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ta = function(t) {
  var i = Oe(t, Tt);
  return Jl(i) ? Tn : i.substr(7).match(ol).map(Pt);
}, Xo = function(t, i) {
  var e = t._gsap || Zi(t), r = t.style, n = Ta(t), s, a, l, u;
  return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? Tn : n) : (n === Tn && !t.offsetParent && t !== kr && !e.svg && (l = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, kr.appendChild(t)), n = Ta(t), l ? r.display = l : Li(t, "display"), u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : kr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, uo = function(t, i, e, r, n, s) {
  var a = t._gsap, l = n || Xo(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, p = a.xOffset || 0, c = a.yOffset || 0, h = l[0], _ = l[1], d = l[2], g = l[3], y = l[4], x = l[5], w = i.split(" "), v = parseFloat(w[0]) || 0, T = parseFloat(w[1]) || 0, C, S, P, k;
  e ? l !== Tn && (S = h * g - _ * d) && (P = v * (g / S) + T * (-d / S) + (d * x - g * y) / S, k = v * (-_ / S) + T * (h / S) - (h * x - _ * y) / S, v = P, T = k) : (C = jl(t), v = C.x + (~w[0].indexOf("%") ? v / 100 * C.width : v), T = C.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * C.height : T)), r || r !== !1 && a.smooth ? (y = v - u, x = T - f, a.xOffset = p + (y * h + x * d) - y, a.yOffset = c + (y * _ + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = T, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[ve] = "0px 0px", s && (Ci(s, a, "xOrigin", u, v), Ci(s, a, "yOrigin", f, T), Ci(s, a, "xOffset", p, a.xOffset), Ci(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + T);
}, Sn = function(t, i) {
  var e = t._gsap || new zl(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(t), u = Oe(t, ve) || "0", f, p, c, h, _, d, g, y, x, w, v, T, C, S, P, k, E, R, O, Y, I, D, $, V, it, at, m, rt, lt, de, nt, q;
  return f = p = c = d = g = y = x = w = v = 0, h = _ = 1, e.svg = !!(t.getCTM && Zl(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[Tt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Tt] !== "none" ? l[Tt] : "")), r.scale = r.rotate = r.translate = "none"), S = Xo(t, e.svg), e.svg && (e.uncache ? (it = t.getBBox(), u = e.xOrigin - it.x + "px " + (e.yOrigin - it.y) + "px", V = "") : V = !i && t.getAttribute("data-svg-origin"), uo(t, V || u, !!V || e.originIsAbsolute, e.smooth !== !1, S)), T = e.xOrigin || 0, C = e.yOrigin || 0, S !== Tn && (R = S[0], O = S[1], Y = S[2], I = S[3], f = D = S[4], p = $ = S[5], S.length === 6 ? (h = Math.sqrt(R * R + O * O), _ = Math.sqrt(I * I + Y * Y), d = R || O ? pr(O, R) * $i : 0, x = Y || I ? pr(Y, I) * $i + d : 0, x && (_ *= Math.abs(Math.cos(x * Er))), e.svg && (f -= T - (T * R + C * Y), p -= C - (T * O + C * I))) : (q = S[6], de = S[7], m = S[8], rt = S[9], lt = S[10], nt = S[11], f = S[12], p = S[13], c = S[14], P = pr(q, lt), g = P * $i, P && (k = Math.cos(-P), E = Math.sin(-P), V = D * k + m * E, it = $ * k + rt * E, at = q * k + lt * E, m = D * -E + m * k, rt = $ * -E + rt * k, lt = q * -E + lt * k, nt = de * -E + nt * k, D = V, $ = it, q = at), P = pr(-Y, lt), y = P * $i, P && (k = Math.cos(-P), E = Math.sin(-P), V = R * k - m * E, it = O * k - rt * E, at = Y * k - lt * E, nt = I * E + nt * k, R = V, O = it, Y = at), P = pr(O, R), d = P * $i, P && (k = Math.cos(P), E = Math.sin(P), V = R * k + O * E, it = D * k + $ * E, O = O * k - R * E, $ = $ * k - D * E, R = V, D = it), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, y = 180 - y), h = Pt(Math.sqrt(R * R + O * O + Y * Y)), _ = Pt(Math.sqrt($ * $ + q * q)), P = pr(D, $), x = Math.abs(P) > 2e-4 ? P * $i : 0, v = nt ? 1 / (nt < 0 ? -nt : nt) : 0), e.svg && (V = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Jl(Oe(t, Tt)), V && t.setAttribute("transform", V))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (h *= -1, x += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, x += x <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + s, e.y = p - ((e.yPercent = p && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + s, e.z = c + s, e.scaleX = Pt(h), e.scaleY = Pt(_), e.rotation = Pt(d) + a, e.rotationX = Pt(g) + a, e.rotationY = Pt(y) + a, e.skewX = x + a, e.skewY = w + a, e.transformPerspective = v + s, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[ve] = us(u)), e.xOffset = e.yOffset = 0, e.force3D = Me.force3D, e.renderTransform = e.svg ? sh : Gl ? Ql : nh, e.uncache = 0, e;
}, us = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, As = function(t, i, e) {
  var r = re(i);
  return Pt(parseFloat(i) + parseFloat(zi(t, "x", e + "px", r))) + r;
}, nh = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Ql(t, i);
}, Wi = "0deg", Hr = "0px", Hi = ") ", Ql = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, l = e.z, u = e.rotation, f = e.rotationY, p = e.rotationX, c = e.skewX, h = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective, y = e.force3D, x = e.target, w = e.zOrigin, v = "", T = y === "auto" && t && t !== 1 || y === !0;
  if (w && (p !== Wi || f !== Wi)) {
    var C = parseFloat(f) * Er, S = Math.sin(C), P = Math.cos(C), k;
    C = parseFloat(p) * Er, k = Math.cos(C), s = As(x, s, S * k * -w), a = As(x, a, -Math.sin(C) * -w), l = As(x, l, P * k * -w + w);
  }
  g !== Hr && (v += "perspective(" + g + Hi), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (T || s !== Hr || a !== Hr || l !== Hr) && (v += l !== Hr || T ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + Hi), u !== Wi && (v += "rotate(" + u + Hi), f !== Wi && (v += "rotateY(" + f + Hi), p !== Wi && (v += "rotateX(" + p + Hi), (c !== Wi || h !== Wi) && (v += "skew(" + c + ", " + h + Hi), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Hi), x.style[Tt] = v || "translate(0, 0)";
}, sh = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, l = e.rotation, u = e.skewX, f = e.skewY, p = e.scaleX, c = e.scaleY, h = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, y = e.yOffset, x = e.forceCSS, w = parseFloat(s), v = parseFloat(a), T, C, S, P, k;
  l = parseFloat(l), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, l += f), l || u ? (l *= Er, u *= Er, T = Math.cos(l) * p, C = Math.sin(l) * p, S = Math.sin(l - u) * -c, P = Math.cos(l - u) * c, u && (f *= Er, k = Math.tan(u - f), k = Math.sqrt(1 + k * k), S *= k, P *= k, f && (k = Math.tan(f), k = Math.sqrt(1 + k * k), T *= k, C *= k)), T = Pt(T), C = Pt(C), S = Pt(S), P = Pt(P)) : (T = p, P = c, C = S = 0), (w && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (w = zi(h, "x", s, "px"), v = zi(h, "y", a, "px")), (_ || d || g || y) && (w = Pt(w + _ - (_ * T + d * S) + g), v = Pt(v + d - (_ * C + d * P) + y)), (r || n) && (k = h.getBBox(), w = Pt(w + r / 100 * k.width), v = Pt(v + n / 100 * k.height)), k = "matrix(" + T + "," + C + "," + S + "," + P + "," + w + "," + v + ")", h.setAttribute("transform", k), x && (h.style[Tt] = k);
}, oh = function(t, i, e, r, n) {
  var s = 360, a = Ht(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? $i : 1), u = l - r, f = r + u + "deg", p, c;
  return a && (p = n.split("_")[1], p === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), p === "cw" && u < 0 ? u = (u + s * ma) % s - ~~(u / s) * s : p === "ccw" && u > 0 && (u = (u - s * ma) % s - ~~(u / s) * s)), t._pt = c = new ye(t._pt, i, e, r, u, Xf), c.e = f, c.u = "deg", t._props.push(e), c;
}, Sa = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, ah = function(t, i, e) {
  var r = Sa({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = e.style, a, l, u, f, p, c, h, _;
  r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), s[Tt] = i, a = Sn(e, 1), Li(e, Tt), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[Tt], s[Tt] = i, a = Sn(e, 1), s[Tt] = u);
  for (l in yi)
    u = r[l], f = a[l], u !== f && n.indexOf(l) < 0 && (h = re(u), _ = re(f), p = h !== _ ? zi(e, l, u, _) : parseFloat(u), c = parseFloat(f), t._pt = new ye(t._pt, a, l, p, c - p, oo), t._pt.u = _ || 0, t._props.push(l));
  Sa(a, r);
};
me("padding,margin,Width,Radius", function(o, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  ls[t > 1 ? "border" + o : o] = function(a, l, u, f, p) {
    var c, h;
    if (arguments.length < 4)
      return c = s.map(function(_) {
        return hi(a, _, u);
      }), h = c.join(" "), h.split(c[0]).length === 5 ? c[0] : h;
    c = (f + "").split(" "), h = {}, s.forEach(function(_, d) {
      return h[_] = c[d] = c[d] || c[(d - 1) / 2 | 0];
    }), a.init(l, h, p);
  };
});
var tu = {
  name: "css",
  register: lo,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var s = this._props, a = t.style, l = e.vars.startAt, u, f, p, c, h, _, d, g, y, x, w, v, T, C, S, P, k;
    No || lo(), this.styles = this.styles || Ul(t), P = this.styles.props, this.tween = e;
    for (d in i)
      if (d !== "autoRound" && (f = i[d], !(Se[d] && Il(d, i, e, r, t, n)))) {
        if (h = typeof f, _ = ls[d], h === "function" && (f = f.call(e, r, t, n), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = wn(f)), _)
          _(this, t, d, f, e) && (S = 1);
        else if (d.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(d) + "").trim(), f += "", Di.lastIndex = 0, Di.test(u) || (g = re(u), y = re(f), y ? g !== y && (u = zi(t, d, u, y) + y) : g && (f += g)), this.add(a, "setProperty", u, f, r, n, 0, 0, d), s.push(d), P.push(d, 0, a[d]);
        else if (h !== "undefined") {
          if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(e, r, t, n) : l[d], Ht(u) && ~u.indexOf("random(") && (u = wn(u)), re(u + "") || u === "auto" || (u += Me.units[d] || re(hi(t, d)) || ""), (u + "").charAt(1) === "=" && (u = hi(t, d))) : u = hi(t, d), c = parseFloat(u), x = h === "string" && f.charAt(1) === "=" && f.substr(0, 2), x && (f = f.substr(2)), p = parseFloat(f), d in ii && (d === "autoAlpha" && (c === 1 && hi(t, "visibility") === "hidden" && p && (c = 0), P.push("visibility", 0, a.visibility), Ci(this, a, "visibility", c ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = ii[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in yi, w) {
            if (this.styles.save(d), k = f, h === "string" && f.substring(0, 6) === "var(--") {
              if (f = Oe(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = f, f = Oe(t, "perspective"), E ? t.style.perspective = E : Li(t, "perspective");
              }
              p = parseFloat(f);
            }
            if (v || (T = t._gsap, T.renderTransform && !i.parseTransform || Sn(t, i.parseTransform), C = i.smoothOrigin !== !1 && T.smooth, v = this._pt = new ye(this._pt, a, Tt, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), d === "scale")
              this._pt = new ye(this._pt, T, "scaleY", T.scaleY, (x ? Sr(T.scaleY, x + p) : p) - T.scaleY || 0, oo), this._pt.u = 0, s.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              P.push(ve, 0, a[ve]), f = ih(f), T.svg ? uo(t, f, 0, C, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== T.zOrigin && Ci(this, T, "zOrigin", T.zOrigin, y), Ci(this, a, d, us(u), us(f)));
              continue;
            } else if (d === "svgOrigin") {
              uo(t, f, 1, C, 0, this);
              continue;
            } else if (d in Kl) {
              oh(this, T, d, c, x ? Sr(c, x + f) : f);
              continue;
            } else if (d === "smoothOrigin") {
              Ci(this, T, "smooth", T.smooth, f);
              continue;
            } else if (d === "force3D") {
              T[d] = f;
              continue;
            } else if (d === "transform") {
              ah(this, f, t);
              continue;
            }
          } else d in a || (d = Ir(d) || d);
          if (w || (p || p === 0) && (c || c === 0) && !Vf.test(f) && d in a)
            g = (u + "").substr((c + "").length), p || (p = 0), y = re(f) || (d in Me.units ? Me.units[d] : g), g !== y && (c = zi(t, d, u, y)), this._pt = new ye(this._pt, w ? T : a, d, c, (x ? Sr(c, x + p) : p) - c, !w && (y === "px" || d === "zIndex") && i.autoRound !== !1 ? $f : oo), this._pt.u = y || 0, w && k !== f ? (this._pt.b = u, this._pt.e = k, this._pt.r = Hf) : g !== y && y !== "%" && (this._pt.b = u, this._pt.r = Wf);
          else if (d in a)
            eh.call(this, t, d, u, x ? x + f : f);
          else if (d in t)
            this.add(t, d, u || t[d], x ? x + f : f, r, n);
          else if (d !== "parseTransform") {
            Oo(d, f);
            continue;
          }
          w || (d in a ? P.push(d, 0, a[d]) : typeof t[d] == "function" ? P.push(d, 2, t[d]()) : P.push(d, 1, u || t[d])), s.push(d);
        }
      }
    S && Xl(this);
  },
  render: function(t, i) {
    if (i.tween._time || !Yo())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: hi,
  aliases: ii,
  getSetter: function(t, i, e) {
    var r = ii[i];
    return r && r.indexOf(",") < 0 && (i = r), i in yi && i !== ve && (t._gsap.x || hi(t, "x")) ? e && ga === e ? i === "scale" ? jf : Gf : (ga = e || {}) && (i === "scale" ? Zf : Kf) : t.style && !Eo(t.style[i]) ? qf : ~i.indexOf("-") ? Uf : Fo(t, i);
  },
  core: {
    _removeProperty: Li,
    _getMatrix: Xo
  }
};
we.utils.checkPrefix = Ir;
we.core.getStyleSaver = Ul;
(function(o, t, i, e) {
  var r = me(o + "," + t + "," + i, function(n) {
    yi[n] = 1;
  });
  me(t, function(n) {
    Me.units[n] = "deg", Kl[n] = 1;
  }), ii[r[13]] = o + "," + t, me(e, function(n) {
    var s = n.split(":");
    ii[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
me("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  Me.units[o] = "px";
});
we.registerPlugin(tu);
var wr = we.registerPlugin(tu) || we;
wr.core.Tween;
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var pi, tr, Wo, xs, jr, Zn, fs, sn, Ue = "transform", fo = Ue + "Origin", eu, Ho = function(t) {
  var i = t.ownerDocument || t;
  for (!(Ue in t.style) && ("msTransform" in t.style) && (Ue = "msTransform", fo = Ue + "Origin"); i.parentNode && (i = i.parentNode); )
    ;
  if (tr = window, fs = new nr(), i) {
    pi = i, Wo = i.documentElement, xs = i.body, sn = pi.createElementNS("http://www.w3.org/2000/svg", "g"), sn.style.transform = "none";
    var e = i.createElement("div"), r = i.createElement("div"), n = i && (i.body || i.firstElementChild);
    n && n.appendChild && (n.appendChild(e), e.appendChild(r), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", eu = r.offsetParent !== e, n.removeChild(e));
  }
  return i;
}, lh = function(t) {
  for (var i, e; t && t !== xs; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), i ? i.push(e) : i = [e]), t = t.parentNode;
  return i;
}, iu = [], ru = [], $o = function() {
  return tr.pageYOffset || pi.scrollTop || Wo.scrollTop || xs.scrollTop || 0;
}, qo = function() {
  return tr.pageXOffset || pi.scrollLeft || Wo.scrollLeft || xs.scrollLeft || 0;
}, Uo = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, uh = function o(t) {
  if (tr.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return o(t);
}, Ls = function o(t, i) {
  if (t.parentNode && (pi || Ho(t))) {
    var e = Uo(t), r = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = e ? i ? "rect" : "g" : "div", s = i !== 2 ? 0 : 100, a = i === 3 ? 100 : 0, l = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, u = pi.createElementNS ? pi.createElementNS(r.replace(/^https/, "http"), n) : pi.createElement(n);
    return i && (e ? (Zn || (Zn = o(t)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + s + "," + a + ")"), u.setAttribute("fill", "transparent"), Zn.appendChild(u)) : (jr || (jr = o(t), Object.assign(jr.style, l)), Object.assign(u.style, l, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: s + "px"
    }), jr.appendChild(u))), u;
  }
  throw "Need document and parent.";
}, fh = function(t) {
  for (var i = new nr(), e = 0; e < t.numberOfItems; e++)
    i.multiply(t.getItem(e).matrix);
  return i;
}, nu = function(t) {
  var i = t.getCTM(), e;
  return i || (e = t.style[Ue], t.style[Ue] = "none", t.appendChild(sn), i = sn.getCTM(), t.removeChild(sn), e ? t.style[Ue] = e : t.style.removeProperty(Ue.replace(/([A-Z])/g, "-$1").toLowerCase())), i || fs.clone();
}, hh = function(t, i) {
  var e = Uo(t), r = t === e, n = e ? iu : ru, s = t.parentNode, a = s && !e && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, l, u, f, p, c, h;
  if (t === tr)
    return t;
  if (n.length || n.push(Ls(t, 1), Ls(t, 2), Ls(t, 3)), l = e ? Zn : jr, e)
    r ? (f = nu(t), p = -f.e / f.a, c = -f.f / f.d, u = fs) : t.getBBox ? (f = t.getBBox(), u = t.transform ? t.transform.baseVal : {}, u = u.numberOfItems ? u.numberOfItems > 1 ? fh(u) : u.getItem(0).matrix : fs, p = u.a * f.x + u.c * f.y, c = u.b * f.x + u.d * f.y) : (u = new nr(), p = c = 0), i && t.tagName.toLowerCase() === "g" && (p = c = 0), (r || !t.getBoundingClientRect().width ? e : s).appendChild(l), l.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + p) + "," + (u.f + c) + ")");
  else {
    if (p = c = 0, eu)
      for (u = t.offsetParent, f = t; f && (f = f.parentNode) && f !== u && f.parentNode; )
        (tr.getComputedStyle(f)[Ue] + "").length > 4 && (p = f.offsetLeft, c = f.offsetTop, f = 0);
    if (h = tr.getComputedStyle(t), h.position !== "absolute" && h.position !== "fixed")
      for (u = t.offsetParent; s && s !== u; )
        p += s.scrollLeft || 0, c += s.scrollTop || 0, s = s.parentNode;
    f = l.style, f.top = t.offsetTop - c + "px", f.left = t.offsetLeft - p + "px", f[Ue] = h[Ue], f[fo] = h[fo], f.position = h.position === "fixed" ? "fixed" : "absolute", a.appendChild(l);
  }
  return l;
}, zs = function(t, i, e, r, n, s, a) {
  return t.a = i, t.b = e, t.c = r, t.d = n, t.e = s, t.f = a, t;
}, nr = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a) {
    i === void 0 && (i = 1), e === void 0 && (e = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), zs(this, i, e, r, n, s, a);
  }
  var t = o.prototype;
  return t.inverse = function() {
    var e = this.a, r = this.b, n = this.c, s = this.d, a = this.e, l = this.f, u = e * s - r * n || 1e-10;
    return zs(this, s / u, -r / u, -n / u, e / u, (n * l - s * a) / u, -(e * l - r * a) / u);
  }, t.multiply = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, l = this.e, u = this.f, f = e.a, p = e.c, c = e.b, h = e.d, _ = e.e, d = e.f;
    return zs(this, f * r + c * s, f * n + c * a, p * r + h * s, p * n + h * a, l + _ * r + d * s, u + _ * n + d * a);
  }, t.clone = function() {
    return new o(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, l = this.e, u = this.f;
    return r === e.a && n === e.b && s === e.c && a === e.d && l === e.e && u === e.f;
  }, t.apply = function(e, r) {
    r === void 0 && (r = {});
    var n = e.x, s = e.y, a = this.a, l = this.b, u = this.c, f = this.d, p = this.e, c = this.f;
    return r.x = n * a + s * u + p || 0, r.y = n * l + s * f + c || 0, r;
  }, o;
}();
function oi(o, t, i, e) {
  if (!o || !o.parentNode || (pi || Ho(o)).documentElement === o)
    return new nr();
  var r = lh(o), n = Uo(o), s = n ? iu : ru, a = hh(o, i), l = s[0].getBoundingClientRect(), u = s[1].getBoundingClientRect(), f = s[2].getBoundingClientRect(), p = a.parentNode, c = !e && uh(o), h = new nr((u.left - l.left) / 100, (u.top - l.top) / 100, (f.left - l.left) / 100, (f.top - l.top) / 100, l.left + (c ? 0 : qo()), l.top + (c ? 0 : $o()));
  if (p.removeChild(a), r)
    for (l = r.length; l--; )
      u = r[l], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
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
var ch = 1, Fr, jt, mt, on, Si, di, ho, ka = function(t, i) {
  return t.actions.forEach(function(e) {
    return e.vars[i] && e.vars[i](e);
  });
}, co = {}, Ea = 180 / Math.PI, ph = Math.PI / 180, hs = {}, Ca = {}, bs = {}, Go = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, dh = Go("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ts = Go("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), an = function(t) {
  return Fr(t)[0] || console.warn("Element not found:", t);
}, xr = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, Is = function(t, i, e) {
  return t.forEach(function(r) {
    return r.classList[e](i);
  });
}, Pa = {
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
}, su = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, ou = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, br = function(t, i) {
  var e = {}, r;
  for (r in t)
    i[r] || (e[r] = t[r]);
  return e;
}, jo = {}, au = function(t) {
  var i = jo[t] = Go(t);
  return bs[t] = i.concat(Ts), i;
}, _h = function(t) {
  var i = t._gsap || jt.core.getCache(t);
  return i.gmCache === jt.ticker.frame ? i.gMatrix : (i.gmCache = jt.ticker.frame, i.gMatrix = oi(t, !0, !1, !0));
}, gh = function o(t, i, e) {
  e === void 0 && (e = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, e) * (i ? -1 : 1), s = i ? -n * 900 : 0; t; )
    s += n, t = t.previousSibling;
  return r ? s + o(r, i, e + 1) : s;
}, cs = function(t, i, e) {
  return t.forEach(function(r) {
    return r.d = gh(e ? r.element : r.t, i);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, kn = function(t, i) {
  for (var e = t.element.style, r = t.css = t.css || [], n = i.length, s, a; n--; )
    s = i[n], a = e[s] || e.getPropertyValue(s), r.push(a ? s : Ca[s] || (Ca[s] = ou(s)), a);
  return e;
}, ps = function(t) {
  var i = t.css, e = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < i.length; r += 2)
    i[r + 1] ? e[i[r]] = i[r + 1] : e.removeProperty(i[r]);
  !i[i.indexOf("transform") + 1] && e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Oa = function(t, i) {
  t.forEach(function(e) {
    return e.a.cache.uncache = 1;
  }), i || t.finalStates.forEach(ps);
}, Fs = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Zo = function(t, i, e) {
  var r = t.element, n = t.width, s = t.height, a = t.uncache, l = t.getProp, u = r.style, f = 4, p, c, h;
  if (typeof i != "object" && (i = t), mt && e !== 1)
    return mt._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), mt._final.push(function() {
      return (t.cache.uncache = 1) && ps(t);
    }), r;
  for (c = l("display") === "none", (!t.isVisible || c) && (c && (kn(t, ["display"]).display = i.display), t.matrix = i.matrix, t.width = n = t.width || i.width, t.height = s = t.height || i.height), kn(t, Fs), h = window.getComputedStyle(r); f--; )
    u[Fs[f]] = h[Fs[f]];
  if (u.gridArea = "1 / 1 / 1 / 1", u.transition = "none", u.position = "absolute", u.width = n + "px", u.height = s + "px", u.top || (u.top = "0px"), u.left || (u.left = "0px"), a)
    p = new sr(r);
  else if (p = br(t, hs), p.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    p.matrix = new nr(1, 0, 0, 1, _.left + qo(), _.top + $o());
  } else
    p.matrix = oi(r, !1, !1, !0);
  return p = Cr(p, t, !0), t.x = di(p.x, 0.01), t.y = di(p.y, 0.01), r;
}, Ma = function(t, i) {
  return i !== !0 && (i = Fr(i), t = t.filter(function(e) {
    if (i.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1)
      return !0;
    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
  })), t;
}, lu = function(t) {
  return cs(t, !0).forEach(function(i) {
    return (i.a.isVisible || i.b.isVisible) && Zo(i.sd < 0 ? i.b : i.a, i.b, 1);
  });
}, mh = function(t, i) {
  return i && t.idLookup[po(i).id] || t.elementStates[0];
}, po = function(t, i, e, r) {
  return t instanceof sr ? t : t instanceof Ge ? mh(t, r) : new sr(typeof t == "string" ? an(t) || console.warn(t + " not found") : t, i, e);
}, yh = function(t, i) {
  for (var e = jt.getProperty(t.element, null, "native"), r = t.props = {}, n = i.length; n--; )
    r[i[n]] = (e(i[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, uu = function(t, i) {
  var e = t.style || t, r;
  for (r in i)
    e[r] = i[r];
}, vh = function(t) {
  var i = t.getAttribute("data-flip-id");
  return i || t.setAttribute("data-flip-id", i = "auto-" + ch++), i;
}, fu = function(t) {
  return t.map(function(i) {
    return i.element;
  });
}, Da = function(t, i, e) {
  return t && i.length && e.add(t(fu(i), e, new Ge(i, 0, !0)), 0);
}, Cr = function(t, i, e, r, n, s) {
  var a = t.element, l = t.cache, u = t.parent, f = t.x, p = t.y, c = i.width, h = i.height, _ = i.scaleX, d = i.scaleY, g = i.rotation, y = i.bounds, x = s && ho && ho(a, "transform,width,height"), w = t, v = i.matrix, T = v.e, C = v.f, S = t.bounds.width !== y.width || t.bounds.height !== y.height || t.scaleX !== _ || t.scaleY !== d || t.rotation !== g, P = !S && t.simple && i.simple && !n, k, E, R, O, Y, I, D;
  return P || !u ? (_ = d = 1, g = k = 0) : (Y = _h(u), I = Y.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix), g = xr(Math.atan2(I.b, I.a) * Ea), k = xr(Math.atan2(I.c, I.d) * Ea + g) % 360, _ = Math.sqrt(Math.pow(I.a, 2) + Math.pow(I.b, 2)), d = Math.sqrt(Math.pow(I.c, 2) + Math.pow(I.d, 2)) * Math.cos(k * ph), n && (n = Fr(n)[0], O = jt.getProperty(n), D = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), w = {
    scaleX: O("scaleX"),
    scaleY: O("scaleY"),
    width: D ? D.width : Math.ceil(parseFloat(O("width", "px"))),
    height: D ? D.height : parseFloat(O("height", "px"))
  }), l.rotation = g + "deg", l.skewX = k + "deg"), e ? (_ *= c === w.width || !w.width ? 1 : c / w.width, d *= h === w.height || !w.height ? 1 : h / w.height, l.scaleX = _, l.scaleY = d) : (c = di(c * _ / w.scaleX, 0), h = di(h * d / w.scaleY, 0), a.style.width = c + "px", a.style.height = h + "px"), r && uu(a, i.props), P || !u ? (f += T - t.matrix.e, p += C - t.matrix.f) : S || u !== i.parent ? (l.x = f + "px", l.y = p + "px", l.renderTransform(1, l), I = oi(n || a, !1, !1, !0), E = Y.apply({
    x: I.e,
    y: I.f
  }), R = Y.apply({
    x: T,
    y: C
  }), f += R.x - E.x, p += R.y - E.y) : (Y.e = Y.f = 0, R = Y.apply({
    x: T - t.matrix.e,
    y: C - t.matrix.f
  }), f += R.x, p += R.y), f = di(f, 0.02), p = di(p, 0.02), s && !(s instanceof sr) ? x && x.revert() : (l.x = f + "px", l.y = p + "px", l.renderTransform(1, l)), s && (s.x = f, s.y = p, s.rotation = g, s.skewX = k, e ? (s.scaleX = _, s.scaleY = d) : (s.width = c, s.height = h)), s || l;
}, Bs = function(t, i) {
  return t instanceof Ge ? t : new Ge(t, i);
}, hu = function(t, i, e) {
  var r = t.idLookup[e], n = t.alt[e];
  return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, Ns = [], Ys = "width,height,overflowX,overflowY".split(","), An, Ra = function(t) {
  if (t !== An) {
    var i = Si.style, e = Si.clientWidth === window.outerWidth, r = Si.clientHeight === window.outerHeight, n = 4;
    if (t && (e || r)) {
      for (; n--; )
        Ns[n] = i[Ys[n]];
      e && (i.width = Si.clientWidth + "px", i.overflowY = "hidden"), r && (i.height = Si.clientHeight + "px", i.overflowX = "hidden"), An = t;
    } else if (An) {
      for (; n--; )
        Ns[n] ? i[Ys[n]] = Ns[n] : i.removeProperty(ou(Ys[n]));
      An = t;
    }
  }
}, Aa = function(t, i) {
  for (var e = 0; e < t.length; e += 3)
    jt.set(t[e], {
      clearProps: !0
    }), t[e].setAttribute("style", t[e + i]), t[e]._gsap.gmCache = -1;
}, Vs = function(t, i, e, r) {
  t instanceof Ge && i instanceof Ge || console.warn("Not a valid state object."), e = e || {};
  var n = e, s = n.clearProps, a = n.onEnter, l = n.onLeave, u = n.absolute, f = n.absoluteOnLeave, p = n.custom, c = n.delay, h = n.paused, _ = n.repeat, d = n.repeatDelay, g = n.yoyo, y = n.toggleClass, x = n.nested, w = n.zIndex, v = n.scale, T = n.fade, C = n.stagger, S = n.spin, P = n.prune, k = ("props" in e ? e : t).props, E = br(e, Pa), R = jt.timeline({
    delay: c,
    paused: h,
    repeat: _,
    repeatDelay: d,
    yoyo: g,
    data: "isFlip"
  }), O = E, Y = [], I = [], D = [], $ = [], V = S === !0 ? 1 : S || 0, it = typeof S == "function" ? S : function() {
    return V;
  }, at = t.interrupted || i.interrupted, m = R[r !== 1 ? "to" : "from"], rt, lt, de, nt, q, U, ut, pt, Mt, Nt, gt, zt, z, J;
  for (lt in i.idLookup)
    gt = i.alt[lt] ? hu(i, t, lt) : i.idLookup[lt], q = gt.element, Nt = t.idLookup[lt], t.alt[lt] && q === Nt.element && (t.alt[lt].isVisible || !gt.isVisible) && (Nt = t.alt[lt]), Nt ? (U = {
      t: q,
      b: Nt,
      a: gt,
      sd: Nt.element === q ? 0 : gt.isVisible ? 1 : -1
    }, D.push(U), U.sd && (U.sd < 0 && (U.b = gt, U.a = Nt), at && kn(U.b, k ? bs[k] : Ts), T && D.push(U.swap = {
      t: Nt.element,
      b: U.b,
      a: U.a,
      sd: -U.sd,
      swap: U
    })), q._flip = Nt.element._flip = mt ? mt.timeline : R) : gt.isVisible && (D.push({
      t: q,
      b: br(gt, {
        isVisible: 1
      }),
      a: gt,
      sd: 0,
      entering: 1
    }), q._flip = mt ? mt.timeline : R);
  if (k && (jo[k] || au(k)).forEach(function(b) {
    return E[b] = function(Dt) {
      return D[Dt].a.props[b];
    };
  }), D.finalStates = Mt = [], zt = function() {
    cs(D), Ra(!0);
    var Dt = [];
    for (nt = 0; nt < D.length; nt++)
      U = D[nt], z = U.a, J = U.b, P && !z.isDifferent(J) && !U.entering ? D.splice(nt--, 1) : (q = U.t, x && !(U.sd < 0) && nt && (z = U.a = z.clone({
        matrix: oi(q, !1, !1, !0)
      })), J.isVisible && z.isVisible ? (U.sd < 0 ? (x && Aa(Dt, 1), ut = new sr(q, k, t.simple), Cr(ut, z, v, 0, 0, ut), ut.matrix = oi(q, !1, !1, !0), ut.bounds = q.getBoundingClientRect(), ut.css = U.b.css, U.a = z = ut, T && (q.style.opacity = at ? J.opacity : z.opacity), C && $.push(q), x && (Aa(Dt, 2), Dt.push(q, q.getAttribute("style")))) : U.sd > 0 && T && (q.style.opacity = at ? z.opacity - J.opacity : "0"), Cr(z, J, v, k), x && U.sd < 0 && Dt.push(q.getAttribute("style"))) : J.isVisible !== z.isVisible && (J.isVisible ? z.isVisible || (J.css = z.css, I.push(J), D.splice(nt--, 1), u && x && Cr(z, J, v, k)) : (z.isVisible && Y.push(z), D.splice(nt--, 1))), v || (q.style.maxWidth = Math.max(z.width, J.width) + "px", q.style.maxHeight = Math.max(z.height, J.height) + "px", q.style.minWidth = Math.min(z.width, J.width) + "px", q.style.minHeight = Math.min(z.height, J.height) + "px"), x && y && q.classList.add(y)), Mt.push(z);
    var oe;
    if (y && (oe = Mt.map(function(B) {
      return B.element;
    }), x && oe.forEach(function(B) {
      return B.classList.remove(y);
    })), Ra(!1), v ? (E.scaleX = function(B) {
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
    if (dh.forEach(function(B) {
      return e[B] && R.eventCallback(B, e[B], e[B + "Params"]);
    }), p && pt.length) {
      O = br(E, Pa), "scale" in p && (p.scaleX = p.scaleY = p.scale, delete p.scale);
      for (lt in p)
        rt = br(p[lt], su), rt[lt] = E[lt], !("duration" in rt) && "duration" in E && (rt.duration = E.duration), rt.stagger = E.stagger, m.call(R, pt, rt, 0), delete O[lt];
    }
    (pt.length || I.length || Y.length) && (y && R.add(function() {
      return Is(oe, y, R._zTime < 0 ? "remove" : "add");
    }, 0) && !h && Is(oe, y, "add"), pt.length && m.call(R, pt, O, 0)), Da(a, Y, R), Da(l, I, R);
    var dt = mt && mt.timeline;
    dt && (dt.add(R, 0), mt._final.push(function() {
      return Oa(D, !s);
    })), de = R.duration(), R.call(function() {
      var B = R.time() >= de;
      B && !dt && Oa(D, !s), y && Is(oe, y, B ? "remove" : "add");
    });
  }, f && (u = D.filter(function(b) {
    return !b.sd && !b.a.isVisible && b.b.isVisible;
  }).map(function(b) {
    return b.a.element;
  })), mt) {
    var $t;
    u && ($t = mt._abs).push.apply($t, Ma(D, u)), mt._run.push(zt);
  } else
    u && lu(Ma(D, u)), zt();
  var qt = mt ? mt.timeline : R;
  return qt.revert = function() {
    return Ko(qt, 1, 1);
  }, qt;
}, wh = function o(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(o);
}, Ko = function(t, i, e) {
  if (t && t.progress() < 1 && (!t.paused() || e))
    return i && (wh(t), i < 2 && t.progress(1), t.kill()), !0;
}, Ln = function(t) {
  for (var i = t.idLookup = {}, e = t.alt = {}, r = t.elementStates, n = r.length, s; n--; )
    s = r[n], i[s.id] ? e[s.id] = s : i[s.id] = s;
}, Ge = /* @__PURE__ */ function() {
  function o(i, e, r) {
    if (this.props = e && e.props, this.simple = !!(e && e.simple), r)
      this.targets = fu(i), this.elementStates = i, Ln(this);
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
    for (var s = cs(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, l = 0, u, f; l < s.length; l++)
      u = s[l], n && (u.matrix = oi(u.element, !1, !1, !0)), f = a[u.id], f && Cr(u, f, r, !0, 0, u), u.matrix = oi(u.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(e, r) {
    var n = this.getElementState(e) || hs;
    return (r in n ? n : n.props || hs)[r];
  }, t.add = function(e) {
    for (var r = e.targets.length, n = this.idLookup, s = this.alt, a, l, u; r--; )
      l = e.elementStates[r], u = n[l.id], u && (l.element === u.element || s[l.id] && s[l.id].element === l.element) ? (a = this.elementStates.indexOf(l.element === u.element ? u : s[l.id]), this.targets.splice(a, 1, e.targets[r]), this.elementStates.splice(a, 1, l)) : (this.targets.push(e.targets[r]), this.elementStates.push(l));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Ln(this), this;
  }, t.compare = function(e) {
    var r = e.idLookup, n = this.idLookup, s = [], a = [], l = [], u = [], f = [], p = e.alt, c = this.alt, h = function(P, k, E) {
      return (P.isVisible !== k.isVisible ? P.isVisible ? l : u : P.isVisible ? a : s).push(E) && f.push(E);
    }, _ = function(P, k, E) {
      return f.indexOf(E) < 0 && h(P, k, E);
    }, d, g, y, x, w, v, T, C;
    for (y in r)
      w = p[y], v = c[y], d = w ? hu(e, this, y) : r[y], x = d.element, g = n[y], v ? (C = g.isVisible || !v.isVisible && x === g.element ? g : v, T = w && !d.isVisible && !w.isVisible && C.element === w.element ? w : d, T.isVisible && C.isVisible && T.element !== C.element ? ((T.isDifferent(C) ? a : s).push(T.element, C.element), f.push(T.element, C.element)) : h(T, C, T.element), w && T.element === w.element && (w = r[y]), _(T.element !== g.element && w ? w : T, g, g.element), _(w && w.element === v.element ? w : T, v, v.element), w && _(w, v.element === w.element ? v : g, w.element)) : (g ? g.isDifferent(d) ? h(d, g, x) : s.push(x) : l.push(x), w && _(w, g, w.element));
    for (y in n)
      r[y] || (u.push(n[y].element), c[y] && u.push(c[y].element));
    return {
      changed: a,
      unchanged: s,
      enter: l,
      leave: u
    };
  }, t.recordInlineStyles = function() {
    for (var e = bs[this.props] || Ts, r = this.elementStates.length; r--; )
      kn(this.elementStates[r], e);
  }, t.interrupt = function(e) {
    var r = this, n = [];
    this.targets.forEach(function(s) {
      var a = s._flip, l = Ko(a, e ? 0 : 1);
      e && l && n.indexOf(a) < 0 && a.add(function() {
        return r.updateVisibility();
      }), l && n.push(a);
    }), !e && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
  }, t.updateVisibility = function() {
    this.elementStates.forEach(function(e) {
      var r = e.element.getBoundingClientRect();
      e.isVisible = !!(r.width || r.height || r.top || r.left), e.uncache = 1;
    });
  }, t.getElementState = function(e) {
    return this.elementStates[this.targets.indexOf(an(e))];
  }, t.makeAbsolute = function() {
    return cs(this.elementStates.slice(0), !0, !0).map(Zo);
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
    var n = this, s = n.element, a = jt.getProperty(s), l = jt.core.getCache(s), u = s.getBoundingClientRect(), f = s.getBBox && typeof s.getBBox == "function" && s.nodeName.toLowerCase() !== "svg" && s.getBBox(), p = r ? new nr(1, 0, 0, 1, u.left + qo(), u.top + $o()) : oi(s, !1, !1, !0);
    l.uncache = 1, n.getProp = a, n.element = s, n.id = vh(s), n.matrix = p, n.cache = l, n.bounds = u, n.isVisible = !!(u.width || u.height || u.left || u.top), n.display = a("display"), n.position = a("position"), n.parent = s.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = l.scaleX, n.scaleY = l.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = f ? f.width : di(a("width", "px"), 0.04), n.height = f ? f.height : di(a("height", "px"), 0.04), e && yh(n, jo[e] || au(e)), n.ctm = s.getCTM && s.nodeName.toLowerCase() === "svg" && nu(s).inverse(), n.simple = r || xr(p.a) === 1 && !xr(p.b) && !xr(p.c) && xr(p.d) === 1, n.uncache = 0;
  }, o;
}(), xh = /* @__PURE__ */ function() {
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
}(), bh = /* @__PURE__ */ function() {
  function o(i) {
    this.id = i, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ge(), this.timeline = jt.timeline();
  }
  var t = o.prototype;
  return t.add = function(e) {
    var r = this.actions.filter(function(n) {
      return n.vars === e;
    });
    return r.length ? r[0] : (r = new xh(typeof e == "function" ? {
      animate: e
    } : e, this), this.actions.push(r), r);
  }, t.remove = function(e) {
    var r = this.actions.indexOf(e);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(e) {
    var r = this, n = mt, s = on;
    return mt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, on = a, a.state = a.vars.getState(a)), e && a.states.forEach(function(l) {
        return r.state.add(l);
      });
    }), on = s, mt = n, this.killConflicts(), this;
  }, t.animate = function() {
    var e = this, r = mt, n = this.timeline, s = this.actions.length, a, l;
    for (mt = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(u) {
      u.vars.animate && u.vars.animate(u);
      var f = u.vars.onEnter, p = u.vars.onLeave, c = u.targets, h, _;
      c && c.length && (f || p) && (h = new Ge(), u.states.forEach(function(d) {
        return h.add(d);
      }), _ = h.compare(Br.getState(c)), _.enter.length && f && f(_.enter), _.leave.length && p && p(_.leave));
    }), lu(this._abs), this._run.forEach(function(u) {
      return u();
    }), l = n.duration(), a = this._final.slice(0), n.add(function() {
      l <= n.time() && (a.forEach(function(u) {
        return u();
      }), ka(e, "onComplete"));
    }), mt = r; s--; )
      this.actions[s].vars.once && this.actions[s].kill();
    return ka(this, "onStart"), n.restart(), this;
  }, t.loadState = function(e) {
    e || (e = function() {
      return 0;
    });
    var r = [];
    return this.actions.forEach(function(n) {
      if (n.vars.loadState) {
        var s, a = function l(u) {
          u && (n.targets = u), s = r.indexOf(l), ~s && (r.splice(s, 1), r.length || e());
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
    this._killed = 1, this.clear(), delete co[this.id];
  }, o;
}(), Br = /* @__PURE__ */ function() {
  function o() {
  }
  return o.getState = function(i, e) {
    var r = Bs(i, e);
    return on && on.states.push(r), e && e.batch && o.batch(e.batch).state.add(r), r;
  }, o.from = function(i, e) {
    return e = e || {}, "clearProps" in e || (e.clearProps = !0), Vs(i, Bs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, -1);
  }, o.to = function(i, e) {
    return Vs(i, Bs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, 1);
  }, o.fromTo = function(i, e, r) {
    return Vs(i, e, r);
  }, o.fit = function(i, e, r) {
    var n = r ? br(r, su) : {}, s = r || n, a = s.absolute, l = s.scale, u = s.getVars, f = s.props, p = s.runBackwards, c = s.onComplete, h = s.simple, _ = r && r.fitChild && an(r.fitChild), d = po(e, f, h, i), g = po(i, 0, h, d), y = f ? bs[f] : Ts, x = jt.context();
    return f && uu(n, d.props), kn(g, y), p && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      ps(g), c && c.apply(this, arguments);
    }), a && Zo(g, d), n = Cr(g, d, l || _, !n.duration && f, _, n.duration || u ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), x && !u && x.add(function() {
      return function() {
        return ps(g);
      };
    }), u ? n : n.duration ? jt.to(g.element, n) : null;
  }, o.makeAbsolute = function(i, e) {
    return (i instanceof Ge ? i : new Ge(i, e)).makeAbsolute();
  }, o.batch = function(i) {
    return i || (i = "default"), co[i] || (co[i] = new bh(i));
  }, o.killFlipsOf = function(i, e) {
    (i instanceof Ge ? i.targets : Fr(i)).forEach(function(r) {
      return r && Ko(r._flip, e !== !1 ? 1 : 2);
    });
  }, o.isFlipping = function(i) {
    var e = o.getByTarget(i);
    return !!e && e.isActive();
  }, o.getByTarget = function(i) {
    return (an(i) || hs)._flip;
  }, o.getElementState = function(i, e) {
    return new sr(an(i), e);
  }, o.convertCoordinates = function(i, e, r) {
    var n = oi(e, !0, !0).multiply(oi(i));
    return r ? n.apply(r) : n;
  }, o.register = function(i) {
    if (Si = typeof document < "u" && document.body, Si) {
      jt = i, Ho(Si), Fr = jt.utils.toArray, ho = jt.core.getStyleSaver;
      var e = jt.utils.snap(0.1);
      di = function(n, s) {
        return e(parseFloat(n) + s);
      };
    }
  }, o;
}();
Br.version = "3.14.2";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Br);
function Th(o, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e);
  }
}
function Sh(o, t, i) {
  return t && Th(o.prototype, t), o;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Zt, Kn, Ce, Pi, Oi, Pr, cu, qi, ln, pu, _i, qe, du, _u = function() {
  return Zt || typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt;
}, gu = 1, Tr = [], K = [], ni = [], un = Date.now, _o = function(t, i) {
  return i;
}, kh = function() {
  var t = ln.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, K), r.push.apply(r, ni), K = e, ni = r, _o = function(s, a) {
    return i[s](a);
  };
}, Ri = function(t, i) {
  return ~ni.indexOf(t) && ni[ni.indexOf(t) + 1][i];
}, fn = function(t) {
  return !!~pu.indexOf(t);
}, le = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, ae = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, zn = "scrollLeft", In = "scrollTop", go = function() {
  return _i && _i.isPressed || K.cache++;
}, ds = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      gu && (Ce.history.scrollRestoration = "manual");
      var s = _i && _i.isPressed;
      n = r.v = Math.round(n) || (_i && _i.iOS ? 1 : 0), t(n), r.cacheID = K.cache, s && _o("ss", n);
    } else (i || K.cache !== r.cacheID || _o("ref")) && (r.cacheID = K.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, pe = {
  s: zn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: ds(function(o) {
    return arguments.length ? Ce.scrollTo(o, Bt.sc()) : Ce.pageXOffset || Pi[zn] || Oi[zn] || Pr[zn] || 0;
  })
}, Bt = {
  s: In,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: pe,
  sc: ds(function(o) {
    return arguments.length ? Ce.scrollTo(pe.sc(), o) : Ce.pageYOffset || Pi[In] || Oi[In] || Pr[In] || 0;
  })
}, _e = function(t, i) {
  return (i && i._ctx && i._ctx.selector || Zt.utils.toArray)(t)[0] || (typeof t == "string" && Zt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Eh = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, Ii = function(t, i) {
  var e = i.s, r = i.sc;
  fn(t) && (t = Pi.scrollingElement || Oi);
  var n = K.indexOf(t), s = r === Bt.sc ? 1 : 2;
  !~n && (n = K.push(t) - 1), K[n + s] || le(t, "scroll", go);
  var a = K[n + s], l = a || (K[n + s] = ds(Ri(t, e), !0) || (fn(t) ? r : ds(function(u) {
    return arguments.length ? t[e] = u : t[e];
  })));
  return l.target = t, a || (l.smooth = Zt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, mo = function(t, i, e) {
  var r = t, n = t, s = un(), a = s, l = i || 50, u = Math.max(500, l * 3), f = function(_, d) {
    var g = un();
    d || g - s > l ? (n = r, r = _, a = s, s = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (s - a);
  }, p = function() {
    n = r = e ? 0 : r, a = s = 0;
  }, c = function(_) {
    var d = a, g = n, y = un();
    return (_ || _ === 0) && _ !== r && f(_), s === a || y - a > u ? 0 : (r + (e ? g : -g)) / ((e ? y : s) - d) * 1e3;
  };
  return {
    update: f,
    reset: p,
    getVelocity: c
  };
}, $r = function(t, i) {
  return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, La = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, mu = function() {
  ln = Zt.core.globals().ScrollTrigger, ln && ln.core && kh();
}, yu = function(t) {
  return Zt = t || _u(), !Kn && Zt && typeof document < "u" && document.body && (Ce = window, Pi = document, Oi = Pi.documentElement, Pr = Pi.body, pu = [Ce, Pi, Oi, Pr], Zt.utils.clamp, du = Zt.core.context || function() {
  }, qi = "onpointerenter" in Pr ? "pointer" : "mouse", cu = Ot.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ce || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, qe = Ot.eventTypes = ("ontouchstart" in Oi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Oi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return gu = 0;
  }, 500), mu(), Kn = 1), Kn;
};
pe.op = Bt;
K.cache = 0;
var Ot = /* @__PURE__ */ function() {
  function o(i) {
    this.init(i);
  }
  var t = o.prototype;
  return t.init = function(e) {
    Kn || yu(Zt) || console.warn("Please gsap.registerPlugin(Observer)"), ln || mu();
    var r = e.tolerance, n = e.dragMinimum, s = e.type, a = e.target, l = e.lineHeight, u = e.debounce, f = e.preventDefault, p = e.onStop, c = e.onStopDelay, h = e.ignore, _ = e.wheelSpeed, d = e.event, g = e.onDragStart, y = e.onDragEnd, x = e.onDrag, w = e.onPress, v = e.onRelease, T = e.onRight, C = e.onLeft, S = e.onUp, P = e.onDown, k = e.onChangeX, E = e.onChangeY, R = e.onChange, O = e.onToggleX, Y = e.onToggleY, I = e.onHover, D = e.onHoverEnd, $ = e.onMove, V = e.ignoreCheck, it = e.isNormalizer, at = e.onGestureStart, m = e.onGestureEnd, rt = e.onWheel, lt = e.onEnable, de = e.onDisable, nt = e.onClick, q = e.scrollSpeed, U = e.capture, ut = e.allowClicks, pt = e.lockAxis, Mt = e.onLockAxis;
    this.target = a = _e(a) || Oi, this.vars = e, h && (h = Zt.utils.toArray(h)), r = r || 1e-9, n = n || 0, _ = _ || 1, q = q || 1, s = s || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Ce.getComputedStyle(Pr).lineHeight) || 22);
    var Nt, gt, zt, z, J, $t, qt, b = this, Dt = 0, oe = 0, je = e.passive || !f && e.passive !== !1, dt = Ii(a, pe), B = Ii(a, Bt), Ye = dt(), Bi = B(), Yt = ~s.indexOf("touch") && !~s.indexOf("pointer") && qe[0] === "pointerdown", vi = fn(a), Et = a.ownerDocument || Pi, Ve = [0, 0, 0], Ae = [0, 0, 0], ai = 0, Yr = function() {
      return ai = un();
    }, Rt = function(N, st) {
      return (b.event = N) && h && Eh(N.target, h) || st && Yt && N.pointerType !== "touch" || V && V(N, st);
    }, On = function() {
      b._vx.reset(), b._vy.reset(), gt.pause(), p && p(b);
    }, li = function() {
      var N = b.deltaX = La(Ve), st = b.deltaY = La(Ae), M = Math.abs(N) >= r, X = Math.abs(st) >= r;
      R && (M || X) && R(b, N, st, Ve, Ae), M && (T && b.deltaX > 0 && T(b), C && b.deltaX < 0 && C(b), k && k(b), O && b.deltaX < 0 != Dt < 0 && O(b), Dt = b.deltaX, Ve[0] = Ve[1] = Ve[2] = 0), X && (P && b.deltaY > 0 && P(b), S && b.deltaY < 0 && S(b), E && E(b), Y && b.deltaY < 0 != oe < 0 && Y(b), oe = b.deltaY, Ae[0] = Ae[1] = Ae[2] = 0), (z || zt) && ($ && $(b), zt && (g && zt === 1 && g(b), x && x(b), zt = 0), z = !1), $t && !($t = !1) && Mt && Mt(b), J && (rt(b), J = !1), Nt = 0;
    }, fr = function(N, st, M) {
      Ve[M] += N, Ae[M] += st, b._vx.update(N), b._vy.update(st), u ? Nt || (Nt = requestAnimationFrame(li)) : li();
    }, hr = function(N, st) {
      pt && !qt && (b.axis = qt = Math.abs(N) > Math.abs(st) ? "x" : "y", $t = !0), qt !== "y" && (Ve[2] += N, b._vx.update(N, !0)), qt !== "x" && (Ae[2] += st, b._vy.update(st, !0)), u ? Nt || (Nt = requestAnimationFrame(li)) : li();
    }, wi = function(N) {
      if (!Rt(N, 1)) {
        N = $r(N, f);
        var st = N.clientX, M = N.clientY, X = st - b.x, F = M - b.y, W = b.isDragging;
        b.x = st, b.y = M, (W || (X || F) && (Math.abs(b.startX - st) >= n || Math.abs(b.startY - M) >= n)) && (zt || (zt = W ? 2 : 1), W || (b.isDragging = !0), hr(X, F));
      }
    }, Ni = b.onPress = function(H) {
      Rt(H, 1) || H && H.button || (b.axis = qt = null, gt.pause(), b.isPressed = !0, H = $r(H), Dt = oe = 0, b.startX = b.x = H.clientX, b.startY = b.y = H.clientY, b._vx.reset(), b._vy.reset(), le(it ? a : Et, qe[1], wi, je, !0), b.deltaX = b.deltaY = 0, w && w(b));
    }, Q = b.onRelease = function(H) {
      if (!Rt(H, 1)) {
        ae(it ? a : Et, qe[1], wi, !0);
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
        })), b.isDragging = b.isGesturing = b.isPressed = !1, p && st && !it && gt.restart(!0), zt && li(), y && st && y(b), v && v(b, M);
      }
    }, Yi = function(N) {
      return N.touches && N.touches.length > 1 && (b.isGesturing = !0) && at(N, b.isDragging);
    }, Xe = function() {
      return (b.isGesturing = !1) || m(b);
    }, We = function(N) {
      if (!Rt(N)) {
        var st = dt(), M = B();
        fr((st - Ye) * q, (M - Bi) * q, 1), Ye = st, Bi = M, p && gt.restart(!0);
      }
    }, He = function(N) {
      if (!Rt(N)) {
        N = $r(N, f), rt && (J = !0);
        var st = (N.deltaMode === 1 ? l : N.deltaMode === 2 ? Ce.innerHeight : 1) * _;
        fr(N.deltaX * st, N.deltaY * st, 0), p && !it && gt.restart(!0);
      }
    }, Vi = function(N) {
      if (!Rt(N)) {
        var st = N.clientX, M = N.clientY, X = st - b.x, F = M - b.y;
        b.x = st, b.y = M, z = !0, p && gt.restart(!0), (X || F) && hr(X, F);
      }
    }, cr = function(N) {
      b.event = N, I(b);
    }, ui = function(N) {
      b.event = N, D(b);
    }, Vr = function(N) {
      return Rt(N) || $r(N, f) && nt(b);
    };
    gt = b._dc = Zt.delayedCall(c || 0.25, On).pause(), b.deltaX = b.deltaY = 0, b._vx = mo(0, 50, !0), b._vy = mo(0, 50, !0), b.scrollX = dt, b.scrollY = B, b.isDragging = b.isGesturing = b.isPressed = !1, du(this), b.enable = function(H) {
      return b.isEnabled || (le(vi ? Et : a, "scroll", go), s.indexOf("scroll") >= 0 && le(vi ? Et : a, "scroll", We, je, U), s.indexOf("wheel") >= 0 && le(a, "wheel", He, je, U), (s.indexOf("touch") >= 0 && cu || s.indexOf("pointer") >= 0) && (le(a, qe[0], Ni, je, U), le(Et, qe[2], Q), le(Et, qe[3], Q), ut && le(a, "click", Yr, !0, !0), nt && le(a, "click", Vr), at && le(Et, "gesturestart", Yi), m && le(Et, "gestureend", Xe), I && le(a, qi + "enter", cr), D && le(a, qi + "leave", ui), $ && le(a, qi + "move", Vi)), b.isEnabled = !0, b.isDragging = b.isGesturing = b.isPressed = z = zt = !1, b._vx.reset(), b._vy.reset(), Ye = dt(), Bi = B(), H && H.type && Ni(H), lt && lt(b)), b;
    }, b.disable = function() {
      b.isEnabled && (Tr.filter(function(H) {
        return H !== b && fn(H.target);
      }).length || ae(vi ? Et : a, "scroll", go), b.isPressed && (b._vx.reset(), b._vy.reset(), ae(it ? a : Et, qe[1], wi, !0)), ae(vi ? Et : a, "scroll", We, U), ae(a, "wheel", He, U), ae(a, qe[0], Ni, U), ae(Et, qe[2], Q), ae(Et, qe[3], Q), ae(a, "click", Yr, !0), ae(a, "click", Vr), ae(Et, "gesturestart", Yi), ae(Et, "gestureend", Xe), ae(a, qi + "enter", cr), ae(a, qi + "leave", ui), ae(a, qi + "move", Vi), b.isEnabled = b.isPressed = b.isDragging = !1, de && de(b));
    }, b.kill = b.revert = function() {
      b.disable();
      var H = Tr.indexOf(b);
      H >= 0 && Tr.splice(H, 1), _i === b && (_i = 0);
    }, Tr.push(b), it && fn(a) && (_i = b), b.enable(d);
  }, Sh(o, [{
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
Ot.register = yu;
Ot.getAll = function() {
  return Tr.slice();
};
Ot.getById = function(o) {
  return Tr.filter(function(t) {
    return t.vars.id === o;
  })[0];
};
_u() && Zt.registerPlugin(Ot);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var A, gr, Z, _t, ke, ot, Jo, _s, En, hn, Zr, Fn, ee, Ss, yo, fe, za, Ia, mr, vu, Xs, wu, ue, vo, xu, bu, Ti, wo, Qo, Or, ta, cn, xo, Ws, Bn = 1, ie = Date.now, Hs = ie(), Ne = 0, Kr = 0, Fa = function(t, i, e) {
  var r = Te(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Ba = function(t, i) {
  return i && (!Te(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Ch = function o() {
  return Kr && requestAnimationFrame(o);
}, Na = function() {
  return Ss = 1;
}, Ya = function() {
  return Ss = 0;
}, ti = function(t) {
  return t;
}, Jr = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Tu = function() {
  return typeof window < "u";
}, Su = function() {
  return A || Tu() && (A = window.gsap) && A.registerPlugin && A;
}, or = function(t) {
  return !!~Jo.indexOf(t);
}, ku = function(t) {
  return (t === "Height" ? ta : Z["inner" + t]) || ke["client" + t] || ot["client" + t];
}, Eu = function(t) {
  return Ri(t, "getBoundingClientRect") || (or(t) ? function() {
    return is.width = Z.innerWidth, is.height = ta, is;
  } : function() {
    return ci(t);
  });
}, Ph = function(t, i, e) {
  var r = e.d, n = e.d2, s = e.a;
  return (s = Ri(t, "getBoundingClientRect")) ? function() {
    return s()[r];
  } : function() {
    return (i ? ku(n) : t["client" + n]) || 0;
  };
}, Oh = function(t, i) {
  return !i || ~ni.indexOf(t) ? Eu(t) : function() {
    return is;
  };
}, ri = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, s = i.a;
  return Math.max(0, (e = "scroll" + r) && (s = Ri(t, e)) ? s() - Eu(t)()[n] : or(t) ? (ke[e] || ot[e]) - ku(r) : t[e] - t["offset" + r]);
}, Nn = function(t, i) {
  for (var e = 0; e < mr.length; e += 3)
    (!i || ~i.indexOf(mr[e + 1])) && t(mr[e], mr[e + 1], mr[e + 2]);
}, Te = function(t) {
  return typeof t == "string";
}, ne = function(t) {
  return typeof t == "function";
}, Qr = function(t) {
  return typeof t == "number";
}, Ui = function(t) {
  return typeof t == "object";
}, qr = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, $s = function(t, i) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return i(t);
    }) : i(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, dr = Math.abs, Cu = "left", Pu = "top", ea = "right", ia = "bottom", er = "width", ir = "height", pn = "Right", dn = "Left", _n = "Top", gn = "Bottom", At = "padding", ze = "margin", Nr = "Width", ra = "Height", Ft = "px", Ie = function(t) {
  return Z.getComputedStyle(t);
}, Mh = function(t) {
  var i = Ie(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, Va = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, ci = function(t, i) {
  var e = i && Ie(t)[yo] !== "matrix(1, 0, 0, 1, 0, 0)" && A.to(t, {
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
}, Ou = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, Dh = function(t) {
  return function(i) {
    return A.utils.snap(Ou(t), i);
  };
}, na = function(t) {
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
}, Rh = function(t) {
  return function(i, e) {
    return na(Ou(t))(i, e.direction);
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
}, Xa = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Xn = {
  toggleActions: "play",
  anticipatePin: 0
}, ms = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Jn = function(t, i) {
  if (Te(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in ms ? ms[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, Wn = function(t, i, e, r, n, s, a, l) {
  var u = n.startColor, f = n.endColor, p = n.fontSize, c = n.indent, h = n.fontWeight, _ = _t.createElement("div"), d = or(e) || Ri(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, y = d ? ot : e, x = t.indexOf("start") !== -1, w = x ? u : f, v = "border-color:" + w + ";font-size:" + p + ";color:" + w + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((g || l) && d ? "fixed;" : "absolute;"), (g || l || !d) && (v += (r === Bt ? ea : ia) + ":" + (s + parseFloat(c)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = x, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_), _._offset = _["offset" + r.op.d2], Qn(_, 0, r, x), _;
}, Qn = function(t, i, e, r) {
  var n = {
    display: "block"
  }, s = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + s + Nr] = 1, n["border" + a + Nr] = 0, n[e.p] = i + "px", A.set(t, n);
}, j = [], bo = {}, Cn, Wa = function() {
  return ie() - Ne > 34 && (Cn || (Cn = requestAnimationFrame(gi)));
}, _r = function() {
  (!ue || !ue.isPressed || ue.startX > ot.clientWidth) && (K.cache++, ue ? Cn || (Cn = requestAnimationFrame(gi)) : gi(), Ne || lr("scrollStart"), Ne = ie());
}, qs = function() {
  bu = Z.innerWidth, xu = Z.innerHeight;
}, tn = function(t) {
  K.cache++, (t === !0 || !ee && !wu && !_t.fullscreenElement && !_t.webkitFullscreenElement && (!vo || bu !== Z.innerWidth || Math.abs(Z.innerHeight - xu) > Z.innerHeight * 0.25)) && _s.restart(!0);
}, ar = {}, Ah = [], Mu = function o() {
  return Xt(G, "scrollEnd", o) || ji(!0);
}, lr = function(t) {
  return ar[t] && ar[t].map(function(i) {
    return i();
  }) || Ah;
}, be = [], Du = function(t) {
  for (var i = 0; i < be.length; i += 5)
    (!t || be[i + 4] && be[i + 4].query === t) && (be[i].style.cssText = be[i + 1], be[i].getBBox && be[i].setAttribute("transform", be[i + 2] || ""), be[i + 3].uncache = 1);
}, Ru = function() {
  return K.forEach(function(t) {
    return ne(t) && ++t.cacheID && (t.rec = t());
  });
}, sa = function(t, i) {
  var e;
  for (fe = 0; fe < j.length; fe++)
    e = j[fe], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  cn = !0, i && Du(i), i || lr("revert");
}, Au = function(t, i) {
  K.cache++, (i || !he) && K.forEach(function(e) {
    return ne(e) && e.cacheID++ && (e.rec = 0);
  }), Te(t) && (Z.history.scrollRestoration = Qo = t);
}, he, rr = 0, Ha, Lh = function() {
  if (Ha !== rr) {
    var t = Ha = rr;
    requestAnimationFrame(function() {
      return t === rr && ji(!0);
    });
  }
}, Lu = function() {
  ot.appendChild(Or), ta = !ue && Or.offsetHeight || Z.innerHeight, ot.removeChild(Or);
}, $a = function(t) {
  return En(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, ji = function(t, i) {
  if (ke = _t.documentElement, ot = _t.body, Jo = [Z, _t, ke, ot], Ne && !t && !cn) {
    Wt(G, "scrollEnd", Mu);
    return;
  }
  Lu(), he = G.isRefreshing = !0, cn || Ru();
  var e = lr("refreshInit");
  vu && G.sort(), i || sa(), K.forEach(function(r) {
    ne(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), j.slice(0).forEach(function(r) {
    return r.refresh();
  }), cn = !1, j.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", s = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - s), r.refresh();
    }
  }), xo = 1, $a(!0), j.forEach(function(r) {
    var n = ri(r.scroller, r._dir), s = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (s || a) && r.setPositions(a ? n - 1 : r.start, s ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), $a(!1), xo = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), K.forEach(function(r) {
    ne(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), Au(Qo, 1), _s.pause(), rr++, he = 2, gi(2), j.forEach(function(r) {
    return ne(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), he = G.isRefreshing = !1, lr("refresh");
}, To = 0, ts = 1, mn, gi = function(t) {
  if (t === 2 || !he && !cn) {
    G.isUpdating = !0, mn && mn.update(0);
    var i = j.length, e = ie(), r = e - Hs >= 50, n = i && j[0].scroll();
    if (ts = To > n ? -1 : 1, he || (To = n), r && (Ne && !Ss && e - Ne > 200 && (Ne = 0, lr("scrollEnd")), Zr = Hs, Hs = e), ts < 0) {
      for (fe = i; fe-- > 0; )
        j[fe] && j[fe].update(0, r);
      ts = 1;
    } else
      for (fe = 0; fe < i; fe++)
        j[fe] && j[fe].update(0, r);
    G.isUpdating = !1;
  }
  Cn = 0;
}, So = [Cu, Pu, ia, ea, ze + gn, ze + pn, ze + _n, ze + dn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], es = So.concat([er, ir, "boxSizing", "max" + Nr, "max" + ra, "position", ze, At, At + _n, At + pn, At + gn, At + dn]), zh = function(t, i, e) {
  Mr(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    Mr(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, Us = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = So.length, s = i.style, a = t.style, l; n--; )
      l = So[n], s[l] = e[l];
    s.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (s.display = "inline-block"), a[ia] = a[ea] = "auto", s.flexBasis = e.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[er] = gs(t, pe) + Ft, s[ir] = gs(t, Bt) + Ft, s[At] = a[ze] = a[Pu] = a[Cu] = "0", Mr(r), a[er] = a["max" + Nr] = e[er], a[ir] = a["max" + ra] = e[ir], a[At] = e[At], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Ih = /([A-Z])/g, Mr = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, s;
    for ((t.t._gsap || A.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      s = t[r + 1], n = t[r], s ? i[n] = s : i[n] && i.removeProperty(n.replace(Ih, "-$1").toLowerCase());
  }
}, Hn = function(t) {
  for (var i = es.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(es[n], e[es[n]]);
  return r.t = t, r;
}, Fh = function(t, i, e) {
  for (var r = [], n = t.length, s = e ? 8 : 0, a; s < n; s += 2)
    a = t[s], r.push(a, a in i ? i[a] : t[s + 1]);
  return r.t = t.t, r;
}, is = {
  left: 0,
  top: 0
}, qa = function(t, i, e, r, n, s, a, l, u, f, p, c, h, _) {
  ne(t) && (t = t(l)), Te(t) && t.substr(0, 3) === "max" && (t = c + (t.charAt(4) === "=" ? Jn("0" + t.substr(3), e) : 0));
  var d = h ? h.time() : 0, g, y, x;
  if (h && h.seek(0), isNaN(t) || (t = +t), Qr(t))
    h && (t = A.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, c, t)), a && Qn(a, e, r, !0);
  else {
    ne(i) && (i = i(l));
    var w = (t || "0").split(" "), v, T, C, S;
    x = _e(i, l) || ot, v = ci(x) || {}, (!v || !v.left && !v.top) && Ie(x).display === "none" && (S = x.style.display, x.style.display = "block", v = ci(x), S ? x.style.display = S : x.style.removeProperty("display")), T = Jn(w[0], v[r.d]), C = Jn(w[1] || "0", e), t = v[r.p] - u[r.p] - f + T + n - C, a && Qn(a, C, r, e - C < 20 || a._isStart && C > 20), e -= e - C;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), s) {
    var P = t + e, k = s._isStart;
    g = "scroll" + r.d2, Qn(s, P, r, k && P > 20 || !k && (p ? Math.max(ot[g], ke[g]) : s.parentNode[g]) <= P + 1), p && (u = ci(a), p && (s.style[r.op.p] = u[r.op.p] - r.op.m - s._offset + Ft));
  }
  return h && x && (g = ci(x), h.seek(c), y = ci(x), h._caScrollDist = g[r.p] - y[r.p], t = t / h._caScrollDist * c), h && h.seek(d), h ? t : Math.round(t);
}, Bh = /(webkit|moz|length|cssText|inset)/i, Ua = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, s, a;
    if (i === ot) {
      t._stOrig = n.cssText, a = Ie(t);
      for (s in a)
        !+s && !Bh.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
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
}, Ga = function(t, i) {
  var e = Ii(t, i), r = "_scroll" + i.p2, n = function s(a, l, u, f, p) {
    var c = s.tween, h = l.onComplete, _ = {};
    u = u || e();
    var d = zu(e, u, function() {
      c.kill(), s.tween = 0;
    });
    return p = f && p || 0, f = f || a - u, c && c.kill(), l[r] = a, l.inherit = !1, l.modifiers = _, _[r] = function() {
      return d(u + f * c.ratio + p * c.ratio * c.ratio);
    }, l.onUpdate = function() {
      K.cache++, s.tween && gi();
    }, l.onComplete = function() {
      s.tween = 0, h && h.call(c);
    }, c = s.tween = A.to(t, l), c;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Wt(t, "wheel", e.wheelHandler), G.isTouch && Wt(t, "touchmove", e.wheelHandler), n;
}, G = /* @__PURE__ */ function() {
  function o(i, e) {
    gr || o.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), wo(this), this.init(i, e);
  }
  var t = o.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Kr) {
      this.update = this.refresh = this.kill = ti;
      return;
    }
    e = Va(Te(e) || Qr(e) || e.nodeType ? {
      trigger: e
    } : e, Xn);
    var n = e, s = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, p = n.scrub, c = n.trigger, h = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, y = n.onScrubComplete, x = n.onSnapComplete, w = n.once, v = n.snap, T = n.pinReparent, C = n.pinSpacer, S = n.containerAnimation, P = n.fastScrollEnd, k = n.preventOverlaps, E = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? pe : Bt, R = !p && p !== 0, O = _e(e.scroller || Z), Y = A.core.getCache(O), I = or(O), D = ("pinType" in e ? e.pinType : Ri(O, "pinType") || I && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], V = R && e.toggleActions.split(" "), it = "markers" in e ? e.markers : Xn.markers, at = I ? 0 : parseFloat(Ie(O)["border" + E.p2 + Nr]) || 0, m = this, rt = e.onRefreshInit && function() {
      return e.onRefreshInit(m);
    }, lt = Ph(O, I, E), de = Oh(O, I), nt = 0, q = 0, U = 0, ut = Ii(O, E), pt, Mt, Nt, gt, zt, z, J, $t, qt, b, Dt, oe, je, dt, B, Ye, Bi, Yt, vi, Et, Ve, Ae, ai, Yr, Rt, On, li, fr, hr, wi, Ni, Q, Yi, Xe, We, He, Vi, cr, ui;
    if (m._startClamp = m._endClamp = !1, m._dir = E, g *= 45, m.scroller = O, m.scroll = S ? S.time.bind(S) : ut, gt = ut(), m.vars = e, r = r || e.animation, "refreshPriority" in e && (vu = 1, e.refreshPriority === -9999 && (mn = m)), Y.tweenScroll = Y.tweenScroll || {
      top: Ga(O, Bt),
      left: Ga(O, pe)
    }, m.tweenTo = pt = Y.tweenScroll[E.p], m.scrubDuration = function(M) {
      Yi = Qr(M) && M, Yi ? Q ? Q.duration(M) : Q = A.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Yi,
        paused: !0,
        onComplete: function() {
          return y && y(m);
        }
      }) : (Q && Q.progress(1).kill(), Q = 0);
    }, r && (r.vars.lazy = !1, r._initted && !m.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), m.animation = r.pause(), r.scrollTrigger = m, m.scrubDuration(p), wi = 0, l || (l = r.vars.id)), v && ((!Ui(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in ot.style && A.set(I ? [ot, ke] : O, {
      scrollBehavior: "auto"
    }), K.forEach(function(M) {
      return ne(M) && M.target === (I ? _t.scrollingElement || ke : O) && (M.smooth = !1);
    }), Nt = ne(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Dh(r) : v.snapTo === "labelsDirectional" ? Rh(r) : v.directional !== !1 ? function(M, X) {
      return na(v.snapTo)(M, ie() - q < 500 ? 0 : X.direction);
    } : A.utils.snap(v.snapTo), Xe = v.duration || {
      min: 0.1,
      max: 2
    }, Xe = Ui(Xe) ? hn(Xe.min, Xe.max) : hn(Xe, Xe), We = A.delayedCall(v.delay || Yi / 2 || 0.1, function() {
      var M = ut(), X = ie() - q < 500, F = pt.tween;
      if ((X || Math.abs(m.getVelocity()) < 10) && !F && !Ss && nt !== M) {
        var W = (M - z) / dt, Vt = r && !R ? r.totalProgress() : W, tt = X ? 0 : (Vt - Ni) / (ie() - Zr) * 1e3 || 0, Ct = A.utils.clamp(-W, 1 - W, dr(tt / 2) * tt / 0.185), Jt = W + (v.inertia === !1 ? 0 : Ct), St, yt, ft = v, $e = ft.onStart, wt = ft.onInterrupt, xe = ft.onComplete;
        if (St = Nt(Jt, m), Qr(St) || (St = Jt), yt = Math.max(0, Math.round(z + St * dt)), M <= J && M >= z && yt !== M) {
          if (F && !F._initted && F.data <= dr(yt - M))
            return;
          v.inertia === !1 && (Ct = St - W), pt(yt, {
            duration: Xe(dr(Math.max(dr(Jt - Vt), dr(St - Vt)) * 0.185 / tt / 0.05 || 0)),
            ease: v.ease || "power3",
            data: dr(yt - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && wt && wt(m);
            },
            onComplete: function() {
              m.update(), nt = ut(), r && !R && (Q ? Q.resetTo("totalProgress", St, r._tTime / r._tDur) : r.progress(St)), wi = Ni = r && !R ? r.totalProgress() : m.progress, x && x(m), xe && xe(m);
            }
          }, M, Ct * dt, yt - M - Ct * dt), $e && $e(m, pt.tween);
        }
      } else m.isActive && nt !== M && We.restart(!0);
    }).pause()), l && (bo[l] = m), c = m.trigger = _e(c || h !== !0 && h), ui = c && c._gsap && c._gsap.stRevert, ui && (ui = ui(m)), h = h === !0 ? c : _e(h), Te(a) && (a = {
      targets: c,
      className: a
    }), h && (_ === !1 || _ === ze || (_ = !_ && h.parentNode && h.parentNode.style && Ie(h.parentNode).display === "flex" ? !1 : At), m.pin = h, Mt = A.core.getCache(h), Mt.spacer ? B = Mt.pinState : (C && (C = _e(C), C && !C.nodeType && (C = C.current || C.nativeElement), Mt.spacerIsNative = !!C, C && (Mt.spacerState = Hn(C))), Mt.spacer = Yt = C || _t.createElement("div"), Yt.classList.add("pin-spacer"), l && Yt.classList.add("pin-spacer-" + l), Mt.pinState = B = Hn(h)), e.force3D !== !1 && A.set(h, {
      force3D: !0
    }), m.spacer = Yt = Mt.spacer, hr = Ie(h), Yr = hr[_ + E.os2], Et = A.getProperty(h), Ve = A.quickSetter(h, E.a, Ft), Us(h, Yt, hr), Bi = Hn(h)), it) {
      oe = Ui(it) ? Va(it, Xa) : Xa, b = Wn("scroller-start", l, O, E, oe, 0), Dt = Wn("scroller-end", l, O, E, oe, 0, b), vi = b["offset" + E.op.d2];
      var Vr = _e(Ri(O, "content") || O);
      $t = this.markerStart = Wn("start", l, Vr, E, oe, vi, 0, S), qt = this.markerEnd = Wn("end", l, Vr, E, oe, vi, 0, S), S && (cr = A.quickSetter([$t, qt], E.a, Ft)), !D && !(ni.length && Ri(O, "fixedMarkers") === !0) && (Mh(I ? ot : O), A.set([b, Dt], {
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
      F !== m.isReverted && (F && (He = Math.max(ut(), m.scroll.rec || 0), U = m.progress, Vi = r && r.progress()), $t && [$t, qt, b, Dt].forEach(function(Vt) {
        return Vt.style.display = F ? "none" : "block";
      }), F && (ee = m, m.update(F)), h && (!T || !m.isActive) && (F ? zh(h, Yt, B) : Us(h, Yt, Ie(h), Rt)), F || m.update(F), ee = W, m.isReverted = F);
    }, m.refresh = function(M, X, F, W) {
      if (!((ee || !m.enabled) && !X)) {
        if (h && M && Ne) {
          Wt(o, "scrollEnd", Mu);
          return;
        }
        !he && rt && rt(m), ee = m, pt.tween && !F && (pt.tween.kill(), pt.tween = 0), Q && Q.pause(), d && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(xi) {
          return xi.vars.immediateRender && xi.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
        var Vt = lt(), tt = de(), Ct = S ? S.duration() : ri(O, E), Jt = dt <= 0.01 || !dt, St = 0, yt = W || 0, ft = Ui(F) ? F.end : e.end, $e = e.endTrigger || c, wt = Ui(F) ? F.start : e.start || (e.start === 0 || !c ? 0 : h ? "0 0" : "0 100%"), xe = m.pinnedContainer = e.pinnedContainer && _e(e.pinnedContainer, m), Ze = c && Math.max(0, j.indexOf(m)) || 0, Ut = Ze, Gt, Qt, Xi, Mn, te, It, Ke, ks, oa, Xr, Je, Wr, Dn;
        for (it && Ui(F) && (Wr = A.getProperty(b, E.p), Dn = A.getProperty(Dt, E.p)); Ut-- > 0; )
          It = j[Ut], It.end || It.refresh(0, 1) || (ee = m), Ke = It.pin, Ke && (Ke === c || Ke === h || Ke === xe) && !It.isReverted && (Xr || (Xr = []), Xr.unshift(It), It.revert(!0, !0)), It !== j[Ut] && (Ze--, Ut--);
        for (ne(wt) && (wt = wt(m)), wt = Fa(wt, "start", m), z = qa(wt, c, Vt, E, ut(), $t, b, m, tt, at, D, Ct, S, m._startClamp && "_startClamp") || (h ? -1e-3 : 0), ne(ft) && (ft = ft(m)), Te(ft) && !ft.indexOf("+=") && (~ft.indexOf(" ") ? ft = (Te(wt) ? wt.split(" ")[0] : "") + ft : (St = Jn(ft.substr(2), Vt), ft = Te(wt) ? wt : (S ? A.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, z) : z) + St, $e = c)), ft = Fa(ft, "end", m), J = Math.max(z, qa(ft || ($e ? "100% 0" : Ct), $e, Vt, E, ut() + St, qt, Dt, m, tt, at, D, Ct, S, m._endClamp && "_endClamp")) || -1e-3, St = 0, Ut = Ze; Ut--; )
          It = j[Ut] || {}, Ke = It.pin, Ke && It.start - It._pinPush <= z && !S && It.end > 0 && (Gt = It.end - (m._startClamp ? Math.max(0, It.start) : It.start), (Ke === c && It.start - It._pinPush < z || Ke === xe) && isNaN(wt) && (St += Gt * (1 - It.progress)), Ke === h && (yt += Gt));
        if (z += St, J += St, m._startClamp && (m._startClamp += St), m._endClamp && !he && (m._endClamp = J || -1e-3, J = Math.min(J, ri(O, E))), dt = J - z || (z -= 0.01) && 1e-3, Jt && (U = A.utils.clamp(0, 1, A.utils.normalize(z, J, He))), m._pinPush = yt, $t && St && (Gt = {}, Gt[E.a] = "+=" + St, xe && (Gt[E.p] = "-=" + ut()), A.set([$t, qt], Gt)), h && !(xo && m.end >= ri(O, E)))
          Gt = Ie(h), Mn = E === Bt, Xi = ut(), Ae = parseFloat(Et(E.a)) + yt, !Ct && J > 1 && (Je = (I ? _t.scrollingElement || ke : O).style, Je = {
            style: Je,
            value: Je["overflow" + E.a.toUpperCase()]
          }, I && Ie(ot)["overflow" + E.a.toUpperCase()] !== "scroll" && (Je.style["overflow" + E.a.toUpperCase()] = "scroll")), Us(h, Yt, Gt), Bi = Hn(h), Qt = ci(h, !0), ks = D && Ii(O, Mn ? pe : Bt)(), _ ? (Rt = [_ + E.os2, dt + yt + Ft], Rt.t = Yt, Ut = _ === At ? gs(h, E) + dt + yt : 0, Ut && (Rt.push(E.d, Ut + Ft), Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = Ut + Ft)), Mr(Rt), xe && j.forEach(function(xi) {
            xi.pin === xe && xi.vars.pinSpacing !== !1 && (xi._subPinOffset = !0);
          }), D && ut(He)) : (Ut = gs(h, E), Ut && Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = Ut + Ft)), D && (te = {
            top: Qt.top + (Mn ? Xi - z : ks) + Ft,
            left: Qt.left + (Mn ? ks : Xi - z) + Ft,
            boxSizing: "border-box",
            position: "fixed"
          }, te[er] = te["max" + Nr] = Math.ceil(Qt.width) + Ft, te[ir] = te["max" + ra] = Math.ceil(Qt.height) + Ft, te[ze] = te[ze + _n] = te[ze + pn] = te[ze + gn] = te[ze + dn] = "0", te[At] = Gt[At], te[At + _n] = Gt[At + _n], te[At + pn] = Gt[At + pn], te[At + gn] = Gt[At + gn], te[At + dn] = Gt[At + dn], Ye = Fh(B, te, T), he && ut(0)), r ? (oa = r._initted, Xs(1), r.render(r.duration(), !0, !0), ai = Et(E.a) - Ae + dt + yt, li = Math.abs(dt - ai) > 1, D && li && Ye.splice(Ye.length - 2, 2), r.render(0, !0, !0), oa || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Xs(0)) : ai = dt, Je && (Je.value ? Je.style["overflow" + E.a.toUpperCase()] = Je.value : Je.style.removeProperty("overflow-" + E.a));
        else if (c && ut() && !S)
          for (Qt = c.parentNode; Qt && Qt !== ot; )
            Qt._pinOffset && (z -= Qt._pinOffset, J -= Qt._pinOffset), Qt = Qt.parentNode;
        Xr && Xr.forEach(function(xi) {
          return xi.revert(!1, !0);
        }), m.start = z, m.end = J, gt = zt = he ? He : ut(), !S && !he && (gt < He && ut(He), m.scroll.rec = 0), m.revert(!1, !0), q = ie(), We && (nt = -1, We.restart(!0)), ee = 0, r && R && (r._initted || Vi) && r.progress() !== Vi && r.progress(Vi || 0, !0).render(r.time(), !0, !0), (Jt || U !== m.progress || S || d || r && !r._initted) && (r && !R && (r._initted || U || r.vars.immediateRender !== !1) && r.totalProgress(S && z < -1e-3 && !U ? A.utils.normalize(z, J, 0) : U, !0), m.progress = Jt || (gt - z) / dt === U ? 0 : U), h && _ && (Yt._pinOffset = Math.round(m.progress * ai)), Q && Q.invalidate(), isNaN(Wr) || (Wr -= A.getProperty(b, E.p), Dn -= A.getProperty(Dt, E.p), $n(b, E, Wr), $n($t, E, Wr - (W || 0)), $n(Dt, E, Dn), $n(qt, E, Dn - (W || 0))), Jt && !he && m.update(), f && !he && !je && (je = !0, f(m), je = !1);
      }
    }, m.getVelocity = function() {
      return (ut() - zt) / (ie() - Zr) * 1e3 || 0;
    }, m.endAnimation = function() {
      qr(m.callbackAnimation), r && (Q ? Q.progress(1) : r.paused() ? R || qr(r, m.direction < 0, 1) : qr(r, r.reversed()));
    }, m.labelToScroll = function(M) {
      return r && r.labels && (z || m.refresh() || z) + r.labels[M] / r.duration() * dt || 0;
    }, m.getTrailing = function(M) {
      var X = j.indexOf(m), F = m.direction > 0 ? j.slice(0, X).reverse() : j.slice(X + 1);
      return (Te(M) ? F.filter(function(W) {
        return W.vars.preventOverlaps === M;
      }) : F).filter(function(W) {
        return m.direction > 0 ? W.end <= z : W.start >= J;
      });
    }, m.update = function(M, X, F) {
      if (!(S && !F && !M)) {
        var W = he === !0 ? He : m.scroll(), Vt = M ? 0 : (W - z) / dt, tt = Vt < 0 ? 0 : Vt > 1 ? 1 : Vt || 0, Ct = m.progress, Jt, St, yt, ft, $e, wt, xe, Ze;
        if (X && (zt = gt, gt = S ? ut() : W, v && (Ni = wi, wi = r && !R ? r.totalProgress() : tt)), g && h && !ee && !Bn && Ne && (!tt && z < W + (W - zt) / (ie() - Zr) * g ? tt = 1e-4 : tt === 1 && J > W + (W - zt) / (ie() - Zr) * g && (tt = 0.9999)), tt !== Ct && m.enabled) {
          if (Jt = m.isActive = !!tt && tt < 1, St = !!Ct && Ct < 1, wt = Jt !== St, $e = wt || !!tt != !!Ct, m.direction = tt > Ct ? 1 : -1, m.progress = tt, $e && !ee && (yt = tt && !Ct ? 0 : tt === 1 ? 1 : Ct === 1 ? 2 : 3, R && (ft = !wt && V[yt + 1] !== "none" && V[yt + 1] || V[yt], Ze = r && (ft === "complete" || ft === "reset" || ft in r))), k && (wt || Ze) && (Ze || p || !r) && (ne(k) ? k(m) : m.getTrailing(k).forEach(function(Xi) {
            return Xi.endAnimation();
          })), R || (Q && !ee && !Bn ? (Q._dp._time - Q._start !== Q._time && Q.render(Q._dp._time - Q._start), Q.resetTo ? Q.resetTo("totalProgress", tt, r._tTime / r._tDur) : (Q.vars.totalProgress = tt, Q.invalidate().restart())) : r && r.totalProgress(tt, !!(ee && (q || M)))), h) {
            if (M && _ && (Yt.style[_ + E.os2] = Yr), !D)
              Ve(Jr(Ae + ai * tt));
            else if ($e) {
              if (xe = !M && tt > Ct && J + 1 > W && W + 1 >= ri(O, E), T)
                if (!M && (Jt || xe)) {
                  var Ut = ci(h, !0), Gt = W - z;
                  Ua(h, ot, Ut.top + (E === Bt ? Gt : 0) + Ft, Ut.left + (E === Bt ? 0 : Gt) + Ft);
                } else
                  Ua(h, Yt);
              Mr(Jt || xe ? Ye : Bi), li && tt < 1 && Jt || Ve(Ae + (tt === 1 && !xe ? ai : 0));
            }
          }
          v && !pt.tween && !ee && !Bn && We.restart(!0), a && (wt || w && tt && (tt < 1 || !Ws)) && En(a.targets).forEach(function(Xi) {
            return Xi.classList[Jt || w ? "add" : "remove"](a.className);
          }), s && !R && !M && s(m), $e && !ee ? (R && (Ze && (ft === "complete" ? r.pause().totalProgress(1) : ft === "reset" ? r.restart(!0).pause() : ft === "restart" ? r.restart(!0) : r[ft]()), s && s(m)), (wt || !Ws) && (u && wt && $s(m, u), $[yt] && $s(m, $[yt]), w && (tt === 1 ? m.kill(!1, 1) : $[yt] = 0), wt || (yt = tt === 1 ? 1 : 3, $[yt] && $s(m, $[yt]))), P && !Jt && Math.abs(m.getVelocity()) > (Qr(P) ? P : 2500) && (qr(m.callbackAnimation), Q ? Q.progress(1) : qr(r, ft === "reverse" ? 1 : !tt, 1))) : R && s && !ee && s(m);
        }
        if (fr) {
          var Qt = S ? W / S.duration() * (S._caScrollDist || 0) : W;
          On(Qt + (b._isFlipped ? 1 : 0)), fr(Qt);
        }
        cr && cr(-W / S.duration() * (S._caScrollDist || 0));
      }
    }, m.enable = function(M, X) {
      m.enabled || (m.enabled = !0, Wt(O, "resize", tn), I || Wt(O, "scroll", _r), rt && Wt(o, "refreshInit", rt), M !== !1 && (m.progress = U = 0, gt = zt = nt = ut()), X !== !1 && m.refresh());
    }, m.getTween = function(M) {
      return M && pt ? pt.tween : Q;
    }, m.setPositions = function(M, X, F, W) {
      if (S) {
        var Vt = S.scrollTrigger, tt = S.duration(), Ct = Vt.end - Vt.start;
        M = Vt.start + Ct * M / tt, X = Vt.start + Ct * X / tt;
      }
      m.refresh(!1, !1, {
        start: Ba(M, F && !!m._startClamp),
        end: Ba(X, F && !!m._endClamp)
      }, W), m.update();
    }, m.adjustPinSpacing = function(M) {
      if (Rt && M) {
        var X = Rt.indexOf(E.d) + 1;
        Rt[X] = parseFloat(Rt[X]) + M + Ft, Rt[1] = parseFloat(Rt[1]) + M + Ft, Mr(Rt);
      }
    }, m.disable = function(M, X) {
      if (M !== !1 && m.revert(!0, !0), m.enabled && (m.enabled = m.isActive = !1, X || Q && Q.pause(), He = 0, Mt && (Mt.uncache = 1), rt && Xt(o, "refreshInit", rt), We && (We.pause(), pt.tween && pt.tween.kill() && (pt.tween = 0)), !I)) {
        for (var F = j.length; F--; )
          if (j[F].scroller === O && j[F] !== m)
            return;
        Xt(O, "resize", tn), I || Xt(O, "scroll", _r);
      }
    }, m.kill = function(M, X) {
      m.disable(M, X), Q && !X && Q.kill(), l && delete bo[l];
      var F = j.indexOf(m);
      F >= 0 && j.splice(F, 1), F === fe && ts > 0 && fe--, F = 0, j.forEach(function(W) {
        return W.scroller === m.scroller && (F = 1);
      }), F || he || (m.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({
        kill: !1
      }), X || r.kill()), $t && [$t, qt, b, Dt].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), mn === m && (mn = 0), h && (Mt && (Mt.uncache = 1), F = 0, j.forEach(function(W) {
        return W.pin === h && F++;
      }), F || (Mt.spacer = 0)), e.onKill && e.onKill(m);
    }, j.push(m), m.enable(!1, !1), ui && ui(m), r && r.add && !dt) {
      var st = m.update;
      m.update = function() {
        m.update = st, K.cache++, z || J || m.refresh();
      }, A.delayedCall(0.01, m.update), dt = 0.01, z = J = 0;
    } else
      m.refresh();
    h && Lh();
  }, o.register = function(e) {
    return gr || (A = e || Su(), Tu() && window.document && o.enable(), gr = Kr), gr;
  }, o.defaults = function(e) {
    if (e)
      for (var r in e)
        Xn[r] = e[r];
    return Xn;
  }, o.disable = function(e, r) {
    Kr = 0, j.forEach(function(s) {
      return s[r ? "kill" : "disable"](e);
    }), Xt(Z, "wheel", _r), Xt(_t, "scroll", _r), clearInterval(Fn), Xt(_t, "touchcancel", ti), Xt(ot, "touchstart", ti), Yn(Xt, _t, "pointerdown,touchstart,mousedown", Na), Yn(Xt, _t, "pointerup,touchend,mouseup", Ya), _s.kill(), Nn(Xt);
    for (var n = 0; n < K.length; n += 3)
      Vn(Xt, K[n], K[n + 1]), Vn(Xt, K[n], K[n + 2]);
  }, o.enable = function() {
    if (Z = window, _t = document, ke = _t.documentElement, ot = _t.body, A && (En = A.utils.toArray, hn = A.utils.clamp, wo = A.core.context || ti, Xs = A.core.suppressOverwrites || ti, Qo = Z.history.scrollRestoration || "auto", To = Z.pageYOffset || 0, A.core.globals("ScrollTrigger", o), ot)) {
      Kr = 1, Or = document.createElement("div"), Or.style.height = "100vh", Or.style.position = "absolute", Lu(), Ch(), Ot.register(A), o.isTouch = Ot.isTouch, Ti = Ot.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vo = Ot.isTouch === 1, Wt(Z, "wheel", _r), Jo = [Z, _t, ke, ot], A.matchMedia ? (o.matchMedia = function(u) {
        var f = A.matchMedia(), p;
        for (p in u)
          f.add(p, u[p]);
        return f;
      }, A.addEventListener("matchMediaInit", function() {
        Ru(), sa();
      }), A.addEventListener("matchMediaRevert", function() {
        return Du();
      }), A.addEventListener("matchMedia", function() {
        ji(0, 1), lr("matchMedia");
      }), A.matchMedia().add("(orientation: portrait)", function() {
        return qs(), qs;
      })) : console.warn("Requires GSAP 3.11.0 or later"), qs(), Wt(_t, "scroll", _r);
      var e = ot.hasAttribute("style"), r = ot.style, n = r.borderTopStyle, s = A.core.Animation.prototype, a, l;
      for (s.revert || Object.defineProperty(s, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", a = ci(ot), Bt.m = Math.round(a.top + Bt.sc()) || 0, pe.m = Math.round(a.left + pe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (ot.setAttribute("style", ""), ot.removeAttribute("style")), Fn = setInterval(Wa, 250), A.delayedCall(0.5, function() {
        return Bn = 0;
      }), Wt(_t, "touchcancel", ti), Wt(ot, "touchstart", ti), Yn(Wt, _t, "pointerdown,touchstart,mousedown", Na), Yn(Wt, _t, "pointerup,touchend,mouseup", Ya), yo = A.utils.checkPrefix("transform"), es.push(yo), gr = ie(), _s = A.delayedCall(0.2, ji).pause(), mr = [_t, "visibilitychange", function() {
        var u = Z.innerWidth, f = Z.innerHeight;
        _t.hidden ? (za = u, Ia = f) : (za !== u || Ia !== f) && tn();
      }, _t, "DOMContentLoaded", ji, Z, "load", ji, Z, "resize", tn], Nn(Wt), j.forEach(function(u) {
        return u.enable(0, 1);
      }), l = 0; l < K.length; l += 3)
        Vn(Xt, K[l], K[l + 1]), Vn(Xt, K[l], K[l + 2]);
    }
  }, o.config = function(e) {
    "limitCallbacks" in e && (Ws = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(Fn) || (Fn = r) && setInterval(Wa, r), "ignoreMobileResize" in e && (vo = o.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (Nn(Xt) || Nn(Wt, e.autoRefreshEvents || "none"), wu = (e.autoRefreshEvents + "").indexOf("resize") === -1);
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
    var s = e.getBoundingClientRect(), a = s[n ? er : ir], l = r == null ? a / 2 : r in ms ? ms[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (s.left + l) / Z.innerWidth : (s.top + l) / Z.innerHeight;
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
      i >= 0 && be.splice(i, 5), be.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), A.core.getCache(t), wo());
    }
  }) : be;
};
G.revert = function(o, t) {
  return sa(!o, t);
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
G.clearScrollMemory = Au;
G.maxScroll = function(o, t) {
  return ri(o, t ? pe : Bt);
};
G.getScrollFunc = function(o, t) {
  return Ii(_e(o), t ? pe : Bt);
};
G.getById = function(o) {
  return bo[o];
};
G.getAll = function() {
  return j.filter(function(o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function() {
  return !!Ne;
};
G.snapDirectional = na;
G.addEventListener = function(o, t) {
  var i = ar[o] || (ar[o] = []);
  ~i.indexOf(t) || i.push(t);
};
G.removeEventListener = function(o, t) {
  var i = ar[o], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
G.batch = function(o, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, s = function(u, f) {
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
  })), En(o).forEach(function(l) {
    var u = {};
    for (a in e)
      u[a] = e[a];
    u.trigger = l, i.push(G.create(u));
  }), i;
};
var ja = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, Gs = function o(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Ot.isTouch ? " pinch-zoom" : "") : "none", t === ke && o(ot, i);
}, qn = {
  auto: 1,
  scroll: 1
}, Nh = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, s = n._gsap || A.core.getCache(n), a = ie(), l;
  if (!s._isScrollT || a - s._isScrollT > 2e3) {
    for (; n && n !== ot && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(qn[(l = Ie(n)).overflowY] || qn[l.overflowX])); )
      n = n.parentNode;
    s._isScroll = n && n !== e && !or(n) && (qn[(l = Ie(n)).overflowY] || qn[l.overflowX]), s._isScrollT = a;
  }
  (s._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, Iu = function(t, i, e, r) {
  return Ot.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && Nh,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && Wt(_t, Ot.eventTypes[0], Ka, !1, !0);
    },
    onDisable: function() {
      return Xt(_t, Ot.eventTypes[0], Ka, !0);
    }
  });
}, Yh = /(input|label|select|textarea)/i, Za, Ka = function(t) {
  var i = Yh.test(t.target.tagName);
  (i || Za) && (t._gsapAllow = !0, Za = i);
}, Vh = function(t) {
  Ui(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, s = i.onRelease, a, l, u = _e(t.target) || ke, f = A.core.globals().ScrollSmoother, p = f && f.get(), c = Ti && (t.content && _e(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), h = Ii(u, Bt), _ = Ii(u, pe), d = 1, g = (Ot.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth, y = 0, x = ne(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, w, v, T = Iu(u, t.type, !0, n), C = function() {
    return v = !1;
  }, S = ti, P = ti, k = function() {
    l = ri(u, Bt), P = hn(Ti ? 1 : 0, l), e && (S = hn(0, ri(u, pe))), w = rr;
  }, E = function() {
    c._gsap.y = Jr(parseFloat(c._gsap.y) + h.offset) + "px", c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(c._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0;
  }, R = function() {
    if (v) {
      requestAnimationFrame(C);
      var it = Jr(a.deltaY / 2), at = P(h.v - it);
      if (c && at !== h.v + h.offset) {
        h.offset = at - h.v;
        var m = Jr((parseFloat(c && c._gsap.y) || 0) - h.offset);
        c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", c._gsap.y = m + "px", h.cacheID = K.cache, gi();
      }
      return !0;
    }
    h.offset && E(), v = !0;
  }, O, Y, I, D, $ = function() {
    k(), O.isActive() && O.vars.scrollY > l && (h() > l ? O.progress(1) && h(l) : O.resetTo("scrollY", l));
  };
  return c && A.set(c, {
    y: "+=0"
  }), t.ignoreCheck = function(V) {
    return Ti && V.type === "touchmove" && R() || d > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var V = d;
    d = Jr((Z.visualViewport && Z.visualViewport.scale || 1) / g), O.pause(), V !== d && Gs(u, d > 1.01 ? !0 : e ? !1 : "x"), Y = _(), I = h(), k(), w = rr;
  }, t.onRelease = t.onGestureStart = function(V, it) {
    if (h.offset && E(), !it)
      D.restart(!0);
    else {
      K.cache++;
      var at = x(), m, rt;
      e && (m = _(), rt = m + at * 0.05 * -V.velocityX / 0.227, at *= ja(_, m, rt, ri(u, pe)), O.vars.scrollX = S(rt)), m = h(), rt = m + at * 0.05 * -V.velocityY / 0.227, at *= ja(h, m, rt, ri(u, Bt)), O.vars.scrollY = P(rt), O.invalidate().duration(at).play(0.01), (Ti && O.vars.scrollY >= l || m >= l - 1) && A.to({}, {
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
      var lt = rt[2] === at, de = lt ? I + V.startY - V.y : h() + at - rt[1], nt = P(de);
      lt && de !== nt && (I += nt - de), h(nt);
    }
    (at || it) && gi();
  }, t.onEnable = function() {
    Gs(u, e ? !1 : "x"), G.addEventListener("refresh", $), Wt(Z, "resize", $), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = _.smooth = !1), T.enable();
  }, t.onDisable = function() {
    Gs(u, !0), Xt(Z, "resize", $), G.removeEventListener("refresh", $), T.kill();
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
  var t = o instanceof Ot ? o : Vh(o);
  return ue && ue.target === t.target && ue.kill(), or(t.target) && (ue = t), t;
};
G.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: mo,
  _inputObserver: Iu,
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
Su() && A.registerPlugin(G);
var Ja = "1.3.19";
function Fu(o, t, i) {
  return Math.max(o, Math.min(t, i));
}
function Xh(o, t, i) {
  return (1 - i) * o + i * t;
}
function Wh(o, t, i, e) {
  return Xh(o, t, 1 - Math.exp(-i * e));
}
function Hh(o, t) {
  return (o % t + t) % t;
}
var $h = class {
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
      const e = Fu(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Wh(this.value, this.to, this.lerp * 60, o), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
var Uh = class {
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
}, Bu = class {
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
}, Gh = 100 / 6, bi = { passive: !1 };
function Qa(o, t) {
  return o === 1 ? Gh : o === 2 ? t : 1;
}
var jh = class {
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
    L(this, "emitter", new Bu());
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
      const r = Qa(e, this.window.width), n = Qa(e, this.window.height);
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
}, tl = (o) => Math.min(1, 1.001 - 2 ** (-10 * o)), Zh = class {
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
    easing: l,
    lerp: u = 0.1,
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
    L(this, "animate", new $h());
    L(this, "emitter", new Bu());
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
      const l = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (s || l)
        return;
      let u = e.composedPath();
      u = u.slice(0, u.indexOf(this.rootElement));
      const f = this.options.prevent, p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (u.find(
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
    window.lenisVersion = Ja, window.lenis || (window.lenis = {}), window.lenis.version = Ja, p === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), (!o || o === document.documentElement) && (o = window), typeof a == "number" && typeof l != "function" ? l = tl : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: o,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
      syncTouch: r,
      syncTouchLerp: n,
      touchInertiaExponent: s,
      duration: a,
      easing: l,
      lerp: u,
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
    }, this.dimensions = new Uh(o, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new jh(i, {
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
    onStart: l,
    onComplete: u,
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
        c = Fu(0, c, this.limit);
      if (c === this.targetScroll) {
        l == null || l(this), u == null || u(this);
        return;
      }
      if (this.userData = p ?? {}, i) {
        this.animatedScroll = this.targetScroll = c, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = c), typeof s == "number" && typeof a != "function" ? a = tl : typeof a == "function" && typeof s != "number" && (s = 1), this.animate.fromTo(this.animatedScroll, c, {
        duration: s,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", l == null || l(this);
        },
        onUpdate: (_, d) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), r && (this.targetScroll = _), d || this.emit(), d && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
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
    let n, s, a, l, u, f, p, c, h, _;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const S = window.getComputedStyle(o);
      if (r.computedStyle = S, n = ["auto", "overlay", "scroll"].includes(
        S.overflowX
      ), s = ["auto", "overlay", "scroll"].includes(
        S.overflowY
      ), u = ["auto"].includes(
        S.overscrollBehaviorX
      ), f = ["auto"].includes(
        S.overscrollBehaviorY
      ), r.hasOverflowX = n, r.hasOverflowY = s, !(n || s)) return !1;
      p = o.scrollWidth, c = o.scrollHeight, h = o.clientWidth, _ = o.clientHeight, a = p > h, l = c > _, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = p, r.scrollHeight = c, r.clientWidth = h, r.clientHeight = _, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = f;
    } else
      a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, s = r.hasOverflowY, p = r.scrollWidth, c = r.scrollHeight, h = r.clientWidth, _ = r.clientHeight, u = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
    if (!(n && a || s && l))
      return !1;
    const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, y, x, w, v, T;
    if (d === "horizontal")
      g = Math.round(o.scrollLeft), y = p - h, x = t, w = n, v = a, T = u;
    else if (d === "vertical")
      g = Math.round(o.scrollTop), y = c - _, x = i, w = s, v = l, T = f;
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
    return this.options.infinite ? Hh(this.animatedScroll, this.limit) : this.animatedScroll;
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
}, Nu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Yu = { exports: {} }, js = { exports: {} }, el;
function Jh() {
  return el || (el = 1, function(o) {
    (function(t, i) {
      o.exports ? o.exports = i() : t.EvEmitter = i();
    })(typeof window < "u" ? window : Nu, function() {
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
  }(js)), js.exports;
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
    typeof window < "u" ? window : Nu,
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
      const l = [1, 9, 11];
      a.prototype.addElementImages = function(c) {
        c.nodeName === "IMG" && this.addImage(c), this.options.background === !0 && this.addElementBackgroundImages(c);
        let { nodeType: h } = c;
        if (!h || !l.includes(h)) return;
        let _ = c.querySelectorAll("img");
        for (let d of _)
          this.addImage(d);
        if (typeof this.options.background == "string") {
          let d = c.querySelectorAll(this.options.background);
          for (let g of d)
            this.addElementBackgroundImages(g);
        }
      };
      const u = /url\((['"])?(.*?)\1\)/gi;
      a.prototype.addElementBackgroundImages = function(c) {
        let h = getComputedStyle(c);
        if (!h) return;
        let _ = u.exec(h.backgroundImage);
        for (; _ !== null; ) {
          let d = _ && _[2];
          d && this.addBackground(d, c), _ = u.exec(h.backgroundImage);
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
})(Yu);
var Qh = Yu.exports;
const tc = /* @__PURE__ */ Kh(Qh);
wr.registerPlugin(Br, G);
const il = {
  1: { flip: { absoluteOnLeave: !0, scale: !1 } },
  2: {},
  3: {
    flip: { absolute: !0, scale: !1 },
    scrollTrigger: { start: "center center", end: "+=900%" },
    stagger: 0.05
  },
  4: {},
  5: {},
  6: {},
  7: {},
  8: { flip: { scale: !1 } },
  9: {}
};
function ec(o) {
  const t = o.querySelectorAll(".gallery__item, .gallery__item-inner");
  return new Promise((i) => {
    if (!t.length) {
      i();
      return;
    }
    tc(t, { background: !0 }, () => i());
  });
}
function ic(o) {
  const t = o.getAttribute("data-csla-options");
  if (t)
    try {
      return JSON.parse(t);
    } catch (e) {
      console.warn("[scroll-based-layout-animations] data-csla-options JSON invalide", e);
    }
  const i = o.getAttribute("data-csla-preset");
  return i && Object.prototype.hasOwnProperty.call(il, i) ? JSON.parse(JSON.stringify(il[i])) : {};
}
function rc(o, t) {
  let i = {
    flip: {
      absoluteOnLeave: !1,
      absolute: !1,
      scale: !0,
      simple: !0
    },
    scrollTrigger: {
      start: "center center",
      end: "+=300%"
    },
    stagger: 0
  };
  i = Object.assign({}, i, t);
  const e = o.querySelector(".caption"), r = o.querySelectorAll(".gallery__item"), n = [...r].map((l) => l.children.length > 0 ? [...l.children] : []).flat();
  o.classList.add("gallery--switch");
  const s = Br.getState([r, e], {
    props: "filter, opacity"
  });
  o.classList.remove("gallery--switch");
  const a = Br.to(s, {
    ease: "none",
    absoluteOnLeave: i.flip.absoluteOnLeave,
    absolute: i.flip.absolute,
    scale: i.flip.scale,
    simple: i.flip.simple,
    scrollTrigger: {
      trigger: o,
      start: i.scrollTrigger.start,
      end: i.scrollTrigger.end,
      pin: o.parentNode,
      scrub: !0
    },
    stagger: i.stagger
  });
  n.length && a.fromTo(
    n,
    { scale: 2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: o,
        start: i.scrollTrigger.start,
        end: i.scrollTrigger.end,
        scrub: !0
      }
    },
    0
  );
}
function nc(o) {
  o._scrollBasedLayoutAnimationsCleanup && o._scrollBasedLayoutAnimationsCleanup();
  let t = !1, i = null, e = null, r = null;
  const n = () => {
    t = !0, i == null || i.revert(), i = null, r && (wr.ticker.remove(r), r = null), e == null || e.destroy(), e = null, o.classList.remove("csla-js", "csla-loading"), G.refresh();
  };
  return o._scrollBasedLayoutAnimationsCleanup = n, o.classList.add("csla-js", "csla-loading"), ec(o).then(() => {
    t || (o.classList.remove("csla-loading"), i = wr.context(() => {
      o.getAttribute("data-csla-lenis") === "true" && (e = new Zh({
        lerp: 0.1,
        smoothWheel: !0
      }), e.on("scroll", () => G.update()), r = (a) => e.raf(a * 1e3), wr.ticker.add(r), wr.ticker.lagSmoothing(0)), o.querySelectorAll(".gallery").forEach((a) => {
        if (a.querySelector(".gallery__item"))
          try {
            rc(a, ic(a));
          } catch (l) {
            console.error("[scroll-based-layout-animations] Flip / ScrollTrigger", l);
          }
      });
    }, o), G.refresh());
  }), n;
}
if (typeof window < "u") {
  const o = () => {
    document.querySelectorAll('[data-component="scroll-based-layout-animations"]').forEach((t) => nc(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, { once: !0 }) : o();
}
export {
  nc as initScrollBasedLayoutAnimations
};

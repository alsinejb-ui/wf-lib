var Hu = Object.defineProperty;
var $u = (o, t, i) => t in o ? Hu(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var L = (o, t, i) => $u(o, typeof t != "symbol" ? t + "" : t, i);
function qu(o, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e);
  }
}
function Uu(o, t, i) {
  return t && qu(o.prototype, t), o;
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Kt, Un, ke, Ei, ki, Tr, sl, $i, tn, ol, pi, qe, al, ll = function() {
  return Kt || typeof window < "u" && (Kt = window.gsap) && Kt.registerPlugin && Kt;
}, ul = 1, yr = [], Z = [], ni = [], en = Date.now, Ks = function(t, i) {
  return i;
}, Gu = function() {
  var t = tn.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, Z), r.push.apply(r, ni), Z = e, ni = r, Ks = function(s, a) {
    return i[s](a);
  };
}, Mi = function(t, i) {
  return ~ni.indexOf(t) && ni[ni.indexOf(t) + 1][i];
}, rn = function(t) {
  return !!~ol.indexOf(t);
}, le = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, ae = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Dn = "scrollLeft", An = "scrollTop", Zs = function() {
  return pi && pi.isPressed || Z.cache++;
}, rs = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      ul && (ke.history.scrollRestoration = "manual");
      var s = pi && pi.isPressed;
      n = r.v = Math.round(n) || (pi && pi.iOS ? 1 : 0), t(n), r.cacheID = Z.cache, s && Ks("ss", n);
    } else (i || Z.cache !== r.cacheID || Ks("ref")) && (r.cacheID = Z.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, ce = {
  s: Dn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: rs(function(o) {
    return arguments.length ? ke.scrollTo(o, Nt.sc()) : ke.pageXOffset || Ei[Dn] || ki[Dn] || Tr[Dn] || 0;
  })
}, Nt = {
  s: An,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: ce,
  sc: rs(function(o) {
    return arguments.length ? ke.scrollTo(ce.sc(), o) : ke.pageYOffset || Ei[An] || ki[An] || Tr[An] || 0;
  })
}, _e = function(t, i) {
  return (i && i._ctx && i._ctx.selector || Kt.utils.toArray)(t)[0] || (typeof t == "string" && Kt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, ju = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, Ri = function(t, i) {
  var e = i.s, r = i.sc;
  rn(t) && (t = Ei.scrollingElement || ki);
  var n = Z.indexOf(t), s = r === Nt.sc ? 1 : 2;
  !~n && (n = Z.push(t) - 1), Z[n + s] || le(t, "scroll", Zs);
  var a = Z[n + s], u = a || (Z[n + s] = rs(Mi(t, e), !0) || (rn(t) ? r : rs(function(l) {
    return arguments.length ? t[e] = l : t[e];
  })));
  return u.target = t, a || (u.smooth = Kt.getProperty(t, "scrollBehavior") === "smooth"), u;
}, Qs = function(t, i, e) {
  var r = t, n = t, s = en(), a = s, u = i || 50, l = Math.max(500, u * 3), f = function(_, d) {
    var g = en();
    d || g - s > u ? (n = r, r = _, a = s, s = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (s - a);
  }, p = function() {
    n = r = e ? 0 : r, a = s = 0;
  }, h = function(_) {
    var d = a, g = n, m = en();
    return (_ || _ === 0) && _ !== r && f(_), s === a || m - a > l ? 0 : (r + (e ? g : -g)) / ((e ? m : s) - d) * 1e3;
  };
  return {
    update: f,
    reset: p,
    getVelocity: h
  };
}, Wr = function(t, i) {
  return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, la = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, fl = function() {
  tn = Kt.core.globals().ScrollTrigger, tn && tn.core && Gu();
}, hl = function(t) {
  return Kt = t || ll(), !Un && Kt && typeof document < "u" && document.body && (ke = window, Ei = document, ki = Ei.documentElement, Tr = Ei.body, ol = [ke, Ei, ki, Tr], Kt.utils.clamp, al = Kt.core.context || function() {
  }, $i = "onpointerenter" in Tr ? "pointer" : "mouse", sl = Ot.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, qe = Ot.eventTypes = ("ontouchstart" in ki ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ki ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return ul = 0;
  }, 500), fl(), Un = 1), Un;
};
ce.op = Nt;
Z.cache = 0;
var Ot = /* @__PURE__ */ function() {
  function o(i) {
    this.init(i);
  }
  var t = o.prototype;
  return t.init = function(e) {
    Un || hl(Kt) || console.warn("Please gsap.registerPlugin(Observer)"), tn || fl();
    var r = e.tolerance, n = e.dragMinimum, s = e.type, a = e.target, u = e.lineHeight, l = e.debounce, f = e.preventDefault, p = e.onStop, h = e.onStopDelay, c = e.ignore, _ = e.wheelSpeed, d = e.event, g = e.onDragStart, m = e.onDragEnd, x = e.onDrag, w = e.onPress, v = e.onRelease, b = e.onRight, E = e.onLeft, S = e.onUp, P = e.onDown, k = e.onChangeX, C = e.onChangeY, A = e.onChange, O = e.onToggleX, Y = e.onToggleY, I = e.onHover, D = e.onHoverEnd, $ = e.onMove, V = e.ignoreCheck, it = e.isNormalizer, at = e.onGestureStart, y = e.onGestureEnd, rt = e.onWheel, lt = e.onEnable, de = e.onDisable, nt = e.onClick, q = e.scrollSpeed, U = e.capture, ut = e.allowClicks, pt = e.lockAxis, Mt = e.onLockAxis;
    this.target = a = _e(a) || ki, this.vars = e, c && (c = Kt.utils.toArray(c)), r = r || 1e-9, n = n || 0, _ = _ || 1, q = q || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(ke.getComputedStyle(Tr).lineHeight) || 22);
    var Bt, gt, zt, z, Q, $t, qt, T = this, Dt = 0, oe = 0, je = e.passive || !f && e.passive !== !1, dt = Ri(a, ce), N = Ri(a, Nt), Ye = dt(), Ni = N(), Yt = ~s.indexOf("touch") && !~s.indexOf("pointer") && qe[0] === "pointerdown", vi = rn(a), kt = a.ownerDocument || Ei, Ve = [0, 0, 0], Re = [0, 0, 0], ai = 0, Br = function() {
      return ai = en();
    }, At = function(B, st) {
      return (T.event = B) && c && ju(B.target, c) || st && Yt && B.pointerType !== "touch" || V && V(B, st);
    }, Pn = function() {
      T._vx.reset(), T._vy.reset(), gt.pause(), p && p(T);
    }, li = function() {
      var B = T.deltaX = la(Ve), st = T.deltaY = la(Re), M = Math.abs(B) >= r, X = Math.abs(st) >= r;
      A && (M || X) && A(T, B, st, Ve, Re), M && (b && T.deltaX > 0 && b(T), E && T.deltaX < 0 && E(T), k && k(T), O && T.deltaX < 0 != Dt < 0 && O(T), Dt = T.deltaX, Ve[0] = Ve[1] = Ve[2] = 0), X && (P && T.deltaY > 0 && P(T), S && T.deltaY < 0 && S(T), C && C(T), Y && T.deltaY < 0 != oe < 0 && Y(T), oe = T.deltaY, Re[0] = Re[1] = Re[2] = 0), (z || zt) && ($ && $(T), zt && (g && zt === 1 && g(T), x && x(T), zt = 0), z = !1), $t && !($t = !1) && Mt && Mt(T), Q && (rt(T), Q = !1), Bt = 0;
    }, fr = function(B, st, M) {
      Ve[M] += B, Re[M] += st, T._vx.update(B), T._vy.update(st), l ? Bt || (Bt = requestAnimationFrame(li)) : li();
    }, hr = function(B, st) {
      pt && !qt && (T.axis = qt = Math.abs(B) > Math.abs(st) ? "x" : "y", $t = !0), qt !== "y" && (Ve[2] += B, T._vx.update(B, !0)), qt !== "x" && (Re[2] += st, T._vy.update(st, !0)), l ? Bt || (Bt = requestAnimationFrame(li)) : li();
    }, wi = function(B) {
      if (!At(B, 1)) {
        B = Wr(B, f);
        var st = B.clientX, M = B.clientY, X = st - T.x, F = M - T.y, W = T.isDragging;
        T.x = st, T.y = M, (W || (X || F) && (Math.abs(T.startX - st) >= n || Math.abs(T.startY - M) >= n)) && (zt || (zt = W ? 2 : 1), W || (T.isDragging = !0), hr(X, F));
      }
    }, Bi = T.onPress = function(H) {
      At(H, 1) || H && H.button || (T.axis = qt = null, gt.pause(), T.isPressed = !0, H = Wr(H), Dt = oe = 0, T.startX = T.x = H.clientX, T.startY = T.y = H.clientY, T._vx.reset(), T._vy.reset(), le(it ? a : kt, qe[1], wi, je, !0), T.deltaX = T.deltaY = 0, w && w(T));
    }, J = T.onRelease = function(H) {
      if (!At(H, 1)) {
        ae(it ? a : kt, qe[1], wi, !0);
        var B = !isNaN(T.y - T.startY), st = T.isDragging, M = st && (Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3), X = Wr(H);
        !M && B && (T._vx.reset(), T._vy.reset(), f && ut && Kt.delayedCall(0.08, function() {
          if (en() - ai > 300 && !H.defaultPrevented) {
            if (H.target.click)
              H.target.click();
            else if (kt.createEvent) {
              var F = kt.createEvent("MouseEvents");
              F.initMouseEvent("click", !0, !0, ke, 1, X.screenX, X.screenY, X.clientX, X.clientY, !1, !1, !1, !1, 0, null), H.target.dispatchEvent(F);
            }
          }
        })), T.isDragging = T.isGesturing = T.isPressed = !1, p && st && !it && gt.restart(!0), zt && li(), m && st && m(T), v && v(T, M);
      }
    }, Yi = function(B) {
      return B.touches && B.touches.length > 1 && (T.isGesturing = !0) && at(B, T.isDragging);
    }, Xe = function() {
      return (T.isGesturing = !1) || y(T);
    }, We = function(B) {
      if (!At(B)) {
        var st = dt(), M = N();
        fr((st - Ye) * q, (M - Ni) * q, 1), Ye = st, Ni = M, p && gt.restart(!0);
      }
    }, He = function(B) {
      if (!At(B)) {
        B = Wr(B, f), rt && (Q = !0);
        var st = (B.deltaMode === 1 ? u : B.deltaMode === 2 ? ke.innerHeight : 1) * _;
        fr(B.deltaX * st, B.deltaY * st, 0), p && !it && gt.restart(!0);
      }
    }, Vi = function(B) {
      if (!At(B)) {
        var st = B.clientX, M = B.clientY, X = st - T.x, F = M - T.y;
        T.x = st, T.y = M, z = !0, p && gt.restart(!0), (X || F) && hr(X, F);
      }
    }, cr = function(B) {
      T.event = B, I(T);
    }, ui = function(B) {
      T.event = B, D(T);
    }, Yr = function(B) {
      return At(B) || Wr(B, f) && nt(T);
    };
    gt = T._dc = Kt.delayedCall(h || 0.25, Pn).pause(), T.deltaX = T.deltaY = 0, T._vx = Qs(0, 50, !0), T._vy = Qs(0, 50, !0), T.scrollX = dt, T.scrollY = N, T.isDragging = T.isGesturing = T.isPressed = !1, al(this), T.enable = function(H) {
      return T.isEnabled || (le(vi ? kt : a, "scroll", Zs), s.indexOf("scroll") >= 0 && le(vi ? kt : a, "scroll", We, je, U), s.indexOf("wheel") >= 0 && le(a, "wheel", He, je, U), (s.indexOf("touch") >= 0 && sl || s.indexOf("pointer") >= 0) && (le(a, qe[0], Bi, je, U), le(kt, qe[2], J), le(kt, qe[3], J), ut && le(a, "click", Br, !0, !0), nt && le(a, "click", Yr), at && le(kt, "gesturestart", Yi), y && le(kt, "gestureend", Xe), I && le(a, $i + "enter", cr), D && le(a, $i + "leave", ui), $ && le(a, $i + "move", Vi)), T.isEnabled = !0, T.isDragging = T.isGesturing = T.isPressed = z = zt = !1, T._vx.reset(), T._vy.reset(), Ye = dt(), Ni = N(), H && H.type && Bi(H), lt && lt(T)), T;
    }, T.disable = function() {
      T.isEnabled && (yr.filter(function(H) {
        return H !== T && rn(H.target);
      }).length || ae(vi ? kt : a, "scroll", Zs), T.isPressed && (T._vx.reset(), T._vy.reset(), ae(it ? a : kt, qe[1], wi, !0)), ae(vi ? kt : a, "scroll", We, U), ae(a, "wheel", He, U), ae(a, qe[0], Bi, U), ae(kt, qe[2], J), ae(kt, qe[3], J), ae(a, "click", Br, !0), ae(a, "click", Yr), ae(kt, "gesturestart", Yi), ae(kt, "gestureend", Xe), ae(a, $i + "enter", cr), ae(a, $i + "leave", ui), ae(a, $i + "move", Vi), T.isEnabled = T.isPressed = T.isDragging = !1, de && de(T));
    }, T.kill = T.revert = function() {
      T.disable();
      var H = yr.indexOf(T);
      H >= 0 && yr.splice(H, 1), pi === T && (pi = 0);
    }, yr.push(T), it && rn(a) && (pi = T), T.enable(d);
  }, Uu(o, [{
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
Ot.register = hl;
Ot.getAll = function() {
  return yr.slice();
};
Ot.getById = function(o) {
  return yr.filter(function(t) {
    return t.vars.id === o;
  })[0];
};
ll() && Kt.registerPlugin(Ot);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var R, gr, K, _t, Ee, ot, Eo, ns, mn, nn, qr, Rn, ee, ys, Js, fe, ua, fa, mr, cl, ks, pl, ue, to, dl, _l, Ti, eo, ko, Sr, Co, sn, io, Cs, Ln = 1, ie = Date.now, Ps = ie(), Be = 0, Ur = 0, ha = function(t, i, e) {
  var r = Te(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, ca = function(t, i) {
  return i && (!Te(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Ku = function o() {
  return Ur && requestAnimationFrame(o);
}, pa = function() {
  return ys = 1;
}, da = function() {
  return ys = 0;
}, Je = function(t) {
  return t;
}, Gr = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, gl = function() {
  return typeof window < "u";
}, ml = function() {
  return R || gl() && (R = window.gsap) && R.registerPlugin && R;
}, nr = function(t) {
  return !!~Eo.indexOf(t);
}, yl = function(t) {
  return (t === "Height" ? Co : K["inner" + t]) || Ee["client" + t] || ot["client" + t];
}, vl = function(t) {
  return Mi(t, "getBoundingClientRect") || (nr(t) ? function() {
    return Qn.width = K.innerWidth, Qn.height = Co, Qn;
  } : function() {
    return ci(t);
  });
}, Zu = function(t, i, e) {
  var r = e.d, n = e.d2, s = e.a;
  return (s = Mi(t, "getBoundingClientRect")) ? function() {
    return s()[r];
  } : function() {
    return (i ? yl(n) : t["client" + n]) || 0;
  };
}, Qu = function(t, i) {
  return !i || ~ni.indexOf(t) ? vl(t) : function() {
    return Qn;
  };
}, ii = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, s = i.a;
  return Math.max(0, (e = "scroll" + r) && (s = Mi(t, e)) ? s() - vl(t)()[n] : nr(t) ? (Ee[e] || ot[e]) - yl(r) : t[e] - t["offset" + r]);
}, zn = function(t, i) {
  for (var e = 0; e < mr.length; e += 3)
    (!i || ~i.indexOf(mr[e + 1])) && t(mr[e], mr[e + 1], mr[e + 2]);
}, Te = function(t) {
  return typeof t == "string";
}, re = function(t) {
  return typeof t == "function";
}, jr = function(t) {
  return typeof t == "number";
}, qi = function(t) {
  return typeof t == "object";
}, Hr = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, Os = function(t, i) {
  if (t.enabled) {
    var e = t._ctx ? t._ctx.add(function() {
      return i(t);
    }) : i(t);
    e && e.totalTime && (t.callbackAnimation = e);
  }
}, pr = Math.abs, wl = "left", xl = "top", Po = "right", Oo = "bottom", Ki = "width", Zi = "height", on = "Right", an = "Left", ln = "Top", un = "Bottom", Rt = "padding", ze = "margin", Mr = "Width", Mo = "Height", Ft = "px", Ie = function(t) {
  return K.getComputedStyle(t);
}, Ju = function(t) {
  var i = Ie(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, _a = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, ci = function(t, i) {
  var e = i && Ie(t)[Js] !== "matrix(1, 0, 0, 1, 0, 0)" && R.to(t, {
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
}, ss = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, bl = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, tf = function(t) {
  return function(i) {
    return R.utils.snap(bl(t), i);
  };
}, Do = function(t) {
  var i = R.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
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
}, ef = function(t) {
  return function(i, e) {
    return Do(bl(t))(i, e.direction);
  };
}, In = function(t, i, e, r) {
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
}, Fn = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, ga = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Nn = {
  toggleActions: "play",
  anticipatePin: 0
}, os = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Gn = function(t, i) {
  if (Te(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in os ? os[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, Bn = function(t, i, e, r, n, s, a, u) {
  var l = n.startColor, f = n.endColor, p = n.fontSize, h = n.indent, c = n.fontWeight, _ = _t.createElement("div"), d = nr(e) || Mi(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, m = d ? ot : e, x = t.indexOf("start") !== -1, w = x ? l : f, v = "border-color:" + w + ";font-size:" + p + ";color:" + w + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((g || u) && d ? "fixed;" : "absolute;"), (g || u || !d) && (v += (r === Nt ? Po : Oo) + ":" + (s + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = x, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_), _._offset = _["offset" + r.op.d2], jn(_, 0, r, x), _;
}, jn = function(t, i, e, r) {
  var n = {
    display: "block"
  }, s = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + s + Mr] = 1, n["border" + a + Mr] = 0, n[e.p] = i + "px", R.set(t, n);
}, j = [], ro = {}, yn, ma = function() {
  return ie() - Be > 34 && (yn || (yn = requestAnimationFrame(gi)));
}, dr = function() {
  (!ue || !ue.isPressed || ue.startX > ot.clientWidth) && (Z.cache++, ue ? yn || (yn = requestAnimationFrame(gi)) : gi(), Be || or("scrollStart"), Be = ie());
}, Ms = function() {
  _l = K.innerWidth, dl = K.innerHeight;
}, Kr = function(t) {
  Z.cache++, (t === !0 || !ee && !pl && !_t.fullscreenElement && !_t.webkitFullscreenElement && (!to || _l !== K.innerWidth || Math.abs(K.innerHeight - dl) > K.innerHeight * 0.25)) && ns.restart(!0);
}, sr = {}, rf = [], Tl = function o() {
  return Xt(G, "scrollEnd", o) || Gi(!0);
}, or = function(t) {
  return sr[t] && sr[t].map(function(i) {
    return i();
  }) || rf;
}, be = [], Sl = function(t) {
  for (var i = 0; i < be.length; i += 5)
    (!t || be[i + 4] && be[i + 4].query === t) && (be[i].style.cssText = be[i + 1], be[i].getBBox && be[i].setAttribute("transform", be[i + 2] || ""), be[i + 3].uncache = 1);
}, El = function() {
  return Z.forEach(function(t) {
    return re(t) && ++t.cacheID && (t.rec = t());
  });
}, Ao = function(t, i) {
  var e;
  for (fe = 0; fe < j.length; fe++)
    e = j[fe], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  sn = !0, i && Sl(i), i || or("revert");
}, kl = function(t, i) {
  Z.cache++, (i || !he) && Z.forEach(function(e) {
    return re(e) && e.cacheID++ && (e.rec = 0);
  }), Te(t) && (K.history.scrollRestoration = ko = t);
}, he, Qi = 0, ya, nf = function() {
  if (ya !== Qi) {
    var t = ya = Qi;
    requestAnimationFrame(function() {
      return t === Qi && Gi(!0);
    });
  }
}, Cl = function() {
  ot.appendChild(Sr), Co = !ue && Sr.offsetHeight || K.innerHeight, ot.removeChild(Sr);
}, va = function(t) {
  return mn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, Gi = function(t, i) {
  if (Ee = _t.documentElement, ot = _t.body, Eo = [K, _t, Ee, ot], Be && !t && !sn) {
    Wt(G, "scrollEnd", Tl);
    return;
  }
  Cl(), he = G.isRefreshing = !0, sn || El();
  var e = or("refreshInit");
  cl && G.sort(), i || Ao(), Z.forEach(function(r) {
    re(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), j.slice(0).forEach(function(r) {
    return r.refresh();
  }), sn = !1, j.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", s = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - s), r.refresh();
    }
  }), io = 1, va(!0), j.forEach(function(r) {
    var n = ii(r.scroller, r._dir), s = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (s || a) && r.setPositions(a ? n - 1 : r.start, s ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), va(!1), io = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), Z.forEach(function(r) {
    re(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), kl(ko, 1), ns.pause(), Qi++, he = 2, gi(2), j.forEach(function(r) {
    return re(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), he = G.isRefreshing = !1, or("refresh");
}, no = 0, Kn = 1, fn, gi = function(t) {
  if (t === 2 || !he && !sn) {
    G.isUpdating = !0, fn && fn.update(0);
    var i = j.length, e = ie(), r = e - Ps >= 50, n = i && j[0].scroll();
    if (Kn = no > n ? -1 : 1, he || (no = n), r && (Be && !ys && e - Be > 200 && (Be = 0, or("scrollEnd")), qr = Ps, Ps = e), Kn < 0) {
      for (fe = i; fe-- > 0; )
        j[fe] && j[fe].update(0, r);
      Kn = 1;
    } else
      for (fe = 0; fe < i; fe++)
        j[fe] && j[fe].update(0, r);
    G.isUpdating = !1;
  }
  yn = 0;
}, so = [wl, xl, Oo, Po, ze + un, ze + on, ze + ln, ze + an, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Zn = so.concat([Ki, Zi, "boxSizing", "max" + Mr, "max" + Mo, "position", ze, Rt, Rt + ln, Rt + on, Rt + un, Rt + an]), sf = function(t, i, e) {
  Er(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    Er(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, Ds = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = so.length, s = i.style, a = t.style, u; n--; )
      u = so[n], s[u] = e[u];
    s.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (s.display = "inline-block"), a[Oo] = a[Po] = "auto", s.flexBasis = e.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Ki] = ss(t, ce) + Ft, s[Zi] = ss(t, Nt) + Ft, s[Rt] = a[ze] = a[xl] = a[wl] = "0", Er(r), a[Ki] = a["max" + Mr] = e[Ki], a[Zi] = a["max" + Mo] = e[Zi], a[Rt] = e[Rt], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, of = /([A-Z])/g, Er = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, s;
    for ((t.t._gsap || R.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      s = t[r + 1], n = t[r], s ? i[n] = s : i[n] && i.removeProperty(n.replace(of, "-$1").toLowerCase());
  }
}, Yn = function(t) {
  for (var i = Zn.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(Zn[n], e[Zn[n]]);
  return r.t = t, r;
}, af = function(t, i, e) {
  for (var r = [], n = t.length, s = e ? 8 : 0, a; s < n; s += 2)
    a = t[s], r.push(a, a in i ? i[a] : t[s + 1]);
  return r.t = t.t, r;
}, Qn = {
  left: 0,
  top: 0
}, wa = function(t, i, e, r, n, s, a, u, l, f, p, h, c, _) {
  re(t) && (t = t(u)), Te(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Gn("0" + t.substr(3), e) : 0));
  var d = c ? c.time() : 0, g, m, x;
  if (c && c.seek(0), isNaN(t) || (t = +t), jr(t))
    c && (t = R.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, h, t)), a && jn(a, e, r, !0);
  else {
    re(i) && (i = i(u));
    var w = (t || "0").split(" "), v, b, E, S;
    x = _e(i, u) || ot, v = ci(x) || {}, (!v || !v.left && !v.top) && Ie(x).display === "none" && (S = x.style.display, x.style.display = "block", v = ci(x), S ? x.style.display = S : x.style.removeProperty("display")), b = Gn(w[0], v[r.d]), E = Gn(w[1] || "0", e), t = v[r.p] - l[r.p] - f + b + n - E, a && jn(a, E, r, e - E < 20 || a._isStart && E > 20), e -= e - E;
  }
  if (_ && (u[_] = t || -1e-3, t < 0 && (t = 0)), s) {
    var P = t + e, k = s._isStart;
    g = "scroll" + r.d2, jn(s, P, r, k && P > 20 || !k && (p ? Math.max(ot[g], Ee[g]) : s.parentNode[g]) <= P + 1), p && (l = ci(a), p && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + Ft));
  }
  return c && x && (g = ci(x), c.seek(h), m = ci(x), c._caScrollDist = g[r.p] - m[r.p], t = t / c._caScrollDist * h), c && c.seek(d), c ? t : Math.round(t);
}, lf = /(webkit|moz|length|cssText|inset)/i, xa = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, s, a;
    if (i === ot) {
      t._stOrig = n.cssText, a = Ie(t);
      for (s in a)
        !+s && !lf.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    R.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, Pl = function(t, i, e) {
  var r = i, n = r;
  return function(s) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (s = a, e && e()), n = r, r = Math.round(s), r;
  };
}, Vn = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, R.set(t, r);
}, ba = function(t, i) {
  var e = Ri(t, i), r = "_scroll" + i.p2, n = function s(a, u, l, f, p) {
    var h = s.tween, c = u.onComplete, _ = {};
    l = l || e();
    var d = Pl(e, l, function() {
      h.kill(), s.tween = 0;
    });
    return p = f && p || 0, f = f || a - l, h && h.kill(), u[r] = a, u.inherit = !1, u.modifiers = _, _[r] = function() {
      return d(l + f * h.ratio + p * h.ratio * h.ratio);
    }, u.onUpdate = function() {
      Z.cache++, s.tween && gi();
    }, u.onComplete = function() {
      s.tween = 0, c && c.call(h);
    }, h = s.tween = R.to(t, u), h;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Wt(t, "wheel", e.wheelHandler), G.isTouch && Wt(t, "touchmove", e.wheelHandler), n;
}, G = /* @__PURE__ */ function() {
  function o(i, e) {
    gr || o.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), eo(this), this.init(i, e);
  }
  var t = o.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ur) {
      this.update = this.refresh = this.kill = Je;
      return;
    }
    e = _a(Te(e) || jr(e) || e.nodeType ? {
      trigger: e
    } : e, Nn);
    var n = e, s = n.onUpdate, a = n.toggleClass, u = n.id, l = n.onToggle, f = n.onRefresh, p = n.scrub, h = n.trigger, c = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, m = n.onScrubComplete, x = n.onSnapComplete, w = n.once, v = n.snap, b = n.pinReparent, E = n.pinSpacer, S = n.containerAnimation, P = n.fastScrollEnd, k = n.preventOverlaps, C = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? ce : Nt, A = !p && p !== 0, O = _e(e.scroller || K), Y = R.core.getCache(O), I = nr(O), D = ("pinType" in e ? e.pinType : Mi(O, "pinType") || I && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], V = A && e.toggleActions.split(" "), it = "markers" in e ? e.markers : Nn.markers, at = I ? 0 : parseFloat(Ie(O)["border" + C.p2 + Mr]) || 0, y = this, rt = e.onRefreshInit && function() {
      return e.onRefreshInit(y);
    }, lt = Zu(O, I, C), de = Qu(O, I), nt = 0, q = 0, U = 0, ut = Ri(O, C), pt, Mt, Bt, gt, zt, z, Q, $t, qt, T, Dt, oe, je, dt, N, Ye, Ni, Yt, vi, kt, Ve, Re, ai, Br, At, Pn, li, fr, hr, wi, Bi, J, Yi, Xe, We, He, Vi, cr, ui;
    if (y._startClamp = y._endClamp = !1, y._dir = C, g *= 45, y.scroller = O, y.scroll = S ? S.time.bind(S) : ut, gt = ut(), y.vars = e, r = r || e.animation, "refreshPriority" in e && (cl = 1, e.refreshPriority === -9999 && (fn = y)), Y.tweenScroll = Y.tweenScroll || {
      top: ba(O, Nt),
      left: ba(O, ce)
    }, y.tweenTo = pt = Y.tweenScroll[C.p], y.scrubDuration = function(M) {
      Yi = jr(M) && M, Yi ? J ? J.duration(M) : J = R.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Yi,
        paused: !0,
        onComplete: function() {
          return m && m(y);
        }
      }) : (J && J.progress(1).kill(), J = 0);
    }, r && (r.vars.lazy = !1, r._initted && !y.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), y.animation = r.pause(), r.scrollTrigger = y, y.scrubDuration(p), wi = 0, u || (u = r.vars.id)), v && ((!qi(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in ot.style && R.set(I ? [ot, Ee] : O, {
      scrollBehavior: "auto"
    }), Z.forEach(function(M) {
      return re(M) && M.target === (I ? _t.scrollingElement || Ee : O) && (M.smooth = !1);
    }), Bt = re(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? tf(r) : v.snapTo === "labelsDirectional" ? ef(r) : v.directional !== !1 ? function(M, X) {
      return Do(v.snapTo)(M, ie() - q < 500 ? 0 : X.direction);
    } : R.utils.snap(v.snapTo), Xe = v.duration || {
      min: 0.1,
      max: 2
    }, Xe = qi(Xe) ? nn(Xe.min, Xe.max) : nn(Xe, Xe), We = R.delayedCall(v.delay || Yi / 2 || 0.1, function() {
      var M = ut(), X = ie() - q < 500, F = pt.tween;
      if ((X || Math.abs(y.getVelocity()) < 10) && !F && !ys && nt !== M) {
        var W = (M - z) / dt, Vt = r && !A ? r.totalProgress() : W, tt = X ? 0 : (Vt - Bi) / (ie() - qr) * 1e3 || 0, Ct = R.utils.clamp(-W, 1 - W, pr(tt / 2) * tt / 0.185), Qt = W + (v.inertia === !1 ? 0 : Ct), St, yt, ft = v, $e = ft.onStart, wt = ft.onInterrupt, xe = ft.onComplete;
        if (St = Bt(Qt, y), jr(St) || (St = Qt), yt = Math.max(0, Math.round(z + St * dt)), M <= Q && M >= z && yt !== M) {
          if (F && !F._initted && F.data <= pr(yt - M))
            return;
          v.inertia === !1 && (Ct = St - W), pt(yt, {
            duration: Xe(pr(Math.max(pr(Qt - Vt), pr(St - Vt)) * 0.185 / tt / 0.05 || 0)),
            ease: v.ease || "power3",
            data: pr(yt - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && wt && wt(y);
            },
            onComplete: function() {
              y.update(), nt = ut(), r && !A && (J ? J.resetTo("totalProgress", St, r._tTime / r._tDur) : r.progress(St)), wi = Bi = r && !A ? r.totalProgress() : y.progress, x && x(y), xe && xe(y);
            }
          }, M, Ct * dt, yt - M - Ct * dt), $e && $e(y, pt.tween);
        }
      } else y.isActive && nt !== M && We.restart(!0);
    }).pause()), u && (ro[u] = y), h = y.trigger = _e(h || c !== !0 && c), ui = h && h._gsap && h._gsap.stRevert, ui && (ui = ui(y)), c = c === !0 ? h : _e(c), Te(a) && (a = {
      targets: h,
      className: a
    }), c && (_ === !1 || _ === ze || (_ = !_ && c.parentNode && c.parentNode.style && Ie(c.parentNode).display === "flex" ? !1 : Rt), y.pin = c, Mt = R.core.getCache(c), Mt.spacer ? N = Mt.pinState : (E && (E = _e(E), E && !E.nodeType && (E = E.current || E.nativeElement), Mt.spacerIsNative = !!E, E && (Mt.spacerState = Yn(E))), Mt.spacer = Yt = E || _t.createElement("div"), Yt.classList.add("pin-spacer"), u && Yt.classList.add("pin-spacer-" + u), Mt.pinState = N = Yn(c)), e.force3D !== !1 && R.set(c, {
      force3D: !0
    }), y.spacer = Yt = Mt.spacer, hr = Ie(c), Br = hr[_ + C.os2], kt = R.getProperty(c), Ve = R.quickSetter(c, C.a, Ft), Ds(c, Yt, hr), Ni = Yn(c)), it) {
      oe = qi(it) ? _a(it, ga) : ga, T = Bn("scroller-start", u, O, C, oe, 0), Dt = Bn("scroller-end", u, O, C, oe, 0, T), vi = T["offset" + C.op.d2];
      var Yr = _e(Mi(O, "content") || O);
      $t = this.markerStart = Bn("start", u, Yr, C, oe, vi, 0, S), qt = this.markerEnd = Bn("end", u, Yr, C, oe, vi, 0, S), S && (cr = R.quickSetter([$t, qt], C.a, Ft)), !D && !(ni.length && Mi(O, "fixedMarkers") === !0) && (Ju(I ? ot : O), R.set([T, Dt], {
        force3D: !0
      }), Pn = R.quickSetter(T, C.a, Ft), fr = R.quickSetter(Dt, C.a, Ft));
    }
    if (S) {
      var H = S.vars.onUpdate, B = S.vars.onUpdateParams;
      S.eventCallback("onUpdate", function() {
        y.update(0, 0, 1), H && H.apply(S, B || []);
      });
    }
    if (y.previous = function() {
      return j[j.indexOf(y) - 1];
    }, y.next = function() {
      return j[j.indexOf(y) + 1];
    }, y.revert = function(M, X) {
      if (!X)
        return y.kill(!0);
      var F = M !== !1 || !y.enabled, W = ee;
      F !== y.isReverted && (F && (He = Math.max(ut(), y.scroll.rec || 0), U = y.progress, Vi = r && r.progress()), $t && [$t, qt, T, Dt].forEach(function(Vt) {
        return Vt.style.display = F ? "none" : "block";
      }), F && (ee = y, y.update(F)), c && (!b || !y.isActive) && (F ? sf(c, Yt, N) : Ds(c, Yt, Ie(c), At)), F || y.update(F), ee = W, y.isReverted = F);
    }, y.refresh = function(M, X, F, W) {
      if (!((ee || !y.enabled) && !X)) {
        if (c && M && Be) {
          Wt(o, "scrollEnd", Tl);
          return;
        }
        !he && rt && rt(y), ee = y, pt.tween && !F && (pt.tween.kill(), pt.tween = 0), J && J.pause(), d && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(xi) {
          return xi.vars.immediateRender && xi.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), y.isReverted || y.revert(!0, !0), y._subPinOffset = !1;
        var Vt = lt(), tt = de(), Ct = S ? S.duration() : ii(O, C), Qt = dt <= 0.01 || !dt, St = 0, yt = W || 0, ft = qi(F) ? F.end : e.end, $e = e.endTrigger || h, wt = qi(F) ? F.start : e.start || (e.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"), xe = y.pinnedContainer = e.pinnedContainer && _e(e.pinnedContainer, y), Ke = h && Math.max(0, j.indexOf(y)) || 0, Ut = Ke, Gt, Jt, Xi, On, te, It, Ze, Es, aa, Vr, Qe, Xr, Mn;
        for (it && qi(F) && (Xr = R.getProperty(T, C.p), Mn = R.getProperty(Dt, C.p)); Ut-- > 0; )
          It = j[Ut], It.end || It.refresh(0, 1) || (ee = y), Ze = It.pin, Ze && (Ze === h || Ze === c || Ze === xe) && !It.isReverted && (Vr || (Vr = []), Vr.unshift(It), It.revert(!0, !0)), It !== j[Ut] && (Ke--, Ut--);
        for (re(wt) && (wt = wt(y)), wt = ha(wt, "start", y), z = wa(wt, h, Vt, C, ut(), $t, T, y, tt, at, D, Ct, S, y._startClamp && "_startClamp") || (c ? -1e-3 : 0), re(ft) && (ft = ft(y)), Te(ft) && !ft.indexOf("+=") && (~ft.indexOf(" ") ? ft = (Te(wt) ? wt.split(" ")[0] : "") + ft : (St = Gn(ft.substr(2), Vt), ft = Te(wt) ? wt : (S ? R.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, z) : z) + St, $e = h)), ft = ha(ft, "end", y), Q = Math.max(z, wa(ft || ($e ? "100% 0" : Ct), $e, Vt, C, ut() + St, qt, Dt, y, tt, at, D, Ct, S, y._endClamp && "_endClamp")) || -1e-3, St = 0, Ut = Ke; Ut--; )
          It = j[Ut] || {}, Ze = It.pin, Ze && It.start - It._pinPush <= z && !S && It.end > 0 && (Gt = It.end - (y._startClamp ? Math.max(0, It.start) : It.start), (Ze === h && It.start - It._pinPush < z || Ze === xe) && isNaN(wt) && (St += Gt * (1 - It.progress)), Ze === c && (yt += Gt));
        if (z += St, Q += St, y._startClamp && (y._startClamp += St), y._endClamp && !he && (y._endClamp = Q || -1e-3, Q = Math.min(Q, ii(O, C))), dt = Q - z || (z -= 0.01) && 1e-3, Qt && (U = R.utils.clamp(0, 1, R.utils.normalize(z, Q, He))), y._pinPush = yt, $t && St && (Gt = {}, Gt[C.a] = "+=" + St, xe && (Gt[C.p] = "-=" + ut()), R.set([$t, qt], Gt)), c && !(io && y.end >= ii(O, C)))
          Gt = Ie(c), On = C === Nt, Xi = ut(), Re = parseFloat(kt(C.a)) + yt, !Ct && Q > 1 && (Qe = (I ? _t.scrollingElement || Ee : O).style, Qe = {
            style: Qe,
            value: Qe["overflow" + C.a.toUpperCase()]
          }, I && Ie(ot)["overflow" + C.a.toUpperCase()] !== "scroll" && (Qe.style["overflow" + C.a.toUpperCase()] = "scroll")), Ds(c, Yt, Gt), Ni = Yn(c), Jt = ci(c, !0), Es = D && Ri(O, On ? ce : Nt)(), _ ? (At = [_ + C.os2, dt + yt + Ft], At.t = Yt, Ut = _ === Rt ? ss(c, C) + dt + yt : 0, Ut && (At.push(C.d, Ut + Ft), Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = Ut + Ft)), Er(At), xe && j.forEach(function(xi) {
            xi.pin === xe && xi.vars.pinSpacing !== !1 && (xi._subPinOffset = !0);
          }), D && ut(He)) : (Ut = ss(c, C), Ut && Yt.style.flexBasis !== "auto" && (Yt.style.flexBasis = Ut + Ft)), D && (te = {
            top: Jt.top + (On ? Xi - z : Es) + Ft,
            left: Jt.left + (On ? Es : Xi - z) + Ft,
            boxSizing: "border-box",
            position: "fixed"
          }, te[Ki] = te["max" + Mr] = Math.ceil(Jt.width) + Ft, te[Zi] = te["max" + Mo] = Math.ceil(Jt.height) + Ft, te[ze] = te[ze + ln] = te[ze + on] = te[ze + un] = te[ze + an] = "0", te[Rt] = Gt[Rt], te[Rt + ln] = Gt[Rt + ln], te[Rt + on] = Gt[Rt + on], te[Rt + un] = Gt[Rt + un], te[Rt + an] = Gt[Rt + an], Ye = af(N, te, b), he && ut(0)), r ? (aa = r._initted, ks(1), r.render(r.duration(), !0, !0), ai = kt(C.a) - Re + dt + yt, li = Math.abs(dt - ai) > 1, D && li && Ye.splice(Ye.length - 2, 2), r.render(0, !0, !0), aa || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ks(0)) : ai = dt, Qe && (Qe.value ? Qe.style["overflow" + C.a.toUpperCase()] = Qe.value : Qe.style.removeProperty("overflow-" + C.a));
        else if (h && ut() && !S)
          for (Jt = h.parentNode; Jt && Jt !== ot; )
            Jt._pinOffset && (z -= Jt._pinOffset, Q -= Jt._pinOffset), Jt = Jt.parentNode;
        Vr && Vr.forEach(function(xi) {
          return xi.revert(!1, !0);
        }), y.start = z, y.end = Q, gt = zt = he ? He : ut(), !S && !he && (gt < He && ut(He), y.scroll.rec = 0), y.revert(!1, !0), q = ie(), We && (nt = -1, We.restart(!0)), ee = 0, r && A && (r._initted || Vi) && r.progress() !== Vi && r.progress(Vi || 0, !0).render(r.time(), !0, !0), (Qt || U !== y.progress || S || d || r && !r._initted) && (r && !A && (r._initted || U || r.vars.immediateRender !== !1) && r.totalProgress(S && z < -1e-3 && !U ? R.utils.normalize(z, Q, 0) : U, !0), y.progress = Qt || (gt - z) / dt === U ? 0 : U), c && _ && (Yt._pinOffset = Math.round(y.progress * ai)), J && J.invalidate(), isNaN(Xr) || (Xr -= R.getProperty(T, C.p), Mn -= R.getProperty(Dt, C.p), Vn(T, C, Xr), Vn($t, C, Xr - (W || 0)), Vn(Dt, C, Mn), Vn(qt, C, Mn - (W || 0))), Qt && !he && y.update(), f && !he && !je && (je = !0, f(y), je = !1);
      }
    }, y.getVelocity = function() {
      return (ut() - zt) / (ie() - qr) * 1e3 || 0;
    }, y.endAnimation = function() {
      Hr(y.callbackAnimation), r && (J ? J.progress(1) : r.paused() ? A || Hr(r, y.direction < 0, 1) : Hr(r, r.reversed()));
    }, y.labelToScroll = function(M) {
      return r && r.labels && (z || y.refresh() || z) + r.labels[M] / r.duration() * dt || 0;
    }, y.getTrailing = function(M) {
      var X = j.indexOf(y), F = y.direction > 0 ? j.slice(0, X).reverse() : j.slice(X + 1);
      return (Te(M) ? F.filter(function(W) {
        return W.vars.preventOverlaps === M;
      }) : F).filter(function(W) {
        return y.direction > 0 ? W.end <= z : W.start >= Q;
      });
    }, y.update = function(M, X, F) {
      if (!(S && !F && !M)) {
        var W = he === !0 ? He : y.scroll(), Vt = M ? 0 : (W - z) / dt, tt = Vt < 0 ? 0 : Vt > 1 ? 1 : Vt || 0, Ct = y.progress, Qt, St, yt, ft, $e, wt, xe, Ke;
        if (X && (zt = gt, gt = S ? ut() : W, v && (Bi = wi, wi = r && !A ? r.totalProgress() : tt)), g && c && !ee && !Ln && Be && (!tt && z < W + (W - zt) / (ie() - qr) * g ? tt = 1e-4 : tt === 1 && Q > W + (W - zt) / (ie() - qr) * g && (tt = 0.9999)), tt !== Ct && y.enabled) {
          if (Qt = y.isActive = !!tt && tt < 1, St = !!Ct && Ct < 1, wt = Qt !== St, $e = wt || !!tt != !!Ct, y.direction = tt > Ct ? 1 : -1, y.progress = tt, $e && !ee && (yt = tt && !Ct ? 0 : tt === 1 ? 1 : Ct === 1 ? 2 : 3, A && (ft = !wt && V[yt + 1] !== "none" && V[yt + 1] || V[yt], Ke = r && (ft === "complete" || ft === "reset" || ft in r))), k && (wt || Ke) && (Ke || p || !r) && (re(k) ? k(y) : y.getTrailing(k).forEach(function(Xi) {
            return Xi.endAnimation();
          })), A || (J && !ee && !Ln ? (J._dp._time - J._start !== J._time && J.render(J._dp._time - J._start), J.resetTo ? J.resetTo("totalProgress", tt, r._tTime / r._tDur) : (J.vars.totalProgress = tt, J.invalidate().restart())) : r && r.totalProgress(tt, !!(ee && (q || M)))), c) {
            if (M && _ && (Yt.style[_ + C.os2] = Br), !D)
              Ve(Gr(Re + ai * tt));
            else if ($e) {
              if (xe = !M && tt > Ct && Q + 1 > W && W + 1 >= ii(O, C), b)
                if (!M && (Qt || xe)) {
                  var Ut = ci(c, !0), Gt = W - z;
                  xa(c, ot, Ut.top + (C === Nt ? Gt : 0) + Ft, Ut.left + (C === Nt ? 0 : Gt) + Ft);
                } else
                  xa(c, Yt);
              Er(Qt || xe ? Ye : Ni), li && tt < 1 && Qt || Ve(Re + (tt === 1 && !xe ? ai : 0));
            }
          }
          v && !pt.tween && !ee && !Ln && We.restart(!0), a && (wt || w && tt && (tt < 1 || !Cs)) && mn(a.targets).forEach(function(Xi) {
            return Xi.classList[Qt || w ? "add" : "remove"](a.className);
          }), s && !A && !M && s(y), $e && !ee ? (A && (Ke && (ft === "complete" ? r.pause().totalProgress(1) : ft === "reset" ? r.restart(!0).pause() : ft === "restart" ? r.restart(!0) : r[ft]()), s && s(y)), (wt || !Cs) && (l && wt && Os(y, l), $[yt] && Os(y, $[yt]), w && (tt === 1 ? y.kill(!1, 1) : $[yt] = 0), wt || (yt = tt === 1 ? 1 : 3, $[yt] && Os(y, $[yt]))), P && !Qt && Math.abs(y.getVelocity()) > (jr(P) ? P : 2500) && (Hr(y.callbackAnimation), J ? J.progress(1) : Hr(r, ft === "reverse" ? 1 : !tt, 1))) : A && s && !ee && s(y);
        }
        if (fr) {
          var Jt = S ? W / S.duration() * (S._caScrollDist || 0) : W;
          Pn(Jt + (T._isFlipped ? 1 : 0)), fr(Jt);
        }
        cr && cr(-W / S.duration() * (S._caScrollDist || 0));
      }
    }, y.enable = function(M, X) {
      y.enabled || (y.enabled = !0, Wt(O, "resize", Kr), I || Wt(O, "scroll", dr), rt && Wt(o, "refreshInit", rt), M !== !1 && (y.progress = U = 0, gt = zt = nt = ut()), X !== !1 && y.refresh());
    }, y.getTween = function(M) {
      return M && pt ? pt.tween : J;
    }, y.setPositions = function(M, X, F, W) {
      if (S) {
        var Vt = S.scrollTrigger, tt = S.duration(), Ct = Vt.end - Vt.start;
        M = Vt.start + Ct * M / tt, X = Vt.start + Ct * X / tt;
      }
      y.refresh(!1, !1, {
        start: ca(M, F && !!y._startClamp),
        end: ca(X, F && !!y._endClamp)
      }, W), y.update();
    }, y.adjustPinSpacing = function(M) {
      if (At && M) {
        var X = At.indexOf(C.d) + 1;
        At[X] = parseFloat(At[X]) + M + Ft, At[1] = parseFloat(At[1]) + M + Ft, Er(At);
      }
    }, y.disable = function(M, X) {
      if (M !== !1 && y.revert(!0, !0), y.enabled && (y.enabled = y.isActive = !1, X || J && J.pause(), He = 0, Mt && (Mt.uncache = 1), rt && Xt(o, "refreshInit", rt), We && (We.pause(), pt.tween && pt.tween.kill() && (pt.tween = 0)), !I)) {
        for (var F = j.length; F--; )
          if (j[F].scroller === O && j[F] !== y)
            return;
        Xt(O, "resize", Kr), I || Xt(O, "scroll", dr);
      }
    }, y.kill = function(M, X) {
      y.disable(M, X), J && !X && J.kill(), u && delete ro[u];
      var F = j.indexOf(y);
      F >= 0 && j.splice(F, 1), F === fe && Kn > 0 && fe--, F = 0, j.forEach(function(W) {
        return W.scroller === y.scroller && (F = 1);
      }), F || he || (y.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({
        kill: !1
      }), X || r.kill()), $t && [$t, qt, T, Dt].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), fn === y && (fn = 0), c && (Mt && (Mt.uncache = 1), F = 0, j.forEach(function(W) {
        return W.pin === c && F++;
      }), F || (Mt.spacer = 0)), e.onKill && e.onKill(y);
    }, j.push(y), y.enable(!1, !1), ui && ui(y), r && r.add && !dt) {
      var st = y.update;
      y.update = function() {
        y.update = st, Z.cache++, z || Q || y.refresh();
      }, R.delayedCall(0.01, y.update), dt = 0.01, z = Q = 0;
    } else
      y.refresh();
    c && nf();
  }, o.register = function(e) {
    return gr || (R = e || ml(), gl() && window.document && o.enable(), gr = Ur), gr;
  }, o.defaults = function(e) {
    if (e)
      for (var r in e)
        Nn[r] = e[r];
    return Nn;
  }, o.disable = function(e, r) {
    Ur = 0, j.forEach(function(s) {
      return s[r ? "kill" : "disable"](e);
    }), Xt(K, "wheel", dr), Xt(_t, "scroll", dr), clearInterval(Rn), Xt(_t, "touchcancel", Je), Xt(ot, "touchstart", Je), In(Xt, _t, "pointerdown,touchstart,mousedown", pa), In(Xt, _t, "pointerup,touchend,mouseup", da), ns.kill(), zn(Xt);
    for (var n = 0; n < Z.length; n += 3)
      Fn(Xt, Z[n], Z[n + 1]), Fn(Xt, Z[n], Z[n + 2]);
  }, o.enable = function() {
    if (K = window, _t = document, Ee = _t.documentElement, ot = _t.body, R && (mn = R.utils.toArray, nn = R.utils.clamp, eo = R.core.context || Je, ks = R.core.suppressOverwrites || Je, ko = K.history.scrollRestoration || "auto", no = K.pageYOffset || 0, R.core.globals("ScrollTrigger", o), ot)) {
      Ur = 1, Sr = document.createElement("div"), Sr.style.height = "100vh", Sr.style.position = "absolute", Cl(), Ku(), Ot.register(R), o.isTouch = Ot.isTouch, Ti = Ot.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), to = Ot.isTouch === 1, Wt(K, "wheel", dr), Eo = [K, _t, Ee, ot], R.matchMedia ? (o.matchMedia = function(l) {
        var f = R.matchMedia(), p;
        for (p in l)
          f.add(p, l[p]);
        return f;
      }, R.addEventListener("matchMediaInit", function() {
        El(), Ao();
      }), R.addEventListener("matchMediaRevert", function() {
        return Sl();
      }), R.addEventListener("matchMedia", function() {
        Gi(0, 1), or("matchMedia");
      }), R.matchMedia().add("(orientation: portrait)", function() {
        return Ms(), Ms;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Ms(), Wt(_t, "scroll", dr);
      var e = ot.hasAttribute("style"), r = ot.style, n = r.borderTopStyle, s = R.core.Animation.prototype, a, u;
      for (s.revert || Object.defineProperty(s, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), r.borderTopStyle = "solid", a = ci(ot), Nt.m = Math.round(a.top + Nt.sc()) || 0, ce.m = Math.round(a.left + ce.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (ot.setAttribute("style", ""), ot.removeAttribute("style")), Rn = setInterval(ma, 250), R.delayedCall(0.5, function() {
        return Ln = 0;
      }), Wt(_t, "touchcancel", Je), Wt(ot, "touchstart", Je), In(Wt, _t, "pointerdown,touchstart,mousedown", pa), In(Wt, _t, "pointerup,touchend,mouseup", da), Js = R.utils.checkPrefix("transform"), Zn.push(Js), gr = ie(), ns = R.delayedCall(0.2, Gi).pause(), mr = [_t, "visibilitychange", function() {
        var l = K.innerWidth, f = K.innerHeight;
        _t.hidden ? (ua = l, fa = f) : (ua !== l || fa !== f) && Kr();
      }, _t, "DOMContentLoaded", Gi, K, "load", Gi, K, "resize", Kr], zn(Wt), j.forEach(function(l) {
        return l.enable(0, 1);
      }), u = 0; u < Z.length; u += 3)
        Fn(Xt, Z[u], Z[u + 1]), Fn(Xt, Z[u], Z[u + 2]);
    }
  }, o.config = function(e) {
    "limitCallbacks" in e && (Cs = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(Rn) || (Rn = r) && setInterval(ma, r), "ignoreMobileResize" in e && (to = o.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (zn(Xt) || zn(Wt, e.autoRefreshEvents || "none"), pl = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, o.scrollerProxy = function(e, r) {
    var n = _e(e), s = Z.indexOf(n), a = nr(n);
    ~s && Z.splice(s, a ? 6 : 2), r && (a ? ni.unshift(K, r, ot, r, Ee, r) : ni.unshift(n, r));
  }, o.clearMatchMedia = function(e) {
    j.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, o.isInViewport = function(e, r, n) {
    var s = (Te(e) ? _e(e) : e).getBoundingClientRect(), a = s[n ? Ki : Zi] * r || 0;
    return n ? s.right - a > 0 && s.left + a < K.innerWidth : s.bottom - a > 0 && s.top + a < K.innerHeight;
  }, o.positionInViewport = function(e, r, n) {
    Te(e) && (e = _e(e));
    var s = e.getBoundingClientRect(), a = s[n ? Ki : Zi], u = r == null ? a / 2 : r in os ? os[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (s.left + u) / K.innerWidth : (s.top + u) / K.innerHeight;
  }, o.killAll = function(e) {
    if (j.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = sr.killAll || [];
      sr = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, o;
}();
G.version = "3.14.2";
G.saveStyles = function(o) {
  return o ? mn(o).forEach(function(t) {
    if (t && t.style) {
      var i = be.indexOf(t);
      i >= 0 && be.splice(i, 5), be.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), R.core.getCache(t), eo());
    }
  }) : be;
};
G.revert = function(o, t) {
  return Ao(!o, t);
};
G.create = function(o, t) {
  return new G(o, t);
};
G.refresh = function(o) {
  return o ? Kr(!0) : (gr || G.register()) && Gi(!0);
};
G.update = function(o) {
  return ++Z.cache && gi(o === !0 ? 2 : 0);
};
G.clearScrollMemory = kl;
G.maxScroll = function(o, t) {
  return ii(o, t ? ce : Nt);
};
G.getScrollFunc = function(o, t) {
  return Ri(_e(o), t ? ce : Nt);
};
G.getById = function(o) {
  return ro[o];
};
G.getAll = function() {
  return j.filter(function(o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function() {
  return !!Be;
};
G.snapDirectional = Do;
G.addEventListener = function(o, t) {
  var i = sr[o] || (sr[o] = []);
  ~i.indexOf(t) || i.push(t);
};
G.removeEventListener = function(o, t) {
  var i = sr[o], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
G.batch = function(o, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, s = function(l, f) {
    var p = [], h = [], c = R.delayedCall(r, function() {
      f(p, h), p = [], h = [];
    }).pause();
    return function(_) {
      p.length || c.restart(!0), p.push(_.trigger), h.push(_), n <= p.length && c.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && re(t[a]) && a !== "onRefreshInit" ? s(a, t[a]) : t[a];
  return re(n) && (n = n(), Wt(G, "refresh", function() {
    return n = t.batchMax();
  })), mn(o).forEach(function(u) {
    var l = {};
    for (a in e)
      l[a] = e[a];
    l.trigger = u, i.push(G.create(l));
  }), i;
};
var Ta = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, As = function o(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (Ot.isTouch ? " pinch-zoom" : "") : "none", t === Ee && o(ot, i);
}, Xn = {
  auto: 1,
  scroll: 1
}, uf = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, s = n._gsap || R.core.getCache(n), a = ie(), u;
  if (!s._isScrollT || a - s._isScrollT > 2e3) {
    for (; n && n !== ot && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Xn[(u = Ie(n)).overflowY] || Xn[u.overflowX])); )
      n = n.parentNode;
    s._isScroll = n && n !== e && !nr(n) && (Xn[(u = Ie(n)).overflowY] || Xn[u.overflowX]), s._isScrollT = a;
  }
  (s._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, Ol = function(t, i, e, r) {
  return Ot.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && uf,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && Wt(_t, Ot.eventTypes[0], Ea, !1, !0);
    },
    onDisable: function() {
      return Xt(_t, Ot.eventTypes[0], Ea, !0);
    }
  });
}, ff = /(input|label|select|textarea)/i, Sa, Ea = function(t) {
  var i = ff.test(t.target.tagName);
  (i || Sa) && (t._gsapAllow = !0, Sa = i);
}, hf = function(t) {
  qi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, s = i.onRelease, a, u, l = _e(t.target) || Ee, f = R.core.globals().ScrollSmoother, p = f && f.get(), h = Ti && (t.content && _e(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), c = Ri(l, Nt), _ = Ri(l, ce), d = 1, g = (Ot.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, m = 0, x = re(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, w, v, b = Ol(l, t.type, !0, n), E = function() {
    return v = !1;
  }, S = Je, P = Je, k = function() {
    u = ii(l, Nt), P = nn(Ti ? 1 : 0, u), e && (S = nn(0, ii(l, ce))), w = Qi;
  }, C = function() {
    h._gsap.y = Gr(parseFloat(h._gsap.y) + c.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, A = function() {
    if (v) {
      requestAnimationFrame(E);
      var it = Gr(a.deltaY / 2), at = P(c.v - it);
      if (h && at !== c.v + c.offset) {
        c.offset = at - c.v;
        var y = Gr((parseFloat(h && h._gsap.y) || 0) - c.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)", h._gsap.y = y + "px", c.cacheID = Z.cache, gi();
      }
      return !0;
    }
    c.offset && C(), v = !0;
  }, O, Y, I, D, $ = function() {
    k(), O.isActive() && O.vars.scrollY > u && (c() > u ? O.progress(1) && c(u) : O.resetTo("scrollY", u));
  };
  return h && R.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(V) {
    return Ti && V.type === "touchmove" && A() || d > 1.05 && V.type !== "touchstart" || a.isGesturing || V.touches && V.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var V = d;
    d = Gr((K.visualViewport && K.visualViewport.scale || 1) / g), O.pause(), V !== d && As(l, d > 1.01 ? !0 : e ? !1 : "x"), Y = _(), I = c(), k(), w = Qi;
  }, t.onRelease = t.onGestureStart = function(V, it) {
    if (c.offset && C(), !it)
      D.restart(!0);
    else {
      Z.cache++;
      var at = x(), y, rt;
      e && (y = _(), rt = y + at * 0.05 * -V.velocityX / 0.227, at *= Ta(_, y, rt, ii(l, ce)), O.vars.scrollX = S(rt)), y = c(), rt = y + at * 0.05 * -V.velocityY / 0.227, at *= Ta(c, y, rt, ii(l, Nt)), O.vars.scrollY = P(rt), O.invalidate().duration(at).play(0.01), (Ti && O.vars.scrollY >= u || y >= u - 1) && R.to({}, {
        onUpdate: $,
        duration: at
      });
    }
    s && s(V);
  }, t.onWheel = function() {
    O._ts && O.pause(), ie() - m > 1e3 && (w = 0, m = ie());
  }, t.onChange = function(V, it, at, y, rt) {
    if (Qi !== w && k(), it && e && _(S(y[2] === it ? Y + (V.startX - V.x) : _() + it - y[1])), at) {
      c.offset && C();
      var lt = rt[2] === at, de = lt ? I + V.startY - V.y : c() + at - rt[1], nt = P(de);
      lt && de !== nt && (I += nt - de), c(nt);
    }
    (at || it) && gi();
  }, t.onEnable = function() {
    As(l, e ? !1 : "x"), G.addEventListener("refresh", $), Wt(K, "resize", $), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = _.smooth = !1), b.enable();
  }, t.onDisable = function() {
    As(l, !0), Xt(K, "resize", $), G.removeEventListener("refresh", $), b.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new Ot(t), a.iOS = Ti, Ti && !c() && c(1), Ti && R.ticker.add(Je), D = a._dc, O = R.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Pl(c, c(), function() {
        return O.pause();
      })
    },
    onUpdate: gi,
    onComplete: D.vars.onComplete
  }), a;
};
G.sort = function(o) {
  if (re(o))
    return j.sort(o);
  var t = K.pageYOffset || 0;
  return G.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + K.innerHeight;
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
  var t = o instanceof Ot ? o : hf(o);
  return ue && ue.target === t.target && ue.kill(), nr(t.target) && (ue = t), t;
};
G.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Qs,
  _inputObserver: Ol,
  _scrollers: Z,
  _proxies: ni,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Be || or("scrollStart"), Be = ie();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return ee;
    }
  }
};
ml() && R.registerPlugin(G);
var ka = "1.3.19";
function Ml(o, t, i) {
  return Math.max(o, Math.min(t, i));
}
function cf(o, t, i) {
  return (1 - i) * o + i * t;
}
function pf(o, t, i, e) {
  return cf(o, t, 1 - Math.exp(-i * e));
}
function df(o, t) {
  return (o % t + t) % t;
}
var _f = class {
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
      const e = Ml(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = pf(this.value, this.to, this.lerp * 60, o), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function gf(o, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, o.apply(this, e);
    }, t);
  };
}
var mf = class {
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
    this.wrapper = o, this.content = t, i && (this.debouncedResize = gf(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, Dl = class {
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
}, yf = 100 / 6, bi = { passive: !1 };
function Ca(o, t) {
  return o === 1 ? yf : o === 2 ? t : 1;
}
var vf = class {
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
    L(this, "emitter", new Dl());
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
      const r = Ca(e, this.window.width), n = Ca(e, this.window.height);
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
}, Pa = (o) => Math.min(1, 1.001 - 2 ** (-10 * o)), wf = class {
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
    gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
    // vertical, horizontal, both
    touchMultiplier: c = 1,
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
    L(this, "animate", new _f());
    L(this, "emitter", new Dl());
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
        (m) => {
          var x, w, v, b, E;
          return m instanceof HTMLElement && (typeof f == "function" && (f == null ? void 0 : f(m)) || ((x = m.hasAttribute) == null ? void 0 : x.call(m, "data-lenis-prevent")) || p === "vertical" && ((w = m.hasAttribute) == null ? void 0 : w.call(m, "data-lenis-prevent-vertical")) || p === "horizontal" && ((v = m.hasAttribute) == null ? void 0 : v.call(m, "data-lenis-prevent-horizontal")) || r && ((b = m.hasAttribute) == null ? void 0 : b.call(m, "data-lenis-prevent-touch")) || n && ((E = m.hasAttribute) == null ? void 0 : E.call(m, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(m, {
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
      const _ = r && this.options.syncTouch, g = r && e.type === "touchend";
      g && (c = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + c, {
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
    window.lenisVersion = ka, window.lenis || (window.lenis = {}), window.lenis.version = ka, p === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), (!o || o === document.documentElement) && (o = window), typeof a == "number" && typeof u != "function" ? u = Pa : typeof u == "function" && typeof a != "number" && (a = 1), this.options = {
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
      gestureOrientation: h,
      orientation: p,
      touchMultiplier: c,
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
      stopInertiaOnNavigate: k
    }, this.dimensions = new mf(o, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(
      "click",
      this.onClick
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown
    ), this.virtualScroll = new vf(i, {
      touchMultiplier: c,
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
    let h = o, c = t;
    if (typeof h == "string" && ["top", "left", "start", "#"].includes(h))
      h = 0;
    else if (typeof h == "string" && ["bottom", "right", "end"].includes(h))
      h = this.limit;
    else {
      let _ = null;
      if (typeof h == "string" ? (_ = document.querySelector(h), _ || (h === "#top" ? h = 0 : console.warn("Lenis: Target not found", h))) : h instanceof HTMLElement && (h != null && h.nodeType) && (_ = h), _) {
        if (this.options.wrapper !== window) {
          const g = this.rootElement.getBoundingClientRect();
          c -= this.isHorizontal ? g.left : g.top;
        }
        const d = _.getBoundingClientRect();
        h = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
      }
    }
    if (typeof h == "number") {
      if (h += c, h = Math.round(h), this.options.infinite) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else
        h = Ml(0, h, this.limit);
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
      r || (this.targetScroll = h), typeof s == "number" && typeof a != "function" ? a = Pa : typeof a == "function" && typeof s != "number" && (s = 1), this.animate.fromTo(this.animatedScroll, h, {
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
    let n, s, a, u, l, f, p, h, c, _;
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
      p = o.scrollWidth, h = o.scrollHeight, c = o.clientWidth, _ = o.clientHeight, a = p > c, u = h > _, r.isScrollableX = a, r.isScrollableY = u, r.scrollWidth = p, r.scrollHeight = h, r.clientWidth = c, r.clientHeight = _, r.hasOverscrollBehaviorX = l, r.hasOverscrollBehaviorY = f;
    } else
      a = r.isScrollableX, u = r.isScrollableY, n = r.hasOverflowX, s = r.hasOverflowY, p = r.scrollWidth, h = r.scrollHeight, c = r.clientWidth, _ = r.clientHeight, l = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
    if (!(n && a || s && u))
      return !1;
    const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, m, x, w, v, b;
    if (d === "horizontal")
      g = Math.round(o.scrollLeft), m = p - c, x = t, w = n, v = a, b = l;
    else if (d === "vertical")
      g = Math.round(o.scrollTop), m = h - _, x = i, w = s, v = u, b = f;
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
    const o = this.options.wrapper;
    return this.isHorizontal ? o.scrollX ?? o.scrollLeft : o.scrollY ?? o.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? df(this.animatedScroll, this.limit) : this.animatedScroll;
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
}, Al = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xf(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Rl = { exports: {} }, Rs = { exports: {} }, Oa;
function bf() {
  return Oa || (Oa = 1, function(o) {
    (function(t, i) {
      o.exports ? o.exports = i() : t.EvEmitter = i();
    })(typeof window < "u" ? window : Al, function() {
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
  }(Rs)), Rs.exports;
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(o) {
  (function(t, i) {
    o.exports ? o.exports = i(t, bf()) : t.imagesLoaded = i(t, t.EvEmitter);
  })(
    typeof window < "u" ? window : Al,
    function(i, e) {
      let r = i.jQuery, n = i.console;
      function s(h) {
        return Array.isArray(h) ? h : typeof h == "object" && typeof h.length == "number" ? [...h] : [h];
      }
      function a(h, c, _) {
        if (!(this instanceof a))
          return new a(h, c, _);
        let d = h;
        if (typeof h == "string" && (d = document.querySelectorAll(h)), !d) {
          n.error(`Bad element for imagesLoaded ${d || h}`);
          return;
        }
        this.elements = s(d), this.options = {}, typeof c == "function" ? _ = c : Object.assign(this.options, c), _ && this.on("always", _), this.getImages(), r && (this.jqDeferred = new r.Deferred()), setTimeout(this.check.bind(this));
      }
      a.prototype = Object.create(e.prototype), a.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      };
      const u = [1, 9, 11];
      a.prototype.addElementImages = function(h) {
        h.nodeName === "IMG" && this.addImage(h), this.options.background === !0 && this.addElementBackgroundImages(h);
        let { nodeType: c } = h;
        if (!c || !u.includes(c)) return;
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
        let c = getComputedStyle(h);
        if (!c) return;
        let _ = l.exec(c.backgroundImage);
        for (; _ !== null; ) {
          let d = _ && _[2];
          d && this.addBackground(d, h), _ = l.exec(c.backgroundImage);
        }
      }, a.prototype.addImage = function(h) {
        let c = new f(h);
        this.images.push(c);
      }, a.prototype.addBackground = function(h, c) {
        let _ = new p(h, c);
        this.images.push(_);
      }, a.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
          this.complete();
          return;
        }
        let h = (c, _, d) => {
          setTimeout(() => {
            this.progress(c, _, d);
          });
        };
        this.images.forEach(function(c) {
          c.once("progress", h), c.check();
        });
      }, a.prototype.progress = function(h, c, _) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !h.isLoaded, this.emitEvent("progress", [this, h, c]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, h), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${_}`, h, c);
      }, a.prototype.complete = function() {
        let h = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(h, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          let c = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[c](this);
        }
      };
      function f(h) {
        this.img = h;
      }
      f.prototype = Object.create(e.prototype), f.prototype.check = function() {
        if (this.getIsImageComplete()) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src;
      }, f.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }, f.prototype.confirm = function(h, c) {
        this.isLoaded = h;
        let { parentNode: _ } = this.img, d = _.nodeName === "PICTURE" ? _ : this.img;
        this.emitEvent("progress", [this, d, c]);
      }, f.prototype.handleEvent = function(h) {
        let c = "on" + h.type;
        this[c] && this[c](h);
      }, f.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }, f.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }, f.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      };
      function p(h, c) {
        this.url = h, this.element = c, this.img = new Image();
      }
      return p.prototype = Object.create(f.prototype), p.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
      }, p.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, p.prototype.confirm = function(h, c) {
        this.isLoaded = h, this.emitEvent("progress", [this, this.element, c]);
      }, a.makeJQueryPlugin = function(h) {
        h = h || i.jQuery, h && (r = h, r.fn.imagesLoaded = function(c, _) {
          return new a(this, c, _).jqDeferred.promise(r(this));
        });
      }, a.makeJQueryPlugin(), a;
    }
  );
})(Rl);
var Tf = Rl.exports;
const Sf = /* @__PURE__ */ xf(Tf);
function Ll(o, t, i) {
  const e = o.dataset[t];
  if (e === void 0 || e === "")
    return i;
  const r = Number(e);
  return Number.isFinite(r) ? r : i;
}
function fi(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function zl(o, t) {
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
}, Ro, Zt, vt, Fe = 1e8, ct = 1 / Fe, oo = Math.PI * 2, Ef = oo / 4, kf = 0, Il = Math.sqrt, Cf = Math.cos, Pf = Math.sin, Ht = function(t) {
  return typeof t == "string";
}, Et = function(t) {
  return typeof t == "function";
}, mi = function(t) {
  return typeof t == "number";
}, Lo = function(t) {
  return typeof t > "u";
}, si = function(t) {
  return typeof t == "object";
}, ge = function(t) {
  return t !== !1;
}, zo = function() {
  return typeof window < "u";
}, Wn = function(t) {
  return Et(t) || Ht(t);
}, Fl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, se = Array.isArray, Of = /random\([^)]+\)/g, Mf = /,\s*/g, Ma = /(?:-?\.?\d|\.)+/gi, Nl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ls = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Bl = /[+-]=-?[.\d]+/, Df = /[^,'"\[\]\s]+/gi, Af = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, bt, ti, ao, Io, De = {}, as = {}, Yl, Vl = function(t) {
  return (as = Ar(t, De)) && we;
}, Fo = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, vn = function(t, i) {
  return !i && console.warn(t);
}, Xl = function(t, i) {
  return t && (De[t] = i) && as && (as[t] = i) || De;
}, wn = function() {
  return 0;
}, Rf = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Jn = {
  suppressEvents: !0,
  kill: !1
}, Lf = {
  suppressEvents: !0
}, No = {}, Di = [], lo = {}, Wl, Se = {}, zs = {}, Da = 30, ts = [], Bo = "", Yo = function(t) {
  var i = t[0], e, r;
  if (si(i) || Et(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = ts.length; r-- && !ts[r].targetTest(i); )
      ;
    e = ts[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new pu(t[r], e))) || t.splice(r, 1);
  return t;
}, Ji = function(t) {
  return t._gsap || Yo(Ne(t))[0]._gsap;
}, Hl = function(t, i, e) {
  return (e = t[i]) && Et(e) ? t[i]() : Lo(e) && t.getAttribute && t.getAttribute(i) || e;
}, me = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, Pt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, xt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, kr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, zf = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, ls = function() {
  var t = Di.length, i = Di.slice(0), e, r;
  for (lo = {}, Di.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Vo = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, $l = function(t, i, e, r) {
  Di.length && !Zt && ls(), t.render(i, e, !!(Zt && i < 0 && Vo(t))), Di.length && !Zt && ls();
}, ql = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(Df).length < 2 ? i : Ht(t) ? t.trim() : t;
}, Ul = function(t) {
  return t;
}, Ae = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, If = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, Ar = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, Aa = function o(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = si(i[e]) ? o(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, us = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, hn = function(t) {
  var i = t.parent || bt, e = t.keyframes ? If(se(t.keyframes)) : Ae;
  if (ge(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, Ff = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, Gl = function(t, i, e, r, n) {
  var s = t[r], a;
  if (n)
    for (a = i[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (i._next = s._next, s._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = s, i.parent = i._dp = t, i;
}, vs = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, s = i._next;
  n ? n._next = s : t[e] === i && (t[e] = s), s ? s._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, Li = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, tr = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, Nf = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, uo = function(t, i, e, r) {
  return t._startAt && (Zt ? t._startAt.revert(Jn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, Bf = function o(t) {
  return !t || t._ts && o(t.parent);
}, Ra = function(t) {
  return t._repeat ? Rr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Rr = function(t, i) {
  var e = Math.floor(t = xt(t / i));
  return t && e === t ? e - 1 : e;
}, fs = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, ws = function(t) {
  return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ct) || 0));
}, xs = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = xt(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), ws(t), e._dirty || tr(e, t)), t;
}, jl = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = fs(t.rawTime(), i), (!i._dur || Cn(0, i.totalDuration(), e) - i._tTime > ct) && i.render(e, !0)), tr(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -ct;
  }
}, ei = function(t, i, e, r) {
  return i.parent && Li(i), i._start = xt((mi(e) ? e : e || t !== bt ? Le(t, e, i) : t._time) + i._delay), i._end = xt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), Gl(t, i, "_first", "_last", t._sort ? "_start" : 0), fo(i) || (t._recent = i), r || jl(t, i), t._ts < 0 && xs(t, t._tTime), t;
}, Kl = function(t, i) {
  return (De.ScrollTrigger || Fo("scrollTrigger", i)) && De.ScrollTrigger.create(i, t);
}, Zl = function(t, i, e, r, n) {
  if (Wo(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Zt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Wl !== Ce.frame)
    return Di.push(t), t._lazy = [n, r], 1;
}, Yf = function o(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || o(i));
}, fo = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, Vf = function(t, i, e, r) {
  var n = t.ratio, s = i < 0 || !i && (!t._start && Yf(t) && !(!t._initted && fo(t)) || (t._ts < 0 || t._dp._ts < 0) && !fo(t)) ? 0 : 1, a = t._rDelay, u = 0, l, f, p;
  if (a && t._repeat && (u = Cn(0, t._tDur, i), f = Rr(u, a), t._yoyo && f & 1 && (s = 1 - s), f !== Rr(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || Zt || r || t._zTime === ct || !i && t._zTime) {
    if (!t._initted && Zl(t, i, r, e, u))
      return;
    for (p = t._zTime, t._zTime = i || (e ? ct : 0), e || (e = i && !p), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(s, l.d), l = l._next;
    i < 0 && uo(t, i, e, !0), t._onUpdate && !e && Pe(t, "onUpdate"), u && t._repeat && !e && t.parent && Pe(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === s && (s && Li(t, 1), !e && !Zt && (Pe(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, Xf = function(t, i, e) {
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
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : xt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && xs(t, t._tTime = t._tDur * a), t.parent && ws(t), e || tr(t.parent, t), t;
}, La = function(t) {
  return t instanceof pe ? tr(t) : Lr(t, t._dur);
}, Wf = {
  _start: 0,
  endTime: wn,
  totalDuration: wn
}, Le = function o(t, i, e) {
  var r = t.labels, n = t._recent || Wf, s = t.duration() >= Fe ? n.endTime(!1) : t._dur, a, u, l;
  return Ht(i) && (isNaN(i) || i in r) ? (u = i.charAt(0), l = i.substr(-1) === "%", a = i.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (l ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = s), r[i]) : (u = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), l && e && (u = u / 100 * (se(e) ? e[0] : e).totalDuration()), a > 1 ? o(t, i.substr(0, a - 1), e) + u : s + u)) : i == null ? s : +i;
}, cn = function(t, i, e) {
  var r = mi(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = i[n], a, u;
  if (r && (s.duration = i[1]), s.parent = e, t) {
    for (a = s, u = e; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = ge(u.vars.inherit) && u.parent;
    s.immediateRender = ge(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = i[n - 1];
  }
  return new Lt(i[0], s, i[n + 1]);
}, Fi = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, Cn = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, ne = function(t, i) {
  return !Ht(t) || !(i = Af.exec(t)) ? "" : i[1];
}, Hf = function(t, i, e) {
  return Fi(e, function(r) {
    return Cn(t, i, r);
  });
}, ho = [].slice, Ql = function(t, i) {
  return t && si(t) && "length" in t && (!i && !t.length || t.length - 1 in t && si(t[0])) && !t.nodeType && t !== ti;
}, $f = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return Ht(r) && !i || Ql(r, 1) ? (n = e).push.apply(n, Ne(r)) : e.push(r);
  }) || e;
}, Ne = function(t, i, e) {
  return vt && !i && vt.selector ? vt.selector(t) : Ht(t) && !e && (ao || !zr()) ? ho.call((i || Io).querySelectorAll(t), 0) : se(t) ? $f(t, e) : Ql(t) ? ho.call(t, 0) : t ? [t] : [];
}, co = function(t) {
  return t = Ne(t)[0] || vn("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return Ne(i, e.querySelectorAll ? e : e === t ? vn("Invalid scope") || Io.createElement("div") : t);
  };
}, Jl = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, tu = function(t) {
  if (Et(t))
    return t;
  var i = si(t) ? t : {
    each: t
  }, e = er(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, s = {}, a = r > 0 && r < 1, u = isNaN(r) || a, l = i.axis, f = r, p = r;
  return Ht(r) ? f = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && u && (f = r[0], p = r[1]), function(h, c, _) {
    var d = (_ || i).length, g = s[d], m, x, w, v, b, E, S, P, k;
    if (!g) {
      if (k = i.grid === "auto" ? 0 : (i.grid || [1, Fe])[1], !k) {
        for (S = -Fe; S < (S = _[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (g = s[d] = [], m = u ? Math.min(k, d) * f - 0.5 : r % k, x = k === Fe ? 0 : u ? d * p / k - 0.5 : r / k | 0, S = 0, P = Fe, E = 0; E < d; E++)
        w = E % k - m, v = x - (E / k | 0), g[E] = b = l ? Math.abs(l === "y" ? v : w) : Il(w * w + v * v), b > S && (S = b), b < P && (P = b);
      r === "random" && Jl(g), g.max = S - P, g.min = P, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (k > d ? d - 1 : l ? l === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = ne(i.amount || i.each) || 0, e = e && d < 0 ? fu(e) : e;
    }
    return d = (g[h] - g.min) / g.max || 0, xt(g.b + (e ? e(d) : d) * g.v) + g.u;
  };
}, po = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = xt(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (mi(e) ? 0 : ne(e));
  };
}, eu = function(t, i) {
  var e = se(t), r, n;
  return !e && si(t) && (r = e = t.radius || Fe, t.values ? (t = Ne(t.values), (n = !mi(t[0])) && (r *= r)) : t = po(t.increment)), Fi(i, e ? Et(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = Fe, f = 0, p = t.length, h, c; p--; )
      n ? (h = t[p].x - a, c = t[p].y - u, h = h * h + c * c) : h = Math.abs(t[p] - a), h < l && (l = h, f = p);
    return f = !r || l <= r ? t[f] : s, n || f === s || mi(s) ? f : f + ne(s);
  } : po(t));
}, iu = function(t, i, e, r) {
  return Fi(se(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return se(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, qf = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, Uf = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || ne(e));
  };
}, Gf = function(t, i, e) {
  return nu(t, i, 0, 1, e);
}, ru = function(t, i, e) {
  return Fi(e, function(r) {
    return t[~~i(r)];
  });
}, jf = function o(t, i, e) {
  var r = i - t;
  return se(t) ? ru(t, o(0, t.length), i) : Fi(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Kf = function o(t, i, e) {
  var r = i - t, n = r * 2;
  return se(t) ? ru(t, o(0, t.length - 1), i) : Fi(e, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, xn = function(t) {
  return t.replace(Of, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Mf);
    return iu(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, nu = function(t, i, e, r, n) {
  var s = i - t, a = r - e;
  return Fi(n, function(u) {
    return e + ((u - t) / s * a || 0);
  });
}, Zf = function o(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(c) {
    return (1 - c) * t + c * i;
  };
  if (!n) {
    var s = Ht(t), a = {}, u, l, f, p, h;
    if (e === !0 && (r = 1) && (e = null), s)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (se(t) && !se(i)) {
      for (f = [], p = t.length, h = p - 2, l = 1; l < p; l++)
        f.push(o(t[l - 1], t[l]));
      p--, n = function(_) {
        _ *= p;
        var d = Math.min(h, ~~_);
        return f[d](_ - d);
      }, e = i;
    } else r || (t = Ar(se(t) ? [] : {}, t));
    if (!f) {
      for (u in i)
        Xo.call(a, t, u, "get", i[u]);
      n = function(_) {
        return qo(_, a) || (s ? t.p : t);
      };
    }
  }
  return Fi(e, n);
}, za = function(t, i, e) {
  var r = t.labels, n = Fe, s, a, u;
  for (s in r)
    a = r[s] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (u = s, n = a);
  return u;
}, Pe = function(t, i, e) {
  var r = t.vars, n = r[i], s = vt, a = t._ctx, u, l, f;
  if (n)
    return u = r[i + "Params"], l = r.callbackScope || t, e && Di.length && ls(), a && (vt = a), f = u ? n.apply(l, u) : n.call(l), vt = s, f;
}, Zr = function(t) {
  return Li(t), t.scrollTrigger && t.scrollTrigger.kill(!!Zt), t.progress() < 1 && Pe(t, "onInterrupt"), t;
}, wr, su = [], ou = function(t) {
  if (t)
    if (t = !t.name && t.default || t, zo() || t.headless) {
      var i = t.name, e = Et(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: wn,
        render: qo,
        add: Xo,
        kill: ph,
        modifier: ch,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: $o,
        aliases: {},
        register: 0
      };
      if (zr(), t !== r) {
        if (Se[i])
          return;
        Ae(r, Ae(us(t, n), s)), Ar(r.prototype, Ar(n, us(t, s))), Se[r.prop = i] = r, t.targetTest && (ts.push(r), No[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      Xl(i, r), t.register && t.register(we, r, ye);
    } else
      su.push(t);
}, ht = 255, Qr = {
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
}, Is = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * ht + 0.5 | 0;
}, au = function(t, i, e) {
  var r = t ? mi(t) ? [t >> 16, t >> 8 & ht, t & ht] : 0 : Qr.black, n, s, a, u, l, f, p, h, c, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Qr[t])
      r = Qr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & ht, r & ht, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & ht, t & ht];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(Ma), !i)
        u = +r[0] % 360 / 360, l = +r[1] / 100, f = +r[2] / 100, s = f <= 0.5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Is(u + 1 / 3, n, s), r[1] = Is(u, n, s), r[2] = Is(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Nl), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(Ma) || Qr.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / ht, s = r[1] / ht, a = r[2] / ht, p = Math.max(n, s, a), h = Math.min(n, s, a), f = (p + h) / 2, p === h ? u = l = 0 : (c = p - h, l = f > 0.5 ? c / (2 - p - h) : c / (p + h), u = p === n ? (s - a) / c + (s < a ? 6 : 0) : p === s ? (a - n) / c + 2 : (n - s) / c + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(l * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, lu = function(t) {
  var i = [], e = [], r = -1;
  return t.split(Ai).forEach(function(n) {
    var s = n.match(vr) || [];
    i.push.apply(i, s), e.push(r += s.length + 1);
  }), i.c = e, i;
}, Ia = function(t, i, e) {
  var r = "", n = (t + r).match(Ai), s = i ? "hsla(" : "rgba(", a = 0, u, l, f, p;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = au(h, i, 1)) && s + (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), e && (f = lu(t), u = e.c, u.join(r) !== f.c.join(r)))
    for (l = t.replace(Ai, "1").split(vr), p = l.length - 1; a < p; a++)
      r += l[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
  if (!l)
    for (l = t.split(Ai), p = l.length - 1; a < p; a++)
      r += l[a] + n[a];
  return r + l[p];
}, Ai = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Qr)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), Qf = /hsl[a]?\(/, uu = function(t) {
  var i = t.join(" "), e;
  if (Ai.lastIndex = 0, Ai.test(i))
    return e = Qf.test(i), t[1] = Ia(t[1], e), t[0] = Ia(t[0], e, lu(t[1])), !0;
}, bn, Ce = function() {
  var o = Date.now, t = 500, i = 33, e = o(), r = e, n = 1e3 / 240, s = n, a = [], u, l, f, p, h, c, _ = function d(g) {
    var m = o() - r, x = g === !0, w, v, b, E;
    if ((m > t || m < 0) && (e += m - i), r += m, b = r - e, w = b - s, (w > 0 || x) && (E = ++p.frame, h = b - p.time * 1e3, p.time = b = b / 1e3, s += w + (w >= n ? 4 : n - w), v = 1), x || (u = l(d)), v)
      for (c = 0; c < a.length; c++)
        a[c](b, h, E, g);
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
      Yl && (!ao && zo() && (ti = ao = window, Io = ti.document || {}, De.gsap = we, (ti.gsapVersions || (ti.gsapVersions = [])).push(we.version), Vl(as || ti.GreenSockGlobals || !ti.gsap && ti || {}), su.forEach(ou)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && p.sleep(), l = f || function(g) {
        return setTimeout(g, s - p.time * 1e3 + 1 | 0);
      }, bn = 1, _(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), bn = 0, l = wn;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, i = Math.min(m || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = p.time * 1e3 + n;
    },
    add: function(g, m, x) {
      var w = m ? function(v, b, E, S) {
        g(v, b, E, S), p.remove(w);
      } : g;
      return p.remove(g), a[x ? "unshift" : "push"](w), zr(), w;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && c >= m && c--;
    },
    _listeners: a
  }, p;
}(), zr = function() {
  return !bn && Ce.wake();
}, et = {}, Jf = /^[\d.\-M][\d.\-,\s]/, th = /["']/g, eh = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, s = e.length, a, u, l; n < s; n++)
    u = e[n], a = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, a), i[r] = isNaN(l) ? l.replace(th, "").trim() : +l, r = u.substr(a + 1).trim();
  return i;
}, ih = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, rh = function(t) {
  var i = (t + "").split("("), e = et[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [eh(i[1])] : ih(t).split(",").map(ql)) : et._CE && Jf.test(t) ? et._CE("", t) : e;
}, fu = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, hu = function o(t, i) {
  for (var e = t._first, r; e; )
    e instanceof pe ? o(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? o(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next;
}, er = function(t, i) {
  return t && (Et(t) ? t : et[t] || rh(t)) || i;
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
}, cu = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, Fs = function o(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), s = n / oo * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Pf((f - s) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(l) {
    return 1 - a(1 - l);
  } : cu(a);
  return n = oo / n, u.config = function(l, f) {
    return o(t, l, f);
  }, u;
}, Ns = function o(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(s) {
    return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : cu(e);
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
ur("Elastic", Fs("in"), Fs("out"), Fs());
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
  return -(Il(1 - o * o) - 1);
});
ur("Sine", function(o) {
  return o === 1 ? 1 : -Cf(o * Ef) + 1;
});
ur("Back", Ns("in"), Ns("out"), Ns());
et.SteppedEase = et.steps = De.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, s = 1 - ct;
    return function(a) {
      return ((r * Cn(0, s, a) | 0) + n) * e;
    };
  }
};
Dr.ease = et["quad.out"];
me("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Bo += o + "," + o + "Params,";
});
var pu = function(t, i) {
  this.id = kf++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : Hl, this.set = i ? i.getSetter : $o;
}, Tn = /* @__PURE__ */ function() {
  function o(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Lr(this, +i.duration, 1, 1), this.data = i.data, vt && (this._ctx = vt, vt.data.push(this)), bn || Ce.wake();
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
      for (xs(this, e), !n._dp || n.parent || jl(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ei(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === ct || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), $l(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ra(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + Ra(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? Rr(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -ct ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? fs(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -ct ? 0 : this._rts, this.totalTime(Cn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), ws(this), Nf(this);
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
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? fs(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Lf);
    var r = Zt;
    return Zt = e, Vo(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Zt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, La(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, La(this), r ? this.time(r) : this;
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
      var a = Et(e) ? e : Ul, u = function() {
        var f = r.then;
        r.then = null, n && n(), Et(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), s(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u;
    });
  }, t.kill = function() {
    Zr(this);
  }, o;
}();
Ae(Tn.prototype, {
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
var pe = /* @__PURE__ */ function(o) {
  zl(t, o);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = o.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ge(e.sortChildren), bt && ei(e.parent || bt, fi(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Kl(fi(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, s) {
    return cn(0, arguments, this), this;
  }, i.from = function(r, n, s) {
    return cn(1, arguments, this), this;
  }, i.fromTo = function(r, n, s, a) {
    return cn(2, arguments, this), this;
  }, i.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, hn(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Lt(r, n, Le(this, s), 1), this;
  }, i.call = function(r, n, s) {
    return ei(this, Lt.delayedCall(0, r, n), s);
  }, i.staggerTo = function(r, n, s, a, u, l, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new Lt(r, s, Le(this, u)), this;
  }, i.staggerFrom = function(r, n, s, a, u, l, f) {
    return s.runBackwards = 1, hn(s).immediateRender = ge(s.immediateRender), this.staggerTo(r, n, s, a, u, l, f);
  }, i.staggerFromTo = function(r, n, s, a, u, l, f, p) {
    return a.startAt = s, hn(a).immediateRender = ge(a.immediateRender), this.staggerTo(r, n, a, u, l, f, p);
  }, i.render = function(r, n, s) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = r <= 0 ? 0 : xt(r), p = this._zTime < 0 != r < 0 && (this._initted || !l), h, c, _, d, g, m, x, w, v, b, E, S;
    if (this !== bt && f > u && r >= 0 && (f = u), f !== this._tTime || s || p) {
      if (a !== this._time && l && (f += this._time - a, r += this._time - a), h = f, v = this._start, w = this._ts, m = !w, p && (l || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (E = this._yoyo, g = l + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (h = xt(f % g), f === u ? (d = this._repeat, h = l) : (b = xt(f / g), d = ~~b, d && d === b && (h = l, d--), h > l && (h = l)), b = Rr(this._tTime, g), !a && this._tTime && b !== d && this._tTime - b * g - this._dur <= 0 && (b = d), E && d & 1 && (h = l - h, S = 1), d !== b && !this._lock) {
          var P = E && b & 1, k = P === (E && d & 1);
          if (d < b && (P = !P), a = P ? 0 : f % l ? l : f, this._lock = 1, this.render(a || (S ? 0 : xt(d * g)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && Pe(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, b = d), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, k && (this._lock = 2, a = P ? l : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          hu(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Xf(this, xt(a), xt(h)), x && (f -= h - (h = x._start))), this._tTime = f, this._time = h, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && l && !n && !b && (Pe(this, "onStart"), this._tTime !== f))
        return this;
      if (h >= a && r >= 0)
        for (c = this._first; c; ) {
          if (_ = c._next, (c._act || h >= c._start) && c._ts && x !== c) {
            if (c.parent !== this)
              return this.render(r, n, s);
            if (c.render(c._ts > 0 ? (h - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (h - c._start) * c._ts, n, s), h !== this._time || !this._ts && !m) {
              x = 0, _ && (f += this._zTime = -ct);
              break;
            }
          }
          c = _;
        }
      else {
        c = this._last;
        for (var C = r < 0 ? r : h; c; ) {
          if (_ = c._prev, (c._act || C <= c._end) && c._ts && x !== c) {
            if (c.parent !== this)
              return this.render(r, n, s);
            if (c.render(c._ts > 0 ? (C - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (C - c._start) * c._ts, n, s || Zt && Vo(c)), h !== this._time || !this._ts && !m) {
              x = 0, _ && (f += this._zTime = C ? -ct : ct);
              break;
            }
          }
          c = _;
        }
      }
      if (x && !n && (this.pause(), x.render(h >= a ? 0 : -ct)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, ws(this), this.render(r, n, s);
      this._onUpdate && !n && Pe(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && a) && (v === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && Li(this, 1), !n && !(r < 0 && !a) && (f || a || !u) && (Pe(this, f === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var s = this;
    if (mi(n) || (n = Le(this, n, r)), !(r instanceof Tn)) {
      if (se(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (Ht(r))
        return this.addLabel(r, n);
      if (Et(r))
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
    return Ht(r) ? this.removeLabel(r) : Et(r) ? this.killTweensOf(r) : (r.parent === this && vs(this, r), r === this._recent && (this._recent = this._last), tr(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Ce.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = Le(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, s) {
    var a = Lt.delayedCall(0, n || wn, s);
    return a.data = "isPause", this._hasPause = 1, ei(this, a, Le(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = Le(this, r); n; )
      n._start === r && n.data === "isPause" && Li(n), n = n._next;
  }, i.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), u = a.length; u--; )
      Ci !== a[u] && a[u].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var s = [], a = Ne(r), u = this._first, l = mi(n), f; u; )
      u instanceof Lt ? zf(u._targets, a) && (l ? (!Ci || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(a, n)).length && s.push.apply(s, f), u = u._next;
    return s;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = Le(s, r), u = n, l = u.startAt, f = u.onStart, p = u.onStartParams, h = u.immediateRender, c, _ = Lt.to(s, Ae({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || ct,
      onStart: function() {
        if (s.pause(), !c) {
          var g = n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          _._dur !== g && Lr(_, g, 0, 1).render(_._time, !0, !0), c = 1;
        }
        f && f.apply(_, p || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, i.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, Ae({
      startAt: {
        time: Le(this, r)
      }
    }, s));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), za(this, Le(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), za(this, Le(this, r), 1);
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
    return tr(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return o.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), tr(this);
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
    if (bt._ts && ($l(bt, fs(r, bt)), Wl = Ce.frame), Ce.frame >= Da) {
      Da += Me.autoSleep || 120;
      var n = bt._first;
      if ((!n || !n._ts) && Me.autoSleep && Ce._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Ce.sleep();
      }
    }
  }, t;
}(Tn);
Ae(pe.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var nh = function(t, i, e, r, n, s, a) {
  var u = new ye(this._pt, t, i, 0, 1, vu, null, n), l = 0, f = 0, p, h, c, _, d, g, m, x;
  for (u.b = e, u.e = r, e += "", r += "", (m = ~r.indexOf("random(")) && (r = xn(r)), s && (x = [e, r], s(x, t, i), e = x[0], r = x[1]), h = e.match(Ls) || []; p = Ls.exec(r); )
    _ = p[0], d = r.substring(l, p.index), c ? c = (c + 1) % 5 : d.substr(-5) === "rgba(" && (c = 1), _ !== h[f++] && (g = parseFloat(h[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: d || f === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? kr(g, _) - g : parseFloat(_) - g,
      m: c && c < 4 ? Math.round : 0
    }, l = Ls.lastIndex);
  return u.c = l < r.length ? r.substring(l, r.length) : "", u.fp = a, (Bl.test(r) || m) && (u.e = 0), this._pt = u, u;
}, Xo = function(t, i, e, r, n, s, a, u, l, f) {
  Et(r) && (r = r(n || 0, t, s));
  var p = t[i], h = e !== "get" ? e : Et(p) ? l ? t[i.indexOf("set") || !Et(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](l) : t[i]() : p, c = Et(p) ? l ? uh : mu : Ho, _;
  if (Ht(r) && (~r.indexOf("random(") && (r = xn(r)), r.charAt(1) === "=" && (_ = kr(h, r) + (ne(h) || 0), (_ || _ === 0) && (r = _))), !f || h !== r || _o)
    return !isNaN(h * r) && r !== "" ? (_ = new ye(this._pt, t, i, +h || 0, r - (h || 0), typeof p == "boolean" ? hh : yu, 0, c), l && (_.fp = l), a && _.modifier(a, this, t), this._pt = _) : (!p && !(i in t) && Fo(i, r), nh.call(this, t, i, h, r, c, u || Me.stringFilter, l));
}, sh = function(t, i, e, r, n) {
  if (Et(t) && (t = pn(t, n, i, e, r)), !si(t) || t.style && t.nodeType || se(t) || Fl(t))
    return Ht(t) ? pn(t, n, i, e, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = pn(t[a], n, i, e, r);
  return s;
}, du = function(t, i, e, r, n, s) {
  var a, u, l, f;
  if (Se[t] && (a = new Se[t]()).init(n, a.rawVars ? i[t] : sh(i[t], r, n, s, e), e, r, s) !== !1 && (e._pt = u = new ye(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== wr))
    for (l = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
      l[a._props[f]] = u;
  return a;
}, Ci, _o, Wo = function o(t, i, e) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, u = r.lazy, l = r.onUpdate, f = r.runBackwards, p = r.yoyoEase, h = r.keyframes, c = r.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, m = t.parent, x = m && m.data === "nested" ? m.vars.targets : g, w = t._overwrite === "auto" && !Ro, v = t.timeline, b, E, S, P, k, C, A, O, Y, I, D, $, V;
  if (v && (!h || !n) && (n = "none"), t._ease = er(n, Dr.ease), t._yEase = p ? fu(er(p === !0 ? n : p, Dr.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !v && !!r.runBackwards, !v || h && !r.stagger) {
    if (O = g[0] ? Ji(g[0]).harness : 0, $ = O && r[O.prop], b = us(r, No), d && (d._zTime < 0 && d.progress(1), i < 0 && f && a && !c ? d.render(-1, !0) : d.revert(f && _ ? Jn : Rf), d._lazy = 0), s) {
      if (Li(t._startAt = Lt.set(g, Ae({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !d && ge(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Pe(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Zt || !a && !c) && t._startAt.revert(Jn), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (f && _ && !d) {
      if (i && (a = !1), S = Ae({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && ge(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), $ && (S[O.prop] = $), Li(t._startAt = Lt.set(g, S)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Zt ? t._startAt.revert(Jn) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        o(t._startAt, ct, ct);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, u = _ && ge(u) || u && !_, E = 0; E < g.length; E++) {
      if (k = g[E], A = k._gsap || Yo(g)[E]._gsap, t._ptLookup[E] = I = {}, lo[A.id] && Di.length && ls(), D = x === g ? E : x.indexOf(k), O && (Y = new O()).init(k, $ || b, t, D, x) !== !1 && (t._pt = P = new ye(t._pt, k, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(it) {
        I[it] = P;
      }), Y.priority && (C = 1)), !O || $)
        for (S in b)
          Se[S] && (Y = du(S, b, t, D, k, x)) ? Y.priority && (C = 1) : I[S] = P = Xo.call(t, k, S, "get", b[S], D, x, 0, r.stringFilter);
      t._op && t._op[E] && t.kill(k, t._op[E]), w && t._pt && (Ci = t, bt.killTweensOf(k, I, t.globalTime(i)), V = !t.parent, Ci = 0), t._pt && u && (lo[A.id] = 1);
    }
    C && wu(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !V, h && i <= 0 && v.render(Fe, !0, !0);
}, oh = function(t, i, e, r, n, s, a, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, p, h, c;
  if (!l)
    for (l = t._ptCache[i] = [], h = t._ptLookup, c = t._targets.length; c--; ) {
      if (f = h[c][i], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== i && f.fp !== i; )
          f = f._next;
      if (!f)
        return _o = 1, t.vars[i] = "+=0", Wo(t, a), _o = 0, u ? vn(i + " not eligible for reset") : 1;
      l.push(f);
    }
  for (c = l.length; c--; )
    p = l[c], f = p._pt || p, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c, f.c = e - f.s, p.e && (p.e = Pt(e) + ne(p.e)), p.b && (p.b = f.s + ne(p.b));
}, ah = function(t, i) {
  var e = t[0] ? Ji(t[0]).harness : 0, r = e && e.aliases, n, s, a, u;
  if (!r)
    return i;
  n = Ar({}, i);
  for (s in r)
    if (s in n)
      for (u = r[s].split(","), a = u.length; a--; )
        n[u[a]] = n[s];
  return n;
}, lh = function(t, i, e, r) {
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
}, pn = function(t, i, e, r, n) {
  return Et(t) ? t.call(i, e, r, n) : Ht(t) && ~t.indexOf("random(") ? xn(t) : t;
}, _u = Bo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", gu = {};
me(_u + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return gu[o] = 1;
});
var Lt = /* @__PURE__ */ function(o) {
  zl(t, o);
  function t(e, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = o.call(this, s ? r : hn(r)) || this;
    var u = a.vars, l = u.duration, f = u.delay, p = u.immediateRender, h = u.stagger, c = u.overwrite, _ = u.keyframes, d = u.defaults, g = u.scrollTrigger, m = u.yoyoEase, x = r.parent || bt, w = (se(e) || Fl(e) ? mi(e[0]) : "length" in r) ? [e] : Ne(e), v, b, E, S, P, k, C, A;
    if (a._targets = w.length ? Yo(w) : vn("GSAP target " + e + " not found. https://gsap.com", !Me.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = c, _ || h || Wn(l) || Wn(f)) {
      if (r = a.vars, v = a.timeline = new pe({
        data: "nested",
        defaults: d || {},
        targets: x && x.data === "nested" ? x.vars.targets : w
      }), v.kill(), v.parent = v._dp = fi(a), v._start = 0, h || Wn(l) || Wn(f)) {
        if (S = w.length, C = h && tu(h), si(h))
          for (P in h)
            ~_u.indexOf(P) && (A || (A = {}), A[P] = h[P]);
        for (b = 0; b < S; b++)
          E = us(r, gu), E.stagger = 0, m && (E.yoyoEase = m), A && Ar(E, A), k = w[b], E.duration = +pn(l, fi(a), b, k, w), E.delay = (+pn(f, fi(a), b, k, w) || 0) - a._delay, !h && S === 1 && E.delay && (a._delay = f = E.delay, a._start += f, E.delay = 0), v.to(k, E, C ? C(b, k, w) : 0), v._ease = et.none;
        v.duration() ? l = f = 0 : a.timeline = 0;
      } else if (_) {
        hn(Ae(v.vars.defaults, {
          ease: "none"
        })), v._ease = er(_.ease || r.ease || "none");
        var O = 0, Y, I, D;
        if (se(_))
          _.forEach(function($) {
            return v.to(w, $, ">");
          }), v.duration();
        else {
          E = {};
          for (P in _)
            P === "ease" || P === "easeEach" || lh(P, _[P], E, _.easeEach);
          for (P in E)
            for (Y = E[P].sort(function($, V) {
              return $.t - V.t;
            }), O = 0, b = 0; b < Y.length; b++)
              I = Y[b], D = {
                ease: I.e,
                duration: (I.t - (b ? Y[b - 1].t : 0)) / 100 * l
              }, D[P] = I.v, v.to(w, D, O), O += D.duration;
          v.duration() < l && v.to({}, {
            duration: l - v.duration()
          });
        }
      }
      l || a.duration(l = v.duration());
    } else
      a.timeline = 0;
    return c === !0 && !Ro && (Ci = fi(a), bt.killTweensOf(w), Ci = 0), ei(x, fi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (p || !l && !_ && a._start === xt(x._time) && ge(p) && Bf(fi(a)) && x.data !== "nested") && (a._tTime = -ct, a.render(Math.max(0, -f) || 0)), g && Kl(fi(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, s) {
    var a = this._time, u = this._tDur, l = this._dur, f = r < 0, p = r > u - ct && !f ? u : r < ct ? 0 : r, h, c, _, d, g, m, x, w, v;
    if (!l)
      Vf(this, r, n, s);
    else if (p !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (h = p, w = this.timeline, this._repeat) {
        if (d = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(d * 100 + r, n, s);
        if (h = xt(p % d), p === u ? (_ = this._repeat, h = l) : (g = xt(p / d), _ = ~~g, _ && _ === g ? (h = l, _--) : h > l && (h = l)), m = this._yoyo && _ & 1, m && (v = this._yEase, h = l - h), g = Rr(this._tTime, d), h === a && !s && this._initted && _ === g)
          return this._tTime = p, this;
        _ !== g && (w && this._yEase && hu(w, m), this.vars.repeatRefresh && !m && !this._lock && h !== d && this._initted && (this._lock = s = 1, this.render(xt(d * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Zl(this, f ? r : h, s, n, p))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
          return this;
        if (l !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = p, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (v || this._ease)(h / l), this._from && (this.ratio = x = 1 - x), !a && p && !n && !g && (Pe(this, "onStart"), this._tTime !== p))
        return this;
      for (c = this._pt; c; )
        c.r(x, c.d), c = c._next;
      w && w.render(r < 0 ? r : w._dur * w._ease(h / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && uo(this, r, n, s), Pe(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && Pe(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (f && !this._onUpdate && uo(this, r, !0, !0), (r || !l) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Li(this, 1), !n && !(f && !a) && (p || a || m) && (Pe(this, p === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, s, a, u) {
    bn || Ce.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Wo(this, l), f = this._ease(l / this._dur), oh(this, r, n, s, a, f, l, u) ? this.resetTo(r, n, s, a, 1) : (xs(this, 0), this.parent || Gl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Zr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Zt), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Ci && Ci.vars.overwrite !== !0)._first || Zr(this), this.parent && s !== this.timeline.totalDuration() && Lr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, u = r ? Ne(r) : a, l = this._ptLookup, f = this._pt, p, h, c, _, d, g, m;
    if ((!n || n === "all") && Ff(a, u))
      return n === "all" && (this._pt = 0), Zr(this);
    for (p = this._op = this._op || [], n !== "all" && (Ht(n) && (d = {}, me(n, function(x) {
      return d[x] = 1;
    }), n = d), n = ah(a, n)), m = a.length; m--; )
      if (~u.indexOf(a[m])) {
        h = l[m], n === "all" ? (p[m] = n, _ = h, c = {}) : (c = p[m] = p[m] || {}, _ = n);
        for (d in _)
          g = h && h[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && vs(this, g, "_pt"), delete h[d]), c !== "all" && (c[d] = 1);
      }
    return this._initted && !this._pt && f && Zr(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return cn(1, arguments);
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
    return cn(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return bt.killTweensOf(r, n, s);
  }, t;
}(Tn);
Ae(Lt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
me("staggerTo,staggerFrom,staggerFromTo", function(o) {
  Lt[o] = function() {
    var t = new pe(), i = ho.call(arguments, 0);
    return i.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, i);
  };
});
var Ho = function(t, i, e) {
  return t[i] = e;
}, mu = function(t, i, e) {
  return t[i](e);
}, uh = function(t, i, e, r) {
  return t[i](r.fp, e);
}, fh = function(t, i, e) {
  return t.setAttribute(i, e);
}, $o = function(t, i) {
  return Et(t[i]) ? mu : Lo(t[i]) && t.setAttribute ? fh : Ho;
}, yu = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, hh = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, vu = function(t, i) {
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
}, qo = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, ch = function(t, i, e, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, i, e), n = s;
}, ph = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? vs(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, dh = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, wu = function(t) {
  for (var i = t._pt, e, r, n, s; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : s) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : s = i, i = e;
  }
  t._pt = n;
}, ye = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a, u, l, f) {
    this.t = e, this.s = n, this.c = s, this.p = r, this.r = a || yu, this.d = u || this, this.set = l || Ho, this.pr = f || 0, this._next = i, i && (i._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = dh, this.m = e, this.mt = n, this.tween = r;
  }, o;
}();
me(Bo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return No[o] = 1;
});
De.TweenMax = De.TweenLite = Lt;
De.TimelineLite = De.TimelineMax = pe;
bt = new pe({
  sortChildren: !1,
  defaults: Dr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Me.stringFilter = uu;
var ir = [], es = {}, _h = [], Fa = 0, gh = 0, Bs = function(t) {
  return (es[t] || _h).map(function(i) {
    return i();
  });
}, go = function() {
  var t = Date.now(), i = [];
  t - Fa > 2 && (Bs("matchMediaInit"), ir.forEach(function(e) {
    var r = e.queries, n = e.conditions, s, a, u, l;
    for (a in r)
      s = ti.matchMedia(r[a]).matches, s && (u = 1), s !== n[a] && (n[a] = s, l = 1);
    l && (e.revert(), u && i.push(e));
  }), Bs("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), Fa = t, Bs("matchMedia"));
}, xu = /* @__PURE__ */ function() {
  function o(i, e) {
    this.selector = e && co(e), this.data = [], this._r = [], this.isReverted = !1, this.id = gh++, i && this.add(i);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    Et(e) && (n = r, r = e, e = Et);
    var s = this, a = function() {
      var l = vt, f = s.selector, p;
      return l && l !== s && l.data.push(s), n && (s.selector = co(n)), vt = s, p = r.apply(s, arguments), Et(p) && s._r.push(p), vt = l, s.selector = f, s.isReverted = !1, p;
    };
    return s.last = a, e === Et ? a(s, function(u) {
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
        l = n.data[u], l instanceof pe ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Lt) && l.revert && l.revert(e);
      n._r.forEach(function(f) {
        return f(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = ir.length; s--; )
        ir[s].id === this.id && ir.splice(s, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, o;
}(), mh = /* @__PURE__ */ function() {
  function o(i) {
    this.contexts = [], this.scope = i, vt && vt.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(e, r, n) {
    si(e) || (e = {
      matches: e
    });
    var s = new xu(0, n || this.scope), a = s.conditions = {}, u, l, f;
    vt && !s.selector && (s.selector = vt.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = e;
    for (l in e)
      l === "all" ? f = 1 : (u = ti.matchMedia(e[l]), u && (ir.indexOf(s) < 0 && ir.push(s), (a[l] = u.matches) && (f = 1), u.addListener ? u.addListener(go) : u.addEventListener("change", go)));
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
}(), hs = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return ou(r);
    });
  },
  timeline: function(t) {
    return new pe(t);
  },
  getTweensOf: function(t, i) {
    return bt.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    Ht(t) && (t = Ne(t)[0]);
    var n = Ji(t || {}).get, s = e ? Ul : ql;
    return e === "native" && (e = ""), t && (i ? s((Se[i] && Se[i].get || n)(t, i, e, r)) : function(a, u, l) {
      return s((Se[a] && Se[a].get || n)(t, a, u, l));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = Ne(t), t.length > 1) {
      var r = t.map(function(f) {
        return we.quickSetter(f, i, e);
      }), n = r.length;
      return function(f) {
        for (var p = n; p--; )
          r[p](f);
      };
    }
    t = t[0] || {};
    var s = Se[i], a = Ji(t), u = a.harness && (a.harness.aliases || {})[i] || i, l = s ? function(f) {
      var p = new s();
      wr._pt = 0, p.init(t, e ? f + e : f, wr, 0, [t]), p.render(1, p), wr._pt && qo(1, wr);
    } : a.set(t, u);
    return s ? l : function(f) {
      return l(t, u, e ? f + e : f, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = we.to(t, Ae((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), s = function(u, l, f) {
      return n.resetTo(i, u, l, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return bt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = er(t.ease, Dr.ease)), Aa(Dr, t || {});
  },
  config: function(t) {
    return Aa(Me, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !Se[a] && !De[a] && vn(i + " effect requires " + a + " plugin.");
    }), zs[i] = function(a, u, l) {
      return e(Ne(a), Ae(u || {}, n), l);
    }, s && (pe.prototype[i] = function(a, u, l) {
      return this.add(zs[i](a, si(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(t, i) {
    et[t] = er(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? er(t, i) : et;
  },
  getById: function(t) {
    return bt.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new pe(t), r, n;
    for (e.smoothChildTiming = ge(t.smoothChildTiming), bt.remove(e), e._dp = 0, e._time = e._tTime = bt._time, r = bt._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof Lt && r.vars.onComplete === r._targets[0])) && ei(e, r, r._start - r._delay), r = n;
    return ei(bt, e, 0), e;
  },
  context: function(t, i) {
    return t ? new xu(t, i) : vt;
  },
  matchMedia: function(t) {
    return new mh(t);
  },
  matchMediaRefresh: function() {
    return ir.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || go();
  },
  addEventListener: function(t, i) {
    var e = es[t] || (es[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = es[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: jf,
    wrapYoyo: Kf,
    distribute: tu,
    random: iu,
    snap: eu,
    normalize: Gf,
    getUnit: ne,
    clamp: Hf,
    splitColor: au,
    toArray: Ne,
    selector: co,
    mapRange: nu,
    pipe: qf,
    unitize: Uf,
    interpolate: Zf,
    shuffle: Jl
  },
  install: Vl,
  effects: zs,
  ticker: Ce,
  updateRoot: pe.updateRoot,
  plugins: Se,
  globalTimeline: bt,
  core: {
    PropTween: ye,
    globals: Xl,
    Tween: Lt,
    Timeline: pe,
    Animation: Tn,
    getCache: Ji,
    _removeLinkedListItem: vs,
    reverting: function() {
      return Zt;
    },
    context: function(t) {
      return t && vt && (vt.data.push(t), t._ctx = vt), vt;
    },
    suppressOverwrites: function(t) {
      return Ro = t;
    }
  }
};
me("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return hs[o] = Lt[o];
});
Ce.add(pe.updateRoot);
wr = hs.to({}, {
  duration: 0
});
var yh = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, vh = function(t, i) {
  var e = t._targets, r, n, s;
  for (r in i)
    for (n = e.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = yh(s, r)), s && s.modifier && s.modifier(i[r], t, e[n], r));
}, Ys = function(t, i) {
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
        vh(a, n);
      };
    }
  };
}, we = hs.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var s, a, u;
    this.tween = e;
    for (s in i)
      u = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (u || 0) + "", i[s], r, n, 0, 0, s), a.op = s, a.b = u, this._props.push(s);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      Zt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, Ys("roundProps", po), Ys("modifiers"), Ys("snap", eu)) || hs;
Lt.version = pe.version = we.version = "3.14.2";
Yl = 1;
zo() && zr();
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
var Na, Pi, Cr, Uo, ji, Ba, Go, wh = function() {
  return typeof window < "u";
}, yi = {}, Ui = 180 / Math.PI, Pr = Math.PI / 180, _r = Math.atan2, Ya = 1e8, jo = /([A-Z])/g, xh = /(left|right|width|margin|padding|x)/i, bh = /[\s,\(]\S/, ri = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, mo = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Th = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Sh = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Eh = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, kh = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, bu = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, Tu = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, Ch = function(t, i, e) {
  return t.style[i] = e;
}, Ph = function(t, i, e) {
  return t.style.setProperty(i, e);
}, Oh = function(t, i, e) {
  return t._gsap[i] = e;
}, Mh = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Dh = function(t, i, e, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = e, s.renderTransform(n, s);
}, Ah = function(t, i, e, r, n) {
  var s = t._gsap;
  s[i] = e, s.renderTransform(n, s);
}, Tt = "transform", ve = Tt + "Origin", Rh = function o(t, i) {
  var e = this, r = this.target, n = r.style, s = r._gsap;
  if (t in yi && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ri[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = hi(r, a);
      }) : this.tfm[t] = s.x ? s[t] : hi(r, t), t === ve && (this.tfm.zOrigin = s.zOrigin);
    else
      return ri.transform.split(",").forEach(function(a) {
        return o.call(e, a, i);
      });
    if (this.props.indexOf(Tt) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ve, i, "")), t = Tt;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, Su = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Lh = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(jo, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = Go(), (!n || !n.isStart) && !e[Tt] && (Su(e), r.zOrigin && e[ve] && (e[ve] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Eu = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: Lh,
    save: Rh
  };
  return t._gsap || we.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, ku, yo = function(t, i) {
  var e = Pi.createElementNS ? Pi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pi.createElement(t);
  return e && e.style ? e : Pi.createElement(t);
}, Oe = function o(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(jo, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && o(t, Ir(i) || i, 1) || "";
}, Va = "O,Moz,ms,Ms,Webkit".split(","), Ir = function(t, i, e) {
  var r = i || ji, n = r.style, s = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Va[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Va[s] : "") + t;
}, vo = function() {
  wh() && window.document && (Na = window, Pi = Na.document, Cr = Pi.documentElement, ji = yo("div") || {
    style: {}
  }, yo("div"), Tt = Ir(Tt), ve = Tt + "Origin", ji.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ku = !!Ir("perspective"), Go = we.core.reverting, Uo = 1);
}, Xa = function(t) {
  var i = t.ownerSVGElement, e = yo("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), Cr.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), Cr.removeChild(e), n;
}, Wa = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, Cu = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = Xa(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = Xa(t)), i && !i.width && !i.x && !i.y ? {
    x: +Wa(t, ["x", "cx", "x1"]) || 0,
    y: +Wa(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Pu = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Cu(t));
}, zi = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in yi && i !== ve && (i = Tt), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(jo, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, Oi = function(t, i, e, r, n, s) {
  var a = new ye(t._pt, i, e, 0, 1, s ? Tu : bu);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, Ha = {
  deg: 1,
  rad: 1,
  turn: 1
}, zh = {
  grid: 1,
  flex: 1
}, Ii = function o(t, i, e, r) {
  var n = parseFloat(e) || 0, s = (e + "").trim().substr((n + "").length) || "px", a = ji.style, u = xh.test(i), l = t.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), p = 100, h = r === "px", c = r === "%", _, d, g, m;
  if (r === s || !n || Ha[r] || Ha[s])
    return n;
  if (s !== "px" && !h && (n = o(t, i, e, "px")), m = t.getCTM && Pu(t), (c || s === "%") && (yi[i] || ~i.indexOf("adius")))
    return _ = m ? t.getBBox()[u ? "width" : "height"] : t[f], Pt(c ? n / _ * p : n / 100 * _);
  if (a[u ? "width" : "height"] = p + (h ? s : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, m && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === Pi || !d.appendChild) && (d = Pi.body), g = d._gsap, g && c && g.width && u && g.time === Ce.time && !g.uncache)
    return Pt(n / g.width * p);
  if (c && (i === "height" || i === "width")) {
    var x = t.style[i];
    t.style[i] = p + r, _ = t[f], x ? t.style[i] = x : zi(t, i);
  } else
    (c || s === "%") && !zh[Oe(d, "display")] && (a.position = Oe(t, "position")), d === t && (a.position = "static"), d.appendChild(ji), _ = ji[f], d.removeChild(ji), a.position = "absolute";
  return u && c && (g = Ji(d), g.time = Ce.time, g.width = d[f]), Pt(h ? _ * n / p : _ && n ? p / _ * n : 0);
}, hi = function(t, i, e, r) {
  var n;
  return Uo || vo(), i in ri && i !== "transform" && (i = ri[i], ~i.indexOf(",") && (i = i.split(",")[0])), yi[i] && i !== "transform" ? (n = En(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : ps(Oe(t, ve)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = cs[i] && cs[i](t, i, e) || Oe(t, i) || Hl(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Ii(t, i, n, e) + e : n;
}, Ih = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = Ir(i, t, 1), s = n && Oe(t, n, 1);
    s && s !== e ? (i = n, e = s) : i === "borderColor" && (e = Oe(t, "borderTopColor"));
  }
  var a = new ye(this._pt, t.style, i, 0, 1, vu), u = 0, l = 0, f, p, h, c, _, d, g, m, x, w, v, b;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Oe(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = Oe(t, i) || r, d ? t.style[i] = d : zi(t, i)), f = [e, r], uu(f), e = f[0], r = f[1], h = e.match(vr) || [], b = r.match(vr) || [], b.length) {
    for (; p = vr.exec(r); )
      g = p[0], x = r.substring(u, p.index), _ ? _ = (_ + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (_ = 1), g !== (d = h[l++] || "") && (c = parseFloat(d) || 0, v = d.substr((c + "").length), g.charAt(1) === "=" && (g = kr(c, g) + v), m = parseFloat(g), w = g.substr((m + "").length), u = vr.lastIndex - w.length, w || (w = w || Me.units[i] || v, u === r.length && (r += w, a.e += w)), v !== w && (c = Ii(t, i, d, w) || 0), a._pt = {
        _next: a._pt,
        p: x || l === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: m - c,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? Tu : bu;
  return Bl.test(r) && (a.e = 0), this._pt = a, a;
}, $a = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Fh = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = $a[e] || e, i[1] = $a[r] || r, i.join(" ");
}, Nh = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, s = e._gsap, a, u, l;
    if (n === "all" || n === !0)
      r.cssText = "", u = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        a = n[l], yi[a] && (u = 1, a = a === "transformOrigin" ? ve : Tt), zi(e, a);
    u && (zi(e, Tt), s && (s.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", En(e, 1), s.uncache = 1, Su(r)));
  }
}, cs = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new ye(t._pt, i, e, 0, 0, Nh);
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
}, Sn = [1, 0, 0, 1, 0, 0], Ou = {}, Mu = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, qa = function(t) {
  var i = Oe(t, Tt);
  return Mu(i) ? Sn : i.substr(7).match(Nl).map(Pt);
}, Ko = function(t, i) {
  var e = t._gsap || Ji(t), r = t.style, n = qa(t), s, a, u, l;
  return e.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Sn : n) : (n === Sn && !t.offsetParent && t !== Cr && !e.svg && (u = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, a = t.nextElementSibling, Cr.appendChild(t)), n = qa(t), u ? r.display = u : zi(t, "display"), l && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Cr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, wo = function(t, i, e, r, n, s) {
  var a = t._gsap, u = n || Ko(t, !0), l = a.xOrigin || 0, f = a.yOrigin || 0, p = a.xOffset || 0, h = a.yOffset || 0, c = u[0], _ = u[1], d = u[2], g = u[3], m = u[4], x = u[5], w = i.split(" "), v = parseFloat(w[0]) || 0, b = parseFloat(w[1]) || 0, E, S, P, k;
  e ? u !== Sn && (S = c * g - _ * d) && (P = v * (g / S) + b * (-d / S) + (d * x - g * m) / S, k = v * (-_ / S) + b * (c / S) - (c * x - _ * m) / S, v = P, b = k) : (E = Cu(t), v = E.x + (~w[0].indexOf("%") ? v / 100 * E.width : v), b = E.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * E.height : b)), r || r !== !1 && a.smooth ? (m = v - l, x = b - f, a.xOffset = p + (m * c + x * d) - m, a.yOffset = h + (m * _ + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = b, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[ve] = "0px 0px", s && (Oi(s, a, "xOrigin", l, v), Oi(s, a, "yOrigin", f, b), Oi(s, a, "xOffset", p, a.xOffset), Oi(s, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + b);
}, En = function(t, i) {
  var e = t._gsap || new pu(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), l = Oe(t, ve) || "0", f, p, h, c, _, d, g, m, x, w, v, b, E, S, P, k, C, A, O, Y, I, D, $, V, it, at, y, rt, lt, de, nt, q;
  return f = p = h = d = g = m = x = w = v = 0, c = _ = 1, e.svg = !!(t.getCTM && Pu(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[Tt] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[Tt] !== "none" ? u[Tt] : "")), r.scale = r.rotate = r.translate = "none"), S = Ko(t, e.svg), e.svg && (e.uncache ? (it = t.getBBox(), l = e.xOrigin - it.x + "px " + (e.yOrigin - it.y) + "px", V = "") : V = !i && t.getAttribute("data-svg-origin"), wo(t, V || l, !!V || e.originIsAbsolute, e.smooth !== !1, S)), b = e.xOrigin || 0, E = e.yOrigin || 0, S !== Sn && (A = S[0], O = S[1], Y = S[2], I = S[3], f = D = S[4], p = $ = S[5], S.length === 6 ? (c = Math.sqrt(A * A + O * O), _ = Math.sqrt(I * I + Y * Y), d = A || O ? _r(O, A) * Ui : 0, x = Y || I ? _r(Y, I) * Ui + d : 0, x && (_ *= Math.abs(Math.cos(x * Pr))), e.svg && (f -= b - (b * A + E * Y), p -= E - (b * O + E * I))) : (q = S[6], de = S[7], y = S[8], rt = S[9], lt = S[10], nt = S[11], f = S[12], p = S[13], h = S[14], P = _r(q, lt), g = P * Ui, P && (k = Math.cos(-P), C = Math.sin(-P), V = D * k + y * C, it = $ * k + rt * C, at = q * k + lt * C, y = D * -C + y * k, rt = $ * -C + rt * k, lt = q * -C + lt * k, nt = de * -C + nt * k, D = V, $ = it, q = at), P = _r(-Y, lt), m = P * Ui, P && (k = Math.cos(-P), C = Math.sin(-P), V = A * k - y * C, it = O * k - rt * C, at = Y * k - lt * C, nt = I * C + nt * k, A = V, O = it, Y = at), P = _r(O, A), d = P * Ui, P && (k = Math.cos(P), C = Math.sin(P), V = A * k + O * C, it = D * k + $ * C, O = O * k - A * C, $ = $ * k - D * C, A = V, D = it), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, m = 180 - m), c = Pt(Math.sqrt(A * A + O * O + Y * Y)), _ = Pt(Math.sqrt($ * $ + q * q)), P = _r(D, $), x = Math.abs(P) > 2e-4 ? P * Ui : 0, v = nt ? 1 / (nt < 0 ? -nt : nt) : 0), e.svg && (V = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Mu(Oe(t, Tt)), V && t.setAttribute("transform", V))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (c *= -1, x += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, x += x <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + s, e.y = p - ((e.yPercent = p && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + s, e.z = h + s, e.scaleX = Pt(c), e.scaleY = Pt(_), e.rotation = Pt(d) + a, e.rotationX = Pt(g) + a, e.rotationY = Pt(m) + a, e.skewX = x + a, e.skewY = w + a, e.transformPerspective = v + s, (e.zOrigin = parseFloat(l.split(" ")[2]) || !i && e.zOrigin || 0) && (r[ve] = ps(l)), e.xOffset = e.yOffset = 0, e.force3D = Me.force3D, e.renderTransform = e.svg ? Yh : ku ? Du : Bh, e.uncache = 0, e;
}, ps = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Vs = function(t, i, e) {
  var r = ne(i);
  return Pt(parseFloat(i) + parseFloat(Ii(t, "x", e + "px", r))) + r;
}, Bh = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Du(t, i);
}, Wi = "0deg", $r = "0px", Hi = ") ", Du = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, u = e.z, l = e.rotation, f = e.rotationY, p = e.rotationX, h = e.skewX, c = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective, m = e.force3D, x = e.target, w = e.zOrigin, v = "", b = m === "auto" && t && t !== 1 || m === !0;
  if (w && (p !== Wi || f !== Wi)) {
    var E = parseFloat(f) * Pr, S = Math.sin(E), P = Math.cos(E), k;
    E = parseFloat(p) * Pr, k = Math.cos(E), s = Vs(x, s, S * k * -w), a = Vs(x, a, -Math.sin(E) * -w), u = Vs(x, u, P * k * -w + w);
  }
  g !== $r && (v += "perspective(" + g + Hi), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (b || s !== $r || a !== $r || u !== $r) && (v += u !== $r || b ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Hi), l !== Wi && (v += "rotate(" + l + Hi), f !== Wi && (v += "rotateY(" + f + Hi), p !== Wi && (v += "rotateX(" + p + Hi), (h !== Wi || c !== Wi) && (v += "skew(" + h + ", " + c + Hi), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Hi), x.style[Tt] = v || "translate(0, 0)";
}, Yh = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, s = e.x, a = e.y, u = e.rotation, l = e.skewX, f = e.skewY, p = e.scaleX, h = e.scaleY, c = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, m = e.yOffset, x = e.forceCSS, w = parseFloat(s), v = parseFloat(a), b, E, S, P, k;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= Pr, l *= Pr, b = Math.cos(u) * p, E = Math.sin(u) * p, S = Math.sin(u - l) * -h, P = Math.cos(u - l) * h, l && (f *= Pr, k = Math.tan(l - f), k = Math.sqrt(1 + k * k), S *= k, P *= k, f && (k = Math.tan(f), k = Math.sqrt(1 + k * k), b *= k, E *= k)), b = Pt(b), E = Pt(E), S = Pt(S), P = Pt(P)) : (b = p, P = h, E = S = 0), (w && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (w = Ii(c, "x", s, "px"), v = Ii(c, "y", a, "px")), (_ || d || g || m) && (w = Pt(w + _ - (_ * b + d * S) + g), v = Pt(v + d - (_ * E + d * P) + m)), (r || n) && (k = c.getBBox(), w = Pt(w + r / 100 * k.width), v = Pt(v + n / 100 * k.height)), k = "matrix(" + b + "," + E + "," + S + "," + P + "," + w + "," + v + ")", c.setAttribute("transform", k), x && (c.style[Tt] = k);
}, Vh = function(t, i, e, r, n) {
  var s = 360, a = Ht(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? Ui : 1), l = u - r, f = r + l + "deg", p, h;
  return a && (p = n.split("_")[1], p === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), p === "cw" && l < 0 ? l = (l + s * Ya) % s - ~~(l / s) * s : p === "ccw" && l > 0 && (l = (l - s * Ya) % s - ~~(l / s) * s)), t._pt = h = new ye(t._pt, i, e, r, l, Th), h.e = f, h.u = "deg", t._props.push(e), h;
}, Ua = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, Xh = function(t, i, e) {
  var r = Ua({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = e.style, a, u, l, f, p, h, c, _;
  r.svg ? (l = e.getAttribute("transform"), e.setAttribute("transform", ""), s[Tt] = i, a = En(e, 1), zi(e, Tt), e.setAttribute("transform", l)) : (l = getComputedStyle(e)[Tt], s[Tt] = i, a = En(e, 1), s[Tt] = l);
  for (u in yi)
    l = r[u], f = a[u], l !== f && n.indexOf(u) < 0 && (c = ne(l), _ = ne(f), p = c !== _ ? Ii(e, u, l, _) : parseFloat(l), h = parseFloat(f), t._pt = new ye(t._pt, a, u, p, h - p, mo), t._pt.u = _ || 0, t._props.push(u));
  Ua(a, r);
};
me("padding,margin,Width,Radius", function(o, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  cs[t > 1 ? "border" + o : o] = function(a, u, l, f, p) {
    var h, c;
    if (arguments.length < 4)
      return h = s.map(function(_) {
        return hi(a, _, l);
      }), c = h.join(" "), c.split(h[0]).length === 5 ? h[0] : c;
    h = (f + "").split(" "), c = {}, s.forEach(function(_, d) {
      return c[_] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(u, c, p);
  };
});
var Au = {
  name: "css",
  register: vo,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var s = this._props, a = t.style, u = e.vars.startAt, l, f, p, h, c, _, d, g, m, x, w, v, b, E, S, P, k;
    Uo || vo(), this.styles = this.styles || Eu(t), P = this.styles.props, this.tween = e;
    for (d in i)
      if (d !== "autoRound" && (f = i[d], !(Se[d] && du(d, i, e, r, t, n)))) {
        if (c = typeof f, _ = cs[d], c === "function" && (f = f.call(e, r, t, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = xn(f)), _)
          _(this, t, d, f, e) && (S = 1);
        else if (d.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(d) + "").trim(), f += "", Ai.lastIndex = 0, Ai.test(l) || (g = ne(l), m = ne(f), m ? g !== m && (l = Ii(t, d, l, m) + m) : g && (f += g)), this.add(a, "setProperty", l, f, r, n, 0, 0, d), s.push(d), P.push(d, 0, a[d]);
        else if (c !== "undefined") {
          if (u && d in u ? (l = typeof u[d] == "function" ? u[d].call(e, r, t, n) : u[d], Ht(l) && ~l.indexOf("random(") && (l = xn(l)), ne(l + "") || l === "auto" || (l += Me.units[d] || ne(hi(t, d)) || ""), (l + "").charAt(1) === "=" && (l = hi(t, d))) : l = hi(t, d), h = parseFloat(l), x = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), x && (f = f.substr(2)), p = parseFloat(f), d in ri && (d === "autoAlpha" && (h === 1 && hi(t, "visibility") === "hidden" && p && (h = 0), P.push("visibility", 0, a.visibility), Oi(this, a, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = ri[d], ~d.indexOf(",") && (d = d.split(",")[0]))), w = d in yi, w) {
            if (this.styles.save(d), k = f, c === "string" && f.substring(0, 6) === "var(--") {
              if (f = Oe(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var C = t.style.perspective;
                t.style.perspective = f, f = Oe(t, "perspective"), C ? t.style.perspective = C : zi(t, "perspective");
              }
              p = parseFloat(f);
            }
            if (v || (b = t._gsap, b.renderTransform && !i.parseTransform || En(t, i.parseTransform), E = i.smoothOrigin !== !1 && b.smooth, v = this._pt = new ye(this._pt, a, Tt, 0, 1, b.renderTransform, b, 0, -1), v.dep = 1), d === "scale")
              this._pt = new ye(this._pt, b, "scaleY", b.scaleY, (x ? kr(b.scaleY, x + p) : p) - b.scaleY || 0, mo), this._pt.u = 0, s.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              P.push(ve, 0, a[ve]), f = Fh(f), b.svg ? wo(t, f, 0, E, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0, m !== b.zOrigin && Oi(this, b, "zOrigin", b.zOrigin, m), Oi(this, a, d, ps(l), ps(f)));
              continue;
            } else if (d === "svgOrigin") {
              wo(t, f, 1, E, 0, this);
              continue;
            } else if (d in Ou) {
              Vh(this, b, d, h, x ? kr(h, x + f) : f);
              continue;
            } else if (d === "smoothOrigin") {
              Oi(this, b, "smooth", b.smooth, f);
              continue;
            } else if (d === "force3D") {
              b[d] = f;
              continue;
            } else if (d === "transform") {
              Xh(this, f, t);
              continue;
            }
          } else d in a || (d = Ir(d) || d);
          if (w || (p || p === 0) && (h || h === 0) && !bh.test(f) && d in a)
            g = (l + "").substr((h + "").length), p || (p = 0), m = ne(f) || (d in Me.units ? Me.units[d] : g), g !== m && (h = Ii(t, d, l, m)), this._pt = new ye(this._pt, w ? b : a, d, h, (x ? kr(h, x + p) : p) - h, !w && (m === "px" || d === "zIndex") && i.autoRound !== !1 ? kh : mo), this._pt.u = m || 0, w && k !== f ? (this._pt.b = l, this._pt.e = k, this._pt.r = Eh) : g !== m && m !== "%" && (this._pt.b = l, this._pt.r = Sh);
          else if (d in a)
            Ih.call(this, t, d, l, x ? x + f : f);
          else if (d in t)
            this.add(t, d, l || t[d], x ? x + f : f, r, n);
          else if (d !== "parseTransform") {
            Fo(d, f);
            continue;
          }
          w || (d in a ? P.push(d, 0, a[d]) : typeof t[d] == "function" ? P.push(d, 2, t[d]()) : P.push(d, 1, l || t[d])), s.push(d);
        }
      }
    S && wu(this);
  },
  render: function(t, i) {
    if (i.tween._time || !Go())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: hi,
  aliases: ri,
  getSetter: function(t, i, e) {
    var r = ri[i];
    return r && r.indexOf(",") < 0 && (i = r), i in yi && i !== ve && (t._gsap.x || hi(t, "x")) ? e && Ba === e ? i === "scale" ? Mh : Oh : (Ba = e || {}) && (i === "scale" ? Dh : Ah) : t.style && !Lo(t.style[i]) ? Ch : ~i.indexOf("-") ? Ph : $o(t, i);
  },
  core: {
    _removeProperty: zi,
    _getMatrix: Ko
  }
};
we.utils.checkPrefix = Ir;
we.core.getStyleSaver = Eu;
(function(o, t, i, e) {
  var r = me(o + "," + t + "," + i, function(n) {
    yi[n] = 1;
  });
  me(t, function(n) {
    Me.units[n] = "deg", Ou[n] = 1;
  }), ri[r[13]] = o + "," + t, me(e, function(n) {
    var s = n.split(":");
    ri[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
me("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  Me.units[o] = "px";
});
we.registerPlugin(Au);
var Zo = we.registerPlugin(Au) || we;
Zo.core.Tween;
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var di, rr, Qo, bs, Jr, is, ds, dn, Ue = "transform", xo = Ue + "Origin", Ru, Jo = function(t) {
  var i = t.ownerDocument || t;
  for (!(Ue in t.style) && ("msTransform" in t.style) && (Ue = "msTransform", xo = Ue + "Origin"); i.parentNode && (i = i.parentNode); )
    ;
  if (rr = window, ds = new ar(), i) {
    di = i, Qo = i.documentElement, bs = i.body, dn = di.createElementNS("http://www.w3.org/2000/svg", "g"), dn.style.transform = "none";
    var e = i.createElement("div"), r = i.createElement("div"), n = i && (i.body || i.firstElementChild);
    n && n.appendChild && (n.appendChild(e), e.appendChild(r), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", Ru = r.offsetParent !== e, n.removeChild(e));
  }
  return i;
}, Wh = function(t) {
  for (var i, e; t && t !== bs; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), i ? i.push(e) : i = [e]), t = t.parentNode;
  return i;
}, Lu = [], zu = [], ta = function() {
  return rr.pageYOffset || di.scrollTop || Qo.scrollTop || bs.scrollTop || 0;
}, ea = function() {
  return rr.pageXOffset || di.scrollLeft || Qo.scrollLeft || bs.scrollLeft || 0;
}, ia = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, Hh = function o(t) {
  if (rr.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return o(t);
}, Xs = function o(t, i) {
  if (t.parentNode && (di || Jo(t))) {
    var e = ia(t), r = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = e ? i ? "rect" : "g" : "div", s = i !== 2 ? 0 : 100, a = i === 3 ? 100 : 0, u = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, l = di.createElementNS ? di.createElementNS(r.replace(/^https/, "http"), n) : di.createElement(n);
    return i && (e ? (is || (is = o(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), l.setAttribute("fill", "transparent"), is.appendChild(l)) : (Jr || (Jr = o(t), Object.assign(Jr.style, u)), Object.assign(l.style, u, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: s + "px"
    }), Jr.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, $h = function(t) {
  for (var i = new ar(), e = 0; e < t.numberOfItems; e++)
    i.multiply(t.getItem(e).matrix);
  return i;
}, Iu = function(t) {
  var i = t.getCTM(), e;
  return i || (e = t.style[Ue], t.style[Ue] = "none", t.appendChild(dn), i = dn.getCTM(), t.removeChild(dn), e ? t.style[Ue] = e : t.style.removeProperty(Ue.replace(/([A-Z])/g, "-$1").toLowerCase())), i || ds.clone();
}, qh = function(t, i) {
  var e = ia(t), r = t === e, n = e ? Lu : zu, s = t.parentNode, a = s && !e && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, u, l, f, p, h, c;
  if (t === rr)
    return t;
  if (n.length || n.push(Xs(t, 1), Xs(t, 2), Xs(t, 3)), u = e ? is : Jr, e)
    r ? (f = Iu(t), p = -f.e / f.a, h = -f.f / f.d, l = ds) : t.getBBox ? (f = t.getBBox(), l = t.transform ? t.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? $h(l) : l.getItem(0).matrix : ds, p = l.a * f.x + l.c * f.y, h = l.b * f.x + l.d * f.y) : (l = new ar(), p = h = 0), i && t.tagName.toLowerCase() === "g" && (p = h = 0), (r || !t.getBoundingClientRect().width ? e : s).appendChild(u), u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + p) + "," + (l.f + h) + ")");
  else {
    if (p = h = 0, Ru)
      for (l = t.offsetParent, f = t; f && (f = f.parentNode) && f !== l && f.parentNode; )
        (rr.getComputedStyle(f)[Ue] + "").length > 4 && (p = f.offsetLeft, h = f.offsetTop, f = 0);
    if (c = rr.getComputedStyle(t), c.position !== "absolute" && c.position !== "fixed")
      for (l = t.offsetParent; s && s !== l; )
        p += s.scrollLeft || 0, h += s.scrollTop || 0, s = s.parentNode;
    f = u.style, f.top = t.offsetTop - h + "px", f.left = t.offsetLeft - p + "px", f[Ue] = c[Ue], f[xo] = c[xo], f.position = c.position === "fixed" ? "fixed" : "absolute", a.appendChild(u);
  }
  return u;
}, Ws = function(t, i, e, r, n, s, a) {
  return t.a = i, t.b = e, t.c = r, t.d = n, t.e = s, t.f = a, t;
}, ar = /* @__PURE__ */ function() {
  function o(i, e, r, n, s, a) {
    i === void 0 && (i = 1), e === void 0 && (e = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), Ws(this, i, e, r, n, s, a);
  }
  var t = o.prototype;
  return t.inverse = function() {
    var e = this.a, r = this.b, n = this.c, s = this.d, a = this.e, u = this.f, l = e * s - r * n || 1e-10;
    return Ws(this, s / l, -r / l, -n / l, e / l, (n * u - s * a) / l, -(e * u - r * a) / l);
  }, t.multiply = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, u = this.e, l = this.f, f = e.a, p = e.c, h = e.b, c = e.d, _ = e.e, d = e.f;
    return Ws(this, f * r + h * s, f * n + h * a, p * r + c * s, p * n + c * a, u + _ * r + d * s, l + _ * n + d * a);
  }, t.clone = function() {
    return new o(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var r = this.a, n = this.b, s = this.c, a = this.d, u = this.e, l = this.f;
    return r === e.a && n === e.b && s === e.c && a === e.d && u === e.e && l === e.f;
  }, t.apply = function(e, r) {
    r === void 0 && (r = {});
    var n = e.x, s = e.y, a = this.a, u = this.b, l = this.c, f = this.d, p = this.e, h = this.f;
    return r.x = n * a + s * l + p || 0, r.y = n * u + s * f + h || 0, r;
  }, o;
}();
function oi(o, t, i, e) {
  if (!o || !o.parentNode || (di || Jo(o)).documentElement === o)
    return new ar();
  var r = Wh(o), n = ia(o), s = n ? Lu : zu, a = qh(o, i), u = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), f = s[2].getBoundingClientRect(), p = a.parentNode, h = !e && Hh(o), c = new ar((l.left - u.left) / 100, (l.top - u.top) / 100, (f.left - u.left) / 100, (f.top - u.top) / 100, u.left + (h ? 0 : ea()), u.top + (h ? 0 : ta()));
  if (p.removeChild(a), r)
    for (u = r.length; u--; )
      l = r[u], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return t ? c.inverse() : c;
}
/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Uh = 1, Fr, jt, mt, _n, Si, _i, bo, Ga = function(t, i) {
  return t.actions.forEach(function(e) {
    return e.vars[i] && e.vars[i](e);
  });
}, To = {}, ja = 180 / Math.PI, Gh = Math.PI / 180, _s = {}, Ka = {}, Ts = {}, ra = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, jh = ra("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ss = ra("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), gn = function(t) {
  return Fr(t)[0] || console.warn("Element not found:", t);
}, xr = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, Hs = function(t, i, e) {
  return t.forEach(function(r) {
    return r.classList[e](i);
  });
}, Za = {
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
}, Fu = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, Nu = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, br = function(t, i) {
  var e = {}, r;
  for (r in t)
    i[r] || (e[r] = t[r]);
  return e;
}, na = {}, Bu = function(t) {
  var i = na[t] = ra(t);
  return Ts[t] = i.concat(Ss), i;
}, Kh = function(t) {
  var i = t._gsap || jt.core.getCache(t);
  return i.gmCache === jt.ticker.frame ? i.gMatrix : (i.gmCache = jt.ticker.frame, i.gMatrix = oi(t, !0, !1, !0));
}, Zh = function o(t, i, e) {
  e === void 0 && (e = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, e) * (i ? -1 : 1), s = i ? -n * 900 : 0; t; )
    s += n, t = t.previousSibling;
  return r ? s + o(r, i, e + 1) : s;
}, gs = function(t, i, e) {
  return t.forEach(function(r) {
    return r.d = Zh(e ? r.element : r.t, i);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, kn = function(t, i) {
  for (var e = t.element.style, r = t.css = t.css || [], n = i.length, s, a; n--; )
    s = i[n], a = e[s] || e.getPropertyValue(s), r.push(a ? s : Ka[s] || (Ka[s] = Nu(s)), a);
  return e;
}, ms = function(t) {
  var i = t.css, e = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < i.length; r += 2)
    i[r + 1] ? e[i[r]] = i[r + 1] : e.removeProperty(i[r]);
  !i[i.indexOf("transform") + 1] && e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Qa = function(t, i) {
  t.forEach(function(e) {
    return e.a.cache.uncache = 1;
  }), i || t.finalStates.forEach(ms);
}, $s = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), sa = function(t, i, e) {
  var r = t.element, n = t.width, s = t.height, a = t.uncache, u = t.getProp, l = r.style, f = 4, p, h, c;
  if (typeof i != "object" && (i = t), mt && e !== 1)
    return mt._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), mt._final.push(function() {
      return (t.cache.uncache = 1) && ms(t);
    }), r;
  for (h = u("display") === "none", (!t.isVisible || h) && (h && (kn(t, ["display"]).display = i.display), t.matrix = i.matrix, t.width = n = t.width || i.width, t.height = s = t.height || i.height), kn(t, $s), c = window.getComputedStyle(r); f--; )
    l[$s[f]] = c[$s[f]];
  if (l.gridArea = "1 / 1 / 1 / 1", l.transition = "none", l.position = "absolute", l.width = n + "px", l.height = s + "px", l.top || (l.top = "0px"), l.left || (l.left = "0px"), a)
    p = new lr(r);
  else if (p = br(t, _s), p.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    p.matrix = new ar(1, 0, 0, 1, _.left + ea(), _.top + ta());
  } else
    p.matrix = oi(r, !1, !1, !0);
  return p = Or(p, t, !0), t.x = _i(p.x, 0.01), t.y = _i(p.y, 0.01), r;
}, Ja = function(t, i) {
  return i !== !0 && (i = Fr(i), t = t.filter(function(e) {
    if (i.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1)
      return !0;
    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
  })), t;
}, Yu = function(t) {
  return gs(t, !0).forEach(function(i) {
    return (i.a.isVisible || i.b.isVisible) && sa(i.sd < 0 ? i.b : i.a, i.b, 1);
  });
}, Qh = function(t, i) {
  return i && t.idLookup[So(i).id] || t.elementStates[0];
}, So = function(t, i, e, r) {
  return t instanceof lr ? t : t instanceof Ge ? Qh(t, r) : new lr(typeof t == "string" ? gn(t) || console.warn(t + " not found") : t, i, e);
}, Jh = function(t, i) {
  for (var e = jt.getProperty(t.element, null, "native"), r = t.props = {}, n = i.length; n--; )
    r[i[n]] = (e(i[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, Vu = function(t, i) {
  var e = t.style || t, r;
  for (r in i)
    e[r] = i[r];
}, tc = function(t) {
  var i = t.getAttribute("data-flip-id");
  return i || t.setAttribute("data-flip-id", i = "auto-" + Uh++), i;
}, Xu = function(t) {
  return t.map(function(i) {
    return i.element;
  });
}, tl = function(t, i, e) {
  return t && i.length && e.add(t(Xu(i), e, new Ge(i, 0, !0)), 0);
}, Or = function(t, i, e, r, n, s) {
  var a = t.element, u = t.cache, l = t.parent, f = t.x, p = t.y, h = i.width, c = i.height, _ = i.scaleX, d = i.scaleY, g = i.rotation, m = i.bounds, x = s && bo && bo(a, "transform,width,height"), w = t, v = i.matrix, b = v.e, E = v.f, S = t.bounds.width !== m.width || t.bounds.height !== m.height || t.scaleX !== _ || t.scaleY !== d || t.rotation !== g, P = !S && t.simple && i.simple && !n, k, C, A, O, Y, I, D;
  return P || !l ? (_ = d = 1, g = k = 0) : (Y = Kh(l), I = Y.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix), g = xr(Math.atan2(I.b, I.a) * ja), k = xr(Math.atan2(I.c, I.d) * ja + g) % 360, _ = Math.sqrt(Math.pow(I.a, 2) + Math.pow(I.b, 2)), d = Math.sqrt(Math.pow(I.c, 2) + Math.pow(I.d, 2)) * Math.cos(k * Gh), n && (n = Fr(n)[0], O = jt.getProperty(n), D = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), w = {
    scaleX: O("scaleX"),
    scaleY: O("scaleY"),
    width: D ? D.width : Math.ceil(parseFloat(O("width", "px"))),
    height: D ? D.height : parseFloat(O("height", "px"))
  }), u.rotation = g + "deg", u.skewX = k + "deg"), e ? (_ *= h === w.width || !w.width ? 1 : h / w.width, d *= c === w.height || !w.height ? 1 : c / w.height, u.scaleX = _, u.scaleY = d) : (h = _i(h * _ / w.scaleX, 0), c = _i(c * d / w.scaleY, 0), a.style.width = h + "px", a.style.height = c + "px"), r && Vu(a, i.props), P || !l ? (f += b - t.matrix.e, p += E - t.matrix.f) : S || l !== i.parent ? (u.x = f + "px", u.y = p + "px", u.renderTransform(1, u), I = oi(n || a, !1, !1, !0), C = Y.apply({
    x: I.e,
    y: I.f
  }), A = Y.apply({
    x: b,
    y: E
  }), f += A.x - C.x, p += A.y - C.y) : (Y.e = Y.f = 0, A = Y.apply({
    x: b - t.matrix.e,
    y: E - t.matrix.f
  }), f += A.x, p += A.y), f = _i(f, 0.02), p = _i(p, 0.02), s && !(s instanceof lr) ? x && x.revert() : (u.x = f + "px", u.y = p + "px", u.renderTransform(1, u)), s && (s.x = f, s.y = p, s.rotation = g, s.skewX = k, e ? (s.scaleX = _, s.scaleY = d) : (s.width = h, s.height = c)), s || u;
}, qs = function(t, i) {
  return t instanceof Ge ? t : new Ge(t, i);
}, Wu = function(t, i, e) {
  var r = t.idLookup[e], n = t.alt[e];
  return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, Us = [], Gs = "width,height,overflowX,overflowY".split(","), Hn, el = function(t) {
  if (t !== Hn) {
    var i = Si.style, e = Si.clientWidth === window.outerWidth, r = Si.clientHeight === window.outerHeight, n = 4;
    if (t && (e || r)) {
      for (; n--; )
        Us[n] = i[Gs[n]];
      e && (i.width = Si.clientWidth + "px", i.overflowY = "hidden"), r && (i.height = Si.clientHeight + "px", i.overflowX = "hidden"), Hn = t;
    } else if (Hn) {
      for (; n--; )
        Us[n] ? i[Gs[n]] = Us[n] : i.removeProperty(Nu(Gs[n]));
      Hn = t;
    }
  }
}, il = function(t, i) {
  for (var e = 0; e < t.length; e += 3)
    jt.set(t[e], {
      clearProps: !0
    }), t[e].setAttribute("style", t[e + i]), t[e]._gsap.gmCache = -1;
}, js = function(t, i, e, r) {
  t instanceof Ge && i instanceof Ge || console.warn("Not a valid state object."), e = e || {};
  var n = e, s = n.clearProps, a = n.onEnter, u = n.onLeave, l = n.absolute, f = n.absoluteOnLeave, p = n.custom, h = n.delay, c = n.paused, _ = n.repeat, d = n.repeatDelay, g = n.yoyo, m = n.toggleClass, x = n.nested, w = n.zIndex, v = n.scale, b = n.fade, E = n.stagger, S = n.spin, P = n.prune, k = ("props" in e ? e : t).props, C = br(e, Za), A = jt.timeline({
    delay: h,
    paused: c,
    repeat: _,
    repeatDelay: d,
    yoyo: g,
    data: "isFlip"
  }), O = C, Y = [], I = [], D = [], $ = [], V = S === !0 ? 1 : S || 0, it = typeof S == "function" ? S : function() {
    return V;
  }, at = t.interrupted || i.interrupted, y = A[r !== 1 ? "to" : "from"], rt, lt, de, nt, q, U, ut, pt, Mt, Bt, gt, zt, z, Q;
  for (lt in i.idLookup)
    gt = i.alt[lt] ? Wu(i, t, lt) : i.idLookup[lt], q = gt.element, Bt = t.idLookup[lt], t.alt[lt] && q === Bt.element && (t.alt[lt].isVisible || !gt.isVisible) && (Bt = t.alt[lt]), Bt ? (U = {
      t: q,
      b: Bt,
      a: gt,
      sd: Bt.element === q ? 0 : gt.isVisible ? 1 : -1
    }, D.push(U), U.sd && (U.sd < 0 && (U.b = gt, U.a = Bt), at && kn(U.b, k ? Ts[k] : Ss), b && D.push(U.swap = {
      t: Bt.element,
      b: U.b,
      a: U.a,
      sd: -U.sd,
      swap: U
    })), q._flip = Bt.element._flip = mt ? mt.timeline : A) : gt.isVisible && (D.push({
      t: q,
      b: br(gt, {
        isVisible: 1
      }),
      a: gt,
      sd: 0,
      entering: 1
    }), q._flip = mt ? mt.timeline : A);
  if (k && (na[k] || Bu(k)).forEach(function(T) {
    return C[T] = function(Dt) {
      return D[Dt].a.props[T];
    };
  }), D.finalStates = Mt = [], zt = function() {
    gs(D), el(!0);
    var Dt = [];
    for (nt = 0; nt < D.length; nt++)
      U = D[nt], z = U.a, Q = U.b, P && !z.isDifferent(Q) && !U.entering ? D.splice(nt--, 1) : (q = U.t, x && !(U.sd < 0) && nt && (z = U.a = z.clone({
        matrix: oi(q, !1, !1, !0)
      })), Q.isVisible && z.isVisible ? (U.sd < 0 ? (x && il(Dt, 1), ut = new lr(q, k, t.simple), Or(ut, z, v, 0, 0, ut), ut.matrix = oi(q, !1, !1, !0), ut.bounds = q.getBoundingClientRect(), ut.css = U.b.css, U.a = z = ut, b && (q.style.opacity = at ? Q.opacity : z.opacity), E && $.push(q), x && (il(Dt, 2), Dt.push(q, q.getAttribute("style")))) : U.sd > 0 && b && (q.style.opacity = at ? z.opacity - Q.opacity : "0"), Or(z, Q, v, k), x && U.sd < 0 && Dt.push(q.getAttribute("style"))) : Q.isVisible !== z.isVisible && (Q.isVisible ? z.isVisible || (Q.css = z.css, I.push(Q), D.splice(nt--, 1), l && x && Or(z, Q, v, k)) : (z.isVisible && Y.push(z), D.splice(nt--, 1))), v || (q.style.maxWidth = Math.max(z.width, Q.width) + "px", q.style.maxHeight = Math.max(z.height, Q.height) + "px", q.style.minWidth = Math.min(z.width, Q.width) + "px", q.style.minHeight = Math.min(z.height, Q.height) + "px"), x && m && q.classList.add(m)), Mt.push(z);
    var oe;
    if (m && (oe = Mt.map(function(N) {
      return N.element;
    }), x && oe.forEach(function(N) {
      return N.classList.remove(m);
    })), el(!1), v ? (C.scaleX = function(N) {
      return D[N].a.scaleX;
    }, C.scaleY = function(N) {
      return D[N].a.scaleY;
    }) : (C.width = function(N) {
      return D[N].a.width + "px";
    }, C.height = function(N) {
      return D[N].a.height + "px";
    }, C.autoRound = e.autoRound || !1), C.x = function(N) {
      return D[N].a.x + "px";
    }, C.y = function(N) {
      return D[N].a.y + "px";
    }, C.rotation = function(N) {
      return D[N].a.rotation + (S ? it(N, pt[N], pt) * 360 : 0);
    }, C.skewX = function(N) {
      return D[N].a.skewX;
    }, pt = D.map(function(N) {
      return N.t;
    }), (w || w === 0) && (C.modifiers = {
      zIndex: function() {
        return w;
      }
    }, C.zIndex = w, C.immediateRender = e.immediateRender !== !1), b && (C.opacity = function(N) {
      return D[N].sd < 0 ? 0 : D[N].sd > 0 ? D[N].a.opacity : "+=0";
    }), $.length) {
      E = jt.utils.distribute(E);
      var je = pt.slice($.length);
      C.stagger = function(N, Ye) {
        return E(~$.indexOf(Ye) ? pt.indexOf(D[N].swap.t) : N, Ye, je);
      };
    }
    if (jh.forEach(function(N) {
      return e[N] && A.eventCallback(N, e[N], e[N + "Params"]);
    }), p && pt.length) {
      O = br(C, Za), "scale" in p && (p.scaleX = p.scaleY = p.scale, delete p.scale);
      for (lt in p)
        rt = br(p[lt], Fu), rt[lt] = C[lt], !("duration" in rt) && "duration" in C && (rt.duration = C.duration), rt.stagger = C.stagger, y.call(A, pt, rt, 0), delete O[lt];
    }
    (pt.length || I.length || Y.length) && (m && A.add(function() {
      return Hs(oe, m, A._zTime < 0 ? "remove" : "add");
    }, 0) && !c && Hs(oe, m, "add"), pt.length && y.call(A, pt, O, 0)), tl(a, Y, A), tl(u, I, A);
    var dt = mt && mt.timeline;
    dt && (dt.add(A, 0), mt._final.push(function() {
      return Qa(D, !s);
    })), de = A.duration(), A.call(function() {
      var N = A.time() >= de;
      N && !dt && Qa(D, !s), m && Hs(oe, m, N ? "remove" : "add");
    });
  }, f && (l = D.filter(function(T) {
    return !T.sd && !T.a.isVisible && T.b.isVisible;
  }).map(function(T) {
    return T.a.element;
  })), mt) {
    var $t;
    l && ($t = mt._abs).push.apply($t, Ja(D, l)), mt._run.push(zt);
  } else
    l && Yu(Ja(D, l)), zt();
  var qt = mt ? mt.timeline : A;
  return qt.revert = function() {
    return oa(qt, 1, 1);
  }, qt;
}, ec = function o(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(o);
}, oa = function(t, i, e) {
  if (t && t.progress() < 1 && (!t.paused() || e))
    return i && (ec(t), i < 2 && t.progress(1), t.kill()), !0;
}, $n = function(t) {
  for (var i = t.idLookup = {}, e = t.alt = {}, r = t.elementStates, n = r.length, s; n--; )
    s = r[n], i[s.id] ? e[s.id] = s : i[s.id] = s;
}, Ge = /* @__PURE__ */ function() {
  function o(i, e, r) {
    if (this.props = e && e.props, this.simple = !!(e && e.simple), r)
      this.targets = Xu(i), this.elementStates = i, $n(this);
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
      return new lr(n, r.props, r.simple);
    }), $n(this), this.interrupt(e), this.recordInlineStyles(), this;
  }, t.clear = function() {
    return this.targets.length = this.elementStates.length = 0, $n(this), this;
  }, t.fit = function(e, r, n) {
    for (var s = gs(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, u = 0, l, f; u < s.length; u++)
      l = s[u], n && (l.matrix = oi(l.element, !1, !1, !0)), f = a[l.id], f && Or(l, f, r, !0, 0, l), l.matrix = oi(l.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(e, r) {
    var n = this.getElementState(e) || _s;
    return (r in n ? n : n.props || _s)[r];
  }, t.add = function(e) {
    for (var r = e.targets.length, n = this.idLookup, s = this.alt, a, u, l; r--; )
      u = e.elementStates[r], l = n[u.id], l && (u.element === l.element || s[u.id] && s[u.id].element === u.element) ? (a = this.elementStates.indexOf(u.element === l.element ? l : s[u.id]), this.targets.splice(a, 1, e.targets[r]), this.elementStates.splice(a, 1, u)) : (this.targets.push(e.targets[r]), this.elementStates.push(u));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), $n(this), this;
  }, t.compare = function(e) {
    var r = e.idLookup, n = this.idLookup, s = [], a = [], u = [], l = [], f = [], p = e.alt, h = this.alt, c = function(P, k, C) {
      return (P.isVisible !== k.isVisible ? P.isVisible ? u : l : P.isVisible ? a : s).push(C) && f.push(C);
    }, _ = function(P, k, C) {
      return f.indexOf(C) < 0 && c(P, k, C);
    }, d, g, m, x, w, v, b, E;
    for (m in r)
      w = p[m], v = h[m], d = w ? Wu(e, this, m) : r[m], x = d.element, g = n[m], v ? (E = g.isVisible || !v.isVisible && x === g.element ? g : v, b = w && !d.isVisible && !w.isVisible && E.element === w.element ? w : d, b.isVisible && E.isVisible && b.element !== E.element ? ((b.isDifferent(E) ? a : s).push(b.element, E.element), f.push(b.element, E.element)) : c(b, E, b.element), w && b.element === w.element && (w = r[m]), _(b.element !== g.element && w ? w : b, g, g.element), _(w && w.element === v.element ? w : b, v, v.element), w && _(w, v.element === w.element ? v : g, w.element)) : (g ? g.isDifferent(d) ? c(d, g, x) : s.push(x) : u.push(x), w && _(w, g, w.element));
    for (m in n)
      r[m] || (l.push(n[m].element), h[m] && l.push(h[m].element));
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
      var a = s._flip, u = oa(a, e ? 0 : 1);
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
    return this.elementStates[this.targets.indexOf(gn(e))];
  }, t.makeAbsolute = function() {
    return gs(this.elementStates.slice(0), !0, !0).map(sa);
  }, o;
}(), lr = /* @__PURE__ */ function() {
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
    var n = this, s = n.element, a = jt.getProperty(s), u = jt.core.getCache(s), l = s.getBoundingClientRect(), f = s.getBBox && typeof s.getBBox == "function" && s.nodeName.toLowerCase() !== "svg" && s.getBBox(), p = r ? new ar(1, 0, 0, 1, l.left + ea(), l.top + ta()) : oi(s, !1, !1, !0);
    u.uncache = 1, n.getProp = a, n.element = s, n.id = tc(s), n.matrix = p, n.cache = u, n.bounds = l, n.isVisible = !!(l.width || l.height || l.left || l.top), n.display = a("display"), n.position = a("position"), n.parent = s.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = u.scaleX, n.scaleY = u.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = f ? f.width : _i(a("width", "px"), 0.04), n.height = f ? f.height : _i(a("height", "px"), 0.04), e && Jh(n, na[e] || Bu(e)), n.ctm = s.getCTM && s.nodeName.toLowerCase() === "svg" && Iu(s).inverse(), n.simple = r || xr(p.a) === 1 && !xr(p.b) && !xr(p.c) && xr(p.d) === 1, n.uncache = 0;
  }, o;
}(), ic = /* @__PURE__ */ function() {
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
}(), rc = /* @__PURE__ */ function() {
  function o(i) {
    this.id = i, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ge(), this.timeline = jt.timeline();
  }
  var t = o.prototype;
  return t.add = function(e) {
    var r = this.actions.filter(function(n) {
      return n.vars === e;
    });
    return r.length ? r[0] : (r = new ic(typeof e == "function" ? {
      animate: e
    } : e, this), this.actions.push(r), r);
  }, t.remove = function(e) {
    var r = this.actions.indexOf(e);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(e) {
    var r = this, n = mt, s = _n;
    return mt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, _n = a, a.state = a.vars.getState(a)), e && a.states.forEach(function(u) {
        return r.state.add(u);
      });
    }), _n = s, mt = n, this.killConflicts(), this;
  }, t.animate = function() {
    var e = this, r = mt, n = this.timeline, s = this.actions.length, a, u;
    for (mt = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(l) {
      l.vars.animate && l.vars.animate(l);
      var f = l.vars.onEnter, p = l.vars.onLeave, h = l.targets, c, _;
      h && h.length && (f || p) && (c = new Ge(), l.states.forEach(function(d) {
        return c.add(d);
      }), _ = c.compare(Nr.getState(h)), _.enter.length && f && f(_.enter), _.leave.length && p && p(_.leave));
    }), Yu(this._abs), this._run.forEach(function(l) {
      return l();
    }), u = n.duration(), a = this._final.slice(0), n.add(function() {
      u <= n.time() && (a.forEach(function(l) {
        return l();
      }), Ga(e, "onComplete"));
    }), mt = r; s--; )
      this.actions[s].vars.once && this.actions[s].kill();
    return Ga(this, "onStart"), n.restart(), this;
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
    this._killed = 1, this.clear(), delete To[this.id];
  }, o;
}(), Nr = /* @__PURE__ */ function() {
  function o() {
  }
  return o.getState = function(i, e) {
    var r = qs(i, e);
    return _n && _n.states.push(r), e && e.batch && o.batch(e.batch).state.add(r), r;
  }, o.from = function(i, e) {
    return e = e || {}, "clearProps" in e || (e.clearProps = !0), js(i, qs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, -1);
  }, o.to = function(i, e) {
    return js(i, qs(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, 1);
  }, o.fromTo = function(i, e, r) {
    return js(i, e, r);
  }, o.fit = function(i, e, r) {
    var n = r ? br(r, Fu) : {}, s = r || n, a = s.absolute, u = s.scale, l = s.getVars, f = s.props, p = s.runBackwards, h = s.onComplete, c = s.simple, _ = r && r.fitChild && gn(r.fitChild), d = So(e, f, c, i), g = So(i, 0, c, d), m = f ? Ts[f] : Ss, x = jt.context();
    return f && Vu(n, d.props), kn(g, m), p && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      ms(g), h && h.apply(this, arguments);
    }), a && sa(g, d), n = Or(g, d, u || _, !n.duration && f, _, n.duration || l ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), x && !l && x.add(function() {
      return function() {
        return ms(g);
      };
    }), l ? n : n.duration ? jt.to(g.element, n) : null;
  }, o.makeAbsolute = function(i, e) {
    return (i instanceof Ge ? i : new Ge(i, e)).makeAbsolute();
  }, o.batch = function(i) {
    return i || (i = "default"), To[i] || (To[i] = new rc(i));
  }, o.killFlipsOf = function(i, e) {
    (i instanceof Ge ? i.targets : Fr(i)).forEach(function(r) {
      return r && oa(r._flip, e !== !1 ? 1 : 2);
    });
  }, o.isFlipping = function(i) {
    var e = o.getByTarget(i);
    return !!e && e.isActive();
  }, o.getByTarget = function(i) {
    return (gn(i) || _s)._flip;
  }, o.getElementState = function(i, e) {
    return new lr(gn(i), e);
  }, o.convertCoordinates = function(i, e, r) {
    var n = oi(e, !0, !0).multiply(oi(i));
    return r ? n.apply(r) : n;
  }, o.register = function(i) {
    if (Si = typeof document < "u" && document.body, Si) {
      jt = i, Jo(Si), Fr = jt.utils.toArray, bo = jt.core.getStyleSaver;
      var e = jt.utils.snap(0.1);
      _i = function(n, s) {
        return e(parseFloat(n) + s);
      };
    }
  }, o;
}();
Nr.version = "3.14.2";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Nr);
Zo.registerPlugin(Nr, G);
const qn = {
  absoluteOnLeave: !1,
  absolute: !1,
  scale: !0,
  simple: !0
}, rl = [1, 0.82, 1.08, 0.9, 1, 0.92, 1.06, 0.88, 1];
function nc(o) {
  const {
    gridEl: t,
    pinEl: i,
    items: e,
    caption: r,
    scroll: n,
    switchClass: s,
    getScaleTarget: a,
    getParallaxImg: u,
    parallax: l,
    parallaxTravel: f = 14,
    parallaxStrengthKey: p,
    reduceMotion: h
  } = o, c = [...e], _ = r ? [...c, r] : c;
  t.classList.add(s);
  const d = Nr.getState(_, {
    props: "filter, opacity"
  });
  t.classList.remove(s);
  const g = {
    trigger: t,
    start: n.start,
    end: n.end,
    pin: i,
    scrub: !0
  }, m = Nr.to(d, {
    ease: "none",
    absoluteOnLeave: qn.absoluteOnLeave,
    absolute: qn.absolute,
    scale: qn.scale,
    simple: qn.simple,
    scrollTrigger: g,
    stagger: 0
  }), x = c.map((w) => a(w)).filter(Boolean);
  return x.length && m.fromTo(x, { scale: 2 }, { scale: 1, ease: "none" }, 0), l && !h && c.forEach((w, v) => {
    const b = u(w);
    if (!b) return;
    const E = Ll(
      w,
      p,
      rl[v % rl.length]
    ), S = v % 2 === 0 ? 1 : -1, P = f * E;
    Zo.set(b, { force3D: !0 }), m.fromTo(
      b,
      { yPercent: -P * S },
      { yPercent: P * S, ease: "none" },
      0
    );
  }), m;
}
const nl = { start: "center center", end: "+=300%" }, sc = 14;
function oc(o) {
  const t = o.querySelector("[data-sfg-gallery], .gallery--grid"), i = (t == null ? void 0 : t.querySelectorAll(".gallery__item-inner")) ?? [], e = (t == null ? void 0 : t.querySelectorAll(".gallery__item img")) ?? [];
  return new Promise((r) => {
    if (!i.length && !e.length) {
      r();
      return;
    }
    Sf([...i, ...e], { background: !0 }, () => r());
  });
}
function ac(o) {
  const t = o.getAttribute("data-sfg-scroll-start") ?? nl.start, i = o.getAttribute("data-sfg-scroll-end") ?? nl.end;
  return { start: t, end: i };
}
function lc(o) {
  o._scrollFlipGridCleanup && o._scrollFlipGridCleanup();
  const t = o.querySelector("[data-sfg-gallery], .gallery--grid");
  if (!t || !t.classList.contains("gallery--grid")) {
    console.warn("[scroll-flip-grid] Galerie .gallery--grid introuvable");
    return;
  }
  let i = !1, e = null, r = null, n = null;
  const s = () => {
    i = !0, e == null || e.revert(), e = null, n && (gsap.ticker.remove(n), n = null), r == null || r.destroy(), r = null, o.classList.remove("sfg-js", "sfg-loading"), G.refresh();
  };
  o._scrollFlipGridCleanup = s, o.classList.add("sfg-js", "sfg-loading");
  const a = ac(o), u = o.getAttribute("data-sfg-parallax") === "true", l = Ll(o, "sfgParallaxTravel", sc), f = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return oc(o).then(() => {
    i || (o.classList.remove("sfg-loading"), e = gsap.context(() => {
      o.getAttribute("data-sfg-lenis") === "true" && (r = new wf({
        lerp: 0.1,
        smoothWheel: !0
      }), r.on("scroll", () => G.update()), n = (h) => r.raf(h * 1e3), gsap.ticker.add(n), gsap.ticker.lagSmoothing(0));
      try {
        const h = t.querySelectorAll(".gallery__item"), c = t.querySelector(".caption");
        nc({
          gridEl: t,
          pinEl: t.parentNode,
          items: h,
          caption: c,
          scroll: a,
          switchClass: "gallery--switch",
          getScaleTarget: (_) => _.querySelector(".gallery__item-inner"),
          getParallaxImg: (_) => _.querySelector(".gallery__item-inner img"),
          parallax: u,
          parallaxTravel: l,
          parallaxStrengthKey: "sfgParallaxStrength",
          reduceMotion: f
        });
      } catch (h) {
        console.error("[scroll-flip-grid] Flip / ScrollTrigger", h);
      }
    }, o), G.refresh());
  }), s;
}
if (typeof window < "u") {
  const o = () => {
    document.querySelectorAll('[data-component="scroll-flip-grid"]').forEach((t) => lc(t));
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, { once: !0 }) : o();
}
export {
  lc as initScrollFlipGrid
};

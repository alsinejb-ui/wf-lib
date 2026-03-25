const r = {
  scrollSpeed: 1.75,
  lerpFactor: 0.05,
  maxVelocity: 150,
  parallaxStrength: 0.25,
  slideWidth: 390,
  slideHeight: 500,
  slideGap: 20,
  copies: 6
};
function I(t) {
  const l = t.getAttribute("data-cgih-slides");
  if (l)
    try {
      return JSON.parse(l);
    } catch {
      return [];
    }
  const s = t.querySelectorAll("[data-cgih-slide]");
  return Array.from(s).map((d) => ({
    title: d.getAttribute("data-title") ?? "",
    img: d.getAttribute("data-image") ?? "",
    url: d.getAttribute("data-url") ?? ""
  }));
}
function z(t) {
  t._cgihCleanup && t._cgihCleanup();
  const l = t.querySelector("[data-cgih-track]");
  if (!l) return;
  const s = I(t);
  if (!s.length) return;
  const d = Number(t.getAttribute("data-cgih-scroll-speed")) || r.scrollSpeed, x = Number(t.getAttribute("data-cgih-lerp")) || r.lerpFactor, X = Number(t.getAttribute("data-cgih-max-velocity")) || r.maxVelocity, W = Number(t.getAttribute("data-cgih-parallax")) ?? r.parallaxStrength, e = {
    currentX: 0,
    targetX: 0,
    slideWidth: r.slideWidth,
    slideHeight: r.slideHeight,
    slides: [],
    isDragging: !1,
    startX: 0,
    lastX: 0,
    lastMouseX: 0,
    lastScrollTime: Date.now(),
    velocity: 0,
    lastCurrentX: 0,
    dragDistance: 0,
    hasActuallyDragged: !1,
    isMobile: !1
  };
  function T() {
    e.isMobile = window.innerWidth < 1e3;
  }
  function N(a) {
    const n = document.createElement("div");
    n.setAttribute("data-cgih-slide-item", "");
    const o = a % s.length, i = s[o], c = e.isMobile ? 175 : e.slideWidth, u = e.isMobile ? 250 : e.slideHeight;
    n.style.width = `${c}px`, n.style.height = `${u}px`;
    const g = document.createElement("div");
    g.className = "cgih-slide-image";
    const f = document.createElement("img");
    f.src = i.img, f.alt = i.title;
    const m = document.createElement("div");
    m.className = "cgih-slide-overlay";
    const p = document.createElement("p");
    p.className = "cgih-project-title", p.textContent = i.title;
    const v = document.createElement("div");
    return v.className = "cgih-project-arrow", v.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>', n.addEventListener("click", (q) => {
      q.preventDefault(), e.dragDistance < 10 && !e.hasActuallyDragged && i.url && (window.location.href = i.url);
    }), m.appendChild(p), m.appendChild(v), g.appendChild(f), n.appendChild(g), n.appendChild(m), n;
  }
  function D() {
    l.innerHTML = "", e.slides = [], T(), e.slideWidth = e.isMobile ? 215 : Number(t.getAttribute("data-cgih-slide-width")) || r.slideWidth, e.slideHeight = e.isMobile ? 250 : Number(t.getAttribute("data-cgih-slide-height")) || r.slideHeight;
    const a = r.copies, n = s.length * a;
    for (let c = 0; c < n; c++) {
      const u = N(c);
      l.appendChild(u), e.slides.push(u);
    }
    const o = e.slideWidth + r.slideGap * 2, i = -(s.length * o * 2);
    e.currentX = i, e.targetX = i;
  }
  function H() {
    const n = (e.slideWidth + r.slideGap * 2) * s.length;
    e.currentX > -n * 1 ? (e.currentX -= n, e.targetX -= n) : e.currentX < -n * 4 && (e.currentX += n, e.targetX += n), l.style.transform = `translate3d(${e.currentX}px, 0, 0)`;
  }
  function F() {
    const a = window.innerWidth / 2;
    e.slides.forEach((n) => {
      const o = n.querySelector("img");
      if (!o) return;
      const i = n.getBoundingClientRect();
      if (i.right < -500 || i.left > window.innerWidth + 500) return;
      const g = (i.left + i.width / 2 - a) * -W;
      o.style.transform = `translateX(${g}px) scale(2.25)`;
    });
  }
  function O() {
    e.velocity = Math.abs(e.currentX - e.lastCurrentX), e.lastCurrentX = e.currentX;
    const a = e.velocity < 0.1, n = Date.now() - e.lastScrollTime > 200, o = e.hasActuallyDragged || !a || !n;
    t.style.setProperty("--cgih-moving", o ? "1" : "0");
  }
  function E() {
    e.disposed || (e.rafId = requestAnimationFrame(E), e.currentX += (e.targetX - e.currentX) * x, O(), H(), F());
  }
  function b(a) {
    if (Math.abs(a.deltaX) > Math.abs(a.deltaY)) return;
    a.preventDefault(), e.lastScrollTime = Date.now();
    const n = a.deltaY * d;
    e.targetX -= Math.max(Math.min(n, X), -X);
  }
  function w(a) {
    e.isDragging = !0, e.startX = a.touches[0].clientX, e.lastX = e.targetX, e.dragDistance = 0, e.hasActuallyDragged = !1, e.lastScrollTime = Date.now();
  }
  function y(a) {
    if (!e.isDragging) return;
    const n = (a.touches[0].clientX - e.startX) * 1.5;
    e.targetX = e.lastX + n, e.dragDistance = Math.abs(n), e.dragDistance > 5 && (e.hasActuallyDragged = !0), e.lastScrollTime = Date.now();
  }
  function M() {
    e.isDragging = !1, setTimeout(() => {
      e.hasActuallyDragged = !1;
    }, 100);
  }
  function S(a) {
    a.preventDefault(), e.isDragging = !0, e.lastMouseX = a.clientX, e.lastX = e.targetX, e.dragDistance = 0, e.hasActuallyDragged = !1, e.lastScrollTime = Date.now();
  }
  function A(a) {
    if (!e.isDragging) return;
    a.preventDefault();
    const n = (a.clientX - e.lastMouseX) * 2;
    e.targetX += n, e.lastMouseX = a.clientX, e.dragDistance += Math.abs(n), e.dragDistance > 5 && (e.hasActuallyDragged = !0), e.lastScrollTime = Date.now();
  }
  function h() {
    e.isDragging = !1, setTimeout(() => {
      e.hasActuallyDragged = !1;
    }, 100);
  }
  e.disposed = !1, D(), E(), t.addEventListener("wheel", b, { passive: !1 }), t.addEventListener("touchstart", w), t.addEventListener("touchmove", y), t.addEventListener("touchend", M), t.addEventListener("mousedown", S), t.addEventListener("mouseleave", h);
  const L = (a) => a.preventDefault();
  t.addEventListener("dragstart", L), document.addEventListener("mousemove", A), document.addEventListener("mouseup", h);
  const C = new ResizeObserver(() => D());
  C.observe(t), t._cgihCleanup = () => {
    e.disposed = !0, e.rafId && cancelAnimationFrame(e.rafId), t.removeEventListener("wheel", b), t.removeEventListener("touchstart", w), t.removeEventListener("touchmove", y), t.removeEventListener("touchend", M), t.removeEventListener("mousedown", S), t.removeEventListener("mouseleave", h), t.removeEventListener("dragstart", L), document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", h), C.disconnect();
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="cg-infinite-horizontal-slider"]').forEach(z);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  z as initCgInfiniteHorizontalSlider
};

function x(n) {
  n._imageTrailCleanup && n._imageTrailCleanup();
  const r = n.querySelector("[data-it-container]"), c = n.querySelector("[data-it-image]");
  if (!r || !c) return;
  const y = Math.max(2, Math.min(20, Number(n.getAttribute("data-it-count")) || 8)), d = Math.max(20, Math.min(200, Number(n.getAttribute("data-it-size")) || 80)), o = [], a = { x: 0, y: 0 }, i = { x: 0, y: 0 };
  for (let e = 0; e < y; e++) {
    const t = c.cloneNode(!0);
    t.style.cssText = `
      position: fixed;
      pointer-events: none;
      width: ${d}px;
      height: ${d}px;
      object-fit: cover;
      border-radius: 8px;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
      z-index: 9999;
      transition: none;
    `, o.push({ el: t, x: 0, y: 0, life: 0 }), document.body.appendChild(t);
  }
  let l = 0, s = null, u = !1;
  const f = (e) => {
    i.x = e.clientX, i.y = e.clientY;
  }, m = () => {
    if (u) return;
    s = requestAnimationFrame(m), a.x += (i.x - a.x) * 0.15, a.y += (i.y - a.y) * 0.15;
    const e = o[l];
    e.x = a.x, e.y = a.y, e.life = 1, e.el.style.left = e.x + "px", e.el.style.top = e.y + "px", e.el.style.opacity = "0.7", e.el.style.transform = "translate(-50%, -50%) scale(1)", l = (l + 1) % 8, o.forEach((t, g) => {
      if (t.life > 0) {
        t.life -= 0.02;
        const p = 0.6 + t.life * 0.4;
        t.el.style.opacity = String(t.life * 0.7), t.el.style.transform = `translate(-50%, -50%) scale(${p})`, t.life <= 0 && (t.el.style.opacity = "0");
      }
    });
  };
  r.addEventListener("mousemove", f), m(), n._imageTrailCleanup = () => {
    u = !0, s && cancelAnimationFrame(s), r.removeEventListener("mousemove", f), o.forEach((e) => e.el.remove());
  };
}
if (typeof window < "u") {
  const n = () => {
    document.querySelectorAll('[data-component="image-trail"]').forEach(x);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", n, { once: !0 }) : n();
}
export {
  x as initImageTrail
};

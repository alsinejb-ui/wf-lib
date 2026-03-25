function f(t) {
  t._magneticCleanup && t._magneticCleanup();
  const c = t.querySelectorAll("[data-magnetic-item]");
  if (!c.length) return;
  const u = Math.max(0, Math.min(1, Number(t.getAttribute("data-magnetic-strength")) || 0.3)), s = (e) => {
    c.forEach((n) => {
      const o = n.getBoundingClientRect(), g = o.left + o.width / 2, h = o.top + o.height / 2, r = (e.clientX - g) / o.width, m = (e.clientY - h) / o.height, l = Math.hypot(r, m), d = Math.min(1, l) * u, y = r * d * 20, E = m * d * 20, a = n._magneticPos || { x: 0, y: 0 };
      n._magneticPos = {
        x: a.x + (y - a.x) * 0.2,
        y: a.y + (E - a.y) * 0.2
      }, n.style.transform = `translate(${n._magneticPos.x}px, ${n._magneticPos.y}px)`;
    });
  }, i = () => {
    c.forEach((e) => {
      e._magneticPos = { x: 0, y: 0 }, e.style.transform = "translate(0, 0)";
    });
  };
  t.addEventListener("mousemove", s), t.addEventListener("mouseleave", i), t._magneticCleanup = () => {
    t.removeEventListener("mousemove", s), t.removeEventListener("mouseleave", i), c.forEach((e) => {
      e.style.transform = "", delete e._magneticPos;
    });
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="magnetic"]').forEach(f);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  f as initMagnetic
};

const g = "!<>-_\\/[]{}—=+*^?#________";
function b(t) {
  t._textScrambleCleanup && t._textScrambleCleanup();
  const l = t.querySelectorAll("[data-ts-text]");
  if (!l.length) return;
  function h(n, r, e = 2e3) {
    const o = r;
    let a = 0;
    const d = g.split(""), u = () => {
      const m = Date.now() - a, f = Math.min(1, m / e);
      let i = "";
      for (let s = 0; s < o.length; s++)
        (s + 1) / o.length <= f ? i += o[s] : i += d[Math.floor(Math.random() * d.length)];
      n.textContent = i, f < 1 && requestAnimationFrame(u);
    };
    a = Date.now(), u();
  }
  const c = new IntersectionObserver(
    (n) => {
      n.forEach((r) => {
        if (r.isIntersecting) {
          const e = r.target, o = e.getAttribute("data-ts-text") ?? e.textContent ?? "", a = Number(e.getAttribute("data-ts-duration")) || 2e3;
          h(e, o, a), c.unobserve(e);
        }
      });
    },
    { threshold: 0.2 }
  );
  l.forEach((n) => c.observe(n)), t._textScrambleCleanup = () => {
    c.disconnect();
  };
}
if (typeof window < "u") {
  const t = () => {
    document.querySelectorAll('[data-component="text-scramble"]').forEach(b);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t, { once: !0 }) : t();
}
export {
  b as initTextScramble
};

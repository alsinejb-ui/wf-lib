/**
 * Preloader — Animation de chargement.
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 */

export function initPreloader(el) {
  if (el._preloaderCleanup) el._preloaderCleanup();

  const bar = el.querySelector("[data-pl-bar]");
  const text = el.querySelector("[data-pl-text]");
  if (!bar) return;

  const duration = Number(el.getAttribute("data-pl-duration")) || 2000;
  const onComplete = () => {
    el.dispatchEvent(new CustomEvent("preloader-complete"));
    bar.style.width = "100%";
    if (text) text.textContent = el.getAttribute("data-pl-done") || "100%";
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      setTimeout(() => {
        el.style.display = "none";
      }, 300);
    }, 200);
  };

  const start = performance.now();
  const animate = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);
    bar.style.width = `${ease * 100}%`;
    if (text) text.textContent = `${Math.round(ease * 100)}%`;
    if (t < 1) requestAnimationFrame(animate);
    else onComplete();
  };

  requestAnimationFrame(animate);

  el._preloaderCleanup = () => {};
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="preloader"]').forEach(initPreloader);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}

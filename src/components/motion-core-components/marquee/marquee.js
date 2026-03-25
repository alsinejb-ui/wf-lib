/**
 * Marquee — Bandeau défilant infini (animation CSS fluide).
 * Inspiré de Motion Core, adapté pour wf-lib (vanilla JS).
 * Supporte plusieurs items et duration-based animation.
 */

export function initMarquee(el) {
  if (el._marqueeCleanup) el._marqueeCleanup();

  const track = el.querySelector("[data-mq-track]");
  const items = el.querySelectorAll("[data-mq-item]");
  const legacyContent = el.querySelector("[data-mq-content]");

  if (!track) return;

  const duration = Number(el.getAttribute("data-mq-duration")) || 20;
  const velocity = Number(el.getAttribute("data-mq-velocity")) || 1;
  const gap = Number(el.getAttribute("data-mq-gap")) || 0;
  const reversed = el.getAttribute("data-mq-reversed") === "true";

  let fragment;
  if (items.length > 0) {
    fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      fragment.appendChild(clone);
    });
  } else if (legacyContent) {
    fragment = document.createDocumentFragment();
    const wrapper = document.createElement("div");
    wrapper.className = "mq-item";
    wrapper.style.flexShrink = "0";
    wrapper.style.paddingRight = `${gap}px`;
    wrapper.appendChild(legacyContent.cloneNode(true));
    fragment.appendChild(wrapper);
  } else {
    return;
  }

  const firstSet = fragment.cloneNode(true);

  track.innerHTML = "";
  track.style.animation = "none";
  track.style.gap = gap > 0 ? `${gap}px` : "";

  track.appendChild(fragment);
  track.appendChild(firstSet);

  const effectiveDuration = duration / velocity;
  track.style.animation = `mq-scroll ${effectiveDuration}s linear infinite`;
  track.style.animationDirection = reversed ? "reverse" : "normal";

  el._marqueeCleanup = () => {
    track.style.animation = "none";
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="marquee"]').forEach(initMarquee);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}

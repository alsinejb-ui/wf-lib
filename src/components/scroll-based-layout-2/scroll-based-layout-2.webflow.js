/* global window, document */
(function () {
  "use strict";

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Lenis = window.Lenis;

  if (!gsap || !ScrollTrigger) {
    console.error(
      "[grid-animated] GSAP et ScrollTrigger sont requis avant ce script.",
    );
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const DEFAULT_OPTIONS = {
    scrollTrigger: {
      start: "center center",
      end: "+=420%",
    },
    fullViewScrollHold: 0.35,
    pushStrength: 1,
    centerZoomOutStart: 1.2,
    othersZoomInEnd: 1.12,
    coverOverscan: 1.04,
  };

  function getCoverScale(el, overscan) {
    const safeOverscan = overscan ?? 1;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    if (w < 1 || h < 1) return 2.5;
    return Math.max(window.innerWidth / w, window.innerHeight / h) * safeOverscan;
  }

  function getPushVectors(items, centerEl, spreadFactor) {
    const centerRect = centerEl.getBoundingClientRect();
    const centerX = centerRect.left + centerRect.width / 2;
    const centerY = centerRect.top + centerRect.height / 2;

    return items.map((el) => {
      const r = el.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const dx = x - centerX;
      const dy = y - centerY;
      return { el, x: dx * spreadFactor, y: dy * spreadFactor };
    });
  }

  function extractBgUrl(value) {
    if (!value || value === "none") return null;
    const match = value.match(/url\((['"]?)(.*?)\1\)/i);
    return match?.[2] || null;
  }

  function preloadGalleryImages(root) {
    const bgNodes = root.querySelectorAll(".gallery__item, .gallery__item-inner");
    const urls = new Set();

    bgNodes.forEach((el) => {
      const cssBg = window.getComputedStyle(el).backgroundImage;
      const parsed = extractBgUrl(cssBg);
      if (parsed) urls.add(parsed);
    });

    if (urls.size === 0) return Promise.resolve();

    return Promise.all(
      Array.from(urls).map(
        (url) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = url;
          }),
      ),
    ).then(() => undefined);
  }

  function mergeOptions(base, override) {
    return {
      ...(base || {}),
      ...(override || {}),
      scrollTrigger: {
        ...((base && base.scrollTrigger) || {}),
        ...((override && override.scrollTrigger) || {}),
      },
    };
  }

  function parseNumberAttr(el, attrName) {
    const raw = el.getAttribute(attrName);
    if (raw == null || raw === "") return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  function readWebflowFriendlyOptions(galleryEl) {
    const options = {};
    const set = (k, v) => {
      if (v != null && v !== "") options[k] = v;
    };

    set("preset2RowGap", galleryEl.getAttribute("data-csla-preset2-row-gap"));
    set("preset2ColumnGap", galleryEl.getAttribute("data-csla-preset2-column-gap"));
    set(
      "fullViewScrollHold",
      parseNumberAttr(galleryEl, "data-csla-full-view-scroll-hold"),
    );
    set("pushStrength", parseNumberAttr(galleryEl, "data-csla-push-strength"));
    set(
      "centerZoomOutStart",
      parseNumberAttr(galleryEl, "data-csla-center-zoom-out-start"),
    );
    set(
      "othersZoomInEnd",
      parseNumberAttr(galleryEl, "data-csla-others-zoom-in-end"),
    );
    set("coverOverscan", parseNumberAttr(galleryEl, "data-csla-cover-overscan"));

    const scrollTrigger = {};
    setScroll("start", galleryEl.getAttribute("data-csla-scroll-start"));
    setScroll("end", galleryEl.getAttribute("data-csla-scroll-end"));
    setScroll("endTrigger", galleryEl.getAttribute("data-csla-scroll-end-trigger"));
    setScroll("pinType", galleryEl.getAttribute("data-csla-scroll-pin-type"));
    const useOutroEnd = galleryEl.getAttribute("data-csla-scroll-use-outro-end");
    if (useOutroEnd === "true" || useOutroEnd === "false") {
      scrollTrigger.useOutroEnd = useOutroEnd === "true";
    }
    if (Object.keys(scrollTrigger).length > 0) {
      options.scrollTrigger = scrollTrigger;
    }
    return options;

    function setScroll(k, v) {
      if (v != null && v !== "") scrollTrigger[k] = v;
    }
  }

  function parseGalleryOptions(galleryEl) {
    const attrOptions = readWebflowFriendlyOptions(galleryEl);
    const rawJson = galleryEl.getAttribute("data-csla-options");
    if (!rawJson) return attrOptions;
    try {
      const parsed = JSON.parse(rawJson);
      return mergeOptions(attrOptions, parsed);
    } catch (err) {
      console.warn("[grid-animated] data-csla-options JSON invalide", err);
      return attrOptions;
    }
  }

  function ensureGalleryWrapClip(galleryEl, gsapCtx) {
    const wrapEl = galleryEl.parentElement;
    if (
      !wrapEl ||
      !wrapEl.classList.contains("gallery-wrap") ||
      (galleryEl.parentElement &&
        galleryEl.parentElement.classList.contains("gallery-wrap-clip"))
    ) {
      return;
    }
    const clipEl = document.createElement("div");
    clipEl.className = "gallery-wrap-clip";
    wrapEl.insertBefore(clipEl, galleryEl);
    clipEl.appendChild(galleryEl);
    gsapCtx.add(() => {
      if (
        clipEl.isConnected &&
        galleryEl.parentElement === clipEl &&
        clipEl.parentElement
      ) {
        clipEl.parentElement.insertBefore(galleryEl, clipEl);
        clipEl.remove();
      }
    });
  }

  function triggerPreset2GridFocus(galleryEl, options, gsapCtx) {
    const settings = Object.assign({}, DEFAULT_OPTIONS, options);
    const st = Object.assign({}, DEFAULT_OPTIONS.scrollTrigger, settings.scrollTrigger || {});

    const galleryItems = Array.from(galleryEl.querySelectorAll(".gallery__item"));
    const galleryCaption = galleryEl.querySelector(".caption");

    if (galleryItems.length < 1) return;

    const centerIndex = galleryItems.length >= 9 ? 4 : Math.floor(galleryItems.length / 2);
    const centerEl = galleryItems[centerIndex];
    const centerInner = centerEl.querySelector(".gallery__item-inner");
    const others = galleryItems.filter((_, i) => i !== centerIndex);
    const othersInner = others
      .map((item) => item.querySelector(".gallery__item-inner"))
      .filter(Boolean);
    const pushStrength = Math.max(
      0.85,
      Number(settings.pushStrength ?? DEFAULT_OPTIONS.pushStrength) || 1,
    );
    const coverOverscan = Math.max(
      1,
      Number(settings.coverOverscan ?? DEFAULT_OPTIONS.coverOverscan) ||
        DEFAULT_OPTIONS.coverOverscan,
    );
    const centerZoomOutStart = Math.max(
      1,
      Number(settings.centerZoomOutStart ?? DEFAULT_OPTIONS.centerZoomOutStart) ||
        DEFAULT_OPTIONS.centerZoomOutStart,
    );
    const othersZoomInEnd = Math.max(
      1,
      Number(settings.othersZoomInEnd ?? DEFAULT_OPTIONS.othersZoomInEnd) ||
        DEFAULT_OPTIONS.othersZoomInEnd,
    );
    const fullViewScrollHold = Math.max(
      0,
      Number(settings.fullViewScrollHold ?? DEFAULT_OPTIONS.fullViewScrollHold) || 0,
    );

    if (options.preset2RowGap != null) {
      galleryEl.style.setProperty("--csla-p2-row-gap", String(options.preset2RowGap));
    }
    if (options.preset2ColumnGap != null) {
      galleryEl.style.setProperty("--csla-p2-column-gap", String(options.preset2ColumnGap));
    }

    galleryEl.classList.add("gallery--csla2");
    centerEl.classList.add("gallery__item--csla2-center");

    const pinTarget = galleryEl.closest(".gallery-wrap") ?? galleryEl.parentElement;

    const userScrollTrigger = settings.scrollTrigger || {};
    const hasCustomEnd =
      (userScrollTrigger.end !== undefined && userScrollTrigger.end !== null) ||
      (userScrollTrigger.endTrigger !== undefined &&
        userScrollTrigger.endTrigger !== null);

    const gridSection = galleryEl.closest(".csla2-section");
    const outroSection =
      gridSection &&
      gridSection.nextElementSibling &&
      gridSection.nextElementSibling.classList.contains("csla2-section--outro")
        ? gridSection.nextElementSibling
        : null;

    const useOutroEnd =
      Boolean(outroSection) && userScrollTrigger.useOutroEnd === true && !hasCustomEnd;

    const scrollTriggerConfig = {
      trigger: galleryEl,
      start: st.start,
      pin: pinTarget,
      scrub: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onRefresh: () => computePushVectors(),
    };

    if (useOutroEnd) {
      scrollTriggerConfig.endTrigger = outroSection;
      scrollTriggerConfig.end = "top bottom";
    } else {
      scrollTriggerConfig.end = st.end;
      if (st.endTrigger != null) {
        scrollTriggerConfig.endTrigger = st.endTrigger;
      }
    }

    const cslaRoot = galleryEl.closest('[data-component="grid-animated"]');
    if (st.pinType != null) {
      scrollTriggerConfig.pinType = st.pinType;
    } else if (cslaRoot && cslaRoot.getAttribute("data-csla-lenis") === "true") {
      scrollTriggerConfig.pinType = "transform";
    }

    gsapCtx.add(() => {
      galleryEl.classList.remove("gallery--csla2");
      centerEl.classList.remove("gallery__item--csla2-center");
      gsap.set(centerEl, { clearProps: "transform" });
      if (centerInner) gsap.set(centerInner, { clearProps: "transform" });
      if (others.length) gsap.set(others, { clearProps: "transform" });
      if (othersInner.length) gsap.set(othersInner, { clearProps: "transform" });
      if (galleryCaption) {
        gsap.set(galleryCaption, { clearProps: "transform,opacity,visibility" });
      }
    });

    const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

    let pushVectorMap = new Map();
    const computePushVectors = () => {
      const finalScale = getCoverScale(centerEl, coverOverscan);
      const spread = Math.max(0, (finalScale - 1) * pushStrength);
      pushVectorMap = new Map(
        getPushVectors(others, centerEl, spread).map((v) => [v.el, { x: v.x, y: v.y }]),
      );
    };

    if (others.length) {
      tl.to(
        others,
        {
          x: (_, target) => (pushVectorMap.get(target) || {}).x || 0,
          y: (_, target) => (pushVectorMap.get(target) || {}).y || 0,
          scale: () => getCoverScale(centerEl, coverOverscan),
          duration: 1,
          ease: "none",
          force3D: true,
        },
        0,
      );
    }

    tl.fromTo(
      centerEl,
      { scale: 1 },
      {
        scale: () => getCoverScale(centerEl, coverOverscan),
        duration: 1,
        ease: "none",
        force3D: true,
      },
      0,
    );

    if (centerInner) {
      tl.fromTo(
        centerInner,
        { scale: centerZoomOutStart, transformOrigin: "50% 50%" },
        { scale: 1, duration: 1, ease: "none", force3D: true },
        0,
      );
    }

    if (othersInner.length) {
      tl.fromTo(
        othersInner,
        { scale: 1, transformOrigin: "50% 50%" },
        { scale: othersZoomInEnd, duration: 1, ease: "none", force3D: true },
        0,
      );
    }

    if (galleryCaption) {
      tl.fromTo(
        galleryCaption,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.72, ease: "none" },
        0.18,
      );
    }

    if (fullViewScrollHold > 0) {
      tl.add(gsap.delayedCall(fullViewScrollHold, () => {}), 1);
    }

    computePushVectors();
  }

  function initScrollBasedLayout2(el) {
    if (el._scrollBasedLayout2Cleanup) {
      el._scrollBasedLayout2Cleanup();
    }

    let aborted = false;
    let ctx = null;
    let lenis = null;
    let gsapTickerHandler = null;

    const cleanup = () => {
      aborted = true;
      if (ctx) {
        ctx.revert();
        ctx = null;
      }
      if (gsapTickerHandler) {
        gsap.ticker.remove(gsapTickerHandler);
        gsapTickerHandler = null;
      }
      if (lenis && typeof lenis.destroy === "function") {
        lenis.destroy();
      }
      lenis = null;
      el.classList.remove("csla2-js");
      ScrollTrigger.refresh();
    };

    el._scrollBasedLayout2Cleanup = cleanup;
    el.classList.add("csla2-js");

    preloadGalleryImages(el).then(() => {
      if (aborted) return;
      ctx = gsap.context((gsapCtx) => {
        const useLenis = el.getAttribute("data-csla-lenis") === "true";
        if (useLenis && Lenis) {
          lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
          lenis.on("scroll", () => ScrollTrigger.update());
          gsapTickerHandler = (time) => lenis.raf(time * 1000);
          gsap.ticker.add(gsapTickerHandler);
          gsap.ticker.lagSmoothing(0);
        } else if (useLenis && !Lenis) {
          console.warn("[grid-animated] data-csla-lenis=true mais Lenis est absent.");
        }

        el.querySelectorAll(".gallery").forEach((galleryEl) => {
          if (!galleryEl.querySelector(".gallery__item")) return;
          ensureGalleryWrapClip(galleryEl, gsapCtx);
          if (!galleryEl.classList.contains("gallery--grid")) {
            console.warn(
              "[grid-animated] .gallery attendu avec .gallery--grid (preset grille 3x3).",
            );
            return;
          }
          try {
            triggerPreset2GridFocus(galleryEl, parseGalleryOptions(galleryEl), gsapCtx);
          } catch (err) {
            console.error("[grid-animated] ScrollTrigger", err);
          }
        });
      }, el);

      ScrollTrigger.refresh();
    });

    return cleanup;
  }

  function boot() {
    document
      .querySelectorAll('[data-component="grid-animated"]')
      .forEach((node) => initScrollBasedLayout2(node));
  }

  window.initScrollBasedLayout2 = initScrollBasedLayout2;
  window.initScrollBasedLayout2Boot = boot;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();

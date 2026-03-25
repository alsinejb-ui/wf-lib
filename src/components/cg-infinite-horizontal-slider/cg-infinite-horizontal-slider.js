/**
 * CG Infinite Horizontal Slider — Slider horizontal infini avec parallax.
 * Inspiré de Codegrid (cg-infinite-horizontal-slider), adapté pour wf-lib.
 * Scroll wheel + drag + effet parallax sur les images.
 */

const DEFAULT_CONFIG = {
  scrollSpeed: 1.75,
  lerpFactor: 0.05,
  maxVelocity: 150,
  parallaxStrength: 0.25,
  slideWidth: 390,
  slideHeight: 500,
  slideGap: 20,
  copies: 6,
};

function parseSlides(el) {
  const json = el.getAttribute("data-cgih-slides");
  if (json) {
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-cgih-slide]");
  return Array.from(items).map((item) => ({
    title: item.getAttribute("data-title") ?? "",
    img: item.getAttribute("data-image") ?? "",
    url: item.getAttribute("data-url") ?? "",
  }));
}

export function initCgInfiniteHorizontalSlider(el) {
  if (el._cgihCleanup) el._cgihCleanup();

  const track = el.querySelector("[data-cgih-track]");
  if (!track) return;

  const slidesData = parseSlides(el);
  if (!slidesData.length) return;

  const scrollSpeed = Number(el.getAttribute("data-cgih-scroll-speed")) || DEFAULT_CONFIG.scrollSpeed;
  const lerpFactor = Number(el.getAttribute("data-cgih-lerp")) || DEFAULT_CONFIG.lerpFactor;
  const maxVelocity = Number(el.getAttribute("data-cgih-max-velocity")) || DEFAULT_CONFIG.maxVelocity;
  const parallaxStrength = Number(el.getAttribute("data-cgih-parallax")) ?? DEFAULT_CONFIG.parallaxStrength;

  const state = {
    currentX: 0,
    targetX: 0,
    slideWidth: DEFAULT_CONFIG.slideWidth,
    slideHeight: DEFAULT_CONFIG.slideHeight,
    slides: [],
    isDragging: false,
    startX: 0,
    lastX: 0,
    lastMouseX: 0,
    lastScrollTime: Date.now(),
    velocity: 0,
    lastCurrentX: 0,
    dragDistance: 0,
    hasActuallyDragged: false,
    isMobile: false,
  };

  function checkMobile() {
    state.isMobile = window.innerWidth < 1000;
  }

  function createSlideElement(index) {
    const slide = document.createElement("div");
    slide.setAttribute("data-cgih-slide-item", "");
    const dataIndex = index % slidesData.length;
    const data = slidesData[dataIndex];

    const w = state.isMobile ? 175 : state.slideWidth;
    const h = state.isMobile ? 250 : state.slideHeight;
    slide.style.width = `${w}px`;
    slide.style.height = `${h}px`;

    const imageContainer = document.createElement("div");
    imageContainer.className = "cgih-slide-image";

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;

    const overlay = document.createElement("div");
    overlay.className = "cgih-slide-overlay";

    const title = document.createElement("p");
    title.className = "cgih-project-title";
    title.textContent = data.title;

    const arrow = document.createElement("div");
    arrow.className = "cgih-project-arrow";
    arrow.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>`;

    slide.addEventListener("click", (e) => {
      e.preventDefault();
      if (state.dragDistance < 10 && !state.hasActuallyDragged && data.url) {
        window.location.href = data.url;
      }
    });

    overlay.appendChild(title);
    overlay.appendChild(arrow);
    imageContainer.appendChild(img);
    slide.appendChild(imageContainer);
    slide.appendChild(overlay);

    return slide;
  }

  function initializeSlides() {
    track.innerHTML = "";
    state.slides = [];

    checkMobile();
    state.slideWidth = state.isMobile ? 215 : (Number(el.getAttribute("data-cgih-slide-width")) || DEFAULT_CONFIG.slideWidth);
    state.slideHeight = state.isMobile ? 250 : (Number(el.getAttribute("data-cgih-slide-height")) || DEFAULT_CONFIG.slideHeight);

    const copies = DEFAULT_CONFIG.copies;
    const totalSlides = slidesData.length * copies;

    for (let i = 0; i < totalSlides; i++) {
      const slide = createSlideElement(i);
      track.appendChild(slide);
      state.slides.push(slide);
    }

    const stepWidth = state.slideWidth + DEFAULT_CONFIG.slideGap * 2;
    const startOffset = -(slidesData.length * stepWidth * 2);
    state.currentX = startOffset;
    state.targetX = startOffset;
  }

  function updateSlidePositions() {
    const stepWidth = state.slideWidth + DEFAULT_CONFIG.slideGap * 2;
    const sequenceWidth = stepWidth * slidesData.length;

    if (state.currentX > -sequenceWidth * 1) {
      state.currentX -= sequenceWidth;
      state.targetX -= sequenceWidth;
    } else if (state.currentX < -sequenceWidth * 4) {
      state.currentX += sequenceWidth;
      state.targetX += sequenceWidth;
    }

    track.style.transform = `translate3d(${state.currentX}px, 0, 0)`;
  }

  function updateParallax() {
    const viewportCenter = window.innerWidth / 2;

    state.slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (!img) return;

      const slideRect = slide.getBoundingClientRect();
      if (slideRect.right < -500 || slideRect.left > window.innerWidth + 500) return;

      const slideCenter = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = slideCenter - viewportCenter;
      const parallaxOffset = distanceFromCenter * -parallaxStrength;

      img.style.transform = `translateX(${parallaxOffset}px) scale(2.25)`;
    });
  }

  function updateMovingState() {
    state.velocity = Math.abs(state.currentX - state.lastCurrentX);
    state.lastCurrentX = state.currentX;
    const isSlowEnough = state.velocity < 0.1;
    const hasBeenStillLongEnough = Date.now() - state.lastScrollTime > 200;
    const isMoving = state.hasActuallyDragged || !isSlowEnough || !hasBeenStillLongEnough;
    el.style.setProperty("--cgih-moving", isMoving ? "1" : "0");
  }

  function animate() {
    if (state.disposed) return;
    state.rafId = requestAnimationFrame(animate);

    state.currentX += (state.targetX - state.currentX) * lerpFactor;
    updateMovingState();
    updateSlidePositions();
    updateParallax();
  }

  function handleWheel(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    state.lastScrollTime = Date.now();
    const scrollDelta = e.deltaY * scrollSpeed;
    state.targetX -= Math.max(Math.min(scrollDelta, maxVelocity), -maxVelocity);
  }

  function handleTouchStart(e) {
    state.isDragging = true;
    state.startX = e.touches[0].clientX;
    state.lastX = state.targetX;
    state.dragDistance = 0;
    state.hasActuallyDragged = false;
    state.lastScrollTime = Date.now();
  }

  function handleTouchMove(e) {
    if (!state.isDragging) return;
    const deltaX = (e.touches[0].clientX - state.startX) * 1.5;
    state.targetX = state.lastX + deltaX;
    state.dragDistance = Math.abs(deltaX);
    if (state.dragDistance > 5) state.hasActuallyDragged = true;
    state.lastScrollTime = Date.now();
  }

  function handleTouchEnd() {
    state.isDragging = false;
    setTimeout(() => { state.hasActuallyDragged = false; }, 100);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    state.isDragging = true;
    state.lastMouseX = e.clientX;
    state.lastX = state.targetX;
    state.dragDistance = 0;
    state.hasActuallyDragged = false;
    state.lastScrollTime = Date.now();
  }

  function handleMouseMove(e) {
    if (!state.isDragging) return;
    e.preventDefault();
    const deltaX = (e.clientX - state.lastMouseX) * 2;
    state.targetX += deltaX;
    state.lastMouseX = e.clientX;
    state.dragDistance += Math.abs(deltaX);
    if (state.dragDistance > 5) state.hasActuallyDragged = true;
    state.lastScrollTime = Date.now();
  }

  function handleMouseUp() {
    state.isDragging = false;
    setTimeout(() => { state.hasActuallyDragged = false; }, 100);
  }

  state.disposed = false;
  initializeSlides();
  animate();

  el.addEventListener("wheel", handleWheel, { passive: false });
  el.addEventListener("touchstart", handleTouchStart);
  el.addEventListener("touchmove", handleTouchMove);
  el.addEventListener("touchend", handleTouchEnd);
  el.addEventListener("mousedown", handleMouseDown);
  el.addEventListener("mouseleave", handleMouseUp);
  const preventDrag = (e) => e.preventDefault();
  el.addEventListener("dragstart", preventDrag);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  const resizeObserver = new ResizeObserver(() => initializeSlides());
  resizeObserver.observe(el);

  el._cgihCleanup = () => {
    state.disposed = true;
    if (state.rafId) cancelAnimationFrame(state.rafId);
    el.removeEventListener("wheel", handleWheel);
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchmove", handleTouchMove);
    el.removeEventListener("touchend", handleTouchEnd);
    el.removeEventListener("mousedown", handleMouseDown);
    el.removeEventListener("mouseleave", handleMouseUp);
    el.removeEventListener("dragstart", preventDrag);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    resizeObserver.disconnect();
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document.querySelectorAll('[data-component="cg-infinite-horizontal-slider"]').forEach(initCgInfiniteHorizontalSlider);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}

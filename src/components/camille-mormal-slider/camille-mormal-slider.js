import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1");

export function initCamilleMormalSlider(el) {
  if (el._camilleMormalSliderCleanup) {
    el._camilleMormalSliderCleanup();
  }

  const slider = el.querySelector("[data-cms-slider]") ?? el.querySelector(".slider");
  if (!slider) return;

  const sliderImages = slider.querySelector("[data-cms-images]") ?? slider.querySelector(".slider-images");
  const counter = slider.querySelector("[data-cms-counter]") ?? slider.querySelector(".counter");
  const titles = slider.querySelector("[data-cms-titles]") ?? slider.querySelector(".slider-title-wrapper");
  const indicators = slider.querySelectorAll("[data-cms-indicators] p, .slider-indicators p");
  const prevSlides = slider.querySelectorAll("[data-cms-preview] .preview, .slider-preview .preview");
  const slidePreview = slider.querySelector("[data-cms-preview]") ?? slider.querySelector(".slider-preview");

  if (!sliderImages || !counter || !titles || !slidePreview) return;

  const totalSlides = prevSlides.length;
  if (totalSlides === 0) return;

  const autoplayInterval = Number(el.dataset.cmsAutoplayInterval ?? 5000);

  let currentImg = 1;
  let indicatorRotation = 0;
  let autoplayTimerId = null;
  let fillTween = null;

  prevSlides.forEach((preview) => {
    const overlay = document.createElement("div");
    overlay.className = "preview-overlay";
    preview.appendChild(overlay);
  });

  const overlayEls = slider.querySelectorAll(".preview-overlay");

  function getImageSrc(index) {
    const preview = prevSlides[index - 1];
    const img = preview?.querySelector("img");
    return img?.src ?? img?.getAttribute("src") ?? "";
  }

  function updateCounterAndTitlePosition() {
    const counterY = -20 * (currentImg - 1);
    const titleY = -60 * (currentImg - 1);
    gsap.to(counter, { y: counterY, duration: 1, ease: "hop" });
    gsap.to(titles, { y: titleY, duration: 1, ease: "hop" });
  }

  function updateActiveSlidePreview() {
    prevSlides.forEach((p) => p.classList.remove("active"));
    overlayEls.forEach((o, i) => {
      gsap.set(o, { x: 0, xPercent: i === currentImg - 1 ? 0 : 100 });
    });
    const target = prevSlides[currentImg - 1];
    if (target) target.classList.add("active");
    const overlayTarget = overlayEls[currentImg - 1];
    if (overlayTarget && autoplayInterval > 0) {
      fillTween?.kill();
      gsap.set(overlayTarget, { x: 0, xPercent: 0 });
      fillTween = gsap.to(overlayTarget, {
        xPercent: 100,
        duration: autoplayInterval / 1000,
        ease: "none",
      });
    }
  }

  function cleanupSlides() {
    const imgElements = sliderImages.querySelectorAll(".img");
    if (imgElements.length > totalSlides) {
      imgElements[0].remove();
    }
  }

  function animateSlide(direction) {
    const currentSlide = sliderImages.querySelectorAll(".img");
    const lastSlide = currentSlide[currentSlide.length - 1];
    if (!lastSlide) return;

    const slideImg = document.createElement("div");
    slideImg.classList.add("img");

    const slideImgElem = document.createElement("img");
    const src = getImageSrc(currentImg);
    if (src) slideImgElem.src = src;
    slideImgElem.alt = "";

    gsap.set(slideImgElem, { x: direction === "left" ? -500 : 500 });
    slideImg.appendChild(slideImgElem);
    sliderImages.appendChild(slideImg);

    gsap.to(lastSlide.querySelector("img"), {
      x: direction === "left" ? 500 : -500,
      duration: 1.5,
      ease: "hop",
    });

    gsap.fromTo(
      slideImg,
      {
        clipPath:
          direction === "left"
            ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "hop",
      },
    );
    gsap.to(slideImgElem, { x: 0, duration: 1.5, ease: "hop" });

    cleanupSlides();

    indicatorRotation += direction === "left" ? -90 : 90;
    gsap.to(indicators, { rotate: indicatorRotation, duration: 1, ease: "hop" });
  }

  function goToNext() {
    if (currentImg < totalSlides) {
      currentImg++;
      animateSlide("right");
      updateActiveSlidePreview();
      updateCounterAndTitlePosition();
    } else {
      currentImg = 1;
      animateSlide("right");
      updateActiveSlidePreview();
      updateCounterAndTitlePosition();
    }
  }

  function startAutoplay() {
    if (autoplayInterval <= 0) return;
    autoplayTimerId = setInterval(goToNext, autoplayInterval);
  }

  function stopAutoplay() {
    if (autoplayTimerId) {
      clearInterval(autoplayTimerId);
      autoplayTimerId = null;
    }
    fillTween?.kill();
    fillTween = null;
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  const onDocumentClick = (event) => {
    if (!slider.contains(event.target)) return;

    resetAutoplay();

    const sliderWidth = slider.clientWidth;
    const clickPosition = event.clientX;

    if (slidePreview.contains(event.target)) {
      const clickedPrev = event.target.closest(".preview");
      if (clickedPrev) {
        const clickedIndex = Array.from(prevSlides).indexOf(clickedPrev) + 1;
        if (clickedIndex !== currentImg && clickedIndex >= 1 && clickedIndex <= totalSlides) {
          const direction = clickedIndex < currentImg ? "left" : "right";
          currentImg = clickedIndex;
          animateSlide(direction);
          updateActiveSlidePreview();
          updateCounterAndTitlePosition();
        }
      }
      return;
    }

    if (clickPosition < sliderWidth / 2 && currentImg !== 1) {
      currentImg--;
      animateSlide("left");
    } else if (clickPosition > sliderWidth / 2 && currentImg !== totalSlides) {
      currentImg++;
      animateSlide("right");
    }

    updateActiveSlidePreview();
    updateCounterAndTitlePosition();
  };

  document.addEventListener("click", onDocumentClick);
  startAutoplay();
  updateActiveSlidePreview();

  el._camilleMormalSliderCleanup = () => {
    stopAutoplay();
    document.removeEventListener("click", onDocumentClick);
    gsap.killTweensOf([counter, titles, indicators, overlayEls]);
  };
}

import gsap from "gsap";
import { escapeHtml } from "../../core/dom.js";

const DEFAULT_DURATION = 4000;
const CONTENT_UPDATE_DELAY = 0.4;

function parseStories(el) {
  const json = el.getAttribute("data-stories");
  if (json) {
    try {
      const parsed = JSON.parse(json);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  const items = el.querySelectorAll("[data-story]");
  return Array.from(items).map((item) => {
    const title = item.getAttribute("data-title");
    return {
      profileImg: item.getAttribute("data-profile-img") ?? "",
      profileName: item.getAttribute("data-profile-name") ?? "",
      title: title ? title.split("|").map((s) => s.trim()) : [],
      linkLabel: item.getAttribute("data-link-label") ?? "",
      linkSrc: item.getAttribute("data-link-src") ?? "#",
      storyImg: item.getAttribute("data-story-img") ?? "",
    };
  });
}

export function initStories(el) {
  if (el._storiesCleanup) {
    el._storiesCleanup();
  }

  const stories = parseStories(el);
  if (!stories.length) return;

  const duration = Number(el.getAttribute("data-stories-duration")) || DEFAULT_DURATION;
  const showCursor = el.getAttribute("data-stories-cursor") !== "false";

  let activeStory = 0;
  let direction = "next";
  let storyTimeout;

  const container = el.querySelector("[data-stories-container]");
  const cursor = el.querySelector("[data-stories-cursor]");
  const cursorText = cursor?.querySelector("p");
  const storyImgHost = el.querySelector("[data-stories-img]");
  const indicesHost = el.querySelector("[data-stories-indices]");
  const profileIcon = el.querySelector("[data-stories-profile-icon]");
  const profileNameHost = el.querySelector("[data-stories-profile-name]");
  const titleHost = el.querySelector("[data-stories-title]");
  const linkEl = el.querySelector("[data-stories-link]");

  if (!container || !storyImgHost || !indicesHost || !profileNameHost || !titleHost || !linkEl) {
    return;
  }

  const maxTitleLines = Math.max(...stories.map((s) => (s.title?.length ?? 0) || 1), 1);

  indicesHost.innerHTML = stories
    .map(() => `<div class="stories-index"><div class="stories-index-highlight"></div></div>`)
    .join("");

  const indices = indicesHost.querySelectorAll(".stories-index");
  const highlights = indicesHost.querySelectorAll(".stories-index-highlight");

  function resetIndexHighlight(index, currentDirection) {
    const highlight = highlights[index];
    if (!highlight) return;
    gsap.killTweensOf(highlight);
    gsap.set(highlight, { transformOrigin: "left center" });
    gsap.to(highlight, {
      width: currentDirection === "next" ? "100%" : "0%",
      duration: 0.3,
      ease: "power2.out",
    });
  }

  function resetAllHighlights() {
    highlights.forEach((h) => {
      gsap.killTweensOf(h);
      gsap.set(h, { width: "0%", transformOrigin: "left center" });
    });
  }

  function animateIndexHighlight(index) {
    const highlight = highlights[index];
    if (!highlight) return;
    gsap.killTweensOf(highlight);
    gsap.set(highlight, { width: "0%", transformOrigin: "left center" });
    gsap.to(highlight, {
      width: "100%",
      duration: duration / 1000,
      ease: "none",
    });
  }

  function animateNewImage(imgContainer, currentDirection) {
    gsap.set(imgContainer, {
      clipPath:
        currentDirection === "next"
          ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
          : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.to(imgContainer, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
    });
  }

  function animateImageScale(currentImg, upcomingImg, currentDirection) {
    gsap.fromTo(
      currentImg,
      { scale: 1, rotate: 0 },
      {
        scale: 2,
        rotate: currentDirection === "next" ? -25 : 25,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          currentImg.closest(".stories-img-item")?.remove();
        },
      },
    );
    gsap.fromTo(
      upcomingImg,
      { scale: 2, rotate: currentDirection === "next" ? 25 : -25 },
      { scale: 1, rotate: 0, duration: 1, ease: "power4.inOut" },
    );
  }

  function cleanUpElements() {
    // Nettoyage de secours si des éléments sont restés (ne devrait plus arriver)
    while (profileNameHost.children.length > 2) {
      profileNameHost.removeChild(profileNameHost.firstChild);
    }
    titleHost.querySelectorAll(".stories-title-row").forEach((row) => {
      while (row.children.length > 2) {
        row.removeChild(row.firstChild);
      }
    });
  }

  const TRANSITION_COOLDOWN_MS = 600;
  let lastTransitionTime = 0;

  function changeStory(isAutomatic = true) {
    lastTransitionTime = Date.now();
    const previousStory = activeStory;
    const currentDirection = isAutomatic ? "next" : direction;

    if (currentDirection === "next") {
      activeStory = (activeStory + 1) % stories.length;
    } else {
      activeStory = (activeStory - 1 + stories.length) % stories.length;
    }

    const story = stories[activeStory];
    const titleLines = Array.isArray(story.title) ? story.title : [story.title ?? ""];

    const oldProfileNames = profileNameHost.querySelectorAll("p");
    const oldTitles = titleHost.querySelectorAll(".stories-title-row h1");

    gsap.killTweensOf(oldProfileNames);
    gsap.killTweensOf(oldTitles);

    const exitY = currentDirection === "next" ? -24 : 24;
    const exitTitleY = currentDirection === "next" ? -48 : 48;

    gsap.to(oldProfileNames, {
      y: exitY,
      duration: 0.5,
      delay: CONTENT_UPDATE_DELAY,
      force3D: true,
      onComplete: () => {
        oldProfileNames.forEach((p) => p.remove());
      },
    });
    gsap.to(oldTitles, {
      y: exitTitleY,
      duration: 0.5,
      delay: CONTENT_UPDATE_DELAY,
      force3D: true,
      onComplete: () => {
        oldTitles.forEach((h) => h.remove());
      },
    });

    const currentImgContainer = storyImgHost.querySelector(".stories-img-item");
    const currentImg = currentImgContainer?.querySelector("img");

    setTimeout(() => {
      const enterY = currentDirection === "next" ? 24 : -24;
      const enterTitleY = currentDirection === "next" ? 48 : -48;

      const newProfileName = document.createElement("p");
      newProfileName.textContent = story.profileName;
      newProfileName.style.zIndex = "1";
      profileNameHost.appendChild(newProfileName);
      gsap.fromTo(
        newProfileName,
        { y: enterY },
        { y: 0, duration: 0.5, delay: CONTENT_UPDATE_DELAY, force3D: true },
      );

      const titleRows = titleHost.querySelectorAll(".stories-title-row");
      for (let i = 0; i < maxTitleLines; i++) {
        const line = titleLines[i] ?? "";
        const row = titleRows[i];
        if (row) {
          const newTitle = document.createElement("h1");
          newTitle.textContent = line;
          newTitle.style.zIndex = "1";
          row.appendChild(newTitle);
          gsap.fromTo(
            newTitle,
            { y: enterTitleY },
            { y: 0, duration: 0.5, delay: CONTENT_UPDATE_DELAY, force3D: true },
          );
        }
      }

      const newImgContainer = document.createElement("div");
      newImgContainer.className = "stories-img-item";
      const newStoryImg = document.createElement("img");
      newStoryImg.src = story.storyImg;
      newStoryImg.alt = story.profileName;
      newImgContainer.appendChild(newStoryImg);
      storyImgHost.appendChild(newImgContainer);

      animateNewImage(newImgContainer, currentDirection);

      if (currentImg) {
        animateImageScale(currentImg, newStoryImg, currentDirection);
      }

      const isLoopingToFirst =
        currentDirection === "next" &&
        previousStory === stories.length - 1 &&
        activeStory === 0;

      if (isLoopingToFirst) {
        resetAllHighlights();
      } else {
        resetIndexHighlight(previousStory, currentDirection);
      }
      animateIndexHighlight(activeStory);
      cleanUpElements();

      clearTimeout(storyTimeout);
      storyTimeout = setTimeout(() => changeStory(true), duration);
    }, 200);

    setTimeout(() => {
      if (profileIcon) {
        const img = profileIcon.querySelector("img");
        if (img) img.src = story.profileImg;
      }
      linkEl.textContent = story.linkLabel;
      linkEl.href = story.linkSrc;
    }, 600);
  }

  storyImgHost.innerHTML = "";
  const firstImg = document.createElement("div");
  firstImg.className = "stories-img-item";
  const firstImgEl = document.createElement("img");
  firstImgEl.src = stories[0].storyImg;
  firstImgEl.alt = stories[0].profileName;
  firstImg.appendChild(firstImgEl);
  storyImgHost.appendChild(firstImg);

  profileNameHost.innerHTML = `<p>${escapeHtml(stories[0].profileName)}</p>`;
  titleHost.innerHTML = Array.from({ length: maxTitleLines }, (_, i) => {
    const line = (stories[0].title?.length ?? 0) > i ? stories[0].title[i] : "";
    return `<div class="stories-title-row"><h1>${escapeHtml(line)}</h1></div>`;
  }).join("");
  linkEl.textContent = stories[0].linkLabel;
  linkEl.href = stories[0].linkSrc;
  if (profileIcon) {
    const img = profileIcon.querySelector("img");
    if (img) img.src = stories[0].profileImg;
  }

  animateIndexHighlight(0);

  const onMouseMove = (e) => {
    if (!cursor || !cursorText) return;
    const { clientX, clientY } = e;
    const rect = container.getBoundingClientRect();
    gsap.to(cursor, {
      x: clientX - rect.left - cursor.offsetWidth / 2,
      y: clientY - rect.top - cursor.offsetHeight / 2,
      ease: "power2.out",
      duration: 0.3,
    });
    const midX = rect.left + rect.width / 2;
    if (clientX < midX) {
      cursorText.textContent = "Prev";
      direction = "prev";
    } else {
      cursorText.textContent = "Next";
      direction = "next";
    }
  };

  const onClick = () => {
    const now = Date.now();
    if (now - lastTransitionTime < TRANSITION_COOLDOWN_MS) return;

    clearTimeout(storyTimeout);
    resetIndexHighlight(activeStory, direction);
    changeStory(false);
  };

  if (showCursor && cursor) {
    container.addEventListener("mousemove", onMouseMove);
  }
  container.addEventListener("click", onClick);

  storyTimeout = setTimeout(() => changeStory(true), duration);

  el._storiesCleanup = () => {
    clearTimeout(storyTimeout);
    if (showCursor && cursor) {
      container.removeEventListener("mousemove", onMouseMove);
    }
    container.removeEventListener("click", onClick);
    highlights.forEach((h) => gsap.killTweensOf(h));
    profileNameHost.querySelectorAll("p").forEach((el) => gsap.killTweensOf(el));
    titleHost.querySelectorAll(".stories-title-row h1").forEach((el) => gsap.killTweensOf(el));
    storyImgHost.querySelectorAll(".stories-img-item, img").forEach((el) =>
      gsap.killTweensOf(el),
    );
  };
}

if (typeof window !== "undefined") {
  const init = () => {
    document
      .querySelectorAll('[data-component="stories"]')
      .forEach((el) => initStories(el));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}

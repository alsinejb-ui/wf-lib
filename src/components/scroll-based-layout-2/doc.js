import { writeClipboardXscp, validateCopyPayload } from "webflow-clipboard";

const SNIPPETS = {
  headGlobal: `<!-- Dans <head> -->
<style>
/* Colle ici le snippet CSS minimal du composant */
</style>`,

  bodyGlobal: `<!-- Avant </body> -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.3.11/dist/lenis.min.js"></script>
<script>
/* Colle ici le contenu de scroll-based-layout-2.webflow.js */
</script>`,

  html: `<div data-component="grid-animated" data-csla-lenis="true">
  <section class="csla2-section csla2-section--grid">
    <div class="gallery-wrap">
      <div class="gallery gallery--grid gallery--breakout" data-csla-scroll-end="+=420%">
        <!-- 9 items -->
        <div class="gallery__item"><div class="gallery__item-inner"><img src="..." alt=""></div></div>
      </div>
    </div>
  </section>
</div>`,

  css: `[data-component="grid-animated"] .gallery-wrap { margin: 0 auto; }
[data-component="grid-animated"] .gallery__item-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}`,
};

const XSCP_URL = new URL("./webflow-structure.xscp.json", import.meta.url);
let loadedXscp = "";

const statusWebflow = document.getElementById("status-webflow");
const btnCopyWebflow = document.getElementById("btn-copy-webflow");

function setWebflowStatus(message, kind = "info") {
  statusWebflow.textContent = message;
  statusWebflow.dataset.kind = kind;
}

function updateWebflowButtonState() {
  btnCopyWebflow.disabled = !loadedXscp;
}

async function loadXscpFile() {
  try {
    const res = await fetch(XSCP_URL.href, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const v = validateCopyPayload(text);
    if (!v.valid) throw new Error(v.error);
    loadedXscp = text.trim();
    setWebflowStatus("JSON prêt. Clique sur « Copier pour Webflow » puis colle dans le Designer.", "ok");
  } catch (err) {
    loadedXscp = "";
    const msg = err instanceof Error ? err.message : String(err);
    setWebflowStatus(`Impossible de charger webflow-structure.xscp.json (${msg}).`, "err");
  }
  updateWebflowButtonState();
}

btnCopyWebflow.addEventListener("click", () => {
  if (!loadedXscp) {
    setWebflowStatus("JSON absent ou invalide.", "err");
    return;
  }
  const v = validateCopyPayload(loadedXscp);
  if (!v.valid) {
    setWebflowStatus(`JSON invalide : ${v.error}`, "err");
    return;
  }
  try {
    writeClipboardXscp(loadedXscp);
    setWebflowStatus("Copié. Colle sur le canvas Webflow (Cmd/Ctrl+V).", "ok");
  } catch (err) {
    setWebflowStatus(err instanceof Error ? err.message : String(err), "err");
  }
});

for (const [id, text] of Object.entries({
  "snippet-head-global": SNIPPETS.headGlobal,
  "snippet-body-global": SNIPPETS.bodyGlobal,
  "snippet-html": SNIPPETS.html,
  "snippet-css": SNIPPETS.css,
})) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

document.querySelectorAll("[data-copy-target]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-copy-target");
    const pre = document.getElementById(id);
    const t = pre?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(t);
      btn.textContent = "Copie";
      setTimeout(() => {
        btn.textContent = "Copier";
      }, 1200);
    } catch {
      btn.textContent = "Erreur";
      setTimeout(() => {
        btn.textContent = "Copier";
      }, 1200);
    }
  });
});

document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");
    document.querySelectorAll("[data-tab]").forEach((b) => {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const show = panel.getAttribute("data-panel") === tab;
      panel.toggleAttribute("hidden", !show);
    });
  });
});

loadXscpFile();
updateWebflowButtonState();

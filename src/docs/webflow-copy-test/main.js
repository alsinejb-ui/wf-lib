import {
  writeClipboardXscp,
  validateCopyPayload,
  getXscpFromPasteEvent,
} from "webflow-clipboard";
import sampleMinimal from "./sample-minimal.xscp.json";

const statusEl = document.getElementById("status");
const pasteArea = document.getElementById("paste-area");
const btnCopyFromField = document.getElementById("btn-copy-from-field");
const btnCopySample = document.getElementById("btn-copy-sample");
const validationEl = document.getElementById("validation");

function setStatus(message, kind = "info") {
  statusEl.textContent = message;
  statusEl.dataset.kind = kind;
}

function showValidation(text) {
  const result = validateCopyPayload(text);
  if (result.valid) {
    validationEl.textContent = `JSON valide (${result.length} caractères).`;
    validationEl.dataset.kind = "ok";
  } else {
    validationEl.textContent = `JSON invalide : ${result.error}`;
    validationEl.dataset.kind = "err";
  }
  return result.valid;
}

pasteArea.addEventListener("paste", (e) => {
  const xscp = getXscpFromPasteEvent(e);
  if (!xscp) return;
  e.preventDefault();
  pasteArea.value = xscp;
  showValidation(xscp);
  setStatus(
    "Presse-papiers Webflow détecté. Collez ce texte ailleurs ou utilisez « Copier pour le Designer ».",
    "ok"
  );
});

pasteArea.addEventListener("input", () => {
  const v = pasteArea.value.trim();
  if (!v) {
    validationEl.textContent = "";
    return;
  }
  showValidation(v);
});

btnCopyFromField.addEventListener("click", () => {
  const raw = pasteArea.value.trim();
  if (!raw) {
    setStatus("Collez d’abord du JSON Webflow dans la zone.", "err");
    return;
  }
  if (!showValidation(raw)) {
    setStatus("Corrigez le JSON avant de copier.", "err");
    return;
  }
  try {
    writeClipboardXscp(raw);
    setStatus(
      "Copié. Ouvrez le Webflow Designer et faites Cmd+V (Mac) ou Ctrl+V (Windows) sur le canvas.",
      "ok"
    );
  } catch (err) {
    setStatus(err instanceof Error ? err.message : String(err), "err");
  }
});

btnCopySample.addEventListener("click", () => {
  const raw = JSON.stringify(sampleMinimal);
  pasteArea.value = raw;
  showValidation(raw);
  try {
    writeClipboardXscp(raw);
    setStatus(
      "Échantillon minimal copié. Si le Designer refuse le collage, c’est normal : utilisez « Coller depuis Webflow » ci-dessus avec un vrai export.",
      "info"
    );
  } catch (err) {
    setStatus(err instanceof Error ? err.message : String(err), "err");
  }
});

setStatus(
  "Collez depuis le Designer (Étape A) ou testez l’échantillon (souvent refusé par Webflow s’il est incomplet).",
  "info"
);

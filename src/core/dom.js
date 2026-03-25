export function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

export function readNumberDataset(element, key, fallback) {
  const raw = element.dataset[key];

  if (raw === undefined || raw === "") {
    return fallback;
  }

  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

export function readStringDataset(element, key, fallback) {
  const raw = element.dataset[key];
  return raw && raw.trim() !== "" ? raw.trim() : fallback;
}

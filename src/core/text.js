export function splitWords(titleElement, wordClass = "wf-lib-word") {
  const text = titleElement.textContent || "";
  const words = text.trim().split(/\s+/).filter(Boolean);

  titleElement.textContent = "";

  const createdWords = [];
  const fragment = document.createDocumentFragment();

  words.forEach((word, index) => {
    const mask = document.createElement("span");
    mask.className = "wf-lib-word-mask";

    const inner = document.createElement("span");
    inner.className = wordClass;
    inner.textContent = word;

    mask.appendChild(inner);
    fragment.appendChild(mask);

    if (index < words.length - 1) {
      fragment.appendChild(document.createTextNode(" "));
    }

    createdWords.push(inner);
  });

  titleElement.appendChild(fragment);
  return createdWords;
}

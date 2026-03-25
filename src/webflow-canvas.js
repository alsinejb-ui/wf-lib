/**
 * Environnements Webflow (site publié, staging .webflow.io, preview canvas).
 * Aligné sur la doc officielle « Supporting custom code in preview mode ».
 *
 * @see https://developers.webflow.com/data/docs/custom-code-preview-mode
 * @see https://help.webflow.com/hc/en-us/articles/40748357886227-Supporting-external-resources-in-previews-of-custom-code
 */

function getHostname() {
  if (typeof window === "undefined" || !window.location) return "";
  return window.location.hostname ?? "";
}

/** true si la page tourne sur le sous-domaine preview / commentaire ({shortName}.canvas.webflow.com). */
export function isWebflowCanvasPreview(hostname = getHostname()) {
  return Boolean(hostname && hostname.includes("canvas.webflow.com"));
}

/**
 * true si le hostname ressemble à un hébergement Webflow (publié ou preview).
 * Utile si un composant doit adapter son comportement selon l’origine.
 */
export function isWebflowHostedDomain(hostname = getHostname()) {
  if (!hostname) return false;
  return (
    hostname.endsWith(".webflow.io") ||
    hostname.endsWith(".canvas.webflow.com") ||
    hostname === "webflow.com" ||
    hostname.endsWith(".webflow.com")
  );
}

/**
 * Pour les scripts qui valident une origine (API, postMessage, etc.) :
 * inclure .webflow.io et .canvas.webflow.com comme recommandé par Webflow.
 */
export function isWebflowAllowedOrigin(origin) {
  if (!origin || typeof origin !== "string") return false;
  return (
    origin.includes(".webflow.io") || origin.includes(".canvas.webflow.com")
  );
}

import DOMPurify from "dompurify";

const ALLOWED_TAGS = ["p", "br", "ul", "ol", "li", "h2", "h3", "h4", "strong", "em", "a"];
const ALLOWED_ATTR = ["href", "title"];

let hooksConfigured = false;

function configureHooks() {
  if (hooksConfigured || typeof window === "undefined") return;
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
      const href = node.getAttribute("href") || "";
      if (/^\s*javascript:/i.test(href)) {
        node.removeAttribute("href");
      }
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
  hooksConfigured = true;
}

/**
 * Sanitize Lodgify HTML for safe rendering. Visual structure preserved.
 * @param {string} html
 * @returns {string}
 */
export function sanitizePropertyHtml(html) {
  if (!html) return "";
  configureHooks();
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });
}

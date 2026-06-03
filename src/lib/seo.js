import { stripHtml, truncateDescription } from "./stripHtml";

const SITE_ORIGIN = "https://www.holidayhomehost.ae";
const SITE_NAME = "Holiday Home Host";

export function toAbsoluteUrl(path) {
  if (!path) return `${SITE_ORIGIN}/image-3.webp`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPropertySeo(property) {
  const id = property.lodgifyId ?? property.id;
  const plainDescription = stripHtml(
    property.shortDescription ||
      property.fullData?.description ||
      property.title,
  );
  const description = truncateDescription(plainDescription, 160);
  const title = `${property.title} | ${SITE_NAME}`;
  const canonical = `${SITE_ORIGIN}/property/${id}`;
  const image = toAbsoluteUrl(property.image);

  return { title, description, canonical, image };
}

function ensureMeta(selector, createFn) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = createFn();
    document.head.appendChild(tag);
  }
  return tag;
}

function setMeta(name, content, property = false) {
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;
  const tag = ensureMeta(selector, () => {
    const el = document.createElement("meta");
    el.setAttribute(property ? "property" : "name", name);
    return el;
  });
  tag.setAttribute("content", content);
}

export function applySeo({ title, description, canonical, image }) {
  document.title = title;
  setMeta("description", description);
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:url", canonical, true);
  setMeta("og:image", image, true);
  setMeta("og:type", "website", true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);

  const canonicalTag = ensureMeta('link[rel="canonical"]', () => {
    const el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    return el;
  });
  canonicalTag.setAttribute("href", canonical);
}

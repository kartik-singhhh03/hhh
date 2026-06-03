import {
  staticPropertyAssetsByLodgifyId,
  slugToLodgifyId,
} from "./staticPropertyAssets.mjs";

/**
 * @typedef {Object} LodgifyApiProperty
 * @property {number} id
 * @property {string} name
 * @property {string} [internal_name]
 * @property {string} [description]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [image_url]
 * @property {number} [rating]
 * @property {number} [min_price]
 * @property {number} [max_price]
 * @property {string} [currency_code]
 * @property {Array<{ id: number, name: string }>} [rooms]
 * @property {boolean} [is_active]
 */

/**
 * @typedef {Object} StaticPropertyAssets
 * @property {string} badge
 * @property {string} image
 * @property {string} guests
 * @property {string} bedrooms
 * @property {string} beds
 * @property {string} bathrooms
 * @property {string} area
 * @property {string} [slug]
 * @property {Object} fullData
 */

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDisplayPrice(currencyCode, minPrice, maxPrice) {
  const currency = currencyCode || "AED";
  const min = Math.round(Number(minPrice) || 0);
  if (!min) return `${currency} —`;
  if (maxPrice && Math.round(Number(maxPrice)) !== min) {
    return `${currency} ${min}`;
  }
  return `${currency} ${min}`;
}

function buildLocationLine(item) {
  const parts = [item.city, item.state, item.country].filter(Boolean);
  if (parts.length) return parts.join(", ");
  return item.address || "";
}

function buildMapsUrl(item) {
  if (item.latitude && item.longitude) {
    return `https://maps.google.com/?q=${item.latitude},${item.longitude}`;
  }
  const query = encodeURIComponent(
    [item.address, item.city, item.country].filter(Boolean).join(", "),
  );
  return `https://maps.google.com/?q=${query}`;
}

function normalizeImageUrl(imageUrl) {
  if (!imageUrl) return "";
  if (imageUrl.startsWith("//")) return `https:${imageUrl}`;
  return imageUrl;
}

function deriveBadge(item, staticAssets) {
  if (staticAssets?.badge) return staticAssets.badge;
  const city = item.city || item.state || "";
  return city ? `${city}` : "Holiday Home";
}

/**
 * @param {LodgifyApiProperty} item
 * @returns {import('../../src/data/featuredProperties.js').FeaturedPropertyShape | null}
 */
export function mergeLodgifyProperty(item) {
  if (!item?.id) return null;
  if (item.is_active === false) return null;

  const staticAssets = staticPropertyAssetsByLodgifyId[item.id] ?? null;
  const staticFull = staticAssets?.fullData ?? {};
  const coverImage =
    staticAssets?.image ||
    normalizeImageUrl(item.image_url) ||
    "/image-3.webp";

  const galleryImages =
    staticFull.images?.length > 0
      ? staticFull.images
      : item.image_url
        ? [normalizeImageUrl(item.image_url)]
        : [coverImage];

  const locationLine = buildLocationLine(item);
  const address =
    item.address ||
    [item.city, item.state, item.country].filter(Boolean).join(", ");

  const descriptionHtml = item.description || "";
  const plainDescription = stripHtml(descriptionHtml);
  const shortDescription =
    plainDescription.length > 280
      ? `${plainDescription.slice(0, 277).trim()}…`
      : plainDescription;

  const price = formatDisplayPrice(
    item.currency_code,
    item.min_price,
    item.max_price,
  );

  return {
    id: String(item.id),
    lodgifyId: item.id,
    slug: staticAssets?.slug || String(item.id),
    title: item.name || "Holiday Home",
    badge: deriveBadge(item, staticAssets),
    location: locationLine,
    guests: staticAssets?.guests || "—",
    bedrooms: staticAssets?.bedrooms || "—",
    beds: staticAssets?.beds || staticAssets?.bedrooms || "—",
    bathrooms: staticAssets?.bathrooms || "—",
    area: staticAssets?.area || "—",
    price,
    priceLabel: "per night",
    rating: item.rating ?? 0,
    minPrice: item.min_price,
    maxPrice: item.max_price,
    currencyCode: item.currency_code || "AED",
    shortDescription,
    image: coverImage,
    buttonText: "Check Availability",
    roomTypeId: item.rooms?.[0]?.id ?? null,
    fullData: {
      ...staticFull,
      images: galleryImages,
      description: descriptionHtml,
      descriptionIsHtml: Boolean(descriptionHtml.includes("<")),
      amenities: staticFull.amenities || {},
      guestAccess: staticFull.guestAccess || "",
      houseRules: staticFull.houseRules || {
        checkIn: "3:00 PM",
        checkOut: "11:00 AM",
      },
      policyNotes: staticFull.policyNotes,
      location: {
        ...staticFull.location,
        address,
        mapsUrl: buildMapsUrl(item),
      },
      host: staticFull.host || {
        name: "Holiday Home Host",
        email: "reservations@holidayhomehost.ae",
        phone: "+971501522647",
        website: "holidayhomehost.ae",
      },
      reviews: staticFull.reviews,
      showAdvantage: staticFull.showAdvantage,
    },
  };
}

/**
 * @param {LodgifyApiProperty[]} items
 */
export function mergeLodgifyProperties(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map(mergeLodgifyProperty)
    .filter(Boolean)
    .sort((a, b) => a.lodgifyId - b.lodgifyId);
}

export function resolvePropertyRouteId(param) {
  if (!param) return null;
  if (/^\d+$/.test(param)) return Number(param);
  return slugToLodgifyId[param] ?? null;
}

export { slugToLodgifyId };

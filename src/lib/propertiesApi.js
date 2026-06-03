import { featuredProperties as staticFallbackProperties } from "../data/featuredProperties";

const PROPERTIES_ENDPOINT = "/api/properties";

/**
 * @returns {Promise<{ properties: Array, source: string, warning?: string }>}
 */
export async function fetchPropertiesFromApi() {
  try {
    const response = await fetch(PROPERTIES_ENDPOINT, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Properties API ${response.status}`);
    }

    const payload = await response.json();
    if (Array.isArray(payload?.properties) && payload.properties.length > 0) {
      return {
        properties: payload.properties,
        source: payload.source || "lodgify",
        warning: payload.warning,
      };
    }

    throw new Error("Empty properties response");
  } catch {
    return {
      properties: staticFallbackProperties,
      source: "fallback",
    };
  }
}

export function getPropertyByLodgifyId(properties, lodgifyId) {
  if (!lodgifyId || !Array.isArray(properties)) return null;
  return properties.find((p) => String(p.lodgifyId) === String(lodgifyId)) ?? null;
}

export function getPropertyRoutePath(property) {
  const id = property?.lodgifyId ?? property?.id;
  return `/property/${id}`;
}

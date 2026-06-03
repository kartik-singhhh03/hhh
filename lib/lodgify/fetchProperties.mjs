import { mergeLodgifyProperties } from "./mergeProperties.mjs";

const LODGIFY_PROPERTIES_URL = "https://api.lodgify.com/v2/properties";

/**
 * @param {string} apiKey
 * @returns {Promise<{ ok: true, properties: ReturnType<typeof mergeLodgifyProperties>, source: 'lodgify' } | { ok: false, error: string }>}
 */
export async function fetchLodgifyProperties(apiKey) {
  if (!apiKey) {
    return { ok: false, error: "Missing LODGIFY_API_KEY" };
  }

  const response = await fetch(LODGIFY_PROPERTIES_URL, {
    headers: {
      "X-ApiKey": apiKey,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return {
      ok: false,
      error: `Lodgify API ${response.status}: ${response.statusText}`,
    };
  }

  const payload = await response.json();
  const items = payload?.items ?? [];
  const properties = mergeLodgifyProperties(items);

  return { ok: true, properties, source: "lodgify" };
}

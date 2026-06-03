import { fetchLodgifyProperties } from "../lib/lodgify/fetchProperties.mjs";
import { getFallbackProperties } from "../lib/lodgify/fallbackProperties.mjs";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");

  const apiKey = process.env.LODGIFY_API_KEY;
  const result = await fetchLodgifyProperties(apiKey);

  if (result.ok && result.properties.length > 0) {
    return res.status(200).json({
      properties: result.properties,
      source: result.source,
    });
  }

  const fallback = getFallbackProperties();
  return res.status(200).json({
    properties: fallback,
    source: "fallback",
    warning: result.ok ? "No active properties returned" : result.error,
  });
}

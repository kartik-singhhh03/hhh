import { loadEnv } from "vite";
import { fetchLodgifyProperties } from "./lib/lodgify/fetchProperties.mjs";
import { getFallbackProperties } from "./lib/lodgify/fallbackProperties.mjs";

export function lodgifyApiMiddleware() {
  return {
    name: "hhh-lodgify-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/properties") {
          next();
          return;
        }

        if (req.method !== "GET") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const env = loadEnv(server.config.mode, process.cwd(), "");
        const apiKey = env.LODGIFY_API_KEY || process.env.LODGIFY_API_KEY;
        const result = await fetchLodgifyProperties(apiKey);

        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "public, max-age=300");

        if (result.ok && result.properties.length > 0) {
          res.end(
            JSON.stringify({
              properties: result.properties,
              source: result.source,
            }),
          );
          return;
        }

        res.end(
          JSON.stringify({
            properties: getFallbackProperties(),
            source: "fallback",
            warning: result.ok ? "No active properties returned" : result.error,
          }),
        );
      });
    },
  };
}

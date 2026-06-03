import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { lodgifyApiMiddleware } from "./vite.lodgifyApi.mjs";

const reactRoutes = new Set([
  "/",
  "/about",
  "/property-owners",
  "/services",
  "/commission",
  "/how-it-works",
  "/roi-calculator",
  "/partnerships",
  "/partnership-agreements",
  "/real-estate-agencies",
]);

function spaRouteFallback() {
  const rewrite = (req) => {
    const rawUrl = req.url?.split("?")[0].replace(/\/$/, "") || "/";

    if (reactRoutes.has(rawUrl)) {
      req.url = "/";
    }
  };

  return {
    name: "hhh-spa-route-fallback",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [lodgifyApiMiddleware(), spaRouteFallback(), react()],

  build: {
    target: "esnext",
    minify: "esbuild",
    // Raise the chunk-size warning threshold to 600kb
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    reportCompressedSize: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/dompurify")) {
            return "dompurify";
          }
          if (
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react/") ||
            id.includes("node_modules/scheduler")
          ) {
            return "react-vendor";
          }
          if (
            id.includes("node_modules/react-router") ||
            id.includes("node_modules/@remix-run/router")
          ) {
            return "router";
          }
        },
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },

    // No inline source-maps in production (smaller files)
    sourcemap: false,
  },

  server: {
    headers: {
      "Cache-Control": "public, max-age=0",
    },
  },
});

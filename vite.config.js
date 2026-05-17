import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const reactRoutes = new Set([
  '/',
  '/about',
  '/property-owners',
  '/services',
  '/commission',
  '/how-it-works',
  '/roi-calculator',
  '/partnerships',
  '/partnership-agreements',
  '/real-estate-agencies',
])

function spaRouteFallback() {
  const rewrite = (req) => {
    const rawUrl = req.url?.split('?')[0].replace(/\/$/, '') || '/'

    if (reactRoutes.has(rawUrl)) {
      req.url = '/'
    }
  }

  return {
    name: 'hhh-spa-route-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [spaRouteFallback(), react()],

  build: {
    // Raise the chunk-size warning threshold to 600kb
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split large dependencies into separate cached chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router':       ['react-router-dom'],
        },
      },
    },

    // No inline source-maps in production (smaller files)
    sourcemap: false,
  },
})

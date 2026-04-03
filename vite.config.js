import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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

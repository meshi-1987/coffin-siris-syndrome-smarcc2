import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so assets work on GitHub Pages regardless of repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs'
  }
})

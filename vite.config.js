/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(path.join(__dirname, 'src')),
    }
  },
  server: {
    host: true
  }
})

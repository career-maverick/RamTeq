import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Default base path for development
  }

  if (command === 'build') {
    // Apply base path only for production builds (GitHub Pages)
    // Match this to your GitHub repository name!
    config.base = '/RamTeq/'
  }

  return config
})

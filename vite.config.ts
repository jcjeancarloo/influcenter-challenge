import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': "/src/components",
      '@services': "/src/services",
      '@contexts': "/src/contexts",
      '@hooks': "/src/hooks",
      '@shared': "/src/shared",
      '@assets': "/src/assets",
      '@i18n': "/src/i18n",
    },
  },
  define: {global: 'window'}
})

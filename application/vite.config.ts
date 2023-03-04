import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
})

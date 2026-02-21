import build from '@hono/vite-build'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins: [
    build({
      entry: 'src/index.tsx'
    }),
    devServer({
      entry: 'src/index.tsx'
    })
  ],
  build: {
    outDir: 'dist'
  }
})

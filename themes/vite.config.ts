import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import linebreaks from 'vite-plugin-linebreaks'

export default defineConfig({
  build: {
    lib: {
      entry: {
        light: 'src/light.scss',
        dark: 'src/dark.scss',
      },
      formats: ['es'],
    },
    cssMinify: false,
    cssCodeSplit: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/common' as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    linebreaks(),
  ],
})

import { defineConfig } from 'vite'

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
        additionalData: ``,
      },
    },
  },
})

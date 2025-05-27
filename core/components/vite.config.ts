import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      name: 'WizardUI',
      formats: ['es', 'cjs', 'iife'],
      entry: {
        index: 'index.ts',
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    chunkSizeWarningLimit: 10000,
  },
  plugins: [
    vue(),
    dts({
      include: [
        './',
      ],
      exclude: [
        'node_modules',
        'dist',
        'vite.config.ts',
      ],
    }),
  ],
})

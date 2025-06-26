import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      name: 'WizardUI',
      formats: ['es', 'cjs', 'iife'],
      entry: {
        index: './components/index.ts',
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
    unocss(),
    dts({
      include: [
        './components/**/*.{vue,ts}',
      ],
    }),
  ],
  resolve: {
    alias: {
      'wizard-ui': fileURLToPath(new URL('./components/index.ts', import.meta.url)),
    },
  },
})

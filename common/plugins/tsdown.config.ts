import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  external: [
    'vite',
    'ts-morph',
    'postcss',
  ],
  clean: true,
  dts: true,
  platform: 'node',
  format: 'esm',
  target: 'es2022',
})

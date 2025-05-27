import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  external: ['unocss'],
  clean: true,
  dts: true,
  platform: 'node',
})

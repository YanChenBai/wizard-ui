import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [

    ],
    include: [
      'common/**/*.test.ts',
      'docs/**/*.test.ts',
      'components/**/*.test.ts',
      'unocss/**/*.test.ts',
      'themes/**/*.test.ts',
      'playground/**/*.test.ts',
    ],
  },
})

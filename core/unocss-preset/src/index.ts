import type { Preset } from 'unocss'
import { definePreset } from 'unocss'

export default definePreset((): Preset => {
  return {
    name: '@wizard-ui/preset',
    theme: {
      colors: {
        primary: 'var(--light-primary)',
      },
    },
  }
})

import type { Preset } from 'unocss'
import { definePreset, presetAttributify, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

export default definePreset((): Preset => {
  return {
    name: '@wizard-ui/preset',
    theme: {
      colors: {
        primary: 'var(--light-primary)',
      },
    },
    presets: [
      presetWind3(),
      presetAttributify(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
})

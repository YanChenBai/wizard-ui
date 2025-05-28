import { colors } from '@wizard-ui/themes/colors'
import {
  definePreset,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import rules from './rules'
import shortcuts from './shortcuts'

export default definePreset(() => {
  return {
    name: '@wizard-ui/preset',
    layers: {
      base: 10,
      components: 20,
      utils: 30,
    },
    theme: {
      colors,
    },
    presets: [
      rules(),
      presetWind3(),
      presetAttributify(),
      shortcuts(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
})

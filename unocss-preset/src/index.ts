import { colors } from '@wizard-ui/themes/colors'
import { vars } from '@wizard-ui/themes/vars'
import {
  definePreset,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { joinAll } from './utils/array'

export const compSize = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
export type CompSize = typeof compSize[number]
export const compSizeJoined = joinAll(compSize)

export const compType = ['primary', 'info', 'success', 'warning', 'error'] as const
export type CompType = typeof compType[number]
export const compTypeJoined = joinAll(compType)

export default definePreset(() => {
  return {
    name: '@wizard-ui/preset',
    layers: {
      default: 10,
      components: 20,
      utils: 30,
    },
    theme: {
      colors,
    },
    presets: [
      presetWind3(),
      presetAttributify(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    shortcuts: [
      ['btn', 'comp-size-md'],
      [
        new RegExp(`^btn-${compTypeJoined}$`),
        ([,val]) => `bg-${val} hover:bg-${val}-hover`,
      ],
    ],
    rules: [
      [
        new RegExp(`^comp-size-${compSizeJoined}$`),
        ([,val]) => {
          const size = val as CompSize
          const px = vars[`comp-padding-lr-${size}`]
          const py = vars[`comp-padding-tb-${size}`]

          return {
            padding: `${py} ${px}`,
          }
        },
        {
          layer: 'components',
        },
      ],
    ],
    autocomplete: {
      templates: [
        'comp-size-<comp-size>',
        'btn-<state-type>',
      ],
      shorthands: {
        'comp-size': `${compSizeJoined}`,
        'state-type': `${compTypeJoined}`,
      },
    },
  }
})

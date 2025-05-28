import { camelCase } from 'lodash-es'

const COLOR_TYPE = ['primary', 'info', 'success', 'warning', 'error'] as const
const COLOR_STATE = ['DEFAULT', 'hover', 'pressed', 'suppl'] as const

type ColorType =  (typeof COLOR_TYPE)[number]
type ColorState = (typeof COLOR_STATE)[number]


type Colors = Record<ColorType, Record<ColorState, string>>

export function getUnoColors(obj: Record<string, string>, types = [...COLOR_TYPE]) {
  const colors = {} as Colors

  for (const type of types) {
    for (const state of COLOR_STATE) {
      const key = camelCase(`${type}-color-${state === 'DEFAULT' ? '' : state}`)
      
      if (!obj[key])  continue
      if(!colors[type as ColorType]) colors[type as ColorType] = {} as Record<ColorState, string>
      colors[type as ColorType][state as ColorState] = obj[key]
    }
  }

  return colors
}

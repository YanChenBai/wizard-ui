import { describe, expect, it } from 'vitest'
import { getUnoColors } from '../src/get-uno-colors'

describe('generate unocss colors', () => {
  const cssExample = {
    "primaryColor": "var(--w-primary-color)",
    "primaryColorHover": "var(--w-primary-color-hover)",
    "primaryColorPressed": "var(--w-primary-color-pressed)",
    "primaryColorSuppl": "var(--w-primary-color-suppl)",
    "infoColor": "var(--w-info-color)",
    "infoColorHover": "var(--w-info-color-hover)",
    "infoColorPressed": "var(--w-info-color-pressed)",
    "infoColorSuppl": "var(--w-info-color-suppl)",
  }

  const colors = {
  primary: {
    DEFAULT: 'var(--w-primary-color)',
    hover: 'var(--w-primary-color-hover)',
    pressed: 'var(--w-primary-color-pressed)',
    suppl: 'var(--w-primary-color-suppl)'
  },
  info: {
    DEFAULT: 'var(--w-info-color)',
    hover: 'var(--w-info-color-hover)',
    pressed: 'var(--w-info-color-pressed)',
    suppl: 'var(--w-info-color-suppl)'
  }
}

  it('should get unocss colors', () => {
    expect(getUnoColors(cssExample, ['primary', 'info'])).toEqual(colors)
  })
})

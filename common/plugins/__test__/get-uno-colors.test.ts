import { describe, expect, it } from 'vitest'
import { getUnoColors } from '../src/get-uno-colors'

describe('generate unocss colors', () => {
  const cssExample = {
    'primary-color': 'var(--w-primary-color)',
    'primary-color-hover': 'var(--w-primary-color-hover)',
    'primary-color-pressed': 'var(--w-primary-color-pressed)',
    'primary-color-suppl': 'var(--w-primary-color-suppl)',
    'info-color': 'var(--w-info-color)',
    'info-color-hover': 'var(--w-info-color-hover)',
    'info-color-pressed': 'var(--w-info-color-pressed)',
    'info-color-suppl': 'var(--w-info-color-suppl)',
  }

  const colors = {
    primary: {
      DEFAULT: 'var(--w-primary-color)',
      hover: 'var(--w-primary-color-hover)',
      pressed: 'var(--w-primary-color-pressed)',
      suppl: 'var(--w-primary-color-suppl)',
    },
    info: {
      DEFAULT: 'var(--w-info-color)',
      hover: 'var(--w-info-color-hover)',
      pressed: 'var(--w-info-color-pressed)',
      suppl: 'var(--w-info-color-suppl)',
    },
  }

  it('should get unocss colors', () => {
    expect(getUnoColors(cssExample, ['primary', 'info'])).toEqual(colors)
  })
})

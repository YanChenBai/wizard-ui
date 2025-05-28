import { definePreset } from 'unocss'

export default definePreset(() => ({
  name: '@wizard-ui/preset-shortcuts',
  shortcuts: {
    'bg-base': 'bg-white dark:bg-black',
    'text-base': 'text-black dark:text-white',
  },
}))

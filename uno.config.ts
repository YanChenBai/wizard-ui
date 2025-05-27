import wizardUIPreset from '@wizard-ui/preset'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  envMode: 'build',
  cli: {
    entry: {
      patterns: [
        'components/**/*.ts',
        'components/**/*.vue',
        '!**/*.d.ts',
      ],
      outFile: './components/uno.css',
    },
  },
  presets: [
    wizardUIPreset(),
  ],
})

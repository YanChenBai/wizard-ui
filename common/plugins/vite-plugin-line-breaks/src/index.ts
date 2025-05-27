import type { Plugin } from 'vite'
import { replaceLinebreaks } from './replace-linebreaks'

export default function (): Plugin {
  return {
    name: 'vite-plugin-linebreaks',
    enforce: 'post',
    apply: 'build',

    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'asset' && typeof file.source === 'string') {
          file.source = replaceLinebreaks(file.source)
        }
      }
    },
  }
}

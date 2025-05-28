import type { Plugin } from 'vite'

export function replaceLinebreaks(input: string): string {
  const pattern = /[ \t]*\/\*+\s*@line-break(?:\s+(\d+))?\s*\*\/[ \t]*/g

  const result = input.replace(pattern, (_, countStr) => {
    const count = Math.max(Number(countStr || '1'), 1) - 1
    return '\n'.repeat(count)
  })

  return result
}

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

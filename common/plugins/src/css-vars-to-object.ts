import type { Plugin } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'
import { camelCase } from 'lodash-es'
import postcss from 'postcss'
import { getUnoColors } from './get-uno-colors'
import { objToCode } from './obj-to-code'

interface SaveJsonFile {
  code: string
  dts: string
  name: string
}

export async function saveJsonFiles(dir: string, files: SaveJsonFile[]) {
  await Promise.all(
    files.map(file => [
      fs.writeFile(path.join(dir, `${file.name}.js`), file.code),
      fs.writeFile(path.join(dir, `${file.name}.d.ts`), file.dts),
    ]).flat(),
  )
}

interface CssVarToObjectOptions {
  css: string
  selector: string
  cssVarPrefix?: string
  fileName?: string
  outDir?: string
  exportName?: string
}

export function cssVarsToObject({
  css,
  selector,
  cssVarPrefix = '--w-',
}: CssVarToObjectOptions) {
  const result = postcss.parse(css)

  const cssObj: Record<string, string> = {}

  // 找到指定选择器的css变量与注释
  result.nodes.forEach((node) => {
    if (node.type === 'rule' && node.selector === selector) {
      node.nodes.forEach((node) => {
        if (node.type === 'decl')
          cssObj[node.prop.replace(cssVarPrefix, '')] = `var(${node.prop})`
      })
    }
  })

  return cssObj
}

interface Options {
  targetFile: string
  selector?: string
}

export default function (options: Options): Plugin {
  const { targetFile, selector = ':root' } = options
  let outDir = ''

  return {
    name: 'vite-cssvars-to-object',
    enforce: 'post',
    apply: 'build',

    configResolved(config) {
      outDir = config.build.outDir
    },

    async generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.fileName !== targetFile)
          continue

        if (file.type === 'asset' && typeof file.source === 'string') {
          // eslint-disable-next-line no-console
          console.log('\ngenerate css vars to object.')

          const vars = cssVarsToObject({
            css: file.source,
            selector,
          })

          const colors = getUnoColors(vars)

          await saveJsonFiles(outDir, [
            { name: 'vars', ...objToCode(vars, 'vars') },
            { name: 'colors', ...objToCode(colors, 'colors') },
          ])

          // eslint-disable-next-line no-console
          console.log('generate css vars to object done.')
        }
      }
    },
  }
}

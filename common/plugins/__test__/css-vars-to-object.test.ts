import { describe, expect, it } from 'vitest'
import { cssVarsToObject } from '../src/css-vars-to-object'
import { getUnoColors } from '../src/get-uno-colors'
import { objToCode } from '../src/obj-to-code'

describe('css vars to Json', () => {
  const cssExample = `:root {
  --w-size-1: 1;
  /* ------ size ------ */
  --w-btn-size-2: 2;
}
`
  const objExample = {
    size1: 'var(--w-size-1)',
    btnSize2: 'var(--w-btn-size-2)',
  }

  it('should generate js and d.ts files', () => {
    const obj = cssVarsToObject({
      css: cssExample,
      selector: ':root',
      exportName: 'keys',
    })

    expect(obj).toEqual(objExample)
  })
})

describe('object to code', () => {
  const example = {
    size1: '1',
    btnSize2: '2',
  }

  const codeExample = `export const vars = {
    "size1": "1",
    "btnSize2": "2"
};
`

  const dtsExample = `export declare const vars: {
    readonly size1: \"1\";
    readonly btnSize2: \"2\";
};
`

  it('should generate js and d.ts files', () => {
    expect(objToCode(example, 'vars')).toEqual({
      code: codeExample,
      dts: dtsExample,
    })
  })
})

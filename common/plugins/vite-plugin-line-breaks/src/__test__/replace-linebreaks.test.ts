import { describe, expect, it } from 'vitest'
import { replaceLinebreaks } from '../replace-linebreaks'

const demo = `
.name1 {
  /** @line-break */
}

.name2 {
  /** @line-break 0 */
}

.name3 {
  /** @line-break 2 */
}

.name4 {
  /* @line-break 2 */
}
`

const answer = `
.name1 {

}

.name2 {

}

.name3 {


}

.name4 {


}
`

describe('vite-plugin-linebreaks', () => {
  it('replace linebreaks', () => {
    expect(replaceLinebreaks(demo)).toBe(answer)
  })
})

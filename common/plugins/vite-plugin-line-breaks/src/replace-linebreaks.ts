export function replaceLinebreaks(input: string): string {
  const pattern = /[ \t]*\/\*+\s*@line-break(?:\s+(\d+))?\s*\*\/[ \t]*/g

  const result = input.replace(pattern, (_, countStr) => {
    const count = Math.max(Number(countStr || '1'), 1) - 1
    return '\n'.repeat(count)
  })

  return result
}

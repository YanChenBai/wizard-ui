export function joinAll(arr: ReadonlyArray<string> | string[], separator = '|') {
  return `(${arr.join(separator)})`
}

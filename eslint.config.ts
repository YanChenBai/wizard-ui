import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  stylistic: true,
  ignores: [
    '**/.github/**',
  ],
})

/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
  ],
  rules: {
    'selector-class-pattern': null,
  },
  ignoreFiles: [
    'node_modules/**',
  ],
}

module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config'
  ],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'object-curly-newline': [
      'error',
      {
        'consistent': true
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',

    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0,
  },
  'overrides': [
    {
      'files': ['*.ts', '*.vue'],
      'rules': {
        'no-undef': 'off'
      }
    },
    {
      'files': ['*.ts'],
      'rules': {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
}

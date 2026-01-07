import { defineConfig } from 'eslint/config'
import vitest from '@vitest/eslint-plugin'
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default defineConfig([
  await createConfigForNuxt({
    features: {
      standalone: true,
      import: true,
      stylistic: {
        indent: 2,
        quotes: 'single',
        commaDangle: 'never',
        braceStyle: '1tbs',
        quoteProps: 'as-needed'
      },
      typescript: true
    }
  }),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/no-v-html': 0,
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/object-curly-newline': ['error', {
        consistent: true
      }]
    }
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multiline-html-element-content-newline': ['error', {
        ignores: [
          'PurchaserLink',
          'NuxtLink',
          'p',
          'span',
          'div',
          'a'
        ],
        allowEmptyLines: false
      }],
      'vue/singleline-html-element-content-newline': ['off'],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 5
        },
        multiline: {
          max: 1
        }
      }]
    }
  },
  {
    files: ['**/*.spec.*'],
    plugins: {
      vitest
    },
    rules: {
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/consistent-vitest-vi': ['error'],
      'vitest/expect-expect': ['error'],
      'vitest/no-commented-out-tests': ['error'],
      'vitest/no-conditional-expect': ['error'],
      'vitest/no-conditional-in-test': ['error'],
      'vitest/no-conditional-tests': ['error'],
      'vitest/no-duplicate-hooks': ['error'],
      'vitest/no-identical-title': ['error'],
      'vitest/no-import-node-test': ['error'],
      'vitest/no-standalone-expect': ['error'],
      'vitest/no-test-return-statement': ['error'],
      'vitest/padding-around-all': ['error'],
      'vitest/prefer-called-once': ['error'],
      'vitest/prefer-called-with': ['error'],
      'vitest/prefer-comparison-matcher': ['error'],
      'vitest/prefer-each': ['error'],
      'vitest/prefer-equality-matcher': ['error'],
      'vitest/prefer-expect-resolves': ['error'],
      'vitest/prefer-hooks-in-order': ['error'],
      'vitest/prefer-hooks-on-top': ['error'],
      'vitest/prefer-importing-vitest-globals': ['error'],
      'vitest/prefer-mock-promise-shorthand': ['error'],
      'vitest/prefer-to-be-falsy': ['error'],
      'vitest/prefer-to-be-truthy': ['error'],
      'vitest/prefer-to-contain': ['error'],
      'vitest/prefer-to-have-length': ['error'],
      'vitest/prefer-todo': ['error'],
      'vitest/prefer-vi-mocked': ['error'],
      'vitest/require-to-throw-message': ['error'],
      'vitest/valid-describe-callback': ['error'],
      'vitest/valid-expect': ['error'],
      'vitest/valid-expect-in-promise': ['error']
    }
  }
])

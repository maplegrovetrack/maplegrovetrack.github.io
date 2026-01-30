import { defineConfig } from 'eslint/config'
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
  }
])

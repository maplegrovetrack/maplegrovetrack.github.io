import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '~': resolve(__dirname, '.')
    }
  },
  test: {
    clearMocks: true
  }
})

import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

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

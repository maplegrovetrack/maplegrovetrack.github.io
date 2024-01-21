import { defineNuxtConfig } from 'nuxt/config'

const isProduction: boolean = process.env.NODE_ENV === 'production'
const isDevelopment: boolean = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  features: {
    inlineStyles: true
  },
  build: {
    transpile: [
      ...(isProduction ? ['naive-ui'] : []),
      ...(isProduction ? ['vueuc'] : []),
      ...(isProduction ? ['@css-render/vue3-ssr'] : []),
      '@juggle/resize-observer'
    ]
  },
  css: ['vfonts/Lato.css', 'vfonts/FiraCode.css'],
  vite: {
    optimizeDeps: {
      include: [
        ...(isDevelopment ? ['naive-ui'] : []),
        ...(isDevelopment ? ['vueuc'] : []),
        ...(isDevelopment ? ['date-fns-tz/formatInTimeZone'] : []),
        ...(isDevelopment ? ['lodash-es'] : [])
      ]
    }
  }
})

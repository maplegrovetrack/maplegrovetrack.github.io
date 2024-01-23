export default defineNuxtConfig({
  content: {},
  devtools: {
    enabled: true
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  typescript: {
    strict: true
  }
})

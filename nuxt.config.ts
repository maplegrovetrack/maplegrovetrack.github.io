export default defineNuxtConfig({
  content: {},
  devtools: {
    enabled: true
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md`
    'components:extend': (components) => {
      const include = ['UAlert']
      const globals = components.filter(c => include.includes(c.pascalName))

      globals.forEach((c) => { c.global = true })
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
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

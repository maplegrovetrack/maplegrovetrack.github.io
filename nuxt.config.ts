import type { Component } from '@nuxt/schema'

export default defineNuxtConfig({
  colorMode: {
    fallback: 'dark'
  },
  content: {},
  css: ['assets/calendar.scss'],
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
    'components:extend': (components: Component[]): void => {
      const include: string[] = ['UAlert']
      const globals: Component[] = components.filter(c => include.includes(c.pascalName))

      globals.forEach((c: Component) => {
        c.global = true
      })
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/ui'
  ],
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  typescript: {
    strict: false
  }
})

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],
  devtools: {
    enabled: true
  },
  css: [
    './app/assets/css/main.css',
    './app/assets/css/calendar.scss'
  ],
  site: {
    url: 'https://maplegrovetrack.github.io'
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark'
  },
  content: {},
  routeRules: {
    '/api/search.json': {
      prerender: true
    }
  },
  compatibilityDate: '2026-01-06',
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  }
})

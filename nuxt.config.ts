import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxt/content'
  ],
  devtools: {
    enabled: true
  },
  css: [
    './app/assets/css/main.css',
    './app/assets/css/calendar.scss'
  ],
  site: {
    url: 'https://maplegrovetrack.github.io',
    name: 'Maple Grove Track & Field Website'
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark'
  },
  content: {
    experimental: {
      nativeSqlite: true
    }
  },
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
  typescript: {
    strict: true,
    typeCheck: true,
    includeWorkspace: false
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  }
})

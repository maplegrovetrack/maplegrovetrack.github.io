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
    },
    preset: 'github-pages'
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules/luxon')) {
              return 'luxon'
            }
            if (id.includes('node_modules/tailwind')) {
              return 'tailwind'
            }
            if (id.includes('node_modules/reka-ui')) {
              return 'reka-ui'
            }
          }
        }
      }
    }
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
  },
  sitemap: {
    zeroRuntime: true
  }
})

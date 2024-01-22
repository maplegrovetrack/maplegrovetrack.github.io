import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import type { ModuleOptions, Nuxt, ViteConfig } from '@nuxt/schema'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  components: {
    dirs: [
      'components/menu'
    ]
  },
  css: [
    '@fontsource/roboto/100.css',
    '@fontsource/roboto/100-italic.css',
    '@fontsource/roboto/300.css',
    '@fontsource/roboto/300-italic.css',
    '@fontsource/roboto/400.css',
    '@fontsource/roboto/400-italic.css',
    '@fontsource/roboto/500.css',
    '@fontsource/roboto/500-italic.css',
    '@fontsource/roboto/700.css',
    '@fontsource/roboto/700-italic.css',
    '@fontsource/roboto/900.css',
    '@fontsource/roboto/900-italic.css',
    '@fontsource/roboto/index.css',
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/lib/styles/main.sass'
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    (_options: ModuleOptions, nuxt: Nuxt): void => {
      nuxt.hooks.hook('vite:extendConfig', (config: ViteConfig): void => {
        config.plugins = config.plugins || []
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})

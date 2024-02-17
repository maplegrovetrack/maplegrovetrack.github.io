import type { AppConfig } from 'nuxt/schema'
import { defineNuxtPlugin, useAppConfig, useHead, useSeoMeta } from '#imports'

export default defineNuxtPlugin((): void => {
  const config: AppConfig = useAppConfig()

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: '0FPpaNyK55jc_1OSNKGkJ4_1RG4Ibh4bf_XAEZPC6DI' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })

  useSeoMeta({
    ogSiteName: config.seo?.siteName,
    twitterCard: 'summary_large_image'
  })
})

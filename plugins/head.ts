import { defineNuxtPlugin, useHead } from '#imports'

export default defineNuxtPlugin((): void => {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })
})

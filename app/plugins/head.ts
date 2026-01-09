export default defineNuxtPlugin((): void => {
  const config = useAppConfig()

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

  useSeoMeta({
    ogSiteName: config.seo?.siteName,
    twitterCard: 'summary_large_image'
  })
})

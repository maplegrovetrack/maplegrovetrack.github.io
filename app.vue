<template>
  <div>
    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUDocsSearch :files="files as ParsedContent[]" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const navigation = await useAppNavigation()

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [] as ParsedContent[],
  server: false
})

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
</script>

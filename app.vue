<template>
  <AppHeader />

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <AppFooter />

  <ClientOnly>
    <LazyUDocsSearch :files="files" :navigation="navigation" />
  </ClientOnly>

  <UNotifications />
</template>

<script setup lang="ts">
import type { NavItem, ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData<NavItem[]>('navigation', () => fetchContentNavigation())
const { data: files } = await useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? 'green' : 'white')

useHead({
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color }
  ]
})

provide('navigation', navigation)
</script>

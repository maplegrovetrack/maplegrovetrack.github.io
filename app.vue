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

const navigation: NavItem[] = await useNavigation()
const { data: files } = await useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})
</script>

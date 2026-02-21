<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator />
    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="nav"
      />
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation: ContentNavigationItem[] = await queryCollectionNavigation('site')
// For some reason adding directories removes the root pages from search results.
// Below setup is a workaround to show root pages in the search results.
const nav = [
  { title: '', path: '/', stem: '0.index', children: navigation.filter(nav => nav && !nav.children) },
  ...navigation.filter(nav => nav && nav.children)
]
const { data: files } = await useLazyFetch('/api/search.json', {
  default: () => [],
  server: false
})
</script>

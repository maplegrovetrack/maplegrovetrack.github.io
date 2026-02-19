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
const nav = [{ title: 'Site', path: '/', stem: '0.index', children: navigation }]
const { data: files } = await useLazyFetch('/api/search.json', {
  default: () => [],
  server: false
})
</script>

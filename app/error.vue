<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <USeparator />
    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import type { ContentNavigationItem } from '@nuxt/content'

defineProps<{ error: NuxtError }>()

const navigation: ContentNavigationItem[] = await useNavigation()
const { data: files } = await useLazyFetch('/api/search.json', {
  default: () => [],
  server: false
})
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'
import type { NavItem, ParsedContent } from '@nuxt/content/dist/runtime/types'

const navigation: NavItem[] = await useNavigation()
const { data: files } = await useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})
</script>

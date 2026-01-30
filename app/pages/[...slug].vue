<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="store.tocLinks">
        <template v-if="toc?.bottom" #bottom>
          <UPageLinks :title="toc.bottom.title" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>

<script setup lang="ts">
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const store = useAppStore()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryCollection('site').path(route.path).first())
if (!page || !page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('site', route.path, { fields: ['description'] })
)
const { data: navigation } = await useAsyncData(() => queryCollectionNavigation('site'))
const headline = computed(() => findPageHeadline(navigation.value, route.path))

store.tocLinks = page.value.body?.toc?.links || []

const links = computed(() => [{
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?.stem}.md`,
  target: '_blank'
}])

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('AppOgImage', {
  title: page.value.title,
  description: page.value.description
})
</script>

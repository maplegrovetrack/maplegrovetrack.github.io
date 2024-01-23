<template>
  <div />
</template>

<script setup lang="ts">
const { seo } = useAppConfig()

useSeoMeta({
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})
</script>

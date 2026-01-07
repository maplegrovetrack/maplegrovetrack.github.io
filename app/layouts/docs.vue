<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            :collapsible="false"
            :navigation="navigation"
            highlight
          />
        </UPageAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation: ContentNavigationItem[] = await useNavigation()
</script>

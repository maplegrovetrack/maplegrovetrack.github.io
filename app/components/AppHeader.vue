<template>
  <UHeader>
    <template #left>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <div class="flex items-center gap-2">
          <UColorModeImage v-bind="{ class: 'h-10 md:h-16 w-auto', ...header?.logo }" />
          <div class="lg:w-80 hidden sm:block">
            Maple Grove Track & Field
          </div>
          <div class="block sm:hidden">
            MGTF
          </div>
        </div>
      </template>
      <template v-else>
        MGTF
      </template>
    </template>

    <template v-if="header?.search">
      <UContentSearchButton :collapsed="false" class="hidden lg:flex w-md" />
    </template>

    <template #right>
      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentSearchButton v-if="header?.search" :collapsed="false" class="w-full h-10 mb-4" />
      <UContentNavigation :navigation="navigation" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation: ContentNavigationItem[] = await useNavigation()

const { header } = useAppConfig()
</script>

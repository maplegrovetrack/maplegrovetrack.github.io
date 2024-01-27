<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <div class="flex items-center gap-2">
          <UColorModeImage v-bind="{ class: 'h-16 w-auto', ...header?.logo }" />
          <div class="w-40 md:w-auto lg:w-80">
            Maple Grove Track & Field
          </div>
        </div>
      </template>
      <template v-else>
        Nuxt UI Pro
        <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton v-if="header?.search" :label="undefined" class="lg:hidden" />

      <AppColorPicker v-if="header?.colorPicker" />
      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation: NavItem[] = await useNavigation()

const { header } = useAppConfig()
</script>

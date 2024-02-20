<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <div class="flex items-center gap-2">
          <UColorModeImage v-bind="{ class: 'h-8 md:h-10 w-auto', ...header?.logo }" />
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

    <template v-if="header?.search" #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <AppColorPicker v-if="header?.colorPicker" />
      <UColorModeButton v-if="header?.colorMode" />
      <AppStackTeamAppLogo />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UDocsSearchButton v-if="header?.search" class="w-full h-10 mb-4" />
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation: NavItem[] = await useNavigation()

const { header } = useAppConfig()
</script>

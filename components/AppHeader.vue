<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        Nuxt UI Pro <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton v-if="header?.search" :label="undefined" class="lg:hidden" />

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
const navigation = await useAppNavigation()

const { header } = useAppConfig()
</script>

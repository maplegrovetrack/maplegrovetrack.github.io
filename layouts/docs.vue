<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const navigation = await useAppNavigation()
</script>

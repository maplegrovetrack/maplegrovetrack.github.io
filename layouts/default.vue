<template>
  <VApp>
    <div v-show="store.init">
      <TopMenu />
      <SidebarMenu />
      <VMain>
        <VContainer
          class="pa-4 pa-sm-6 pa-md-8"
          fluid
          tag="section"
        >
          <slot />
        </VContainer>
      </VMain>
    </div>
  </VApp>
</template>

<script setup lang="ts">
const store = useApplicationStore()
</script>

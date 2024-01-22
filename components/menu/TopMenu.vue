<template>
  <VAppBar
    border="b"
    flat
  >
    <template #prepend>
      <VBtn
        v-if="mdAndDown"
        variant="text"
        :icon="true"
        class="text-body-2 text-capitalize px-3 app-btn"
        color="medium-emphasis"
      >
        <v-icon icon="mdi-menu" size="24" />
      </VBtn>
    </template>
    <template #title>
      Maple Grove Track & Field
    </template>
  </VAppBar>
</template>

<script setup lang="ts">
// @click="app.drawer = !app.drawer"
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()
</script>

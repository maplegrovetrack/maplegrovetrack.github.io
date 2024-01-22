<template>
  <ClientOnly>
    <VNavigationDrawer>
      <VList v-model:opened="openedGroups" nav open-strategy="multiple">
        <VListItem color="primary" prepend-icon="mdi-home" value="home" title="Home" />
        <VListGroup value="schedules">
          <template #activator="{ props }">
            <VListItem v-bind="props" prepend-icon="mdi-calendar" title="Schedules" />
          </template>
          <VListItem color="primary" title="Meets" value="meets" />
          <VListItem color="primary" title="Practices" value="practices" />
          <VListItem color="primary" title="Events" value="events" />
        </VListGroup>
      </VList>
    </VNavigationDrawer>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { RemovableRef } from '@vueuse/shared/index'

const openedGroups: RemovableRef<string[]> = useSessionStorage('openedGroups', ['schedules'])
</script>

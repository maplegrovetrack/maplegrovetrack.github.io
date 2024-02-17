<template>
  <div>
    <ClientOnly>
      <div>
        <div class="flex items-center mb-3">
          <UCheckbox id="weight-room" v-model="store.weightRoom" color="blue" label="Weight Room" />
          <WeightRoomBadge />
        </div>
        <Tabs>
          <div label="Calendar View" icon="i-heroicons-calendar-solid">
            <PracticeCalendarView />
          </div>
          <div label="List View" icon="i-heroicons-list-bullet">
            <PracticeCalendarListView />
          </div>
        </Tabs>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { usePracticesStore } from '~/composables/practices/use-practices-store'

const store = usePracticesStore()
</script>

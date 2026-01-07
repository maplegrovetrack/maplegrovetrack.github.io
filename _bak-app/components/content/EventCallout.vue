<template>
  <Callout>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
          {{ DateTime.fromJSDate(event.date).toLocaleString(DateTime.DATE_HUGE) }}
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-clock" class="w-5 h-5" />
          <div v-if="event.start && event.end">
            {{ event.start.hour }}:{{ event.start.minute }} {{ event.start.meridiem }} -
            {{ event.end.hour }}:{{ event.end.minute }} {{ event.end.meridiem }}
          </div>
          <div v-else>
            TBD
          </div>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
          <div class="flex items-center">
            <div>{{ event.location }}</div>
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <UIcon name="i-fluent-mdl2-unstack-selected" class="w-5 h-5" />
          <div class="flex items-center">
            <a :href="app.teamAppContextRoot + '/events' + event.teamAppLink" target="_blank">
              Team App event
            </a>
          </div>
        </div>
      </div>
    </div>
    <UDivider class="my-4" :ui="dividerUi">
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" />
        <div>
          Information
        </div>
      </div>
    </UDivider>
    <div class="space-y-3">
      <template v-if="event.notes && event.notes.length > 0">
        <div v-for="(note, index) in event.notes" :key="index">
          {{ note }}
        </div>
      </template>
      <template v-else>
        No additional information.
      </template>
    </div>
  </Callout>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { Event } from '#shared/types/event-type'

defineProps<{ event: Event }>()

const app = useAppConfig()

const dividerUi = {
  border: {
    base: 'block not-prose border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
  }
}
</script>

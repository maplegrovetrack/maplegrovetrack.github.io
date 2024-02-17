<template>
  <Callout>
    <div class="grid grid-cols-2 gap-x-3">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
          {{ DateTime.fromJSDate(practice.date).toLocaleString(DateTime.DATE_HUGE) }}
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-clock" class="w-5 h-5" />
          <div>
            {{ practice.start.hour }}:{{ practice.start.minute }} {{ practice.start.meridiem }} -
            {{ practice.end.hour }}:{{ practice.end.minute }} {{ practice.end.meridiem }}
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <WeightRoomCallout v-if="useIsWeightRoom(practice.type)" />
      </div>
    </div>
  </Callout>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import { useIsWeightRoom } from '~/composables/practices/use-is-weight-room'
import type { Practice } from '~/types/practice-type'

defineProps<{ practice: Practice }>()
</script>

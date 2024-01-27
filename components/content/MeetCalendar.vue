<template>
  <div>
    <SharedCalendar :attributes="attributes" />
    <div v-for="meet in meets" :key="meet.id">
      <ProseH2 :id="meet.id">
        <template #default>
          {{ meet.name }}
        </template>
      </ProseH2>
      <Callout>
        <div class="grid grid-cols-2">
          <div class="space-y-3">
            <div class="flex items-center gap-1.5">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5 flex-shrink-0" />
              {{ meet.date.toDateString() }}
            </div>
            <div class="flex items-center gap-1.5">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 flex-shrink-0" />
              {{ meet.start.hour }}:{{ meet.start.minute }} {{ meet.start.meridiem }} -
              {{ meet.end.hour }}:{{ meet.end.minute }} {{ meet.end.meridiem }}
            </div>
          </div>
          <div class="space-y-3">
            Testing 1 2 3...
          </div>
        </div>
      </Callout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Schools } from '~/types/schools'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'

const meets: Meet[] = [
  {
    id: '3_2_2024_mg_blaine',
    name: 'Dual Meet',
    date: new Date(2024, 3, 2),
    location: Schools.MG,
    schools: [Schools.MG, Schools.BLAINE],
    type: MeetType.ALL,
    start: {
      hour: '3',
      minute: '30',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
]

const attributes = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
  ...meets.map((meet) => ({
    highlight: true,
    dates: meet.date,
  }))
])
</script>

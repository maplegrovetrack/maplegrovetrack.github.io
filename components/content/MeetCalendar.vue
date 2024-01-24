<template>
  <div>
    <SharedCalendar :attributes="attributes" />
    <Callout v-for="meet in meets">
      <div class="grid grid-cols-2">
        <div class="space-y-4">
          <div class="flex justify-items-start items-center">
            <UIcon name="i-heroicons-calendar" class="mr-1 w-5 h-5" />
            {{ meet.date.toDateString() }}
          </div>
          <div class="flex justify-items-start items-center">
            <UIcon name="i-heroicons-clock" class="mr-1 w-5 h-5" />
            {{ meet.start.hour }}:{{ meet.start.minute }} {{meet.start.meridiem}} -
            {{ meet.end.hour }}:{{ meet.end.minute }} {{meet.end.meridiem}}
          </div>
        </div>
        <div class="space-y-4">
          Testing 1 2 3...
        </div>
      </div>
    </Callout>
  </div>
</template>

<script setup lang="ts">
import { Schools } from '~/types/schools'
import { MeetType } from '~/types/meet-type'
import type { Meet } from '~/types/meet-type'

const meets: Meet[] = [
  {
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

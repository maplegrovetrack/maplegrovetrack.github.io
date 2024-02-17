<template>
  <div>
    <div>
      <SharedCalendar :attributes="attributes" @dayclick="dayclick" />
    </div>
    <h2>Practices</h2>
    <div v-if="practices.length < 1">
      There are no practices for {{ DateTime.fromJSDate(selectedDate).toLocaleString(DateTime.DATE_HUGE) }}.
    </div>
    <div v-for="practice in practices" :key="practice.key">
      <PracticeCallout :practice="practice" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
import type { ComputedRef } from 'vue'
import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '~/types/practice-type'
import { useWeightRoomCalendar } from '~/composables/practices/use-weight-room-calendar'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import { usePracticesStore } from '~/composables/practices/use-practices-store'

const store = usePracticesStore()
const nowDateTime = DateTime.now().startOf('day')
const now = nowDateTime.toJSDate()
const selectedDate = ref(now)

const attributes: ComputedRef<AttributeConfig[]> = computed(() => [
  {
    key: 'today',
    highlight: {
      fillMode: 'solid'
    },
    dates: now
  },
  (!DateTime.fromJSDate(selectedDate.value).startOf('day').equals(nowDateTime) && {
    key: 'selected',
    highlight: {
      fillMode: 'outline'
    },
    dates: selectedDate.value
  }),
  (store.weightRoom && useWeightRoomCalendar())
])

const practices: ComputedRef<Practice[]> = computed(() => [
  ...(store.weightRoom ? useWeightRoomSchedule() : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  })
])

const dayclick = ({ event }: { event: CalendarDay }) => {
  selectedDate.value = DateTime.fromJSDate(event.date).startOf('day').toJSDate()
}
</script>

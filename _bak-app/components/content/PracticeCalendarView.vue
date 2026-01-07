<template>
  <div>
    <div>
      <SharedCalendar :attributes="attributes" @dayclick="dayclick" />
    </div>
    <h2>Practices</h2>
    <div v-if="practices.length < 1">
      There are no practices for {{ DateTime.fromJSDate(selectedDate).toLocaleString(DateTime.DATE_HUGE) }}.
    </div>
    <div v-for="practice in practices" :key="practice.id">
      <PracticeCallout :practice="practice" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
import type { ComputedRef } from 'vue'
import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '#shared/types/practice-type'
import { useWeightRoomCalendar } from '~/composables/practices/use-weight-room-calendar'
import { usePracticesStore } from '~/composables/practices/use-practices-store'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'
import { useVarsityPracticesCalendar } from '~/composables/practices/use-varsity-practices-calendar'
import { useTryoutsCalendar } from '~/composables/practices/use-tryouts-calendar'
import { useSpringBreakPracticesCalendar } from '~/composables/practices/use-spring-break-practices-calendar'
import { useOptionalPracticesCalendar } from '~/composables/practices/use-optional-practices-calendar'
import { useJvPracticesCalendar } from '~/composables/practices/use-jv-practices-calendar'

const store = usePracticesStore()
const nowDateTime = DateTime.now().startOf('day')
const now = nowDateTime.toJSDate()
const schedules = usePracticesSchedule()
const selectedDate = ref(now)

const attributes: ComputedRef<AttributeConfig[]> = computed(() => [
  {
    key: 'today',
    highlight: {
      fillMode: 'solid'
    },
    dates: [now]
  },
  (!DateTime.fromJSDate(selectedDate.value).startOf('day').equals(nowDateTime) && {
    key: 'selected',
    highlight: {
      fillMode: 'outline'
    },
    dates: [selectedDate.value]
  }),
  (store.tryouts && useTryoutsCalendar()),
  (store.springBreak && useSpringBreakPracticesCalendar()),
  (store.varsityPractices && useVarsityPracticesCalendar()),
  (store.jvPractices && useJvPracticesCalendar()),
  (store.optional && useOptionalPracticesCalendar()),
  (store.weightRoom && useWeightRoomCalendar())
])

const practices: ComputedRef<Practice[]> = computed(() => [
  ...(store.tryouts ? schedules.TRYOUTS : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  }),
  ...(store.springBreak ? schedules.SPRING_BREAK : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  }),
  ...(store.varsityPractices ? schedules.VARSITY : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  }),
  ...(store.jvPractices ? schedules.JV : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  }),
  ...(store.optional ? schedules.OPTIONAL : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  }),
  ...(store.weightRoom ? schedules.WEIGHT_ROOM : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  })
])

const dayclick = ({ event }: { event: CalendarDay }) => {
  selectedDate.value = DateTime.fromJSDate(event.date).startOf('day').toJSDate()
}
</script>

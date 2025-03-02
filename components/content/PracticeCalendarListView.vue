<template>
  <div>
    <div v-if="practices.length < 1">
      <p>There are no current practices.</p>
    </div>
    <div
      v-for="(weekGrouping, week, index) in practicesGroupings"
      :key="week"
      :class="{'mt-28': index > 0}"
    >
      <h2>
        The Week of {{ DateTime.fromISO(week).toLocaleString(DateTime.DATE_HUGE) }}
      </h2>
      <UDivider class="my-4" :ui="dividerUi" />
      <div v-for="(dayGrouping, day) in weekGrouping" :key="day">
        <h3>
          {{ DateTime.fromISO(day).toLocaleString(DateTime.DATE_HUGE) }}
        </h3>
        <div v-for="practice in dayGrouping" :key="practice.id">
          <PracticeCallout :practice="practice" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { ComputedRef } from 'vue'
import type { Practice } from '~/types/practice-type'
import { usePracticesStore } from '~/composables/practices/use-practices-store'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

const store = usePracticesStore()
const schedules = usePracticesSchedule()
const nowDateTime = DateTime.now().startOf('day')
const dividerUi = {
  border: {
    base: 'block not-prose border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
  }
}

const practices: ComputedRef<Practice[]> = computed(() => [
  ...(store.weightRoom ? schedules.WEIGHT_ROOM : []).filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  }),
  ...(store.trackPractices ? schedules.TRACK : []).filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  }),
  ...(store.tryouts ? schedules.TRYOUTS : []).filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  }),
  ...(store.springBreak ? schedules.SPRING_BREAK : []).filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  }),
  ...(store.optional ? schedules.OPTIONAL : []).filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  })
].sort((a, b) => a.date.getTime() - b.date.getTime()))

const practicesGroupings: ComputedRef<Record<string, Record<string, Practice[]>>> = computed(() => {
  const groupings: Record<string, Record<string, Practice[]>> = {}
  return practices.value.reduce((accumulator, currentValue) => {
    const date = DateTime.fromJSDate(currentValue.date).toISOWeekDate()
    const weekdate = date.substring(0, 8)
    accumulator[weekdate] = {
      ...(accumulator[weekdate] || {}),
      [date]: [
        ...((accumulator[weekdate] && accumulator[weekdate][date]) ? accumulator[weekdate][date] : []),
        currentValue
      ]
    }
    return accumulator
  }, groupings)
})
</script>

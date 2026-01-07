<template>
  <div>
    <div v-if="events.length < 1">
      <p>There are no current event.</p>
    </div>
    <div
      v-for="(weekGrouping, week, index) in eventGroupings"
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
        <div v-for="event in dayGrouping" :key="event.id">
          <EventCallout :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { ComputedRef } from 'vue'
import type { Event } from '#shared/types/event-type'
import { useEventSchedule } from '~/composables/use-event-schedule'

const schedule = useEventSchedule()
const nowDateTime = DateTime.now().startOf('day')
const dividerUi = {
  border: {
    base: 'block not-prose border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
  }
}

const events: ComputedRef<Event[]> = computed(() => [
  ...schedule.filter((practice) => {
    const practiceDay = DateTime.fromJSDate(practice.date).startOf('day')
    return nowDateTime.equals(practiceDay) || practiceDay > DateTime.now().startOf('day')
  })
].sort((a, b) => a.date.getTime() - b.date.getTime()))

const eventGroupings: ComputedRef<Record<string, Record<string, Event[]>>> = computed(() => {
  const groupings: Record<string, Record<string, Event[]>> = {}
  return events.value.reduce((accumulator, currentValue) => {
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

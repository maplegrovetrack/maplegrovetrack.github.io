<template>
  <div>
    <SharedCalendar :attributes="attributes" @dayclick="dayclick" />
  </div>
  <h2>Events</h2>
  <div v-if="events.length < 1">
    There are no events for {{ DateTime.fromJSDate(selectedDate).toLocaleString(DateTime.DATE_HUGE) }}.
  </div>
  <div v-for="event in events" :key="event.id">
    <EventCallout :event="event" />
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { ComputedRef } from 'vue'
import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
import { useEventSchedule } from '~/composables/use-event-schedule'
import type { Event } from '~/types/event-type'

const nowDateTime = DateTime.now().startOf('day')
const now = nowDateTime.toJSDate()
const selectedDate = ref(now)
const schedule = useEventSchedule()

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
  {
    key: 'events',
    dot: 'blue',
    dates: [
      ...schedule.map((event: Event) => event.date)
    ]
  }
])

const events: ComputedRef<Event[]> = computed(() => [
  ...schedule.filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  })
])

const dayclick = ({ event }: { event: CalendarDay }) => {
  selectedDate.value = DateTime.fromJSDate(event.date).startOf('day').toJSDate()
}
</script>

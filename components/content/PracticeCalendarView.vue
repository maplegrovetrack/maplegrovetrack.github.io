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
            <div v-if="useIsWeightRoom(practice.type)" class="flex items-center gap-2">
              <UIcon name="i-fluent-mdl2-weights" class="w-5 h-5" />
              <div class="flex items-center">
                <div>Weight Room</div>
                <WeightRoomBadge />
              </div>
            </div>
          </div>
        </div>
      </Callout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
import { useIsWeightRoom } from '~/composables/practices/use-is-weight-room'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomCalendar } from '~/composables/practices/use-weight-room-calendar'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import {
  usePracticeCalendarSelectedDateLocalStorage
} from '~/composables/practices/use-practice-calendar-selected-date-local-storage'
import {
  usePracticeCalendarSetSelectedDateLocalStorage
} from '~/composables/practices/use-practice-calendar-set-selected-date-local-storage'

const weightRoom = ref(useWeightRoomLocalStorage())
const nowDateTime = DateTime.now().startOf('day')
const now = nowDateTime.toJSDate()
const selectedDate = ref(usePracticeCalendarSelectedDateLocalStorage() || now)

const attributes = computed(() => [
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
  (weightRoom.value && useWeightRoomCalendar())
])

const practices = computed(() => [
  ...(weightRoom.value ? useWeightRoomSchedule() : []).filter((practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(DateTime.fromJSDate(selectedDate.value))
  })
])

const dayclick = ({ event }: { event: CalendarDay }) => {
  selectedDate.value = DateTime.fromJSDate(event.date).startOf('day').toJSDate()
  usePracticeCalendarSetSelectedDateLocalStorage(selectedDate.value)
}
</script>

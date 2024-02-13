<template>
  <div>
    <div class="flex items-center mb-3">
      <UCheckbox id="weight-room" v-model="weightRoom" color="blue" label="Weight Room" />
      <WeightRoomBadge />
    </div>
    <SharedCalendar :attributes="attributes" />
    <ClientOnly>
      <Tabs>
        <div label="Upcoming" icon="i-heroicons-clipboard-document">
          <div v-show="practices.length < 1">
            There are no upcoming practices.
          </div>
          <div v-for="practice in practices" :key="practice.key">
            <Callout :id="practice.id">
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
        <div label="Past" icon="i-heroicons-clipboard-document-check">
          <div v-show="pastPractices.length == 0">
            There are no past practices.
          </div>
          <div v-for="practice in pastPractices" :key="practice.key">
            <Callout :id="practice.id">
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
      </Tabs>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { ComputedRef } from 'vue'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'
import { useWeightRoomCalendar } from '~/composables/practices/use-weight-room-calendar'
import WeightRoomBadge from '~/components/content/WeightRoomBadge.vue'
import { useIsWeightRoom } from '~/composables/practices/use-is-weight-room'
import type { Practice } from '~/types/practice-type'
import { useWeightRoomScheduleFuture } from '~/composables/practices/use-weight-room-schedule-future'
import { useWeightRoomSchedulePast } from '~/composables/practices/use-weight-room-schedule-past'

const weightRoom = ref(useWeightRoomLocalStorage())
watch(weightRoom, value => useWeightRoomSetLocalStorage(value))

const attributes = computed(() => [
  {
    key: 'today',
    highlight: true,
    dates: DateTime.now().toJSDate()
  },
  (weightRoom.value && useWeightRoomCalendar())
])

const practices: ComputedRef<Practice[]> = computed(() => [
  ...(weightRoom.value ? useWeightRoomScheduleFuture() : [])
])
const pastPractices: ComputedRef<Practice[]> = computed(() => [
  ...(weightRoom.value ? useWeightRoomSchedulePast() : [])
])
</script>

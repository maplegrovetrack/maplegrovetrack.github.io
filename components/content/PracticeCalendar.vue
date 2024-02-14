<template>
  <div>
    <div class="flex items-center mb-3">
      <UCheckbox id="weight-room" v-model="weightRoom" color="blue" label="Weight Room" />
      <WeightRoomBadge />
    </div>
    <SharedCalendar :attributes="attributes" @dayclick="dayclick" />
    <ClientOnly>
      <Tabs id="practice-schedule-tabs" :selected-index="selectedIndex">
        <div label="Upcoming" icon="i-heroicons-clipboard-document">
          <div v-show="practices.length < 1">
            There are no upcoming practices.
          </div>
          <div v-for="practice in practices" :key="practice.key">
            <Callout
              :id="practice.id"
              class="scroll-mt-[calc(20px+var(--header-height))]"
            >
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
import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'
import { useWeightRoomCalendar } from '~/composables/practices/use-weight-room-calendar'
import WeightRoomBadge from '~/components/content/WeightRoomBadge.vue'
import { useIsWeightRoom } from '~/composables/practices/use-is-weight-room'
import type { Practice } from '~/types/practice-type'
import { useWeightRoomScheduleFuture } from '~/composables/practices/use-weight-room-schedule-future'
import { useWeightRoomSchedulePast } from '~/composables/practices/use-weight-room-schedule-past'

const router = useRouter()
const nuxtApp = useNuxtApp()
const route = useRoute()
const hash = route.hash
const tabButtons = ref()
const weightRoom = ref(useWeightRoomLocalStorage())
const selectedIndex = ref(0)

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

const dayclick = ({ event }: { event: CalendarDay }) => {
  const date = DateTime.fromJSDate(event.date).startOf('day')
  const now = DateTime.now().startOf('day')
  const isFuture = now <= date
  const list = isFuture ? practices.value : pastPractices.value
  const id = list.filter((practice: Practice) => {
    return DateTime.fromJSDate(practice.date).startOf('day').equals(date)
  })[0]?.id
  if (id) {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('#practice-schedule-tabs button')
    buttons[isFuture ? 0 : 1].click()
    scrollToHeading(id)
  }
}

const scrollToHeading = (id: string) => {
  router.push(`#${id}`)
}

nuxtApp.hooks.hookOnce('page:finish', () => {
  if (hash) {
    scrollToHeading(hash.slice(1))
  }
})
</script>

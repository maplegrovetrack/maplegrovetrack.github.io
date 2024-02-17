<template>
  <div>
    <ClientOnly>
      <div>
        <div class="flex items-center mb-3">
          <UCheckbox id="weight-room" v-model="weightRoom" color="blue" label="Weight Room" />
          <WeightRoomBadge />
        </div>
        <Tabs>
          <div label="Calendar View" icon="i-heroicons-calendar-solid">
            <PracticeCalendarView />
          </div>
          <div label="List View" icon="i-heroicons-list-bullet">
            <PracticeCalendarListView />
          </div>
        </Tabs>
      </div>
    </ClientOnly>
    <!--    -->
    <!--    <ClientOnly>-->
    <!--      <Tabs id="practice-schedule-tabs" :selected-index="selectedIndex">-->
    <!--        <div label="Upcoming" icon="i-heroicons-clipboard-document">-->
    <!--          <div v-show="practices.length < 1">-->
    <!--            There are no upcoming practices.-->
    <!--          </div>-->
    <!--          <div v-for="practice in practices" :key="practice.key">-->
    <!--            <Callout-->
    <!--              :id="practice.id"-->
    <!--              class="scroll-mt-[calc(20px+var(&#45;&#45;header-height))]"-->
    <!--            >-->
    <!--              <div class="grid grid-cols-2 gap-x-3">-->
    <!--                <div class="space-y-3">-->
    <!--                  <div class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-heroicons-calendar" class="w-5 h-5" />-->
    <!--                    {{ DateTime.fromJSDate(practice.date).toLocaleString(DateTime.DATE_HUGE) }}-->
    <!--                  </div>-->
    <!--                  <div class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-heroicons-clock" class="w-5 h-5" />-->
    <!--                    <div>-->
    <!--                      {{ practice.start.hour }}:{{ practice.start.minute }} {{ practice.start.meridiem }} - -->
    <!--                      {{ practice.end.hour }}:{{ practice.end.minute }} {{ practice.end.meridiem }}-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <div class="space-y-3">-->
    <!--                  <div v-if="useIsWeightRoom(practice.type)" class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-fluent-mdl2-weights" class="w-5 h-5" />-->
    <!--                    <div class="flex items-center">-->
    <!--                      <div>Weight Room</div>-->
    <!--                      <WeightRoomBadge />-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </Callout>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div label="Past" icon="i-heroicons-clipboard-document-check">-->
    <!--          <div v-show="pastPractices.length == 0">-->
    <!--            There are no past practices.-->
    <!--          </div>-->
    <!--          <div v-for="practice in pastPractices" :key="practice.key">-->
    <!--            <Callout :id="practice.id">-->
    <!--              <div class="grid grid-cols-2 gap-x-3">-->
    <!--                <div class="space-y-3">-->
    <!--                  <div class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-heroicons-calendar" class="w-5 h-5" />-->
    <!--                    {{ DateTime.fromJSDate(practice.date).toLocaleString(DateTime.DATE_HUGE) }}-->
    <!--                  </div>-->
    <!--                  <div class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-heroicons-clock" class="w-5 h-5" />-->
    <!--                    <div>-->
    <!--                      {{ practice.start.hour }}:{{ practice.start.minute }} {{ practice.start.meridiem }} - -->
    <!--                      {{ practice.end.hour }}:{{ practice.end.minute }} {{ practice.end.meridiem }}-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <div class="space-y-3">-->
    <!--                  <div v-if="useIsWeightRoom(practice.type)" class="flex items-center gap-2">-->
    <!--                    <UIcon name="i-fluent-mdl2-weights" class="w-5 h-5" />-->
    <!--                    <div class="flex items-center">-->
    <!--                      <div>Weight Room</div>-->
    <!--                      <WeightRoomBadge />-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </Callout>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </Tabs>-->
    <!--    </ClientOnly>-->
  </div>
</template>

<script setup lang="ts">
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'

const weightRoom = ref(useWeightRoomLocalStorage())

watch(weightRoom, value => useWeightRoomSetLocalStorage(value))

// import type { ComputedRef } from 'vue'
// import type { CalendarDay } from 'v-calendar/dist/types/src/utils/page.d.ts'
//
// import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'
//
// import WeightRoomBadge from '~/components/content/WeightRoomBadge.vue'

// import type { Practice } from '~/types/practice-type'
// import { useWeightRoomScheduleFuture } from '~/composables/practices/use-weight-room-schedule-future'
// import { useWeightRoomSchedulePast } from '~/composables/practices/use-weight-room-schedule-past'
//
// const router = useRouter()
// const nuxtApp = useNuxtApp()
// const route = useRoute()
// const hash = route.hash
// const tabButtons = ref()
//
// const selectedIndex = ref(0)
//
// const attributes = computed(() => [
//   {
//     key: 'today',
//     highlight: true,
//     dates: DateTime.now().toJSDate()
//   },
//   (weightRoom.value && useWeightRoomCalendar())
// ])
//
// const practices: ComputedRef<Practice[]> = computed(() => [
//   ...(weightRoom.value ? useWeightRoomScheduleFuture() : [])
// ])
// const pastPractices: ComputedRef<Practice[]> = computed(() => [
//   ...(weightRoom.value ? useWeightRoomSchedulePast() : [])
// ])
//
// const scrollToHeading = (id: string) => {
//   router.push(`#${id}`)
// }
//
// nuxtApp.hooks.hookOnce('page:finish', () => {
//   if (hash) {
//     scrollToHeading(hash.slice(1))
//   }
// })
</script>

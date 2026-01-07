<template>
  <div>
    <ClientOnly>
      <div>
        <div class="flex items-center mb-3">
          <UCheckbox id="tryouts" v-model="store.tryouts" color="yellow" label="Tryouts" />
          <TryoutsBadge />
        </div>
        <div class="flex items-center mb-3">
          <UCheckbox id="spring-break" v-model="store.springBreak" color="teal" label="Spring break practice" />
          <SpringBreakPracticesBadge />
        </div>
        <div class="flex items-center mb-3">
          <UCheckbox id="varsity-practice" v-model="store.varsityPractices" color="red" label="Varsity practice" />
          <VarsityPracticeBadge />
        </div>
        <div class="flex items-center mb-3">
          <UCheckbox id="jv-practice" v-model="store.jvPractices" color="purple" label="JV practice" />
          <JVPracticeBadge />
        </div>
        <div class="flex items-center mb-3">
          <UCheckbox id="optional" v-model="store.optional" color="orange" label="Optional practice" />
          <OptionalPracticesBadge />
        </div>
        <div class="flex items-center mb-3">
          <UCheckbox id="weight-room" v-model="store.weightRoom" color="blue" label="Weight Room" />
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
  </div>
</template>

<script setup lang="ts">
import { usePracticesStore } from '~/composables/practices/use-practices-store'

const store = usePracticesStore()
</script>

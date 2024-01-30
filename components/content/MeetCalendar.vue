<template>
  <div>
    <!--    <SharedCalendar :attributes="attributes" />-->
    <div v-for="meet in meets" :key="meet.id">
      <ProseH2 :id="meet.id">
        {{ meet.name }}
      </ProseH2>
      <Callout>
        <div class="grid grid-cols-2">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
              {{ meet.date.toDateString() }}
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-clock" class="w-5 h-5" />
              <div v-if="meet.start && meet.end">
                {{ meet.start.hour }}:{{ meet.start.minute }} {{ meet.start.meridiem }} -
                {{ meet.end.hour }}:{{ meet.end.minute }} {{ meet.end.meridiem }}
              </div>
              <div v-else>
                TBD
              </div>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
              <div class="flex items-center">
                <div>{{ meet.location?.name || 'TBD' }}</div>
                <div v-if="meet.location" class="flex items-center ml-1">
                  <img class="not-prose w-auto h-6" :src="meet.location.logo.src" :alt="meet.location.name">
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-user-group" class="w-5 h-5" />
              <div>
                {{ meet.type }}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-streamline-school-bus-side" class="w-5 h-5" />
              <div class="flex items-center">
                {{ meet.transport }}
              </div>
            </div>
          </div>
        </div>
        <UDivider class="my-4" :ui="dividerUi">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" />
            <div>
              Information
            </div>
          </div>
        </UDivider>
        <div class="space-y-3">
          {{ meet.notes || 'No additional information.' }}
        </div>
        <UDivider class="my-4" :ui="dividerUi">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
            <div>
              Schools
            </div>
          </div>
        </UDivider>
        <div v-if="meet.schools.length > 0" class="grid grid-cols-2">
          <div v-for="(school, index) in meet.schools" :key="index" class="flex items-center gap-1.5 space-y-1 h-16">
            <div>{{ school.name }}</div>
            <img
              :class="{ 'not-prose': true, [school.logo.width]: true, [school.logo.height]: true }"
              :src="school.logo.src"
              :alt="school.name"
            >
          </div>
        </div>
        <div v-else class="flex items-center">
          TBD
        </div>
      </Callout>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Meet } from '~/types/meet-type'

const store = useAppStore()
const meets = store.meets

const dividerUi = {
  border: {
    base: 'block not-prose border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
  }
}

// const attributes = ref([
//   {
//     key: 'today',
//     highlight: true,
//     dates: new Date(),
//   },
//   ...store.meets.map((meet: Meet) => ({
//     highlight: true,
//     dates: meet.date,
//   }))
// ])

store.tocLinks = store.meets.map((meet: Meet) => ({
  id: meet.id,
  text: meet.date.toDateString(),
  depth: 2
}))
</script>

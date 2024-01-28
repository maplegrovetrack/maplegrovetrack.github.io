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
              {{ meet.start.hour }}:{{ meet.start.minute }} {{ meet.start.meridiem }} -
              {{ meet.end.hour }}:{{ meet.end.minute }} {{ meet.end.meridiem }}
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
              <div class="flex items-center">
                <div>{{ meet.location.name }}</div>
                <div class="w-5 h-5 ml-1">
                  <img class="not-prose" :src="meet.location.logo" :alt="meet.location.name">
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex gap-2">
              <div class="flex mt-0.5">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
              </div>
              <div class="flex flex-wrap items-center">
                <div v-for="(school, index) in meet.schools" :key="index" class="flex items-center">
                  <div>{{ school.name }}</div>
                  <div class="flex items-center w-5 h-5 ml-1">
                    <img class="not-prose" :src="school.logo" :alt="school.name">
                  </div>
                  <div v-if="!isLast(meet.schools, index)" class="ml-2 mr-2">
                    |
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-user-group" class="w-5 h-5" />
              <div>
                {{ meet.type }}
              </div>
            </div>
            <div v-if="meet.transport" class="flex items-center gap-2">
              <UIcon name="i-streamline-school-bus-side" class="w-5 h-5" />
              <div class="flex items-center">
                {{ meet.transport }}
              </div>
            </div>
          </div>
        </div>
      </Callout>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Meet } from '~/types/meet-type'

const store = useAppStore()
const meets = store.meets

const isLast = (array: Array<any>, index: number): boolean => {
  return array.length - 1 === index
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

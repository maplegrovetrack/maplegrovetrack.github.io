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
            <div class="flex items-center gap-1.5">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5 flex-shrink-0" />
              {{ meet.date.toDateString() }}
            </div>
            <div class="flex items-center gap-1.5">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 flex-shrink-0" />
              {{ meet.start.hour }}:{{ meet.start.minute }} {{ meet.start.meridiem }} -
              {{ meet.end.hour }}:{{ meet.end.minute }} {{ meet.end.meridiem }}
            </div>
          </div>
          <div class="space-y-3">
            Testing 1 2 3...
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

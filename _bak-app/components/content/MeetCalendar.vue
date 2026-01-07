<template>
  <div>
    <div v-for="meet in meets" :key="meet.id">
      <ProseH2 :id="meet.id">
        {{ meet.name }}
      </ProseH2>
      <Callout>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
              {{ DateTime.fromJSDate(meet.date).toLocaleString(DateTime.DATE_HUGE) }}
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
            <div class="flex items-center gap-2">
              <UIcon name="i-fluent-mdl2-unstack-selected" class="w-5 h-5" />
              <div class="flex items-center">
                <a :href="app.teamAppContextRoot + '/events' + meet.teamAppLink" target="_blank">
                  Team App event
                </a>
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
          <template v-if="meet.notes && meet.notes.length > 0">
            <div v-for="(note, index) in meet.notes" :key="index">
              {{ note }}
            </div>
          </template>
          <template v-else>
            No additional information.
          </template>
        </div>
      </Callout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { Meet } from '#shared/types/meet-type'

const store = useAppStore()
const app = useAppConfig()
const meets = store.meets

const dividerUi = {
  border: {
    base: 'block not-prose border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
  }
}

store.tocLinks = store.meets.map((meet: Meet) => ({
  id: meet.id,
  text: `${DateTime.fromJSDate(meet.date).toFormat('LLL d')} - ${meet.name}`,
  depth: 2
}))
</script>

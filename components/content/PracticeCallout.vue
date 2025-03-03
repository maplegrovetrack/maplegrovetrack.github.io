<template>
  <Callout>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
          {{ DateTime.fromJSDate(practice.date).toLocaleString(DateTime.DATE_HUGE) }}
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-clock" class="w-5 h-5" />
          <div v-if="useIsSpringBreakPractice(practice.type) || !practice.start">
            Dependent on event area.
          </div>
          <div v-else>
            {{ practice.start.hour }}:{{ practice.start.minute }} {{ practice.start.meridiem }} -
            {{ practice.end.hour }}:{{ practice.end.minute }} {{ practice.end.meridiem }}
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <WeightRoomCallout v-if="useIsWeightRoom(practice.type)" />
        <VarsityPracticeCallout v-if="useIsVarsityPractice(practice.type)" />
        <JVPracticeCallout v-if="useIsJvPractice(practice.type)" />
        <TryoutsCallout v-if="useIsTryoutPractice(practice.type)" />
        <SpringBreakPracticeCallout v-if="useIsSpringBreakPractice(practice.type)" />
        <OptionalPracticeCallout v-if="useIsOptionalPractice(practice.type)" />
      </div>
    </div>
  </Callout>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { Practice } from '~/types/practice-type'
import { useIsWeightRoom } from '~/composables/practices/use-is-weight-room'
import { useIsVarsityPractice } from '~/composables/practices/use-is-varsity-practice'
import { useIsJvPractice } from '~/composables/practices/use-is-jv-practice'
import { useIsTryoutPractice } from '~/composables/practices/use-is-tryout-practice'
import { useIsSpringBreakPractice } from '~/composables/practices/use-is-spring-break-practice'
import { useIsOptionalPractice } from '~/composables/practices/use-is-optional-practice'
import SpringBreakPracticeCallout from '~/components/content/SpringBreakPracticeCallout.vue'

defineProps<{ practice: Practice }>()
</script>

import { defineStore } from 'pinia'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'
import { useTrackPracticesLocalStorage } from '~/composables/practices/use-track-practices-local-storage'
import { useTrackPracticesSetLocalStorage } from '~/composables/practices/use-track-practices-set-local-storage'
import { useTryoutsSetLocalStorage } from '~/composables/practices/use-tryouts-set-local-storage'
import { useTryoutsLocalStorage } from '~/composables/practices/use-tryouts-local-storage'
import { useSpringBreakPracticesLocalStorage } from '~/composables/practices/use-spring-break-practices-local-storage'
import {
  useSpringBreakPracticesSetLocalStorage
} from '~/composables/practices/use-spring-break-practices-set-local-storage'
import { useOptionalPracticesLocalStorage } from '~/composables/practices/use-optional-practices-local-storage'
import { useOptionalPracticesSetLocalStorage } from '~/composables/practices/use-optional-practices-set-local-storage'

export const usePracticesStore = defineStore('practiceStore', () => {
  const weightRoom = ref(useWeightRoomLocalStorage() || true)
  const trackPractices = ref(useTrackPracticesLocalStorage() || true)
  const tryouts = ref(useTryoutsLocalStorage() || true)
  const springBreak = ref(useSpringBreakPracticesLocalStorage() || true)
  const optional = ref(useOptionalPracticesLocalStorage() || true)

  watch(weightRoom, value => useWeightRoomSetLocalStorage(value))
  watch(trackPractices, value => useTrackPracticesSetLocalStorage(value))
  watch(tryouts, value => useTryoutsSetLocalStorage(value))
  watch(springBreak, value => useSpringBreakPracticesSetLocalStorage(value))
  watch(optional, value => useOptionalPracticesSetLocalStorage(value))

  return {
    weightRoom,
    trackPractices,
    tryouts,
    springBreak,
    optional
  }
})

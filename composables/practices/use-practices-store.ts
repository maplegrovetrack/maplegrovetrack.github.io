import { defineStore } from 'pinia'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'
import { useVarsityPracticesLocalStorage } from '~/composables/practices/use-varsity-practices-local-storage'
import { useVarsityPracticesSetLocalStorage } from '~/composables/practices/use-varsity-practices-set-local-storage'
import { useTryoutsSetLocalStorage } from '~/composables/practices/use-tryouts-set-local-storage'
import { useTryoutsLocalStorage } from '~/composables/practices/use-tryouts-local-storage'
import { useSpringBreakPracticesLocalStorage } from '~/composables/practices/use-spring-break-practices-local-storage'
import {
  useSpringBreakPracticesSetLocalStorage
} from '~/composables/practices/use-spring-break-practices-set-local-storage'
import { useOptionalPracticesLocalStorage } from '~/composables/practices/use-optional-practices-local-storage'
import { useOptionalPracticesSetLocalStorage } from '~/composables/practices/use-optional-practices-set-local-storage'
import { useJvPracticesLocalStorage } from '~/composables/practices/use-jv-practices-local-storage'
import { useJvPracticesSetLocalStorage } from '~/composables/practices/use-jv-practices-set-local-storage'

export const usePracticesStore = defineStore('practiceStore', () => {
  const weightRoom = ref(useWeightRoomLocalStorage() || true)
  const varsityPractices = ref(useVarsityPracticesLocalStorage() || true)
  const jvPractices = ref(useJvPracticesLocalStorage() || true)
  const tryouts = ref(useTryoutsLocalStorage() || true)
  const springBreak = ref(useSpringBreakPracticesLocalStorage() || true)
  const optional = ref(useOptionalPracticesLocalStorage() || true)

  watch(weightRoom, value => useWeightRoomSetLocalStorage(value))
  watch(varsityPractices, value => useVarsityPracticesSetLocalStorage(value))
  watch(jvPractices, value => useJvPracticesSetLocalStorage(value))
  watch(tryouts, value => useTryoutsSetLocalStorage(value))
  watch(springBreak, value => useSpringBreakPracticesSetLocalStorage(value))
  watch(optional, value => useOptionalPracticesSetLocalStorage(value))

  return {
    weightRoom,
    varsityPractices,
    jvPractices,
    tryouts,
    springBreak,
    optional
  }
})

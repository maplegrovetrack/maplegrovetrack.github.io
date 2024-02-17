import { defineStore } from 'pinia'
import { useWeightRoomLocalStorage } from '~/composables/practices/use-weight-room-local-storage'
import { useWeightRoomSetLocalStorage } from '~/composables/practices/use-weight-room-set-local-storage'

export const usePracticesStore = defineStore('practiceStore', () => {
  const weightRoom = ref(useWeightRoomLocalStorage() || true)

  watch(weightRoom, value => useWeightRoomSetLocalStorage(value))

  return {
    weightRoom
  }
})

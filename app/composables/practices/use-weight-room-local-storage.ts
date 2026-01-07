import { useWeightRoomLocalStorageKey } from '~/composables/practices/use-weight-room-local-storage-key'
import { useVarsityPracticesLocalStorageKey } from '~/composables/practices/use-varsity-practices-local-storage-key'
import { useTryoutsLocalStorageKey } from '~/composables/practices/use-tryouts-local-storage-key'

export const useWeightRoomLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useWeightRoomLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

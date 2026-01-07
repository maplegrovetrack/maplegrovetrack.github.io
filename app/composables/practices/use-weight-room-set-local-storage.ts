import { useWeightRoomLocalStorageKey } from '~/composables/practices/use-weight-room-local-storage-key'

export const useWeightRoomSetLocalStorage = (value: boolean): void => {
  if (import.meta.client) {
    window.localStorage.setItem(useWeightRoomLocalStorageKey(), JSON.stringify(value))
  }
}

import { useWeightRoomLocalStorageKey } from './use-weight-room-local-storage-key'

export const useWeightRoomLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useWeightRoomLocalStorageKey()))
  }
  return true
}

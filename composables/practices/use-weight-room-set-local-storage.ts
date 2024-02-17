import { useWeightRoomLocalStorageKey } from './use-weight-room-local-storage-key'

export const useWeightRoomSetLocalStorage = (value: boolean): void => {
  if (process.client) {
    window.localStorage.setItem(useWeightRoomLocalStorageKey(), JSON.stringify(value))
  }
}

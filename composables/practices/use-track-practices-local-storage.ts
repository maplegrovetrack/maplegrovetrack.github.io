import { useTrackPracticesLocalStorageKey } from '~/composables/practices/use-track-practices-local-storage-key'

export const useTrackPracticesLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useTrackPracticesLocalStorageKey()))
  }
  return true
}

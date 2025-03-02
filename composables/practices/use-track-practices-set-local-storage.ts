import { useTrackPracticesLocalStorageKey } from '~/composables/practices/use-track-practices-local-storage-key'

export const useTrackPracticesSetLocalStorage = (value: boolean): void => {
  if (process.client) {
    window.localStorage.setItem(useTrackPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

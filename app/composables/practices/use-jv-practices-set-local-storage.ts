import { useJvPracticesLocalStorageKey } from '~/composables/practices/use-jv-practices-local-storage-key'

export const useJvPracticesSetLocalStorage = (value: boolean): void => {
  if (import.meta.client) {
    window.localStorage.setItem(useJvPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

import { useJvPracticesLocalStorageKey } from '~/composables/practices/use-jv-practices-local-storage-key'

export const useJvPracticesLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useJvPracticesLocalStorageKey()))
  }
  return true
}

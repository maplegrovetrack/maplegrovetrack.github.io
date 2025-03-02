import { useOptionalPracticesLocalStorageKey } from '~/composables/practices/use-optional-practices-local-storage-key'

export const useOptionalPracticesLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useOptionalPracticesLocalStorageKey()))
  }
  return true
}

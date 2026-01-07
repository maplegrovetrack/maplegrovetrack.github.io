import { useOptionalPracticesLocalStorageKey } from '~/composables/practices/use-optional-practices-local-storage-key'

export const useOptionalPracticesSetLocalStorage = (value: boolean): void => {
  if (import.meta.client) {
    window.localStorage.setItem(useOptionalPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

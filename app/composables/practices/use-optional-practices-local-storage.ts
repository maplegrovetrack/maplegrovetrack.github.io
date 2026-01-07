import { useOptionalPracticesLocalStorageKey } from '~/composables/practices/use-optional-practices-local-storage-key'

export const useOptionalPracticesLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useOptionalPracticesLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

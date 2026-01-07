import { useJvPracticesLocalStorageKey } from '~/composables/practices/use-jv-practices-local-storage-key'

export const useJvPracticesLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useJvPracticesLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

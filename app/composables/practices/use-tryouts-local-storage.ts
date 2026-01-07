import { useTryoutsLocalStorageKey } from '~/composables/practices/use-tryouts-local-storage-key'

export const useTryoutsLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useTryoutsLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

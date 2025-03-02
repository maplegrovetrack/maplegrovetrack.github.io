import { useTryoutsLocalStorageKey } from '~/composables/practices/use-tryouts-local-storage-key'

export const useTryoutsLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useTryoutsLocalStorageKey()))
  }
  return true
}

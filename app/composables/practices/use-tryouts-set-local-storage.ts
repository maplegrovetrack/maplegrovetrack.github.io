import { useTryoutsLocalStorageKey } from '~/composables/practices/use-tryouts-local-storage-key'

export const useTryoutsSetLocalStorage = (value: boolean): void => {
  if (import.meta.client) {
    window.localStorage.setItem(useTryoutsLocalStorageKey(), JSON.stringify(value))
  }
}

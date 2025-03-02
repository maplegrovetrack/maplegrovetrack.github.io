import { useTryoutsLocalStorageKey } from '~/composables/practices/use-tryouts-local-storage-key'

export const useTryoutsSetLocalStorage = (value: boolean): void => {
  if (process.client) {
    window.localStorage.setItem(useTryoutsLocalStorageKey(), JSON.stringify(value))
  }
}

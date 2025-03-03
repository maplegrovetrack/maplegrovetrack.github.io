import { useVarsityPracticesLocalStorageKey } from '~/composables/practices/use-varsity-practices-local-storage-key'

export const useVarsityPracticesSetLocalStorage = (value: boolean): void => {
  if (process.client) {
    window.localStorage.setItem(useVarsityPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

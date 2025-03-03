import { useVarsityPracticesLocalStorageKey } from '~/composables/practices/use-varsity-practices-local-storage-key'

export const useVarsityPracticesLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useVarsityPracticesLocalStorageKey()))
  }
  return true
}

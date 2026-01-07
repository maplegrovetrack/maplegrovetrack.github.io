import { useVarsityPracticesLocalStorageKey } from '~/composables/practices/use-varsity-practices-local-storage-key'

export const useVarsityPracticesLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useVarsityPracticesLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

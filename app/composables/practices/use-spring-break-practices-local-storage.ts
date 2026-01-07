import {
  useSpringBreakPracticesLocalStorageKey
} from '~/composables/practices/use-spring-break-practices-local-storage-key'

export const useSpringBreakPracticesLocalStorage = (): boolean => {
  if (import.meta.client) {
    const storage: string | null = window.localStorage.getItem(useSpringBreakPracticesLocalStorageKey())
    return storage ? JSON.parse(storage) : true
  }
  return true
}

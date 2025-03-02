import {
  useSpringBreakPracticesLocalStorageKey
} from '~/composables/practices/use-spring-break-practices-local-storage-key'

export const useSpringBreakPracticesLocalStorage = (): boolean => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(useSpringBreakPracticesLocalStorageKey()))
  }
  return true
}

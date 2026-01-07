import {
  useSpringBreakPracticesLocalStorageKey
} from '~/composables/practices/use-spring-break-practices-local-storage-key'

export const useSpringBreakPracticesSetLocalStorage = (value: boolean): void => {
  if (import.meta.client) {
    window.localStorage.setItem(useSpringBreakPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

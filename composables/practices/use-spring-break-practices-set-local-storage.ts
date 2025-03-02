import {
  useSpringBreakPracticesLocalStorageKey
} from '~/composables/practices/use-spring-break-practices-local-storage-key'

export const useSpringBreakPracticesSetLocalStorage = (value: boolean): void => {
  if (process.client) {
    window.localStorage.setItem(useSpringBreakPracticesLocalStorageKey(), JSON.stringify(value))
  }
}

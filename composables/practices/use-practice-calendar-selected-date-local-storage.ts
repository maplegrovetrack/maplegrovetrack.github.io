import { usePracticeCalendarSelectedDateLocalStorageKey } from './use-practice-calendar-selected-date-local-storage-key'

export const usePracticeCalendarSelectedDateLocalStorage = (): Date | null => {
  if (process.client) {
    return JSON.parse(window.localStorage.getItem(usePracticeCalendarSelectedDateLocalStorageKey()))
  }
  return null
}

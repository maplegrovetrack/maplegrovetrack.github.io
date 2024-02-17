import { usePracticeCalendarSelectedDateLocalStorageKey } from './use-practice-calendar-selected-date-local-storage-key'

export const usePracticeCalendarSetSelectedDateLocalStorage = (value: Date): void => {
  if (process.client) {
    window.localStorage.setItem(usePracticeCalendarSelectedDateLocalStorageKey(), JSON.stringify(value))
  }
}

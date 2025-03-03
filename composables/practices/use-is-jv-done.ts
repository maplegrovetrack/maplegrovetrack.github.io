import type { DateTime } from 'luxon'

export const useIsJvDone = (day: DateTime): boolean => {
  return day.month === 5 && day.day > 15
}

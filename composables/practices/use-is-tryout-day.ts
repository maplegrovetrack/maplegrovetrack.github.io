import type { DateTime } from 'luxon'

export const useIsTryoutDay = (day: DateTime): boolean => {
  return day.month === 3 && day.day >= 10 && day.day <= 14
}

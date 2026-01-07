import type { DateTime } from 'luxon'

export const useIsSpringBreakDay = (day: DateTime): boolean => {
  return day.month === 3 && day.day >= 24 && day.day <= 28
}

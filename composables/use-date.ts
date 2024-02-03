import { DateTime } from 'luxon'

export const useDate = (year: number, month: number, day: number): Date => {
  return DateTime.local(year, month, day, 0, 0, { zone: 'America/Chicago' }).toJSDate()
}

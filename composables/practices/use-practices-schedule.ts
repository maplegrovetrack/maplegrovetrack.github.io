import { DateTime, Interval } from 'luxon'
import type { Practice, PracticeType } from '~/types/practice-type'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'

export const usePracticesSchedule = (): Record<PracticeType, Array<Practice>> => {
  const firstPractice = DateTime.local(2025, 3, 10, 0, 0, { zone: 'America/Chicago' })
  const lastPractice = DateTime.local(2025, 5, 30, 0, 0, { zone: 'America/Chicago' })
  const interval = Interval.fromDateTimes(firstPractice, lastPractice)
  const daysInInterval = interval.splitBy({ day: 1 }).map(day => day.start)
  const weekDays = daysInInterval.filter(day => !day.isWeekend)
  return {
    TRYOUTS: weekDays
      .filter(day => day.month === 3 && day.day >= 10 && day.day <= 14)
      .map((day) => {
        return {
          id: `track-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          start: {
            hour: '3',
            minute: '00',
            meridiem: 'PM'
          },
          end: {
            hour: '4',
            minute: '45',
            meridiem: 'PM'
          },
          type: 'TRYOUTS'
        }
      }),
    OPTIONAL: daysInInterval
      .filter(day => day.weekday === 6)
      .map((day) => {
        return {
          id: `track-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          type: 'OPTIONAL'
        }
      }),
    WEIGHT_ROOM: useWeightRoomSchedule(),
    SPRING_BREAK: weekDays
      .filter(day => day.month === 3 && day.day >= 24 && day.day <= 28)
      .map((day) => {
        return {
          id: `track-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          type: 'SPRING_BREAK'
        }
      }),
    TRACK: weekDays
      .filter((day) => {
        if (day.month === 3 && day.day >= 10 && day.day <= 14) {
          return false
        }
        return !(day.month === 3 && day.day >= 24 && day.day <= 28)
      })
      .map((day) => {
        return {
          id: `track-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          start: {
            hour: '3',
            minute: '00',
            meridiem: 'PM'
          },
          end: {
            hour: '4',
            minute: '45',
            meridiem: 'PM'
          },
          type: 'TRACK'
        }
      })
  }
}

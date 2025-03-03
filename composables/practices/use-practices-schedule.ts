import { DateTime, Interval } from 'luxon'
import type { Practice, PracticeType } from '~/types/practice-type'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import { useMeetSchedule } from '~/composables/use-meet-schedule'
import { MeetType } from '~/types/meet-type'
import { useSchools } from '~/composables/use-schools'

export const usePracticesSchedule = (): Record<PracticeType, Array<Practice>> => {
  const firstPractice = DateTime.local(2025, 3, 10, 0, 0, { zone: 'America/Chicago' })
  const lastPractice = DateTime.local(2025, 5, 30, 0, 0, { zone: 'America/Chicago' })
  const interval = Interval.fromDateTimes(firstPractice, lastPractice)
  const daysInInterval = interval.splitBy({ day: 1 }).map(day => day.start)
  const weekDays = daysInInterval.filter(day => !day.isWeekend)
  const meetSchedule = useMeetSchedule()
  const schools = useSchools()
  return {
    // Get only the first week of practice
    TRYOUTS: weekDays
      .filter(day => day.month === 3 && day.day >= 10 && day.day <= 14)
      .map((day) => {
        return {
          id: `tryout-${day.toISODate({ format: 'basic' })}`,
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
          id: `optional-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          type: 'OPTIONAL'
        }
      }),
    WEIGHT_ROOM: useWeightRoomSchedule(),
    // Get the 3rd week in March
    SPRING_BREAK: weekDays
      .filter(day => day.month === 3 && day.day >= 24 && day.day <= 28)
      .map((day) => {
        return {
          id: `spring-break-${day.toISODate({ format: 'basic' })}`,
          date: day.toJSDate(),
          type: 'SPRING_BREAK'
        }
      }),
    // JV practice will run M-F until the last JV meet
    JV: weekDays
      .filter((day) => {
        // ignore tryouts
        if (day.month === 3 && day.day >= 10 && day.day <= 14) {
          return false
        }
        // ignore spring break
        if (day.month === 3 && day.day >= 24 && day.day <= 28) {
          return false
        }
        // ignore after last JV meet
        if (day.month === 5 && day.day > 15) {
          return false
        }
        // ignore jv meet days for jv practice
        const jvMeets = meetSchedule
          .filter(meet => meet.type === MeetType.JV || meet.type === MeetType.ALL)
          .map(meet => DateTime.fromJSDate(meet.date, { zone: 'America/Chicago' }).startOf('day'))
        return !jvMeets.find(meet => meet.equals(day.startOf('day')))
      })
      .map((day) => {
        return {
          id: `jv-${day.toISODate({ format: 'basic' })}`,
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
          type: 'JV'
        }
      }),
    // JV practice will run M-F until the section meet
    VARSITY: weekDays
      .filter((day) => {
        // ignore tryouts
        if (day.month === 3 && day.day >= 10 && day.day <= 14) {
          return false
        }
        // ignore spring break
        if (day.month === 3 && day.day >= 24 && day.day <= 28) {
          return false
        }
        // ignore varsity meet days for varsity practice, but ignore Hamline Elite Meet
        const varistyMeets = meetSchedule
          .filter((meet) => {
            if (meet.location?.name === schools.HAMLINE.name) {
              return false
            }
            return meet.type === MeetType.VARSITY || meet.type === MeetType.ALL
          })
          .map(meet => DateTime.fromJSDate(meet.date, { zone: 'America/Chicago' }).startOf('day'))
        return !varistyMeets.find(meet => meet.equals(day.startOf('day')))
      })
      .map((day) => {
        return {
          id: `varsity-${day.toISODate({ format: 'basic' })}`,
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
          type: 'VARSITY'
        }
      })
  }
}

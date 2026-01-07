import { DateTime, Interval } from 'luxon'
import type { Practice, PracticeType } from '#shared/types/practice-type'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import { useMeetSchedule } from '~/composables/use-meet-schedule'
import { MeetType } from '#shared/types/meet-type'
import { useSchools } from '~/composables/use-schools'
import { useIsSpringBreakDay } from '~/composables/practices/use-is-spring-break-day'
import { useIsTryoutDay } from '~/composables/practices/use-is-tryout-day'
import { useIsJvDone } from '~/composables/practices/use-is-jv-done'

export const usePracticesSchedule = (): Record<PracticeType, Array<Practice>> => {
  const firstPractice = DateTime.local(2025, 3, 10, 0, 0, { zone: 'America/Chicago' })
  const lastPractice = DateTime.local(2025, 5, 30, 0, 0, { zone: 'America/Chicago' })
  const interval = Interval.fromDateTimes(firstPractice, lastPractice)
  const daysInInterval = interval.splitBy({ day: 1 }).map(day => day.start)
  const weekDays = daysInInterval.flatMap(day => (day && day.isWeekend) ? [day] : [])
  const meetSchedule = useMeetSchedule()
  const schools = useSchools()
  return {
    // Get only the first week of practice
    TRYOUTS: weekDays
      .filter(day => useIsTryoutDay(day))
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
      .flatMap((day) => {
        return (day && day.weekday === 6)
          ? [{
              id: `optional-${day.toISODate({ format: 'basic' })}`,
              date: day.toJSDate(),
              type: 'OPTIONAL'
            }]
          : []
      }),
    WEIGHT_ROOM: useWeightRoomSchedule(),
    // Get the 3rd week in March
    SPRING_BREAK: weekDays
      .filter(day => useIsSpringBreakDay(day))
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
        if (useIsTryoutDay(day)) {
          return false
        }
        // ignore spring break
        if (useIsSpringBreakDay(day)) {
          return false
        }
        // ignore after last JV meet
        if (useIsJvDone(day)) {
          return false
        }
        // ignore jv meet days for jv practice, ingore Osseo 10th grade and under meet
        const jvMeets = meetSchedule
          .filter((meet) => {
            if (meet.id === '__4-30-2025__') {
              return false
            }
            return meet.type === MeetType.JV || meet.type === MeetType.ALL
          })
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
    // varsity practice will run M-F until the section meet
    VARSITY: weekDays
      .filter((day) => {
        // ignore tryouts
        if (useIsTryoutDay(day)) {
          return false
        }
        // ignore spring break
        if (useIsSpringBreakDay(day)) {
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

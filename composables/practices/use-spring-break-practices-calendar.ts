import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useSpringBreakPracticesCalendar = (): any => {
  return {
    key: 'spring-break-practice-schedule',
    dot: 'teal',
    dates: [
      ...usePracticesSchedule().SPRING_BREAK.map((practice: Practice) => practice.date)
    ]
  }
}

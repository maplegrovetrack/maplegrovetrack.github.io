import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useOptionalPracticesCalendar = (): any => {
  return {
    key: 'optional-practice-schedule',
    dot: 'orange',
    dates: [
      ...usePracticesSchedule().OPTIONAL.map((practice: Practice) => practice.date)
    ]
  }
}

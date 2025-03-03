import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useVarsityPracticesCalendar = (): any => {
  return {
    key: 'varsity-practice-schedule',
    dot: 'red',
    dates: [
      ...usePracticesSchedule().VARSITY.map((practice: Practice) => practice.date)
    ]
  }
}

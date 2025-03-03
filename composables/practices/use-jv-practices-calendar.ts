import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useJvPracticesCalendar = (): any => {
  return {
    key: 'jv-practice-schedule',
    dot: 'purple',
    dates: [
      ...usePracticesSchedule().JV.map((practice: Practice) => practice.date)
    ]
  }
}

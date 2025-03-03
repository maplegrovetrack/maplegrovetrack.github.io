import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useJvPracticesCalendar = (): AttributeConfig => {
  return {
    key: 'jv-practice-schedule',
    dot: 'purple',
    dates: [
      ...usePracticesSchedule().JV.map((practice: Practice) => practice.date)
    ]
  }
}

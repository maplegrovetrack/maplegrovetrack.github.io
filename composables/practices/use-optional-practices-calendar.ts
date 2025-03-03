import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useOptionalPracticesCalendar = (): AttributeConfig => {
  return {
    key: 'optional-practice-schedule',
    dot: 'orange',
    dates: [
      ...usePracticesSchedule().OPTIONAL.map((practice: Practice) => practice.date)
    ]
  }
}

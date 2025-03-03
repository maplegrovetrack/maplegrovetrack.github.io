import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useVarsityPracticesCalendar = (): AttributeConfig => {
  return {
    key: 'varsity-practice-schedule',
    dot: 'red',
    dates: [
      ...usePracticesSchedule().VARSITY.map((practice: Practice) => practice.date)
    ]
  }
}

import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '#shared/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useSpringBreakPracticesCalendar = (): AttributeConfig => {
  return {
    key: 'spring-break-practice-schedule',
    dot: 'teal',
    dates: [
      ...usePracticesSchedule().SPRING_BREAK.map((practice: Practice) => practice.date)
    ]
  }
}

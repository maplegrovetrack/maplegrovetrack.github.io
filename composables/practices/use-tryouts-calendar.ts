import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useTryoutsCalendar = (): AttributeConfig => {
  return {
    key: 'tryouts-schedule',
    dot: 'yellow',
    dates: [
      ...usePracticesSchedule().TRYOUTS.map((practice: Practice) => practice.date)
    ]
  }
}

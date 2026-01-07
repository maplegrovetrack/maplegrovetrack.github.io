import type { AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute.d.ts'
import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import type { Practice } from '#shared/types/practice-type'

export const useWeightRoomCalendar = (): AttributeConfig => {
  return {
    key: 'weight-room-schedule',
    dot: 'blue',
    dates: [
      ...useWeightRoomSchedule().map((practice: Practice) => practice.date)
    ]
  }
}

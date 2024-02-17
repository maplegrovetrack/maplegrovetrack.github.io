import { useWeightRoomSchedule } from '~/composables/practices/use-weight-room-schedule'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomCalendar = (): any => {
  return {
    key: 'weight-room-schedule',
    dot: 'blue',
    dates: [
      ...useWeightRoomSchedule().map((practice: Practice) => practice.date)
    ]
  }
}

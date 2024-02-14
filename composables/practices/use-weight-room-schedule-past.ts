import { DateTime } from 'luxon'
import { useWeightRoomSchedule } from './use-weight-room-schedule'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomSchedulePast = (): Practice[] => {
  return useWeightRoomSchedule().filter((practice: Practice): boolean => {
    return DateTime.now().startOf('day') > DateTime.fromJSDate(practice.date).startOf('day')
  })
}

import { DateTime } from 'luxon'
import { useWeightRoomSchedule } from './use-weight-room-schedule'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomScheduleFuture = (): Practice[] => {
  return useWeightRoomSchedule().filter((practice: Practice): boolean => {
    return DateTime.now() < DateTime.fromJSDate(practice.date)
  })
}

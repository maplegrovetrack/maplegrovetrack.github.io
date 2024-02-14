import { DateTime } from 'luxon'
import { useWeightRoomSchedule } from './use-weight-room-schedule'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomScheduleFuture = (): Practice[] => {
  return useWeightRoomSchedule().filter((practice: Practice): boolean => {
    const now = DateTime.now().startOf('day')
    const practiceDate = DateTime.fromJSDate(practice.date).startOf('day')
    return practiceDate.equals(now) || now < practiceDate
  })
}

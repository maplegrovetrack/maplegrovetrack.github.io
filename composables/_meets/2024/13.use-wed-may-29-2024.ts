import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useWedMay292024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-29-2024__',
    name: 'Section 5AAA Championships - Prelims',
    date: useDate(2024, 5, 29),
    location: schools.FL,
    transport: 'TBD',
    type: MeetType.VARSITY,
    start: undefined,
    end: undefined
  }
}

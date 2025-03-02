import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useFriMay312024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-31-2024__',
    name: 'Section 5AAA Championships - Finals',
    date: useDate(2024, 5, 31),
    location: schools.FL,
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: [
      'Top 3 in each event and 1 of each relay.'
    ],
    start: undefined,
    end: undefined
  }
}

import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useSatJun82024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-8-2024__',
    name: 'State Championships - Finals',
    date: useDate(2024, 6, 8),
    location: schools.STMA,
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: [
      'Those who qualify at the section meet.'
    ],
    teamAppLink: '/23676646-mshsl-class-aaa-state-championships-finals-qualifying-athletes',
    start: undefined,
    end: undefined
  }
}

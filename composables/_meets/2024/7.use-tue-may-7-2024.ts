import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useWedMay72024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-7-2024__',
    name: 'True Team',
    date: useDate(2024, 5, 7),
    location: schools.EK,
    type: MeetType.VARSITY,
    teamAppLink: '/23676402-true-team-sections-varsity',
    transport: 'TBD',
    start: undefined,
    end: undefined
  }
}

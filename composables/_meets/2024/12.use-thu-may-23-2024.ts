import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useThuMay232024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-23-2024__',
    name: 'Northwest Suburban Conference Championships - Finals',
    date: useDate(2024, 5, 23),
    location: schools.EK,
    transport: 'TBD',
    type: MeetType.VARSITY,
    teamAppLink: '/23676533-northwest-suburban-conference-championships-finals-varsity',
    start: undefined,
    end: undefined
  }
}

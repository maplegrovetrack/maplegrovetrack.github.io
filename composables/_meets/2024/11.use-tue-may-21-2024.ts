import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueMay212024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-21-2024__',
    name: 'Northwest Suburban Conference Championships - Prelims',
    date: useDate(2024, 5, 21),
    location: schools.EK,
    transport: 'TBD',
    type: MeetType.VARSITY,
    teamAppLink: '/23676521-northwest-suburban-conference-championships-prelims-varsity',
    start: undefined,
    end: undefined
  }
}

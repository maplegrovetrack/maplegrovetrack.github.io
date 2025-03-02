import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useThuJun62024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-6-2024__',
    name: 'State Championships - Prelims',
    date: useDate(2024, 6, 6),
    location: schools.STMA,
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: [
      'Those who qualify at the section meet.'
    ],
    teamAppLink: '/23676635-mshsl-class-aaa-state-championships-prelims-qualifying-athletes',
    start: undefined,
    end: undefined
  }
}

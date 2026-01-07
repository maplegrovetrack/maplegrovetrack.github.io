import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useThuJun122025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-12-2025__',
    name: 'State Championships - Finals',
    date: useDate(2025, 6, 12),
    location: schools.STMA,
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: [
      'Those who qualify at the section meet.'
    ],
    teamAppLink: '/27254941-mshsl-class-aaa-state-championships-finals-qualifying-athletes',
    start: {
      hour: '3',
      minute: '30',
      meridiem: 'PM'
    },
    end: {
      hour: '6',
      minute: '30',
      meridiem: 'PM'
    }
  }
}

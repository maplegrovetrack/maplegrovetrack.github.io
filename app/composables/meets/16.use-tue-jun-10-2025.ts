import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useTueJun102025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-10-2025__',
    name: 'State Championships - Prelims',
    date: useDate(2025, 6, 10),
    location: schools.STMA,
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: [
      'Those who qualify at the section meet.'
    ],
    teamAppLink: '/27254936-mshsl-class-aaa-state-championships-prelims-qualifying-athletes',
    start: {
      hour: '9',
      minute: '00',
      meridiem: 'AM'
    },
    end: {
      hour: '2',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

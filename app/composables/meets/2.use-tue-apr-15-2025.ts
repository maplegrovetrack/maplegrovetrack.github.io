import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useTueApr152025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-15-2025__',
    name: 'Spring Lake Park Track Meet',
    date: useDate(2025, 4, 15),
    location: schools.SLP,
    type: MeetType.ALL,
    transport: 'To and from the meet',
    notes: [
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254647-away-meet-spring-lake-park-full-team',
    start: {
      hour: '3',
      minute: '30',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

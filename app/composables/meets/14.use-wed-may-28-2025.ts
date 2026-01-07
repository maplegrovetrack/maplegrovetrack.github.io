import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useWedMay282025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-28-2025__',
    name: 'Section 5AAA Championships - Prelims',
    date: useDate(2025, 5, 28),
    location: schools.FL,
    transport: 'To and from the meet',
    type: MeetType.VARSITY,
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/23676551-section-5aaa-prelims-varsity',
    start: {
      hour: '5',
      minute: '00',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '30',
      meridiem: 'PM'
    }
  }
}

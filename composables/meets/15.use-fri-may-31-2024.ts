import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useFriMay302025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-30-2025__',
    name: 'Section 5AAA Championships - Finals',
    date: useDate(2025, 5, 30),
    location: schools.FL,
    transport: 'To and from the meet',
    type: MeetType.VARSITY,
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/23676558-section-5aaa-finals-varsity',
    start: {
      hour: '11',
      minute: '30',
      meridiem: 'AM'
    },
    end: {
      hour: '3',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useWedMay212025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-21-2025__',
    name: 'Northwest Suburban Conference Championships - Finals',
    date: useDate(2025, 5, 21),
    location: schools.EK,
    transport: 'To and from the meet',
    type: MeetType.VARSITY,
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254913-northwest-suburban-conference-championships-finals-varsity',
    start: {
      hour: '3',
      minute: '00',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

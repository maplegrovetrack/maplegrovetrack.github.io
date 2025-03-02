import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueMay132025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-13-2025__',
    name: 'District 279 Championships',
    date: useDate(2025, 5, 13),
    location: schools.OSSEO,
    type: MeetType.VARSITY,
    transport: 'Athletes must find a ride',
    notes: [
      'Top 8 in each event and 2 of each relay.',
      'There will be no bus to or home from Osseo Senior High.'
    ],
    teamAppLink: '/27254829-district-279-championships-varsity',
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

import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useThuMay152025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-15-2025__',
    name: 'JV Conference Championship',
    date: useDate(2025, 5, 15),
    location: schools.MG,
    type: MeetType.JV,
    transport: 'N/A',
    notes: [
      'Athletes not competing at the varsity conference meet 5/20 and 5/21.',
      'Varsity athletes are in charge of running this meet.'
    ],
    teamAppLink: '/27254238-home-meet-jv-conference',
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

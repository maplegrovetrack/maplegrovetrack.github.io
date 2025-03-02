import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr292025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-29-2025__',
    name: 'Crimson Invite',
    date: useDate(2025, 4, 29),
    location: schools.MG,
    type: MeetType.VARSITY,
    transport: 'N/A',
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'JV athletes are in charge of running this meet.'
    ],
    teamAppLink: '/27254247-home-meet-crimson-invite-varsity',
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

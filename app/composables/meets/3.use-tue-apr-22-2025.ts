import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useTueApr222025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-22-2025__',
    name: 'Minnetonka Invite',
    date: useDate(2025, 4, 22),
    location: schools.MINNETONKA,
    type: MeetType.VARSITY,
    transport: 'To and from the meet',
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254659-minnetonka-invite-varsity',
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

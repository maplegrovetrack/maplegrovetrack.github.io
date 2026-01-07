import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useFriApr252025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-25-2025__',
    name: 'Hamline Elite Meet',
    date: useDate(2025, 4, 25),
    location: schools.HAMLINE,
    type: MeetType.VARSITY,
    transport: 'To and from the meet',
    notes: [
      'This meet is by qualification only. Invites will be determined Wednesday or Thursday the week of 4/23.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254683-hamline-elite-meet',
    start: {
      hour: '4',
      minute: '30',
      meridiem: 'PM'
    },
    end: {
      hour: '9',
      minute: '30',
      meridiem: 'PM'
    }
  }
}

import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr82025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-8-2025__',
    name: 'Dual Meet with Osseo',
    date: useDate(2025, 4, 8),
    location: schools.MG,
    type: MeetType.ALL,
    transport: 'N/A',
    notes: [
      'Parent volunteers needed!',
      'This meet is hand timed.'
    ],
    teamAppLink: '/27254056-home-meet-dual-with-osseo-full-team',
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

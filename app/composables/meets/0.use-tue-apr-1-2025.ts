import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useTueApr12025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-1-2025__',
    name: 'Dual Meet with Blaine',
    date: useDate(2025, 4, 1),
    location: schools.MG,
    transport: 'N/A',
    type: MeetType.ALL,
    notes: [
      'Parent volunteers needed!',
      'This meet is hand timed.'
    ],
    teamAppLink: '/27253923-home-meet-dual-with-blaine-full-team',
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

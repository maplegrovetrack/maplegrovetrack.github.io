import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useThuApr242025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-25-2025__',
    name: 'JV Home Meet',
    date: useDate(2025, 4, 24),
    location: schools.MG,
    type: MeetType.JV,
    transport: 'N/A',
    notes: [
      'Athletes that did not compete at Minnetonka invite.',
      'Varsity athletes are in charge of running this meet',
      'This meet is hand timed.'
    ],
    teamAppLink: '/27254155-home-meet-jv',
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

import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useThuMay162024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-16-2024__',
    name: 'JV Conference Championship',
    date: useDate(2024, 5, 16),
    location: schools.MG,
    schools: [schools.MG],
    type: MeetType.JV,
    transport: 'N/A',
    notes: 'All athletes not competing at NWSC Championships.',
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

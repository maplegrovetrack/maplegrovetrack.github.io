import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useTueApr22024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-2-2024__',
    name: 'Dual Meet',
    date: new Date(2024, 3, 2),
    location: schools.MG,
    schools: [schools.BLAINE],
    transport: 'N/A',
    type: MeetType.ALL,
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

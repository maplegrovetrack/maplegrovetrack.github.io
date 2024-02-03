import { useSchools } from '../use-schools'
import { useDate } from '..//use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr22024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-2-2024__',
    name: 'Dual Meet',
    date: useDate(2024, 4, 2),
    location: schools.MG,
    schools: [schools.MG, schools.BLAINE],
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

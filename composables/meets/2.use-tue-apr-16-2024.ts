import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useTueApr162024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-16-2024__',
    name: 'Quad Meet',
    date: useDate(2024, 4, 16),
    location: schools.MG,
    schools: [schools.MG, schools.ROGERS, schools.EK, schools.CR],
    type: MeetType.ALL,
    transport: 'N/A',
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

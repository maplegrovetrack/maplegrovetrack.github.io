import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useTueApr92024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-9-2024__',
    name: 'Triangular Meet',
    date: useDate(2024, 4, 9),
    location: schools.MG,
    schools: [schools.MG, schools.ROGERS, schools.OSSEO],
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

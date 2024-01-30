import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useThuApr252024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-25-2024__',
    name: 'Anoka',
    date: new Date(2024, 3, 25),
    location: schools.ANOKA,
    schools: [schools.MG, schools.BLAINE, schools.ANOKA, schools.OSSEO, schools.SLP],
    type: MeetType.JV,
    transport: 'TBD',
    notes: 'All athletes that did not compete at Minnetonka invite.',
    start: {
      hour: '4',
      minute: '00',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

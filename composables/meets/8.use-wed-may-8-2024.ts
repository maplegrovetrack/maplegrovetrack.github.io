import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useWedMay82024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-8-2024__',
    name: 'True Team JV',
    date: new Date(2024, 4, 8),
    location: schools.PC,
    schools: [schools.MG, schools.PC],
    type: MeetType.JV,
    transport: 'TBD',
    notes: 'All athletes that did not compete at True Team.',
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

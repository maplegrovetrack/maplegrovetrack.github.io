import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useTueMay142024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-14-2024__',
    name: 'District 279 Championships',
    date: new Date(2024, 4, 14),
    location: schools.OSSEO,
    schools: [schools.OSSEO, schools.PC],
    type: MeetType.VARSITY,
    transport: 'TBD',
    notes: 'Top 8 in each event and 2 of each relay.',
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

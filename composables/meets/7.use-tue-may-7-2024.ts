import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useWedMay72024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-7-2024__',
    name: 'True Team',
    date: new Date(2024, 4, 7),
    location: schools.EK,
    schools: [],
    type: MeetType.VARSITY,
    transport: 'TBD',
    notes: 'Top 3 in each event and 1 of each relay.',
    start: undefined,
    end: undefined
  }
}

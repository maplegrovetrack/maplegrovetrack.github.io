import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useThuMay232024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-23-2024__',
    name: 'Northwest Suburban Conference Championships - Finals',
    date: new Date(2024, 4, 23),
    location: schools.EK,
    schools: [schools.MG],
    transport: 'TBD',
    notes: 'Top 3 in each event and 1 of each relay.',
    type: MeetType.VARSITY,
    start: undefined,
    end: undefined
  }
}

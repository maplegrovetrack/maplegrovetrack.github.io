import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useWedMay292024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-29-2024__',
    name: 'Section 5AAA Championships - Prelims',
    date: useDate(2024, 5, 29),
    location: undefined,
    schools: [
      schools.MG,
      schools.PC,
      schools.OSSEO,
      schools.ROSEVILLE,
      schools.IRONDALE,
      schools.MV,
      schools.SLP,
      schools.CP
    ],
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: 'Top 3 in each event and 1 of each relay.',
    start: undefined,
    end: undefined
  }
}

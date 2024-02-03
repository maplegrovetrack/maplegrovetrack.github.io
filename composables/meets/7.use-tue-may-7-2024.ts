import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useWedMay72024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-7-2024__',
    name: 'True Team',
    date: useDate(2024, 5, 7),
    location: schools.EK,
    schools: [
      schools.MG,
      schools.ANDOVER,
      schools.ANOKA,
      schools.CP,
      schools.CR,
      schools.EK,
      schools.OSSEO,
      schools.ROGERS,
      schools.STMA
    ],
    type: MeetType.VARSITY,
    transport: 'TBD',
    notes: 'Top 3 in each event and 1 of each relay.',
    start: undefined,
    end: undefined
  }
}

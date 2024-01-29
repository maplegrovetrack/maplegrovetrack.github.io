import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useTueMay212024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-21-2024__',
    name: 'Northwest Suburban Conference Championships - Prelims',
    date: new Date(2024, 4, 21),
    location: schools.EK,
    schools: [
      schools.MG,
      schools.ANDOVER,
      schools.ANOKA,
      schools.ARMSTRONG,
      schools.BLAINE,
      schools.CENTENNIAL,
      schools.CP,
      schools.CR,
      schools.EK,
      schools.OSSEO,
      schools.PC,
      schools.ROGERS,
      schools.SLP,
      schools.TG
    ],
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: 'Top 3 in each event and 1 of each relay.',
    start: undefined,
    end: undefined
  }
}

import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useThuJun62024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-6-2024__',
    name: 'State Championships - Prelims',
    date: useDate(2024, 6, 6),
    location: schools.STMA,
    schools: [],
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: 'Those who qualify at the section meet.',
    start: undefined,
    end: undefined
  }
}

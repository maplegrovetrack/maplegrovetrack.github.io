import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useSatJun82024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__6-8-2024__',
    name: 'State Championships - Finals',
    date: new Date(2024, 5, 8),
    location: schools.STMA,
    schools: [],
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: 'Those who qualify at the section meet.',
    start: undefined,
    end: undefined
  }
}

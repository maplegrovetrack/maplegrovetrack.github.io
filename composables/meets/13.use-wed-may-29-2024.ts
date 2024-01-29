import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'

export const useWedMay292024 = (): Meet => {
  return {
    id: '__5-29-2024__',
    name: 'Section 5AA Championships - Prelims',
    date: new Date(2024, 4, 29),
    location: undefined,
    schools: [],
    transport: 'TBD',
    type: MeetType.VARSITY,
    notes: 'Top 3 in each event and 1 of each relay.',
    start: undefined,
    end: undefined
  }
}

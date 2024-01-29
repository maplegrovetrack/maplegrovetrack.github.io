import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'

export const useTueApr232024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-23-2024__',
    name: 'Minnetonka Invite',
    date: new Date(2024, 3, 23),
    location: schools.MINNETONKA,
    schools: [],
    type: MeetType.VARSITY,
    transport: 'TBD',
    notes: 'Top 3 in each event and 1 of each relay.',
    start: {
      hour: '3',
      minute: '00',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

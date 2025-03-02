import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useThuMay162024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-16-2024__',
    name: 'JV Conference Championship',
    date: useDate(2024, 5, 16),
    location: schools.MG,
    type: MeetType.JV,
    transport: 'N/A',
    teamAppLink: '/23676443-jv-conference-championships-jv',
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

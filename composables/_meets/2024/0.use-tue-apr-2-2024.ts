import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr22024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-2-2024__',
    name: 'Dual Meet',
    date: useDate(2024, 4, 2),
    location: schools.MG,
    transport: 'N/A',
    type: MeetType.ALL,
    teamAppLink: '/23676245-dual-meet-full-team',
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

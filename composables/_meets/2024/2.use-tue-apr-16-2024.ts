import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr162024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-16-2024__',
    name: 'Quad Meet',
    date: useDate(2024, 4, 16),
    location: schools.MG,
    type: MeetType.ALL,
    transport: 'N/A',
    teamAppLink: '/23676260-triangular-meet-full-team',
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

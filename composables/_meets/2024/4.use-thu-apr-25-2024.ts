import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useThuApr252024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-25-2024__',
    name: 'Anoka',
    date: useDate(2024, 4, 25),
    location: schools.ANOKA,
    type: MeetType.JV,
    transport: 'TBD',
    teamAppLink: '/23676335-anoka-jv',
    start: {
      hour: '4',
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

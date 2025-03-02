import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useThuMay22024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-2-2024__',
    name: 'Osseo JV Invitational',
    date: useDate(2024, 5, 2),
    location: schools.OSSEO,
    type: MeetType.JV,
    transport: 'N/A',
    teamAppLink: '/23676379-osseo-jv-invitational-10th-and-under',
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

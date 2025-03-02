import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr302024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-30-2024__',
    name: 'Crimson Invite',
    date: useDate(2024, 4, 30),
    location: schools.MG,
    type: MeetType.VARSITY,
    transport: 'N/A',
    teamAppLink: '/23676357-crimson-invite-varsity',
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

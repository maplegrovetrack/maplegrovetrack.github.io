import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueApr232024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-23-2024__',
    name: 'Minnetonka Invite',
    date: useDate(2024, 4, 23),
    location: schools.MINNETONKA,
    type: MeetType.VARSITY,
    transport: 'TBD',
    teamAppLink: '/23676311-minnetonka-invite-varsity',
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

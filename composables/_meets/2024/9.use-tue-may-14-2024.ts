import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { ArchivedMeet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useTueMay142024 = (): ArchivedMeet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-14-2024__',
    name: 'District 279 Championships',
    date: useDate(2024, 5, 14),
    location: schools.OSSEO,
    type: MeetType.VARSITY,
    transport: 'TBD',
    teamAppLink: '/23676428-district-279-championships-varsity',
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

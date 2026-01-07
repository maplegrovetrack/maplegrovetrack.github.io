import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useTueMay62025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-6-2025__',
    name: 'True Team Sections',
    date: useDate(2025, 5, 6),
    location: schools.ROGERS,
    type: MeetType.VARSITY,
    transport: 'To and from the meet',
    notes: [
      'Top 3 in each event and 1 of each relay.',
      'Boys PV and HJ begin at 12:00 PM.',
      'All other field events begin at 3:45 PM.',
      'Bus for boys PV and HJ leaves MGSH door D @ TBD.',
      'Busses for the rest of the team leaves MGSH door D @ TBD and busses return to MGSH door D after meet.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254803-true-team-sections-varsity',
    start: {
      hour: '3',
      minute: '45',
      meridiem: 'PM'
    },
    end: {
      hour: '8',
      minute: '00',
      meridiem: 'PM'
    }
  }
}

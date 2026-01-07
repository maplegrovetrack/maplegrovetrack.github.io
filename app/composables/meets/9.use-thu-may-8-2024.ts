import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '#shared/types/meet-type'
import { MeetType } from '#shared/types/meet-type'
import type { School, SchoolKey } from '#shared/types/schools'

export const useThuMay82025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-8-2025__',
    name: 'True Team Sections JV',
    date: useDate(2025, 5, 8),
    location: schools.PC,
    type: MeetType.JV,
    transport: 'To and from the meet',
    notes: [
      'All athletes not competing at varsity true team on 5/6.',
      'All athletes must ride the bus to and home from the meet.'
    ],
    teamAppLink: '/27254815-true-team-sections-jv',
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

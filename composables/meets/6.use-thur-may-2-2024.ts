import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'
import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'

export const useThuMay22024 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__5-2-2024__',
    name: 'Osseo JV Invitational',
    date: useDate(2024, 5, 2),
    location: schools.OSSEO,
    schools: [schools.MG, schools.OSSEO],
    type: MeetType.JV,
    transport: 'N/A',
    notes: 'Athletes that did not compete at Crimson Invite and that are 10th grade or younger.',
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

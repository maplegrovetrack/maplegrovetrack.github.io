import { useSchools } from '~/composables/use-schools'
import { useDate } from '~/composables/use-date'
import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import type { School, SchoolKey } from '~/types/schools'

export const useWedApr302025 = (): Meet => {
  const schools: Record<SchoolKey, School> = useSchools()
  return {
    id: '__4-30-2025__',
    name: 'Osseo JV Invitational',
    date: useDate(2025, 4, 30),
    location: schools.OSSEO,
    type: MeetType.JV,
    transport: 'Athletes must find a ride',
    notes: [
      'Athletes that did not compete at Crimson Invite and that are 10th grade or younger.',
      'There is no bus to this meet. Carpool or find a ride.',
      'Park in the Osseo Senior High lot. Do not park at the middle school.'
    ],
    teamAppLink: '/27254722-osseo-jv-invitational-10th-grade-and-under',
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

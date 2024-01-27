import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import { Schools } from '~/types/schools'

export const useMeetSchedule = (): Meet[] => {
  return [
    {
      id: '3_2_2024_mg_blaine',
      name: 'Blaine Dual Meet',
      date: new Date(2024, 3, 2),
      location: Schools.MG,
      schools: [Schools.MG, Schools.BLAINE],
      type: MeetType.ALL,
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
  ]
}

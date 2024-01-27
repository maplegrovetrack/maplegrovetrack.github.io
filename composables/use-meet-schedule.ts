import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import { useSchools } from '~/composables/use-schools'

export const useMeetSchedule = (): Meet[] => {
  const schools = useSchools()
  return [
    {
      id: '3_2_2024_mg_blaine',
      name: 'Blaine Dual Meet',
      date: new Date(2024, 3, 2),
      location: schools.MG,
      schools: [schools.MG, schools.BLAINE],
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

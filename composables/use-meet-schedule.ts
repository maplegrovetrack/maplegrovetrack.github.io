import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import { useSchools } from '~/composables/use-schools'
import type { School, SchoolKey } from '~/types/schools'

export const useMeetSchedule = (): Meet[] => {
  const schools: Record<SchoolKey, School> = useSchools()
  return [
    {
      id: '4_2_2024_dual_meet',
      name: 'Dual Meet',
      date: new Date(2024, 3, 2),
      location: schools.MG,
      schools: [schools.BLAINE],
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
    },
    {
      id: '4_9_2024_triangular_meet',
      name: 'Triangular Meet',
      date: new Date(2024, 3, 9),
      location: schools.MG,
      schools: [schools.ROGERS, schools.OSSEO],
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
    },
    {
      id: '4_16_2024_quad_meet',
      name: 'Quad Meet',
      date: new Date(2024, 3, 16),
      location: schools.MG,
      schools: [schools.ROGERS, schools.EK, schools.CR],
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

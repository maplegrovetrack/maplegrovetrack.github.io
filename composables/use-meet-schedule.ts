import type { Meet } from '~/types/meet-type'
import { MeetType } from '~/types/meet-type'
import { useSchools } from '~/composables/use-schools'
import type { School, SchoolKey } from '~/types/schools'

export const useMeetSchedule = (): Meet[] => {
  const schools: Record<SchoolKey, School> = useSchools()
  return [
    {
      id: '_4_2_2024_dual_meet',
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
      id: '_4_9_2024_triangular_meet',
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
      id: '_4_16_2024_quad_meet',
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
    },
    {
      id: '_4_23_2024_minnetonka_invite',
      name: 'Minnetonka Invite',
      date: new Date(2024, 3, 23),
      location: schools.MINNETONKA,
      schools: [],
      type: MeetType.VARSITY,
      start: {
        hour: '4',
        minute: '00',
        meridiem: 'PM'
      },
      end: {
        hour: '8',
        minute: '00',
        meridiem: 'PM'
      }
    },
    {
      id: '_4_25_2024_anoka',
      name: 'Anoka',
      date: new Date(2024, 3, 25),
      location: schools.ANOKA,
      schools: [schools.BLAINE, schools.ANOKA, schools.OSSEO, schools.SLP],
      type: MeetType.JV,
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
    },
    {
      id: '_4_30_2024_crimson_invite',
      name: 'Crimson Invite',
      date: new Date(2024, 3, 30),
      location: schools.MG,
      schools: [],
      type: MeetType.VARSITY,
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
      id: '_5_7_2024_osseo_jv',
      name: 'True Team',
      date: new Date(2024, 4, 7),
      location: schools.EK,
      schools: [],
      type: MeetType.VARSITY
    }
  ]
}

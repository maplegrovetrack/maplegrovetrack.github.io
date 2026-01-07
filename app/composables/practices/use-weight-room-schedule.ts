import { useDate } from '~/composables/use-date'
import type { Practice } from '#shared/types/practice-type'

export const useWeightRoomSchedule = (): Array<Practice> => {
  return [
    {
      id: 'weight-room-1',
      date: useDate(2025, 3, 12),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-2',
      date: useDate(2025, 3, 15),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-3',
      date: useDate(2025, 3, 19),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-4',
      date: useDate(2025, 3, 22),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-5',
      date: useDate(2025, 3, 26),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-6',
      date: useDate(2025, 3, 29),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-7',
      date: useDate(2025, 4, 2),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-8',
      date: useDate(2025, 4, 5),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-9',
      date: useDate(2025, 4, 9),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-10',
      date: useDate(2025, 4, 12),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-11',
      date: useDate(2025, 4, 16),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-12',
      date: useDate(2025, 4, 19),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-13',
      date: useDate(2025, 4, 23),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-14',
      date: useDate(2025, 4, 26),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-15',
      date: useDate(2025, 4, 30),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-16',
      date: useDate(2025, 5, 3),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-17',
      date: useDate(2025, 5, 7),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-18',
      date: useDate(2025, 5, 10),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-19',
      date: useDate(2025, 5, 14),
      start: {
        hour: '6',
        minute: '00',
        meridiem: 'AM'
      },
      end: {
        hour: '7',
        minute: '00',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    },
    {
      id: 'weight-room-20',
      date: useDate(2025, 5, 17),
      start: {
        hour: '9',
        minute: '30',
        meridiem: 'AM'
      },
      end: {
        hour: '10',
        minute: '30',
        meridiem: 'AM'
      },
      type: 'WEIGHT_ROOM'
    }
  ]
}

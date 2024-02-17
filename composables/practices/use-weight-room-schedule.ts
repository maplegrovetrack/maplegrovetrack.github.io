import { useDate } from '../use-date'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomSchedule = (): Array<Practice> => {
  return [
    {
      id: 'weight-room-1',
      date: useDate(2024, 3, 13),
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
      date: useDate(2024, 3, 16),
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
      date: useDate(2024, 3, 20),
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
      date: useDate(2024, 4, 3),
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
      id: 'weight-room-5',
      date: useDate(2024, 4, 6),
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
      date: useDate(2024, 4, 10),
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
      id: 'weight-room-7',
      date: useDate(2024, 4, 13),
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
      id: 'weight-room-8',
      date: useDate(2024, 4, 17),
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
      id: 'weight-room-9',
      date: useDate(2024, 4, 20),
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
      id: 'weight-room-10',
      date: useDate(2024, 4, 24),
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
      id: 'weight-room-11',
      date: useDate(2024, 4, 27),
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
      id: 'weight-room-12',
      date: useDate(2024, 5, 1),
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
      id: 'weight-room-13',
      date: useDate(2024, 5, 4),
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
      id: 'weight-room-14',
      date: useDate(2024, 5, 8),
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
      id: 'weight-room-15',
      date: useDate(2024, 5, 11),
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
      id: 'weight-room-16',
      date: useDate(2024, 5, 15),
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
      id: 'weight-room-17',
      date: useDate(2024, 5, 18),
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

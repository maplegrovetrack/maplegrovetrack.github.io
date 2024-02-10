import { useDate } from '../use-date'
import type { Practice } from '~/types/practice-type'

export const useWeightRoomSchedule = (): Array<Practice> => {
  return [
    {
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

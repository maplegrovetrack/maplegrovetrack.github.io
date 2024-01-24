import type { Schools } from '~/types/schools'

export enum MeetType {
  VARSITY = 'Varsity',
  JV = 'JV',
  ALL = 'Full Team'
}

export type Meet = {
  name: string,
  date: Date,
  location: Schools,
  schools: Schools[],
  type: MeetType,
  start: {
    hour: string,
    minute: string,
    meridiem: string
  },
  end: {
    hour: string,
    minute: string,
    meridiem: string
  }
}

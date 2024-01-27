import type { School } from '~/types/schools'

export enum MeetType {
  VARSITY = 'Varsity',
  JV = 'JV',
  ALL = 'Full Team'
}

export type Meet = {
  id: string,
  name: string,
  date: Date,
  location: School,
  schools: School[],
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

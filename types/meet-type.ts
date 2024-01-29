import type { School } from '~/types/schools'

export enum MeetType {
  VARSITY = 'Varsity',
  JV = 'JV',
  ALL = 'Full Team'
}

export type Transport = 'N/A' | 'TBD'

export type Meet = {
  id: string,
  name: string,
  date: Date,
  location?: School,
  schools: School[],
  type: MeetType,
  transport: Transport,
  notes?: string,
  start?: {
    hour: string,
    minute: string,
    meridiem: string
  },
  end?: {
    hour: string,
    minute: string,
    meridiem: string
  }
}

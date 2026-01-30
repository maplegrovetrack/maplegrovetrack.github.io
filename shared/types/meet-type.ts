import type { School } from './schools'

export enum MeetType {
  VARSITY = 'Varsity',
  JV = 'JV',
  ALL = 'Full Team'
}

export type Transport = 'N/A'
  | 'TBD'
  | 'To the meet only'
  | 'From the meet only'
  | 'To and from the meet'
  | 'Athletes must find a ride'

export type Meet = {
  id: string
  name: string
  date: Date
  location?: School
  type: MeetType
  transport: Transport
  teamAppLink: string
  notes?: string[]
  start?: {
    hour: string
    minute: string
    meridiem: string
  }
  end?: {
    hour: string
    minute: string
    meridiem: string
  }
}

export type ArchivedMeet = Partial<Meet> & {}

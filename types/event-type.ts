export type Event = {
  id: string,
  name: string,
  date: Date,
  location: string,
  teamAppLink: string,
  notes?: string[],
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

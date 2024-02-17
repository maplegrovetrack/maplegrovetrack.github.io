export type PracticeType = 'WEIGHT_ROOM' | 'TRACK'
export type PracticeIcon = 'fluent-mdl2-weights'

export type Practice = {
  id: string,
  type: PracticeType,
  date: Date,
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

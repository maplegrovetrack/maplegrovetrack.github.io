import type { Practice } from '~/types/practice-type'
import { usePracticesSchedule } from '~/composables/practices/use-practices-schedule'

export const useTrackPracticesCalendar = (): any => {
  return {
    key: 'track-practice-schedule',
    dot: 'red',
    dates: [
      ...usePracticesSchedule().TRACK.map((practice: Practice) => practice.date)
    ]
  }
}

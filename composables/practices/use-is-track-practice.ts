import type { PracticeType } from '~/types/practice-type'

export const useIsTrackPractice = (practice: PracticeType): boolean => {
  return practice === 'TRACK'
}

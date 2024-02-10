import type { PracticeType } from '~/types/practice-type'

export const useIsWeightRoom = (practice: PracticeType): boolean => {
  return practice === 'WEIGHT_ROOM'
}

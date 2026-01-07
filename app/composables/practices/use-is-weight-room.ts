import type { PracticeType } from '#shared/types/practice-type'

export const useIsWeightRoom = (practice: PracticeType): boolean => {
  return practice === 'WEIGHT_ROOM'
}

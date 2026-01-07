import type { PracticeType } from '#shared/types/practice-type'

export const useIsTryoutPractice = (practice: PracticeType): boolean => {
  return practice === 'TRYOUTS'
}

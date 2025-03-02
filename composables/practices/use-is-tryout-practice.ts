import type { PracticeType } from '~/types/practice-type'

export const useIsTryoutPractice = (practice: PracticeType): boolean => {
  return practice === 'TRYOUTS'
}

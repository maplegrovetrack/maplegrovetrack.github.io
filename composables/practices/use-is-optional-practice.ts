import type { PracticeType } from '~/types/practice-type'

export const useIsOptionalPractice = (practice: PracticeType): boolean => {
  return practice === 'OPTIONAL'
}

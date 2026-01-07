import type { PracticeType } from '#shared/types/practice-type'

export const useIsOptionalPractice = (practice: PracticeType): boolean => {
  return practice === 'OPTIONAL'
}

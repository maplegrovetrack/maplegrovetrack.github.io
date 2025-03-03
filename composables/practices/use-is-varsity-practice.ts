import type { PracticeType } from '~/types/practice-type'

export const useIsVarsityPractice = (practice: PracticeType): boolean => {
  return practice === 'VARSITY'
}

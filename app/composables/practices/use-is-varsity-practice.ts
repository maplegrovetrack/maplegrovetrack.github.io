import type { PracticeType } from '#shared/types/practice-type'

export const useIsVarsityPractice = (practice: PracticeType): boolean => {
  return practice === 'VARSITY'
}

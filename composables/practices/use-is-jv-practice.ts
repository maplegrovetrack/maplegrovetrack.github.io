import type { PracticeType } from '~/types/practice-type'

export const useIsJvPractice = (practice: PracticeType): boolean => {
  return practice === 'JV'
}

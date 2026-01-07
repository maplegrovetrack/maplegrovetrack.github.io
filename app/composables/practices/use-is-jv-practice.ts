import type { PracticeType } from '#shared/types/practice-type'

export const useIsJvPractice = (practice: PracticeType): boolean => {
  return practice === 'JV'
}

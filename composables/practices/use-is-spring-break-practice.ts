import type { PracticeType } from '~/types/practice-type'

export const useIsSpringBreakPractice = (practice: PracticeType): boolean => {
  return practice === 'SPRING_BREAK'
}

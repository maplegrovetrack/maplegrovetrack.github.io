import type { PracticeType } from '#shared/types/practice-type'

export const useIsSpringBreakPractice = (practice: PracticeType): boolean => {
  return practice === 'SPRING_BREAK'
}

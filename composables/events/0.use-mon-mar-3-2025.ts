import type { Event } from '~/types/event-type'
import { useDate } from '~/composables/use-date'

export const useMonMar320205Event = (): Event => ({
  id: '__3-3-2025__',
  name: 'MGSH Spring Sports Meeting',
  date: useDate(2025, 3, 3),
  location: 'Maple Grove Senior High',
  teamAppLink: '/27582644-mgsh-spring-sports-meeting',
  notes: [
    'All sports will meet in the gym for a presentation at 6pm followed by a breakout for track& field.',
    'Coach Heaton will be sharing rrack & field program updates.',
    'We will ask for parent/guardian support of the 2025 MGTF Booster Club with 3 easy steps:',
    '1) Enroll into our communications',
    '2) Pay Booster Fee',
    '3) Volunteer'
  ],
  start: {
    hour: '6',
    minute: '00',
    meridiem: 'PM'
  },
  end: {
    hour: '7',
    minute: '30',
    meridiem: 'PM'
  }
})

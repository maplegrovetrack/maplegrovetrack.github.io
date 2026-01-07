import type { Event } from '#shared/types/event-type'
import { useDate } from '~/composables/use-date'

export const useMonMar1020205Event = (): Event => ({
  id: '__3-10-2025__',
  name: 'MGTF Community Day at OMNI - All Welcome',
  date: useDate(2025, 3, 10),
  location: 'OMNI',
  teamAppLink: '/27489390-mgtf-community-day-at-omni-all-welcome',
  notes: [
    'The MGTF Booster Club is hosting a Community Sponsor Night in conjunction with Omni on 3/10/2025.',
    '- Omni will donate $1 for each Coffee, Beverage, or Pizza served that day 7am – 10pm. Consider grabbing a coffee to start your day or do a pizza in the evening.',
    '- Be sure to join from 5-8pm as a fun way to get to know other track & field parents. Booster members will be there 5-8pm to answer any questions and to start the community build we are excited about in 2025!',
    'This will be the kickoff to some fun opportunities to build MGTF program through awesome community sponsors.',
    'Unlike other sports teams, we don\'t require fundraising but hope you will share the attached Community Night flyer (in stack teamp app) on social media, text, or email.',
    'We welcome you to join us in additional opportunities by checking out the attached pdf (in stack team app) on how to "Support Our Program".',
    'Go Crimson!'
  ],
  start: {
    hour: '7',
    minute: '00',
    meridiem: 'AM'
  },
  end: {
    hour: '10',
    minute: '00',
    meridiem: 'PM'
  }
})

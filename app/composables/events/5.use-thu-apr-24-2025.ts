import type { Event } from '#shared/types/event-type'
import { useDate } from '~/composables/use-date'

export const useThuApr242025Event = (): Event => ({
  id: '__4-24-2025__',
  name: 'MGTF Community Day at Leeann Chin',
  date: useDate(2025, 4, 24),
  location: 'Leeann Chin',
  teamAppLink: '/27514137-mgtf-community-day-at-leeann-chin-show-flyer',
  notes: [
    'The MGTF Booster Club is hosting a Community Sponsor Night in conjunction with Leeann Chinn at Dunkirk Lane on 4/24/2025.',
    'Another great opportunity for the team to connect! Invite friends & family as Leeann Chin will be donating 20% of all sales from 11am – 8:30pm. Dine In or Take Out.',
    'Note: You must show restaurant flyer located in the Files Link (in stack team app) at time of purchase.',
    'Unlike other sports teams, we don’t require fundraising, but hope you will share the attached Community Sponsor Night flyer (in stack team app) on social media, text, or email.',
    'We always welcome you to join us in additional opportunities by checking out the attached pdf (in stack team app) on how to "Support Our Program".'
  ],
  start: {
    hour: '11',
    minute: '00',
    meridiem: 'AM'
  },
  end: {
    hour: '8',
    minute: '30',
    meridiem: 'PM'
  }
})

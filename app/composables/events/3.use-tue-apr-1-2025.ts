import type { Event } from '#shared/types/event-type'
import { useDate } from '~/composables/use-date'

export const useTueApr12025Event = (): Event => ({
  id: '__4-1-2025__',
  name: 'MGTF Community Night at Culver\'s - All Welcome',
  date: useDate(2025, 4, 1),
  location: 'Maple Grove Culver\'s',
  teamAppLink: '/27513686-mgtf-community-night-at-culver-s-all-welcome',
  notes: [
    'The MGTF Booster Club is hosting a Community Sponsor Night in conjunction with Culver’s Maple Grove on 4/1/2025.',
    'Another great opportunity for the team to connect! Invite friends & family as Culver’s will be donating up to 10% of all sales from 5pm – 8pm. Dine In or Take Out.',
    'Unlike other sports teams, we don’t require fundraising, but hope you will share the attached Community Sponsor Night flyer (in stack team app) on social media, text, or email.',
    'We always welcome you to join us in additional opportunities by checking out the attached pdf (in stack team app) on how to "Support Our Program".'
  ],
  start: {
    hour: '5',
    minute: '00',
    meridiem: 'PM'
  },
  end: {
    hour: '8',
    minute: '00',
    meridiem: 'PM'
  }
})

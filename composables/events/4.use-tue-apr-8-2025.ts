import type { Event } from '~/types/event-type'
import { useDate } from '~/composables/use-date'

export const useTueApr82025Event = (): Event => ({
  id: '__4-8-2025__',
  name: 'MGTF Community Day at Hometowne Pizza',
  date: useDate(2025, 4, 8),
  location: 'Hometowne Pizza',
  teamAppLink: '/27514476-mgtf-community-day-at-hometowne-pizza-please-share',
  notes: [
    'The MGTF Booster Club is hosting a Community Sponsor Night in conjunction with Hometowne Pizza on 4/8/2025.',
    'Invite friends & family to order as Hometowne Pizza will be donating 10% of all sales from 11am-8pm.',
    'Unlike other sports teams, we don’t require fundraising, but hope you will share the attached Community Sponsor Night flyer (in stack team app) on social media, text, or email.',
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

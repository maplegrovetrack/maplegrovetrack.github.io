import type { Event } from '~/types/event-type'
import { useDate } from '~/composables/use-date'

export const useTueApr292025Event = (): Event => ({
  id: '__4-29-2025__',
  name: 'MGTF Community Night at Chipotle',
  date: useDate(2025, 4, 29),
  location: 'Chipotle',
  teamAppLink: '/27514201-mgtf-community-night-at-chipotle-please-share',
  notes: [
    'The MGTF Booster Club is hosting a Community Sponsor Night in conjunction with Chipotle at Maple Grove Parkway on 4/29/2025.',
    'Another great opportunity for the team to connect. Invite friends & family as Chipotle will be donating 25% of all sales from 5pm-9pm. Dine In or Take Out.',
    'Note: You must show attached restaurant flyer (in stack team app) on phone or paper at time of purchase, or use online code 83KTAP6 for our team to benefit.',
    'Unlike other sports teams, we don’t require fundraising, but hope you will share the attached Community Sponsor Night flyer (in stack team app) on social media, text, or email.',
  ],
  start: {
    hour: '5',
    minute: '00',
    meridiem: 'PM'
  },
  end: {
    hour: '9',
    minute: '00',
    meridiem: 'PM'
  }
})

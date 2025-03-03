import type { Event } from '~/types/event-type'
import { useDate } from '~/composables/use-date'

export const useThuMay152025Event = (): Event => ({
  id: '__5-15-2025__',
  name: 'MGTF Community Night at Jersey Mike\'s',
  date: useDate(2025, 5, 15),
  location: 'Jersey Mike\'s',
  teamAppLink: '/27560514-mgtf-community-night-at-jersey-mike-s-use-code-on-flyer',
  notes: [
    'Invite friends and family: Jersey Mike’s will be donating 50% of all sales from 4pm to 9pm to Track & Field Booster Club. These funds help cover costs associated with coaching, equipment, and events. Thank you in advance for supporting these great community builders.',
    'Please use Restaurant Flyer code: MGTF50 if ordering online or with App.',
    'Flyer can be found in Files link on the calendar notice (in stack team app).'
  ],
  start: {
    hour: '4',
    minute: '00',
    meridiem: 'PM'
  },
  end: {
    hour: '9',
    minute: '00',
    meridiem: 'PM'
  }
})

import type { Event } from '~/types/event-type'
import { useDate } from '~/composables/use-date'

export const useMonMar1720205Event = (): Event => ({
  id: '__3-17-2025__',
  name: 'Season Kickoff Meeting - Mandatory for All Parents & Athletes',
  date: useDate(2025, 3, 17),
  location: 'Maple Grove Senior High',
  teamAppLink: '/27562625-season-kickoff-meeting-mandatory-for-all-parents-athletes',
  notes: [
    'We are asking for all parents/guardians and their track athletes to join us in the Maple Grove High School cafeteria on Monday, March 17th from 5-6:30pm to kick off the season together.',
    'The booster club is sponsoring pizza, salads, popcorn and water. We are asking that each family attending contributes one of the following to share if you participate in the meal – Veggie Tray, Fruit Tray, Dessert or Sports Drinks.',
    'We are really looking forward to a FUN season. We are making this meeting mandatory so we can create the needed support for our program, to communicate all of our season’s events, and to answer questions you might have. We will also explain how this year’s booster fees and parent volunteer hours help meet program needs. Coach Heaton and Booster members will be presenting around 5:45pm.'
  ],
  start: {
    hour: '5',
    minute: '00',
    meridiem: 'PM'
  },
  end: {
    hour: '6',
    minute: '30',
    meridiem: 'PM'
  }
})

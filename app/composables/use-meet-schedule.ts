export const useMeetSchedule = (): Meet[] => {
  return [
    {
      id: '__4-1-2025__',
      name: 'Dual Meet with Blaine',
      date: useDate(2025, 4, 1),
      location: useSchools().MG,
      transport: 'N/A',
      type: MeetType.ALL,
      notes: [
        'Parent volunteers needed!',
        'This meet is hand timed.'
      ],
      teamAppLink: '/27253923-home-meet-dual-with-blaine-full-team',
      start: {
        hour: '3',
        minute: '30',
        meridiem: 'PM'
      },
      end: {
        hour: '8',
        minute: '00',
        meridiem: 'PM'
      }
    }
  ]
}

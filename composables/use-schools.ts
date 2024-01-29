import type { School, SchoolKey } from '~/types/schools'

export const useSchools = (): Record<SchoolKey, School> => ({
  MG: { name: 'Maple Grove', logo: '/logo_leaf.png' },
  BLAINE: { name: 'Blaine', logo: '/blaine.png' },
  OSSEO: { name: 'Osseo', logo: '/osseo.png' },
  PC: { name: 'Park Center', logo: '/park_center.png' },
  CP: { name: 'Champlin Park', logo: '/champlin_park.png' },
  ARMSTRONG: { name: 'Armstrong', logo: '/armstrong.png' },
  ANOKA: { name: 'Anoka', logo: '/anoka.png' },
  STMA: { name: 'St. Michael-Albertville', logo: '/stma.png' },
  ROGERS: { name: 'Rogers', logo: '/rogers.png' },
  ANDOVER: { name: 'Andover', logo: '/andover.png' },
  EK: { name: 'Elk River', logo: '/elk_river.png' },
  IRONDALE: { name: 'Irondale', logo: '' },
  MV: { name: 'Mounds View', logo: '' },
  CENTENNIAL: { name: 'Centennial', logo: '/centennial.svg' },
  WAYZATA: { name: 'Wayzata', logo: '' },
  ROSEVILLE: { name: 'Roseville', logo: '' },
  CR: { name: 'Coon Rapids', logo: '/coon_rapids.png' },
  MINNETONKA: { name: 'Minnetonka', logo: '/minnetonka.png' },
  SLP: { name: 'Spring Lake Park', logo: '/slp.png' },
  TG: { name: 'Totino-Grace', logo: '/totino_grace.png' }
})

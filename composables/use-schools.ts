import type { School, SchoolKey } from '~/types/schools'

export const useSchools = (): Record<SchoolKey, School> => ({
  MG: { name: 'Maple Grove', logo: '/logo_leaf.png' },
  BLAINE: { name: 'Blaine', logo: '/blaine.png' },
  OSSEO: { name: 'Osseo', logo: '/osseo.png' },
  PC: { name: 'Park Center', logo: '' },
  CP: { name: 'Champlin Park', logo: '' },
  ARMSTRONG: { name: 'Armstrong', logo: '' },
  ANOKA: { name: 'Anoka', logo: '' },
  STM: { name: 'St. Michael-Albertville', logo: '' },
  ROGERS: { name: 'Rogers', logo: '/rogers.png' },
  ANDOVER: { name: 'Andover', logo: '' },
  EK: { name: 'Elk River', logo: '/elk_river.png' },
  IRONDALE: { name: 'Irondale', logo: '' },
  MV: { name: 'Mounds View', logo: '' },
  CENTENNIAL: { name: 'Centennial', logo: '' },
  WAYZATA: { name: 'Wayzata', logo: '' },
  ROSEVILLE: { name: 'Roseville', logo: '' },
  CR: { name: 'Coon Rapids', logo: '/coon_rapids.png' }
})

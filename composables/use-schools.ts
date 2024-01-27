import type { School } from '~/types/schools'

export const useSchools = (): Record<string, School> => ({
    MG: { name: 'Maple Grove', logo: '/logo_leaf.png' },
    BLAINE: { name: 'Blaine', logo: '/blaine.png' },
    OSSEO: { name: 'Osseo', logo: '' },
    PC: { name: 'Park Center', logo: '' },
    CP: { name: 'Champlin Park', logo: '' },
    ARMSTRONG: { name: 'Armstrong', logo: '' },
    ANOKA: { name: 'Anoka', logo: '' },
    STM: { name: 'St. Michael-Albertville', logo: '' },
    ROGERS: { name: 'Rogers', logo: '' },
    ANDOVER: { name: 'Andover', logo: '' },
    EK: { name: 'Elk River', logo: '' },
    IRONDALE: { name: 'Irondale', logo: '' },
    MV: { name: 'Mounds View', logo: '' },
    CENTENNIAL: { name: 'Centennial', logo: '' },
    WAYZATA: { name: 'Wayzata', logo: '' },
    ROSEVILLE: { name: 'Roseville', logo: '' }
})

import type { School, SchoolKey } from '#shared/types/schools'

export const useSchools = (): Record<SchoolKey, School> => ({
  MG: {
    name: 'Maple Grove'
  },
  BLAINE: {
    name: 'Blaine'
  },
  OSSEO: {
    name: 'Osseo'
  },
  PC: {
    name: 'Park Center'
  },
  CP: {
    name: 'Champlin Park'
  },
  ARMSTRONG: {
    name: 'Armstrong'
  },
  ANOKA: {
    name: 'Anoka'
  },
  STMA: {
    name: 'St. Michael-Albertville'
  },
  ROGERS: {
    name: 'Rogers'
  },
  ANDOVER: {
    name: 'Andover'
  },
  EK: {
    name: 'Elk River'
  },
  IRONDALE: {
    name: 'Irondale'
  },
  MV: {
    name: 'Mounds View'
  },
  CENTENNIAL: {
    name: 'Centennial'
  },
  ROSEVILLE: {
    name: 'Roseville'
  },
  CR: {
    name: 'Coon Rapids'
  },
  MINNETONKA: {
    name: 'Minnetonka'
  },
  SLP: {
    name: 'Spring Lake Park'
  },
  TG: {
    name: 'Totino-Grace'
  },
  FL: {
    name: 'Forest Lake'
  },
  HAMLINE: {
    name: 'Hamline'
  }
})

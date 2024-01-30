import type { School, SchoolKey } from '~/types/schools'

export const useSchools = (): Record<SchoolKey, School> => ({
  MG: {
    name: 'Maple Grove',
    logo: {
      src: '/logo_leaf.png',
      width: 'w-auto',
      height: 'h-14'
    }
  },
  BLAINE: {
    name: 'Blaine',
    logo: {
      src: '/blaine.png',
      width: 'w-auto',
      height: 'h-10'
    }
  },
  OSSEO: {
    name: 'Osseo',
    logo: {
      src: '/osseo.png',
      width: 'w-auto',
      height: 'h-7'
    }
  },
  PC: {
    name: 'Park Center',
    logo: {
      src: '/park_center.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  CP: {
    name: 'Champlin Park',
    logo: {
      src: '/champlin_park.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  ARMSTRONG: {
    name: 'Armstrong',
    logo: {
      src: '/armstrong.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  ANOKA: {
    name: 'Anoka',
    logo: {
      src: '/anoka.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  STMA: {
    name: 'St. Michael-Albertville',
    logo: {
      src: '/stma.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  ROGERS: {
    name: 'Rogers',
    logo: {
      src: '/rogers.png',
      width: 'w-auto',
      height: 'h-10'
    }
  },
  ANDOVER: {
    name: 'Andover',
    logo: {
      src: '/andover.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  EK: {
    name: 'Elk River',
    logo: {
      src: '/elk_river.png',
      width: 'w-auto',
      height: 'h-8'
    }
  },
  IRONDALE: {
    name: 'Irondale',
    logo: {
      src: '/irondale.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  MV: {
    name: 'Mounds View',
    logo: {
      src: '/mv.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  CENTENNIAL: {
    name: 'Centennial',
    logo: {
      src: '/centennial.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  ROSEVILLE: {
    name: 'Roseville',
    logo: {
      src: '/roseville.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  CR: {
    name: 'Coon Rapids',
    logo: {
      src: '/coon_rapids.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  MINNETONKA: {
    name: 'Minnetonka',
    logo: {
      src: '/minnetonka.png',
      width: 'w-auto',
      height: 'h-10'
    }
  },
  SLP: {
    name: 'Spring Lake Park',
    logo: {
      src: '/slp.png',
      width: 'w-auto',
      height: 'h-12'
    }
  },
  TG: {
    name: 'Totino-Grace',
    logo: {
      src: '/totino_grace.png',
      width: 'w-auto',
      height: 'h-12'
    }
  }
})

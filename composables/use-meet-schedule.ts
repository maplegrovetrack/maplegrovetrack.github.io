import type { Meet } from '~/types/meet-type'
import { useTueApr22024 } from '~/composables/meets/0.use-tue-apr-2-2024'
import { useTueApr92024 } from '~/composables/meets/1.use-tue-apr-9-2024'
import { useTueApr162024 } from '~/composables/meets/2.use-tue-apr-16-2024'
import { useTueApr232024 } from '~/composables/meets/3.use-tue-apr-23-2024'
import { useThuApr252024 } from '~/composables/meets/4.use-thu-apr-25-2024'
import { useTueApr302024 } from '~/composables/meets/5.use-tue-apr-30-2024'
import { useThuMay22024 } from '~/composables/meets/6.use-thur-may-2-2024'
import { useWedMay82024 } from '~/composables/meets/8.use-wed-may-8-2024'
import { useWedMay72024 } from '~/composables/meets/7.use-tue-may-7-2024'
import { useTueMay142024 } from '~/composables/meets/9.use-tue-may-14-2024'
import { useTueMay212024 } from '~/composables/meets/11.use-tue-may-21-2024'
import { useWedMay292024 } from '~/composables/meets/13.use-wed-may-29-2024'
import { useFriMay312024 } from '~/composables/meets/14.use-fri-may-31-2024'
import { useThuJun62024 } from '~/composables/meets/15.use-thu-jun-6-2024'
import { useSatJun82024 } from '~/composables/meets/16.use-sat-jun-8-2024'
import { useThuMay232024 } from '~/composables/meets/12.use-thu-may-23-2024'
import { useThuMay162024 } from '~/composables/meets/10.use-thu-may-16-2024'

export const useMeetSchedule = (): Meet[] => {
  return [
    useTueApr22024(),
    useTueApr92024(),
    useTueApr162024(),
    useTueApr232024(),
    useThuApr252024(),
    useTueApr302024(),
    useThuMay22024(),
    useWedMay72024(),
    useWedMay82024(),
    useTueMay142024(),
    useThuMay162024(),
    useTueMay212024(),
    useThuMay232024(),
    useWedMay292024(),
    useFriMay312024(),
    useThuJun62024(),
    useSatJun82024()
  ]
}

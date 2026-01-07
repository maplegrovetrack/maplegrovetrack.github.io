import type { Meet } from '#shared/types/meet-type'
import { useTueApr12025 } from '~/composables/meets/0.use-tue-apr-1-2025'
import { useTueApr82025 } from '~/composables/meets/1.use-tue-apr-8-2025'
import { useTueApr152025 } from '~/composables/meets/2.use-tue-apr-15-2025'
import { useTueApr222025 } from '~/composables/meets/3.use-tue-apr-22-2025'
import { useThuApr242025 } from '~/composables/meets/4.use-thu-apr-24-2025'
import { useFriApr252025 } from '~/composables/meets/5.use-fri-apr-25-2025'
import { useTueApr292025 } from '~/composables/meets/6.use-tue-apr-29-2025'
import { useWedApr302025 } from '~/composables/meets/7.use-wed-apr-30-2025'
import { useTueMay62025 } from '~/composables/meets/8.use-tue-may-6-2025'
import { useThuMay82025 } from '~/composables/meets/9.use-thu-may-8-2024'
import { useTueMay132025 } from '~/composables/meets/10.use-tue-may-13-2025'
import { useThuMay152025 } from '~/composables/meets/11.use-thu-may-15-2025'
import { useTueMay202025 } from '~/composables/meets/12.use-tue-may-20-2025'
import { useWedMay212025 } from '~/composables/meets/13.use-wed-may-21-2025'
import { useWedMay282025 } from '~/composables/meets/14.use-wed-may-28-2025'
import { useFriMay302025 } from '~/composables/meets/15.use-fri-may-31-2024'
import { useTueJun102025 } from '~/composables/meets/16.use-tue-jun-10-2025'
import { useThuJun122025 } from '~/composables/meets/17.use-thu-jun-12-2025'

export const useMeetSchedule = (): Meet[] => {
  return [
    useTueApr12025(),
    useTueApr82025(),
    useTueApr152025(),
    useTueApr222025(),
    useThuApr242025(),
    useFriApr252025(),
    useTueApr292025(),
    useWedApr302025(),
    useTueMay62025(),
    useThuMay82025(),
    useTueMay132025(),
    useThuMay152025(),
    useTueMay202025(),
    useWedMay212025(),
    useWedMay282025(),
    useFriMay302025(),
    useTueJun102025(),
    useThuJun122025()
  ]
}

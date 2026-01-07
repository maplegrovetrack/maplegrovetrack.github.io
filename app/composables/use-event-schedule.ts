import type { Event } from '#shared/types/event-type'
import { useMonMar320205Event } from '~/composables/events/0.use-mon-mar-3-2025'
import { useMonMar1020205Event } from '~/composables/events/1.use-mon-mar-10-2025'
import { useMonMar1720205Event } from '~/composables/events/2.use-mon-mar-17-2025'
import { useTueApr12025Event } from '~/composables/events/3.use-tue-apr-1-2025'
import { useTueApr82025Event } from '~/composables/events/4.use-tue-apr-8-2025'
import { useThuApr242025Event } from '~/composables/events/5.use-thu-apr-24-2025'
import { useTueApr292025Event } from '~/composables/events/6.use-tue-apri-29-2025'
import { useThuMay152025Event } from '~/composables/events/7.use-thu-may-15-2025'

export const useEventSchedule = (): Event[] => {
  return [
    useMonMar320205Event(),
    useMonMar1020205Event(),
    useMonMar1720205Event(),
    useTueApr12025Event(),
    useTueApr82025Event(),
    useThuApr242025Event(),
    useTueApr292025Event(),
    useThuMay152025Event()
  ]
}

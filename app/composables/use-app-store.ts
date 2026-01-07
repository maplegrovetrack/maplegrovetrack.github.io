import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useMeetSchedule } from '~/composables/use-meet-schedule'
import { useSchools } from '~/composables/use-schools'
import type { Meet } from '#shared/types/meet-type'
import type { School } from '#shared/types/schools'
import type { ContentNavigationItem, TocLink } from '@nuxt/content'

export const useAppStore = defineStore('appStore', () => {
  const schools: Ref<Record<string, School>> = ref(useSchools())
  const meets: Ref<Meet[]> = ref(useMeetSchedule())
  const tocLinks: Ref<TocLink[]> = ref([])
  const navItems: Ref<ContentNavigationItem[] | undefined> = ref(undefined)

  return {
    schools,
    meets,
    tocLinks,
    navItems
  }
})

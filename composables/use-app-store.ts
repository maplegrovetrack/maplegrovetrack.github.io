import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { NavItem, TocLink } from '@nuxt/content/dist/runtime/types'
import { useMeetSchedule } from './use-meet-schedule'
import { useSchools } from './use-schools'
import type { Meet } from '~/types/meet-type'
import type { School } from '~/types/schools'

export const useAppStore = defineStore('appStore', () => {
  const schools: Ref<Record<string, School>> = ref(useSchools())
  const meets: Ref<Meet[]> = ref(useMeetSchedule())
  const tocLinks: Ref<TocLink[]> = ref([])
  const navItems: Ref<NavItem[] | undefined> = ref(undefined)

  return {
    schools,
    meets,
    tocLinks,
    navItems
  }
})

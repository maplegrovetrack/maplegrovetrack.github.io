import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { Meet } from '~/types/meet-type'
import { useMeetSchedule } from './use-meet-schedule'
import type { NavItem, TocLink } from '@nuxt/content/dist/runtime/types'

export const useAppStore = defineStore('appStore', () => {

  const meets: Ref<Meet[]> = ref(useMeetSchedule())
  const tocLinks: Ref<TocLink[]> = ref([])
  const navItems: Ref<NavItem[] | undefined> = ref(undefined)

  return {
    meets,
    tocLinks,
    navItems
  }
})

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

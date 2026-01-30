import type { ContentNavigationItem, TocLink } from '@nuxt/content'

export const useAppStore = defineStore('appStore', () => {
  const tocLinks: Ref<TocLink[]> = ref([])
  const navItems: Ref<ContentNavigationItem[] | undefined> = ref(undefined)

  return {
    tocLinks,
    navItems
  }
})

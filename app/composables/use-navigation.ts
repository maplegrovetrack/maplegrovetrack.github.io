import { useAppStore } from '~/composables/use-app-store'
import type { ContentNavigationItem } from '@nuxt/content'

export const useNavigation = async (): Promise<ContentNavigationItem[]> => {
  const store = useAppStore()
  if (!store.navItems) {
    store.navItems = await queryCollectionNavigation('site')
  }
  return store.navItems
}

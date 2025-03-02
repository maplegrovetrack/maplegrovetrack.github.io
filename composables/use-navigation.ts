import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { useAppStore } from '~/composables/use-app-store'
import { fetchContentNavigation } from '#imports'

export const useNavigation = async(): Promise<NavItem[]> => {
  const store = useAppStore()
  if (!store.navItems) {
    store.navItems = await fetchContentNavigation()
  }
  return store.navItems
}

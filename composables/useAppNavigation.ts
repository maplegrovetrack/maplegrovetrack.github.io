import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { useAppStore } from './useAppStore'

export const useAppNavigation = async(): Promise<NavItem[]> => {
  const store = useAppStore()
  if (store.navigation.length === 0) {
    store.navigation = await fetchContentNavigation()
  }
  return store.navigation
}

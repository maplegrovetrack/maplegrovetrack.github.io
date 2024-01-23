import { defineStore } from 'pinia'
import type { NavItem } from '@nuxt/content/dist/runtime/types'

export const useAppStore = defineStore('app', () => {
  const navigation: Ref<NavItem[]> = ref([])

  return {
    navigation
  }
})

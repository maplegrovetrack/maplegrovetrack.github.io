import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useApplicationStore: ReturnType<typeof defineStore> = defineStore('application-store', () => {
  const init: Ref<boolean> = ref(false)

  return {
    init
  }
})

import { defineNuxtPlugin } from '#imports'
import { useApplicationStore } from '~/composables/use-application-store'

export default defineNuxtPlugin((nuxt): void => {
  nuxt.hook('page:loading:end', () => {
    const store = useApplicationStore()
    if (!store.init) {
      store.init = true
    }
  })
})

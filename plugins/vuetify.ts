import { VCalendar } from 'vuetify/labs/VCalendar'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin((nuxt): void => {
  nuxt.vueApp.use(createVuetify({
    components: {
      VCalendar
    },
    ssr: true,
    theme: {
      defaultTheme: 'dark'
    }
  }))
})

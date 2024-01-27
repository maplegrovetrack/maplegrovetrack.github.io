<template>
  <ClientOnly>
    <VCalendar
      :color="color"
      :is-dark="isDark"
      view="monthly"
      :expanded="true"
      :borderless="true"
      :transparent="true"
      :attributes="attributes"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/style.css'

defineProps<{ attributes: Array<object> }>()

const appConfig = useAppConfig()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const color = computed(() => appConfig.ui.primary)
</script>

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
      @dayclick="onDayClick"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/style.css'
import type { ComputedRef } from 'vue'

defineProps<{ attributes: Array<object> }>()

const emits = defineEmits(['dayclick'])

const appConfig = useAppConfig()
const colorMode = useColorMode()

const isDark: ComputedRef<boolean> = computed(() => colorMode.value === 'dark')
const color: ComputedRef<string> = computed(() => appConfig.ui.primary)

const onDayClick = (event?: Event) => {
  emits('dayclick', { event })
}
</script>

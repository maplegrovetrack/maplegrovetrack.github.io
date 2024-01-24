<template>
  <ClientOnly>
    <VCalendar
      color="green"
      :is-dark="isDark"
      view="monthly"
      :expanded="true"
      :borderless="true"
      :attributes="attributes"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/style.css'

defineProps<{ attributes: Array<object> }>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<style>
.vc-green {
  --vc-accent-50: #EFFDF5;
  --vc-accent-100: #D9FBE8;
  --vc-accent-200: #B3F5D1;
  --vc-accent-300: #75EDAE;
  --vc-accent-400: #00DC82;
  --vc-accent-500: #00C16A;
  --vc-accent-600: #00A155;
  --vc-accent-700: #007F45;
  --vc-accent-800: #016538;
  --vc-accent-900: #052e16;
}
</style>

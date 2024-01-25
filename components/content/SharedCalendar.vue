<template>
  <ClientOnly>
    <VCalendar
      :color="isDark ? 'sandrift' : 'falu-red'"
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

// :transparent="true"
// Need to extend color picker supported colors...

defineProps<{ attributes: Array<object> }>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<style>
.vc-falu-red {
  --vc-accent-50: #F9F3F3;
  --vc-accent-100: #F2E8E8;
  --vc-accent-200: #DFC5C5;
  --vc-accent-300: #CBA2A2;
  --vc-accent-400: #A45D5D;
  --vc-accent-500: #7D1717;
  --vc-accent-600: #711515;
  --vc-accent-700: #4B0E0E;
  --vc-accent-800: #380A0A;
  --vc-accent-900: #260707;
}

.vc-sandrift {
  --vc-accent-50: #FBF9F8;
  --vc-accent-100: #F8F3F1;
  --vc-accent-200: #EDE2DD;
  --vc-accent-300: #E1D1C8;
  --vc-accent-400: #CBAE9F;
  --vc-accent-500: #B58B76;
  --vc-accent-600: #A37D6A;
  --vc-accent-700: #6D5347;
  --vc-accent-800: #513F35;
  --vc-accent-900: #362A23;
}
</style>

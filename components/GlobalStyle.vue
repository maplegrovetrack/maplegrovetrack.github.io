<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useThemeVars } from 'naive-ui'

const theme: ReturnType<typeof useThemeVars> = useThemeVars()
const bodyTheme: Record<string, string>[] = [
  { '-webkit-text-size-adjust': '100%' },
  { '-webkit-tap-highlight-color': 'transparent' },
  { padding: '0' },
  { margin: '0' },
  { 'background-color': theme.value.bodyColor },
  { color: theme.value.textColor2 },
  { 'font-size': theme.value.fontSize },
  { 'font-family': theme.value.fontFamily },
  { 'line-height': theme.value.lineHeight}
]

const bodyStyle: string[] = bodyTheme.map((record: Record<string, string>) => {
  const key = Object.keys(record)[0]
  return `${key}:${record[key]}`
})

useHead({
  bodyAttrs: {
    style: bodyStyle.join(';')
  }
})
</script>

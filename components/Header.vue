<template>
  <NLayoutHeader position="static" bordered>
    <NText as="h1">
      Maple Grove Track & Field
    </NText>
    <NMenu :options="menuOptions" mode="horizontal" responsive />
  </NLayoutHeader>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NLayoutHeader, NMenu, NText } from 'naive-ui'
import { NuxtLink } from '#components'

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        NuxtLink,
        {
          to: '/'
        },
        'Home'
      ),
    key: 'home'
  },
  {
    label: () =>
      h(
        NuxtLink,
        {
          to: '/schedule'
        },
        'Schedule'
      ),
    key: 'schedule'
  }
]
</script>

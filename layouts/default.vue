<template>
  <NConfigProvider :theme-overrides="darkTheme">
    <GlobalStyle>
      <!--      <ClientOnly>-->
      <!--        <NMenu :options="menuOptions" mode="horizontal" responsive />-->
      <!--      </ClientOnly>-->
      <slot />
    </GlobalStyle>
  </NConfigProvider>
  <!--  <NSpace vertical>-->
  <!--    <NSpace>-->
  <!--      <NButton @click="theme = darkTheme">Dark</NButton>-->
  <!--      <NButton @click="theme = null">Light</NButton>-->
  <!--    </NSpace>-->
  <!--    <NConfigProvider :theme="theme">-->
  <!--      <NCard>-->
  <!--        <NEl tag="span">-->
  <!--          I am a Span.-->
  <!--        </NEl>-->
  <!--      </NCard>-->
  <!--    </NConfigProvider>-->
  <!--  </NSpace>-->
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { darkTheme, NConfigProvider, NMenu } from 'naive-ui'
import { NuxtLink } from '#components'

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        NuxtLink,
        {
          to: '/'
        }
      ),
    key: 'Home'
  }
]
</script>

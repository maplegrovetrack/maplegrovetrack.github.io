<template>
  <NConfigProvider :theme-overrides="darkTheme">
    <GlobalStyle>
      <ClientOnly>
        <NLayout position="absolute">
          <Header />
          <slot />
        </NLayout>
      </ClientOnly>
    </GlobalStyle>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme, NConfigProvider, NLayout } from 'naive-ui'
</script>

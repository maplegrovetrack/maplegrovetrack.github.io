<template>
  <UPopover mode="hover">
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        square
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
        aria-label="Color picker"
      >
        <UIcon name="i-heroicons-swatch-20-solid" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
      </UButton>
    </template>

    <template #panel>
      <div class="p-2">
        <div class="grid grid-cols-6 gap-px">
          <AppColorPickerPill
            v-for="color in primaryColors"
            :key="color.value"
            :color="color"
            :selected="primary"
            @select="primary = color"
          />
        </div>

        <hr class="border-gray-200 dark:border-gray-800 my-2">

        <div class="grid grid-cols-6 gap-px">
          <AppColorPickerPill
            v-for="color in grayColors"
            :key="color.value"
            :color="color"
            :selected="gray"
            @select="gray = color"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
/**
 * https://github.com/nuxt/ui/tree/dev/docs/components/color-picker
 *
 * This component was cloned from the Nuxt UI source code and customized to work with this site.
 */
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const primaryColors = computed(() => appConfig.header.colorPickerColors.filter(color => color !== 'primary').map(color => ({
  value: color,
  text: color,
  hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
})))
const primary = computed({
  get() {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set(option) {
    appConfig.ui.primary = option.value

    window.localStorage.setItem('mgtf-ui-primary', appConfig.ui.primary)
  }
})

const grayColors = computed(() => ['slate', 'cool', 'zinc', 'neutral', 'stone', 'vista-white'].map(color => ({
  value: color,
  text: color,
  hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
})))
const gray = computed({
  get() {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set(option) {
    appConfig.ui.gray = option.value

    window.localStorage.setItem('mgtf-ui-gray', appConfig.ui.gray)
  }
})
</script>

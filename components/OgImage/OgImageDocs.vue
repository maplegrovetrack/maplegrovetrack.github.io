<template>
  <div class="w-full h-full flex flex-col justify-center p-8 bg-stone-900">
    <img class="absolute w-72 top-1.5 right-1.5" src="/logo_leaf.png" alt="Maple Grove Senior High Maple Leaf" />
    <div class="relative">
      <h1 class="text-8xl mb-4 text-white">
        {{ title }}
      </h1>
      <p class="text-5xl text-gray-200 leading-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

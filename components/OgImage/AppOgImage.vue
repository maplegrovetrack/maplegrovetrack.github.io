<template>
  <div class="w-full h-full flex justify-between relative p-[60px] bg-stone-900 text-gray-50">
    <div
      class="flex absolute top-0" :style="{
        width: '200%',
        height: '200%',
        backgroundImage: `radial-gradient(circle at 1350px 0px, rgba(125, 23, 23, 1) 1%, rgba(5, 5, 5, 0.5) 20%),
        radial-gradient(circle at 0px 600px, rgba(125, 23, 23, 1) 0%, rgba(5, 5, 5, 0.5) 40%)`
      }"
    />
    <div class="h-full w-full justify-center relative">
      <div class="flex flex-row justify-between items-start">
        <div class="flex flex-col w-full max-w-[65%]">
          <h1 class="m-0 font-bold mb-[30px] text-[75px]">
            {{ title }}
          </h1>
          <p v-if="description" class="text-[35px] text-gray-300">
            {{ description }}
          </p>
        </div>
        <img style="height: 288px; width: 274px;" src="/logo_leaf.png" alt="Maple Grove Senior High Maple Leaf" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

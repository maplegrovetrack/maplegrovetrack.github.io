<template>
  <VCalendar
    v-model="today"
    :hide-week-number="true"
    color="primary"
    type="month"
  />
</template>

<script setup lang="ts">
const today = ref([new Date()])
</script>

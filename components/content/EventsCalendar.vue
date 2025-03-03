<template>
  <div>
    <ClientOnly>
      <Tabs>
        <div label="Calendar View" icon="i-heroicons-calendar-solid">
          <EventsCalendarView />
        </div>
        <div label="List View" icon="i-heroicons-list-bullet">
          <EventsCalendarListView />
        </div>
      </Tabs>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
</script>

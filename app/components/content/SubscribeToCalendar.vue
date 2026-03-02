<template>
  <!-- @vue-ignore -->
  <add-to-calendar-button
    name="Maple Grove Track & Field ICS File"
    time-zone="America/Chicago"
    ics-file="https://maplegrovetrack.github.io/ics/calendar.ics"
    subscribe
    options="'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365'"
    light-mode="system"
    hide-checkmark
    hide-background
    trigger="click"
  />
</template>

<script lang="ts" setup>
import 'add-to-calendar-button'
</script>

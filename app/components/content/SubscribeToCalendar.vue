<template>
  <add-to-calendar-button
    name="Maple Grove Track & Field ICS File"
    timeZone="America/Chicago"
    icsFile="https://maplegrovetrack.github.io/ics/calendar.ics"
    subscribe
    options="'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365'"
    lightMode="system"
    hideCheckmark
    hideBackground
    trigger="click"
  ></add-to-calendar-button>
</template>

<script lang="ts" setup>
import 'add-to-calendar-button'
</script>

<template>
  <add-to-calendar-button
    name="Test"
    timeZone="America/Chicago"
    location="World Wide Web"
    icsFile="https://maplegrovetrack.github.io/ics/calendar.ics"
    subscribe
    options="'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365'"
    lightMode="system"
  ></add-to-calendar-button>
</template>

<script lang="ts" setup>
import 'add-to-calendar-button'
</script>

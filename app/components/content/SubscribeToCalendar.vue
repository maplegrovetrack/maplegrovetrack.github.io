<template>
  <add-to-calendar-button v-bind="props" />
</template>

<script lang="ts" setup>
import 'add-to-calendar-button'

const props = {
  name: 'Maple Grove Track & Field ICS File',
  label: 'Click Here to Sync Calendar',
  timeZone: 'America/Chicago',
  icsFile: 'https://maplegrovetrack.github.io/ics/calendar.ics',
  subscribe: true,
  options: '\'Apple\',\'Google\',\'iCal\',\'Outlook.com\',\'Yahoo\',\'Microsoft365\'',
  lightMode: 'system',
  hideCheckmark: true,
  hideBackground: true,
  trigger: 'click'
}
</script>

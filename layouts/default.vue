<template>
  <div class="layout-wrapper">
    <div class="layout-topbar">
      <div class="layout-topbar-inner">
        <ul class="flex list-none m-0 p-0 gap-2 align-items-center">
          <li>
            <a
              href="https://github.com/primefaces/primevue"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-shrink-0 px-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
            >
              <i class="pi pi-github text-700"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

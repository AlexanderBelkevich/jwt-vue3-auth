<script setup>
import ProgressSpinner from 'primevue/progressspinner';
</script>

<template>
  <ProgressSpinner
    style="
      width: 50px;
      height: 50px"
      strokeWidth="8"
      fill="var(--surface-ground)"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner" />
</template>
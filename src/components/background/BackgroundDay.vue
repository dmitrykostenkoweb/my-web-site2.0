<template>
  <div class="background-day"></div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>

.background-day {
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background: white;

  z-index: var(--bg-z-index);
}
</style>
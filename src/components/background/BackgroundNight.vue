<template>
  <div class="background-night"></div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>

.background-night {
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background: black;

  z-index: var(--bg-z-index);
}
</style>
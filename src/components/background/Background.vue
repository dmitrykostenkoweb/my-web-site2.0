<template>
  <div class="background"></div>
</template>
<script setup lang="ts">


</script>
<style lang="scss" scoped>

.background {
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: -200px;
  left: -200px;
  transform: rotate(-18deg);

  background: var(--color-bg-gradient);
  filter: blur(200px);
  opacity: 0.8;

  z-index: var(--bg-z-index);

}
</style>
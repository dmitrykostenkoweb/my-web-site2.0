<template>
  <div class="theme-mode">
    <button class="theme-mode__btn" @click="changeThemeHandler">
      <img class="theme-mode__btn-icon" :src="sunIcon" alt="sun"/>
      <img class="theme-mode__btn-icon" :src="moonIcon" alt="sun"/>
    </button>
  </div>
</template>
<script setup lang="ts">
import sunIcon from '@/assets/sun.svg'
import moonIcon from '@/assets/moon.svg'
// import useTheme from "@src/composables/useTheme/useTheme";
import useTheme from "src/composables/useTheme/useTheme";


const changeThemeHandler = (): void => {
  useTheme().changeTheme()
}

</script>
<style lang="scss" scoped>
.theme-mode {
  border: 1px solid green;

  width: 100vw;
  height: 48px;

  display: flex;
  padding: var(--padding);
  justify-content: flex-end;

  &__btn {
    background-color: transparent;
  }

  &__btn-icon {
    width: 32px;
    cursor: pointer;
    animation: rotate 10s infinite;
  }
}
</style>
<template>
  <div class="theme-mode">
    <kinesis-container>
      <kinesis-element class="theme-mode__moon-btn" v-if="currentTheme === ThemeMods.dark">
        <button @click="changeThemeHandler">
          <img class="theme-mode__moon" :src="moonIcon" alt="moon"/>
        </button>
      </kinesis-element>

      <kinesis-element class="theme-mode__sun-btn" v-if="currentTheme === ThemeMods.light">
        <button @click="changeThemeHandler">
          <img class="theme-mode__sun" :src="sunIcon" alt="sun"/>
        </button>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import sunIcon from '@/assets/sun.png'
import moonIcon from '@/assets/moon.png'
import useTheme from "@/composables/useTheme";
import {ThemeMods} from "@/composables/useTheme/useTheme.model";

const changeThemeHandler = (): void => useTheme().changeThemeMod()
const currentTheme = computed((): ThemeMods => useTheme().getThemeMode())
</script>
<style lang="scss" scoped>
.theme-mode {
  border: 1px solid green;
  position: relative;
  width: 100vw;
  height: 160px;

  &__moon {
    position: absolute;
    top: 10vh;
    left: 10vw;

    max-width: 80px;
    animation: rotate 60s infinite;
  }

  &__sun {
    position: absolute;
    top: 10vh;
    right: 10vw;

    max-width: 120px;
    animation: rotate 60s infinite;
  }
}
</style>
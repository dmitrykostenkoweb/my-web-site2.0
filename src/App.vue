<template>
  <Transition name="bounce">
    <BackgroundDay v-if="currentTheme === ThemeMods.light"/>
  </Transition>
  <Transition name="bounce">
    <BackgroundNight v-if="currentTheme === ThemeMods.dark"/>
  </Transition>
  <ThemeMode/>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {computed} from "vue";
import ThemeMode from "./components/themeMode/ThemeMode.vue";
import BackgroundDay from "@/components/background/BackgroundDay.vue";
import BackgroundNight from "@/components/background/BackgroundNight.vue";
import useTheme from "@/composables/useTheme";
import {ThemeMods} from "@/composables/useTheme/useTheme.model";

const currentTheme = computed((): ThemeMods => useTheme().getThemeMode())

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
@import "./styles/style.scss";
</style>

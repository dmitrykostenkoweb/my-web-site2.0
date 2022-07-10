<template>
  <Background/>
  <ThemeMode/>
  <router-view></router-view>
</template>
<script setup lang="ts">
import Background from "./components/background/Background.vue";
import ThemeMode from "./components/themeMode/ThemeMode.vue";


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
@import "./styles/style.scss";

body {
  color: white;
  background-color: black;
}
</style>

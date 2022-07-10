<template>
  <div class="welcome">
    <kinesis-container class="welcome__container">
      <kinesis-element class="welcome__hey" :strength="50" type="translate"
      >
        Hey! <span class="welcome__hey-hand">👋</span>
      </kinesis-element>
      <kinesis-element class="welcome__name" :strength="20">
        I am Dmitry Kostenko
      </kinesis-element>
      <kinesis-element class="welcome__post" :strength="100">
        Frontend Developer
      </kinesis-element>
    </kinesis-container>
  </div>


</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.welcome {
  border: 1px solid red;

  width: 100%;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;


  &__hey {
    font-size: var(--font-size-max);
    font-weight: bold;
  }

  &__name {
    font-size: var(--font-size-big);
    font-weight: bold;
  }

  &__hey-hand {
    display: inline-block;
    font-size: var(--font-size-big);
    animation-name: hand-wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
  }

  &__post {
    font-size: var(--font-size-big);
    font-weight: bold;

    background: #AC7EFC;
    background: linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
}


</style>
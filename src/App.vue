<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header>
    <div id="logo">
      <img
        alt="Game logo"
        class="logo"
        src="@/assets/logo.png"
        width="100"
        height="100"
      />
    </div>
    <div class="title">
      <h2>Rock, scissors and paper quick game</h2>
    </div>
  </header>
  <HomeView />
</template>

<style scoped>

header {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#logo {
  margin: 2vw;
}
.title {
  text-align: center;
  margin: 2vh;
}
h2 {
  font-weight: 700;
  font-size: 3vh;
  color: #a3e0d5;
}
</style>

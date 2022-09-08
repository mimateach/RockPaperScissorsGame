<script setup lang="ts">
import Button from "primevue/button";
import { PrimeIcons } from "primevue/api";
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="button">
      <RouterLink to="/game">PLAY</RouterLink>

      <!-- <RouterLink to ="game"><Button
        class="btn"
        label="Jugar"
        p-button-lg
        icon="pi pi-play"
        iconPos="right"
      /></RouterLink> -->
    </div>
  </main>
  <RouterView />

</template>

<style>
main {
  display: flex;
  justify-content: center;
}
.button {
  margin-top: 8vw;
}
.btn {
  background-color: var(--color-button);
}
</style>

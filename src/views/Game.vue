<script setup lang="ts">

</script>
<template>

  <div id="choicesPanel">
        <div id="rock" class="card">
            <div>
                <img src="@/assets/rock.png">
            </div>
        </div>
        <div id="scissors" class="card">
            <img src="@/assets/rock.png">
        </div>
    
        <div id="paper" class="card">
            <img src="@/assets/rock.png">
        </div>
  </div>
  <Button />
  <RouterView />

</template>
<style scoped>

#choicesPanel{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}
.card {
    background-color: var(--color-card);
    margin: 0 3vw 0 3vw;
}

img {
    width: 23vw;
}
</style>

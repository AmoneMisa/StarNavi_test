<template>
  <div class="button-wrapper">
    <button class="action-button" type="button" @click="() => $emit('start-game')" v-if="isFirstGame">Play</button>
    <button class="action-button" type="button" @click="() => $emit('start-game')" v-else>Play again</button>
  </div>
</template>

<script>
  export default {
    computed: {
      isFirstGame() {
        return this.$store.state.isFirstGame;
      }
    }
  }
</script>

<style lang="scss">
  .action-button {
    background-color: #7b8d93;
    color: white;
    height: 50px;
    text-transform: uppercase;
    max-width: 140px;
    border: none;
    min-width: 125px;
    border-radius: 5px;
    font-size: 18px;
  }

</style>

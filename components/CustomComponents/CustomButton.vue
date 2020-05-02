<template>
  <div class="button-wrapper">
    <button class="action-button" type="button"
            @click="() => $emit('start-game')"
            v-if="isFirstGame" :disabled="isStartGame" :class="{'action-button_disabled': isStartGame}">Play</button>
    <button class="action-button" type="button"
            @click="() => $emit('start-game')"
            v-else :disabled="isStartGame" :class="{'action-button_disabled': isStartGame}">Play again</button>
  </div>
</template>

<script>
  export default {
    computed: {
      isFirstGame() {
        return this.$store.state.isFirstGame;
      },
      isStartGame() {
        return this.$store.state.isStarted;
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

  .action-button_disabled {
    cursor: not-allowed;
    background-color: #96adb4;
    color: #d2d2d2;
  }

</style>

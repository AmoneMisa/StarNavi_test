<template>
<div class="button-wrapper">
  <button class="action-button" @submit.prevent="startGame()">{{ button_action }}</button>
</div>
</template>

<script>
    export default {
        data(){
          return {
            button_action: "Play"
          }
        },
      methods: {
       async startGame() {
        await this.$store.dispatch('game-settings', {timeDelay: this.timeDelay})
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

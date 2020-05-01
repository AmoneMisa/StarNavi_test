<template>
  <div class="board-data">
    <div class="board-data__name" v-if="win">{{ username }}</div>
    <div class="board-data__name" v-else>Computer AI</div>
    <div class="board-data__date">{{ game_date }}</div>
  </div>
</template>

<script>
  export default {
    props: ['username', 'game_date'],

    data() {
      return {
        win: true
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .board-data {
    background-color: #cfd8dc;
    color: #a1aaad;
    min-width: 380px;
    margin-bottom: 1px;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
</style>

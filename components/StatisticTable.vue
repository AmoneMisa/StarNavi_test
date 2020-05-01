<template>
  <div class="board">
    <div class="board__title">Leader Board</div>
    <statistic-data v-for="i in 5" :key="i" :username="username" />
  </div>
</template>

<script>
  import StatisticData from "./StatisticData";

  export default {
    components: {StatisticData},
    props: ['username'],
    data() {
      return {
        boardData: []
      }
    }
  }
</script>

<style lang="scss">
  .board__title {
    font-size: 32px;
    color: #888888;
    margin-bottom: 35px;
    line-height: 50px;
  }
</style>

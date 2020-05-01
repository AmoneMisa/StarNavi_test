<template>
  <div class="board" v-if="winners">
    <div class="board__title">Leader Board</div>
    <simplebar data-simplebar-auto-hide="false" class="board__simplebar">
      <div class="board__table">
        <div class="table">
          <statistic-data v-for="(winner, i) in winners" :key="i" :winner="winner.winner" :date="winner.date"/>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
  import StatisticData from "./StatisticData";
  import Simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';

  export default {
    components: {StatisticData, Simplebar},
    computed: {
      winners() {
        return this.$store.state.winners;
      }
    },
    async created() {
      if (!this.winners) {
        await this.$store.dispatch('fetchWinners');
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

  .board__simplebar {
    height: 370px;
    min-width: 380px!important;
    padding-left: 5px;
    overflow-x: hidden;
  }
</style>

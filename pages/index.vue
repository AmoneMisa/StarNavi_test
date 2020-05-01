<template>
  <div class="content">
    <div class="content__wrapper">
      <div class="content__game">
        <action-row/>
        <message :winner="username"/>
        <game-field/>
      </div>
      <div class="content__leaderboard">
        <statistic-table />
      </div>
    </div>
  </div>
</template>

<script>
  import ActionRow from "~/components/ActionRow";
  import GameField from "~/components/GameField";
  import Message from "~/components/Message";
  import StatisticTable from "~/components/StatisticTable";

  export default {
    components: {ActionRow, GameField, Message, StatisticTable},
    computed: {
      username() {
        return this.$store.state.username;
      },
      date() {
        return this.$store.state.date;
      }
    },
    methods :{
      setDate() {
        let currentDate = new Date().toLocaleString() + new Date().toLocaleString('en', {month: 'long'});
        this.$store.commit('setDate', {date: currentDate});
      }
    }
  }
</script>

<style lang="scss">
  .content__wrapper {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;

  }

  .content__game {
    border: 1px solid lightgrey;
    padding: 20px;
  }

  .content__leaderboard {
    border: 1px solid lightgrey;
    border-left: none;
    padding: 20px;
  }
</style>

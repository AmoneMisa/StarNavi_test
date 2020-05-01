<template>
  <div class="content">
    <div class="content__wrapper">
      <div class="content__game">
        <action-row/>
        <message/>
        <game-field/>
      </div>
      <div class="content__leaderboard">
        <statistic-table/>
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
    components: {ActionRow, GameField, Message, StatisticTable}
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

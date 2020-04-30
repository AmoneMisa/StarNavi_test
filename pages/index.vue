<template>
  <div class="content">
    <action-row/>
    <game-field/>
  </div>
</template>

<script>
  import ActionRow from "~/components/ActionRow";
  import GameField from "~/components/GameField";

  export default {
    components: {ActionRow, GameField},
  }
</script>

<style lang="scss">

</style>

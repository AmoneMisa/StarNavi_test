<template>
  <div class="board-data">
    <div class="board-data__name">{{ winner }}</div>
    <div class="board-data__date">{{ date }}</div>
  </div>
</template>

<script>
  export default {
    props: ['winner', 'date']
  }
</script>

<style lang="scss">
  .board-data {
    background-color: #cfd8dc;
    color: #a1aaad;
    min-width: 380px;
    margin-bottom: 1px;
    height: 60px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
</style>

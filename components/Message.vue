<template>
  <div class="message-wrapper">
    <div class="message" v-if="isGameOver">{{ winner }} won!</div>
  </div>
</template>

<script>
    export default {
    props: ['winner', 'isGameOver']
    }
</script>

<style lang="scss">
  .message {
    font-size: 20px;
    color: #9a9a9a;
    text-align: center;
    margin-bottom: 40px;
  }
</style>

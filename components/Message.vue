<template>
  <div class="message-wrapper">
    <div class="message" v-if="username">{{ username }} won!</div>
    <div class="message" v-else>Computer AI won!</div>
  </div>
</template>

<script>
    export default {

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

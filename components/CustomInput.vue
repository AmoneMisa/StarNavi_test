<template>
  <div class="input-wrapper">
    <input class="name-input" v-model="name" @input="isPlaceholderOn = false" @blur="isPlaceholderOn = true">
    <span class="name-input-placeholder" v-if="isPlaceholderOn && name === ''">Enter your name</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isPlaceholderOn: true,
        name: ''
      }
    }
  }
</script>

<style lang="scss">
  .input-wrapper {
    position: relative;
    margin-bottom: 60px;
  }

    .name-input {
      border: 1px solid ghostwhite;
      height: 50px;
      width: 205px;
      padding: 20px;
      background-color: #f3f3f3;
      border-radius: 3px;
      font-size: 16px;
      color: #646d70;
    }

  .name-input-placeholder {
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 16px;
    color: #9ba9ad;
    pointer-events: none;
  }
</style>

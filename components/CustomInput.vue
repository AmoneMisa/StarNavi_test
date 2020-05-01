<template>
  <div class="custom-input-wrapper">
    <input class="custom-input" :value="name" @input="(e) => setName(e.target.value)" @blur="isFocus = false" @focus="isFocus = true">
    <span class="custom-input-placeholder" v-if="!isFocus && name === ''">Enter your name</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFocus: false
      }
    },
    computed: {
      name() {
        return this.$store.state.username;
      }
    },
    methods: {
      setName(name) {
        this.$store.commit('setUsername', {name: this.name});
      }
    }
  }
</script>

<style lang="scss">
  .custom-input-wrapper {
    position: relative;
  }

  .custom-input {
    border: 1px solid ghostwhite;
    height: 50px;
    width: 205px;
    padding: 20px;
    background-color: #f3f3f3;
    border-radius: 3px;
    font-size: 16px;
    color: #646d70;
  }

  .custom-input-placeholder {
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 16px;
    color: #9ba9ad;
    pointer-events: none;
  }
</style>

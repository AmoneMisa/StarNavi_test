<template>
  <div class="select-field">
   <vue-select :options="options" :components="{Deselect}" :placeholder="'Pick game mode'"/>
  </div>
</template>

<script>
  import VueSelect from 'vue-select'

  export default {
    components: {VueSelect},
    data(){
      return {
        options: ["Easy mode", "Normal mode", "Hard mode"]
      }
    }
  }
</script>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";

  .vs__dropdown-toggle {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    padding: 5px 20px;
    height: 50px;
    background: #cfd8dc;
    border: none;
    border-radius: 5px;
    white-space: normal;
    color: #93a1a7;
    font-size: 16px;
  }

  .select-field {
    width: 205px;
  }

  .vs__dropdown-menu {
    background: #cfd8dc;
    border: none;
    color: #93a1a7;
  }

  .vs__open-indicator {
    fill: #8d8d8d;
  }
</style>

<template>
  <div class="select-field">
    <vue-select :options="options" :components="{Deselect}" :placeholder="'Pick game mode'"
                @input="(e)=> chosenMode(e)"/>
  </div>
</template>

<script>
  import VueSelect from 'vue-select'

  export default {
    components: {VueSelect},
    data() {
      return {
        options: ["Easy mode", "Normal mode", "Hard mode"],
        Deselect: null
      }
    },
    methods: {
      chosenMode(value) {
        console.log(value);

        if (value === "Easy mode") {
          this.$store.commit("setCurrentMode", {mode: "easyMode"});
        } else if (value === "Normal mode") {
          this.$store.commit("setCurrentMode", {mode: "normalMode"});
        } else if (value === "Hard mode") {
          this.$store.commit("setCurrentMode", {mode: "hardMode"});
        }
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

  .vs__selected, .vs__search {
    color: #93a1a7;
  }

  .v-select {
    ul {
      color: #93a1a7;;
    }
  }

  .vs1__listbox {
    color: #93a1a7;
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

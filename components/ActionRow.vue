<template>
  <div class="actions">
    <div class="actions__item">
      <custom-select-field/>
    </div>
    <div class="actions__item">
      <custom-input/>
    </div>
    <div class="actions__item">
      <custom-button @start-game="startGame"/>
    </div>
  </div>
</template>

<script>
  import CustomInput from "./CustomComponents/CustomInput";
  import CustomButton from "./CustomComponents/CustomButton";
  import CustomSelectField from "./CustomComponents/CustomSelectField";

  export default {
    components: {CustomSelectField, CustomButton, CustomInput},
    methods: {
      startGame() {
        if (this.$store.state.username !== "" && this.$store.state.currentModeName !== null) {
          this.$store.commit('setIsStarted', {isStarted: true});
          this.$store.commit('setFirstGame', {isFirstGame: false});
        } else if (this.$store.state.username === "") {
          alert("The 'name' field cannot be empty.");
        }
      }
    }
  }
</script>

<style lang="scss">
  .actions {
    display: flex;
    justify-content: center;
  }

  .actions__item {
    margin-right: 15px;
    margin-bottom: 60px;
  }
</style>

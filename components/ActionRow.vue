<template>
  <div class="actions">
    <div class="actions__item">
      <custom-select-field/>
    </div>
    <div class="actions__item">
      <custom-input/>
    </div>
    <div class="actions__item">
      <custom-button/>
    </div>
  </div>
</template>

<script>
  import CustomInput from "./CustomInput";
  import CustomButton from "./CustomButton";
  import CustomSelectField from "./CustomSelectField";

  export default {
    components: {CustomSelectField, CustomButton, CustomInput}
  }
</script>

<style lang="scss">

</style>

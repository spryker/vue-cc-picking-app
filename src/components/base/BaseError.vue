<template>
  <div class="base-error-message mb-3">
    <transition name="sf-fade">
      <slot v-if="errorMessage" name="error-message">
        <div class="base-error-message__wrapp">
          <img src="../../assets/alert.svg" alt="" class="mr-2" />
          {{ errorMessage }}
        </div>
      </slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseError",
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/variables";
.base-error-message {
  color: $error-color;
  text-align: left;
  font-size: 14px;
  line-height: 20px;

  &__wrapp {
    display: flex;
    flex-direction: row;
  }
}
</style>

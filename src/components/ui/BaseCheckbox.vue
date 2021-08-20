<template>
  <div
    class="base-checkbox"
    :class="{
      'base-checkbox__off': !checked,
    }"
  >
    <input
      class="base-checkbox__input"
      type="checkbox"
      :checked="checked"
      :id="fieldId"
      @input="updateInput"
    />
    <label
      class="base-checkbox__label"
      :style="{ 'border-color': color }"
      :for="fieldId"
    >
      <slot />
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCheckbox",
  props: {
    color: {
      type: String,
      default: "transparent",
    },
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
  setup: function (props) {
    return {
      props,
    };
  },
  methods: {
    updateInput(event) {
      this.$emit("update:checked", event.target.checked);
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.base-checkbox {
  display: inline-block;
  position: relative;

  &__off {
    opacity: 0.6;
  }

  &__label {
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    padding: 8px 24px;
    position: relative;
    box-sizing: border-box;
    border-radius: 18px;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  &__input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>

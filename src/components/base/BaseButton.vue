<template>
  <button class="primary-btn" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup: function (props) {
    return props;
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.primary-btn {
  background: $primary-btn-bg;
  color: $primary-btn-color;
  border: none;
  border-radius: $primary-btn-radius;
  height: $primary-btn-height;
  line-height: $primary-btn-height;
  padding: 0;
  width: 100%;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease-in-out;

  &:disabled,
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  &:hover {
    background: darken($primary-btn-bg, 10);
    transform: scale(1.03);
  }

  &:active {
    background: darken($primary-btn-bg, 10);
    transform: scale(0.98);
  }
}
</style>

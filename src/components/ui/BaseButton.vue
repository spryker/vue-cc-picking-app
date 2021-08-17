<template>
  <button
    :class="{
      'primary-btn-outline': btnOutline,
      'primary-btn': !btnOutline,
    }"
    :disabled="disabled"
  >
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
    btnOutline: {
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
.btn {
  border-radius: $primary-btn-radius;
  height: $primary-btn-height;
  line-height: $primary-btn-height;
  padding: 0;
  width: 100%;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: all 0.25s ease-in-out;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1rem;
}

.primary-btn {
  @extend .btn;
  background: $primary-btn-bg;
  color: $primary-btn-color;

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

.primary-btn-outline {
  @extend .btn;
  border-color: $primary-btn-bg;
  color: $primary-btn-bg;

  &:disabled,
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  &:hover {
    background: $primary-btn-bg;
    transform: scale(1.03);
    color: #fff;
  }

  &:active {
    background: $primary-btn-bg;
    transform: scale(0.98);
    color: #fff;
  }
}
</style>

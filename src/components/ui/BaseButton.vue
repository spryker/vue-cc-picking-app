<template>
  <button
    :class="{
      'primary-btn-outline': btnOutline,
      'primary-btn': !btnOutline,
      'primary-btn__active': active,
      'primary-btn_text': text,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";

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
    active: {
      type: Boolean,
      default: false,
    },
    text: {
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
  line-height: 1.5;
  padding: 8px 20px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  }

  &:active {
    background: darken($primary-btn-bg, 10);
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
    color: #fff;
  }

  &:active {
    background: $primary-btn-bg;
    color: #fff;
  }

  &.primary-btn__active {
    background: $primary-btn-bg;
    color: #fff;
  }
}
.primary-btn_text {
  background: none;
  border: none;
}
</style>

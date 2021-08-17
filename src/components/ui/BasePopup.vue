<template>
  <div
    v-if="visible"
    :class="{
      'bottom-position': bottom,
      'full-width': fullWidth,
    }"
    class="popup"
  >
    <div class="popup__wrapp">
      <div class="popup__header">
        <slot name="header"></slot>
        <button tabindex="-1" class="close-btn" @click="$emit('close')">
          <img src="../../assets/icons/clear.svg" alt="" />
        </button>
      </div>

      <div class="popup__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePopup",
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(214, 216, 218, 0.05);
  backdrop-filter: blur(20px);
  text-align: left;

  &.bottom-position {
    .popup__wrapp {
      top: auto;
      bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.full-width {
    .popup__wrapp {
      left: 0;
      right: 0;
    }
  }

  &__wrapp {
    background: #ffffff;
    box-shadow: 0px 3px 16px rgba(13, 58, 147, 0.12);
    border-radius: 18px;
    padding: 18px;
    position: absolute;
    right: 15px;
    top: 15px;
    box-sizing: border-box;
  }

  .close-btn {
    float: right;
    border: none;
    background: transparent;
  }
}
</style>

<template>
  <div
    class="base-input"
    :class="{
      'has-text': !!modelValue,
      'focused-input': highlighted,
      invalid: !valid,
    }"
  >
    <div class="base-input__wrapper">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="updateInput"
        @focusin="onFocus"
        @focusout="outFocus"
        class="base-input__input"
        :class="{
          'with-text': !!modelValue,
        }"
      />
      <label v-if="label" :for="id" class="base-input__label">
        {{ label }}
      </label>

      <transition name="md-input-action" appear>
        <button
          tabindex="-1"
          class="clear-btn"
          @click="clearInput"
          v-if="hasValue && textClearable"
          :disabled="disabled"
        >
          <img src="../../assets/clear.svg" alt="" />
        </button>
      </transition>
    </div>
    <BaseError :error-message="errorMessage" />
  </div>
</template>

<script>
import BaseError from "@/components/base/BaseError.vue";

export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    textClearable: {
      type: Boolean,
      default: true,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute",
    },
    hasShowPassword: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseError,
  },
  data() {
    return {
      highlighted: false,
    };
  },
  computed: {
    hasValue() {
      return !!this.modelValue?.length;
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    clearInput() {
      this.$emit("update:modelValue", null);
    },
    onBlur() {
      this.highlighted = false;
    },
    onFocus() {
      this.highlighted = true;
    },
    outFocus() {
      this.highlighted = false;
    },
  },
};
</script>
<style lang="scss">
@use "sass:math";
@import "../../assets/variables";
.base-input {
  &__wrapper {
    position: relative;
  }
  &__input {
    display: block;
    width: 100%;
    padding: $input-padding-y $input-padding-x;
    font-size: $input-font-size;
    font-weight: $input-font-weight;
    line-height: $input-line-height;
    color: $input-color;
    background-color: $input-bg;
    background-clip: padding-box;
    border: $input-border-width solid $input-border-color;
    appearance: none; // Fix appearance for date inputs in Safari
    box-sizing: border-box;
    border-radius: $input-border-radius;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;

    &:focus,
    &.with-text {
      margin-top: -1px;
      color: $input-focus-color;
      border: $input-focus-border-width solid $input-focus-border-color;
      outline: 0;
    }
  }
  &__label {
    margin-bottom: $form-label-margin-bottom;
    font-size: $form-label-font-size;
    font-weight: $form-label-font-weight;
    color: $form-label-color;
    position: absolute;
    top: 1px;
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    left: $input-padding-x;
    margin-top: $input-padding-y;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    background: #fff;
    padding-left: 2px;
    padding-right: 2px;
    line-height: $input-line-height;
  }

  &.focused-input,
  &.has-text {
    .base-input__label {
      $translate-height: math.div(
        -$form-label-font-size * $input-line-height,
        2
      );
      -webkit-transform: translateY(-$input-padding-y)
        translateY($translate-height);
      transform: translateY(-$input-padding-y) translateY($translate-height);
      color: $form-label-focus-border-color;
    }
  }
  .clear-btn {
    position: absolute;
    top: $input-padding-y;
    right: $input-padding-x;
    border: none;
    background: transparent;
  }

  &.invalid.has-text {
    .base-input__input {
      margin-top: -1px;
      border-color: $error-color;
      outline: 0;
    }

    .base-input__label {
      color: $error-color;
    }
  }
}
</style>

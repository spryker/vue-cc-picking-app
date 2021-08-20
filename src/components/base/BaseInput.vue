<template>
  <div
    class="base-input"
    :class="{
      'has-text': Boolean(modelValue),
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
        @focusIn="onFocus"
        @focusOut="outFocus"
        class="base-input__input"
        :class="{
          'with-text': Boolean(modelValue),
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
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
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
  setup(props) {
    const highlighted = ref(false);
    const hasValue = computed(() => Boolean(props.modelValue?.length));

    const onBlur = () => {
      highlighted.value = false;
    };
    const onFocus = () => {
      highlighted.value = true;
    };
    const outFocus = () => {
      highlighted.value = false;
    };

    return {
      props,
      highlighted,
      hasValue,
      onBlur,
      onFocus,
      outFocus,
    };
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    clearInput() {
      this.$emit("update:modelValue", null);
    },
  },
});
</script>
<style lang="scss" scoped>
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
      color: $input-focus-color;
      outline: 0;
    }

    &:focus {
      border-color: $input-focus-border-color;
      -webkit-box-shadow: 0 0 0 1px $input-focus-border-color;
      -moz-box-shadow: 0 0 0 1px $input-focus-border-color;
      box-shadow: 0 0 0 1px $input-focus-border-color;
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
    }
  }

  &.focused-input {
    .base-input__label {
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
      border-color: $error-color;
      -webkit-box-shadow: 0 0 0 1px $error-color;
      -moz-box-shadow: 0 0 0 1px $error-color;
      box-shadow: 0 0 0 1px $error-color;
      outline: 0;
    }

    .base-input__label {
      color: $error-color;
    }
  }
}
</style>

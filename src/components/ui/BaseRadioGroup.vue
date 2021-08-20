<template>
  <div
    class="radio-check"
    v-for="(option, index) in options"
    :key="option.text"
  >
    <input
      class="radio-check__input"
      :id="id + index"
      :name="id"
      type="radio"
      :value="option.value"
      v-model="selected"
      @input="updateInput"
    />
    <label :for="id + index" class="radio-check__label">{{
      option.label
    }}</label>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BaseRadio",
  emits: ["selectedChange"],
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null,
    },
    options: {
      type: [Array],
      required: true,
    },
  },
  setup: function (props) {
    const selected = ref(props.options[0].value);
    return {
      props,
      selected,
    };
  },
  methods: {
    updateInput(event) {
      this.$emit("selectedChange", event.target.value);
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.radio-check {
  margin-top: 22px;

  &__input {
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid $input-focus-border-color;
    box-sizing: border-box;
    border-radius: 50%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    position: relative;

    &:checked:before {
      content: "";
      width: 12px;
      height: 12px;
      background: $input-focus-border-color;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 6px);
      left: calc(50% - 6px);
    }
  }

  &__label {
    font-size: 18px;
    line-height: 26px;
  }
}
</style>

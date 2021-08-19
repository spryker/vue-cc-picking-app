<template>
  <div v-for="(option, index) in options" :key="option.text">
    <input
      :id="id + index"
      :name="id"
      type="radio"
      :value="option.value"
      v-model="selected"
      @input="updateInput"
    />
    <label :for="id + index">{{ option.label }}</label>
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
</style>

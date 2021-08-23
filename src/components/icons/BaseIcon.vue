<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: { type: [String, Number], default: 20 },
    height: { type: [String, Number], default: 20 },
    viewBox: { type: String, default: "0 0 20 20" },
    iconName: { type: String, default: "box" },
    iconColor: { type: String, default: "none" },
  },
});
</script>

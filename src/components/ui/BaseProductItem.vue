<template>
  <div class="item">
    <h3 class="item__title">
      {{ name }}
    </h3>
    <div class="item__body">
      <span class="item__text">
        {{ count }}
      </span>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    count: [String, Number],
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
.item {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  text-align: left;

  &:first-child {
    margin-top: 0;
  }

  &__title {
    font-size: 12px;
    line-height: 1;
    color: $default-text-color;
    margin-bottom: 20px;
    font-weight: normal;
  }

  &__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-end;
  }

  &__text {
    font-size: 26px;
    line-height: 1;
  }
}
</style>

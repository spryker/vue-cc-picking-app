<template>
  <div class="product-box">
    <div class="product-box__item">
      <BaseProductItem name="Fresh" count="10">
        <img src="../../assets/icons/fresh.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem name="Chilled" count="10">
        <img src="../../assets/icons/meat.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem name="Frozen" count="10">
        <img src="../../assets/icons/frozen.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem name="Ambient" count="10">
        <img src="../../assets/icons/core.svg" alt="" />
      </BaseProductItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseProductItem from "@/components/ui/BaseProductItem.vue";

export default defineComponent({
  components: { BaseProductItem },
  props: {
    card: Object,
  },
});
</script>

<style lang="scss" scoped>
.product-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
  &__item {
    width: 23%;
  }
}
</style>

<template>
  <div class="product-box">
    <div class="product-box__item">
      <BaseProductItem v-if="fresh" name="Fresh" :count="fresh?.count">
        <img src="../../assets/icons/fresh.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem v-if="chilled" name="Chilled" :count="chilled?.count">
        <img src="../../assets/icons/meat.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem v-if="frozen" name="Frozen" :count="frozen?.count">
        <img src="../../assets/icons/frozen.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem v-if="ambient" name="Ambient" :count="ambient?.count">
        <img src="../../assets/icons/core.svg" alt="" />
      </BaseProductItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import BaseProductItem from "@/components/ui/BaseProductItem.vue";
import useProductList from "@/composables/useProductList";
import { OrderProduct } from "@/api";

export default defineComponent({
  components: { BaseProductItem },
  props: {
    products: {
      type: Array as PropType<OrderProduct[]>,
    },
  },
  setup: function (props) {
    const { fresh, chilled, frozen, ambient } = useProductList(props.products);

    return {
      fresh,
      chilled,
      frozen,
      ambient,
    };
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

<template>
  <div class="product-box">
    <div class="product-box__item">
      <BaseProductItem
        v-if="fresh && !isDisabledProduct('fresh')"
        name="Fresh"
        :count="fresh.count"
      >
        <img src="../../assets/icons/fresh.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem
        v-if="chilled && !isDisabledProduct('chilled')"
        name="Chilled"
        :count="chilled.count"
      >
        <img src="../../assets/icons/chilled.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem
        v-if="frozen && !isDisabledProduct('frozen')"
        name="Frozen"
        :count="frozen.count"
      >
        <img src="../../assets/icons/frozen.svg" alt="" />
      </BaseProductItem>
    </div>
    <div class="product-box__item">
      <BaseProductItem
        v-if="ambient && !isDisabledProduct('ambient')"
        name="Ambient"
        :count="ambient.count"
      >
        <img src="../../assets/icons/ambient.svg" alt="" />
      </BaseProductItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseProductItem from "@/components/ui/BaseProductItem.vue";
import useProductList from "@/composables/useProductList";
import { OrderProduct } from "@/api";

export default defineComponent({
  components: { BaseProductItem },
  props: {
    products: {
      type: Array as PropType<OrderProduct[]>,
    },
    disabledItem: Array,
  },
  setup: function (props) {
    const { fresh, chilled, frozen, ambient } = useProductList(props.products);

    const isDisabledProduct = (itemName: string) => {
      if (props.disabledItem && props.disabledItem.length) {
        return props.disabledItem.includes(itemName);
      }
      return false;
    };

    return {
      fresh,
      chilled,
      frozen,
      ambient,
      isDisabledProduct,
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

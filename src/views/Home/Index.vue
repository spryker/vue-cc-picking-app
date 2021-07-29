<template>
  <div v-if="OrderList.length">
    <BaseCard v-for="(orderCard, i) in OrderList" :key="i" :card="orderCard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Order, OrderApiClient } from "@/api";
import BaseCard from "@/components/main/BaseCard.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseCard,
  },
  setup() {
    const OrderApi: OrderApiClient = new OrderApiClient();
    const OrderList: Order[] = OrderApi.getOrders();

    return {
      OrderList,
    };
  },
});
</script>

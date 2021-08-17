<template>
  <BaseSearch
    searchTitle="ORDERS  03/05/2021"
    v-model="search"
    placeholderTitle="Order ID or Pickup Code"
  />
  <div v-if="OrderList.length" class="list">
    <BaseCard v-for="(orderCard, i) in OrderList" :key="i" :card="orderCard" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Order, OrderApiClient } from "@/api";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseSearch from "@/components/ui/BaseSearch.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseCard,
    BaseSearch,
  },
  setup() {
    const search = ref("");
    const OrderApi: OrderApiClient = new OrderApiClient();
    const OrderList: Order[] = OrderApi.getOrders();

    return {
      OrderList,
      search,
    };
  },
});
</script>
<style lang="scss" scoped>
.list {
  padding: 10px 18px;
}
</style>

<template>
  <div class="header">
    <BaseSearch
      searchTitle="ORDERS  03/05/2021"
      v-model="search"
      placeholderTitle="Order ID or Pickup Code"
      class="mb-3"
    />

    <BaseTab :link-list="tabs" />
  </div>

  <div v-if="OrderList.length" class="list">
    <BaseCard
      v-for="(orderCard, i) in OrderList"
      :key="i"
      :card="orderCard"
      :disabledItem="disabledItem"
    />
  </div>
  <BaseFilter @changeFilter="changeFilter" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Order, OrderApiClient } from "@/api";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseSearch from "@/components/ui/BaseSearch.vue";
import BaseFilter from "@/components/ui/BaseFilter.vue";
import BaseTab from "@/components/ui/BaseTab.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseTab,
    BaseFilter,
    BaseCard,
    BaseSearch,
  },
  setup() {
    const search = ref("");
    const disabledItem = ref([]);
    const OrderApi: OrderApiClient = new OrderApiClient();
    const OrderList: Order[] = OrderApi.getOrders();

    const tabs = ref([
      {
        linkTo: "home",
        label: "Picking",
      },
      {
        linkTo: "handover",
        label: "Handover",
      },
    ]);

    const changeFilter = (item: []) => {
      disabledItem.value = item;
    };

    return {
      OrderList,
      search,
      changeFilter,
      disabledItem,
      tabs,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.list {
  padding: 0 18px;
}
.header {
  padding: 18px;
  border-bottom: 1px solid $stroke-default-color;
  margin-bottom: 24px;
}
</style>

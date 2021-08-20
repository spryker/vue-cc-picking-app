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

  <h1>Coming Soon</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Order, OrderApiClient } from "@/api";
import BaseSearch from "@/components/ui/BaseSearch.vue";
import BaseTab from "@/components/ui/BaseTab.vue";

export default defineComponent({
  name: "Handover",
  components: {
    BaseTab,
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

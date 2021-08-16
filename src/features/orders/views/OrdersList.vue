<template>
  <div v-if="orders.length">
    <BaseCard v-for="(order, i) in orders" :key="i" :card="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/features/ui/components/BaseCard.vue";
import { entityRepositoryPlugin } from "@/features/core/entity-repository";
import { Order } from "../entities";

export default defineComponent({
  name: "OrdersList",
  components: {
    BaseCard,
  },
  async setup() {
    let orders: Order[] = [];

    try {
      const orders = await entityRepositoryPlugin.get().getAll(Order);
      console.log("Orders", orders);
    } catch (e) {
      console.error(e);
    }

    return {
      orders,
    };
  },
});
</script>

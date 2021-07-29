<template>
  <div>
    <h4>Order: {{ card.status }}</h4>

    <div>
      <div>
        <p>Total: {{ card.grand_total_formatted }}</p>
        <p>Items: {{ card.number_of_items }}</p>
        <p>Created: {{ card.created_at }}</p>
      </div>
    </div>

    <div>
      <router-link :to="`/edit/${card.id}`">Edit</router-link>
      <button>Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    card: Object,
  },
});
</script>

<style lang="scss" scoped></style>

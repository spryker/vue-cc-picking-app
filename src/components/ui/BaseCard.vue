<template>
  <div class="card">
    <div class="card__title mb-2">
      <div class="card__time">{{ dateToTime(card.created_at.toString()) }}</div>
      <div class="card__id">UF - FF - 1000016</div>
    </div>
    <hr />
    <div class="card__total">
      <img class="mr-1" src="../../assets/icons/cart.svg" alt="" />
      <span>{{ card.number_of_items }} Items</span>
    </div>
    <hr />
    <BaseProductBox />
    <div>
      <router-link :to="`/edit/${card.id}`">Select</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseProductBox from "@/components/ui/BaseProductBox.vue";
import moment from "moment";

export default defineComponent({
  props: {
    card: Object,
  },
  components: {
    BaseProductBox,
  },
  methods: {
    dateToTime(value: string) {
      return moment(value).format("hh:mm");
    },
  },
});
</script>

<style lang="scss" scoped>
.text-block__padding {
  padding: 0 5px;
}
.card {
  background: #ffffff;
  box-shadow: 0px 3px 16px rgba(13, 58, 147, 0.12);
  border-radius: 20px;
  margin-top: 24px;
  padding: 16px 8px;
  text-align: left;

  &:first-child {
    margin-top: 0;
  }

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @extend .text-block__padding;
  }

  &__time {
    font-size: 21px;
    line-height: 1;
  }

  &__id {
    font-size: 14px;
    line-height: 1.2;
  }

  hr {
    height: 1px;
    background: #b6c4df;
    opacity: 0.6;
    border: none;
  }

  &__total {
    font-size: 16px;
    line-height: 1;
    display: flex;
    align-items: center;
    @extend .text-block__padding;
  }
}
</style>

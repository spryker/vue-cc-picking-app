<template>
  <div class="card">
    <div class="card__title mb-2">
      <div class="card__time">{{ formattedTime }}</div>
      <div class="card__id">UF - FF - 1000016</div>
    </div>
    <hr />
    <div class="card__subheader">
      <div class="card__total">
        <img class="mr-1" src="@/assets/icons/cart.svg" alt="" />
        <span>{{ card.number_of_items }} Items</span>
      </div>
      <div v-if="card.cartNote" class="d-flex-center">
        <router-link class="d-flex-center" to="/overview">
          <InfoIcon />
        </router-link>
      </div>
    </div>
    <hr />
    <BaseProductBox :products="card.products" :disabledItem="disabledItem" />
    <div>
      <BaseButton btnOutline @click="goNext"> Start Picking </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Order } from "@/api";
import { formatDate } from "@/helpers/DateFormatter";
import BaseProductBox from "@/components/ui/BaseProductBox.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import InfoIcon from "@/components/icons/InfoIcon.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<Order>,
      default: () => {
        return {};
      },
    },
    disabledItem: Array,
  },
  components: {
    BaseButton,
    BaseProductBox,
    InfoIcon,
  },
  setup(props) {
    const formattedTime = computed(() => {
      return formatDate(new Date(props.card.created_at));
    });
    const router = useRouter();
    const goNext = () => {
      router.push("picking");
    };

    return {
      formattedTime,
      goNext,
    };
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

  &__subheader {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
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
.d-flex-center {
  display: flex;
  align-items: center;
}
</style>

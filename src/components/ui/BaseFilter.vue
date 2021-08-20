<template>
  <div class="filter">
    <BaseButton
      class="filter__button"
      :class="{
        'primary-btn__active': Boolean(productTypesCount),
      }"
      :btnOutline="true"
      :active="Boolean(productTypesCount)"
      @click="toggleShowFilter"
    >
      <img class="mr-1" src="../../assets/icons/filter.svg" alt="" />
      Filter
      <span v-if="Boolean(productTypesCount)"> ({{ productTypesCount }}) </span>
    </BaseButton>
    <BasePopup
      :visible="visibleFilter"
      :bottom="true"
      @close="toggleShowFilter"
    >
      <h3 class="filter__title">Show Product Type</h3>

      <div class="filter__type">
        <BaseCheckbox
          v-for="product in productTypesList"
          :key="product.name"
          :id="product.name"
          :fieldId="product.name"
          v-model:checked="product.active"
          :color="product.color"
        >
          <img
            class="mr-1"
            :src="require('../../assets/icons/' + product.name + '.svg')"
            alt=""
          />
          {{ product.label }}
        </BaseCheckbox>
      </div>
      <h3 class="filter__title">Sort by</h3>
      <div class="filter__sort">
        <BaseRadioGroup
          :options="sortedlist"
          id="sortedList"
          @selectedChange="updateInput"
        />
      </div>
    </BasePopup>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BasePopup from "@/components/ui/BasePopup";
import BaseCheckbox from "@/components/ui/BaseCheckbox";
import { productTypes, sortTypes } from "@/types/filterType";
import BaseRadioGroup from "@/components/ui/BaseRadioGroup";
import { map } from "lodash";

export default defineComponent({
  name: "BaseFilter",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    btnOutline: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseRadioGroup,
    BaseCheckbox,
    BasePopup,
    BaseButton,
  },
  setup: function (props) {
    const visibleFilter = ref(false);
    const productTypesList = reactive(productTypes);
    const productTypesCount = computed(() => {
      return productTypesList.filter((product) => {
        return !product.active;
      }).length;
    });

    const sortedlist = map(sortTypes, (type, key) => {
      return {
        value: key,
        label: type,
      };
    });
    const sortBy = ref(sortedlist[0].value);
    const updateInput = function (select) {
      sortBy.value = select;
    };

    const toggleShowFilter = () => {
      visibleFilter.value = !visibleFilter.value;
    };

    return {
      props,
      visibleFilter,
      toggleShowFilter,
      productTypesList,
      sortedlist,
      sortBy,
      updateInput,
      productTypesCount,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.filter {
  &__button {
    position: fixed;
    bottom: 20px;
    left: 16px;
    width: auto;
    background: #ffffff;
    border: none;
    box-shadow: 1.77778px 1.77778px 8.88889px rgba(0, 0, 0, 0.16);
    border-radius: 18px;

    span {
      display: inline-block;
      margin: 0 3px;
    }

    &:hover,
    &:active,
    &.primary-btn__active {
      & > img {
        filter: brightness(0) invert(1);
      }
    }
  }

  &__title {
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid $stroke-default-color;
    font-weight: normal;
    padding: 8px 0;
    margin: 24px 0;
  }
}
</style>

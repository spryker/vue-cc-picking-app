<template>
  <div class="tab">
    <router-link
      class="tab__link"
      v-for="link in linkList"
      :key="link.linkTo"
      :to="{ name: link.linkTo }"
      :class="{
        tab__active: link.linkTo === currentRoute,
      }"
      >{{ link.label }}</router-link
    >
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BaseTab",
  props: {
    linkList: Array,
  },
  setup: function (props) {
    const router = useRouter();
    const currentRoute = ref(router.currentRoute.value.name);

    return {
      props,
      currentRoute,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../assets/variables";
.tab {
  border: 1px solid rgba(182, 196, 223, 0.6);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 4px;
  display: flex;

  &__link {
    flex: 1 1 0;
    border-radius: 8px;
    transition: all 0.2s;
    color: $base-header-color;
    text-decoration: none;
    padding: 8px;

    &.tab__active {
      background: $primary-btn-bg;
      color: #fff;
    }
  }
}
</style>

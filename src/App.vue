<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import LoginLayout from "@/components/layouts/LoginLayout.vue";
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  markRaw,
  watch,
} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const layoutName = route.name === "login" ? LoginLayout : DefaultLayout;
    const layout = markRaw(layoutName);

    const store = useStore();

    onMounted(() => {
      window.addEventListener("online", () =>
        store.dispatch("UserState/checkUserState", true)
      );
      window.addEventListener("offline", () =>
        store.dispatch("UserState/checkUserState", false)
      );
    });
    onBeforeUnmount(() => {
      window.removeEventListener("online", () =>
        store.dispatch("UserState/checkUserState", true)
      );
      window.removeEventListener("offline", () =>
        store.dispatch("UserState/checkUserState", true)
      );
    });

    watch(
      () => route.name,
      () => {
        layout.value = route.name === "login" ? LoginLayout : DefaultLayout;
      },
      { immediate: true }
    );

    return { layout };
  },
});
</script>

<style lang="scss">
@import "./assets/reset";
@import "./assets/common";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

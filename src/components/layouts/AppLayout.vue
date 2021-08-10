<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import LoginLayout from "@/components/layouts/LoginLayout.vue";
import { markRaw, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "AppLayout",
  setup() {
    const route = useRoute();
    const layoutName = route.name === "login" ? LoginLayout : DefaultLayout;
    const layout = markRaw(layoutName);
    watch(
      () => route.name,
      (name) => {
        console.info(route.name);
        layout.value = route.name === "login" ? LoginLayout : DefaultLayout;
      },
      { immediate: true }
    );
    return { layout };
  },
};
</script>

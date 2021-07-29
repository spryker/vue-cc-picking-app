<template>
  <component :is="layout" id="root-wrapper">
    <router-view />
  </component>
</template>

<script lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    DefaultLayout,
  },
  setup() {
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
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

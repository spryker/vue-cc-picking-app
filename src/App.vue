<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

export default defineComponent({
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

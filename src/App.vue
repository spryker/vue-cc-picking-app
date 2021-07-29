<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<script lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    DefaultLayout,
  },
  setup() {
    return {};
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

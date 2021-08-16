<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import DefaultLayout from "@/features/ui/layouts/DefaultLayout.vue";

export default defineComponent({
  components: {
    RouterView,
    DefaultLayout,
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

<template>
  <div class="default-layout">
    <BaseHeader />
    <div id="root-wrapper">
      <router-view />
    </div>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    BaseHeader,
    BaseFooter,
  },
});
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

#root-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 0 0;
}
</style>

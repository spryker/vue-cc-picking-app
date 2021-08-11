<template>
  <div class="default-layout">
    <BaseHeader />
    <div class="container">
      <div id="root-wrapper">
        <router-view />
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseHeader from "@/components/layouts/BaseHeader.vue";
import BaseFooter from "@/components/layouts/BaseFooter.vue";

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

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
}

#root-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 0 0;
  max-width: 600px;
}
</style>

<template>
  <div class="default-layout">
    <div id="root-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
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

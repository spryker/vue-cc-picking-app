<template>
  <div class="default-layout">
    <BaseHeader />
    <div class="container">
      <div id="root-wrapper">
        <router-view />
      </div>
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

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#root-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 0 0;
  max-width: 600px;
}
</style>

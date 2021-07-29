<template>
  <footer>
    <p>© 2021 - Spryker Systems GmbH</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseFooter",
});
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 0;
}
</style>

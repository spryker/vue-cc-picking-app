<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

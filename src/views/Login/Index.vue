<template>
  <div class="login-page">
    <div class="logo">
      <img src="../../assets/ALDI_logo.svg" alt="ALDI" />
    </div>
    <h1 class="page-title mt-5 mb-5">Hey champ, ready for the next round?</h1>

    <BaseInput
      id="operatorId"
      label="Operator ID"
      v-model="operatorId"
      class="mb-3"
      :valid="false"
    />
    <BaseInput
      id="password"
      label="Password"
      v-model="password"
      type="password"
      class="mb-3"
    />

    <BaseError v-if="operatorId || password" :error-message="errorMessage" />

    <BaseButton @click="login"> Log In </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseError from "@/components/base/BaseError.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    BaseInput,
    BaseButton,
    BaseError,
  },
  data() {
    return {
      operatorId: null,
      password: null,
      errorMessage:
        "Oops, something went wrong. The Username or the Password you entered is invalid.",
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
  },
});
</script>

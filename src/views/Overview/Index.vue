<template>
  <div class="hero">
    <img class="responsive-img" src="@/assets/images/overview-hero@2x.png" />
  </div>
  <div class="note">
    <div class="note__header header">
      <h1 class="note__title header__item">Customer Note</h1>
      <h2 class="note__id header__item">ID - 7865 8972</h2>
    </div>
    <p class="note__message">
      The European languages are members of the same family. Their separate
      existence is a myth. For science, music, sport, etc, Europe uses the same
      vocabulary. The languages only differ in their grammar, their
      pronunciation and their most common words. Everyone realizes why a new
      common language would be desirable: one could refuse to pay expensive
      translators.
    </p>
    <div class="note__footer">
      <template v-if="false">
        <BaseButton btnOutline>Go it</BaseButton>
      </template>
      <template v-else>
        <BaseButton btnOutline @click="goNext">Start Picking</BaseButton>
        <BaseButton btnOutline text @click="goBack">
          Back to Overview
        </BaseButton>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    const goNext = () => {
      router.push("picking");
    };
    return { goBack, goNext };
  },
});
</script>
<style lang="scss" scoped>
.responsive-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.hero {
  margin: 48px auto auto;
  width: 70%;
}
.note {
  margin-top: 48px;
  padding: 0 24px 28px 24px;
  text-align: left;

  &__title,
  &__id {
    font-size: 16px;
    line-height: 1.18em;
    letter-spacing: 0.015em;
  }

  &__id {
    font-weight: 500;
  }

  &__message {
    margin-top: 16px;
  }

  &__footer {
    margin-top: 32px;
  }
}
.header {
  &__item {
    padding: 10px 0;
    border-bottom: 0.5px solid rgba(182, 196, 223, 0.6);
  }
}
</style>

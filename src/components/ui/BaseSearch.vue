<template>
  <div class="base-search">
    <div v-if="!showSearch" class="base-search__title">
      <h3 class="title">
        {{ searchTitle }}
      </h3>
      <button tabindex="-1" class="search-btn" @click="toggleSearch">
        <img src="../../assets/icons/search.svg" alt="" />
      </button>
      <button tabindex="-1" class="profile-btn" @click="toggleProfile">
        <img src="../../assets/icons/profile.svg" alt="" />
      </button>
    </div>
    <div v-else class="base-search__wrapper">
      <input
        :id="id"
        type="text"
        :value="modelValue"
        @input="updateInput"
        :placeholder="placeholderTitle"
        class="base-search__input"
      />

      <button tabindex="-1" class="search-btn" @click="toggleSearch">
        <img src="../../assets/icons/search.svg" alt="" />
      </button>
      <button tabindex="-1" class="back-btn" @click="toggleSearch">
        <img src="../../assets/icons/back.svg" alt="" />
      </button>

      <transition name="md-input-action" appear>
        <button
          tabindex="-1"
          class="clear-btn"
          @click="clearInput"
          v-if="hasValue && textClearable"
        >
          <img src="../../assets/icons/clear.svg" alt="" />
        </button>
      </transition>
    </div>

    <BasePopup
      @close="toggleProfile"
      :visible="visibleProfile"
      :full-width="false"
    >
      <template v-slot:default>
        <dl class="profile">
          <dt>Store Name</dt>
          <dd>Postcode, City</dd>
          <dd>Street, Number</dd>
          <dt>Employee Name</dt>
          <dd>7821 KOP 39661</dd>
        </dl>
        <BaseButton class="mt-4" :btn-outline="true" @click="goToLogin">
          Log Out
        </BaseButton>
      </template>
    </BasePopup>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import BasePopup from "@/components/ui/BasePopup.vue";
import BaseButton from "@/components/ui/BaseButton";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BaseSearch",
  props: {
    searchTitle: {
      type: String,
      default: "",
    },
    placeholderTitle: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    textClearable: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    BaseButton,
    BasePopup,
  },
  setup(props) {
    const showSearch = ref(false);
    const visibleProfile = ref(false);
    const hasValue = computed(() => Boolean(props.modelValue?.length));

    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
    };
    const toggleProfile = () => {
      visibleProfile.value = !visibleProfile.value;
    };

    const router = useRouter();
    const goToLogin = () => {
      router.push("login");
    };

    return {
      props,
      showSearch,
      toggleProfile,
      visibleProfile,
      toggleSearch,
      hasValue,
      goToLogin,
    };
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    clearInput() {
      this.$emit("update:modelValue", null);
    },
  },
});
</script>
<style lang="scss" scoped>
@use "sass:math";
@import "../../assets/variables";
.icon-btn {
  position: absolute;
  border: none;
  background: transparent;
  top: 8px;
}
.base-search {
  &__title {
    background: $search-bg;
    border-radius: $search-border-radius;
    text-align: left;
    padding: 8px 15px;
    position: relative;

    .title {
      font-size: 16px;
      line-height: 1.5;
      font-weight: normal;
    }

    .profile-btn {
      @extend .icon-btn;
      right: 15px;
    }

    .search-btn {
      @extend .icon-btn;
      right: 50px;
    }
  }

  &__wrapper {
    position: relative;

    .clear-btn {
      @extend .icon-btn;
      right: 50px;
    }

    .search-btn {
      @extend .icon-btn;
      right: 15px;
    }

    .back-btn {
      @extend .icon-btn;
      left: 15px;
      top: 7px;
    }
  }
  &__input {
    display: block;
    width: 100%;
    padding: 8px 75px 8px 45px;
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
    color: #000;
    background-clip: padding-box;
    border: $input-border-width solid $input-focus-border-color;
    box-sizing: border-box;
    border-radius: $search-border-radius;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;

    &:focus,
    &.with-text {
      outline: 0;
    }
  }
}
.profile {
  dt {
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 0.015em;
    color: $base-header-color;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 24px;
  }
  dd {
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 0.015em;
    color: $base-header-color;
  }
}
</style>

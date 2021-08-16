import { shallowMount } from "@vue/test-utils";
import { RouterView } from "vue-router";
import App from "./App.vue";

describe("App.vue", () => {
  it("should render router-view component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(RouterView)).toBeTruthy();
  });
});

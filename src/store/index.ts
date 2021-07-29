import { createStore, createLogger } from "vuex";

export const store = createStore({
  modules: {},
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
});

export default store;

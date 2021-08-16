import "./registerServiceWorker";

import { createApp } from "vue";

import App from "./App.vue";
import { featuresPlugin } from "./features";
import { corePlugin, CorePluginOptions } from "./features/core";

const app = createApp(App);

app.use(corePlugin, {
  apiPlugin: {
    baseURL: process.env.VUE_APP_API_URL ?? "http://glue.spryker.local",
  },
} as CorePluginOptions);
app.use(featuresPlugin);

app.mount("#app");

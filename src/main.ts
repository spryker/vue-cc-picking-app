import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppLayout from "@/layouts/AppLayout.vue";

const app = createApp(App);

app.component("AppLayout", AppLayout);
app.use(router);
app.use(store);
app.mount("#app");

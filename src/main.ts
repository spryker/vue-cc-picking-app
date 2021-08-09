import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/mockserver/client";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

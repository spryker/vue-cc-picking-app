import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/features/orders").then((m) => m.OrdersList),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

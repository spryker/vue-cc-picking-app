import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home/Index.vue"),
  },
  {
    path: "/overview",
    component: () => import("@/views/Overview/Index.vue"),
  },
  {
    path: "/picking",
    component: () => import("@/views/Picking/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

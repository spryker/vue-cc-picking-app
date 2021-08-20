import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/Index.vue"),
  },
  {
    path: "/overview",
    name: "overview",
    component: () => import("@/views/Overview/Index.vue"),
  },
  {
    path: "/picking",
    name: "picking",
    component: () => import("@/views/Picking/Index.vue"),
  },
  {
    path: "/handover",
    name: "handover",
    component: () => import("@/views/Handover/Index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Index.vue"),
    meta: {
      layout: "LoginLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

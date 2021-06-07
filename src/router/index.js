import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/list.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my.vue"),
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component: () => import("../views/shopcar.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;

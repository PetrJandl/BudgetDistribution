import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../../vue/admin/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin/knihy",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../../vue/admin/views/Books.vue"),
  },
  {
    path: "/admin/pomucky",
    name: "Tools",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tools" */ "../../vue/admin/views/Tools.vue"),
  },
  {
    path: "/admin/zobrazitObjednavku/:id",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "order" */ "../../vue/admin/views/Order.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

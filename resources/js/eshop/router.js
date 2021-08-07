import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../../vue/eshop/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/eshop/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eshop/knihy",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../../vue/eshop/views/Books.vue"),
  },
  {
    path: "/eshop/pomucky",
    name: "Tools",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tools" */ "../../vue/eshop/views/Tools.vue"),
  },
  {
    path: "/eshop/nakupniKosik",
    name: "Basked",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "basked" */ "../../vue/eshop/views/Basked.vue"),
  },
  {
    path: "/eshop/objednavka",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "order" */ "../../vue/eshop/views/Order.vue"),
  },
  {
    path: "/eshop/rekapitulace",
    name: "Recap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "order" */ "../../vue/eshop/views/Recap.vue"),
  }, {
    path: "/eshop/odeslano",
    name: "OrderSend",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "order" */ "../../vue/eshop/views/OrderSend.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

require('./bootstrap');


import Vue from "vue";
import App from '../vue/App.vue';

import router from "./router";

import ItemLine from "../vue/components/ItemLine.vue";
import { BootstrapVue, IconsPlugin, NavbarPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);

Vue.config.productionTip = false;
Vue.config.runtimeCompiler = true;

Vue.component("ItemLine", ItemLine);



const eshop = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')








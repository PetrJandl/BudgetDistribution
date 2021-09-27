require('../bootstrap');


import Vue from "vue";
import App from '../../vue/eshop/app.vue';

import router from "./router";

import ItemLine from "../../vue/eshop/components/ItemLine.vue";
import { BootstrapVue, IconsPlugin, NavbarPlugin } from "bootstrap-vue";

import { VueScrollIndicator } from 'vue-scroll-indicator';
Vue.component('vue-scroll-indicator', VueScrollIndicator);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import linkify from 'vue-linkify'

Vue.directive('linkified', linkify);

import titleMixin from '../titleMixin';
Vue.mixin(titleMixin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);


Vue.config.productionTip = false;
Vue.config.runtimeCompiler = true;

Vue.component("ItemLine", ItemLine);


Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.focus()
    }
});

import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
    }
});


const eshop = new Vue({
    router,
    render: h => h(App)
}).$mount('#eshop')








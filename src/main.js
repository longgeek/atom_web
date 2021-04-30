import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import '@/filters';
import api from '@/api';
import http from '@/utils/http';
import vars from '@/vars';
Vue.prototype.$api = api;
Vue.prototype.$http = http;
Vue.prototype.$vars = vars;

Vue.config.productionTip = false;

// Plugins
// moment
import moment from 'moment';        // 导入模块
moment.locale('zh-cn');             // 设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment;

import "@iconscout/unicons/css/line.css";

import BootstrapVue from 'bootstrap-vue';
import "@/scss/index.scss";

var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
import VueMeta from 'vue-meta';
import Gravatar from 'vue-gravatar';
Vue.component('v-gravatar', Gravatar);
Vue.prototype.$gravatar_host = 'gravatar.zeruns.tech';

import animated from 'animate.css';
Vue.use(animated);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.use(VueScrollTo, {
    duration: 3000,
    easing: "ease"
})

Vue.use(VueMeta, {
    // The component option name that vue-meta looks for meta info on.
    keyName: 'page',
})

Vue.use(BootstrapVue)
Vue.use(Scrollspy);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import http from "./http/http.js";
Vue.prototype.$http = http;
//全局引入http方法

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
//全部引入vant

import { Lazyload } from "vant";
Vue.use(Lazyload);
//在main.js引入懒加载的指令

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//全部引入elemnt-ui

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

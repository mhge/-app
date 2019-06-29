// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vant from "vant";
import flexible from "lib-flexible";
import router from "./router";

import store from "./store";
import "./mock/gn";
import { Panel } from "vant";
import { Area } from "vant";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(flexible);
Vue.use(Panel);
Vue.use(Area);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  axios,
  components: { App },
  template: "<App/>"
});

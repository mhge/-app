// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vant from "vant";
import flexible from "lib-flexible";
import router from "./router";
import store from "./store";
// import "./data/list"

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(flexible);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  flexible,
  components: { App },
  template: "<App/>"
});

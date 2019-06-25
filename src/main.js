// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vant from "vant";
import flexible from "lib-flexible";
// import "vant/lib/index.css";
import router from "./router";
import store from "./store"


Vue.config.productionTip = false;
Vue.use(Vant);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  flexible,
  components: { App },
  template: "<App/>"
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vant from "vant";
<<<<<<< HEAD
import flexible from "lib-flexible";
=======
import "vant/lib/index.css";
>>>>>>> de222b1c01dfcd4edb0d74e97f7a82028c82100f
import router from "./router";


Vue.config.productionTip = false;
Vue.use(Vant);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

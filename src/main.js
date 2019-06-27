// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Vant from "vant";
import flexible from "lib-flexible";
import router from "./router";
<<<<<<< HEAD
import store from './store';
import './mock/gn';
=======
import store from "./store";
>>>>>>> 27f1407dd1e475cb8aaf8843ffaa7a5242ce7a35

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(flexible);

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	store,
	components: {
		App
	},
	template: "<App/>"
});

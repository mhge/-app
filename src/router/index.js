import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import Router from "vue-router";

import Main from "../view/main.vue";
import Dtqb from "../view/dtqb.vue";
import Fb from "../view/fb.vue";
import Zcq from "../view/zcq.vue";

Vue.use(Router);
Vue.use(Vant);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: Main
    },
    {
      path: "/dtqb",
      component: Dtqb
    },
    {
      path: "/fb",
      component: Fb
    },
    {
      path: "/zcq",
      component: Zcq
    }
  ]
});

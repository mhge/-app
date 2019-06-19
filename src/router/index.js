import Vue from "vue";
import Router from "vue-router";

import Mains from "../view/mains.vue";
import Main from "../view/main.vue";
import Dtqb from "../view/dtqb.vue";
import Fb from "../view/fb.vue";
import Zcq from "../view/zcq.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/mains"
    },
    {
      path: "/mains",
      component: Mains,
      children: [
        {
          path: "/main",
          compinent: Main
        },
        {
          path: "/dtqb",
          compinent: Dtqb
        },
        {
          path: "/fb",
          compinent: Fb
        },
        {
          path: "/zcq",
          compinent: Zcq
        }
      ]
    }
  ]
});

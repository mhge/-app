import Vue from "vue";
import Router from "vue-router";

import Mains from "../view/mains.vue";
import Main from "../view/main.vue";
import Dtqb from "../view/dtqb.vue";
import Fb from "../view/fb.vue";
import Zcq from "../view/zcq.vue";

import Xz from "../view/xz.vue";
import Xz1 from "../view/xz.1.vue";
import Search from "../view/search.vue";

import Bmain from "../view/bmain.vue";
import Banner from "../view/banner.vue";
import Baoming from "../view/baoming.vue";

import Tjsh from "../view/tjsh.vue";

import Rz from "../view/rz.vue";

import Zyz from "../view/zyz.vue";

import Qbhds from "../view/qbhds.vue";
import Qbhd from "../view/qbhd.vue";

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
    },
    {
      path: "/xz",
      component: Xz
    },
    {
      path: "/xz1",
      component: Xz1
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/bmain",
      component: Bmain,
      children: [
        {
          path: "/banner",
          component: Banner
        },
        {
          path: "/baoming",
          component: Baoming
        }
      ]
    },
    {
      path: "/tjsh",
      component: Tjsh
    },
    {
      path: "/rz",
      component: Rz
    },
    {
      path: "/zyz",
      component: Zyz
    },
    {
      path: "/qbhds",
      component: Qbhds
    },
    {
      path: "/qbhd",
      component: Qbhd
    }
  ]
});

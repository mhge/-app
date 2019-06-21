import Vue from "vue";
import Router from "vue-router";

import Mains from "../view/mains.vue";
import Main from "../view/main.vue";
import Dtqb from "../view/dtqb.vue";
import Fb from "../view/fb.vue";
import Zcq from "../view/zcq.vue";

import Xz from "../view/xz.vue";
import Search from "../view/search.vue";

import Banner from "../view/banner.vue";
import Baoming from "../view/baoming.vue";
import Jqbm from "../view/jqbm.vue";

import Tjsh from "../view/tjsh.vue";

import Rz from "../view/rz.vue";

import Zyz from "../view/zyz.vue";

import Qbhds from "../view/qbhds.vue";
import Qbhd from "../view/qbhd.vue";
import Fpzk from "../view/fpzk.vue";
import Jlzl from "../view/jlzl.vue";
import Gaet from "../view/gaet.vue";

import Xq from "../view/xq.vue";
import Jzdt from "../view/jzdt.vue";
import Jzhb from "../view/jzhb.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main"
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
      path: "/search",
      component: Search
    },
    {
      path: "/baoming",
      component: Baoming
    },
    {
      path: "/banner",
      component: Banner
    },
    {
      path: "/jqbm",
      component: Jqbm
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
      component: Qbhds,
      children: [
        {
          path: "/qbhd",
          component: Qbhd
        },
        {
          path: "/fpzk",
          component: Fpzk
        },
        {
          path: "/jlzl",
          component: Jlzl
        },
        {
          path: "/gaet",
          component: Gaet
        }
      ]
    },

    { path: "/xq", component: Xq },
    { path: "/jzhb", component: Jzhb },
    { path: "/jzdt", component: Jzdt }
  ]
});

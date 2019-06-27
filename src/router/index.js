import Vue from "vue";
import Router from "vue-router";
import Mains from "../view/mains.vue";
import Main from "../view/main.vue";

import Zxzms from "../view/zxzms.vue";
import Zxzm from "../view/zxzm.vue";
import Tczy from "../view/tczy.vue";
import Xszm from "../view/xszm.vue";
import Gyhds from "../view/gyhds.vue";
import Gyhd from "../view/gyhd.vue";
import Gyet from "../view/gyet.vue";
import Gyfp from "../view/gyfp.vue";
import Gyjl from "../view/gyjl.vue";
import Xz from "../view/xz.vue";
import Search from "../view/search.vue";

import Banner from "../view/banner.vue";
import Baoming from "../view/baoming.vue";
import Jqbm from "../view/jqbm.vue";

import Qbhds from "../view/qbhds.vue";
import Qbhd from "../view/qbhd.vue";
import Fpzk from "../view/fpzk.vue";
import Jlzl from "../view/jlzl.vue";
import Gaet from "../view/gaet.vue";
import Tjsh from "../view/tjsh.vue";
import Jzdt from "../view/jzdt.vue";
import Jzhb from "../view/jzhb.vue";
import Rz from "../view/rz.vue";
import Xmxqs from "../view/xmxqs.vue";
import Xmxq from "../view/xmxq.vue";
import Zyz from "../view/zyz.vue";

import Zcq from "../view/zcq.vue";
import yao from "../view/Yao.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import Forget from "../view/Forget.vue";
import My from "../view/My.vue";

import Dt from "../view/Dt";
import Dtxq from "../view/Dtxq";
import Dtxc from "../view/Dtxc";
import Dtqz from "../view/Dtqz";
import Dtgn from "../view/Dtgn";
import Jk from "../view/JK";
import Xu from "../view/Xu";
import Fb from "../view/Fb";
import Aix from "../view/Aix";

import TCC from "../view/TCC";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/mains",
      redirect: "/main",
      component: Mains,
      children: [
        {
          path: "/main",
          component: Main
        }
      ]
    },
    {
      path: "/zcq",
      component: Zcq
    },
    {
      path: "/fb",
      component: Fb
    },
    {
      path: "/aix",
      component: Aix
    },
    {
      path: "/dt",
      redirect: "/dtxq",
      component: Dt,
      children: [
        {
          path: "/dtxq",
          component: Dtxq
        },
        {
          path: "/dtxc",
          component: Dtxc
        },
        {
          path: "/dtqz",
          component: Dtqz
        },
        {
          path: "/dtgn",
          component: Dtgn
        }
      ]
    },
    {
      path: "/xu",
      component: Xu
    },
    {
      path: "/jk",
      component: Jk
    },
    {
      path: "zcq",
      component: Zcq
    },
    {
      path: "/tcc",
      component: TCC
    },
    {
      path: "/yao",
      component: yao
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/forget",
      component: Forget
    },
    {
      path: "/my",
      component: My
    },
    {
      path: "/fb",
      component: Fb
    },
    {
      path: "/aix",
      component: Aix
    },
    {
      path: "/dt",
      redirect: "/dtxq",
      component: Dt,
      children: [
        {
          path: "/dtxq",
          component: Dtxq
        },
        {
          path: "/dtxc",
          component: Dtxc
        },
        {
          path: "/dtqz",
          component: Dtqz
        },
        {
          path: "/dtgn",
          component: Dtgn
        }
      ]
    },
    {
      path: "/xu",
      component: Xu
    },
    {
      path: "/jk",
      component: Jk
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
      path: "/zxzms",
      redirect: "/zxzm",
      component: Zxzms,
      children: [
        {
          path: "/zxzm",
          component: Zxzm
        },
        {
          path: "/tczy",
          component: Tczy
        },
        {
          path: "/xszm",
          component: Xszm
        }
      ]
    },
    {
      path: "/gyhds",
      component: Gyhds,
      redirect: "/gyhd",
      children: [
        {
          path: "/gyhd",
          component: Gyhd
        },
        {
          path: "/gyet",
          component: Gyet
        },
        {
          path: "/gyjl",
          component: Gyjl
        },
        {
          path: "/gyfp",
          component: Gyfp
        }
      ]
    },
    {
      path: "/xmxqs",
      component: Xmxqs,
      redirect: "/xmxq",
      children: [
        {
          path: "/xmxq",
          component: Xmxq
        },
        {
          path: "/jzdt",
          component: Jzdt
        },

        {
          path: "/Jzhb",
          component: Jzhb
        },
        { path: "/jzhb", component: Jzhb }
      ]
    },
    {
      path: "/qbhds",
      component: Qbhds,
      redirect: "/qbhd",
      children: [
        { path: "/qbhd", component: Qbhd },
        { path: "/fpzk", component: Fpzk },
        { path: "/jlzl", component: Jlzl },
        { path: "/gaet", component: Gaet }
      ]
    }
  ]
});

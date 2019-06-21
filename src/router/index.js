import Vue from "vue";
import Router from "vue-router";
import Mains from "../view/mains.vue";
import Main from "../view/main.vue";
import Dtqb from "../view/dtqb.vue";
import Fb from "../view/fb.vue";
import Zcq from "../view/zcq.vue";
import Zxzms from "../view/zxzms.vue"
import Zxzm from "../view/zxzm.vue"
import Tczy from "../view/tczy.vue"
import Xszm from "../view/xszm.vue"
import Gyhds from "../view/gyhds.vue"
import Gyhd from "../view/gyhd.vue"
import Gyet from "../view/gyet.vue"
import Gyfp from "../view/gyfp.vue"
import Gyjl from "../view/gyjl.vue"
import Xmxqs from "../view/xmxqs.vue"
import Xmxq from "../view/xmxq.vue"
import Jzdt from "../view/jzdt.vue"
import Jzhb from "../view/jzhb.vue"



<<<<<<< HEAD
import Xz from "../view/xz.vue";
import Search from "../view/search.vue";

import Banner from "../view/banner.vue";
import Baoming from "../view/baoming.vue";
import Jqbm from "../view/jqbm.vue";
=======

>>>>>>> de222b1c01dfcd4edb0d74e97f7a82028c82100f




<<<<<<< HEAD
import Qbhds from "../view/qbhds.vue";
import Qbhd from "../view/qbhd.vue";
import Fpzk from "../view/fpzk.vue";
import Jlzl from "../view/jlzl.vue";
import Gaet from "../view/gaet.vue";

import Xq from "../view/xq.vue";
import Jzdt from "../view/jzdt.vue";
import Jzhb from "../view/jzhb.vue";
=======
>>>>>>> de222b1c01dfcd4edb0d74e97f7a82028c82100f

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/mains",
      redirect:"/main",
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
<<<<<<< HEAD
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
=======
      path:"/zxzms",
      component:Zxzms,
      redirect:"/zxzm",
      children:[
        {
          path:"/zxzm",
          component:Zxzm
        },
        {
          path:"/tczy",
          component:Tczy
        },
        {
          path:"/xszm",
          component:Xszm
        }
      ]
    },
    {
      path:'/gyhds',
      component:Gyhds,
      redirect:"/gyhd",
      children:[
        {
          path:'/gyhd',
          component:Gyhd,
        },
        {
          path:'/gyet',
          component:Gyet,
        },
        {
          path:'/gyjl',
          component:Gyjl,
        },
        {
          path:'/gyfp',
          component:Gyfp,
        }
      ]
    },
    {
      path:'/xmxqs',
      component:Xmxqs,
      redirect:"/xmxq",
      children:[
        {
          path:"/xmxq",
          component:Xmxq
        },
        {
          path:"/jzdt",
          component:Jzdt
        },
        {
          path:"/Jzhb",
          component:Jzhb
        }
      ]
    }
>>>>>>> de222b1c01dfcd4edb0d74e97f7a82028c82100f
  ]
});

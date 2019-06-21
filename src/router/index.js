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









Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/mains"
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
  ]
});

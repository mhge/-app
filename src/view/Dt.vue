<template>
  <div>
    <van-nav-bar :title="tit" class="bt">
      <van-icon name="search" slot="right" class="tb"/>
    </van-nav-bar>
    <div class="bto">
      <ul>
        <li
          @click="qb(index)"
          v-for="(item,index) in items"
          :key="item.id"
          :class="xuindex===index?'active':''"
        >
          <a>{{item}}</a>
        </li>
      </ul>
    </div>
      <transition
        enter-active-class="animated bounceInRight"
            leave-active-class="animated bounceOutUp"
       >
        <router-view></router-view>
      </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/dt">动态</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/fb">发布</van-tabbar-item>
      <van-tabbar-item icon="fire" to="/zcq">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>
<script>
export default {
  name: "Dt",
  data() {
    return {
      active: 1,
      tit: "全部动态",
      items: ["全部", "宣传", "求助", "感恩"],
      tz: { 0: "/dtxq", 1: "/dtxc", 2: "/dtqz", 3: "/dtgn" },
      xuindex: 0,
      sx:5,
    };
  },
  methods: {
    xc() {
      this.$router.push("/jk");
      console.log(11);
    },
    qb(i) {
      this.xuindex = i;
      this.$router.push(this.tz[i]);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  border-bottom: black 2px solid;
  color: black;
}
.tb {
  font-size: 24px;
}
.bto ul {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: #eeeeee 1px solid;
  line-height: 40px;
  height: 40px;
}
.bto ul a {
  color: rgb(201, 199, 199) 100%!;
  font-size: 14px;
}
li {
  height: 100%;
  color: rgba(187, 187, 187, 1);
}
</style>

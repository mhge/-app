<template>
  <div>
    <router-view @get="name"></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/dtqb">动态</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/fb">发布</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/zcq">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "mains",
  data() {
    return {
      active: 0,
      tit: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    name(data) {
      this.tit = data;
    }
  }
};
</script>

<style>

</style>

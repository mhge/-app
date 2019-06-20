<template>
  <div>
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft"/>
    <router-view @send="datas" @dt="dt"></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item>{{list}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      list: "",
      title: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    datas(msg) {
      this.list = msg;
    },
    dt(msg) {
      this.title = msg;
    }
  }
};
</script>
<style scoped>
.van-tabbar-item--active {
  color: gray;
}
.van-tabbar-item {
  background-color: #e8e8ea;
}
</style>

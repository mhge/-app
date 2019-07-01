<template>
  <div>
    <van-nav-bar title="全部活动" fixed left-arrow @click-left="onClickLeft" :z-index='100'/>
    <section>
    <van-tabbar v-model="active" :fixed="data">
      <van-tabbar-item to="qbhd">全部活动</van-tabbar-item>
      <van-tabbar-item to="fpzk">扶贫助困</van-tabbar-item>
      <van-tabbar-item to="jlzl">敬老助老</van-tabbar-item>
      <van-tabbar-item to="gaet">关爱儿童</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      data: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("./main");
    }
  }
};
</script>
<style scoped>
section {
  margin-top: 46px;
}
</style>

<template>
  <div>
    <van-nav-bar title="公益项目" fixed left-arrow @click-left="onClickLeft" :z-index="100"/>

<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <section>
      <div>
        <van-search v-model="value" placeholder="搜索你想知道的" shape="round" @search="onSearch"></van-search>
      </div>
      <van-tabbar
        v-model="active"
        :fixed="false"
        active-color="black"
        inactive-color="#A9A9A9"
        class="tab"
      >
        <van-tabbar-item to="/gyhd">
          <span>全部活动</span>
        </van-tabbar-item>
        <van-tabbar-item to="/gyfp">
          <span>扶贫助困</span>
        </van-tabbar-item>
        <van-tabbar-item to="/gyjl">
          <span>敬老助老</span>
        </van-tabbar-item>
        <van-tabbar-item to="/gyet">
          <span>关爱儿童</span>
        </van-tabbar-item>
      </van-tabbar>
      <router-view></router-view>
    </section>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      active:0,
      isLoading: false
    };
  },
  mounted() {},
  methods: {
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSearch() {}
  }
};
</script>
<style scoped>
.tab span{
  font-size: 16px;
}
section {
  margin-top: 46px;
}
</style>

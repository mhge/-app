<template>
  <div>
    <van-nav-bar title="志愿者招募" fixed left-arrow @click-left="onClickLeft" :z-index="100"/>

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
        <van-tabbar-item to="/zxzm">
          <span>最新招募</span>
        </van-tabbar-item>
        <van-tabbar-item to="/tczy">
          <span>同城志愿</span>
        </van-tabbar-item>
        <van-tabbar-item to="/xszm">
          <span>线上招募</span>
        </van-tabbar-item>
      </van-tabbar>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  name: "zxzms",
  data() {
    return {
      active: 0,
      value: ""
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("./main");
    },
    onSearch() {}
  }
};
</script>
<style scoped>
.tab span {
  font-size: 16px;
}
section {
  margin-top: 46px;
}
</style>

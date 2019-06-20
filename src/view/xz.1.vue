<template id="data">
  <!-- <div>
    <van-nav-bar title="我的勋章" left-arrow @click-left="onClickLeft"/>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,i) in list" :title="item"/>
      <slot name="zw">33333333333333</slot>
    </van-list>
  </div>-->
</template>

<v-data>
<ul slot="zw"><li>22222222222222222</li><ul>
</v-data>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  //注册组件标签：v-data
  components: {
    "v-data": {
      template: "#data"
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },

    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 6) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
</style>



<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="儿童"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="search">
      <p>热搜:</p>
      <van-button size="mini">环保</van-button>
      <van-button size="mini">敬老</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {
    onSearch() {
      console.log("手机键盘调用搜索");
    },
    onCancel() {
      this.$router.push("/main");
    }
  }
};
</script>
<style scoped>
.search {
  color: #bdbdc5;
  margin-left: 20px;
  font-size: 12px;
}
.van-button--default {
  color: #bdbdc5;
}
</style>

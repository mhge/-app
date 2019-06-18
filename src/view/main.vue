<template>
  <div>
    <h4>首页</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "首页"
    };
  },
  mounted() {
    this.$emit("get", this.title);
  }
};
</script>
<style scoped>
</style>

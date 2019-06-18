<template>
  <div>
    <h4>注册前</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我的"
    };
  },
  mounted() {
    this.$emit("get", this.title);
  }
};
</script>
<style scoped>
</style>

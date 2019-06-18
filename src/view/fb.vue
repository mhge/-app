<template>
  <div>
    <h4>发布</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "发布"
    };
  },
  mounted() {
    this.$emit("get", this.title);
  }
};
</script>
<style scoped>
</style>

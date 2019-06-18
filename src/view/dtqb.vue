<template>
  <div>
    <h4>动态全部</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "动态"
    };
  },
  mounted() {
    this.$emit("get", this.title);
  }
};
</script>
<style scoped>
</style>

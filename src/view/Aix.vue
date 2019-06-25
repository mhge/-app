<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="xx">
      <textarea name="a" class="nr"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "Aix",
  data() {
    return {
      title: "爱心筹"
    };
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }

  }
};
</script>
<style scoped>
.xx{
  width: 100%;
  display: flex;
  justify-content: center;

}
.nr {
  margin-top:15px;
  min-height: 130px;
  width: 300px;

}
</style>




<template>
  <div>
    <van-nav-bar title="我的勋章" left-arrow @click-left="onClickLeft"/>
    <ul>
      <li>
        <img src="../assets/xz.jpg">
        <p>志愿之星</p>
      </li>

      <li>
        <img src="../assets/xz.jpg">
        <p>志愿达人</p>
      </li>
      <li>
        <img src="../assets/xz.jpg">
        <p>志愿榜样</p>
      </li>
      <li>
        <img src="../assets/xz.jpg">
        <p>志愿卫士</p>
      </li>
      <li>
        <img src="../assets/xz.jpg">
        <p>志愿初善</p>
      </li>
      <li>
        <img src="../assets/xz.jpg">
        <p>敬请期待</p>
      </li>
    </ul>
    <p>已没有更多数据...</p>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>

<style scoped>
img {
  width: 1.88rem;
  height: 1.88rem;
  border-radius: 50%;
  margin: 0.08rem;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.2rem;
}
li {
  width: 3.06rem;
  height: 3.44rem;
  text-align: center;
}
div > p {
  text-align: center;
}
</style>



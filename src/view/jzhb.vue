<template>
  <div>
    <van-row class="li">
      <van-col span="20" class="li-chi" offset="2">
        <a>
          <span></span>
        </a>
        <h3>项目进展报告</h3>
        <p>招募对象:个人、学校、企业</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in ex illum atque accusamus labore sapiente, facilis consectetur deserunt quam, voluptatum itaque adipisci aliquam incidunt pariatur, laudantium dolorem molestias vel!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in ex illum atque accusamus labore sapiente, facilis consectetur deserunt quam, voluptatum itaque adipisci aliquam incidunt pariatur, laudantium dolorem molestias vel!</p>
        <img src="../assets/xz.jpg">
        <img src="../assets/xz.jpg">
        <img src="../assets/xz.jpg">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="20" class="li-chi" offset="2">
        <a>
          <span></span>
        </a>
        <h3>项目发布</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in ex illum atque accusamus labore sapiente, facilis consectetur deserunt quam, voluptatum itaque adipisci aliquam incidunt pariatur, laudantium dolorem molestias vel!</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.li {
  margin: 20px auto;
}
.li img {
  width: 290px;
  height: 100px;
  margin: 6px 0;
}
.li .van-col {
  text-align: left;
  border-left: 1px solid gainsboro;
  padding-left: 20px;
  position: relative;
}
.li .van-col a {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid gainsboro;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: -15px;
}
a > span {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid gainsboro;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 7px;
  background: gainsboro;
}
.li-chi {
  margin-top: 20px;
}
</style>

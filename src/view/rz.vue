<template>
  <div class="head">
    <van-nav-bar title="组织入住" fixed left-arrow @click-left="onClickLeft"/>
    <img src="../assets/xz.jpg">
    <van-cell-group>
      <van-cell
        title="志愿者是什么？"
        label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste"
      />
    </van-cell-group>
    <van-row>
      <van-col span="20" offset="1">
        <div>
          <h3>如何注册志愿者？</h3>
          <van-row>
            <van-col span="24" class="flex">
              <img src="../assets/xz.jpg">
              <div>
                <h4>志愿者是什么？</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste</p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img src="../assets/xz.jpg">
              <div>
                <h4>志愿者是什么？</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste</p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img src="../assets/xz.jpg">
              <div>
                <h4>志愿者是什么？</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste</p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img src="../assets/xz.jpg">
              <div>
                <h4>志愿者是什么？</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste</p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img src="../assets/xz.jpg">
              <div>
                <h4>志愿者是什么？</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste</p>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <van-row class="color">
      <van-col span="20" offset="1">
        <div>
          <h4>作为志愿者的创建者，我有什么样的责任和义务？</h4>
          <p>1、Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>2、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
          <p>3、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
        </div>
      </van-col>
    </van-row>
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
.head {
  margin-top: 46px;
}
img {
  width: 100%;
  height: 4rem;
}
.van-col {
  margin-top: 20px;
}
.van-col > img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 30px;
}
.flex {
  display: flex;
}
h4 {
  margin: 0;
}
</style>

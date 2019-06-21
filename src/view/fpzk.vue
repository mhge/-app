<template>
  <div class="head">
    <van-row>
      <van-col span="22" class="flex" offset="1">
        <img src="../assets/xz.jpg">
        <div>
          <h4>Totam cumque magnam sunt dolore iste dolor sit</h4>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </van-col>
      <van-col span="22" class="flex" offset="1">
        <img src="../assets/xz.jpg">
        <div>
          <h4>Totam cumque magnam sunt dolore iste dolor sit</h4>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </van-col>
    </van-row>
    <van-nav-bar title="查看全部"/>
    <p class="width"></p>
    <van-cell title="相关组织" is-link value="查看更多"/>
    <van-row>
      <van-col span="22" class="flex" offset="1">
        <img src="../assets/xz.jpg">
        <div>
          <h4>Totam cumque magnam sunt dolore iste dolor sit</h4>
          <van-row class="tw">
            <van-col span="16">
              <van-cell title="北京石景区" icon="wap-home"/>
            </van-col>
            <van-col span="8">
              <van-cell title="123" icon="friends-o"/>
            </van-col>
          </van-row>
          <p>Loremipsumdolor sitdolor sit</p>
        </div>
      </van-col>
      <van-col span="22" class="flex" offset="1">
        <img src="../assets/xz.jpg">
        <div>
          <h4>Totam cumque magnam sunt dolore iste dolor sit</h4>
          <van-row class="tw">
            <van-col span="16">
              <van-cell title="北京石景区" icon="wap-home"/>
            </van-col>
            <van-col span="8">
              <van-cell title="123" icon="friends-o"/>
            </van-col>
          </van-row>
          <p>Loremipsumdolor sitdolor sit</p>
        </div>
      </van-col>
      <van-col span="22" class="flex" offset="1">
        <img src="../assets/xz.jpg">
        <div>
          <h4>Totam cumque magnam sunt dolore iste dolor sit</h4>
          <van-row class="tw">
            <van-col span="16">
              <van-cell title="北京石景区" icon="wap-home"/>
            </van-col>
            <van-col span="8">
              <van-cell title="123" icon="friends-o"/>
            </van-col>
          </van-row>
          <p>Loremipsumdolor sitdolor sit</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.head {
  margin-bottom: 20px;
}
.van-col > img {
  width: 130px;
  height: 100px;
  margin-right: 20px;
}
.flex {
  margin-top: 20px;
  display: flex;
  box-shadow: 2px 4px 4px gainsboro;
}
.width {
  background: #f2f2f9;
  height: 10px;
  margin: 0 auto;
}
.tw van-cell {
  font-size: 12px;
}
.tw ~ p {
  margin: 0;
}
.tw .van-cell {
  padding: 5px 0;
}
h4 {
  margin: 0;
}
</style>

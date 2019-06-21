<template>
  <div>
    <div class="bground">
      <van-row>
        <van-col span="10" offset="7">
          <div class="sground">
            <van-col span="16" offset="4">
              <van-cell title="453" label="捐款总人数"/>
            </van-col>
          </div>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
        <van-col span="22" class="flex" offset="2">
          <img src="../assets/xz.jpg">
          <van-cell title="赵小五" value="募捐50元" label="1小时之前"/>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bground {
  width: 100%;
  height: 120px;
  background: gainsboro;
}
.bground .van-col {
  margin-top: 10px;
}
.sground .van-cell__title {
  text-align: center;
  margin-top: 16px;
}
.sground {
  width: 100%;
  height: 100px;
  background: white;
  margin-bottom: 10px;
}
.van-col {
  margin-top: 20px;
}
.van-col > img {
  width: 1.2rem;
  height: 1.2rem;
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

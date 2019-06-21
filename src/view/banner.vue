<template>
  <div class="head">
    <van-nav-bar title="童话八音盒" fixed left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <van-panel title="标题">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed minus quidem voluptas facilis consequatur molestias, tenetur impedit tempore fugit id ad incidunt voluptatem cumque, nemo explicabo obcaecati, placeat laudantium.</div>
    </van-panel>
    <p class="width"></p>
    <van-cell-group>
      <van-cell title="招募人数" value="1111"/>
      <van-cell title="报名起止" is-link value="内容"/>
      <van-cell title="活动地点" is-link value="内容"/>
      <van-cell title="咨询人" is-link value="内容"/>
    </van-cell-group>
    <p class="width"></p>
    <van-cell title="单元格" is-link label="描述"/>
    <p class="width">招募详情</p>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="5">
        <a>童话八音盒</a>
      </van-col>
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
    </van-row>

    <van-row>
      <van-col offset="3" span="18">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorum illo tempora esse doloremque, dicta aut perspiciatis cum rerum a culpa tenetur quisquam temporibus atque at, vel molestiae neque quod.</p>
        <p>
          <img src="../assets/xz.jpg">
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, distinctio, commodi reiciendis quod recusandae alias non iure rerum nemo doloribus laborum quis tempore harum aliquam totam earum voluptas? Eveniet, atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, distinctio, commodi reiciendis quod recusandae alias non iure rerum nemo doloribus laborum quis tempore harum aliquam totam earum voluptas? Eveniet, atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, distinctio, commodi reiciendis quod recusandae alias non iure rerum nemo doloribus laborum quis tempore harum aliquam totam earum voluptas? Eveniet, atque.</p>
        <p>
          <img src="../assets/xz.jpg">
        </p>
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="5">
        <a>童话八音盒</a>
      </van-col>
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
    </van-row>

    <van-row class="color">
      <van-col span="24">
        <div>
          <h4>参加活动后，您将:</h4>
          <p>
            <a>1</a>参加后您将获取精美一份
          </p>
          <p>
            <a>2</a>参加后您将获取精美一份
          </p>
          <p>
            <a>3</a>参加后您将获取精美一份
          </p>
        </div>
      </van-col>
    </van-row>

    <van-row class="shadow">
      <van-col span="24">
        <h4>招募流程</h4>
      </van-col>
    </van-row>

    <van-row class="li">
      <van-col span="24" class="li-chi">
        <a></a>
        <p>1、报名</p>
        <p>招募对象:个人、学校、企业</p>
        <p>报名请联系：111</p>
        <p>将根据报名情况，邀请大家加入微信交流群</p>
      </van-col>
    </van-row>
    <van-row class="li">
      <van-col span="24" class="li-chi">
        <a></a>
        <p>1、报名</p>
        <p>招募对象:个人、学校、企业</p>
        <p>报名请联系：111</p>
        <p>将根据报名情况，邀请大家加入微信交流群</p>
      </van-col>
    </van-row>
    <van-row class="li">
      <van-col span="24" class="li-chi">
        <a></a>
        <p>1、报名</p>
        <p>招募对象:个人、学校、企业,将根据报名情况，邀请大家加入微信交流群报名请联系</p>
        <img src="../assets/xz.jpg">
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
      <van-col span="5">
        <a>注意事项</a>
      </van-col>
      <van-col span="4">
        <img src="../assets/xz.jpg">
      </van-col>
    </van-row>

    <van-row class="color">
      <van-col span="24">
        <div>
          <p>
            <a>1</a>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            <a>2</a>, deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?
          </p>
          <p>
            <a>3</a>, deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?
          </p>
        </div>
      </van-col>
    </van-row>
    <p>有任何问题欢迎咨询！！！</p>

    <van-tabbar v-model="active">
      <van-tabbar-item to="baoming">报名</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/main");
    }
  }
};
</script>
<style scoped>
.van-cell {
  color: #8f8f90;
}
.width {
  background: #f2f2f9;
  height: 10px;
  margin: 0 auto;
}
.van-icon-user-circle-o:before {
  font-size: 26px;
}
.head > p:nth-of-type(3) {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
img {
  width: 38px;
  height: 38px;
}
.van-col {
  text-align: center;
}
a {
  line-height: 40px;
}
p > img,
.li-chi > img {
  width: 260px;
  height: 150px;
}
.van-panel__content {
  margin: 4px 0;
}
.list {
  background: gainsboro;
}
.color {
  background: gainsboro;
  margin: 40px 52px;
}
.color a {
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  background: white;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
}
.color .van-col {
  text-align: left;
}
.shadow {
  width: 5rem;
  height: 20px;
  line-height: 20px;
  margin: 20px auto;
  box-shadow: 0px 0px 20px black;
}
h4 {
  margin: 0;
}
.li {
  width: 6rem;
  margin: 10px auto;
}
.li .van-col {
  text-align: left;
  border-left: 1px dashed gainsboro;
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
.li-chi {
  margin-top: 20px;
}
.head > p:last-child {
  width: 6rem;
  margin: 0 auto;
  text-align: center;
}
.van-tabbar-item {
  background-color: #e8e8ea;
  color: black;
}
</style>

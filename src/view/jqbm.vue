<template>
  <div class="head">
    <van-nav-bar title="芙蓉路项目" fixed left-arrow @click-left="onClickLeft"/>
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
    <van-row>
      <van-col span="23" offset="1">
        <div class="bm">
          <img src="../assets/xz.jpg">
          <van-cell title="单元格" is-link label="描述"/>
        </div>
      </van-col>
    </van-row>

    <p class="width">招募详情</p>
    <van-row>
      <van-col span="24">
        <van-cell title="报名方式" label="adipisicing elit. Ea, is"/>
        <van-cell
          title="邮件主旨"
          label="adipisicing elit. Ea, isadipisicing elit. Ea, isadipisicing elit. Ea, is"
        />
        <van-cell
          title="招募要求"
          label="adipisicing eit. Ea, isadipisicing elit. Ea, isadit. Ea, isadipisicing elit. Ea, isadlit. Ea, isadipisicing elit. Ea, isadipisicing elit. Ea, is"
        />
        <van-cell
          title="招募范围"
          label="adipisicing elit. Ea, isadipisicing elit. Ea, isadipisicing elit. Ea, is"
        />
        <van-cell
          title="活动内容"
          label="adipisicing elit. Ea, isadipisicing elit. Ea, isadipisicing elit. Ea, is"
        />
        <van-cell
          title="招募基地"
          label="adipisicing elit. Ea, isadipisicing elit. Ea, isadipisicing elit. Ea, is"
        />
      </van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item to="baoming">报名</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {active:""};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/main");
    }
  }
};
</script>
<style scoped>
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
.van-panel div {
  padding: 6px 0;
}
.bm {
  display: flex;
  align-items: center;
}
.bm img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.van-tabbar-item {
  background-color: #e8e8ea;
  color: black;
}
</style>

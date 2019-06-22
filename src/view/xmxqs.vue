<template>
  <div>
    <!-- 头部详情 -->
    <van-nav-bar title="项目详情" fixed left-arrow @click-left="onClickLeft" :z-index="100"/>
    <!-- 公用主体 -->
    <section>
      <!-- 图片 -->
      <van-row>
        <van-col span="24" class="imges">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
        </van-col>
      </van-row>
      <!-- 慈善详情 -->
      <van-row>
        <van-col span="22" offset="1" class="nav">
          <van-row class="good1" type="flex">
            <van-col span="5">
              <span>慈善募捐</span>
            </van-col>|
            <van-col span="9" offset="1">
              <span>呵护山里娃的双手</span>
            </van-col>|
            <van-col span="6" offset="1">
              <span>共济公益</span>
            </van-col>
          </van-row>
          <van-row class="good2" type="flex">
            <van-col span="24">
              目标金额：
              <span>￥10000</span>
            </van-col>
          </van-row>
          <van-row class="good3" type="flex" justify="space-between">
            <van-col span="24">
              <van-row class="good5" type="flex">
                <van-col span="22" offset="1" align="center">
                  <span>￥10000</span>
                </van-col>
              </van-row>
              <van-row class="good5" type="flex">
                <van-col span="24">
                  <span>已筹备金额/元</span>
                </van-col>
              </van-row>
            </van-col>
            <div style="font-size: 20px">|</div>
            <van-col span="22" offset="1" align="center">
              <van-row class="good5" type="flex">
                <van-col span="24">
                  <span>575</span>
                </van-col>
              </van-row>
              <van-row class="good5" type="flex">
                <van-col span="24">
                  <span>捐款人数</span>
                </van-col>
              </van-row>
            </van-col>
            <div style="font-size: 20px ">|</div>
            <van-col span="22" offset="1" align="center">
              <van-row class="good5" type="flex">
                <van-col span="24">
                  <span>575</span>
                </van-col>
              </van-row>
              <van-row class="good5" type="flex">
                <van-col span="24">
                  <span>转发次数</span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
          <!-- 显示滑动效果 -->
          <van-row>
            <van-col span="24">
              <van-slider v-model="value" active-color="#ccc" bar-height="6px" :min="30" :max="90">
                <div slot="button" class="custom-button">
                  <van-icon name="gold-coin"/>
                </div>
              </van-slider>
            </van-col>
          </van-row>
          <!-- 发起方详情 -->
          <van-row class="about">
            <van-col span="24">
              <van-row>
                <van-col span="24">
                  <p>发起方：北京天使妈妈慈善基金会</p>
                </van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <span>活动备案号：455432121546555555ADSAMLD</span>
                </van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <span>传得儿童关爱中心为山区学生筹募手套，呵护山里娃的双手。</span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
          <div class="copy"></div>
          <!-- 导航栏 -->
          <van-tabbar
            v-model="active"
            :fixed="false"
            active-color="black"
            inactive-color="#A9A9A9"
            class="tab"
          >
            <van-tabbar-item to="/xmxq">
              <span>项目详情</span>
            </van-tabbar-item>
            <van-tabbar-item to="/jzdt">
              <span>捐赠动态</span>
            </van-tabbar-item>
            <van-tabbar-item to="/jzhb">
              <span>进展汇报</span>
            </van-tabbar-item>
          </van-tabbar>
          <router-view></router-view>
        </van-col>
      </van-row>
    </section>
    <!-- <van-row >
    <van-col span="22" offset="1">-->
    <van-tabbar v-model="act" active-color="#A9A9A9" inactive-color="#A9A9A9" class="bottom">
      <!-- <van-col span="4"> -->
      <van-tabbar-item icon="like-o"></van-tabbar-item>
      <!-- </van-col>
      <van-col span="4">-->
      <van-tabbar-item icon="comment-o"></van-tabbar-item>
      <!-- </van-col>
      <van-col span="4">-->
      <van-tabbar-item icon="exchange"></van-tabbar-item>
      <!-- </van-col>
      <van-col span="10" offset='2'>-->
      <van-tabbar-item class="bottom1">
        <van-button type="default">默认按钮</van-button>
      </van-tabbar-item>
      <!-- </van-col> -->
    </van-tabbar>
    <!-- </van-col>
    </van-row>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我的",
      value: 0,
      active: 0,
      act: 0
    };
  },
  mounted() {
    this.$emit("get", this.title);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
section {
  margin-top: 46px;
  margin-bottom: 50px;
}
.imges {
  height: 171px;
}
.imges img {
  width: 100%;
  height: 100%;
}
.good1 {
  font-size: 12px;
  line-height: 32px;
}
.good2 {
  font-size: 12px;
  color: #a9a9a9;
}
.good3 {
  font-size: 12px;
  margin-top: 20px;
  color: #a9a9a9;
  height: 50px;
}
.about {
  height: 94px;
  border: dashed 1px #a9a9a9;
  margin-top: 15px;
}
.about p {
  font-size: 12px;
  margin: 7px 0;
}
.about span {
  font-size: 12px;
  color: #a9a9a9;
}
.copy {
  height: 10px;
  text-align: center;
  background: rgb(236, 233, 233);
  margin-top: 20px;
}
.bottom1 {
  width: 200px;
}
</style>

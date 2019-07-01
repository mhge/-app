<template>
  <div>
    <!-- 头部详情 -->
    <van-nav-bar title="项目详情" fixed left-arrow @click-left="onClickLeft" :z-index="100"/>
    <!-- 公用主体 -->
    <section>
      <!-- 图片 -->
      <van-row>
        <van-col span="24" class="imges">
          <img :src="list.img" alt>
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
              <span>{{list.title}}</span>
            </van-col>|
            <van-col span="6" offset="1">
              <span>共济公益</span>
            </van-col>
          </van-row>
          <van-row class="good2" type="flex">
            <van-col span="24">
              目标金额：
              <span>￥{{list.moneyed}}</span>
            </van-col>
          </van-row>
          <van-row class="good3" type="flex" justify="space-between">
            <van-col span="24">
              <van-row class="good5" type="flex">
                <van-col span="22" offset="1" align="center">
                  <span>￥{{list.money}}</span>
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
              <van-slider v-model="value" active-color="#ccc" bar-height="6px" disabled :min="30" :max="90">
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
                  <p>发起方：{{list.initiator}}</p>
                </van-col>
              </van-row>
              <van-row>
                <van-col span="24">
                  <span>活动备案号：455432121546555555ADSAMLD</span>
                </van-col>
              </van-row>
              <van-row class="spn">
                <van-col span="24">
                  <span>{{list.evolve}}</span>
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
            <van-tabbar-item :to="{name:'xmxq',query:{id:list.id}}" >
              <span>项目详情</span>
            </van-tabbar-item>
            <van-tabbar-item :to="{name:'jzdt',query:{id:list.id}}" >
              <span>捐赠动态</span>
            </van-tabbar-item>
            <van-tabbar-item :to="{name:'jzhb',query:{id:list.id}}" >
              <span>进展汇报</span>
            </van-tabbar-item>
          </van-tabbar>
        </van-col>
      </van-row>
      <router-view></router-view>
    </section>
    <!-- 底部 -->
    <van-tabbar v-model="act" active-color="#A9A9A9" inactive-color="#A9A9A9" class="bottom">
      <van-tabbar-item icon="like-o"></van-tabbar-item>
      <van-tabbar-item icon="comment-o"></van-tabbar-item>
      <van-tabbar-item icon="exchange"></van-tabbar-item>
      <van-tabbar-item class="bottom1" @click="bot">
        <span>我要捐钱</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "我的",
      value: 0,
      active: 0,
      act: 0,
      list:''
    };
  },
  mounted() {
    this.$emit("get", this.title);
        var that=this
        axios({
      url: "http://101.132.164.103:8080/together/projectid.do",
      params: { id:that.$route.query.id }
    }).then(function(data) {
      that.list = data.data.info;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    bot(){
      this.$router.push("./jk")
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
  height: 104px;
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
.spn {
  height: 48px;
  overflow: hidden;
}
.spn span {
  font-size: 12px;
  line-height: 24px;
  color: rgb(144, 142, 142);
}
</style>

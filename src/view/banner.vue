<template>
  <div class="head">
    <van-nav-bar :title="list.title" fixed left-arrow @click-left="onClickLeft"/>
    <van-field/>
    <van-panel class="tit">
      <div>{{list.title}}</div>
      <div class="good2">
        <span>{{list.detail}}</span>
        </div>
    </van-panel>
    <p class="width"></p>
    <van-cell-group>
      <van-cell title="招募人数" value="1111"/>
      <van-cell title="报名起止"  :value="list.bedate+ '~'+list.afdate" style="font-size:12px"/>
      <van-cell title="活动地点" is-link value="线上"/>
      <van-cell title="咨询人" is-link :value="list.consultanter"/>
    </van-cell-group>
    <p class="width"></p>
    <van-cell :title="list.title" is-link label="给盲童讲故事，我们走进去，他们走出来" style="font-size:12px;color:black;"/>
    <p class="width">招募详情</p>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img :src="list.img">
      </van-col>
      <van-col span="5">
        <a>童话八音盒</a>
      </van-col>
      <van-col span="4">
        <img :src="list.img">
      </van-col>
    </van-row>

    <van-row>
      <van-col offset="2" span="20">
        <p>有一群小朋友,他们因为视力障碍,不能用眼睛去
探知这个美好的世界,缺少与外界交流的机会。</p>
        <p>
          <img :src="list.img">
        </p>
        <p>所以在2017年10月15日,国际盲人节那天,北京善
源公益基金会发起了一个名叫“童话八音盒”的公
益项目。</p>
        <p>项目通过邀请知名主持人、演员作为“声音精灵
给盲童讲故事,给他们送去温暖,并呼吁大家多多
关注盲童,以及盲人群体。</p>
        <p>现在月亮姐姐、钱峰、董倩等明星都已加入进来。</p>
        <p>
          <img src="http://www.pubchn.com/file/upload/201905/28/14-25-38-64-135598.jpg">
        </p>
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img src="http://www.pubchn.com/file/upload/201905/28/14-26-05-94-135598.jpg">
      </van-col>
      <van-col span="5">
        <a>童话八音盒</a>
      </van-col>
      <van-col span="4">
        <img src="http://img95.699pic.com/photo/50052/0071.jpg_wh300.jpg">
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
        <img src="http://img95.699pic.com/photo/50052/0071.jpg_wh300.jpg">
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="4">
        <img src="http://www.pubchn.com/file/upload/201905/28/14-25-38-64-135598.jpg">
      </van-col>
      <van-col span="5">
        <a>注意事项</a>
      </van-col>
      <van-col span="4">
        <img src="http://www.pubchn.com/file/upload/201905/28/14-25-38-64-135598.jpg">
      </van-col>
    </van-row>

    <van-row class="color">
      <van-col span="24">
        <div>
          <p>
            <a>1</a>我们希望你有足够的责任心,并且确保可以找到
小孩和你共同参与。
          </p>
          <p>
            <a>2</a>这是一本承载着来自各地人们祝福的书,盲童们
非常珍惜它,所以请你一定要保护好它,别让它在
你的城市走丢了。
          </p>
          <p>
            <a>3</a>图书请以顺丰到付的形式寄出,大家可以通过邮
寄凭证,或者发票报销快递费用。
          </p>
        </div>
      </van-col>
    </van-row>
    <p>有任何疑问欢迎找咨询人咨询</p>
      
    <van-tabbar v-model="active" class="tab">
      <van-tabbar-item to="baoming">报名</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return {
      active:0,
      list:''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/main");
    }
  },
  mounted(){
            var that=this
        axios({
      url: "http://101.132.164.103:8080/together/activityid.do",
      params: { id:that.$route.query.id }
    }).then(function(data) {
      console.log(data.data.info)
      that.list = data.data.info;
    });
  }
};
</script>
<style scoped>
.tit div{
  margin:10px 0;
}
.van-cell {
  color: #8f8f90;
}
.van-cell span{
  width: 200px
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
.van-panel__header{
  padding:0
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
.good2 {
  height: 48px;
  overflow: hidden;
}
.good2 span {
  font-size: 12px;
  line-height: 24px;
  color: rgb(144, 142, 142);
}

</style>

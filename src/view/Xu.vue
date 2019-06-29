<template>
  <div>
    <div class="ll">
      <header>
        <van-nav-bar
          title="需求详情页"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </header>
      <section>
        <div class="top">
          <div class="tou">
            <img class="tp1" :src="lis.img">
            <div>
              <p class="xx">
                <span class="xm">{{lis.username}}</span>
                <span class="sh">已审核</span>
                <span class="gr">个人求助</span>
              </p>
              <p class="dz">
                <van-icon name="location-o"/>
                {{lis.adress}}
              </p>
            </div>
          </div>
          <h2>{{lis.title}}</h2>
          <div class="qian">
            <ul>
              <li>
                <span>目标金额/元</span>
                <span>￥{{lis.money}}</span>
              </li>
              <li>
                <span>已筹金额</span>
                <span>{{lis.moneyed}}</span>
              </li>
              <li>
                <span>捐款人次</span>
                <span>{{lis.people}}</span>
              </li>
            </ul>
          </div>
          <div class="jd">
            <van-circle
              v-model="currentRate"
              :rate="bai"
              :speed="100"
              :text="text"
              size="100px"
              :stroke-width="60"
              color="red"
            />
          </div>
          <p class="jkz">{{jkc}}</p>
          <p class="sj">
            <span></span>该进度用时8天
          </p>
        </div>
        <p class="kd"></p>
        <div class="er">
          <p class="bar">
            <span class="xqxq">需求详情</span>
            <span class="yi">一周前</span>
          </p>
          <p class="nr">
            {{lis.needdetil}}
          </p>
          <div class="nrimg">
            <img :src="lis.img">
            <img :src="lis.img">
            <img :src="lis.img">
          </div>
        </div>
        <div class="san">
          <h2>需求证明</h2>
          <div class="snr">
            <ul>
              <li>
                <p>
                  <span class="pk">贫困户</span>
                  <span class="hx">何兴</span>
                </p>
                <van-checkbox class="sf" v-model="checked" disabled>身份证验证通过</van-checkbox>
                <van-checkbox class="sf" v-model="checked" disabled>国家建档立卡数据库验证通过</van-checkbox>
              </li>
              <li>
                <p>
                  <span class="pk">村级审核人</span>
                  <span class="hc">黄词彬</span>
                </p>
                <van-checkbox class="sf" v-model="checked" disabled>
                  湖北省，恩施土家族苗族自治州，建始县，
                  长梁乡，前三溪村村级管理员
                </van-checkbox>
              </li>
              <li>
                <p>
                  <span class="pk">平台声明</span>
                  <span class="hc">
                    以上信息为个人求助信息，由当地扶贫
                    干部审核确定真实性，不属于慈善募捐
                    感谢您的关注和爱心付出
                  </span>
                </p>
              </li>
              <li class="jb">
                <p>质疑/举报</p>
              </li>
            </ul>
          </div>
          <div>
            <p class="zm">
              <span>已有12人为他证明</span>
              <span>我来证明</span>
            </p>
            <img>
          </div>
        </div>
        <div>
          <h2 class="bbb">捐款记录</h2>
          <div class="jk">
            <ul>
              <li v-for="(item,index) in xin" v-bind:key="index">
                <img :src="lis.img">
                <div class="bz">
                  <p>
                    <span>{{item.username}}</span>
                    <span class="bzq2">帮助了{{item.money}}元</span>
                    <span class="bzq3">{{item.date}}</span>
                  </p>
                  <p class="bzq">加油！</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div class="bot">
          <p class="tbs">
            <van-icon name="like" class="ccc" v-bind:style="{color:coo1}" @click="dian()"/>
            <van-icon name="other-pay" class="ccc"/>
            <van-icon name="exchange" class="ccc"/>
          </p>
          <p class="wyy" @click="jk(lis.id)">我要捐款</p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Xu",
  data() {
    return {
      currentRate: 0,
      checked: true,
      isLoading: false,
      coo: false,
      coo1: "",
      lis: [],
      xin: [],
      bai: 0,
      jkc: ""
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    jk(id) {
      this.$router.push("/jk/"+ id);
    },
    dian() {
      this.coo = !this.coo;
      if (this.coo == true) {
        this.coo1 = "red";
      } else {
        this.coo1 = "black";
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {
    var _this = this;
    console.log(this.$route.params.id);
    axios({
      url: "http://101.132.164.103:8080/together/dongtaibyid.do",
      params: { id: this.$route.params.id }
    }).then(function(data) {
      _this.lis = data.data.info.dongtai;
      _this.xin = data.data.info.selectjuanzemg;
      _this.bai = parseInt((_this.lis.moneyed / _this.lis.money) * 100);
      console.log(_this.xin, _this.lis);
      if (_this.bai >= 100) {
        _this.jkc = "捐款完成";
        console.log(_this.bai, _this.jkc);
      } else {
        _this.jkc = "捐款中";
        console.log(_this.bai, _this.jkc);
      }
    });
  },
  //自定义组件
  // directives: {
  //   zv: {
  //     bind: function(a, b) {
  //       a.innerHTML = (new Date() - a.innerHTML) / 3600000;
  //       if(a.innerHTML<1){
  //         a.innerHTML = a.innerHTML*60+'分钟前'
  //       }else if (a.innerHTML <= 24&&a.innerHTML>=1) {
  //         a.innerHTML = a.innerHTML + "小时前";
  //         console.log(a.innerHTML);
  //       } else {
  //         a.innerHTML = parseInt(a.innerHTML / 24) + "天前";
  //         console.log(a.innerHTML);
  //       }
  //     }
  //   }
  // }
};
</script>
<style type="text/css" scoped>
/* * {
  margin: 0;
  padding: 0;
} */
.ll {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow-y: auto;
}
footer {
  height: 45px;
  text-align: center;
}
header {

}
.qian ul {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
}
.qian ul li {
  width: 66px;
}
.qian ul span {
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.jd {
  display: flex;
  margin-top: 40px;
  justify-content: center;
}
.jkz {
  margin: 0;
  padding: 0;
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.sj {
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.xm {
  height: 20px;
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  float: left;
}
.tp1 {
  width: 42px;
  height: 42px;
  line-height: 20px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
  margin-top: 18px;
  border-radius: 50%;
}
.tou {
  display: flex;
}
.xx{
overflow: hidden;
padding-right: 11px;
margin-bottom:8px;
margin:20px 0 3px 3px;
}
.gr {
  width: 54px;
  height: 16px;
  line-height: 15px;
  border-radius: 4px;
  background-color: rgba(248, 248, 248, 1);
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  float: right;
  margin-left: 6px;
  margin-left: 170px;
}
.sh {
  line-height: 15px;
  border-radius: 4px;
  background-color: rgba(248, 248, 248, 1);
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  float: right;
}
.dz {
  height: 14px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-top: 8px;
}
h2 {
  height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.top {
  padding-left: 15px;
  padding-right: 11px;
  margin-bottom: 6px;
  background: #ffffff;
}
.er {
  margin: 0 15px;
}
.bar {
  display: flex;
  justify-content: space-between;
}
.xqxq {
  width: 64px;
  height: 22px;
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.yi {
  width: 39px;
  line-height: 17px;
  height: 17px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.nr {
  min-height: 200px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
  overflow: hidden;
}
.nrimg img {
  width: 109px;
  height: 95px;
  margin-top: 7px;
}
.san {
  margin: 0 15px;
}
.snr {
  background: #f8f8f8 100%;
}
.snr li {
  padding-top: 16px;
  height: 90px;
  border-bottom: 1px solid #eaeaea;
}
.snr li p {
  margin-top: 0;
}
.pk {
  width: 42px;
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 18px;
}
.hx {
  margin-left: 53px;
  width: 31px;
  height: 17px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.sf {
  margin: 7px 0 7px 114px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.hc {
  margin-left: 25px;
  width: 36px;
  height: 17px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.jb {
  height: 17px !important;
  padding-bottom: 10px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.zm {
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  display: flex;
  justify-content: space-between;
}

/* 捐款记录 */
.jk {
  margin-left: 15px;
}
.jk li {
  padding: 10px 0;
  display: flex;
  border-bottom: #eeeeee solid 1px;
}
.jk li img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: #eeeeee 1px solid;
}
.bz p {
  margin: 0;
  padding: 0;
}
.bzq,
.bzq2,
.bzq3 {
  color: rgba(187, 187, 187, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.bzq2 {
  margin-left: 16px;
}
.bzq3 {
  margin-left: 120px;
}
.bot {
  display: flex;
  justify-content: space-between;
  background: #eeeeee;
}

.tbs {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 24px;
}
.wyy {
  width: 112px;
  height: 41px;
  line-height: 40px;
  border-radius: 8px;
  color: rgba(187, 187, 187, 1);
  font-size: 16px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  background: #fff;
}
.bbb {
  margin-left: 15px;
}
.kd {
  height: 6px;
  background: #eeeeee;
  width: 100%;
}
</style>

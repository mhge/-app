<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-nav-bar
        title="需求详情页"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="top">
        <div class="tou">
          <img class="tp1" src>
          <div>
            <p class="xx">
              <span class="xm">何*兴</span>
              <span class="sh">已审核</span>
              <span class="gr">个人求助</span>
            </p>
            <p class="dz">湖北省恩施土家族苗族自治州建始县</p>
          </div>
        </div>
        <h2>"生命诚可贵，梦想价更高"</h2>
        <div class="qian">
          <ul>
            <li>
              <span>目标金额/元</span>
              <span>￥100000</span>
            </li>
            <li>
              <span>已筹金额</span>
              <span>4522</span>
            </li>
            <li>
              <span>捐款人次</span>
              <span>576</span>
            </li>
          </ul>
        </div>
        <div class="jd">
          <van-circle
            v-model="currentRate"
            :rate="17"
            :speed="100"
            :text="text"
            size="100px"
            :stroke-width="60"
            color="red"
          />
        </div>
        <p class="jkz">捐款中</p>
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
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音这是他手术后醒来说的第
          一句话。我叫何顺兴,今年65岁,家住湖北省恩施州建始县前三溪村二组,系2014
          年建档立卡贫困户,家有五口人,配偶:李正菊;儿子:何勇;儿媳:敖泽春;孙子:何远程
          2018年12月18日,一个噩耗降临到我这个贫困家庭,年仅17岁正在一中就读的孙子
          查出患有大脑镰旁脑膜瘤,大脑镰旁脑膜瘤,是一种初期症状不明显,有症状发现
          时就比较严重的疾病。而我看着平时懂事乖巧、学习成绩优异、正值青春年少
          的孙子,被病痛折磨的又瘦又苍白无力,我心痛不已。在12月18日入院至今,他经过
          了多次治疗,并接到医生让我们做好长期治疗的通知,这个消息,无论家庭,还是对
          他无疑都是另一个噩耗。虽然,我们家是贫困家庭,可我们一直努力发展种植,儿子
          、儿媳也在外务工,勤勤恳恳。我们希望尽最大的努力为他治疗,可我们却资金有
          限,能力有限,特此在平台上发布求助信息,希望大家可以伸出助之手,帮帮我们这个
          家庭,也救救他这个鲜活的生,让他可以治疗疾病、可以重返校园,完成他未做完的
          业、未看的书、过完他才刚刚开始的人生和梦想。
        </p>
        <div class="nrimg">
          <img src>
          <img src>
          <img src>
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
            <li>
              <img src>
              <div class="bz">
                <p>
                  <span>夏困</span>
                  <span class="bzq2">帮助了100元</span>
                  <span class="bzq3">1小时前</span>
                </p>
                <p class="bzq">加油！</p>
              </div>
            </li>
            <li>
              <img src>
              <div class="bz">
                <p>
                  <span>夏困</span>
                  <span class="bzq2">帮助了100元</span>
                  <span class="bzq3">1小时前</span>
                </p>
                <p class="bzq">加油！</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bot">
        <p class="tbs">
          <van-icon name="like" class="ccc" v-bind:style="{color:coo1}" @click="dian()"/>
          <van-icon name="other-pay" class="ccc"/>
          <van-icon name="exchange" class="ccc"/>
        </p>
        <p class="wyy" @click="jks()">我要捐款</p>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "Xu",
  data() {
    return {
      currentRate: 0,
      checked: true,
      isLoading: false,
      coo: false,
      coo1: "",
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
    jks() {
      this.$router.push("/jk");
    },
    dian() {
      this.coo = !this.coo;
      if (this.coo == true) {
        this.coo1 = 'red';
      } else {
        this.coo1 ='black';
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style scoped="">
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
  width: 36px;
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
.xx {
  width: 305px;
  overflow: hidden;

  margin-bottom: 8px;
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
  width: 200px;
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
body,
html {
  height: 100%;
  width: 100%;
  background: #eeeeee;
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
  margin-left: 149px;
}
.bot {
  display: flex;
  justify-content: space-between;
  background: #eeeeee;
}

.tbs{
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

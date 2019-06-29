<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"/>
    <div class="xz">
      <h2>选择捐赠金额</h2>
      <div class="yuan">
        <p
          v-for="(item,index) in items"
          :key="item.id"
          @click="xxk(index)"
          :class="jeindex===index?'active':''"
        >{{item}}</p>
      </div>
      <input
        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
        class="je"
        v-model="value"
        placeholder="选择输入金额"
        type="String"
        value="元"
      >
      <span class="yy">元</span>
    </div>
    <p class="zf">支付方式</p>
    <div class="fs">
      <van-icon name="idcard" class="zfb"/>
      <div class="nrr">
        <p>支付宝</p>
        <p>推荐支付宝用户使用</p>
      </div>
      <van-icon v-bind:style="{color:a}" name="passed" @click="dii()"/>
    </div>
    <p class="sk"></p>

    <div class="bot">
      <van-checkbox v-model="checked" class="nm">
        <span>匿名支持（您的姓名，头像将不公开）</span>
      </van-checkbox>
      <p class="jz">
        <van-icon name="info-o"/>捐赠代表您已同意《捐赠人协议须知》
      </p>
      <van-button type="primary" size="large" class="qr" :disabled="act" @click="qrzf()">确认支付</van-button>
    </div>
    <div class="tck" v-show="istck">捐款成功</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Jk",
  data() {
    return {
      title: "捐赠信息",
      value: "",
      checked: false,
      items: [1, 5, 10, 20, 50, 100, 200, 500],
      isActive: 0,
      coo: "red",
      act: true,
      jeindex: "",
      a: "",
      sf: false,
      istck:false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    dii() {
      this.sf = !this.sf;
      if (this.sf == false) {
        this.a = "";
      } else {
        this.a = "red";
      }
    },
    xxk(i) {
      this.jeindex = i;
      this.value = this.items[i];
    },
    qrzf() {
      if(this.value!=''){
        var _this = this;
      axios({
        url: "http://101.132.164.103:8080/together/insertpay.do",
        params: { id: _this.$route.params.id, money: _this.value }
      }).then(function(data) {
        console.log(data)
        if (data.data.code == 1) {
          _this.value = "";
          _this.istck=true;
          setTimeout(function(){
            _this.istck=false;
            _this.$router.go(-1);
        },800)
        }
      });
      }

    }
  },
  updated() {
    if (this.value !== "") {
      this.act = false;
    }
  }
};
</script>
<style scoped="">

.tck {
  height: 100px;
  width: 100px;
  position: fixed;
  margin: auto;
  top: 50%;
  left: 50%;
  font-size:24px;
  margin-top:-50px;
  margin-left:-50px;
  line-height:100px;
  color:green;
  opacity:0.7;
  background: #bbbbbb;

}

.yy {
  float: right;
  font-size: 16px;
  margin-top: -30px;
}
.active {
  border: red 1px solid !important;
}
.xz {
  margin: 0 15px;
}
.xz h2 {
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.yuan {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yuan p {
  width: 75px;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
}
.je {
  width: 100%;
  height: 30px;
  line-height: 20px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  padding-left: 5px;
}
.zf {
  height: 30px;
  line-height: 30px;
  background-color: rgba(248, 248, 248, 1);
  border: 1px solid rgba(255, 255, 255, 0);
  padding-left: 10px;
}
.sk {
  background: #f8f8f8 100%;
  height: 10px;
}
.qr {
  width: 340px;
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
}
.jz {
  margin: 90px 0 15px 25px;
  height: 12px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.nm {
  width: 300px;
  /* height: 12px; */
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 20px;
}
.fs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
}
.bot {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.zfb {
  font-size: 44px;
  color: #bbbbbb 100%;
}
.nrr p {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: rgba(187, 187, 187, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
</style>

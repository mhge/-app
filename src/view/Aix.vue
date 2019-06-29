<template>
  <div class="sc">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入标题"/>
      <van-field
        v-model="jer"
        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
        placeholder="请输入金额"
      />
    </van-cell-group>
    <van-radio-group v-model="radio">
      <van-radio name="1">宣传动态</van-radio>
      <van-radio name="2">求助动态</van-radio>
      <van-radio name="3">感恩动态</van-radio>
    </van-radio-group>
    <textarea name="reworkmes" v-model="nr" cols="20" rows="4" class="tx"></textarea>
    <van-button type="danger" @click="cz()">重置</van-button>
    <van-button type="primary" @click="fbc()">发布</van-button>
    <van-picker :columns="columns" @change="onChange"/>
    <van-popup v-model="show" class="fff">发布成功</van-popup>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Aix",
  data() {
    return {
      title: "爱心筹",
      radio: "1",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      value: "",
      jer: "",
      dz: "杭州",
      nr: "",
      show:false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(picker, value, index) {
      this.dz = value;
      console.log(`当前值：${value}, 当前索引：${index}`, this.dz);
      console.log(this.dz);
    },
    fbc() {
      if (this.value != "" && this.jer != "" && this.nr != "") {
        console.log(this.value, this.jer, this.nr);
        var _this = this;
        axios({
          url: "http://101.132.164.103:8080/together/needhelp.do",
          params: {
            adress: _this.dz,
            title: _this.value,
            money: _this.jer,
            needdetil: _this.nr,
            flag: _this.radio
          }
        }).then(function(data) {
          if (data.data.code == 1) {
            _this.show = true;
            setTimeout(function(){
              _this.show=false
            },1000)
            _this.value = "";
            _this.jer = "";
            _this.nr = "";
          }
        });
      }
    },
    cz() {
      this.value = "";
      this.jer = "";
      this.nr = "";
    }
  },
  computed: {}
};
</script>
<style scoped>
.sc {
  padding: 0 20px;
}
.tx {
  width: 100%;
  min-height: 30px;
}
.fff{
  height: 60px;
  width: 110px;
  text-align: center;
  line-height: 60px;
}
</style>




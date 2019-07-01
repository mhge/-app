<template>
  <div>
    <van-row  v-for="(item,index) in list" :key="index">
      <van-col span="22" offset="1" class="goods">
        <van-row class="good">
          <van-col span="24">
            <img :src="item.img" alt>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-slider v-model="value" active-color="#A9A9A9" bar-height="6px" disabled :min="30" :max="90">
              <div slot="button" class="custom-button">
                <van-icon name="gold-coin"/>
              </div>
            </van-slider>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1">
            <van-row class="good1" type="flex">
              <van-col span="5">
                <span>慈善募捐</span>
              </van-col>|
              <van-col span="10" offset="1">
                <span>{{item.title}}</span>
              </van-col>|
              <van-col span="7" offset="1">
                <span>共济公益</span>
              </van-col>
            </van-row>
            <van-row class="good2" type="flex">
              <van-col span="24">
                <span> {{item.evolve}}</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      value: 0,
      list:[],
    };
  },
  mounted() {
    var that=this
        axios({
      url: "http://101.132.164.103:8080/together/projectflag.do",
      params: { uid: 11940 }
    }).then(function(data) {
      console.log(data.data.info);
      that.list = data.data.info;
    });
  }
};
</script>
<style scoped>
.good img {
  width: 100%;
  height: 130px;
}
.goods {
  overflow: hidden;
  border-radius: 0px 0px 6px 6px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px 0px rgba(170, 170, 170, 1);
  border: 1px solid rgba(255, 255, 255, 0);
  height: 225px;
  color: rgb(80, 78, 78);
  margin-top: 20px;
}
.good1 {
  font-size: 10px;
  line-height: 32px;
}
.good2 {
  height: 48px;
  overflow: hidden;
}
.good2 span{
    font-size: 12px;
  line-height: 24px;
  color: rgb(144, 142, 142);
}
</style>

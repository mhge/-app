<template>
  <div class="bob">
    <div class="lb" v-for="(item,index) in lis" v-bind:key="index">
      <div class="top">
        <div class="tou">
          <img class="tp1" :src="item.img">
          <div>
            <p class="xx">
              <span class="xm">{{item.name}}</span>
              <span class="sh">关注</span>
            </p>
            <p class="dz">
              <van-icon name="location-o"/>
              {{item.address}}
            </p>
          </div>
        </div>

        <h2>"生命诚可贵，梦想价更高"</h2>
        <p class="xxqk">
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
          一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
        </p>
        <div class="tpnr">
          <img :src="item.img">
          <img :src="item.img">
          <img :src="item.img">
        </div>
        <p class="je">
          <span>#社区便民#</span>
          <span v-on:click.once="cc()">
            <van-icon name="thumb-circle-o" class="bb" :color="ct" size="16px"/>
            {{dian}}
          </span>
          <span>
            <van-icon name="exchange" size="14px"/>52
          </span>
          <span>
            <van-icon name="flag-o" size="16px"/>641
          </span>
          <span>
            <van-icon name="underway-o" size="14px"/>01-21
          </span>
        </p>
      </div>
    </div>
    <button @click="next()">dian</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dtgn",
  data() {
    return {
      lis: [],
      dian: 552,
      ct: "",
      pagenum: 1
    };
  },
  methods: {
    tz() {
      this.$router.push("/xu");
      console.log(11);
    },
    ttt() {
      console.log(this.lis.list);
    },
    cc() {
      this.dian = this.dian + 1;
      // this.ct='red'
    },
    next() {
      this.pagenum = this.pagenum + 1;
    }
  },
  mounted() {
    var _this = this;
    axios({
      url: "http://www.baidu.com/api"
    }).then(function(data) {
      _this.lis = data.data.list;
      console.log(_this.lis, data.data.list);
    });
  }
};
</script>
<style scoped>
/* .bb{
font-size: 18px;
} */
@import "dt.css";
</style>

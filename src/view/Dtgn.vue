<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="bob">
      <div class="lb" v-for="(item,index) in filteredIis" v-bind:key="index">
        <div class="top">
          <div class="tou" @click="tz(item.id)">
            <img class="tp1" :src="item.img">
            <div>
              <p class="xx">
                <span class="xm">{{item.username}}</span>
                <span class="sh">关注</span>
              </p>
              <p class="dz">
                <van-icon name="location-o"/>
                {{item.adress}}
              </p>
            </div>
          </div>

          <h2>{{item.title}}</h2>
          <p class="xxqk">
{{item.needdetil}}
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
              {{item.phone}}
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
    </div>
  </van-pull-refresh>
</template>

<script>
import axios from "axios";

export default {
  name: "Dtgn",
  props: ["sx"],
  data() {
    return {
      lis: [],
      dian: 552,
      ct: "",
      gi: 0,
      isLoading: false,
      active: 4,
    };
  },
  methods: {
    tz(id) {
      this.$router.push("/xu/" + id);
      console.log(11);
    },
    ttt() {
      console.log(this.lis.list);
    },
    cc() {
      this.dian = this.dian + 1;
      // this.ct='red'
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.gi = this.gi + 2;
        if (this.gi >= this.lis.length) {
          this.gi = 0;
        }
      }, 500);
    }
  },
  mounted() {
    var _this = this;
    axios({
      url: "http://101.132.164.103:8080/together/dongtaibyflag.do",
      params: { flag: 3 }
    }).then(function(data) {
      _this.lis = data.data.info
      console.log(_this.lis, data.data);
    });
  },
  computed: {
    filteredIis: function() {
      return this.lis.slice(this.gi, this.gi + 2);
    }
  }
};
</script>
<style scoped>
/* .bb{
font-size: 18px;
} */

@import "dt.css";
</style>

<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="bob">
    <div class="lb" v-for="(item,index) in filteredIis" v-bind:key="index">
      <div class="top">
        <div class="tou" @click="tz(item.flag)">
          <img class="tp1" :src="item.img">
          <div>
            <p class="xx">
              <span class="xm2">{{item.username}}</span>
              <span class="sh">已审核</span>
              <span class="gr">个人求助</span>
            </p>
            <p class="dz">
              <van-icon name="location-o"/>
              {{item.adress}}
            </p>
          </div>
        </div>
        <h2>{{item.title}}</h2>
        <p class="xxqk">{{item.needdetil}}</p>
        <div class="tpnr">
          <img :src="item.img">
          <img :src="item.img">
          <img :src="item.img">
        </div>
        <van-progress inactive :percentage="5"/>
        <p class="je">
          <span>目标金额{{item.money}}元</span>
          <span>以帮扶 5622元</span>
          <span>支持次数 {{item.people}}次</span>
        </p>
        <p class="je">
          <span>#关爱儿童#</span>
          <span>01-21</span>
        </p>
      </div>
    </div>
  </div>
</van-pull-refresh>
</template>
<script>
import axios from "axios";
export default {
  name: "Dtqz",
  data() {
    return {
      lis: [],
      active: 3,
      gi: 0,
      isLoading: false,
    };
  },
  methods: {
    tz(id) {
      this.$router.push("/xu/" + id);
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
      params: { flag: 2 }
    }).then(function(data) {
      _this.lis = data.data.info;
      console.log(_this.lis);
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
@import "dt.css";
</style>

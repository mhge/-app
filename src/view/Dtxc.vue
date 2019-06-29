<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="bob">
    <div class="lb" v-for="(item,index) in filteredIis" v-bind:key="index">
      <div class="top" @click="tz(item.flag)">
        <div class="tou">
          <img class="tp1" :src="item.img">
          <div>
            <p class="xx">
              <span class="xm">{{item.username}}</span>
              <span class="sh" @click.stop="gz()"  v-bind:style="{background:bj}">{{srr}}</span>
            </p>
            <p class="dz"><van-icon name="location-o"/>{{item.adress}}</p>
          </div>
        </div>

        <h2>{{item.title}}</h2>
        <p class="xxqk">
          {{item.needdetil}}
        </p>
        <div class="tpnr">
          <img :src="item.img"/>
          <img :src="item.img"/>
          <img :src="item.img"/>
        </div>
        <p class="je">
          <span>#社区便民#</span>
         <span v-on:click.once="cc()">
            <van-icon name="thumb-circle-o" class="bb" :color="ct" size="16px"/>{{dian}}
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
  name: "Dtxc",
  data() {
    return {
      srr:'关注',
      sf:true,
      bj:'',
      dian:552,
      ct:'',
      lis:[],
      active: 2,
      gi: 0,
      isLoading: false,
    }
  },
  methods: {
    tz(id) {
      this.$router.push("/xu/" + id);
    },
    gz(){
      this.sf=!this.sf
      if(this.sf==true){
        this.srr='关注'
        this.bj=''
      }else{
        // this.srr='已关注'
        // this.bj='green'
      }

    },
    cc() {
      this.dian=this.dian+1

      // this.ct='red'
    },
    onRefresh() {
      console.log(this.imggg[0])
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
  mounted(){
    var _this=this
    axios({
      url: "http://101.132.164.103:8080/together/dongtaibyflag.do",
        params:{flag:1}
    }).then(function(data){
      _this.lis = data.data.info
      console.log(data.data.info)
    })
  },
  computed: {
    filteredIis: function() {
      return this.lis.slice(this.gi, this.gi + 2);
    }
  },

};
</script>
<style scoped>
@import "dt.css";
</style>

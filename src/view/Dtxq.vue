<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="bob">

      <div class="lb" v-for="(item,index) in filteredIis" v-bind:key="index">
        <div class="top">
          <div class="tou" @click="tz(item.flag)">
            <img class="tp1" :src="item.img">
            <div>
              <p class="xx">
                <span class="xm">{{item.username}}</span>
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
            <span>支持次数{{item.people}}次</span>
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
  name: "Dtxq",
  data() {
    return {
      lis: [],
      isLoading: false,
      gi: 0,
      tc:'',
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
      url: "http://101.132.164.103:8080/together/dongtaibyflag.do"
    }).then(function(data) {
      _this.lis = data.data.info;
      console.log(data.data.info, _this.lis[0].id);
    });
  },
  computed: {
    filteredIis: function() {
      return this.lis.slice(this.gi, this.gi+ 2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tb {
  font-size: 24px;
  color: rgba(187, 187, 187, 1);
  font-weight: 900;
}
.bob {
  background: #eeeeee;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
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
.top {
  padding-left: 15px;
  padding-right: 11px;
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
margin-bottom: 8px;
}
.sh {
  width: 44px;
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
}
.bt {
  font-size: 16px;
  color: rgba(16, 16, 16, 1);
  font-family: PingFangSC-regular;
  font-weight: 800;
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
    margin-left: 140px;
}
.lb {
  width: 100%;
  background: #ffffff;
  margin-bottom: 8px;
  padding-bottom: 8px;
}
.je {
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
  display: flex;
  justify-content: space-between;
}
.xxqk {
  height: 33px;
  color: rgba(187, 187, 187, 1);
  font-size: 10px;
  text-align: left;
  font-family: PingFangSC-regular;
  overflow: hidden;
}
.tpnr img {
  width: 109px;
  height: 95px;
  margin-bottom: 16px;
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
</style>

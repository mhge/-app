<template>
  <div class="head">
    <van-row>
      <van-col span="22" class="flex" offset="1" v-for="(item,i) in content" :key="i">
        <img :src="item.img">
        <div>
          <h4>{{item.title}}</h4>
          <p>{{item.detail}}</p>
        </div>
      </van-col>
    </van-row>
    <van-nav-bar title="查看全部"/>
    <p class="width"></p>
    <van-cell title="相关组织" is-link value="查看更多" @click="look"/>
    <van-row>
      <van-col span="22" class="flex" offset="1" v-for="(item,i) in content" :key="i">
        <img :src="item.img">
        <div>
          <h4>{{item.title}}</h4>
          <van-row class="tw">
            <van-col span="16">
              <van-cell :title="item.address" icon="wap-home"/>
            </van-col>
            <van-col span="8">
              <van-cell :title="item.num" icon="friends-o"/>
            </van-col>
          </van-row>
          <p>{{item.detail}}</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    look() {
      this.$router.push("/qbhd");
    }
  },
  mounted() {
    var _this = this;
    this.axios({
      url: "http://101.132.164.103:8080/together/activity.do",
      params: { flag: 3 }
    }).then(function(data) {
      console.log(data.data.info);
      _this.content = data.data.info;
    });
  }
};
</script>
<style scoped>
.head {
  margin-bottom: 20px;
}
.van-col > img {
  width: 130px;
  height: 100px;
  margin-right: 20px;
}
.flex {
  margin-top: 20px;
  display: flex;
  box-shadow: 2px 4px 4px gainsboro;
}
.width {
  background: #f2f2f9;
  height: 10px;
  margin: 0 auto;
}
.tw van-cell {
  font-size: 12px;
}
p {
  width: 166px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tw .van-cell {
  padding: 5px 0;
}
</style>

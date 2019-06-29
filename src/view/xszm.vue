<template>
  <div class="nav">
    <!-- <h4>最新招募</h4> -->
    <div v-for="item in content">
      <van-row>
        <van-col span="22" offset="1" class="panels">
          <van-row>
            <van-col span="22" offset="1">
              <van-row type="flex" justify="space-between" class="panel">
                <van-col span="18">
                  <h5>{{item.title}}</h5>
                  <van-row type="flex" justify="space-between" class="panel3">
                    <van-col span="11" class="time">
                      <van-row>
                        <van-col span="4">
                          <van-icon name="location-o"/>
                        </van-col>
                        <van-col span="19" class="ditu">{{item.address}}</van-col>
                      </van-row>
                    </van-col>|
                    <van-col span="11" class="time">
                      <van-row>
                        <van-col span="4">
                          <van-icon name="clock-o"/>
                        </van-col>
                        <van-col span="19" class="ditu">{{item.date}}</van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="6" class="panel2">
                  <van-button type="default" class="btn">招募中</van-button>
                </van-col>
              </van-row>
              <van-row class="panel4">
                <van-col span="24">
                  <span>{{item.detail}}</span>
                </van-col>
              </van-row>
              <van-row class="panel5">
                <van-col span="2">
                  <van-icon name="circle" size="24px" color="#ccc"/>
                </van-col>
                <van-col span="20">
                  <span>{{item.initiator}}</span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我的",
      content: ""
    };
  },
  mounted() {
    this.$emit("get", this.title);
  },
  mounted() {
    var _this = this;
    this.axios({
      url: "http://101.132.164.103:8080/together/zhaomu.do",
      params: { flag: 3 }
    }).then(function(data) {
      console.log(data.data.info);
      _this.content = data.data.info;
    });
  }
};
</script>
<style scoped>
.panels {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0);
  height: 180px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: -1px 1px 1px 0px rgb(116, 114, 114);
  border: 1px solid rgb(218, 215, 215);
}
.panel {
  height: 84px;
}
.panel .ditu {
  font-size: 12px;
}
.panel p {
  height: 36px;
  line-height: 36px;
  font-size: 13px;
}
.panel2 .btn {
  width: 68px;
  height: 21px;
  margin-top: 40px;
  font-size: 10px;
  line-height: 20px;
  background: rgb(247, 245, 245);
  color: #a9a9a9;
}
.panel3 {
  font-size: 10px;
  color: rgb(144, 142, 142);
}
.panel4,
.panel5 span {
  font-size: 10px;
  height: 36px;
  color: rgb(144, 142, 142);
}
.panel5 {
  margin-top: 10px;
}
.panel5 .div1 {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid black;
}
</style>

<template>
  <div class="nav">
    <!-- <h4>最新招募</h4> -->
    <van-row>
      <van-col span="22" offset="1" class="panels">
        <van-row>
          <van-col span="22" offset="1">
            <van-row type="flex" justify="space-between" class="panel">
              <van-col span="16">
                <h5>美新路大朋友项目志愿者</h5>
                <van-row type="flex" justify="space-between" class="panel3">
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="location-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">郑州市</van-col>
                    </van-row>
                  </van-col>|
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="clock-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">六天前发布</van-col>
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
                <span>
                  每月至少给小朋友寄一封信，每年至少去看望小朋友一次，承诺服务1
                  年以上。
                </span>
              </van-col>
            </van-row>
            <van-row class="panel5">
              <van-col span="2">
                <van-icon name="circle" size="24px" color="#ccc"/>
              </van-col>
              <van-col span="20">
                <span>郑州美新路大朋友基金会</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
        <van-row>
      <van-col span="22" offset="1" class="panels">
        <van-row>
          <van-col span="22" offset="1">
            <van-row type="flex" justify="space-between" class="panel">
              <van-col span="16">
                <h5>美新路大朋友项目志愿者</h5>
                <van-row type="flex" justify="space-between" class="panel3">
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="location-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">郑州市</van-col>
                    </van-row>
                  </van-col>|
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="clock-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">六天前发布</van-col>
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
                <span>
                  每月至少给小朋友寄一封信，每年至少去看望小朋友一次，承诺服务1
                  年以上。
                </span>
              </van-col>
            </van-row>
            <van-row class="panel5">
              <van-col span="2">
                <van-icon name="circle" size="24px" color="#ccc"/>
              </van-col>
              <van-col span="20">
                <span>郑州美新路大朋友基金会</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
        <van-row>
      <van-col span="22" offset="1" class="panels">
        <van-row>
          <van-col span="22" offset="1">
            <van-row type="flex" justify="space-between" class="panel">
              <van-col span="16">
                <h5>美新路大朋友项目志愿者</h5>
                <van-row type="flex" justify="space-between" class="panel3">
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="location-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">郑州市</van-col>
                    </van-row>
                  </van-col>|
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="clock-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">六天前发布</van-col>
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
                <span>
                  每月至少给小朋友寄一封信，每年至少去看望小朋友一次，承诺服务1
                  年以上。
                </span>
              </van-col>
            </van-row>
            <van-row class="panel5">
              <van-col span="2">
                <van-icon name="circle" size="24px" color="#ccc"/>
              </van-col>
              <van-col span="20">
                <span>郑州美新路大朋友基金会</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我的"
    };
  },
  mounted() {
    this.$emit("get", this.title);
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
  width: 84px;
  height: 21px;
  margin-top: 40px;
  font-size: 10px;
  line-height: 20px;
  background: rgb(247, 245, 245);
  color: #A9A9A9
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

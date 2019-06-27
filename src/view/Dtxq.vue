<template>
  <div class="bob">
    <div class="lb">
      <div class="top">
        <div class="tou" @click="tz()">
          <img class="tp1" src>
          <div>
            <p class="xx">
              <span class="xm">何*兴</span>
              <span class="sh">已审核</span>
              <span class="gr">个人求助</span>
            </p>
            <p class="dz"><van-icon name="location-o" />湖北省恩施土家族苗族自治州建始县</p>
          </div>
        </div>
        <h2>"生命诚可贵，梦想价更高"</h2>
        <p class="xxqk">
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
          一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
        </p>
        <div class="tpnr">
          <img src>
          <img src>
          <img src>
        </div>
        <van-progress inactive :percentage="5"/>
        <p class="je">
          <span>目标金额 10000元</span>
          <span>以帮扶 5622元</span>
          <span>支持次数 63次</span>
        </p>
        <p class="je">
          <span>#关爱儿童#</span>
          <span>01-21</span>
        </p>
      </div>
    </div>
    <div class="lb">
      <div class="top">
        <div class="tou" @click="tz()">
          <img class="tp1" src>
          <div>
            <p class="xx">
              <span class="xm">何*兴</span>
              <span class="sh">已审核</span>
              <span class="gr">个人求助</span>
            </p>
            <p class="dz"><van-icon name="location-o" />湖北省恩施土家族苗族自治州建始县</p>
          </div>
        </div>
        <h2>"生命诚可贵，梦想价更高"</h2>
        <p class="xxqk">
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
          一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
        </p>
        <div class="tpnr">
          <img src>
          <img src>
          <img src>
        </div>
        <van-progress inactive :percentage="5"/>
        <p class="je">
          <span>目标金额 10000元</span>
          <span>以帮扶 5622元</span>
          <span>支持次数 63次</span>
        </p>
        <p class="je">
          <span>#关爱儿童#</span>
          <span>01-21</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dtxq",
  methods: {
    tz() {
      this.$router.push("/xu");
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

  margin-top: 18px;
  border-radius: 50%;
}
.tou {
  display: flex;
}
.xx {
  width: 305px;
  overflow: hidden;
  padding-right: 11px;
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
  margin-left: 6px;
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
  width: 200px;
  height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
</style>

<template>
  <div class="SS">
    <van-nav-bar :title="title" class="ti">
      <van-icon name="fire" slot="right" size="0.725rem" color="gray"/>
    </van-nav-bar>

    <van-row type="flex" class="Info">
      <van-col class="in-top">
        <router-link to="/yao" class="tu">
          <img src="https://i03picsos.sogoucdn.com/fd6f8c1f1dc350cd" alt>
        </router-link>
        <van-row type="flex" justify="space-between" class="tt">
          <van-col class="use">
            <!-- <textarea></textarea> -->
            <h2>{{phone}}</h2>
            <van-col class="zyws">
              <b>志愿卫士</b>
            </van-col>
          </van-col>
          <van-icon name="arrow"/>
        </van-row>
      </van-col>
      <van-col class="in-bot">
        <div class="van-hairline--top"></div>
        <van-row type="flex" justify="space-around" class="gz">
          <van-col span="6">
            <span>2</span>
            <span>关注</span>
          </van-col>
          <van-col span="6">
            <span>2</span>
            <span>关注者</span>
          </van-col>
          <van-col span="6">
            <span>2</span>
            <span>我的勋章</span>
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row type="flex" class="info">
      <div class="mar">
        <router-link to="/dt" tag="span">
          <van-row type="flex" class="con">
            <van-col class="icon">
              <van-icon name="circle"/>
            </van-col>
            <van-row type="flex" justify="space-between" class="top">
              <van-col>我的动态</van-col>
              <van-col>
                <van-icon name="arrow"/>
              </van-col>
            </van-row>
          </van-row>
        </router-link>
        <router-link to="/rz" tag="span">
          <van-row type="flex">
            <van-col class="icon">
              <van-icon name="circle"/>
            </van-col>
            <van-row type="flex" justify="space-between" class="top">
              <van-col>我的组织</van-col>
              <van-col>
                <span>3</span>
                <van-icon name="arrow"/>
              </van-col>
            </van-row>
          </van-row>
        </router-link>
        <van-row type="flex">
          <van-col class="icon">
            <van-icon name="circle"/>
          </van-col>
          <van-row type="flex" justify="space-between" class="top">
            <van-col>我的消息</van-col>
            <van-col>
              <span>0</span>
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-row>
        <div class="CX"></div>
        <router-link to="/xu" tag="span">
          <van-row type="flex">
            <van-col class="icon">
              <van-icon name="circle"/>
            </van-col>
            <van-row type="flex" justify="space-between" class="top">
              <van-col>捐助项目</van-col>
              <van-col>
                <van-icon name="arrow"/>
              </van-col>
            </van-row>
          </van-row>
        </router-link>
        <router-link to="/" tag="span">
          <van-row type="flex">
            <van-col class="icon">
              <van-icon name="circle"/>
            </van-col>
            <van-row type="flex" justify="space-between" class="top">
              <van-col>志愿服务</van-col>
              <van-col>
                <van-icon name="arrow"/>
              </van-col>
            </van-row>
          </van-row>
          <div class="CX"></div>
        </router-link>
        <van-row type="flex">
          <van-col class="icon">
            <van-icon name="circle"/>
          </van-col>
          <van-row type="flex" justify="space-between" class="top">
            <van-col>设置</van-col>
            <van-col>
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-row>
        <van-row type="flex">
          <van-col class="icon">
            <van-icon name="circle"/>
          </van-col>
          <van-row type="flex" justify="space-between" class="top">
            <van-col>意见反馈</van-col>
            <van-col>
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-row>
        <van-row type="flex">
          <van-col class="icon">
            <van-icon name="circle"/>
          </van-col>
          <van-row type="flex" justify="space-between" class="top">
            <van-col>关于我们</van-col>
            <van-col>
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-row>
      </div>
    </van-row>
    <van-row type="flex">
      <van-col class="icon"></van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/dt">动态</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/fb">发布</van-tabbar-item>
      <van-tabbar-item icon="fire" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "wode",
  data() {
    return {
      title: "我",
      active: 3,
      phone: ""
    };
  },
  mounted() {
    let yao = localStorage.getItem("token");

    this.phone = yao;
    console.log(yao);
  }
};
</script>

<style scoped>
h2 {
  color: red;
  /* width: 150px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis; */
  margin-top: -4px;
}

.zyws {
  font-size: 14px;
  color: blue;
}

.SS {
  margin-right: 10px;
  margin-left: 5px;
}

.Info {
  flex-direction: column;
  margin-left: 15px;
}

.in-top {
  height: 108px;
}
.tu {
  margin: 19px 11px 18px 0;
  border-radius: 50%;
  height: 65px;
  width: 65px;
  border: 1px solid #aaa;
  float: left;
}
.tu img {
  border-radius: 50%;
  height: 65px;
  width: 65px;
}

.tt {
  height: 108px;
  align-items: center;
}

.in-bot {
  height: 60px;
}

.gz .van-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #888;
}

.info {
  flex: 1;
  flex-direction: column;
  font-size: 14px;
  border-top: 10px solid #f4f4f4;
}

.top {
  flex: 1;
  justify-content: space-between;
  height: 59px;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
}

.top .van-col:last-child {
  display: flex;
}

.icon {
  height: 59px;
}

.icon .van-icon {
  margin: 12px 6px 0 10px;
  font-size: 42px;
}

.van-icon {
  color: #ccc;
  font-size: 24px;
}

.mar {
  border-top: 10px solid rgb(248, 248, 248);
  border-bottom: 10px solid rgb(248, 248, 248);
}

.CX {
  height: 10px;
  background-color: rgba(230, 230, 230, 1);
}
</style>

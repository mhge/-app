<template>
  <div>
    <div class="kn">
      <p>{{title}}</p>
      <span class="tb"><van-icon name="manager" /></span>

    </div>
    <div class="tp" @click="jr">
      <img src alt>
      <p class="nr">
        <span>求助者</span>
        <span>进入</span>
      </p>
    </div>
    <div class="tp" @click="jr">
      <img src alt>
      <p class="nr">
        <span>志愿组织者</span>
        <span>进入</span>
      </p>
    </div>
    <van-tabbar v-model="active">
	  <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
	  <van-tabbar-item icon="search" to="/dt">动态</van-tabbar-item>
	  <van-tabbar-item icon="friends-o" to="/fb">发布</van-tabbar-item>
	  <van-tabbar-item icon="fire" to="/zcq">我的</van-tabbar-item>
	</van-tabbar>
  </div>
</template>
<script>
export default {
  name: "Fb",
  data() {
    return {
      title: "困难求助",
      active:2
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    jr(){
      this.$router.push('/aix')
    }
  }
};
</script>
<style scoped>
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0;}
img{display:block;}
a{text-decoration:none;color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
body{ font-family:"微软雅黑";}
input,a{outline:none;}

.kn{
display:flex;
width: 100%;
justify-content: flex-end;

}
.kn p{
  width: 100%;
  text-align: center;
  line-height:42px;
  font-size: 16px;
}
.tb{
  line-height:42px;
  font-size: 16px;
  float:right;
  margin-right: 30px;
}
img{
width:100%;
height: 140px;
border-radius: 4px 4px 0px 0px;
}
.tp{
width: 344px;
height: 140px;
margin: 30px auto 30px;
background: #eeeeee;
}
.nr{
  display: flex;
justify-content: space-between;
height: 30px;
line-height: 30px;
border-radius: 0px 0px 4px 4px;
box-shadow: 0px 1px 1px 0px rgba(170, 170, 170, 1);
border: 1px solid rgba(255, 255, 255, 0);
padding: 0 18px;
font-size: 14px;
}
</style>


<template>
  <div class="list">
    <div class="jian">
      <span @click="tap()">返回</span>
    </div>
    <section>
      <div class="tu">
        <!-- <img src="../../assets/img/1.jpg" alt=""> -->
        <span>宠物交易共享平台</span>
      </div>


  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
   @click-right-icon="$toast('question')"
   style="background:rgba(0,0,0,0.2)"
   class="yan"
   ref= 'intusername'
   @click="wap"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
    ref="22222"
    style="background:rgba(0,0,0,0.2)"
    class="yan"
  />

<div class="kuang">
<span @click="taaap()">新用户注册</span>
<span>忘记密码?</span>
  </div>
  <div class="yuan1">
  <div class="yuan" @click="waap">
    登录
  </div>
</div>

    </section>
<footer></footer>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data () {
    return {
        username:'',
        password:'',

    }
  },
  methods: {
    waap(){

        if (this.username === ''){
          alert('负责人手机号不可为空');
        } else {
          if (this.username !== '') {
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.username)){
              alert('请输入有效的手机号码');
            }else{
              var _this = this;
                  axios({
                  url:"http://jx.xuzhixiang.top/ap/api/login.php",
                  method:"post",
                  data:{userName:_this.username,password:_this.password}
                })
                .then(function(data){
                  // console.log(data)
                    if(data.data.code == "success"){
                      _this.$router.push('/')
                  }else{
                    alert('用户名或密码错误')
                  }
                })

            }
          }

        }
    },

    taaap(){
            this.$router.push('/register')
        },
 tap(){
          this.$router.go(-1)
    },
    wap(){
      // console.log(this.$refs)
      this.$refs.intusername.$el.querySelector('input').style= "color:white"
    }
  },



}
</script>

<style scoped>

footer{
  width: 100%;
  height:80px;
  background:#080808;
}
.yuan1{
  width: 100%;
  height:50px;

}
.yuan{
   width:50px;
  height:50px;
  line-height:50px;
  border-radius:50%;
  text-align: center;
  background:rgba(0,0,0,0.2);
  display: flex;
justify-content: center;
margin: 0 auto
}
.kuang{
   color: white;
   height: 50px;
   line-height: 50px;
   text-align: center;
  width:80%;
  margin: 0 auto;
  display: flex;
justify-content:space-between
}
.yan{
  color: white;
  width:80%;
  margin: 0 auto
}
section{
  height: 600px;
  background:url(http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180528/1719d6b7a33e4554b28b682d9a863414.gif) no-repeat;
background-size:cover;
}
.tu{
  height: 200px;
  display: flex;
flex-direction:column;
align-items: center
}
.tu span{
  margin-top: 30px;
  color:white;
}
.tu img{
  width: 100px;
  height: 100px;
}
.jian{
  width: 100%;
  height: 80px;
  display: flex;
align-items: center;

background: #000000
}
.jian span{
  width:50px;
  height:50px;
  line-height:50px;
  border-radius:50%;
  text-align: center;
  background:white;
display: block;
}

</style>
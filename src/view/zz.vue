<template>
  <div>
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
    <van-cell-group>
      <van-field input v-model="username"  label="手机号" placeholder="请输入手机号" size="large" />
      <van-field input v-model="password" type="password" label="密码" placeholder="请输入密码" size="large" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" size="large">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn">
      <van-button round type="primary" size="large" @click="onClickRegister">注册</van-button>
    </div>
    <van-row type="flex" justify="center">

      <van-col>注册后表示你同意微善的&lt;&lt;使用</van-col>
    </van-row>

  </div>
</template>

<script>
  import axios from "axios";
  import qs from 'Qs'
  export default {
    name: 'zz',
    data() {
      return {
        username: '',
        password: '',
        sms: ''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      
      onClickRegister() {
        var _this=this
        // console.log(this.password)
          axios({
            url: "http://jx.xuzhixiang.top/ap/api/reg.php",
            // method:'post',
            params: {
              username: this.username,
              password: this.password,
            }
          }).then(res => {
            if (res.data.code == 1) {
              alert('注册成功')
              this.$router.push('/Dlu')
            }
          })
        } 
      }
    }
  

</script>
<style scoped>
  .van-cell-group {
    margin-top: 20px
  }

  .btn {
    margin: 30px 40px;
    color: white;

  }

  .van-col {
    font-size: 16px;
    color: rgb(187, 187, 187);
    text-align: center
  }

</style>

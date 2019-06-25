<template>
	<div class="Out">
		<van-nav-bar title="登录" left-arrow @click-left="onClickLeft">
		</van-nav-bar>
		<div class="tx"></div>
		<div class="Info">
			<van-row type="flex" class="DID">
				<van-icon name="circle" class="circle" />
				<input type="" v-model="username" maxlength="11" placeholder="请输入手机号" />
			</van-row>
			<van-row type="flex" class="DID">
				<van-icon name="circle" class="circle" />
				<input type="password" v-model="password" maxlength="16" placeholder="请输入密码" />
			</van-row>

			<van-button round size="large" class="DL" @click="onClickLogin" >登录</van-button>

			<van-row type="flex" justify="space-between">
				<van-col>
					<router-link to="/zz" tag="a">立即注册</router-link>
				</van-col>
				<van-col class="mm">
					<router-link to="/wjmm" tag="a">忘记密码？</router-link>
				</van-col>
			</van-row>
			
				<van-button round size="large" class="QT" >其他快捷登录</van-button>		
	
			<van-row type="flex" justify="space-between">
				<van-col span="3">
					<van-icon name="invition" class="circle"/>
				</van-col>
				<van-col span="3">
					<van-icon name="invition" class="circle"/>
				</van-col>
				<van-col span="3">
					<van-icon name="invition" class="circle"/>
				</van-col>
			</van-row>

		</div>






	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'Dlu',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onClickLogin() {
				var _this = this
				// console.log(this.password)
				axios({
					url: "http://jx.xuzhixiang.top/ap/api/login.php",
					params: {
						username: this.username,
						password: this.password
					}
				}).then(res => {
					if (res.data.code == 1) {
						// alert('登录成功')
						this.$router.push('/wode')
						localStorage.setItem('token', res.data.data.uid)
						// localStorage.setItem('username', res.data.data.pname)
						console.log(res.data.data.username)
					} else {
						alert('请重新输入密码')
					}
				})
			}
		}
	}
</script>

<style scoped>
	.QT{
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-bottom: 0px;
		font-size: 0.3rem;
	}
	.DL {
		border: 1px solid #aaa;
		margin-bottom: 0.5rem;
	}

	.circle {
		font-size: 1rem;
	}

	.DID {
		display: flex;
		justify-content: space-around;
		border-bottom: 0.0625rem solid #ccc;
		padding-bottom: 0.2rem
	}

	input {
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-bottom: 0px;
		
		font-size: 0.5rem;
		color: red;
	}

	.tx {
		border-radius: 50%;
		height: 81px;
		width: 81px;
		border: 1px solid #888;
		margin: 13px auto 48px
	}

	.Info {
		margin: 0 50px;
	}

	.van-button {
		margin-top: 28px;
		font-size: 16px;
	}

	.mm {
		text-align: right
		
	}

	.van-row {
		margin-top: 14px;
	}

	a {
		text-decoration: none;
		color: rgb(90, 90, 90);
		font-size: 16px
	}
</style>

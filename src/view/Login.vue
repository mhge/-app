<template>
	<div class="Out">
		<section>
			<van-nav-bar title="登录" left-arrow @click-left="onClickLeft">
			</van-nav-bar>
			<div class="tx"><img src="https://i03picsos.sogoucdn.com/fd6f8c1f1dc350cd" alt=""></div>
			<div class="Info">
				<van-row type="flex" class="DID">
					<van-icon name="circle" class="circle" />
					<van-field class="input" type="String" v-model="phone" ref= 'intphone' @click="yao()" clearable maxlength="11" placeholder="请输入手机号"  right-icon="question"
					 @click-right-icon="$toast('仅支持 132 | 150 | 152 开头的手机号')" @keyup.13="onClickLogin()"/>
				</van-row>
				<!-- <span><strong>{{msgname}}</strong></span> -->
				<van-row type="flex" class="DID">
					<van-icon name="circle" class="circle" />
					<van-field class="input" type="password" clearable v-model="password" maxlength="16" placeholder="请输入密码" @click="yao()"  @keyup.13="onClickLogin()" ref= 'intpassword' />
					<!-- <input type="password"clearable onkeyup="value=value.replace(/^(0+)|[^\dA-Za-z_/.]+/g,'')" v-model="password" maxlength="16" placeholder="请输入密码" /> -->
				</van-row>
				<!-- <span><strong>{{yao}}</strong></span> -->
				<van-button round size="large" class="DL" @click="onClickLogin(phone)">登录</van-button>

				<van-row type="flex" justify="space-between">
					<van-col class="liji">
						<router-link to="/register" tag="a">立即注册</router-link>
					</van-col>
					<van-col class="mm">
						<router-link to="/forget" tag="a">忘记密码？</router-link>
					</van-col>
				</van-row>

				<van-button round size="large" class="QT">其他快捷登录</van-button>

				<van-row type="flex" justify="space-between">
					<van-col span="3">
						<van-icon name="description" class="circle" />
					</van-col>
					<van-col span="3">
						<van-icon name="edit" class="circle" />
					</van-col>
					<van-col span="3">
						<van-icon name="records" class="circle" />
					</van-col>
				</van-row>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from "axios";
	import {
		Dialog
	} from 'vant';


	export default {
		name: 'Login',
		data() {
			return {
				phone: '',
				password: '',
				// msgname: '',
				// yao: '',
				// isDisabled:true	
			}
		},
		components: {
			[Dialog.Component.name]: Dialog.Component
		},
		methods: {
			yao(){
				this.$refs.intphone.$el.querySelector('input').style= "color:white"
				this.$refs.intpassword.$el.querySelector('input').style= "color:white"
			},
			onClickLeft() {
				this.$router.go(-1)
			},
			onClickLogin() {
				if (this.phone === '') {
					// alert('负责人手机号不可为空');
					Dialog.alert({
						message: '手机号不可为空'
					}).then(() => {
						// on close
					})
				} else {
					if (this.phone !== '') {
						var reg = /^(132|150|152)\d{8}$/;
						if (!reg.test(this.phone)) {
							// alert('请输入有效的手机号码');
							Dialog.alert({
								message: '请输入有效的手机号码'
							}).then(() => {
								// on confirm
							}).catch(() => {
								// on cancel
							});
						} else {
							var _this = this;
							axios({
								url: "http://101.132.164.103:8080/together/login.do",
								params: {
									phone: _this.phone,
									password: _this.password
								}
							}).then(function(data) {
								if (data.data.code == "1") {
									console.log(data)
									Dialog.alert({
										message: '登陆成功'
									}).then(() => {
										// on confirm
									}).catch(() => {
										// on cancel
									});
									_this.$router.push("/my");
								} else {
									// alert('用户名或密码错误')
									Dialog.confirm({
										title: '请确认',
										message: '您的用户名或密码错误'
									}).then(() => {
										// on confirm
									}).catch(() => {
										// on cancel
									});
								}
							})
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	section {
		width: 100%;
		height: 700px;
		background: url(https://wx1.sinaimg.cn/large/0069SR0Aly1g4fqe2ykpsg30bu0l1b2e.gif) no-repeat;
		background-size: cover;
	}

	.QT {
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-bottom: 0px;
		font-size: 0.3rem;
		margin-bottom: 20px;
		background: rgba(0, 0, 0, 0);
	}

	.DL {
		border: 1px solid rgba(0, 0, 0, 0.4);
		color: white;
		margin-bottom: 0.5rem;
		background: rgba(0, 0, 0, 0.4);
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

	.input {
		font-size: 0.5rem;
		background: rgba(0, 0, 0, 0);
	}

	.tx {
		border-radius: 50%;
		height: 81px;
		width: 81px;
		border: 1px solid #888;
		margin: 13px auto 48px
	}

	.tx img {
		border-radius: 50%;
		height: 81px;
		width: 81px;
	}

	.Info {
		margin: 0 50px 0 40px;
	}

	.van-button {
		margin-top: 28px;
		font-size: 16px;
	}

	.mm a{
		text-align: right;
		color: blue;
	}
	.liji a{
		color: white;
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

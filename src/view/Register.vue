<template>
	<div>
		<van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft">
		</van-nav-bar>
		<van-cell-group>
			<van-field input clearable v-model="phone" maxlength="11" label="手机号" right-icon="question-o" @click-right-icon="$toast('仅支持 132 | 150 | 152 开头的手机号')"
			 placeholder="请输入手机号" size="large" />
			<van-field input v-model="password" maxlength="16" type="password" clearable right-icon="question-o"
			 @click-right-icon="$toast('字母或数字或下划线 密码格式 4 - 16 位')" label="密码" placeholder="请输入密码" size="large" />
			<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
				<van-button class="ziti" slot="button" @click="yzm()" size="small" type="primary">{{yanzh}}</van-button>
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
	import {
		Dialog
	} from 'vant';
	export default {
		name: 'Register',
		data() {
			return {
				phone: "",
				password: "",
				sms: "",
				yanzh: "获取验证码"
			}
		},
		components: {
			[Dialog.Component.name]: Dialog.Component
		},
		methods: {
			yzm() {

			},
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRegister() {
				if (this.phone === "") {
					// alert("手机号不可为空");
					Dialog.alert({
						message: '手机号不可为空'
					}).then(() => {
						// on close
					});
				} else {
					if (this.phone !== "") {
						var reg = /^(132|150|152)\d{8}$/;
						if (!reg.test(this.phone)) {
							// alert("请输入有效的手机号码");
							Dialog.confirm({
								title: '亲',
								message: '请输入有效的手机号码'
							}).then(() => {
								// on close
							}).catch(() => {
								// on cancel
							});
						} else {
							if (this.password === "") {
								// alert("密码不可为空");
								Dialog.alert({
									message: '密码不可为空'
								}).then(() => {
									// on close
								});
							} else {
								if (this.password !== "") {
									var reg = /^\w{4,16}$/;
									if (!reg.test(this.password)) {
										// alert("密码格式不正确");
										Dialog.confirm({
											title: '亲',
											message: '密码格式不正确'
										}).then(() => {
											// on close
										}).catch(() => {
											// on cancel
										});
									} else {
										var _this = this;
										axios({
											url: "http://101.132.164.103:8080/together/addUser.do",
											params: {
												phone: _this.phone,
												password: _this.password
											}
										}).then(function(data) {
											console.log(data.data)
											if (data.data.code == "1") {
												// alert("注册成功");
												Dialog.alert({
													title: '注册成功',
													message: '点击确认跳转到登录页面'
												}).then(() => {
													_this.$router.push("/login");// on close
												});
											} else {
												// console.log(data)
												// alert("该用户已注册");
												Dialog.alert({
													title: '手机号不可用或已注册',
												}).then(() => {
													// on close
												});
											}
										})
									}
								}
							}
						}
					}
				}
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

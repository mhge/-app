<template>
	<div>
		<van-nav-bar title="找回密码" left-text="返回" left-arrow @click-left="onClickLeft">
		</van-nav-bar>
		<van-cell-group>
			<van-field v-model="phone" maxlength="11" label="手机号" right-icon="question-o" @click-right-icon="$toast('仅支持 132 | 150 | 152 开头的手机号')"
			 placeholder="请输入手机号" size="large" clearable />
			<van-field v-model="password" maxlength="16" type="password" label="新密码" placeholder="请重新输入新密码" size="large"
			 clearable right-icon="question-o" @click-right-icon="$toast('字母或数字或下划线 密码格式 4 - 16 位')" />
			<van-field v-model="sms" maxlength="6" center clearable label="短信验证码" placeholder="请重新输入验证码" size="large" clearable right-icon="question-o" @click-right-icon="$toast('请检查键盘是否开启 大 小 写')">
				<van-button class="ziti" slot="button" @click="yzm()" size="small" type="primary">{{yanzh}}</van-button>
			</van-field>
		</van-cell-group>
		<div class="btn">
			<van-button round type="info" size="large" @click="yao()">找回密码并登录</van-button>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import qs from 'Qs'
	import {
		Dialog
	} from 'vant';
	export default {
		name: 'Forget',
		data() {
			return {
				phone: "",
				password: "",
				sms: '',
				yanzh: '获取低配版验证码'
			}
		},
		components: {
			[Dialog.Component.name]: Dialog.Component
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			yzm() {
				var code = "";
				//设置长度，这里看需求，我这里设置了4
				var random = new Array(
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y",
					"Z"
				);
				//循环codeLength 我设置的4就是循环4次
				for (var i = 0; i < 4; i++) {
					//设置随机数范围,这设置为0 ~ 36
					var index = Math.floor(Math.random() * 36);
					//字符串拼接 将每次随机的字符 进行拼接
					code += random[index];
				}
				//将拼接好的字符串赋值给展示的Value
				this.yanzh = code;
			},
			yao() {
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
										if (this.sms == this.yanzh) {
											var _this = this;
											axios({
												url: "http://101.132.164.103:8080/together/update.do",
												params: {
													phone: _this.phone,
													password: _this.password
												}
											}).then(function(data) {
												console.log(data.data)
												if (data.data.code == "1") {
													// alert("密码修改成功");
													Dialog.alert({
														title: '密码修改成功',
														message: '点击确认跳转到登录页面'
													}).then(() => {
														_this.$router.push("/login");// on close
													});
													console.log(data)
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
										} else {
											// alert("验证码错误")
											Dialog.alert({
												title: '请确认',
												message: '验证码错误'
											}).then(() => {
												// on close
											}).catch(() => {
												// on cancel
											});
										}
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


<style scope="">
	.van-cell-group {
		margin-top: 20px
	}

	.btn {
		margin: 30px 40px;
		color: white;

	}
</style>

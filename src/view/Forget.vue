<template>
	<div>
		<van-nav-bar title="找回密码" left-text="返回" left-arrow @click-left="onClickLeft">
		</van-nav-bar>
		<van-cell-group>
			<van-field v-model="phone" onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')" maxlength="11" label="手机号" placeholder="请输入手机号" size="large" />
			<van-field v-model="password" onkeyup="value=value.replace(/^(0+)|[^\dA-Za-z_/.]+/g,'')"  maxlength="16" type="password" label="密码" placeholder="请重新输入密码" size="large" />
			<van-field v-model="sms" onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')" maxlength="6" center clearable label="短信验证码" placeholder="请输入短信验证码" size="large">
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
		</van-cell-group>
		<div class="btn">
			<van-button round type="info" size="large" to="/Dlu">找回密码并登录</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Forget',
		data() {
			return {
				phone: '',
				password: '',
				sms: '',
				val: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			yao() {}
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

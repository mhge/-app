<template>
	<div class="yao">
		<van-row type="flex" justify="center">
			<router-link class="yuan" to='/login'>
				<div class="D">登录</div>
				<div>微善</div>
			</router-link>
		</van-row>
		<van-row type="flex" justify="center">
			<van-col>
				<p>人为善，福虽未至，祸已远离;</p>
				<p>人为恶，祸虽未至，福已远离.</p>
			</van-col>
		</van-row>
		<van-row type="flex" justify="center">
			<van-col class="X">现在就去登录微善吧</van-col>
		</van-row>
	</div>
</template>
<script>

</script>
<style scoped>
	.yao{
		overflow: auto;
	}
	.yuan {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		border: 1px solid #000000;
		margin-top: 3.25rem;
		margin-bottom: 2.25rem;
		background:url(https://i03picsos.sogoucdn.com/fd6f8c1f1dc350cd) no-repeat;
		background-size:cover;
	}
	.yuan div{
		margin-left: 0.7rem;
		font-size: 0.4rem;
		color: indigo;
	}
	.D{
		margin-top: 0.65rem;
	}

	.P {
		margin-bottom: 3rem;

	}

	p {
		color: #000;
		font-size: 0.4rem;
	}
	.X{
		margin-top: 3em;
		font-size: 0.4rem;
	}
</style>

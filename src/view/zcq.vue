<template>
	<div>
		<van-nav-bar :title="title" class="ti">
			<van-icon name="fire" slot="right" size="0.725rem" color="gray" />
		</van-nav-bar>
		<div>
			<van-row type="flex" class="wo">
				<van-col>
					<router-link to="/yao" class="p"><img src="https://i03picsos.sogoucdn.com/fd6f8c1f1dc350cd" alt=""></router-link>
				</van-col>
				<van-col class="log">
					<router-link to="/yao">登录</router-link>
				</van-col>
			</van-row>
			<div class="van-hairline--bottom"></div>
		</div>
		<van-row type="flex" class="info">
			<div class="mar">
				<van-row type="flex" class="con">
					<van-col class="icon">
						<van-icon name="circle" />
					</van-col>
					<van-row type="flex" justify="space-between" class="top">
						<van-col>我的动态</van-col>
						<van-col>
							<van-icon name="arrow" />
						</van-col>
					</van-row>
				</van-row>
				<van-row type="flex">
					<van-col class="icon">
						<van-icon name="circle" />
					</van-col>
					<van-row type="flex" justify="space-between" class="top">
						<van-col>我的组织</van-col>
						<van-col>
							<van-icon name="arrow" />
						</van-col>
					</van-row>
				</van-row>
				<van-row type="flex">
					<van-col class="icon">
						<van-icon name="circle" />
					</van-col>
					<van-row type="flex" justify="space-between" class="top">
						<van-col>我的消息</van-col>
						<van-col>
							<van-icon name="arrow" />
						</van-col>
					</van-row>
				</van-row>
			</div>
			<van-row type="flex">
				<van-col class="icon">
					<van-icon name="circle" />
				</van-col>
				<van-row type="flex" justify="space-between" class="top">
					<van-col>捐助项目</van-col>
					<van-col>
						<van-icon name="arrow" />
					</van-col>
				</van-row>
			</van-row>

			<van-row type="flex">
				<van-col class="icon">
					<van-icon name="circle" />
				</van-col>
				<van-row type="flex" justify="space-between" class="top">
					<van-col>志愿服务</van-col>
					<van-col>
						<van-icon name="arrow" />
					</van-col>
				</van-row>
			</van-row>
			<div class="mar">
			<div>
				<router-link to="/tcc" tag="span">
					<van-row type="flex">
						<van-col class="icon">
							<van-icon name="circle" />
						</van-col>
						<van-row type="flex" justify="space-between" class="top">
							<van-col>设置</van-col>
							<van-col>
								<van-icon name="arrow" />
							</van-col>
						</van-row>
					</van-row>
				</router-link>
				<van-row type="flex">
					<van-col class="icon">
						<van-icon name="circle" />
					</van-col>
					<van-row type="flex" justify="space-between" class="top">
						<van-col>意见反馈</van-col>
						<van-col>
							<van-icon name="arrow" />
						</van-col>
					</van-row>
				</van-row>
				<van-row type="flex">
					<van-col class="icon">
						<van-icon name="circle" />
					</van-col>
					<van-row type="flex" justify="space-between" class="top">
						<van-col>关于我们</van-col>
						<van-col>
							<van-icon name="arrow" />
						</van-col>
					</van-row>
				</van-row>
				<van-row type="flex">
					<van-col class="icon"></van-col>
				</van-row>
				</div>
			</div>
		</van-row>
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
		name: "Zcq",
		data() {
			return {
				title: "我",
				active: 3
			};
		}
	};
</script>

<style scoped>
	.wo {
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
	}

	.p {
		border-radius: 50%;
		display: inline-block;
		margin-top: 20px;
		border: 1px solid #555;
		width: 70px;
		height: 70px;
		text-align: center;
		line-height: 70px;
		color: #000000;
	}

	.p img {
		border-radius: 50%;
		height: 70px;
		width: 70px;
	}

	.log {
		margin-top: 13px;
		border: 1px solid #aaa;
		text-align: center;
		width: 200px;
		height: 30px;
		line-height: 30px;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0);
		font-size: 16px;
	}

	.log a {
		color: rgb(54, 48, 48);
	}

	.info {
		flex: 1;
		flex-direction: column;
		font-size: 14px;
	}

	.top {
		flex: 1;
		justify-content: space-between;
		height: 59px;
		align-items: center;
		border-bottom: 1px solid #f4f4f4;
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
		border-top: 10px solid rgb(230, 230, 230);
		border-bottom: 10px solid rgb(230, 230, 230);
	}
</style>

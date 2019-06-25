<template>
	<div class="bob">
		<div class="lb">
			<div class="top">
				<div class="tou">
					<img class="tp1" src>
					<div>
						<p class="xx">
							<span class="xm"></span>
							<span class="sh">关注</span>
						</p>
						<p class="dz"></p>
					</div>
				</div>

				<h2>"生命诚可贵，梦想价更高"</h2>
				<p class="xxqk">
					"我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
					一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
				</p>
				<div class="tpnr">
					<!-- <img :src="item.img">
					<img :src="item.img">
					<img :src="item.img"> -->
				</div>
				<p class="je">
					<span>#社区便民#</span>
					<span>
						<van-icon name="thumb-circle-o" class="bb" size="16px" />522
					</span>
					<span>
						<van-icon name="exchange" size="14px" />52
					</span>
					<span>
						<van-icon name="flag-o" size="16px" />641
					</span>
					<span>
						<van-icon name="underway-o" size="14px" />01-21
					</span>
				</p>
			</div>
		</div>
		<div class="lb">
			<div class="top">
				<div class="tou">
					<img class="tp1" src>
					<div>
						<p class="xx">
							<span class="xm">何*兴</span>
							<span class="sh">关注</span>
						</p>
						<p class="dz">湖北省恩施土家族苗族自治州建始县</p>
					</div>
				</div>

				<h2>"生命诚可贵，梦想价更高"</h2>
				<p class="xxqk">
					"我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
					一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
				</p>
				<div class="tpnr">
					<img src>
					<img src>
					<img src>
				</div>
				<p class="je">
					<span>#社区便民#</span>
					<span>
						<van-icon name="thumb-circle-o" class="bb" size="16px" />522
					</span>
					<span>
						<van-icon name="exchange" size="14px" />52
					</span>
					<span>
						<van-icon name="flag-o" size="16px" />641
					</span>
					<span>
						<van-icon name="underway-o" size="14px" />01-21
					</span>
				</p>
			</div>
		</div>

	</div>
</template>
<script>
	import axios from "axios";
	export default {
		name: "Dtgn",
		data() {
			return {
				lis: []
			};
		},
		methods: {
			ttt() {
				console.log(this.lis.list);
			}
		},
		mounted() {
			var _this = this;
			// axios({
			//   url: "http://www.baidu.com/api"
			// }).then(function(data) {
			//   _this.lis = data.data;
			//   console.log(_this.lis.list);
			// });
		}
	};
</script>
<style scoped>
	/* .bb{
font-size: 18px;
} */
	@import "dt.css";
</style>

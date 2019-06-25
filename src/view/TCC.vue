<template>
	<div>


		<van-button type="info" @click="showPopup">展示弹出层</van-button>

		<van-popup v-model="show" position="right" :style="{ height: '100%' }">马好歌马好歌马好歌马好歌马好歌</van-popup>
		<div class="bshare-custom">
			<div class="bsPromo bsPromo2"></div>
			<a title="分享到QQ空间" class="bshare-qzone"></a>
			<a title="分享到新浪微博" class="bshare-sinaminiblog"></a>
			<a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
		</div>
	</div>
</template>
<script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=1&amp;lang=zh"></script>
<script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>

<script>
	export default {
		name: 'TCC',
		data() {
			return {


				show: false
			}
		},
		methods: {
			showPopup() {
				this.show = true;
			}
		}
	}
</script>

<style>
</style>

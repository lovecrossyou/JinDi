<template>
	<view class="list-wrapper">
		<view class="picture" v-for="(item,index) in list" :key="index" @click="preView">
			<image :src="item" class="img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
					'http://qnimage.xiteng.com/logo.jpeg',
				]
			}
		},
		methods: {
			preView() {
				console.log('xxx');
				// 预览图片
				uni.previewImage({
					urls: this.list,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(res) {
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style>
	.list-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.picture {
		width: 20%;
	}

	.img {
		width: 100%;
		height: 120upx;
		overflow: hidden;
		
		border: solid 1upx #e1e1e1;
	}
</style>

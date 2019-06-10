<template>
	<view class="content">
		<image class="logo" src="/static/logo.jpeg"></image>

		<view class="main_items">
			<view class="main_item" @click="detail">
				规划图
			</view>

			<view class="main_item">
				效果图
			</view>

			<view class="main_item">
				实景图
			</view>
		</view>


		<!-- 添加 -->
		<view class="footer" @click="addcategory">
			添加类别
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '金地滨河风华'
			}
		},
		onLoad() {

		},
		methods: {
			detail(){
				uni.navigateTo({
					url:"/pages/list/list"
				})
			},
			addcategory(){
				uni.navigateTo({
					url:"/pages/addcategory/addcategory"
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		width: 100%;
		/* height: 400upx; */
	}

	.logo {
		height: 120upx;
		width: 120upx;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.main_items {
		margin-bottom: 50upx;
	}

	.main_item {
		font-size: 36upx;
		color: #8f8f94;

		height: 120upx;
		line-height: 120upx;
		text-align: center;

		border: dashed 1upx #8F8F94;
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		left: 0;
		right: 0;
		height: 80upx;
		line-height: 80upx;
		background-color: #6699CC;
		color: #FFFFFF;
	}
</style>

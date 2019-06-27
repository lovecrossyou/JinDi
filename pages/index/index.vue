<template>
	<view class="content">
		<image class="logo" src="/static/logo.jpeg"></image>

		<view class="main_items">
			<view class="main_item" v-for="(item,index) in list" :key="index" @click="detail(item)">
				{{item.name}}
			</view>
		</view>

		<!-- 添加 -->
		<view class="footer" @click="addcategory">
			添加类别
		</view>
	</view>
</template>

<script>
	// 
	import api from '@/util/api.js'

	export default {
		data() {
			return {
				list: []
			}
		},
		async onLoad() {
			this.initData();
		},
		methods: {
			async initData() {
				const res = await api.getCategories();
				this.list = res.data;
			},
			detail(item) {
				console.log('item ', item)
				uni.navigateTo({
					url: "/pages/list/list?category_id=" + item._id + '&category_name=' + item.name
				})
			},
			addcategory() {
				uni.navigateTo({
					url: "/pages/addcategory/addcategory"
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
		font-family: uniicons;
		height: 120upx;
		line-height: 120upx;
		text-align: center;

		border: dashed 1upx #8F8F94;
		margin-bottom: 10upx;
		
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
		font-family: uniicons;
	}
</style>

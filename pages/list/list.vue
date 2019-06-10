<template>
	<view>
		<view class="list-wrapper">
			<view class="picture" v-for="(item,index) in list" :key="index" @click="preView(index)">
				<image :src="item.picture_url" class="img"></image>
			</view>
		</view>
		<!-- 添加 -->
		<view class="footer" @click="add">
			添加
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js'

	export default {
		data() {
			return {
				category_id: null,
				category_name: '',
				list: []
			}
		},
		onLoad(opt) {
			const {
				category_id,
				category_name
			} = opt;
			this.category_name = category_name;
			this.category_id = category_id;

			this.initData();

			uni.setNavigationBarTitle({
				title: category_name +'列表'
			});
		},
		methods: {
			async initData() {
				const res = await api.getPictures(this.category_id);
				this.list = res.data;
			},
			add() {
				uni.navigateTo({
					url: "/pages/add/add?category_name=" + this.category_name + '&category_id=' + this.category_id
				})
			},
			preView(index) {
				// 预览图片
				uni.previewImage({
					current:index,
					indicator:'number',
					urls: this.list.map(item => item.picture_url),
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

	.footer {
		position: fixed;
		bottom: 0upx;
		left: 0;
		right: 0;
		height: 80upx;
		line-height: 80upx;
		background-color: #6699CC;
		color: #FFFFFF;
		text-align: center;
	}
</style>

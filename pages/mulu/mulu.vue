<template>
	<view class="main-bg">
		<uni-drawer :visible="drawer_show_flag">
			<view class="drawer-content" style="padding:30upx 0;">
				<view class="item-small">千亿金地</view>
				<view class="drawer-items">
					<view class="drawer-item" v-for="(item ,index) in drawer_items" :key="index" @click="goSetList">
						<image class="drawer-item-icon" src="" mode=""></image>
						<view class="drawer-item-title">
							{{item}}
						</view>
					</view>
				</view>
			</view>
		</uni-drawer>
		<view class="top-menu" >
			<view class="top-menu-left" @click="drawer_show">菜单</view>
			<view class="top-menu-right">添加</view>
		</view>
		<view class="content">
			<view class="item" @click="drawer_show">千亿金地</view>
			<view class="item" @click="drawer_show">东方风华</view>
			<view class="item" @click="drawer_show">世界滨河</view>
			<view class="item" @click="drawer_show">滨河风华</view>
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {
			uniDrawer
		},
		data(){
			return {
				drawer_show_flag:false,
				drawer_items:["精品风华系","布局全国15城"],
				items:[1,2,3,4,5,6]
			}
		},
		methods:{
			drawer_show(){
				this.drawer_show_flag = !this.drawer_show_flag;
			},
			goSetList(){
				uni.navigateTo({
					url:'/pages/setlist/setlist'
				})
			}
		}
	}
</script>

<style>
	.main-bg {
		background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561624672707&di=8cba209fc8db26a28ecc28415f15b17f&imgtype=0&src=http%3A%2F%2Fpic145.nipic.com%2Ffile%2F20171111%2F25059247_194106898038_2.jpg') 95% center no-repeat;
		background-size: 100% 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	
	.drawer-content{
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		background-color: #BDCAD3;
		height: 100%;
		
	}
	.drawer-items{
		padding:40upx 20upx 0 20upx;
		box-sizing: border-box;
		width: 100%;
	}
	
	.drawer-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 60upx;
		/* background-color: #5989B9; */
		width: 100%;
		margin-bottom: 10upx;
	}
	
	.drawer-item-icon{
		width: 20upx;
		height: 20upx;
		background-color:#999999;
		margin-right: 14upx;
		
	}
	.drawer-item-title{
		color: #FFFFFF;
		/* font-family: uniicons; */
		color: #FFFFFF;
		font-size: 26upx;
	}
	
	.top-menu{
		display: flex;
		flex-direction: row;
		height: 120upx;
		justify-content: space-between;
		padding: 20px 30upx;
		box-sizing: border-box;
		/* background-color: #E1E1E1; */
		align-items: center;
	}
	
	.top-menu-left{
		color: #FFFFFF;
		font-family: uniicons;
		/* background: #3C3E49; */
		padding: 40upx;
		box-sizing: border-box;
	}
	
	.top-menu-right{
		color: #FFFFFF;
		font-family: uniicons;
		/* background: #3C3E49; */
		padding: 40upx;
		box-sizing: border-box;
	}
	
	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		height: 90%;
		overflow-y: scroll;
		padding-bottom: 120upx;
		padding-top: 120upx;
		box-sizing: border-box;
	}
	
	.item{
		width: 60%;
		border: dashed 2upx #6699CC;
		height: 80upx;
		margin-top: 40upx;
		text-align: center;
		line-height: 80upx;
		font-family: uniicons;
	}
	
	.item-small{
		width: 60%;
		border: dashed 2upx #6699CC;
		height: 60upx;
		margin-top: 40upx;
		text-align: center;
		line-height: 60upx;
		font-family: uniicons;
		font-size: 28upx;
	}
</style>

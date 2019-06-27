<template>
	<view class="main main-bg">
		<view class="header">
			<view class="item">金银风华系</view>
		</view>

		<view class="content">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		 <view class="footer">
			 
			<view class="myitem">
				xxxx
			</view>
			
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			
			<view class="myitem">
				xxxx
			</view>
			
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
			<view class="myitem">
				xxxx
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
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
	

	
	.footer{
		position: fixed;
		bottom: 50upx;
		height: 140upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #BDCAD3;
		overflow-x: scroll;
	}
	
	.myitem{
		height: 90upx;
		width: 150upx;
		border: solid 1upx #8F8F94;
		background: pink;
		margin-left: 10upx;
		padding: 0 30upx;
		box-sizing: border-box;
		/* display: inline-block; */
	}
	
	.swiper{
		height: 45%;
		background-color: #5989B9;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		width: 100%;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		justify-content: center;
	}

	.content {
		width: 100%;
		height: 80%;
		/* background-color: #5989B9; */
		padding: 30upx;
		box-sizing: border-box;
		overflow-y: scroll;
	}



	.item {
		width: 60%;
		border: dashed 2upx #6699CC;
		height: 80upx;
		margin-top: 40upx;
		text-align: center;
		line-height: 80upx;
		font-family: uniicons;
	}
</style>

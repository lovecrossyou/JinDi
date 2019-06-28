<template>
	<view class="main main-bg">
		<view class="header">
			<view class="item">金银风华系</view>
		</view>

		<view class="content">
			<swiper :current="current" class="swiper" :indicator-dots="indicatorDots" :interval="interval" :duration="duration">
				<block v-for="(item ,index) in testimgs" :key="index">
					<swiper-item>
						<image :src="item.url" class="swiper-item" mode="widthFix"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>

		<view class="content-footer">
			<view>
				<ynGallery :galleryheight="120" bkstart="#000000" bkend="#000000" :imgviewwidth="85" :imgviewheight="90" :showbadge="false"
				 badegtype="trian" badegwidth="25" badegheight="25" :showdec="false" :images="testimgs" @clickimg="onclickimg">
				</ynGallery>
			</view>
		</view>
	</view>
</template>

<script>
	import ynGallery from '@/components/YnComponents/ynGallery/ynGallery.vue'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				sh: 0,
				title: 'Hello',
				current:0,
				testimgs: [{
						url: "http://p1.meituan.net/movie/d94e5c3054778f6f48bff3a813b0b7cd5300998.jpg@170w_235h_1e_1c",
					},
					{
						url: "http://p0.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/034069fc367db8a7d9644717b416cc2c332883.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@170w_235h_1e_1c"
					}
				]
			}
		},
		onLoad() {
			this.setimgs();
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
			},
			onclickimg(imgviewobj) {
				if (imgviewobj.index != undefined){
					this.current = imgviewobj.index;
				}
			},
			setimgs() {
				var imgs = [];
				for (let i in this.testimgs) {
					let imgobj = {
						dec: '', //图像描述信息
						badeg: '', //角标文字
						badegcolor: '#000000', //角标颜色
						url: '', //图源  
						dominant: '' //主色  
					};
					imgobj.url = this.testimgs[i].url;
					imgobj.dominant = this.retcolor(); //随机主色
					imgobj.dec = i; //描述  
					imgobj.badeg = i; //角标文字
					imgobj.badegcolor = (i % 2) == 0 ? 'red' : 'LimeGreen'; //角标颜色

					imgs.push(imgobj)
				}
				this.testimgs = imgs;
			},
			retcolor() {
				let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
				return color;
			}
		},
		components: {
			ynGallery
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

	.content-footer {
		text-align: center;
		height: 400upx;
	}

	.myitem {
		height: 90upx;
		width: 150upx;
		border: solid 1upx #8F8F94;
		background: pink;
		margin-left: 10upx;
		padding: 0 30upx;
		box-sizing: border-box;
		line-height: 90upx;
		/* display: inline-block; */
	}

	.swiper {
		height: 60%;
		background-color: #5989B9;
	}

	.main {}

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
		padding: 30upx;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.swiper-item {
		width: 100%;
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



	.logo {
		height: 100upx;
		width: 100upx;
		margin-top: 350upx;
		margin-bottom: 10upx;
		border-radius: 50upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>

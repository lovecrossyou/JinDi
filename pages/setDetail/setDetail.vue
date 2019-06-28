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
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				sh: 0,
				title: 'Hello',
				current:0,
				imgs: [
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMjg1LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9xdWFsaXR5LHFfOTAifQ%3D%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMjg0LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMTM0LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzQ5Mjk3LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzQ5Mzk3LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMjg1LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9xdWFsaXR5LHFfOTAifQ%3D%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMjg0LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzUwMTM0LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzQ5Mjk3LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D',
					'http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMTcwOTE4MTkzMzQ5Mzk3LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiIn0%3D'
				]
			}
		},
		computed:{
			testimgs(){
				return this.imgs.map(item=> {
					return {url:item}
				});
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
			},
			onclickimg(imgviewobj) {
				if (imgviewobj.index != undefined){
					this.current = imgviewobj.index;
				}
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
		height: 75%;
		/* background-color: #5989B9; */
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
		height: 75%;
		padding: 30upx;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.swiper-item {
		width: 100%;
		border-radius: 8upx;
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

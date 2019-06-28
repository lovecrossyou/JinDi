<template>
	<view class="main main-bg">
		<view class="header">
			<view class="item">金银风华系</view>
		</view>

		<view class="content">
			<view class="set-image-wrapper">
				<block v-for="(item,index) in items" :key="index">
					<image @click="goDetail" :src="item" class="set-image"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [
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
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/setDetail/setDetail'
				})
			},

		},

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

	.set-image-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		
	}

	.set-image {
		width: 47%;
		height: 200upx;
		/* background: #8F8F94; */
		border: solid 2upx #5989B9;
		margin-bottom: 30upx;
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
</style>

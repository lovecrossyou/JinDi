<template>
	<view>
		<robby-image-upload fileKeyName="file" v-model="imageList" @delete="deleteImage" @add="uploadImage"></robby-image-upload>

		<!-- 添加 -->
		<view class="footer" @click="add">
			确认添加
		</view>
	</view>
</template>

<script>
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue'
	import {
		uploadBaseUrl
	} from "@/util/api.js";
	import api from '@/util/api.js'

	export default {
		data() {
			return {
				enableDel: false,
				enableAdd: false,
				enableDrag: false,
				limitNumber: 8,
				imageList: [],
				imageUrls:[]
			}
		},
		components: {
			robbyImageUpload
		},
		onLoad(opt) {
			const {
				category_id,
				category_name
			} = opt;
			this.category_name = category_name;
			this.category_id = category_id;
			uni.setNavigationBarTitle({
				title: '添加'+category_name
			});
		},
		methods: {
			deleteImage: function(e) {
				console.log(e)
			},
			uploadImage: function(e) {
				let that = this;
				const {
					currentImages,
					allImages
				} = e;
				console.log('allImages ', allImages);
				currentImages.forEach(file => {
					api.uploader(file, res => {
						console.log('res ', res);
						if (res.status === 1) {
							that.imageUrls.push(res.image_path);
						}
					})
				})
			},
			add(){
				this.imageUrls.forEach(async url=>{
					const res = await api.addPicture({
						category_name:this.category_name,
						category_id:this.category_id,
						picture_url: url
					})
				});
				uni.navigateBack();
			}
		}
	}
</script>

<style>
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

<template>
	<view class="main">
		<uniInput :before="'填写分类名称'" :after="'分类名称'" :name="'invoice_title'" :value="value" @input="input"></uniInput>
		<button type="primary" plain="true" size="default" class="btn-add" @click="addClick">添加</button>
	</view>
</template>

<script>
	import uniInput from '@/components/hnfly-input/uni-input.vue';
	import api from '@/util/api.js'

	export default {
		data() {
			return {
				value:''
			}
		},
		methods: {
			input: function(e) {
				this.value = e.detail.value;
			},
			async addClick(){
				if(this.value.length===0){
					uni.showToast({
						title:"请输入名称"
					})
					return;
				}
				const res = await api.addCategory({
					name:this.value
				})
				uni.navigateBack({					
				});
			}
		},
		components: {
			uniInput
		}
	}
</script>

<style>
.main{
	width: 100%;
}

.btn-add{
	margin-top: 20upx;
}
</style>

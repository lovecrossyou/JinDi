import Fly from 'flyio/dist/npm/wx'
import service from "../service"
const request = new Fly()
const baseURL = 'http://47.94.169.143:8006'


request.config.baseURL = baseURL

const errorPrompt = (err) => {
	console.log('errorPrompt ',err);
	uni.showToast({
		title: err.data.message || 'fetch data error.',
		icon: 'none'
	})
}

request.interceptors.request.use((request) => {
	request.headers["accessToken"] = service.getToken();
	uni.showLoading();
	return request
})

request.interceptors.response.use((response, promise) => {
	uni.hideLoading()
	
	console.log('response.data ###', response.data);
	if (!(response.data.status === 1)) {
		if (response.data.status === "-999") {
			//需要登录权限
			this.$store.commit("setLogin", false)
			uni.redirectTo({
				url: '/pages/login/enter'
			});
		} else {
			errorPrompt(response)
		}
	}
	return promise.resolve(response.data)
}, (err, promise) => {
	uni.hideLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request

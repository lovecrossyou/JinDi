import request from './request'
import Fly from 'flyio/dist/npm/wx'

export const uploadBaseUrl = "http://47.94.169.143:8006"
const searchBaseUrl = "http://47.94.169.143:8006"

const api = {
	addCategory: (params) => request.post("/category_m/add", params),
	getCategories: category_id => request.get("/category_m/list"),
	addPicture: (params) => request.post("/picture/add", params),
	getPictures: category_id => request.get("/picture/list?category_id="+category_id),

	//上传
	uploader: (file, cb) => {
		uni.uploadFile({
			url: uploadBaseUrl + '/upload',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				cb(data);
			}
		});
	},
	registePush: (data,cb)=>{
		uni.request({
			url: pushBaseUrl + '/push/bindUser',
			data: data,
			method: 'POST',
			success: (res) => {
				cb(res.data);
			}
		});
	}
	

}
export default api

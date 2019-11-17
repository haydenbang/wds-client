import axios from 'axios';
import { DEV_WAS_DOMAIN } from '../shared/Contants';

axios.defaults.baseURL = `http://${DEV_WAS_DOMAIN}/api/v1`;

export const getImages = () => axios.get('/images');

export const uploadImage = (formData) => axios.post('/images/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
    }).then(res => {
        console.log(res.data);
        alert("이미지 업로드 완료되었습니다.");
    }).catch(err => {
        console.log(err.data);
        alert("이미지 업로드 실패하였습니다.")
    });

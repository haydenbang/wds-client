// action 타입 정의
export const ImageTypes = {
  GET_IMAGE_LIST_REQUEST: 'imageReducers/get_image_list_request',
  GET_IMAGES_SUCCESS: 'imageReducers/get_images_success',
  UPLOAD_IMAGE: 'imageReducers/upload_image',
};

// 액션 생성 함수 정의
// 이 액션타입은 사가에서만 사용되고 리듀서 함수에서는 사용되지 않는다.
export const getImageList = () => ({
  type: ImageTypes.GET_IMAGE_LIST_REQUEST,
});

// 액션 생성 함수 정의
export const getImageListSuccess = ({ images }) => ({
  type: ImageTypes.GET_IMAGES_SUCCESS,
  payload: {
    images,
  },
});

// export const createUser = ({}) => ({
//   type: UserTypes.CREATE_USER,
//   payload: {},
// });

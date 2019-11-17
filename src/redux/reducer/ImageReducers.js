import { UserTypes } from '../actions';

// 초기상태 정의
const INITIAL_STATE = {
  users: [],
};

// 리듀서 작성
export default function imageReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserTypes.GET_IMAGES_SUCCESS: {
      return {
        users: action.payload.images,
      };
    }
    default: {
      return state;
    }
  }
}

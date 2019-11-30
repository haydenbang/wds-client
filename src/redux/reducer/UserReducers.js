import { UserTypes } from "../actions";

// 초기상태 정의
const INITIAL_STATE = {
  users: [],
  toggle_status: false,
  user: {}
};

// 리듀서 작성
export default function userReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserTypes.GET_USERS_SUCCESS: {
      return {
        users: action.payload.users
      };
    }
    case UserTypes.GET_UESR_SUCCESS: {
      return {
        user: action.payload.user
      };
    }
    default: {
      return state;
    }
  }
}

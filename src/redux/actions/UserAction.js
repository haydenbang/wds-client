// action 타입 정의
export const UserTypes = {
  GET_USERS_LIST_REQUEST: 'userReducers/get_users_list_request',
  GET_USERS_SUCCESS: 'userReducers/get_users_success',
  CREATE_USER_REQUEST: 'userReducers/create_user',
};

// 액션 생성 함수 정의 : 외부서버에서 userlist를 불러온다.
// 이 액션타입은 사가에서만 사용되고 리듀서 함수에서는 사용되지 않는다.
export const getUserList = () => ({
  type: UserTypes.GET_USERS_LIST_REQUEST,
});

// 액션 생성 함수 정의 : load된 userlist를 렌더링
export const getUserListSuccess = ({ users }) => ({
  type: UserTypes.GET_USERS_SUCCESS,
  payload: {
    users,
  },
});

export const createUser = (user) => ({
  type: UserTypes.CREATE_USER_REQUEST,
  payload: {
    user,
  },
});

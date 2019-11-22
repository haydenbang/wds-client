import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

// workerSaga
export function* getUsers() {
  try {
    // api 호출
    const result = yield call(api.getUsers);
    // put : dispatch 역할
    yield put(
      actions.getUserListSuccess({
        users: result.data.result,
      }),
    );
  } catch (e) {
    console.log(`getUsers() error : ${e}`);
  }
}

// watch saga
function* watchGetUsers() {
  yield takeEvery(actions.UserTypes.GET_USERS_LIST_REQUEST, getUsers);
}

export function* addUser(action) {
  console.log(action);
  try {
    // const result = yield call(api.createUser);
    // yield put(actions.createUser({ result }));
    yield call(api.createUser, { user: action.payload.user });
  } catch (e) {
    console.log(`UserSaga : addUser() error : ${e}`);
  }
}

function* watchAddUser() {
  yield takeLatest(actions.UserTypes.CREATE_USER_REQUEST, addUser);
}

const UsersSaga = [fork(watchGetUsers), fork(watchAddUser)];

export default UsersSaga;

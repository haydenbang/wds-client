import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

// workerSaga
export function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    // console.log(result);
    yield put(
      actions.getUserListSuccess({
        users: result.data.result,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

// watch saga
// 특정 리덕스
function* watchGetUsers() {
  yield takeEvery(actions.UserTypes.GET_USERS_LIST_REQUEST, getUsers);
}

const UsersSaga = [fork(watchGetUsers)];

export default UsersSaga;

import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

// workerSaga
export function* getImages() {
  try {
    const result = yield call(api.getImages);
    yield put(
      actions.getImageListSuccess({
        images: result.data.result,
      }),
    );
  } catch (e) {
    console.log(`getImages() error : ${e}`);
  }
}

// watch saga
function* watchGetImages() {
  yield takeEvery(actions.ImageTypes.GET_IMAGE_LIST_REQUEST, getImages);
}

const UsersSaga = [fork(watchGetImages)];

export default UsersSaga;

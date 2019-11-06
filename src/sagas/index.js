import { all } from 'redux-saga/effects';
import UsersSaga from './Users';

// forked process를 병렬로 생성 해 준다.
export default function* rootSaga() {
  yield all([...UsersSaga]);
}

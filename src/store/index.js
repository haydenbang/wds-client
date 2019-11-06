import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import rootSaga from '../sagas';

// 리덕스 상태 모니터링 chrome extension 사용하기 위해서
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// saga middleware 생성
const sagaMiddleware = createSagaMiddleware(devTools);

export default function configureStore() {
  // store를 생성
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  // root Saga 실행
  sagaMiddleware.run(rootSaga);

  return store;
}

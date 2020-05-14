import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../sagas/index'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
  }) : compose; // thiết lập redux devtool

const sagaMiddleWare = createSagaMiddleWare();

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleWare]; // danh sach cac middleware muốn sử dụng
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleWare.run(rootSaga); 
  return store;
};


export default configureStore;

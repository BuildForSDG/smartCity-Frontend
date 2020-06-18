import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas'
import createReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (initialState) => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = {
    ...createStore(createReducer(), initialState, composeWithDevTools(applyMiddleware(sagaMiddleWare))),
    runSaga: sagaMiddleWare.run
  };
  store.asyncReducers = {};

  store.injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) {
      return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    //return store;
  };
  return store;
};

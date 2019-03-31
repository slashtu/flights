import {
  createStore as createReduxStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'modules/reducer';

import mySaga from 'modules/saga';

const sagaMiddleware = createSagaMiddleware();

export const createStore = (initialState = {}) => {
  const middleware = [sagaMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createReduxStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(mySaga);

  return store;
};

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from 'modules/flights';

const reducers = {
  flights,
  form: formReducer
};

export default combineReducers(reducers);

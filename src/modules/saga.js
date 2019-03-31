import { all } from 'redux-saga/effects';
import { flightSaga } from 'modules/flights';

export default function* rootSaga() {
  yield all([...flightSaga]);
}

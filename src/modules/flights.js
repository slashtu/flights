import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import map from 'lodash/map';

export const FETCH_FLIGHTS = 'flights/FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCEEDED = 'flights/FETCH_FLIGHTS_SUCCEEDED';
export const FETCH_FLIGHTS_FAILED = 'flights/FETCH_FLIGHTS_FAILED';

const initialState = { cheap: [], business: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
    case FETCH_FLIGHTS_FAILED:
      return state;
    case FETCH_FLIGHTS_SUCCEEDED:
      const { cheap, business } = action.payload;
      return { cheap, business };
    default:
      return state;
  }
};

export const fetchFlights = types => {
  return {
    type: FETCH_FLIGHTS,
    payload: { types }
  };
};

const Api = {
  fetchFlights: type => {
    return axios.get(`/api/${type}`).then(r => r.data);
  }
};

const formatBusinessFlights = flights => {
  return map(flights, f => {
    const departureTime = f.departure;
    const arrivalTime = f.arrival;
    const id = f.uuid;
    const flight = f.flight;
    const [_, departure, arrival] = /(.*) -> (.*)/g.exec(flight);

    return {
      id,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      type: 'business'
    };
  });
};

const formatCheapFlights = flights => {
  return map(flights, f => {
    return {
      id: `${f.id}`,
      departure: f.departure,
      arrival: f.arrival,
      departureTime: new Date(f.departureTime).toISOString(),
      arrivalTime: new Date(f.arrivalTime).toISOString(),
      type: 'cheap'
    };
  });
};

function* fetchFlightsSaga(action) {
  try {
    const { types } = action.payload;
    const fetcher = types.map(t => call(Api.fetchFlights, t));
    const [cheap, business] = yield all(fetcher);

    const formatedCheap = formatCheapFlights(cheap);
    const formatedBusiness = formatBusinessFlights(business);

    yield put({
      type: FETCH_FLIGHTS_SUCCEEDED,
      payload: { cheap: formatedCheap, business: formatedBusiness }
    });
  } catch (e) {
    yield put({ type: FETCH_FLIGHTS_FAILED, message: e.message });
  }
}

export const flightSaga = [takeEvery(FETCH_FLIGHTS, fetchFlightsSaga)];

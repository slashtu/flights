import { createSelector } from 'reselect';
import format from 'date-fns/format';
import isSameDay from 'date-fns/is_same_day';
import flow from 'lodash/fp/flow';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import includes from 'lodash/includes';

import { selectFilterCondition } from 'selectors/form';

export const selectFlights = state => state.flights;

export const selectFlightsIsLoading = createSelector(
  selectFlights,
  flights => flights.isLoading
);

export const selectCheapFlights = createSelector(
  selectFlights,
  flights => flights.cheap
);

export const selectBusinessFlights = createSelector(
  selectFlights,
  flights => flights.business
);

export const selectMergedFlights = createSelector(
  [selectCheapFlights, selectBusinessFlights],
  (cheap, business) => {
    return [...cheap, ...business];
  }
);

export const selectFilteredFlights = createSelector(
  [selectMergedFlights, selectFilterCondition],
  (flights, condition) => {
    const keys = Object.keys(condition);
    return flow(
      filter(f => {
        return keys.every(k => {
          let passed = true;

          if (k === 'id') {
            passed = includes(f.id, condition.id);
          }

          if (k === 'type') {
            passed =
              condition['type'] === 'all' || f['type'] === condition['type'];
          }

          if (k === 'departure') {
            passed = includes(f.departure, condition.departure);
          }

          if (k === 'arrival') {
            passed = includes(f.arrival, condition.arrival);
          }

          if (k === 'date') {
            passed =
              isSameDay(f.departureTime, condition.date) ||
              isSameDay(f.arrivalTime, condition.date);
          }

          return passed;
        });
      }),
      map(f => {
        const departureTime = format(
          new Date(f.departureTime),
          'YYYY-MM-DD HH:mm'
        );

        const arrivalTime = format(new Date(f.arrivalTime), 'YYYY-MM-DD HH:mm');

        return { ...f, departureTime, arrivalTime };
      })
    )(flights);
  }
);

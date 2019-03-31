import { createSelector } from 'reselect';

export const selectFlights = state => state.flights;

export const selectCheapFlights = createSelector(
  selectFlights,
  flights => flights.cheap
);

export const selectBusinessFlights = createSelector(
  selectFlights,
  flights => flights.business
);

export const selectFormatedFlights = createSelector(
  [selectCheapFlights, selectBusinessFlights],
  (cheap, business) => {
    return [...cheap, ...business];
  }
);

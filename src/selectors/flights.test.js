import { selectFlights } from './flights';

test('adds 1 + 2 to equal 3', () => {
  const state = {
    flights: [1, 2, 3]
  };
  expect(selectFlights(state)).toHaveLength(3);
});

import { selectMergedFlights, selectFilteredFlights } from '../flights';

describe('Selector flights', () => {
  describe(`#selectMergedFlights`, () => {
    it('returns merged flights', () => {
      const state = {
        flights: {
          cheap: [
            {
              id: '123',
              type: 'cheap',
              departure: 'Taipei',
              arrival: 'Singapore'
            }
          ],
          business: [
            {
              id: '123-321',
              type: 'business',
              departure: 'Taipei',
              arrival: 'Singapore'
            }
          ]
        }
      };

      const merged = [
        {
          id: '123',
          type: 'cheap',
          departure: 'Taipei',
          arrival: 'Singapore'
        },
        {
          id: '123-321',
          type: 'business',
          departure: 'Taipei',
          arrival: 'Singapore'
        }
      ];
      expect(selectMergedFlights(state)).toEqual(merged);
    });
  });
  describe(`#selectFilteredFlights`, () => {
    it('get cheap flights', () => {
      const state = {
        form: {
          filter: {
            values: { type: 'cheap' }
          }
        },
        flights: {
          cheap: [
            {
              id: '123',
              type: 'cheap',
              departure: 'Taipei',
              arrival: 'Singapore',
              departureTime: new Date('2019-04-01'),
              arrivalTime: new Date('2019-04-02')
            }
          ],
          business: [
            {
              id: '123-321',
              type: 'business',
              departure: 'Taipei',
              arrival: 'Singapore',
              departureTime: new Date('2019-04-01'),
              arrivalTime: new Date('2019-04-02')
            }
          ]
        }
      };

      const cheap = [
        {
          id: '123',
          type: 'cheap',
          departure: 'Taipei',
          arrival: 'Singapore',
          departureTime: '2019-04-01 08:00',
          arrivalTime: '2019-04-02 08:00'
        }
      ];
      expect(selectFilteredFlights(state)).toEqual(cheap);
    });
  });
});

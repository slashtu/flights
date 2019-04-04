import ApiAgent from './ApiAgent';

export const fetchFlights = type => {
  return ApiAgent.get(`/api/${type}`);
};

export default {
  fetchFlights
};

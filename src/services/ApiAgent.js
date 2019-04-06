import axios from 'axios';

export default {
  get: url => {
    return axios.get(url).then(r => r.data);
  }
};

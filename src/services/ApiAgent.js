import axios from 'axios';

export default {
  get: url => {
    console.log(url);
    return axios.get(url).then(r => r.data);
  }
};

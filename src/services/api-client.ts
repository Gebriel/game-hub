import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e1c229bbe260477c8d5991b1b8d6b525',
  },
});

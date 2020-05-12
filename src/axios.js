import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6969',
  headers: { Authorization: 'JWT needed' },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      error.customMessage =
        'Sorry, something went wrong! We are working on it and we will get it fixed as soon as we can.';
    } else if (error.response && error.response.status === 500) {
      error.customMessage =
        'Sorry, something went wrong! We are working on it and we will get it fixed as soon as we can.';
    }
    return Promise.reject(error);
  }
);

export default instance;

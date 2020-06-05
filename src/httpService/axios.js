import axios from 'axios';
import { getJWTWithExpiry } from '../utils/jwt-manager/JwtManager';
import { apiEndpoint } from '../apiEndpointConfig';

const jwt = getJWTWithExpiry('jwt');

const instance = axios.create({
  baseURL: `${apiEndpoint}`,
  headers: { Authorization: `${jwt ? jwt : 'Not authorized'}` },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      error.customMessage = 'Network error';
    } else if (error.response && error.response.status === 500) {
      error.customMessage =
        'Sorry, something went wrong! We are working on it and we will get it fixed as soon as we can.';
    }
    return Promise.reject(error);
  }
);

export default instance;

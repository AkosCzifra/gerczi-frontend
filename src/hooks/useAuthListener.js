import { useState, useEffect } from 'react';
import { getJWTWithExpiry } from '../utils/jwt-manager/JwtManager';
import axios from '../httpService/axios';

export default function useAuthListener() {
  const [user, setUser] = useState();
  const jwt = getJWTWithExpiry('token');

  useEffect(() => {
    const getUser = async () => {
      try {
        const promise = await axios.get('/auth/get-user');

        if (promise && promise.data) {
          setUser(promise.data.userData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (jwt) getUser();
  }, [jwt]);

  return user;
}

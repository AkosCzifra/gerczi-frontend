import React, { createContext, useState } from 'react';

import { setJWTWithExpiry, getJWTWithExpiry, deleteJwt } from '../utils/jwt-manager/JwtManager';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const jwtFromLocal = getJWTWithExpiry('token');
  const [jwt, setJwt] = useState(jwtFromLocal);

  const adjustJwt = (jwt) => {
    setJWTWithExpiry('token', jwt, 86400000);
    setJwt(jwt);
  };

  const logout = () => {
    setJwt(null);
    deleteJwt('token');
    window.location.replace('/');
  };

  return (
    <AuthContext.Provider value={{ jwt: jwt, adjustJwt: adjustJwt, logout: logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

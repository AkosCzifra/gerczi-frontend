import React, { useEffect } from 'react';

import axios from '../../axios';

const Home = () => {
  useEffect(() => {
    const getTestRequest = async () => {
      try {
        const response = await axios.get('/');
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getTestRequest();
  }, []);

  return <h1>Home</h1>;
};

export default Home;

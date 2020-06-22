import React, { useEffect, useState } from 'react';

import axios from '../../httpService/axios';

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/auth/get-user');
        setUser(response.data.userData);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  if (!user) return <div>loading...</div>;
  console.log(user);
  return (
    <React.Fragment>
      <div>{`hello ${user.firstName}`}</div>
    </React.Fragment>
  );
};

export default Profile;

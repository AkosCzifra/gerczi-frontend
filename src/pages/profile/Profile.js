import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import axios from '../../httpService/axios';
import PersonalData from './personal-data/PersonalData';
import OrderedItems from './ordered-items/OrderedItems';
import ProfileBadge from '@material-ui/icons/AccountCircle';
import MainProfile from './main-profile/MainProfile';
import { PageCover } from '../../styled/styledComponents';

const CartTitle = styled.h1`
  position: absolute;
  top: 45%;
  left: 43%;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;
`;

const ProfileContainer = styled.div`
  margin-top: 24px;
  min-height: 90vh;
  width: 90%;
  display: grid;
  grid-template-columns: 20% 80%;
  column-gap: 12px;
  justify-items: center;
`;

const SideMenuContainer = styled.div`
  position: sticky;
  top: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  width: 70%;
  height: 200px;
  background-color: #121212;
  border-radius: 10px;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 18px;
    color: #886735;

    ::after {
      content: '';
      display: block;
      margin: 0 auto;
      width: 60%;
      padding-top: 12px;
      border-bottom: 2px solid #886735;
    }
  }
`;

const SideMenuLinks = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: #908870;
  margin-bottom: 6px;
`;

const ProfileIcon = styled(ProfileBadge)`
  color: #886735;
  width: 2rem !important;
  height: 2rem !important;
  margin-bottom: 6px;
`;

const Profile = (props) => {
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

  return (
    <React.Fragment>
      <PageCover height="200px" image="/images/cart_cover.jpg" positionY="center">
        <CartTitle>Your profile</CartTitle>
      </PageCover>
      <React.Fragment>
        <ProfileContainer>
          <SideMenuContainer>
            <ProfileIcon />
            <h1>{`Hello ${user.firstName}!`}</h1>
            <SideMenuLinks to={`${props.match.url}/personal-data`}>Personal data</SideMenuLinks>
            <SideMenuLinks to={`${props.match.url}/ordered-items`}>Ordered items</SideMenuLinks>
          </SideMenuContainer>
          <Switch>
            <Route exact path="/profile" component={MainProfile} />
            <Route
              path={`${props.match.url}/personal-data`}
              render={(props) => <PersonalData {...props} user={user} />}
            />
            <Route path={`${props.match.url}/ordered-items`} component={OrderedItems} />
          </Switch>
        </ProfileContainer>
      </React.Fragment>
    </React.Fragment>
  );
};

export default withRouter(Profile);

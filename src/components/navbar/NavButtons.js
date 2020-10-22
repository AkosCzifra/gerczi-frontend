import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import ProfileIcon from '@material-ui/icons/Person';
import * as ROUTES from '../../constants/routes';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

const RouterNavLink = styled(NavLink)`
  position: relative;
  color: #908870;
  background-color: inherit;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 6px 6px 6px;
  border: none;
  margin-right: 8px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #886735;
    cursor: pointer;
  }

  &:active {
    color: #886735;
  }
`;

const LogoutButton = styled.button`
  position: relative;
  color: #908870;
  background-color: inherit;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 6px 6px 6px;
  border: none;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #886735;
    cursor: pointer;
  }

  &:before {
    content: '';
    background: #886735;
    display: block;
    height: 16px;
    position: absolute;
    top: 8px;
    left: -8px;
    width: 1px;
  }
`;

const ProfileBadge = styled(ProfileIcon)`
  margin-right: 15px;
  color: #908870;
  width: 30px !important;
  height: 30px !important;
  text-decoration: none;
`;

const NavButtons = ({ isLoggedIn, logout, close }) => {
  return (
    <ButtonsWrapper>
      {isLoggedIn ? (
        <React.Fragment>
          <Link to={ROUTES.PROFILE} onClick={close}>
            <ProfileBadge />
          </Link>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RouterNavLink to={ROUTES.LOGIN}>Login</RouterNavLink>
          <RouterNavLink to={ROUTES.SIGNUP}>Signup</RouterNavLink>
        </React.Fragment>
      )}
    </ButtonsWrapper>
  );
};

export default NavButtons;

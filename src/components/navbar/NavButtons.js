import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import ProfileIcon from '@material-ui/icons/Person';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Button = styled.button`
  position: relative;
  color: #908870;
  border-radius: 10px;
  background-color: inherit;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 8px 6px 6px 6px;
  border: none;
  margin-right: 8px;
  text-transform: uppercase;

  &:hover {
    color: #886735;
    cursor: pointer;
  }

  ${({ isLoggedIn }) =>
    isLoggedIn &&
    css`
      &::before {
        content: '';
        background: #886735;
        display: block;
        height: 16px;
        position: absolute;
        top: 8px;
        left: -8px;
        width: 1px;
      }
    `}
`;

const ProfileBadge = styled(ProfileIcon)`
  margin-right: 15px;
  color: #908870;
  width: 30px !important;
  height: 30px !important;
  text-decoration: none;
`;

const NavButtons = ({ clickHandler, isLoggedIn, logout, close }) => {
  return (
    <ButtonsWrapper>
      {isLoggedIn ? (
        <React.Fragment>
          <Link to="/profile" onClick={close}>
            <ProfileBadge />
          </Link>
          <Button isLoggedIn={isLoggedIn} onClick={logout}>
            Logout
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Button name={'login'} onClick={(e) => clickHandler(e)}>
            Login
          </Button>
          <Button name={'signup'} onClick={(e) => clickHandler(e)}>
            Signup
          </Button>
        </React.Fragment>
      )}
    </ButtonsWrapper>
  );
};

export default NavButtons;

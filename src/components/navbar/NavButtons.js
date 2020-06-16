import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Button = styled.button`
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
`;

const NavButtons = ({ clickHandler, isLoggedIn, logout }) => {
  return (
    <ButtonsWrapper>
      {isLoggedIn ? (
        <Button onClick={logout}>Logout</Button>
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

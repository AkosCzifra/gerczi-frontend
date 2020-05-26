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
  border: 1px solid #141414;
  margin-right: 8px;
  text-transform: uppercase;

  &:hover {
    color: #886735;
    border: 1px solid #886735;
    cursor: pointer;
  }
`;

const NavButtons = () => {
  return (
    <ButtonsWrapper>
      <Button>Login</Button>
      <Button>Signup</Button>
    </ButtonsWrapper>
  );
};

export default NavButtons;

import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;

  @media (min-width: 700px) {
    flex-direction: row;
    margin-right: 24px;
  }
`;

const NavLinks = ({ navbarHandler }) => {
  return (
    <NavLinksContainer>
      <NavItem url="/" navbarHandler={navbarHandler}>
        Home
      </NavItem>
      <NavItem url="/menu" navbarHandler={navbarHandler}>
        Menu
      </NavItem>
      <NavItem url="/contact" navbarHandler={navbarHandler}>
        Contact
      </NavItem>
      <NavItem url="/about" navbarHandler={navbarHandler}>
        About
      </NavItem>
    </NavLinksContainer>
  );
};

export default NavLinks;

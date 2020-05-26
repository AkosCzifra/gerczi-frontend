import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { CartContext } from '../../context/CartContext';
import NavLinks from './NavLinks';
import MobileMenuToggler from '../mobile-menu-toggler/MobileMenuToggler';
import NavIcons from './NavIcons';
import NavButtons from './NavButtons';
import Logo from '../logo/Logo';

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  padding: 0 18px;
  width: 100%;
  box-sizing: border-box;
  background: #141414;
  height: 60px;
  transition: all ease-in-out 350ms;

  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: 0px -2px 10px 0px #886735;
    `}
`;

const NavItemsWrapper = styled.div`
  margin-top: 60px;
  background-color: #141414;

  @media (min-width: 700px) {
    margin-top: 0;
    display: flex;
  }
`;

const NavBar = ({ isOpen, isMobileDevice, menuHandler }) => {
  const { getSumQuantity } = useContext(CartContext);

  let renderNavItems;
  if (isMobileDevice) {
    renderNavItems = (
      <MobileMenuToggler isOpen={isOpen} clickHandler={menuHandler} />
    );
  } else {
    renderNavItems = (
      <React.Fragment>
        <NavItemsWrapper>
          <NavLinks />
          <NavIcons quantity={getSumQuantity()} />
        </NavItemsWrapper>
        <NavButtons />
      </React.Fragment>
    );
  }

  return (
    <NavHeader isOpen={isOpen}>
      <Logo />
      {renderNavItems}
    </NavHeader>
  );
};

export default NavBar;

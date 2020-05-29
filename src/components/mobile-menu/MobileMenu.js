import React, { useContext } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { CartContext } from '../../context/CartContext';
import NavLinks from '../navbar/NavLinks';
import NavIcons from '../navbar/NavIcons';
import NavButtons from '../navbar/NavButtons';

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 499;
  background-color: #141414;
  transition: all ease-in-out 350ms;

  height: ${({ state }) => (state === 'entered' ? 100 + 'vh' : 0)};

  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

const animationTiming = {
  enter: 0,
  exit: 350,
};

const MobileMenu = ({ isOpen, navbarHandler, authButtonsHandler }) => {
  const { getSumQuantity } = useContext(CartContext);

  return (
    <Transition mountOnEnter unmountOnExit in={isOpen} timeout={animationTiming}>
      {(state) => (
        <MobileMenuContainer state={state}>
          <NavIcons quantity={getSumQuantity()} navbarHandler={navbarHandler} />
          <NavLinks navbarHandler={navbarHandler} />
          <NavButtons clickHandler={authButtonsHandler} />
        </MobileMenuContainer>
      )}
    </Transition>
  );
};

export default MobileMenu;

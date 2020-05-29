import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

const BackdropBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 501;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: all 0.4s ease-out;

  opacity: ${({ state }) => {
    switch (state) {
      case 'entered':
        return 1;
      case 'exiting':
        return 0;
      default:
        return 0;
    }
  }};
`;

const animationTiming = {
  enter: 0,
  exit: 400,
};

const Backdrop = ({ clickhandler, isOpen }) => {
  return (
    <Transition mountOnEnter unmountOnExit in={isOpen} timeout={animationTiming}>
      {(state) => <BackdropBackground state={state} onClick={clickhandler} />}
    </Transition>
  );
};

export default Backdrop;

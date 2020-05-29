import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 502;
  left: 5%;
  top: 10%;
  width: 90%;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);

  animation: ${({ state }) => {
      if (state === 'entering') {
        return 'openModal';
      } else if (state === 'exiting') {
        return 'closeModal';
      }
    }}
    1s ease-in-out forwards;

  @keyframes openModal {
    0% {
      opacity: 0.3;
      transform: translateY(-100%);
    }
    50% {
      opacity: 0.8;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes closeModal {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.8;
      transform: translateY(30%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  @media (min-width: 500px) {
    left: 10%;
    width: 80%;
  }

  @media (min-width: 700px) {
    left: 20%;
    width: 60%;
  }

  @media (min-width: 1000px) {
    top: 15%;
    left: 30%;
    width: 40%;
  }
`;

const ModalHeader = styled.header`
  padding: 20px 14px 12px 12px;
  background-color: #141414;
  border-bottom: 2px solid #886735;
`;

const ModalTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #886735;
  text-transform: uppercase;
  letter-spacing: 0.09em;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 8px 12px 8px;
  text-align: center;
  font-size: 1rem;
`;

const Modal = (props) => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.isOpen} timeout={1000}>
      {(state) => (
        <ModalContainer state={state}>
          <ModalHeader>
            <ModalTitle>{props.title}</ModalTitle>
          </ModalHeader>
          <ModalContent>{props.children}</ModalContent>
        </ModalContainer>
      )}
    </Transition>
  );
};

export default Modal;

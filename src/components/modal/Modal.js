import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  left: 20%;
  top: 20%;
  width: 60%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 10px 10px 20px -5px rgba(0, 0, 0, 0.75);
`;

const ModalHeader = styled.header`
  border-bottom: 2px solid black;
`;

const ModalTitle = styled.h1`
  font-size: 1.5rem;
  margin: 1rem;
  text-align: center;
`;

const ModalContent = styled.div`
  padding: 3rem;
  text-align: center;
  font-size: 1rem;
`;

const ModalActions = styled.div`
  border-top: 2px solid black;
  padding: 1rem;
  text-align: center;
`;

const ModalButton = styled.button`
  padding: 5px;
  background-color: grey;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
`;

const Modal = (props) => {
  return (
    <ModalContainer>
      <ModalHeader>
        <ModalTitle>{props.title}</ModalTitle>
      </ModalHeader>
      <ModalContent>{props.children}</ModalContent>
      <ModalActions>
        <ModalButton onClick={() => window.location.reload()}>
          Try again
        </ModalButton>
      </ModalActions>
    </ModalContainer>
  );
};

export default Modal;

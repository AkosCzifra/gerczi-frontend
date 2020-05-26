import React from 'react';
import styled, { css } from 'styled-components';

const IconContainer = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
`;

const TopLine = styled.span`
  position: absolute;
  top: 23%;
  left: 12.5%;
  width: 75%;
  height: 1.6px;
  background-color: #886735;
  transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(45deg);
      top: 48%;
    `}
`;

const MiddleLine = styled(TopLine)`
  top: 48%;
  opacity: 1;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-45deg);
      opacity: 0;
      top: 48%;
    `}
`;

const BottomLine = styled(TopLine)`
  top: 75%;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-45deg);
      top: 48%;
    `}
`;

const MobileMenuToggler = ({ isOpen, clickHandler }) => {
  return (
    <IconContainer onClick={clickHandler}>
      <TopLine isOpen={isOpen} />
      <MiddleLine isOpen={isOpen} />
      <BottomLine isOpen={isOpen} />
    </IconContainer>
  );
};

export default MobileMenuToggler;

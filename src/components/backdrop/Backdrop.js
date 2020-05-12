import React from 'react';
import styled from 'styled-components';

const BackdropBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 499;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

const Backdrop = ({ clickhandler }) => {
  return <BackdropBackground onClick={clickhandler} />;
};

export default Backdrop;
